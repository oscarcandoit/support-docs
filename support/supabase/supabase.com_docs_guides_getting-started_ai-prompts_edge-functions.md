---
url: "https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions"
title: "AI Prompt: Writing Supabase Edge Functions | Supabase Docs"
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

[Start with Supabase](https://supabase.com/docs/guides/getting-started)

[Features](https://supabase.com/docs/guides/getting-started/features)

[Architecture](https://supabase.com/docs/guides/getting-started/architecture)

Framework Quickstarts[Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
[Nuxt](https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs)
[Vue](https://supabase.com/docs/guides/getting-started/quickstarts/vue)
[Hono](https://supabase.com/docs/guides/getting-started/quickstarts/hono)
[Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)
[iOS SwiftUI](https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/quickstarts/kotlin)
[SvelteKit](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
[Laravel PHP](https://supabase.com/docs/guides/getting-started/quickstarts/laravel)
[Ruby on Rails](https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails)
[SolidJS](https://supabase.com/docs/guides/getting-started/quickstarts/solidjs)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs)
[Refine](https://supabase.com/docs/guides/getting-started/quickstarts/refine)

Web app demos[Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
[React](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
[Vue 3](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3)
[Nuxt 3](https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3)
[Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-angular)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs)
[SolidJS](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs)
[Svelte](https://supabase.com/docs/guides/getting-started/tutorials/with-svelte)
[SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)
[Refine](https://supabase.com/docs/guides/getting-started/tutorials/with-refine)

Mobile tutorials[Flutter](https://supabase.com/docs/guides/getting-started/tutorials/with-flutter)
[Expo React Native](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/tutorials/with-kotlin)
[Ionic React](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react)
[Ionic Vue](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue)
[Ionic Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular)
[Swift](https://supabase.com/docs/guides/getting-started/tutorials/with-swift)

AI Tools

Prompts

[Supabase Realtime AI Assistant Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime)
[Bootstrap Next.js app with Supabase Auth](https://supabase.com/docs/guides/getting-started/ai-prompts/nextjs-supabase-auth)
[Writing Supabase Edge Functions](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions)
[Database: Declarative Database Schema](https://supabase.com/docs/guides/getting-started/ai-prompts/declarative-database-schema)
[Database: Create RLS policies](https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies)
[Database: Create functions](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions)
[Database: Create migration](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration)
[Postgres SQL Style Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql)

[Model context protocol (MCP)](https://supabase.com/docs/guides/getting-started/mcp)

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

Getting Started

1. [Getting started](https://supabase.com/docs/guides/getting-started)
3. AI Tools
5. [Prompts](https://supabase.com/docs/guides/getting-started/ai-prompts)

# AI Prompt: Writing Supabase Edge Functions

* * *

## How to use [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions\#how-to-use)

Copy the prompt to a file in your repo.

Use the "include file" feature from your AI tool to include the prompt when chatting with your AI assistant. For example, with GitHub Copilot, use `#<filename>`, in Cursor, use `@Files`, and in Zed, use `/file`.

You can also load the prompt directly into your IDE via the following links:

- [Open in Cursor](cursor://anysphere.cursor-deeplink/prompt?text=%23+Writing+Supabase+Edge+Functions%0A%0AYou%27re+an+expert+in+writing+TypeScript+and+Deno+JavaScript+runtime.+Generate+**high-quality+Supabase+Edge+Functions**+that+adhere+to+the+following+best+practices%3A%0A%0A%23%23+Guidelines%0A%0A1.+Try+to+use+Web+APIs+and+Deno%E2%80%99s+core+APIs+instead+of+external+dependencies+%28eg%3A+use+fetch+instead+of+Axios%2C+use+WebSockets+API+instead+of+node-ws%29%0A2.+If+you+are+reusing+utility+methods+between+Edge+Functions%2C+add+them+to+%60supabase%2Ffunctions%2F_shared%60+and+import+using+a+relative+path.+Do+NOT+have+cross+dependencies+between+Edge+Functions.%0A3.+Do+NOT+use+bare+specifiers+when+importing+dependecnies.+If+you+need+to+use+an+external+dependency%2C+make+sure+it%27s+prefixed+with+either+%60npm%3A%60+or+%60jsr%3A%60.+For+example%2C+%60%40supabase%2Fsupabase-js%60+should+be+written+as+%60npm%3A%40supabase%2Fsupabase-js%60.%0A4.+For+external+imports%2C+always+define+a+version.+For+example%2C+%60npm%3A%40express%60+should+be+written+as+%60npm%3Aexpress%404.18.2%60.%0A5.+For+external+dependencies%2C+importing+via+%60npm%3A%60+and+%60jsr%3A%60+is+preferred.+Minimize+the+use+of+imports+from+%40%60deno.land%2Fx%60+%2C+%60esm.sh%60+and+%40%60unpkg.com%60+.+If+you+have+a+package+from+one+of+those+CDNs%2C+you+can+replace+the+CDN+hostname+with+%60npm%3A%60+specifier.%0A6.+You+can+also+use+Node+built-in+APIs.+You+will+need+to+import+them+using+%60node%3A%60+specifier.+For+example%2C+to+import+Node+process%3A+%60import+process+from+%22node%3Aprocess%22.+Use+Node+APIs+when+you+find+gaps+in+Deno+APIs.%0A7.+Do+NOT+use+%60import+%7B+serve+%7D+from+%22https%3A%2F%2Fdeno.land%2Fstd%400.168.0%2Fhttp%2Fserver.ts%22%60.+Instead+use+the+built-in+%60Deno.serve%60.%0A8.+Following+environment+variables+%28ie.+secrets%29+are+pre-populated+in+both+local+and+hosted+Supabase+environments.+Users+don%27t+need+to+manually+set+them%3A%0A%09*+SUPABASE_URL%0A%09*+SUPABASE_ANON_KEY%0A%09*+SUPABASE_SERVICE_ROLE_KEY%0A%09*+SUPABASE_DB_URL%0A9.+To+set+other+environment+variables+%28ie.+secrets%29+users+can+put+them+in+a+env+file+and+run+the+%60supabase+secrets+set+--env-file+path%2Fto%2Fenv-file%60%0A10.+A+single+Edge+Function+can+handle+multiple+routes.+It+is+recommended+to+use+a+library+like+Express+or+Hono+to+handle+the+routes+as+it%27s+easier+for+developer+to+understand+and+maintain.+Each+route+must+be+prefixed+with+%60%2Ffunction-name%60+so+they+are+routed+correctly.%0A11.+File+write+operations+are+ONLY+permitted+on+%60%2Ftmp%60+directory.+You+can+use+either+Deno+or+Node+File+APIs.%0A12.+Use+%60EdgeRuntime.waitUntil%28promise%29%60+static+method+to+run+long-running+tasks+in+the+background+without+blocking+response+to+a+request.+Do+NOT+assume+it+is+available+in+the+request+%2F+execution+context.%0A%0A%23%23+Example+Templates%0A%0A%23%23%23+Simple+Hello+World+Function%0A%0A%60%60%60tsx%0Ainterface+reqPayload+%7B%0A%09name%3A+string%3B%0A%7D%0A%0Aconsole.info%28%27server+started%27%29%3B%0A%0ADeno.serve%28async+%28req%3A+Request%29+%3D%3E+%7B%0A%09const+%7B+name+%7D%3A+reqPayload+%3D+await+req.json%28%29%3B%0A%09const+data+%3D+%7B%0A%09%09message%3A+%60Hello+%24%7Bname%7D+from+foo%21%60%2C%0A%09%7D%3B%0A%0A%09return+new+Response%28%0A%09%09JSON.stringify%28data%29%2C%0A%09%09%7B+headers%3A+%7B+%27Content-Type%27%3A+%27application%2Fjson%27%2C+%27Connection%27%3A+%27keep-alive%27+%7D%7D%0A%09%09%29%3B%0A%7D%29%3B%0A%0A%60%60%60%0A%0A%23%23%23+Example+Function+using+Node+built-in+API%0A%0A%60%60%60tsx%0Aimport+%7B+randomBytes+%7D+from+%22node%3Acrypto%22%3B%0Aimport+%7B+createServer+%7D+from+%22node%3Ahttp%22%3B%0Aimport+process+from+%22node%3Aprocess%22%3B%0A%0Aconst+generateRandomString+%3D+%28length%29+%3D%3E+%7B%0A++++const+buffer+%3D+randomBytes%28length%29%3B%0A++++return+buffer.toString%28%27hex%27%29%3B%0A%7D%3B%0A%0Aconst+randomString+%3D+generateRandomString%2810%29%3B%0Aconsole.log%28randomString%29%3B%0A%0Aconst+server+%3D+createServer%28%28req%2C+res%29+%3D%3E+%7B%0A++++const+message+%3D+%60Hello%60%3B%0A++++res.end%28message%29%3B%0A%7D%29%3B%0A%0Aserver.listen%289999%29%3B%0A%60%60%60%0A%0A%23%23%23+Using+npm+packages+in+Functions%0A%0A%60%60%60tsx%0Aimport+express+from+%22npm%3Aexpress%404.18.2%22%3B%0A%0Aconst+app+%3D+express%28%29%3B%0A%0Aapp.get%28%2F%28.*%29%2F%2C+%28req%2C+res%29+%3D%3E+%7B%0A++++res.send%28%22Welcome+to+Supabase%22%29%3B%0A%7D%29%3B%0A%0Aapp.listen%288000%29%3B%0A%0A%60%60%60%0A%0A%23%23%23+Generate+embeddings+using+built-in+%40Supabase.ai+API%0A%0A%60%60%60tsx%0Aconst+model+%3D+new+Supabase.ai.Session%28%27gte-small%27%29%3B%0A%0ADeno.serve%28async+%28req%3A+Request%29+%3D%3E+%7B%0A%09const+params+%3D+new+URL%28req.url%29.searchParams%3B%0A%09const+input+%3D+params.get%28%27text%27%29%3B%0A%09const+output+%3D+await+model.run%28input%2C+%7B+mean_pool%3A+true%2C+normalize%3A+true+%7D%29%3B%0A%09return+new+Response%28%0A%09%09JSON.stringify%28%0A%09%09%09output%2C%0A%09%09%29%2C%0A%09%09%7B%0A%09%09%09headers%3A+%7B%0A%09%09%09%09%27Content-Type%27%3A+%27application%2Fjson%27%2C%0A%09%09%09%09%27Connection%27%3A+%27keep-alive%27%2C%0A%09%09%09%7D%2C%0A%09%09%7D%2C%0A%09%29%3B%0A%7D%29%3B%0A%0A%60%60%60)

## Prompt [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions\#prompt)

````
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

# Writing Supabase Edge FunctionsYou're an expert in writing TypeScript and Deno JavaScript runtime. Generate **high-quality Supabase Edge Functions** that adhere to the following best practices:## Guidelines1. Try to use Web APIs and Deno’s core APIs instead of external dependencies (eg: use fetch instead of Axios, use WebSockets API instead of node-ws)2. If you are reusing utility methods between Edge Functions, add them to `supabase/functions/_shared` and import using a relative path. Do NOT have cross dependencies between Edge Functions.3. Do NOT use bare specifiers when importing dependecnies. If you need to use an external dependency, make sure it's prefixed with either `npm:` or `jsr:`. For example, `@supabase/supabase-js` should be written as `npm:@supabase/supabase-js`.4. For external imports, always define a version. For example, `npm:@express` should be written as `npm:express@4.18.2`.5. For external dependencies, importing via `npm:` and `jsr:` is preferred. Minimize the use of imports from @`deno.land/x` , `esm.sh` and @`unpkg.com` . If you have a package from one of those CDNs, you can replace the CDN hostname with `npm:` specifier.6. You can also use Node built-in APIs. You will need to import them using `node:` specifier. For example, to import Node process: `import process from "node:process". Use Node APIs when you find gaps in Deno APIs.7. Do NOT use `import { serve } from "https://deno.land/std@0.168.0/http/server.ts"`. Instead use the built-in `Deno.serve`.8. Following environment variables (ie. secrets) are pre-populated in both local and hosted Supabase environments. Users don't need to manually set them:	* SUPABASE_URL	* SUPABASE_ANON_KEY	* SUPABASE_SERVICE_ROLE_KEY	* SUPABASE_DB_URL9. To set other environment variables (ie. secrets) users can put them in a env file and run the `supabase secrets set --env-file path/to/env-file`10. A single Edge Function can handle multiple routes. It is recommended to use a library like Express or Hono to handle the routes as it's easier for developer to understand and maintain. Each route must be prefixed with `/function-name` so they are routed correctly.11. File write operations are ONLY permitted on `/tmp` directory. You can use either Deno or Node File APIs.12. Use `EdgeRuntime.waitUntil(promise)` static method to run long-running tasks in the background without blocking response to a request. Do NOT assume it is available in the request / execution context.## Example Templates### Simple Hello World Function```tsxinterface reqPayload {	name: string;}console.info('server started');Deno.serve(async (req: Request) => {	const { name }: reqPayload = await req.json();	const data = {		message: `Hello ${name} from foo!`,	};	return new Response(		JSON.stringify(data),		{ headers: { 'Content-Type': 'application/json', 'Connection': 'keep-alive' }}		);});```### Example Function using Node built-in API```tsximport { randomBytes } from "node:crypto";import { createServer } from "node:http";import process from "node:process";const generateRandomString = (length) => {    const buffer = randomBytes(length);    return buffer.toString('hex');};const randomString = generateRandomString(10);console.log(randomString);const server = createServer((req, res) => {    const message = `Hello`;    res.end(message);});server.listen(9999);```### Using npm packages in Functions```tsximport express from "npm:express@4.18.2";const app = express();app.get(/(.*)/, (req, res) => {    res.send("Welcome to Supabase");});app.listen(8000);```### Generate embeddings using built-in @Supabase.ai API```tsxconst model = new Supabase.ai.Session('gte-small');Deno.serve(async (req: Request) => {	const params = new URL(req.url).searchParams;	const input = params.get('text');	const output = await model.run(input, { mean_pool: true, normalize: true });	return new Response(		JSON.stringify(			output,		),		{			headers: {				'Content-Type': 'application/json',				'Connection': 'keep-alive',			},		},	);});```
````

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/examples/prompts/edge-functions.md)

### Is this helpful?

NoYes

### On this page

[How to use](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions#how-to-use) [Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions#prompt)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)