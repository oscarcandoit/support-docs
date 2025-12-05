---
url: "https://supabase.com/docs/guides/graphql/security"
title: "Security | Supabase Docs"
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

Main menu

[GraphQL](https://supabase.com/docs/guides/graphql)

[Overview](https://supabase.com/docs/guides/graphql)

[API](https://supabase.com/docs/guides/graphql/api)

[Views](https://supabase.com/docs/guides/graphql/views)

[Functions](https://supabase.com/docs/guides/graphql/functions)

[Configuration & Customization](https://supabase.com/docs/guides/graphql/configuration)

[Security](https://supabase.com/docs/guides/graphql/security)

Integrations[With Apollo](https://supabase.com/docs/guides/graphql/with-apollo)
[With Relay](https://supabase.com/docs/guides/graphql/with-relay)

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

GraphQL

1. [GraphQL](https://supabase.com/docs/guides/graphql)
3. [Security](https://supabase.com/docs/guides/graphql/security)

# Security

## Securing your GraphQL API.

* * *

`pg_graphql` fully respects builtin PostgreSQL role and row security.

## Table/Column Visibility [\#](https://supabase.com/docs/guides/graphql/security\#tablecolumn-visibility)

Table and column visibility in the GraphQL schema are controlled by standard PostgreSQL role permissions. Revoking `SELECT` access from the user/role executing queries removes that entity from the visible schema.

For example:

```
1

revoke all privileges on public."Account" from api_user;
```

removes the `Account` GraphQL type.

Similarly, revoking `SELECT` access on a table's column will remove that field from the associated GraphQL type/s.

The permissions `SELECT`, `INSERT`, `UPDATE`, and `DELETE` all impact the relevant sections of the GraphQL schema.

## Row Visibility [\#](https://supabase.com/docs/guides/graphql/security\#row-visibility)

Visibility of rows in a given table can be configured using PostgreSQL's built-in [row level security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) policies.

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/security.md)

### Is this helpful?

NoYes

### On this page

[Table/Column Visibility](https://supabase.com/docs/guides/graphql/security#tablecolumn-visibility) [Row Visibility](https://supabase.com/docs/guides/graphql/security#row-visibility)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)