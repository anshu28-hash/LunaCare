
# LunaCare AI Agent

LunaCare is an AI-powered menstrual health education companion designed to provide supportive, accessible information about menstrual health.

## Current Features

- AI-generated answers using Google Gemini through n8n.
- English and Hindi responses tested.
- Webhook-based question-and-answer API.
- JSON responses for frontend integration.
- Basic Node.js backend project included.

## Architecture

Frontend (developed separately)
        |
        v
n8n Production Webhook
        |
        v
AI Agent + Google Gemini
        |
        v
JSON Response

The Node.js backend in the `backend/` folder is a separate project component. It is not currently the service generating the AI answers.

## Project Structure

- `backend/` - Node.js backend source code.
- `docs/` - API documentation.
- `n8n/` - Exported n8n workflow and setup notes.

## AI API

Production endpoint:

https://anshuman-singh.app.n8n.cloud/webhook/lunacare-ask

Method: POST

Content-Type: application/json

Request example:

{
  "question": "Why is my period late?",
  "language": "en"
}

Successful response:

{
  "project": "LunaCare",
  "success": true,
  "answer": "AI-generated response"
}

Supported language values tested:
- `en` - English
- `hi` - Hindi

## Testing

Use the API instructions in `docs/API.md`.

## Important Notes

- AI responses are educational and are not a substitute for professional medical care.
- Do not commit API keys, passwords, credentials, or `.env` files.
- The production webhook must be protected against abuse before public release.
- No database or chat-history persistence is currently included in the tested n8n workflow.
