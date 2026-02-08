---
title: "Revoke access to a Saved Search"
source: "https://docs.virustotal.com/reference/revoke-saved-searches-access"
scraped_at: "2026-02-08T06:35:36.861Z"
---

Use this endpoint to revoke [saved search](/reference/saved-search-object) access for a specific user or the owner&#x27;s entire group.

This endpoint is **restricted** to use by the **owner** and **editors** of the saved search only.

**🚧
Important:** This endpoint requires a request body, even when utilizing the **DELETE** method.

This is an example request body:

Request body example
`{
 "data": [
 {
 "id": "user id",
 "type": "user"
 },
 {
 "id": "group id",
 "type": "group"
 }
 ]
}`

# Examples[](#examples)

Revoke viewer privileges for all members of my group from the saved search with ID f60631d600b44a91a8b20cef8c77aeac.

Python
`import requests
object_id = "f60631d600b44a91a8b20cef8c77aeac"
access = "viewers"

url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}/relationship/{access}"

payload = {
 "data": [
 {
 "id": "my_group_id",
 "type": "group"
 }
 ]
}
headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
response = requests.delete(url, json=payload, headers=headers)`
Revoke editor privileges for ana and alex from the saved search with ID f60631d600b44a91a8b20cef8c77aeac.

Python
```
`import requests
object_id = "f60631d600b44a91a8b20cef8c77aeac"
access = "editors"

url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}/relationship/{access}"

payload = {
 "data": [
 {
 "id": "ana",
 "type": "user"
 },
 {
 "id": "alex",
 "type": "user"
 }
 ]
}
headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
response = requests.delete(url, json=payload, headers=headers)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!