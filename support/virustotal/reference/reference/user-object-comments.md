---
title: "🔀 comments"
source: "https://docs.virustotal.com/reference/user-object-comments"
scraped_at: "2026-02-08T06:35:52.089Z"
---

The *comments* relationship returns a list of ***all comments posted by a certain user***.

This relationship can be retrieved by using the [relationships API endpoint](/reference/users-relationships) and contains a list of [Comment](/reference/comments) objects.

/users/{user_id}/comments Example
```
`{
 "data": [
 <MDXishSnakeCase0>
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "date": 1593902009,
 "html": "#spam #malware",
 "tags": [],
 "text": "#spam #malware",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "d-spamverybad.com-905fd26e",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/d-spamverybad-905fd26e"
 },
 "type": "comment"
 },
 {
 "attributes": {
 "date": 1560708145,
 "html": "is this a false positive?<br />",
 "tags": [],
 "text": "is this a false positive?\n",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "f-cb3c63183c53153833c53b93e5c3e2e315b30c0e3314833d77231bab37e8c33a-a3a313c8",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/f-cb3c63183c53153833c53b93e5c3e2e315b30c0e3314833d77231bab37e8c33a-a3a313c8"
 },
 "type": "comment"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/spellman/comments?limit=10"
 },
 "meta": {
 "count": 2
 }
}`
```