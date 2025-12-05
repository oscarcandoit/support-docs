---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync
category: articles
type: article
scraped: 2025-10-28T15:58:18.688Z
title:  How to enable Google Email Two-Way Sync : LeadConnector 
status_code: 200
---

#  How to enable Google Email Two-Way Sync : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Two Way Sync Integrations](https://help.leadconnectorhq.com/support/solutions/folders/48000690366)

## How to enable Google/Outlook Email Two-Way Sync  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\# "Print this Article")

Modified on: Sun, 19 May, 2024 at 10:26 PM

* * *

Email Two Way Sync is a feature that allows the synchronization of emails between the CRM and an email client, in both directions. Any email sent, received, or updated in one platform is automatically synced with the other, ensuring that all relevant data is available in both places. This is currently supported for Gmail and Outlook.

#### **Covered in this Article:**

#### [**What is Email Two way sync?**](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-is-Email-Two-way-sync?)

#### [Outlook:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Outlook%3A)

#### [Gmail:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Gmail%3A)

#### [**Steps to connect**](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Steps-to-connect)

#### [Gmail Two-Way Sync:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Gmail-Two-Way-Sync%3A)

#### [Google Rate Limits](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Google-Rate-Limits)

#### [How does the Gmail 2-way sync work between the CRM and your email account?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#How-does-the-Gmail-2-way-sync-work-between-the-CRM-and-your-email-account?)

#### [Outlook Two-Way Sync:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Outlook-Two-Way-Sync%3A)

#### [How does the Outlook 2-way sync work between the CRM and your email account?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#How-does-the-Outlook-2-way-sync-work-between-the-CRM-and-your-email-account?)

#### [**Other functionalities for both Outlook and Gmail Two-Way Sync**](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Other-functionalities-for-both-Outlook-and-Gmail-Two-Way-Sync)

#### [Update Email:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Update-Email%3A%C2%A0)

#### [Disconnect Email:](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Disconnect-Email%3A%C2%A0)

#### [BCC Address](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Auto-Bcc-Sync)

#### [**Does Two-way sync only work with individual emails or bulk emails and workflows?**](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Does-Two-way-sync-only-work-with-individual-emails-or-bulk-emails-and-workflows?)

#### [**FAQs (Gmail only)**](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#FAQs-(Gmail-only))

#### [What happens to emails received from existing contacts?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-happens-to-emails-received-from-existing-contacts?)

#### [Will removing a synced account delete existing emails?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Will-removing-a-synced-account-delete-existing-emails?)

#### [Do new emails get synced after an account is removed?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Do-new-emails-get-synced-after-an-account-is-removed?)

#### [Will all my existing contacts in Gmail be synced with the CRM?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#Will-all-my-existing-contacts-in-Gmail-be-synced-with-the-CRM?)

#### [What happens when a new email is received from a contact?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-happens-when-a-new-email-is-received-from-a-contact?)

#### [What happens to sent emails from the CRM or Gmail?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-happens-to-sent-emails-from-the-CRM-or-Gmail?)

#### [How are cc/bcc recipients handled in the sync?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#How-are-cc/bcc-recipients-handled-in-the-sync?)

#### [What if a contact emails someone else but includes the CRM user?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-if-a-contact-emails-someone-else-but-includes-the-CRM-user?)

#### [How is the conversation thread managed when multiple recipients are involved?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#How-is-the-conversation-thread-managed-when-multiple-recipients-are-involved?)

#### [What if the same contact exists in multiple locations for the same synced email address?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-if-the-same-contact-exists-in-multiple-locations-for-the-same-synced-email-address?)

#### [What is Auto Bcc Sync, and how does it work?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-is-Auto-Bcc-Sync,-and-how-does-it-work?)

#### [How is the secure connection handled if Gmail login credentials change?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#How-is-the-secure-connection-handled-if-Gmail-login-credentials-change?)

#### [What happens when an email is forwarded from Gmail?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-happens-when-an-email-is-forwarded-from-Gmail?)

#### [What if there are duplicate emails with multiple contacts?](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync\#What-if-there-are-duplicate-emails-with-multiple-contacts?)

