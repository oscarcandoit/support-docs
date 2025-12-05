---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005208-how-to-create-qr-codes-manual-and-bulk
category: articles
type: article
scraped: 2025-10-28T16:23:20.028Z
title:  How to Create QR Codes : Manual and Bulk : LeadConnector 
status_code: 200
---

#  How to Create QR Codes : Manual and Bulk : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Surveys, Forms, QR Codes and Quizzes](https://help.leadconnectorhq.com/support/solutions/48000454680) [QR Codes](https://help.leadconnectorhq.com/support/solutions/folders/155000001203)

## How to Create QR Codes : Manual and Bulk  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005208-how-to-create-qr-codes-manual-and-bulk\# "Print this Article")

Modified on: Thu, 22 May, 2025 at 4:23 AM

* * *

## **Overview**

QR Codes offer a fast and trackable way to drive users to URLs, funnels, forms, and other assets. We provides two methods for QR code creation:

- Manual one-by-one creation

- Bulk generation using a CSV upload


Currently, the **bulk upload feature supports only URL-type QR codes**. Additional types such as PAYMENT, WHATSAPP, FUNNEL, FORM, QUIZ, and SURVEY are planned for future releases.

* * *

## **Method 1: Manual QR Code Creation**

### **Steps**:

1. Navigate to **Sites > QR Codes** in your account.

2. Click **Create QR Code**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047053447/original/uDyrG-uAcN9TOnBckDLwhlndBngXIv-KQw.png?1747904709)

3. Fill in the required fields:

   - **Name**: A label for internal use.

   - **Type**: URL, Funnel, Form, etc.

   - **Destination**: Depending on the selected type.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047053727/original/GVbrpp1CJjs9Wmo0klar5uumGEGdMMEsyg.png?1747904873)
4. Choose a folder for organizational purposes.

5. Click **Save** to generate the QR code.


### **When to Use:**

- Creating a small number of QR codes.

- Needing to customize individual QR code settings.

- Generating types other than URL (currently only available through manual creation).


* * *

## **Method 2: Bulk Upload QR Codes via CSV**

The bulk upload feature allows you to generate multiple URL-type QR codes at once by uploading a properly formatted CSV file.

### **How to Upload**

1. Navigate to **Sites > QR Codes**.

2. Click the **Bulk Upload** button in the toolbar.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054380/original/dwQaJWx44-fe-PVYgPK20c_Q-AJTIOaXQA.png?1747905391)

3. A modal will open. Choose your CSV file.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054438/original/ztcA_R5Gc3JTtJHsasbNSWUK55JhbGNSug.png?1747905439)

4. Select the destination folder where QR codes should be created.

5. Click **Upload** to begin the validation process.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054593/original/UWzNCWTfEUi7ZxvrHmbt4jcx02mfhhKL2A.png?1747905517)


### **Required Columns in the CSV File**

1. **`name`**

   - Purpose: Human-readable identifier for the QR code.

   - Required: Yes

   - Notes: Cannot be blank; should ideally be unique within the folder but not technically enforced.
2. **`url`**

   - Purpose: The destination the QR code will redirect to.

   - Required: Yes

   - Notes: Must be a **valid URL format** (e.g., starting with `http://` or `https://`). No malformed or missing entries.

* * *

### **Example CSV Structure**

```whitespace-pre!  csv

```

* * *

### **Common Validation Errors To Avoid**

| Issue | Recommended Action |
| --- | --- |
| Missing required columns | Ensure `name` and `url` columns exist with correct headers. |
| Invalid URL formats | Use fully qualified URLs including the scheme. |
| Empty rows or extra columns | Clean the file before saving as CSV. |
| File too large (over 1000 rows) | Consider breaking into smaller CSVs. |

* * *

* * *

csv

[sample\_name\_...](https://help.leadconnectorhq.com/helpdesk/attachments/155047055032 "")

(117 Bytes)

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005208-how-to-create-qr-codes-manual-and-bulk/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005208-how-to-create-qr-codes-manual-and-bulk*  
*Generated on: 2025-10-28T16:23:20.028Z*
