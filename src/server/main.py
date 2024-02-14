from flask import Flask, request, jsonify
from Cattle_Ration_Calculator import calculate_nutritional_requirements
from ListGenration import ChoseAnimal, get_feedstuff_for_hardcoded_animal

app = Flask(__name__)

@app.route('api/calculate_feed', methods=['POST'])
def calculate_feed():
    data = request.get_json()

    # Let the farmer choose the animal type
    animal_type = data.get('animal_type')

    # Get the suitable feedstuff for the chosen animal type
    feedstuff_info = get_feedstuff_for_hardcoded_animal(animal_type)

    # Let the farmer choose up to three feeds from the available feedstuff
    selected_feeds = []
    for feed_index in data.get('selected_feeds', []):
        try:
            feed_index = int(feed_index)
            if 1 <= feed_index <= len(feedstuff_info):
                selected_feeds.append(feedstuff_info.iloc[feed_index - 1])
            else:
                return jsonify({"error": "Invalid input. Please enter a valid number."})
        except ValueError:
            return jsonify({"error": "Invalid input. Please enter a valid number."})

    # Calculate the nutritional requirements
    nutritional_requirements = calculate_nutritional_requirements(animal_type.lower())

    if nutritional_requirements:
        # Assign the corresponding estimated values to selected feeds based on the number of selections
        if len(selected_feeds) == 1:
            selected_feeds[0]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed']
        elif len(selected_feeds) == 2:
            selected_feeds[0]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.4
            selected_feeds[1]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.6
            
        elif len(selected_feeds) >= 3:
            max_protein_feed = max(selected_feeds, key=lambda x: x['Total_Protein'])
            max_fiber_feed = max(selected_feeds, key=lambda x: x['Total_Fiber'])
            max_energy_feed = max(selected_feeds, key=lambda x: x['Total_Energy_Maintenance'])

            # Assign the estimated values to the selected feeds
            for feed_info in selected_feeds:
                feed_info['Estimated_Protein'] = nutritional_requirements['Estimated_Protein'] if feed_info.equals(max_protein_feed) else 0
                feed_info['Estimated_Fiber'] = nutritional_requirements['Estimated_Fiber'] if feed_info.equals(max_fiber_feed) else 0
                feed_info['Estimated_Energy'] = nutritional_requirements['Estimated_Energy'] if feed_info.equals(max_energy_feed) else 0
                selected_feeds[0]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.4
                selected_feeds[1]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.4
                selected_feeds[2]['Estimated_Total_Feed'] = nutritional_requirements['Estimated_Total_Feed'] * 0.2

        # Display the results in a feed formulation style for selected feeds
        jsonify(f"\nFeed Formulation for {animal_type} - {nutritional_requirements['Stage']} Stage:")
        jsonify("\nIngredients:")
        if len(selected_feeds) <= 2:
            for index, feed_info in enumerate(selected_feeds, 1):
                print(f"{index}. {feed_info['FEEDSTUFF']} : {feed_info['Estimated_Total_Feed']:.2f} kg")
        elif len(selected_feeds) >= 3:
             # Display the results for each selected feed
            jsonify(f"\nFeed Formulation for {animal_type} - {nutritional_requirements['Stage']} Stage:")
            jsonify("\nIngredients:")
            for index, feed_info in enumerate(selected_feeds, 1):
                jsonify(f"{index}. {feed_info['FEEDSTUFF']} : {feed_info['Estimated_Total_Feed']:.2f} kg")
                
            jsonify("\nNutrient Composition (per kg):")
            jsonify(f"- Total Weight: {nutritional_requirements['Estimated_Total_Feed']:.2f} kg")
            jsonify(f"- Crude Protein: {nutritional_requirements['Estimated_Protein']:.2f} kg")
            jsonify(f"- Metabolizable Energy: {nutritional_requirements['Estimated_Energy']:.2f} kg")
            jsonify(f"- Crude Fiber: {nutritional_requirements['Estimated_Fiber']:.2f} kg")

    else:
        jsonify("Unable to calculate nutritional requirements. Please check your inputs.")

    # Prepare the response
    response_data = {
        "animal_type": animal_type,
        "selected_feeds": selected_feeds,  # You can customize this based on your needs
        "nutritional_requirements": nutritional_requirements,
        "Crude Protein":nutritional_requirements['Estimated_Protein'],
        "Metabolizable Energy": nutritional_requirements['Estimated_Energy'],
        "Crude Fiber": nutritional_requirements['Estimated_Fiber']
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
