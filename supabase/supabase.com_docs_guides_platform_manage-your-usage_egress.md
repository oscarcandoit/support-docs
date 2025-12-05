---
url: "https://supabase.com/docs/guides/platform/manage-your-usage/egress"
title: "Manage Egress usage | Supabase Docs"
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
7. [Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress)

# Manage Egress usage

* * *

## What you are charged for [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#what-you-are-charged-for)

You are charged for the network data transmitted out of the system to a connected client. Egress is incurred by all services - Database, Auth, Storage, Edge Functions, Realtime and Log Drains.

### Database Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#database-egress)

Data sent to the client when retrieving data stored in your database.

**Example:** A user views their order history in an online shop. The client application requests the database to retrieve the user's past orders. The order data is sent back to the client, contributing to Database Egress.

There are various ways to interact with your database, such as through the PostgREST API using one of the client SDKs or via the Supavisor connection pooler. On the Supabase Dashboard, Egress from the PostgREST API is labeled as **Database Egress**, while Egress through Supavisor is labeled as **Shared Pooler Egress**.

### Auth Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#auth-egress)

Data sent from Supabase Auth to the client while managing your application's users. This includes actions like signing in, signing out, or creating new users, e.g. via the JavaScript Client SDK.

**Example:** A user signs in to an online shop. The client application requests the Supabase Auth service to authenticate and authorize the user. The session data, including authentication tokens and user profile details, is sent back to the client, contributing to Auth Egress.

### Storage Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#storage-egress)

Data sent from Supabase Storage to the client when retrieving assets. This includes actions like downloading files, images, or other stored content, e.g. via the JavaScript Client SDK.

**Example:** A user downloads an invoice from an online shop. The client application requests Supabase Storage to retrieve the PDF file from the storage bucket. The file is sent back to the client, contributing to Storage Egress.

### Edge Functions Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#edge-functions-egress)

Data sent to the client when executing Edge Functions.

**Example:** A user completes a checkout process in an online shop. The client application triggers an Edge Function to process the payment and confirm the order. The confirmation response, along with any necessary details, is sent back to the client, contributing to Edge Functions Egress.

### Realtime Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#realtime-egress)

Data pushed to clients via Supabase Realtime for subscribed events.

**Example:** When a user views a product page in an online shop, their client subscribes to real-time inventory updates. As stock levels change, Supabase Realtime pushes updates to all subscribed clients, contributing to Realtime Egress.

### Shared pooler Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#shared-pooler-egress)

Data sent to the client when using the shared connection pooler (Supavisor) to access your database. When using the shared connection pooler, we do not count database egress, as this would otherwise count double (Database -> Shared Pooler + Shared Pooler -> Client).

