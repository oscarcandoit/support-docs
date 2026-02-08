---
title: "🔀 comments"
source: "https://docs.virustotal.com/reference/ip-object-comments"
scraped_at: "2026-02-08T06:35:49.774Z"
---

The *comments* relationship lists all comments posted by the VirusTotal community for a given IP address.

This relationship can be retrieved using the [relationships API endpoint](/reference/ip-relationships). The response contains a list of [Comments](/reference/comments) objects.

/ip_addresses/{ip_address}/commentsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "date": 1589288957,
 "html": "IP is trusted.",
 "tags": [
 "_:web",
 "_:public"
 ],
 "text": "IP is trusted.",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "i-177.277.277.177-263007a7",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/i-177.277.277.177-263007a7"
 },
 "type": "comment"
 },
 {
 "attributes": {
 "date": 1589282315,
 "html": "Gt",
 "tags": [
 "_:web",
 "_:public"
 ],
 "text": "Gt",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "i-177.277.277.177-75ee6aa9",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/i-177.277.277.177-75ee5a59"
 },
 "type": "comment"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/ip_addresses/177.277.277.177/comments?limit=10"
 },
 "meta": {
 "count": 2
 }
}`
```