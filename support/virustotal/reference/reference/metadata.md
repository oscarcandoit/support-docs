---
title: "Get VirusTotal metadata"
source: "https://docs.virustotal.com/reference/metadata"
scraped_at: "2026-02-08T06:35:37.469Z"
---

This endpoint returns a dictionary with metadata related to VirusTotal, which includes a full list of engines in use, a list of existing privileges, etc.

JSON
```
`{
 "data": {
 "engines": {
 "ALYac": {},
 "APEX": {},
 "AVG": {},
 "AVware": {},
 "Acronis": {},
 "Ad-Aware": {},
 "AegisLab": {},
 "AhnLab-V3": {},
 "Alibaba": {},
 "Antiy-AVL": {},
 "Arcabit": {},
 "Avast": {},
 "Avast-Mobile": {},
 "Avira": {},
 "Babable": {},
 "Baidu": {}
 },
 "privileges": [
 "cases",
 "click_to_accept",
 "creditcards",
 "dogfooder",
 "file-behaviour-feed",
 "downloads-tier-1",
 "downloads-tier-2"
 ],
 "relationships": {
 "analysis": [
 {
 "description": "File or URL the analysis belongs to.",
 "name": "item"
 }
 ],
 "async_search_job": [
 {
 "description": "Objects that match the search.",
 "name": "matches"
 }
 ],
 "case": [
 {
 "description": "Returns the files objects in the case.",
 "name": "files"
 },
 {
 "description": "Returns the graphs objects in the case.",
 "name": "graphs"
 }
 ],
 "code_block": [
 {
 "description": "Files that contain the code block.",
 "name": "files"
 }
 ],
 "comment": [
 {
 "description": "Object to which the comment belongs to.",
 "name": "item"
 },
 {
 "description": "User who wrote the comment.",
 "name": "author"
 }
 ],
 "domain": [
 {
 "description": "Votes for the file/URL.",
 "name": "votes"
 },
 {
 "description": "Comments for the Domain or IP&#x27;s related entities.",
 "name": "related_comments"
 },
 {
 "description": "Parent domain.",
 "name": "parent"
 }
 ]
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!