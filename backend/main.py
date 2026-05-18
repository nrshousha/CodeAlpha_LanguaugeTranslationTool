from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from deep_translator import GoogleTranslator
from pydantic import BaseModel
app = FastAPI()

@app.get("/")
def home():
    return {"Hello": "World"}

class Translation(BaseModel):
    text: str
    from_lang: str
    to_lang: str

@app.post("/translate")
def translate(request: Translation):
    translated_text = GoogleTranslator(source=request.from_lang, target=request.to_lang).translate(request.text)
    return {
        "translated_text": translated_text
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)