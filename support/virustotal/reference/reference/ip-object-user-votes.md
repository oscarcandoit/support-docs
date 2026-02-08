---
title: "🔀🧑‍💻 user_votes"
source: "https://docs.virustotal.com/reference/ip-object-user-votes"
scraped_at: "2026-02-08T06:35:50.257Z"
---

The *votes* relationship returns a list ***containing the votes for a given IP address made by the current user***.

This relationship can be retrieved using the [relationships API endpoint](/reference/ip-relationships). The response contains a list of [Vote](/reference/vote-object) objects.

/ip_addresses/{ip_address}/user_votesExample
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
 "date": 1624368057,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "i-8.8.8.8-2fa03e13",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/i-8.8.8.8-2fa03e13"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/ip_addresses/8.8.8.8/user_votes",
 }
}`
```