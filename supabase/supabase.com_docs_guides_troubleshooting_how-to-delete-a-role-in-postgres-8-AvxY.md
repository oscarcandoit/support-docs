---
url: "https://supabase.com/docs/guides/troubleshooting/how-to-delete-a-role-in-postgres-8-AvxY"
title: "Supabase Docs | Troubleshooting | How to delete a role in Postgres"
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

# How to delete a role in Postgres

Last edited: 9/9/2025

* * *

[Quote from Postgres docs:](https://www.postgresql.org/docs/current/sql-droprole.html#:~:text=A%20role%20cannot%20be%20removed,been%20granted%20on%20other%20objects.)

> A role cannot be removed if it is still referenced in any database of the cluster; an error will be raised if so. Before dropping the role, you must drop all the objects it owns (or reassign their ownership) and revoke any privileges the role has been granted on other objects.

First make sure that Postgres has ownership over the role:

```
1

GRANT <role> TO "postgres";
```

Then you must reassign any objects owned by role:

```
1

REASSIGN OWNED BY <role> TO postgres;
```

Once ownership is transferred, you can run the following query:

```
1

DROP OWNED BY <role>;
```

[DROP OWNED BY](https://www.postgresql.org/docs/current/sql-drop-owned.html) does delete all objects owned by the role, which should be none. However, it also revokes the role's privileges. Once this is done, you should be able to run:

```
1

DROP role <role>;
```

If you encounter any issues, create a [support ticket](https://supabase.com/dashboard/support/new)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

* * *

### Keywords

[role](https://supabase.com/docs/guides/troubleshooting?tags=role) [delete](https://supabase.com/docs/guides/troubleshooting?tags=delete) [postgres](https://supabase.com/docs/guides/troubleshooting?tags=postgres)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/27427)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)