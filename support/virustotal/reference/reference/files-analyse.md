---
title: "Request a file rescan (re-analyze)"
source: "https://docs.virustotal.com/reference/files-analyse"
scraped_at: "2026-02-08T06:35:34.225Z"
---

> ❗️
> ### Caution[](#caution)
> 
> 
> This API endpoint has the potential to produce a denial of service on the scanning infrastructure if abused. Please contact us if you are going to be rescanning more than 50K files per day.
> 
> 

Files that have been already uploaded to VirusTotal can be re-analysed without uploading them again, you can use this endpoint for that purpose. The response is an object descriptor for the new analysis as in the [POST /files](/reference/files-scan) endpoint. The ID contained in the descriptor can be used with the [GET /analyses/{id}](/reference/analysis) endpoint to get information about the analysis.

JSON
```
`{
 "data": {
 "type": "analysis",
 "id": "NjY0MjRlOTFjMDIyYTkyNWM0NjU2NWQzYWNlMzFmZmI6MTQ3NTA0ODI3Nw=="
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!