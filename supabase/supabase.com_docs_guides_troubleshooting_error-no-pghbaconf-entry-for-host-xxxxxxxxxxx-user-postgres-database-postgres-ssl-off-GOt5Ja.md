---
url: "https://supabase.com/docs/guides/troubleshooting/error-no-pghbaconf-entry-for-host-xxxxxxxxxxx-user-postgres-database-postgres-ssl-off-GOt5Ja"
title: "Supabase Docs | Troubleshooting | error: no pg_hba.conf entry for host \"xx.xxx.xxx.xxx\", user \"postgres\", database \"postgres\", SSL off"
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

# error: no pg\_hba.conf entry for host "xx.xxx.xxx.xxx", user "postgres", database "postgres", SSL off

Last edited: 9/9/2025

* * *

This error indicates a failed authentication attempt to the database and the connection couldn't be established.

In Supabase, this is generally seen when [SSL enforcement](https://supabase.com/docs/guides/platform/ssl-enforcement) is enabled on your Supabase Project. The authentication failed because the incoming connection didn't use SSL encryption when connecting to the database.

You can ignore this message if the attempt is from an unknown user. If you want this connection attempt to be successful, you will either need to connect with SSL or disable SSL enforcement on your Supabase project.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Related error codes

* * *

### Keywords

[ssl](https://supabase.com/docs/guides/troubleshooting?tags=ssl) [authentication](https://supabase.com/docs/guides/troubleshooting?tags=authentication) [connection](https://supabase.com/docs/guides/troubleshooting?tags=connection)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21145)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)