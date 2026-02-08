---
title: "Get objects related to a graph"
source: "https://docs.virustotal.com/reference/graphs-relationships"
scraped_at: "2026-02-08T06:35:39.777Z"
---

Graph objects have number of relationships to other objects. As mentioned in the [Relationships](/reference/relationships) section, those related objects can be retrieved by sending `GET` requests to the relationship URL.

Some relationships are accesible only to users who have access to VirusTotal Intelligence.

The relationships supported by graph objects are documented in the [Graph](/reference/graph-object) API object page.

JSON
```
`{
 "data": {
 "attributes": {
 "first_name": "Richard",
 "last_name": "Hendricks",
 "profile_phrase": "CEO of Pied Piper",
 "reputation": 1,
 "status": "active",
 "user_since": 1528111032
 },
 "id": "hendricks",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/hendricks"
 },
 "type": "user"
 },
 "links": {
 "self": "https://www.virustotal.com/api/v3/graphs/g510b3e01190b9e6001f7ed7d14015558b11ca9d3e87367b6b809bbb402645bf2/owner"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!