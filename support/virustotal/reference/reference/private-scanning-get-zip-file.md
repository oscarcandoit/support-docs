---
title: "Check a ZIP file’s status"
source: "https://docs.virustotal.com/reference/private-scanning-get-zip-file"
scraped_at: "2026-02-08T06:35:40.931Z"
---

This endpoint returns information about a ZIP file.

JSON
`{
 "data": {
 "type": "zip_file",
 "id": "4939392292",
 "attributes": {
 "status": "creating",
 "progress": 45,
 "files_ok": 3,
 "files_error": 0
 } 
 }
}`
The `status` attribute contains one of the following statuses:

- `starting`

- `creating`

- `finished`

- `timeout`

- `error-starting`

- `error-creating`

When the status is `finished` you may proceed to download the file.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!