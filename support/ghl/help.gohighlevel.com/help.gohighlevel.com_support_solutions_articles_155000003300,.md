---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003300,"
title: " Workflow Action - Assign To User : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003300,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003300,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Assign To User

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

# Workflow Action - Assign To User

Modified on: Thu, 24 Jul, 2025 at 7:25 PM

This article provides a detailed guide to the **“Assign To User”** workflow action, a feature designed to simplify contact assignment within your workflows. You’ll learn what this action does, its key benefits, a step-by-step configuration process, and real-world use cases to help you leverage it effectively.

* * *

**TABLE OF CONTENTS**

- [What is "Assign To User" Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003300,#What-is-)
  - [Key Benefits of "Assign To User" Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Key-Benefits-of-)
  - [Adding "Assign To User" Action](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Adding-)
  - [Configuring "Assign User" Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Configuring-)
    - [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Action-Name)
    - [Select the Users](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Select-the-Users)
  - [Splitting Assignment to Users (Weighted Round Robin)](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Splitting-Assignment-to-Users-(Weighted-Round-Robin))
    - [Distributing Equally](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Distributing-Equally)
    - [Distributing Unevenly](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Distributing-Unevenly)
  - [Only Apply to Unassigned Contacts](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Only-Apply-to-Unassigned-Contacts)
  - [Standard vs Dynamic User IDs](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Standard-vs-Dynamic-User-IDs)
  - [Where To Find User ID Manually](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Where-To-Find-User-ID-Manually)
  - [How To Assign Users Dynamically](https://help.gohighlevel.com/support/solutions/articles/155000003300,#How-To-Assign-Users-Dynamically)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000003300,#Frequently-Asked-Questions)

* * *

# **What is "Assign To User" Workflow Action**

The **“Assign To User”** workflow action allows you to automatically assign contacts to one or more team members (Users) based on predefined criteria. It supports both single-user assignments and multi-user distribution using methods like round-robin or custom traffic splits. This action ensures balanced workload distribution, enhances tracking, and enables streamlined team collaboration. Whether you’re assigning leads, tickets, or tasks, this feature is designed to adapt to your specific workflow needs.

* * *

## **Key Benefits of "Assign To User" Workflow Action**

- **Automated Assignments:** Save time and effort by eliminating the need for manual contact assignment.

- **Fair Distribution:** Use round-robin or equal distribution methods to balance workload among team members.
- **Custom Allocation:** Assign contacts unevenly based on team capacity or seniority to maximize efficiency.
- **Improved Tracking:** Ensure accountability by clearly defining who is responsible for each contact.
- **Flexible Workflows:** Adapt the feature for various use cases, from sales lead management to customer support.

* * *

## **Adding "Assign To User" Action**

Open the workflow builder, Click the **“+”** icon to add a new action, and select **“Assign To User.”**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038396150/original/Fy2R3r_FCd-iQibNkBX_t8iSdRj-Vgwmxg.png?1734349836)

* * *

## **Configuring "Assign User" Workflow Action**

### **Action Name**

Provide a descriptive name for the action (e.g., “Assign to Agents in California”) so it’s easy to identify in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398659/original/xQ_gqdcSxRKlGxIt7ft6EL4Ycf6Cc-6AEg.png?1734351363)

### **Select the Users**

Use the dropdown menu to choose one or more users for the task to be assigned.

- **Single User:** All contacts are assigned to one user.

- **Multiple Users:** When you select more than one user, the trigger automatically rotates between the designated users in a "round robin" for each assignment. For instance, if you choose Tom and Jane, the first trigger assigns the contact to Tom, the second trigger assigns to Jane, the third assigns to Tom again, and so on until all contacts have had users assigned to them.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398702/original/fZUNbW2D6puroXT_BlT32tUUXppzwRWMFw.png?1734351410)

* * *

## **Splitting Assignment to Users (Weighted Round Robin)**

Splitting contact assignment to users evenly or unevenly distributes tasks, contacts, or leads among selected users based on predefined rules.

### **Distributing Equally**

By selecting **"Equally"** under the Split Traffic option, the traffic will be distributed evenly among all the users, similar to the Round-Robin Assignment method (e.g., 1:1, 2:2, etc.). This is enabled by default until you switch to the Unevenly option.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398768/original/wB6JjvQcN9Fqdrfc0K-JF1F1hLloQeZjgg.png?1734351458)            **Distributing Unevenly**

Opting for the **"Unevenly"** option allows you to customize the traffic distribution ratio for each selected user. For instance, you could specify a ratio of 5:2, where User A receives five traffic and User B receives two traffic; therefore, User B will only receive traffic after User A has completed their fifth.

If Split Traffic is Unevenly and there are three Users with these weights:

- Alan: 3
- Bobby: 3
- Charlie: 1

Then workflow trigger 1, 2, and 3 will be assigned to Alan; trigger 4, 5, and 6 will be assigned to Bobby; trigger 7 will be assigned to Charlie; then the cycle will repeat.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398834/original/Q8Oo5U7LuQNaR6py2qQRg7kUc0Ld9twuyQ.png?1734351507)

* * *

## **Only Apply to Unassigned Contacts**

