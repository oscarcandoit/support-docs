---
url: "https://supabase.com/docs/guides/troubleshooting/pgrst106-the-schema-must-be-one-of-the-following-error-when-querying-an-exposed-schema"
title: "Supabase Docs | Troubleshooting | PGRST106: \"The schema must be one of the following...\" error when querying an exposed schema"
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

# PGRST106: "The schema must be one of the following..." error when querying an exposed schema

Last edited: 11/26/2025

* * *

You may encounter a `PGRST106` error, stating `{"code":"PGRST106","message":"The schema must be one of the following: public"}`, when attempting to query a schema via the PostgREST API that you've recently exposed.

**Why This Happens:**
This error occurs because the `authenticator` role's `pgrst.db_schemas` setting does not include the desired schema. This creates a conflict, as PostgREST relies on this setting to know which schemas it should expose.

**How to Resolve This:**
To fix this, you need to update the `pgrst.db_schemas` setting for the `authenticator` role. Connect to your database and execute one of the following SQL commands:

- **To explicitly add your schema:**
If you want to add your specific schema (e.g., `your_schema_name`) alongside existing schemas (like `public`), use the following command. Remember to replace `your_schema_name` with your actual schema name and include all other necessary schemas already defined.
`ALTER ROLE authenticator SET pgrst.db_schemas = 'public, your_schema_name';`

- **To reset to [dashboard configuration](https://supabase.com/dashboard/project/_/settings/api):**
Alternatively, you can reset this setting to allow the Supabase dashboard's configuration to take effect automatically.
`ALTER ROLE authenticator RESET pgrst.db_schemas;`


## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Related error codes

[PGRST106](https://supabase.com/docs/guides/troubleshooting?errorCodes=PGRST106)

* * *

0

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)