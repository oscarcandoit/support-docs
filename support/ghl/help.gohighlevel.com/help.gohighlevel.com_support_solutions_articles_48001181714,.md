---
url: "https://help.gohighlevel.com/support/solutions/articles/48001181714,"
title: " Contact Deduplication Preferences (Settings) — HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001181714,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
4. [Business Profile Settings](https://help.gohighlevel.com/support/solutions/folders/155000001301)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001181714,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
   - [Business Profile Settings](https://help.gohighlevel.com/support/solutions/folders/155000001301)
6. Allow Duplicate Contacts (Contact Deduplication Preferences)

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

# Allow Duplicate Contacts (Contact Deduplication Preferences)

Modified on: Mon, 15 Sep, 2025 at 10:59 AM

How to Manage Duplicate Contacts in Your CRM System - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Manage Duplicate Contacts in Your CRM System](https://www.youtube.com/watch?v=5VmZ5iSKj-U)

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

[Watch on](https://www.youtube.com/watch?v=5VmZ5iSKj-U&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:45
•Live

•

Contact Deduplication Preferences control how duplicate contacts are managed in HighLevel. This article explains to to configure these preferences to match your specific needs!

* * *

**TABLE OF CONTENTS**

- [Overview of Contact Duplication Preferences](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Overview-of-Contact-Duplication-Preferences)
- [Key Details To Know](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Key-Details-To-Know)
- [Contact Deduplication Preferences (Settings)](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Contact-Deduplication-Preferences-(Settings))
  - [Allow Duplicate Contact](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Allow-Duplicate-Contact)
  - [Find Existing Contacts Based On](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Find-Existing-Contacts-Based-On)
  - [Second Preferences for Search (Optional)](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Second-Preferences-for-Search-(Optional))
- [Behavior Across Contact Sources](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Behavior-Across-Contact-Sources)
- [How to Configure Contact Deduplication Preferences](https://help.gohighlevel.com/support/solutions/articles/48001181714,#How-to-Configure-Contact-Deduplication-Preferences)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Related-Articles)

* * *

# **Overview of Contact Duplication Preferences**

The "Allow Duplicate Contact" setting sets the rules for contact creation and matching. Turn duplicates off to use your chosen primary (and optional secondary) field to attach new submissions to an existing contact; otherwise a new contact is created. Turn duplicates on to allow new records even if an email/phone already exists, then merge later if needed.

This setting is particularly relevant for contacts submitted through Zapier or Forms. However, it does not apply to CSV contact uploads, where duplicates are automatically identified and managed based on phone numbers or email addresses.

* * *

## **Key Details To Know**

- **Applies to Zapier and Forms**

  - The "Allow Duplicate Contact" setting only applies to contacts coming through Zapier or Forms

  - When enabled, duplicate records with the same phone number or email can be created

  - When disabled, new submissions with duplicate information update existing contacts instead of creating new ones
- **Does Not Apply to CSV Imports**

  - For CSV imports, GoHighLevel automatically merges contacts based on **phone numbers** or **email addresses**, regardless of the setting

  - Duplicate contacts cannot be created via CSV uploads.
- **Default Behavior for Imports**

  - When importing contacts via CSV, the system checks for existing records using the specified primary field (email or phone)

  - Contacts with matching information are merged automatically, ensuring a clean and organized database

```
When the "Allow Duplicate Contacts" setting is enabled, duplicate contacts are allowed. This can be useful in workflows where the same individual needs to exist as separate records (e.g., different departments).

When disabled, duplicate contacts are prevented, ensuring a single record per phone or email and updates are made to existing records instead of creating new ones.
```

* * *

## **Contact Deduplication Preferences (Settings)**

There are three settings that can be changed in the Contact Duplication Preferences:

#### **Allow Duplicate Contact**

This setting allows you to control how your sub-account treats duplicate contacts. If you want to "Allow Duplicate Contacts", you would toggle this setting into the ON position. If you DO NOT want duplicate contacts, you would toggle this setting to the OFF position.

#### **Find Existing Contacts Based On**

This filter allows you to specify how HighLevel identifies and matches existing contacts in your database. Choose the primary field used to look up an existing contact before creation. Available options are Email (Default) or Phone. Pick the field you collect most consistently at intake.

#### **Second Preferences for Search (Optional)**

Use this field as a secondary criterion for duplicate detection. Leave blank if you want to match on one field only.

Example: If "Email" is selected as the primary field and "Phone" as the secondary, the system will first match by email and, if no match is found, check by phone number.

* * *

## **Behavior Across Contact Sources**

**Forms and Zapier:**

- **Enabled:** Allows duplicates, creating separate records for contacts with the same email or phone

- **Disabled:** Updates the existing contact with the new information instead of creating a duplicate


**CSV Imports:**

- Duplicate records are merged automatically based on phone number or email

- Duplicate contacts cannot be created during CSV imports, regardless of the setting

```
Click Here to learn more on Importing Contacts and Opportunities via CSV
```

* * *

## **How to Configure Contact Deduplication Preferences**

This setting is located under **Settings → Business Profile → Contact Deduplication Preferences** and offers additional customization options, such as setting primary and secondary criteria for duplicate detection.

#### **Step 1**: Navigate to Business Profile Settings

- From the dashboard, click **Settings** in the lower left corner

- This will open the **Business Profile Settings** (also show as the top option on the secondary left-side navigation bar)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052720496/original/YhbxIprLhrmIhlfBN2gDpyg9Z420P4msmQ.png?1756498017)

#### **Step 2**: Contact Duplication Preferences Panel

- Scroll down until you see the **Contact Duplication Preferences** panel on the right side of the screen

- This panel is where all configurations will be made. [Click here for more information on each preference](https://help.gohighlevel.com/support/solutions/articles/48001181714,#Contact-Deduplication-Preferences-(Settings))

- All changes to settings in this panel are automatically applied, no need to click a Save/Update Information button

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040612911/original/p9xvdNia1IYqmsbMrv3inMqwV1AJiqomXw.png?1738106845)**

* * *

## **Frequently Asked Questions**

**Q: Can duplicates be created during CSV imports?**

No, duplicate contacts cannot be created during CSV imports. The system automatically merges contacts based on email or phone.

**Q: What happens if I enable "Allow Duplicate Contact"?**

Contacts with the same phone number or email can be created via Forms or Zapier. Duplicate contacts cannot be created via CSV uploads.

**Q: Can I merge duplicate contacts after enabling this setting?**

Yes, duplicate contacts can be manually merged using the **Merge Contacts** feature.

**Q: How can I prevent duplicates from integrations?**

Disable the **"Allow Duplicate Contact"** setting in your account settings to ensure integrations update existing records instead of creating new ones.

* * *

## **Related Articles**

- [How to Merge Duplicate Contacts in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48001202210)

- [Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/en/support/solutions/articles/155000003905)


- [Business Profile Settings](https://help.gohighlevel.com/en/support/solutions/articles/155000006223)

- [Business Profile Settings - General Information](https://help.gohighlevel.com/en/support/solutions/articles/155000006181)

- [Business Profile Settings - Business Information](https://help.gohighlevel.com/en/support/solutions/articles/155000006187)

- [Business Profile Settings - Authorized Representative](https://help.gohighlevel.com/en/support/solutions/articles/155000006219)

- [Business Profile Settings - General](https://help.gohighlevel.com/en/support/solutions/articles/155000006221)

- [Business Profile Settings - Enable / Disable Deprecated Features](https://help.gohighlevel.com/en/support/solutions/articles/155000006222)

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

- [Business Profile Settings - General Information](https://help.gohighlevel.com/support/solutions/articles/155000006181-business-profile-settings-general-information)
- [Business Profile Settings - Business Physical Address](https://help.gohighlevel.com/support/solutions/articles/155000006186-business-profile-settings-business-physical-address)
- [Business Profile Settings - Business Information](https://help.gohighlevel.com/support/solutions/articles/155000006187-business-profile-settings-business-information)
- [Business Profile Settings - Authorized Representative](https://help.gohighlevel.com/support/solutions/articles/155000006219-business-profile-settings-authorized-representative)
- [Business Profile Settings - General](https://help.gohighlevel.com/support/solutions/articles/155000006221-business-profile-settings-general)
- [Business Profile Settings - Enable/Disable Depreciated Features](https://help.gohighlevel.com/support/solutions/articles/155000006222-business-profile-settings-enable-disable-depreciated-features)

## Related Articles

- ["Add Contact" Form Upgrade and Customizations](https://help.gohighlevel.com/support/solutions/articles/155000006513--add-contact-form-upgrade-and-customizations)
- [Getting Started - Import Existing Contacts](https://help.gohighlevel.com/support/solutions/articles/155000005056-getting-started-import-existing-contacts)
- [How to Merge Duplicate Contacts in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001202210-how-to-merge-duplicate-contacts-in-highlevel)
- [Importing Contacts using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file)
- [How to Resolve the Issue of Duplicate Contacts for WhatsApp Messages](https://help.gohighlevel.com/support/solutions/articles/155000005298-how-to-resolve-the-issue-of-duplicate-contacts-for-whatsapp-messages)
- [Business Profile Settings](https://help.gohighlevel.com/support/solutions/articles/155000006223-business-profile-settings)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001181714,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001181714-allow-duplicate-contacts-contact-deduplication-preferences-/hit)