---
title: "Get a URL for uploading files larger than 32MB"
source: "https://docs.virustotal.com/reference/monitor-items-upload-url"
scraped_at: "2026-02-08T06:35:53.168Z"
---

For uploading files smaller than 32MB you can simply send a POST request to the [/items](/reference/monitor-items-create) endpoint, but for larger files you need to get a special upload URL first. This endpoint returns one of those URLs. The returned URL can be used as a drop-in replacement for the [/items](/reference/monitor-items-create) endpoint. A new upload URL should be generated each big file upload.

JSON
```
`{
 "data": "http://www.virustotal.com/_ah/upload/AMmfu6b-_DXUeFe36Sb3b0F4B8mH9Nb-CHbRoUNVOPwG/"
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!