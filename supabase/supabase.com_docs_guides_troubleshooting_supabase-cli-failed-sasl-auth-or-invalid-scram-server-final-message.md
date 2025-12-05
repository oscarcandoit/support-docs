---
url: "https://supabase.com/docs/guides/troubleshooting/supabase-cli-failed-sasl-auth-or-invalid-scram-server-final-message"
title: "Supabase Docs | Troubleshooting | Supabase CLI: \"failed SASL auth\" or \"invalid SCRAM server-final-message\""
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

# Supabase CLI: "failed SASL auth" or "invalid SCRAM server-final-message"

Last edited: 11/26/2025

* * *

When executing `supabase db push` or `supabase link` or any other authenticated actions from the Supabase CLI, you might encounter an authentication error with messages such as `failed SASL auth (invalid SCRAM server-final-message received from server)`.

**Why This Occurs:**
This typically indicates an authentication failure where the database connection pooler (Supavisor) in certain scenarios may be incorrectly caching credentials for the internal Supabase role `cli_login_postgres` used for password-less flows with the CLI. This can lead to the your IP being temporarily banned from repeated failed attempts to connect.

**To resolve this, consider one of the following solutions:**

1. **Check Network Bans:**
   - Navigate to your project's [Database Settings](https://supabase.com/dashboard/project/_/settings/database) page.
   - Review any listed IP addresses that are blocked. Remove any entries that correspond to your current connection and then try the CLI action again.
2. **Use the old Password-Based authentication flow instead:**


   - Provide your database password directly through an environment variable when running the CLI command.

```
1

SUPABASE_DB_PASSWORD=<your-database-password> supabase db push
```

3. **Skip the Pooler and connect directly to the database with the Supabase CLI (Requires IPv6):**


   - If your network supports IPv6, you can use the beta CLI version with the `--skip-pooler` flag to bypass the connection pooler to avoid this particular issue.

```
1
2

npx supabase@beta link --skip-poolernpx supabase@beta db push
```

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Cli](https://supabase.com/docs/guides/troubleshooting?products=cli) [Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor)

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