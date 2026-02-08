---
title: "Add a vote on a file"
source: "https://docs.virustotal.com/reference/files-votes-post"
scraped_at: "2026-02-08T06:35:35.469Z"
---

With this endpoint you can post a vote for a given file. The body for the `POST` request must be the JSON representation of a vote object. Notice however that you don&#x27;t need to provide an ID for the object, as they are automatically generated for new votes.

The verdict attribute must have be either `harmless` or `malicious`.

Returns a [Vote](/reference/vote-object) object.

JSON
```
`{
 "data": {
 "type": "vote",
 "attributes": {
 "verdict": "harmless"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!