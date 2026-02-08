---
title: "Get a widget rendering URL"
source: "https://docs.virustotal.com/reference/widgeturl"
scraped_at: "2026-02-08T06:35:41.973Z"
---

This endpoint allows you to generate an ephemeral widget URL valid for three days. Such URL is precisely the URL that you will need to embed in an iframe in order to display the VirusTotal report in your product. Once the URL has expired, it should be refreshed by calling once again this endpoint with the very same observable query parameter, otherwise a bad request error will be returned.

In addition to the widget URL for the pertinent observable, the response includes an object with the last detection ratio for the observable, i.e. how many security vendors flag the item as malicious. This detection ratio can be used as a summary next to the pertinent observable when listing it in your interface, acting as a trigger to then open the full-fledged widget when clicking on it.

> ❗️
> 
> 
> 
> VT Augment enriches alerts generated via your own logic, it should not power the detections themselves. This is precisely why the multi-antivirus report is not returned as a parseable API object, to limit the potential for abuse and misuse.
> 
> 

Optionally, you can pass up to four params to control the widget&#x27;s theme and match your product&#x27;s style. These theme parameters must be the HTML color expressed in hexadecimal notation. You can find more information about theming [in this section](/reference/theme).

JSON
```
`{
 "data": {
 "url": "https://virustotal.com/ui/widget/html/OTEzZjdhMDBlYWE1YThiMzg2MDQxYWE2NDQwMTgzYmNhNTc0ODA1ZTRiMWE2OTkzODFlZjAxYmE5MGVmMzVkM3x8ZmlsZXx8eyJiZzEiOiAiIzMxM2Q1YSIsICJiZzIiOiAiIzIyMmM0MiIsICJiZDEiOiAiIzRkNjM4NSIsICJmZzEiOiAiI2ZmZmZmZiJ9fHwxNTcxOTI1MjQzfHxjMzkyOWYzMmY5NGFmZTIxMTUzN2U2NTYwNDgzZjgyYjc4NDY1MDQ2ZmNmMGY3ZTljNjgzMmY0ZWZlMzFlMTFi",
 "detection_ratio": {"detections": 5, "total": 71}
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!