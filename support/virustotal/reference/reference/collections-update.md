---
title: "Update a collection"
source: "https://docs.virustotal.com/reference/collections-update"
scraped_at: "2026-02-08T06:35:37.382Z"
---

This endpoint allows updating a collection&#x27;s attributes (such as name or description) and adding new elements to a collection by using a raw text.

The following request body shows an example of how to update a collection&#x27;s name and add new IOCs to it by using a raw text:

Example request body
```
`{
 "data": {
 "attributes": {
 "name": "Updating the name"
 },
 "raw_items": "This is a text containing a IoC, www.virustotal.com",
 "type": "collection"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!