* * *

## **What is Email Two way sync?**

Users can connect their personal Gmail or Outlook email accounts and sync outgoing & incoming emails between the CRM and their personal Gmail or Outlook accounts. Users can use their email accounts to send, receive & track emails.The sync will be established between both platforms in different circumstances.

### **Outlook:**

When an email thread is initiated from the CRM (first outbound message). All the subsequent emails in the thread will sync between both platforms. This feature is a user-level setting and does not impact other users in the sub-account.

### **Gmail:**

There are two cases of how the sync can be established.

1\. You can email a contact from the CRM to initiate the sync between both platforms.

2\. Gmail Sync also works if a contact already saved in the CRM sends an email to the User (who has Gmail Two Way sync integrated) on their Gmail Email address. The email would sync into the conversations tab. **The contact also needs to be assigned to the user beforehand.**

**Please note**

```
If the user is added to multiple sub accounts, and has integrated the same Gmail account for Gmail Two way sync in all those accounts, the email from the contact will go to the conversations tab of all those sub accounts, but we will only retain the instance of that contact in that sub account to which the user replies to. Sync will be broken for all other instances.The additional filter of user being assigned to the existing contact also makes sure that the conversation will not go to sub accounts that the contact does not belong to.
```

* * *

## **Steps to connect**

Please go to the sub-accounts **Settings** page. Go to the **Profile** tab and then the **General** tab and scroll down to the section **Email (2-way sync)**

**Please Note:**

```
You will only see the Profile tab if you are added to the sub account for which you are viewing at that time.
```

### **Gmail Two-Way Sync:**

Over there, if you want to use Gmail Two Way Sync, please select Gmail two sync and hit **Connect.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172202/original/Ov8ZL5bpsQ11-hYQtBEojRIcukahg4g4LQ.png?1678806836)**

It will then prompt you to choose one of the available Gmail Accounts in that browser or ask you to connect a Gmail account; select the one you need; connecting a new account will require you to enter that account's credentials in the popup.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172195/original/3CsRgPoAgMOfw8ALOdS6pc-DDLAUd-ZB7w.png?1678806834)

Connecting it will then ask you about which permissions you are allowing LeadConnector to have on your Gmail account; make sure to allow all and then hit enable continue **:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172136/original/eEHiU83lWrnWYIoNWE57sQC-oZQqucXvww.png?1678806825)**

Once you hit, **Continue,** you will see your desired Gmail account connected in the Email Two Way sync tab:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172189/original/FLuw6y9A-vvCxMjw_0KP04tsy1e_QOY5BQ.png?1678806834)

#### **Google Rate Limits**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155002826972/original/oH7znyWMP4LtMBU1U9ckgwxUUTr-bkn18g.png?1689218041)

* * *

#### **How does the Gmail 2-way sync work between the CRM and your email account?**

There are two cases of how the sync can be established.

1\. You can email a contact from the CRM to initiate the sync between both platforms.

2\. Gmail Sync also works if a contact already saved in the CRM sends an email to the User (who has Gmail Two Way sync integrated) on their Gmail Email address. The email would sync into the conversations tab. **The contact also needs to be assigned to the user beforehand.**

**Please note**

