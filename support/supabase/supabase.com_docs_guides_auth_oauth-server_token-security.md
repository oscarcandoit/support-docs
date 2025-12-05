---
url: "https://supabase.com/docs/guides/auth/oauth-server/token-security"
title: "Token Security and Row Level Security | Supabase Docs"
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

[Auth](https://supabase.com/docs/guides/auth/oauth-server/token-security)

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
3. OAuth 2.1 Server
5. [Token Security & RLS](https://supabase.com/docs/guides/auth/oauth-server/token-security)

# Token Security and Row Level Security

* * *

When you enable OAuth 2.1 in your Supabase project, third-party applications can access user data on their behalf. Row Level Security (RLS) policies are crucial for controlling exactly what data each OAuth client can access.

**Scopes control OIDC data, not database access**

The OAuth scopes (`openid`, `email`, `profile`, `phone`) control what user information is included in ID tokens and returned by the UserInfo endpoint. They do **not** control access to your database tables or API endpoints.

Use RLS to define which OAuth clients can access which data, regardless of the scopes they requested.

## How OAuth tokens work with RLS [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#how-oauth-tokens-work-with-rls)

OAuth access tokens issued by Supabase Auth are JWTs that include all standard Supabase claims plus OAuth-specific claims. This means your existing RLS policies continue to work, and you can add OAuth-specific logic to create granular access controls.

### Token structure [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#token-structure)

Every OAuth access token includes:

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

{  "sub": "user-uuid",  "role": "authenticated",  "aud": "authenticated",  "user_id": "user-uuid",  "email": "user@example.com",  "client_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",  "aal": "aal1",  "amr": [{ "method": "password", "timestamp": 1735815600 }],  "session_id": "session-uuid",  "iss": "https://<project-ref>.supabase.co/auth/v1",  "iat": 1735815600,  "exp": 1735819200}
```

The key OAuth-specific claim is:

| Claim | Description |
| --- | --- |
| `client_id` | Unique identifier of the OAuth client that obtained this token |

You can use this claim in RLS policies to grant different permissions to different clients.

## Extracting OAuth claims in RLS [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#extracting-oauth-claims-in-rls)

Use the `auth.jwt()` function to access token claims in your policies:

```
1
2
3
4
5
6
7
8

-- Get the client ID from the token(auth.jwt() ->> 'client_id')-- Check if the token is from an OAuth client(auth.jwt() ->> 'client_id') IS NOT NULL-- Check if the token is from a specific client(auth.jwt() ->> 'client_id') = 'mobile-app-client-id'
```

## Common RLS patterns for OAuth [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#common-rls-patterns-for-oauth)

### Pattern 1: Grant specific client full access [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#pattern-1-grant-specific-client-full-access)

Allow a specific OAuth client to access all user data:

```
1
2
3
4
5
6

CREATE POLICY "Mobile app can access user data"ON user_data FOR ALLUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'mobile-app-client-id');
```

### Pattern 2: Grant multiple clients read-only access [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#pattern-2-grant-multiple-clients-read-only-access)

Allow several OAuth clients to read data, but not modify it:

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

CREATE POLICY "Third-party apps can read profiles"ON profiles FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IN (    'analytics-client-id',    'reporting-client-id',    'dashboard-client-id'  ));
```

### Pattern 3: Restrict sensitive data from OAuth clients [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#pattern-3-restrict-sensitive-data-from-oauth-clients)

Prevent OAuth clients from accessing sensitive data:

```
1
2
3
4
5
6

CREATE POLICY "OAuth clients cannot access payment info"ON payment_methods FOR ALLUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IS NULL  -- Only direct user sessions);
```

### Pattern 4: Client-specific data access [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#pattern-4-client-specific-data-access)

Different clients access different subsets of data:

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

-- Analytics client can only read aggregated dataCREATE POLICY "Analytics client reads summaries"ON user_metrics FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'analytics-client-id');-- Admin client can read and modify all dataCREATE POLICY "Admin client full access"ON user_data FOR ALLUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'admin-client-id');
```

## Real-world examples [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#real-world-examples)

### Example 1: Multi-platform application [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#example-1-multi-platform-application)

You have a web app, mobile app, and third-party integrations:

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

-- Web app: Full accessCREATE POLICY "Web app full access"ON profiles FOR ALLUSING (  auth.uid() = user_id AND  (    (auth.jwt() ->> 'client_id') = 'web-app-client-id'    OR (auth.jwt() ->> 'client_id') IS NULL  -- Direct user sessions  ));-- Mobile app: Read-only access to profilesCREATE POLICY "Mobile app reads profiles"ON profiles FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'mobile-app-client-id');-- Third-party integration: Limited data accessCREATE POLICY "Integration reads public data"ON profiles FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'integration-client-id' AND  is_public = true);
```

