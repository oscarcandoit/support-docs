---
url: "https://supabase.com/docs/guides/functions/examples/discord-bot"
title: "Building a Discord Bot | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Edge Functions](https://supabase.com/docs/guides/functions)

[Overview](https://supabase.com/docs/guides/functions)

Getting started[Quickstart (Dashboard)](https://supabase.com/docs/guides/functions/quickstart-dashboard)
[Quickstart (CLI)](https://supabase.com/docs/guides/functions/quickstart)
[Development Environment](https://supabase.com/docs/guides/functions/development-environment)
[Architecture](https://supabase.com/docs/guides/functions/architecture)

Configuration[Environment Variables](https://supabase.com/docs/guides/functions/secrets)
[Managing Dependencies](https://supabase.com/docs/guides/functions/dependencies)
[Function Configuration](https://supabase.com/docs/guides/functions/function-configuration)

Development[Error Handling](https://supabase.com/docs/guides/functions/error-handling)
[Routing](https://supabase.com/docs/guides/functions/routing)
[Deploy to Production](https://supabase.com/docs/guides/functions/deploy)

Debugging[Local Debugging with DevTools](https://supabase.com/docs/guides/functions/debugging-tools)
[Testing your Functions](https://supabase.com/docs/guides/functions/unit-test)
[Logging](https://supabase.com/docs/guides/functions/logging)
[Troubleshooting](https://supabase.com/docs/guides/functions/troubleshooting)

Platform[Regional invocations](https://supabase.com/docs/guides/functions/regional-invocation)
[Status codes](https://supabase.com/docs/guides/functions/status-codes)
[Limits](https://supabase.com/docs/guides/functions/limits)
[Pricing](https://supabase.com/docs/guides/functions/pricing)

Integrations[Supabase Auth](https://supabase.com/docs/guides/functions/auth)
[Supabase Database (Postgres)](https://supabase.com/docs/guides/functions/connect-to-postgres)
[Supabase Storage](https://supabase.com/docs/guides/functions/storage-caching)

Advanced Features[Background Tasks](https://supabase.com/docs/guides/functions/background-tasks)
[File Storage](https://supabase.com/docs/guides/functions/ephemeral-storage)
[WebSockets](https://supabase.com/docs/guides/functions/websockets)
[Custom Routing](https://supabase.com/docs/guides/functions/routing)
[Wasm Modules](https://supabase.com/docs/guides/functions/wasm)
[AI Models](https://supabase.com/docs/guides/functions/ai-models)

Examples[Auth Send Email Hook](https://supabase.com/docs/guides/functions/examples/auth-send-email-hook-react-email-resend)
[Building an MCP Server with mcp-lite](https://supabase.com/docs/guides/functions/examples/mcp-server-mcp-lite)
[CORS support for invoking from the browser](https://supabase.com/docs/guides/functions/cors)
[Scheduling Functions](https://supabase.com/docs/guides/functions/schedule-functions)
[Sending Push Notifications](https://supabase.com/docs/guides/functions/examples/push-notifications)
[Generating AI images](https://supabase.com/docs/guides/functions/examples/amazon-bedrock-image-generator)
[Generating OG images](https://supabase.com/docs/guides/functions/examples/og-image)
[Semantic AI Search](https://supabase.com/docs/guides/functions/examples/semantic-search)
[CAPTCHA support with Cloudflare Turnstile](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile)
[Building a Discord Bot](https://supabase.com/docs/guides/functions/examples/discord-bot)
[Building a Telegram Bot](https://supabase.com/docs/guides/functions/examples/telegram-bot)
[Handling Stripe Webhooks](https://supabase.com/docs/guides/functions/examples/stripe-webhooks)
[Rate-limiting with Redis](https://supabase.com/docs/guides/functions/examples/rate-limiting)
[Taking Screenshots with Puppeteer](https://supabase.com/docs/guides/functions/examples/screenshots)
[Slack Bot responding to mentions](https://supabase.com/docs/guides/functions/examples/slack-bot-mention)
[Image Transformation & Optimization](https://supabase.com/docs/guides/functions/examples/image-manipulation)

Third-Party Tools[Dart Edge on Supabase](https://supabase.com/docs/guides/functions/dart-edge)
[mcp-lite (Model Context Protocol)](https://supabase.com/docs/guides/functions/examples/mcp-server-mcp-lite)
[Browserless.io](https://supabase.com/docs/guides/functions/examples/screenshots)
[Hugging Face](https://supabase.com/docs/guides/ai/examples/huggingface-image-captioning)
[Monitoring with Sentry](https://supabase.com/docs/guides/functions/examples/sentry-monitoring)
[OpenAI API](https://supabase.com/docs/guides/ai/examples/openai)
[React Email](https://supabase.com/docs/guides/functions/examples/auth-send-email-hook-react-email-resend)
[Sending Emails with Resend](https://supabase.com/docs/guides/functions/examples/send-emails)
[Upstash Redis](https://supabase.com/docs/guides/functions/examples/upstash-redis)
[Type-Safe SQL with Kysely](https://supabase.com/docs/guides/functions/kysely-postgres)
[Text To Speech with ElevenLabs](https://supabase.com/docs/guides/functions/examples/elevenlabs-generate-speech-stream)
[Speech Transcription with ElevenLabs](https://supabase.com/docs/guides/functions/examples/elevenlabs-transcribe-speech)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Edge Functions

1. [Edge Functions](https://supabase.com/docs/guides/functions)
3. Examples
5. [Building a Discord Bot](https://supabase.com/docs/guides/functions/examples/discord-bot)

# Building a Discord Bot

* * *

Discord Bots with Edge Functions - YouTube

[Photo image of Supabase](https://www.youtube.com/channel/UCNTVzV1InxHV-YR0fSajqPQ?embeds_referring_euri=https%3A%2F%2Fsupabase.com%2F)

Supabase

69.3K subscribers

[Discord Bots with Edge Functions](https://www.youtube.com/watch?v=J24Bvo_m7DM)

Supabase

Search

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

Watch on

0:00

/

•Live

•

## Create an application on Discord Developer portal [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#create-an-application-on-discord-developer-portal)

1. Go to [https://discord.com/developers/applications](https://discord.com/developers/applications) (login using your discord account if required).
2. Click on **New Application** button available at left side of your profile picture.
3. Name your application and click on **Create**.
4. Go to **Bot** section, click on **Add Bot**, and finally on **Yes, do it!** to confirm.

A new application is created which will hold our Slash Command. Don't close the tab as we need information from this application page throughout our development.

Before we can write some code, we need to curl a discord endpoint to register a Slash Command in our app.

Fill `DISCORD_BOT_TOKEN` with the token available in the **Bot** section and `CLIENT_ID` with the ID available on the **General Information** section of the page and run the command on your terminal.

```
1
2
3
4
5
6
7

BOT_TOKEN='replace_me_with_bot_token'CLIENT_ID='replace_me_with_client_id'curl -X POST \-H 'Content-Type: application/json' \-H "Authorization: Bot $BOT_TOKEN" \-d '{"name":"hello","description":"Greet a person","options":[{"name":"name","description":"The name of the person","type":3,"required":true}]}' \"https://discord.com/api/v8/applications/$CLIENT_ID/commands"
```

This will register a Slash Command named `hello` that accepts a parameter named `name` of type string.

## Code [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#code)

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94

// Sift is a small routing library that abstracts away details like starting a// listener on a port, and provides a simple function (serve) that has an API// to invoke a function for a specific path.import { json, serve, validateRequest } from 'https://deno.land/x/sift@0.6.0/mod.ts'// TweetNaCl is a cryptography library that we use to verify requests// from Discord.import nacl from 'https://cdn.skypack.dev/tweetnacl@v1.0.3?dts'enum DiscordCommandType {  Ping = 1,  ApplicationCommand = 2,}// For all requests to "/" endpoint, we want to invoke home() handler.serve({  '/discord-bot': home,})// The main logic of the Discord Slash Command is defined in this function.async function home(request: Request) {  // validateRequest() ensures that a request is of POST method and  // has the following headers.  const { error } = await validateRequest(request, {    POST: {      headers: ['X-Signature-Ed25519', 'X-Signature-Timestamp'],    },  })  if (error) {    return json({ error: error.message }, { status: error.status })  }  // verifySignature() verifies if the request is coming from Discord.  // When the request's signature is not valid, we return a 401 and this is  // important as Discord sends invalid requests to test our verification.  const { valid, body } = await verifySignature(request)  if (!valid) {    return json(      { error: 'Invalid request' },      {        status: 401,      }    )  }  const { type = 0, data = { options: [] } } = JSON.parse(body)  // Discord performs Ping interactions to test our application.  // Type 1 in a request implies a Ping interaction.  if (type === DiscordCommandType.Ping) {    return json({      type: 1, // Type 1 in a response is a Pong interaction response type.    })  }  // Type 2 in a request is an ApplicationCommand interaction.  // It implies that a user has issued a command.  if (type === DiscordCommandType.ApplicationCommand) {    const { value } = data.options.find(      (option: { name: string; value: string }) => option.name === 'name'    )    return json({      // Type 4 responds with the below message retaining the user's      // input at the top.      type: 4,      data: {        content: `Hello, ${value}!`,      },    })  }  // We will return a bad request error as a valid Discord request  // shouldn't reach here.  return json({ error: 'bad request' }, { status: 400 })}/** Verify whether the request is coming from Discord. */async function verifySignature(request: Request): Promise<{ valid: boolean; body: string }> {  const PUBLIC_KEY = Deno.env.get('DISCORD_PUBLIC_KEY')!  // Discord sends these headers with every request.  const signature = request.headers.get('X-Signature-Ed25519')!  const timestamp = request.headers.get('X-Signature-Timestamp')!  const body = await request.text()  const valid = nacl.sign.detached.verify(    new TextEncoder().encode(timestamp + body),    hexToUint8Array(signature),    hexToUint8Array(PUBLIC_KEY)  )  return { valid, body }}/** Converts a hexadecimal string to Uint8Array. */function hexToUint8Array(hex: string) {  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)))}
```

## Deploy the slash command handler [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#deploy-the-slash-command-handler)

```
1
2

supabase functions deploy discord-bot --no-verify-jwtsupabase secrets set DISCORD_PUBLIC_KEY=your_public_key
```

Navigate to your Function details in the Supabase Dashboard to get your Endpoint URL.

### Configure Discord application to use our URL as interactions endpoint URL [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#configure-discord-application-to-use-our-url-as-interactions-endpoint-url)

1. Go back to your application (Greeter) page on Discord Developer Portal
2. Fill **INTERACTIONS ENDPOINT URL** field with the URL and click on **Save Changes**.

The application is now ready. Let's proceed to the next section to install it.

## Install the slash command on your Discord server [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#install-the-slash-command-on-your-discord-server)

So to use the `hello` Slash Command, we need to install our Greeter application on our Discord server. Here are the steps:

1. Go to **OAuth2** section of the Discord application page on Discord Developer Portal
2. Select `applications.commands` scope and click on the **Copy** button below.
3. Now paste and visit the URL on your browser. Select your server and click on **Authorize**.

Open Discord, type `/Promise` and press **Enter**.

## Run locally [\#](https://supabase.com/docs/guides/functions/examples/discord-bot\#run-locally)

```
1
2

supabase functions serve discord-bot --no-verify-jwt --env-file ./supabase/.env.localngrok http 54321
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/discord-bot.mdx)

### Is this helpful?

NoYes

### On this page

[Create an application on Discord Developer portal](https://supabase.com/docs/guides/functions/examples/discord-bot#create-an-application-on-discord-developer-portal) [Code](https://supabase.com/docs/guides/functions/examples/discord-bot#code) [Deploy the slash command handler](https://supabase.com/docs/guides/functions/examples/discord-bot#deploy-the-slash-command-handler) [Configure Discord application to use our URL as interactions endpoint URL](https://supabase.com/docs/guides/functions/examples/discord-bot#configure-discord-application-to-use-our-url-as-interactions-endpoint-url) [Install the slash command on your Discord server](https://supabase.com/docs/guides/functions/examples/discord-bot#install-the-slash-command-on-your-discord-server) [Run locally](https://supabase.com/docs/guides/functions/examples/discord-bot#run-locally)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)