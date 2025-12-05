---
url: "https://supabase.com/docs/guides/troubleshooting/failed-to-restore-from-backup-all-subscriptions-and-replication-slots-must-be-dropped-before-a-backup-can-be-restored-L-rCvt"
title: "Supabase Docs | Troubleshooting | Failed to restore from backup: All subscriptions and replication slots must be dropped before a backup can be restored."
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

# Failed to restore from backup: All subscriptions and replication slots must be dropped before a backup can be restored.

Last edited: 1/18/2025

* * *

As the error suggests, you must first drop any current subscriptions or replication slots to restore backups.

You can check those with:

```
1
2
3

SELECT * FROM pg_replication_slots;SELECT * FROM pg_subscription;
```

You can drop them with:

```
1
2
3

DROP SUBSCRIPTION <subscription>;SELECT pg_drop_replication_slot(slot_name);
```

NOTE: These are destructive actions. This is fine since you will overwrite your database with a backup.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

* * *

### Keywords

[backup](https://supabase.com/docs/guides/troubleshooting?tags=backup) [restore](https://supabase.com/docs/guides/troubleshooting?tags=restore) [replication](https://supabase.com/docs/guides/troubleshooting?tags=replication) [subscription](https://supabase.com/docs/guides/troubleshooting?tags=subscription)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21830)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)