## Custom access token hooks [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#custom-access-token-hooks)

[Custom Access Token Hooks](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook) work with OAuth tokens, allowing you to inject custom claims based on the OAuth client. This is particularly useful for customizing standard JWT claims like `audience` (`aud`) or adding client-specific metadata.

Custom Access Token Hooks are triggered for **all** token issuance. Use `client_id` or `authentication_method` (`oauth_provider/authorization_code` for OAuth flows) to differentiate OAuth from regular authentication.

### Customizing the audience claim [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#customizing-the-audience-claim)

A common use case is customizing the `audience` claim for different OAuth clients. This allows third-party services to validate that tokens were issued specifically for them:

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

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'serve(async (req) => {  const { user, claims, client_id } = await req.json()  // Customize audience based on OAuth client  if (client_id === 'mobile-app-client-id') {    return new Response(      JSON.stringify({        claims: {          aud: 'https://api.myapp.com',          app_version: '2.0.0',        },      }),      { headers: { 'Content-Type': 'application/json' } }    )  }  if (client_id === 'analytics-partner-id') {    return new Response(      JSON.stringify({        claims: {          aud: 'https://analytics.partner.com',          access_level: 'read-only',        },      }),      { headers: { 'Content-Type': 'application/json' } }    )  }  // Default audience for non-OAuth flows  return new Response(JSON.stringify({ claims: {} }), {    headers: { 'Content-Type': 'application/json' },  })})
```

The `audience` claim is especially important for:

- **JWT validation by third parties**: Services can verify tokens were issued for their specific API
- **Multi-tenant applications**: Different audiences for different client applications
- **Compliance**: Meeting security requirements that mandate audience validation

### Adding client-specific claims [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#adding-client-specific-claims)

You can also add custom claims and metadata based on the OAuth client:

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

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'serve(async (req) => {  const { user, claims, client_id } = await req.json()  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SECRET_KEY')!)  // Add custom claims based on OAuth client  let customClaims = {}  if (client_id === 'mobile-app-client-id') {    customClaims.aud = 'https://mobile.myapp.com'    customClaims.app_version = '2.0.0'    customClaims.platform = 'mobile'  } else if (client_id === 'analytics-client-id') {    customClaims.aud = 'https://analytics.myapp.com'    customClaims.read_only = true    customClaims.data_retention_days = 90  } else if (client_id?.startsWith('mcp-')) {    // MCP AI agents    const { data: agent } = await supabase      .from('approved_ai_agents')      .select('name, max_data_retention_days')      .eq('client_id', client_id)      .single()    customClaims.aud = `https://mcp.myapp.com/${client_id}`    customClaims.ai_agent = true    customClaims.agent_name = agent?.name    customClaims.max_retention = agent?.max_data_retention_days  }  return new Response(JSON.stringify({ claims: customClaims }), {    headers: { 'Content-Type': 'application/json' },  })})
```

Use these custom claims in RLS:

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

-- Policy based on custom claimsCREATE POLICY "Read-only clients cannot modify"ON user_data FOR UPDATEUSING (  auth.uid() = user_id AND  (auth.jwt() -> 'user_metadata' ->> 'read_only')::boolean IS NOT TRUE);-- Policy based on audience claimCREATE POLICY "Only specific audience can access"ON api_data FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'aud') IN (    'https://api.myapp.com',    'https://mobile.myapp.com'  ));
```

