---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000001467-workflow-array-functions-premium-action
category: articles
type: article
scraped: 2025-10-28T16:04:41.742Z
title:  Workflow - Array Functions Premium Action : LeadConnector 
status_code: 200
---

#  Workflow - Array Functions Premium Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Workflow - Array Functions Premium Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000001467-workflow-array-functions-premium-action\# "Print this Article")

Modified on: Wed, 20 Dec, 2023 at 4:39 AM

* * *

In this Article

- What is Array Function?

- How to use new Action Types?

  - Add the Action

  - Action Type List

  - Action Type : Find

  - Action Type : Filter

  - Action Type : Find by Index

  - Action Type : Line Items

  - Action Type : Math

#### 1\. What is Array Function?

Array Functions is a premium action in workflow automation specifically designed to handle array data.

This functionality is very useful for complex workflows involving arrays.

#### 2\. How to use Action Types?

- Add the Action - Click the "+" button to add an action. Search for Array Functions or scroll down to the "Actions" tab to select the same.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714832/original/duFDC2rh3DHuQI215JjeFhN9TOnCPdUmLg.jpeg?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714832/original/duFDC2rh3DHuQI215JjeFhN9TOnCPdUmLg.jpeg?1703068589)

- **Select Action Type** - Post selecting the Array Function action we need to select the Action Type.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714831/original/fTEf3wwxAy9sK-tq-M_XEHLgHcUQynWvBA.jpeg?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714831/original/fTEf3wwxAy9sK-tq-M_XEHLgHcUQynWvBA.jpeg?1703068589)

2.1 **Action Type : Find**

- To find the matching key-value's in an array of objects and return the object. **[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714824/original/yAfSY3JFnb4liWXAE33CCDGVcf6SqDIjWQ.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714824/original/yAfSY3JFnb4liWXAE33CCDGVcf6SqDIjWQ.png?1703068589)**
- All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.
- In the below example we are using Shopify Order Placed Trigger and checking if a product with product id "zGhad23wfadfa" is part of the shopify line items

**Select Shopify → Line Items**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714820/original/zJYV6QpZ1ZAaADfSqvinkkIonHc2lyjEyA.png?1703068588)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714820/original/zJYV6QpZ1ZAaADfSqvinkkIonHc2lyjEyA.png?1703068588)

- Select Key-value to find matching object.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714826/original/FJ1KfORX8LBfGcqEHtHNFFyFMsckj0qlcg.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714826/original/FJ1KfORX8LBfGcqEHtHNFFyFMsckj0qlcg.png?1703068589)

- The list of key variables from the selected array field are listed here. In this example, the list of shopify line items key variables are listed.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714828/original/0UIvnmEvdZ1f17unTxAyUc82F7dfsZy-wg.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714828/original/0UIvnmEvdZ1f17unTxAyUc82F7dfsZy-wg.png?1703068589)

- Enter value to find the match.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714827/original/d27slbOsPmaGeLmhDRxqg8NAc51WhL8FCg.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714827/original/d27slbOsPmaGeLmhDRxqg8NAc51WhL8FCg.png?1703068589)

- Add another item - You can also find the matching object with multiple key-value pairs by adding another key-value item.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714823/original/3kcZ7SDz-0UgAOAR4PGDM87x7DsADNe9mQ.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714823/original/3kcZ7SDz-0UgAOAR4PGDM87x7DsADNe9mQ.png?1703068589)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714829/original/aTKa83h_FKfO1Dqgb2SHNY_rl4f3kxuulQ.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714829/original/aTKa83h_FKfO1Dqgb2SHNY_rl4f3kxuulQ.png?1703068589)

- By completing the above steps, you can now use the returned object variables from Array Function as custom values in email, sms, if/else, etc. In the below example, the shopify line items variables are listed in the custom values.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714833/original/BUda6xoUH9jefvN28eFXZul6my0gcE64OQ.png?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714833/original/BUda6xoUH9jefvN28eFXZul6my0gcE64OQ.png?1703068589)

**2.2 Action Type : Filter**

- Select the “Filter” action type from the dropdown. This action type will help in filtering the array by matching key-value in an array of objects.

Use case

- Eg: Filter the array by product group and then send it via Custom Webhook.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714839/original/pgRphtkfZGGPJsRnjW5i5dbQe9amlJmB8g.jpeg?1703068590)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714839/original/pgRphtkfZGGPJsRnjW5i5dbQe9amlJmB8g.jpeg?1703068590)

- All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.

**Select Shopify → Line Items**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714834/original/bmniv-3eNVJ-U15fRIdg4ZbIoqHF2FHRfQ.jpeg?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714834/original/bmniv-3eNVJ-U15fRIdg4ZbIoqHF2FHRfQ.jpeg?1703068589)

- Select Key value to find the matching index.
- The list of key variables from the selected array field are listed here. In this example, the list of shopify line items key variables are listed.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714869/original/JRmw5UcRSF_h43zwA-rtdUXJS5WrJl4wzg.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714869/original/JRmw5UcRSF_h43zwA-rtdUXJS5WrJl4wzg.jpeg?1703068597)

