---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email"
title: " How to Let Users Choose a Webinar Slot with a Form and Send a Confirmation Email : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
6. How to Let Users Choose a Webinar Slot with a Form and Se...

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

# How to Let Users Choose a Webinar Slot with a Form and Send a Confirmation Email

Modified on: Tue, 2 Sep, 2025 at 12:31 AM

This guide explains how to set up a form in HighLevel where users can select a preferred webinar time slot and automatically receive a confirmation email with their choice.

This method is best if you want a single registration form, multiple time options, and an instant confirmation message.

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#Overview)
- [Step 1: Create a Custom Field for Webinar Slots](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#Step-1%3A-Create-a-Custom-Field-for-Webinar-Slots)
- [Step 2: Add the Field to a Form](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#Step-2%3A-Add-the-Field-to-a-Form)
- [Step 3: Set Up the Confirmation Email](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#Step-3%3A-Set-Up-the-Confirmation-Email)
- [Step 4: Optional Reminder Emails or SMS](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#Step-4%3A-Optional-Reminder-Emails-or-SMS)
- [FAQs](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email#FAQs)

* * *

## Overview

- Create a custom field to store the webinar time slot.

- Add the field to a registration form.

- Use a workflow to send a confirmation email when the form is submitted.

- Optionally, add reminders before the webinar.


* * *

## Step 1: Create a Custom Field for Webinar Slots

1. Navigate to **Settings → Custom Fields**.

2. Click **\+ Add Field**.

3. Select **Dropdown** or **Radio Select**.

4. Name the field: **Choose Your Webinar Time**.

5. Set the **Object** to **Contact**.

6. Add your slot options, such as:

   - Tuesday 7PM

   - Thursday 2PM

   - Saturday 11AM
7. Leave **Allow Custom Values** unchecked. This ensures users can only choose one of your preset times.

8. Save the field.


* * *

## Step 2: Add the Field to a Form

1. Go to **Sites → Forms → Create (or Edit)**.

2. From the **Custom Fields** tab, drag the new **Choose Your Webinar Time** field onto your form.

3. Add other required fields (First Name, Last Name, Email, etc.).

4. Save the form.


At this point, users can select their webinar slot when registering.

* * *

## Step 3: Set Up the Confirmation Email

Form settings only control on-page behavior after submission (thank-you message, redirect, pixels). To send an email, you need a workflow.

1. Go to **Automation → Workflows → Create Workflow**.

2. Add a **Trigger: Form Submitted → Select your webinar form**.

3. Add a **Send Email** action.

   - Subject: Webinar Registration Confirmed

   - Body:


     ```
     Hi {{contact.first_name}},

     Thank you for registering. You selected: {{custom_values.choose_your_webinar_time}}

     Here’s your webinar link: [Insert Zoom/Meeting Link]

     See you there.
     ```
4. Save and publish the workflow.


Now, every registrant will immediately get a personalized confirmation email with the correct slot.

* * *

## Step 4: Optional Reminder Emails or SMS

If you want to send reminders before the webinar:

1. In the same workflow, add **Wait Until** actions relative to the webinar time.

2. Send reminders, for example:

   - 24 hours before

   - 1 hour before

   - 10 minutes before

If you run multiple sessions, you can add **If/Else conditions** in the workflow based on the chosen time slot.

* * *

## FAQs

**Q1. Should I allow custom values in the dropdown/radio field?**

No. Keep it unchecked so registrants can only choose from your listed webinar times.

**Q2. Can I do this without a workflow?**

Only if you want a thank-you message on the page. Sending confirmation emails always requires automation.

**Q3. Can I branch reminders by time slot?**

Yes. Add an **If/Else** step in the workflow based on the field value “Choose Your Webinar Time.”

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

- [Two-Step Order Form (Step 2: Adding An Up-Sell Product)](https://help.gohighlevel.com/support/solutions/articles/48000980306-two-step-order-form-step-2-adding-an-up-sell-product-)
- [Two-Step Order Form (Step 1)](https://help.gohighlevel.com/support/solutions/articles/48000980307-two-step-order-form-step-1-)
- [Style the Funnel](https://help.gohighlevel.com/support/solutions/articles/48000980309-style-the-funnel)
- [Desktop View VS Mobile View (Funnels)](https://help.gohighlevel.com/support/solutions/articles/48000980310-desktop-view-vs-mobile-view-funnels-)
- [Tracking Scripts/Pixel Code](https://help.gohighlevel.com/support/solutions/articles/48000980311-tracking-scripts-pixel-code)
- [SEO Meta Data](https://help.gohighlevel.com/support/solutions/articles/48000980312-seo-meta-data)

## Related Articles

- [Webinar Funnels](https://help.gohighlevel.com/support/solutions/articles/155000004125-webinar-funnels)
- [Complete Guide to Creating Webinars!](https://help.gohighlevel.com/support/solutions/articles/155000006062-complete-guide-to-creating-webinars-)
- [Calendar: Email, In-App, SMS & Whatsapp Appointment Notifications](https://help.gohighlevel.com/support/solutions/articles/155000003441-calendar-email-in-app-sms-whatsapp-appointment-notifications)
- [How to create a LinkedIn lead form in Ad Manager](https://help.gohighlevel.com/support/solutions/articles/155000006453-how-to-create-a-linkedin-lead-form-in-ad-manager)
- [Template Library for Webinars](https://help.gohighlevel.com/support/solutions/articles/155000005504-template-library-for-webinars)
- [Getting Started - Automatic Email and SMS Followup](https://help.gohighlevel.com/support/solutions/articles/155000005060-getting-started-automatic-email-and-sms-followup)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email/hit)