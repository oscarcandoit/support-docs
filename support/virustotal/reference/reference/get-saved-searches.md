---
title: "Get a Saved Search"
source: "https://docs.virustotal.com/reference/get-saved-searches"
scraped_at: "2026-02-08T06:35:36.885Z"
---

This endpoint returns a [Saved Search](/reference/saved-search-object) object.

# Examples[](#examples)

Get only the name, description and tags of the saved search 0a49acd622a44982b1986984ba31c15b.

Python
`import requests

object_id = "0a49acd622a44982b1986984ba31c15b"
attributes = "name,description,tags"

url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}?attributes={attributes}"

headers = {"accept": "application/json","x-apikey": <api-key>}

response = requests.get(url, headers=headers)`
Retrieve the saved search with ID 0a49acd622a44982b1986984ba31c15b, including its owner and all editors.

Python
```
`import requests

object_id = "0a49acd622a44982b1986984ba31c15b"
relationships = "owner,editors"

url = f"https://www.virustotal.com/api/v3/saved_searches/{object_id}?relationships={relationships}"

headers = {"accept": "application/json","x-apikey": <api-key>}

response = requests.get(url, headers=headers)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!