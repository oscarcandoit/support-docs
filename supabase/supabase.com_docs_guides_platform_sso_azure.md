---
url: "https://supabase.com/docs/guides/platform/sso/azure"
title: "Set Up SSO with Azure AD | Supabase Docs"
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
7. [SSO with Azure AD](https://supabase.com/docs/guides/platform/sso/azure)

# Set Up SSO with Azure AD

* * *

This feature is only available on the [Team and Enterprise Plans](https://supabase.com/pricing). If you are an existing Team or Enterprise Plan customer, continue with the setup below.

Looking for docs on how to add Single Sign-On support in your Supabase project? Head on over to [Single Sign-On with SAML 2.0 for Projects](https://supabase.com/docs/guides/auth/enterprise-sso/auth-sso-saml).

Supabase supports single sign-on (SSO) using Microsoft Azure AD.

## Step 1: Add and register an Enterprise application [\#](https://supabase.com/docs/guides/platform/sso/azure\#add-and-register-enterprise-application)

Open up the [Azure Active Directory](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview) dashboard for your Azure account.

Click the _Add_ button then _Enterprise application_.

![Azure AD console: Default Directory Overview](https://supabase.com/docs/img/sso-azure-step-01.png)

## Step 2: Choose to create your own application [\#](https://supabase.com/docs/guides/platform/sso/azure\#create-application)

You'll be using the custom enterprise application setup for Supabase.

![Azure AD console: Browse Azure AD Gallery, select: Create your own application](https://supabase.com/docs/img/sso-azure-step-02.png)

## Step 3: Fill in application details [\#](https://supabase.com/docs/guides/platform/sso/azure\#add-application-details)

In the modal titled _Create your own application_, enter a display name for Supabase. This is the name your Azure AD users will see when signing in to Supabase from Azure. `Supabase` works in most cases.

Make sure to choose the third option: _Integrate any other application you_
_don't find in the gallery (Non-gallery)_.

![Azure AD console: Create your own application modal](https://supabase.com/docs/img/sso-azure-step-03.png)

## Step 4: Set up single sign-on [\#](https://supabase.com/docs/guides/platform/sso/azure\#set-up-single-sign-on)

Before you get to assigning users and groups, which would allow accounts in Azure AD to access Supabase, you need to configure the SAML details that allows Supabase to accept sign in requests from Azure AD.

![Azure AD console: Supabase custom enterprise application, selected Set up single sign-on](https://supabase.com/docs/img/sso-azure-step-04.png)

## Step 5: Select SAML single sign-on method [\#](https://supabase.com/docs/guides/platform/sso/azure\#saml-sso)

Supabase only supports the SAML 2.0 protocol for Single Sign-On, which is an industry standard.

![Azure AD console: Supabase application, Single sign-on configuration screen, selected SAML](https://supabase.com/docs/img/sso-azure-step-05.png)

## Step 6: Upload SAML-based sign-on metadata file [\#](https://supabase.com/docs/guides/platform/sso/azure\#upload-saml-metadata)

First you need to download Supabase's SAML metadata file. Click the button below to initiate a download of the file.

[Download Supabase SAML Metadata File](https://alt.supabase.io/auth/v1/sso/saml/metadata?download=true)

Alternatively, visit this page to initiate a download: `https://alt.supabase.io/auth/v1/sso/saml/metadata?download=true`

Click on the _Upload metadata file_ option in the toolbar and select the file you just downloaded.

![Azure AD console: Supabase application, SAML-based Sign-on screen, selected Upload metadata file button](https://supabase.com/docs/img/sso-azure-step-06-1.png)

All of the correct information should automatically populate the _Basic SAML Configuration_ screen as shown.

![Azure AD console: Supabase application, SAML-based Sign-on screen, Basic SAML Configuration shown](https://supabase.com/docs/img/sso-azure-step-06-2.png)

**Make sure you input these additional settings.**

| Setting | Value |
| --- | --- |
| Sign on URL | `https://supabase.com/dashboard/sign-in-sso` |
| Relay State | `https://supabase.com/dashboard` |

Finally, click the _Save_ button to save the configuration.

## Step 7: Obtain metadata URL [\#](https://supabase.com/docs/guides/platform/sso/azure\#idp-metadata-url)

Save the link under **App Federation Metadata URL** in \*section 3 **SAML Certificates\***. You will need to enter this URL later in [Step 10](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-metadata).

![Azure AD console: Supabase application, SAML Certificates card shown, App Federation Metadata Url highlighted](https://supabase.com/docs/img/sso-azure-step-07.png)

## Step 8: Enable SSO in the Dashboard [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-enable-sso)

1. Visit the [SSO tab](https://supabase.com/dashboard/org/_/sso) under the Organization Settings page. ![SSO disabled](https://supabase.com/docs/img/sso-dashboard-disabled.png)

2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears. ![SSO enabled](https://supabase.com/docs/img/sso-dashboard-enabled.png)


## Step 9: Configure domains [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-configure-domain)

Enter one or more domains associated with your users email addresses (e.g., `supabase.com`).
These domains determine which users are eligible to sign in via SSO.

![Domain configuration](https://supabase.com/docs/img/sso-dashboard-configure-domain.png)

If your organization uses more than one email domain - for example, `supabase.com` for staff and `supabase.io` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.

![Domain configuration with multiple domains](https://supabase.com/docs/img/sso-dashboard-configure-domain-multi.png)

We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 10: Configure metadata [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-configure-metadata)

Enter the metadata URL you obtained from [Step 7](https://supabase.com/docs/guides/platform/sso/azure#idp-metadata-url) into the Metadata URL field:

![Metadata configuration with Azure AD](https://supabase.com/docs/img/sso-dashboard-configure-metadata-azure.png)

## Step 11: Configure attribute mapping [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-configure-attributes)

Fill out the Attribute Mapping section using the **Azure** preset.

![Attribute mapping configuration](https://supabase.com/docs/img/sso-dashboard-configure-attributes-azure.png)

## Step 12: Join organization on signup (optional) [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-configure-autojoin)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.

![Auto-join disabled](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-disabled.png)

Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.

![Auto-join enable](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled.png)

When auto-join is enabled, you can choose the **default role** for new users:

![Auto-join role selection](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled-role.png)

Choose a role that fits the level of access you want to grant to new members.

Visit [access-control](https://supabase.com/docs/guides/platform/access-control) documentation for details about each role.

## Step 13: Save changes and test single sign-on [\#](https://supabase.com/docs/guides/platform/sso/azure\#dashboard-configure-save)

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Azure AD account. They can do this by entering their email address on the [Sign in with SSO](https://supabase.com/dashboard/sign-in-sso) page.

If SSO sign-in doesn't work as expected, contact your Supabase support representative for assistance.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/sso/azure.mdx)

### Is this helpful?

NoYes

### On this page

[Step 1: Add and register an Enterprise application](https://supabase.com/docs/guides/platform/sso/azure#add-and-register-enterprise-application) [Step 2: Choose to create your own application](https://supabase.com/docs/guides/platform/sso/azure#create-application) [Step 3: Fill in application details](https://supabase.com/docs/guides/platform/sso/azure#add-application-details) [Step 4: Set up single sign-on](https://supabase.com/docs/guides/platform/sso/azure#set-up-single-sign-on) [Step 5: Select SAML single sign-on method](https://supabase.com/docs/guides/platform/sso/azure#saml-sso) [Step 6: Upload SAML-based sign-on metadata file](https://supabase.com/docs/guides/platform/sso/azure#upload-saml-metadata) [Step 7: Obtain metadata URL](https://supabase.com/docs/guides/platform/sso/azure#idp-metadata-url) [Step 8: Enable SSO in the Dashboard](https://supabase.com/docs/guides/platform/sso/azure#dashboard-enable-sso) [Step 9: Configure domains](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-domain) [Step 10: Configure metadata](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-metadata) [Step 11: Configure attribute mapping](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-attributes) [Step 12: Join organization on signup (optional)](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-autojoin) [Step 13: Save changes and test single sign-on](https://supabase.com/docs/guides/platform/sso/azure#dashboard-configure-save)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)