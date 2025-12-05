---
url: "https://supabase.com/docs/guides/troubleshooting/forbidden-resource-error-from-the-cli-L6rm6l"
title: "Supabase Docs | Troubleshooting | Forbidden resource error from the CLI"
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

# Forbidden resource error from the CLI

Last edited: 9/9/2025

* * *

This error typically occurs as a protective measure to prevent unauthorized access to critical operations.

To address this issue, we recommend following these troubleshooting steps:

- Verify Project ID: Ensure the $PROJECT\*REF variable in your commands contains the correct Project ID. You can find your Reference ID under [Project -> Settings -> General](https://supabase.com/dashboard/project/*/settings/general) in your Supabase Dashboard. A Reference ID looks something like `xvljpkujuwroxcuvossw`.
- Authorization Check: Confirm that you’ve been properly authorized. You can also generate a new Access Token in your dashboard and use it for login. Generate a new token [here](https://supabase.com/dashboard/account/tokens) and use it to [log in](https://supabase.com/docs/reference/cli/supabase-login).
- Re-link Project: Try [re-linking](https://supabase.com/docs/reference/cli/supabase-link) your project with the newly generated token.
- Owner/Admin Permissions: Make sure you have [Owner/Admin](https://supabase.com/docs/guides/platform/access-control) permissions for the project.
- CLI Version: Ensure you are using the latest version of the Supabase CLI. If not, update to the most recent version available at [Supabase CLI GitHub](https://github.com/supabase/cli).

If the issue persists, add a --debug --create-ticket flags to your command and contact [support](https://supabase.com/support) with the ticket id and debug logs, which can help in diagnosing the problem further.

## Metadata

* * *

### Products

[Cli](https://supabase.com/docs/guides/troubleshooting?products=cli) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Related error codes

[403](https://supabase.com/docs/guides/troubleshooting?errorCodes=403)

* * *

### Keywords

[cli](https://supabase.com/docs/guides/troubleshooting?tags=cli) [authorization](https://supabase.com/docs/guides/troubleshooting?tags=authorization) [token](https://supabase.com/docs/guides/troubleshooting?tags=token) [permissions](https://supabase.com/docs/guides/troubleshooting?tags=permissions)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21602)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)