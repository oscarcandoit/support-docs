---
title: "Users"
source: "https://docs.virustotal.com/reference/user-object"
scraped_at: "2026-02-08T06:35:52.070Z"
---

## Object Attributes[](#object-attributes)

- `apikey`: <*string*> account&#x27;s VirusTotal API key. Only visible for the account&#x27;s owner.

- `email`: <*string*> account&#x27;s email. Only visible for the account&#x27;s owner and its group&#x27;s admin.

- `first_name`: <*string*> user&#x27;s first name. Can be modified by the account&#x27;s owner.

- `has_2fa`: <*boolean*> whether the user has 2FA enabled or not. Only visible for the account&#x27;s owner.

- `last_login`: <*integer*> user&#x27;s last login date as UTC timestamp. Only visible for the account&#x27;s owner and its group&#x27;s admin.

- `last_name`: <*string*> user&#x27;s last name. Can be modified by the account&#x27;s owner.

- `preferences`: <*dictionary*> VirusTotal user&#x27;s preferences. Only visible for the account&#x27;s owner. Every subitem is a *dictionary* having a *string* as key.

- `privileges`: <*dictionary*> user&#x27;s granted privileges. Only visible for the account&#x27;s owner. Each dictionary key is a *string* representing the privilege&#x27;s name and each *dictionary* value is a dictionary having the following fields:

`expiration_date`: <*integer*> privilege&#x27;s expiration date as UTC timestamp.

- `granted`: <*boolean*> whether that privilege is granted or not.

- `inherited_from`: <*string*> group name the permission is inherited from.

- `inherited_via`: <*string*> quota group where the permission is.

`profile_phrase`: <*string*> user&#x27;s profile phrase. Can be modified by the account&#x27;s owner.
`quotas`: <*dictionary*> user&#x27;s quota details. Only visible for the account&#x27;s owner and the user&#x27;s group&#x27;s admin. Can be modified by its group&#x27;s admin. Each dictionary key is a *string* representing quota name and each dictionary value is a *dictionary* containing the following fields:

- `allowed`: <*integer*> maximum allowed quota.

- `used`: <*integer*> consumed quota.

`reputation`: <*integer*> user&#x27;s community reputation.
`status`: <*string*> user&#x27;s status.
`user_since`: <*integer*> user&#x27;s join date as UTC timestamp.

User objectExample
`{
 "data": {
 "attributes": {
 "apikey": "<string>",
 "email": "<string>",
 "first_name": "<string>",
 "has_2fa": <bool>,
 "last_login": <int>,
 "last_name": "<string>",
 "preferences": {
 "<string>": {}
 },
 "privileges": {
 "<string>": {
 "expiration_date": <int>,
 "granted": <bool>,
 "inherited_from": "<string>",
 "inherited_via": "<string>"
 }
 },
 "profile_phrase": "<string>",
 "quotas": {
 "<string>": {
 "allowed": <int>,
 "used": <int>
 }
 },
 "reputation": <int>,
 "status": "<string>",
 "user_since": <int>
 },
 "id": "<string>",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/<id>"
 },
 "type": "user"
 }
}`
```
`{
 "data": {
 "attributes": {
 "apikey": "3333333t33333333333333r333333f333333g33333333c3333333f333333333a",
 "email": "[[email&#160;protected]](/cdn-cgi/l/email-protection)",
 "first_name": "Sabrina",
 "has_2fa": true,
 "last_login": 1594718163,
 "last_name": "Spellman",
 "preferences": {
 "graph": {
 "dashboard_walkthrough_version_seen": "1.0.0",
 "last_visit": 1594136453392,
 "main_walkthrough_version_seen": "1.0.0",
 "search_tooltip_version_seen": "1.0.0"
 },
 "ui": {
 "last_read_notification_date": 1594640566
 }
 },
 "privileges": {
 "admin": {
 "granted": false
 },
 "allinfo": {
 "granted": false
 },
 "big-files": {
 "expiration_date": 1601510400,
 "granted": true,
 "inherited_from": "blablabla_group",
 "inherited_via": "api_quota_group"
 },
 "cases": {
 "granted": true,
 "inherited_from": "blablabla_group",
 "inherited_via": "intelligence_quota_group"
 },
 "click_to_accept": {
 "granted": false
 }
 },
 "profile_phrase": "It&#x27;s witching hour!",
 "quotas": {
 "api_requests_daily": {
 "allowed": 1000000000,
 "used": 4
 },
 "api_requests_hourly": {
 "allowed": 60000000000,
 "used": 4
 },
 "api_requests_monthly": {
 "allowed": 1000000000,
 "used": 113
 },
 "cases_creation_monthly": {
 "allowed": 20,
 "used": 0
 },
 "intelligence_downloads_monthly": {
 "allowed": 0,
 "used": 5
 }
 },
 "reputation": 1,
 "status": "active",
 "user_since": 1557214525
 },
 "id": "spellman",
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/spellman"
 },
 "type": "user"
 }
}`
```

## Relationships[](#relationships)

In addition to the previously described attributes, User objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section.

The following table shows a summary of available relationships for user objects.

| Relationship | Description | Accessibility | Return object type |
| --- | --- | --- | --- |
| api_quota_group | Group from which the user consumes API quota. | Account owner and group admin. | A single [Group](/reference/group-object) object. |
| comments | Comments posted by the user. | Everyone. | A list of [Comments](/reference/comments). |
| graphs | VT Graphs the user is owner/editor/viewer of. | Everyone. | A list of [Graphs](/reference/graph-object). |
| groups | Groups the user belongs to. | Account owner. | A list of [Groups](/reference/group-object). |
| hunting_notifications | Hunting notifications for the user. | Account owner. | A list of [Hunting Notifications](/reference/hunting-notification-object). |
| hunting_notification_files | Flagged files in the user&#x27;s hunting notifications. | Account owner. | A list of [Files](/reference/files). |
| hunting_rulesets | Hunting rulesets editable by the user. | Account owner. | A list of [Hunting Rulesets](/reference/hunting-ruleset-object). |
| intelligence_quota_group | Group from which the user consumes intelligence quota. | Account owner and group admin. | A single [Group](/reference/group-object) object. |
| mentions | Comments mentioning the user. | Everyone. | A list of [Comments](/reference/comments). |
| retrohunt_jobs | User&#x27;s retrohunt jobs. | Account owner. | A list of [Retrohunt Jobs](/reference/retrohunt-job-object). |
| votes | User&#x27;s votes. | Everyone. | A list of [Votes](/reference/vote-object). |
| Collections | User&#x27;s collections. | Everyone. | A list of [Collections](/reference/collections-object). |

These relationships are detailed in the subsections below.