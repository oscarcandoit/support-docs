---
url: "https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit"
title: "Creating a Supabase client for SSR | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit)

[Overview](https://supabase.com/docs/guides/auth)

[Architecture](https://supabase.com/docs/guides/auth/architecture)

Getting Started[Next.js](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/auth/quickstarts/react)
[React Native](https://supabase.com/docs/guides/auth/quickstarts/react-native)
[React Native with Expo & Social Auth](https://supabase.com/docs/guides/auth/quickstarts/with-expo-react-native-social-auth)

Concepts[Users](https://supabase.com/docs/guides/auth/users)
[Identities](https://supabase.com/docs/guides/auth/identities)

Sessions

Flows (How-tos)

Server-Side Rendering

[Creating a client](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
[Migrating from Auth Helpers](https://supabase.com/docs/guides/auth/server-side/migrating-to-ssr-from-auth-helpers)
[Advanced guide](https://supabase.com/docs/guides/auth/server-side/advanced-guide)

[Password-based](https://supabase.com/docs/guides/auth/passwords)
[Email (Magic Link or OTP)](https://supabase.com/docs/guides/auth/auth-email-passwordless)
[Phone Login](https://supabase.com/docs/guides/auth/phone-login)

Social Login (OAuth)

Enterprise SSO

[Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
[Web3 (Ethereum or Solana)](https://supabase.com/docs/guides/auth/auth-web3)
[Mobile Deep Linking](https://supabase.com/docs/guides/auth/native-mobile-deep-linking)
[Identity Linking](https://supabase.com/docs/guides/auth/auth-identity-linking)

Multi-Factor Authentication

[Signout](https://supabase.com/docs/guides/auth/signout)

Debugging[Error Codes](https://supabase.com/docs/guides/auth/debugging/error-codes)
[Troubleshooting](https://supabase.com/docs/guides/auth/troubleshooting)

OAuth 2.1 Server[Overview](https://supabase.com/docs/guides/auth/oauth-server)
[Getting Started](https://supabase.com/docs/guides/auth/oauth-server/getting-started)
[OAuth Flows](https://supabase.com/docs/guides/auth/oauth-server/oauth-flows)
[MCP Authentication](https://supabase.com/docs/guides/auth/oauth-server/mcp-authentication)
[Token Security & RLS](https://supabase.com/docs/guides/auth/oauth-server/token-security)

Third-party auth[Overview](https://supabase.com/docs/guides/auth/third-party/overview)
[Clerk](https://supabase.com/docs/guides/auth/third-party/clerk)
[Firebase Auth](https://supabase.com/docs/guides/auth/third-party/firebase-auth)
[Auth0](https://supabase.com/docs/guides/auth/third-party/auth0)
[AWS Cognito (Amplify)](https://supabase.com/docs/guides/auth/third-party/aws-cognito)
[WorkOS](https://supabase.com/docs/guides/auth/third-party/workos)

Configuration[General Configuration](https://supabase.com/docs/guides/auth/general-configuration)
[Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)
[Redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls)

Auth Hooks

[Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp)
[User Management](https://supabase.com/docs/guides/auth/managing-user-data)

Security[Password Security](https://supabase.com/docs/guides/auth/password-security)
[Rate Limits](https://supabase.com/docs/guides/auth/rate-limits)
[Bot Detection (CAPTCHA)](https://supabase.com/docs/guides/auth/auth-captcha)
[Audit Logs](https://supabase.com/docs/guides/auth/audit-logs)

JSON Web Tokens (JWT)

[JWT Signing Keys](https://supabase.com/docs/guides/auth/signing-keys)
[Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
[Column Level Security](https://supabase.com/docs/guides/database/postgres/column-level-security)
[Custom Claims & RBAC](https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac)

Auth UI[Auth UI (Deprecated)](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)
[Flutter Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui)

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

Auth

1. Auth
3. More
5. [Server-Side Rendering](https://supabase.com/docs/guides/auth/server-side)
7. [Creating a client](https://supabase.com/docs/guides/auth/server-side/creating-a-client)

# Creating a Supabase client for SSR

## Configure your Supabase client to use cookies

* * *

To use Server-Side Rendering (SSR) with Supabase, you need to configure your Supabase client to use cookies. The `@supabase/ssr` package helps you do this for JavaScript/TypeScript applications.

## Install [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#install)

Install the `@supabase/supabase-js` and `@supabase/ssr` helper packages:

npmyarnpnpm

```
1

npm install @supabase/supabase-js @supabase/ssr
```

## Set environment variables [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#set-environment-variables)

Create a `.env.local` file in the project root directory. In the file, set the project's Supabase URL and Key:

###### Project URL

No project found

To get your Project URL, [log in](https://supabase.com/dashboard).

###### Publishable key

No project found

To get your Publishable key, [log in](https://supabase.com/dashboard).

###### Anon key

No project found

To get your Anon key, [log in](https://supabase.com/dashboard).

Next.jsSvelteKitAstroRemixReact RouterExpressHono

```
1
2

PUBLIC_SUPABASE_URL=supabase_project_urlPUBLIC_SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```

## Create a client [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#create-a-client)

You need setup code to configure a Supabase client to use cookies. Once you have the utility code, you can use the `createClient` utility functions to get a properly configured Supabase client.

Use the browser client in code that runs on the browser, and the server client in code that runs on the server.

Next.jsSvelteKitAstroRemixReact RouterExpressHono

### Set up server-side hooks [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#set-up-server-side-hooks)

Set up server-side hooks in `src/hooks.server.ts`. The hooks:

- Create a request-specific Supabase client, using the user credentials from the request cookie. This client is used for server-only code.
- Check user authentication.
- Guard protected pages.

###### src/hooks.server.ts

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

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public'import { createServerClient } from '@supabase/ssr'import type { Handle } from '@sveltejs/kit'export const handle: Handle = async ({ event, resolve }) => {  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {    cookies: {      getAll() {        return event.cookies.getAll()      },      setAll(cookiesToSet) {        /**         * Note: You have to add the `path` variable to the         * set and remove method due to sveltekit's cookie API         * requiring this to be set, setting the path to an empty string         * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)         */        cookiesToSet.forEach(({ name, value, options }) =>          event.cookies.set(name, value, { ...options, path: '/' })        )      },    },  })  /**   * Unlike `supabase.auth.getSession()`, which returns the session _without_   * validating the JWT, this function also calls `getUser()` to validate the   * JWT before returning the session.   */  event.locals.safeGetSession = async () => {    const {      data: { session },    } = await event.locals.supabase.auth.getSession()    if (!session) {      return { session: null, user: null }    }    const {      data: { user },      error,    } = await event.locals.supabase.auth.getUser()    if (error) {      // JWT validation has failed      return { session: null, user: null }    }    return { session, user }  }  return resolve(event, {    filterSerializedResponseHeaders(name) {      return name === 'content-range' || name === 'x-supabase-api-version'    },  })}
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/auth/sveltekit/src/hooks.server.ts)

To prevent TypeScript errors, add type definitions for the new event.locals properties.

###### src/app.d.ts

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

import type { Session, SupabaseClient, User } from '@supabase/supabase-js'import type { Database } from './database.types.ts' // import generated typesdeclare global {  namespace App {    // interface Error {}    interface Locals {      supabase: SupabaseClient<Database>      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>      session: Session | null      user: User | null    }    interface PageData {      session: Session | null    }    // interface PageState {}    // interface Platform {}  }}export {}
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/auth/sveltekit/src/app.d.ts)

### Create a Supabase client in your root layout [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#create-a-supabase-client-in-your-root-layout)

Create a Supabase client in your root `+layout.ts`. This client can be used to access Supabase from the client or the server. In order to get access to the Auth token on the server, use a `+layout.server.ts` file to pass in the session from event.locals.

Page components can access the Supabase client from the `data` object using the `load` function.

src/routes/+layout.tssrc/routes/+layout.server.ts

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

import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'import type { LayoutLoad } from './$types'import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'export const load: LayoutLoad = async ({ fetch, data, depends }) => {  depends('supabase:auth')  const supabase = isBrowser()    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {        global: {          fetch,        },      })    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {        global: {          fetch,        },        cookies: {          getAll() {            return data.cookies          },        },      })  /**   * It's fine to use `getSession` here, because on the client, `getSession` is   * safe, and on the server, it reads `session` from the `LayoutData`, which   * safely checked the session using `safeGetSession`.   */  const {    data: { session },  } = await supabase.auth.getSession()  return { supabase, session }}
```

[View source](https://github.com/supabase/supabase/blob/639d2c06df52e2332fa8d42179b3b4844fb8b5ba/examples/auth/sveltekit/src/routes/+layout.ts)

## Congratulations [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#congratulations)

You're done! To recap, you've successfully:

- Set up server-side hooks to create a request-specific Supabase client and guard protected pages.
- Created a Supabase client in your root layout to use on both the client and server.

You can now use any Supabase features from your client or server code!

## Next steps [\#](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit\#next-steps)

- Implement [Authentication using Email and Password](https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr)
- Implement [Authentication using OAuth](https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr)
- [Learn more about SSR](https://supabase.com/docs/guides/auth/server-side-rendering)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx)

### Is this helpful?

NoYes

### On this page

[Install](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#install) [Set environment variables](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#set-environment-variables) [Create a client](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#create-a-client) [Set up server-side hooks](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#set-up-server-side-hooks) [Create a Supabase client in your root layout](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#create-a-supabase-client-in-your-root-layout) [Congratulations](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#congratulations) [Next steps](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)