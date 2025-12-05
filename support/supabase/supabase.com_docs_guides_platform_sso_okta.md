---
url: "https://supabase.com/docs/guides/platform/sso/okta"
title: "Set Up SSO with Okta | Supabase Docs"
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
7. [SSO with Okta](https://supabase.com/docs/guides/platform/sso/okta)

# Set Up SSO with Okta

* * *

This feature is only available on the [Team and Enterprise Plans](https://supabase.com/pricing). If you are an existing Team or Enterprise Plan customer, continue with the setup below.

Looking for docs on how to add Single Sign-On support in your Supabase project? Head on over to [Single Sign-On with SAML 2.0 for Projects](https://supabase.com/docs/guides/auth/enterprise-sso/auth-sso-saml).

Supabase supports single sign-on (SSO) using Okta.

## Step 1: Choose to create an app integration in the applications dashboard [\#](https://supabase.com/docs/guides/platform/sso/okta\#create-app-integration)

Navigate to the Applications dashboard of the Okta admin console. Click _Create App Integration_.

![Okta dashboard: Create App Integration button](https://supabase.com/docs/img/sso-okta-step-01.png)

## Step 2: Choose SAML 2.0 in the app integration dialog [\#](https://supabase.com/docs/guides/platform/sso/okta\#create-saml-app)

Supabase supports the SAML 2.0 SSO protocol. Choose it from the _Create a new app integration_ dialog.

![Okta dashboard: Create new app integration dialog](https://supabase.com/docs/img/sso-okta-step-02.png)

## Step 3: Fill out general settings [\#](https://supabase.com/docs/guides/platform/sso/okta\#add-general-settings)

The information you enter here is for visibility into your Okta applications menu. You can choose any values you like. `Supabase` as a name works well for most use cases.

![Okta dashboard: Create SAML Integration wizard](https://supabase.com/docs/img/sso-okta-step-03.png)

## Step 4: Fill out SAML settings [\#](https://supabase.com/docs/guides/platform/sso/okta\#add-saml-settings)

These settings let Supabase use SAML 2.0 properly with your Okta application. Make sure you enter this information exactly as shown on in this table.

| Setting | Value |
| --- | --- |
| Single sign-on URL | `https://alt.supabase.io/auth/v1/sso/saml/acs` |
| Use this for Recipient URL and Destination URL | ✔️ |
| Audience URI (SP Entity ID) | `https://alt.supabase.io/auth/v1/sso/saml/metadata` |
| Default `RelayState` | `https://supabase.com/dashboard` |
| Name ID format | `EmailAddress` |
| Application username | Email |
| Update application username on | Create and update |

![Okta dashboard: Create SAML Integration wizard, Configure SAML step](https://supabase.com/docs/img/sso-okta-step-04.png)

## Step 5: Fill out attribute statements [\#](https://supabase.com/docs/guides/platform/sso/okta\#add-attribute-statements)

Attribute Statements allow Supabase to get information about your Okta users on each login.

**A `email` to `user.email` statement is required.** Other mappings shown below are optional and configurable depending on your Okta setup. If in doubt, replicate the same config as shown. You will use this mapping later in [Step 10](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-attributes).

![Okta dashboard: Attribute Statements configuration screen](https://supabase.com/docs/img/sso-okta-step-05.png)

## Step 6: Obtain IdP metadata URL [\#](https://supabase.com/docs/guides/platform/sso/okta\#idp-metadata-url)

Supabase needs to finalize enabling single sign-on with your Okta application.

To do this scroll down to the _SAML Signing Certificates_ section on the _Sign On_ tab of the _Supabase_ application. Pick the the _SHA-2_ row with an _Active_ status. Click on the _Actions_ dropdown button and then on the _View IdP Metadata_.

This will open up the SAML 2.0 Metadata XML file in a new tab in your browser. You will need to enter this URL later in [Step 9](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-metadata).

The link usually has this structure: `https://<okta-org>.okta.com/apps/<app-id>/sso/saml/metadata`

![Okta dashboard: SAML Signing Certificates, Actions button highlighted](https://supabase.com/docs/img/sso-okta-step-06.png)

## Step 7: Enable SSO in the Dashboard [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-enable-sso)

1. Visit the [SSO tab](https://supabase.com/dashboard/org/_/sso) under the Organization Settings page. ![SSO disabled](https://supabase.com/docs/img/sso-dashboard-disabled.png)

2. Toggle **Enable Single Sign-On** to begin configuration. Once enabled, the configuration form appears. ![SSO enabled](https://supabase.com/docs/img/sso-dashboard-enabled.png)


## Step 8: Configure domains [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-configure-domain)

Enter one or more domains associated with your users email addresses (e.g., `supabase.com`).
These domains determine which users are eligible to sign in via SSO.

![Domain configuration](https://supabase.com/docs/img/sso-dashboard-configure-domain.png)

If your organization uses more than one email domain - for example, `supabase.com` for staff and `supabase.io` for contractors - you can add multiple domains here. All listed domains will be authorized for SSO sign-in.

![Domain configuration with multiple domains](https://supabase.com/docs/img/sso-dashboard-configure-domain-multi.png)

We do not permit use of public domains like `gmail.com`, `yahoo.com`.

## Step 9: Configure metadata [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-configure-metadata)

Enter the metadata URL you obtained from [Step 6](https://supabase.com/docs/guides/platform/sso/okta#idp-metadata-url) into the Metadata URL field:

![Metadata configuration with Okta](https://supabase.com/docs/img/sso-dashboard-configure-metadata-okta.png)

## Step 10: Configure attribute mapping [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-configure-attributes)

Enter the SAML attributes you filled out in [Step 5](https://supabase.com/docs/guides/platform/sso/okta#add-attribute-statements) into the Attribute Mapping section.

![Attribute mapping configuration](https://supabase.com/docs/img/sso-dashboard-configure-attributes.png)

If you did not customize your settings you may save some time by clicking the **Okta** preset.

## Step 11: Join organization on signup (optional) [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-configure-autojoin)

By default this setting is disabled, users logging in via SSO will not be added to your organization automatically.

![Auto-join disabled](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-disabled.png)

Toggle this on if you want SSO-authenticated users to be **automatically added to your organization** when they log in via SSO.

![Auto-join enable](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled.png)

When auto-join is enabled, you can choose the **default role** for new users:

![Auto-join role selection](https://supabase.com/docs/img/sso-dashboard-configure-autojoin-enabled-role.png)

Choose a role that fits the level of access you want to grant to new members.

Visit [access-control](https://supabase.com/docs/guides/platform/access-control) documentation for details about each role.

## Step 12: Save changes and test single sign-on [\#](https://supabase.com/docs/guides/platform/sso/okta\#dashboard-configure-save)

When you click **Save changes**, your new SSO configuration is applied immediately. From that moment, any user with an email address matching one of your configured domains who visits your organization's sign-in URL will be routed through the SSO flow.

We recommend asking a few users to test signing in via their Okta account. They can do this by entering their email address on the [Sign in with SSO](https://supabase.com/dashboard/sign-in-sso) page.

If SSO sign-in doesn't work as expected, contact your Supabase support representative for assistance.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/sso/okta.mdx)

### Is this helpful?

NoYes

### On this page

[Step 1: Choose to create an app integration in the applications dashboard](https://supabase.com/docs/guides/platform/sso/okta#create-app-integration) [Step 2: Choose SAML 2.0 in the app integration dialog](https://supabase.com/docs/guides/platform/sso/okta#create-saml-app) [Step 3: Fill out general settings](https://supabase.com/docs/guides/platform/sso/okta#add-general-settings) [Step 4: Fill out SAML settings](https://supabase.com/docs/guides/platform/sso/okta#add-saml-settings) [Step 5: Fill out attribute statements](https://supabase.com/docs/guides/platform/sso/okta#add-attribute-statements) [Step 6: Obtain IdP metadata URL](https://supabase.com/docs/guides/platform/sso/okta#idp-metadata-url) [Step 7: Enable SSO in the Dashboard](https://supabase.com/docs/guides/platform/sso/okta#dashboard-enable-sso) [Step 8: Configure domains](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-domain) [Step 9: Configure metadata](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-metadata) [Step 10: Configure attribute mapping](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-attributes) [Step 11: Join organization on signup (optional)](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-autojoin) [Step 12: Save changes and test single sign-on](https://supabase.com/docs/guides/platform/sso/okta#dashboard-configure-save)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)