---
url: "https://supabase.com/docs/guides/platform/sso/gsuite"
title: "Set Up SSO with Google Workspace | Supabase Docs"
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

[Overview](https://supabase.com/docs/guides/platform/sso)
[SSO with Azure AD](https://supabase.com/docs/guides/platform/sso/azure)
[SSO with Google Workspace](https://supabase.com/docs/guides/platform/sso/gsuite)
[SSO with Okta](https://supabase.com/docs/guides/platform/sso/okta)

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
5. [Single Sign-On](https://supabase.com/docs/guides/platform/sso)
7. [SSO with Google Workspace](https://supabase.com/docs/guides/platform/sso/gsuite)

# Set Up SSO with Google Workspace

* * *

This feature is only available on the [Team and Enterprise Plans](https://supabase.com/pricing). If you are an existing Team or Enterprise Plan customer, continue with the setup below.

Looking for docs on how to add Single Sign-On support in your Supabase project? Head on over to [Single Sign-On with SAML 2.0 for Projects](https://supabase.com/docs/guides/auth/enterprise-sso/auth-sso-saml).

Supabase supports single sign-on (SSO) using Google Workspace (formerly known as G Suite).

## Step 1: Open the Google Workspace web and mobile apps console [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#google-workspace-console)

![Google Workspace: Web and mobile apps admin console](https://supabase.com/docs/img/sso-gsuite-step-01.png)

## Step 2: Choose to add custom SAML app [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#add-custom-saml-app)

From the _Add app_ button in the toolbar choose _Add custom SAML app_.

![Google Workspace: Web and mobile apps admin console, Add custom SAML app selected](https://supabase.com/docs/img/sso-gsuite-step-02.png)

## Step 3: Fill out app details [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#add-app-details)

The information you enter here is for visibility into your Google Workspace. You can choose any values you like. `Supabase` as a name works well for most use cases. Optionally enter a description.

![Google Workspace: Web and mobile apps admin console, Add custom SAML, App details screen](https://supabase.com/docs/img/sso-gsuite-step-03.png)

## Step 4: Download IdP metadata [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#download-idp-metadata)

This is a very important step. Click on _DOWNLOAD METADATA_ and save the file that was downloaded. You will need to upload this file later in [Step 10](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-metadata).

![Google Workspace: Web and mobile apps admin console, Add custom SAML, Google Identity Provider details screen](https://supabase.com/docs/img/sso-gsuite-step-04.png)

**Important: Make sure the certificate as shown on screen has at least 1 year before it expires. Mark down this date in your calendar so you will be reminded that you need to update the certificate without any downtime for your users.**

## Step 5: Add service provider details [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#add-service-provider-details)

Fill out these service provider details on the next screen.

| Detail | Value |
| --- | --- |
| ACS URL | `https://alt.supabase.io/auth/v1/sso/saml/acs` |
| Entity ID | `https://alt.supabase.io/auth/v1/sso/saml/metadata` |
| Start URL | `https://supabase.com/dashboard` |
| Name ID format | PERSISTENT |
| Name ID | _Basic Information > Primary email_ |

![Google Workspace: Web and mobile apps admin console, Add custom SAML, Service provider details screen](https://supabase.com/docs/img/sso-gsuite-step-05.png)

## Step 6: Configure attribute mapping [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#configure-attribute-mapping)

Attribute mappings allow Supabase to get information about your Google Workspace users on each login.

**A _Primary email_ to `email` mapping is required.** Other mappings shown below are optional and configurable depending on your Google Workspace setup. If in doubt, replicate the same config as shown.

Any changes you make from this screen will be used later in [Step 10: Configure Attribute Mapping](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-attributes).

![Google Workspace: Web and mobile apps admin console, Add custom SAML, Attribute mapping](https://supabase.com/docs/img/sso-gsuite-step-06.png)

## Step 7: Configure user access [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#configure-user-access)

You can configure which Google Workspace user accounts will get access to Supabase. This is important if you wish to limit access to your software engineering teams.

You can configure this access by clicking on the _User access_ card (or down-arrow). Follow the instructions on screen.

![Google Workspace: Web and mobile apps admin console, Supabase app screen](https://supabase.com/docs/img/sso-gsuite-step-08.png)

Changes from this step sometimes take a while to propagate across Google's systems. Wait at least 15 minutes before testing your changes.

## Step 8: Enable SSO in the Dashboard [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-enable-sso)

1. Visit the [SSO tab](https://supabase.com/dashboard/org/_/sso) under the Organization Settings page. ![SSO disabled](https://supabase.com/docs/img/sso-dashboard-disabled.png)

2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears. ![SSO enabled](https://supabase.com/docs/img/sso-dashboard-enabled.png)


## Step 9: Configure domains [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-configure-domain)

Enter one or more domains associated with your users email addresses (e.g., `supabase.com`).
These domains determine which users are eligible to sign in via SSO.

![Domain configuration](https://supabase.com/docs/img/sso-dashboard-configure-domain.png)

If your organization uses more than one email domain - for example, `supabase.com` for staff and `supabase.io` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.

![Domain configuration with multiple domains](https://supabase.com/docs/img/sso-dashboard-configure-domain-multi.png)

We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 10: Configure metadata [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-configure-metadata)

Upload the metadata file you downloaded in [Step 6](https://supabase.com/docs/guides/platform/sso/gsuite#download-idp-metadata) into the Metadata Upload File field.

![Metadata configuration with Google Workspace](https://supabase.com/docs/img/sso-dashboard-configure-metadata-gsuite.png)

## Step 11: Configure attribute mapping [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-configure-attributes)

Enter the SAML attributes you filled out in [Step 6](https://supabase.com/docs/guides/platform/sso/gsuite#configure-attribute-mapping) into the Attribute Mapping section.

![Attribute mapping configuration](https://supabase.com/docs/img/sso-dashboard-configure-attributes-generic.png)

If you did not customize your settings you may save some time by clicking the **G Suite** preset.

## Step 12: Join organization on signup (optional) [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-configure-autojoin)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.

![Auto-join disabled](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-disabled.png)

Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.

![Auto-join enable](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled.png)

When auto-join is enabled, you can choose the **default role** for new users:

![Auto-join role selection](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled-role.png)

Choose a role that fits the level of access you want to grant to new members.

Visit [access-control](https://supabase.com/docs/guides/platform/access-control) documentation for details about each role.

## Step 13: Save changes and test single sign-on [\#](https://supabase.com/docs/guides/platform/sso/gsuite\#dashboard-configure-save)

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Google Workspace account. They can do this by entering their email address on the [Sign in with SSO](https://supabase.com/dashboard/sign-in-sso) page.

If SSO sign-in doesn't work as expected, contact your Supabase support representative for assistance.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/sso/gsuite.mdx)

### Is this helpful?

NoYes

### On this page

[Step 1: Open the Google Workspace web and mobile apps console](https://supabase.com/docs/guides/platform/sso/gsuite#google-workspace-console) [Step 2: Choose to add custom SAML app](https://supabase.com/docs/guides/platform/sso/gsuite#add-custom-saml-app) [Step 3: Fill out app details](https://supabase.com/docs/guides/platform/sso/gsuite#add-app-details) [Step 4: Download IdP metadata](https://supabase.com/docs/guides/platform/sso/gsuite#download-idp-metadata) [Step 5: Add service provider details](https://supabase.com/docs/guides/platform/sso/gsuite#add-service-provider-details) [Step 6: Configure attribute mapping](https://supabase.com/docs/guides/platform/sso/gsuite#configure-attribute-mapping) [Step 7: Configure user access](https://supabase.com/docs/guides/platform/sso/gsuite#configure-user-access) [Step 8: Enable SSO in the Dashboard](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-enable-sso) [Step 9: Configure domains](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-domain) [Step 10: Configure metadata](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-metadata) [Step 11: Configure attribute mapping](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-attributes) [Step 12: Join organization on signup (optional)](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-autojoin) [Step 13: Save changes and test single sign-on](https://supabase.com/docs/guides/platform/sso/gsuite#dashboard-configure-save)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)