## Security best practices [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#security-best-practices)

### 1\. Principle of least privilege [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#1-principle-of-least-privilege)

Grant OAuth clients only the minimum permissions they need:

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

-- Bad: Grant all access by defaultCREATE POLICY "OAuth clients full access"ON user_data FOR ALLUSING (auth.uid() = user_id);-- Good: Grant specific access per clientCREATE POLICY "Specific client specific access"ON user_data FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') = 'trusted-client-id');
```

### 2\. Separate policies for OAuth clients [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#2-separate-policies-for-oauth-clients)

Create dedicated policies for OAuth clients rather than mixing them with user policies:

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

-- User accessCREATE POLICY "Users access their own data"ON user_data FOR ALLUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IS NULL);-- OAuth client access (separate policy)CREATE POLICY "OAuth clients limited access"ON user_data FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IN ('client-1', 'client-2'));
```

### 3\. Regularly audit OAuth clients [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#3-regularly-audit-oauth-clients)

Track and review which clients have access:

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

-- View all active OAuth clientsSELECT  oc.client_id,  oc.name,  oc.created_at,  COUNT(DISTINCT s.user_id) as active_usersFROM auth.oauth_clients ocLEFT JOIN auth.sessions s ON s.client_id = oc.client_idWHERE s.created_at > NOW() - INTERVAL '30 days'GROUP BY oc.client_id, oc.name, oc.created_at;
```

## Testing your policies [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#testing-your-policies)

Always test your RLS policies before deploying to production:

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

-- Test as a specific OAuth clientSET request.jwt.claims = '{  "sub": "test-user-uuid",  "role": "authenticated",  "client_id": "test-client-id"}';-- Test queriesSELECT * FROM user_data WHERE user_id = 'test-user-uuid';-- ResetRESET request.jwt.claims;
```

Or use the Supabase Dashboard's [RLS policy tester](https://supabase.com/dashboard/project/_/auth/policies).

## Troubleshooting [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#troubleshooting)

### Policy not working for OAuth client [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#policy-not-working-for-oauth-client)

**Problem**: OAuth client can't access data despite having a valid token.

**Check**:

1. Verify the policy includes the client's `client_id`
2. Ensure RLS is enabled on the table
3. Check for conflicting restrictive policies
4. Test with service role key to isolate RLS issues

```
1
2
3
4
5
6

-- Debug: See what client_id is in the tokenSELECT auth.jwt() ->> 'client_id';-- Debug: Test without RLSSET LOCAL role = service_role;SELECT * FROM your_table;
```

### Policy too permissive [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#policy-too-permissive)

**Problem**: OAuth client has access to data it shouldn't.

**Solution**: Use `AS RESTRICTIVE` policies to add additional constraints:

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

-- This policy runs in addition to permissive policiesCREATE POLICY "Restrict OAuth clients"ON sensitive_dataAS RESTRICTIVEFOR ALLTO authenticatedUSING (  -- OAuth clients cannot access this table at all  (auth.jwt() ->> 'client_id') IS NULL);
```

### Can't differentiate between users and OAuth clients [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#cant-differentiate-between-users-and-oauth-clients)

**Problem**: Need to apply different logic for direct user sessions vs OAuth.

**Solution**: Check if `client_id` is present:

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

-- Direct user sessions (no OAuth)CREATE POLICY "Direct users full access"ON user_data FOR ALLUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IS NULL);-- OAuth clients (limited access)CREATE POLICY "OAuth clients read only"ON user_data FOR SELECTUSING (  auth.uid() = user_id AND  (auth.jwt() ->> 'client_id') IS NOT NULL);
```

