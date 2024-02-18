from flask import Flask, request, jsonify
import json
from flask_cors import CORS
from ListGenration import get_feedstuff_for_hardcoded_animal
from Ration_Calculator import calculate_nutritional_requirements

app = Flask(__name__)
CORS(app,  origins='http://localhost:5173') # Enable CORS for all routes

@app.route('/api/calculate_feed', methods=['POST', 'GET'])
def calculate_feed():
    data = request.get_json()

    # Check if 'animal_type' is provided in the request
    if 'animal_type' not in data or 'purpose' not in data:
        return jsonify({'error': 'Invalid request. Missing animal_type or purpose.'}), 400

    animal_type = str(data['animal_type'])
    stage = str(data['purpose'])

    # Get the suitable feedstuff for the chosen animal type
    nutritional_values = calculate_nutritional_requirements(animal_type.lower(), stage.lower())
    feed_list = get_feedstuff_for_hardcoded_animal(animal_type)


    if nutritional_values and not feed_list.empty:
        # Prepare the response
        response = {
            "totalProtein": nutritional_values.get('Estimated_Protein', 0),
            "totalEnergy": nutritional_values.get('Estimated_Energy', 0),
            "totalFiber": nutritional_values.get('Estimated_Fiber', 0),
            "FEEDSTUFF": feed_list.to_string(index=False)
        }

        return response 
    else:
        return print({'error': f'No feedstuff information available for {animal_type} in {stage} stage.'}), 404

if __name__ == '__main__':
    app.run(debug=True)
