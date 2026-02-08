---
title: "Request an domain (re)scan"
source: "https://docs.virustotal.com/reference/domains-rescan"
scraped_at: "2026-02-08T06:35:34.323Z"
---

This endpoint can be used to analyse domains or reanalyse them to refresh their verdicts, whois information, SSL certs, etc. This endpoint sends the domain to be (re)scanned and returns an analysis ID that can be used to retrieve the verdicts from the available vendors using the [Analyses](/reference/analysis-api) endpoint.

Example response
```
`{
 "data": {
 "type": "analysis",
 "id": "d-f4e5279ebbcf9d485e33f3c67007b73e9f12d54bbca875545819a2307a194752-1715608490",
 "links": {
 "self": "https://www.virustotal.com/api/v3/analyses/d-f4e5279ebbcf9d485e33f3c67007b73e9f12d54bbca875545819a2307a194752-1715608490"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!