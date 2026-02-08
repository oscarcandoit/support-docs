---
title: "🔀🧑‍💻 groups"
source: "https://docs.virustotal.com/reference/user-object-groups"
scraped_at: "2026-02-08T06:35:52.569Z"
---

The *groups* relationship returns a list of ***all groups for which a given user is a member***. This relationship is only visible for the account&#x27;s owner.

The relationship can be retrieved by using the [relationships API endpoint](/reference/users-relationships) and its response contains a list of [Groups](/reference/group-object) objects.

/users/{user_id}/groupsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
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
 "auto_add_users": [],
 "country": "United States",
 "country_iso": "US",
 "domain_name": "blabla.com",
 "industry": "IT",
 "organization": "Company",
 "organization_legal_name": "Company Inc",
 "privileges": {
 "admin": {
 "granted": false
 },
 "allinfo": {
 "granted": false
 },
 "big-files": {
 "expiration_date": 1601510400,
 "granted": true
 },
 "cases": {
 "granted": false
 },
 "click_to_accept": {
 "granted": false
 }
 },
 "quota_usage_by_user": {},
 "quotas": {
 "api_requests_daily": {
 "allowed": 1000,
 "used": 13
 },
 "api_requests_hourly": {
 "allowed": 60000,
 "used": 1
 },
 "api_requests_monthly": {
 "allowed": 30000,
 "used": 104
 }
 }
 },
 "id": "blabla",
 "links": {
 "self": "https://www.virustotal.com/api/v3/groups/blabla"
 },
 "type": "group"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/spellman/groups?limit=10"
 },
 "meta": {
 "count": 1
 }
}`
```