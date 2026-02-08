---
title: "Groups"
source: "https://docs.virustotal.com/reference/group-object"
scraped_at: "2026-02-08T06:35:48.271Z"
---

The Group objects describes groups of users in VirusTotal. Groups are used to share API privileges between a set of users, for example, users belonging to the same company.

## Object Attributes[](#object-attributes)

A Group object contains the following attributes:

- `auto_add_users`: <*list of strings*> contains a list of emails that will be automatically added to this group when they create a VirusTotal account. Patterns can be used too. Only visible for the group&#x27;s admins.

- `country`: <*string*> group&#x27;s country. Only visible for the group&#x27;s members and admins.

- `country_iso`: <*string*> group&#x27;s country ISO code. Only visible for the group&#x27;s members and admins.

- `domain_name`: <*string*> group&#x27;s domain name. Only visible for the group&#x27;s members and admins.

- `industry`: <*string*> group&#x27;s industry. Only visible for the group&#x27;s members and admins.

- `agreement_signed_date`: <*integer*> agreement signed date as UTC timestamp. Only visible for the group&#x27;s members and admins.

- `organization`: <*string*> company name.

- `organization_legal_name`: <*string*> company legal name.

- `preferences`: <*dictionary*> VirusTotal group&#x27;s preferences. Only visibile for the group&#x27;s members and admins. Every subitem is a dictionary having a string as key.

- `privileges`: <*dictionary*> group&#x27;s granted privileges. Only visibile for the group&#x27;s members and admins. Each dictionary key is a *string* representing the privilege&#x27;s name and each value is a *dictionary* having the following fields:

`expiration_date`: <*integer*> privilege&#x27;s expiration date as UTC timestamp.

- `granted`: <*boolean*> whether that privilege is granted or not.

`quotas`: <*dictionary*> group&#x27;s quota details. Only visible for the group&#x27;s members and admins. Each dictionary key is a *string* representing quota name and each *value* is a dictionary containing the following fields:

- `allowed`: <*integer*> maximum allowed quota.

- `used`: <*integer*> consumed quota.

Group objectExample
`{
 "data": {
 "attributes": {
 "auto_add_users": ["<string>"],
 "contact_emails": [
 "<string>"
 ],
 "country": "<string>",
 "country_iso": "<string>",
 "domain_name": "<string>",
 "organization": "<string>",
 "organization_legal_name": "<string>",
 "preferences": {
 "<string>": {}
 },
 "privileges": {
 "<string>": {
 "expiration_date": <integer>,
 "granted": <boolean>
 }
 },
 "quotas": {
 "<string>": {
 "allowed": <integer>,
 "used": <integer>
 }
 }
 },
 "context_attributes": {
 "role": "<string>"
 },
 "id": "<string>",
 "links": {
 "self": "https://www.virustotal.com/api/v3/groups/<id>"
 },
 "type": "group"
 }
}`
```
`{
 "data": {
 "attributes": {
 "auto_add_users": [
 "*@blabla.com"
 ],
 "country": "United States",
 "country_iso": "US",
 "domain_name": "blablabla.com",
 "organization": "Company Inc.",
 "preferences": {},
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
 "quotas": {
 "api_requests_daily": {
 "allowed": 1000,
 "used": 0
 },
 "api_requests_hourly": {
 "allowed": 60000,
 "used": 0
 },
 "api_requests_monthly": {
 "allowed": 30000,
 "used": 68
 },
 "cases_creation_monthly": {
 "allowed": 20,
 "used": 0
 }
 }
 },
 "context_attributes": {
 "role": "user"
 }
 "id": "company",
 "links": {
 "self": "https://www.virustotal.com/api/v3/groups/company"
 },
 "type": "group"
 }
}`
```

## Relationships[](#relationships)

In addition to the previously described attributes, Group objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section.

The following table shows a summary of available relationships for group objects.

| Relationship | Description | Accessibility | Return object type |
| --- | --- | --- | --- |
| administrators | Group administrators | Group Members | List of [Users](/reference/user-object) |
| graphs | Graphs created by group members | Group Members | List of [Graphs](/reference/graph-object) |
| users | Group members | Group Members | List of [Users](/reference/user-object) |
| service_accounts | Group service accounts | Group Members | List of [Service Accounts](/reference/service-accounts-object) |

These relationships are detailed in the subsections below.