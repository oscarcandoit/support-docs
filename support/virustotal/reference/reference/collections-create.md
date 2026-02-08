---
title: "Create a new collection"
source: "https://docs.virustotal.com/reference/collections-create"
scraped_at: "2026-02-08T06:35:37.397Z"
---

Use this endpoint to create new collections. In the request body, send a collection object containing its name, description and the elements it will contain (for URLs you can either use the URL or its ID). All IOCs must be described as relationships of a newly created Collection object. This is an example request body:

Create a collection from relationship descriptorsCreate a collection from raw text
`{
 "data": {
 "attributes": {
 "name": "Test collection",
 "description": "This is how to create a new collection via API."
 },
 "relationships": {
 "domains": {
 "data": [
 {
 "type": "domain",
 "id": "www.virustotal.com"
 },
 {
 "type": "domain",
 "id": "www.hooli.com"
 }
 ]
 },
 "urls": {
 "data": [
 {
 "type": "url",
 "url": "https://www.virustotal.com/"
 },
 {
 "type": "url",
 "id": "f11f7cc900638fae209f68498a90158fbfb067fc4191549ddb657e39cc4428c2"
 }
 ]
 },
 "ip_addresses": {
 "data": [
 {
 "type": "ip_address",
 "id": "8.8.8.8"
 }
 ]
 },
 "files": {
 "data": [
 {
 "type": "file",
 "id": "ecc0f2aa29b102bf8d67b7d7173e8698c0341ddfdf9757be17595460fbf1791a"
 }
 ]
 }
 },
 "type": "collection"
 }
}`
```
`{
 "data": {
 "attributes": {
 "name": "Test collection",
 "description": "This is how to create a new collection via API."
 },
 "raw_items": "This is a text containing an IoC, www.virustotal.com",
 "type": "collection"
 }
}`
```

To modify the collection&#x27;s attributes or add more elements to a collection using a raw text, refer to the [PATCH/collections/{id}](/reference/collections-update) endpoint.

To add new elements to the collection refer to the [POST /collections/{id}/{relationship}](/reference/collections-add-element) endpoint.

To remove elements from the collection refer to the [DELETE /collections/{id}/{relationship}](/reference/collections-delete-element) endpoint.

**ShellClick `Try It!` to start a request and see the response here!