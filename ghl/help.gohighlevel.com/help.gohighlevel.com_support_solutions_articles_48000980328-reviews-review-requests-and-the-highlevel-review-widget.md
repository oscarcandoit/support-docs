---
url: "https://help.gohighlevel.com/support/solutions/articles/48000980328-reviews-review-requests-and-the-highlevel-review-widget"
title: " Customize Review Request Messages (SMS/Email) | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000980328-reviews-review-requests-and-the-highlevel-review-widget#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reputation Management & Reviews](https://help.gohighlevel.com/support/solutions/48000449583)
4. [Review Requests](https://help.gohighlevel.com/support/solutions/folders/48000666025)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000980328-reviews-review-requests-and-the-highlevel-review-widget#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reputation Management & Reviews](https://help.gohighlevel.com/support/solutions/48000449583)
   - [Review Requests](https://help.gohighlevel.com/support/solutions/folders/48000666025)
6. How to Customize the Review Request Messages (SMS/Email)

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

# How to Customize the Review Request Messages (SMS/Email)

Modified on: Fri, 21 Nov, 2025 at 6:04 AM

Make it easy for customers to leave reviews with customized SMS and Email requests in HighLevel. This guide shows how to enable review requests, edit message templates, control cadence and retries, and set your Review Link.

* * *

# **What is Review Request Messaging?**

Review Request messaging automates how your location asks customers for public reviews. HighLevel can send personalized **SMS** and **Email** messages after check‑in, repeat them on a schedule until the customer clicks the review link, and direct traffic to the right review destination using your **Review Link**.

* * *

# **Key Benefits of Review Request Messaging**

Understanding the benefits helps you configure requests in a way that fits your business goals—more positive reviews, fewer manual tasks, and consistent branding.

- **Brand consistency:** Build templates that match your tone and branding across SMS and Email.

- **Automation:** Schedule when the first request sends and how often to retry until the customer clicks.

- **Personalization:** Use merge fields like contact and location variables for tailored messages.

- **Flexibility:** Point customers to Google Business Profile or a custom destination; add multiple links in emails.

- **Control:** Choose which templates are “Live” and which power each retry in your sequence.

* * *

# **Review Link (Balancing vs. Custom Link)**

The Review Link is the URL inserted into your requests. You can allow HighLevel to balance reviews across supported platforms (e.g., Google) or override with a single destination using a custom URL.

**Where to find it:** **Reputation → Settings → Review Link**

- **Review Balancing:** Toggle on to automatically distribute review traffic across configured platforms.

- **Get Reviews on Google:** Connect Google Business Profile (GBP) to route traffic to your Google listing.

- **Custom Link:** Select and paste a specific URL if you want to send all customers to a single page.

```
Tip: If you use a Custom Link, confirm it opens directly to your review form. If you use Balancing, make sure your integrations are connected.
```

* * *

# **SMS Requests**

SMS requests are quick and personal. Use the enable toggle to start sending, define when the first text goes out, set retry cadence, and create templates that include your review link and optional image.

**Navigation:** **Reputation → Settings → SMS Requests**

**Enable & cadence controls**

- **Enable SMS Review Requests:** Turn the top‑right toggle on.

- **When to send SMS after check‑in?:** Choose when the first text sends (e.g., Immediately).

- **Until clicked, repeat this every:** Pick an interval (supports **Custom** with number + **Days**).

- **Maximum retries:** Set how many follow‑ups can send if the review link isn’t clicked.

**Create or edit an SMS template**

1. Click **Create New** (or **Edit** on an existing template).

2. Choose **Create New from Scratch** or **Select from Pre‑Built Templates**.

3. In the builder, add a **Template Name**. Optionally enable **Request with Image** (or add an image URL).

4. Write your message and insert the review link token: {{reputation.review\_link}}.

5. Click **Save**.


```
Cost note: If you enable Request with Image, the message may send as MMS and incur different carrier fees. Confirm with your provider.
```

* * *

# **Email Requests**

Email requests allow richer branding, images, and multiple review destinations. Turn on the feature, set timing and retries, then create or import templates in the drag‑and‑drop editor.

**Navigation:** **Reputation → Settings → Email Requests**

**Enable & cadence controls**

- **Enable Email Review Requests:** Turn the top‑right toggle on.

- **When to send Email after check‑in?:** Choose the initial delay (e.g., 1 Hour).

- **Until clicked, repeat this every:** Set the repeat interval (supports **Custom** with number + **Days**).

- **Maximum retries:** Choose how many follow‑ups to send.

**Create or import an Email template**

1. Click **Create New** → **Create new Template** or **Import from Template Library**.

2. In the email builder, add your branding and content.

3. Drag the **Review Link** element into the email (or configure the primary CTA button to use the Review Link).

4. Save the template.


* * *

# **Select the Live & Retry Templates (Sequence)**

Turning on SMS/Email requests isn’t enough—you must also tell HighLevel which template to use for the initial send and for each retry slot. This selection controls exactly what customers receive at each step.

- **For Email:** Click **Set Email Templates**, select the **Live** template and assign templates to each **Retry** slot, then **Save**.

- **For SMS:** Click **Set SMS Templates**, then select your Live/Retry templates and Save.

* * *

# **How To Setup Review Request Messaging (Step‑by‑Step)**

### **Set Review Link**

From the left sidebar, click **Reputation**, then open the **Settings** tab at the top. In **Review Link**, either enable the **Review Balancing** toggle or select the **Custom Link** radio and paste your URL in **Setup your custom link**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933873/original/QB3j9NV406CrZGGrHw_hZ5PhNhneE107XQ.jpeg?1763723464)

### **Enable SMS Requests**

Open **Reputation → Settings → SMS Requests** and toggle the switch in the top-right to activate automated review texts. Set **When to send after check-in**, choose the **repeat interval** and **Maximum retries**, then use **Create New** or **Set SMS Templates** to manage the messages shown below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933920/original/gxWefKkRxYWGp630dnmpJmEt2GauEUvFPw.jpeg?1763723498)

