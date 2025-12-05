---
url: "https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database"
title: "Supabase Docs | Troubleshooting | Why are my Supabase branches empty?"
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

# Why are my Supabase branches empty?

Last edited: 11/26/2025

* * *

Branching in Supabase (Branching 2.0) relies on the current migration files in your project— **not** a schema dump—when creating environments from `main`. This means if your `main` branch lacks migration history, branching will not fully capture your schema. This is a known limitation highlighted in the [Branching 2.0 documentation](https://supabase.com/blog/branching-2-0#current-limitations). Follow the steps below to generate, synchronize, and repair your migration history for smooth branching.

#### 1\. Prerequisites: Prepare local Supabase environment [\#](https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database\#1-prerequisites-prepare-local-supabase-environment)

- If you do not have a local environment set up already, follow the Supabase local development getting started guide:
  - [Running Supabase Locally](https://supabase.com/docs/guides/local-development/cli/getting-started).

Execute the following commands to initialize and start a local project:

```
1
2

supabase initsupabase start
```

* * *

#### 2\. Pull remote schema into migrations [\#](https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database\#2-pull-remote-schema-into-migrations)

With your project linked, run:

```
1

supabase db pull --linked
```

This command generates a migration file in your `supabase/migrations` folder which reflects your remote schema. This will not run the migration locally or overwrite anything.

* * *

#### 3\. Sync remote migration history [\#](https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database\#3-sync-remote-migration-history)

Upon running the above command, the Supabase CLI will typically prompt with:

```
1

Update remote migration history table? [Y/n]
```

Type `Y` to update your remote project’s migration history and ensure it matches your new local migrations.

- If the CLI suggests repairing migration history due to mismatches, you might see:


```
1
2

Make sure your local git repo is up-to-date. If the error persists, try repairing the migration history table:supabase migration repair --status applied <timestamp>
```


Run the exact repair command provided, replacing the timestamp as instructed (example timestamp: 20251006141726). This synchronizes the migration state between local and remote.

* * *

#### 4\. Proceed with Branching [\#](https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database\#4-proceed-with-branching)

Once your migration history is up to date, continue to use branching features as normal. Each new branch will now inherit the correct migrations from your `main` branch.

* * *

#### Additional tips [\#](https://supabase.com/docs/guides/troubleshooting/new-branch-doesnt-copy-database\#additional-tips)

- If further issues arise (such as schema drift or migration mismatches), review the [troubleshooting documentation](https://supabase.com/docs/guides/deployment/branching/troubleshooting#migration-issues), and consider manual repair with `supabase migration repair`( [https://supabase.com/docs/reference/cli/supabase-migration-repair](https://supabase.com/docs/reference/cli/supabase-migration-repair)).

## Metadata

* * *

### Products

[Branching](https://supabase.com/docs/guides/troubleshooting?products=branching)

* * *

### Keywords

[branching](https://supabase.com/docs/guides/troubleshooting?tags=branching) [migrations](https://supabase.com/docs/guides/troubleshooting?tags=migrations)

* * *

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