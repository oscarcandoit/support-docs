---
url: "https://supabase.com/docs/guides/troubleshooting/inserting-into-sequenceserial-table-causes-duplicate-key-violates-unique-constraint-error-pi6DnC"
title: "Supabase Docs | Troubleshooting | Inserting into Sequence/Serial Table Causes \"duplicate key violates unique constraint\" Error"
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

# Inserting into Sequence/Serial Table Causes "duplicate key violates unique constraint" Error

Last edited: 9/9/2025

* * *

If you are receiving the below error for an auto-incremented table:

> ERROR: duplicate key violates unique constraint

it likely means that the table's sequence has somehow become out of sync, likely because of a mass import process (or something along those lines).

Call it a "bug by design", but it seems that you have to manually reset the a primary key index after restoring from a dump file.

You can run the following commands on your instance to see if your sequence is out-of-sync:

```
1
2
3

SELECT MAX(<sequenced_column>) FROM <table_name>;SELECT nextval(pg_get_serial_sequence('<public.table_name>', '<sequenced_column_name>'));
```

If the values are off by more than 1, you need to resynchronize your sequence.

Back up your PG database by restarting in the [General Settings](https://supabase.com/dashboard/project/_/settings/general) (just in case). When you restore your database, you will have a backup saved. Alternatively, you can also just download your properties table instead as a backup.

Then you can run this:

```
1

SELECT SETVAL('public.<table_name>_<column_nam>_seq', (SELECT MAX(<column_name>) FROM <table_name>)+1);
```

That will set the sequence to the next available value that's higher than any existing primary key in the sequence.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

* * *

### Keywords

[duplicate](https://supabase.com/docs/guides/troubleshooting?tags=duplicate) [sequence](https://supabase.com/docs/guides/troubleshooting?tags=sequence) [table](https://supabase.com/docs/guides/troubleshooting?tags=table) [key](https://supabase.com/docs/guides/troubleshooting?tags=key) [constraint](https://supabase.com/docs/guides/troubleshooting?tags=constraint)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21134)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)