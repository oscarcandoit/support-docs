---
title: "🔀 comments"
source: "https://docs.virustotal.com/reference/graph-comments"
scraped_at: "2026-02-08T06:35:49.089Z"
---

The *comments* relationship lists all comments posted by the VirusTotal community for a given Graph.

This relationship can be retrieved using the [relationships API endpoint](/reference/graphs-relationships). The response contains a list of [Comments](/reference/comments) objects.

/graphs/{id}/commentsExample
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
 "date": 1559094923,
 "html": "such malicious very malware <br />",
 "tags": [
 "_:api",
 "_:public"
 ],
 "text": "such malicious very malware \n",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "g-g0538d03053194c338643183e315b134ec3463a392330430938033934f3be3f37-4f424e4d",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/g-g0538d03053194c338643183e315b134ec3463a392330430938033934f3be3f37-4f424e4d"
 },
 "type": "comment"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/graphs/g0538d03053194c338643183e315b134ec3463a392330430938033934f3be3f37/comments?limit=10"
 },
 "meta": {
 "count": 1
 }
}`
```