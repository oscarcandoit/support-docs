---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications"
title: " Client Portal App - Custom mobile app notifications : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Client Portal](https://help.gohighlevel.com/support/solutions/155000000004)
4. [Client Portal](https://help.gohighlevel.com/support/solutions/folders/155000000015)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Client Portal](https://help.gohighlevel.com/support/solutions/155000000004)
   - [Client Portal](https://help.gohighlevel.com/support/solutions/folders/155000000015)
6. Client Portal App - Custom mobile app notifications

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

# Client Portal App - Custom mobile app notifications

Modified on: Thu, 6 Feb, 2025 at 12:38 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Action-Details)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Example)
- [Additional Notes](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications#Additional-Notes)

* * *

### **Overview**

The **Smart Push Notification** action allows users to send personalized push notifications to their contacts via the Client Portal. These notifications can include customized titles and messages and redirect users to specific pages such as **Communities** or **Courses** to enhance engagement.

* * *

### **Action Name**

Smart Push Notification

* * *

### **Action Description**

This action enables users to send engaging push notifications through workflows. It allows customization of the notification's title and message, supports dynamic personalization using placeholders, and provides redirection options within the Client Portal for seamless user interaction.

* * *

### **Action Details**

| **Field Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | Pre-filled as "Smart Push Notification." | No |
| **Title** | Enter a catchy title for the notification (max: 100 characters). Supports placeholders like `{{contact.first_name}}`. | Yes |
| **Message Body** | The main content of the notification (max: 300 characters). Supports placeholders like `{{contact.last_name}}`. | Yes |
| **Redirection** | Select where the user will be redirected after clicking the notification. Options: Communities, Courses. | Yes |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041098978/original/kPjkNiM4x2hB9YkTlZwJ31hSykrDgnwSMQ.png?1738823772)

* * *

### **How to Configure**

1. **Add the Action to a Workflow**

   - Navigate to **Automation > Workflows**.
   - Open an existing workflow or create a new one.
   - Click **\+ Add Action**, type "Smart" in the search bar, and select **Smart Push Notification**.
2. **Configure the Fields**

   - **Title:** Enter a personalized title (e.g., "Welcome {{contact.first\_name}}!").
   - **Message Body:** Add a detailed notification message.
   - **Redirection:** Choose the destination page (Communities or Courses).
3. **Save and Activate**

   - Click **Save Action** to confirm the configuration.
   - Test the workflow with a sample contact.
   - Activate the workflow once satisfied.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041099029/original/-ZvLYGBHeIqY35ix-r-xV2YC-wsSz_nOiQ.png?1738823827)

* * *

### **Example**

Consider a scenario where a user wants to notify a contact about a new community post:

- **Title:** "New Community Update!"
- **Message Body:** "Hi {{contact.first\_name}}, check out the latest post in our community."
- **Redirection:** Select **Communities**.

When the workflow is triggered, the contact receives a push notification that redirects them to the Community page.

* * *

### **Additional Notes**

- This action will only send notifications to registered Client Portal users. Non-registered users will not receive notifications.
- Use clear and concise language in titles and messages to maximize engagement.
- Ensure all mandatory fields are filled before saving the workflow.

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

- [How can my customers use the Client Portal?](https://help.gohighlevel.com/support/solutions/articles/155000000197-how-can-my-customers-use-the-client-portal-)
- [How to set up the Client Portal?](https://help.gohighlevel.com/support/solutions/articles/155000000193-how-to-set-up-the-client-portal-)
- [Client Portal Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001205-client-portal-dashboard)
- [Client Portal SSO Magic Links: Enable One-Click Access to Client Apps](https://help.gohighlevel.com/support/solutions/articles/155000001667-client-portal-sso-magic-links-enable-one-click-access-to-client-apps)
- [Notifications inside Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000001719-notifications-inside-client-portal)
- [App Permissions in Client Portal: Enabling/Disabling a child app](https://help.gohighlevel.com/support/solutions/articles/155000002136-app-permissions-in-client-portal-enabling-disabling-a-child-app)

## Related Articles

- [Notifications inside Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000001719-notifications-inside-client-portal)
- [Notifications for Invoices, Estimates, and Contracts in Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000005706-notifications-for-invoices-estimates-and-contracts-in-client-portal)
- [Legacy Membership To Client Portal Migration](https://help.gohighlevel.com/support/solutions/articles/155000002045-legacy-membership-to-client-portal-migration)
- [Client Portal Branded Mobile APP -Full Setup Guide For Agency](https://help.gohighlevel.com/support/solutions/articles/155000002617-client-portal-branded-mobile-app-full-setup-guide-for-agency)
- [Notification Preferences for Courses in the Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000004655-notification-preferences-for-courses-in-the-client-portal)
- [Branded Mobile App Builder: In-app Form and Customizer](https://help.gohighlevel.com/support/solutions/articles/155000004168-branded-mobile-app-builder-in-app-form-and-customizer)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications/hit)