---
title: "Grant users and groups permission to edit a graph"
source: "https://docs.virustotal.com/reference/graphs-add-editor"
scraped_at: "2026-02-08T06:35:39.759Z"
---

This endpoint adds a user or groups as a graph editor.

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