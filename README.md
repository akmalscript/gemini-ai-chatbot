# Gemini AI Chatbot

Simple web chatbot using Google Generative AI (Gemini) with an Express backend and a vanilla JS frontend that renders markdown safely.

## Features
- **Chat with Gemini AI** in real time.

## Requirements
- Node.js v16+  
- NPM  
- Google Gemini API key  

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/akmalscript/gemini-ai-chatbot.git
   cd gemini-ai-chatbot
2. Install dependencies:
   ```bash
    npm init -y
    npm install express cors dotenv @google/generative-ai
3. Create a .env file in the root directory:
   ```bash
    GEMINI_API_KEY=your-gemini-api-key
4. Start the server:
   ```bash
    node index.js
5. Open the chatbot in your browser
    ```bash
    http://loocalhost:3000
    ```

## Usage

1.  Type your message in the input field.
2.  Press **Send**.
3.  Gemini AI will generate a response and display it in the chatbox
    with proper Markdown formatting.

Example conversation:

    User: Explain recursion in simple terms.
    Gemini AI: Recursion is when a function calls itself to solve a smaller piece of a problem...

## Project Structure

    ├── public/              # Frontend assets
    │   ├── index.html       # Frontend structure
    │   ├── script.js        # Handles chat logic and rendering
    │   └── style.css        # Styles for chat UI
    ├── index.js             # Backend Express server with Gemini API integration
    ├── .env                 # API key configuration (not included in repo)
    ├── .gitignore           # Ignore node_modules, .env, etc.
    ├── package.json         # Project metadata and dependencies
    ├── package-lock.json    # Dependency lock file
    └── README.md            # Project documentation

## Notes
- This server runs on port 3000 by default.
- Ensure your .env file contains a valid GEMINI_API_KEY.