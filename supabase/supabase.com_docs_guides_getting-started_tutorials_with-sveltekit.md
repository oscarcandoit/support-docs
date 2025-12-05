---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit"
title: "Build a User Management App with SvelteKit | Supabase Docs"
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

1. [Start with Supabase](https://supabase.com/docs/guides/getting-started)
3. Web app demos
5. [SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)

# Build a User Management App with SvelteKit

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/sveltekit-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#set-up-the-database-schema)

Now set up the database schema. You can use the "User Management Starter" quickstart in the SQL Editor, or you can copy/paste the SQL from below and run it.

DashboardSQL

1. Go to the [SQL Editor](https://supabase.com/dashboard/project/_/sql) page in the Dashboard.
2. Click **User Management Starter** under the **Community > Quickstarts** tab.
3. Click **Run**.

You can pull the database schema down to your local project by running the `db pull` command. Read the [local development docs](https://supabase.com/docs/guides/cli/local-development#link-your-project) for detailed instructions.

```
1
2
3

supabase link --project-ref <project-id># You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>supabase db pull
```

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#building-the-app)

Start building the Svelte app from scratch.

### Initialize a Svelte app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#initialize-a-svelte-app)

Use the [SvelteKit Skeleton Project](https://svelte.dev/docs/kit) to initialize an app called `supabase-sveltekit` (for this tutorial, select "SvelteKit minimal" and use TypeScript):

```
1
2
3

npx sv create supabase-sveltekitcd supabase-sveltekitnpm install
```

Then install the Supabase client library: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

And finally, save the environment variables in a `.env` file.
All you need are the `PUBLIC_SUPABASE_URL` and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#get-api-details).

.env

```
1
2

PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"PUBLIC_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_PUBLISHABLE_KEY"
```

### App styling (optional) [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#app-styling-optional)

An optional step is to update the CSS file `src/styles.css` to make the app look nice.
You can find the full contents of this file [in the example repository](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/sveltekit-user-management/src/styles.css).

### Creating a Supabase client for SSR [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#creating-a-supabase-client-for-ssr)

The `ssr` package configures Supabase to use Cookies, which are required for server-side languages and frameworks.

Install the SSR package:

```
1

npm install @supabase/ssr
```

Creating a Supabase client with the `ssr` package automatically configures it to use Cookies. This means the user's session is available throughout the entire SvelteKit stack - page, layout, server, and hooks.

Add the code below to a `src/hooks.server.ts` file to initialize the client on the server:

src/hooks.server.ts

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

// src/hooks.server.tsimport { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public'import { createServerClient } from '@supabase/ssr'import type { Handle } from '@sveltejs/kit'export const handle: Handle = async ({ event, resolve }) => {  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {    cookies: {      getAll: () => event.cookies.getAll(),      /**       * Note: You have to add the `path` variable to the       * set and remove method due to sveltekit's cookie API       * requiring this to be set, setting the path to `/`       * will replicate previous/standard behaviour (https://kit.svelte.dev/docs/types#public-types-cookies)       */      setAll: (cookiesToSet) => {        cookiesToSet.forEach(({ name, value, options }) => {          event.cookies.set(name, value, { ...options, path: '/' })        })      },    },  })  /**   * Unlike `supabase.auth.getSession`, which is unsafe on the server because it   * doesn't validate the JWT, this function validates the JWT by first calling   * `getUser` and aborts early if the JWT signature is invalid.   */  event.locals.safeGetSession = async () => {    const {      data: { user },      error,    } = await event.locals.supabase.auth.getUser()    if (error) {      return { session: null, user: null }    }    const {      data: { session },    } = await event.locals.supabase.auth.getSession()    return { session, user }  }  return resolve(event, {    filterSerializedResponseHeaders(name: string) {      return name === 'content-range' || name === 'x-supabase-api-version'    },  })}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/hooks.server.ts)

Note that `auth.getSession` reads the auth token and the unencoded session data from the local storage medium. It _doesn't_ send a request back to the Supabase Auth server unless the local session is expired.

You should **never** trust the unencoded session data if you're writing server code, since it could be tampered with by the sender. If you need verified, trustworthy user data, call `auth.getUser` instead, which always makes a request to the Auth server to fetch trusted data.

As this tutorial uses TypeScript the compiler complains about `event.locals.supabase` and `event.locals.safeGetSession`, you can fix this by updating the `src/app.d.ts` with the content below:

src/app.d.ts

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

import { SupabaseClient, Session } from '@supabase/supabase-js'// See https://kit.svelte.dev/docs/types#app// for information about these interfacesdeclare global {	namespace App {		// interface Error {}		interface Locals {			supabase: SupabaseClient			safeGetSession(): Promise<{ session: Session | null; user?: Session["user"] | null }>		}		interface PageData {			session: Session | null			user?: Session["user"] | null		}		// interface PageState {}		// interface Platform {}	}}export {};
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/app.d.ts)

Create a new `src/routes/+layout.server.ts` file to handle the session on the server-side.

src/routes/+layout.server.ts

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

// src/routes/+layout.server.tsimport type { LayoutServerLoad } from './$types'export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {  const { session, user } = await safeGetSession()  return {    session,    user,    cookies: cookies.getAll(),  }}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/+layout.server.ts)

Start the dev server (`npm run dev`) to generate the `./$types` files we are referencing in our project.

Create a new `src/routes/+layout.ts` file to handle the session and the `supabase` object on the client-side.

src/routes/+layout.ts

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

// src/routes/+layout.tsimport { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'import type { LayoutLoad } from './$types'import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'export const load: LayoutLoad = async ({ fetch, data, depends }) => {  depends('supabase:auth')  const supabase = isBrowser()    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {        global: {          fetch,        },      })    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {        global: {          fetch,        },        cookies: {          getAll() {            return data.cookies          },        },      })  /**   * It's fine to use `getSession` here, because on the client, `getSession` is   * safe, and on the server, it reads `session` from the `LayoutData`, which   * safely checked the session using `safeGetSession`.   */  const {    data: { session },  } = await supabase.auth.getSession()  return { supabase, session }}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/+layout.ts)

Create `src/routes/+layout.svelte`:

src/routes/+layout.svelte

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

<!-- src/routes/+layout.svelte --><script lang="ts">	import '../styles.css'	import { invalidate } from '$app/navigation'	import { onMount } from 'svelte'	let { data, children } = $props()	let { supabase, session } = $derived(data)	onMount(() => {		const { data } = supabase.auth.onAuthStateChange((event, _session) => {			if (_session?.expires_at !== session?.expires_at) {				invalidate('supabase:auth')			}		})		return () => data.subscription.unsubscribe()	})</script><svelte:head>	<title>User Management</title></svelte:head><div class="container" style="padding: 50px 0 100px 0">	{@render children()}</div>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/+layout.svelte)

## Set up a login page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#set-up-a-login-page)

Create a magic link login/signup page for your application by updating the `routes/+page.svelte` file:

src/routes/+page.svelte

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

<!-- src/routes/+page.svelte --><script lang="ts">	import { enhance } from '$app/forms'	import type { ActionData, SubmitFunction } from './$types.js'	interface Props {		form: ActionData	}	let { form }: Props = $props()	let loading = $state(false)	const handleSubmit: SubmitFunction = () => {		loading = true		return async ({ update }) => {			update()			loading = false		}	}</script><svelte:head>	<title>User Management</title></svelte:head><form class="row flex flex-center" method="POST" use:enhance={handleSubmit}>	<div class="col-6 form-widget">		<h1 class="header">Supabase + SvelteKit</h1>		<p class="description">Sign in via magic link with your email below</p>		{#if form?.message !== undefined}		<div class="success {form?.success ? '' : 'fail'}">			{form?.message}		</div>		{/if}		<div>			<label for="email">Email address</label>			<input 				id="email" 				name="email" 				class="inputField" 				type="email" 				placeholder="Your email" 				value={form?.email ?? ''} 			/>		</div>		{#if form?.errors?.email}		<span class="flex items-center text-sm error">			{form?.errors?.email}		</span>		{/if}		<div>			<button class="button primary block">				{ loading ? 'Loading' : 'Send magic link' }			</button>		</div>	</div></form>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/+page.svelte)

Create a `src/routes/+page.server.ts` file that handles the magic link form when submitted.

src/routes/+page.server.ts

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

// src/routes/+page.server.tsimport { fail, redirect } from '@sveltejs/kit'import type { Actions, PageServerLoad } from './$types'export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {  const { session } = await safeGetSession()  // if the user is already logged in return them to the account page  if (session) {    redirect(303, '/account')  }  return { url: url.origin }}export const actions: Actions = {	default: async (event) => {		const {			url,			request,			locals: { supabase }		} = event		const formData = await request.formData()		const email = formData.get('email') as string    const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)    		if (!validEmail) {			return fail(400, { errors: { email: "Please enter a valid email address" }, email })		}		const { error } = await supabase.auth.signInWithOtp({ email })		if (error) {			return fail(400, {				success: false,				email,				message: `There was an issue, Please contact support.`			})		}		return {			success: true,			message: 'Please check your email for a magic link to log into the website.'		}	}}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/+page.server.ts)

### Email template [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#email-template)

Change the email template to support a server-side authentication flow.

Before we proceed, let's change the email template to support sending a token hash:

- Go to the [**Auth** \> **Emails**](https://supabase.com/dashboard/project/_/auth/templates) page in the project dashboard.
- Select the **Confirm signup** template.
- Change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email`.
- Repeat the previous step for **Magic link** template.

**Did you know?** You can also customize emails sent out to new users, including the email's looks, content, and query parameters. Check out the [settings of your project](https://supabase.com/dashboard/project/_/auth/templates).

### Confirmation endpoint [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#confirmation-endpoint)

As this is a server-side rendering (SSR) environment, you need to create a server endpoint responsible for exchanging the `token_hash` for a session.

The following code snippet performs the following steps:

- Retrieves the `token_hash` sent back from the Supabase Auth server using the `token_hash` query parameter.
- Exchanges this `token_hash` for a session, which you store in storage (in this case, cookies).
- Finally, redirect the user to the `account` page or the `error` page.

src/routes/auth/confirm/+server.ts

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

// src/routes/auth/confirm/+server.jsimport type { EmailOtpType } from '@supabase/supabase-js'import { redirect } from '@sveltejs/kit'import type { RequestHandler } from './$types'export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {  const token_hash = url.searchParams.get('token_hash')  const type = url.searchParams.get('type') as EmailOtpType | null  const next = url.searchParams.get('next') ?? '/account'  /**   * Clean up the redirect URL by deleting the Auth flow parameters.   *   * `next` is preserved for now, because it's needed in the error case.   */  const redirectTo = new URL(url)  redirectTo.pathname = next  redirectTo.searchParams.delete('token_hash')  redirectTo.searchParams.delete('type')  if (token_hash && type) {    const { error } = await supabase.auth.verifyOtp({ type, token_hash })    if (!error) {      redirectTo.searchParams.delete('next')      redirect(303, redirectTo)    }  }  redirectTo.pathname = '/auth/error'  redirect(303, redirectTo)}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/auth/confirm/+server.ts)

### Authentication error page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#authentication-error-page)

If there is an error with confirming the token, redirect the user to an error page.

src/routes/auth/error/+page.svelte

```
1

<p>Login error</p>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/auth/error/+page.svelte)

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#account-page)

After a user signs in, they need to be able to edit their profile details page.
Create a new `src/routes/account/+page.svelte` file with the content below.

src/routes/account/+page.svelte

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

<script lang="ts">	import { enhance } from '$app/forms';	import type { SubmitFunction } from '@sveltejs/kit';	// ...	let { data, form } = $props()	let { session, supabase, profile } = $derived(data)	let profileForm: HTMLFormElement	let loading = $state(false)	let fullName: string = profile?.full_name ?? ''	let username: string = profile?.username ?? ''	let website: string = profile?.website ?? ''	// ...	const handleSubmit: SubmitFunction = () => {		loading = true		return async () => {			loading = false		}	}	const handleSignOut: SubmitFunction = () => {		loading = true		return async ({ update }) => {			loading = false			update()		}	}</script><div class="form-widget">	<form		class="form-widget"		method="post"		action="?/update"		use:enhance={handleSubmit}		bind:this={profileForm}	>		// ...		<div>			<label for="email">Email</label>			<input id="email" type="text" value={session.user.email} disabled />		</div>		<div>			<label for="fullName">Full Name</label>			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />		</div>		<div>			<label for="username">Username</label>			<input id="username" name="username" type="text" value={form?.username ?? username} />		</div>		<div>			<label for="website">Website</label>			<input id="website" name="website" type="url" value={form?.website ?? website} />		</div>		<div>			<input				type="submit"				class="button block primary"				value={loading ? 'Loading...' : 'Update'}				disabled={loading}			/>		</div>	</form>	<form method="post" action="?/signout" use:enhance={handleSignOut}>		<div>			<button class="button block" disabled={loading}>Sign Out</button>		</div>	</form></div>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/account/+page.svelte)

Now, create the associated `src/routes/account/+page.server.ts` file that handles loading data from the server through the `load` function
and handle all form actions through the `actions` object.

###### src/routes/account/+page.server.ts

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

import { fail, redirect } from '@sveltejs/kit'import type { Actions, PageServerLoad } from './$types'export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {  const { session } = await safeGetSession()  if (!session) {    redirect(303, '/')  }  const { data: profile } = await supabase    .from('profiles')    .select(`username, full_name, website, avatar_url`)    .eq('id', session.user.id)    .single()  return { session, profile }}export const actions: Actions = {  update: async ({ request, locals: { supabase, safeGetSession } }) => {    const formData = await request.formData()    const fullName = formData.get('fullName') as string    const username = formData.get('username') as string    const website = formData.get('website') as string    const avatarUrl = formData.get('avatarUrl') as string    const { session } = await safeGetSession()    const { error } = await supabase.from('profiles').upsert({      id: session?.user.id,      full_name: fullName,      username,      website,      avatar_url: avatarUrl,      updated_at: new Date(),    })    if (error) {      return fail(500, {        fullName,        username,        website,        avatarUrl,      })    }    return {      fullName,      username,      website,      avatarUrl,    }  },  signout: async ({ locals: { supabase, safeGetSession } }) => {    const { session } = await safeGetSession()    if (session) {      await supabase.auth.signOut()      redirect(303, '/')    }  },}
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/account/+page.server.ts)

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#launch)

With all the pages in place, run this command in a terminal:

```
1

npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173/) and you should see the completed app.

![Supabase Svelte](https://supabase.com/docs/img/supabase-svelte-demo.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#create-an-upload-widget)

Create an avatar for the user so that they can upload a profile photo. Start by creating a new component called `Avatar.svelte` in the `src/routes/account` directory:

src/routes/account/Avatar.svelte

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

<!-- src/routes/account/Avatar.svelte --><script lang="ts">	import type { SupabaseClient } from '@supabase/supabase-js'	interface Props {		size?: number		url?: string		supabase: SupabaseClient		onupload?: () => void	}	let { size = 10, url = $bindable(), supabase, onupload }: Props = $props()	let avatarUrl: string | null = $state(null)	let uploading = $state(false)	let files: FileList = $state()	const downloadImage = async (path: string) => {		try {			const { data, error } = await supabase.storage.from('avatars').download(path)			if (error) {				throw error			}			const url = URL.createObjectURL(data)			avatarUrl = url		} catch (error) {			if (error instanceof Error) {				console.log('Error downloading image: ', error.message)			}		}	}	const uploadAvatar = async () => {		try {			uploading = true			if (!files || files.length === 0) {				throw new Error('You must select an image to upload.')			}			const file = files[0]			const fileExt = file.name.split('.').pop()			const filePath = `${Math.random()}.${fileExt}`			const { error } = await supabase.storage.from('avatars').upload(filePath, file)			if (error) {				throw error			}			url = filePath			setTimeout(() => {				onupload?.()			}, 100)		} catch (error) {			if (error instanceof Error) {				alert(error.message)			}		} finally {			uploading = false		}	}	$effect(() => {		if (url) downloadImage(url)	})</script><div>	{#if avatarUrl}		<img			src={avatarUrl}			alt={avatarUrl ? 'Avatar' : 'No image'}			class="avatar image"			style="height: {size}em; width: {size}em;"		/>	{:else}		<div class="avatar no-image" style="height: {size}em; width: {size}em;"></div>	{/if}	<input type="hidden" name="avatarUrl" value={url} />	<div style="width: {size}em;">		<label class="button primary block" for="single">			{uploading ? 'Uploading ...' : 'Upload'}		</label>		<input			style="visibility: hidden; position:absolute;"			type="file"			id="single"			accept="image/*"			bind:files			onchange={uploadAvatar}			disabled={uploading}		/>	</div></div>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/account/Avatar.svelte)

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit\#add-the-new-widget)

Add the widget to the Account page:

src/routes/account/+page.svelte

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

<script lang="ts">    // ...    import Avatar from './Avatar.svelte'// ...<div class="form-widget">        // ...        <Avatar            {supabase}            bind:url={avatarUrl}            size={10}            onupload={() => {                profileForm.requestSubmit();            }}        />// ...</div>
```

[View source](https://github.com/supabase/supabase/blob/f29fc05eb59013bc7055c4cc4d962b6261df781f/examples/user-management/sveltekit-user-management/src/routes/account/+page.svelte)

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#building-the-app) [Initialize a Svelte app](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#initialize-a-svelte-app) [App styling (optional)](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#app-styling-optional) [Creating a Supabase client for SSR](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#creating-a-supabase-client-for-ssr) [Set up a login page](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#set-up-a-login-page) [Email template](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#email-template) [Confirmation endpoint](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#confirmation-endpoint) [Authentication error page](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#authentication-error-page) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)