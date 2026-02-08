---
title: "Get a private analysis"
source: "https://docs.virustotal.com/reference/private-analysis"
scraped_at: "2026-02-08T06:35:40.334Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

With this endpoint you can check the status of a private file analysis. It expects the analysis ID returned by the [POST /files](/reference/upload-file-private-scanning) endpoint, and will return a private analysis object with information about the analysis.

Example response
`{
 "meta": {
 "file_info": {
 "size": 5,
 "sha256": "11a77c3d96c06974b53d7f40a577e6813739eb5c811b2a86f59038ea90add772",
 "sha1": "7bae8076a5771865123be7112468b79e9d78a640",
 "md5": "e5828c564f71fea3a12dde8bd5d27063"
 }
 },
 "data": {
 "attributes": {
 "date": 1620127014,
 "status": "completed"
 },
 "type": "private_analysis",
 "id": "ZTU4MjhjNTY0ZjcxZmVhM2ExMmRkZThiZDVkMjcwNjM6MTYyMDEyNzAxNA==",
 "links": {
 "self": "https://virustotal.com/api/v3/private/analyses/ZTU4MjhjNTY0ZjcxZmVhM2ExMmRkZThiZDVkMjcwNjM6MTYyMDEyNzAxNA=="
 }
 }
}`
The `status` attribute in the private analysis object can be either "queued" or "completed", once it gets completed, you can use the `sha256` in the `file_info` section with the [GET /files/{id}](/reference/private-files-info) for getting all the information that VirusTotal has generated for the analysed file. Alternatively you could use [GET /analyses/{id}/item](/reference/private-files-relationships) for the same purpose.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!