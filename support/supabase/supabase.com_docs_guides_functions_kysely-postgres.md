---
url: "https://supabase.com/docs/guides/functions/kysely-postgres"
title: "Type-Safe SQL with Kysely | Supabase Docs"
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
3. Third-Party Tools
5. [Type-Safe SQL with Kysely](https://supabase.com/docs/guides/functions/kysely-postgres)

# Type-Safe SQL with Kysely

* * *

Type-Safe SQL on the Edge with Kysely - YouTube

[Photo image of Supabase](https://www.youtube.com/channel/UCNTVzV1InxHV-YR0fSajqPQ?embeds_referring_euri=https%3A%2F%2Fsupabase.com%2F)

Supabase

69.3K subscribers

[Type-Safe SQL on the Edge with Kysely](https://www.youtube.com/watch?v=zd9a_Lk3jAc)

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

Supabase Edge Functions can [connect directly to your Postgres database](https://supabase.com/docs/guides/functions/connect-to-postgres) to execute SQL queries. [Kysely](https://github.com/kysely-org/kysely#kysely) is a type-safe and autocompletion-friendly typescript SQL query builder.

Combining Kysely with Deno Postgres gives you a convenient developer experience for interacting directly with your Postgres database.

## Code [\#](https://supabase.com/docs/guides/functions/kysely-postgres\#code)

Find the example on [GitHub](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/kysely-postgres)

Get your database connection credentials from the project's [**Connect** panel](https://supabase.com/dashboard/project/_/?showConnect=true) and store them in an `.env` file:

```
1
2
3
4
5

DB_HOSTNAME=DB_PASSWORD=DB_SSL_CERT="-----BEGIN CERTIFICATE-----GET YOUR CERT FROM YOUR PROJECT DASHBOARD-----END CERTIFICATE-----"
```

Create a `DenoPostgresDriver.ts` file to manage the connection to Postgres via [deno-postgres](https://deno-postgres.com/):

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
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151

import {  CompiledQuery,  DatabaseConnection,  Driver,  PostgresCursorConstructor,  QueryResult,  TransactionSettings,} from 'https://esm.sh/kysely@0.23.4'import { freeze, isFunction } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/object-utils.js'import { extendStackTrace } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/stack-trace-utils.js'import { Pool, PoolClient } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'export interface PostgresDialectConfig {  pool: Pool | (() => Promise<Pool>)  cursor?: PostgresCursorConstructor  onCreateConnection?: (connection: DatabaseConnection) => Promise<void>}const PRIVATE_RELEASE_METHOD = Symbol()export class PostgresDriver implements Driver {  readonly #config: PostgresDialectConfig  readonly #connections = new WeakMap<PoolClient, DatabaseConnection>()  #pool?: Pool  constructor(config: PostgresDialectConfig) {    this.#config = freeze({ ...config })  }  async init(): Promise<void> {    this.#pool = isFunction(this.#config.pool) ? await this.#config.pool() : this.#config.pool  }  async acquireConnection(): Promise<DatabaseConnection> {    const client = await this.#pool!.connect()    let connection = this.#connections.get(client)    if (!connection) {      connection = new PostgresConnection(client, {        cursor: this.#config.cursor ?? null,      })      this.#connections.set(client, connection)      // The driver must take care of calling `onCreateConnection` when a new      // connection is created. The `pg` module doesn't provide an async hook      // for the connection creation. We need to call the method explicitly.      if (this.#config?.onCreateConnection) {        await this.#config.onCreateConnection(connection)      }    }    return connection  }  async beginTransaction(    connection: DatabaseConnection,    settings: TransactionSettings  ): Promise<void> {    if (settings.isolationLevel) {      await connection.executeQuery(        CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`)      )    } else {      await connection.executeQuery(CompiledQuery.raw('begin'))    }  }  async commitTransaction(connection: DatabaseConnection): Promise<void> {    await connection.executeQuery(CompiledQuery.raw('commit'))  }  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {    await connection.executeQuery(CompiledQuery.raw('rollback'))  }  async releaseConnection(connection: PostgresConnection): Promise<void> {    connection[PRIVATE_RELEASE_METHOD]()  }  async destroy(): Promise<void> {    if (this.#pool) {      const pool = this.#pool      this.#pool = undefined      await pool.end()    }  }}interface PostgresConnectionOptions {  cursor: PostgresCursorConstructor | null}class PostgresConnection implements DatabaseConnection {  #client: PoolClient  #options: PostgresConnectionOptions  constructor(client: PoolClient, options: PostgresConnectionOptions) {    this.#client = client    this.#options = options  }  async executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {    try {      const result = await this.#client.queryObject<O>(compiledQuery.sql, [        ...compiledQuery.parameters,      ])      if (        result.command === 'INSERT' ||        result.command === 'UPDATE' ||        result.command === 'DELETE'      ) {        const numAffectedRows = BigInt(result.rowCount || 0)        return {          numUpdatedOrDeletedRows: numAffectedRows,          numAffectedRows,          rows: result.rows ?? [],        } as any      }      return {        rows: result.rows ?? [],      }    } catch (err) {      throw extendStackTrace(err, new Error())    }  }  async *streamQuery<O>(    _compiledQuery: CompiledQuery,    chunkSize: number  ): AsyncIterableIterator<QueryResult<O>> {    if (!this.#options.cursor) {      throw new Error(        "'cursor' is not present in your postgres dialect config. It's required to make streaming work in postgres."      )    }    if (!Number.isInteger(chunkSize) || chunkSize <= 0) {      throw new Error('chunkSize must be a positive integer')    }    // stream not available    return null  }  [PRIVATE_RELEASE_METHOD](): void {    this.#client.release()  }}
```

Create an `index.ts` file to execute a query on incoming requests:

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

import { serve } from 'https://deno.land/std@0.175.0/http/server.ts'import { Pool } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'import {  Kysely,  Generated,  PostgresAdapter,  PostgresIntrospector,  PostgresQueryCompiler,} from 'https://esm.sh/kysely@0.23.4'import { PostgresDriver } from './DenoPostgresDriver.ts'console.log(`Function "kysely-postgres" up and running!`)interface AnimalTable {  id: Generated<bigint>  animal: string  created_at: Date}// Keys of this interface are table names.interface Database {  animals: AnimalTable}// Create a database pool with one connection.const pool = new Pool(  {    tls: { caCertificates: [Deno.env.get('DB_SSL_CERT')!] },    database: 'postgres',    hostname: Deno.env.get('DB_HOSTNAME'),    user: 'postgres',    port: 5432,    password: Deno.env.get('DB_PASSWORD'),  },  1)// You'd create one of these when you start your app.const db = new Kysely<Database>({  dialect: {    createAdapter() {      return new PostgresAdapter()    },    createDriver() {      return new PostgresDriver({ pool })    },    createIntrospector(db: Kysely<unknown>) {      return new PostgresIntrospector(db)    },    createQueryCompiler() {      return new PostgresQueryCompiler()    },  },})serve(async (_req) => {  try {    // Run a query    const animals = await db.selectFrom('animals').select(['id', 'animal', 'created_at']).execute()    // Neat, it's properly typed \o/    console.log(animals[0].created_at.getFullYear())    // Encode the result as pretty printed JSON    const body = JSON.stringify(      animals,      (key, value) => (typeof value === 'bigint' ? value.toString() : value),      2    )    // Return the response with the correct content type header    return new Response(body, {      status: 200,      headers: {        'Content-Type': 'application/json; charset=utf-8',      },    })  } catch (err) {    console.error(err)    return new Response(String(err?.message ?? err), { status: 500 })  }})
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/kysely-postgres.mdx)

### Is this helpful?

NoYes

### On this page

[Code](https://supabase.com/docs/guides/functions/kysely-postgres#code)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)