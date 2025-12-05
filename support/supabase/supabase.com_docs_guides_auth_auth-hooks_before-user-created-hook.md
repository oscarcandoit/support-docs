---
url: "https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook"
title: "Before User Created Hook | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook)

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
7. [Before User Created hook](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook)

# Before User Created Hook

## Prevent unwanted signups by inspecting and rejecting user creation requests

* * *

This hook runs before a new user is created. It allows developers to inspect the incoming user object and optionally reject the request. Use this to enforce custom signup policies that Supabase Auth does not handle natively - such as blocking disposable email domains, restricting access by region or IP, or requiring that users belong to a specific email domain.

You can implement this hook using an HTTP endpoint or a Postgres function. If the hook returns an error object, the signup is denied and the user is not created. If the hook responds successfully (HTTP 200 or 204 with no error), the request proceeds as usual. This gives you full control over which users are allowed to register — and the flexibility to apply that logic server-side.

## Inputs [\#](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook\#inputs)

Supabase Auth will send a payload containing these fields to your hook:

| Field | Type | Description |
| --- | --- | --- |
| `metadata` | `object` | Metadata about the request. Includes IP address, request ID, and hook type. |
| `user` | `object` | The user record that is about to be created. Matches the shape of the `auth.users` table. |

Because the hook is ran just before the insertion into the database, this user will not be found in Postgres at the time the hook is called.

JSONJSON Schema

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

{  "metadata": {    "uuid": "8b34dcdd-9df1-4c10-850a-b3277c653040",    "time": "2025-04-29T13:13:24.755552-07:00",    "name": "before-user-created",    "ip_address": "127.0.0.1"  },  "user": {    "id": "ff7fc9ae-3b1b-4642-9241-64adb9848a03",    "aud": "authenticated",    "role": "",    "email": "valid.email@supabase.com",    "phone": "",    "app_metadata": {      "provider": "email",      "providers": ["email"]    },    "user_metadata": {},    "identities": [],    "created_at": "0001-01-01T00:00:00Z",    "updated_at": "0001-01-01T00:00:00Z",    "is_anonymous": false  }}
```

## Outputs [\#](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook\#outputs)

Your hook must return a response that either allows or blocks the signup request.

| Field | Type | Description |
| --- | --- | --- |
| `error` | `object` | (Optional) Return this to reject the signup. Includes a code, message, and optional HTTP status code. |

Returning an empty object with a `200` or `204` status code allows the request to proceed. Returning a JSON response with an `error` object and a `4xx` status code blocks the request and propagates the error message to the client. See the [error handling documentation](https://supabase.com/docs/guides/auth/auth-hooks#error-handling) for more details.

### Allow the signup [\#](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook\#allow-the-signup)

```
1

{}
```

or with a `204 No Content` response:

```
1

HTTP/1.1 204 No Content
```

### Reject the signup with an error [\#](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook\#reject-the-signup-with-an-error)

```
1
2
3
4
5
6

{  "error": {    "http_code": 400,    "message": "Only company emails are allowed to sign up."  }}
```

This response will block the user creation and return the error message to the client that attempted signup.

## Examples [\#](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook\#examples)

Each of the following examples shows how to use the `before-user-created` hook to control signup behavior. Each use case includes both a HTTP implementation (e.g. using an Edge Function) and a SQL implementation (Postgres function).

SQLHTTP

Allow by DomainBlock by OAuth ProviderAllow/Deny by IP or CIDR

Allow signups only from specific domains like supabase.com or example.test. Reject all others. This is useful for private/internal apps, enterprise gating, or invite-only beta access.

The `before-user-created` hook solves this by:

- Detecting that a user is about to be created
- Providing the email address in the `user.email` field

Run the following snippet in your project's [SQL Editor](https://supabase.com/dashboard/project/_/sql/new). This will create a `signup_email_domains` table with some sample data and a `hook_restrict_signup_by_email_domain` function to be called by the `before-user-created` auth hook.

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

-- Create ENUM type for domain rule classificationdo $$ begin  create type signup_email_domain_type as enum ('allow', 'deny');exception  when duplicate_object then null;end $$;-- Create the signup_email_domains tablecreate table if not exists public.signup_email_domains (  id serial primary key,  domain text not null,  type signup_email_domain_type not null,  reason text default null,  created_at timestamptz not null default now(),  updated_at timestamptz not null default now());-- Create a trigger to maintain updated_atcreate or replace function update_signup_email_domains_updated_at()returns trigger as $$begin  new.updated_at = now();  return new;end;$$ language plpgsql;drop trigger if exists trg_signup_email_domains_set_updated_at on public.signup_email_domains;create trigger trg_signup_email_domains_set_updated_atbefore update on public.signup_email_domainsfor each rowexecute procedure update_signup_email_domains_updated_at();-- Seed example datainsert into public.signup_email_domains (domain, type, reason) values  ('supabase.com', 'allow', 'Internal signups'),  ('gmail.com', 'deny', 'Public email provider'),  ('yahoo.com', 'deny', 'Public email provider');-- Create the functioncreate or replace function public.hook_restrict_signup_by_email_domain(event jsonb)returns jsonblanguage plpgsqlas $$declare  email text;  domain text;  is_allowed int;  is_denied int;begin  email := event->'user'->>'email';  domain := split_part(email, '@', 2);  -- Check for allow match  select count(*) into is_allowed  from public.signup_email_domains  where type = 'allow' and lower(domain) = lower($1);  if is_allowed > 0 then    return '{}'::jsonb;  end if;  -- Check for deny match  select count(*) into is_denied  from public.signup_email_domains  where type = 'deny' and lower(domain) = lower($1);  if is_denied > 0 then    return jsonb_build_object(      'error', jsonb_build_object(        'message', 'Signups from this email domain are not allowed.',        'http_code', 403      )    );  end if;  -- No match, allow by default  return '{}'::jsonb;end;$$;-- Permissionsgrant execute  on function public.hook_restrict_signup_by_email_domain  to supabase_auth_admin;revoke execute  on function public.hook_restrict_signup_by_email_domain  from authenticated, anon, public;
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/before-user-created-hook.mdx)

### Is this helpful?

NoYes

### On this page

[Inputs](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook#inputs) [Outputs](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook#outputs) [Allow the signup](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook#allow-the-signup) [Reject the signup with an error](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook#reject-the-signup-with-an-error) [Examples](https://supabase.com/docs/guides/auth/auth-hooks/before-user-created-hook#examples)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)