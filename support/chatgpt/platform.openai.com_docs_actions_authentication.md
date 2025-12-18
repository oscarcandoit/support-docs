---
url: "https://platform.openai.com/docs/actions/authentication"
title: "GPT Action authentication | OpenAI API"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

Get started

[Overview](https://platform.openai.com/docs/overview)

[Quickstart](https://platform.openai.com/docs/quickstart)

[Models](https://platform.openai.com/docs/models)

[Pricing](https://platform.openai.com/docs/pricing)

[Libraries](https://platform.openai.com/docs/libraries)

[Latest: GPT-5.2](https://platform.openai.com/docs/guides/latest-model)

Core concepts

[Text generation](https://platform.openai.com/docs/guides/text)

[Code generation](https://platform.openai.com/docs/guides/code-generation)

[Images and vision](https://platform.openai.com/docs/guides/images-vision)

[Audio and speech](https://platform.openai.com/docs/guides/audio)

[Structured output](https://platform.openai.com/docs/guides/structured-outputs)

[Function calling](https://platform.openai.com/docs/guides/function-calling)

[Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)

Agents

[Overview](https://platform.openai.com/docs/guides/agents)

Build agents

Deploy in your product

Optimize

[Voice agents](https://platform.openai.com/docs/guides/voice-agents)

Tools

[Using tools](https://platform.openai.com/docs/guides/tools)

[Connectors and MCP](https://platform.openai.com/docs/guides/tools-connectors-mcp)

[Web search](https://platform.openai.com/docs/guides/tools-web-search)

[Code interpreter](https://platform.openai.com/docs/guides/tools-code-interpreter)

File search and retrieval

More tools

Run and scale

[Conversation state](https://platform.openai.com/docs/guides/conversation-state)

[Background mode](https://platform.openai.com/docs/guides/background)

[Streaming](https://platform.openai.com/docs/guides/streaming-responses)

[Webhooks](https://platform.openai.com/docs/guides/webhooks)

[File inputs](https://platform.openai.com/docs/guides/pdf-files)

Prompting

Reasoning

Evaluation

[Getting started](https://platform.openai.com/docs/guides/evaluation-getting-started)

[Working with evals](https://platform.openai.com/docs/guides/evals)

[Prompt optimizer](https://platform.openai.com/docs/guides/prompt-optimizer)

[External models](https://platform.openai.com/docs/guides/external-models)

[Best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)

Realtime API

[Overview](https://platform.openai.com/docs/guides/realtime)

Connect

Usage

Model optimization

[Optimization cycle](https://platform.openai.com/docs/guides/model-optimization)

Fine-tuning

[Graders](https://platform.openai.com/docs/guides/graders)

Specialized models

[Image generation](https://platform.openai.com/docs/guides/image-generation)

[Video generation](https://platform.openai.com/docs/guides/video-generation)

[Text to speech](https://platform.openai.com/docs/guides/text-to-speech)

[Speech to text](https://platform.openai.com/docs/guides/speech-to-text)

[Deep research](https://platform.openai.com/docs/guides/deep-research)

[Embeddings](https://platform.openai.com/docs/guides/embeddings)

[Moderation](https://platform.openai.com/docs/guides/moderation)

Coding agents

[Codex cloud](https://developers.openai.com/codex/cloud)

[Agent internet access](https://developers.openai.com/codex/cloud/agent-internet)

[Codex CLI](https://developers.openai.com/codex/cli)

[Codex IDE](https://developers.openai.com/codex/ide)

[Codex changelog](https://developers.openai.com/codex/changelog)

Going live

[Production best practices](https://platform.openai.com/docs/guides/production-best-practices)

Latency optimization

Cost optimization

[Accuracy optimization](https://platform.openai.com/docs/guides/optimizing-llm-accuracy)

Safety

Specialized APIs

Assistants API

Resources

[Terms and policies](https://openai.com/policies)

[Changelog](https://platform.openai.com/docs/changelog)

[Your data](https://platform.openai.com/docs/guides/your-data)

[Permissions](https://platform.openai.com/docs/guides/rbac)

[Rate limits](https://platform.openai.com/docs/guides/rate-limits)

[Deprecations](https://platform.openai.com/docs/deprecations)

[MCP for deep research](https://platform.openai.com/docs/mcp)

[Developer mode](https://platform.openai.com/docs/guides/developer-mode)

ChatGPT Actions

[Introduction](https://platform.openai.com/docs/actions/introduction)

[Getting started](https://platform.openai.com/docs/actions/getting-started)

[Actions library](https://platform.openai.com/docs/actions/actions-library)

[Authentication](https://platform.openai.com/docs/actions/authentication)

[Production](https://platform.openai.com/docs/actions/production)

[Data retrieval](https://platform.openai.com/docs/actions/data-retrieval)

[Sending files](https://platform.openai.com/docs/actions/sending-files)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

# GPT Action authentication

Learn authentication options for GPT Actions.

Copy page

Actions offer different authentication schemas to accommodate various use cases. To specify the authentication schema for your action, use the GPT editor and select "None", "API Key", or "OAuth".

By default, the authentication method for all actions is set to "None", but you can change this and allow different actions to have different authentication methods.

## No authentication

We support flows without authentication for applications where users can send requests directly to your API without needing an API key or signing in with OAuth.

Consider using no authentication for initial user interactions as you might experience a user drop off if they are forced to sign into an application. You can create a "signed out" experience and then move users to a "signed in" experience by enabling a separate action.

## API key authentication

Just like how a user might already be using your API, we allow API key authentication through the GPT editor UI. We encrypt the secret key when we store it in our database to keep your API key secure.

This approach is useful if you have an API that takes slightly more consequential actions than the no authentication flow but does not require an individual user to sign in. Adding API key authentication can protect your API and give you more fine-grained access controls along with visibility into where requests are coming from.

## OAuth

Actions allow OAuth sign in for each user. This is the best way to provide personalized experiences and make the most powerful actions available to users. A simple example of the OAuth flow with actions will look like the following:

- To start, select "Authentication" in the GPT editor UI, and select "OAuth".
- You will be prompted to enter the OAuth client ID, client secret, authorization URL, token URL, and scope.
  - The client ID and secret can be simple text strings but should [follow OAuth best practices](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/).
  - We store an encrypted version of the client secret, while the client ID is available to end users.
- OAuth requests will include the following information: `request={'grant_type': 'authorization_code', 'client_id': 'YOUR_CLIENT_ID', 'client_secret': 'YOUR_CLIENT_SECRET', 'code': 'abc123', 'redirect_uri': 'https://chat.openai.com/aip/{g-YOUR-GPT-ID-HERE}/oauth/callback'}` Note: `https://chatgpt.com/aip/{g-YOUR-GPT-ID-HERE}/oauth/callback` is also valid.
- In order for someone to use an action with OAuth, they will need to send a message that invokes the action and then the user will be presented with a "Sign in to \[domain\]" button in the ChatGPT UI.
- The `authorization_url` endpoint should return a response that looks like:
`{ "access_token": "example_token", "token_type": "bearer", "refresh_token": "example_token", "expires_in": 59 }`
- During the user sign in process, ChatGPT makes a request to your `authorization_url` using the specified `authorization_content_type`, we expect to get back an access token and optionally a [refresh token](https://auth0.com/learn/refresh-tokens) which we use to periodically fetch a new access token.
- Each time a user makes a request to the action, the user’s token will be passed in the Authorization header: ("Authorization": "\[Bearer/Basic\] \[user’s token\]").
- We require that OAuth applications make use of the [state parameter](https://auth0.com/docs/secure/attack-protection/state-parameters#set-and-compare-state-parameter-values) for security reasons.

Failure to login issues on Custom GPTs (Redirect URLs)?

- Be sure to enable this redirect URL in your OAuth application:
- #1 Redirect URL: `https://chat.openai.com/aip/{g-YOUR-GPT-ID-HERE}/oauth/callback` (Different domain possible for some clients)
- #2 Redirect URL: `https://chatgpt.com/aip/{g-YOUR-GPT-ID-HERE}/oauth/callback` (Get your GPT ID in the URL bar of the ChatGPT UI once you save) if you have several GPTs you'd need to enable for each or a wildcard depending on risk tolerance.
- Debug Note: Your Auth Provider will typically log failures (e.g. 'redirect\_uri is not registered for client'), which helps debug login issues as well.