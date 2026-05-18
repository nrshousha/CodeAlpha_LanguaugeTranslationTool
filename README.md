# Aura Translate 🌐

A language translation tool with a sleek, modern look. Built with a Python FastAPI backend and a clean HTML/CSS/JS frontend, powered by Google Translate.
<img width="1435" height="689" alt="Screenshot 2026-05-19 at 1 24 45 AM" src="https://github.com/user-attachments/assets/0467070e-9f16-4be1-a867-23468946b884" />

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, FastAPI
- **Translation:** Google Translate via deep-translator
- **Infrastructure:** Docker, Nginx

## Features

- Type or paste text and get an instant translation
- Support for multiple languages
- Swap source and target languages with one click
- Character count tracker
- Clean, modern UI

## Project Structure

```markdown
Language translator/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
└── docker-compose.yml
```

## How to Run

### With Docker (recommended)

1. Make sure Docker is installed and running
2. Clone the repository
   ```bash
   git clone https://github.com/nrshousha/CodeAlpha_LanguaugeTranslationTool
   cd language-translator
   ```
3. Build and run
   ```bash
   docker-compose up --build
   ```
4. Open your browser at `http://localhost:3000`

## API Endpoint

**POST** `/translate`

Request body:
```json
{
  "text": "Hello",
  "from_lang": "en",
  "to_lang": "fr"
}
```

Response:
```json
{
  "translated_text": "Bonjour"
}
```
```

