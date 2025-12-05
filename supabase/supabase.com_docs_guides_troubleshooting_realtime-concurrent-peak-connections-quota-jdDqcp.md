---
url: "https://supabase.com/docs/guides/troubleshooting/realtime-concurrent-peak-connections-quota-jdDqcp"
title: "Supabase Docs | Troubleshooting | Realtime \"Concurrent Peak Connections\" quota"
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

# Realtime "Concurrent Peak Connections" quota

Last edited: 11/26/2025

* * *

The "Concurrent Peak Connections" quota refers to the maximum number of simultaneous connections to Supabase Realtime.

For example, if you have a chat application that uses Supabase Realtime and you have 100 users who are all connected and subscribed to the chat channel, then you would have 100 concurrent peak connections. Each client can connect to multiple Realtime channels (see: [https://supabase.com/docs/guides/realtime/concepts#channels](https://supabase.com/docs/guides/realtime/concepts#channels)).

This quota applies to all Supabase projects, including self-hosted projects, but you can increase it depending on your use case. For hosted Supabase projects, select the plan that fits your Realtime usage and reach out if you need custom quotas. For those self-hosting Supabase, you can set those limits yourself by setting the `max_concurrent_users` field on the tenant record (see: [https://supabase.com/docs/guides/self-hosting/realtime/config](https://supabase.com/docs/guides/self-hosting/realtime/config)).

You can learn more about Realtime quotas here: [https://supabase.com/docs/guides/realtime/quotas#quotas-by-plan](https://supabase.com/docs/guides/realtime/quotas#quotas-by-plan)

## Metadata

* * *

### Products

[Realtime](https://supabase.com/docs/guides/troubleshooting?products=realtime) [Self-hosting](https://supabase.com/docs/guides/troubleshooting?products=self-hosting)

* * *

### Keywords

[quota](https://supabase.com/docs/guides/troubleshooting?tags=quota) [connections](https://supabase.com/docs/guides/troubleshooting?tags=connections)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/19391)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)