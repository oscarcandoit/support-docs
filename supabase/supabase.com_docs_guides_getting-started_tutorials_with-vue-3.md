---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3"
title: "Build a User Management App with Vue 3 | Supabase Docs"
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
5. [Vue 3](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3)

# Build a User Management App with Vue 3

* * *

##### Explore drop-in UI components for your Supabase app.

UI components built on shadcn/ui that connect to Supabase via a single command.

[Explore Components](https://supabase.com/ui)

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/vue3-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#building-the-app)

Let's start building the Vue 3 app from scratch.

### Initialize a Vue 3 app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#initialize-a-vue-3-app)

We can quickly use [Vite with Vue 3 Template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) to initialize
an app called `supabase-vue-3`:

```
1
2
3
4
5
6
7

# npm 6.xnpm create vite@latest supabase-vue-3 --template vue# npm 7+, extra double-dash is needed:npm create vite@latest supabase-vue-3 -- --template vuecd supabase-vue-3
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

And finally we want to save the environment variables in a `.env`.
All we need are the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#get-api-details).

.env

```
1
2

VITE_SUPABASE_URL=YOUR_SUPABASE_URLVITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

With the API credentials in place, create an `src/supabase.js` helper file to initialize the Supabase client. These variables are exposed
on the browser, and that's completely fine since we have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on our Database.

src/supabase.js

```
1
2
3
4
5
6

import { createClient } from '@supabase/supabase-js'const supabaseUrl = import.meta.env.VITE_SUPABASE_URLconst supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEYexport const supabase = createClient(supabaseUrl, supabasePublishableKey)
```

Optionally, update [src/style.css](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/vue3-user-management/src/style.css) to style the app.

### Set up a login component [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#set-up-a-login-component)

Set up an `src/components/Auth.vue` component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

/src/components/Auth.vue

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

<script setup>import { ref } from 'vue'import { supabase } from '../supabase'const loading = ref(false)const email = ref('')const handleLogin = async () => {  try {    loading.value = true    const { error } = await supabase.auth.signInWithOtp({      email: email.value,    })    if (error) throw error    alert('Check your email for the login link!')  } catch (error) {    if (error instanceof Error) {      alert(error.message)    }  } finally {    loading.value = false  }}</script><template>  <form class="row flex-center flex" @submit.prevent="handleLogin">    <div class="col-6 form-widget">      <h1 class="header">Supabase + Vue 3</h1>      <p class="description">Sign in via magic link with your email below</p>      <div>        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />      </div>      <div>        <input          type="submit"          class="button block"          :value="loading ? 'Loading' : 'Send magic link'"          :disabled="loading"        />      </div>    </div>  </form></template>
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#account-page)

After a user is signed in we can allow them to edit their profile details and manage their account.
Create a new `src/components/Account.vue` component to handle this.

src/components/Account.vue

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

<script setup>import { supabase } from '../supabase'import { onMounted, ref, toRefs } from 'vue'const props = defineProps(['session'])const { session } = toRefs(props)const loading = ref(true)const username = ref('')const website = ref('')const avatar_url = ref('')onMounted(() => {  getProfile()})async function getProfile() {  try {    loading.value = true    const { user } = session.value    const { data, error, status } = await supabase      .from('profiles')      .select(`username, website, avatar_url`)      .eq('id', user.id)      .single()    if (error && status !== 406) throw error    if (data) {      username.value = data.username      website.value = data.website      avatar_url.value = data.avatar_url    }  } catch (error) {    alert(error.message)  } finally {    loading.value = false  }}async function updateProfile() {  try {    loading.value = true    const { user } = session.value    const updates = {      id: user.id,      username: username.value,      website: website.value,      avatar_url: avatar_url.value,      updated_at: new Date(),    }    const { error } = await supabase.from('profiles').upsert(updates)    if (error) throw error  } catch (error) {    alert(error.message)  } finally {    loading.value = false  }}async function signOut() {  try {    loading.value = true    const { error } = await supabase.auth.signOut()    if (error) throw error  } catch (error) {    alert(error.message)  } finally {    loading.value = false  }}</script><template>  <form class="form-widget" @submit.prevent="updateProfile">    <div>      <label for="email">Email</label>      <input id="email" type="text" :value="session.user.email" disabled />    </div>    <div>      <label for="username">Name</label>      <input id="username" type="text" v-model="username" />    </div>    <div>      <label for="website">Website</label>      <input id="website" type="url" v-model="website" />    </div>    <div>      <input        type="submit"        class="button primary block"        :value="loading ? 'Loading ...' : 'Update'"        :disabled="loading"      />    </div>    <div>      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>    </div>  </form></template>
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#launch)

Now that we have all the components in place, let's update `App.vue`:

src/App.vue

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

<script setup>import { onMounted, ref } from 'vue'import Account from './components/Account.vue'import Auth from './components/Auth.vue'import { supabase } from './supabase'const session = ref()onMounted(() => {  supabase.auth.getSession().then(({ data }) => {    session.value = data.session  })  supabase.auth.onAuthStateChange((_, _session) => {    session.value = _session  })})</script><template>  <div class="container" style="padding: 50px 0 100px 0">    <Account v-if="session" :session="session" />    <Auth v-else />  </div></template>
```

Once that's done, run this in a terminal window:

```
1

npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173/) and you should see the completed app.

