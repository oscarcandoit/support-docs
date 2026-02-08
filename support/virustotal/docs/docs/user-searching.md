---
title: "Searching for users"
source: "https://docs.virustotal.com/docs/user-searching"
scraped_at: "2026-02-08T06:19:18.360Z"
---

The VirusTotal group view includes a user listing. Displayed users can be filtered using the "*Search user*" text box found at the top of the users list.

*

You can use the following search modifiers to search for users matching certain criteria:

| | |
| --- | --- |
| **api_quota_group** | Display only the users that are consuming premium API quota licensed by the organization.
Example: api_quota_group:your_group_name* |
| **email** | Filter users based on their email address.
Example: *email:[[email&#160;protected]](/cdn-cgi/l/email-protection#086e6767486a697a266b6765)* |
| **first_name** | Filter users based on their first name. This is a fulltext search, you need to provide an entire word.
Example: *first_name:john* |
| **last_name** | Filter users based on their last name. This is a fulltext search, you need to provide an entire word.
Example: *last_name:snow* |
| **username** | Search for users with a given user name.
Example: *username:vtusername* |
| **Free text, no modifiers** | Search through any of the fields above. |

The most common usage will be free text searches to locate users by a given email address, name or user name.

**Updated about 2 months ago