### **Add SMS Template**

Click **Create New** to build a new SMS review request, or use the **pencil (edit)** icon to modify the selected template. Templates you create or edit here will appear in the list and can be assigned to the live or retry sequence later.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058937902/original/JkADEj50izgPa70Pve3V3O8pGUFYEZ-B_Q.png?1763725571)

### **Choose Template Type**

After clicking **Create New**, pick how you want to start: **Create New from Scratch** or **Select from Pre-Built Templates**. Click **Select** under your preferred option—start blank for full control or use a proven template to move faster.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938037/original/6ufdGZ9VGsp7Sd_gom24_CQn2vBlfoyEPg.png?1763725586)

### **Choose Prebuilt**

From the **SMS Template Library**, select a pre-built option such as **Request a Review** (note the visible character count for reference). Click **Edit Template** to open it for customization, where you can adjust copy and keep the {{reputation.review\_link}} token.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938158/original/2p9Gcm_rwylwfHoQt5GN06fRSC6AMuOFQg.png?1763725602)

### **Customize SMS Template**

Enter a **Template Name**, optionally enable **Request with Image** to upload or link an image, and write your message using {{reputation.review\_link}}. Check the live phone preview on the right, then click **Save** to store the template.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938272/original/0QeAG2m0_i5c6CJNuN-LoK2y27GC4heRVA.png?1763725619)

### **Enable Email Requests**

Open **Reputation → Settings → Email Requests** and turn on the toggle in the top-right to activate automated review emails. Use the controls to set when to send after check-in, the repeat interval until clicked, and the maximum retries, then manage templates via **Set Email Templates** or **Create New**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938389/original/wwV6X0pG3zkFFBmww9-QoknrHLcSDpY3xQ.png?1763725650)

### **Assign Email Sequence**

Click **Set Email Templates** to choose which template sends first (**Live**) and which ones power each **Retry** slot from the left-side dropdowns. Review or edit the subjects on the right if needed, then click **Save** to apply the sequence.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938399/original/4BPED3NN1OybzIvDJvd-5dbY709-4ozMsA.png?1763725667)

### **Create/Import Email**

Use **Create New** (dropdown) to **Create new Template** or **Import from Template Library** for your email request. To modify an existing design, click the **⋯** menu on a template card and choose **Edit Templates**; you’ll assign these later via **Set Email Templates**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938411/original/Pn961HFj6HEg6tsZzG_RCNNeaB1IOamUmw.png?1763725685)

### **Design Email Content**

Use the drag-and-drop email builder to add text, images, and buttons from the **Elements** panel on the left. Drag the **Review Link** element (bottom-left) into your layout so the CTA opens your configured review URL, then click **Save** in the top-right.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938476/original/vyrtAQYYaTlWHTHlJSSZdcqI83g8lMQCYg.png?1763725704)

* * *

