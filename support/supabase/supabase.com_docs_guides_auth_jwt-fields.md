---
url: "https://supabase.com/docs/guides/auth/jwt-fields"
title: "JWT Claims Reference | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/jwt-fields)

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

[Overview](https://supabase.com/docs/guides/auth/jwts)
[Claims Reference](https://supabase.com/docs/guides/auth/jwt-fields)

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
5. [JSON Web Tokens (JWT)](https://supabase.com/docs/guides/auth/jwts)
7. [Claims Reference](https://supabase.com/docs/guides/auth/jwt-fields)

# JWT Claims Reference

## Complete reference for claims appearing in JWTs created by Supabase Auth

* * *

This page provides a comprehensive reference for all JWT claims used in Supabase authentication tokens. This information is essential for server-side JWT validation and serialization, especially when implementing authentication in languages like Rust where field names like `ref` are reserved keywords.

## JWT structure overview [\#](https://supabase.com/docs/guides/auth/jwt-fields\#jwt-structure-overview)

Supabase JWTs follow the standard JWT structure with three parts:

- **Header**: Contains algorithm and key information
- **Payload**: Contains the claims (user data and metadata)
- **Signature**: Cryptographic signature for verification

The payload contains various claims that provide user identity, authentication level, and authorization information.

## Required claims [\#](https://supabase.com/docs/guides/auth/jwt-fields\#required-claims)

These claims are always present in Supabase JWTs and cannot be removed:

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| `iss` | `string` | **Issuer** \- The entity that issued the JWT | `"https://project-ref.supabase.co/auth/v1"` |
| `aud` | `string | string[]` | **Audience** \- The intended recipient of the JWT | `"authenticated"` or `"anon"` |
| `exp` | `number` | **Expiration Time** \- Unix timestamp when the token expires | `1640995200` |
| `iat` | `number` | **Issued At** \- Unix timestamp when the token was issued | `1640991600` |
| `sub` | `string` | **Subject** \- The user ID (UUID) | `"123e4567-e89b-12d3-a456-426614174000"` |
| `role` | `string` | **Role** \- User's role in the system | `"authenticated"`, `"anon"`, `"service_role"` |
| `aal` | `string` | **Authenticator Assurance Level** \- Authentication strength | `"aal1"`, `"aal2"` |
| `session_id` | `string` | **Session ID** \- Unique session identifier | `"session-uuid"` |
| `email` | `string` | **Email** \- User's email address | `"user@example.com"` |
| `phone` | `string` | **Phone** \- User's phone number | `"+1234567890"` |
| `is_anonymous` | `boolean` | **Anonymous Flag** \- Whether the user is anonymous | `false` |

## Optional claims [\#](https://supabase.com/docs/guides/auth/jwt-fields\#optional-claims)

These claims may be present depending on the authentication context:

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| `jti` | `string` | **JWT ID** \- Unique identifier for the JWT | `"jwt-uuid"` |
| `nbf` | `number` | **Not Before** \- Unix timestamp before which the token is invalid | `1640991600` |
| `app_metadata` | `object` | **App Metadata** \- Application-specific user data | `{"provider": "email"}` |
| `user_metadata` | `object` | **User Metadata** \- User-specific data | `{"name": "John Doe"}` |
| `amr` | `array` | **Authentication Methods Reference** \- List of authentication methods used | `[{"method": "password", "timestamp": 1640991600}]` |

## Special claims [\#](https://supabase.com/docs/guides/auth/jwt-fields\#special-claims)

| Field | Type | Description | Example | Context |
| --- | --- | --- | --- | --- |
| `ref` | `string` | **Project Reference** \- Supabase project identifier | `"abcdefghijklmnopqrst"` | Anon/Service role tokens only |

## Field value constraints [\#](https://supabase.com/docs/guides/auth/jwt-fields\#field-value-constraints)

### Authenticator assurance level (`aal`) [\#](https://supabase.com/docs/guides/auth/jwt-fields\#authenticator-assurance-level--aal-)

| Value | Description |
| --- | --- |
| `"aal1"` | Single-factor authentication (password, OAuth, etc.) |
| `"aal2"` | Multi-factor authentication (password + TOTP, etc.) |

### Role values (`role`) [\#](https://supabase.com/docs/guides/auth/jwt-fields\#role-values--role-)

| Value | Description | Use Case |
| --- | --- | --- |
| `"anon"` | Anonymous user | Public access with RLS policies |
| `"authenticated"` | Authenticated user | Standard user access |
| `"service_role"` | Service role | Admin privileges (server-side only) |

### Audience values (`aud`) [\#](https://supabase.com/docs/guides/auth/jwt-fields\#audience-values--aud-)

| Value | Description |
| --- | --- |
| `"authenticated"` | For authenticated user tokens |
| `"anon"` | For anonymous user tokens |

### Authentication methods (`amr.method`) [\#](https://supabase.com/docs/guides/auth/jwt-fields\#authentication-methods--amrmethod-)

| Value | Description |
| --- | --- |
| `"oauth"` | OAuth provider authentication |
| `"password"` | Email/password authentication |
| `"otp"` | One-time password |
| `"totp"` | Time-based one-time password |
| `"recovery"` | Account recovery |
| `"invite"` | Invitation-based signup |
| `"sso/saml"` | SAML single sign-on |
| `"magiclink"` | Magic link authentication |
| `"email/signup"` | Email signup |
| `"email_change"` | Email change |
| `"token_refresh"` | Token refresh |
| `"anonymous"` | Anonymous authentication |

## JWT examples [\#](https://supabase.com/docs/guides/auth/jwt-fields\#jwt-examples)

### Authenticated user token [\#](https://supabase.com/docs/guides/auth/jwt-fields\#authenticated-user-token)

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

{  "aal": "aal1",  "amr": [    {      "method": "password",      "timestamp": 1640991600    }  ],  "app_metadata": {    "provider": "email",    "providers": ["email"]  },  "aud": "authenticated",  "email": "user@example.com",  "exp": 1640995200,  "iat": 1640991600,  "iss": "https://abcdefghijklmnopqrst.supabase.co/auth/v1",  "phone": "",  "role": "authenticated",  "session_id": "123e4567-e89b-12d3-a456-426614174000",  "sub": "123e4567-e89b-12d3-a456-426614174000",  "user_metadata": {    "name": "John Doe"  },  "is_anonymous": false}
```

### Anonymous user token [\#](https://supabase.com/docs/guides/auth/jwt-fields\#anonymous-user-token)

```
1
2
3
4
5
6
7

{  "iss": "supabase",  "ref": "abcdefghijklmnopqrst",  "role": "anon",  "iat": 1640991600,  "exp": 1640995200}
```

### Service role token [\#](https://supabase.com/docs/guides/auth/jwt-fields\#service-role-token)

```
1
2
3
4
5
6
7

{  "iss": "supabase",  "ref": "abcdefghijklmnopqrst",  "role": "service_role",  "iat": 1640991600,  "exp": 1640995200}
```

## Language-Specific considerations [\#](https://supabase.com/docs/guides/auth/jwt-fields\#language-specific-considerations)

### Rust [\#](https://supabase.com/docs/guides/auth/jwt-fields\#rust)

In Rust, the `ref` field is a reserved keyword. When deserializing JWTs, you'll need to handle this:

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

use serde::{Deserialize, Serialize};#[derive(Debug, Deserialize, Serialize)]struct JwtClaims {    iss: String,    #[serde(rename = "ref")] // Handle reserved keyword    project_ref: Option<String>,    role: String,    iat: i64,    exp: i64,    // ... other claims}
```

### TypeScript/JavaScript [\#](https://supabase.com/docs/guides/auth/jwt-fields\#typescriptjavascript)

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

interface JwtClaims {  iss: string  aud: string | string[]  exp: number  iat: number  sub: string  role: string  aal: 'aal1' | 'aal2'  session_id: string  email: string  phone: string  is_anonymous: boolean  jti?: string  nbf?: number  app_metadata?: Record<string, any>  user_metadata?: Record<string, any>  amr?: Array<{    method: string    timestamp: number  }>  ref?: string // Only in anon/service role tokens}
```

### Python [\#](https://supabase.com/docs/guides/auth/jwt-fields\#python)

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

from typing import Optional, Union, List, Dict, Anyfrom dataclasses import dataclass@dataclassclass AmrEntry:    method: str    timestamp: int@dataclassclass JwtClaims:    iss: str    aud: Union[str, List[str]]    exp: int    iat: int    sub: str    role: str    aal: str    session_id: str    email: str    phone: str    is_anonymous: bool    jti: Optional[str] = None    nbf: Optional[int] = None    app_metadata: Optional[Dict[str, Any]] = None    user_metadata: Optional[Dict[str, Any]] = None    amr: Optional[List[AmrEntry]] = None    ref: Optional[str] = None  # Only in anon/service role tokens
```

### Go [\#](https://supabase.com/docs/guides/auth/jwt-fields\#go)

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

type AmrEntry struct {    Method    string `json:"method"`    Timestamp int64  `json:"timestamp"`}type JwtClaims struct {    Iss         string                 `json:"iss"`    Aud         interface{}            `json:"aud"` // string or []string    Exp         int64                  `json:"exp"`    Iat         int64                  `json:"iat"`    Sub         string                 `json:"sub"`    Role        string                 `json:"role"`    Aal         string                 `json:"aal"`    SessionID   string                 `json:"session_id"`    Email       string                 `json:"email"`    Phone       string                 `json:"phone"`    IsAnonymous bool                   `json:"is_anonymous"`    Jti         *string                `json:"jti,omitempty"`    Nbf         *int64                 `json:"nbf,omitempty"`    AppMetadata map[string]interface{} `json:"app_metadata,omitempty"`    UserMetadata map[string]interface{} `json:"user_metadata,omitempty"`    Amr         []AmrEntry             `json:"amr,omitempty"`    Ref         *string                `json:"ref,omitempty"` // Only in anon/service role tokens}
```

## Validation guidelines [\#](https://supabase.com/docs/guides/auth/jwt-fields\#validation-guidelines)

When implementing JWT validation on your server:

1. **Check Required Fields**: Ensure all required claims are present
2. **Validate Types**: Verify field types match expected types
3. **Check Expiration**: Validate `exp` timestamp is in the future
4. **Verify Issuer**: Ensure `iss` matches your Supabase project
5. **Check Audience**: Validate `aud` matches expected audience
6. **Handle Reserved Keywords**: Use field renaming for languages like Rust

## Security considerations [\#](https://supabase.com/docs/guides/auth/jwt-fields\#security-considerations)

- **Always validate the JWT signature** before trusting any claims
- **Never expose service role tokens** to client-side code
- **Validate all claims** before trusting the JWT
- **Check token expiration** on every request
- **Use HTTPS** for all JWT transmission
- **Rotate JWT secrets** regularly
- **Implement proper error handling** for invalid tokens

## Related documentation [\#](https://supabase.com/docs/guides/auth/jwt-fields\#related-documentation)

- [JWT Overview](https://supabase.com/docs/guides/auth/jwts)
- [Custom Access Token Hooks](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook)
- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Server-Side Auth](https://supabase.com/docs/guides/auth/server-side)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwt-fields.mdx)

### Is this helpful?

NoYes

### On this page

[JWT structure overview](https://supabase.com/docs/guides/auth/jwt-fields#jwt-structure-overview) [Required claims](https://supabase.com/docs/guides/auth/jwt-fields#required-claims) [Optional claims](https://supabase.com/docs/guides/auth/jwt-fields#optional-claims) [Special claims](https://supabase.com/docs/guides/auth/jwt-fields#special-claims) [Field value constraints](https://supabase.com/docs/guides/auth/jwt-fields#field-value-constraints) [Authenticator assurance level (aal)](https://supabase.com/docs/guides/auth/jwt-fields#authenticator-assurance-level--aal-) [Role values (role)](https://supabase.com/docs/guides/auth/jwt-fields#role-values--role-) [Audience values (aud)](https://supabase.com/docs/guides/auth/jwt-fields#audience-values--aud-) [Authentication methods (amr.method)](https://supabase.com/docs/guides/auth/jwt-fields#authentication-methods--amrmethod-) [JWT examples](https://supabase.com/docs/guides/auth/jwt-fields#jwt-examples) [Authenticated user token](https://supabase.com/docs/guides/auth/jwt-fields#authenticated-user-token) [Anonymous user token](https://supabase.com/docs/guides/auth/jwt-fields#anonymous-user-token) [Service role token](https://supabase.com/docs/guides/auth/jwt-fields#service-role-token) [Language-Specific considerations](https://supabase.com/docs/guides/auth/jwt-fields#language-specific-considerations) [Rust](https://supabase.com/docs/guides/auth/jwt-fields#rust) [TypeScript/JavaScript](https://supabase.com/docs/guides/auth/jwt-fields#typescriptjavascript) [Python](https://supabase.com/docs/guides/auth/jwt-fields#python) [Go](https://supabase.com/docs/guides/auth/jwt-fields#go) [Validation guidelines](https://supabase.com/docs/guides/auth/jwt-fields#validation-guidelines) [Security considerations](https://supabase.com/docs/guides/auth/jwt-fields#security-considerations) [Related documentation](https://supabase.com/docs/guides/auth/jwt-fields#related-documentation)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)