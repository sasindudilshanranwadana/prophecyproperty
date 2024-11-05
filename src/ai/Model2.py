import os
import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from datetime import datetime, timedelta
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
def initialize_firebase():
    if not firebase_admin._apps:  # Check if Firebase has already been initialized
        cred = credentials.Certificate(os.path.join(os.path.dirname(__file__), '..', 'server.json'))
        firebase_admin.initialize_app(cred)

# Load historical pricing data from Firestore
def load_historical_data():
    initialize_firebase()  # Ensure Firebase is initialized
    db = firestore.client()

    properties_ref = db.collection('properties')
    docs = properties_ref.stream()

    data = []
    for doc in docs:
        data.append(doc.to_dict())

    # Convert to DataFrame
    df = pd.DataFrame(data)
    
    # Debugging: Print the retrieved data
    print("Retrieved data from Firestore:", df.head())  # Print first few rows of the DataFrame

    return df

# Prepare the data for trend analysis
def preprocess_data(df):
    if 'Price' not in df.columns:
        raise ValueError("The 'Price' column is missing from the data.")

    # Calculate average price
    price_data = df.groupby('Address')['Price'].mean().reset_index()
    return price_data

# Train the model and predict future prices
def predict_price_trend():
    df = load_historical_data()
    price_data = preprocess_data(df)

    if price_data.empty:
        print("No data available for trend analysis.")
        return None

    # Prepare the data for regression
    X = np.array(range(len(price_data))).reshape(-1, 1)  # Using index as a simple time representation
    y = price_data['Price'].values

    # Train the linear regression model
    model = LinearRegression()
    model.fit(X, y)

    # Make future predictions for the next 12 months
    future_X = np.array(range(len(price_data), len(price_data) + 12)).reshape(-1, 1)
    future_prices = model.predict(future_X)

    # Plotting the results
    plt.figure(figsize=(14, 7))
    plt.plot(range(len(price_data)), price_data['Price'], label='Historical Prices', color='blue')
    plt.plot(range(len(price_data), len(price_data) + 12), future_prices, label='Predicted Prices', color='orange')
    plt.title('Price Trend Prediction for Properties')
    plt.xlabel('Time (months)')
    plt.ylabel('Price')
    plt.legend()
    plt.grid()
    
    # Save the plot as an image file
    chart_path = os.path.join(os.path.dirname(__file__), '..', 'static', 'price_trend.png')
    plt.savefig(chart_path)
    plt.close()  # Close the plot to free up memory

    return future_prices

# Example usage
if __name__ == "__main__":
    predict_price_trend()
