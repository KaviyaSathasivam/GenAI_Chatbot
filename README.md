# 🤖 AI Chatbot (Gemini + FastAPI + HTML/CSS/JS)

A lightweight, interactive chatbot built using **Google Generative AI (Gemini 1.5 Flash)**, **FastAPI** as the backend, and a **simple frontend using HTML, CSS, and JavaScript**.

---

## ✅ Features

- Gemini-powered intelligent responses
- Real-time user-to-bot conversation
- Minimal UI with typing interface
- FastAPI server with CORS support for frontend integration

---

## 🗂 Project Structure

AI-Chatbot/
├── index.html # Frontend UI
├── styles.css # Basic styling
├── script.js # Frontend JS for handling chat
├── backend.py # FastAPI backend with Gemini integration
└── README.md # Project documentation

---

## ⚙️ Requirements

- Python 3.7 or above
- Internet connection
- Gemini API key from [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

---

## 🚀 Setup Instructions

### 1. Clone the Project

git clone https://github.com/your-username/AI-Chatbot.git
cd AI-Chatbot

2. Install Python Dependencies
pip install fastapi uvicorn google-generativeai

3. Configure Gemini API Key
In backend.py, add your Gemini API key:
API_KEY = "your-api-key-here"


▶️ Run the Chatbot
Step 1: Start the Backend
uvicorn backend:app --host 0.0.0.0 --port 8050

Step 2: Open the Frontend
Simply open index.html in your browser.
Make sure the API is accessible at http://127.0.0.1:8050/chat. If hosted elsewhere, update the URL in script.js.

Screenshot
<img width="1910" height="954" alt="Screenshot 2025-07-16 200226" src="https://github.com/user-attachments/assets/bd8e1f96-1fbf-4409-86fb-47d1f21bc6ac" />

💬 Usage
Type your message in the input box
Click Send
Bot will respond in real time
To stop the server, use Ctrl+C in your terminal

🔒 Notes
CORS is enabled for development (allow_origins=["*"])
For production, specify allowed domains explicitly
You can customize styles in styles.css

📃 License
Open-sourced under the MIT License.
