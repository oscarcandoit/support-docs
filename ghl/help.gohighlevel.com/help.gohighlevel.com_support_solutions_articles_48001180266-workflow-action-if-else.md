---
url: "https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else"
title: " Workflow Action - If/Else : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Internal Tools Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000751)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Internal Tools Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000751)
6. Workflow Action - If/Else

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

# Workflow Action - If/Else

Modified on: Fri, 23 Aug, 2024 at 12:46 PM

HighLevel Workflow Builder - If/Else Conditional Event - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[HighLevel Workflow Builder - If/Else Conditional Event](https://www.youtube.com/watch?v=4okBSg0ZNBs)

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

[Watch on](https://www.youtube.com/watch?v=4okBSg0ZNBs&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:37
•Live

•

**TABLE OF CONTENTS**

[**When using Includes/ Does Not Include as a condition:**](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#When-using-Includes/-Does-Not-Include%C2%A0as-a-condition%3A%C2%A0)

[Creating an And condition:](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#Creating-an-And-condition%3A)

[Creating an Or Condition](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#Creating-an%C2%A0Or-Condition)

[**If/ Else Branches**](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#If/-Else-Branches)

[What happens when two branches are both true? Will the lead go down both paths?](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#What-happens-when-two-branches-are-both-true?-Will-the-lead-go-down-both-paths?)

[**Time Comparison Operators**](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#Time-Comparison-Operators)

[The "Is" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is Not" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is After" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is on or After" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is before" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is on or before" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[The "Is not empty" or "Is empty" Operator](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#The-)

[**Troubleshooting**](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else#Troubleshooting)

* * *

## **When using Includes/ Does Not Include as a condition:**

**Please Note:**

```
There are several conditional parameters in Workflow Builder where you'll have the option to specify "Includes" or "Does not include" such as Tags and other multiple-option custom fields (checkbox fields, dropdown pickers, etc.)
```

## **Creating an _And_ condition:**

In the example below we are using the AND condition. The system is searching to make sure that the contact Tags - " **Does NOT include**" both the ' **consultation\_booked**' **AND** ' **consultation\_confirmed**' tags.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250497669/original/FlAzFJDU1cdgpaFpt9G1g1I-LshYykcoIw.png?1662994820)

If one of the two tags is present on the respective contact, then the condition will **fail**.

In this example in order for this contact to go down the "YES" path, both tags would NOT be present on the contact profile/record.

* * *

## **Creating an** **_Or_ Condition**

If your intention is to create an "OR" scenario, you would want to break the two tags into separate conditions and choose the OR option like this:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250492624/original/PVEr200i5xqjrUmLV8Th7Z7N3w-UC0p-Hg.png?1662993828)

In this case, if the contact meets ONE or both of the "Or tags" then the condition is true. The system is only looking for one or both conditions to be correct before pushing the contact down the " **Yes**" path.

**More info: [If/ Else Conditions - Troubleshooting AND or OR conditions](https://help.gohighlevel.com/en/support/solutions/articles/48001202137)**

* * *

## **If/ Else Branches**

If/ Else Branches

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[If/ Else Branches](https://www.loom.com/share/0fc6ae7bbacc440aac749510bd169874 "If/ Else Branches")

1 min

2.62K views

2

[Open video in Loom](https://www.loom.com/share/0fc6ae7bbacc440aac749510bd169874 "Open video in Loom")

1.2×

1 min 26 sec⚡️1 min 47 sec1 min 26 sec1 min 11 sec57 sec50 sec43 sec34 sec

2

C

Why does everyone ignore the Red Box or other side of the if/else condition. Every video i watch never talks about how to CHANGE the info on that side. Everytime add this to my workflow, i can only change the left side (Blue Box)
+1 other comment

![](https://cdn.loom.com/sessions/thumbnails/0fc6ae7bbacc440aac749510bd169874-1662988911697.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[If/ Else Branches](https://www.loom.com/share/0fc6ae7bbacc440aac749510bd169874 "If/ Else Branches")

1 min

2.62K views

2

[Open video in Loom](https://www.loom.com/share/0fc6ae7bbacc440aac749510bd169874 "Open video in Loom")

1.2×

1 min 26 sec⚡️1 min 47 sec1 min 26 sec1 min 11 sec57 sec50 sec43 sec34 sec

2

C

Why does everyone ignore the Red Box or other side of the if/else condition. Every video i watch never talks about how to CHANGE the info on that side. Everytime add this to my workflow, i can only change the left side (Blue Box)
+1 other comment

**Please Note:**

```
If or else branches support up to 10 different outcomes per event.
```

### **What happens when two branches are both true? Will the lead go down both paths?**

No, the system will push the lead down the first correct path/branch in your setup. So it goes top down in the order you built the conditions/branches.

* * *

## **Time Comparison Operators**

Time Comparison Operators are essential components in workflows used to compare the current date and time with a specified input value. These operators enable workflow automation systems to make informed decisions based on time conditions. The different date and time units that can be compared using these operators include the current day of the week, the current day of the month, the current month, the current year, and the current hour.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767416/original/KoCQkLH9MoyKbTKOIcvnrgut3GGu561TCg.png?1678205389)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767549/original/dbRqTFVic08R06DsjrWJTBvu_oQTTHsuvA.png?1678205424)Once you choose the specific Time Parameter for which you want to use a Time Comparison Operator for, you need to choose the Time Comparison Operator from the drop down for **Select Operator:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768884/original/teNiXrftXKTqW1mha1KThd6BZnUd0INqGA.png?1678205723)**

### **The "Is" Operator**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768774/original/ky0A4uISIeeisjKdlTEGXhxz--Q1Om2W7w.png?1678205699)**

The "Is" comparison operator checks whether the selected date unit is the same as the input value. For instance, "Current Day of the Week Is Monday" will only return true if today is Monday. Similarly, "Current Month Is January" will only return true if it is currently January. For the options like **Current day of the Month is**, you need to specify the date of the current month like the 1st, 2nd, 3rd .

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285770094/original/wIhZ5qcg5hVwFuc6UAXzWcxuFSZn2B49Uw.png?1678206019)**The "Is Not" Operator**

The "Is not" operator, on the other hand, checks if the selected date unit is different than the provided input. For instance, "Current Day of the Week Is Not Saturday" will return true for all days except Saturday.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285772852/original/kCKx0qld3p_3b3nSPMEKESQphNrTsArYkg.png?1678206507)

### **The "Is After" Operator**

The "Is after" operator checks if the selected date unit is after the provided input. However, in the case of **hours**, this operator only considers minutes that start on the next hour. For instance, "Current Hour Is After 6 PM" will only return true if the time is 7:00 PM onwards because 6:59 PM is still considered inside of 6 PM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285773967/original/ctdTUP7-6TRTnlqG6bAo06Ops_t3tZrBKA.png?1678206767)

### **The "Is on or After" Operator**

The "Is on or after" operator checks if the selected date unit is on or after the provided input. For **hours**, this operator considers minutes from the same hour and onwards. For instance, "Current Hour Is On or After 6 PM" will return true for 6:59 PM because it is considered to be "On" 6 PM. And it will also be true for any time after 6PM because of the **on or After** logic in it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285774725/original/LbFSGZ2xAz7OwUALQtrjMyULCNhd4uguww.png?1678206957)

### **The "Is before" Operator**

The "Is before" operator checks if the selected date unit is before the provided input. For example, "Current Month Is Before June" will return true for all months before June.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775110/original/Bkcc0xt6Pds6vD8yLtPApbAMaM6GcnUwlQ.png?1678207054)

### **The "Is on or before" Operator**

The "Is on or before" operator checks if the selected date unit is on or before the provided input. For **hours**, this operator also considers minutes from the same hour. For instance, "Current Hour Is On or Before 6 PM" will return true for 6:59 PM because it is considered to be "On" 6 PM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775589/original/2EYd4ky4Khaa70G3s6_cbNPSXs3-NMj_Wg.png?1678207145)

### **The "Is not empty" or "Is empty" Operator**

Lastly, the "Is not empty" operator checks if the field has a value, while the "Is empty" operator checks if the field does not have any value. These two operators are used to ensure that the workflow automation system receives valid input values.

* * *

# **Troubleshooting**

**[If/ Else Conditions - Troubleshooting AND or OR conditions](https://help.gohighlevel.com/en/support/solutions/articles/48001202137)**

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

- [Workflow Action - Wait](https://help.gohighlevel.com/support/solutions/articles/155000002470-workflow-action-wait)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)
- [Workflow Action - Remove from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else)

## Related Articles

- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)
- [If/Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options)
- [Workflow Action - Intent Detection](https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-intent-detection)
- [Workflow Action - If Else New Features](https://help.gohighlevel.com/support/solutions/articles/155000001641-workflow-action-if-else-new-features)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else/hit)