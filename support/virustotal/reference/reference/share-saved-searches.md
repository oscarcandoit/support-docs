---
title: "Share a Saved Search"
source: "https://docs.virustotal.com/reference/share-saved-searches"
scraped_at: "2026-02-08T06:35:36.728Z"
---

Use this endpoint to grant **viewer** or **editor** permissions to a certain [saved search](/reference/saved-search-object) for:

- individual **users**

- owner&#x27;s **group**

This endpoint is **restricted** to use by the **owner** and **editors** of the saved search only.

**🚧
Note that editor** privileges can **only be granted to members belonging to the same group as the owner** of the saved search.

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
To revoke the access to a saved search check out this [endpoint](/reference/revoke-saved-searches-access).

# Examples[](#examples)

Grant view access to all members of my group for the saved search with ID f60631d600b44a91a8b20cef8c77aeac.

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
response = requests.post(url, json=payload, headers=headers)`
Grant edit access to ana and alex for the saved search with ID f60631d600b44a91a8b20cef8c77aeac.

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
response = requests.post(url, json=payload, headers=headers)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!