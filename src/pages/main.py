from flask import Flask, request, jsonify
from flask_cors import CORS
from ListGenration import get_feedstuff_for_hardcoded_animal
from Cattle_Ration_Calculator import calculate_nutritional_requirements

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
    feedstuff_info = calculate_nutritional_requirements(animal_type.lower(), stage.lower())

    if feedstuff_info:
        # Prepare the response
        response = {
            "totalProtein": feedstuff_info.get('Estimated_Protein', 0),
            "totalEnergy": feedstuff_info.get('Estimated_Energy', 0),
            "totalFiber": feedstuff_info.get('Estimated_Fiber', 0)
        }

        return jsonify(response), 200
    else:
        return jsonify({'error': f'No feedstuff information available for {animal_type} in {stage} stage.'}), 404

if __name__ == '__main__':
    app.run(debug=True)
