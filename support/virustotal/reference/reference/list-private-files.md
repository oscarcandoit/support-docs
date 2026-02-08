---
title: "List private files"
source: "https://docs.virustotal.com/reference/list-private-files"
scraped_at: "2026-02-08T06:35:39.806Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Returns a list of previously analysed [private files](/reference/private-files). The files are always ordered by SHA256.

/api/v3/private/filesJSON
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
 "cursor": "079b1db08ac52c94be8fdb5b638134a6109a510bc10a87c15413d6c793985678",
 "count": 19
 },
 "data": [
 {
 "attributes": {
 "type_description": "Windows Installer",
 ...
 },
 "type": "private_file",
 "id": "079b1db08ac52c94be8fdb5b638134a6109a510bc10a87c15413d6c793985678",
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/files/079b1db08ac52c94be8fdb5b638134a6109a510bc10a87c15413d6c793985678"
 }
 },
 ...
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/files?limit=1",
 "next": "https://www.virustotal.com/api/v3/private/files?cursor=079b1db08ac52c94be8fdb5b638134a6109a510bc10a87c15413d6c793985678&limit=1"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!