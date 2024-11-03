import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate("service.json")  # Update with the path to your Service Account Key
firebase_admin.initialize_app(cred)

db = firestore.client()

# Helper function to generate keywords from an address
def generate_keywords(address):
    if not address:
        return []
    words = address.lower().split()  # Split by whitespace and convert to lowercase
    return words

# Function to update all documents with search keywords
def update_documents():
    properties_ref = db.collection("properties")
    docs = properties_ref.stream()

    batch = db.batch()
    count = 0

    for doc in docs:
        data = doc.to_dict()
        address = data.get("Address", "")
        keywords = generate_keywords(address)  # Generate keywords from the address

        # Prepare update
        doc_ref = properties_ref.document(doc.id)
        batch.update(doc_ref, {"searchKeywords": keywords})

        count += 1

        # Commit batch every 500 updates to avoid Firestore limits
        if count % 500 == 0:
            batch.commit()
            print(f"Updated {count} documents.")
            batch = db.batch()  # Start a new batch

    # Final commit for remaining documents
    batch.commit()
    print(f"Updated a total of {count} documents with searchKeywords.")

# Run the update function
if __name__ == "__main__":
    try:
        update_documents()
        print("All documents updated successfully.")
    except Exception as e:
        print(f"Error updating documents: {e}")
