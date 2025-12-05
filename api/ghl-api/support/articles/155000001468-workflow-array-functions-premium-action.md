---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000001468-workflow-array-functions-premium-action
category: articles
type: article
scraped: 2025-10-28T16:04:43.818Z
title:  Workflow - Array Functions Premium Action : LeadConnector 
status_code: 200
---

#  Workflow - Array Functions Premium Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Workflow - Array Functions Premium Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000001468-workflow-array-functions-premium-action\# "Print this Article")

Modified on: Tue, 21 Nov, 2023 at 12:40 AM

* * *

## **Array Functions**

To handle array data in workflow

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013181751/original/J4wuqBWlsGaWeXpQJ88py4j07xxDrsgRjw.png?1700546301)**

## **Select Action Typ** **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182395/original/HqGSQ4rb4mY2r0XF_O8CpowHohFJ4qP9PQ.png?1700547337)**

## **Action Type: Find**

To find the matching key-value's in an array of objects and return the object **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182455/original/0Tw-hirDse81dg_5f9O_BvY27bytE5yvbw.png?1700547402)**

## **Select Field**

All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.

In the below example we are using Shopify Order Placed Trigger and checking if a product with product id "zGhad23wfadfa" is part of the shopify line items

### **Select Shopify > Line Items**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182494/original/fRJD3T20kXxkQ7bNfb5f_SE51zCZM6WYlg.png?1700547476)

### **Select Key-value to find matching object**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182502/original/QxRgxTlL8BWZ5hoDcLpJAPh-fowlvGpriQ.png?1700547494)

### **Select Key**

The list of key variables from the selected array field are listed here. In this example, the list of shopify line items key variables are listed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182507/original/RpK0iZ5yjiJVqA2JvGhDC9nz9JEg-yzI_Q.png?1700547512)

### **Enter value to find the match**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182544/original/Ot0QmleSKXSPoaAwTNt9NoJLoLKwCoSlQA.png?1700547531)

### **Add another item**

You can also find the matching object with multiple key-value pairs by adding another key-value item

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182792/original/vOp583shLvwTreWUXBFgzr9nmklTaKgkxg.png?1700547839)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013182869/original/41xVo7YOiUb2fSNfhf4p0TTLqOiezC8-og.png?1700547967)

By completing the above steps, you can now use the returned object variables from Array Function as custom values in email, sms, if/else, etc. In the below example, the shopify line items variables are listed in the custom values.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013183302/original/piZJxZnTHvikOg6ehv9vDUcwpymlNk6mLA.png?1700548585)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000001468-workflow-array-functions-premium-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000001468-workflow-array-functions-premium-action*  
*Generated on: 2025-10-28T16:04:43.818Z*
