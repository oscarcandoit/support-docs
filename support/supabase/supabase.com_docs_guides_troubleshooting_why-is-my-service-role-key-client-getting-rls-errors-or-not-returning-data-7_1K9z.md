---
url: "https://supabase.com/docs/guides/troubleshooting/why-is-my-service-role-key-client-getting-rls-errors-or-not-returning-data-7_1K9z"
title: "Supabase Docs | Troubleshooting | Why is my service role key client getting RLS errors or not returning data?"
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

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Why is my service role key client getting RLS errors or not returning data?

Last edited: 2/4/2025

* * *

A Supabase client with the Authorization header set to the service role API key will ALWAYS bypass RLS. By default the Authorization header is the `apikey` used in `createClient`. If you are getting an RLS error then you have a user session getting into the client or you initialized with the anon key. RLS in enforced based on the `Authorization` header and not the `apikey` header.

Three common cases of the `createClient``apikey` being replaced by a user session/token:

1. SSR client initialized with service role. The SSR clients are designed to share the user session from cookies. The user session will override the default `apikey` from `createClient` in the `Authorization` header. If you are using SSR, always create a separate server client using supabase-js directly for service role.

2. Edge functions or other server code setting the `Authorization` header in `createClient` options directly to a user token/JWT. When you set the `Authorization` header directly that overrides the default action of using the `apikey` for the `Authorization` header.

3. Server client initialized with service role using `signUp` to create a user or other auth functions. Many auth functions will return a user session to the client making the call. When that happens the `apikey` will be replaced by the user token/JWT in the `Authorization` header. If you are wanting to create a user in a service role client use `admin.createUser()` instead. Otherwise use a separate Supabase client for for service role from other actions.


Also note that adding `service_role` in RLS policies does nothing. Service role will never run the policies to begin with.

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[rls](https://supabase.com/docs/guides/troubleshooting?tags=rls) [service\_role](https://supabase.com/docs/guides/troubleshooting?tags=service_role) [authorization](https://supabase.com/docs/guides/troubleshooting?tags=authorization) [session](https://supabase.com/docs/guides/troubleshooting?tags=session) [apikey](https://supabase.com/docs/guides/troubleshooting?tags=apikey)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/30146)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)