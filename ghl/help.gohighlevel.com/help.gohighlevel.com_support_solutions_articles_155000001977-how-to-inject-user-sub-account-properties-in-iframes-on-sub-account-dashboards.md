---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards"
title: " How to inject User/Sub account Properties in Iframes on Sub Account Dashboards : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Dashboards](https://help.gohighlevel.com/support/solutions/48000449586)
4. [Dashboard Widgets](https://help.gohighlevel.com/support/solutions/folders/155000000192)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Dashboards](https://help.gohighlevel.com/support/solutions/48000449586)
   - [Dashboard Widgets](https://help.gohighlevel.com/support/solutions/folders/155000000192)
6. How to inject User/Sub account Properties in Iframes on S...

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

# How to inject User/Sub account Properties in Iframes on Sub Account Dashboards

Modified on: Mon, 12 Feb, 2024 at 2:13 AM

You can now inject dynamic user or sub account properties/parameters in embedded content using iframes. Follow these step-by-step instructions to get started:

**TABLE OF CONTENTS**

- [Step 1: Enter Edit Mode](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-1%3A-Enter-Edit-Mode)
- [Step 2: Navigate to Objects tab](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-2%3A-Navigate-to-Objects-tab)
- [Step 3: Choose Embed](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-3%3A-Choose-Embed)
- [Step 4: Enter the URL](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-4%3A-Enter-the-URL)
- [Step 5: Add Parameters](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-5%3A-Add-Parameters)
- [Step 6: Utilize Dynamic User Properties](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Step-6%3A-Utilize-Dynamic-User-Properties)

- [Supported User Properties](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards#Supported-User-Properties)

* * *

### **Step 1: Enter Edit Mode**

- Open your Sub Account Dashboard and enter Edit mode.


### **Step 2: Navigate to Objects tab**

- Once in Edit mode, navigate to the Objects section.


### **Step 3: Choose Embed**

- Select the Embed option from the Objects menu.


### **Step 4: Enter the URL**

- Enter the URL of the content you want to embed into the dashboard.


### **Step 5: Add Parameters**

- After entering the URL, add the required parameters to customize the content.


### **Step 6: Utilize Dynamic User Properties**

- You can dynamically inject the sub-account or user identifier into the iframe source. You can use placeholders like {{location.id}} or {{location.name}} in the URL to make it more versatile.

- As an example, you can use {{location.id}} to create a dynamic URL like this: [https://app.gohighlevel.com/v2/location/{{location.id}}/conversations](https://app.gohighlevel.com/v2/location/%7B%7Blocation.id%7D%7D/conversations).

- You can embed the above link as an iFrame URL on your dashboard.


* * *

# Supported User Properties

1. We support various user properties that can be passed in the URL. Replace the **property** in {{user. **userpropertyhere**}} with any of the following supported user properties:
   - companyId
   - email
   - phone
   - role
   - type
   - firstName
   - lastName
   - name
   - fullName
2. For example, you can use https://yourwebsiteurlhere.com/?user={{user.firstName}} to pass the user's first name in the URL.

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

- [What Are Dashboard Widgets?](https://help.gohighlevel.com/support/solutions/articles/155000001212-what-are-dashboard-widgets-)
- [How to Create & Add Dashboard Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001206-how-to-create-add-dashboard-widgets)
- [Customizing Dashboard Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001207-customizing-dashboard-widgets)
- [Edit widgets on the dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001208-edit-widgets-on-the-dashboard)
- [Resize widgets](https://help.gohighlevel.com/support/solutions/articles/155000001209-resize-widgets)
- [Rearrange Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001210-rearrange-widgets)

## Related Articles

- [How to load Snapshots with Dashboards](https://help.gohighlevel.com/support/solutions/articles/155000002280-how-to-load-snapshots-with-dashboards)
- [How to create and schedule reports](https://help.gohighlevel.com/support/solutions/articles/155000003965-how-to-create-and-schedule-reports)
- [Dashboards: Custom Object Widgets and Insights](https://help.gohighlevel.com/support/solutions/articles/155000006630-dashboards-custom-object-widgets-and-insights)
- [How to duplicate a dashboard to another sub-account](https://help.gohighlevel.com/support/solutions/articles/155000001571-how-to-duplicate-a-dashboard-to-another-sub-account)
- [How to Create Dashboard Templates](https://help.gohighlevel.com/support/solutions/articles/155000003969-how-to-create-dashboard-templates)
- [How To Create A Custom Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001531-how-to-create-a-custom-dashboard)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards/hit)