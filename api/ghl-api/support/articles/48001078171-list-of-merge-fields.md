---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields
category: articles
type: article
scraped: 2025-10-28T15:56:58.146Z
title:  HighLevel Merge Fields List for Emails, SMS, and Funnels : LeadConnector 
status_code: 200
---

#  HighLevel Merge Fields List for Emails, SMS, and Funnels : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Merge Fields & Custom Variables](https://help.leadconnectorhq.com/support/solutions/155000000025) [Merge Fields & Custom Variables](https://help.leadconnectorhq.com/support/solutions/folders/155000000085)

## List of Merge Fields  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields\# "Print this Article")

Modified on: Tue, 2 Sep, 2025 at 9:52 AM

* * *

This article provides a comprehensive list of merge fields available and explains how to use them effectively. Merge fields allow you to personalize communications by dynamically inserting customer, user, appointment, and account details into messages, emails, invoices, campaigns, and other workflows. Whether you're sending automated emails, SMS messages, or generating invoices, merge fields help ensure your content is accurate and tailored to each recipient. Merge fields can be used in features such as conversations, email marketing, workflows, websites and funnels, invoices, and more.

```
PLEASE NOTE: The raw format is used to remove the brackets and dashes. This is ideal when dealing with international phone numbers.
```

* * *

**TABLE OF CONTENTS**

