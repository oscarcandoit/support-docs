---
title: "Rescan a private file"
source: "https://docs.virustotal.com/reference/rescan-a-private-file"
scraped_at: "2026-02-08T06:35:39.812Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Reanalyses a private file. The same params from [/files](/reference/upload-file-private-scanning) (other than the file) are accepted. Returns a [private analysis](/reference/private-analyses).

Example
```
`{
 "data": {
 "type": "private_analysis",
 "id": "ZmI5Y2VmNGJmZDIwZTkzNmQ5MzY0NTcwMGI2Nzc2M2Q6Tm9uZToxNjYwODI1NDE1"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!