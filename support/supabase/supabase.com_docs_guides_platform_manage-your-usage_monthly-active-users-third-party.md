---
url: "https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party"
title: "Manage Monthly Active Third-Party Users usage | Supabase Docs"
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

[Overview](https://supabase.com/docs/guides/platform/manage-your-usage)
[Compute](https://supabase.com/docs/guides/platform/manage-your-usage/compute)
[Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress)
[Disk Size](https://supabase.com/docs/guides/platform/manage-your-usage/disk-size)
[Disk Throughput](https://supabase.com/docs/guides/platform/manage-your-usage/disk-throughput)
[Disk IOPS](https://supabase.com/docs/guides/platform/manage-your-usage/disk-iops)
[Monthly Active Users](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users)
[Monthly Active Third-Party Users](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party)
[Monthly Active SSO Users](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso)
[Storage Size](https://supabase.com/docs/guides/platform/manage-your-usage/storage-size)
[Storage Image Transformations](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations)
[Edge Function Invocations](https://supabase.com/docs/guides/platform/manage-your-usage/edge-function-invocations)
[Realtime Messages](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages)
[Realtime Peak Connections](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-peak-connections)
[Custom Domains](https://supabase.com/docs/guides/platform/manage-your-usage/custom-domains)
[Point-in-Time Recovery](https://supabase.com/docs/guides/platform/manage-your-usage/point-in-time-recovery)
[IPv4](https://supabase.com/docs/guides/platform/manage-your-usage/ipv4)
[MFA Phone](https://supabase.com/docs/guides/platform/manage-your-usage/advanced-mfa-phone)
[Read Replicas](https://supabase.com/docs/guides/platform/manage-your-usage/read-replicas)
[Branching](https://supabase.com/docs/guides/platform/manage-your-usage/branching)
[Log Drains](https://supabase.com/docs/guides/platform/manage-your-usage/log-drains)

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
5. [Manage your usage](https://supabase.com/docs/guides/platform/manage-your-usage)
7. [Monthly Active Third-Party Users](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party)

# Manage Monthly Active Third-Party Users usage

* * *

## What you are charged for [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#what-you-are-charged-for)

You are charged for the number of distinct users who log in or refresh their token during the billing cycle using a third-party authentication provider (Clerk, Firebase Auth, Auth0, AWS Cognito). Each unique user is counted only once per billing cycle, regardless of how many times they authenticate. These users are referred to as "Third-Party MAUs".

### Example [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#example)

Your billing cycle runs from January 1 to January 31. Although User-1 was signed in multiple times, they are counted as a single SSO MAU for this billing cycle.

1

### User-1 signs in via Auth0 on January 3

The Third-Party MAU count increases
from 0 to 1.

![Third-Party MAU login screen](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fthird-party-mau-auth0-login-screen.png&w=3840&q=75)

2

### User-1 signs out on January 4.

3

### User-1 signs in via Auth0 again on January 17

The Third-Party MAU count remains 1.

![Third-Party MAU login screen](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fthird-party-mau-auth0-login-screen.png&w=3840&q=75)

## How charges are calculated [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#how-charges-are-calculated)

You are charged by Third-Party MAU.

### Usage on your invoice [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#usage-on-your-invoice)

Usage is shown as "Monthly Active Third-Party Users" on your invoice.

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#pricing)

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#pricing)

$0.00325 per Third-Party MAU. You are only charged for usage exceeding your subscription
plan's quota.

For a detailed breakdown of how charges are calculated, refer to [Manage Monthly Active Third-Party Users usage](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party).

The count resets at the start of each billing cycle.

| Plan | Quota | Over-Usage |
| --- | --- | --- |
| Free | 50,000 | - |
| Pro | 100,000 | $0.00325 per Third-Party MAU |
| Team | 100,000 | $0.00325 per Third-Party MAU |
| Enterprise | Custom | Custom |

## Billing examples [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#billing-examples)

### Within quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#within-quota)

The organization's Third-Party MAU usage for the billing cycle is within the quota, so no charges apply.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Monthly Active Third-Party Users | 37,000 Third-Party MAU | $0 |
| **Subtotal** |  | **$35** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25** |

### Exceeding quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#exceeding-quota)

The organization's Third-Party MAU usage for the billing cycle exceeds the quota by 4950, incurring charges for this additional usage.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Monthly Active Third-Party Users | 130,000 Third-Party MAU | $97.50 |
| **Subtotal** |  | **$132.50** |
| Compute Credits |  | -$10 |
| **Total** |  | **$122.50** |

## View usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party\#view-usage)

You can view Monthly Active Third-Party Users usage on the [organization's usage page](https://supabase.com/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

![Usage page Monthly Active SSO Users section](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-mau-third-party--light.png&w=3840&q=75)[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/monthly-active-users-third-party.mdx)

### Is this helpful?

NoYes

### On this page

[What you are charged for](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#what-you-are-charged-for) [Example](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#example) [How charges are calculated](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#how-charges-are-calculated) [Usage on your invoice](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#usage-on-your-invoice) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#pricing) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#pricing) [Billing examples](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#billing-examples) [Within quota](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#within-quota) [Exceeding quota](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#exceeding-quota) [View usage](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-third-party#view-usage)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)