---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords"
title: " Workflow Action - Add To Google AdWords : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
6. Workflow Action - Add To Google AdWords

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

# Workflow Action - Add To Google AdWords

Modified on: Tue, 29 Apr, 2025 at 7:13 AM

Track real user actions—like form submissions or chat replies—as Google Ads conversions directly inside your workflows using Add to Google Adwords workflow action. This article shows you exactly how to set it up, why it matters, and how to troubleshoot it for accuracy and better ROI.

* * *

**TABLE OF CONTENTS**

- [What Is the Add to Google AdWords Workflow Action?](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#%E2%80%8B%E2%80%8BWhat-Is-the-Add-to-Google-AdWords-Workflow-Action?)
- [Key Benefits of Add to Google AdWords Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#Key-Benefits-of-Add-to-Google-AdWords-Workflow-Action)
- [Configuring Add to Google AdWords Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#Configuring-Add-to-Google-AdWords-Workflow-Action)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords#Frequently-Asked-Questions)

* * *

# **What Is the Add to Google AdWords Workflow Action?**

The Add to Google AdWords action allows you to send conversion events from HighLevel into your Google Ads account. This feature is ideal for tracking offline conversions—such as form submissions, chat replies, purchases, or appointment bookings—that happen after a user clicks your ad. By tying those actions back to the original click, you gain deeper insight into your campaign performance and can feed that data into Google’s optimization engine.

To make this work, HighLevel uses unique identifiers like GCLID, GBRAID, or WBRAID that are passed during the ad click. These values must be present on the contact record in order for the conversion to be properly attributed.

```
Note: You must set up the conversion event in Google Ads first before using this workflow action.
```

* * *

## **Key Benefits of Add to Google AdWords Workflow Action**

Gain better campaign insights and eliminate manual work with seamless conversion syncing.

- **Offline Conversion Tracking:** Tracks offline events like form submissions, chat replies, or booked appointments for better attribution.

- **Direct Event Syncing:** Sends conversion events straight to Google Ads—no need for Zapier or manual data uploads.

- **Enhanced Campaign Optimization:** Improves ad performance by giving Google better data to optimize around.

- **Click ID Support:** Compatible with GCLID, GBRAID, and WBRAID for comprehensive tracking coverage.

- **Flexible Trigger Options:** Works with multiple workflow triggers including form submissions, link clicks, and page views.

- **Lead Quality Attribution:** Helps you accurately measure the source and quality of your leads, improving ROI tracking.

* * *

## **Configuring Add to Google AdWords Workflow Action**

Understanding how to properly set up the “Add to Google AdWords” action ensures your Google Ads campaigns can accurately measure and attribute conversions. This step-by-step guide walks you through how to configure the action inside a workflow, including where to find it, how to set it up, and how to ensure it’s firing correctly.

```
Connect Your Google Ads Account

In order to use the “Add to Google AdWords” workflow action, you must first connect your Google Ads account to HighLevel. This integration enables HighLevel to send conversion events directly to Google Ads via API. To set it up, navigate to Settings > Integrations in your HighLevel sub-account, select Google, and follow the prompts to authenticate your account. Be sure to link the correct Google Ads account, especially if you manage multiple. Without this connection, the action will not function, regardless of how well everything else is configured.
```

```
Important:

After connecting your Google Ads account to HighLevel, you must already have at least one conversion action created inside your Google Ads account. HighLevel fetches available conversion actions directly from Google Ads during setup. If no conversion actions exist yet, the dropdown menu for selecting a conversion event inside the workflow will be blank.
```

### **Step 1: Access the Workflow Builder**

To begin, head over to the Automation section inside your HighLevel sub-account. This is where you manage and create all your workflows. You can either Click + Add New Workflow to start from scratch, or Select an existing workflow where you’d like to add the Google Ads conversion action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968374/original/C5OqPiVY-2ShM2wPKh6trOdfVoaD9ob5Tw.png?1742958934)

```
Once inside the workflow builder, your first task is to ensure you have a relevant workflow trigger set up. This trigger should reflect the action or event you want to track—like a form submission or an appointment booking.

Examples of effective triggers include: Form Submitted, Appointment Booked, Trigger Link Clicked, or Customer Replied
```

### **Step 2: Add the “Add to Google AdWords” Workflow Action**

After your trigger is in place, click the **“+”** icon at the point in the workflow where you want the conversion to fire. This opens the action selection panel. Scroll through the list and choose “Add to Google AdWords.” This action allows you to send conversion data directly to your connected Google Ads account via API.

Once the action is added, you’ll see the configuration panel on the right-hand side.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968578/original/tkuWLBd-GQin1F_u5xTwfaZBr80f2Geafw.png?1742959562)

### **Step 3: Configure the Action Details**

Setting up the conversion action correctly is essential for data to flow from HighLevel to Google Ads. This step involves linking your workflow to the proper conversion event and ensuring all tracking parameters are accurately in place. Missteps here—such as typos in the conversion name or missing click IDs—can prevent your conversion from syncing entirely.

```
Preparing Google Ads Conversion Setup

Before configuring the “Add to Google AdWords” workflow action in HighLevel, there are three critical steps you must complete within Google Ads:

1. Create the conversion action inside your Google Ads account—this defines the specific event you want to track, such as a form submission or appointment booking.

2. Copy the exact conversion name from Google Ads and use it precisely as-is in your HighLevel workflow action. Any mismatch in the name, even due to capitalization or spacing, will prevent the action from working.

3. Ensure that your ad URLs include proper click tracking parameters: use GCLID for Search campaigns, and GBRAID or WBRAID for iOS and Android app campaigns. HighLevel must capture these identifiers from incoming leads to pass accurate attribution data back to Google Ads.

Without these prerequisites, conversion syncing will fail. Additionally, be aware of your conversion setting type—if your conversion is set to “One Per Click,” GCLID is required, as GBRAID and WBRAID only support “Many Per Click” tracking. This distinction is especially important when troubleshooting missed or skipped conversions.
```

#### **Action Name**

Give your action a clear and descriptive name—something like “Submit Lead Conversion” or “Book Appointment Conversion.” This name will appear in your workflow logs, so it should clearly reflect what the conversion is for.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968320/original/yc46jH8_fGYYUJCiqGcTrxTiyez7q4mOAw.png?1742958741)

