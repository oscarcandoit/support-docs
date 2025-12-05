---
url: "https://supabase.com/docs/guides/auth/quickstarts/react"
title: "Use Supabase Auth with React | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/quickstarts/react)

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
5. [React](https://supabase.com/docs/guides/auth/quickstarts/react)

# Use Supabase Auth with React

## Learn how to use Supabase Auth with React.js.

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

Create a React app using a [Vite](https://vitejs.dev/guide/) template.

###### Terminal

```
1

npm create vite@latest my-app -- --template react
```

3

### Install the Supabase client library

Navigate to the React app and install the Supabase libraries.

###### Terminal

```
1

cd my-app && npm install @supabase/supabase-js
```

4

### Declare Supabase Environment Variables

Create `.env.local` and populate with your project's URL and Key.

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

###### .env.local

```
1
2

VITE_SUPABASE_URL=your-project-urlVITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_... or anon key
```

5

### Set up your login component

##### Explore drop-in UI components for your Supabase app.

UI components built on shadcn/ui that connect to Supabase via a single command.

[Explore Components](https://supabase.com/ui)

In `App.jsx`, create a Supabase client using your Project URL and key.

You can configure the Auth component to display whenever there is no session inside `supabase.auth.getSession()`

###### src/App.jsx

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

import "./index.css";import { useState, useEffect } from "react";import { createClient } from "@supabase/supabase-js";const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY);export default function App() {    const [loading, setLoading] = useState(false);    const [email, setEmail] = useState("");    const [session, setSession] = useState(null);    // Check URL params on initial render    const params = new URLSearchParams(window.location.search);    const hasTokenHash = params.get("token_hash");    const [verifying, setVerifying] = useState(!!hasTokenHash);    const [authError, setAuthError] = useState(null);    const [authSuccess, setAuthSuccess] = useState(false);    useEffect(() => {        // Check if we have token_hash in URL (magic link callback)        const params = new URLSearchParams(window.location.search);        const token_hash = params.get("token_hash");        const type = params.get("type");        if (token_hash) {            // Verify the OTP token            supabase.auth.verifyOtp({                token_hash,                type: type || "email",            }).then(({ error }) => {                if (error) {                    setAuthError(error.message);                } else {                    setAuthSuccess(true);                    // Clear URL params                    window.history.replaceState({}, document.title, "/");                }                setVerifying(false);            });        }        // Check for existing session        supabase.auth.getSession().then(({ data: { session } }) => {            setSession(session);        });        // Listen for auth changes        const {            data: { subscription },        } = supabase.auth.onAuthStateChange((_event, session) => {            setSession(session);        });        return () => subscription.unsubscribe();    }, []);    const handleLogin = async (event) => {        event.preventDefault();        setLoading(true);        const { error } = await supabase.auth.signInWithOtp({            email,            options: {                emailRedirectTo: window.location.origin,            }        });        if (error) {            alert(error.error_description || error.message);        } else {            alert("Check your email for the login link!");        }        setLoading(false);    };    const handleLogout = async () => {        await supabase.auth.signOut();        setSession(null);    };    // Show verification state    if (verifying) {        return (            <div>                <h1>Authentication</h1>                <p>Confirming your magic link...</p>                <p>Loading...</p>            </div>        );    }    // Show auth error    if (authError) {        return (            <div>                <h1>Authentication</h1>                <p>✗ Authentication failed</p>                <p>{authError}</p>                <button                    onClick={() => {                        setAuthError(null);                        window.history.replaceState({}, document.title, "/");                    }}                >                    Return to login                </button>            </div>        );    }    // Show auth success (briefly before session loads)    if (authSuccess && !session) {        return (            <div>                <h1>Authentication</h1>                <p>✓ Authentication successful!</p>                <p>Loading your account...</p>            </div>        );    }    // If user is logged in, show welcome screen    if (session) {        return (            <div>                <h1>Welcome!</h1>                <p>You are logged in as: {session.user.email}</p>                <button onClick={handleLogout}>                    Sign Out                </button>            </div>        );    }    // Show login form    return (        <div>            <h1>Supabase + React</h1>            <p>Sign in via magic link with your email below</p>            <form onSubmit={handleLogin}>                <input                    type="email"                    placeholder="Your email"                    value={email}                    required={true}                    onChange={(e) => setEmail(e.target.value)}                />                <button disabled={loading}>                    {loading ? <span>Loading</span> : <span>Send magic link</span>}                </button>            </form>        </div>    );}
```

6

### Customize email template

Before proceeding, change the email template to support support a server-side authentication flow that sends a token hash:

- Go to the [Auth templates](https://supabase.com/dashboard/project/_/auth/templates) page in your dashboard.
- Select the Confirm sign up template.
- Change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}?token_hash={{ .TokenHash }}&type=email`.
- Change your [Site URL](https://supabase.com/dashboard/project/_/auth/url-configuration) to `https://localhost:5173`

7

### Start the app

Start the app, go to [http://localhost:5173](http://localhost:5173/) in a browser, and open the browser console and you should be able to register and log in.

###### Terminal

```
1

npm run dev
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/quickstarts/react.mdx)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)