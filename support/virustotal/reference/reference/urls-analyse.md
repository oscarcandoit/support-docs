---
title: "Request a URL rescan (re-analyze)"
source: "https://docs.virustotal.com/reference/urls-analyse"
scraped_at: "2026-02-08T06:35:36.253Z"
---

> 📘
> 
> 
> 
> See [URL identifiers](/reference/url#url-identifiers) from more information about how to generate a valid URL identifier for a URL.
> 
> 

Returns a [Analysis](/reference/analyses-object) object descriptor which can be used in the [GET/analyses/{id}](/reference/analysis) API endpoint to get further information about the analysis status.

JSON
```
`{
 "data": {
 "id": "u-a354494a73382ea0b4bc47f4c9e8d6c578027cd4598196dc88f05a22b5817293-1604933101",
 "type": "analysis"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!