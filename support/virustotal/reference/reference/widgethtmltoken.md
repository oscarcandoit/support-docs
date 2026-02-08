---
title: "Retrieve the widget&#x27;s HTML content"
source: "https://docs.virustotal.com/reference/widgethtmltoken"
scraped_at: "2026-02-08T06:35:42.089Z"
---

This endpoint returns the actual HTML content of the widget report for a given observable. It is a URL that will have been previously returned by a call to the [/widget/url](/reference/widgeturl) endpoint. It does not require authentication but it is only **valid for three days**. This endpoint will be typically called from your application&#x27;s front-end/client-side, as a result of embedding it in an iframe.

*
Example HTML response visualized in a browser.

You might find the [VT Augment client library](https://github.com/VirusTotal/vt-augment) helpful when building the flow to display the widget in your own product. Its usage is not mandatory, a couple of lines of JavaScript will also do the job.

*Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!