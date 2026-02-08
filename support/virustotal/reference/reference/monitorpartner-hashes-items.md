---
title: "Get a list of items with a given sha256 hash"
source: "https://docs.virustotal.com/reference/monitorpartner-hashes-items"
scraped_at: "2026-02-08T06:35:53.283Z"
---

This endpoint allows you to retrieve file paths, descriptions, etc. for all files in monitor with a certain sha256 hash.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/hashes/<sha256>/items"
response = session.get(url)
print(response.text)`
```

JSON
```
`{
 "data": [
 {
 "attributes": {
 "creation_date": 1517387994,
 "details": "Original filename: \"shvlres.dll\"",
 "first_detection_date": 1517388090,
 "last_analysis_date": 1517474787,
 "last_analysis_results": {
 "[ENGINE-NAME]": {
 "category": "undetected",
 "engine_name": "[ENGINE-NAME]",
 "engine_update": "20180201",
 "engine_version": "1.1.1.3",
 "method": "blacklist",
 "result": null
 }...
 },
 "last_detections_count": 1,
 "md5": "1d5544d6ca1ac6674e9ea11d4b947c35",
 "path": "shvlres.dll",
 "sha1": "9024e1b34143321f4fb6ea717cde48a293bf99e0",
 "sha256": "d917dd47406322341cef40cf38091292962ba81d42983456aae4dc4f7967afb1",
 "size": 2178131
 },
 "id": "[MONITOR-ID]",
 "type": "monitor_item"
 }
 ]}
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!