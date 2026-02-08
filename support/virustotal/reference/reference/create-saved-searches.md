---
title: "Create a Saved Search"
source: "https://docs.virustotal.com/reference/create-saved-searches"
scraped_at: "2026-02-08T06:35:36.931Z"
---

Use this endpoint to save a search or query and you will automatically become the **owner** of the [saved search](/reference/saved-search-object). This is an example request body:

Request body example
`{
 "data": {
 "type": "saved_search",
 "attributes": {
 "name": "saved search&#x27;s name",
 "description": "saved search&#x27;s description",
 "search_query": "saved search&#x27;s query/logic",
 "private": true,
 "tags": ["saved search&#x27;s associated tags"]
 }
 }
}`
The `private` field determines the search&#x27;s accessibility:

- if set to `false` (public), the saved search is viewable by all VirusTotal users.

- if set to `true` (private), access is restricted to the owner and any specific users/groups with whom the owner has individually shared the search.

To update the `private` field check out this [endpoint](/reference/update-saved-searches) .

To share a saved search with certain users or the owner&#x27;s entire group, check out this [endpoint](/reference/share-saved-searches) .

# Examples[](#examples)

Python
```
`import requests

url = f"https://www.virustotal.com/api/v3/saved_searches"
payload = {
 "data": {
 "type": "saved_search",
 "attributes": {
 "name": "Potential Gamaredon-related document activity",
 "description": "This Intelligence search query is designed to find files that match a specific set of characteristics, generally indicative of a particular type of malware or activity.",
 "search_query": "(type:document) and (behavior_processes:*.ru* and behavior_processes:*DavSetCookie* and behavior_processes:*http*) and (behavior_network:*.ru* or embedded_domain:*.ru* or embedded_url:*.ru*)",
 "private": True,
 "tags": ["FILE", "Gamaredon", "Behaviour"]
 }
 }
}
headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
response = requests.post(url, json=payload, headers=headers)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!