---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/bulk
category: contacts
scraped: 2025-10-11T23:11:04.070Z
title: Contacts | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts/index.html#__docusaurus_skipToContent_fallback)

Documentation for Contacts API

[**📄️ Get Contact** \\
Get Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact)[**📄️ Update Contact** \\
Please find the list of acceptable values for the \`country\` field <a href='https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list' target='\_blank'>here</a>](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-contact)[**📄️ Delete Contact** \\
Delete Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact)[**📄️ Upsert Contact** \\
Please find the list of acceptable values for the \`country\` field <a href='https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list' target='\_blank'>here</a><br/><br/>The Upsert API will adhere to the configuration defined under the “Allow Duplicate Contact” setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.<br/><br/>If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.](https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact)[**📄️ Get Contacts By BusinessId** \\
Get Contacts By BusinessId](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id)[**📄️ Create Contact** \\
Please find the list of acceptable values for the \`country\` field <a href='https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list' target='\_blank'>here</a>](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact)[**📄️ Get Contacts** \\
Get Contacts](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts)