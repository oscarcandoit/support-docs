---
url: "https://supabase.com/docs/guides/functions/routing"
title: "Handling Routing in Functions | Supabase Docs"
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
3. Development
5. [Routing](https://supabase.com/docs/guides/functions/routing)

# Handling Routing in Functions

## Handle custom routing within Edge Functions.

* * *

Usually, an Edge Function is written to perform a single action (e.g. write a record to the database). However, if your app's logic is split into multiple Edge Functions, requests to each action may seem slower.

Each Edge Function needs to be booted before serving a request (known as cold starts). If an action is performed less frequently (e.g. deleting a record), there is a high chance of that function experiencing a cold start.

One way to reduce cold starts and increase performance is to combine multiple actions into a single Edge Function. This way only one instance needs to be booted and it can handle multiple requests to different actions.

This allows you to:

- Reduce cold starts by combining multiple actions into one function
- Build complete REST APIs in a single function
- Improve performance by keeping one instance warm for multiple endpoints

* * *

For example, we can use a single Edge Function to create a typical CRUD API (create, read, update, delete records).

To combine multiple endpoints into a single Edge Function, you can use web application frameworks such as [Express](https://expressjs.com/), [Oak](https://oakserver.github.io/oak/), or [Hono](https://hono.dev/).

* * *

## Basic routing example [\#](https://supabase.com/docs/guides/functions/routing\#basic-routing-example)

Here's a simple hello world example using some popular web frameworks:

DenoExpressOakHono

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

import { Hono } from 'jsr:@hono/hono'const app = new Hono()app.post('/hello-world', async (c) => {  const { name } = await c.req.json()  return new Response(`Hello ${name}!`)})app.get('/hello-world', (c) => {  return new Response('Hello World!')})Deno.serve(app.fetch)
```

Within Edge Functions, paths should always be prefixed with the function name (in this case `hello-world`).

* * *

## Using route parameters [\#](https://supabase.com/docs/guides/functions/routing\#using-route-parameters)

You can use route parameters to capture values at specific URL segments (e.g. `/tasks/:taskId/notes/:noteId`).

Keep in mind paths must be prefixed by function name. Route parameters can only be used after the function name prefix.

DenoExpressOakHono

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

interface Task {  id: string  name: string}let tasks: Task[] = []const router = new Map<string, (req: Request) => Promise<Response>>()async function getAllTasks(): Promise<Response> {  return new Response(JSON.stringify(tasks))}async function getTask(id: string): Promise<Response> {  const task = tasks.find((t) => t.id === id)  if (task) {    return new Response(JSON.stringify(task))  } else {    return new Response('Task not found', { status: 404 })  }}async function createTask(req: Request): Promise<Response> {  const id = Math.random().toString(36).substring(7)  const task = { id, name: '' }  tasks.push(task)  return new Response(JSON.stringify(task), { status: 201 })}async function updateTask(id: string, req: Request): Promise<Response> {  const index = tasks.findIndex((t) => t.id === id)  if (index !== -1) {    tasks[index] = { ...tasks[index] }    return new Response(JSON.stringify(tasks[index]))  } else {    return new Response('Task not found', { status: 404 })  }}async function deleteTask(id: string): Promise<Response> {  const index = tasks.findIndex((t) => t.id === id)  if (index !== -1) {    tasks.splice(index, 1)    return new Response('Task deleted successfully')  } else {    return new Response('Task not found', { status: 404 })  }}Deno.serve(async (req) => {  const url = new URL(req.url)  const method = req.method  // Extract the last part of the path as the command  const command = url.pathname.split('/').pop()  // Assuming the last part of the path is the task ID  const id = command  try {    switch (method) {      case 'GET':        if (id) {          return getTask(id)        } else {          return getAllTasks()        }      case 'POST':        return createTask(req)      case 'PUT':        if (id) {          return updateTask(id, req)        } else {          return new Response('Bad Request', { status: 400 })        }      case 'DELETE':        if (id) {          return deleteTask(id)        } else {          return new Response('Bad Request', { status: 400 })        }      default:        return new Response('Method Not Allowed', { status: 405 })    }  } catch (error) {    return new Response(`Internal Server Error: ${error}`, { status: 500 })  }})
```

* * *

## URL Patterns API [\#](https://supabase.com/docs/guides/functions/routing\#url-patterns-api)

If you prefer not to use a web framework, you can directly use [URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API) within your Edge Functions to implement routing.

This works well for small apps with only a couple of routes:

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

// ...    // For more details on URLPattern, check https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API    const taskPattern = new URLPattern({ pathname: '/restful-tasks/:id' })    const matchingPath = taskPattern.exec(url)    const id = matchingPath ? matchingPath.pathname.groups.id : null    let task = null    if (method === 'POST' || method === 'PUT') {      const body = await req.json()      task = body.task    }    // call relevant method based on method and id    switch (true) {      case id && method === 'GET':        return getTask(supabaseClient, id as string)      case id && method === 'PUT':        return updateTask(supabaseClient, id as string, task)      case id && method === 'DELETE':        return deleteTask(supabaseClient, id as string)      case method === 'POST':        return createTask(supabaseClient, task)      case method === 'GET':        return getAllTasks(supabaseClient)      default:        return getAllTasks(supabaseClient)    // ...
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/edge-functions/supabase/functions/restful-tasks/index.ts) [Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/routing.mdx)

### Is this helpful?

NoYes

### On this page

[Basic routing example](https://supabase.com/docs/guides/functions/routing#basic-routing-example) [Using route parameters](https://supabase.com/docs/guides/functions/routing#using-route-parameters) [URL Patterns API](https://supabase.com/docs/guides/functions/routing#url-patterns-api)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)