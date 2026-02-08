---
title: "🔀 comments"
source: "https://docs.virustotal.com/reference/collection-object-comments"
scraped_at: "2026-02-08T06:35:42.714Z"
---

The *comments* relationship return the list of ***all comments in the Collection***.

This relationship can be retrieved using the [relationships API](/reference/get-collections-relationship) endpoint. The response contains a list of [Comment](/reference/comments) objects.

/collections/{id}/commentsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": <string>,
 "self": <string>
 },
 "meta": {
 "count": <int>,
 "cursor": <string>
 }
}`
```

```
`{
 "meta": {
 "count": 2,
 "cursor": "CnoKEQoEZGF0ZRIJCIeGybGKre4CEmFqEXN-dmlydXN0b3RhbGNsb3VkckwLEgpDb2xsZWN0aW9uIhN0ZXN0ZGF0YV9jb2xsZWN0aW9uDAsSB0NvbW1lbnQiHHRlc3RkYXRhX2NvbGxlY3Rpb24tOWVhYzZjM2MMGAAgAQ=="
 },
 "data": [
 {
 "attributes": {
 "votes": {
 "positive": 0,
 "abuse": 0,
 "negative": 0
 },
 "tags": [
 "_:web",
 "_:public"
 ],
 "text": "test",
 "html": "test",
 "date": 1611233999
 },
 "type": "comment",
 "id": "c-testdata_collection-9eac6c3c",
 "links": {
 "self": "https://virustotal.com/api/v3/comments/c-testdata_collection-9eac6c3c"
 }
 }
 ],
 "links": {
 "self": "https://virustotal.com/api/v3/collections/testdata_collection/comments?limit=1",
 "next": "https://virustotal.com/api/v3/collections/testdata_collection/comments?cursor=CnoKEQoEZGF0ZRIJCIeGybGKre4CEmFqEXN-dmlydXN0b3RhbGNsb3VkckwLEgpDb2xsZWN0aW9uIhN0ZXN0ZGF0YV9jb2xsZWN0aW9uDAsSB0NvbW1lbnQiHHRlc3RkYXRhX2NvbGxlY3Rpb24tOWVhYzZjM2MMGAAgAQ%3D%3D&limit=1"
 }
}`
```