```
If the user is added to multiple sub accounts, and has integrated the same Gmail account for Gmail Two way sync in all those accounts, the email from the contact will go to the conversations tab of all those sub accounts, but we will only retain the instance of that contact in that sub account to which the user replies to. Sync will be broken for all other instances.The additional filter of user being assigned to the existing contact also makes sure that the conversation will not go to sub accounts that the contact does not belong to.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287099381/original/5yv1sSHvgI7kZ4JHVVjfZBO59-h2hC2NiQ.png?1678791637)

The sent email will show up in the sent inbox of the integrated Gmail account:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287099648/original/TkUibkPnbsnocvJ7Pe29R3EjDO-IdqMbCg.png?1678791736)

**Please Note:**

```
Gmail supports only ~500 emails per day and emails beyond that will be unsuccessful.
```

All subsequent messages in the email thread will be in sync. Outbound emails from your email will reflect in the CRM and vice versa.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287100068/original/KFFk82QyDSizlj8oZgSFpmo62DMwDOMUmQ.png?1678791842)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287100403/original/bvqjrVOEvFHoWUWu56obXKkhDBc9638gvQ.png?1678791938)

**Please Note:**

```
The supported attachment size limit for Gmail Two way sync is 25 MB.
```

* * *

### **Outlook Two-Way Sync:**

If you want to use Outlook Two Way sync, Select **Outlook** under Email (2-way sync)as your email provider & click on **Connect.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172972/original/eIXwK85vdb6ar3wz96e5oFZi9XhO9yRoXA.png?1678806993)**

Complete the authorization by entering your Outlook email ID credentials.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173057/original/Daj_APA9d_Q-I9r9ZCokna65RMm2KCe-ZA.png?1678807007)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173059/original/BR0E9H1Kq-zRARo6Zn0yhTFCJtpCj4j7gw.png?1678807007)

Approve for permissions requested for **LeadConnector:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173015/original/x7BbOXuVpLR_x9VOtLHn9wvkiRs3JYpbxw.png?1678807000)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172979/original/Kaw9-ZO4dRY4cVBBYoasnMZbZqRJVq3DgQ.png?1678806994)

On the profile page, scroll down to the section Email (2-way sync) to view your email in the connection status.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173043/original/vthvUmX6mIVBuwVStPpDG9PTN68x6vvviw.png?1678807005)

* * *

#### **How does the Outlook 2-way sync work between the CRM and your email account?**

You would need to send an email to a contact from the CRM to initiate the sync between both platforms.

**Please note**

```
The first outbound email needs to be initiated from the CRM to establish the sync
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173042/original/7oxQxp_6W7ZY-RwNj7OY74lo_nfFKtSKKQ.png?1678807004)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173061/original/EDcuU_y8RqC6s794ZWZiywSpWeS9xVMFxg.png?1678807008)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173058/original/IsrUAmxqm3mT_Ut-2S-cG5dBnZBevGjw9w.png?1678807007)

All subsequent messages in the email thread (initiated from the CRM) will be in sync. Outbound

emails from your email will reflect in the CRM and vice versa. reflect

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173062/original/7Me67gV0KCOl0GVFM5493Q8jY7A9IKyyLA.png?1678807008)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173060/original/oLPD0weRLE5l_DQ8BGGjETrFzpAHOpUWNg.png?1678807008)

An email thread initiated from your email will not sync with the CRM. Only email threads that were formed from the CRM will be in sync. created

If an outbound email was sent (while the sync was in active state) and later the sync was disconnected from the CRM, the subsequent messages in the thread will stop syncing. This will also stop syncing new outbound emails sent from the CRM.

**Please note**

```
Attachments of up to 3 MB size work across this sync, any attachments larger than this size will cause the message to not sync over.
Supported file types: JPG,JPEG,PNG,MP4,MPEG,ZIP,RAR,PDF,DOC,DOCX,TXT
```

* * *

## **Other functionalities for both Outlook and Gmail Two-Way Sync**

### **Update Email:**

This helps users change their connected email ID to another without disconnecting the previous connection.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173780/original/Z2tWxdGBQs-6ByjzvhBss7rZIabcgOgkbQ.png?1678807137)

New outbound emails from the CRM will start syncing with the newly added email address. Upcoming messages in the previously connected email ID (same thread) will stop syncing between the CRM & personal email.

### **Disconnect Email:**

This helps users to disconnect their connection and stop the sync with the CRM. Post disconnect, emails or messages will not sync between both platforms.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173779/original/Ej3-tK6PgUJyMdY_XrThv_WkoiD8d5YMcg.png?1678807137)

### **BCC Address**

You can include the BCC Address in the CC or B field when sending an email from Gmail/Outlook. Doing so will automatically add the contact and conversation to your CRM, streamlining communication and ensuring all relevant data is centralized. Going forward, any emails received from this contact at the Gmail/Outlook inbox level will automatically sync with CRM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003796789/original/y8e4pNvsjXgTN9G3mDxS0Ro04NP8gkUtfA.png?1690445519)

* * *

