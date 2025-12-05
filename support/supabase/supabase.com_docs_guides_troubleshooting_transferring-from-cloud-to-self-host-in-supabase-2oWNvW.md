---
url: "https://supabase.com/docs/guides/troubleshooting/transferring-from-cloud-to-self-host-in-supabase-2oWNvW"
title: "Supabase Docs | Troubleshooting | Transferring from cloud to self-host in Supabase"
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

# Transferring from cloud to self-host in Supabase

Last edited: 1/15/2025

* * *

To migrate from cloud to self-hosting, you can use the [pg\_dump](https://www.postgresql.org/docs/9.6/app-pgdump.html) command to export your database to an SQL file, which then you can run on any database to load the same data in.

You can then try to import your SQL files using psql from the terminal:

`psql -h 127.0.0.1 -p 5432 -d postgres -U postgres -f <dump-file-name>.sql`

You can also find some useful information about self-hosting here: [https://supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting).

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Self-hosting](https://supabase.com/docs/guides/troubleshooting?products=self-hosting)

* * *

### Keywords

[migrate](https://supabase.com/docs/guides/troubleshooting?tags=migrate) [pg\_dump](https://supabase.com/docs/guides/troubleshooting?tags=pg_dump) [psql](https://supabase.com/docs/guides/troubleshooting?tags=psql) [self-host](https://supabase.com/docs/guides/troubleshooting?tags=self-host)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/22712)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)