- [CONTACT Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#CONTACT-Merge-Fields)
- [USER Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#USER-Merge-Fields)
- [APPOINTMENT Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#APPOINTMENT-Merge-Fields)
- [CALENDAR Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#CALENDAR-Merge-Fields)
- [CAMPAIGN Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#CAMPAIGN-Merge-Fields)
- [MESSAGE Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#MESSAGE-Merge-Fields)
- [ACCOUNT Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#ACCOUNT-Merge-Fields)
- [RIGHT NOW Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#RIGHT-NOW-Merge-Fields)
- [ATTRIBUTION Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#ATTRIBUTION-Merge-Fields)
- [INVOICE Merge Fields](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#INVOICE-Merge-Fields)
- [Using Workflows to Set a Fallback Value](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#Using-Workflows-to-Set-a-Fallback-Value)
- [Related Articles](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields#Related-Articles)

* * *

## **CONTACT Merge Fields**

- **Full name:** `{{contact.name}}`
- **First name:** `{{contact.first_name}}`
- **Last name:** `{{contact.last_name}}`
- **Email:** `{{contact.email}}`
- **Phone:** `{{contact.phone}}`
- **Phone Raw Format (Recommended for trigger links & UTM):** `{{contact.phone_raw}}`
- **Company name:** `{{contact.company_name}}`
- **Full Address:** `{{contact.full_address}}`
- **Address 1:** `{{contact.address1}}`
- **City:** `{{contact.city}}`
- **State:** `{{contact.state}}`
- **Postal Code:** `{{contact.postal_code}}`
- **Time Zone:** `{{contact.timezone}}`
- **Date of Birth:** `{{contact.date_of_birth}}`
- **Source:** `{{contact.source}}`
- **Website:** `{{contact.website}}`
- **ID:** `{{contact.id}}`

* * *

## **USER Merge Fields**

- **Full Name:** `{{user.name}}`
- **First Name:** `{{user.first_name}}`
- **Last Name:** `{{user.last_name}}`
- **Email:** `{{user.email}}`
- **Phone:** `{{user.phone}}` or `{{user.phone_raw}}`
- **Signature:** `{{user.email_signature}}`
- **Calendar Link:** `{{user.calendar_link}}`
- **Appointment Phone:** `{{appointment.user.phone_raw}}`
- **Twilio Phone:** `{{user.twilio_phone_number}}`
- **Twilio Phone raw format:** `{{user.twilio_phone_number_raw}}`

* * *

## **APPOINTMENT Merge Fields**

- **Title:** `{{appointment.title}}`
- **Start Date Time:** `{{appointment.start_time}}`
- **Start Date:** `{{appointment.only_start_date}}`
- **Start Time:** `{{appointment.only_start_time}}`
- **End Date Time:** `{{appointment.end_time}}`
- **End Date:** `{{appointment.only_end_date}}`
- **End Time:** `{{appointment.only_end_time}}`
- **Day of the week:** `{{appointment.day_of_week}}`
- **Name of the month:** `{{appointment.month}}`
- **Timezone:** `{{appointment.timezone}}`
- **Cancellation Link:** `{{appointment.cancellation_link}}`
- **Reschedule Link:** `{{appointment.reschedule_link}}`
- **Meeting Location:** `{{appointment.meeting_location}}`
- **Notes:** `{{appointment.notes}}`
- **Add to Google Calendar:** `{{appointment.add_to_google_calendar}}`
- **Add to Ical & Outlook:** `{{appointment.add_to_ical_outlook}}`
- **Recurring > Repeats:** `{{appointment.recurring.repeats}}`
- **Recurring > Times to repeat:** `{{appointment.recurring.times_to_repeat}}`
- **Assigned user > Full Name:** `{{appointment.user.name}}`
- **Assigned user > First Name:** `{{appointment.user.first_name}}`
- **Assigned user > Last Name:** `{{appointment.user.last_name}}`
- **Assigned user > Email:** `{{appointment.user.email}}`
- **Assigned user > Phone:** `{{appointment.user.phone}}`
- **Assigned user > Phone (raw format):** `{{appointment.user.phone_raw}}`
- **Assigned user > Signature:** `{{appointment.user.email_signature}}`
- **Assigned user > Twilio Phone:** `{{appointment.user.twilio_phone_number}}`

* * *

## **CALENDAR Merge Fields**

- **Name:** `{{calendar.name}}`

* * *

## **CAMPAIGN Merge Fields**

- **Event, Date, Time:** `{{campaign.event_date_time}}`
- **Event Date:** `{{campaign.event_date}}`
- **Event Time:** `{{campaign.event_time}}`

* * *

## **MESSAGE Merge Fields**

- **Message Body:** `{{message.body}}`
- **Message Subject:** `{{message.subject}}`

* * *

## **ACCOUNT Merge Fields**

- **Name:** `{{location.name}}`
- **Full Address:** `{{location.full_address}}`
- **Address Line 1:** `{{location.address}}`
- **City:** `{{location.city}}`
- **State:** `{{location.state}}`
- **Country:** `{{location.country}}`
- **Postal Code:** `{{location.postal_code}}`
- **Email:** `{{location.email}}`
- **Phone:** `{{location.phone}}`
- **Phone (raw format):** `{{location.phone_raw}}`
- **Website:** `{{location.website}}`
- **Logo URL:** `{{location.logo_url}}`
- **Owner > First Name:** `{{location_owner.first_name}}`
- **Owner > Last Name:** `{{location_owner.last_name}}`
- **Owner > Email:** `{{location_owner.email}}`
- **ID:** `{{location.id}}`

* * *

## **RIGHT NOW Merge Fields**

- **Second:** `{{right_now.second}}`
- **Minute:** `{{right_now.minute}}`
- **Time 24h Format:** `{{right_now.hour}}`
- **Time AM/PM Format:** `{{right_now.hour_ampm}}`
- **AM/PM:** `{{right_now.ampm}}`
- **Day of the week (extended English):** `{{right_now.day_of_week}}`
- **Name of month:** `{{right_now.month_name}}`
- **Day:** `{{right_now.day}}`
- **Month:** `{{right_now.month}}`
- **Month (extended English):** `{{right_now.month_english}}`
- **Year:** `{{right_now.year}}`
- **Date (month/day/year):** `{{right_now.middle_endian_date}}`
- **Date (day/month/year):** `{{right_now.little_endian_date}}`
- **Day of the week:** `{{right_now.day_of_week}}`

* * *

## **ATTRIBUTION Merge Fields**

#### **First Attribution**

- **Session Source:** `{{contact.attributionSource.sessionSource}}`
- **URL:** `{{contact.attributionSource.url}}`
- **Campaign:** `{{contact.attributionSource.campaign}}`
- **UTM Source:** `{{contact.attributionSource.utmSource}}`
- **UTM Medium:** `{{contact.attributionSource.utmMedium}}`
- **UTM Content:** `{{contact.attributionSource.utmContent}}`
- **Referrer:** `{{contact.attributionSource.referrer}}`
- **Campaign Id:** `{{contact.attributionSource.campaignId}}`
- **FB ClickId:** `{{contact.attributionSource.fbclid}}`
- **Google ClickId:** `{{contact.attributionSource.gclid}}`
- **UTM Keyword:** `{{contact.attributionSource.utmKeyword}}`
- **UTM Match Type:** `{{contact.attributionSource.utmMatchType}}`
- **Ad Group ID:** `{{contact.attributionSource.adGroupId}}`
- **Ad ID:** `{{contact.attributionSource.adId}}`

`
`

#### **Latest Attribution**

- **Session Source:** `{{contact.lastAttributionSource.sessionSource}}`
- **URL:** `{{contact.lastAttributionSource.url}}`
- **Campaign:** `{{contact.lastAttributionSource.campaign}}`
- **UTM Source:** `{{contact.lastAttributionSource.utmSource}}`
- **UTM Medium:** `{{contact.lastAttributionSource.utmMedium}}`
- **UTM Content:** `{{contact.lastAttributionSource.utmContent}}`
- **Referrer:** `{{contact.lastAttributionSource.referrer}}`
- **Campaign Id:** `{{contact.lastAttributionSource.campaignId}}`
- **FB ClickId:** `{{contact.lastAttributionSource.fbclid}}`
- **Google ClickId:** `{{contact.lastAttributionSource.gclid}}`
- **UTM Campaign:** `{{contact.lastAttributionSource.utmCampaign}}`
- **UTM Keyword:** `{{contact.lastAttributionSource.utmKeyword}}`
- **UTM Match Type:** `{{contact.lastAttributionSource.utmMatchType}}`
- **Ad Group ID:** `{{contact.lastAttributionSource.adGroupId}}`
- **Ad ID:** `{{contact.lastAttributionSource.adId}}`

* * *

## **INVOICE Merge Fields**

- **Name of the invoice:** `{{ invoice.name }}`
- **Invoice number:** `{{ invoice.number }}`
- **Issue date of the invoice:** `{{ invoice.issue_date }}`
- **Due date of the invoice:** `{{ invoice.due_date }}`
- **Subtotal amount of the invoice:** `{{ invoice.sub_total }}`
- **Discount amount applied to the invoice:** `{{ invoice.discount_amount }}`
- **Tax amount for the invoice:** `{{ invoice.tax_amount }}`
- **Total amount due on the invoice:** `{{ invoice.total_amount }}`
- **Title of the invoice:** `{{ invoice.title }}`
- **Link to the invoice:** `{{ invoice.url }}`

`
`

#### **Company Details**

- **Name of the company:** `{{ invoice.company.name }}`
- **Company phone number:** `{{ invoice.company.phone }}`
- **Company address:** `{{ invoice.company.address }}`
- **Company city:** `{{ invoice.company.city }}`
- **Company state:** `{{ invoice.company.state }}`
- **Company country:** `{{ invoice.company.country }}`
- **Company website:** `{{ invoice.company.website }}`
- **Company logo URL:** `{{ invoice.company.logo }}`

`
`

#### **Customer Details**

- **Name of the Invoice Contact:** `{{ invoice.customer.name }}`
- **Invoice Contact's first name:** `{{ invoice.customer.first_name }}`
- **Invoice Contact's last name:** `{{ invoice.customer.last_name }}`
- **Invoice Contact's phone number:** `{{ invoice.customer.phone }}`
- **Invoice Contact's email address:** `{{ invoice.customer.email }}`
- **Invoice Contact's company name:** `{{ invoice.customer.company }}`
- **Invoice Contact's address:** `{{ invoice.customer.address }}`
- **Invoice Contact's city:** `{{ invoice.customer.city }}`
- **Invoice Contact's state:** `{{ invoice.customer.state }}`
- **Invoice Contact's postal code:** `{{ invoice.customer.postal_code }}`

`
`

#### **Sender Details**

- **Name of the invoice sender:** `{{ invoice.sender.name }}`
- **Invoice Sender's email address:** `{{ invoice.sender.email }}`

`
`

#### **Card Information**

- **Brand of the card used for payment:** `{{ invoice.card.brand }}`
- **Last 4 digits of the card number:** `{{ invoice.card.last4 }}`

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

- If the field has a value, use the regular merge field (e.g., {{ contact.first\_name }}).


```
[Click here for more information on using If/Else in workflows](https://help.gohighlevel.com/en/support/solutions/articles/48001180266)
```

* * *

## **Related Articles**

- [Documents & Contracts Templates with Opportunity Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/155000004039)

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)

- [Custom Values Settings](https://help.gohighlevel.com/en/support/solutions/articles/155000004705)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001078171-list-of-merge-fields*  
*Generated on: 2025-10-28T15:56:58.146Z*
