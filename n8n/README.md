
# LunaCare n8n Workflow

## Workflow

The LunaCare AI Agent workflow currently contains:

1. Webhook - receives the user's question.
2. AI Agent - processes the question and generates an answer.
3. Google Gemini Chat Model - supplies the language model.
4. Respond to Webhook - returns the JSON response.

## Production Endpoint

https://anshuman-singh.app.n8n.cloud/webhook/lunacare-ask

## Workflow Backup

Export the workflow from n8n and save the exported JSON file in this folder as:

LunaCare-workflow.json

Before sharing the export, inspect it for private information. Never share API keys, tokens, or credentials.

## Restore Notes

To restore the workflow, import the JSON into n8n and configure the required Gemini credentials in the destination account. Verify the webhook path and response configuration before publishing.

## Important

The workflow export is a backup of the workflow configuration. It does not include the actual Gemini API secret or guarantee that another n8n account has the required credentials.
