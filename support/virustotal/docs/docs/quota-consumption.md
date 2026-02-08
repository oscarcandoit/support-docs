---
title: "Understanding Consumption"
source: "https://docs.virustotal.com/docs/quota-consumption"
scraped_at: "2026-02-08T06:19:18.667Z"
---

Here you can find how we measure consumption depending on each one of our services.

**⚠️

Group quota is shared between all group members. This means that for premium services, each individual user consumption is subtracted from the group quota. Therefore, it will be reflected in both the user and their group consumptions.

Summary table:

| | | | | | |
| --- | --- | --- | --- | --- | --- |
| SERVICE / QUOTA CONSUMPTION** | **Searches / Downloads** | **API requests** | **Livehunt** | **Retrohunt** | **Private Graphs** |
| [VTAPI](#vtapi) | When VTI available but not Premium API | X | | | |
| [VTI](#vti) | X | | | | |
| [Livehunt](#livehunt) | | If using Livehunt API endpoints | X | | |
| [Retrohunt](#retrohunt) | | If using Retrohunt API endpoints | | X | |
| [Graph](#vtgraph) | | When loading public graphs | | | X |

# VTAPI[](#vtapi)

**Minute, daily and monthly limitations. E.g. requests/day*

*

## API v2[](#api-v2)

---

***API version 3 is now the default and encouraged way to programmatically interact with VirusTotal.** While older API endpoints are still available and will not be deprecated, we encourage you to migrate your workloads to this new version.*

Usually one API call consumes **one request** from your quota. However, there are some **exceptions**:

- **Multihash searches:** You can make a request to /vtapi/v2/file/report, that admits a list of hashes as a parameter. This way you will save time, but it will count as one request per hash in the list.

- **Information about file uploads:** Our /vtapi/v2/file/submissions endpoint lets you obtain information about uploads for one or more files. It will count as one request per each submission returned for each one of the files. This means that if file1.txt has been uploaded to VT 4 times and file2.txt has been uploaded to VT 6 times, you will consume 10 requests from your group quota.

- **New file uploads:** If you upload a new file to VirusTotal via /file/scan it won&#x27;t consume from your quota. This means that you can freely upload **new files not found in VirusTotal** without consuming from your API quota. Notice that after uploading those files you usually would want to check the file analysis via /file/report, and doing this does consume from your quota.

[Link to our APIv2 documentation](/v2.0/reference/getting-started)

## API v3[](#api-v3)

---

Usually one API call consumes **one request** from your quota. However, there are some **exceptions**:

- **Enterprise searches (only for users with VTI and without VTAPI):** If you have Intelligence quota and you don&#x27;t have premium API, the requests to VTI premium endpoints ("VT Enterprise Endpoints" section) are taken from your VTI quota. If you have VTAPI, these searches will consume quota from your API limits, as usual

- **Checking consumption and quota details:** For example using /users/{id}/overall_quotas and /users/{id}/api_usage endpoints for checking your API quotas and usage. No quota consumption.

- **Feeds:**No quota consumption for feeds endpoints. This includes file downloads using links provided by feeds endpoints.

- **Invalid analysis requests:**Analysis are retrieved via "/api/v3/analyses/{id}". Quota is not consumed for this endpoint if the {id} is invalid.

- **File uploading**: If a user uploads a new file that is not in VirusTotal, then no API quota will be consumed. Further calls to retrieve this file&#x27;s data (**`GET /files/{sha256}`) or its analyses (`GET /files/analyses/{id}`) won&#x27;t consume quota either. Note that re-scanning the file (`POST /files/{sha256}/analyse`) will consume quota as any other API call.

[Link to our APIv3 documentation](/reference/overview)

# VTI[](#vti)

**Monthly limitation. E.g. downloads/month*

*

VTI Quota can be consumed in 2 ways:

1. 

2. 

**⚠️

If you use VT Enterprise via API with our VT Enterprise endpoints, quota will be consumed from Premium API (if purchased) or from VT Enterprise (if no API purchased)

# VTHunting[](#vthunting)

*Monthly limitation. E.g. rules/month*

*

## Livehunt[](#livehunt)

---

Each YARA rule** you create consumes **1 rule** from your quota, except for inactive rulesets. This means that if you have 3 rules in 1 active ruleset, you consume 3 YARA rules.

## Retrohunt[](#retrohunt)

---

Each retrohunt **job** you create consumes **1 job** from your quota, no exceptions. This means that it doesn&#x27;t matter if your job was successful or not or whether it had matches or not.

# VTGraph[](#vtgraph)

*Monthly limitation. Private graphs/month*

*

## Private[](#private)

---

VTGraph service only consumes from graph quota when creating **private graphs**.

If you create a private graph, it will consume 1 graph from your quota. No other consumption will be applied.

## Public[](#public)

---

However, if you create a **public** graph, it will consume from your **API** **quota** as per the requests to the API that have been necessary in order to load all items in the graph. The more items you try to load, the more requests to API and therefore the more API quota consumption.

*Updated 17 days ago