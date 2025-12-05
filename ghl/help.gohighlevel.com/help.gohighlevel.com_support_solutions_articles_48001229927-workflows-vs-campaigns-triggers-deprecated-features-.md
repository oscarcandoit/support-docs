---
url: "https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-"
title: " Workflows vs Campaigns/Triggers (Deprecated Features) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Workflows vs Campaigns/Triggers (Deprecated features)

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

# Workflows vs Campaigns/Triggers (Deprecated features)

Modified on: Wed, 11 Dec, 2024 at 11:14 PM

Campaigns and Triggers are deprecated. Workflows make it easy to create automation with triggers and actions with more capabilities. Workflows have capabilities like using if-else statements, wait times, math functions and so much more. Overall, workflows offer a more powerful and comprehensive automation solution. This article is provided for context.

**TABLE OF CONTENTS**

- [Why Replace Campaigns and Triggers with Workflows?](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#Why-Replace-Campaigns-and-Triggers-with-Workflows?)
- [Why are Campaigns and Triggers not visible in my Sub-account?](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#Why-are-Campaigns-and-Triggers-not-visible-in-my-Sub-account?)
- [Workflows vs Triggers](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#Workflows-vs-Triggers)
  - [Trigger steps comparison Table](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#Trigger-steps-comparison-Table)
  - [Automations Actions Comparison Table](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-#Automations-Actions-Comparison-Table)

* * *

## **Why Replace Campaigns and Triggers with Workflows?**

- Workflows can use [**if/else conditions**](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-builder-if-else-conditional-event) and filtering, which allows for more personalized and targeted automation.
- They combine triggers and campaigns into one system, making it more efficient and streamlined.
- Workflows have a status/execution log that makes it easier to troubleshoot and track lead status.
- Workflows are easier to test during onboarding and launch for quality assurance, ensuring that the product is working correctly for clients.

You can [**import your campaigns into workflows**](https://help.gohighlevel.com/support/solutions/articles/48001196570-creating-campaigns-in-workflows), and then add the triggers as well for a more streamlined automation process.

* * *

## **Why are Campaigns and Triggers not visible in my Sub-account?**

To see Campaigns & Triggers the subaccount has to be created from a snapshot of an older subaccount that still has them. If the sub-account was created using a snapshot of a master account that did not already have campaigns and triggers in it then it will not allow you to see the depreciated features setting in **sub-account> Settings> Business Profile.**

But if it was created using the snapshot of a master sub-account that already had triggers and campaigns in it, it should give you the option to enable depreciated features in Business Profile settings.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275258351/original/Emshm5q0-4tQqeS7xEEZsYjno4hOKhJqgQ.png?1673624348)**

The CRM is moving clients towards workflows and moving them away from campaigns and triggers, so these two features are automatically disabled and have no option to be enabled in sub-accounts that were created using snapshots of sub-accounts that did not have these features, to begin with.

```
Agencies created after November 2021 do not see the option to enable Deprecated Features Campaigns & Triggers.
```

* * *

## **Workflows vs Triggers**

### **Trigger steps comparison Table**

The following is a table of which Trigger steps are supported by Workflows in comparison to Triggers.

**Please Note:**

```
Campaigns cannot be triggered without a Trigger adding contacts to them. Or Contacts being added to them via Bulk Add to Campaign Actions  or CSV Import Add to Campaign Modal.
```

| Trigger Step | Workflows | Triggers |
| --- | --- | --- |
|  | **Appointments** |
| Appointment Status | Yes | Yes |
| Customer Booked Appointment | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Contact** |
| Birthday Reminder | Yes | Yes |
| Contact Changed | Yes | No |
| Contact Created | Yes | No |
| Contact DND | Yes | Yes |
| Contact Tag | Yes | Yes |
| Custom Date Reminder | Yes | Yes |
| Note Added | Yes | Yes |
| Note Changed | Yes | No |
| Task Added | Yes | Yes |

|     |     |     |
| --- | --- | --- |
| Task Reminder | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Contact Actions** |
| Customer Replied | Yes | Yes |
| Form Submitted | Yes | Yes |
| Order Form Submission | Yes | Yes |
| Order Submitted | Yes | No |
| Survey Submitted | Yes | Yes |
| Trigger Link Clicked | Yes | Yes |
| Twilio Validation Error | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Events** |
| Call Status | Yes | Yes |
| Email Events | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Facebook** |
| Facebook Lead Form Submitted | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Membership** |
| Category Completed | Yes | No |
| Membership New Signup | Yes | Yes |
| Offer Access Granted | Yes | Yes |
| Offer Access Removed | Yes | Yes |
| Product Access Granted | Yes | Yes |
| Product Access Removed | Yes | Yes |
| Product Completed | Yes | Yes |
| User Login | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Opportunities** |
| Opportunity Status Changed | Yes | Yes |
| Pipeline Stage Changed | Yes | Yes |
| Stale Opportunities | Yes | Yes |

|     |     |     |
| --- | --- | --- |
|  | **Payments** |
| Invoice | Yes | No |

|     |     |     |
| --- | --- | --- |
|  | **Shopify** |
| Abandoned Checkout | Yes | No |
| Order Placed | Yes | No |
| Order Fulfilled | Yes | No |

|     |     |     |
| --- | --- | --- |
|  | **Media** |
| Video | Yes | No |

|     |     |     |
| --- | --- | --- |
|  | **TikTok** |
| TikTok Form Submitted | Yes | No |

### **Automations Actions Comparison Table**

The following is a table of which Action steps are supported by Workflows in comparison to Campaigns and Triggers.

| Action | Workflows | Campaigns | Triggers |
| --- | --- | --- | --- |
|  | **External Communications** |
| Send Email | Yes | Yes | Yes |
| Send SMS | Yes | Yes | Yes |
| Call | Yes | Yes | No |
| Voicemail | Yes | Yes | No |
| Messenger | Yes | Yes | No |
| Instagram DM | Yes | No | No |
| Manual SMS | Yes | Yes | No |
| Manual Call | Yes | Yes | No |
| GMB Messaging | Yes | Yes | No |

|     |     |     |     |
| --- | --- | --- | --- |
|  | **CRM** |
| Add Contact Tag | Yes | No | Yes |
| Remove Contact Tag | Yes | No | Yes |
| Create/Update Opportunity | Yes | No | Yes |
| Add To Notes | Yes | No | Yes |
| Assign To User | Yes | No | Yes |
| Remove Assigned User | Yes | No | Yes |
| Set Event Start Date | Yes | No | Yes |
| Add To Workflow | Yes | No | No |
| Remove From Workflow | Yes | No | No |

|     |     |     |     |
| --- | --- | --- | --- |
| Remove From All Workflows | Yes | No | No |
| Remove From Campaign | No | No | Yes |
| Remove From All Campaigns | No | No | Yes |
| Add to Campaign | No | No | Yes |
| Remove Opportunity | Yes | No | Yes |
| Send Internal Notification | Yes | No | Yes |
| Set Contact DND | Yes | No | Yes |
| Edit Conversation | Yes | No | Yes<br>(Only Mark as Read) |
| Send Review Request | Yes | No | No |
| Stripe One-Time Charge | Yes | No | Yes |

|     |     |     |     |
| --- | --- | --- | --- |
| Update Appointment Status | Yes | No | Yes |
| Add Task | Yes | No | Yes |
| AI Appointment Booking Bot | Yes | No | No |
| Send To Eliza Agent Platform | Yes | No | No |
| Add To Google Analytics | Yes | No | Yes |
| Add to Google Adwords | Yes | No | Yes |
| Update Contact Field | Yes | No | Yes |

|     |     |     |     |
| --- | --- | --- | --- |
| Facebook - Add To Custom Audience | Yes | No | No |
| Facebook - Remove From Custom Audience | Yes | No | No |
| Facebook - Conversion API | Yes | No | No |

|     |     |     |     |
| --- | --- | --- | --- |
|  | **Membership Actions** |
| Membership Grant Offer | Yes | No | Yes |
| Membership Revoke Offer | Yes | No | Yes |

|     |     |     |     |
| --- | --- | --- | --- |
|  | **Conditions and workflow** |
| If / Else | Yes | No | No |
| Wait | Yes | Yes | No |
| Webhook | Yes | Yes | Yes |
| Go To | Yes | No | No |
| Math Operation | Yes | No | No |
| Goal Event | Yes | No | No |

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

- [Create Task Event In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147413-create-task-event-in-campaigns)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)
- [Workflow Action - Update Contact Field - Date type field](https://help.gohighlevel.com/support/solutions/articles/48001216170-workflow-action-update-contact-field-date-type-field)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)

## Related Articles

- [Klaviyo to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000004856-klaviyo-to-highlevel-migration-guide-)
- [MailChimp to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003392-mailchimp-to-highlevel-migration-guide-)
- [Hubspot to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003388-hubspot-to-highlevel-migration-guide-)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [Event Start Date - Campaign Configurations](https://help.gohighlevel.com/support/solutions/articles/48000980852-event-start-date-campaign-configurations)
- [Issue Certificates: Triggers and Actions](https://help.gohighlevel.com/support/solutions/articles/155000002376-issue-certificates-triggers-and-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-/hit)