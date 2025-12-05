---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-react"
title: "Build a User Management App with React | Supabase Docs"
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
5. [React](https://supabase.com/docs/guides/getting-started/tutorials/with-react)

# Build a User Management App with React

* * *

##### Explore drop-in UI components for your Supabase app.

UI components built on shadcn/ui that connect to Supabase via a single command.

[Explore Components](https://supabase.com/ui)

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/react-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#building-the-app)

Let's start building the React app from scratch.

### Initialize a React app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#initialize-a-react-app)

We can use [Vite](https://vitejs.dev/guide/) to initialize
an app called `supabase-react`:

```
1
2

npm create vite@latest supabase-react -- --template reactcd supabase-react
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js).

```
1

npm install @supabase/supabase-js
```

And finally, save the environment variables in a `.env.local` file.
All we need are the Project URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-react#get-api-details).

.env

```
1
2

VITE_SUPABASE_URL=YOUR_SUPABASE_URLVITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Now that we have the API credentials in place, let's create a helper file to initialize the Supabase client. These variables will be exposed
on the browser, and that's completely fine since we have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on our Database.

Create and edit `src/supabaseClient.js`:

src/supabaseClient.js

```
1
2
3
4
5
6

import { createClient } from '@supabase/supabase-js'const supabaseUrl = import.meta.env.VITE_SUPABASE_URLconst supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEYexport const supabase = createClient(supabaseUrl, supabasePublishableKey)
```

### App styling (optional) [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#app-styling-optional)

An optional step is to update the CSS file `src/index.css` to make the app look nice.
You can find the full contents of this file [here](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/react-user-management/src/index.css).

### Set up a login component [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#set-up-a-login-component)

Let's set up a React component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

Create and edit `src/Auth.jsx`:

src/Auth.jsx

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

import { useState } from 'react'import { supabase } from './supabaseClient'export default function Auth() {  const [loading, setLoading] = useState(false)  const [email, setEmail] = useState('')  const handleLogin = async (event) => {    event.preventDefault()    setLoading(true)    const { error } = await supabase.auth.signInWithOtp({ email })    if (error) {      alert(error.error_description || error.message)    } else {      alert('Check your email for the login link!')    }    setLoading(false)  }  return (    <div className="row flex flex-center">      <div className="col-6 form-widget">        <h1 className="header">Supabase + React</h1>        <p className="description">Sign in via magic link with your email below</p>        <form className="form-widget" onSubmit={handleLogin}>          <div>            <input              className="inputField"              type="email"              placeholder="Your email"              value={email}              required={true}              onChange={(e) => setEmail(e.target.value)}            />          </div>          <div>            <button className={'button block'} disabled={loading}>              {loading ? <span>Loading</span> : <span>Send magic link</span>}            </button>          </div>        </form>      </div>    </div>  )}
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#account-page)

After a user is signed in we can allow them to edit their profile details and manage their account.

Let's create a new component for that called `src/Account.jsx`.

src/Account.jsx

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

import { useState, useEffect } from 'react'import { supabase } from './supabaseClient'export default function Account({ session }) {  const [loading, setLoading] = useState(true)  const [username, setUsername] = useState(null)  const [website, setWebsite] = useState(null)  const [avatar_url, setAvatarUrl] = useState(null)  useEffect(() => {    let ignore = false    async function getProfile() {      setLoading(true)      const { user } = session      const { data, error } = await supabase        .from('profiles')        .select(`username, website, avatar_url`)        .eq('id', user.id)        .single()      if (!ignore) {        if (error) {          console.warn(error)        } else if (data) {          setUsername(data.username)          setWebsite(data.website)          setAvatarUrl(data.avatar_url)        }      }      setLoading(false)    }    getProfile()    return () => {      ignore = true    }  }, [session])  async function updateProfile(event, avatarUrl) {    event.preventDefault()    setLoading(true)    const { user } = session    const updates = {      id: user.id,      username,      website,      avatar_url: avatarUrl,      updated_at: new Date(),    }    const { error } = await supabase.from('profiles').upsert(updates)    if (error) {      alert(error.message)    } else {      setAvatarUrl(avatarUrl)    }    setLoading(false)  }  return (    <form onSubmit={updateProfile} className="form-widget">      <div>        <label htmlFor="email">Email</label>        <input id="email" type="text" value={session.user.email} disabled />      </div>      <div>        <label htmlFor="username">Name</label>        <input          id="username"          type="text"          required          value={username || ''}          onChange={(e) => setUsername(e.target.value)}        />      </div>      <div>        <label htmlFor="website">Website</label>        <input          id="website"          type="url"          value={website || ''}          onChange={(e) => setWebsite(e.target.value)}        />      </div>      <div>        <button className="button block primary" type="submit" disabled={loading}>          {loading ? 'Loading ...' : 'Update'}        </button>      </div>      <div>        <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>          Sign Out        </button>      </div>    </form>  )}
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#launch)

Now that we have all the components in place, let's update `src/App.jsx`:

src/App.jsx

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

import './App.css'import { useState, useEffect } from 'react'import { supabase } from './supabaseClient'import Auth from './Auth'import Account from './Account'function App() {  const [session, setSession] = useState(null)  useEffect(() => {    supabase.auth.getSession().then(({ data: { session } }) => {      setSession(session)    })    supabase.auth.onAuthStateChange((_event, session) => {      setSession(session)    })  }, [])  return (    <div className="container" style={{ padding: '50px 0 100px 0' }}>      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}    </div>  )}export default App
```

Once that's done, run this in a terminal window:

```
1

npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173/) and you should see the completed app.

![Supabase React](https://supabase.com/docs/img/supabase-react-demo.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#create-an-upload-widget)

Let's create an avatar for the user so that they can upload a profile photo. We can start by creating a new component:

Create and edit `src/Avatar.jsx`:

src/Avatar.jsx

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

import { useEffect, useState } from 'react'import { supabase } from './supabaseClient'export default function Avatar({ url, size, onUpload }) {  const [avatarUrl, setAvatarUrl] = useState(null)  const [uploading, setUploading] = useState(false)  useEffect(() => {    if (url) downloadImage(url)  }, [url])  async function downloadImage(path) {    try {      const { data, error } = await supabase.storage.from('avatars').download(path)      if (error) {        throw error      }      const url = URL.createObjectURL(data)      setAvatarUrl(url)    } catch (error) {      console.log('Error downloading image: ', error.message)    }  }  async function uploadAvatar(event) {    try {      setUploading(true)      if (!event.target.files || event.target.files.length === 0) {        throw new Error('You must select an image to upload.')      }      const file = event.target.files[0]      const fileExt = file.name.split('.').pop()      const fileName = `${Math.random()}.${fileExt}`      const filePath = `${fileName}`      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)      if (uploadError) {        throw uploadError      }      onUpload(event, filePath)    } catch (error) {      alert(error.message)    } finally {      setUploading(false)    }  }  return (    <div>      {avatarUrl ? (        <img          src={avatarUrl}          alt="Avatar"          className="avatar image"          style={{ height: size, width: size }}        />      ) : (        <div className="avatar no-image" style={{ height: size, width: size }} />      )}      <div style={{ width: size }}>        <label className="button primary block" htmlFor="single">          {uploading ? 'Uploading ...' : 'Upload'}        </label>        <input          style={{            visibility: 'hidden',            position: 'absolute',          }}          type="file"          id="single"          accept="image/*"          onChange={uploadAvatar}          disabled={uploading}        />      </div>    </div>  )}
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-react\#add-the-new-widget)

And then we can add the widget to the Account page at `src/Account.jsx`:

src/Account.jsx

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

// Import the new componentimport Avatar from './Avatar'// ...return (  <form onSubmit={updateProfile} className="form-widget">    {/* Add to the body */}    <Avatar      url={avatar_url}      size={150}      onUpload={(event, url) => {        updateProfile(event, url)      }}    />    {/* ... */}  </form>)
```

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-react.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-react#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-react#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-react#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-react#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-react#building-the-app) [Initialize a React app](https://supabase.com/docs/guides/getting-started/tutorials/with-react#initialize-a-react-app) [App styling (optional)](https://supabase.com/docs/guides/getting-started/tutorials/with-react#app-styling-optional) [Set up a login component](https://supabase.com/docs/guides/getting-started/tutorials/with-react#set-up-a-login-component) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-react#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-react#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-react#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-react#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-react#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)