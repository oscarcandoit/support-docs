---
title: "Activity Log"
source: "https://docs.virustotal.com/reference/activity-log"
scraped_at: "2026-02-08T06:35:42.025Z"
---

The Activity Log objects provide a time-stamped record of user and system activities within the platform.

These are the object attributes:

- `info.user`: <*string*>: Identifier of the user that was affected by the action

- `ip`: <*string*>: The IP address from which the user performed the action

- `date`: <*string*>: UTC action timestamp

- `action`: <*string*>: Logged action such as: Remove admin from group, Add admin to group, etc

Activity Log object
```
`{
 "id": "<_string_>",
 "type": "activity_log_entry",
 "links": {
 "self": "https://www.virustotal.com/api/v3/activity_log_entries/<_string_>"
 },
 "attributes": {
 "info": {
 "user": "<_string_> "
 },
 "ip": "<_string_>",
 "date": "<int:timestamp>",
 "action": "<_string_>"
 }
}`
```