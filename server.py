from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load pre-trained models
linear_regression_model = joblib.load('./models/linear_regression_price_prediction.pkl')
random_forest_model = joblib.load('./models/random_forest_price_prediction.pkl')
logistic_regression_model = joblib.load('./models/logistic_regression_property_classification.pkl')
svm_model = joblib.load('./models/svm_property_classification.pkl')
kmeans_model = joblib.load('./models/kmeans_clustering_market_segmentation.pkl')

# Example features to pass (adjust based on your actual model inputs)
FEATURES = ['rooms', 'buildingArea', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7']

# Linear Regression Prediction
@app.route('/predict_price_linear', methods=['POST'])
def predict_price_linear():
    data = request.get_json()
    building_area = float(data['buildingArea'])
    prediction = linear_regression_model.predict([[building_area]])
    return jsonify({'predicted_price': prediction[0]})

# Random Forest Prediction
@app.route('/predict_price_rf', methods=['POST'])
def predict_price_rf():
    data = request.get_json()
    building_area = float(data['buildingArea'])
    df = pd.DataFrame({'BuildingArea': [building_area]})  # Pass DataFrame if required
    prediction = random_forest_model.predict(df)
    return jsonify({'predicted_price': prediction[0]})

# Logistic Regression Classification
@app.route('/classify_property_logistic', methods=['POST'])
def classify_property_logistic():
    data = request.get_json()
    
    # Convert input values to float and handle missing values
    features = {feat: [float(data.get(feat, 0))] for feat in FEATURES}
    
    # Create DataFrame to avoid feature name warnings
    df = pd.DataFrame(features)
    
    prediction = logistic_regression_model.predict(df)
    return jsonify({'classification': prediction[0]})

# SVM Classification
@app.route('/classify_property_svm', methods=['POST'])
def classify_property_svm():
    data = request.get_json()

    # Handle missing values in input
    features = {feat: [float(data.get(feat, 0))] for feat in FEATURES}
    
    # Create DataFrame to avoid feature name warnings
    df = pd.DataFrame(features)
    
    prediction = svm_model.predict(df)
    return jsonify({'classification': prediction[0]})

# K-Means Clustering
@app.route('/cluster_property', methods=['POST'])
def cluster_property():
    data = request.get_json()
    building_area = float(data['buildingArea'])
    price = float(data['price'])
    
    # Predict the cluster and convert to int to avoid JSON serialization issues
    cluster = int(kmeans_model.predict([[building_area, price]])[0])
    
    return jsonify({'cluster': cluster})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
