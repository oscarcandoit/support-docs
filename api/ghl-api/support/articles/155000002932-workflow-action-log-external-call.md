---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000002932-workflow-action-log-external-call
category: articles
type: article
scraped: 2025-10-28T16:10:19.803Z
title:  Workflow Action - Log External Call : LeadConnector 
status_code: 200
---

#  Workflow Action - Log External Call : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversations Tab](https://help.leadconnectorhq.com/support/solutions/48000456390) [Conversations View](https://help.leadconnectorhq.com/support/solutions/folders/48000691395)

## Workflow Action - Log External Call  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000002932-workflow-action-log-external-call\# "Print this Article")

Modified on: Tue, 30 Jul, 2024 at 5:58 AM

* * *

This document explains how to use the workflow action - Log External Call, to log calls from third-party calling tools into the CRM.

### **Covered in this Article:**

1. What is the Workflow Action - Log External Call?
2. How to use this action?

### **What is the Workflow Action - Log External Calls?**

Using this workflow action, you can post your external calls, that take place from third-party calling tools, to the CRM. This ensures that all your communication details are centralized within the CRM for better tracking and management. You can also pass the call recordings using this action and this will be visible on the Conversations section of contact.

### **How to use this action?**

**You can effectively use this action with the Inbound Webhook Trigger. This trigger provides you with a webhook URL that you can call to share the call details, whenever a call takes place in your calling system.**

**Configuring the Inbound Webhook Trigger: [Help Document](https://help.gohighlevel.com/a/solutions/articles/48001237402?portalId=48000070066)**

**Once the trigger is configured, add the If/Else brach with direction field to separate inbound and outbound flows.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049016/original/1ZSk4ELYuOe5RoJrZckFQ2fb0j7W29rpDw.png?1722256105)**

**Note: direction field can be accessed from Inbound Webhook Trigger option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049335/original/i150SOLnrV0vzOpcX5AFX8GDS4qb2g5aCQ.png?1722256238)**

**After creating two branches for Inbound calls and Outbound calls, Add "Create Contact Action. This will identify the contact on which the call should be posted using the phone numbers that you pass in the webhook.**

**In Create Contact Action, map the Phone field to "From Number" in Inbound call flow and "To Number" in the Outbound call flow. This will create/identify the contact associated with the given phone number.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049744/original/wDhFwiA4PKkIt55s5hntwRsFrKy050Hdzw.png?1722256470)**

**Post this, Add the Log External Call action.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050022/original/bCkK1GTlWcW3c87myvaFIBEXFbgOvHwyDQ.png?1722256617)**

**For each field, Direction, Date, To, From, Call Status and Attachment, update the related values by clicking on custom values icon > Inbound Webhook Trigger.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050317/original/aov6CsyaGDQwCtzXJuoISUVm-7pMvKx2eA.png?1722256777)**

**Once the workflow is published, external calls will be logged in the CRM and visible in Conversation section of the contact.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050720/original/NjOWrt1ItkIe7diZyhF_CwcgPJ5bdT37RQ.png?1722257002)**

Call recordings can also be passed to the CRM and will be shown within the Conversation.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000002932-workflow-action-log-external-call/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000002932-workflow-action-log-external-call*  
*Generated on: 2025-10-28T16:10:19.803Z*
