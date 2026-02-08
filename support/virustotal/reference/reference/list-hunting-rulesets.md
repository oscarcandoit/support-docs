---
title: "Get Livehunt rulesets"
source: "https://docs.virustotal.com/reference/list-hunting-rulesets"
scraped_at: "2026-02-08T06:35:37.948Z"
---

This endpoint returns the VT Hunting Livehunt rulesets viewable by the user making the request. A ruleset is viewable by a user either if it was created by the user or if it was shared with him by someone else. This endpoint is equivalent to `GET /users/{user}/hunting_rulesets`, where `{user}` is the username of the user owning the API key. In fact, if you look carefully at the example response below you&#x27;ll notice that the `self` and `next` links do not point to `/intelligence/hunting_rulesets` but to `/users/{user}/hunting_rulesets`

Example response
`{
 "data": [
 {
 "type": "hunting_ruleset",
 "id": "{id}",
 "links": {
 "self": "https://www.virustotal.com/api/v3/intelligence/hunting_rulesets/{id}"
 },
 "attributes": {
 "creation_date": 1523635880,
 "enabled": true,
 "limit": 1000,
 "modification_date": 1525263069,
 "name": "foo",
 "notification_emails": [],
 "rules": "rule foo {condition: false}"
 }
 },
 { .. ruleset 2 .. },
 { .. ruleset 3 .. },
 { .. ruleset 4 .. },
 ],
 "meta": {
 "cursor": "Cu0FCsACCpIC9xuRl9v..."
 },
 "links": {
 "self": "https://www.virustotal.com/api/v3/users/{user}/hunting_rulesets",
 "next": "https://www.virustotal.com/api/v3/users/{user}/hunting_rulesets?cursor=Cu0FCsACCpIC9xuRl9v..."
 }
}`
The `filter` parameter allows to filter the rulesets according to the values of certain attributes. For example you can get only the enabled rulesets with `enabled:true`. With `name:foo` and `rules:foo` you can search for rulesets having the word "foo" in their names or in the YARA rules respectively. Notice however that this only works with full words (words delimited by non-alphanumeric characters), if the ruleset&#x27;s name is "foobar" it won&#x27;t appear if you filter with `name:foo`. You can also filter the rulesets with the same tag, by using for example `filter=tag:auto`.

You can combine multiple filters separating them with spaces, for example: `filter=enabled:true name:foo`.

The `order` parameters control the order in which rulesets are returned, accepted orders are: `name`, `creation_date` and `modification_date`. You can prepend `+` and `-` suffixes to specify ascending and descending orders (examples: `name-`, `creation_date+`, ). If not suffix is specified the order is ascending by default.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!