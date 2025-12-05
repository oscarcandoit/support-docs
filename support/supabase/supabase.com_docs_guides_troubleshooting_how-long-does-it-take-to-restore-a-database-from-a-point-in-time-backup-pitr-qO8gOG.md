---
url: "https://supabase.com/docs/guides/troubleshooting/how-long-does-it-take-to-restore-a-database-from-a-point-in-time-backup-pitr-qO8gOG"
title: "Supabase Docs | Troubleshooting | How long does it take to restore a database from a Point-in-Time backup (PITR)?"
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

# How long does it take to restore a database from a Point-in-Time backup (PITR)?

Last edited: 1/18/2025

* * *

The time required for a PIT restoration isn't fixed. It depends on several factors:

**Time Since Last Full Backup:**

Full backups occur weekly. The time elapsed since the last full backup can affect restoration time.

**Write-Ahead Logging (WAL) Activity:**

The volume of WAL activity since the last full backup is a critical factor. More activity can lead to longer restoration times.

**Database Size:**

While important, the size of the database isn't the sole determinant of restoration time.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[PITR](https://supabase.com/docs/guides/troubleshooting?tags=PITR) [restore](https://supabase.com/docs/guides/troubleshooting?tags=restore) [WAL](https://supabase.com/docs/guides/troubleshooting?tags=WAL)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/19527)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)