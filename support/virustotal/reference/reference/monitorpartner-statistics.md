---
title: "Get a list of MonitorHashes detected by an engine"
source: "https://docs.virustotal.com/reference/monitorpartner-statistics"
scraped_at: "2026-02-08T06:35:53.675Z"
---

Statistics provide information about hashes detected and total hashes analyzed by your engine. In case you have more than one engine you can use `filter=engine:<engine-name>`

Example response
```
`{
 "data": [
 {
 "attributes": {
 "date": 1517356800,
 "engine": "[ENGINE-NAME]",
 "hashes_count": 1840,
 "hashes_detected_count": 34,
 "items_count": 1840,
 "items_detected_count": 34,
 "period": "day"
 },
 "id": "[ENGINE-NAME]-day-2018-01-31",
 "links": {
 "self": "https://www.virustotal.com/api/v3/monitor_partner/statistics/[ENGINE-NAME]-day-2018-01-31"
 },
 "type": "monitor_partner_statistics"
 }...
 ]
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!