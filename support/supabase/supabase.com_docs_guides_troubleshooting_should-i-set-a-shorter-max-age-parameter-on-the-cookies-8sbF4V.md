---
url: "https://supabase.com/docs/guides/troubleshooting/should-i-set-a-shorter-max-age-parameter-on-the-cookies-8sbF4V"
title: "Supabase Docs | Troubleshooting | Should I set a shorter Max-Age parameter on the cookies?"
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

# Should I set a shorter Max-Age parameter on the cookies?

Last edited: 11/3/2025

* * *

The `Max-Age` or `Expires` cookie parameters only control whether the browser sends the value to the server. Since a refresh token represents the long-lived authentication session of the user on that browser, setting a short `Max-Age` or `Expires` parameter on the cookies only results in a degraded user experience.

The only way to ensure that a user has logged out or their session has ended is to get the user's details with `getUser()`. The `getClaims()` method only checks local JWT validation (signature and expiration), but it doesn't verify with the auth server whether the session is still valid or if the user has logged out server-side.

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth)

* * *

### Keywords

[cookies](https://supabase.com/docs/guides/troubleshooting?tags=cookies) [max-age](https://supabase.com/docs/guides/troubleshooting?tags=max-age) [browser](https://supabase.com/docs/guides/troubleshooting?tags=browser) [session](https://supabase.com/docs/guides/troubleshooting?tags=session)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/18870)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)