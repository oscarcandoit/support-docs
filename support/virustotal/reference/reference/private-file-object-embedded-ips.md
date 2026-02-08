---
title: "🔀 embedded_ips"
source: "https://docs.virustotal.com/reference/private-file-object-embedded-ips"
scraped_at: "2026-02-08T06:35:50.302Z"
---

The *embedded_ips* relationship returns the list of ***all IP addresses contained in the body of the sample***.

This relationship can be retrieved using the [relationships API endpoint](/reference/private-files-relationships). The response contains a list of [IP addresses](/reference/ip-object) objects.

/private/files/{sha256}/embedded_ipsExample
```
`{
 "data": [
 {
 "attributes": {
 ...
 },
 "type": "ip_address",
 "id": <string>
 } ,
 ...
 ],
 "links": {
 "next": <string>,
 "self": <string>
 },
 "meta": {
 "count": <int>,
 "cursor": <string>
 }
}`
```

```
`{
 "meta": {
 "count": 2,
 "cursor": "STEKLg=="
 },
 "data": [
 {
 "attributes": {
 .....
 },
 "type": "ip_address",
 "id": "8.8.8.8",
 "links": {
 "self": "http://www.virustotal.com/api/v3/ip_addresses/8.8.8.8"
 }
 }
 ],
 "links": {
 "self": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_ips?limit=1",
 "next": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_ips?cursor=STEKLg%3D%3D&limit=1"
 }
}`
```