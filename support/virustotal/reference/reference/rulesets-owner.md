---
title: "🔀 🧑‍💻owner"
source: "https://docs.virustotal.com/reference/rulesets-owner"
scraped_at: "2026-02-08T06:35:49.768Z"
---

The *owner* relationship returns the ***owner of the ruleset***.

This relationship can be retrieved using the [relationships API](/reference/get-hunting-ruleset-full-relationships) endpoint. The response contains a [User](/reference/user-object) object.

/collections/{id}/ownerExample
```
`{
 "data": <MDXishSnakeCase0>,
 "links": {
 "self": <string>
 },
 "meta": {
 "count": <int>
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
 },
 "links": {
 "self": "https://virustotal.com/api/v3/hunting_rulesets/11245226372/owner"
 }
}`
```