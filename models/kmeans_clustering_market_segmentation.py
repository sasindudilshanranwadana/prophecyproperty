import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset from the /public folder
df = pd.read_csv('../public/Price_vs_Building_Area.csv')

# Features for clustering
X_cluster = df[['BuildingArea', 'Price']]
scaler = StandardScaler()
X_cluster_scaled = scaler.fit_transform(X_cluster)

# Train K-Means Clustering model
kmeans = KMeans(n_clusters=3, random_state=42)
df['Cluster'] = kmeans.fit_predict(X_cluster_scaled)

# Visualize the clusters
sns.scatterplot(x='BuildingArea', y='Price', hue='Cluster', data=df, palette='Set1')
plt.title('K-Means Clustering: Building Area vs Price')
plt.xlabel('Building Area (sqm)')
plt.ylabel('Price ($)')
plt.show()

# Inertia (measure of clustering performance)
print(f'K-Means Clustering Inertia: {kmeans.inertia_}')
