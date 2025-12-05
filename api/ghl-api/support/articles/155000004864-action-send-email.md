---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004864-action-send-email
category: articles
type: article
scraped: 2025-10-28T16:19:05.169Z
title:  Action - Send Email : LeadConnector 
status_code: 200
---

#  Action - Send Email : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Action - Send Email  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004864-action-send-email\# "Print this Article")

Modified on: Mon, 24 Mar, 2025 at 4:56 AM

* * *

In this article, you’ll learn how to use the “Send Email” action in your workflow to automate and personalize email communication with your contacts. We’ll guide you through the key benefits of this action, provide a step-by-step process for setting it up, and share a practical example to help you get started. By the end of this article, you’ll be equipped to enhance your email automation and improve customer engagement.

* * *

**TABLE OF CONTENTS**

    1\.    What is the “Send Email” Workflow Action?

    2\.    Key Benefits of Using the “Send Email” Action

    3\.    Step-by-Step Process for Using the “Send Email” Workflow Action

    4\.    Example: Sending a Booking Confirmation Email

* * *

# **What is the “Send Email” Workflow Action?**

The “Send Email” action in your automation workflow allows you to send personalized and automated emails to your contacts at the right time. This action is a vital component of marketing, customer service, and follow-up processes, ensuring that your communication is timely, effective, and personalized. Whether you’re confirming bookings, sending promotional offers, or notifying customers about updates, the “Send Email” action helps streamline your communication.

* * *

## **Key Benefits of Using the “Send Email” Action**

    1\.   **Timely Communication:** Automates the sending of emails, ensuring your contacts receive messages at the most appropriate moments without manual effort.

    2\.    **Personalization:** You can customize the email’s content using dynamic fields, such as the recipient’s first name, appointment details, or purchase history, to make each message more engaging.

    3\.   **Improved Customer Experience:** By automatically sending confirmation emails, reminders, or follow-ups, you improve customer satisfaction and reduce the chances of miscommunication.

    4\.  **Time-Saving:** By setting up email templates and automated workflows, you reduce the need for manual email sending, saving time and ensuring consistency.

    5\.    **Flexibility:** You can attach files, use custom templates, and modify email content to suit your business needs.

* * *

## **Step-by-Step Process for Using the “Send Email” Workflow Action**

**1\.    Add the “Send Email” Action to Your Workflow**

    •    Open your workflow editor and drag the “Send Email” action into your workflow at the appropriate point (e.g., after a trigger like a booking or form submission).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736641/original/rSRvpKGC3aJWhSTfK9163dJ91T94-kN6dQ.png?1733315232)

**2\.    Configure the Action Name**

    •    Assign a clear, descriptive name for the action (e.g., “Booking Confirmation Email”). This helps you easily identify the action in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736677/original/QoF_h9pWR9esYRh3Iu940B1CB4PPtZ93HA.png?1733315246)

**3\.    Fill in Sender Details**

    •    From Name: Enter the name that will appear as the sender (e.g., “My Company”).

    •    From Email: Input the email address from which the email will be sent (e.g., “mycompany@email.com”).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736717/original/44AB5dukboaRiyt2oXEn6KTnzqjoxicJKw.png?1733315267)

**4\.    Create the Subject Line**

    •    Enter a relevant subject line that gives the recipient an idea of the email content (e.g., “Thank You for Booking with Us!”).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736764/original/QnROSypS1wnDp6DKT7WG1QDejTm-X7i2iA.png?1733315282)

**5\.    Choose or Create the Email Body**

    •    **Templates:** Select an email template from the dropdown (optional). If no template is available, you can write a custom message in the Email Body field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738878/original/nkLAq44Occ8I3hXgt8Zm6hfDn_i2x5hXZw.png?1733316773)

    •    **Email Body :** Create your email body here. Use custom values to personalize the message. For example:

Hi {{contact.first\_name}}, Thank you for booking with us! Your appointment is scheduled for {{appointment.start\_time}}.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738571/original/mp7rUi8BRDm0C-Nh-mnkAqd_N-HjSocj1A.png?1733316613)

**6\.    Add Attachments (Optional)**

    •    If necessary, you can attach files to the email, such as booking confirmations, product details, or invoices. Attachments can be included via URLs.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738514/original/bAlI8GYnifiSE-txEgcsN0Jy1BpiszRCdQ.png?1733316597)

**7\.    Test the Email**

    •    Before finalizing, it’s a good idea to send a test email. Enter an email address in the Test Emails field and click Send Test Mail to ensure the content and formatting are correct.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738469/original/qpq4RxBV4SAhDKOQ6MiEsfATDqh_BTnghg.jpeg?1733316555)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738469/original/qpq4RxBV4SAhDKOQ6MiEsfATDqh_BTnghg.jpeg?1733316555)

**8\.    Save and Activate the Action**

    •    Once you’re satisfied with the configuration, click Save Action. The email will now be sent automatically when the workflow reaches this step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738495/original/2qFY4tN4T9IcNYCHOzabMCRo_k1i3AD66Q.png?1733316579)

**9\. Cc/Bcc in Email Action**

- Add cc/bcc fields in the email action by clicking on the cc/bcc buttons.
- When you click on the button the respective fields will populate.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818660/original/l2h_I4sEcgG37HOd1q8P6CVbkmo7uZAGKA.png?1742805133)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818693/original/c8N1epW7-bCdigKhX9qWZdBARv5szZtS5g.png?1742805148)

* * *

## **Example: Sending a Booking Confirmation Email**

Let’s walk through an example of using the “Send Email” action to send a booking confirmation email to customers who book an appointment.

    1\.   **Trigger:** The workflow begins when a customer makes a booking.

    2\.    **Action:** Add the “Send Email” action to send a confirmation email to the customer.

    •    **Action Name:** Booking Confirmation Email

    •    **From Name:** My Company

    •    **From Email:** mycompany@email.com

    •    **Subject:** Thank You for Booking with Us!

    •    **Email Body:**

Hi {{contact.first\_name}},

Thank you for booking with us! Your appointment is scheduled for {{appointment.start\_time}} on {{appointment.only\_start\_date}}.

We look forward to seeing you soon!

    3\.    **Attach Files (Optional):** Add any relevant documents (e.g., a PDF with additional appointment details).

    4\.   **Test the Email:** Send a test email to check the content.

    5\.    **Save and Activate:** Save the email action in your workflow, and it will automatically be sent when a booking is made.

**Points to Remember for Cc/Bcc**

- You can add cc, bcc or both in the Email action.
- Cc and Bcc emails \*\*will not be\*\* reflected in the Email Stats.
- The Test Email feature \*\*will not\*\* work for Cc/Bcc Emails
- Success and Failure will depend only on the Contact Email (to email) and not Cc/Bcc Emails/
- User can add multiple cc/bcc emails. Emails need to be comma separated.
- What if 1 of the cc/bcc emails is invalid - The invalid email will be skipped but other valid email will go through.
- Both the fields are non mandatory.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004864-action-send-email/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004864-action-send-email*  
*Generated on: 2025-10-28T16:19:05.169Z*
