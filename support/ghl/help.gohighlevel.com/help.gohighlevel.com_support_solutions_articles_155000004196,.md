---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004196,"
title: " How to Use Custom Menu Links in SaaS Plans : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004196,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004196,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
   - [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
6. How to Use Custom Menu Links in SaaS Plans

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

# How to Use Custom Menu Links in SaaS Plans

Modified on: Mon, 11 Aug, 2025 at 3:30 AM

How to Boost Your SaaS Offering with Custom Menu Links - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Boost Your SaaS Offering with Custom Menu Links](https://www.youtube.com/watch?v=MFBThFJHCfs)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=MFBThFJHCfs&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:53
•Live

•

This article explains how to use Custom Menu Links (CMLs) in SaaS plans to streamline the process of adding 3rd-party solutions to HighLevel. With this feature, agencies can automatically apply CML configurations to new sub-accounts when they subscribe to a specific SaaS plan, improving efficiency and enhancing SaaS offerings.

* * *

**TABLE OF CONTENTS**

- [What Are Custom Menu Links?](https://help.gohighlevel.com/support/solutions/articles/155000004196,#What-Are-Custom-Menu-Links?)
  - [Benefits Of Custom Menu Links](https://help.gohighlevel.com/support/solutions/articles/155000004196,#Benefits-Of-Custom-Menu-Links)
  - [Create Custom Menu Links](https://help.gohighlevel.com/support/solutions/articles/155000004196,#Create-Custom-Menu-Links)
  - [Getting the user's context within the Custom Menu Link](https://help.gohighlevel.com/support/solutions/articles/155000004196,#Getting-the-user's-context-within-the-Custom-Menu-Link)

  - [How to Add Custom Menu Links in SaaS Plans](https://help.gohighlevel.com/support/solutions/articles/155000004196,#How-to-Add-Custom-Menu-Links-in-SaaS-Plans)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000004196,#Frequently-Asked-Questions)

# **What Are Custom Menu Links?**

Custom Menu Links (CMLs) allow agencies to embed 3rd-party solutions, such as AI tools, inventory management systems, or virtual assistant tools, directly into the HighLevel app. By linking these tools through iframes, agencies can offer an integrated experience to their users.

* * *

## **Benefits Of Custom Menu Links**

Many SaaS businesses offer additional solutions alongside HighLevel features as part of their service package. With this functionality, Custom Menu Links can now be tied directly to SaaS plans. When a new sub-account subscribes to a plan, the associated Custom Menu Links are automatically applied without requiring manual setup.

- **Auto Deployment**: Automating CML setup for new sub-accounts eliminates manual configuration.

- **Enhanced User Experience**: Embedded solutions feel like a native part of the HighLevel app.

- **Consistency**: Ensures that all sub-accounts subscribing to a plan receive the same setup.

- **Plan-Level Configuration**: Add CMLs directly to SaaS plans, ensuring all new sub-accounts inherit the links.

- **Easy Updates**: Add or modify CMLs in existing SaaS plans, and changes will apply to all future sub-accounts that subscribe to the plan.

- **Scalability**: Simplifies onboarding as your SaaS offering grows.

* * *

## **Create Custom Menu Links**

Navigate to **Agency Account > Settings > Custom Menu Links** \> Create New or Edit. Fill out the settings. In the URL field you can use **Custom Values**, for example: http://url.com/{{location.id}}?value={{custom\_values.my\_value}}. These {{string}} are called Merge Fields and a full list is here: [List of Merge Fields](https://help.gohighlevel.com/en/support/solutions/articles/48001078171).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048499152/original/JRURct4F_iUPvfhPe1W3ng8flnjjEvlPKA.png?1750269694)

* * *

## **Getting the user's context within the Custom Menu Link**

While creating the Custom Menu Link, you can set the URL like this:

https://test.com/test?fname={{user.first\_name}}&lname={{user.last\_name}}&location\_id={{location.id}}&custom\_value\_example={{custom\_values.example\_field\_name}}

This way, when a user clicks on the link, HighLevel will dynamically replace the param variables with actual values based on the user's context. You can extract these params from the URL and get the user's context.

**Supported params to CML**

user.first\_name

user.last\_name

user.name

user.phone

user.email

location.id

location.name

location.city

location.state

location.country

location.address

location.email

location.phone

location.postal\_code

location.full\_address

location.website

location.logo\_url

location\_owner.first\_name

location\_owner.last\_name

location\_owner.email

custom\_values.{CUSTOM\_VALUE\_NAME}

## **How to Add Custom Menu Links in SaaS Plans**

### **Step 1:** Create a New SaaS Plan

- Log in to your HighLevel agency dashboard.

- Navigate to the **SaaS Configurations** section.

- Select **Create New Plan.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925372/original/c564q4W1JOz5DAJIuSvQMu9e9MpGO1rYjg.png?1732131751)

### **Optional:** Update Existing SaaS Plans

- For existing plans, you can add new Custom Menu Links.

- Sub-accounts subscribing to these updated plans in the future will automatically receive the new CMLs.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925363/original/ldJfpgDfKghGztYkQh83822u3uZZTWuo4Q.png?1732131734)

### **Step 2:** Add Custom Menu Links

- Go to the **Custom Menu Links** section within the SaaS plan configuration.

- Add the 3rd-party solutions you want to embed using the iframe URLs.

- Assign names and organize the CMLs as needed for the end-user experience.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925318/original/sNXOkIbtL_Drx4AR-7MMREIkW8i-3c5s_w.png?1732131622)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925410/original/C0W5LvDMwm24BnY07Zhm3cBCMPXuMsufRw.png?1732131786)

### **Step 3:** Save and Apply the Plan

- Save your changes to the SaaS plan.

- Any new sub-accounts subscribing to this plan will automatically receive the configured Custom Menu Links.

* * *

## **Frequently Asked Questions**

**Q: What happens to existing sub-accounts when I update a SaaS plan with new Custom Menu Links?**

Updates to a SaaS plan only apply to new sub-accounts subscribing to the plan. Existing sub-accounts must be manually updated with the new CMLs.

**Q: Can I edit or remove Custom Menu Links after they are applied to sub-accounts?**

Yes, you can edit or remove Custom Menu Links in SaaS plans, but changes will only affect new sub-accounts subscribing to the plan.

**Q: Are Custom Menu Links limited to specific 3rd-party solutions?**

No, you can embed any tool or solution that supports iframes via a URL.

**Q: Can I use this feature for non-SaaS accounts?**

Custom Menu Links are primarily intended for SaaS plans. For non-SaaS accounts, CMLs must be manually added.

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

- [How to Use Special Prices for SaaS Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000006380-how-to-use-special-prices-for-saas-sub-accounts)
- [Customizing HighLevel Menus: A Guide to Custom Menu Links](https://help.gohighlevel.com/support/solutions/articles/48001185767-customizing-highlevel-menus-a-guide-to-custom-menu-links)
- [How to Share Snapshots](https://help.gohighlevel.com/support/solutions/articles/48000982513-how-to-share-snapshots)
- [Webhook: New SaaS Plan Created](https://help.gohighlevel.com/support/solutions/articles/155000005897-webhook-new-saas-plan-created)
- [Custom Payment Providers in SaaS Mode](https://help.gohighlevel.com/support/solutions/articles/155000006276-custom-payment-providers-in-saas-mode)
- [Public API Endpoints for SaaS Configurator](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004196,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004196-how-to-use-custom-menu-links-in-saas-plans/hit)