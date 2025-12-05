---
url: "https://help.gohighlevel.com/support/solutions/articles/48001078171,"
title: " HighLevel Merge Fields List for Emails, SMS, and Funnels : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001078171,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/155000000025)
4. [Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/folders/155000000085)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001078171,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/155000000025)
   - [Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/folders/155000000085)
6. List of Merge Fields

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

# List of Merge Fields

Modified on: Mon, 10 Nov, 2025 at 10:19 AM

This article provides a comprehensive list of merge fields available and explains how to use them effectively. Merge fields allow you to personalize communications by dynamically inserting customer, user, appointment, and account details into messages, emails, invoices, campaigns, and other workflows. Whether you're sending automated emails, SMS messages, or generating invoices, merge fields help ensure your content is accurate and tailored to each recipient. Merge fields can be used in features such as conversations, email marketing, workflows, websites and funnels, invoices, and more.

```
PLEASE NOTE: The raw format is used to remove the brackets and dashes. This is ideal when dealing with international phone numbers.
```

* * *

**TABLE OF CONTENTS**

- [CONTACT Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#CONTACT-Merge-Fields)
- [USER Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#USER-Merge-Fields)
- [APPOINTMENT Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#APPOINTMENT-Merge-Fields)
- [CALENDAR Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#CALENDAR-Merge-Fields)
- [CAMPAIGN Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#CAMPAIGN-Merge-Fields)
- [MESSAGE Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#MESSAGE-Merge-Fields)
- [ACCOUNT Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#ACCOUNT-Merge-Fields)
- [RIGHT NOW Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#RIGHT-NOW-Merge-Fields)
- [ATTRIBUTION Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#ATTRIBUTION-Merge-Fields)
- [INVOICE Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#INVOICE-Merge-Fields)
- [COURSE Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171,#COURSE-Merge-Fields)
- [Using Workflows to Set a Fallback Value](https://help.gohighlevel.com/support/solutions/articles/48001078171,#Using-Workflows-to-Set-a-Fallback-Value)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001078171,#Related-Articles)

* * *

## **CONTACT Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Full name** | {{contact.name}} | Jane Smith |
| **First name** | {{contact.first\_name}} | Jane |
| **Last name** | {{contact.last\_name}} | Smith |
| **Email** | {{contact.email}} | Jane@smith.com |
| **Phone** | {{contact.phone}} | (515) 555-2345 |
| **Phone Raw Format (Recommended for trigger links & UTM)** | {{contact.phone\_raw}} | +15155552345 |
| **Company name** | {{contact.company\_name}} | Smith Plumbing |
| **Full Address** | {{contact.full\_address}} | 1234 W. Main St, Chicago, IL 60657 |
| **Address 1** | {{contact.address1}} | 1234 W. Main St |
| **City** | {{contact.city}} | Chicago |
| **State** | {{contact.state}} | Illinois |
| **Postal Code** | {{contact.postal\_code}} | 60657 |
| **Time Zone** | {{contact.timezone}} | GMT-06:00 America/Chicago (CST) |
| **Date of Birth** | {{contact.date\_of\_birth}} | Jan 3rd 1980 |
| **Source** | {{contact.source}} | Home Advisor |
| **Website** | {{contact.website}} | www.smithplumbing.com |
| **ID** | {{contact.id}} | FZDn5mYlkZuCCQe5Bep8 |

* * *

## **USER Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Full name** | {{user.name}} | John Doe |
| **First name** | {{user.first\_name}} | John |
| **Last name** | {{user.last\_name}} | Doe |
| **Email** | {{user.email}} | John@doe.com |
| **Phone** | `{{user.phone}}` or `{{user.phone_raw}}` | (333) 555-9876 |
| **Signature** | {{user.email\_signature}} | John Doe<br>john@doe.com<br>(333) 555-9876 |
| **Calendar Link** | {{user.calendar\_link}} | https://link.site.pro/widget/bookings/example101525 |
| **Appointment Phone** | {{appointment.user.phone\_raw}} | +13335559876 |
| **Twilio Phone** | {{user.twilio\_phone\_number}} | (234) 555-9876 |
| **Twilio Phone raw format** | {{user.twilio\_phone\_number\_raw}} | +12345559876 |

* * *

## **APPOINTMENT Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Title** | {{appointment.title}} | Appointment with Bob |
| **Start Date Time** | {{appointment.start\_time}} | Wednesday, November 5, 2025 3:30 PM |
| **Start Date** | {{appointment.only\_start\_date}} | November 5, 2025 |
| **Start Time** | {{appointment.only\_start\_time}} | 3:30 PM |
| **End Date Time** | {{appointment.end\_time}} | Wednesday, November 5, 2025 4:00 PM |
| **End Date** | {{appointment.only\_end\_date}} | November 5, 2025 |
| **End Time** | {{appointment.only\_end\_time}} | 4:00 PM |
| **Day of the Week** | {{appointment.day\_of\_week}} | Monday |
| **Name of the Month** | {{appointment.month}} | 11 |
| **Timezone** | {{appointment.timezone}} | CST |
| **Cancellation Link** | {{appointment.cancellation\_link}} | https://api.leadconnectorhq.com/widget/cancel-booking?event\_id=wVjKeeT9gQJJcuagsqKk |
| **Reschedule Link** | {{appointment.reschedule\_link}} | https://api.leadconnectorhq.com/widget/booking/eCXvoD0<br>h3iff0g2hypo7event\_id=wVjKkeT9gBJJcuagjqKk |
| **Meeting Location** | {{appointment.meeting\_location}} | 123 W Main St, Chicago Il, 60657 |
| **Notes** | {{appointment.notes}} | This is our second meeting. |
| **Add to Google Calendar** | {{appointment.add\_to\_google\_calendar}} | https://api.leadconnectorhq.com/google/calendar/add-event/wVjKkeT9gBJJcuagjqKk |
| **Add to iCal & Outlook** | {{appointment.add\_to\_ical\_outlook}} | https://api.leadconnectorhq.com/google/calendar/get-ics/wVjKkeT9gBJJcuagjqKk |
| **Recurring > Repeats** | {{appointment.recurring.repeats}} | 0 |
| **Recurring > Times to Repeat** | {{appointment.recurring.times\_to\_repeat}} | 1 |
| **Assigned users > Full Name** | {{appointment.user.name}} | John Doe |
| **Assigned users > First Name** | {{appointment.user.first\_name}} | John |
| **Assigned users > Last Name** | {{appointment.user.last\_name}} | Doe |
| **Assigned users > Email** | {{appointment.user.email}} | john@doe.com |
| **Assigned users > Phone** | {{appointment.user.phone}} | (333) 555-9876 |
| **Assigned users > Phone (raw format)** | {{appointment.user.phone\_raw}} | +13335559876 |
| **Assigned users > Signature** | {{appointment.user.email\_signature}} | John Doe<br>john@doe.com<br>(333) 555-9876 |
| **Assigned users > Twilio Phone** | {{appointment.user.twilio\_phone\_number}} | (333) 555-1234 |

* * *

## **CALENDAR Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name** | {{calendar.name}} | Lawn Services Calendar |

* * *

## **CAMPAIGN Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Event, Date, Time** | {{campaign.event\_date\_time}} |  |
| **Event Date** | {{campaign.event\_date}} |  |
| **Event Time** | {{campaign.event\_time}} |  |

* * *

## **MESSAGE Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Message Body** | {{message.body}} | Hi, just a quick reminder about our scheduled call tomorrow morning. Let me know if the time still works for you. |
| **Message Subject** | {{message.subject}} | Meeting Reminder |

* * *

## **ACCOUNT Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name** | {{location.name}} | WidgetWorks |
| **Full Address** | {{location.full\_address}} | 555 Oak St, Tampa Florida, 33602 |
| **Address Line 1** | {{location.address}} | 555 Oak St |
| **City** | {{location.city}} | Tampa |
| **State** | {{location.state}} | Florida |
| **Country** | {{location.country}} | US |
| **Postal Code** | {location.postal\_code}} | 33602 |
| **Email** | {{location.email}} | nyname@domain.com |
| **Phone** | {{location.phone}} | (333) 555-3344 |
| **Phone (raw format)** | {{location.phone\_raw}} | +13335553344 |
| **Website** | {{location.website}} | mywebsiteurl.com |
| **Logo URL** | {{location.logo\_url}} | https://msgsndr-private.storage.googleapis.com/locationPhotos/607fb13f-e424-4bw6-9d42-ceel995caa267.png |
| **Owner > First Name** | {{location\_owner.first\_name}} | Lisa |
| **Owner > Last Name** | {{location\_owner.last\_name}} | White |
| **Owner > Email** | {{location\_owner.email}} | lisa@white.com |
| **ID** | {{location.id}} | DP4mTqaz7L9XpweFvRjC |

* * *

## **RIGHT NOW Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Second** | {{right\_now.second}} | 9 |
| **Minute** | {{right\_now.minute}} | 10 |
| **Time 24h Format** | {{right\_now.hour}} | 14 |
| **Time AM/PM Format** | {{right\_now.hour\_ampm}} | 2 |
| **AM/PM** | {{right\_now.ampm}} | PM |
| **Day of the Week (extended English)** | {{right\_now.day\_of\_week}} | Tuesday |
| **Name of the Month** | {{right\_now.month\_name}} | November |
| **Day** | {{right\_now.day}} | 4 |
| **Month** | {{right\_now.month}} | November |
| **Month (extended English)** | {{right\_now.month\_english}} | November |
| **Year** | {{right\_now.year}} | 2025 |
| **Date (month/day/year)** | {{right\_now.middle\_endian\_date}} | 11/4/2025 |
| **Date (day/month/year)** | {{right\_now.little\_endian\_date}} | 4/11/2025 |
| **Day of the Week** | {{right\_now.day\_of\_week}} | Tuesday |

* * *

## **ATTRIBUTION Merge Fields**

#### **First Attribution**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Session Source** | {{contact.attributionSource.sessionSource}} | Referral |
| **URL** | {{contact.attributionSource.url}} | https://api.site.com/form/Lg0ooutm\_source=facebookads&utm\_campaign=fall\_saleJriQUiHiy |
| **Campaign** | {{contact.attributionSource.campaign}} | fall\_sale |
| **UTM Source** | {{contact.attributionSource.utmSource}} | facebookads |
| **UTM Medium** | {{contact.attributionSource.utmMedium}} | banner |
| **UTM Content** | {{contact.attributionSource.utmContent}} | ad12 |
| **Referrer** | {{contact.attributionSource.referrer}} | https://api.site.com |
| **Campaign ID** | {{contact.attributionSource.campaignId}} | 23849260571384729 |
| **FB ClickId** | {{contact.attributionSource.fbclid}} | tYzFqKsLxRuE |
| **Google ClickId** | {{contact.attributionSource.gclid}} | EAIaIQobChMIwdfI6s7dgAMVdQytBh2bFgiPEAAYASAAEgIX4PD\_BwE |
| **UTM Keyword** | {{contact.attributionSource.utmKeyword}} | running\_shoes |
| **UTM Match Type** | {{contact.attributionSource.utmMatchType}} |  |
| **Ad Group ID** | {{contact.attributionSource.adGroupId}} |  |
| **Ad ID** | {{contact.attributionSource.adId}} |  |

`
`

#### **Latest Attribution**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Session Source** | {{contact.lastAttributionSource.sessionSource}} | Referral |
| **URL** | {{contact.lastAttributionSource.url}} | https://api.site.com/form/Lg0ooutm\_source=facebookads&utm\_campaign=xmas\_saleJriQUiHiy |
| **Campaign** | {{contact.lastAttributionSource.campaign}} | xmas\_sale |
| **UTM Source** | {{contact.lastAttributionSource.utmSource}} | facebookads |
| **UTM Medium** | {{contact.lastAttributionSource.utmMedium}} | banner |
| **UTM Content** | {{contact.lastAttributionSource.utmContent}} | ad18 |
| **Referrer** | {{contact.lastAttributionSource.referrer}} | https://leadsite.com |
| **Campaign ID** | {{contact.lastAttributionSource.campaignId}} | 23850176293047583 |
| **FB ClickId** | {{contact.lastAttributionSource.fbclid}} | wMpTxNgDvJoH |
| **Google ClickId** | {{contact.lastAttributionSource.gclid}} | CjwKCAjwsKqoBhBPEiwALrrqi8bJ3h9E4pO1G2dR6tW3sV7Tn8cZ9L |
| **UTM Campaign** | {{contact.lastAttributionSource.utmCampaign}} | blowout\_sale |
| **UTM Keyword** | {{contact.lastAttributionSource.utmKeyword}} | hvac\_repair |
| **UTM Match Type** | {{contact.lastAttributionSource.utmMatchType}} |  |
| **Ad Group ID** | {{contact.lastAttributionSource.adGroupId}} |  |
| **Ad ID** | {{contact.lastAttributionSource.adId}} |  |

* * *

## **INVOICE Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name of the invoice** | {{invoice.name}} | Consulting Contract |
| **Invoice Number** | {{invoice.number}} | 43255 |
| **Issue date of the invoice** | {{invoice.issue\_date}} | 2025-04-05 |
| **Due date of the invoice** | {{invoice.due\_date}} | 2025-10-05 |
| **Subtotal amount of the invoice** | {{invoice.sub\_total}} | $500.00 |
| **Discount amount applied to the invoice** | {{invoice.discount\_amount}} | $50.00 |
| **Tax amount for the invoice** | {{invoice.tax\_amount}} | $25.00 |
| **Total amount for the invoice** | {{invoice.total\_amount}} | $475.00 |
| **Title of the invoice** | {{invoice.title}} | Consulting Invoice |
| **Link to the invoice** | {{invoice.url}} | https://link.site.pro/invoice/5e3bb9ae1f3dc392bea9 |

`
`

#### **Company Details**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name of the company** | {{invoice.company.name}} | Test Solutions |
| **Company phone number** | {{invoice.company.phone}} | (8888) 555-9876 |
| **Company address** | {{invoice.company.address}} | 1234 Maple St |
| **Company city** | {{invoice.company.city}} | Milwaukee |
| **Company state** | {{invoice.company.state}} | Wisconsin |
| **Company country** | {{invoice.company.country}} | US |
| **Company website** | {{invoice.company.website}} | www.testsolutions.com |
| **Company logo URL** | {{invoice.company.logo}} | https://msgsndr-private.storage.googleapis.com/locationPhotos/607fb13f-e424-4bw6-9d42-ceel995caa267.png |

`
`

#### **Customer Details**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name of the Invoice Contact** | {{invoice.customer.name}} | Tom Taylor |
| **Invoice Contact's first name** | {{invoice.customer.first\_name}} | Tom |
| **Invoice Contract's last name** | {{invoice.customer.last\_name}} | Taylor |
| **Invoice Contact's phone number** | {{invoice.customer.phone}} | (222) 555-3456 |
| **Invoice Contact's email address** | {{invoice.customer.email}} | tom@taylor.com |
| **Invoice Contact's company name** | {{invoice.customer.company}} | Taylor Construction |
| **Invoice Contact's address** | {{invoice.customer.address}} | 3333 N. Main St |
| **Invoice Contact's city** | {{invoice.customer.city}} | Chicago |
| **Invoice Contact's state** | {{invoice.customer.state}} | Illinois |
| **Invoice Contact's postal code** | {{invoice.customer.postal\_code}} | 60657 |

`
`

#### **Sender Details**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Name of the invoice sender** | {{invoice.sender.name}} | Bob Brown |
| **Invoice Sender's email address** | {{invoice.sender.email}} | bob@brown.com |

`
`

#### **Card Information**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Brand of the credit card used for payment** | {{invoice.card.brand}} | Visa |
| **Last 4 digits of the card number** | {{invoice.card.last4}} | 7654 |

* * *

## **COURSE Merge Fields**

| Name | Merge Field | Example |
| --- | --- | --- |
| **Category Title** | {{courses.categoryTitle}} | Getting Started with Knitting |
| **Product Title** | {{courses.productTitle}} | Basics of Knitting |
| **Post Title** | {{courses.postTitle}} | The Best Types of Yarn |

* * *

## **Using Workflows to Set a Fallback Value**

If a contact field (such as First Name) is missing, you can create a Workflow with an If/Else condition to set a fallback value. This ensures consistent personalization in your emails, SMS messages, and other communications.

**Steps:**

#### **Step 1:** Create a Custom Value

- Go to **Settings → Custom Value** and create a new custom value (e.g., First\_Name\_Fallback).


#### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052931734/original/p-URl4Gt2dE6u871WwsQF2Utosmx-z9WZg.png?1756824475)        **Step 2:** Set up If/Else

- Set Up **If/Else** condition in the Workflow to check if the original field (e.g., First Name) is empty.

#### **Step 3:** Insert the fallback value into message

- If the field is empty, use the fallback Custom Value (e.g., "there") directly in the copy of your message.

- If the field has a value, use the regular merge field (e.g., {{contact.first\_name}}).


```
Click here for more information on using If/Else in workflows
```

* * *

## **Related Articles**

- [Documents & Contracts Templates with Opportunity Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/155000004039)

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)

- [Custom Values Settings](https://help.gohighlevel.com/en/support/solutions/articles/155000004705)

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

- [List of Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171-list-of-merge-fields)
- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/articles/155000004390-overview-of-merge-fields-custom-variables)

## Related Articles

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/articles/155000004390-overview-of-merge-fields-custom-variables)
- [How to Use Custom Fields](https://help.gohighlevel.com/support/solutions/articles/48001161579-how-to-use-custom-fields)
- [How to Merge Duplicate Contacts in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001202210-how-to-merge-duplicate-contacts-in-highlevel)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/155000003356-workflow-action-math-operation)
- [How to use Custom Fields for Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000000521-how-to-use-custom-fields-for-opportunities)
- [How to Use Custom Menu Links in SaaS Plans](https://help.gohighlevel.com/support/solutions/articles/155000004196-how-to-use-custom-menu-links-in-saas-plans)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001078171,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001078171-list-of-merge-fields/hit)