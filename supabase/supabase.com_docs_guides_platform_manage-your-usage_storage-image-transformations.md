---
url: "https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations"
title: "Manage Storage Image Transformations usage | Supabase Docs"
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
7. [Storage Image Transformations](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations)

# Manage Storage Image Transformations usage

* * *

## What you are charged for [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#what-you-are-charged-for)

You are charged for the number of distinct images transformed during the billing period, regardless of how many transformations each image undergoes. We refer to these images as "origin" images.

### Example [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#example)

With these four transformations applied to `image-1.jpg` and `image-2.jpg`, the origin images count is 2.

```
1
2
3
4
5
6

supabase.storage.from('bucket').createSignedUrl('image-1.jpg', 60000, {  transform: {    width: 200,    height: 200,  },})
```

```
1
2
3
4
5
6

supabase.storage.from('bucket').createSignedUrl('image-2.jpg', 60000, {  transform: {    width: 400,    height: 300,  },})
```

```
1
2
3
4
5
6

supabase.storage.from('bucket').createSignedUrl('image-2.jpg', 60000, {  transform: {    width: 600,    height: 250,  },})
```

```
1
2
3
4
5
6

supabase.storage.from('bucket').download('image-2.jpg', {  transform: {    width: 800,    height: 300,  },})
```

## How charges are calculated [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#how-charges-are-calculated)

Storage Image Transformations are billed using Package pricing, with each package representing 1000 origin images. If your usage falls between two packages, you are billed for the next whole package.

### Example [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#example)

For simplicity, let's assume a package size of 1,000 and a charge of $5 per package with no quota.

| Origin Images | Packages Billed | Costs |
| --- | --- | --- |
| 999 | 1 | $5 |
| 1,000 | 1 | $5 |
| 1,001 | 2 | $10 |
| 1,500 | 2 | $10 |

### Usage on your invoice [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#usage-on-your-invoice)

Usage is shown as "Storage Image Transformations" on your invoice.

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#pricing)

## Pricing [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#pricing)

$5 per 1,000 origin images. You are only charged for usage exceeding your subscription
plan's quota.

The count resets at the start of each billing cycle.

| Plan | Quota | Over-Usage |
| --- | --- | --- |
| Pro | 100 | $5 per 1,000 origin images |
| Team | 100 | $5 per 1,000 origin images |
| Enterprise | Custom | Custom |

For a detailed breakdown of how charges are calculated, refer to [Manage Storage Image Transformations usage](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations).

## Billing examples [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#billing-examples)

### Within quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#within-quota)

The organization's number of origin images for the billing cycle is within the quota, so no charges apply.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Image Transformations | 74 origin images | $0 |
| **Subtotal** |  | **$35** |
| Compute Credits |  | -$10 |
| **Total** |  | **$25** |

### Exceeding quota [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#exceeding-quota)

The organization's number of origin images for the billing cycle exceeds the quota by 750, incurring charges for this additional usage.

| Line Item | Units | Costs |
| --- | --- | --- |
| Pro Plan | 1 | $25 |
| Compute Hours Micro | 744 hours | $10 |
| Image Transformations | 850 origin images | $5 |
| **Subtotal** |  | **$40** |
| Compute Credits |  | -$10 |
| **Total** |  | **$30** |

## View usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#view-usage)

You can view Storage Image Transformations usage on the [organization's usage page](https://supabase.com/dashboard/org/_/usage). The page shows the usage of all projects by default. To view the usage for a specific project, select it from the dropdown. You can also select a different time period.

![Usage page navigation bar](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-navbar--light.png&w=3840&q=75)

In the Storage Image Transformations section, you can see how many origin images were transformed during the selected time period.

![Usage page Storage Image Transformations section](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Fusage-image-transformations--light.png&w=3840&q=75)

## Optimize usage [\#](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations\#optimize-usage)

- Pre-generate common variants – instead of transforming images on the fly, generate and store commonly used sizes in advance
- Optimize original image sizes – upload images in an optimized format and resolution to reduce the need for excessive transformations
- Leverage [Smart CDN](https://supabase.com/docs/guides/storage/cdn/smart-cdn) caching or any other caching solution to serve transformed images efficiently and avoid unnecessary repeated transformations
- Control how long assets are stored in the browser using the `Cache-Control` header

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/storage-image-transformations.mdx)

### Is this helpful?

NoYes

### On this page

[What you are charged for](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#what-you-are-charged-for) [Example](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#example) [How charges are calculated](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#how-charges-are-calculated) [Example](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#example) [Usage on your invoice](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#usage-on-your-invoice) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#pricing) [Pricing](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#pricing) [Billing examples](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#billing-examples) [Within quota](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#within-quota) [Exceeding quota](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#exceeding-quota) [View usage](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#view-usage) [Optimize usage](https://supabase.com/docs/guides/platform/manage-your-usage/storage-image-transformations#optimize-usage)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)