import pandas as pd
import json

# Load the CSV file
csv_file_path = 'D:/ProphecyProperty/src/properties.csv'
json_file_path = 'D:/ProphecyProperty/src/properties.json'

# Read CSV
data = pd.read_csv(csv_file_path)

# Convert to JSON
data_json = data.to_dict(orient='records')

# Write to JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(data_json, json_file, indent=4)

print("JSON file saved at:", json_file_path)
