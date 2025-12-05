---
url: "https://supabase.com/docs/guides/troubleshooting/an-invalid-response-was-received-from-the-upstream-server-error-when-querying-auth-RI4Vl-"
title: "Supabase Docs | Troubleshooting | An \"invalid response was received from the upstream server\" error when querying auth"
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

# An "invalid response was received from the upstream server" error when querying auth

Last edited: 9/9/2025

* * *

If you are observing an "invalid response was received from the upstream server" error when making requests to Supabase Auth, it could mean that the respective service is down. One way to confirm this is to visit the [logs explorer](https://supabase.com/dashboard/project/_/logs/explorer) and look at the auth logs to see if there are any errors with the following lines:

- `running db migrations: error executing migrations/20221208132122_backfill_email_last_sign_in_at.up.sql`

We're currently investigating an issue where the tables responsible for keeping track of migrations ran by Auth (`auth.schema_migrations`) are not being restored properly, which leads to the service(s) retrying those migrations. In such cases, migrations which are not idempotent will run into issues.

We've documented some of the migrations that run into this issue and their corresponding fix here:

### Auth: `operator does not exist: uuid = text` [\#](https://supabase.com/docs/guides/troubleshooting/an-invalid-response-was-received-from-the-upstream-server-error-when-querying-auth-RI4Vl-\#auth-operator-does-not-exist-uuid--text)

Temporary fix: Run `insert into auth.schema_migrations values ('20221208132122');` via the [SQL editor](https://supabase.com/dashboard/project/_/sql/new) to fix the issue.

If the migration error you're seeing looks different, reach out to [supabase.help](https://supabase.help/) for assistance.

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth)

* * *

### Related error codes

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/20722)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)