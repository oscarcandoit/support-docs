---
title: "🔀🧑‍💻 user_votes"
source: "https://docs.virustotal.com/reference/url-object-user-votes"
scraped_at: "2026-02-08T06:35:52.122Z"
---

The *votes* relationship returns a list ***containing the votes for a given URL made by the current user***.

This relationship can be retrieved using the [relationships API endpoint](/reference/urls-relationships). The response contains a list of [Vote](/reference/vote-object) objects.

/urls/{url_id}/user_votesExample
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
 "count": 1,
 },
 "data": [
 {
 "attributes": {
 "date": 1624356005,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "u-d0e196a0c25d35dd0a84593cbae0f38333aa58529936444ea26453eab28dfc86-b6f95068",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/u-d0e196a0c25d35dd0a84593cbae0f38333aa58529936444ea26453eab28dfc86-b6f95068"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/urls/d0e196a0c25d35dd0a84593cbae0f38333aa58529936444ea26453eab28dfc86/user_votes"
 }
}`
```