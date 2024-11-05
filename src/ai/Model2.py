import firebase_admin
from firebase_admin import credentials, firestore
from sklearn.linear_model import LinearRegression
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Initialize Firebase
def initialize_firebase():
    if not firebase_admin._apps:
        cred = credentials.Certificate("D:/ProphecyProperty/src/ai/service.json")
        firebase_admin.initialize_app(cred)

def load_historical_data():
    initialize_firebase()
    db = firestore.client()
    docs = db.collection('properties').stream()

    data = []
    for doc in docs:
        doc_data = doc.to_dict()
        if "Price" in doc_data and "Date" in doc_data:
            data.append(doc_data)
    
    return pd.DataFrame(data)

def predict_price_trend():
    df = load_historical_data()
    if df.empty or 'Price' not in df.columns:
        return {"error": "No historical data available for trend prediction"}

    df["Date"] = pd.to_datetime(df["Date"])
    df = df.sort_values("Date")
    df["TimeIndex"] = range(len(df))

    X = df["TimeIndex"].values.reshape(-1, 1)
    y = df["Price"].values

    model = LinearRegression()
    model.fit(X, y)

    future_time_indices = np.array(range(len(df), len(df) + 12)).reshape(-1, 1)
    future_prices = model.predict(future_time_indices)

    return {
        "historical_data": list(df["Price"].values),
        "predicted_prices": list(future_prices)
    }

# Example Usage
if __name__ == "__main__":
    print(predict_price_trend())
