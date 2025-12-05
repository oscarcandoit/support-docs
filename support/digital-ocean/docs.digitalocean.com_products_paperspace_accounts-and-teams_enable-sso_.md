---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/"
title: "How to Enable Single Sign-On (SSO) for Paperspace Teams | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
- Enable SSO

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Enable Single Sign-On (SSO) for Paperspace Teams

Validated on 14 Dec 2023 • Last edited on 13 Feb 2024

SAML support can be enabled for Paperspace Teams to allow users to use the same credentials across many websites including Paperspace.

Team Admin can set up SAML for their team using the majority of identity providers (IdPs) as long as they are compatible with the latest implementation of the SAML 2.0 specs. To get started, you set up an application with your chosen IdP, such as Google or Auth0, and administrator access to your Paperspace Team.

If you would like SAML enabled on your account, please contact your deployment specialist or fill out this form to connect with a member of the sales team.

## Setting Up SAML on Paperspace

In your Paperspace Console, Select “Manage All Teams” from the bottom-left menu, and select the team on which you’d like to enable. Choose “Single Sign-On” from the Team’s menu where there is a setup form that requires collecting information from your IdP to recognize Paperspace as a Service Provider.

Identity Provider Name is a name that you can choose for this configuration. It should be something unique but shareable with your team.
Identity Provider Issuer (Entity ID) is a name that is supplied to the identity provider. It might be used by the Identity Provider to verify that it is a trusted partner. Note this should not be confused with the Identity Provider Entity ID.
SAML SSO URL (Entry Point) is a unique URL for each application.
X.509 Certificate provided by your IdP can be uploaded or pasted into the text box.

Note
It is confusing that we both have Identity Provider Name and Identity Provider Issuer (Entity ID). They could be one and the same thing: Identity Provider Issuer (Entity ID) is the correct name for how we use Identity Provider Name internally, but externally Identity Provider Issuer (Entity ID) is being sent.

When you’ve completed these fields, click the Save button. The Service Provider Details are then generated in the section below the form. If you don’t yet have the SAML SSO URL (Entry Point), or your Identity Provider (IdP) requires you the Assertion Consumer Service (ACS) URL up front (for example this is true for the `Okta` setup), you can fill in anything for the SAML SSO URL (Entry Point) and wait with submitting a certificate. You can always add these details later.

![](https://docs.digitalocean.com/screenshots/paperspace/sso-overview.294e4a8ede90d2f639189b8610fe7fd231709609430a0968d0497789b1d750f1.png)

The Login URL and the Identity Provider Name should be shared with your team. This is necessary for them to login to Paperspace directly using SAML.

![](https://docs.digitalocean.com/screenshots/paperspace/sso-details.f9cc034759d85c6d0fa1360c4ffcb9c4ab0458010a628847eed4ff9ce27b4713.png)

You are provided with Metadata. This is used to configure your Identity Provider. The Assertion Consumer Service (ACS) URL, and the Name ID Format are the important parts. Though, Entity ID and Document ID might also be requested. Note at this point we don’t support any other formats.

## Logging in with SAML

Once your setup is complete and your users are configured in your Identity Provider your users can log in to Paperspace with their credentials using either the Login URL you provide to them, or by selecting Login with SAML on any Paperspace login page, where they are prompted to enter their Identity Provider Name and taken to the login page to authenticate.

![](https://docs.digitalocean.com/screenshots/paperspace/sso-sign-in.e4f7e3ef182853fdc816b844d7e122be6207dd6f4564a956bb083f5b11a4daf3.png)

This Login URL can also be added to your Identity Provider if you prefer an Identity Provider initiated login flow. Please see the docs of your Identity Provider for instructions on how to add this.

## Some Common SAML terms:

**Assertion:** data provided by the IdP that supplies one or more of the following statements to a service provider:

- Authentication statements assert that the user specified in the assertion actually did authenticate successfully, and what time they did so.
- Attribute statements supply attribute values pertaining to the user. The NameID attribute is required and specifies the username, but other attributes can be manually configured as well.
- Authorization decision statements declare that a request to allow the assertion subject to access the specified resource has been granted or denied
- Assertion Consumer Service (ACS): the service provider’s endpoint (URL) that is responsible for receiving and parsing a SAML assertion. Some service providers use a different term for the ACS. In the `Okta` SAML template, this is entered in the Single Sign On URL field.

**Attribute:** a set of data about a user, such as username, first name, employee ID, etc

**Audience Restriction:** a value within the SAML assertion that specifies who (and only who) the assertion is intended for. The “audience” is the service provider and is typically a URL but can technically be formatted as any string of data. If this value is not provided by the SP, try using the ACS

**Default Relay State:** the URL that users are directed to after a successful authentication through SAML.

**Endpoint:** the URL’s that are used when Service Providers and Identity Providers communicate to one another.

**Entity ID:** a globally unique name for an Identity Provider or a Service Provider. A unique `Okta` Entity ID is generated for each application, and is referred to as the Identity Provider Issuer in the `Okta` application’s Setup Instructions.

**Identity Provider (IdP):** the authority that verifies and asserts a user’s identity and access to a requested resource (the “Service Provider”)

**Metadata:** a set of information supplied by the IdP to the SP, and/or vice versa, in xml format.

- SP supplied metadata is typically provide the ACS, the Audience Restriction, the NameID format, and an x.509 certificate if the assertion needs to be encrypted. At this time, SP-supplied metadata files cannot be imported into `Okta`.
- IdP supplied metadata provides the Single Sign On URL, the Entity ID and the x.509 certificate file required by the SP to decrypt the assertion.

**NameID:** an attribute within the assertion that is used to specify the username

**Service Provider (SP):** the hosted resource or service that the user intends to access, such as Box, Workday, Salesforce, a custom application, etc.

**Single Sign On URL:** the endpoint that is dedicated to handling SAML transactions. In the `Okta` SAML template setup screen, the SSO URL refers to the service provider’s ACS.

In this article...

- [Setting Up SAML on Paperspace](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/#setting-up-saml-on-paperspace)
- [Logging in with SAML](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/#logging-in-with-saml)
- [Some Common SAML terms:](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/#some-common-saml-terms)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices