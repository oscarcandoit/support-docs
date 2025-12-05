---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm"
title: " How to integrate Razorpay  : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Payment Settings & Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000905)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Payment Settings & Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000905)
6. How to integrate Razorpay within the CRM

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

# How to integrate Razorpay within the CRM

Modified on: Wed, 29 Oct, 2025 at 4:37 AM

How to Integrate Razorpay with Your Calendar Bookings - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Integrate Razorpay with Your Calendar Bookings](https://www.youtube.com/watch?v=MhUZJ2Z-j7Q)

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

[Watch on](https://www.youtube.com/watch?v=MhUZJ2Z-j7Q&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:38
•Live

•

Business users are able to process payments via Razorpay, a payment provider popular in India. This integration is available as a marketplace application under App Marketplace menu inside a sub-account and also available upon clicking on the Search for More options inside Payments -> Integrations

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996886/original/cGM38lkSCd8himqlO0oJsISt_rPGSvI_eQ.png?1717409062)

The integration provides capabilities to accept one time, custom amounts as well as recurring payments across all channels like order forms, invoices, payment links, forms, contacts page among others. This also provides subscription management like cancellation, updating a card on file or refund related capabilities

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996913/original/24M_t65AjM_C10oGXduK3C897S57ED9Jvg.png?1717409084)

Sub-account users will be able to install the application from the App Marketplace, authenticate using the necessary API keys, and grant necessary permissions to start accepting payments using Razorpay.

To successfully connect Razorpay with your system, please follow these four essential steps:

1. **Install the Razorpay App**

Navigate to the **App Marketplace** and install the Razorpay application.

2. **Authenticate Using API Keys**

Copy your Razorpay API keys from the Razorpay dashboard (`Accounts & Settings → API Keys`) and paste them into the app authentication page.

3. **Configure Webhooks**

In your Razorpay dashboard (`Accounts & Settings → Webhooks`), add the following Webhook URL:

`https://backend.leadconnectorhq.com/razorpay/webhook`

Be sure to enable **all payment-related events** for proper syncing.

4. **Register and Whitelist Your Domain**

   - In your GHL dashboard, go to `Settings → Business Profile → Branded Domain` and register the domain you're using. Make sure to verify and click on update information.

   - Next, log in to your Razorpay dashboard and go to `Accounts & Settings → Business Website Details → Add Additional Website/App Details`.

     Add the same branded domain here. Razorpay will verify and enable it.


     > **Note**: Razorpay only allows payment acceptance from domains that have been whitelisted on their dashboard.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997128/original/t9TZ7tccQzpZRWN43mOia_7L36jxKsgjJA.png?1717409204)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997230/original/dPoQMqwLdRm-suaWk-lrOlU8iKKfIcRorw.png?1717409258)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371865/original/0K6GPMGTrW4t-SZJsA4pnDxEnDfOMM9k5w.png?1753358687)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371729/original/ZyWe2x3yglTf1I1OQZ4tpWw-MNA6oBHSqw.png?1753358576)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371757/original/9iLBTndWU4xo2kimBb9BS1hPgxMToZjcfw.png?1753358602)

Once the app is installed, the Authentication page would be displayed which would require you to plug in your API keys from the Razorpay dashboard. Navigate to **Accounts & Settings -> API keys** to get the API keys from your Razorpay dashboard.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026999032/original/3zOKWp0Fvr9avNgbDH-bVS_c2Mnt-LBe4Q.png?1717410595)

For smooth functioning of the integration in fetching the transaction statuses from Razorpay, it is required that you also paste the given link in your razorpay dashboard under Webhooks ( **Accounts & Settings -> Webhooks**). Make sure that you select the following webhooks events to not lose out on any feature

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027000787/original/4a6-JrR2U35cs14zYq_UoWzPW9ivayIGjQ.png?1717411942)

Also, add any branded domain that you are using inside the Razorpay dashboard ( **Accounts & Settings -> Business website details**)

The application would in no way differ from the existing payment integrations like Stripe/NMI/ [Authorize.net](http://authorize.net/) and would have full capabilities for payments including post purchase automations like automated sales receipts, refunds, payment received and order submitted triggers or giving discounts via coupon codes

**FAQs**

**Q - I have done the integration, but while accepting payment I am getting an email from Razorpay saying - payment attempted on your merchant ID - XXXX from web domain - link.fastpaydirect.com has failed as it is not registered. Please contact risk-notification@razorpay.com for more details.**

**A:** This error occurs because Razorpay restricts payment processing from unregistered or unverified domains. Each merchant ID on Razorpay must be mapped to a whitelisted domain as part of their [website compliance policy](https://razorpay.com/docs/payments/dashboard/account-settings/business-website-details/).

By default, GHL uses **link.fastpaydirect.com** as its branded domain, which is whitelisted only for GHL’s own merchant account. It will not work with your Razorpay keys.

To resolve this, you need to **register your own branded domain** in GHL (as in step 4). Once your domain is connected, Razorpay recognizes it as part of your whitelisted setup, and payments will process successfully.

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

- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Adding PayPal Buttons to Payment Elements](https://help.gohighlevel.com/support/solutions/articles/155000004254-adding-paypal-buttons-to-payment-elements)
- [How To Set Up A PayPal Integration](https://help.gohighlevel.com/support/solutions/articles/48001204158-how-to-set-up-a-paypal-integration)
- [Authorize.net integration for processing payments](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)
- [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)
- [How to build a custom payments integration on the platform](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)

## Related Articles

- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Collecting Payments in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000000875-collecting-payments-in-calendars)
- [PayPal in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000006712-paypal-in-calendars)
- [Membership: Audio Files in Courses + v2 Offers Migration](https://help.gohighlevel.com/support/solutions/articles/155000004743-membership-audio-files-in-courses-v2-offers-migration)
- [What Payment Gateways supported in Affiliate manager for Product Sales?](https://help.gohighlevel.com/support/solutions/articles/155000003656-what-payment-gateways-supported-in-affiliate-manager-for-product-sales-)
- [Custom Payment Providers in SaaS Mode](https://help.gohighlevel.com/support/solutions/articles/155000006276-custom-payment-providers-in-saas-mode)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm/hit)