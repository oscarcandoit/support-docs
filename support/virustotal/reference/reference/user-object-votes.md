---
title: "🔀 votes"
source: "https://docs.virustotal.com/reference/user-object-votes"
scraped_at: "2026-02-08T06:35:52.724Z"
---

The *votes* relationship returns a list of ***all votes posted by a certain user***.

This relationship can be retrieved by using the [relationships API endpoint](/reference/users-relationships) and contains a list of [Vote](/reference/vote-object) objects.

/users/{user_id}/votesExample
```
`{
 "data": [
 <MDXishSnakeCase0>
 ...
 ],
 "links": {
 "next": <string>,
 "self": <string>
 },
 "meta": {
 "count": <int>,
 "cursor": <string>
 }
}`
```

```
`{
 "meta": {
 "count": 3,
 "cursor": "Cl4SWGoRc352aXJ1c3RvdGFsY2xvdWRyQwsSBkRvbWFpbiISd3d3LnZpcnVzdG90YWwuY29tDAsSBFZvdGUiG3d3dy52aXJ1c3RvdGFsLmNvbS1lNmJjNjcwOAwYACAA"
 },
 "data": [
 {
 "attributes": {
 "date": 1623250000,
 "verdict": "harmless",
 "value": 1
 },
 "type": "vote",
 "id": "d-www.virustotal.com-abcdef012",
 "links": {
 "self": "https://www.virustotal.com/api/v3/votes/d-www.virustotal.com-abcdef012"
 }
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/wcoyote/votes?limit=1",
 "next": "https://www.virustotal.com/api/v3/users/wcoyote/votes?cursor=Cl4SWGoRc352aXJ1c3RvdGFsY2xvdWRyQwsSBkRvbWFpbiISd3d3LnZpcnVzdG90YWwuY29tDAsSBFZvdGUiG3d3dy52aXJ1c3RvdGFsLmNvbS1lNmJjNjcwOAwYACAA&limit=1"
 }
}`
```