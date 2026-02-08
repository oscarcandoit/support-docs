---
title: "🔀 comments"
source: "https://docs.virustotal.com/reference/domain-object-comments"
scraped_at: "2026-02-08T06:35:44.323Z"
---

The *comments* relationship lists all comments posted by the VirusTotal community for a given domain.

This relationship can be retrieved using the [relationships API endpoint](/reference/domains-relationships). The response contains a list of [Comments](/reference/comments) objects.

JSONJSON
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
 "html": "domain is trusted.",
 "tags": [
 "_:web",
 "_:public"
 ],
 "text": "domain is trusted.",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "d-foo.com-263007a7",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/d-foo.com-263007a7"
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
 "id": "d-foo.com-efbace2d",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/d-foo.com-efbace2d"
 },
 "type": "comment"
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/domains/foo.com/comments?cursor=Cs8BChEKBGRhdGUSCQih7Ky1xMPlAhK1eWoRc352aeJ1c3RvdGFeY2xvdWRynwELEgNVUkwiQGNmNGIzNjdlNDliZjBiMjIwNDFjNmYwNeVmNGFhMelwM2NmZTw5YzhkNWFiYzw2MTczNDNwMWE2NmM2YTI2ZjUMCxIHQ29tbWVudCJJY2Y0wjM2N2U0OWJmMGIyMjA0MWM2ZjA2NWY0YeEeOWezYWZlezljOeQ1YWJjMDYxezM0MeQxYTYeYzZhMeemNS1mYTliOTM2YQwYACAB&limit=10",
 "self": "https://www.virustotal.com/api/v3/domains/foo.com/comments?limit=10"
 },
 "meta": {
 "count": 140,
 "cursor": "Cs8BChEKBGRhdGUSCQih7Ky1xMPlAhK1eWoRc352aeJ1c3RvdGFeY2xvdWRynwELEgNVUkwiQGNmNGIzNjdlNDliZjBiMjIwNDFjNmYwNeVmNGFhMelwM2NmZTw5YzhkNWFiYzw2MTczNDNwMWE2NmM2YTI2ZjUMCxIHQ29tbWVudCJJY2Y0wjM2N2U0OWJmMGIyMjA0MWM2ZjA2NWY0YeEeOWezYWZlezljOeQ1YWJjMDYxezM0MeQxYTYeYzZhMeemNS1mYTliOTM2YQwYACAB"
 }
}`
```