#### **Conversion**

In this dropdown, select or paste the exact name of the conversion event from your Google Ads account. The name must match exactly—including capitalization, spacing, and punctuation—or the action will be skipped. Your workflow action will not fire the conversion unless the names align perfectly.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968301/original/ocGF4QrrqfaADdt3tC3HOQDgkMn51EOU-A.png?1742958575)

#### **Custom Mapping**

Toggle on the Custom Mapping switch if you want to manually map specific Google Ads conversion parameters (like GCLID, GBRAID, or WBRAID) to fields within your workflow. This is helpful when you’re working with custom fields or want more granular control over how the click ID is passed back to Google Ads.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968304/original/nv8Db5-tcgbAFls9EQij34I0qyW8ilmM-g.png?1742958593)

### **Step 4: Understand Trigger & Event Matching**

To make sure this action actually sends data to Google Ads, it must be paired with a meaningful conversion event. This is where selecting the right trigger becomes crucial. Popular Triggers Include:

- **Form Submitted:** Ideal for capturing leads from opt-in or contact forms.

- **Appointment Booked:** Tracks booked meetings or sales calls.

- **Trigger Link Clicked:** Measures high-intent actions like pricing clicks.

- **Order Form Submission:** Captures purchase-based conversions.

- **Customer Replied (Chat Widget):** Tracks incoming messages from your site chat.

### **Step 5: Monitor Workflow Execution Logs**

Once your workflow is active, it’s important to monitor its execution to ensure the action is firing properly.

Go to the Execution Logs tab within the workflow. Look for the “Add to Google AdWords” action and its result:

**Executed:** The conversion was successfully sent to Google Ads.

**Skipped:** Something went wrong (e.g., missing GCLID or mismatched conversion name).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968547/original/aFenfQtgfTtqzwvum3qXSNWTGE49Friqhg.png?1742959494)

* * *

## **Frequently Asked Questions**

**Q: What should I do if the action says “Skipped” in logs?**

To ensure successful conversion tracking, two key conditions must be met: the contact in HighLevel must have a valid GCLID, GBRAID, or WBRAID—captured from a legitimate Google ad click—and the conversion name used in the workflow must exactly match the one created in your Google Ads account. Even a small mismatch in the conversion name will prevent the event from registering correctly in Google Ads.

**Q: What’s the difference between GCLID, GBRAID, and WBRAID?**

**GCLID:** Used for traditional web tracking.

**GBRAID/WBRAID:** Used in privacy-focused environments (mainly on iOS).

Only “multi-per-click” conversions accept GBRAID/WBRAID. If your conversion setting is “one per click,” GCLID is required.

**Q: Can I track leads that come through the chat widget?**

Yes. Use the Customer Replied trigger and add a filter: Reply Channel = Chat Widget. This ensures the event only fires when a user replies via the widget.

**Q: Do I need to configure anything in Google Ads before using this?**

Yes. Before using the “Add to Google AdWords” action in HighLevel, you need to ensure your Google Ads account is properly configured. First, create the conversion action directly within your Google Ads account. Then, copy the exact name of that conversion—making sure it matches character-for-character—and paste it into the workflow action in HighLevel. Finally, confirm that your Google ad URLs are correctly passing tracking parameters like GCLID, GBRAID, or WBRAID to ensure conversions can be properly attributed back to the original ad click.

**Q: Is Google Tag Manager required for this to work?**

No. This action does not require Google Tag Manager. However, GTM can still be helpful if you’re tracking additional client-side events.

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

- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)
- [Workflow Action - Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code)
- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)

## Related Articles

- [How to set up Google Ad Conversion Actions](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ad-conversion-actions)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Creating Sub-Accounts using Zapier](https://help.gohighlevel.com/support/solutions/articles/48001207048-creating-sub-accounts-using-zapier)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords/hit)