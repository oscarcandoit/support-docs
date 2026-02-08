---
title: "Get a file’s download URL"
source: "https://docs.virustotal.com/reference/files-download-url"
scraped_at: "2026-02-08T06:35:34.163Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> This endpoint is only available for users with special privileges.
> 
> 

This endpoint returns a signed URL from where you can download the specified file. Getting the URL counts as a file download in your quota, even if you don&#x27;t actually download the file, but once you have the URL you can use it to download the file multiple times without consuming any quota at all. The URL expires after 1 hour.

JSON
```
`{
 "data": "https://vtsamples.commondatastorage.googleapis.com/275a..fd0f?GoogleAccessId=758681729565-rc7fcckv235v1@developer.gserviceaccount.com&Expires=1524733537&Signature=GRs9WLy...oHA%3D"
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!