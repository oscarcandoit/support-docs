---
url: "https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows"
title: " Facebook Conversions API Trigger in Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
4. [Facebook Integration](https://help.gohighlevel.com/support/solutions/folders/48000666319)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
   - [Facebook Integration](https://help.gohighlevel.com/support/solutions/folders/48000666319)
6. Facebook Conversions API Trigger in Workflows

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

# Facebook Conversions API Trigger in Workflows

Modified on: Fri, 11 Jul, 2025 at 7:32 AM

How to use the Facebook Conversion API - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to use the Facebook Conversion API](https://www.youtube.com/watch?v=MpL8eMhk5wk)

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

[Watch on](https://www.youtube.com/watch?v=MpL8eMhk5wk&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 5:26
•Live

•

With Workflows, you can add Facebook Conversion event actions in automation to send conversion data back to Facebook without anyone being cookied by a Facebook pixel!

## **Frequently Asked Questions**

**Q: Which initial Workflow Triggers can I use the FB Conversions event with?**

1. For **Funnel events** in Facebook conversion API action, you can use the following triggers; Form Submitted, Survey Submitted, Customer Booked Appointment, and Order Form Submission.

(For an appointment, it will only work with "Customer Booked appointment," not with "appointment," as appointments are the general triggers and "Customer Booked appointment" is the trigger for the widget; click" [here](https://help.gohighlevel.com/support/solutions/articles/48001081184) to learn more.)
2. For **Lead events** in Facebook conversion API action, you can only use the trigger "Facebook Lead Form Submission" and "Pipeline Stage Change"(This will work if your contact is coming from a facebook lead form)

**Q: Which Event Details Parameters do we need to use?**

Event Source URL

**Q: Which Customer Information Parameters can we use?**

Client IP address - do not hash

Client user agent - do not hash

Email Address

First Name

Surname

Browser ID (fbp) cookie – do not hash

Click ID (fbc) cookie – do not hash

**Q: Can I use Custom Values for the Access Token and Pixel Id?**

Yes, Custom Values will work in those fields.

**Q: Why isn't the {{Order.Amount}} custom value working with the "Order Form Submission" trigger?**

The {{Order.Amount}} custom value **only works with the Order Submitted trigger** because it relies on a completed payment. It won't work with Order Form Submission, as that trigger fires before payment is processed, so the order amount isn’t finalized yet.

**Q: Why don't I see test events in Facebook Business Manager?**

If you don't see a test conversion, check the Diagnostics tab for any errors. A common issue we've seen is when FB has blocked the domain, so check Settings > Scroll to the bottom to "Domains In Your Allow List," where you can approve the domain

**Q: Does the 'Test Workflow' button work with testing FB conversions?**

Yes

**Q: Why is Facebook reporting the conversion as "Custom Event" when I selected "Lead"?**

This happens when you send test data (we're not sure why Facebook does this), but it will show "Lead" when you run a live conversion.

**Q: Can I use the offline events with trigger names like 'Call', 'opportunity change status', 'tag', etc. with Facebook Conversion API action?**

Yes, it is possible to do so and we will be using the last possible pixel data to send this event. Basically, if the fbclid id is found, the data will be sent to conversion API. It can be best explained by the following examples:

**Example 1:**

Contact created Facebook form submission, thus first attribution source will be Paid Social (Facebook).  If you use workflow with Facebook form submitted trigger, the contact will have fbclid and workflow will send data to conversion API (CAPI).

Additional Behaviour -

After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.

**Example 2:**

Contact created google ad, organic google search or direct traffic,, thus first attribution source will be Paid Search (Google) or Direct Traffic. If the contact after certain time interacted with Facebook form and they fill the form, the latest attribution will be Paid Social(Facebook) with contact having fbclid. Now, if the agency runs workflow with Facebook form submitted > Facebook conversion API, it will send the data to conversion API with fbclid.

Additional Behaviour - After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.

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

- [(Guest Tutorial) Pabbly Connect - How to integrate Facebook Leads Ads with Your Sub-Account](https://help.gohighlevel.com/support/solutions/articles/48001223700--guest-tutorial-pabbly-connect-how-to-integrate-facebook-leads-ads-with-your-sub-account)
- [A Facebook Token Has Expired In Your HighLevel Account](https://help.gohighlevel.com/support/solutions/articles/48000981594-a-facebook-token-has-expired-in-your-highlevel-account)
- [Connect Multiple Facebook Pages to HighLevel Sub-account](https://help.gohighlevel.com/support/solutions/articles/155000004405-connect-multiple-facebook-pages-to-highlevel-sub-account)
- [Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)
- [Facebook Domain Verification by Meta Tag](https://help.gohighlevel.com/support/solutions/articles/48001185852-facebook-domain-verification-by-meta-tag)

## Related Articles

- [Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough)
- [How to send a Meta Conversion API action for Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-)
- [How to set up a Funnel Event Pixel for Facebook Conversion API?](https://help.gohighlevel.com/support/solutions/articles/48001236281-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-)
- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [How to send the Conversion data to Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000002478-how-to-send-the-conversion-data-to-ad-manager-)
- [How to create a Meta Sales objective campaign for Conversion](https://help.gohighlevel.com/support/solutions/articles/155000004797-how-to-create-a-meta-sales-objective-campaign-for-conversion)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows/hit)