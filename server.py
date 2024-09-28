from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load pre-trained models from the /models folder
random_forest_model = joblib.load('./models/random_forest_price_prediction.pkl')
svm_model = joblib.load('./models/svm_property_classification.pkl')
kmeans_model = joblib.load('./models/kmeans_clustering_market_segmentation.pkl')

# 1. Random Forest Price Prediction Endpoint
@app.route('/predict_price', methods=['POST'])
def predict_price():
    data = request.json  # Get the input data from the request
    building_area = data['BuildingArea']  # Extract 'BuildingArea' from JSON input
    prediction = random_forest_model.predict([[building_area]])  # Make a prediction
    return jsonify({'predicted_price': prediction[0]})  # Return the result as JSON

# 2. SVM Property Classification Endpoint
@app.route('/classify_property', methods=['POST'])
def classify_property():
    data = request.json  # Get the input data from the request
    df = pd.DataFrame(data, index=[0])  # Convert input data to DataFrame
    category = svm_model.predict(df)  # Use the SVM model to classify the property
    return jsonify({'category': category[0]})  # Return the classification result as JSON

# 3. K-Means Clustering Endpoint
@app.route('/cluster_property', methods=['POST'])
def cluster_property():
    data = request.json  # Get the input data from the request
    building_area = data['BuildingArea']
    price = data['Price']
    cluster = kmeans_model.predict([[building_area, price]])  # Use the K-Means model to assign a cluster
    return jsonify({'cluster': cluster[0]})  # Return the cluster as JSON

if __name__ == '__main__':
    app.run(debug=True, port=5000)
