---
url: "https://supabase.com/docs/guides/functions/connect-to-postgres"
title: "Integrating with Supabase Database (Postgres) | Supabase Docs"
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
3. Integrations
5. [Supabase Database (Postgres)](https://supabase.com/docs/guides/functions/connect-to-postgres)

# Integrating with Supabase Database (Postgres)

## Connect to your Postgres database from Edge Functions.

* * *

Connect to your Postgres database from an Edge Function by using the `supabase-js` client.
You can also use other Postgres clients like [Deno Postgres](https://deno.land/x/postgres)

* * *

## Using supabase-js [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#using-supabase-js)

The `supabase-js` client handles authorization with Row Level Security and automatically formats responses as JSON. This is the recommended approach for most applications:

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

import { createClient } from 'npm:@supabase/supabase-js@2'Deno.serve(async (req) => {  try {    const supabase = createClient(      Deno.env.get('SUPABASE_URL') ?? '',      Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ?? '',      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }    )    const { data, error } = await supabase.from('countries').select('*')    if (error) {      throw error    }    return new Response(JSON.stringify({ data }), {      headers: { 'Content-Type': 'application/json' },      status: 200,    })  } catch (err) {    return new Response(String(err?.message ?? err), { status: 500 })  }})
```

This enables:

- Automatic Row Level Security enforcement
- Built-in JSON serialization
- Consistent error handling
- TypeScript support for database schema

* * *

## Using a Postgres client [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#using-a-postgres-client)

Because Edge Functions are a server-side technology, it's safe to connect directly to your database using any popular Postgres client. This means you can run raw SQL from your Edge Functions.

Here is how you can connect to the database using Deno Postgres driver and run raw SQL. Check out the [full example](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/postgres-on-the-edge).

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

import { Pool } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'// Create a database pool with one connection.const pool = new Pool(  {    tls: { enabled: false },    database: 'postgres',    hostname: Deno.env.get('DB_HOSTNAME'),    user: Deno.env.get('DB_USER'),    port: 6543,    password: Deno.env.get('DB_PASSWORD'),  },  1)Deno.serve(async (_req) => {  try {    // Grab a connection from the pool    const connection = await pool.connect()    try {      // Run a query      const result = await connection.queryObject`SELECT * FROM animals`      const animals = result.rows // [{ id: 1, name: "Lion" }, ...]      // Encode the result as pretty printed JSON      const body = JSON.stringify(        animals,        (_key, value) => (typeof value === 'bigint' ? value.toString() : value),        2      )      // Return the response with the correct content type header      return new Response(body, {        status: 200,        headers: {          'Content-Type': 'application/json; charset=utf-8',        },      })    } finally {      // Release the connection back into the pool      connection.release()    }  } catch (err) {    console.error(err)    return new Response(String(err?.message ?? err), { status: 500 })  }})
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/edge-functions/supabase/functions/postgres-on-the-edge/index.ts)

* * *

## Using Drizzle [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#using-drizzle)

You can use Drizzle together with [Postgres.js](https://github.com/porsager/postgres). Both can be loaded directly from npm:

**Set up dependencies in `import_map.json`**:

```
1
2
3
4
5
6
7

{  "imports": {    "drizzle-orm": "npm:drizzle-orm@0.29.1",    "drizzle-orm/": "npm:/drizzle-orm@0.29.1/",    "postgres": "npm:postgres@3.4.3"  }}
```

**Use in your function**:

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

import { drizzle } from 'drizzle-orm/postgres-js'import postgres from 'postgres'import { countries } from '../_shared/schema.ts'const connectionString = Deno.env.get('SUPABASE_DB_URL')!Deno.serve(async (_req) => {  // Disable prefetch as it is not supported for "Transaction" pool mode  const client = postgres(connectionString, { prepare: false })  const db = drizzle(client)  const allCountries = await db.select().from(countries)  return Response.json(allCountries)})
```

You can find the full example on [GitHub](https://github.com/thorwebdev/edgy-drizzle).

* * *

## SSL connections [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#ssl-connections)

### Production [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#production)

Deployed edge functions are pre-configured to use SSL for connections to the Supabase database. You don't need to add any extra configurations.

### Local development [\#](https://supabase.com/docs/guides/functions/connect-to-postgres\#local-development)

If you want to use SSL connections during local development, follow these steps:

1. Download the SSL certificate from [Database Settings](https://supabase.com/dashboard/project/_/database/settings)
2. Add to your [local .env file](https://supabase.com/docs/guides/functions/secrets), add these two variables:

```
1
2

SSL_CERT_FILE=/path/to/cert.crt # set the path to the downloaded certDENO_TLS_CA_STORE=mozilla,system
```

Then, restart your local development server:

```
1

supabase functions serve your-function
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/connect-to-postgres.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2Fcl7EuF1-RsY%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Using supabase-js](https://supabase.com/docs/guides/functions/connect-to-postgres#using-supabase-js) [Using a Postgres client](https://supabase.com/docs/guides/functions/connect-to-postgres#using-a-postgres-client) [Using Drizzle](https://supabase.com/docs/guides/functions/connect-to-postgres#using-drizzle) [SSL connections](https://supabase.com/docs/guides/functions/connect-to-postgres#ssl-connections) [Production](https://supabase.com/docs/guides/functions/connect-to-postgres#production) [Local development](https://supabase.com/docs/guides/functions/connect-to-postgres#local-development)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)