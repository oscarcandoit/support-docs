---
url: "https://supabase.com/docs/guides/auth/quickstarts/react-native"
title: "Use Supabase Auth with React Native | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/quickstarts/react-native)

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
3. Getting Started
5. [React Native](https://supabase.com/docs/guides/auth/quickstarts/react-native)

# Use Supabase Auth with React Native

## Learn how to use Supabase Auth with React Native

* * *

1

### Create a new Supabase project

[Launch a new project](https://supabase.com/dashboard) in the Supabase Dashboard.

Your new database has a table for storing your users. You can see that this table is currently empty by running some SQL in the [SQL Editor](https://supabase.com/dashboard/project/_/sql).

###### SQL\_EDITOR

```
1

select * from auth.users;
```

2

### Create a React app

Create a React app using the `create-expo-app` command.

###### Terminal

```
1

npx create-expo-app -t expo-template-blank-typescript my-app
```

3

### Install the Supabase client library

Install `supabase-js` and the required dependencies.

###### Terminal

```
1

cd my-app && npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed react-native-url-polyfill
```

4

### Set up your login component

Create a helper file `lib/supabase.ts` that exports a Supabase client using your Project URL and key.

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

###### lib/supabase.ts

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

import { AppState, Platform } from 'react-native'import 'react-native-url-polyfill/auto'import AsyncStorage from '@react-native-async-storage/async-storage'import { createClient, processLock } from '@supabase/supabase-js'const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URLconst supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_PUBLISHABLE_KEYexport const supabase = createClient(supabaseUrl, supabaseAnonKey, {  auth: {    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),    autoRefreshToken: true,    persistSession: true,    detectSessionInUrl: false,    lock: processLock,  },})// Tells Supabase Auth to continuously refresh the session automatically// if the app is in the foreground. When this is added, you will continue// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or// `SIGNED_OUT` event if the user's session is terminated. This should// only be registered once.if (Platform.OS !== "web") {  AppState.addEventListener('change', (state) => {    if (state === 'active') {      supabase.auth.startAutoRefresh()    } else {      supabase.auth.stopAutoRefresh()    }  })}
```

5

### Create a login component

Let's set up a React Native component to manage logins and sign ups.

###### components/Auth.tsx

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

import React, { useState } from 'react'import { Alert, StyleSheet, View } from 'react-native'import { supabase } from '../lib/supabase'import { Button, Input } from '@rneui/themed'export default function Auth() {  const [email, setEmail] = useState('')  const [password, setPassword] = useState('')  const [loading, setLoading] = useState(false)  async function signInWithEmail() {    setLoading(true)    const { error } = await supabase.auth.signInWithPassword({      email: email,      password: password,    })    if (error) Alert.alert(error.message)    setLoading(false)  }  async function signUpWithEmail() {    setLoading(true)    const {      data: { session },      error,    } = await supabase.auth.signUp({      email: email,      password: password,    })    if (error) Alert.alert(error.message)    if (!session) Alert.alert('Please check your inbox for email verification!')    setLoading(false)  }  return (    <View style={styles.container}>      <View style={[styles.verticallySpaced, styles.mt20]}>        <Input          label="Email"          leftIcon={{ type: 'font-awesome', name: 'envelope' }}          onChangeText={(text) => setEmail(text)}          value={email}          placeholder="email@address.com"          autoCapitalize={'none'}        />      </View>      <View style={styles.verticallySpaced}>        <Input          label="Password"          leftIcon={{ type: 'font-awesome', name: 'lock' }}          onChangeText={(text) => setPassword(text)}          value={password}          secureTextEntry={true}          placeholder="Password"          autoCapitalize={'none'}        />      </View>      <View style={[styles.verticallySpaced, styles.mt20]}>        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />      </View>      <View style={styles.verticallySpaced}>        <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />      </View>    </View>  )}const styles = StyleSheet.create({  container: {    marginTop: 40,    padding: 12,  },  verticallySpaced: {    paddingTop: 4,    paddingBottom: 4,    alignSelf: 'stretch',  },  mt20: {    marginTop: 20,  },})
```

6

### Add the Auth component to your app

Add the `Auth` component to your `App.tsx` file. If the user is logged in, print the user id to the screen.

###### App.tsx

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

import 'react-native-url-polyfill/auto'import { useState, useEffect } from 'react'import { supabase } from './lib/supabase'import Auth from './components/Auth'import { View, Text } from 'react-native'import { Session } from '@supabase/supabase-js'export default function App() {  const [session, setSession] = useState<Session | null>(null)  useEffect(() => {    supabase.auth.getSession().then(({ data: { session } }) => {      setSession(session)    })    supabase.auth.onAuthStateChange((_event, session) => {      setSession(session)    })  }, [])  return (    <View>      <Auth />      {session && session.user && <Text>{session.user.id}</Text>}    </View>  )}
```

7

### Start the app

Start the app, and follow the instructions in the terminal.

###### Terminal

```
1

npm start
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/quickstarts/react-native.mdx)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)