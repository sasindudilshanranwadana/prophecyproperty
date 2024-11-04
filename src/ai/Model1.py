import os
import json
import requests

# Define API key and endpoint for Google Maps
GOOGLE_MAPS_API_KEY = "AIzaSyA-Ak-lIaa8gikVxaSblzkEMhguKr4N3zI"
DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json"

# Paths to the JSON files in the public directory
base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'public'))
properties_json_path = os.path.join(base_path, 'properties.json')
search_terms_json_path = os.path.join(base_path, 'search_terms.json')

# Load properties data from JSON
if os.path.exists(properties_json_path):
    try:
        with open(properties_json_path, 'r') as file:
            properties_data = json.load(file)
    except json.JSONDecodeError:
        print("Error: properties.json contains invalid JSON.")
        properties_data = []
else:
    print(f"Error: File not found at path: {properties_json_path}")
    properties_data = []

# Load user search history from JSON file or create a new one if it doesn't exist
if os.path.exists(search_terms_json_path):
    try:
        with open(search_terms_json_path, 'r') as file:
            if os.stat(search_terms_json_path).st_size == 0:
                print("Warning: search_terms.json is empty. Initializing with an empty dictionary.")
                search_history = {}
            else:
                search_history = json.load(file)
    except json.JSONDecodeError:
        print("Error: search_terms.json contains invalid JSON. Initializing with an empty dictionary.")
        search_history = {}
else:
    print("search_terms.json file not found. Creating an empty search history.")
    search_history = {}

def save_user_search(location):
    """Save user search location to the JSON file."""
    if location in search_history:
        search_history[location] += 1
    else:
        search_history[location] = 1

    with open(search_terms_json_path, 'w') as file:
        json.dump(search_history, file, indent=4)

def find_nearby_properties(lat, lon, distance_km=5):
    """Find properties within a specified distance (in km) using Google Maps Distance Matrix API."""
    nearby_properties = []
    
    for property in properties_data:
        property_coords = f"{property['Latitude']},{property['Longitude']}"
        user_coords = f"{lat},{lon}"

        # Request distance from Google Maps API
        response = requests.get(
            DISTANCE_MATRIX_URL,
            params={
                "origins": user_coords,
                "destinations": property_coords,
                "key": GOOGLE_MAPS_API_KEY,
                "units": "metric"
            }
        )

        # Check response status
        if response.status_code == 200:
            distance_data = response.json()
            distance = distance_data['rows'][0]['elements'][0]['distance']['value'] / 1000  # Convert meters to km

            # Filter properties within the given distance
            if distance <= distance_km:
                nearby_properties.append(property)
        else:
            print(f"Error: Failed to retrieve distance for property at {property['Address']}")

    return nearby_properties

def recommend_properties(location, lat, lon):
    """Recommend up to 4 properties based on the latest search location."""
    # Log the search
    save_user_search(location)
    
    # Find nearby properties within 5 km
    nearby_properties = find_nearby_properties(lat, lon)
    
    # Sort by price and select the top 4 affordable properties
    sorted_properties = sorted(nearby_properties, key=lambda x: x["Price"])
    recommendations = sorted_properties[:4]
    
    # Display recommendations
    if recommendations:
        print(f"Top property recommendations near {location}:")
        for i, prop in enumerate(recommendations, start=1):
            print(f"{i}. Address: {prop['Address']}, Price: {prop['Price']}, Bedrooms: {prop['Bedrooms']}, Bathrooms: {prop['Bathrooms']}")
    else:
        print(f"No properties found within {distance_km} km of {location}.")

# Example usage
user_search_location = "Melbourne, VIC"
user_lat, user_lon = 37.8136, 144.9631  # Coordinates for Melbourne, VIC
recommend_properties(user_search_location, user_lat, user_lon)
