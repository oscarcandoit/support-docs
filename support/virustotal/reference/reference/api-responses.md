---
title: "API responses"
source: "https://docs.virustotal.com/reference/api-responses"
scraped_at: "2026-02-08T06:35:33.773Z"
---

Most endpoints in the VirusTotal API return a response in JSON format. Unless otherwise specified, a successful request&#x27;s response returns a 200 HTTP status code and has the following format:

JSON
`{
 "data": <response data>
}`
`<response data>` is usually an [object](/reference/objects) or a list of objects, but that&#x27;s not always the case. An example of this is the [/files/upload_url](/reference/files-upload-url) endpoint, which returns a URL. Refer to each endpoint&#x27;s documentation to learn more about its return data structure.