- Enter value to find the match.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714876/original/36rMbloABF8UpTiql-m-OJ8hB6blV6GRMQ.jpeg?1703068598)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714876/original/36rMbloABF8UpTiql-m-OJ8hB6blV6GRMQ.jpeg?1703068598)

- Add another item - You can also find the matching object with multiple key-value pairs by adding another key-value item.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714864/original/IDmGHLSZr1_Y2d4MUNEmMiL8iGs6UVRUGA.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714864/original/IDmGHLSZr1_Y2d4MUNEmMiL8iGs6UVRUGA.jpeg?1703068597)

2.3 Action Type : Find by Index

- Select the “Find by Index” action type from the dropdown. This action type will help in finding the array's index data.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714850/original/R2Cu02OClSkQhlEpO1TOJtepA5-12Xkqsg.jpeg?1703068593)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714850/original/R2Cu02OClSkQhlEpO1TOJtepA5-12Xkqsg.jpeg?1703068593)

- All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.


**Select Shopify → Line Items**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714867/original/QCVu4srv6HGSZizXpslX4YNWPt52OyCBvw.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714867/original/QCVu4srv6HGSZizXpslX4YNWPt52OyCBvw.jpeg?1703068597)

- The entered index value will return.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714843/original/Avc4L7kFIogNKAqQWetRRQXYgTA2zRSVIQ.jpeg?1703068591)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714843/original/Avc4L7kFIogNKAqQWetRRQXYgTA2zRSVIQ.jpeg?1703068591)

2.4 Action Type : Line Items

- Select the “Line Items” action type from the dropdown. This action type will help to reconstruct an array with custom keys.


Use case

- To reconstruct the array structure before sending it via Custom Webhook

- To reconstruct the array before storing in Google Sheet (Create Rows - later)

- To reconstruct the array to match Email Builder Shopping cart structure


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714844/original/EspiKj-cR5YG2Oh0Q1O5tKVNRAgN2tfwkQ.jpeg?1703068591)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714844/original/EspiKj-cR5YG2Oh0Q1O5tKVNRAgN2tfwkQ.jpeg?1703068591)

- All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.


**Select Shopify → Line Items**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714830/original/ABj4iTcPP703RfgMUcNEXJrjbtKxFrWQTw.jpeg?1703068589)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714830/original/ABj4iTcPP703RfgMUcNEXJrjbtKxFrWQTw.jpeg?1703068589)

- Enter the custom value in the “Key” input field and select the corresponding value from the value dropdown.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714861/original/3gB98biQttjsHGLUfsKi07DyI85S159H2A.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714861/original/3gB98biQttjsHGLUfsKi07DyI85S159H2A.jpeg?1703068597)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714868/original/i-5dmp_TRT1ZvGARNA3K8BGUzc-Ucn3SuA.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714868/original/i-5dmp_TRT1ZvGARNA3K8BGUzc-Ucn3SuA.jpeg?1703068597)

- ### Add another item - You can also find the matching object with multiple key-value pairs by adding another key value item.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714875/original/vL6TqZfiUFh4xKLjnrUx3r-8MCj6WCFfNw.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714875/original/vL6TqZfiUFh4xKLjnrUx3r-8MCj6WCFfNw.jpeg?1703068597)

2.5 Action Type : Math

- Select the “Math” action type from the dropdown. This action type will help to calculate Sum, Min, Max, Avg by matching key-value in an array of objects.


Use case

- Eg: To calculate Sub total(line item total), Line Items in cart(count), Total items (qty).


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714845/original/XAyIMW9qZoMUXLcoS11M-jEFNe7DKu3l5Q.jpeg?1703068591)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714845/original/XAyIMW9qZoMUXLcoS11M-jEFNe7DKu3l5Q.jpeg?1703068591)

- All the fields with data type array available in the workflow are listed here. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.


**Select Shopify → Line Items**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714872/original/A4taMK5NdhBvKSUdN8IxhwKkftLK_F5XGQ.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714872/original/A4taMK5NdhBvKSUdN8IxhwKkftLK_F5XGQ.jpeg?1703068597)

- Select Key value to find the matching index.

- The list of key variables from the selected array field are listed here. In this example, the list of shopify line items key variables are listed.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714849/original/WT_WaZjTdRwZnIlfR44m3OxBv4M_uoz1FQ.jpeg?1703068592)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714849/original/WT_WaZjTdRwZnIlfR44m3OxBv4M_uoz1FQ.jpeg?1703068592)

- ### Select or deselect from the list of options available.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714871/original/smonh5r5rCwMU30FHh7VL16qAPfl1EqMRw.jpeg?1703068597)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015714871/original/smonh5r5rCwMU30FHh7VL16qAPfl1EqMRw.jpeg?1703068597)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000001467-workflow-array-functions-premium-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000001467-workflow-array-functions-premium-action*  
*Generated on: 2025-10-28T16:04:41.742Z*
