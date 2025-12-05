---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post"
title: " Workflow Trigger - Facebook Comment(s) On A Post : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Facebook/Instagram Events Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000745)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Facebook/Instagram Events Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000745)
6. Workflow Trigger - Facebook Comment(s) On A Post

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

# Workflow Trigger - Facebook Comment(s) On A Post

Modified on: Wed, 19 Feb, 2025 at 12:52 PM

This trigger fires when there is a comment on your Facebook post(s).

* * *

**TABLE OF CONTENTS**

- [What Is The Trigger - Facebook Comment(s) On A Post?](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#What-Is-The-Trigger---Facebook-Comment(s)-On-A-Post?)
  - [Where To Find This Trigger](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Where-To-Find-This-Trigger)
  - [Components](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Components)
  - [Filters](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Filters)
    - [Page Is + Post Type + Post Is](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Page-Is-+-Post-Type-+-Post-Is)
    - [Contains Phrase OR Exact Match](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Contains-Phrase-OR-Exact-Match)
    - [Track First Level Comment Only](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Track-First-Level-Comment-Only)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post#Frequently-Asked-Questions)

* * *

# **What Is The Trigger - Facebook Comment(s) On A Post?**

This trigger is fired when a comment on your Facebook post(s) matches the filters you set.

* * *

## **Where To Find This Trigger**

Navigate to Automations > Workflows > Workflow Builder > Triggers > Facebook/Instagram Events.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041668231/original/EGFep0c8ybfPPWMFJ9nneG_dBwkJzT0oyQ.png?1739667596)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041668220/original/KFpwLiyj-FH1QcbnCbVhvE4tzZR6CfwqEA.png?1739667519)

* * *

## **Components**

There are four (4) primary components of the Workflow Trigger - Facebook Comment(s) On A Post:

1. **Choose A Workflow Trigger:** By default this option is set to this trigger. You can change it to a different trigger if you want.

2. **Workflow Trigger Name:** By default this is just the name of the trigger. You can edit this to give it a clearer name that is visible in the Workflow.

3. **Filters:** This is where you select the criteria for firing the trigger in the right situation. More details in the next section.

4. **Track First Level Comments Only:** This toggle, when off, will allow the trigger to fire for all nested comments. When it is toggled on, then the trigger will only fire for the top (first) comment, not for comments under that comment.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041688828/original/IhmBZnSU94SJED3xa79ed1jOh0INU8YA0g.png?1739765072)

* * *

## **Filters**

Detailed description of the filters:

|     |     |
| --- | --- |
| Filter Level 1 | Options |
| Page Is | List of your account's pages |
| Post Type | Published Post (all posts on your business page) |
|  | Custom Post (enter a URL) |
| Post is | List of the posts that match your Page Is + Post Type settings |
| Contains Phrase | Phrase = "I bought from you"<br>Comment = "I bought from you yesterday" --> Pass<br>Comment = "I bought one from you" --> Fail<br>Comment = "how much" --> Fail |
| Exact Match | Phrase = "I bought from you"<br>Comment = "I bought from you" --> Pass<br>Comment = "I bought from you yesterday" --> Fail<br>Comment = "I bought one from you" --> Fail |

### **Page Is + Post Type + Post Is**

First select the page from Page Is, then select the type of post from Post Type, then you can select the post itself from Post Is.

**Step 1: Select the Page.** Select Standard Fields > Page Is and then the page from the list.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041688928/original/fVGsoa6qB32gLVsMVOQDLvW7L0I28YlTIA.png?1739765463)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755544/original/Rq7D3x-JiGHUxzJPDaKdWuWNM8dXrMaUxw.png?1739820126)

**Step 2: Select the post type.** Select Published Post to pick from a list or Custom Post to enter a URL.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755561/original/SLtqhXUr6GBSZLTFkCg6LanQQJEMxcctFA.png?1739820175)

**Step 3: Identify the exact post.** If you used Published Post, then pick from the list, and if you used Custom Post, enter the direct URL.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755719/original/k5AfU-4hul8xJw6cEFROiWghaV3wlW65og.png?1739820561)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755745/original/r1LMLr98lAK6UOQLhFMnkHgXwB3dgldhXg.png?1739820626)

* * *

### **Contains Phrase OR Exact Match**

After you have identified the exact post,  you can use either the Contains Phrase filter or the Exact Match filter.

- **Contains Phrase:** the trigger will fire if the body of the comment contains one of the exact text strings you provide.

- **Exact Match:** the trigger will fire if the entire body of the comment exactly matches one of the text strings you provide.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755798/original/-NndoueovinDRkAX7q4i8UaKA3NOZ7ka1w.png?1739820723)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041756144/original/1bAyDZB0wLCzdtdwva5i555A8VQ_-FTIpg.png?1739821546)

* * *

### **Track First Level Comment Only**

You can use the toggle to turn on/off 1st level comment only.

- **Toggle On:** the trigger will only fire for the first comment in a chain, not for comments under a comment.

- **Toggle Off:** the trigger will fire for any comment, even if it's nested under other comments.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041755855/original/XzuMdyjfcnCHdxDMlvoFxcoVs963Nt6PhA.png?1739820822)

* * *

## **Frequently Asked Questions**

**Q: Can the trigger Facebook Comment(s) on post work for Instagram?**

A: No, this trigger only works for Facebook. You can use the identical [Instagram Comment(s) on post](https://help.gohighlevel.com/en/support/solutions/articles/155000004646) trigger for Instagram.

**Q: What actions should I use with the trigger Facebook Comment(s) on post?**

A: Use the Recipe Facebook Comment Automation to see an example of how to use this trigger in a workflow. Review the article [Facebook & Instagram Comment Automation](https://help.gohighlevel.com/en/support/solutions/articles/155000002055) and the actions [Reply In Comment](https://help.gohighlevel.com/en/support/solutions/articles/155000003302) and [Facebook Interactive Messenger](https://help.gohighlevel.com/en/support/solutions/articles/155000003301).

**Q: Can the Comment On Post trigger create an infinite loop?**

A: No, automatic comments will not create an infinite loop. The workflow triggers automatically ignore any comments posted by workflow actions.

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

- [Workflow Trigger - Facebook Lead Form Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003095-workflow-trigger-facebook-lead-form-submitted)
- [Workflow Trigger - Facebook Comment(s) On A Post](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post)
- [Workflow Trigger - Instagram Comment(s) On A Post](https://help.gohighlevel.com/support/solutions/articles/155000004646-workflow-trigger-instagram-comment-s-on-a-post)

## Related Articles

- [Workflow Trigger - Instagram Comment(s) On A Post](https://help.gohighlevel.com/support/solutions/articles/155000004646-workflow-trigger-instagram-comment-s-on-a-post)
- [Workflow Action - Reply In Comments](https://help.gohighlevel.com/support/solutions/articles/155000003302-workflow-action-reply-in-comments)
- [Guide to Facebook & Instagram Comment Automation & AI](https://help.gohighlevel.com/support/solutions/articles/155000002055-guide-to-facebook-instagram-comment-automation-ai)
- [TikTok DMs & Comment Automations](https://help.gohighlevel.com/support/solutions/articles/155000006703-tiktok-dms-comment-automations)
- [Integrate Tiktok Messaging](https://help.gohighlevel.com/support/solutions/articles/155000006620-integrate-tiktok-messaging)
- [Instagram DM - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003298-instagram-dm-workflow-action)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post/hit)