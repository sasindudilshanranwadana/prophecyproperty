import firebase_admin
from firebase_admin import credentials, firestore
from geopy.distance import geodesic

# Initialize Firebase
cred = credentials.Certificate("D:/ProphecyProperty/src/ai/service.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_nearby_properties(user_id, max_distance_km=5):
    user_doc = db.collection("users").document(user_id).get()
    if not user_doc.exists:
        return {"error": "User not found"}

    user_data = user_doc.to_dict()
    clicked_properties = user_data.get("clickedProperties", [])
    recommendations = []

    for address in clicked_properties:
        properties_ref = db.collection("properties").where("Address", "==", address)
        property_docs = properties_ref.stream()
        
        for prop in property_docs:
            property_data = prop.to_dict()
            user_location = (property_data["Latitude"], property_data["Longitude"])

            nearby_properties = db.collection("properties").stream()
            for nearby_prop in nearby_properties:
                nearby_data = nearby_prop.to_dict()
                nearby_location = (nearby_data["Latitude"], nearby_data["Longitude"])
                distance = geodesic(user_location, nearby_location).km

                if distance <= max_distance_km:
                    recommendations.append({
                        "Address": nearby_data["Address"],
                        "Price": nearby_data.get("Price"),
                        "Distance (km)": round(distance, 2)
                    })

    recommendations = sorted(recommendations, key=lambda x: x.get("Price", float("inf")))[:4]
    return recommendations

# Example Usage
if __name__ == "__main__":
    print(get_nearby_properties("user123"))
