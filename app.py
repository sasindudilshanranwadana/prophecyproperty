from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from src.ai.Model1 import get_nearby_properties  # Import the recommendation function from Model1.py

app = FastAPI()

# Configure CORS settings
origins = ["http://localhost:3001", "http://127.0.0.1:3001"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/recommend/model1")
async def recommend_properties(user_id: str):
    try:
        recommendations = get_nearby_properties(user_id)
        if not recommendations:
            raise HTTPException(status_code=404, detail="No recommendations found.")
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
