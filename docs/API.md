
# LunaCare AI API Documentation

## Production Endpoint

POST https://anshuman-singh.app.n8n.cloud/webhook/lunacare-ask

## Headers

Content-Type: application/json

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| question | string | Yes | User's menstrual-health question |
| language | string | No | Preferred language, such as `en` or `hi` |

Example:

{
  "question": "Periods ke dauran pet mein dard kyun hota hai?",
  "language": "hi"
}

## Successful Response

{
  "project": "LunaCare",
  "success": true,
  "answer": "AI-generated response"
}

## Test With cURL

curl -i --max-time 110 -X POST \
  "https://anshuman-singh.app.n8n.cloud/webhook/lunacare-ask" \
  -H "Content-Type: application/json" \
  -d '{"question":"How can I track my menstrual cycle?","language":"en"}'

## Integration Notes

- Send a POST request with a JSON body.
- Read the response's `answer` field to display the AI response.
- Handle network errors and unsuccessful HTTP responses in the frontend.
- Do not assume every response will be medically correct.
- Do not send personal health information unless the product's privacy arrangements support it.

## Current Limitations

- The tested endpoint does not persist chat history.
- The tested workflow does not use a database.
- Authentication and rate limiting have not been confirmed.
- The language field has been tested with English and Hindi questions, but all possible language inputs have not been tested.