## Next steps [\#](https://supabase.com/docs/guides/auth/oauth-server/token-security\#next-steps)

- [Learn about JWTs](https://supabase.com/docs/guides/auth/jwts) \- Deep dive into Supabase token structure
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security) \- Complete RLS guide
- [Custom Access Token Hooks](https://supabase.com/docs/guides/auth/auth-hooks/custom-access-token-hook) \- Inject custom claims
- [OAuth flows](https://supabase.com/docs/guides/auth/oauth-server/oauth-flows) \- Understand token issuance

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/oauth-server/token-security.mdx)

### Is this helpful?

NoYes

### On this page

[How OAuth tokens work with RLS](https://supabase.com/docs/guides/auth/oauth-server/token-security#how-oauth-tokens-work-with-rls) [Token structure](https://supabase.com/docs/guides/auth/oauth-server/token-security#token-structure) [Extracting OAuth claims in RLS](https://supabase.com/docs/guides/auth/oauth-server/token-security#extracting-oauth-claims-in-rls) [Common RLS patterns for OAuth](https://supabase.com/docs/guides/auth/oauth-server/token-security#common-rls-patterns-for-oauth) [Pattern 1: Grant specific client full access](https://supabase.com/docs/guides/auth/oauth-server/token-security#pattern-1-grant-specific-client-full-access) [Pattern 2: Grant multiple clients read-only access](https://supabase.com/docs/guides/auth/oauth-server/token-security#pattern-2-grant-multiple-clients-read-only-access) [Pattern 3: Restrict sensitive data from OAuth clients](https://supabase.com/docs/guides/auth/oauth-server/token-security#pattern-3-restrict-sensitive-data-from-oauth-clients) [Pattern 4: Client-specific data access](https://supabase.com/docs/guides/auth/oauth-server/token-security#pattern-4-client-specific-data-access) [Real-world examples](https://supabase.com/docs/guides/auth/oauth-server/token-security#real-world-examples) [Example 1: Multi-platform application](https://supabase.com/docs/guides/auth/oauth-server/token-security#example-1-multi-platform-application) [Custom access token hooks](https://supabase.com/docs/guides/auth/oauth-server/token-security#custom-access-token-hooks) [Customizing the audience claim](https://supabase.com/docs/guides/auth/oauth-server/token-security#customizing-the-audience-claim) [Adding client-specific claims](https://supabase.com/docs/guides/auth/oauth-server/token-security#adding-client-specific-claims) [Security best practices](https://supabase.com/docs/guides/auth/oauth-server/token-security#security-best-practices) [1\. Principle of least privilege](https://supabase.com/docs/guides/auth/oauth-server/token-security#1-principle-of-least-privilege) [2\. Separate policies for OAuth clients](https://supabase.com/docs/guides/auth/oauth-server/token-security#2-separate-policies-for-oauth-clients) [3\. Regularly audit OAuth clients](https://supabase.com/docs/guides/auth/oauth-server/token-security#3-regularly-audit-oauth-clients) [Testing your policies](https://supabase.com/docs/guides/auth/oauth-server/token-security#testing-your-policies) [Troubleshooting](https://supabase.com/docs/guides/auth/oauth-server/token-security#troubleshooting) [Policy not working for OAuth client](https://supabase.com/docs/guides/auth/oauth-server/token-security#policy-not-working-for-oauth-client) [Policy too permissive](https://supabase.com/docs/guides/auth/oauth-server/token-security#policy-too-permissive) [Can't differentiate between users and OAuth clients](https://supabase.com/docs/guides/auth/oauth-server/token-security#cant-differentiate-between-users-and-oauth-clients) [Next steps](https://supabase.com/docs/guides/auth/oauth-server/token-security#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)