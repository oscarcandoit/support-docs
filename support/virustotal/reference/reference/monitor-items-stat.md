---
title: "Get attributes and metadata for a specific MonitorItem"
source: "https://docs.virustotal.com/reference/monitor-items-stat"
scraped_at: "2026-02-08T06:35:53.188Z"
---

JSON
```
`{
 "data": {
 "attributes": {
 "size": 8538624, 
 "sha1": "a9e2e47fd90b3552a072af482289532e878472fa", 
 "first_detection_date": 1502393426, 
 "next_analysis_date": 1504559882, 
 "last_analysis_date": 1504473518, 
 "tags": [
 "detected", 
 "new-detections", 
 "[ENGINE-NAME]"
 ], 
 "creation_date": 1501700980, 
 "item_type": "file", 
 "creator_id": "fsantos", 
 "last_analysis_results": {
 "[ENGINE-NAME]": {
 "category": "undetected", 
 "engine_name": "[ENGINE-NAME]", 
 "engine_version": "9.950.0.1006", 
 "result": null, 
 "method": "blacklist", 
 "engine_update": "20170903"
 }, 
 "[ENGINE-NAME]": {
 "category": "undetected", 
 "engine_name": "[ENGINE-NAME]", 
 "engine_version": "25.0.0.1", 
 "result": null, 
 "method": "blacklist", 
 "engine_update": "20170901"
 }
 }, 
 "path": "/go/bin/go.exe", 
 "sha256": "4db14737445edd2078a383520fabfd212f0979a31d0165dceac9f741fb1ab985", 
 "last_detections_count": 1, 
 "first_detection_date": 1504300116, 
 "md5": "3f389f88d18ba26e946a05883ea04130"
 }, 
 "type": "monitoritem", 
 "id": "[MONITOR-ID]"
 }
}
`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!