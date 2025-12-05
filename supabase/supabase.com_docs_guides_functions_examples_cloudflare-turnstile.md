---
url: "https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile"
title: "CAPTCHA support with Cloudflare Turnstile | Supabase Docs"
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
5. [CAPTCHA support with Cloudflare Turnstile](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile)

# CAPTCHA support with Cloudflare Turnstile

* * *

[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) is a friendly, free CAPTCHA replacement, and it works seamlessly with Supabase Edge Functions to protect your forms. [View on GitHub](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/cloudflare-turnstile).

## Setup [\#](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile\#setup)

- Follow these steps to set up a new site: [https://developers.cloudflare.com/turnstile/get-started/](https://developers.cloudflare.com/turnstile/get-started/)
- Add the Cloudflare Turnstile widget to your site: [https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/)

## Code [\#](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile\#code)

Create a new function in your project:

```
1

supabase functions new cloudflare-turnstile
```

And add the code to the `index.ts` file:

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

import { corsHeaders } from '../_shared/cors.ts'console.log('Hello from Cloudflare Trunstile!')function ips(req: Request) {  return req.headers.get('x-forwarded-for')?.split(/\s*,\s*/)}Deno.serve(async (req) => {  // This is needed if you're planning to invoke your function from a browser.  if (req.method === 'OPTIONS') {    return new Response('ok', { headers: corsHeaders })  }  const { token } = await req.json()  const clientIps = ips(req) || ['']  const ip = clientIps[0]  // Validate the token by calling the  // "/siteverify" API endpoint.  let formData = new FormData()  formData.append('secret', Deno.env.get('CLOUDFLARE_SECRET_KEY') ?? '')  formData.append('response', token)  formData.append('remoteip', ip)  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'  const result = await fetch(url, {    body: formData,    method: 'POST',  })  const outcome = await result.json()  console.log(outcome)  if (outcome.success) {    return new Response('success', { headers: corsHeaders })  }  return new Response('failure', { headers: corsHeaders })})
```

## Deploy the server-side validation Edge Functions [\#](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile\#deploy-the-server-side-validation-edge-functions)

- [https://developers.cloudflare.com/turnstile/get-started/server-side-validation/](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

```
1
2

supabase functions deploy cloudflare-turnstilesupabase secrets set CLOUDFLARE_SECRET_KEY=your_secret_key
```

## Invoke the function from your site [\#](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile\#invoke-the-function-from-your-site)

```
1
2
3

const { data, error } = await supabase.functions.invoke('cloudflare-turnstile', {  body: { token },})
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/cloudflare-turnstile.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FOwW0znboh60%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Setup](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile#setup) [Code](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile#code) [Deploy the server-side validation Edge Functions](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile#deploy-the-server-side-validation-edge-functions) [Invoke the function from your site](https://supabase.com/docs/guides/functions/examples/cloudflare-turnstile#invoke-the-function-from-your-site)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)