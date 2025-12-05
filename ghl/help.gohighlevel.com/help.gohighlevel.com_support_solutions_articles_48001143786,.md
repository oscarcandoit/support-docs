---
url: "https://help.gohighlevel.com/support/solutions/articles/48001143786,"
title: " How To Build Check-in (Loop) Campaigns : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001143786,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Types of Workflow Campaigns](https://help.gohighlevel.com/support/solutions/folders/155000001356)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001143786,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Types of Workflow Campaigns](https://help.gohighlevel.com/support/solutions/folders/155000001356)
6. How To Build Check-in (Loop) Campaigns

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

# How To Build Check-in (Loop) Campaigns

Modified on: Tue, 11 Mar, 2025 at 10:10 AM

A digital check-in and ticketing system allows businesses to manage customer visits, offers, and campaigns efficiently. This article provides a step-by-step guide on setting up a digital check-in system in HighLevel, enabling businesses to generate QR-coded tickets, track redemptions, and automate workflows.

**TABLE OF CONTENTS**

- [Key Benefits of a Digital Check-In System](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Key-Benefits-of-a-Digital-Check-In-System)
- [Step 1: Setting Up the Check-In Form](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-1%3A-Setting-Up-the-Check-In-Form)
- [Step 2: Generating Prefilled URLs for Each Customer](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-2%3A-Generating-Prefilled-URLs-for-Each-Customer)
- [Step 3: Creating a Trigger Link for Better Tracking](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-3%3A-Creating-a-Trigger-Link-for-Better-Tracking)
- [Step 4: Sending QR Codes via Email](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-4%3A-Sending-QR-Codes-via-Email)
- [Step 5: Automating the Check-In Process](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-5%3A-Automating-the-Check-In-Process)
- [Step 6: Preventing Multiple Redemptions](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Step-6%3A-Preventing-Multiple-Redemptions)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001143786,#Frequently-Asked-Questions)

* * *

