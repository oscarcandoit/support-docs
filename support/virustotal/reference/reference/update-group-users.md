---
title: "Add users to a group"
source: "https://docs.virustotal.com/reference/update-group-users"
scraped_at: "2026-02-08T06:35:42.288Z"
---

Update the group&#x27;s user list. User emails must be used, if a username is used a 400 error is returned.

No users are removed by using this endpoint. To remove group membership from a certain user, use [DELETE/groups/{id}/relationships/users/{user_id}](/reference/delete-user-from-group).

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!