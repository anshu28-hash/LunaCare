
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to LunaCare API" });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    project: "LunaCare",
    message: "LunaCare backend is running!",
  });
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question, language = "en" } = req.body ?? {};

    if (typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a question.",
      });
    }

    if (question.length > 2000) {
      return res.status(400).json({
        success: false,
        error: "Question must be 2000 characters or fewer.",
      });
    }

    if (!["en", "hi"].includes(language)) {
      return res.status(400).json({
        success: false,
        error: "Language must be 'en' or 'hi'.",
      });
    }

    if (!N8N_WEBHOOK_URL) {
      return res.status(500).json({
        success: false,
        error: "AI service is not configured.",
      });
    }

    const aiResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: question.trim(),
        language,
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!aiResponse.ok) {
      console.error("n8n returned HTTP", aiResponse.status);
      return res.status(502).json({
        success: false,
        error: "The AI service is temporarily unavailable.",
      });
    }

    const data = await aiResponse.json();

    if (!data.success || typeof data.answer !== "string") {
      return res.status(502).json({
        success: false,
        error: "The AI service returned an unexpected response.",
      });
    }

    return res.json({
      project: "LunaCare",
      success: true,
      answer: data.answer,
    });
  } catch (error) {
    console.error("AI request failed:", error.message);

    return res.status(502).json({
      success: false,
      error: "Could not get an answer right now. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`LunaCare backend running at http://localhost:${PORT}`);
});
