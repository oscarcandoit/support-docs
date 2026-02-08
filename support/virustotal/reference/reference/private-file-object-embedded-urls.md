---
title: "🔀 embedded_urls"
source: "https://docs.virustotal.com/reference/private-file-object-embedded-urls"
scraped_at: "2026-02-08T06:35:50.267Z"
---

The *embedded_urls* relationship returns the list of ***all URLs contained in the body of the sample***.

This relationship can be retrieved using the [relationships API endpoint](/reference/private-files-relationships). The response contains a list of [URLs](/reference/url-object) objects.

/private/files/{sha256}/embedded_urlsExample
```
`{
 "data": [
 {
 "attributes": {
 ...
 },
 "context_attributes": {
 "url": <string>
 }
 "type": "url",
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
 "count": 26,
 "cursor": "STEKLg=="
 },
 "data": [
 {
 "attributes": {
 ......
 },
 "type": "url",
 "id": "9d116b1b0c1200ca75016e4c010bc94836366881b021a658ea7f8548b6543c1e",
 "links": {
 "self": "http://www.virustotal.com/api/v3/urls/9d116b1b0c1200ca75016e4c010bc94836366881b021a658ea7f8548b6543c1e"
 },
 "context_attributes": {
 "url": "http://google.com/"
 }
 }
 ],
 "links": {
 "self": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_urls?limit=1",
 "next": "http://www.virustotal.com/api/v3/private/files/079b1db08ac52c94ba8fdbab638134a6a09a510ba10a87c1541ad6c7939a5679/embedded_urls?cursor=STEKLg%3D%3D&limit=1"
 }
}`
```