---
title: "Update a Livehunt ruleset"
source: "https://docs.virustotal.com/reference/modify-hunting-ruleset"
scraped_at: "2026-02-08T06:35:37.982Z"
---

JSON
`{
 "data": {
 "type": "hunting_ruleset",
 "id": "{id}",
 "attributes": {
 "enabled": true,
 "limit": 10,
 "name": "bar",
 "notification_emails": ["[[email&#160;protected]](/cdn-cgi/l/email-protection)"],
 "rules": "rule foo {condition: false}"
 }
 }
}`
Returns the updated [Hunting Ruleset](/reference/hunting-ruleset-object) object.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!