**Example:** You are using our [shared connection pooler](https://supabase.com/docs/guides/database/connecting-to-postgres#shared-pooler) and you query a list of invoices in your backend. The data returned from that query is contributing to Shared Pooler Egress.

### Log Drain Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#log-drain-egress)

Data pushed to the connected log drain.

**Example:** You set up a log drain, each log sent to the log drain is considered egress. You can toggle the GZIP option to reduce egress, in case your provider supports it.

### Cached Egress [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#cached-egress)

Cached and uncached egress have independent quotas and independent pricing. Cached egress is egress that is served from our CDN via cache hits. Cached egress is typically incurred for storage through our [Smart CDN](https://supabase.com/docs/guides/storage/cdn/smart-cdn).

## How charges are calculated [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#how-charges-are-calculated)

Egress is charged by gigabyte. Charges apply only for usage exceeding your subscription plan's quota. This quota is called the Unified Egress Quota because it can be used across all services (Database, Auth, Storage etc.).

### Usage on your invoice [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#usage-on-your-invoice)

Usage is shown as "Egress GB" and "Cached Egress GB" on your invoice.

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#pricing)

$0.09 per GB per month for uncached egress, $0.03 per GB per month
for cached egress. You are only charged for usage exceeding your subscription plan's quota.

| Plan | Egress Quota (Uncached / Cached) | Over-Usage per month (Uncached / Cached) |
| --- | --- | --- |
| Free | 5 GB / 5 GB | - |
| Pro | 250 GB / 250 GB | $0.09 per GB / $0.03 per GB |
| Team | 250 GB / 250 GB | $0.09 per GB / $0.03 per GB |
| Enterprise | Custom | Custom |

## Billing examples [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#billing-examples)

### Within quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#within-quota)

The organization's Egress usage is within the quota, so no charges for Egress apply.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Egress | 200 GB | $0 |
| Cached Egress | 230 GB | $0 |
| **Subtotal** |  | **$35** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25** |

### Exceeding quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#exceeding-quota)

The organization's Egress usage exceeds the uncached egress quota by 50 GB and the cached egress quota by 550 GB, incurring charges for this additional usage.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Egress | 300 GB | $4.5 |
| Cached Egress | 800 GB | $16.5 |
| **Subtotal** |  | **$47.5** |
| Compute Credits |  | -$10 |
| **Total** |  | **$37.5** |

## View usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#view-usage)

### Usage page [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#usage-page)

You can view Egress usage on the [organization's usage page](https://supabase.com/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

![Usage page navigation bar](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-navbar--light.png&w=3840&q=75)

In the Total Egress section, you can see the usage for the selected time period. Hover over a specific date to view a breakdown by service. Note that this includes the cached egress.

![Unified Egress](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Funified-egress--light.png&w=3840&q=75)

Separately, you can see the cached egress right below:

![Unified Egress](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fcached-egress--light.png&w=3840&q=75)

### Custom report [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#custom-report)

1. On the [Observability page](https://supabase.com/dashboard/project/_/observability), click **New custom report** in the left navigation menu
2. After creating a new report, add charts for one or more Supabase services by clicking **Add block**

![Egress report](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fegress-report--light.png&w=3840&q=75)

## Debug usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#debug-usage)

To better understand your Egress usage, identify what’s driving the most traffic. Check the most frequent database queries, or analyze the most requested API paths to pinpoint high-egress endpoints.

### Frequent database queries [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#frequent-database-queries)

On the Advisors [Query performance view](https://supabase.com/dashboard/project/_/database/query-performance?preset=most_frequent&sort=calls&order=desc) you can see the most frequent queries and the average number of rows returned.

![Most frequent queries](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fadvisor-most-frequent-queries--light.png&w=3840&q=75)

### Most requested API endpoints [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#most-requested-api-endpoints)

In the [Logs Explorer](https://supabase.com/dashboard/project/_/logs/explorer) you can access Edge Logs, and review the top paths to identify heavily queried endpoints. These logs currently do not include response byte data. That data will be available in the future too.

![Top paths](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Flogs-top-paths--light.png&w=3840&q=75)

## Optimize usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/egress\#optimize-usage)

- Reduce the number of fields or entries selected when querying your database
- Reduce the number of queries or calls by optimizing client code or using caches
- For update or insert queries, configure your ORM or queries to not return the entire row if not needed
- When running manual backups through Supavisor, remove unneeded tables and/or reduce the frequency
- Refer to the [Storage Optimizations guide](https://supabase.com/docs/guides/storage/production/scaling#egress) for tips on reducing Storage Egress

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/egress.mdx)

### Is this helpful?

NoYes

### On this page

[What you are charged for](https://supabase.com/docs/guides/platform/manage-your-usage/egress#what-you-are-charged-for) [Database Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#database-egress) [Auth Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#auth-egress) [Storage Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#storage-egress) [Edge Functions Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#edge-functions-egress) [Realtime Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#realtime-egress) [Shared pooler Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#shared-pooler-egress) [Log Drain Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#log-drain-egress) [Cached Egress](https://supabase.com/docs/guides/platform/manage-your-usage/egress#cached-egress) [How charges are calculated](https://supabase.com/docs/guides/platform/manage-your-usage/egress#how-charges-are-calculated) [Usage on your invoice](https://supabase.com/docs/guides/platform/manage-your-usage/egress#usage-on-your-invoice) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/egress#pricing) [Billing examples](https://supabase.com/docs/guides/platform/manage-your-usage/egress#billing-examples) [Within quota](https://supabase.com/docs/guides/platform/manage-your-usage/egress#within-quota) [Exceeding quota](https://supabase.com/docs/guides/platform/manage-your-usage/egress#exceeding-quota) [View usage](https://supabase.com/docs/guides/platform/manage-your-usage/egress#view-usage) [Usage page](https://supabase.com/docs/guides/platform/manage-your-usage/egress#usage-page) [Custom report](https://supabase.com/docs/guides/platform/manage-your-usage/egress#custom-report) [Debug usage](https://supabase.com/docs/guides/platform/manage-your-usage/egress#debug-usage) [Frequent database queries](https://supabase.com/docs/guides/platform/manage-your-usage/egress#frequent-database-queries) [Most requested API endpoints](https://supabase.com/docs/guides/platform/manage-your-usage/egress#most-requested-api-endpoints) [Optimize usage](https://supabase.com/docs/guides/platform/manage-your-usage/egress#optimize-usage)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)

![Usage page navigation bar](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-navbar--light.png&w=3840&q=75)

![Top paths](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Flogs-top-paths--light.png&w=3840&q=75)

![Most frequent queries](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fadvisor-most-frequent-queries--light.png&w=3840&q=75)

![Egress report](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fegress-report--light.png&w=3840&q=75)