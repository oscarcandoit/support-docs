---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts"
title: " Configure Default SaaS Sub-Account Naming | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
   - [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
6. Customize Default Naming Conventions for New SaaS Accounts

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

# Customize Default Naming Conventions for New SaaS Accounts

Modified on: Thu, 28 Aug, 2025 at 3:57 AM

Discover the new configuration in the SaaS Configurator that lets your agency control how **new** SaaS sub-accounts are named at creation. Choose between the **Customer’s name** or the business **Company Name** to reduce post-onboarding edits and improve clarity across search, reporting, and client communications. This article explains the options, behavior, setup, and external checkout requirements so your team can adopt the best convention for your workflow.

* * *

**TABLE OF CONTENTS**

- [What Is the Default Naming Convention for New SaaS Sub-Accounts?](https://help.gohighlevel.com/a/dashboard/default#What-Is-the-Default-Naming-Convention-for-New-SaaS-Sub-Accounts?)
- [Key Benefits of Default Naming Convention for New SaaS Subscribers](https://help.gohighlevel.com/a/dashboard/default#Key-Benefits-of-Default-Naming-Convention-for-New-SaaS-Subscribers)
- [How To Setup Default Naming Convention for New SaaS Subscribers](https://help.gohighlevel.com/a/dashboard/default#How-To-Setup-Default-Naming-Convention-for-New-SaaS-Subscribers)
- [Naming Convention Options](https://help.gohighlevel.com/a/dashboard/default#Naming-Convention-Options%C2%A0)
- [External Checkout Integration](https://help.gohighlevel.com/a/dashboard/default#External-Checkout-Integration)
- [Behavior & Examples](https://help.gohighlevel.com/a/dashboard/default#Behavior-&-Examples)
- [Frequently Asked Questions](https://help.gohighlevel.com/a/dashboard/default#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/a/dashboard/default#Related-Articles)

* * *

# **What Is the Default Naming Convention for New SaaS Sub-Accounts?**

This setting defines the **default naming convention** used when HighLevel creates a **new SaaS sub-account** during checkout. Agencies can pick **Company Name** (the business provided during checkout) or keep the traditional **Customer Name + ’s Account** format. The choice applies to **future** sign-ups and does **not** rename existing accounts.

```
Note: This option lives in the SaaS Configurator at the Agency level and is available to agencies with SaaS Mode on the Agency Pro ($497) plan. If you’re on Starter or Freelancer, upgrade to Agency Pro to access SaaS Configurator features.
```

* * *

## **Key Benefits of Default Naming Convention for New SaaS Subscribers**

- **Improved Clarity:** Sub-account names reflect the operating business rather than only the buyer’s personal name.

- **Enhanced Client Experience:** Reduces manual post-onboarding updates by applying your preferred naming automatically.

- **Operational Efficiency:** Makes accounts easier to search, filter, and recognize for support and success teams.

- **Flexible Options:** Switch between **Company Name** and **Customer Name + ’s Account** to match your internal workflow.


* * *

## **How To Setup Default Naming Convention for New SaaS Subscribers**

1. In your Agency viewOpen **SaaS Configurator** → **Advanced Settings** → **Sub-Account** **Onboarding**.

2. Under **Sub-Account Onboarding**, choose one:

   - **Company Name** (recommended for business-forward clarity), or

   - **Customer Name + ’s Account** (useful if your team searches primarily by owner).
3. Click **Save**. New SaaS sub-accounts created via HighLevel funnels (and supported external checkouts) will now follow your selection.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052559942/original/71dxTxR0svvIDdWv2CscYvCvHQPGVKhLOg.jpeg?1756371305)

* * *

## **Naming Convention Options**

Review what each option does so you can align the default with how your team identifies and supports new customers.

- **Company Name** — Uses the **business name** provided at checkout so the sub-account clearly represents the client’s brand.

  - _Example:_ **Acme Dental**
- **Customer Name + ’s Account** — Uses the buyer’s personal name with **’s Account** appended.

  - _Example:_ **Jane Smith’s Account**

```
Note: If the Company Name field is not present or is left empty during checkout, HighLevel defaults to Customer Name + ’s Account.
```

* * *

## **External Checkout Integration**

You can extend the same naming behavior **beyond** HighLevel funnel checkouts by passing the client’s business name from your external checkout into HighLevel as metadata.

- Ensure your external checkout sends a **non-empty**`companyName` **subscription metadata** value.

- Keep the SaaS Configurator set to **Use Company Name** to apply the business name when metadata is present.

- If `companyName` is missing or empty, HighLevel falls back to **Customer Name + ’s Account**.


**Example metadata payload (illustrative):**

```json
{
"subscription": {
"metadata": {
"companyName": "Acme Dental"
}
}
}
```

* * *

## **Behavior & Examples**

These quick examples clarify what you and your clients will see after signup so expectations are aligned.

- **If “Company Name” is selected and provided at checkout:**

  - _Resulting sub-account:_ **Acme Dental**
- **If “Company Name” is selected but not provided:**

  - _Resulting sub-account:_ **Jane Smith’s Account** _(fallback to customer name)_
- **If “Customer Name + ’s Account” is selected:**

  - _Resulting sub-account:_ **Jane Smith’s Account**

```
Note: After Account Creation admins can update the Location’s Friendly Business Name later if needed. Changing this later does not retroactively change past confirmations or emails already sent.
```

* * *

## **Frequently Asked Questions**

**Q:** **Does this setting affect existing SaaS accounts?**

No. It applies only to **new** SaaS sign-ups after you save the setting.

**Q:** **What happens if no Company Name is provided during checkout?**

HighLevel defaults to **Customer Name + ’s Account**.

**Q: Can we change the default later?**

Yes. Update the option in **SaaS Configurator** at any time. It applies to **future** sign-ups.

**Q:** **How do we enable this for external checkouts?**

Send a **non-empty**`companyName` in subscription metadata and keep the setting on **Use Company Name**.

**Q:** **Will changing the setting rename previously created accounts?**

No. There’s no retroactive renaming.

**Q: Does this influence merge fields like**`{{location.name}}` **in communications?**

The initial Location name reflects the chosen convention at creation. Messages using `{{location.name}}` will display that name unless it’s edited later in the Location settings.

**Q:** **Could unusual characters in Company Name cause issues?**

Use standard alphanumeric characters where possible for best results. If a name is not accepted by your external checkout or looks incorrect, edit the Location name after creation.

* * *

### **Related Articles**

- [SaaS Configurator: Onboarding](https://help.gohighlevel.com/support/solutions/articles/155000004199-saas-configurator-onboarding)

- [SaaS Mode – Full Setup Guide & FAQ](https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq)

- [Guide to SaaS Plan Creation, Sales, and Customer Onboarding](https://help.gohighlevel.com/support/solutions/articles/155000003670-guide-to-saas-plan-creation-sales-and-customer-onboarding)

- [Using Stripe Checkout Pages For SaaS Mode Plans](https://help.gohighlevel.com/support/solutions/articles/48001187056-using-stripe-checkout-pages-for-saas-mode-plans)

- [Convert Existing Sub-Account to SaaS Mode Subscription Plan](https://help.gohighlevel.com/support/solutions/articles/48001188055-convert-existing-sub-account-to-saas-mode-subscription-plan)


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

- [Customize Default Naming Conventions for New SaaS Accounts](https://help.gohighlevel.com/support/solutions/articles/155000006065-customize-default-naming-conventions-for-new-saas-accounts)
- [SaaS Mode FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002129-saas-mode-faqs)
- [How to Import Stripe Products into SaaS Configurator](https://help.gohighlevel.com/support/solutions/articles/155000006287-how-to-import-stripe-products-into-saas-configurator)
- [Public API Endpoints for SaaS Configurator](https://help.gohighlevel.com/support/solutions/articles/155000005768-public-api-endpoints-for-saas-configurator)
- [How to Resell Marketplace Apps as a Part of SaaS Plans](https://help.gohighlevel.com/support/solutions/articles/155000006142-how-to-resell-marketplace-apps-as-a-part-of-saas-plans)
- [Import Stripe Products into SaaS Configurator (legacy v1)](https://help.gohighlevel.com/support/solutions/articles/155000006438-import-stripe-products-into-saas-configurator-legacy-v1-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts/hit)