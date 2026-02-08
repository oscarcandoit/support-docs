---
title: "Get comments on a sha256 hash"
source: "https://docs.virustotal.com/reference/get-sha256-hash-comments"
scraped_at: "2026-02-08T06:35:53.297Z"
---

This endpoint allows you to retrieve partner comments over a certain sha256 hash.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor_partner/comments/<comment-id>/"
response = session.get(url)
print(response.text)`
```

JSON
```
`{
 &#x27;data&#x27;: [
 {
 &#x27;type&#x27;: &#x27;monitor_hash_comment&#x27;,
 &#x27;id&#x27;: &#x27;{id}&#x27;,
 &#x27;attributes&#x27;: {
 &#x27;comment&#x27;: &#x27;{text}&#x27;,
 &#x27;detection&#x27;: &#x27;confirmed&#x27;,
 &#x27;engine&#x27;: &#x27;{engine name}&#x27;,
 &#x27;sha256&#x27;: &#x27;{sha256}&#x27;
 }
 }
 ]
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!