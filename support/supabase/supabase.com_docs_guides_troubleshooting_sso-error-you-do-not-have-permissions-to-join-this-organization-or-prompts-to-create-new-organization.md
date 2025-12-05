---
url: "https://supabase.com/docs/guides/troubleshooting/sso-error-you-do-not-have-permissions-to-join-this-organization-or-prompts-to-create-new-organization"
title: "Supabase Docs | Troubleshooting | SSO Error: \"You do not have permissions to join this organization\" or prompts to create new organization"
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

# SSO Error: "You do not have permissions to join this organization" or prompts to create new organization

Last edited: 11/26/2025

* * *

When attempting to log in via SSO, you may observe the message "You do not have permissions to join this organization" or be prompted to create a new organization.

**Why This Happens:**

Supabase treats email/password and SSO identities as distinct, even when the email addresses are identical. Existing memberships associated with email/password accounts are not automatically linked to a newly created SSO identity.

**How to Resolve This Issue:**

If you want your org members to auto-join:

1. As an organization administrator, ensure "Join organization on signup" is enabled in your SSO configuration.
2. Navigate to your organization's `Members` settings.
3. Remove any existing email/password-based user accounts that are intended to transition to SSO.
4. Instruct these users to log in via SSO; they will be automatically re-added to your organization with the default role if auto-join is active.

Alternatively, you can manually re-invite their Google SSO identity to the org, ask them to accept the invite while signed in via Google and once confirmed, remove their old email/password account.

**Best Practice When Setting up SSO:**

Maintain owner account with a password login as a break-glass backup.

## Metadata

* * *

### Products

[Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

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