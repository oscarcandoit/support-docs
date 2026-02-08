---
title: "🔀 embedded_domains"
source: "https://docs.virustotal.com/reference/private-file-object-embedded-domains"
scraped_at: "2026-02-08T06:35:50.327Z"
---

The *embedded_domains* relationship returns the list of ***all domains contained in the body of the sample***.

This relationship can be retrieved using the [relationships API endpoint](/reference/private-files-relationships). The response contains a list of [Domains](/reference/domains-object) objects.

/private/files/{sha256}/embedded_domainsExample
```
`{
 "data": [
 {
 "attributes": {
 ...
 },
 "type": "domain",
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
 "count": 15,
 "cursor": "STEKLg=="
 },
 "data": [
 {
 "attributes": {
 .....
 },
 "type": "domain",
 "id": "google.com",
 "links": {
 "self": "http://www.virustotal.com/api/v3/domains/google.com"
 }
 }
 ],
 "links": {
 "self": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_domains?limit=1",
 "next": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_domains?cursor=STEKLg%3D%3D&limit=1"
 }
}`
```