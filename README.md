# **Price Predictor Application**

This project is a full-stack web application that predicts the price of a building based on the provided building area. The application uses **FastAPI** for the backend, which performs the prediction and exposes an API, and **React** for the frontend, providing a user interface for data entry and displaying the predicted price.

---

## **Overview**

This project demonstrates a simple web-based price prediction tool. Users input the building area, and the app predicts the price based on a machine learning model (currently a Random Forest model, with flexibility to implement more models later).

The project is divided into two main components:
- **FastAPI Backend**: Handles the prediction logic and serves prediction results.
- **React Frontend**: Provides a user interface for entering building area and displays the predicted price.

---

## **Technologies Used**

- **Backend**: Python, FastAPI, Uvicorn, 
- **Frontend**: JavaScript, React
- **Machine Learning**: Scikit-Learn (Random Forest model)
- **Other**: HTML, CSS, JSON

---

## **Running the Application**

### **Start Backend**

1. Ensure you’re in the `ProphecyProperty/` directory.
2. Start the FastAPI backend server on port 3001 by running:

   ```bash
   uvicorn app:app --reload --port 3001
   ```

   This command will start the FastAPI server at `http://localhost:3001`.

3. **Note**: Ensure that the trained model and scaler are available as `random_forest_model.pkl` and `scaler.pkl`, respectively, in the backend directory.

### **Start Frontend**

1. Navigate to the `ProphecyProperty` directory (or wherever the React frontend is located).
2. Install frontend dependencies if you haven’t already:

   ```bash
   npm install
   ```

3. Start the React frontend application by running:

   ```bash
   npm run start
   ```

   This will start the React app on `http://localhost:3001`.

Now, the frontend will be accessible at `http://localhost:3001`, and it will send requests to the FastAPI backend running at `http://localhost:3001`.

---

## **API Endpoint**

The FastAPI backend exposes a single endpoint for price prediction:

- **POST** `/predict_price`

  - **Description**: Predicts the price based on the building area.
  - **Request Body**:
    ```json
    {
      "buildingArea": 500
    }
    ```
  - **Response**:
    ```json
    {
      "predicted_price": 500000
    }
    ```
  - If there’s an error with the input or during processing, the API will return an error message with a 400 status code.

---

## **Testing the Application**

1. Open your browser and navigate to `http://localhost:3001`.
2. Enter a value for the building area (e.g., 500).
3. Click the "Predict Price" button.
4. The app will display the predicted price based on the input, fetched from the FastAPI backend running on port 3001.

---

## **Future Enhancements**

- **Model Expansion**: Replace the Random Forest model with more advanced machine learning models or integrate multiple models.
- **Enhanced Error Handling**: Improve error handling on both frontend and backend to manage edge cases (e.g., non-numeric input).
- **Styling and UI**: Enhance the user interface with additional styling and user experience features.
- **Testing**: Implement unit tests for both FastAPI backend and React components to ensure application robustness.

---

## **Code Snippets**

### 1. Data Preprocessing Code

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

# Standardize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Save the scaler for later use
import pickle
with open('scaler.pkl', 'wb') as scaler_file:
    pickle.dump(scaler, scaler_file)

# Check preprocessed data
print(X_train_scaled[:5])
```

---

### 2. FastAPI Web Application Code

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle

# Load the trained Random Forest model and scaler
with open('random_forest_model.pkl', 'rb') as file:
    rf_model = pickle.load(file)
with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request body model
class BuildingArea(BaseModel):
    buildingArea: float

# Define the prediction endpoint
@app.post("/predict_price")
async def predict_price(data: BuildingArea):
    try:
        # Extract building area from request and scale it
        input_data = np.array([[data.buildingArea]])
        input_data_scaled = scaler.transform(input_data)

        # Make prediction using the Random Forest model
        predicted_price = rf_model.predict(input_data_scaled)[0]

        # Return the predicted price
        return {"predicted_price": predicted_price}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
```

--- 
