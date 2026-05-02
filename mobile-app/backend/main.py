from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import AzureOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configuration from environment variables or provided snippets
ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT", "https://eastus.api.cognitive.microsoft.com/")
API_KEY = os.getenv("AZURE_OPENAI_API_KEY", "<your-api-key>")
DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT", "gpt-4o-mini")
API_VERSION = "2024-12-01-preview"

client = AzureOpenAI(
    api_version=API_VERSION,
    azure_endpoint=ENDPOINT,
    api_key=API_KEY,
)

class ChatRequest(BaseModel):
    message: str
    role: str = "user"
    history: list = []

class AnalysisRequest(BaseModel):
    data: dict

@app.get("/")
async def root():
    return {"message": "Care-Jai AI Backend is running"}

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Construct messages with history
        messages = [
            {"role": "system", "content": "You are an empathetic, warm, and helpful AI companion for elderly people in Thailand. Your goal is to make them feel cared for, remind them of their wellness routines, and detect any signs of distress. Speak in a polite, respectful, and comforting tone. Use Thai language primarily, but can use English if appropriate."}
        ]
        
        for entry in request.history:
            messages.append(entry)
            
        messages.append({"role": request.role, "content": request.message})

        response = client.chat.completions.create(
            messages=messages,
            max_tokens=1000,
            temperature=0.7,
            model=DEPLOYMENT
        )
        
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze-health")
async def analyze_health(request: AnalysisRequest):
    """
    Simulates AI Analysis of health data to find anomalies.
    In a real scenario, this would analyze sensor data.
    """
    try:
        # We use the LLM to analyze the raw data and suggest an anomaly alert
        prompt = f"Analyze the following elderly care sensor data and identify if there is any anomaly that needs a caregiver's immediate attention. Data: {request.data}. If an anomaly is found, return a JSON with 'anomaly': true, 'title': 'Anomaly Title', 'message': 'Detailed description'. Otherwise, return 'anomaly': false."
        
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a medical data analyst AI. Return only valid JSON."},
                {"role": "user", "content": prompt}
            ],
            model=DEPLOYMENT,
            response_format={"type": "json_object"}
        )
        
        # The response is a string containing JSON
        import json
        result = json.loads(response.choices[0].message.content)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
