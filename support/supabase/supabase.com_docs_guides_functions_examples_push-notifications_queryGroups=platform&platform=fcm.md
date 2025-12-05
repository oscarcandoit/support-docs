---
url: "https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm"
title: "Sending Push Notifications | Supabase Docs"
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

Edge Functions

1. [Edge Functions](https://supabase.com/docs/guides/functions)
3. Examples
5. [Sending Push Notifications](https://supabase.com/docs/guides/functions/examples/push-notifications)

# Sending Push Notifications

* * *

Push notifications are an important part of any mobile app. They allow you to send notifications to your users even when they are not using your app. This guide will show you how to send push notifications to different mobile app frameworks from your Supabase edge functions.

Expo Push NotificationsFirebase Cloud Messaging

Firebase Cloud Messaging (FCM) is a push notification service offered by Google that allows you to send push notifications to your users' devices on iOS, Android, and Web.

This guide will show you how to send push notifications to your app when a new row is inserted into a table using FCM, Supabase Edge Functions, and database web hooks.

## Supabase setup [\#](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm\#supabase-setup)

We will create two tables. One to store the user's FCM token and a `notifications` table. The edge function will be triggered when a new row is inserted into the `notifications` table and sends a push notification to the user.

Create a `notifications` table. Also create a `profiles` table if you don't already have one:

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

create table public.profiles (  id uuid references auth.users(id) not null primary key,  fcm_token text);create table public.notifications (  id uuid not null default gen_random_uuid(),  user_id uuid references auth.users(id) not null,  created_at timestamp with time zone not null default now(),  body text not null);
```

If you already have a `profiles` table, alter it to include an `fcm_token` column:

```
1
2

ALTER TABLE public.profilesADD COLUMN fcm_token text;
```

With the tables created, we can now create the edge function that will be triggered by database webhook when a notification is inserted.

Create the function using the following command:

```
1
2
3
4

# Initialize Supabase in your working directorysupabase init# Create the push edge functionsupabase functions new push
```

Add the following code to `supabase/functions/push/index.ts`:

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

import { createClient } from 'npm:@supabase/supabase-js@2'import { JWT } from 'npm:google-auth-library@9'import serviceAccount from '../service-account.json' with { type: 'json' }interface Notification {  id: string  user_id: string  body: string}interface WebhookPayload {  type: 'INSERT'  table: string  record: Notification  schema: 'public'}const supabase = createClient(  Deno.env.get('SUPABASE_URL')!,  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)Deno.serve(async (req) => {  const payload: WebhookPayload = await req.json()  const { data } = await supabase    .from('profiles')    .select('fcm_token')    .eq('id', payload.record.user_id)    .single()  const fcmToken = data!.fcm_token as string  const accessToken = await getAccessToken({    clientEmail: serviceAccount.client_email,    privateKey: serviceAccount.private_key,  })  const res = await fetch(    `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,    {      method: 'POST',      headers: {        'Content-Type': 'application/json',        Authorization: `Bearer ${accessToken}`,      },      body: JSON.stringify({        message: {          token: fcmToken,          notification: {            title: `Notification from Supabase`,            body: payload.record.body,          },        },      }),    }  )  const resData = await res.json()  if (res.status < 200 || 299 < res.status) {    throw resData  }  return new Response(JSON.stringify(resData), {    headers: { 'Content-Type': 'application/json' },  })})const getAccessToken = ({  clientEmail,  privateKey,}: {  clientEmail: string  privateKey: string}): Promise<string> => {  return new Promise((resolve, reject) => {    const jwtClient = new JWT({      email: clientEmail,      key: privateKey,      scopes: ['https://www.googleapis.com/auth/firebase.messaging'],    })    jwtClient.authorize((err, tokens) => {      if (err) {        reject(err)        return      }      resolve(tokens!.access_token!)    })  })}
```

## FCM setup [\#](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm\#fcm-setup)

1. Follow the official [FCM Setup Guide](https://firebase.google.com/docs/cloud-messaging) to set up FCM for your client side application.
2. Generate a new service account private key from the Firebase console `Project Settings > Service Accounts > Generate new private key`.
3. Save the service account private key as `service-account.json` under `supabase/functions` directory.

## Deploy the function [\#](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm\#deploy-the-function)

Deploy the function with the following command:

```
1
2
3
4

# Link your local Supabase project to the remote Supabase projectsupabase link# Deploy the functionsupabase functions deploy push --no-verify-jwt
```

## Create the database webhook [\#](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm\#create-the-database-webhook)

Navigate to the [Database Webhooks settings](https://supabase.com/dashboard/project/_/database/hooks) in your Supabase Dashboard.

1. Enable and create a new hook.
2. Conditions to fire webhook: Select the `public.notifications` table and tick the `Insert` event.
3. Webhook configuration: Supabase Edge Functions.
4. Edge Function: Select the `push` edge function and leave the method as `POST` and timeout as `1000`.
5. Click "Create webhook".

## Send push notification [\#](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm\#send-push-notification)

1. Make sure you have a user with an FCM token in the `profiles` table.
2. Navigate to the [table editor](https://supabase.com/dashboard/project/_/editor) in your Supabase Dashboard.
3. In your `notifications` table, insert a new row.
4. Watch the magic happen 🪄

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/push-notifications.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FxYRbYG77M_o%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Supabase setup](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm#supabase-setup) [FCM setup](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm#fcm-setup) [Deploy the function](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm#deploy-the-function) [Create the database webhook](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm#create-the-database-webhook) [Send push notification](https://supabase.com/docs/guides/functions/examples/push-notifications?queryGroups=platform&platform=fcm#send-push-notification)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)