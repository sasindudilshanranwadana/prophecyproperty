
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




