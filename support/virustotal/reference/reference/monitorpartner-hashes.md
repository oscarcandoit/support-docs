---
title: "Get a list of MonitorHashes detected by an engine"
source: "https://docs.virustotal.com/reference/monitorpartner-hashes"
scraped_at: "2026-02-08T06:35:53.305Z"
---

In some cases your user may have access to analyses of more than one engine, in this case you can provide a filter query with one engine name. To retrieve your preconfigured engine names you need to access the preferences/monitor_partner/engines property calling /groups/{group_id}, in case you do not know your monitor_partner group_id, it can be obtained from privileges/monitor-partner/inherited_from property calling /users/{your_user_id}.

To display the latest hash analyses for a specific engine use the filter parameter with the modifier:

- engine: (String: )

To display ignored hashes (detection confirmed ones [/hashes/{sha256}/comments](/reference/monitorpartner-hashes-comments)):

- tag:ignored

Here you can see an example:

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/hashes"
querystring = {"filter": "engine:<engine-name>"}

response = session.get(url, params=querystring)
print(response.text)`
```

JSON
```
`{
 "data": [
 {
 "attributes": {
 "last_analysis_date": 1517433370,
 "last_analysis_results": {
 "[ENGINE-NAME]": {
 "category": "undetected",
 "engine_name": "[ENGINE-NAME]",
 "engine_update": "20180131",
 "engine_version": "1.1.1.3",
 "method": "blacklist",
 "result": null
 }...
 },
 "last_detections_count": 1,
 "md5": "432fb4158186f0c8268813741939239a",
 "sha1": "6d06bba4f7625409e8a2f7e201c38b1b5925609a",
 "sha256": "29037cca6156dbf44a80a0c785f2b9d5c205cecd3bf7b044d99b462149bc5ae8",
 "size": 16384
 },
 "id": "29037cca6156dbf44a80a0c785f2b9d5c205cecd3bf7b044d99b462149bc5ae8",
 "type": "monitor_hash"
 }...
 ]
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!