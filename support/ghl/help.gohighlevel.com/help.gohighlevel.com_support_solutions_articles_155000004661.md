---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004661"
title: " Workflow Action - Facebook Interactive Messenger : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004661#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004661#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
6. Workflow Action - Facebook Interactive Messenger

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

# Workflow Action - Facebook Interactive Messenger

Modified on: Tue, 8 Apr, 2025 at 4:01 PM

The Facebook Interactive Messenger action in workflows enables automatic replies through Facebook Messenger.

* * *

**TABLE OF CONTENTS**

- [What is Facebook Interactive Messenger?](https://help.gohighlevel.com/support/solutions/articles/155000004661#What-is-Facebook-Interactive-Messenger?)
- [Where To Find Facebook Interactive Messenger](https://help.gohighlevel.com/support/solutions/articles/155000004661#Where-To-Find-Facebook-Interactive-Messenger)
- [Components](https://help.gohighlevel.com/support/solutions/articles/155000004661#Components)
- [Components - Buttons & Quick Replies](https://help.gohighlevel.com/support/solutions/articles/155000004661#Components---Buttons-&-Quick-Replies)

* * *

## **What is Facebook Interactive Messenger?**

The workflow action Facebook Interactive Messenger allows you to automate Messenger conversations and also include interactive elements like buttons and quick replies. Use this in combination with Facebook comment and/or message triggers.

* * *

## **Where To Find Facebook Interactive Messenger**

Navigate to Automation > Workflows > Workflow Builder > Actions > Communication > Facebook Interactive Messenger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049966/original/ForSlQcQLfG3nqjQ56LOm8xKoQzkkEu8YA.png?1740171969)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049998/original/0X2-Um9xjynf-LTDcSkU0iC3L2c9dkanXg.png?1740172057)

* * *

## **Components**

There are several Facebook Interactive Messenger components:

1. Reply Type:
1. Reply to Comment via DM: use this option when the trigger was a new comment and you want to create a DM conversation.
2. Reply to DM: use this option when you are responding to a DM.
2. Templates: these are [Snippets](https://help.gohighlevel.com/en/support/solutions/articles/155000000890) from Marketing > Snippets.
3. Message:
1. Body: the message builder.
2. Custom Values: this allows you to insert the [Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/48001161575) created in Settings > Custom Values.
3. Trigger Links: this allows you to insert the [Trigger Links](https://help.gohighlevel.com/en/support/solutions/articles/48000981404) created in Marketing > Trigger Links.
4. Add Attachment: upload a file from your computer to attach it to the message.
5. Add file through URL: insert the URL to a file to attach it to the message.
6. Add New Button: add an interactive button to guide the conversation.
7. Add Quick Reply: add an interactive Quick Reply to guide the conversation.
8. Wait Step: set the time between sending the Message-Button-File-Quick-Reply combo and moving on to the default branch.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050059/original/WDUSNTgmom1svtAY3mjyX-MavOIC4GQZcw.png?1740172170)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050085/original/pY4KEZFyyT1n31Vzhz2EINhDW5HnEtcqFg.png?1740172256)

* * *

## **Components - Buttons & Quick Replies**

The Buttons and Quick Replies are a big part of what makes this action "interactive". You can guide the conversation down pre-defined paths.Buttons and quick replies both create the same branches in a workflow. However, they serve slightly different purposes.

**Buttons** are typically used for **persistent** actions and can perform tasks like redirecting to a link, opening a dialer, or triggering specific workflow branches. **They remain visible** even after the user interacts with them. You can add 3 buttons.

**Quick replies**, on the other hand, are designed to **guide** conversations by offering one-tap response options. They **disappear** after the user selects one, keeping the conversation focused and streamlined. You can add up to 13 quick replies.

```
In this Facebook Interactive Messenger action you can add Buttons, Quick Replies, and Files alongside each other in one action. In the Instagram Interactive Messenger you can either add buttons or Quick Replies in a message. Quick Replies can only be added when no attachments are included in the same message.
```

Components:

1. Button: text displayed in the conversation and the label in the workflow.

2. Button: action.




1. Open Website: add a url and when the user clicks it will open the url for them in a new tab, leaving the conversation unaffected, and the buttons stays active if they scroll back to it.

2. Call Number: add a phone number and when the user clicks it will open their dialer for them, leaving the conversation unaffected, and the button stays active if they scroll back to it.

3. Perform Action: no specific event, it just creates a workflow branch and goes to the next workflow action in that branch.
3. Quick Reply: label in the workflow.

4. Quick Reply: text displayed in the conversation.

5. Example Button branch.

6. Example Button branch with another Interactive Messenger action to deliver the checklist.

7. Another Interactive Messenger action to deliver the checklist.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050446/original/cy30U_AmVK8i8NErz_IXGLxisClF59X_sw.png?1740173446)

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

- [Workflow Action - Send Email](https://help.gohighlevel.com/support/solutions/articles/155000002472-workflow-action-send-email)
- [Workflow Action - Send SMS](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms)
- [Workflow Action - Internal Notification](https://help.gohighlevel.com/support/solutions/articles/155000003202-workflow-action-internal-notification)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/155000003269-workflow-action-edit-conversation)
- [Workflow Action - Slack Message](https://help.gohighlevel.com/support/solutions/articles/155000003273-workflow-action-slack-message)
- [Workflow Action - Call](https://help.gohighlevel.com/support/solutions/articles/155000003274-workflow-action-call)

## Related Articles

- [Guide to Facebook & Instagram Comment Automation & AI](https://help.gohighlevel.com/support/solutions/articles/155000002055-guide-to-facebook-instagram-comment-automation-ai)
- [Workflow Recipes - Facebook Comment Automation](https://help.gohighlevel.com/support/solutions/articles/155000004660-workflow-recipes-facebook-comment-automation)
- [Facebook & Instagram comment automation FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002180-facebook-instagram-comment-automation-faqs)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Action - Instagram Interactive Messenger](https://help.gohighlevel.com/support/solutions/articles/155000004662-workflow-action-instagram-interactive-messenger)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004661)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004661-workflow-action-facebook-interactive-messenger/hit)