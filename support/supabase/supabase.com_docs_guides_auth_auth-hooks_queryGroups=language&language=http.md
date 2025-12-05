---
url: "https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http"
title: "Auth Hooks | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http)

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

[Overview](https://supabase.com/docs/guides/auth/auth-hooks)
[Custom access token hook](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook)
[Send SMS hook](https://supabase.com/docs/guides/auth/auth-hooks/send-sms-hook)
[Send email hook](https://supabase.com/docs/guides/auth/auth-hooks/send-email-hook)
[MFA verification hook](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook)
[Password verification hook](https://supabase.com/docs/guides/auth/auth-hooks/password-verification-hook)
[Before User Created hook](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook)

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
5. [Auth Hooks](https://supabase.com/docs/guides/auth/auth-hooks)
7. [Overview](https://supabase.com/docs/guides/auth/auth-hooks)

# Auth Hooks

## Use HTTP or Postgres Functions to customize your authentication flow

* * *

## What is a hook [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#what-is-a-hook)

A hook is an endpoint that allows you to alter the default Supabase Auth flow at specific execution points. Developers can use hooks to add custom behavior that's not supported natively.

Hooks help you:

- Track the origin of user signups by adding metadata
- Improve security by adding additional checks to password and multi-factor authentication
- Support legacy systems by integrating with identity credentials from external authentication systems
- Add additional custom claims to your JWT
- Send authentication emails or SMS messages through a custom provider

The following hooks are available:

| Hook | Available on Plan |
| --- | --- |
| [Before User Created](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook) | Free, Pro |
| [Custom Access Token](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook) | Free, Pro |
| [Send SMS](https://supabase.com/docs/guides/auth/auth-hooks/send-sms-hook) | Free, Pro |
| [Send Email](https://supabase.com/docs/guides/auth/auth-hooks/send-email-hook) | Free, Pro |
| [MFA Verification Attempt](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook) | Teams and Enterprise |
| [Password Verification Attempt](https://supabase.com/docs/guides/auth/auth-hooks/password-verification-hook) | Teams and Enterprise |

Supabase supports 2 ways to [configure a hook](https://supabase.com/dashboard/project/_/auth/hooks) in your project:

Postgres FunctionHTTP Endpoint

A [Postgres function](https://supabase.com/docs/guides/database/functions) can be configured as a hook. The function should take in a single argument -- the event of type JSONB -- and return a JSONB object. Since the Postgres function runs on your database, the request does not leave your project's instance.

## Security model [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#security-model)

Sign the payload and grant permissions selectively in order to guard the integrity of the payload.

SQLHTTP

HTTP Hooks in Supabase follow the [Standard Webhooks Specification](https://www.standardwebhooks.com/), which is a set of guidelines aligning how hooks are implemented. The specification attaches three security headers to guarantee the integrity of the payload:

- `webhook-id`: the unique webhook identifier described in the preceding sections.
- `webhook-timestamp`: integer UNIX timestamp (seconds since epoch).
- `webhook-signature`: the signatures of this webhook. This is generated from body of the hook.

When the request is made to the HTTP hook, you should use the [Standard Webhooks libraries](https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries) to verify these headers.

When a HTTP hook is created, the secret generated should be of the `v1,whsec_<base64-secret>` format:

- `v1` denotes the version of the hook
- `whsec_` signifies that the secret is symmetric
- `<base64-secret>` implies a Standard Base64 encoded secret which can contain the characters `+`, `/` and `=`

The secret is used to verify the payload received in your hook. Create an entry in your `.env.local` file to store the `<standard-base64-secret>` portion of the secret for each hook that you have. For example:

```
1

SEND_SMS_HOOK_SECRETS=v1,whsec_<base64-secret>
```

There field is expressed in plural rather than singular as there are plans to allow for asymmetric signing and multiple hook secrets for ease of secret rotation. For instance: `<standard-base-64-secret>|<another-standard-base-64-secret>`.

Use the secret in conjunction with the Standard Webhooks package to verify the payload before processing it:

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

import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'Deno.serve(async (req) => {  const payload = await req.text()  const hookSecret = Deno.env.get('SEND_SMS_HOOK_SECRETS').replace('v1,whsec_', '')  // Extract headers and security specific fields  const headers = Object.fromEntries(req.headers)  const wh = new Webhook(hookSecret)  const data = wh.verify(payload, headers)  // Payload data is verified, continue with business logic here  // ...})
```

## Using Hooks [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#using-hooks)

### Developing [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#developing)

Let us develop a Hook locally and then deploy it to the cloud. As a recap, here’s a list of available Hooks

| Hook | Suggested Function Name | When it is called | What it Does |
| --- | --- | --- | --- |
| Send SMS | `send_sms` | Each time an SMS is sent | Allows you to customize message content and SMS Provider |
| Send Email | `send_email` | Each time an Email is sent | Allows you to customize message content and Email Provider |
| Custom Access Token | `custom_access_token` | Each time a new JWT is created | Returns the claims you wish to be present in the JWT. |
| MFA Verification Attempt | `mfa_verification_attempt` | Each time a user tries to verify an MFA factor. | Returns a decision on whether to reject the attempt and future ones, or to allow the user to keep trying. |
| Password Verification Attempt | `password_verification_attempt` | Each time a user tries to sign in with a password. | Return a decision whether to allow the user to reject the attempt, or to allow the user to keep trying. |

Edit `config.toml` to set up the Auth Hook locally.

SQLHTTP

Modify the `auth.hook.<hook_name>` field and set `uri` to a valid HTTP URI. For example, the `send_sms` hook would take the following fields:

```
1
2
3
4
5

[auth.hook.send_sms]enabled = trueuri = "http://host.docker.internal:54321/functions/v1/send_sms"# Comma separated list of secretssecrets = "env(SEND_SMS_HOOK_SECRETS)"
```

`host.docker.internal` is a special DNS name used in Docker to allow a container to access the host machine's network. This allows the Auth container to reach your HTTP function, no matter if it's a Supabase Edge Function or a custom endpoint.

Fill in the Hook Secret in `supabase/functions/.env`

```
1

SEND_SMS_HOOK_SECRETS='v1,whsec_<base64-secret>'
```

Start the function locally:

```
1

supabase functions serve send-sms --no-verify-jwt
```

Disable JWT verification via the `--no-verify-jwt` to accommodate hooks which are run before a JWT is issued. Payload authenticity is instead protected via the appended security headers associated with the Standard Webhooks Standard.

Note that payloads are sent uncompressed in order to accurately track Content Length. In addition, there is a 20KB payload limit to guard against payload stuffing attacks.

### Deploying [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#deploying)

In the dashboard, navigate to [`Authentication > Hooks`](https://supabase.com/dashboard/project/_/auth/hooks) and select the appropriate function type (SQL or HTTP) from the dropdown menu.

### Error handling [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#error-handling)

You should return an error when facing a runtime error. Runtime errors are specific to your application and arise from specific business rules rather than programmer errors.

Runtime errors could happen when:

- The user does not have appropriate permissions
- The event payload received does not have required claims.
- The user has performed an action which violates a business rule.
- The email or phone provider used in the webhook returned an error.

SQLHTTP

Hooks return status codes based on the nature of the response. These status codes help determine the next steps in the processing flow:

| HTTP Status Code | Description | Example Usage |
| --- | --- | --- |
| 200, 202, 204 | Valid response, proceed | Successful processing of the request |
| 403, 400 | Treated as Internal Server Errors and return a 500 Error Code | Malformed requests or insufficient permissions |
| 429, 503 | Retry-able errors | Temporary server overload or maintenance |

`204` Status is not supported by the following hooks which require a response body:

- [Custom Access Token](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook)
- [MFA Verification Attempt](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook)
- [Password Verification Attempt](https://supabase.com/docs/guides/auth/auth-hooks/password-verification-hook)

Errors are responses which contain status codes 400 and above. On a retry-able error, such as an error with a `429` or `503` status code, HTTP Hooks will attempt up to three retries with a back-off of two seconds. We have a time budget of 5s for the entire webhook invocation, including retry requests.

Here's a sample HTTP retry schedule:

| Time Since Start (HH:MM:SS) | Event | Notes |
| --- | --- | --- |
| 00:00:00 | Initial Attempt | Initial invocation begins. |
| 00:00:02 | Initial Attempt Fails | Initial invocation returns `429` or `503` with non-empty `retry-after` header. |
| 00:00:04 | Retry Start #1 | After 2 sec delay, first retry begins. |
| 00:00:05 | Retry Timeout #1 | First retry times out, exceeded 5 second budget and invocation returns an error. |

Return a retry-able error by attaching a appropriate status code (`429`, `503`) and a non-empty `retry-after` header

`Retry-After` Supabase Auth does not fully support the `Retry-After` header as described in RFC7231, we only check if it is a non-empty value such as `true` or `10`. Setting this to your preferred value is fine as a future update may address this.

```
1
2
3
4
5
6

return new Response(  JSON.stringify({    error: `Failed to process the request: ${error}`,  }),  { status: 429, headers: { 'Content-Type': 'application/json', 'retry-after': 'true' } })
```

Note that all responses, including error responses, need a `Content-Type` of `application/json` \- not specifying the appropriate `Content-Type` will result in the function returning an error response. Supabase Auth will in turn return an Internal Server Error.

Outside of runtime errors, both HTTP Hooks and Postgres Hooks return timeout errors. Postgres Hooks have 2 seconds to complete processing while HTTP Hooks should complete in 5 seconds. Both HTTP Hooks and Postgres Hooks are run in a transaction do limit the duration of execution to avoid delays in authentication process.

## Available Hooks [\#](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http\#available-hooks)

Each Hook description contains an example JSON Schema which you can use in conjunction with [JSON Schema Faker](https://json-schema-faker.js.org/) in order to generate a mock payload. For HTTP Hooks, you can also use [the Standard Webhooks Testing Tool](https://www.standardwebhooks.com/simulate) to simulate a request.

[Custom Access Token\\
\\
Customize the access token issued by Supabase Auth](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook)

[Send SMS\\
\\
Use a custom SMS provider to send authentication messages](https://supabase.com/docs/guides/auth/auth-hooks/send-sms-hook)

[Send Email\\
\\
Use a custom email provider to send authentication messages](https://supabase.com/docs/guides/auth/auth-hooks/send-email-hook)

[MFA Verification\\
\\
Add additional checks to the MFA verification flow](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook)

[Password verification\\
\\
Add additional checks to the password verification flow](https://supabase.com/docs/guides/auth/auth-hooks/password-verification-hook)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx)

### Is this helpful?

NoYes

### On this page

[What is a hook](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#what-is-a-hook) [Security model](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#security-model) [Using Hooks](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#using-hooks) [Developing](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#developing) [Deploying](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#deploying) [Error handling](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#error-handling) [Available Hooks](https://supabase.com/docs/guides/auth/auth-hooks?queryGroups=language&language=http#available-hooks)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)