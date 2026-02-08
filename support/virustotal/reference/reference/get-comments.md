---
title: "Get latest comments"
source: "https://docs.virustotal.com/reference/get-comments"
scraped_at: "2026-02-08T06:35:36.189Z"
---

This endpoint retrieves information about the latest comments added to VirusTotal.

You can do some filtering over those comments, and get only those that contains a certain tag inside (e.g. filter=tag:malware).

JSON
```
`{
 "meta": {
 "cursor": "Cs8BChEKBGRhdGUSCQiCnsTiupvwAhK1AWoRc352aXJ1c3RvdGFsY2xvdWRynwELEgNVUkwiQDAxMTkxNTk0MmRiNTU2YmJhYjUxMzdmNzYxZWZlNjFmZWQyYjAwNTk4ZmVhOTAwMzYwYjgwMGIxOTNhN2JmMzEMCxIHQ29tbWVudCJJMDExOTE1OTQyZGI1NTZiYmFiNTEzN2Y3NjFlZmU2MWZlZDJiMDA1OThmZWE5MDAzNjBiODAwYjE5M2E3YmYzMS1kOTRkN2M4YQwYACAB"
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
 "_:api",
 "_:public",
 "aicc",
 "monitorapp",
 "malware"
 ],
 "text": "#aicc #monitorapp #malware",
 "html": "#aicc #monitorapp #malware",
 "date": 1619424604
 },
 "type": "comment",
 "id": "u-011915942db556bbab5137f761efe61fed2b00598fea900360b800b193a7bf31-d94d7c8a",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/u-011915942db556bbab5137f761efe61fed2b00598fea900360b800b193a7bf31-d94d7c8a"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments?filter=tag%3Amalware&limit=1",
 "next": "https://www.virustotal.com/api/v3/comments?filter=tag%3Amalware&cursor=Cs8BChEKBGRhdGUSCQiCnsTiupvwAhK1AWoRc352aXJ1c3RvdGFsY2xvdWRynwELEgNVUkwiQDAxMTkxNTk0MmRiNTU2YmJhYjUxMzdmNzYxZWZlNjFmZWQyYjAwNTk4ZmVhOTAwMzYwYjgwMGIxOTNhN2JmMzEMCxIHQ29tbWVudCJJMDExOTE1OTQyZGI1NTZiYmFiNTEzN2Y3NjFlZmU2MWZlZDJiMDA1OThmZWE5MDAzNjBiODAwYjE5M2E3YmYzMS1kOTRkN2M4YQwYACAB&limit=1"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!