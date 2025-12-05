---
url: "https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors"
title: "Supabase Docs | Troubleshooting | Database API 42501 errors"
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

# Database API 42501 errors

Last edited: 9/9/2025

* * *

[Postgres 42501 errors](https://www.postgresql.org/docs/current/errcodes-appendix.html), often reported by clients as 401 or 403 errors, imply the request lacked adequate privileges. They can be viewed in the [log explorer](https://supabase.com/dashboard/project/_/logs/explorer?q=select%0A++++cast%28postgres_logs.timestamp+as+datetime%29+as+timestamp%2C%0A++++event_message%2C%0A++++parsed.error_severity%2C%0A++++parsed.user_name%2C%0A++++parsed.query%2C%0A++++parsed.detail%2C%0A++++parsed.hint%2C%0A++++parsed.sql_state_code%2C%0A++++parsed.backend_type%0Afrom%0A++++postgres_logs%0A++++cross+join+unnest%28metadata%29+as+metadata%0A++++cross+join+unnest%28metadata.parsed%29+as+parsed%0Awhere%0A++++parsed.sql_state_code+%3D+%2742501%27%0Aorder+by%0A++++timestamp+desc%0Alimit+100%3B%0A) by running:

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

select  cast(postgres_logs.timestamp as datetime) as timestamp,  event_message,  parsed.error_severity,  parsed.user_name,  parsed.query,  parsed.detail,  parsed.hintfrom  postgres_logs  cross join unnest(metadata) as metadata  cross join unnest(metadata.parsed) as parsedwhere  regexp_contains(parsed.error_severity, 'ERROR|FATAL|PANIC')  and parsed.sql_state_code = '42501'order by timestamp desclimit 100;
```

They tend to be caused by one of the following factors.

### Attempted to access a forbidden schema [\#](https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors\#attempted-to-access-a-forbidden-schema)

API roles cannot access certain schemas, most notably `auth` and `vault`. This restriction extends to Foreign Data Wrappers relying on `vault`. While you can bypass it using a [security definer function](https://supabase.com/docs/guides/database/functions?queryGroups=language&language=sql&queryGroups=example-view&example-view=sql#security-definer-vs-invoker), these schemas are intentionally restricted for security reasons.

### Attempted to access a custom schema [\#](https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors\#attempted-to-access-a-custom-schema)

If you created a custom schema, you will have to give the Database API permission to query it. Follow our [Using Custom Schemas guide](https://supabase.com/docs/guides/api/using-custom-schemas) for more directions.

### Revoked object level access: [\#](https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors\#revoked-object-level-access)

In rare cases, users may accidentally revoke object-level access in `public` from their API roles. To regrant full visibility, run the below code:

```
1
2
3
4
5
6
7

grant usage on schema public to anon, authenticated, service_role;grant all on all tables in schema public to anon, authenticated, service_role;grant all on all routines in schema public to anon, authenticated, service_role;grant all ON all sequences in schema public to anon, authenticated, service_role;alter default privileges for role postgres in schema public grant all on tables to anon, authenticated, service_role;alter default privileges for role postgres in schema public grant all on routines to anon, authenticated, service_role;alter default privileges for role postgres in schema public grant all on sequences to anon, authenticated, service_role;
```

### Configured column-level restrictions [\#](https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors\#configured-column-level-restrictions)

If you've set column-based access in the [Dashboard](https://supabase.com/dashboard/project/_/database/column-privileges) or via SQL, queries will fail with a `42501` error when accessing restricted columns. This includes using `select *`, as it expands to include forbidden columns.

### RLS: [\#](https://supabase.com/docs/guides/troubleshooting/database-api-42501-errors\#rls)

If the anon or authenticated roles attempt to UPDATE or INSERT values without the necessary RLS permissions, Postgres will return a 42501 error.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

[401 42501](https://supabase.com/docs/guides/troubleshooting?errorCodes=401+42501) [403 42501](https://supabase.com/docs/guides/troubleshooting?errorCodes=403+42501)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/31293)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)