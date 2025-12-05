---
url: "https://supabase.com/docs/guides/troubleshooting/insufficient-privilege-when-accessing-pgstatstatements-e5M_EQ"
title: "Supabase Docs | Troubleshooting | \"insufficient privilege\" when accessing pg_stat_statements"
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

# "insufficient privilege" when accessing pg\_stat\_statements

Last edited: 9/16/2025

* * *

If you see the error "insufficient privilege" when accessing [pg\_stat\_statements](https://supabase.com/docs/guides/platform/performance#postgres-cumulative-statistics-system) or when accessing [Query Performance Report](https://supabase.com/dashboard/project/_/advisors/query-performance), it means that the Postgres role does not have required permissions.

In this case, you can run the below command to allow the Postgres role to read all statistics from the system:

```
1

grant pg_read_all_stats to postgres;
```

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

* * *

### Keywords

[privilege](https://supabase.com/docs/guides/troubleshooting?tags=privilege) [permissions](https://supabase.com/docs/guides/troubleshooting?tags=permissions) [postgres](https://supabase.com/docs/guides/troubleshooting?tags=postgres)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/20126)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)