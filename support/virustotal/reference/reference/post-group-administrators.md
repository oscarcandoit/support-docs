---
title: "Grant group admin permissions to a list of users"
source: "https://docs.virustotal.com/reference/post-group-administrators"
scraped_at: "2026-02-08T06:35:41.555Z"
---

Update group administrator list. User emails must be used. If a username is used, a 400 error is returned.

No admins are removed by using this endpoint. To revoke admin privileges from a certain user, use [DELETE/groups/{id}/relationships/administrators/{user_id}](/reference/delete-user-group-administrator).

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!