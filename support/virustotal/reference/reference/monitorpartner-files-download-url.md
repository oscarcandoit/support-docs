---
title: "Retrieve a download url for a file with a given sha256 hash"
source: "https://docs.virustotal.com/reference/monitorpartner-files-download-url"
scraped_at: "2026-02-08T06:35:53.684Z"
---

This endpoint allows you to get a download url for a file with a given sha256 hash. These URLs are ephemeral and have a one hour expiration date.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/files/{sha256}/download_url"
response = session.get(url)
print(response.text)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!