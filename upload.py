import os
import json
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
def initialize_firebase():
    cred = credentials.Certificate('server.json')  # Adjust the path as needed
    firebase_admin.initialize_app(cred)

def upload_data_from_json(collection_name, json_file_path):
    # Initialize Firestore
    db = firestore.client()

    # Load JSON data
    with open(json_file_path, 'r') as file:
        properties = json.load(file)

    for property_data in properties:
        # Create a document for each property using the address as the document ID
        doc_ref = db.collection(collection_name).document(property_data['Address'])
        doc_ref.set(property_data)  # Upload the property data

    print("Data uploaded successfully.")

if __name__ == "__main__":
    initialize_firebase()  # Ensure Firebase is initialized
    upload_data_from_json('properties', 'properties.json')  # Adjust the path as needed
