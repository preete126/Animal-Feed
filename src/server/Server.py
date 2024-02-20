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

@app.route('/api/feed_plan', methods=['POST', 'GET'])
def generate_feed_plan():
    data =request.json()
    
    selected_feeds = int(data["selected_feed"])
    # Let the farmer choose the animal type
    animal_type = str(data['animal_type'])

    # Get the suitable feedstuff for the chosen animal type
    feedstuff_info = get_feedstuff_for_hardcoded_animal(animal_type)

    # Display the available feedstuff for the chosen animal with additional information
    print(f"\nFeedstuff suitable for {animal_type}:")
    print(feedstuff_info.to_string(index=False))

    # Let the farmer choose up to six feeds from the available feedstuff
    

    # Calculate the nutritional requirements
    nutritional_requirements = calculate_nutritional_requirements(animal_type.lower())
    Mineral_supplement = nutritional_requirements['Estimated_Total_Feed']* 0.02
    Salt = nutritional_requirements['Estimated_Total_Feed']* 0.01
        
    if nutritional_requirements:
        # Assign the corresponding estimated values to selected feeds based on the number of selections
        if len(selected_feeds) == 1:
            selected_feeds[0]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed']
            max_protein_feed = max(selected_feeds, key=lambda x: x['Total_Protein'])
            highest_protein_feed_name = max_protein_feed['FEEDSTUFF']
            Final_file = { 
                "Ingredients" :{ f"{highest_protein_feed_name} : {nutritional_requirements['Estimated_Protein']:.2f} kg"
                           f"Mineral supplement: {Mineral_supplement}",
                           f"Salt: {Salt}" },}
            return jsonify(Final_file)
        elif len(selected_feeds) == 2:
            selected_feeds[0]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.4
            selected_feeds[1]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.6
            max_protein_feed = max(selected_feeds, key=lambda x: x['Total_Protein'])
            max_energy_feed = max(selected_feeds, key=lambda x: x['Total_Energy_Maintenance'])
            highest_protein_feed_name = max_protein_feed['FEEDSTUFF']
            highest_energy_feed_name = max_energy_feed['FEEDSTUFF']
            
            Final_file = { 
                "Ingredients" :{ f"{highest_protein_feed_name} : {nutritional_requirements['Estimated_Protein']:.2f} kg",
                           f"{highest_energy_feed_name} : {nutritional_requirements['Estimated_Energy']:.2f} kg"
                           f"Mineral supplement: {Mineral_supplement}",
                           f"Salt: {Salt}" },}
            return jsonify(Final_file)
        elif len(selected_feeds) >= 3:
            max_protein_feed = max(selected_feeds, key=lambda x: x['Total_Protein'])
            max_fiber_feed = max(selected_feeds, key=lambda x: x['Total_Fiber'])
            max_energy_feed = max(selected_feeds, key=lambda x: x['Total_Energy_Maintenance'])
            # Get the name of the feedstuff with the highest total protein
            highest_protein_feed_name = max_protein_feed['FEEDSTUFF']
            highest_fiber_feed_name = max_fiber_feed['FEEDSTUFF']
            highest_energy_feed_name = max_energy_feed['FEEDSTUFF']
            Final_file = { 
            "Ingredients" :{ f"{highest_protein_feed_name} : {nutritional_requirements['Estimated_Protein']:.2f} kg",
                            f"{highest_fiber_feed_name} :{nutritional_requirements['Estimated_Fiber']:.2f} kg",
                           f"{highest_energy_feed_name} : {nutritional_requirements['Estimated_Energy']:.2f} kg"
                           f"Mineral supplement: {Mineral_supplement}",
                           f"Salt: {Salt}" },} 
            return jsonify(Final_file)
     
if __name__ == '__main__':
    app.run(debug=True)
