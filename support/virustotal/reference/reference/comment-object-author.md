---
title: "🔀 author"
source: "https://docs.virustotal.com/reference/comment-object-author"
scraped_at: "2026-02-08T06:35:44.287Z"
---

The *author* relationship returns a dictionary ***containing the author for a given comment***.

This relationship can be retrieved using the [relationships API endpoint](/reference/comments-relationships). The response contains the deatils of the comment&#x27;s author.

/comments/{comment_id}/authorExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 ],
 "links": {
 "next": "<string>",
 },
 "meta": {
 "count": <int>
 }
}`
```

```
`{
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/f-8ebc97e05c8e1073bda2efb6f4d00ad7e789260afa2c276f0c72740b838a0a93-5a3e38e3/author"
 },
 "meta": {
 "count": 1
 },
 "data": {
 "id": "userid",
 "type": "user",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/userid"
 },
 "attributes": {
 "profile_phrase": "",
 "last_name": "LastNAme",
 "reputation": 1,
 "user_since": 1551688503,
 "first_name": "FirstName",
 "collections_count": 1,
 "certified": false,
 "status": "active"
 }
 }
}`
```