# **Where You Can Send Review Requests**

Once your templates and cadence are configured, you can request reviews from several places in HighLevel. Use the method that best fits your team’s workflow.

- **Reputation → Requests:** Send and track requests in bulk or individually.

- **Contact record:** Open a contact and choose **Send Review Request**.

- **Workflows:** Use the **Review Request** action to automate sends based on triggers (e.g., after an appointment status change).

- **Channels:** SMS and Email are covered here; **WhatsApp Requests** are available in **Reputation → Settings → WhatsApp Requests** (configure separately if needed).

* * *

# **Frequently Asked Questions**

**Q: What happens after a customer clicks the review link?**

The repeat schedule stops for that channel once the click is detected, preventing additional retries for that contact.

**Q: What’s the difference between Review Balancing and a Custom Link?**

**Balancing** distributes traffic across connected review sites (e.g., Google). **Custom Link** sends everyone to a single destination you choose.

**Q: Which token should I use in SMS for the review URL?**

Use {{reputation.review\_link}}. It automatically uses the Review Link you configured under **Reputation → Settings → Review Link**.

**Q: Can emails include more than one review destination?**

Yes. In the Email builder, you can use the **Review Link** element and, in some templates, configure multiple review buttons if supported by your design.

**Q: How many retries should I set?**

Most teams start with 2–3 retries. The right number depends on engagement, industry norms, and compliance requirements.

**Q: Does adding an image to an SMS change costs?**

It may send as MMS, which can have different carrier pricing. Check your messaging provider’s rates.

**Q: Do I need Google Business Profile connected?**

Only if you want to route reviews to Google using Balancing. If you prefer another site or your own page, set a **Custom Link** instead.

**Q: Can I automate requests without manual sending?**

Yes. Add the **Review Request** action in a Workflow to trigger sends automatically (e.g., after “check‑in”).

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

- [How to Customize the Review Request Messages (SMS/Email)](https://help.gohighlevel.com/support/solutions/articles/48000980328-how-to-customize-the-review-request-messages-sms-email-)
- [How to Dispute a Google Review and Check on the Dispute Status](https://help.gohighlevel.com/support/solutions/articles/48001180761-how-to-dispute-a-google-review-and-check-on-the-dispute-status)
- [Review widget - Powered By going to Bad request page](https://help.gohighlevel.com/support/solutions/articles/48001181136-review-widget-powered-by-going-to-bad-request-page)
- [How to fix when the Review Request Email is not sending](https://help.gohighlevel.com/support/solutions/articles/48001204155-how-to-fix-when-the-review-request-email-is-not-sending)
- [How to Send Review Requests](https://help.gohighlevel.com/support/solutions/articles/48001222668-how-to-send-review-requests)
- [Reputation Management - Customizing & Displaying the Review Widget](https://help.gohighlevel.com/support/solutions/articles/48001222766-reputation-management-customizing-displaying-the-review-widget)

## Related Articles

- [Attaching Images to Review Requests](https://help.gohighlevel.com/support/solutions/articles/155000006936-attaching-images-to-review-requests)
- [Build a 5-Star Reputation and Bring Back Patients — Without Manual Follow-Ups](https://help.gohighlevel.com/support/solutions/articles/155000005297-build-a-5-star-reputation-and-bring-back-patients-without-manual-follow-ups)
- [Get Discovered: The Real Estate Agent's Guide to Dominating Google Search](https://help.gohighlevel.com/support/solutions/articles/155000005037-get-discovered-the-real-estate-agent-s-guide-to-dominating-google-search)
- [Full Bookings, Full Pipeline: How Real Estate Consultants Can Rank Higher on Google & Close More Deals](https://help.gohighlevel.com/support/solutions/articles/155000005271-full-bookings-full-pipeline-how-real-estate-consultants-can-rank-higher-on-google-close-more-deal)
- [Full Blast: How to Rank Higher on Google & Close More Mortgage Leads](https://help.gohighlevel.com/support/solutions/articles/155000005276-full-blast-how-to-rank-higher-on-google-close-more-mortgage-leads)
- [Spotless Rankings: The Cleaning & Maintenance Business Guide to Dominating Google Search](https://help.gohighlevel.com/support/solutions/articles/155000004631-spotless-rankings-the-cleaning-maintenance-business-guide-to-dominating-google-search)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000980328-reviews-review-requests-and-the-highlevel-review-widget)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000980328-how-to-customize-the-review-request-messages-sms-email-/hit)