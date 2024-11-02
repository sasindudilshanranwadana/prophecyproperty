
# Price Predictor Application

This project is a simple web application that predicts the price of a building based on the provided building area. The application consists of a **Flask backend** that performs the prediction and a **React frontend** that interacts with the user.

## Overview

This project demonstrates a simple web-based price prediction tool. Users input the building area, and the app predicts the price based on a linear model (or other models that can be implemented later).

The project is divided into two main components:
- A **Flask API** that handles the backend logic and serves prediction results.
- A **React frontend** that provides a user interface for entering building area and displays the predicted price.

## Technologies Used

- **Backend**: Python, Flask, Flask-CORS
- **Frontend**: JavaScript, React
- **Other**: HTML, CSS, JSON

## Running the Application

### Start Backend

1. Navigate to the `ProphecyProperty/` directory.
   
2. Start the Flask backend server by running:

   python server.py
   ```

   This will start the Flask server at `http://localhost:5000`.

### Start Frontend

1. Navigate to the `ProphecyProperty` directory.

2. Start the React frontend application by running:

  
   npm start

   This will start the React app on `http://localhost:3000`.

Now, the frontend will be running at `http://localhost:3000`, and it will send requests to the backend running at `http://localhost:5000`.

## API Endpoint

The Flask API exposes a single endpoint for price prediction:

- **POST** `/predict_price_linear`

  - **Description**: Predicts the price based on the building area.
  - **Request Body**:
    ```json
    {
      "buildingArea": "500"
    }
    ```
  - **Response**:
    ```json
    {
      "predicted_price": 500000
    }
    ```
  - If there's an error with the input or during processing, the API will return an error message with a 400 status code.

## Testing

1. Open your browser and go to `http://localhost:3000`.
2. Enter a value for the building area (e.g., 500).
3. Click the "Predict Price" button.
4. The predicted price will be displayed based on the input.

## Future Enhancements

- **Model Integration**: Replace the dummy linear model with a real machine learning model or a more advanced prediction logic.
- **Error Handling**: Implement better error handling for edge cases (e.g., non-numeric input).
- **Styling**: Improve the UI design with better styles and layouts.
- **Testing**: Add unit tests for the Flask backend and React components.



### 1. Data Preprocessing Code Snippet

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the dataset
data = pd.read_csv('data.csv')

# Separate the features and target variable
X = data.drop('price', axis=1)  # Features (excluding 'price' column)
y = data['price']  # Target variable

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features (optional, depending on the model requirements)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Check the preprocessed data
print(X_train_scaled[:5])
```

### 2. Random Forest Regression Code Snippet

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Initialize the Random Forest Regressor
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)

# Train the model
rf_model.fit(X_train_scaled, y_train)

# Make predictions on the test set
y_pred = rf_model.predict(X_test_scaled)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse}")
print(f"R-squared Score: {r2}")
```

### 3. Flask Web Application Code Snippet

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

# Load the trained Random Forest model
with open('random_forest_model.pkl', 'rb') as file:
    rf_model = pickle.load(file)

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# Define the API endpoint for prediction
@app.route('/predict_price', methods=['POST'])
def predict_price():
    try:
        # Get the request data
        data = request.get_json()
        building_area = float(data['buildingArea'])

        # Preprocess the input data (apply same scaling as during training)
        input_data = np.array([[building_area]])
        # Assuming the scaler is saved during training
        with open('scaler.pkl', 'rb') as scaler_file:
            scaler = pickle.load(scaler_file)
        input_data_scaled = scaler.transform(input_data)

        # Make prediction using the Random Forest model
        predicted_price = rf_model.predict(input_data_scaled)[0]

        # Return the predicted price
        return jsonify({'predicted_price': predicted_price})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
```


