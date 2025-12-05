---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator"
title: " Public API Endpoints for SaaS Configurator : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
4. [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
   - [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
6. Public API Endpoints for SaaS Configurator

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Public API Endpoints for SaaS Configurator

Modified on: Tue, 29 Jul, 2025 at 10:05 AM

This article will guide you through the set of public APIs available for the SaaS Configurator in HighLevel. These APIs unlock powerful opportunities for developers and agency power users to integrate, automate, and build on top of the SaaS infrastructure.

* * *

**TABLE OF CONTENTS**

- [Who It’s For and Why This Matters](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#Who-It%E2%80%99s-For-and-Why-This-Matters)
- [What is the SaaS Configurator Public API?](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#What-is-the-SaaS-Configurator-Public-API?%C2%A0)
- [Key Benefits of SaaS Configurator Public API](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#Key-Benefits-of-SaaS-Configurator-Public-API%C2%A0)
- [New SaaS Configurator API Endpoints](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#New-SaaS-Configurator-API-Endpoints%C2%A0)
  - [1\. Get All Agency Plans](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#1.-Get-All-Agency-Plans)
  - [2\. Get Location Subscription Details](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#2.-Get-Location-Subscription-Details)
  - [3\. Bulk Enable SaaS](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#3.-Bulk-Enable-SaaS)
  - [4\. Get SaaS Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#4.-Get-SaaS-Sub-Accounts%C2%A0)
  - [5\. Get SaaS Plan Details](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#5.-Get-SaaS-Plan-Details%C2%A0)
- [Target Use Cases for Developers and Agencies](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#Target-Use-Cases-for-Developers-and-Agencies)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#Frequently-Asked-Questions)
- [Next Steps](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator#Next-Steps%C2%A0)

* * *

## **Who It’s For and Why This Matters**

This gives you the flexibility to integrate HighLevel into your broader business systems, more automation, less manual work, and total control over your SaaS business flow.

This is for:

- Marketplace developers building on HighLevel.

- Advanced agencies looking to automate SaaS onboarding, billing management, and reporting.

- Anyone building custom dashboards, apps, or admin tools.

* * *

## **What is the SaaS Configurator Public API?**

Custom integrations and large‑scale automations often require programmatic access instead of manual clicks. The SaaS Configurator Public API lets agencies and developers query plans, manage SaaS subscriptions, and enable SaaS mode for multiple sub‑accounts directly from code—unlocking faster onboarding, richer analytics, and seamless third‑party workflows.

* * *

## **Key Benefits of SaaS Configurator Public API**

The SaaS Configurator Public API dramatically expands your flexibility to control and scale SaaS operations.

Leveraging these endpoints gives you a competitive edge by reducing friction and scaling operations.

- **Deep integrations:** Connect HighLevel with external apps, CRMs, or partner platforms without manual data exports.

- **Automated provisioning:** Trigger plan assignments, renewals, and upgrades through scripts or iPaaS tools.

- **Bulk SaaS enablement:** Onboard hundreds of sub‑accounts in minutes via a single call.

- **Real‑time analytics:** Pull live plan and subscription data into custom dashboards.

- **Operational efficiency:** Eliminate repetitive tasks and cut human error in large‑scale migrations.


* * *

## **New SaaS Configurator API Endpoints**

These new API endpoints provide targeted functionality for developers managing SaaS workflows.

```
Important Quick‑Start Note: Before calling any SaaS Configurator endpoint, ensure that SaaS Mode is enabled for your agency, you’ve created OAuth 2.0 credentials with the saas/* scope, obtained an access token, and you observe the global rate limit of 10 requests per second. Refer to the SaaS Configurator Onboarding guide and the  HighLevel API for full step‑by‑step details.
```

### **1\. Get All Agency Plans**

Fetch all SaaS plans configured for your agency. This endpoint is ideal for dynamically rendering plan selection menus or building plan comparison tools. For more, refer to **[Get All Agency Plans](https://highlevel.stoplight.io/docs/integrations/6e881fafa0705-get-agency-plans)**

- **Use case:** Let external apps display up-to-date plan options in real-time.

- **Example endpoint: GET /saas/agency/plans**

- **Response example:** JSON array containing plan IDs, names, prices, and included features.


### **2\. Get Location Subscription Details**

Retrieve subscription status, plan details, payment provider, and billing data for a specific sub-account. For more, refer to **[Get Location Subscription Details](https://highlevel.stoplight.io/docs/integrations/481fe9008cd60-get-location-subscription-details)**

- **Use case:** Sync subscription data into custom CRM dashboards.

- **Example endpoint: GET /saas/location/{locationId}/subscription**

- **Response example:** JSON object with plan ID, active status, next billing date, etc.

### **3\. Bulk Enable SaaS**

Programmatically enable SaaS mode for multiple sub-accounts in one API call. Perfect for large-scale onboarding or agency migrations. For more, refer to **[Bulk Enable SaaS](https://highlevel.stoplight.io/docs/integrations/02f9f1069c65b-bulk-enable-saa-s)**

- **Use case:** Onboard hundreds of sub-accounts into SaaS with consistent configurations.

- **Example endpoint: POST /saas/bulk-enable**

- **Payload example:** JSON array of sub-account IDs with plan assignments.

### **4\. Get SaaS Sub-Accounts**

Return a list of all sub-accounts currently operating in SaaS mode for your agency. For more, refer to **[Get SaaS Sub-Accounts](https://highlevel.stoplight.io/docs/integrations/4a361e6feb52a-get-saa-s-locations)**

- **Use case:** Build dashboards that monitor active SaaS adoption.

- **Example endpoint: GET /saas/agency/sub-accounts**

- **Response example:** JSON array listing sub-account IDs, names, and active plan info.

### **5\. Get SaaS Plan Details**

Query detailed configuration and pricing information for a specific SaaS plan. For more, refer to **[Get SaaS Plan Details](https://highlevel.stoplight.io/docs/integrations/ee63ae2eedd38-get-saa-s-plan)**

- **Use cas** **e:** Display exact feature availability and pricing breakdown on custom pricing pages.

- **Example endpoint:** **GET /saas/agency/plan/{planId}**

- **Response example:** JSON object detailing pricing, usage limits, included features, and terms.

* * *

## **Target Use Cases for Developers and Agencies**

These APIs enable a wide range of possibilities for agencies and third-party developers.

- Marketplace partners can build apps that automatically provision SaaS features based on customer sign-ups.

- Agencies can create internal onboarding automations that assign SaaS plans without human touchpoints.

- Build custom dashboards or admin tools to display plan adoption metrics and billing statuses.

- Automate large migrations when transitioning many sub-accounts to SaaS offerings at once.

- Integrate SaaS billing data into other business analytics tools or external CRMs.


* * *

## **Frequently Asked Questions**

**Q: Do I need special permissions to use these APIs?**

Yes. You need to have API credentials with the appropriate scopes. Check your API authentication settings for more information.

**Q: Can I create or delete SaaS plans via API?**

Currently, you can only retrieve (read) plan configurations. Creating or deleting plans must be done in the SaaS Configurator UI.

**Q: Are these APIs available in all agency accounts?**

These APIs are available to agencies with SaaS mode enabled and API access permissions.

**Q: Is rate limiting applied to these endpoints?**

Yes. Standard High-Level API rate limits apply. Refer to API Rate Limit Guidelines for details.

* * *

## **Next Steps**

- Explore the full API documentation and test endpoints using your agency’s sandbox.

- Plan out potential automations or integrations your team can implement using these new endpoints.

- Start integrating these APIs into custom dashboards, apps, or internal tools to enhance your SaaS operational workflows.

- Share feedback with the HighLevel team to help shape future API capabilities and improvements.

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [SaaS Mode - Full Setup Guide + FAQ](https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq)
- [Activate SaaS Mode, Request Payment, and Configure Phone Rebilling](https://help.gohighlevel.com/support/solutions/articles/48001177740-activate-saas-mode-request-payment-and-configure-phone-rebilling)
- [SaaS Mode Sub-Accounts Are Not Being Generated](https://help.gohighlevel.com/support/solutions/articles/48001183981-saas-mode-sub-accounts-are-not-being-generated)
- [SaaS User Level Permissions Vs Sub-Account Level Permissions](https://help.gohighlevel.com/support/solutions/articles/48001184431-saas-user-level-permissions-vs-sub-account-level-permissions)
- [Using Stripe Checkout Pages For SaaS Mode Plans](https://help.gohighlevel.com/support/solutions/articles/48001187056-using-stripe-checkout-pages-for-saas-mode-plans)
- [Convert Existing Sub-Account to SaaS Mode Subscription Plan](https://help.gohighlevel.com/support/solutions/articles/48001188055-convert-existing-sub-account-to-saas-mode-subscription-plan)

## Related Articles

- [HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)
- [Webhook: New SaaS Plan Created](https://help.gohighlevel.com/support/solutions/articles/155000005897-webhook-new-saas-plan-created)
- [Documents & Contracts: Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis)
- [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace)
- [Conversation AI Public API](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api)
- [Manychat to HighLevel Integration](https://help.gohighlevel.com/support/solutions/articles/48001158874-manychat-to-highlevel-integration)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator/hit)