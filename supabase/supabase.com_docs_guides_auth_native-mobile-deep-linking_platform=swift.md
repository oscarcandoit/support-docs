---
url: "https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift"
title: "Native Mobile Deep Linking | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift)

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
3. Flows (How-tos)
5. [Mobile Deep Linking](https://supabase.com/docs/guides/auth/native-mobile-deep-linking)

# Native Mobile Deep Linking

## Set up Deep Linking for mobile applications.

* * *

Many Auth methods involve a redirect to your app. For example:

- Signup confirmation emails, Magic Link signins, and password reset emails contain a link that redirects to your app.
- In OAuth signins, an automatic redirect occurs to your app.

With Deep Linking, you can configure this redirect to open a specific page. This is necessary if, for example, you need to display a form for [password reset](https://supabase.com/docs/guides/auth/passwords#resetting-a-users-password-forgot-password), or to manually exchange a token hash.

## Setting up deep linking [\#](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift\#setting-up-deep-linking)

Expo React NativeFlutterSwiftAndroid Kotlin

### Deep link config [\#](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift\#deep-link-config)

1. Go to your [auth settings](https://supabase.com/dashboard/project/_/auth/url-configuration) page.
2. Enter your app redirect URL in the `Additional Redirect URLs` field. This is the URL that the user gets redirected to after clicking a magic link.

The redirect callback URL should have the format `[YOUR_SCHEME]://[YOUR_HOSTNAME]`. Here, `io.supabase.user-management://login-callback` is just an example. You can choose whatever you would like for `YOUR_SCHEME` and `YOUR_HOSTNAME` as long as the scheme is unique across the user's device. For this reason, typically a reverse domain of your website is used.

![Supabase console deep link setting](https://supabase.com/docs/img/deeplink-setting.png)

Now add a custom URL to your application, so the OS knows how to redirect back your application once the user clicks the magic link.

You have the option to use Xcode's Target Info Editor following [official Apple documentation](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app#Register-your-URL-scheme).

Or, declare the URL scheme manually in your `Info.plist` file.

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

<?xml version="1.0" encoding="UTF-8"?>  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">  <plist version="1.0">  <dict>    <!-- other tags -->    <key>CFBundleURLTypes</key>    <array>      <dict>        <key>CFBundleTypeRole</key>        <string>Editor</string>        <key>CFBundleURLSchemes</key>        <array>          <string>io.supabase.user-management</string>        </array>      </dict>    </array>  </dict>  </plist>
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/native-mobile-deep-linking.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F8TZ6O1C8ujE%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Setting up deep linking](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift#setting-up-deep-linking) [Deep link config](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift#deep-link-config)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)