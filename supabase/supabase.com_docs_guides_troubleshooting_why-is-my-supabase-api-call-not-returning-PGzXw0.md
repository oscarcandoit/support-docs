---
url: "https://supabase.com/docs/guides/troubleshooting/why-is-my-supabase-api-call-not-returning-PGzXw0"
title: "Supabase Docs | Troubleshooting | Why is my supabase API call not returning?"
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

# Why is my supabase API call not returning?

Last edited: 2/4/2025

* * *

There is currently a bug in supabase-js which results in a deadlock if any async API call is made in `onAuthStateChange` code. If a call is made in the handler then the next Supabase call anywhere using that client will hang and not return.

For now a workaround is needed until this is fixed.

[https://github.com/supabase/gotrue-js/issues/762#issuecomment-1780006492](https://github.com/supabase/gotrue-js/issues/762#issuecomment-1780006492)

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[deadlock](https://supabase.com/docs/guides/troubleshooting?tags=deadlock) [hang](https://supabase.com/docs/guides/troubleshooting?tags=hang) [async](https://supabase.com/docs/guides/troubleshooting?tags=async)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/19058)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)