import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate("D:/ProphecyProperty/src/ai/service.json")  # Update with your path
firebase_admin.initialize_app(cred)
db = firestore.client()

def estimate_property_price(location, bedrooms, bathrooms):
    """
    Estimate the price of a property based on similar properties in Firestore.

    Parameters:
        location (str): The city or location of the property.
        bedrooms (int): The number of bedrooms.
        bathrooms (int): The number of bathrooms.

    Returns:
        dict: Estimated price range and list of similar properties or an error message.
    """
    try:
        # Step 1: Query Firestore for properties matching the criteria
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

        # Step 2: Gather data and calculate the total price
        for doc in query_snapshot:
            property_data = doc.to_dict()
            price = property_data.get("Price")
            if price is not None:
                similar_properties.append(property_data)
                total_price += price

        # Step 3: If similar properties found, calculate the estimated price
        if similar_properties:
            avg_price = total_price / len(similar_properties)
            prices = [property["Price"] for property in similar_properties]
            min_price = min(prices)
            max_price = max(prices)

            estimated_price = {
                "average": avg_price,
                "range": {
                    "min": min_price,
                    "max": max_price,
                },
            }
            explanation = (
                f"Estimated price is based on {len(similar_properties)} similar properties "
                f"in {location} with {bedrooms} bedrooms and {bathrooms} bathrooms."
            )
        else:
            return {"error": "No similar properties found for the given criteria."}

        # Step 4: Return results with similar properties
        return {
            "estimatedPrice": estimated_price,
            "similarProperties": similar_properties,
            "explanation": explanation,
        }

    except Exception as e:
        print(f"Error estimating property price: {e}")
        return {"error": "Failed to estimate property price due to an internal error."}

# Example usage
if __name__ == "__main__":
    # User inputs for estimation
    location = "Wollert"
    bedrooms = 3
    bathrooms = 2

    estimate = estimate_property_price(location, bedrooms, bathrooms)
    print(estimate)
