---
url: "https://supabase.com/docs/guides/deployment/ci/backups"
title: "Automated backups using GitHub Actions | Supabase Docs"
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
5. [Back up your database](https://supabase.com/docs/guides/deployment/ci/backups)

# Automated backups using GitHub Actions

## Backup your database on a regular basis.

* * *

You can use the Supabase CLI to backup your Postgres database. The steps involve running a series of commands to dump roles, schema, and data separately.
Inside your repository, create a new file inside the `.github/workflows` folder called `backup.yml`. Copy the following snippet inside the file, and the action will run whenever a new PR is created.

Never backup your data to a public repository.

## Backup action [\#](https://supabase.com/docs/guides/deployment/ci/backups\#backup-action)

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

name: 'backup-database'on:  pull_request:jobs:  build:     runs-on: ubuntu-latest    env:      supabase_db_url: ${{ secrets.SUPABASE_DB_URL }}   # For example: postgresql://postgres:[YOUR-PASSWORD]@db.<ref>.supabase.co:5432/postgres    steps:      - uses: actions/checkout@v2      - uses: supabase/setup-cli@v1        with:          version: latest      - name: Backup roles        run: supabase db dump --db-url "$supabase_db_url" -f roles.sql --role-only      - name: Backup schema        run: supabase db dump --db-url "$supabase_db_url" -f schema.sql      - name: Backup data        run: supabase db dump --db-url "$supabase_db_url" -f data.sql --data-only --use-copy
```

## Periodic Backups Workflow [\#](https://supabase.com/docs/guides/deployment/ci/backups\#periodic-backups-workflow)

You can use the GitHub Action to run periodic backups of your database. In this example, the Action workflow is triggered by `push` and `pull_request` events on the `main` branch, manually via `workflow_dispatch`, and automatically at midnight every day due to the `schedule` event with a `cron` expression.
The workflow runs on the latest Ubuntu runner and requires write permissions to the repository's contents. It uses the Supabase CLI to dump the roles, schema, and data from your Supabase database, utilizing the `SUPABASE_DB_URL` environment variable that is securely stored in the GitHub secrets.
After the backup is complete, it auto-commits the changes to the repository using the `git-auto-commit-action`. This ensures that the latest backup is always available in your repository. The commit message for these automated commits is "Supabase backup".
This workflow provides an automated solution for maintaining regular backups of your Supabase database. It helps keep your data safe and enables easy restoration in case of any accidental data loss or corruption.

Never backup your data to a public repository.

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
22
23
24
25
26
27
28
29
30
31
32
33
34

name: Supa-backupon:  push:    branches: [ main ]  pull_request:    branches: [ main ]  workflow_dispatch:  schedule:    - cron: '0 0 * * *' # Runs every day at midnightjobs:     run_db_backup:    runs-on: ubuntu-latest    permissions:      contents: write    env:      supabase_db_url: ${{ secrets.SUPABASE_DB_URL }}   # For example: postgresql://postgres:[YOUR-PASSWORD]@db.<ref>.supabase.co:5432/postgres    steps:      - uses: actions/checkout@v3        with:          ref: ${{ github.head_ref }}      - uses: supabase/setup-cli@v1        with:          version: latest      - name: Backup roles        run: supabase db dump --db-url "$supabase_db_url" -f roles.sql --role-only      - name: Backup schema        run: supabase db dump --db-url "$supabase_db_url" -f schema.sql      - name: Backup data        run: supabase db dump --db-url "$supabase_db_url" -f data.sql --data-only --use-copy      - uses: stefanzweifel/git-auto-commit-action@v4        with:          commit_message: Supabase backup
```

## More resources [\#](https://supabase.com/docs/guides/deployment/ci/backups\#more-resources)

- Backing up and migrating your project: [Migrating and Upgrading](https://supabase.com/docs/guides/platform/migrating-and-upgrading-projects)

[Edit this page on GitHub](https://github.com/supabase/setup-cli/blob/gh-pages/docs/backups.md)

### Is this helpful?

NoYes

### On this page

[Backup action](https://supabase.com/docs/guides/deployment/ci/backups#backup-action) [Periodic Backups Workflow](https://supabase.com/docs/guides/deployment/ci/backups#periodic-backups-workflow) [More resources](https://supabase.com/docs/guides/deployment/ci/backups#more-resources)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)