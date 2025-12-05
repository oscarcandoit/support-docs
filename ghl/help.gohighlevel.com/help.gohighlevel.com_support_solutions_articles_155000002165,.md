---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002165,"
title: " Adding Custom CSS/JS in community group : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002165,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Memberships & Communities](https://help.gohighlevel.com/support/solutions/155000000006)
4. [Communities](https://help.gohighlevel.com/support/solutions/folders/155000000024)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002165,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Memberships & Communities](https://help.gohighlevel.com/support/solutions/155000000006)
   - [Communities](https://help.gohighlevel.com/support/solutions/folders/155000000024)
6. Adding Custom CSS/JS in community group

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

# Adding Custom CSS/JS in community group

Modified on: Fri, 26 Sep, 2025 at 5:01 PM

Group admins can now inject custom JavaScript (JS), Cascading Style Sheets (CSS), and HyperText Markup Language (HTML) code into their groups. This allows for unprecedented levels of customizations

```
IMPORTANT: This article shows where you can add your own CSS or JavaScript. Please note, HighLevel does not provide guidance, recommendations, or support for custom code (including writing, debugging, or maintaining it).
```

* * *

**TABLE OF CONTENTS**

- [How to Customize Your Groups](https://help.gohighlevel.com/support/solutions/articles/155000002165,#How-to-Customize-Your-Groups)
  - [Step 1:  Access Client Portal Settings](https://help.gohighlevel.com/support/solutions/articles/155000002165,#Step-1%3A-%C2%A0Access-Client-Portal-Settings)
  - [Step 2: Access the Branding Tab](https://help.gohighlevel.com/support/solutions/articles/155000002165,#%E2%80%8BStep-2%3A-Access-the-Branding-Tab)
  - [Step 3:  Adding Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000002165,#Step-3%3A%C2%A0-Adding-Custom-Code)
  - [Step 4: Preview Your Changes](https://help.gohighlevel.com/support/solutions/articles/155000002165,#Step-4%3A%C2%A0Preview-Your-Changes)
  - [Step 5: Go Live](https://help.gohighlevel.com/support/solutions/articles/155000002165,#Step-5%3A%C2%A0Go-Live)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002165,#Frequently-Asked-Questions)

* * *

## **How to Customize Your Groups**

Follow these steps to add custom code to your groups:

### **Step 1:** Access Client Portal Settings

Navigate to your Subaccount → Memberships Tab → Client Portal → Settings

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046549799/original/O0tDN3A3EB6wVdj5PIkCfvtRXllQp9mhbw.gif?1747141789)

### **Step 2:** Access the Branding Tab

Within the Client Portal Settings, click on Branding and scroll down to the Advanced Tab for Custom CSS, Custom JS, and Tracking Code ( for both Header and Footer)

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046550162/original/kA_znQIhQG_7Qtj0Wq362J4Ds3Lw7qpvqg.gif?1747142017)

### **Step 3:**  Adding Custom Code

- **HTML:** You can add custom HTML to modify the structure or content of your group's pages. This is ideal for adding custom headers, footers, or unique content blocks.
- **CSS:** Use CSS to alter the visual style of your group. This can include changes to colors, fonts, layouts, and more, allowing you to align the group's appearance with your brand or preferences.
- **JS:** JavaScript can be used to add interactive elements or functionality to your group. This could range from simple animations to complex features like custom forms or integrations.


### **Step 4:** Preview Your Changes

Before making your customizations live, take advantage of the preview feature. This allows you to see how your custom code affects the group's appearance and functionality, letting you make adjustments as needed without affecting the live site.

### **Step 5:** Go Live

Once you're satisfied with your customizations, save your changes to make them live for all group members. Enjoy your new person

* * *

## **Frequently Asked Questions**

**Q: How do I check how my group looked before adding the code**

- Check how the group looks without a CustomCode via this [Link](https://help.gohighlevel.com/support/solutions/articles/CustomCode%20Enable%20Link%20https%3A//test-version-customcode.staging.clientclub.net/communities/groups/test1/home?customCode=true)
- Check how the group looks with a CustomCode via this[Link](https://test-version-customcode.staging.clientclub.net/communities/groups/test1/home?customCode=true)


**Q: What should I do if I'm experiencing issues in a community after applying custom code?**

If you encounter any problems within a community where custom HTML, CSS, or JavaScript has been implemented, it's important to isolate whether the issue is being caused by the custom code. To do this, you can temporarily disable the custom code and see if the problem still occurs. Simply add 'customCode=false' to the end of the community's URL in your browser's address bar and press Enter. This action deactivates the custom code for your current session, allowing you to check if the issue persists without the customizations. If the problem is resolved with custom code disabled, it indicates that adjustments to your custom code may be necessary.

**Q: How can I apply different styles for dark mode vs. light mode in my community portal?**

To target night mode (dark theme) styles specifically, use the .dark class in your CSS. This class is automatically applied to the root when night mode is active.

Avoid using overly broad selectors like div:nth-of-type(2) unless you’re absolutely sure it won’t impact other parts of the page. Always preview and test both modes to ensure visual consistency.

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

- [How to Setup, Customize, and Manage Your Communities](https://help.gohighlevel.com/support/solutions/articles/155000000280-how-to-setup-customize-and-manage-your-communities)
- [How to Manage Members Inside groups](https://help.gohighlevel.com/support/solutions/articles/155000000289-how-to-manage-members-inside-groups)
- [Content Management in Communities](https://help.gohighlevel.com/support/solutions/articles/155000000297-content-management-in-communities)
- [How to Make Groups Private in Communities](https://help.gohighlevel.com/support/solutions/articles/155000000735-how-to-make-groups-private-in-communities)
- [How to Invite Members to Your Group via Email](https://help.gohighlevel.com/support/solutions/articles/155000001033-how-to-invite-members-to-your-group-via-email)
- [How to Use Community Tagging Feature](https://help.gohighlevel.com/support/solutions/articles/155000001051-how-to-use-community-tagging-feature)

## Related Articles

- [Unlocking Customization: Enhancing Marketplace Apps with Custom JavaScript](https://help.gohighlevel.com/support/solutions/articles/155000003278-unlocking-customization-enhancing-marketplace-apps-with-custom-javascript)
- [Agency Company Settings in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48000982604-agency-company-settings-in-highlevel)
- [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars)
- [Code Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006827-code-element-in-email-builder)
- [How to Setup, Customize, and Manage Your Communities](https://help.gohighlevel.com/support/solutions/articles/155000000280-how-to-setup-customize-and-manage-your-communities)
- [Communities: How to Use Group Filter in Smartlist](https://help.gohighlevel.com/support/solutions/articles/155000005704-communities-how-to-use-group-filter-in-smartlist)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002165,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002165-adding-custom-css-js-in-community-group/hit)