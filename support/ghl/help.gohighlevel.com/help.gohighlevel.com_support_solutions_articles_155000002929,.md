---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002929,"
title: " Understanding UTM parameters for email campaigns : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002929,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Campaign Settings/Functionalities](https://help.gohighlevel.com/support/solutions/folders/155000001355)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002929,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Campaign Settings/Functionalities](https://help.gohighlevel.com/support/solutions/folders/155000001355)
6. Understanding UTM parameters for email campaigns

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

# Understanding UTM parameters for email campaigns

Modified on: Wed, 4 Sep, 2024 at 3:42 PM

How to Enable UTM Tracking for Effective Email Marketing in GoHighLevel - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Enable UTM Tracking for Effective Email Marketing in GoHighLevel](https://www.youtube.com/watch?v=yfxjM9FbnDI)

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

[Watch on](https://www.youtube.com/watch?v=yfxjM9FbnDI&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 3:54
•Live

•

Learn about UTM tracking, how it works, and how you can use it in your GHL email marketing to better understand how well your marketing efforts are performing.

## **What is UTM tracking?**

UTM parameters are short codes attached to the end of URLs. They assist tools like Google Analytics in identifying the sources of your website traffic. By including UTM parameters in your GHL email campaigns, you can analyze how your messaging impacts your website traffic and conversions.

In our current implementation, there are 3 UTM parameters that we support by default -

**a. utm\_source = email :** This is a mandatory field that is kept selected by default and has the value "email" for internal tracking purpose

**b. utm\_medium** = email marketing: This is an mandatory field but the value can be customised. The default value is "email marketing"

**c. utm\_campaign** = Campaign Name (Send Date): This is an optional fields where the value can be chosen from the drop downs

You can add additional parameters upto 5 in this list by specifying the value as a text.

## **Best Practices for UTM Parameters**

1. **Avoid PII:** Do not use personally identifiable information (e.g., social security numbers, addresses). This data is restricted by analytics platforms.


1. **Use Essential Parameters:** Stick to `utm_source`, `utm_medium`, and `utm_campaign` for clarity and effective analysis.

2. **Consistent Case:** UTM parameters are case sensitive. Choose a capitalization rule and use it consistently.

3. **Prefer Underscores:** Use underscores (\_) instead of spaces to avoid encoding issues.


## **Where would UTM Parameters would not work?**

1\. **Trigger Links:** For links under trigger links, the UTM parameters would not work in this version of the release

2\. **Incorrect Syntax:** The links need to have the necessary prefixes like https:// and needs to be correct, specially if they were saved under a custom value

3\. **Test Emails:** It is advisable to send dummy campaigns to test UTM parameters

## **Steps to Use UTM Parameters**

1. **Navigate to Email Marketing:** Go to the Email Marketing section of your platform.

2. **Access Settings:** Click on the **Settings** page under **Email Campaign**.

3. **Review Tracking Options:** Click on the **Tracking** option to review the default UTM parameters.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046572/original/fI_PPIE21-aT1Yd6u-LMpPirqnNNBaqsyg.png?1722254439)

4. **Enable Default UTM Parameters:** To apply UTM parameters to all campaigns by default, toggle the enable switch.

5. **Edit Default Values:** Modify the values for `utm_medium` or `utm_campaign` as needed.

6. **Add Custom Parameters:** Click on **Add Custom Parameter** to specify additional parameters and their values.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046649/original/929hzznoa3R_PTPyddZje_pSglisCBjXNw.png?1722254559)

7. **Select Parameters:** Check the boxes next to the UTM parameters you wish to add to your campaigns.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046703/original/uYJ62iZfgOdEDWrpOou3Uzz7Wfsj1k7Q6Q.png?1722254616)

8. **Save Changes:** Click **Save** to apply your settings.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046732/original/kgRF5qcYybs4RpNWmqdck9_TQpjy_qLtug.png?1722254648)

9. **Disable for Specific Campaigns:** To disable UTM parameters for a particular campaign, turn off the tracking option on the **Send** or **Schedule** page.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046814/original/ydy9bC1vs5nh1NzOMn_2Q34EOHSgZUnr6A.png?1722254677)


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

- [How to Pause or Cancel a Scheduled Email Campaign](https://help.gohighlevel.com/support/solutions/articles/155000003462-how-to-pause-or-cancel-a-scheduled-email-campaign)
- [How to Schedule Batch Email Campaign(s)?](https://help.gohighlevel.com/support/solutions/articles/48001215379-how-to-schedule-batch-email-campaign-s-)
- [Smart Send: Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006628-smart-send-email-marketing-campaigns)
- [Understanding Email Campaign Statuses](https://help.gohighlevel.com/support/solutions/articles/155000006659-understanding-email-campaign-statuses)
- [Smart Send: Best Time Recommendation in Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006754-smart-send-best-time-recommendation-in-email-marketing-campaigns)
- [Resend to un-opened : Best Practices and Guide](https://help.gohighlevel.com/support/solutions/articles/155000002088-resend-to-un-opened-best-practices-and-guide)

## Related Articles

- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Managing Email Templates in Workflow Steps](https://help.gohighlevel.com/support/solutions/articles/155000005553-managing-email-templates-in-workflow-steps)
- [New UI for Email Actions in workflows](https://help.gohighlevel.com/support/solutions/articles/155000006550-new-ui-for-email-actions-in-workflows)
- [How to set up Facebook Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [Page View Triggers for Funnels and Websites](https://help.gohighlevel.com/support/solutions/articles/155000002027-page-view-triggers-for-funnels-and-websites)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002929,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002929-understanding-utm-parameters-for-email-campaigns/hit)