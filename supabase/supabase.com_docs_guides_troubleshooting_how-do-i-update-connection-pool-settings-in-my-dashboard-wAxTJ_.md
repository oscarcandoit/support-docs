---
url: "https://supabase.com/docs/guides/troubleshooting/how-do-i-update-connection-pool-settings-in-my-dashboard-wAxTJ_"
title: "Supabase Docs | Troubleshooting | How do I update connection pool settings in my dashboard?"
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

# How do I update connection pool settings in my dashboard?

Last edited: 9/9/2025

* * *

Common questions about updating settings for PgBouncer or Supavisor:

- How to tell which connection pooler you're using:
The PgBouncer connection string looks like: `postgres://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxx.supabase.co:6543/postgres`

The Supavisor connection string looks like: `postgres://postgres.xxxxxxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres`

The subdomain will vary depending on the region a project is deployed in. The project reference is to be included in the username following a `.`. If the username is `postgres` the username you use for Supavisor is `postgres.[PROJECT_REF]`.

- How to update the size of the connection pool to the database:
You can set the `Max Client Connections` field in your database settings here:

[https://supabase.com/dashboard/project/\_/database/settings](https://supabase.com/dashboard/project/_/database/settings)

- How to change the client connection limit:
You can set the `Default Pool Size` field in your database settings:

[https://supabase.com/dashboard/project/\_/database/settings](https://supabase.com/dashboard/project/_/database/settings)

- How to use `session` mode:
With Supavisor you can automatically use `session` mode by using the connection string with port `5432` in it.

You can also set the pooler port 6543 to use `session` mode in the database settings:

[https://supabase.com/dashboard/project/\_/database/settings](https://supabase.com/dashboard/project/_/database/settings)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/16787)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)