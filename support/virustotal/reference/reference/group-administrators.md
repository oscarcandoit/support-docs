---
title: "🔀🧑‍💻 administrators"
source: "https://docs.virustotal.com/reference/group-administrators"
scraped_at: "2026-02-08T06:35:49.818Z"
---

The *administrators* relationship returns all ***users administrating a given group***. This relationship is only visible for the groups members.

It can be fetched using the [relationships API endpoint](/reference/groups-relationships) and it returns a list of [User](/reference/user-object) objects.

/groups/{id}/administratorsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
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
 "first_name": "Salem",
 "last_name": "Spellman",
 "profile_phrase": "Meow",
 "reputation": 1,
 "status": "active",
 "user_since": 1557214525
 },
 "id": "salem",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/salem"
 },
 "type": "user"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/groups/spellmans/administrators?limit=10"
 },
 "meta": {
 "count": 1
 }
}`
```