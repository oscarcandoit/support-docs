---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs"
title: "Build a User Management App with SolidJS | Supabase Docs"
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
5. [SolidJS](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs)

# Build a User Management App with SolidJS

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/solid-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#building-the-app)

Let's start building the SolidJS app from scratch.

### Initialize a SolidJS app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#initialize-a-solidjs-app)

We can use [degit](https://github.com/Rich-Harris/degit) to initialize an app called `supabase-solid`:

```
1
2

npx degit solidjs/templates/ts supabase-solidcd supabase-solid
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

And finally we want to save the environment variables in a `.env`.
All we need are the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#get-api-details).

.env

```
1
2

VITE_SUPABASE_URL=YOUR_SUPABASE_URLVITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Now that we have the API credentials in place, let's create a helper file to initialize the Supabase client. These variables will be exposed
on the browser, and that's completely fine since we have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on our Database.

src/supabaseClient.tsx

```
1
2
3
4
5
6

import { createClient } from '@supabase/supabase-js'const supabaseUrl = import.meta.env.VITE_SUPABASE_URLconst supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEYexport const supabase = createClient(supabaseUrl, supabasePublishableKey)
```

### App styling (optional) [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#app-styling-optional)

An optional step is to update the CSS file `src/index.css` to make the app look nice.
You can find the full contents of this file [here](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/solid-user-management/src/index.css).

### Set up a login component [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#set-up-a-login-component)

Let's set up a SolidJS component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

src/Auth.tsx

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

import { createSignal } from 'solid-js'import { supabase } from './supabaseClient'export default function Auth() {  const [loading, setLoading] = createSignal(false)  const [email, setEmail] = createSignal('')  const handleLogin = async (e: SubmitEvent) => {    e.preventDefault()    try {      setLoading(true)      const { error } = await supabase.auth.signInWithOtp({ email: email() })      if (error) throw error      alert('Check your email for the login link!')    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      setLoading(false)    }  }  return (    <div class="row flex-center flex">      <div class="col-6 form-widget" aria-live="polite">        <h1 class="header">Supabase + SolidJS</h1>        <p class="description">Sign in via magic link with your email below</p>        <form class="form-widget" onSubmit={handleLogin}>          <div>            <label for="email">Email</label>            <input              id="email"              class="inputField"              type="email"              placeholder="Your email"              value={email()}              onChange={(e) => setEmail(e.currentTarget.value)}            />          </div>          <div>            <button type="submit" class="button block" aria-live="polite">              {loading() ? <span>Loading</span> : <span>Send magic link</span>}            </button>          </div>        </form>      </div>    </div>  )}
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#account-page)

After a user is signed in we can allow them to edit their profile details and manage their account.

Let's create a new component for that called `Account.tsx`.

src/Account.tsx

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

import { AuthSession } from '@supabase/supabase-js'import { Component, createEffect, createSignal } from 'solid-js'import { supabase } from './supabaseClient'interface Props {  session: AuthSession}const Account: Component<Props> = ({ session }) => {  const [loading, setLoading] = createSignal(true)  const [username, setUsername] = createSignal<string | null>(null)  const [website, setWebsite] = createSignal<string | null>(null)  const [avatarUrl, setAvatarUrl] = createSignal<string | null>(null)  createEffect(() => {    getProfile()  })  const getProfile = async () => {    try {      setLoading(true)      const { user } = session      const { data, error, status } = await supabase        .from('profiles')        .select(`username, website, avatar_url`)        .eq('id', user.id)        .single()      if (error && status !== 406) {        throw error      }      if (data) {        setUsername(data.username)        setWebsite(data.website)        setAvatarUrl(data.avatar_url)      }    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      setLoading(false)    }  }  const updateProfile = async (e: Event) => {    e.preventDefault()    try {      setLoading(true)      const { user } = session      const updates = {        id: user.id,        username: username(),        website: website(),        avatar_url: avatarUrl(),        updated_at: new Date().toISOString(),      }      const { error } = await supabase.from('profiles').upsert(updates)      if (error) {        throw error      }    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      setLoading(false)    }  }  return (    <div aria-live="polite">      <form onSubmit={updateProfile} class="form-widget">        <div>Email: {session.user.email}</div>        <div>          <label for="username">Name</label>          <input            id="username"            type="text"            value={username() || ''}            onChange={(e) => setUsername(e.currentTarget.value)}          />        </div>        <div>          <label for="website">Website</label>          <input            id="website"            type="text"            value={website() || ''}            onChange={(e) => setWebsite(e.currentTarget.value)}          />        </div>        <div>          <button type="submit" class="button primary block" disabled={loading()}>            {loading() ? 'Saving ...' : 'Update profile'}          </button>        </div>        <button type="button" class="button block" onClick={() => supabase.auth.signOut()}>          Sign Out        </button>      </form>    </div>  )}export default Account
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#launch)

Now that we have all the components in place, let's update `App.tsx`:

src/App.tsx

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

import { Component, createEffect, createSignal } from 'solid-js'import { supabase } from './supabaseClient'import { AuthSession } from '@supabase/supabase-js'import Account from './Account'import Auth from './Auth'const App: Component = () => {  const [session, setSession] = createSignal<AuthSession | null>(null)  createEffect(() => {    supabase.auth.getSession().then(({ data: { session } }) => {      setSession(session)    })    supabase.auth.onAuthStateChange((_event, session) => {      setSession(session)    })  })  return (    <div class="container" style={{ padding: '50px 0 100px 0' }}>      {!session() ? <Auth /> : <Account session={session()!} />}    </div>  )}export default App
```

Once that's done, run this in a terminal window:

```
1

npm start
```

And then open the browser to [localhost:3000](http://localhost:3000/) and you should see the completed app.

![Supabase SolidJS](https://supabase.com/docs/img/supabase-solidjs-demo.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#create-an-upload-widget)

Let's create an avatar for the user so that they can upload a profile photo. We can start by creating a new component:

src/Avatar.tsx

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

import { Component, createEffect, createSignal, JSX } from 'solid-js'import { supabase } from './supabaseClient'interface Props {  size: number  url: string | null  onUpload: (event: Event, filePath: string) => void}const Avatar: Component<Props> = (props) => {  const [avatarUrl, setAvatarUrl] = createSignal<string | null>(null)  const [uploading, setUploading] = createSignal(false)  createEffect(() => {    if (props.url) downloadImage(props.url)  })  const downloadImage = async (path: string) => {    try {      const { data, error } = await supabase.storage.from('avatars').download(path)      if (error) {        throw error      }      const url = URL.createObjectURL(data)      setAvatarUrl(url)    } catch (error) {      if (error instanceof Error) {        console.log('Error downloading image: ', error.message)      }    }  }  const uploadAvatar: JSX.EventHandler<HTMLInputElement, Event> = async (event) => {    try {      setUploading(true)      const target = event.currentTarget      if (!target?.files || target.files.length === 0) {        throw new Error('You must select an image to upload.')      }      const file = target.files[0]      const fileExt = file.name.split('.').pop()      const fileName = `${Math.random()}.${fileExt}`      const filePath = `${fileName}`      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)      if (uploadError) {        throw uploadError      }      props.onUpload(event, filePath)    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      setUploading(false)    }  }  return (    <div style={{ width: `${props.size}px` }} aria-live="polite">      {avatarUrl() ? (        <img          src={avatarUrl()!}          alt={avatarUrl() ? 'Avatar' : 'No image'}          class="avatar image"          style={{ height: `${props.size}px`, width: `${props.size}px` }}        />      ) : (        <div          class="avatar no-image"          style={{ height: `${props.size}px`, width: `${props.size}px` }}        />      )}      <div style={{ width: `${props.size}px` }}>        <label class="button primary block" for="single">          {uploading() ? 'Uploading ...' : 'Upload avatar'}        </label>        <span style="display:none">          <input            type="file"            id="single"            accept="image/*"            onChange={uploadAvatar}            disabled={uploading()}          />        </span>      </div>    </div>  )}export default Avatar
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs\#add-the-new-widget)

And then we can add the widget to the Account page:

src/Account.tsx

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

// Import the new componentimport Avatar from './Avatar'// ...return (  <form onSubmit={updateProfile} class="form-widget">    {/* Add to the body */}    <Avatar      url={avatarUrl()}      size={150}      onUpload={(e: Event, url: string) => {        setAvatarUrl(url)        updateProfile(e)      }}    />    {/* ... */}  </div>)
```

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-solidjs.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#building-the-app) [Initialize a SolidJS app](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#initialize-a-solidjs-app) [App styling (optional)](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#app-styling-optional) [Set up a login component](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#set-up-a-login-component) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)