---
url: "https://supabase.com/docs/guides/troubleshooting/error-prepared-statement-xxx-already-exists-3laqeM"
title: "Supabase Docs | Troubleshooting | Error: prepared statement \"XXX\" already exists"
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

# Error: prepared statement "XXX" already exists

Last edited: 1/17/2025

* * *

This error occurs when you are trying to connect to the database using PgBouncer. PgBouncer does not support prepared statements. If you have prepared statements in use, you will need to use direct connections - port 5432.

There is a special parameter in the query string for Prisma to work with PgBouncer
[https://www.prisma.io/docs/guides/performance-and-optimization/connection-management/configure-pg-bouncer](https://www.prisma.io/docs/guides/performance-and-optimization/connection-management/configure-pg-bouncer)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

* * *

### Keywords

[pgbouncer](https://supabase.com/docs/guides/troubleshooting?tags=pgbouncer) [prepared](https://supabase.com/docs/guides/troubleshooting?tags=prepared) [connection](https://supabase.com/docs/guides/troubleshooting?tags=connection)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/17751)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)