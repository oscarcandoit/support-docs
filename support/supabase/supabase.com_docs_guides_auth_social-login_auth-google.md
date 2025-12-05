---
url: "https://supabase.com/docs/guides/auth/social-login/auth-google"
title: "Login with Google | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/social-login/auth-google)

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

[Overview](https://supabase.com/docs/guides/auth/social-login)
[Google](https://supabase.com/docs/guides/auth/social-login/auth-google)
[Facebook](https://supabase.com/docs/guides/auth/social-login/auth-facebook)
[Apple](https://supabase.com/docs/guides/auth/social-login/auth-apple)
[Azure (Microsoft)](https://supabase.com/docs/guides/auth/social-login/auth-azure)
[Twitter](https://supabase.com/docs/guides/auth/social-login/auth-twitter)
[GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github)
[Gitlab](https://supabase.com/docs/guides/auth/social-login/auth-gitlab)
[Bitbucket](https://supabase.com/docs/guides/auth/social-login/auth-bitbucket)
[Discord](https://supabase.com/docs/guides/auth/social-login/auth-discord)
[Figma](https://supabase.com/docs/guides/auth/social-login/auth-figma)
[Kakao](https://supabase.com/docs/guides/auth/social-login/auth-kakao)
[Keycloak](https://supabase.com/docs/guides/auth/social-login/auth-keycloak)
[LinkedIn](https://supabase.com/docs/guides/auth/social-login/auth-linkedin)
[Notion](https://supabase.com/docs/guides/auth/social-login/auth-notion)
[Slack](https://supabase.com/docs/guides/auth/social-login/auth-slack)
[Spotify](https://supabase.com/docs/guides/auth/social-login/auth-spotify)
[Twitch](https://supabase.com/docs/guides/auth/social-login/auth-twitch)
[WorkOS](https://supabase.com/docs/guides/auth/social-login/auth-workos)
[Zoom](https://supabase.com/docs/guides/auth/social-login/auth-zoom)

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
3. More
5. [Social Login (OAuth)](https://supabase.com/docs/guides/auth/social-login)
7. [Google](https://supabase.com/docs/guides/auth/social-login/auth-google)

# Login with Google

* * *

Supabase Auth supports [Sign in with Google for the web](https://developers.google.com/identity/gsi/web/guides/overview), native applications ( [Android](https://developer.android.com/identity/sign-in/credential-manager-siwg), [macOS and iOS](https://developers.google.com/identity/sign-in/ios/start-integrating)), and [Chrome extensions](https://cloud.google.com/identity-platform/docs/web/chrome-extension).

You can use Sign in with Google in two ways:

- [By writing application code](https://supabase.com/docs/guides/auth/social-login/auth-google#application-code) for the web, native applications or Chrome extensions
- [By using Google's pre-built solutions](https://supabase.com/docs/guides/auth/social-login/auth-google#google-pre-built) such as [personalized sign-in buttons](https://developers.google.com/identity/gsi/web/guides/personalized-button), [One Tap](https://developers.google.com/identity/gsi/web/guides/features) or [automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out)

## Prerequisites [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#prerequisites)

You need to do some setup to get started with Sign in with Google:

- Prepare a Google Cloud project. Go to the [Google Cloud Platform](https://console.cloud.google.com/home/dashboard) and create a new project if necessary.
- Use the [Google Auth Platform console](https://console.cloud.google.com/auth/overview) to register and set up your application's:
  - [**Audience**](https://console.cloud.google.com/auth/audience) by configuring which Google users are allowed to sign in to your application.
  - [**Data Access (Scopes)**](https://console.cloud.google.com/auth/scopes) define what your application can do with your user's Google data and APIs, such as access profile information or more.
  - [**Branding**](https://console.cloud.google.com/auth/branding) and [**Verification**](https://console.cloud.google.com/auth/verification) show a logo and name instead of the Supabase project ID in the consent screen, improving user retention. Brand verification may take a few business days.

### Setup required scopes [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#setup-required-scopes)

Supabase Auth needs a few scopes granting access to profile data of your end users, which you have to configure in the [**Data Access (Scopes)**](https://console.cloud.google.com/auth/scopes) screen:

- `openid` (add manually)
- `.../auth/userinfo.email` (added by default)
- `...auth/userinfo.profile` (added by default)

If you add more scopes, especially those on the sensitive or restricted list your application might be subject to verification which may take a long time.

### Setup consent screen branding [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#setup-consent-screen-branding)

It's strongly recommended you set up a custom domain and optionally verify your brand information with Google, as this makes phishing attempts easier to spot by your users.

Google's consent screen is shown to users when they sign in. Optionally configure one of the following to improve the appearance of the screen, increasing the perception of trust by your users:

1. Verify your application's brand (logo and name) by configuring it in the [Branding](https://console.cloud.google.com/auth/branding) section of the Google Auth Platform console. Brand verification is not automatic and may take a few business days.
2. Set up a [custom domain for your project](https://supabase.com/docs/guides/platform/custom-domains) to present the user with a clear relationship to the website they clicked Sign in with Google on.
   - A good approach is to use `auth.example.com` or `api.example.com`, if your application is hosted on `example.com`.
   - If you don't set this up, users will see `<project-id>.supabase.co` which does not inspire trust and can make your application more susceptible to successful phishing attempts.

## Project setup [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#project-setup)

To support Sign In with Google, you need to configure the Google provider for your Supabase project.

WebExpo React NativeFlutter (iOS and Android)Flutter (web, macOS, Windows, Linux)SwiftAndroid (Kotlin)Chrome Extensions

Regardless of whether you use application code or Google's pre-built solutions to implement the sign in flow, you need to configure your project by obtaining a Client ID and Client Secret in the [Clients](https://console.cloud.google.com/auth/clients) section of the Google Auth Platform console:

1. [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Web application** for the application type.
2. Under **Authorized JavaScript origins** add your application's URL. These should also be configured as the [Site URL or redirect configuration in your project](https://supabase.com/docs/guides/auth/redirect-urls).
   - If your app is hosted on `https://example.com/app` add `https://example.com`.
   - Add `http://localhost:<port>` while developing locally. Remember to remove this when your application [goes into production](https://supabase.com/docs/guides/deployment/going-into-prod).
3. Under **Authorized redirect URIs** add your Supabase project's callback URL.
   - Access it from the [Google provider page on the Dashboard](https://supabase.com/dashboard/project/_/auth/providers?provider=Google).
   - For local development, use `http://localhost:3000/auth/v1/callback`.
4. Click `Create` and make sure you save the Client ID and Client Secret.
   - Add these values to the [Google provider page on the Dashboard](https://supabase.com/dashboard/project/_/auth/providers?provider=Google).

### Local development [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#local-development)

To use the Google provider in local development:

1. Add a new environment variable:


```
1

SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET="<client-secret>"
```

2. Configure the provider:


```
1
2
3
4
5

[auth.external.google]enabled = trueclient_id = "<client-id>"secret = "env(SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET)"skip_nonce_check = false
```


If you have multiple client IDs, such as one for Web, iOS and Android, concatenate all of the client IDs with a comma but make sure the web's client ID is first in the list.

### Using the management API [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#using-the-management-api)

Use the [PATCH `/v1/projects/{ref}/config/auth` Management API endpoint](https://supabase.com/docs/reference/api/v1-update-auth-service-config) to configure the project's Auth settings programmatically. For configuring the Google provider send these options:

```
1
2
3
4
5

{  "external_google_enabled": true,  "external_google_client_id": "your-google-client-id",  "external_google_secret": "your-google-client-secret"}
```

## Signing users in [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#signing-users-in)

WebExpo React NativeFlutter (iOS and Android)Flutter (web, macOS, Windows, Linux)Android (Kotlin)Chrome Extensions

### Application code [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#application-code)

To use your own application code for the signin button, call the `signInWithOAuth` method (or the equivalent for your language).

Make sure you're using the right `supabase` client in the following code.

If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](https://supabase.com/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.

```
1
2
3

supabase.auth.signInWithOAuth({  provider: 'google',})
```

For an implicit flow, that's all you need to do. The user will be taken to Google's consent screen, and finally redirected to your app with an access and refresh token pair representing their session.

For a PKCE flow, for example in Server-Side Auth, you need an extra step to handle the code exchange. When calling `signInWithOAuth`, provide a `redirectTo` URL which points to a callback route. This redirect URL should be added to your [redirect allow list](https://supabase.com/docs/guides/auth/redirect-urls).

ClientServer

In the browser, `signInWithOAuth` automatically redirects to the OAuth provider's authentication endpoint, which then redirects to your endpoint.

```
1
2
3
4
5
6

await supabase.auth.signInWithOAuth({  provider,  options: {    redirectTo: `http://example.com/auth/callback`,  },})
```

At the callback endpoint, handle the code exchange to save the user session.

Next.jsSvelteKitAstroRemixExpress

Create a new file at `app/auth/callback/route.ts` and populate with the following:

###### app/auth/callback/route.ts

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

import { NextResponse } from 'next/server'// The client you created from the Server-Side Auth instructionsimport { createClient } from '@/utils/supabase/server'export async function GET(request: Request) {  const { searchParams, origin } = new URL(request.url)  const code = searchParams.get('code')  // if "next" is in param, use it as the redirect URL  let next = searchParams.get('next') ?? '/'  if (!next.startsWith('/')) {    // if "next" is not a relative URL, use the default    next = '/'  }  if (code) {    const supabase = await createClient()    const { error } = await supabase.auth.exchangeCodeForSession(code)    if (!error) {      const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer      const isLocalEnv = process.env.NODE_ENV === 'development'      if (isLocalEnv) {        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host        return NextResponse.redirect(`${origin}${next}`)      } else if (forwardedHost) {        return NextResponse.redirect(`https://${forwardedHost}${next}`)      } else {        return NextResponse.redirect(`${origin}${next}`)      }    }  }  // return the user to an error page with instructions  return NextResponse.redirect(`${origin}/auth/auth-code-error`)}
```

After a successful code exchange, the user's session will be saved to cookies.

### Saving Google tokens [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#saving-google-tokens)

The tokens saved by your application are the Supabase Auth tokens. Your app might additionally need the Google OAuth 2.0 tokens to access Google services on the user's behalf.

On initial login, you can extract the `provider_token` from the session and store it in a secure storage medium. The session is available in the returned data from `signInWithOAuth` (implicit flow) and `exchangeCodeForSession` (PKCE flow).

Google does not send out a refresh token by default, so you will need to pass parameters like these to `signInWithOAuth()` in order to extract the `provider_refresh_token`:

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

const { data, error } = await supabase.auth.signInWithOAuth({  provider: 'google',  options: {    queryParams: {      access_type: 'offline',      prompt: 'consent',    },  },})
```

### Google pre-built [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#google-pre-built)

Most web apps and websites can utilize Google's [personalized sign-in buttons](https://developers.google.com/identity/gsi/web/guides/personalized-button), [One Tap](https://developers.google.com/identity/gsi/web/guides/features) or [automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) for the best user experience.

1. Load the Google client library in your app by including the third-party script:



```
1

<script src="https://accounts.google.com/gsi/client" async></script>
```

2. Use the [HTML Code Generator](https://developers.google.com/identity/gsi/web/tools/configurator) to customize the look, feel, features and behavior of the Sign in with Google button.

3. Pick the _Swap to JavaScript callback_ option, and input the name of your callback function. This function will receive a [`CredentialResponse`](https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse) when sign in completes.

To make your app compatible with Chrome's third-party-cookie phase-out, make sure to set `data-use_fedcm_for_prompt` to `true`.

Your final HTML code might look something like this:



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

<div  id="g_id_onload"  data-client_id="<client ID>"  data-context="signin"  data-ux_mode="popup"  data-callback="handleSignInWithGoogle"  data-nonce=""  data-auto_select="true"  data-itp_support="true"  data-use_fedcm_for_prompt="true"></div><div  class="g_id_signin"  data-type="standard"  data-shape="pill"  data-theme="outline"  data-text="signin_with"  data-size="large"  data-logo_alignment="left"></div>
```

4. Create a `handleSignInWithGoogle` function that takes the `CredentialResponse` and passes the included token to Supabase. The function needs to be available in the global scope for Google's code to find it.



```
1
2
3
4
5
6

async function handleSignInWithGoogle(response) {  const { data, error } = await supabase.auth.signInWithIdToken({    provider: 'google',    token: response.credential,  })}
```

5. _(Optional)_ Configure a nonce. The use of a nonce is recommended for extra security, but optional. The nonce should be generated randomly each time, and it must be provided in both the `data-nonce` attribute of the HTML code and the options of the callback function.



```
1
2
3
4
5
6
7

async function handleSignInWithGoogle(response) {  const { data, error } = await supabase.auth.signInWithIdToken({    provider: 'google',    token: response.credential,    nonce: '<NONCE>',  })}
```



Note that the nonce should be the same in both places, but because Supabase Auth expects the provider to hash it (SHA-256, hexadecimal representation), you need to provide a hashed version to Google and a non-hashed version to `signInWithIdToken`.

You can get both versions by using the in-built `crypto` library:



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

// Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_stringconst nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))const encoder = new TextEncoder()const encodedNonce = encoder.encode(nonce)crypto.subtle.digest('SHA-256', encodedNonce).then((hashBuffer) => {  const hashArray = Array.from(new Uint8Array(hashBuffer))  const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')})// Use 'hashedNonce' when making the authentication request to Google// Use 'nonce' when invoking the supabase.auth.signInWithIdToken() method
```


### One-tap with Next.js [\#](https://supabase.com/docs/guides/auth/social-login/auth-google\#one-tap-with-nextjs)

If you're integrating Google One-Tap with your Next.js application, you can refer to the example below to get started:

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

'use client'import Script from 'next/script'import { createClient } from '@/utils/supabase/client'import type { accounts, CredentialResponse } from 'google-one-tap'import { useRouter } from 'next/navigation'declare const google: { accounts: accounts }// generate nonce to use for google id token sign-inconst generateNonce = async (): Promise<string[]> => {  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))  const encoder = new TextEncoder()  const encodedNonce = encoder.encode(nonce)  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)  const hashArray = Array.from(new Uint8Array(hashBuffer))  const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')  return [nonce, hashedNonce]}const OneTapComponent = () => {  const supabase = createClient()  const router = useRouter()  const initializeGoogleOneTap = async () => {    console.log('Initializing Google One Tap')    const [nonce, hashedNonce] = await generateNonce()    console.log('Nonce: ', nonce, hashedNonce)    // check if there's already an existing session before initializing the one-tap UI    const { data, error } = await supabase.auth.getSession()    if (error) {      console.error('Error getting session', error)    }    if (data.session) {      router.push('/')      return    }    /* global google */    google.accounts.id.initialize({      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,      callback: async (response: CredentialResponse) => {        try {          // send id token returned in response.credential to supabase          const { data, error } = await supabase.auth.signInWithIdToken({            provider: 'google',            token: response.credential,            nonce,          })          if (error) throw error          console.log('Session data: ', data)          console.log('Successfully logged in with Google One Tap')          // redirect to protected page          router.push('/')        } catch (error) {          console.error('Error logging in with Google One Tap', error)        }      },      nonce: hashedNonce,      // with chrome's removal of third-party cookies, we need to use FedCM instead (https://developers.google.com/identity/gsi/web/guides/fedcm-migration)      use_fedcm_for_prompt: true,    })    google.accounts.id.prompt() // Display the One Tap UI  }  return <Script onReady={initializeGoogleOneTap} src="https://accounts.google.com/gsi/client" />}export default OneTapComponent
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx)

### Is this helpful?

NoYes

### On this page

[Prerequisites](https://supabase.com/docs/guides/auth/social-login/auth-google#prerequisites) [Setup required scopes](https://supabase.com/docs/guides/auth/social-login/auth-google#setup-required-scopes) [Setup consent screen branding](https://supabase.com/docs/guides/auth/social-login/auth-google#setup-consent-screen-branding) [Project setup](https://supabase.com/docs/guides/auth/social-login/auth-google#project-setup) [Local development](https://supabase.com/docs/guides/auth/social-login/auth-google#local-development) [Using the management API](https://supabase.com/docs/guides/auth/social-login/auth-google#using-the-management-api) [Signing users in](https://supabase.com/docs/guides/auth/social-login/auth-google#signing-users-in) [Application code](https://supabase.com/docs/guides/auth/social-login/auth-google#application-code) [Saving Google tokens](https://supabase.com/docs/guides/auth/social-login/auth-google#saving-google-tokens) [Google pre-built](https://supabase.com/docs/guides/auth/social-login/auth-google#google-pre-built) [One-tap with Next.js](https://supabase.com/docs/guides/auth/social-login/auth-google#one-tap-with-nextjs)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)