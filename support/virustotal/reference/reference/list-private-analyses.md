---
title: "List private analyses"
source: "https://docs.virustotal.com/reference/list-private-analyses"
scraped_at: "2026-02-08T06:35:40.392Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Returns a list of the last [private analyses](/reference/private-analyses). The analyses are sorted by most recent first. You can use `?order=date-` to reverse the order.

/api/v3/private/analysesJSON
```
`{
 "meta": {
 "cursor": <string>,
 "count": <int>
 },
 "data": {
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 },
 "links": {
 "self": <string>,
 "next": <string>
 }
}`
```

```
`{
 "meta": {
 "count": 90,
 "cursor": "1"
 },
 "data": [
 {
 "attributes": {
 "status": "completed",
 "sandbox_status": {
 "Zenbox": {
 "status": "finished",
 "in_progress_percent": 100
 }
 },
 "sandbox_configuration": {
 "enable_internet": false,
 "command_line": ""
 },
 "date": 1666170912
 },
 "type": "private_analysis",
 "id": "NTJjNTM1MThmMzhiNWRiNGE1ZWQ5ZDhiZjQyNWY2NzM6NTJjMjllYmQ3MThjODM2OWRjNmFiNmIzOTc2MmM3OTY6MTY2NjE3MDkxMg==",
 "links": {
 "item": "https://www.virustotal.com/api/v3/private/files/16f6c6439c5b971218b9cd1d616ba40c7cad08c94984ecfde443dfa3c61c6152",
 "self": "https://www.virustotal.com/api/v3/private/analyses/NTJjNTM1MThmMzhiNWRiNGE1ZWQ5ZDhiZjQyNWY2NzM6NTJjMjllYmQ3MThjODM2OWRjNmFiNmIzOTc2MmM3OTY6MTY2NjE3MDkxMg=="
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/analyses?limit=1",
 "next": "https://www.virustotal.com/api/v3/private/analyses?cursor=1&limit=1"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!