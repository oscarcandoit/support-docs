---
url: "https://supabase.com/docs/guides/deployment/ci/testing"
title: "Automated testing using GitHub Actions | Supabase Docs"
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

[Deployment](https://supabase.com/docs/guides/deployment)

[Overview](https://supabase.com/docs/guides/deployment)

Environments[Managing environments](https://supabase.com/docs/guides/deployment/managing-environments)
[Database migrations](https://supabase.com/docs/guides/deployment/database-migrations)

Branching[Overview](https://supabase.com/docs/guides/deployment/branching)
[Branching via GitHub](https://supabase.com/docs/guides/deployment/branching/github-integration)
[Branching via dashboard](https://supabase.com/docs/guides/deployment/branching/dashboard)
[Working with branches](https://supabase.com/docs/guides/deployment/branching/working-with-branches)
[Configuration](https://supabase.com/docs/guides/deployment/branching/configuration)
[Integrations](https://supabase.com/docs/guides/deployment/branching/integrations)
[Troubleshooting](https://supabase.com/docs/guides/deployment/branching/troubleshooting)
[Billing](https://supabase.com/docs/guides/platform/manage-your-usage/branching)

Terraform[Terraform provider](https://supabase.com/docs/guides/deployment/terraform)
[Terraform tutorial](https://supabase.com/docs/guides/deployment/terraform/tutorial)
[Terraform reference](https://supabase.com/docs/guides/deployment/terraform/reference)

Production readiness[Shared responsibility model](https://supabase.com/docs/guides/deployment/shared-responsibility-model)
[Maturity model](https://supabase.com/docs/guides/deployment/maturity-model)
[Production checklist](https://supabase.com/docs/guides/deployment/going-into-prod)
[SOC 2 compliance](https://supabase.com/docs/guides/security/soc-2-compliance)

CI/CD[Generate types from your database](https://supabase.com/docs/guides/deployment/ci/generating-types)
[Automated testing](https://supabase.com/docs/guides/deployment/ci/testing)
[Back up your database](https://supabase.com/docs/guides/deployment/ci/backups)

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

Home

1. [Deployment](https://supabase.com/docs/guides/deployment)
3. CI/CD
5. [Automated testing](https://supabase.com/docs/guides/deployment/ci/testing)

# Automated testing using GitHub Actions

## Run your tests when you or your team make changes.

* * *

You can use the Supabase CLI to run automated tests.

## Testing your database [\#](https://supabase.com/docs/guides/deployment/ci/testing\#testing-your-database)

After you have [created unit tests](https://supabase.com/docs/guides/database/testing) for your database, you can use the GitHub Action to run the tests.

Inside your repository, create a new file inside the `.github/workflows` folder called `database-tests.yml`. Copy this snippet inside the file, and the action will run whenever a new PR is created:

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

name: 'database-tests'on:  pull_request:jobs:  build:    runs-on: ubuntu-latest    steps:      - uses: actions/checkout@v3      - uses: supabase/setup-cli@v1        with:          version: latest      - run: supabase db start      - run: supabase test db
```

## Testing your Edge Functions [\#](https://supabase.com/docs/guides/deployment/ci/testing\#testing-your-edge-functions)

After you have [created unit tests](https://supabase.com/docs/guides/functions/unit-test) for your Edge Functions, you can use the GitHub Action to run the tests.

Inside your repository, create a new file inside the `.github/workflows` folder called `functions-tests.yml`. Copy this snippet inside the file, and the action will run whenever a new PR is created:

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

name: 'functions-tests'on:  pull_request:jobs:  build:    runs-on: ubuntu-latest    steps:      - uses: actions/checkout@v3      - uses: supabase/setup-cli@v1        with:          version: latest      - uses: denoland/setup-deno@v2        with:          deno-version: latest      - run: supabase start      - run: deno test --allow-all deno-test.ts --env-file .env.local
```

## More resources [\#](https://supabase.com/docs/guides/deployment/ci/testing\#more-resources)

- Learn more about the [pgTAP extension](https://supabase.com/docs/guides/database/extensions/pgtap) for database testing.
- Official pgTAP Documentation: [pgtap.org](https://pgtap.org/)

[Edit this page on GitHub](https://github.com/supabase/setup-cli/blob/gh-pages/docs/testing.md)

### Is this helpful?

NoYes

### On this page

[Testing your database](https://supabase.com/docs/guides/deployment/ci/testing#testing-your-database) [Testing your Edge Functions](https://supabase.com/docs/guides/deployment/ci/testing#testing-your-edge-functions) [More resources](https://supabase.com/docs/guides/deployment/ci/testing#more-resources)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)