---
url: "https://supabase.com/docs/guides/functions/http-methods"
title: "Routing | Supabase Docs"
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

# Routing

## Handle different request types in a single function to create efficient APIs.

* * *

## Overview [\#](https://supabase.com/docs/guides/functions/http-methods\#overview)

Edge Functions support **`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, and `OPTIONS`**. This means you can build complete REST APIs in a single function:

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

Deno.serve(async (req) => {  const { method, url } = req  const { pathname } = new URL(url)  // Route based on method and path  if (method === 'GET' && pathname === '/users') {    return getAllUsers()  } else if (method === 'POST' && pathname === '/users') {    return createUser(req)  }  return new Response('Not found', { status: 404 })})
```

Edge Functions allow you to build APIs without needing separate functions for each endpoint. This reduces cold starts and simplifies deployment while keeping your code organized.

HTML content is not supported. `GET` requests that return `text/html` will be rewritten to `text/plain`. Edge Functions are designed for APIs and data processing, not serving web pages. Use Supabase for your backend API and your favorite frontend framework for HTML.

* * *

## Example [\#](https://supabase.com/docs/guides/functions/http-methods\#example)

Here's a full example of a RESTful API built with Edge Functions.

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
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126

// Follow this setup guide to integrate the Deno language server with your editor:// https://deno.land/manual/getting_started/setup_your_environment// This enables autocomplete, go to definition, etc.import { createClient, SupabaseClient } from 'npm:supabase-js@2'const corsHeaders = {  'Access-Control-Allow-Origin': '*',  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey',  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',}interface Task {  name: string  status: number}async function getTask(supabaseClient: SupabaseClient, id: string) {  const { data: task, error } = await supabaseClient.from('tasks').select('*').eq('id', id)  if (error) throw error  return new Response(JSON.stringify({ task }), {    headers: { ...corsHeaders, 'Content-Type': 'application/json' },    status: 200,  })}async function getAllTasks(supabaseClient: SupabaseClient) {  const { data: tasks, error } = await supabaseClient.from('tasks').select('*')  if (error) throw error  return new Response(JSON.stringify({ tasks }), {    headers: { ...corsHeaders, 'Content-Type': 'application/json' },    status: 200,  })}async function deleteTask(supabaseClient: SupabaseClient, id: string) {  const { error } = await supabaseClient.from('tasks').delete().eq('id', id)  if (error) throw error  return new Response(JSON.stringify({}), {    headers: { ...corsHeaders, 'Content-Type': 'application/json' },    status: 200,  })}async function updateTask(supabaseClient: SupabaseClient, id: string, task: Task) {  const { error } = await supabaseClient.from('tasks').update(task).eq('id', id)  if (error) throw error  return new Response(JSON.stringify({ task }), {    headers: { ...corsHeaders, 'Content-Type': 'application/json' },    status: 200,  })}async function createTask(supabaseClient: SupabaseClient, task: Task) {  const { error } = await supabaseClient.from('tasks').insert(task)  if (error) throw error  return new Response(JSON.stringify({ task }), {    headers: { ...corsHeaders, 'Content-Type': 'application/json' },    status: 200,  })}Deno.serve(async (req) => {  const { url, method } = req  // This is needed if you're planning to invoke your function from a browser.  if (method === 'OPTIONS') {    return new Response('ok', { headers: corsHeaders })  }  try {    // Create a Supabase client with the Auth context of the logged in user.    const supabaseClient = createClient(      // Supabase API URL - env var exported by default.      Deno.env.get('SUPABASE_URL') ?? '',      // Supabase API ANON KEY - env var exported by default.      Deno.env.get('SUPABASE_ANON_KEY') ?? '',      // Create client with Auth context of the user that called the function.      // This way your row-level-security (RLS) policies are applied.      {        global: {          headers: { Authorization: req.headers.get('Authorization')! },        },      }    )    // For more details on URLPattern, check https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API    const taskPattern = new URLPattern({ pathname: '/restful-tasks/:id' })    const matchingPath = taskPattern.exec(url)    const id = matchingPath ? matchingPath.pathname.groups.id : null    let task = null    if (method === 'POST' || method === 'PUT') {      const body = await req.json()      task = body.task    }    // call relevant method based on method and id    switch (true) {      case id && method === 'GET':        return getTask(supabaseClient, id as string)      case id && method === 'PUT':        return updateTask(supabaseClient, id as string, task)      case id && method === 'DELETE':        return deleteTask(supabaseClient, id as string)      case method === 'POST':        return createTask(supabaseClient, task)      case method === 'GET':        return getAllTasks(supabaseClient)      default:        return getAllTasks(supabaseClient)    }  } catch (error) {    console.error(error)    return new Response(JSON.stringify({ error: error.message }), {      headers: { ...corsHeaders, 'Content-Type': 'application/json' },      status: 400,    })  }})
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/edge-functions/supabase/functions/restful-tasks/index.ts) [Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/http-methods.mdx)

### Is this helpful?

NoYes

### On this page

[Overview](https://supabase.com/docs/guides/functions/http-methods#overview) [Example](https://supabase.com/docs/guides/functions/http-methods#example)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)