![Supabase Vue 3](https://supabase.com/docs/img/supabase-vue-3-demo.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#create-an-upload-widget)

Create a new `src/components/Avatar.vue` component that allows users to upload profile photos:

src/components/Avatar.vue

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

<script setup>import { ref, toRefs, watchEffect } from 'vue'import { supabase } from '../supabase'const prop = defineProps(['path', 'size'])const { path, size } = toRefs(prop)const emit = defineEmits(['upload', 'update:path'])const uploading = ref(false)const src = ref('')const files = ref()const downloadImage = async () => {  try {    const { data, error } = await supabase.storage.from('avatars').download(path.value)    if (error) throw error    src.value = URL.createObjectURL(data)  } catch (error) {    console.error('Error downloading image: ', error.message)  }}const uploadAvatar = async (evt) => {  files.value = evt.target.files  try {    uploading.value = true    if (!files.value || files.value.length === 0) {      throw new Error('You must select an image to upload.')    }    const file = files.value[0]    const fileExt = file.name.split('.').pop()    const filePath = `${Math.random()}.${fileExt}`    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)    if (uploadError) throw uploadError    emit('update:path', filePath)    emit('upload')  } catch (error) {    alert(error.message)  } finally {    uploading.value = false  }}watchEffect(() => {  if (path.value) downloadImage()})</script><template>  <div>    <img      v-if="src"      :src="src"      alt="Avatar"      class="avatar image"      :style="{ height: size + 'em', width: size + 'em' }"    />    <div v-else class="avatar no-image" :style="{ height: size + 'em', width: size + 'em' }" />    <div :style="{ width: size + 'em' }">      <label class="button primary block" for="single">        {{ uploading ? 'Uploading ...' : 'Upload' }}      </label>      <input        style="visibility: hidden; position: absolute"        type="file"        id="single"        accept="image/*"        @change="uploadAvatar"        :disabled="uploading"      />    </div>  </div></template>
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3\#add-the-new-widget)

And then we can add the widget to the Account page in `src/components/Account.vue`:

src/components/Account.vue

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

<script>// Import the new componentimport Avatar from './Avatar.vue'//...const avatar_url = ref('')//...</script><template>  <form class="form-widget" @submit.prevent="updateProfile">    <!-- Add to body -->    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />    <!-- Other form elements -->  </form></template>
```

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-vue-3.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#building-the-app) [Initialize a Vue 3 app](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#initialize-a-vue-3-app) [Set up a login component](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#set-up-a-login-component) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)