---
url: "https://supabase.com/docs/guides/troubleshooting/nextjs-1314-stale-data-when-changing-rls-or-table-data-85b8oQ"
title: "Supabase Docs | Troubleshooting | Next.js 13/14 stale data when changing RLS or table data."
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

# Next.js 13/14 stale data when changing RLS or table data.

Last edited: 2/21/2025

* * *

Next.js caches URLs in certain cases. This is causing users to lose lots of time debugging early on with RLS changes. Changing the table data in the UI will also not be returned in these cases.

You can look at the Dashboard API Edge log to see if the request is making it to Supabase.
Another way to check if the URL caching is impacting you is to change `.select('*')` to `.select('colname')` or change column names. This would bust the next.js cache.

Users have suggested the following three options to turn off the caching, but refer to next.js docs as needed.

`export const dynamic = 'force-dynamic'; // no caching`
or
`export const fetchCache = 'force-no-store' // to page.js`
or
`export const revalidate = 0`

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[cache](https://supabase.com/docs/guides/troubleshooting?tags=cache) [rls](https://supabase.com/docs/guides/troubleshooting?tags=rls) [next.js](https://supabase.com/docs/guides/troubleshooting?tags=next.js)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/19084)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)