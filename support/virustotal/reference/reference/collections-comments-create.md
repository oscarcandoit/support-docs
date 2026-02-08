---
title: "Add a comment to a collection"
source: "https://docs.virustotal.com/reference/collections-comments-create"
scraped_at: "2026-02-08T06:35:37.350Z"
---

With this endpoint you can post a comment for a given collection. The body for the `POST` request must be the JSON representation of a comment object. Notice however that you don&#x27;t need to provide an ID for the object, as they are automatically generated for new comments.

Any word starting with # in your comment&#x27;s text will be considered a tag, and added to the comment&#x27;s tag attribute.

Example request
```
`{
 "data": {
 "type": "comment",
 "attributes": {
 "text": "Lorem #ipsum dolor sit ..."
 }
 }
}`
```

Example response
```
`{
 "data": {
 "type": "comment",
 "id": "<comment&#x27;s ID>",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/<comment&#x27;s ID>"
 },
 "attributes": {
 "date": 1521725475,
 "tags": ["ipsum"],
 "html": "Lorem #ipsum dolor sit ...",
 "text": "Lorem #ipsum dolor sit ...",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!