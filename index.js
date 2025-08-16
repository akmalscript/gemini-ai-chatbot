// npm init -y
// npm install express dotenv cors @google/generative-ai
// create a .env file and fill it with GEMINI_API_KEY={your-gemini-api-key}
// node index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Chat API route
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ reply: "Message is required." });
    }

    try {
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: "Something went wrong." });
    }
});

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.listen(port, () => {
    console.log(`Gemini Chatbot running on http://localhost:${port}`);
});
