import os
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase with service account
cred = credentials.Certificate("D:/ProphecyProperty/src/ai/service.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_nearby_properties(user_id):
    # Fetch the user's clicked properties from Firestore
    user_doc = db.collection("users").document(user_id).get()
    if not user_doc.exists:
        return []

    user_data = user_doc.to_dict()
    clicked_properties = user_data.get("clickedProperties", [])

    recommendations = []
    for address in clicked_properties:
        properties_ref = db.collection("properties").where("Address", "==", address)
        property_docs = properties_ref.stream()
        
        for prop in property_docs:
            property_data = prop.to_dict()
            recommendations.append(property_data)

    # Sort recommendations by price (ascending), limit to top 4 properties
    recommendations = sorted(recommendations, key=lambda x: x.get("Price", float('inf')))[:4]

    return recommendations
