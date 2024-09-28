import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Load dataset from the /public folder
df = pd.read_csv('../public/Rooms_by_Region.csv')

# Create a binary target variable (1 if Rooms > 3, otherwise 0)
df['ManyRooms'] = (df['Rooms'] > 3).astype(int)

# Features and target
X_class = pd.get_dummies(df[['Regionname']], drop_first=True)  # One-hot encoding for region names
y_class = df['ManyRooms']

# Split data into training and test sets
X_train_class, X_test_class, y_train_class, y_test_class = train_test_split(X_class, y_class, test_size=0.2, random_state=42)

# Train Logistic Regression model
logistic_reg = LogisticRegression()
logistic_reg.fit(X_train_class, y_train_class)

# Make predictions
y_pred_logistic = logistic_reg.predict(X_test_class)

# Evaluate model
accuracy = accuracy_score(y_test_class, y_pred_logistic)
print(f'Logistic Regression Accuracy: {accuracy}')
print("Classification Report:\n", classification_report(y_test_class, y_pred_logistic))
