---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-"
title: " WhatsApp Template Error: “body: Parameter at index contains URL” : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reselling Products](https://help.gohighlevel.com/support/solutions/48000454568)
4. [WhatsApp](https://help.gohighlevel.com/support/solutions/folders/48000683465)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reselling Products](https://help.gohighlevel.com/support/solutions/48000454568)
   - [WhatsApp](https://help.gohighlevel.com/support/solutions/folders/48000683465)
6. WhatsApp Template Error: “body: Parameter at index contai...

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

# WhatsApp Template Error: “body: Parameter at index contains URL”

Modified on: Mon, 18 Aug, 2025 at 1:40 AM

## **What this means**

Your message template was approved **without** a URL inside the body’s variable(s), but at send time you’re putting a **URL inside a body parameter** (e.g., `{{1}}`). For anti-phishing and quality reasons, **Meta does not allow full URLs inside body placeholders**. Links must be part of the template itself or placed in **buttons** (with optional dynamic suffixes).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051772003/original/KEPgYVPEZhXjVxYEcMTTet1OnBTAXJDUHg.png?1755499219)

* * *

## **Why it happens**

- You’re passing text like `https://example.com/deal/123` into a variable `{{1}}`.

- The template’s body was approved as plain text (variables expected to be names, codes, dates—not links).

- You used a URL shortener in a variable (many are blocked in parameters).

- You need a **URL button** instead of a body variable.


* * *

## **How to fix it (choose one)**

### Option A — Make the link **static** in the body

Use a template where the **full URL** is written directly in the approved body (no variable).

**Example body:**

“Hi {{1}}, please review your offer: https://example.com/offers”

**When to use:** The link is the same for everyone.

* * *

### Option B — Use a **CTA Website Button**

Create/modify the template to include a **Call-to-Action (CTA) Website button**:

- **Button URL (base):**`https://example.com/order/`

- **Button text:** “View Order”


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

- [WhatsApp Full Setup Guide for Agency](https://help.gohighlevel.com/support/solutions/articles/48001206216-whatsapp-full-setup-guide-for-agency)
- [WhatsApp - Messaging Limits](https://help.gohighlevel.com/support/solutions/articles/155000001637-whatsapp-messaging-limits)
- [How to Set Up WhatsApp for a Sub-Account](https://help.gohighlevel.com/support/solutions/articles/155000001980-how-to-set-up-whatsapp-for-a-sub-account)
- [WhatsApp Pricing, Billing, and Rebilling Guide](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-billing-and-rebilling-guide)
- [WhatsApp Template Statuses and Best Practice](https://help.gohighlevel.com/support/solutions/articles/155000001623-whatsapp-template-statuses-and-best-practice)
- [How to create a WhatsApp Template?](https://help.gohighlevel.com/support/solutions/articles/155000000861-how-to-create-a-whatsapp-template-)

## Related Articles

- [Why WhatsApp Templates Are Rejected with an “Invalid Format” Error](https://help.gohighlevel.com/support/solutions/articles/155000006330-why-whatsapp-templates-are-rejected-with-an-invalid-format-error)
- [WhatsApp Error: “Message type is currently not supported”](https://help.gohighlevel.com/support/solutions/articles/155000006419-whatsapp-error-message-type-is-currently-not-supported-)
- [WhatsApp Template Error: “New English (US) content can't be added while the existing English (US) content is being deleted. Try again in 4 weeks or consider creating a new message template.”](https://help.gohighlevel.com/support/solutions/articles/155000006234-whatsapp-template-error-new-english-us-content-can-t-be-added-while-the-existing-english-us-con)
- [Error: The message was not delivered due to the "WhatsApp undelivered" error](https://help.gohighlevel.com/support/solutions/articles/155000004786-error-the-message-was-not-delivered-due-to-the-whatsapp-undelivered-error)
- [WhatsApp Template Statuses and Best Practice](https://help.gohighlevel.com/support/solutions/articles/155000001623-whatsapp-template-statuses-and-best-practice)
- [Unable to send whats app text, due to invalid parameter error.](https://help.gohighlevel.com/support/solutions/articles/155000005114-unable-to-send-whats-app-text-due-to-invalid-parameter-error-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-/hit)