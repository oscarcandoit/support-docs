---
title: "🔀 resolutions"
source: "https://docs.virustotal.com/reference/ip-object-resolutions"
scraped_at: "2026-02-08T06:35:50.361Z"
---

The *resolutions* relationship returns a list of past and current **domain resolutions for a IP address**.

This relationship can be retrieved using the [relationships API endpoint](/reference/ip-relationships). The response contains a list of [Resolution](/reference/resolution-object) objects.

/ip_addresses/{ip_address}/resolutionsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "date": 1591813960,
 "host_name": "foo.com",
 "ip_address": "1.2.3.4",
 "resolver": "VirusTotal"
 },
 "id": "1.2.3.4foo.com",
 "links": {
 "self": "https://www.virustotal.com/api/v3/resolutions/1.2.3.4foo.com"
 },
 "type": "resolution"
 },
 {
 "attributes": {
 "date": 1591787179,
 "host_name": "bar.foo.com",
 "ip_address": "1.2.3.4",
 "resolver": "VirusTotal"
 },
 "id": "1.2.3.4bar.foo.com",
 "links": {
 "self": "https://www.virustotal.com/api/v3/resolutions/1.2.3.4bar.foo.com"
 },
 "type": "resolution"
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/ip_addresses/1.2.3.4/resolutions?cursor=Cl0KeQoEZeF0ZReJCKeWy9-S8eeCEkeqEXN-dmlyeXN0b3ehbGNsb3ekci8LEgpeZXNvbHV0aWeuIh8xNDIeMjUwLjEwMi4xMDJkcml2ZS5nb29nbGUuY29tDBgAIAE%3D&limit=2",
 "self": "https://www.virustotal.com/api/v3/ip_addresses/1.2.3.4/resolutions?limit=2"
 },
 "meta": {
 "count": 200,
 "cursor": "Cl0KeQoEZeF0ZReJCKeWy9-S8eeCEkeqEXN-dmlyeXN0b3ehbGNsb3ekci8LEgpeZXNvbHV0aWeuIh8xNDIeMjUwLjEwMi4xMDJkcml2ZS5nb29nbGUuY29tDBgAIAE="
 }
}`
```