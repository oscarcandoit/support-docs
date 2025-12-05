---
url: "https://supabase.com/docs/guides/platform/aws-marketplace/getting-started"
title: "Getting Started | Supabase Docs"
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
7. [Getting Started](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started)

# Getting Started

* * *

## Before you start [\#](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started\#before-you-start)

Depending on whether a Supabase organization is managed and billed through the AWS Marketplace or directly through the Supabase platform, there are differences. To help you make an informed decision about which approach is better suited for your needs, you can find an overview of these differences in the table below.

| Feature/Aspect | Managed via AWS Marketplace | Managed directly via Supabase platform |
| --- | --- | --- |
| Available Plans | Pro, Team, Enterprise | Free, Pro, Team, Enterprise |
| Mid-cycle downgrades | No | Yes |
| Cost Control | Spend Cap not available | Spend Cap available |
| Downgrade Behaviour | If a downgrade to the Free Plan causes you to exceed the [free projects limit](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan), all projects will be paused. | If a downgrade to the Free Plan causes you to exceed the [free projects limit](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan), you have the option to prevent pausing by transferring projects. |
| Invoicing | Separate invoices, one for fixed costs and one for usage costs | One invoice for both fixed costs and usage costs |

## Purchase Supabase through the AWS Marketplace [\#](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started\#purchase-supabase-through-the-aws-marketplace)

Purchasing Supabase through the AWS Marketplace involves two steps. First, you purchase the corresponding subscription on the marketplace. Then, to complete the setup, you must link this subscription to a Supabase organization on the Supabase platform.

For more details on completing the setup and what it means to link an organization, see our [Account Setup guide](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup).

1

### Go to the AWS Marketplace

Go to the [Supabase product page on the AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-zjciuce2qsb3q) and click "View purchase options".

![Supabase product overview on the AWS Marketplace](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-listing-overview.png&w=3840&q=75)

2

### Configure the subscription

Select the desired plan (Pro Plan or Team Plan) and configure whether the subscription should automatically renew after one month.

Disabling auto-renewal means that the subscription will be downgraded to the Free Plan after one month.

If the downgrade causes you to exceed the [free projects limit](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan), **all** projects within the organization will be paused. We do not make the decision about which projects continue to run and which are paused. You must then decide which projects you want to keep active and manually reactivate them through the Supabase dashboard.

![Supabase purchase options on the AWS Marketplace](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-listing-purchase-options.png&w=3840&q=75)

3

### Subscribe

Click "Subscribe" at the bottom of the page.

![Supabase product subscribe](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-listing-subscribe.png&w=3840&q=75)

4

### Go to the Supabase platform

After the payment has been confirmed and your marketplace subscription is active, click "Set up your account" to be redirected to the Supabase platform.

![Supabase product subscribe](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-listing-success.png&w=3840&q=75)

5

### Complete the setup on the Supabase platform

Complete the setup by linking a Supabase organization to the AWS Marketplace subscription.

![Supabase product subscribe](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-onboarding-page--light.png&w=3840&q=75)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/aws-marketplace/getting-started.mdx)

### Is this helpful?

NoYes

### On this page

[Before you start](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started#before-you-start) [Purchase Supabase through the AWS Marketplace](https://supabase.com/docs/guides/platform/aws-marketplace/getting-started#purchase-supabase-through-the-aws-marketplace)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)