---
url: "https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages"
title: "Manage Realtime Messages usage | Supabase Docs"
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
7. [Realtime Messages](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages)

# Manage Realtime Messages usage

* * *

## What you are charged for [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#what-you-are-charged-for)

You are charged for the number of messages going through Supabase Realtime throughout the billing cycle. Includes database changes, Broadcast and Presence.

**Database changes**
Each database change counts as one message per client that listens to the event. For example, if a database change occurs and 5 clients listen to that database event, it counts as 5 messages.

**Broadcast**
Each broadcast message counts as one message sent plus one message per subscribed client that receives it. For example, if you broadcast a message and 4 clients listen to it, it counts as 5 messages—1 sent and 4 received.

## How charges are calculated [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#how-charges-are-calculated)

Realtime Messages are billed using Package pricing, with each package representing 1 million messages. If your usage falls between two packages, you are billed for the next whole package.

### Example [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#example)

For simplicity, let's assume a package size of 1,000,000 and a charge of $2.50 per package without quota.

| Messages | Packages Billed | Costs |
| --- | --- | --- |
| 999,999 | 1 | $2.50 |
| 1,000,000 | 1 | $2.50 |
| 1,000,001 | 2 | $5.00 |
| 1,500,000 | 2 | $5.00 |

### Usage on your invoice [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#usage-on-your-invoice)

Usage is shown as "Realtime Messages" on your invoice.

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#pricing)

$2.50 per 1 million messages. You are only charged for usage exceeding your subscription
plan's quota.

| Plan | Quota | Over-Usage |
| --- | --- | --- |
| Free | 2 million | - |
| Pro | 5 million | $2.50 per 1 million messages |
| Team | 5 million | $2.50 per 1 million messages |
| Enterprise | Custom | Custom |

## Billing examples [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#billing-examples)

### Within quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#within-quota)

The organization's Realtime messages are within the quota, so no charges apply.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Realtime Messages | 1.8 million messages | $0 |
| **Subtotal** |  | **$35** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25** |

### Exceeding quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#exceeding-quota)

The organization's Realtime messages exceed the quota by 3.5 million, incurring charges for this additional usage.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Realtime Messages | 8.5 million messages | $10 |
| **Subtotal** |  | **$45** |
| Compute Credits |  | -$10 |
| **Total** |  | **$35** |

## View usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages\#view-usage)

You can view Realtime Messages usage on the [organization's usage page](https://supabase.com/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

![Usage page navigation bar](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-navbar--light.png&w=3840&q=75)

In the Realtime Messages section, you can see the usage for the selected time period.

![Usage page Realtime Messages section](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-realtime-messages--light.png&w=3840&q=75)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/realtime-messages.mdx)

### Is this helpful?

NoYes

### On this page

[What you are charged for](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#what-you-are-charged-for) [How charges are calculated](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#how-charges-are-calculated) [Example](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#example) [Usage on your invoice](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#usage-on-your-invoice) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#pricing) [Billing examples](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#billing-examples) [Within quota](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#within-quota) [Exceeding quota](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#exceeding-quota) [View usage](https://supabase.com/docs/guides/platform/manage-your-usage/realtime-messages#view-usage)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)