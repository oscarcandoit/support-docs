---
title: "🔀 owner"
source: "https://docs.virustotal.com/reference/collection-object-owner"
scraped_at: "2026-02-08T06:35:42.795Z"
---

The *owner* relationship return the ***owner of the Collection***.

This relationship can be retrieved using the [relationships API](/reference/get-collections-relationship) endpoint. The response contains a [User](/reference/user-object) object.

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
 "self": "https://virustotal.com/api/v3/collections/3255c967b5d9866682dd68d2bf181f106659094677076609939be4d70f972b86/owner"
 }
}`
```