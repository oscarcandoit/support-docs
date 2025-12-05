---
url: "https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui"
title: "Flutter Auth UI | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui)

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
3. Auth UI
5. [Flutter Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui)

# Flutter Auth UI

* * *

Flutter Auth UI is a Flutter package containing pre-built widgets for authenticating users.
It is unstyled and can match your brand and aesthetic.

![Flutter Auth UI](https://raw.githubusercontent.com/supabase-community/flutter-auth-ui/main/screenshots/supabase_auth_ui.png)

## Add Flutter Auth UI [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#add-flutter-auth-ui)

Add the latest version of the package [supabase-auth-ui](https://pub.dev/packages/supabase_auth_ui) to pubspec.yaml:

```
1

flutter pub add supabase_auth_ui
```

### Initialize the Flutter Auth package [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#initialize-the-flutter-auth-package)

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

import 'package:flutter/material.dart';import 'package:supabase_auth_ui/supabase_auth_ui.dart';void main() async {  await Supabase.initialize(    url: dotenv.get('SUPABASE_URL'),    anonKey: dotenv.get('SUPABASE_PUBLISHABLE_KEY'),  );  runApp(const MyApp());}
```

### Email Auth [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#email-auth)

Use a `SupaEmailAuth` widget to create an email and password signin and signup form. It also contains a button to toggle to display a forgot password form.

You can pass `metadataFields` to add additional fields to the form to pass as metadata to Supabase.

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

SupaEmailAuth(  redirectTo: kIsWeb ? null : 'io.mydomain.myapp://callback',  onSignInComplete: (response) {},  onSignUpComplete: (response) {},  metadataFields: [    MetaDataField(    prefixIcon: const Icon(Icons.person),    label: 'Username',    key: 'username',    validator: (val) {            if (val == null || val.isEmpty) {            return 'Please enter something';            }            return null;          },        ),    ],)
```

### Magic link Auth [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#magic-link-auth)

Use `SupaMagicAuth` widget to create a magic link signIn form.

```
1
2
3
4
5

SupaMagicAuth(  redirectUrl: kIsWeb ? null : 'io.mydomain.myapp://callback',  onSuccess: (Session response) {},  onError: (error) {},)
```

### Reset password [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#reset-password)

Use `SupaResetPassword` to create a password reset form.

```
1
2
3
4
5

SupaResetPassword(  accessToken: supabase.auth.currentSession?.accessToken,  onSuccess: (UserResponse response) {},  onError: (error) {},)
```

### Phone Auth [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#phone-auth)

Use `SupaPhoneAuth` to create a phone authentication form.

```
1
2
3
4

SupaPhoneAuth(  authAction: SupaAuthAction.signUp,  onSuccess: (AuthResponse response) {},),
```

### Social Auth [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#social-auth)

The package supports login with [official social providers](https://supabase.com/docs/guides/auth#providers).

Use `SupaSocialsAuth` to create list of social login buttons.

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

SupaSocialsAuth(  socialProviders: [    OAuthProvider.apple,    OAuthProvider.google,  ],  colored: true,  redirectUrl: kIsWeb    ? null    : 'io.mydomain.myapp://callback',  onSuccess: (Session response) {},  onError: (error) {},)
```

### Theming [\#](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui\#theming)

This package uses plain Flutter components allowing you to control the appearance of the components using your own theme.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/flutter-auth-ui.mdx)

### Is this helpful?

NoYes

### On this page

[Add Flutter Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#add-flutter-auth-ui) [Initialize the Flutter Auth package](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#initialize-the-flutter-auth-package) [Email Auth](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#email-auth) [Magic link Auth](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#magic-link-auth) [Reset password](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#reset-password) [Phone Auth](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#phone-auth) [Social Auth](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#social-auth) [Theming](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui#theming)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)