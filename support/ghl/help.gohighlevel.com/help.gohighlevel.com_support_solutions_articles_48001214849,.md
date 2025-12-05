---
url: "https://help.gohighlevel.com/support/solutions/articles/48001214849,"
title: " How to Use Do Not Disturb (DND) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001214849,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
4. [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001214849,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
   - [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
6. How to Use Do Not Disturb (DND)

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

# How to Use Do Not Disturb (DND)

Modified on: Fri, 19 Sep, 2025 at 12:11 PM

This article provides an in-depth guide on the "Do Not Disturb" (DND) feature in HighLevel, explaining its purpose, key benefits, and how to configure it effectively. You'll also find step-by-step instructions for managing DND settings across various communication channels, practical use cases, and answers to common questions about this feature.

* * *

## **What is Do Not Disturb (DND)?**

The Do Not Disturb (DND) feature in HighLevel allows businesses to manage communication preferences by enabling or disabling specific channels for individual contacts. This ensures that communications are aligned with each contact's preferences, enhancing customer satisfaction and compliance. DND settings can be applied globally or tailored to specific channels such as Email, SMS, Calls, Facebook Messenger, Google My Business (GMB), and WhatsApp.

* * *

## **Key Benefits of Do Not Disturb (DND)**

Implementing the DND feature offers several advantages:

- **Respect Communication Preferences:** Automatically exclude contacts who have opted out of specific communication channels, ensuring compliance with privacy regulations.

- **Enhanced Customer Satisfaction:** Reduces unwanted contact, leading to a better customer experience and higher trust.

- **Improved Automation Efficiency:** Simplifies workflows by enabling or disabling communication-based on DND status.

- **Customizable Channel Control:** Allows businesses to manage DND settings per channel or apply them globally across all channels.

- **Streamlined Compliance Management:** Helps businesses remain compliant with communication laws and guidelines by automating opt-outs for SMS and email.


* * *

## **How to Configure Do Not Disturb (DND) Settings**

Proper configuration of DND settings ensures that communications are sent according to each contact's preferences. Follow these steps to set up DND in HighLevel:

1. **Access the Contact Record:**





   - Navigate to the "Contacts" section in HighLevel.

   - Select the contact you wish to update.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041821925/original/BDNEviSudESjixoY2L0JC722Ftn0_VCHVQ.jpeg?1739893461)
2. **Modify DND Settings:**





   - Within the contact's profile, locate the " **DND**" section, which is usually in the left column at the bottom.

   - Choose to **Enable or Disable DND** for all channels or select specific channels ( **Email, SMS, Calls**, and **GBP**).



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041822216/original/hFVAhkngw1RHKPYv9s_PNb_a_SSwGuPW2w.png?1739893694)

```
Please Note: We do have a sepearate checkbox for DND Inbound Calls and SMS in which Inbound calls from the contact's number will be directly blocked whereas Inbound SMS will be blocked at system level so charges will incur
```

* * *

## **Managing DND for Specific Channels**

HighLevel allows for granular control over communication channels. Here's how DND functions for key channels:

### **1\. Email**

- **Automatic DND Activation:** The system enables DND if a contact unsubscribes, marks an email as spam, or if there are permanent failures like bounces.

- **Removing Email DND:** To remove DND, ensure the contact's email is valid and not on suppression lists. Then, manually update the DND status in the contact's profile.


### **2\. SMS**

- **Automatic DND Activation:** DND is enabled if a contact replies with opt-out keywords (e.g., STOP, UNSUBSCRIBE) or if specific error codes (30003, 30004, 30005, 30006) are received from the service provider.

- **Removing SMS DND:**

  - _Temporary DND:_ Can be updated directly within the contact's record.
  - _Permanent DND:_ Requires the contact to send an opt-in message (e.g., START) or for the agency to provide proof of opt-in to support for manual removal.

### **3\. Calls**

- **Inbound DND:** Enabling DND for calls ensures that no incoming calls from the contact are forwarded or displayed, providing uninterrupted workflow.

- **Managing Call DND:** Adjust the DND settings within the contact's profile to enable or disable call reception as needed.


### **4\. Facebook Messenger, GMB, and WhatsApp**

- **Channel-Specific DND:** Once integrated, DND settings can be applied to these channels individually, allowing contacts to opt out of specific platforms while remaining active on others.

- **Configuration:** Access the contact's profile and adjust the DND settings for the desired channel accordingly.


* * *

## **Automating DND Settings with Workflows**

