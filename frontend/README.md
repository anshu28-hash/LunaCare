# LunaCare frontend

React + Vite frontend integrated with the supplied Node.js backend.

## Run backend (in the original backend folder)

1. `cd backend`
2. `npm install`
3. Create `.env` with `PORT=3000` and `N8N_WEBHOOK_URL=<your active n8n webhook URL>` (obtain this from the backend owner; don't commit it).
4. `npm start`
5. Check http://localhost:3000/health

The n8n production workflow must be active and return `{ "success": true, "answer": "..." }` to the backend. Backend fetch timeout is 30 seconds. Never put the webhook or Gemini keys in frontend environment variables.

## Run frontend (separate terminal)

1. `npm install`
2. `npm run dev`
3. Open the Vite URL shown in terminal (typically http://localhost:5173).

Vite proxies `/api` to http://localhost:3000 locally. To use a deployed backend, copy `.env.example` to `.env` and set `VITE_API_URL=https://your-backend-host.example` (no `/api/ask` suffix), then restart Vite or rebuild. The backend's CORS settings should be restricted to your frontend origin for production. Do not put sensitive personal health data into questions; this demo has no verified authentication, privacy policy, or rate limiting.

## API contract

POST `/api/ask` with `{ "question": "Why is my period late?", "language": "en" }`. The UI reads `success`, `answer`, and error `error`. Languages: `en` and `hi`; max question length 2000 characters. Conversation history is only held in browser memory, not sent to the backend.

## Build

`npm run build`
