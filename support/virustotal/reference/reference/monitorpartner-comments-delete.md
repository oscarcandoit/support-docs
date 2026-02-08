---
title: "Remove a comment detection for a hash."
source: "https://docs.virustotal.com/reference/monitorpartner-comments-delete"
scraped_at: "2026-02-08T06:35:53.725Z"
---

This endpoint allows you to delete a comment and change *detection* to None so hash will appear over analysis listings if detected. More information about detection attribute could be found in [/hashes/&#x27;sha256&#x27;/comments](#monitorpartner-hashes-comments).

title="Python"
```
`import requests

comment_id = &#x27;<comment-id>&#x27;

url = "https://www.virustotal.com/api/v3/monitor_partner/comments/{comment_id}" % comment_id

response = requests.request("DELETE", url)
print(response.text)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!