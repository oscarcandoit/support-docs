---
title: "🔀 submitter"
source: "https://docs.virustotal.com/reference/submitter"
scraped_at: "2026-02-08T06:35:50.337Z"
---

The *submitter* relationship returns the ***user who submitted the analysis***.

This relationship can be retrieved by using the [relationships API endpoint](/reference/get-private-analyses-relationship). The response contains a [users](/reference/user-object) object.

/analyses/{analysis_id}/submitterExample
```
`{
 "data": {
 <OBJECT>
 },
 "links": {
 "self": "<string>"
 },
 "meta": {
 "count": 1
 }
}`
```

```
`{
 "meta": {
 "count": 1
 },
 "data": {
 "attributes": {
 "status": "active",
 "first_name": "Wile E.",
 "profile_phrase": "",
 "last_name": "Coyote",
 "reputation": 1
 },
 "type": "user",
 "id": "wcoyote",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/wcoyote"
 }
 },
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/analyses/ZmI5Y2VmNGJmZDIwZTkzNmQ5MzY0NTcwMGI2Nzc2M2Q6Y2Y1MjY5YjZkMThlMWUwNWUyNGU0ZTBhN2M2ZjdlOWU6MTY2NjE3MDIyMg==/submitter"
 }
}`
```