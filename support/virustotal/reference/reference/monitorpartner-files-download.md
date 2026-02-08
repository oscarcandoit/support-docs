---
title: "Download a file with a given sha256 hash"
source: "https://docs.virustotal.com/reference/monitorpartner-files-download"
scraped_at: "2026-02-08T06:35:53.665Z"
---

This endpoint allows you to download a file by sha256 hash.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/files/{sha256}/download"
response = session.get(url)
print(response.text)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!