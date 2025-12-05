---
url: "https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook"
title: "MFA Verification Hook | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook)

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
7. [MFA verification hook](https://supabase.com/docs/guides/auth/auth-hooks/mfa-verification-hook)

# MFA Verification Hook

* * *

You can add additional checks to the [Supabase MFA implementation](https://supabase.com/docs/guides/auth/auth-mfa) with hooks. For example, you can:

- Limit the number of verification attempts performed over a period of time.
- Sign out users who have too many invalid verification attempts.
- Count, rate limit, or ban sign-ins.

**Inputs**

Supabase Auth will send a payload containing these fields to your hook:

| Field | Type | Description |
| --- | --- | --- |
| `factor_id` | `string` | Unique identifier for the MFA factor being verified |
| `factor_type` | `string` | `totp` or `phone` |
| `user_id` | `string` | Unique identifier for the user |
| `valid` | `boolean` | Whether the verification attempt was valid. For TOTP, this means that the six digit code was correct (true) or incorrect (false). |

JSONJSON Schema

```
1
2
3
4
5

{  "factor_id": "6eab6a69-7766-48bf-95d8-bd8f606894db",  "user_id": "3919cb6e-4215-4478-a960-6d3454326cec",  "valid": true}
```

**Outputs**

Return this if your hook processed the input without errors.

| Field | Type | Description |
| --- | --- | --- |
| `decision` | `string` | The decision on whether to allow authentication to move forward. Use `reject` to deny the verification attempt and log the user out of all active sessions. Use `continue` to use the default Supabase Auth behavior. |
| `message` | `string` | The message to show the user if the decision was `reject`. |

```
1
2
3
4

{  "decision": "reject",  "message": "You have exceeded maximum number of MFA attempts."}
```

SQL

Limit failed MFA verification attempts

Your company requires that a user can input an incorrect MFA Verification code no more than once every 2 seconds.

Create a table to record the last time a user had an incorrect MFA verification attempt for a factor.

```
1
2
3
4
5
6

create table public.mfa_failed_verification_attempts (  user_id uuid not null,  factor_id uuid not null,  last_failed_at timestamp not null default now(),  primary key (user_id, factor_id));
```

Create a hook to read and write information to this table. For example:

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

create function public.hook_mfa_verification_attempt(event jsonb)  returns jsonb  language plpgsqlas $$  declare    last_failed_at timestamp;  begin    if event->'valid' is true then      -- code is valid, accept it      return jsonb_build_object('decision', 'continue');    end if;    select last_failed_at into last_failed_at      from public.mfa_failed_verification_attempts      where        user_id = event->'user_id'          and        factor_id = event->'factor_id';    if last_failed_at is not null and now() - last_failed_at < interval '2 seconds' then      -- last attempt was done too quickly      return jsonb_build_object(        'error', jsonb_build_object(          'http_code', 429,          'message',   'Please wait a moment before trying again.'        )      );    end if;    -- record this failed attempt    insert into public.mfa_failed_verification_attempts      (        user_id,        factor_id,        last_refreshed_at      )      values      (        event->'user_id',        event->'factor_id',        now()      )      on conflict do update        set last_refreshed_at = now();    -- finally let Supabase Auth do the default behavior for a failed attempt    return jsonb_build_object('decision', 'continue');  end;$$;-- Assign appropriate permissions and revoke accessgrant all  on table public.mfa_failed_verification_attempts  to supabase_auth_admin;revoke all  on table public.mfa_failed_verification_attempts  from authenticated, anon, public;
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/mfa-verification-hook.mdx)

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)