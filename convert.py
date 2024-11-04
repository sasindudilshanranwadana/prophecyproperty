import json
import re

# Load the JSON data
with open('properties.json', 'r') as file:
    data = json.load(file)

# Function to update each property
def update_property(property):
    # Parse address to get Lane and City
    address = property.get("Address", "")
    lane_match = re.match(r"^(.+?),", address)
    city_match = re.search(r",\s*([A-Za-z\s]+?)\s+VIC", address)
    
    # Update Lane and City fields
    if lane_match:
        property["Lane"] = lane_match.group(1).strip()
    if city_match:
        property["City"] = city_match.group(1).strip()

    # Update Search Keywords
    keywords = set(eval(property.get("Search Keywords", "[]")))
    if property["City"]:
        keywords.add(property["City"].lower())
    if property["Lane"]:
        keywords.add(property["Lane"].lower())
    property["Search Keywords"] = str(list(keywords))

# Apply the function to each property in the list
for prop in data:
    update_property(prop)

# Save the updated data back to the JSON file
with open('properties_updated.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Properties updated successfully!")
