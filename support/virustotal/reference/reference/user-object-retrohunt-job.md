---
title: "🔀🧑‍💻 retrohunt_jobs"
source: "https://docs.virustotal.com/reference/user-object-retrohunt-job"
scraped_at: "2026-02-08T06:35:52.600Z"
---

The *retrohunt_jobs* relationship returns a list of ***a given user&#x27;s retrohunt jobs.*** This relationship is only visible for the account&#x27;s owner.

This relationship can be retrieved by using the [relationships API endpoint](/reference/users-relationships) and returns a list of [Retrohunt Job](/reference/retrohunt-job-object) objects.

/users/{id}/retrohunt_jobsExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "corpus": "main",
 "creation_date": 1598966772,
 "eta_seconds": 51830,
 "notification_email": "[[email&#160;protected]](/cdn-cgi/l/email-protection)",
 "num_matches": 53,
 "num_matches_outside_time_range": 0,
 "progress": 62.06203,
 "rules": "/*\n Template YARA ruleset\n*/\nrule yara_template\n{\n strings:\n $a = \"VirusTotal\"\n condition:\n all of them\n}",
 "scanned_bytes": 408163509658865,
 "start_date": 1598966777,
 "status": "running"
 },
 "id": "spellman-1598966772",
 "links": {
 "self": "https://www.virustotal.com/api/v3/intelligence/retrohunt_jobs/spellman-1598966772"
 },
 "type": "retrohunt_job"
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/users/spellman/retrohunt_jobs?cursor=C38KGg3NY3J3YXRpb25f4GltZ4IJCI4fpKW4s-4CEj4qEX6N-d6lydX60b36hbGN6b3V6cig6EgpI6W50a65nSm6iIh6qZXN6c3Rv6GVkYW6vLTE16TgyN6U0N6UMG6AgAQ63D%3D&limit=1",
 "self": "https://www.virustotal.com/api/v3/users/spellman/retrohunt_jobs?limit=1"
 },
 "meta": {
 "count": 59,
 "cursor": "C38KGg3NY3J3YXRpb25f4GltZ4IJCI4fpKW4s-4CEj4qEX6N-d6lydX60b36hbGN6b3V6cig6EgpI6W50a65nSm6iIh6qZXN6c3Rv6GVkYW6vLTE16TgyN6U0N6UMG6AgAQ6""
 }
}`
```