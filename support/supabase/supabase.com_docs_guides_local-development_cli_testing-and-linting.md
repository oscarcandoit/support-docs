---
url: "https://supabase.com/docs/guides/local-development/cli/testing-and-linting"
title: "Testing and linting | Supabase Docs"
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

[Local Dev / CLI](https://supabase.com/docs/guides/local-development)

[Overview](https://supabase.com/docs/guides/local-development)

CLI[Getting started](https://supabase.com/docs/guides/local-development/cli/getting-started)
[Configuration](https://supabase.com/docs/guides/local-development/cli/config)
[CLI commands](https://supabase.com/docs/reference/cli)

Local development[Getting started](https://supabase.com/docs/guides/local-development/overview)
[Declarative database schemas](https://supabase.com/docs/guides/local-development/declarative-database-schemas)
[Seeding your database](https://supabase.com/docs/guides/local-development/seeding-your-database)
[Managing config and secrets](https://supabase.com/docs/guides/local-development/managing-config)
[Restoring downloaded backup](https://supabase.com/docs/guides/local-development/restoring-downloaded-backup)
[Customizing email templates](https://supabase.com/docs/guides/local-development/customizing-email-templates)

Testing[Getting started](https://supabase.com/docs/guides/local-development/testing/overview)
[pgTAP advanced guide](https://supabase.com/docs/guides/local-development/testing/pgtap-extended)
[Database testing](https://supabase.com/docs/guides/database/testing)
[RLS policies testing](https://supabase.com/docs/guides/database/extensions/pgtap#testing-rls-policies)

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

Local Development

# Testing and linting

## Using the CLI to test your Supabase project.

* * *

The Supabase CLI provides a set of tools to help you test and lint your Postgres database and Edge\` Functions.

## Testing your database [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#testing-your-database)

The Supabase CLI provides Postgres linting using the `supabase test db` command.

```
1
2
3
4
5

supabase test db --helpTests local database with pgTAPUsage:  supabase test db [flags]
```

This is powered by the [pgTAP](https://supabase.com/docs/guides/database/extensions/pgtap) extension. You can find a full guide to writing and running tests in the [Testing your database](https://supabase.com/docs/guides/database/testing) section.

### Test helpers [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#test-helpers)

Our friends at [Basejump](https://usebasejump.com/) have created a useful set of Database [Test Helpers](https://github.com/usebasejump/supabase-test-helpers), with an accompanying [blog post](https://usebasejump.com/blog/testing-on-supabase-with-pgtap).

### Running database tests in CI [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#running-database-tests-in-ci)

Use our GitHub Action to [automate your database tests](https://supabase.com/docs/guides/deployment/ci/testing).

## Testing your Edge Functions [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#testing-your-edge-functions)

Edge Functions are powered by Deno, which provides a [native set of testing tools](https://deno.land/manual@v1.35.3/basics/testing). We extend this functionality in the Supabase CLI. You can find a detailed guide in the [Edge Functions section](https://supabase.com/docs/guides/functions/unit-test).

## Testing Auth emails [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#testing-auth-emails)

The Supabase CLI uses [Mailpit](https://github.com/axllent/mailpit) to capture emails sent from your local machine. This is useful for testing emails sent from Supabase Auth.

### Accessing Mailpit [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#accessing-mailpit)

By default, Mailpit is available at [localhost:54324](http://localhost:54324/) when you run `supabase start`. Open this URL in your browser to view the emails.

### Going into production [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#going-into-production)

The "default" email provided by Supabase is only for development purposes. It is [heavily restricted](https://supabase.com/docs/guides/platform/going-into-prod#auth-rate-limits) to ensure that it is not used for spam. Before going into production, you must configure your own email provider. This is as simple as enabling a new SMTP credentials in your [project settings](https://supabase.com/dashboard/project/_/auth/smtp).

## Linting your database [\#](https://supabase.com/docs/guides/local-development/cli/testing-and-linting\#linting-your-database)

The Supabase CLI provides Postgres linting using the `supabase db lint` command:

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

supabase db lint --helpChecks local database for typing errorUsage:  supabase db lint [flags]Flags:  --level [ warning | error ] Error level to emit. (default warning)  --linked Lints the linked project for schema errors.  -s, --schema strings List of schema to include. (default all)
```

This is powered by [plpgsql\_check](https://github.com/okbob/plpgsql_check), which leverages the internal Postgres parser/evaluator so you see any errors that would occur at runtime. It provides the following features:

- validates you are using the correct types for function parameters
- identifies unused variables and function arguments
- detection of dead code (any code after an `RETURN` command)
- detection of missing `RETURN` commands with your Postgres function
- identifies unwanted hidden casts, which can be a performance issue
- checks `EXECUTE` statements against SQL injection vulnerability

Check the Reference Docs for [more information](https://supabase.com/docs/reference/cli/supabase-db-lint).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/cli/testing-and-linting.mdx)

### Is this helpful?

NoYes

### On this page

[Testing your database](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#testing-your-database) [Test helpers](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#test-helpers) [Running database tests in CI](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#running-database-tests-in-ci) [Testing your Edge Functions](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#testing-your-edge-functions) [Testing Auth emails](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#testing-auth-emails) [Accessing Mailpit](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#accessing-mailpit) [Going into production](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#going-into-production) [Linting your database](https://supabase.com/docs/guides/local-development/cli/testing-and-linting#linting-your-database)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)