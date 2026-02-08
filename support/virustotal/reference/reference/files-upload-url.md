---
title: "Get a URL for uploading large files"
source: "https://docs.virustotal.com/reference/files-upload-url"
scraped_at: "2026-02-08T06:35:34.235Z"
---

For uploading files smaller than 32MB you can simply use the [POST /files](/reference/files-scan) endpoint, but for larger files you need to obtain a special upload URL first, and then send the `POST` request to the upload URL instead of sending it to `/files`. The `POST` request should have the same format expected by the [POST /files](/reference/files-scan) endpoint. Each upload URL can be used only once.

> 📘
> ### Files larger than 200MBs[](#files-larger-than-200mbs)
> 
> 
> Notice that although the actual size limit is 650MBs, files larger than 200MBs tend to be bundles of some sort, (compressed files, ISO images, etc.) in these cases it makes sense to upload the inner individual files instead for several reasons, as an example:
> 
> 
> - Engines tend to have performance issues on big files (timeouts, some may not even scan them).
> 
> - Some engines are not able to inspect certain file types whereas they will be able to inspect the inner files if submitted.
> 
> - When scanning a big bundle you lose context on which specific inner file is causing the detection.
> 
> 

JSON
```
`{
 "data": "http://www.virustotal.com/_ah/upload/AMmfu6b-_DXUeFe36Sb3b0F4B8mH9Nb-CHbRoUNVOPwG/"
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!