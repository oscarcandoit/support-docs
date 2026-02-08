---
title: "Get the latest file analyses"
source: "https://docs.virustotal.com/reference/monitor-items-analyses"
scraped_at: "2026-02-08T06:35:53.223Z"
---

Retrieve item analyses, use cursor and limit to retrieve older ones.

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