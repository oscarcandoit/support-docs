---
url: "https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription"
title: "Manage your subscription | Supabase Docs"
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

[Your monthly invoice](https://supabase.com/docs/guides/platform/your-monthly-invoice)
[Control your costs](https://supabase.com/docs/guides/platform/cost-control)
[Credits](https://supabase.com/docs/guides/platform/credits)

AWS Marketplace

[Overview](https://supabase.com/docs/guides/platform/aws-marketplace)
[Getting Started](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started)
[Account Setup](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup)
[Manage your subscription](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription)
[Invoices](https://supabase.com/docs/guides/platform/aws-marketplace/invoices)
[FAQ](https://supabase.com/docs/guides/platform/aws-marketplace/faq)

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
5. [AWS Marketplace](https://supabase.com/docs/guides/platform/aws-marketplace)
7. [Manage your subscription](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription)

# Manage your subscription

* * *

## Manage your subscription plan [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#manage-your-subscription-plan)

Plan changes are not made on the Supabase dashboard, but instead through the AWS Marketplace. The easiest way to navigate to the corresponding page on the marketplace is through the Supabase dashboard.

1. On the [organization's billing page](https://supabase.com/dashboard/org/_/billing), go to section **Subscription Plan**
2. Click **Change subscription plan**
3. On the side panel, follow the link to the AWS Marketplace

### Upgrade [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#upgrade)

You can upgrade your plan at any time. The new plan will be active immediately, and you will be charged a prorated amount for the remainder of the current billing cycle. The charge for the upgrade also factors in the upfront payment you have already made for your existing plan.

![AWS Marketplace modify contract page](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-change-plan.png&w=3840&q=75)

### Downgrade [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#downgrade)

Downgrades are only possible at the end of the billing cycle, not in the middle of a billing cycle.

#### Downgrade to the Free Plan [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#downgrade-to-the-free-plan)

If you want your subscription to be downgraded to the Free Plan at the end of the current billing cycle, you need to disable auto-renewal for the marketplace subscription.

If the downgrade causes you to exceed the [free projects limit](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan), **all** projects within the organization will be paused. We do not make the decision about which projects continue to run and which are paused. You must then decide which projects you want to keep active and manually reactivate them through the Supabase dashboard.

![AWS Marketplace modify contract page](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-configure-auto-renewal.png&w=3840&q=75)

#### Downgrade to a paid plan [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#downgrade-to-a-paid-plan)

A downgrade to a paid plan (Pro Plan / Team Plan) involves two steps.

**Step 1:** Let the current subscription on the higher plan expire, meaning turn off auto-renewal
**Step 2:** Start a new subscription on the lower plan

## Manage your payment methods [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#manage-your-payment-methods)

You can manage your payment methods through the [AWS Billing and Cost Management console](https://console.aws.amazon.com/billing).

## Manage your billing details [\#](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription\#manage-your-billing-details)

You can manage billing details, such as the billing address or tax ID, through the [AWS Billing and Cost Management console](https://console.aws.amazon.com/billing).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/aws-marketplace/manage-your-subscription.mdx)

### Is this helpful?

NoYes

### On this page

[Manage your subscription plan](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#manage-your-subscription-plan) [Upgrade](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#upgrade) [Downgrade](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#downgrade) [Manage your payment methods](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#manage-your-payment-methods) [Manage your billing details](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#manage-your-billing-details)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)