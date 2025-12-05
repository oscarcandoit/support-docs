---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects
category: articles
type: article
scraped: 2025-10-28T16:13:38.817Z
title:  Configuring Searchable Fields for Objects : LeadConnector 
status_code: 200
---

#  Configuring Searchable Fields for Objects : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Contacts / SmartLists](https://help.leadconnectorhq.com/support/solutions/155000000014) [Contacts](https://help.leadconnectorhq.com/support/solutions/folders/155000000051)

## Configuring Searchable Fields for Objects  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects\# "Print this Article")

Modified on: Fri, 27 Jun, 2025 at 1:03 PM

* * *

This feature allows admins to configure which fields are searchable for their location.

Once updated, this change reflects for all users and impacts every place where the object can be searched, enhancing the flexibility and customization of searches.

**In This Article**

- [Feature 1 - Configuring Searchable Fields for Your Organization](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects#Feature-1---Configuring-Searchable-Fields-for-Your-Organization)
- [Feature 2 - Admin Only Access](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects#Feature-2---Admin-Only-Access)
- [Feature 3 - Changes Apply Globally](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects#Feature-3---Changes-Apply-Globally)
- [Feature 4 - Regex Searc](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects#Feature-4---Regex-Search) h
- [How to update your searchable fields?](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects#How-to-update-your-searchable-fields?)

* * *

## Feature 1 - Configuring Searchable Fields for Your Organization

Admins now have the flexibility to update the fields that are searchable for objects such as Contacts, Opportunities, and Custom Objects. This feature allows for streamlined search customization and offers regex search capabilities for specific fields.

For Contacts and Opportunities - you can search for upto 6 fields.

```
A minimum of 3 characters need to be added in the search box for any search to execute.
```

For Contacts - Contact Name, Phone Number and Email Address are mandatory and cannot be removed from the searchable fields.

For Opportunities - Opportunity Name cannot be removed from the searachable fields.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034620571/original/aXNLc4EWmAnnshlnUftwp_26gQbLrt2vmw.jpeg?1728891004)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034620571/original/aXNLc4EWmAnnshlnUftwp_26gQbLrt2vmw.jpeg?1728891004)

## Feature 2 - Admin Only Access

The ability to configure searchable fields is available **only to admins**. Users do not have the ability to make these changes.

## Feature 3 - Changes Apply Globally

Once the change is applied, the change will reflect across all contact search bars in the platform.

### For Contacts, that includes:

**1\. Contacts Search bar**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244715/original/F5j-cSikDfZtbl5xK3y-fYMPkyPg2C17xA.png?1728312607)

**2\. Global Search Bar**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244822/original/2o4coThu5UzPYJ798fR97pxxEYJZLVt34Q.png?1728312663)

**3\. Creating a new message in Conversations**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244931/original/OOjoGGyYwhKrfeHKOMWCtpqbHPIjB_CMdQ.png?1728312751)

**4\. Creating a new appointment in Calendars**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245007/original/wuLXSCIz_qiLRiHi4uK802K4YYfSO-pEUA.png?1728312818)

**5\. Creating and Updating Tasks in Contacts**

**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245261/original/crEVyZlazCEKFvCQx_D6pl9wiua1OgZeYA.jpeg?1728312954)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245261/original/crEVyZlazCEKFvCQx_D6pl9wiua1OgZeYA.jpeg?1728312954)**

**6\. Contacts and Additional Contacts fields in Opportunities**

**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245560/original/vMAskb6Oq03vMKPFD476aFkJi8Czr3dWUw.jpeg?1728313107)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245560/original/vMAskb6Oq03vMKPFD476aFkJi8Czr3dWUw.jpeg?1728313107)**

**And also across the following modules:**

|     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
| - Dashboard | - Workflows | - Forms | - Surveys | - Payments | - Invoices |
| - Documents & Contracts | - SaaS | - Affiliate Manager | - Emails | - Client Portal | - Custom Objects |

## Feature 4 - Regex Search

Users can take advantage of regex for more tailored searches.

However, please note that regex will not work on fields like contact names, phone numbers, monetary values, numeric fieldsand other similar fields.

Regex supports:

- `*abc`: Searches for records ending with "abc."
- `*abc*`: Searches for records containing "abc."
- `abc*`: Searches for records starting with "abc."


# ``` Regex search does not work on fields like contact name, phone numbers and monetary values ```

## How to update your searchable fields?

1. Launch the Subaccount > Settings > Custom Fields


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533907/original/mPCVkIsRGLR9KpYLfailitMyPaG41RUcmg.jpeg?1728644061)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533907/original/mPCVkIsRGLR9KpYLfailitMyPaG41RUcmg.jpeg?1728644061)

2. Go to the kebab menu (3 dots) on the top right and click on "Edit searchable fields"
[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533906/original/0gra7J-J1HyTPmerzV3eqtTTQ6QVPdLASQ.png?1728644062)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533906/original/0gra7J-J1HyTPmerzV3eqtTTQ6QVPdLASQ.png?1728644062)

3. Select the object you want to update the searchable fields for.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533997/original/c1_9oPAMn02B0rS4itVgumykC0W-V4MmbQ.png?1728644118)
4. Select fields that you want to mark Searchable.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034620640/original/BXUnXs--b3w30otXst2Bdfku63GhwDBmOQ.png?1728891041)
5. Save and confirm the changes.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034534116/original/oXMWnRsuJ02qexPBBjtI9bgjjz-hrKfM0g.png?1728644218)
6. The searchable fields are now updated for all modules and users in this account.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects*  
*Generated on: 2025-10-28T16:13:38.817Z*
