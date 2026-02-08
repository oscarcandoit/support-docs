---
title: "crowdsourced_yara_results"
source: "https://docs.virustotal.com/reference/file-object-crowdsourced-yara-results"
scraped_at: "2026-02-08T06:35:44.739Z"
---

YARA matches for the file. Every item on the list contains the following attributes:

- `author`: <*string*> rule author.

- `description`: <*string*> matched rule description.

- `match_in_subfile`: <*boolean*> whether the match was in a [subfile](/reference/file-object-bundled-files) or not.

- `rule_name`: <*string*> matched rule name.

- `ruleset_id`: <*string*> VirusTotal&#x27;s ruleset ID. You can use this ID to fetch the ruleset info in the [/api/v3/yara_rulesets/{id}](/reference/get-yara-rulesets) endpoint.

- `ruleset_name`: <*string*> matched rule&#x27;s ruleset name.

- `source`: <*string*> ruleset source.