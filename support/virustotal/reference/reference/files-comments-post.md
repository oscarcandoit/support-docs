---
title: "Add a comment to a file"
source: "https://docs.virustotal.com/reference/files-comments-post"
scraped_at: "2026-02-08T06:35:35.550Z"
---

With this endpoint you can post a comment for a given file. The body for the `POST` request must be the JSON representation of a comment object. Notice however that you don&#x27;t need to provide an ID for the object, as they are automatically generated for new comments.

Any word starting with # in your comment&#x27;s text will be considered a tag, and added to the comment&#x27;s tag attribute.

Returns a [Comment](/reference/comments) object.

JSON
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

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!