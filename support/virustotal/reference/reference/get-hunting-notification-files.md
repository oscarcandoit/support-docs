---
title: "Retrieve file objects for Livehunt notifications"
source: "https://docs.virustotal.com/reference/get-hunting-notification-files"
scraped_at: "2026-02-08T06:35:39.222Z"
---

> ❗️
> ### Important[](#important)
> 
> 
> Hunting notifications files are no longer showed in the web interface. Use the [/api/v3/ioc_stream](/reference/get-objects-from-the-ioc-stream) endpoint instead to retrieve objects from IoC-Stream notifications.
> 
> 

Each file object returned, *in addition to all the file details*, has a `context_attributes` property that contains information about the VT Hunting Livehunt notification tied to the file, this is an example:

Example context attributes for a matching file
`"context_attributes": {
 "match_in_subfile": false,
 "notification_date": 1543301214,
 "notification_id": "961092289288866-4582222113734656-3c7f77cc43338e14824c111671beef30",
 "notification_snippet": "00 61 64 64 41 75 64 69 6F [...]",
 "notification_source_key": "b3190c38",
 "notification_tags": [
 "bozok",
 "rats",
 "a2d2906f7ad5265165c25baed76d342b48b8bc5f4d9db6004e9e6dd72eaea4e1"
 ],
 "ruleset_id": "5706526672224256",
 "ruleset_name": "rats",
 "rule_name": "Bozok",
 "rule_tags": [],
}`
Other than that, the `filter` parameter allows to filter the matching files according to the VT Hunting Livehunt notification properties. You can filter by the name of the matching rule, match date, rule namespace, ruleset or file hash. Notice however that this only works with the exact keyword, not substrings of it.

For more information check the [user&#x27;s hunting_notification_files relationship](/reference/user-hunting_notification_files).

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!