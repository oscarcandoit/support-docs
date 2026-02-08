---
title: "Configure a given VirusTotal Monitor item (file or folder)"
source: "https://docs.virustotal.com/reference/monitor-items-config"
scraped_at: "2026-02-08T06:35:53.139Z"
---

Is possible to set some file information/metadata into a MonitorItem by setting its *details* attribute, this information will be shared with Monitor Partners and should be used to give more context to them about the file in case of false positive. Folders does not support *details*.

Python
```
`import requests

item_id = &#x27;<item-id>&#x27;

url = "https://www.virustotal.com/api/v3/monitor/items/%s/config" % item_id
data = {&#x27;data&#x27;: {
 &#x27;id&#x27;: item_id,
 &#x27;type&#x27;: &#x27;monitoritem&#x27;,
 &#x27;attributes&#x27;: {
 &#x27;details&#x27;: &#x27;This is file metadata.&#x27;
 },
 }}

response = requests.request("PATCH", url, data=json.dumps(data))
print(response.text)`
```

JSON
```
`{
 "data": {
 "attributes": {
 "size": 49676, 
 "sha1": "892392d4f28b2dbe8ae45115a38c079dbcb14e18", 
 "first_detection_date": 1504175079, 
 "sha256": "cb9f9c1b271daa19fc78138dfd9d37686b1edb35e381f205c0b59911d8a004e1", 
 "next_analysis_date": 1504781041, 
 "last_detections_count": 1, 
 "last_analysis_date": 1504694733, 
 "tags": [
 "detected", 
 "visible", 
 "[ENGINE-NAME]"
 ], 
 "creation_date": 1504174971, 
 "item_type": "file", 
 "creator_id": "fsantos", 
 "last_analysis_results": {
 "[ENGINE-NAME]": {
 "category": "undetected", 
 "engine_name": "[ENGINE-NAME]", 
 "engine_version": "1.3.0.9330", 
 "result": null, 
 "method": "blacklist", 
 "engine_update": "20170906"
 },...
 }, 
 "details": "This is the metadata.", 
 "path": "/test/tac.exe", 
 "md5": "02c526e8efd42a1f57a75aa203cfb27f"
 }, 
 "type": "monitoritem", 
 "id": "[MONITOR-ID]"
 }
}
`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!