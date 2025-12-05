---
url: "https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement"
title: "Enforce MFA on Organization | Supabase Docs"
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

[Platform](https://supabase.com/docs/guides/platform)

Add-ons[Custom Domains](https://supabase.com/docs/guides/platform/custom-domains)
[Database Backups](https://supabase.com/docs/guides/platform/backups)
[IPv4 Address](https://supabase.com/docs/guides/platform/ipv4-address)
[Read Replicas](https://supabase.com/docs/guides/platform/read-replicas)

Upgrades & Migrations[Upgrading](https://supabase.com/docs/guides/platform/upgrading)

Migrating within Supabase

Migrating to Supabase

Project & Account Management[Access Control](https://supabase.com/docs/guides/platform/access-control)

Multi-factor Authentication

[Overview](https://supabase.com/docs/guides/platform/multi-factor-authentication)
[Enforce MFA on organization](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement)

[Transfer Project](https://supabase.com/docs/guides/platform/project-transfer)
[Restore to a new project](https://supabase.com/docs/guides/platform/clone-project)

Single Sign-On

Platform Configuration[Regions](https://supabase.com/docs/guides/platform/regions)
[Compute and Disk](https://supabase.com/docs/guides/platform/compute-and-disk)
[Database Size](https://supabase.com/docs/guides/platform/database-size)
[HIPAA Projects](https://supabase.com/docs/guides/platform/hipaa-projects)
[Network Restrictions](https://supabase.com/docs/guides/platform/network-restrictions)
[Performance Tuning](https://supabase.com/docs/guides/platform/performance)
[SSL Enforcement](https://supabase.com/docs/guides/platform/ssl-enforcement)
[Default Platform Permissions](https://supabase.com/docs/guides/platform/permissions)
[PrivateLink](https://supabase.com/docs/guides/platform/privatelink)

Billing[About billing on Supabase](https://supabase.com/docs/guides/platform/billing-on-supabase)
[Get set up for billing](https://supabase.com/docs/guides/platform/get-set-up-for-billing)
[Manage your subscription](https://supabase.com/docs/guides/platform/manage-your-subscription)

Manage your usage

[Your monthly invoice](https://supabase.com/docs/guides/platform/your-monthly-invoice)
[Control your costs](https://supabase.com/docs/guides/platform/cost-control)
[Credits](https://supabase.com/docs/guides/platform/credits)

AWS Marketplace

[Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq)

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

Platform

1. [Platform](https://supabase.com/docs/guides/platform)
3. More
5. [Multi-factor Authentication](https://supabase.com/docs/guides/platform/multi-factor-authentication)
7. [Enforce MFA on organization](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement)

# Enforce MFA on Organization

* * *

Supabase provides multi-factor authentication (MFA) enforcement on the organization level. With MFA enforcement, you can ensure that all organization members use MFA. Members cannot interact with your organization or your organization's projects without a valid MFA-backed session.

MFA enforcement is only available on the [Pro, Team and Enterprise plans](https://supabase.com/pricing).

## Manage MFA enforcement [\#](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement\#manage-mfa-enforcement)

To enable MFA on an organization, visit the [security settings](https://supabase.com/dashboard/org/_/security) page and toggle `Require MFA to access organization` on.

- Only organization **owners** can modify this setting
- The owner must have [MFA on their own account](https://supabase.com/docs/guides/platform/multi-factor-authentication)
- Supabase recommends creating two distinct MFA apps on your user account

When MFA enforcement is enabled, users without MFA will immediately lose access all resources in the organization. The users will still be members of the organization and will regain their original permissions once they enable MFA on their account.

## Personal access tokens [\#](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement\#personal-access-tokens)

Personal access tokens are not affected by MFA enforcement. Personal access tokens are designed for programmatic access and issuing of these require a valid Supabase session backed by MFA, if enabled on the account.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/mfa/org-mfa-enforcement.mdx)

### Is this helpful?

NoYes

### On this page

[Manage MFA enforcement](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement#manage-mfa-enforcement) [Personal access tokens](https://supabase.com/docs/guides/platform/mfa/org-mfa-enforcement#personal-access-tokens)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)