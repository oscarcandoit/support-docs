---
title: "Resolutions"
source: "https://docs.virustotal.com/reference/resolution-object"
scraped_at: "2026-02-08T06:35:51.616Z"
---

Resolution objects include the following attributes:

- `date`: <*integer*> date when the resolution was made (UTC timestamp).

- `host_name`: <*string*> domain or subdomain requested to the resolver.

- `host_name_last_analysis_stats`: <*dictionary*> last detection stats from the resolution&#x27;s domain. Similar to the [domains](/reference/domains-object)&#x27;s last_analysis_stats attribute.

- `ip_address`: <*string*> IP address the domain was resolved to.

- `ip_address_last_analysis_stats`: <*dictionary*> last detection stats from the resolution&#x27;s IP address. Similar to the [IP address](/reference/ip-object)&#x27; last_analysis_stats attribute.

- `resolver`: <*string*> source of the resolution.

Resolution objectExample
```
`{
 "type": "resolution",
 "id": <string>,
 "attributes": {
 "date": <timestamp>,
 "host_name": <string>,
 "host_name_last_analysis_stats": <dict>,
 "ip_address": <string>,
 "ip_address_last_analysis_stats": <dict>,
 "resolver": <string>
 },
 "links": {
 "self": <string>
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "date": 1599471348,
 "host_name": "example.com",
 "host_name_last_analysis_stats": {
 "harmless": 77,
 "malicious": 0,
 "suspicious": 0,
 "undetected": 8,
 "timeout": 0
 },
 "ip_address": "111.222.33.44",
 "ip_address_last_analysis_stats": {
 "harmless": 75,
 "malicious": 0,
 "suspicious": 0,
 "undetected": 10,
 "timeout": 0
 },
 "resolver": "VirusTotal"
 },
 "id": "111.222.33.44example.com",
 "links": {
 "self": "https://www.virustotal.com/api/v3/resolutions/111.222.33.44example.com"
 },
 "type": "resolution"
 }
}`
```