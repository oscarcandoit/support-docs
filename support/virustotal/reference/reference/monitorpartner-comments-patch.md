---
title: "Add a comment on a sha256 hash"
source: "https://docs.virustotal.com/reference/monitorpartner-comments-patch"
scraped_at: "2026-02-08T06:35:53.715Z"
---

This endpoint allows you to update a comment and change *detection* if necessary. More information about detection attribute could be found in [/hashes/&#x27;sha256&#x27;/comments](#get-sha256-hash-comments).

title="Python"
```
`import requests

comment_id = &#x27;<comment-id>&#x27;

url = "https://www.virustotal.com/api/v3/monitor_partner/comments/{comment_id}" % comment_id
data = {
 &#x27;data&#x27;: [{
 &#x27;attributes&#x27;: {
 &#x27;comment&#x27;: &#x27;[TEXT]&#x27;,
 &#x27;detection&#x27;: &#x27;confirmed&#x27;,
 &#x27;engine&#x27;: &#x27;[ENGINE]&#x27;,
 &#x27;sha256&#x27;: &#x27;[HASH-SHA256]&#x27;
 },
 &#x27;id&#x27;: comment_id,
 &#x27;type&#x27;: &#x27;monitor_hash_comment&#x27;
 }]
}

response = requests.request("POST", url, data=json.dumps(data))
print(response.text)`
```

title="Example response"
```
`{
 "data": [
 {
 "attributes": {
 "comment": "[TEXT]",
 "detection": "confirmed",
 "engine": "[ENGINE-ID]",
 "sha256": "[HASH-SHA256]"
 },
 "id": "[MONITOR-COMMENT-ID]",
 "type": "monitor_hash_comment"
 }
 ]
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!