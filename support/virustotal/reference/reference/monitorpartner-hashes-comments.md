---
title: "Create a comment over a hash"
source: "https://docs.virustotal.com/reference/monitorpartner-hashes-comments"
scraped_at: "2026-02-08T06:35:53.206Z"
---

This endpoint allows you to create a comment over certain hash, this comment may be visible to other partners (for example if they also detect the hash) and to monitor users who have a file with this hash.
A MonitorHashComment also have a *detection* attribute that could be set to &#x27;confirmed&#x27; to ignore this particular hash from that moment on. Once the hash comment is marked as confirmed any new monitor analysis for this file that your engine will detect will not be shown anymore when requesting latests analyses. This behaviour can be reverted deleting the comment or updating it with detection attribute set to None.
Ignored hashes with detections still can be retrieved using [/hashes](/reference/monitorpartner-hashes) endpoint with a filter "tag:ignored"

Python
```
`import requests

sha256 = &#x27;<hash-sha256>&#x27;
engine = &#x27;<your-engine-id>&#x27;

url = "https://www.virustotal.com/api/v3/monitor_partner/hashes/%s/comments" % sha256
data = {&#x27;data&#x27;: [{&#x27;attributes&#x27;: {
 &#x27;comment&#x27;: &#x27;[TEXT]&#x27;,
 &#x27;detection&#x27;: &#x27;confirmed&#x27;,
 &#x27;engine&#x27;: engine,
 &#x27;sha256&#x27;: sha256},
 &#x27;type&#x27;: &#x27;monitor_hash_comment&#x27;}]}

response = requests.request("POST", url, data=json.dumps(data))
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