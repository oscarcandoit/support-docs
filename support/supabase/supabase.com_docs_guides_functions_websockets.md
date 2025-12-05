---
url: "https://supabase.com/docs/guides/functions/websockets"
title: "Handling WebSockets | Supabase Docs"
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
3. Advanced Features
5. [WebSockets](https://supabase.com/docs/guides/functions/websockets)

# Handling WebSockets

## Handle WebSocket connections in Edge Functions.

* * *

Edge Functions supports hosting WebSocket servers that can facilitate bi-directional communications with browser clients.

This allows you to:

- Build real-time applications like chat or live updates
- Create WebSocket relay servers for external APIs
- Establish both incoming and outgoing WebSocket connections

* * *

## Creating WebSocket servers [\#](https://supabase.com/docs/guides/functions/websockets\#creating-websocket-servers)

Here are some basic examples of setting up WebSocket servers using Deno and Node.js APIs.

DenoNode.js

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

Deno.serve((req) => {  const upgrade = req.headers.get('upgrade') || ''  if (upgrade.toLowerCase() != 'websocket') {    return new Response("request isn't trying to upgrade to WebSocket.", { status: 400 })  }  const { socket, response } = Deno.upgradeWebSocket(req)  socket.onopen = () => console.log('socket opened')  socket.onmessage = (e) => {    console.log('socket message:', e.data)    socket.send(new Date().toString())  }  socket.onerror = (e) => console.log('socket errored:', e.message)  socket.onclose = () => console.log('socket closed')  return response})
```

* * *

### Outbound WebSockets [\#](https://supabase.com/docs/guides/functions/websockets\#outbound-websockets)

You can also establish an outbound WebSocket connection to another server from an Edge Function.

Combining it with incoming WebSocket servers, it's possible to use Edge Functions as a WebSocket proxy, for example as a [relay server](https://github.com/supabase-community/openai-realtime-console?tab=readme-ov-file#using-supabase-edge-functions-as-a-relay-server) for the [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime/overview).

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

import { createServer } from "node:http";import { WebSocketServer } from "npm:ws";import { RealtimeClient } from "https://raw.githubusercontent.com/openai/openai-realtime-api-beta/refs/heads/main/lib/client.js";// ...const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");const server = createServer();// Since we manually created the HTTP server,// turn on the noServer mode.const wss = new WebSocketServer({ noServer: true });wss.on("connection", async (ws) => {  console.log("socket opened");  if (!OPENAI_API_KEY) {    throw new Error("OPENAI_API_KEY is not set");  }  // Instantiate new client  console.log(`Connecting with key "${OPENAI_API_KEY.slice(0, 3)}..."`);  const client = new RealtimeClient({ apiKey: OPENAI_API_KEY });  // Relay: OpenAI Realtime API Event -> Browser Event  client.realtime.on("server.*", (event) => {    console.log(`Relaying "${event.type}" to Client`);    ws.send(JSON.stringify(event));  });  client.realtime.on("close", () => ws.close());  // Relay: Browser Event -> OpenAI Realtime API Event  // We need to queue data waiting for the OpenAI connection  const messageQueue = [];  const messageHandler = (data) => {    try {      const event = JSON.parse(data);      console.log(`Relaying "${event.type}" to OpenAI`);      client.realtime.send(event.type, event);    } catch (e) {      console.error(e.message);      console.log(`Error parsing event from client: ${data}`);    }  };  ws.on("message", (data) => {    if (!client.isConnected()) {      messageQueue.push(data);    } else {      messageHandler(data);    }  });  ws.on("close", () => client.disconnect());  // Connect to OpenAI Realtime API  try {    console.log(`Connecting to OpenAI...`);    await client.connect();  } catch (e) {    console.log(`Error connecting to OpenAI: ${e.message}`);    ws.close();    return;  }  console.log(`Connected to OpenAI successfully!`);  while (messageQueue.length) {    messageHandler(messageQueue.shift());  }});server.on("upgrade", (req, socket, head) => {  wss.handleUpgrade(req, socket, head, (ws) => {    wss.emit("connection", ws, req);  });});server.listen(8080);
```

[View source](https://github.com/supabase-community/openai-realtime-console/blob/0f93657a71670704fbf77c48cf54d6c9eb956698/supabase/functions/relay/index.ts)

* * *

## Authentication [\#](https://supabase.com/docs/guides/functions/websockets\#authentication)

WebSocket browser clients don't have the option to send custom headers. Because of this, Edge Functions won't be able to perform the usual authorization header check to verify the JWT.

You can skip the default authorization header checks by explicitly providing `--no-verify-jwt` when serving and deploying functions.

To authenticate the user making WebSocket requests, you can pass the JWT in URL query params or via a custom protocol.

Using query paramsUsing custom protocol

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

import { createClient } from 'npm:@supabase/supabase-js@2'const supabase = createClient(  Deno.env.get('SUPABASE_URL'),  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'))Deno.serve((req) => {  const upgrade = req.headers.get('upgrade') || ''  if (upgrade.toLowerCase() != 'WebSocket') {    return new Response("request isn't trying to upgrade to WebSocket.", { status: 400 })  }  // Please be aware query params may be logged in some logging systems.  const url = new URL(req.url)  const jwt = url.searchParams.get('jwt')  if (!jwt) {    console.error('Auth token not provided')    return new Response('Auth token not provided', { status: 403 })  }  const { error, data } = await supabase.auth.getClaims()  if (error) {    console.error(error)    return new Response('Invalid token provided', { status: 403 })  }  if (!data.user) {    console.error('user is not authenticated')    return new Response('User is not authenticated', { status: 403 })  }  const { socket, response } = Deno.upgradeWebSocket(req)  socket.onopen = () => console.log('socket opened')  socket.onmessage = (e) => {    console.log('socket message:', e.data)    socket.send(new Date().toString())  }  socket.onerror = (e) => console.log('socket errored:', e.message)  socket.onclose = () => console.log('socket closed')  return response})
```

The maximum duration is capped based on the wall-clock, CPU, and memory limits. The Function will shutdown when it reaches one of these [limits](https://supabase.com/docs/guides/functions/limits).

* * *

## Testing WebSockets locally [\#](https://supabase.com/docs/guides/functions/websockets\#testing-websockets-locally)

When testing Edge Functions locally with Supabase CLI, the instances are terminated automatically after a request is completed. This will prevent keeping WebSocket connections open.

To prevent that, you can update the `supabase/config.toml` with the following settings:

```
1
2

[edge_runtime]policy = "per_worker"
```

When running with `per_worker` policy, Function won't auto-reload on edits. You will need to manually restart it by running `supabase functions serve`.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/websockets.mdx)

### Is this helpful?

NoYes

### On this page

[Creating WebSocket servers](https://supabase.com/docs/guides/functions/websockets#creating-websocket-servers) [Outbound WebSockets](https://supabase.com/docs/guides/functions/websockets#outbound-websockets) [Authentication](https://supabase.com/docs/guides/functions/websockets#authentication) [Testing WebSockets locally](https://supabase.com/docs/guides/functions/websockets#testing-websockets-locally)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)