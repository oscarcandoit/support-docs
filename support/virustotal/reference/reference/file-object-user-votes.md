---
title: "🔀🧑‍💻 user_votes"
source: "https://docs.virustotal.com/reference/file-object-user-votes"
scraped_at: "2026-02-08T06:35:47.005Z"
---

The *votes* relationship returns a list ***containing the votes for a given file made by the current user***.

This relationship can be retrieved using the [relationships API endpoint](/reference/files-relationships). The response contains a list of [Vote](/reference/vote-object) objects.

/files/{file_hash}/user_votesExample
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
 "date": 1592125710,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "f-87083882cc6015984eb0411a99d3981817f5dc5c90ba24f0940420c5548d82de-726b4272",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/f-87083882cc6015984eb0411a99d3981817f5dc5c90ba24f0940420c5548d82de-726b4272"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/files/87083882cc6015984eb0411a99d3981817f5dc5c90ba24f0940420c5548d82de/user_votes"
 }
}`
```