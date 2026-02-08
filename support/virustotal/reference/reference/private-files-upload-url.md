---
title: "Get a URL for uploading large files"
source: "https://docs.virustotal.com/reference/private-files-upload-url"
scraped_at: "2026-02-08T06:35:39.675Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

For uploading files smaller than 32MB you can simply use the [POST /files](/reference/upload-file-private-scanning) endpoint, but for larger files you need to obtain a special upload URL first, and then send the `POST` request to the upload URL instead of sending it to `/private/files`. The `POST` request should have the same format expected by the [POST /files](/reference/upload-file-private-scanning) endpoint. Each upload URL can be used only once.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!