---
url: "https://supabase.com/docs/guides/deployment/branching/configuration"
title: "Configuration | Supabase Docs"
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

Home

1. [Deployment](https://supabase.com/docs/guides/deployment)
3. Branching
5. [Configuration](https://supabase.com/docs/guides/deployment/branching/configuration)

# Configuration

## Configure your Supabase branches using configuration as code

* * *

This guide covers how to configure your Supabase branches, using the `config.toml` file. In one single file, you can configure all your branches, including branch settings and secrets.

## Branch configuration with remotes [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#branch-configuration-with-remotes)

When Branching is enabled, your `config.toml` settings automatically sync to all ephemeral branches through a one-to-one mapping between your Git and Supabase branches.

### Basic configuration [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#basic-configuration)

To update configuration for a Supabase branch, modify `config.toml` and push to git. The Supabase integration will detect the changes and apply them to the corresponding branch.

### Remote-specific configuration [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#remote-specific-configuration)

For persistent branches that need specific settings, you can use the `[remotes]` block in your `config.toml`. Each remote configuration must reference an existing project ID.

Here's an example of configuring a separate seed script for a staging environment:

```
1
2
3
4
5
6

[remotes.staging]project_id = "your-project-ref"[remotes.staging.db.seed]enabled = truesql_paths = ["./seeds/staging.sql"]
```

Since the `project_id` field must reference an existing branch, you need to create the persistent branch before adding its configuration. Use the CLI to create a persistent branch first:

```
1
2

supabase --experimental branches create --persistent# Do you want to create a branch named develop? [Y/n]
```

To retrieve the project ID for an existing branch, use the `branches list` command:

```
1

supabase --experimental branches list
```

This will display a table showing all your branches with their corresponding project ID.
Use the value from the `BRANCH PROJECT ID` column as your `project_id` in the remote configuration.

### Configuration merging [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#configuration-merging)

When merging a PR into a persistent branch, the Supabase integration:

1. Checks for configuration changes
2. Logs the changes
3. Applies them to the target remote

If no remote is declared or the project ID is incorrect, the configuration step is skipped.

### Available configuration options [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#available-configuration-options)

All standard configuration options are available in the `[remotes]` block. This includes:

- Database settings
- API configurations
- Authentication settings
- Edge Functions configuration
- And more

You can use this to maintain different configurations for different environments while keeping them all in version control.

## Managing secrets for branches [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#managing-secrets-for-branches)

For sensitive configuration like SMTP credentials or API keys, you can use the Supabase CLI to manage secrets for your branches. This is especially useful for custom SMTP setup or other services that require secure credentials.

To set secrets for a persistent branch:

```
1
2
3
4
5
6
7

# Set secrets from a .env filesupabase secrets set --env-file ./supabase/.env# Or set individual secretssupabase secrets set SMTP_HOST=smtp.example.comsupabase secrets set SMTP_USER=your-usernamesupabase secrets set SMTP_PASSWORD=your-password
```

These secrets will be available to your branch's services and can be used in your configuration. For example, in your `config.toml`:

```
1
2
3
4

[auth.smtp]host = "env(SMTP_HOST)"user = "env(SMTP_USER)"password = "env(SMTP_PASSWORD)"
```

##### Secrets are branch-specific

Secrets set for one branch are not automatically available in other branches. You'll need to set them separately for each branch that needs them.

### Using dotenvx for git-based workflow [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#using-dotenvx-for-git-based-workflow)

For managing environment variables across different branches, you can use [dotenvx](https://dotenvx.com/) to securely manage your configurations. This approach is particularly useful for teams working with Git branches and preview deployments.

#### Environment file structure [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#environment-file-structure)

Following the conventions used in the [example repository](https://github.com/supabase/supabase/blob/master/examples/slack-clone/nextjs-slack-clone-dotenvx/README.md), environments are configured using dotenv files in the `supabase` directory:

| File | Environment | `.gitignore` it? | Encrypted |
| --- | --- | --- | --- |
| .env.keys | All | Yes | No |
| .env.local | Local | Yes | No |
| .env.production | Production | No | Yes |
| .env.preview | Branches | No | Yes |
| .env | Any | Maybe | Yes |

#### Setting up encrypted secrets [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#setting-up-encrypted-secrets)

1. Generate key pair and encrypt your secrets:

```
1

npx @dotenvx/dotenvx set SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET "<your-secret>" -f supabase/.env.preview
```

This creates a new encryption key in `supabase/.env.preview` and a new decryption key in `supabase/.env.keys`.

2. Update project secrets:

```
1

npx supabase secrets set --env-file supabase/.env.keys
```

3. Choose your configuration approach in `config.toml`:

Option A: Use encrypted values directly:

```
1
2
3

[auth.external.github]enabled = truesecret = "encrypted:<encrypted-value>"
```

Option B: Use environment variables:

```
1
2
3
4

[auth.external.github]enabled = trueclient_id = "env(SUPABASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID)"secret = "env(SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET)"
```

##### Secret fields

The `encrypted:` syntax only works for designated "secret" fields in the configuration (like `secret` in auth providers). Using encrypted values in other fields will not be automatically decrypted and may cause issues. For non-secret fields, use environment variables with the `env()` syntax instead.

#### Using with preview branches [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#using-with-preview-branches)

When you commit your `.env.preview` file with encrypted values, the branching executor will automatically retrieve and use these values when deploying your branch. This allows you to maintain different configurations for different branches while keeping sensitive information secure.

## Configuration examples [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#configuration-examples)

### Multi-environment setup [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#multi-environment-setup)

Here's an example of a complete multi-environment configuration:

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

# Default configuration for all branches[api]enabled = trueport = 54321schemas = ["public", "storage", "graphql_public"][db]port = 54322pool_size = 10# Staging-specific configuration[remotes.staging]project_id = "staging-project-ref"[remotes.staging.api]max_rows = 1000[remotes.staging.db.seed]sql_paths = ["./seeds/staging.sql"]# Production-specific configuration[remotes.production]project_id = "prod-project-ref"[remotes.production.api]max_rows = 500[remotes.production.db]pool_size = 25
```

To retrieve the project ID for an existing branch, use the `branches list` command:

```
1

supabase --experimental branches list
```

This will display a table showing all your branches with their corresponding project ID.
Use the value from the `BRANCH PROJECT ID` column as your `project_id` in the remote configuration.

### Feature branch configuration [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#feature-branch-configuration)

For feature branches that need specific settings:

```
1
2
3
4
5
6
7

[remotes.feature-oauth]project_id = "feature-branch-ref"[remotes.feature-oauth.auth.external.google]enabled = trueclient_id = "env(GOOGLE_CLIENT_ID)"secret = "env(GOOGLE_CLIENT_SECRET)"
```

To retrieve the project ID for an existing branch, use the `branches list` command:

```
1

supabase --experimental branches list
```

This will display a table showing all your branches with their corresponding project ID.
Use the value from the `BRANCH PROJECT ID` column as your `project_id` in the remote configuration.

## Next steps [\#](https://supabase.com/docs/guides/deployment/branching/configuration\#next-steps)

- Explore [branching integrations](https://supabase.com/docs/guides/deployment/branching/integrations)
- Learn about [troubleshooting branches](https://supabase.com/docs/guides/deployment/branching/troubleshooting)
- Review [branching pricing](https://supabase.com/docs/guides/deployment/branching/pricing)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/branching/configuration.mdx)

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