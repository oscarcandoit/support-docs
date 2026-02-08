---
title: "Create a new Livehunt ruleset"
source: "https://docs.virustotal.com/reference/create-hunting-ruleset"
scraped_at: "2026-02-08T06:35:37.997Z"
---

This endpoint creates a new VT Hunting Livehunt ruleset. The request&#x27;s body must have the following structure:

Example request
`{
 "data": {
 "type": "hunting_ruleset",
 "attributes": {
 "name": "foobar",
 "enabled": true,
 "limit": 100,
 "rules": "rule foobar { strings: $ = \"foobar\" condition: all of them }",
 "notification_emails": ["[[email&#160;protected]](/cdn-cgi/l/email-protection)", "[[email&#160;protected]](/cdn-cgi/l/email-protection)"],
 "match_object_type": "file"
 }
 }
}`
Use the `match_object_type` to specify the expected entity kind to match with this ruleset. Allowed values are `file`, `url`, `domain` and `ip`.

The `name` and `rules` attributes are required, the remaining ones are optional.

Example response
```
`{
 "type": "hunting_ruleset",
 "id": "{id}",
 "links": {
 "self": "https://www.virustotal.com/api/v3/intelligence/hunting_ruleset/{id}"
 },
 "data": {
 "attributes": {
 "name": "foobar",
 "enabled": true,
 "limit": 100,
 "creation_date": 1521016318,
 "modification_date": 1521016318,
 "number_of_rules": 1,
 "rules": "rule foobar { strings: $ = \"foobar\" condition: all of them }",
 "notification_emails": ["[[email&#160;protected]](/cdn-cgi/l/email-protection)"],
 "match_object_type": "file"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!