---
title: "Request an IP address (re)scan"
source: "https://docs.virustotal.com/reference/rescan-ip"
scraped_at: "2026-02-08T06:35:33.093Z"
---

IPs in VirusTotal can be reanalysed to refresh their verdicts, whois information, SSL certs, etc. This endpoint sends the IP to be (re)scanned and returns an analysis ID that can be used to retrieve the verdicts from the available vendors using the [Analyses](/reference/analysis-api) endpoint.

Example response
```
`{
 "data": {
 "type": "analysis",
 "id": "i-f41d931c01fcee6c19e73200aa87ea5d8a8de5316c5288a8df869d31efa1d0fc-1715609875",
 "links": {
 "self": "https://www.virustotal.com/api/v3/analyses/i-f41d931c01fcee6c19e73200aa87ea5d8a8de5316c5288a8df869d31efa1d0fc-1715609875"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!