---
title: "List Saved Searches"
source: "https://docs.virustotal.com/reference/list-saved-searches"
scraped_at: "2026-02-08T06:35:36.777Z"
---

Use this endpoint to list [Saved Searches](/reference/saved-search-object) you have access to as owner, editor or viewer.

# Filters[](#filters)

Available filters for saved searches:

- **`creation_date`: filters saved searches by their last modification date, accepting either the `YYYY-MM-DDTHH:MM:SS` format or an Epoch UTC timestamp format. E.g.:`creation_date:2025-10-27+`, `creation_date:2025-11-27T01:15:09`, `creation_date:2025-09-15-`, `creation_date:1764326675-`.

- `last_modification_date`: filters saved searches by their last modification date, accepting either the `YYYY-MM-DDTHH:MM:SS` format or an Epoch UTC timestamp format. E.g.:`last_modification_date:2025-10-28+`, `last_modification_date:2025-10-27T09:31:25`, `last_modification_date:2025-10-26-`, `last_modification_date:1763721875+`.

- `shared_with_me:true`: filters saved searches that were created by other users but shared with the current one. Note that this filter only supports the `true` value.

- `origin`: filters saved searches by their origin. Available options: Crowdsourced** for those created by the community and **Partner** for those created by trusted partners. E.g.: `origin:Crowdsourced`, `origin:Partner`.

- `owner`: filters saved searches based on their creator/owner user identifier. It is particularly useful for listing saved searches created by users whose content you trust or want to follow. E.g.:`owner:<user_id>`.

- `editor`: filters saved searches editable by a specified user. E.g.:`editor:<user_id>`.

- `viewer`: Filters saved searches viewable by a specified user. E.g.:`viewer:<user_id>`.

# Orders[](#orders)

Available sorting options for saved searches:

- `creation_date`: sorts saved searches by their last modification date ascending (`+`) or descending (`-`). E.g.:`creation_date+`, `creation_date-`.

- `last_modification_date`: sorts saved searches by their last modification date ascending (`+`) or descending (`-`). E.g.:`last_modification_date+`, `last_modification_date-` (default order).

- `name`: sorts saved searches by their name ascending (`+`) or descending (`-`). E.g.:`name+`, `name-`.

# Examples[](#examples)

List all of my saved searches, including their editors, and display only the name and description.

Python
`import requests
import urllib

filters = "shared_with_me:true"
relationships = "editors"
attributes = "name,description"

url = f"https://www.virustotal.com/api/v3/saved_searches?filter={urllib.parse.quote(filters)}&relationships={relationships}&attributes={attributes}"

headers = {"accept": "application/json","x-apikey": <api-key>}

response = requests.get(url, headers=headers)`
Retrieve saved searches created by Ana during August and September 2025.

Python
`import requests
import urllib

filters = "owner:ana creation_date:2025-08-01+ creation_date:2025-10-01+"

url = f"https://www.virustotal.com/api/v3/saved_searches?filter={urllib.parse.quote(filters)}"

headers = {"accept": "application/json","x-apikey": <api-key>}

response = requests.get(url, headers=headers)`
List all saved searches created by any Partner.

Python
```
`import requests
import urllib

filters = "origin:Partner"

url = f"https://www.virustotal.com/api/v3/saved_searches?filter={urllib.parse.quote(filters)}"

headers = {"accept": "application/json","x-apikey": <api-key>}

response = requests.get(url, headers=headers)`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!