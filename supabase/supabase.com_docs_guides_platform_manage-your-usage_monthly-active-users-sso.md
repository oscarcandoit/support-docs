---
url: "https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso"
title: "Manage Monthly Active SSO Users usage | Supabase Docs"
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
7. [Monthly Active SSO Users](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso)

# Manage Monthly Active SSO Users usage

* * *

## What you are charged for [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#what-you-are-charged-for)

You are charged for the number of distinct users who log in or refresh their token during the billing cycle using a SAML 2.0 compatible identity provider (e.g. Google Workspace, Microsoft Active Directory). Each unique user is counted only once per billing cycle, regardless of how many times they authenticate. These users are referred to as "SSO MAUs".

### Example [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#example)

Your billing cycle runs from January 1 to January 31. Although User-1 was signed in multiple times, they are counted as a single SSO MAU for this billing cycle.

1

### Sign User-1 in on January 3

The SSO MAU count increases from 0 to 1.

```
1
2
3
4
5
6
7
8

const { data, error } = await supabase.auth.signInWithSSO({domain: 'company.com'})if (data?.url) {// redirect User-1 to the identity provider's authentication flowwindow.location.href = data.url}
```

2

### Sign User-1 out on January 4

```
1

const { error } = await supabase.auth.signOut()
```

3

### Sign User-1 in again on January 17

The SSO MAU count remains 1.

```
1
2
3
4
5
6
7
8

const { data, error } = await supabase.auth.signInWithSSO({domain: 'company.com'})if (data?.url) {// redirect User-1 to the identity provider's authentication flowwindow.location.href = data.url}
```

## How charges are calculated [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#how-charges-are-calculated)

You are charged by SSO MAU.

### Usage on your invoice [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#usage-on-your-invoice)

Usage is shown as "Monthly Active SSO Users" on your invoice.

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#pricing)

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#pricing)

$0.015 per SSO MAU. You are only charged for usage exceeding your subscription plan's
quota.

For a detailed breakdown of how charges are calculated, refer to [Manage Monthly Active SSO Users usage](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso).

The count resets at the start of each billing cycle.

| Plan | Quota | Over-Usage |
| --- | --- | --- |
| Pro | 50 | $0.015 per SSO MAU |
| Team | 50 | $0.015 per SSO MAU |
| Enterprise | Custom | Custom |

## Billing examples [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#billing-examples)

### Within quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#within-quota)

The organization's SSO MAU usage for the billing cycle is within the quota, so no charges apply.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Monthly Active SSO Users | 37 SSO MAU | $0 |
| **Subtotal** |  | **$35** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25** |

### Exceeding quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#exceeding-quota)

The organization's SSO MAU usage for the billing cycle exceeds the quota by 10, incurring charges for this additional usage.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Monthly Active SSO Users | 60 SSO MAU | $0.15 |
| **Subtotal** |  | **$35.15** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25.15** |

## View usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso\#view-usage)

You can view Monthly Active SSO Users usage on the [organization's usage page](https://supabase.com/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

![Usage page navigation bar](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-navbar--light.png&w=3840&q=75)

In the Monthly Active SSO Users section, you can see the usage for the selected time period.

![Usage page Monthly Active SSO Users section](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-mau-sso--light.png&w=3840&q=75)[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/monthly-active-users-sso.mdx)

### Is this helpful?

NoYes

### On this page

[What you are charged for](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#what-you-are-charged-for) [Example](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#example) [How charges are calculated](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#how-charges-are-calculated) [Usage on your invoice](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#usage-on-your-invoice) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#pricing) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#pricing) [Billing examples](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#billing-examples) [Within quota](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#within-quota) [Exceeding quota](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#exceeding-quota) [View usage](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users-sso#view-usage)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)