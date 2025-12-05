---
url: "https://supabase.com/docs/guides/troubleshooting/realtime-connections-timed_out-status"
title: "Supabase Docs | Troubleshooting | Realtime connections giving `TIMED_OUT` errors"
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

# Realtime connections giving \`TIMED\_OUT\` errors

Last edited: 11/26/2025

* * *

If your Realtime connections in your application are giving `TIMED_OUT` errors, this often indicates an incompatibility between the version of `realtime-js` being used in your `supabase-js` client library package and your Node.js version. This issue happens when using versions of Node.js older than v22 with more recent versions of `supabase-js`.

**Why This Occurs:**
This happens due to a fundamental change made to fix various issues. See more details on why this change was made and solutions to fix it: [https://github.com/orgs/supabase/discussions/37869](https://github.com/orgs/supabase/discussions/37869)

**How to Resolve This:**

There are two primary options to fix this:

1. **Upgrade Node.js**: Upgrade your Node.js version to the latest Long Term Support (LTS) release, such as Node.js v24 as of November 2025.
2. **Explicitly set the WebSocket transport**: See the linked GitHub discussion above for a detailed guide on doing this.

## Metadata

* * *

### Products

[Realtime](https://supabase.com/docs/guides/troubleshooting?products=realtime)

* * *

0

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