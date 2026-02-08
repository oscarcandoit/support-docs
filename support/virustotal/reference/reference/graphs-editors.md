---
title: "Get users and groups that can edit a graph"
source: "https://docs.virustotal.com/reference/graphs-editors"
scraped_at: "2026-02-08T06:35:39.872Z"
---

This endpoint returns the users and groups that can edit the graph. The graph needs to be shared with them as `Editor` to appear here.

JSON
```
`{
 "data": [
 {
 "attributes": {
 "first_name": "Bertram",
 "last_name": "Gilfoyle",
 "profile_phrase": "",
 "reputation": 1,
 "status": "active",
 "user_since": 1530008602
 },
 "id": "gilfoyle",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/gilfoyle"
 },
 "type": "user"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/graphs/g5598743d5f3c699f1c90e76c2c2d541d41f1b56bd8114c06d181ed3f60cfcada/editors?limit=10"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!