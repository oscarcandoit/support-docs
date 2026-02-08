---
title: "Add a vote to a domain"
source: "https://docs.virustotal.com/reference/domain-votes-post"
scraped_at: "2026-02-08T06:35:34.384Z"
---

With this endpoint you can post a vote for a given file. The body for the POST request must be the JSON representation of a [vote object](/reference/vote-object). Note however that you don&#x27;t need to provide an ID for the object, as they are automatically generated for new votes.

The verdict attribute must have be either harmless or malicious.

JSON
`{
 "data": {
 "type": "vote",
 "attributes": {
 "verdict": "harmless"
 }
 }
}`
Returns a [votes](/reference/vote-object) object.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!