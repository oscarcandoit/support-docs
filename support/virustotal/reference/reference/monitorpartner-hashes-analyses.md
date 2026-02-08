---
title: "Get a list of analyses for a file"
source: "https://docs.virustotal.com/reference/monitorpartner-hashes-analyses"
scraped_at: "2026-02-08T06:35:53.217Z"
---

This endpoint allows you to retrieve all analyses performed on a certain sha256 hash using cursored listings.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/hashes/<sha256>/analyses"
response = session.get(url)
print(response.text)`
```

JSON
```
`{
 "data": [
 {
 "id": "d917dd47406322341cef40cf38091292962ba81d42983456aae4dc4f7967afb1-1517474700",
 "type": "monitor_analysis",
 "attributes": {
 "analysis_results": {
 "{engine name}": {
 "category": "undetected",
 "engine_name": "{engine name}",
 "engine_update": "20180201",
 "engine_version": "1.1.1.3",
 "method": "blacklist",
 "result": null
 }
 },
 "date": 1517474787,
 "detections_count": 1,
 "sha256": "d917dd47406322341cef40cf38091292962ba81d42983456aae4dc4f7967afb1",
 "tags": [
 "detected",
 "{engine name}"
 ]
 }
 }
 ]
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!