How to Create a Digital Check-In System Using GoHighLevel - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Create a Digital Check-In System Using GoHighLevel](https://www.youtube.com/watch?v=VQREMU2y8HY)

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

[Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)

[Watch on](https://www.youtube.com/watch?v=VQREMU2y8HY&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 16:47
•Live

•

* * *

## **Key Benefits of a Digital Check-In System**

A digital check-in system streamlines customer engagement and enhances business operations. Key benefits include:

- **Automated QR Code Generation**: Each customer receives a unique ticket.

- **Efficient Tracking**: Staff can verify ticket eligibility instantly.

- **Pre-filled Check-In Forms**: Reduces manual data entry.

- **Redemption Control**: Prevents multiple uses of the same offer.

- **Automated Review Requests**: Encourages feedback collection.

- **Customizable for Different Use Cases**: Ideal for restaurants, events, and promotions.


* * *

## **Step 1: Setting Up the Check-In Form**

A check-in form collects customer information and confirms ticket validity when scanned by staff.

1. **Go to Sites** in your HighLevel sub-account.

2. Navigate to **Forms > Builder** and click **Add Form**.

3. Select a **restaurant-related template** to save time.

4. Customize the form by:

   - Keeping essential fields: **Full Name, Phone Number, Email**.

   - Removing unnecessary fields.

   - Renaming the submission button to **Check-In**.
5. **Add a custom field:**

   - Click **Add Element** and create a **Single Line** field.

   - Name it **Redeem Status** and group it under **Contact**.

   - Save and **hide** this field (it will store ticket redemption info).
6. Click **Save Form**.


* * *

## **Step 2: Generating Prefilled URLs for Each Customer**

Prefilled URLs ensure that when a customer scans a QR code, their information is automatically filled in.

1. **Save your form** and click **Integrate** to copy the form link.

2. Modify the URL structure to prefill data dynamically:

   - Use query parameters to pass customer details:


     ```
     ?full_name=Contact.Name&phone=Contact.Phone&email=Contact.Email&redeem_status=False
     ```

   - Ensure consistency so that existing customer details match HighLevel records.
3. Save this modified link for use in QR code generation.


* * *

## **Step 3: Creating a Trigger Link for Better Tracking**

Trigger links shorten and track URL clicks, allowing workflow automation.

1. Go to **Marketing > Trigger Links**.

2. Click **Add Link** and name it accordingly (example: Free Dessert Campaign)

3. Paste the modified URL (from Step 2) and save it.


* * *

## **Step 4: Sending QR Codes via Email**

Each customer receives a unique QR code linked to their personal check-in form.

1. **Use API.QRServer.com** to generate QR codes dynamically.

2. Create an **email template**:

   - Add campaign details and instructions.

   - Insert the same **image header** as the form.

   - Use the following structure for dynamic QR code generation:


     ```
     https://api.qrserver.com/v1/create-qr-code/?data=<<TRIGGER_LINK>>
     ```

   - Replace`<<TRIGGER_LINK>>`with the actual trigger link.
3. Test the email by sending it to yourself and scanning the QR code.


* * *

## **Step 5: Automating the Check-In Process**

Ensure a smooth workflow by automating customer check-ins and redemption tracking.

1. **Create a workflow:**

   - Navigate to **Automations > Workflows** and click **Create Workflow**.

   - Set the **trigger** to **Form Submitted** and select your check-in form.

   - Add the following actions:

     - **Add a Tag**:`Free Dessert Checked-In`.

     - **Update Contact Field**: Set`Redeem Status`to`True`.

     - **Send a Review Request**(optional).

     - **Log Data to Google Sheets**(optional for tracking check-ins).
2. **Publish and Save** the workflow.


* * *

## **Step 6: Preventing Multiple Redemptions**

To prevent customers from using the same QR code multiple times:

1. **Modify the check-in form:**

   - Go to **Sites > Forms** and open the form.

   - Click **Conditional Logic** and add a rule:

     - **If Redeem Status = True**, **Disqualify the lead**.

     - Show a message: "You’ve already redeemed this ticket. Thank you for your visit."
   - Save the form.
2. **Test by scanning twice:**

   - First scan should allow check-in.

   - Second scan should show a disqualification message.

   - Verify in **Form Submissions** that only one successful submission exists.

* * *

## **Frequently Asked Questions**

### **Q: Can I use this system for events instead of restaurants?**

Yes! This system works for events, workshops, and other campaigns where unique ticketing is required.

### **Q: How do I track which customers redeemed the offer?**

You can track redemptions through **Form Submissions** or **Google Sheets Integration**.

### **Q: Can I customize the email template further?**

Absolutely! Modify the email content and QR code placement as needed.

### **Q: What happens if a customer tries to redeem a ticket twice?**

The system prevents duplicate redemptions by checking the`Redeem Status`and disqualifying them.

### **Q: How do I add SMS notifications for staff members?**

Use the **Workflow Automation** feature to send SMS notifications when a check-in occurs.

* * *

## **Related Articles**

- How to Create and Manage Forms in HighLevel

- Using Trigger Links for Campaign Tracking

- How to Automate Email Campaigns in HighLevel

- Creating Custom Fields for Better CRM Management


* * *

## **Next Steps**

1. Set up your **check-in form** following the instructions.

2. Generate **dynamic QR codes** and test email delivery.

3. Automate **workflows for check-in tracking** and redemption control.

4. Ensure **duplicate redemption prevention** is working correctly.

5. Monitor results and optimize your campaign.


This guide provides a structured way to implement a digital check-in system in HighLevel, ensuring smooth ticketing and campaign tracking. If you have questions, feel free to reach out!

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

- [How To Build Check-in (Loop) Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001143786-how-to-build-check-in-loop-campaigns)
- [Next Day Campaigns For Event Followup](https://help.gohighlevel.com/support/solutions/articles/48001170595-next-day-campaigns-for-event-followup)
- [How To Build SMS Opt-In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001170758-how-to-build-sms-opt-in-campaigns)
- [Timezones with Campaign reminders of event dates](https://help.gohighlevel.com/support/solutions/articles/48001155705-timezones-with-campaign-reminders-of-event-dates)
- [Repeating Reminders For Recurring Meetings & Events (Guest Post)](https://help.gohighlevel.com/support/solutions/articles/48001172566-repeating-reminders-for-recurring-meetings-events-guest-post-)

## Related Articles

- [Build a 5-Star Reputation and Bring Back Lapsed Patients — Without Manual Follow-Up, Chiropractors](https://help.gohighlevel.com/support/solutions/articles/155000005257-build-a-5-star-reputation-and-bring-back-lapsed-patients-without-manual-follow-up-chiropractors)
- [Fill Your Calendar: Guide to Running Ad Campaigns That Actually Book](https://help.gohighlevel.com/support/solutions/articles/155000005119-fill-your-calendar-guide-to-running-ad-campaigns-that-actually-book)
- [The Gains Game: Keep Clients Coming Back with Retention & Rebooking Workflows](https://help.gohighlevel.com/support/solutions/articles/155000004955-the-gains-game-keep-clients-coming-back-with-retention-rebooking-workflows)
- [Dentist Snapshot - Free Whitening Offer](https://help.gohighlevel.com/support/solutions/articles/48001079556-dentist-snapshot-free-whitening-offer)
- [Reputation ROI: The Real Estate Agent's Playbook for Retention & Referrals](https://help.gohighlevel.com/support/solutions/articles/155000005038-reputation-roi-the-real-estate-agent-s-playbook-for-retention-referrals)
- [Happy Clients = More Closings: Mortgage Retention & Referral Automation Playbook](https://help.gohighlevel.com/support/solutions/articles/155000005277-happy-clients-more-closings-mortgage-retention-referral-automation-playbook)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001143786,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001143786-how-to-build-check-in-loop-campaigns/hit)