If the **"Only Apply To Unassigned Contacts"** toggle is turned off, and the trigger fires for an already assigned contact, the new task will overwrite the previous one, and the contact will be assigned to the new user.

- **Enabled:** Assign contacts only if they haven’t been assigned yet.

- **Disabled:** Reassign contacts even if they are already assigned.


## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398928/original/0BznyGYpQH0LmWFOcLecTlnAff6YSmzfIA.png?1734351559)

## **Standard vs Dynamic User IDs**

In the Users dropdown where you select one or more Users to use in the assignment, Standard is selected by default, which shows you a dropdown menu of all Users in the subaccount. If you select Dynamic the field changes to a plain text field and you can input user IDs directly or via merge tags.

```
Note that the Dynamic view allows you to manually enter one or more user IDs. However, the normal way to use it is to select a variable from earlier in the workflow that contains a user ID.
```

* * *

## **Where To Find User ID Manually**

In order to manually obtain the user ID for your users: Go to **Settings > My Staff.** The user ID can be found below the user’s email address.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049169521/original/cGx0z_i8djodev2Q4j3Ca4JjQfbWIldOXg.png?1751381650)

* * *

## **How To Assign Users Dynamically**

In most situations you should use the Standard picker because your Assign User logic is simple and/or is defined inside a HighLevel workflow. However, some advanced users have more **complex** Assign User logic which is **running outside** HighLevel.

```
Example advanced Assign User case:

A digital marketing agency with several account managers serving different client tiers, training, and sometimes covering for each other.

New lead arrives → External system evaluates:
- Lead source (Google Ads, referral, cold outreach)
- Company size (employees, revenue)
- Service interest (SEO, PPC, social media)
- Geographic location

External system creates smart assignment:
- Enterprise leads → Senior Account Manager (User id #1 or #2)
- Enterprise Leads training → Standard Account Manager (User id #3)
- Mid-market leads → Standard Account Manager (User id #3, #4, or #5)
- Small business leads → Junior Account Manager (User id #6, #7, #8, or #9)
- Small business leads overflow → Standard Account Manager (User id #4 or #5)

Workflow receives inbound webhook to assign User id to contact.
```

**Step 1**: Create Workflow

Create a new workflow and add an Inbound Webhook Trigger, a Find Contact Action, and an Assign User Action.

**Step 2**: Send Setup Webhook

Setup the Inbound Webhook by using your system of choice to send an example to the URL provided. In this case we used [https://reqbin.com/](https://reqbin.com/) for a quick free test. Setup a user\_id param and a contact\_email param. When you see "status: success: test request received" you can return to the Inbound Webhook Trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404924/original/CxMP-vX-_jp_YcLOXeZ69gOIsuuAgcRZFw.png?1753402439)

**Step 3**: Configure Inbound Webhook Trigger

Return to the Inbound Webhook Trigger, find the successful request, check the mapping, and save the trigger. Now that Inbound Webhook Trigger and its query parameters will be available later in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404909/original/ycVgw3eqg96m7UHhv4aBW2D09n7nWGmo2g.png?1753402333)

**Step 4**: Configure Find Contact Action

Edit the Find Contact Action by selecting the User > Email field and then mapping it to the Inbound Webhook > QueryParams > contact\_email field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404981/original/4pyUW9uHJITGo40ep0Ls_8zwP6Q0CpJFkQ.png?1753402743)

**Step 5**: Configure Assign User Action

Edit the Assign User Action by switching from Standard to Dynamic. Then In the merge field picker select the Inbound Webhook Trigger > QueryParams > user\_id field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404998/original/5xdpsodLHZeXlytfNQF5K1EUs9AQrQCnqA.png?1753402894)

**Step 6**: Test & Save

Make sure to test the workflow under a variety of conditions. When you're satisfied, make sure to save it and publish when you're read for it to go live.

* * *

## **Frequently Asked Questions**

**What is the purpose of the “Assign to User” action in a workflow?**

The “Assign to User” action allows you to automatically assign contacts to specific team members, ensuring efficient workload management and tracking.

**What happens if I select only one user in the “Assign to User” action?**

If you choose one user, all contacts triggered by the workflow will be assigned to that user, and the assignment won’t rotate to other users.

**Can I use the “Assign to User” action without turning on the “Only Apply to Unassigned Contacts” toggle?**

Yes, but any previously assigned contact may be reassigned to a new user when the workflow trigger fires.

**What is the difference between Round-Robin Assignment and Equally Split Traffic?**

Round-Robin rotates assignments one at a time among users. Equally Split Traffic ensures users receive an equal number of assignments over time.

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

- [Workflow Action - Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)

## Related Articles

- [Workflow Action - Assign User](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user)
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)
- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)
- [Workflow Action - Task Notification](https://help.gohighlevel.com/support/solutions/articles/155000003375-workflow-action-task-notification)
- [Workflow Action - Remove Assigned User](https://help.gohighlevel.com/support/solutions/articles/155000003268-workflow-action-remove-assigned-user)
- [How To Setup Automatic Calls and Voicemail Drops](https://help.gohighlevel.com/support/solutions/articles/48000981430-how-to-setup-automatic-calls-and-voicemail-drops)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003300,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003300-workflow-action-assign-to-user/hit)