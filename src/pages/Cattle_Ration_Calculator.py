# Dictionary with animal weight averages
animal_weights_averages = {
    'newborn': {
        'goat': 3.4,
        'sheep': 3.4,
        'poultry': 0.0425,
        'rabbits': 0.085,
        'fish': 1.6,  # Nile Tilapia
        'horses': 36,
        'cattle': 36,  # Boran Cattle
    },
    'growing': {
        'goat': 31.5,
        'sheep': 31.5,
        'poultry': 1.6,
        'rabbits': 2.7,
        'fish': 2.7,  # Random breed for fish
        'horses': 295,  # Boerperd
        'cattle': 295,  # Boran Cattle
    },
    'producing': {
        'goat': 90.5,
        'sheep': 79,
        'poultry': 2.5,
        'rabbits': None,
        'fish': None,  # Random breed for fish
        'horses': None,  # Random breed for horses
        'cattle': 680.5,  # Random breed for cattle
    },
    'meat_production': {
        'goat': 70,
        'sheep': 70,
        'poultry': 2.7,
        'rabbits': 3.6,
        'fish': 4.5,  # Random breed for fish
        'horses': 680.5,  # Random breed for horses
        'cattle': 680.5,  # Random breed for cattle
    },
    'maintenance': {
        'horses': 680.5,  # Boerperd
        'cattle': 680.5,  # Boran Cattle
    }
}

poultry_feeding_plan = {
    'newborn': {
        'Total_Protein': 22,
        'Total_Energy': 14,  # Approximate percentage
        'Total_Fiber': 4,
    },
    'growing': {
        'Total_Protein': 18,
        'Total_Energy': 13,  # Approximate percentage
        'Total_Fiber': 5,
    },
    'producing': {
        'Total_Protein': 18,
        'Total_Energy': 13,  # Approximate percentage
        'Total_Fiber': 6,
    
    }
}

sheep_feeding_plan = {
    'newborn': {
        'Total_Protein': 18,
        'Total_Energy': 12,  # Approximate percentage
        'Total_Fiber': 6,
    },
    'growing': {
        'Total_Protein': 16,
        'Total_Energy': 11,  # Approximate percentage
        'Total_Fiber': 7,
    },
    'meat_production': {
        'Total_Protein': 14,
        'Total_Energy_Maintenance': 10,  # Approximate percentage
        'Total_Fiber': 8,
    },
    
    
}

goat_feeding_plan = {
    'newborn': {
        'Total_Protein': 20,
        'Total_Energy': 14,  
        'Total_Fiber': 8,
    },
    'growing': {
        'Total_Protein': 18,
        'Total_Energy': 12,  # Approximate percentage
        'Total_Fiber': 9,
    },
    'meat_production': {
        'Total_Protein': 16,
        'Total_Energy': 11,  # Approximate percentage
        'Total_Fiber': 10,
    },
    
    'producing': {
        'Total_Protein': 18,
        'Total_Energy_Lactating': 14,  # Approximate percentage
        'Total_Fiber': 9,
    },
}

rabbit_feeding_plan = {
    'newborn': {
        'Total_Protein': 18,
        'Total_Energy': 10,  # Approximate percentage
        'Total_Fiber': 15,
    },
    'growing': {
        'Total_Protein': 16,
        'Total_Energy': 9,  # Approximate percentage
        'Total_Fiber': 16,
    },
    'meat_production': {
        'Total_Protein': 14,
        'Total_Energy': 8,  # Approximate percentage
        'Total_Fiber': 17,
    },
    
}

horse_feeding_plan = {
    'newborn': {
        'Total_Protein': 20,
        'Total_Energy': 12,  # Approximate percentage
        'Total_Fiber': 7,
    },
    'Growing': {
        'Total_Protein': 18,
        'Total_Energy': 10,  # Approximate percentage
        'Total_Fiber': 8,
    },
    'meat_production': {
        'Total_Protein': 16,
        'Total_Energy': 9,  # Approximate percentage
        'Total_Fiber': 9,
    },
    'maintenance': {
    'Total_Protein': 12,
    'Total_Energy': 9,  # Approximate percentage
    'Total_Fiber': 9,
    },


}

