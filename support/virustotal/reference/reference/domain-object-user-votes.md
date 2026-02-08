---
title: "🔀🧑‍💻 user_votes"
source: "https://docs.virustotal.com/reference/domain-object-user-votes"
scraped_at: "2026-02-08T06:35:44.799Z"
---

The *votes* relationship returns a list ***containing the votes for a given domain made by the current user***.

This relationship can be retrieved using the [relationships API endpoint](/reference/domains-relationships). The response contains a list of [Vote](/reference/vote-object) objects.

JSONJSON
```
`{
 "data": [
 <MDXishSnakeCase0>
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
 "meta": {
 "count": 1
 },
 "data": [
 {
 "attributes": {
 "date": 1623254696,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "d-www.virustotal.com-e6bc6708",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/d-www.virustotal.com-e6bc6708"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/domains/www.virustotal.com/user_votes"
 }
}`
```