Automations help you apply, clear, and react to DND consistently at scale. This improves compliance, data hygiene, and team response times.

**Useful Triggers & Actions**

- **Contact DND**: Fires when DND is enabled/disabled; filter by channel (Email/SMS/Calls) to branch logic.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054166351/original/-mp6UtHJnmlobYoh7zOxrtfLwxC6JuG-4g.png?1758296602)

- **Trigger Link Clicked**: Use unsubscribe trigger links for Email/SMS and route to a workflow that sets per‑channel DND.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054166344/original/TwsYnA3KNJ4j74OHiAmjnUv224upeYJxkA.png?1758296589)

- **Enable/Disable DND Action:** This Action lets you automatically turn a contact’s _Do Not Disturb_ status on or off within workflows.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054172936/original/tfQJTuHRPc41LdDChkO57nrbZtSLn_WXcw.png?1758301419)


**Key Actions**

- **DND Contact**: Enable/disable **global** or **per‑channel** DND.

- **Update Contact Field**: Set supporting fields (e.g., Consent Source, Opt‑in Timestamp).

- **Remove from Workflow / Stop Campaign**: Immediately halt scheduled sends when DND becomes true.

- **Internal Notification**: Alert the owner when high‑value contacts opt out.


* * *

## **Frequently Asked Questions**

**Q: What happens if a contact is marked as DND?**

The contact will be excluded from receiving communications through the channels specified in their DND settings, ensuring their preferences are respected.

**Q: Can DND settings be customized per channel?**

Yes, HighLevel allows you to enable or disable DND for individual channels, providing flexibility based on each contact's preferences.

**Q: How do I know if a contact has enabled DND?**

You can check a contact's DND status by opening their **contact profile** in HighLevel. If they have enabled DND for a specific channel, it will appear **grayed out** under the DND section on the left side of their profile.

**Q: Does enabling DND stop all communications?**

It depends on how DND is set up. Contacts can opt out of **specific channels** (e.g., SMS but not emails), or they can enable **global DND**, which blocks all communications.

* * *

## **Related Articles**

- [Workflow Trigger — Contact DND](https://help.gohighlevel.com/support/solutions/articles/155000002673-workflow-trigger-contact-dnd)

- [Workflow Action — DND Contact](https://help.gohighlevel.com/support/solutions/articles/155000003270-workflow-action-dnd-contact)

- [Configuring Sender ID & Opt‑Out Language (SMS Compliance)](https://help.gohighlevel.com/support/solutions/articles/155000004684-configuring-sender-id-and-opt-out-language-for-sms-compliance)

- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)

- [How to Resubscribe After Unsubscribing from an Email List](https://help.gohighlevel.com/support/solutions/articles/155000002948)


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

- ["Add Contact" Form Upgrade and Customizations](https://help.gohighlevel.com/support/solutions/articles/155000006513--add-contact-form-upgrade-and-customizations)
- [Adding Files To Contacts using a Custom Field](https://help.gohighlevel.com/support/solutions/articles/48001171922-adding-files-to-contacts-using-a-custom-field)
- [Adding Multiple Phone Numbers for a Contact](https://help.gohighlevel.com/support/solutions/articles/155000000448-adding-multiple-phone-numbers-for-a-contact)
- [AND/OR Filters](https://help.gohighlevel.com/support/solutions/articles/155000001247-and-or-filters)
- [Automatically Merge Facebook Messenger Contacts With Lead Ad Contacts](https://help.gohighlevel.com/support/solutions/articles/48001146104-automatically-merge-facebook-messenger-contacts-with-lead-ad-contacts)
- [Company Object Feature: A Manual Way to Organize Contacts](https://help.gohighlevel.com/support/solutions/articles/48001223777-company-object-feature-a-manual-way-to-organize-contacts)

## Related Articles

- [How to Resubscribe After Unsubscribing from an Email List](https://help.gohighlevel.com/support/solutions/articles/155000002948-how-to-resubscribe-after-unsubscribing-from-an-email-list)
- [Creating and Managing Custom Unsubscribe Links](https://help.gohighlevel.com/support/solutions/articles/155000004799-creating-and-managing-custom-unsubscribe-links)
- [Workflow Trigger - Contact DND](https://help.gohighlevel.com/support/solutions/articles/155000002673-workflow-trigger-contact-dnd)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)
- [WhatsApp - Workflow Integration](https://help.gohighlevel.com/support/solutions/articles/155000001624-whatsapp-workflow-integration)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001214849,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001214849-how-to-use-do-not-disturb-dnd-/hit)