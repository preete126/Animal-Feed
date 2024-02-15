from flask import Flask, request, jsonify
from Cattle_Ration_Calculator import calculate_nutritional_requirements

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate_feed():
    data = request.get_json()
    animal_type = data.get('animal_type')
    # Add more data as needed

    # Calculate nutritional requirements
    nutritional_requirements = calculate_nutritional_requirements(animal_type)

    # Return the results
    return jsonify(nutritional_requirements)

if __name__ == '__main__':
    app.run(debug=True)