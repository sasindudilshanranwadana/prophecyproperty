import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("D:/ProphecyProperty/src/ai/service.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def estimate_property_price(location, bedrooms, bathrooms):
    properties_ref = db.collection("properties")
    query = (
        properties_ref
        .where("City", "==", location)
        .where("Bedrooms", "==", bedrooms)
        .where("Bathrooms", "==", bathrooms)
    )
    query_snapshot = query.stream()

    similar_properties = []
    total_price = 0

    for doc in query_snapshot:
        property_data = doc.to_dict()
        price = property_data.get("Price")
        if price:
            similar_properties.append(property_data)
            total_price += price

    if similar_properties:
        avg_price = total_price / len(similar_properties)
        min_price = min(p["Price"] for p in similar_properties)
        max_price = max(p["Price"] for p in similar_properties)

        return {
            "estimated_price": avg_price,
            "price_range": {"min": min_price, "max": max_price},
            "similar_properties_count": len(similar_properties)
        }
    else:
        return {"error": "No similar properties found"}

# Example Usage
if __name__ == "__main__":
    print(estimate_property_price("Wollert", 3, 2))
