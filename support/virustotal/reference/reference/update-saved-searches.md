---
title: "Update a Saved Search"
source: "https://docs.virustotal.com/reference/update-saved-searches"
scraped_at: "2026-02-08T06:35:36.853Z"
---

Use this endpoint to modify the attributes of an existing [saved search](/reference/saved-search-object). This is an example request body:

**Request body example
`{
 "data": {
 "type": "saved_search",
 "attributes": {
 "name": "new saved search&#x27;s name",
 "description": "new saved search&#x27;s description",
 "search_query": "new saved search&#x27;s query/logic",
 "private": false,
 "tags": ["saved search&#x27;s associated tags"]
 }
 }
}`
The `private` field determines the search&#x27;s accessibility:

- if set to `false` (public), the saved search is viewable by all VirusTotal users.

- if set to `true` (private), access is restricted to the owner and any specific users/groups with whom the owner has individually shared the search.

> 🚧
> Important Note on Updating Tags:** To modify the tag list using this endpoint (adding or removing a subset of tags), you must first [*retrieve*](/reference/get-saved-search) the current full list of tags.
> 
> 
> - **To Delete All Tags:** use this endpoint with an empty list of tags (**`[]`).
> 
> - To Add a New Tags:** [*retrieve*](/reference/get-saved-search) the current list, append the new tags, and submit the resulting list.
> 
> - **To Remove a Subset of Tags:** [*retrieve*](/reference/get-saved-search) the current list, filter out the tags to be removed, and submit the remaining list.
> 
> 
> 
> 
> 
> This endpoint is **restricted** to use by the **owner** and **editors** of the saved search only.
> 
> 
> 
> To share a saved search with certain users or the owner&#x27;s entire group, check out this [endpoint](/reference/share-saved-searches)
> 
> 
> 
> # Examples[](#examples)
> 
> 
> 
> Change the name and the description of the saved search with ID f60631d600b44a91a8b20cef8c77aeac.
> 
> 
> Python
> `import requests
> 
> object_id = "f60631d600b44a91a8b20cef8c77aeac"
> 
> url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}"
> 
> payload = {
> "data": {
> "type": "saved_search",
> "attributes": {
> "name": "This is the new name of the saved search",
> "description": "This is the new description of the saved search"
> }
> }
> }
> headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
> response = requests.patch(url, json=payload, headers=headers)`
> Share the saved search with ID f60631d600b44a91a8b20cef8c77aeac with the entire community.
> 
> 
> Python
> ```
> `import requests
> 
> object_id = "f60631d600b44a91a8b20cef8c77aeac"
> 
> url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}"
> 
> payload = {
> "data": {
> "type": "saved_search",
> "attributes": {
> "private": False
> }
> }
> }
> headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
> response = requests.patch(url, json=payload, headers=headers)`
> ```
> 
> 

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!