## **Does Two-way sync only work with individual emails or bulk emails and workflows?**

How the sender domain mapping works for different types of emails:

**Individual Email:** On connecting a personal email account (Gmail), the Gmail email ID will be considered the sender domain for the emails the user sends for individual emails. Individual emails are sent directly from Gmail when 2-way sync is activated for the user. Be aware that Google sets a limit of 500 emails daily, which applies to this functionality.

**Bulk Email:** This will continue to be sent from the sub-account level email provider. 2-way sync won't affect this.

**Workflow & Automation:** In terms of automated emails, they are dispatched from sub-account level providers. This arrangement seamlessly integrates your automated CRM workflows and the email dispatch system.

**Please Note:**

```
With this setup, users can leverage the 2-way sync for their one-on-one emails while also successfully sending bulk emails. The Gmail-imposed limit of 500 emails per day applies only to individual emails, so users can send bulk emails via LeadConnector/SMTP without worrying about reaching this limit. This is a thoughtful design feature, allowing users to conduct mass email campaigns without being constrained by Gmail's daily email cap.
```

* * *

## **FAQs (Gmail only)**

### **What happens to emails received from existing contacts?**

All inbound emails from existing contacts will be reflected in your CRM and Gmail/Outlook inbox. This bidirectional synchronization ensures a complete record of all your communication on both platforms.

### **Will removing a synced account delete existing emails?**

No, removing a synced account will not delete any existing emails. Your previously synced emails will remain intact, and the synchronization will only affect new emails sent or received after the account is removed.

### **Do new emails get synced after an account is removed?**

New emails sent or received after removing the account will not be synced between the CRM and Gmail/Outlook. The synchronization between the two platforms will continue for existing emails, and new emails will not be included in the sync.

### **Will all my existing contacts in Gmail be synced with the CRM?**

Yes, the Two-Way Sync identifies and syncs existing contacts from Gmail to the CRM. Incoming emails from these contacts are automatically populated under the respective contact, but past emails (before the integration is connected) cannot be synced over.

### **What happens when a new email is received from a contact?**

New incoming emails from existing contacts will be reflected as new emails in the CRM and Gmail. If the email belongs to an existing conversation thread, it will be displayed as a new email within the same thread.

### **What happens to sent emails from the CRM or Gmail?**

Outgoing emails sent from the CRM will be auto-logged in the Sent folder of the synced mail. Conversely, emails from the synced mail provider will automatically appear under the corresponding CRM contact's conversations.

### **How are cc/bcc recipients handled in the sync?**

If a user is cc'ed or bcc'ed, or included in multiple recipients in Gmail, this information is reflected under the respective contact in the CRM, ensuring comprehensive visibility of all communications. No new contacts are created for the CC and BCC email address.

### **What if a contact emails someone else but includes the CRM user?**

In this case, the email will be reflected under the CRM, associating it with the respective contact, maintaining the complete conversation history.

### **How is the conversation thread managed when multiple recipients are involved?**

In case of multiple recipients (to) in an email, the first contact becomes the conversation tab in the CRM. All subsequent emails will appear in this thread.

### **What if the same contact exists in multiple locations for the same synced email address?**

Email originating from the CRM will be reflected only in the respective location. Subsequent replies and communication should also be specific to that location. However, emails from a contact to the CRM user should be reflected in all locations.

### **What is Bcc Address, and how does it work?**

You can include the BCC Address in the Cc or Bcc field when sending an email from Gmail/Outlook. This automatically adds the conversation and contact in the CRM, streamlining communication and data management.Going forward, any emails received from this contact at the Gmail/Outlook inbox level will automatically sync with CRM.

### **How is the secure connection handled if Gmail login credentials change?**

In case of changed login credentials, the CRM will require you to reauthenticate and resync the email to maintain a secure connection.

### **What happens when an email is forwarded from Gmail?**

Any forwarded email to an existing contact will be treated as a sent email and synced under that contact in the CRM.

### **What if there are duplicate emails with multiple contacts?**

Duplicate emails sent to multiple contacts will be associated with the first created contact in the CRM.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync*  
*Generated on: 2025-10-28T15:58:18.688Z*
