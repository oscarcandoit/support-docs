---
title: "🔀 votes"
source: "https://docs.virustotal.com/reference/domain-object-votes"
scraped_at: "2026-02-08T06:35:44.769Z"
---

The *votes* relationship returns a list ***containing the votes for a given domain***.

This relationship can be retrieved using the [relationships API endpoint](/reference/domains-relationships). The response contains a list of [Vote](/reference/vote-object) objects.

JSONJSON
```
`{
 "data": [
 <MDXishSnakeCase0>,
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
 "count": 42,
 "cursor": "CmkKEQoEZGF0ZRIJCNPCz-7cpPACElBqEXN-dmlydXN0b3RhbGNsb3VkcjsLEgZEb21haW4iDnd3dy5nb29nbGUuY29tDAsSBFZvdGUiF3d3dy5nb29nbGUuY29tLTQzNTIyOTkzDBgAIAE="
 },
 "data": [
 {
 "attributes": {
 "date": 1624137540,
 "verdict": "malicious",
 "value": -1
 },
 "type": "vote",
 "id": "d-www.google.com-5c711e45",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/d-www.google.com-5c711e45"
 }
 },
 {
 "attributes": {
 "date": 1619742994,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "d-www.google.com-43522993",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/d-www.google.com-43522993"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/domains/www.google.com/votes?limit=2",
 "next": "https://www.virustotal.com/api/v3/domains/www.google.com/votes?cursor=CmkKEQoEZGF0ZRIJCNPCz-7cpPACElBqEXN-dmlydXN0b3RhbGNsb3VkcjsLEgZEb21haW4iDnd3dy5nb29nbGUuY29tDAsSBFZvdGUiF3d3dy5nb29nbGUuY29tLTQzNTIyOTkzDBgAIAE%3D&limit=2"
 }
}`
```