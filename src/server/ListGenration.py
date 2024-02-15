import pandas as pd

# Load the dataset
dataset_path = 'ProcessedFarmFeedFile.csv'  # Replace with the actual path or filename

df = pd.read_csv(dataset_path)  # Assuming it's a tab-separated file

def ChoseAnimal():
    Input = int(input("Chose animal[Cattle[1], Sheep[2], Goat[3], Rabbit[4], Horse[5], Fish[6], Poultry[7]].\n", ))
    animal_columns = df.columns[15:22]
    if 1 <= Input <= len(animal_columns):
        hardcoded_animal = animal_columns[Input - 1]
        return hardcoded_animal
    else:
        print("Invalid Input")

def get_feedstuff_for_hardcoded_animal(hardcoded_animal):
    # Filter the dataset based on the hardcoded animal
    filtered_data = df[df[hardcoded_animal] == 1]

    # Extract the feedstuff names and additional information
    feedstuff_info = filtered_data[['FEEDSTUFF', 'Total_Protein', 'Total_Fiber', 'Total_Energy_Maintenance']]

    return feedstuff_info

def main():
    # Get feedstuff for the hardcoded animal
    hardcoded_animal = ChoseAnimal()
    feedstuff_info = get_feedstuff_for_hardcoded_animal(hardcoded_animal)

    # Display the result
    print(f"\nFeedstuff suitable for {hardcoded_animal}:")
    print(feedstuff_info.to_string(index=False))

if __name__ == "__main__":
    main()
