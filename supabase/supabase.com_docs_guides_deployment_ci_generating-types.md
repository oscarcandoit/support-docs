---
url: "https://supabase.com/docs/guides/deployment/ci/generating-types"
title: "Generate types using GitHub Actions | Supabase Docs"
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
5. [Generate types from your database](https://supabase.com/docs/guides/deployment/ci/generating-types)

# Generate types using GitHub Actions

## End-to-end type safety across client, server, and database.

* * *

You can use the Supabase CLI to automatically generate Typescript definitions from your Postgres database. You can then pass these definitions to your `supabase-js` client and get end-to-end type safety across client, server, and database.

Inside your repository, create a new file inside the `.github/workflows` folder called `generate-types.yml`. Copy this snippet inside the file, and the action will run whenever a new PR is created:

## Verify types [\#](https://supabase.com/docs/guides/deployment/ci/generating-types\#verify-types)

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
18
19
20
21

name: 'generate-types'on:  pull_request:jobs:  build:     runs-on: ubuntu-latest    steps:        - uses: supabase/setup-cli@v1          with:            version: latest        - run: supabase init        - run: supabase db start        - name: Verify generated types match Postgres schema          run: |            supabase gen types typescript --local > schema.gen.ts            if ! git diff --ignore-space-at-eol --exit-code --quiet schema.gen.ts; then              echo "Detected uncommitted changes after build. See status below:"              git diff              exit 1            fi
```

## More resources [\#](https://supabase.com/docs/guides/deployment/ci/generating-types\#more-resources)

- Using supabase-js with type definitions: [Typescript Support](https://supabase.com/docs/reference/javascript/typescript-support)

[Edit this page on GitHub](https://github.com/supabase/setup-cli/blob/gh-pages/docs/generating-types.md)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FVSNgAIObBdw%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Verify types](https://supabase.com/docs/guides/deployment/ci/generating-types#verify-types) [More resources](https://supabase.com/docs/guides/deployment/ci/generating-types#more-resources)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)