fish_feeding_plan = {
    'newborn': {
        'Total_Protein': 20,
        'Total_Energy': 15,  # Approximate percentage
        'Total_Fiber': 1,
    },
    'growing': {
        'Total_Protein': 18,
        'Total_Energy': 14,  # Approximate percentage
        'Total_Fiber': 2,
    },
    'meat_production': {
        'Total_Protein': 16,
        'Total_Energy': 13,  # Approximate percentage
        'Total_Fiber': 3,
    },
}

cattle_feeding_plan = {
    'newborn': {
        'Total_Protein': 18,
        'Total_Energy': 12,# Approximate percentage
        'Total_Fiber': 10,
    },
    'growing': {
        'Total_Protein': 16,
        'Total_Energy': 10,  # Approximate percentage
        'Total_Fiber': 12,
    },
    'meat_production': {
        'Total_Protein': 14,
        'Total_Energy': 9,  # Approximate percentage
        'Total_Fiber': 14,
    },
    'producing': {
        'Total_Protein': 16, 
        'Total_Energy': 12,  # Approximate percentage
        'Total_Fiber': 12,
    },
    'maintenance': {
    'Total_Protein': 14,
    'Total_Energy': 9,  # Approximate percentage
    'Total_Fiber': 14,
    },

}

def select_stage(animal_type):
    animal_stages = {
        'goat': ['newborn', 'growing', 'meat_production'],
        'poultry': ['newborn', 'growing', 'production', "meat_production"],
        'sheep': ['newborn', 'growing', 'meat_production'],
        'cattle': ['newborn', 'growing', 'producing', "meat_production", "maintenance"],
        'fish': ['newborn', 'growing', "meat_production"],
        'horse': ['newborn', 'growing',"meat_production", "maintenance"],
        'rabbit': ['newborn', 'growing', "meat_production"]

    }

    stages = animal_stages.get(animal_type)

    if not stages:
        print(f"Stages not defined for {animal_type}.")
        return None

    while True:
        print(f"\nSelect the {animal_type} stage:")
        for i, stage in enumerate(stages, start=1):
            print(f"{i}. {stage}")

        try:
            selected_index = int(input("Enter the number corresponding to the desired stage: "))
            if 1 <= selected_index <= len(stages):
                return stages[selected_index - 1]
            else:
                print("Invalid input. Please enter a valid stage number.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def calculate_nutritional_requirements(animal_type, stage):
    # Get the appropriate feeding plan based on the animal type

    if animal_type == 'goat':
        feeding_plan = goat_feeding_plan
    elif animal_type == 'poulty':
        feeding_plan = poultry_feeding_plan
    elif animal_type == 'sheep':
        feeding_plan = sheep_feeding_plan
    elif animal_type == 'rabbit':
        feeding_plan = rabbit_feeding_plan
    elif animal_type == 'horse':
        feeding_plan = horse_feeding_plan
    elif animal_type == 'fish':
        feeding_plan = fish_feeding_plan
    elif animal_type == 'cattle':
        feeding_plan = cattle_feeding_plan
    else:
        print(f"Feeding plan not available for {animal_type}.")
        return None
    stage = select_stage(animal_type)
    # Get the nutritional requirements from the feeding plan for the specified stage
    average_weight = animal_weights_averages.get(stage, {}).get(animal_type)
    requirements = stage
    


    if requirements is not None:
        # Calculate estimated nutritional requirements
        estimated_protein = (average_weight) *(feeding_plan.get('Total_Protein', 0) /100)  # Convert protein to g/kg
        estimated_energy = (average_weight) * (feeding_plan.get('Total_Energy', 0)/100)  # Convert energy to kcal/kg
        estimated_fiber = (average_weight) * (feeding_plan.get('Total_Fiber', 0)/100)  # Convert fiber to g/kg
        estimated_total_feed = estimated_protein + estimated_energy+ estimated_fiber

        return {
            "Stage":stage,
            'Estimated_Protein': estimated_protein,
            'Estimated_Energy': estimated_energy,
            'Estimated_Fiber': estimated_fiber,
            'Estimated_Total_Feed':estimated_total_feed
            
        }
    else:
        print(f"Feeding plan not available for {animal_type} in the {stage} stage.")
        return None
