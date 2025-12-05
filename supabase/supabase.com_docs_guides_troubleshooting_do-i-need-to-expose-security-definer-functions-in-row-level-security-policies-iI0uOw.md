---
url: "https://supabase.com/docs/guides/troubleshooting/do-i-need-to-expose-security-definer-functions-in-row-level-security-policies-iI0uOw"
title: "Supabase Docs | Troubleshooting | Do I need to expose \"security definer\" Functions in Row Level Security Policies?"
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

# Do I need to expose "security definer" Functions in Row Level Security Policies?

Last edited: 11/26/2025

* * *

PostgREST supports 2 config parameters:

- Exposed Schemas
- Extra Search Path

![image](https://supabase.com/docs/img/troubleshooting/d756aeb0-515f-425d-b737-75a935935b73.png)

You do not need to add your "security definer" Functions to either of these if you are using them in your Policies.

PostgREST doesn’t need to know about this function on extra search path or exposed schemas, as long as you explicitly use the schema inside RLS (e.g.: `security.rls_func`).

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[security](https://supabase.com/docs/guides/troubleshooting?tags=security) [function](https://supabase.com/docs/guides/troubleshooting?tags=function) [schema](https://supabase.com/docs/guides/troubleshooting?tags=schema) [policy](https://supabase.com/docs/guides/troubleshooting?tags=policy) [definer](https://supabase.com/docs/guides/troubleshooting?tags=definer)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/16784)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)