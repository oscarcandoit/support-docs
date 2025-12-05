---
url: "https://supabase.com/docs/guides/troubleshooting/slow-execution-of-alter-table-on-large-table-when-changing-column-type-qmZRpZ"
title: "Supabase Docs | Troubleshooting | Slow Execution of ALTER TABLE on Large Table when changing column type"
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

# Slow Execution of ALTER TABLE on Large Table when changing column type

Last edited: 9/9/2025

* * *

If you encounter slow execution of the ALTER TABLE operation on a large table when changing a column data type, consider the following alternative approach.

**Alternative Approach:**

1. Add a New Column with the New Type:
`ALTER TABLE "table_name" ADD COLUMN "new_column_name" new_data_type;`

2. Copy Values from the First Column to the Second:
`UPDATE "table_name" SET "old_column_name" = "new_column_name"::new_data_type;`

3. Drop the Old Column:
`ALTER TABLE "table_name" DROP COLUMN "old_column_name";`


**Why Use This Approach?**
The long execution time for the ALTER TABLE operation can be attributed to the large size of the table. This segmented approach helps in:

- Efficiency: The process is more efficient as it avoids prolonged transactions.
- Minimizing Disruption: Migrating data systematically minimizes the impact on other operations and users.

**Additional Recommendations:**

- Set session statement\_timeout to 0 to prevent potential transaction [timeouts](https://supabase.com/docs/guides/database/postgres/configuration).

- Monitor currently blocked database transactions during the process using the provided script:


```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27

create view  public.lock_monitor asselect  coalesce(    blockingl.relation::regclass::text,    blockingl.locktype  ) as locked_item,  now() - blockeda.query_start as waiting_duration,  [blockeda.pid](http://blockeda.pid/) as blocked_pid,  blockeda.query as blocked_query,  blockedl.mode as blocked_mode,  [blockinga.pid](http://blockinga.pid/) as blocking_pid,  blockinga.query as blocking_query,  blockingl.mode as blocking_modefrom  pg_locks blockedl  join pg_stat_activity blockeda on [blockedl.pid](http://blockedl.pid/) = [blockeda.pid](http://blockeda.pid/)  join pg_locks blockingl on (    blockingl.transactionid = blockedl.transactionid    or blockingl.relation = blockedl.relation    and blockingl.locktype = blockedl.locktype  )  and [blockedl.pid](http://blockedl.pid/) <> [blockingl.pid](http://blockingl.pid/)  join pg_stat_activity blockinga on [blockingl.pid](http://blockingl.pid/) = [blockinga.pid](http://blockinga.pid/)  and blockinga.datid = blockeda.datidwhere  not blockedl.granted  and blockinga.datname = current_database();
```

**Notes:**
Execute these steps during a maintenance window or low-traffic period to minimize disruption.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[alter](https://supabase.com/docs/guides/troubleshooting?tags=alter) [table](https://supabase.com/docs/guides/troubleshooting?tags=table) [column](https://supabase.com/docs/guides/troubleshooting?tags=column) [slow](https://supabase.com/docs/guides/troubleshooting?tags=slow) [performance](https://supabase.com/docs/guides/troubleshooting?tags=performance)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/19747)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)