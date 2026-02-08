---
title: "Get a file behaviour&#x27;s detailed HTML report"
source: "https://docs.virustotal.com/reference/file-behaviour-feed-html"
scraped_at: "2026-02-08T06:35:40.973Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Sandbox analyses feeds endpoints are only available to users with a Sandbox feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

Each JSON object contained in the file behaviour feed packages include a URL to this API endpoint to download the the file&#x27;s sandbox execution HTML report. The available in the feed link already includes the download token required by this endpoint. The following snippet represents the JSON structure in the file behaviour feed that takes to the link:

JSON
`{
 "context_attributes": {
 "html_report": "https://www.virustotal.com/api/v3/feeds/file_behaviours/<TOKEN>/evtx"
 }
}`
The link only works during the feed&#x27;s lifetime. Check [/feeds/file_behaviours/{time}](/reference/feeds-file-behaviour) for more information.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!