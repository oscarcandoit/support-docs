---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react"
title: "Build a User Management App with Ionic React | Supabase Docs"
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
3. Mobile tutorials
5. [Ionic React](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react)

# Build a User Management App with Ionic React

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/ionic-demos/ionic-angular-account.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/mhartington/supabase-ionic-react).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#building-the-app)

Let's start building the React app from scratch.

### Initialize an Ionic React app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#initialize-an-ionic-react-app)

We can use the [Ionic CLI](https://ionicframework.com/docs/cli) to initialize
an app called `supabase-ionic-react`:

```
1
2
3

npm install -g @ionic/cliionic start supabase-ionic-react blank --type reactcd supabase-ionic-react
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

And finally we want to save the environment variables in a `.env`.
All we need are the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#get-api-details).

.env

```
1
2

VITE_SUPABASE_URL=YOUR_SUPABASE_URLVITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Now that we have the API credentials in place, let's create a helper file to initialize the Supabase client. These variables will be exposed
on the browser, and that's completely fine since we have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on our Database.

src/supabaseClient.ts

```
1
2
3
4
5
6

import { createClient } from '@supabase/supabase-js'const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || ''export const supabase = createClient(supabaseUrl, supabasePublishableKey)
```

### Set up a login route [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#set-up-a-login-route)

Let's set up a React component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

/src/pages/Login.tsx

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

import { useState } from 'react';import {  IonButton,  IonContent,  IonHeader,  IonInput,  IonItem,  IonLabel,  IonList,  IonPage,  IonTitle,  IonToolbar,  useIonToast,  useIonLoading,} from '@ionic/react';import {supabase} from '../supabaseClient'export function LoginPage() {  const [email, setEmail] = useState('');  const [showLoading, hideLoading] = useIonLoading();  const [showToast ] = useIonToast();  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {    console.log()    e.preventDefault();    await showLoading();    try {      await supabase.auth.signInWithOtp({        "email": email      });      await showToast({ message: 'Check your email for the login link!' });    } catch (e: any) {      await showToast({ message: e.error_description || e.message , duration: 5000});    } finally {      await hideLoading();    }  };  return (    <IonPage>      <IonHeader>        <IonToolbar>          <IonTitle>Login</IonTitle>        </IonToolbar>      </IonHeader>      <IonContent>        <div className="ion-padding">          <h1>Supabase + Ionic React</h1>          <p>Sign in via magic link with your email below</p>        </div>        <IonList inset={true}>          <form onSubmit={handleLogin}>            <IonItem>              <IonLabel position="stacked">Email</IonLabel>              <IonInput                value={email}                name="email"                onIonChange={(e) => setEmail(e.detail.value ?? '')}                type="email"              ></IonInput>            </IonItem>            <div className="ion-text-center">              <IonButton type="submit" fill="clear">                Login              </IonButton>            </div>          </form>        </IonList>      </IonContent>    </IonPage>  );}
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#account-page)

After a user is signed in we can allow them to edit their profile details and manage their account.

Let's create a new component for that called `Account.tsx`.

src/pages/Account.tsx

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
152
153
154
155
156
157

import {  IonButton,  IonContent,  IonHeader,  IonInput,  IonItem,  IonLabel,  IonPage,  IonTitle,  IonToolbar,  useIonLoading,  useIonToast,  useIonRouter} from '@ionic/react';import { useEffect, useState } from 'react';import { supabase } from '../supabaseClient';import { Session } from '@supabase/supabase-js';export function AccountPage() {  const [showLoading, hideLoading] = useIonLoading();  const [showToast] = useIonToast();  const [session, setSession] = useState<Session | null>(null)  const router = useIonRouter();  const [profile, setProfile] = useState({    username: '',    website: '',    avatar_url: '',  });  useEffect(() => {    const getSession = async () => {      setSession(await supabase.auth.getSession().then((res) => res.data.session))    }    getSession()    supabase.auth.onAuthStateChange((_event, session) => {      setSession(session)    })  }, [])  useEffect(() => {    getProfile();  }, [session]);  const getProfile = async () => {    console.log('get');    await showLoading();    try {      const user = await supabase.auth.getUser();      const { data, error, status } = await supabase        .from('profiles')        .select(`username, website, avatar_url`)        .eq('id', user!.data.user?.id)        .single();      if (error && status !== 406) {        throw error;      }      if (data) {        setProfile({          username: data.username,          website: data.website,          avatar_url: data.avatar_url,        });      }    } catch (error: any) {      showToast({ message: error.message, duration: 5000 });    } finally {      await hideLoading();    }  };  const signOut = async () => {    await supabase.auth.signOut();    router.push('/', 'forward', 'replace');  }  const updateProfile = async (e?: any, avatar_url: string = '') => {    e?.preventDefault();    console.log('update ');    await showLoading();    try {      const user = await supabase.auth.getUser();      const updates = {        id: user!.data.user?.id,        ...profile,        avatar_url: avatar_url,        updated_at: new Date(),      };      const { error } = await supabase.from('profiles').upsert(updates);      if (error) {        throw error;      }    } catch (error: any) {      showToast({ message: error.message, duration: 5000 });    } finally {      await hideLoading();    }  };  return (    <IonPage>      <IonHeader>        <IonToolbar>          <IonTitle>Account</IonTitle>        </IonToolbar>      </IonHeader>      <IonContent>        <form onSubmit={updateProfile}>          <IonItem>            <IonLabel>              <p>Email</p>              <p>{session?.user?.email}</p>            </IonLabel>          </IonItem>          <IonItem>            <IonLabel position="stacked">Name</IonLabel>            <IonInput              type="text"              name="username"              value={profile.username}              onIonChange={(e) =>                setProfile({ ...profile, username: e.detail.value ?? '' })              }            ></IonInput>          </IonItem>          <IonItem>            <IonLabel position="stacked">Website</IonLabel>            <IonInput              type="url"              name="website"              value={profile.website}              onIonChange={(e) =>                setProfile({ ...profile, website: e.detail.value ?? '' })              }            ></IonInput>          </IonItem>          <div className="ion-text-center">            <IonButton fill="clear" type="submit">              Update Profile            </IonButton>          </div>        </form>        <div className="ion-text-center">          <IonButton fill="clear" onClick={signOut}>            Log Out          </IonButton>        </div>      </IonContent>    </IonPage>  );}
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#launch)

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

import { Redirect, Route } from 'react-router-dom'import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'import { IonReactRouter } from '@ionic/react-router'import { supabase } from './supabaseClient'import '@ionic/react/css/ionic.bundle.css'/* Theme variables */import './theme/variables.css'import { LoginPage } from './pages/Login'import { AccountPage } from './pages/Account'import { useEffect, useState } from 'react'import { Session } from '@supabase/supabase-js'setupIonicReact()const App: React.FC = () => {  const [session, setSession] = useState<Session | null>(null)  useEffect(() => {    const getSession = async () => {      setSession(await supabase.auth.getSession().then((res) => res.data.session))    }    getSession()    supabase.auth.onAuthStateChange((_event, session) => {      setSession(session)    })  }, [])  return (    <IonApp>      <IonReactRouter>        <IonRouterOutlet>          <Route            exact            path="/"            render={() => {              return session ? <Redirect to="/account" /> : <LoginPage />            }}          />          <Route exact path="/account">            <AccountPage />          </Route>        </IonRouterOutlet>      </IonReactRouter>    </IonApp>  )}export default App
```

Once that's done, run this in a terminal window:

```
1

ionic serve
```

And then open the browser to [localhost:3000](http://localhost:3000/) and you should see the completed app.

![Supabase Ionic React](https://supabase.com/docs/img/ionic-demos/ionic-react.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#create-an-upload-widget)

First install two packages in order to interact with the user's camera.

```
1

npm install @ionic/pwa-elements @capacitor/camera
```

[Capacitor](https://capacitorjs.com/) is a cross platform native runtime from Ionic that enables web apps to be deployed through the app store and provides access to native device API.

Ionic PWA elements is a companion package that will polyfill certain browser APIs that provide no user interface with custom Ionic UI.

With those packages installed we can update our `index.tsx` to include an additional bootstrapping call for the Ionic PWA Elements.

src/index.tsx

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

import React from 'react'import ReactDOM from 'react-dom'import App from './App'import * as serviceWorkerRegistration from './serviceWorkerRegistration'import reportWebVitals from './reportWebVitals'import { defineCustomElements } from '@ionic/pwa-elements/loader'defineCustomElements(window)ReactDOM.render(  <React.StrictMode>    <App />  </React.StrictMode>,  document.getElementById('root'))serviceWorkerRegistration.unregister()reportWebVitals()
```

Then create an `AvatarComponent`.

src/components/Avatar.tsx

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

import { IonIcon } from '@ionic/react';import { person } from 'ionicons/icons';import { Camera, CameraResultType } from '@capacitor/camera';import { useEffect, useState } from 'react';import { supabase } from '../supabaseClient';import './Avatar.css'export function Avatar({  url,  onUpload,}: {  url: string;  onUpload: (e: any, file: string) => Promise<void>;}) {  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();  useEffect(() => {    if (url) {      downloadImage(url);    }  }, [url]);  const uploadAvatar = async () => {    try {      const photo = await Camera.getPhoto({        resultType: CameraResultType.DataUrl,      });      const file = await fetch(photo.dataUrl!)        .then((res) => res.blob())        .then(          (blob) =>            new File([blob], 'my-file', { type: `image/${photo.format}` })        );      const fileName = `${Math.random()}-${new Date().getTime()}.${        photo.format      }`;      const { error: uploadError } = await supabase.storage        .from('avatars')        .upload(fileName, file);      if (uploadError) {        throw uploadError;      }      onUpload(null, fileName);    } catch (error) {      console.log(error);    }  };  const downloadImage = async (path: string) => {    try {      const { data, error } = await supabase.storage        .from('avatars')        .download(path);      if (error) {        throw error;      }      const url = URL.createObjectURL(data!);      setAvatarUrl(url);    } catch (error: any) {      console.log('Error downloading image: ', error.message);    }  };  return (    <div className="avatar">    <div className="avatar_wrapper" onClick={uploadAvatar}>      {avatarUrl ? (        <img src={avatarUrl} />      ) : (        <IonIcon icon={person} className="no-avatar" />      )}    </div>    </div>  );}
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react\#add-the-new-widget)

And then we can add the widget to the Account page:

src/pages/Account.tsx

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

// Import the new componentimport { Avatar } from '../components/Avatar';// ...return (  <IonPage>    <IonHeader>      <IonToolbar>        <IonTitle>Account</IonTitle>      </IonToolbar>    </IonHeader>    <IonContent>      <Avatar url={profile.avatar_url} onUpload={updateProfile}></Avatar>
```

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-ionic-react.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#building-the-app) [Initialize an Ionic React app](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#initialize-an-ionic-react-app) [Set up a login route](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#set-up-a-login-route) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)