---
url: "https://supabase.com/docs/guides/platform/aws-marketplace/account-setup"
title: "Account Setup | Supabase Docs"
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
7. [Account Setup](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup)

# Account Setup

* * *

After purchasing a Supabase subscription on the AWS Marketplace, the next and final step is to link the newly purchased subscription to a Supabase organization. This can either be an existing organization or a newly created one.

An AWS Marketplace subscription is linked to exactly one Supabase organization. If you want to manage multiple organizations through the AWS Marketplace, you must purchase a separate marketplace subscription for each organization.

![Supabase product subscribe](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fguides%2Fplatform%2Faws-marketplace-onboarding-page-extended--light.png&w=3840&q=75)

## Implications of linking a Supabase organization to a marketplace subscription [\#](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup\#implications-of-linking-a-supabase-organization-to-a-marketplace-subscription)

- The billing details from your AWS account, such as the billing address and tax ID, are used. These details are managed through the [AWS Billing and Cost Management console](https://console.aws.amazon.com/billing).
- The subscription plan is managed through the AWS Marketplace. You can read more about this in the [Manage your subscription](https://supabase.com/docs/guides/platform/aws-marketplace/manage-your-subscription#manage-your-subscription-plan) guide.
- Charges will come from AWS rather than Supabase, using the default payment method set in your AWS account.
- The [Spend Cap](https://supabase.com/docs/guides/platform/cost-control#spend-cap) for the organization is disabled. The Spend Cap is not available for organizations managed through AWS.
- When you downgrade your plan to the Free Plan, all projects within the organization will be paused if you exceed the [free projects limit](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan).

### Linking an existing Supabase organization [\#](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup\#linking-an-existing-supabase-organization)

Linking an existing organization will result in the following:

- The organization will be upgraded or downgraded to the plan purchased on the AWS Marketplace.
- The organization’s billing cycle will be adjusted. The start date will be set to the date your marketplace subscription became active.
- The credit card you have on file with Supabase may receive a closing charge. This charge covers usage costs incurred up until the point when the marketplace subscription became active.

## Prerequisites for linking a Supabase organization to a marketplace subscription [\#](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup\#prerequisites-for-linking-a-supabase-organization-to-a-marketplace-subscription)

- The Supabase user must have the Owner or Admin role
- There must be no overdue invoices within the organization
- The organization must not already be managed through another marketplace (e.g. Vercel Marketplace)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/aws-marketplace/account-setup.mdx)

### Is this helpful?

NoYes

### On this page

[Implications of linking a Supabase organization to a marketplace subscription](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup#implications-of-linking-a-supabase-organization-to-a-marketplace-subscription) [Linking an existing Supabase organization](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup#linking-an-existing-supabase-organization) [Prerequisites for linking a Supabase organization to a marketplace subscription](https://supabase.com/docs/guides/platform/aws-marketplace/account-setup#prerequisites-for-linking-a-supabase-organization-to-a-marketplace-subscription)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)