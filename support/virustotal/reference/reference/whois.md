---
title: "Whois"
source: "https://docs.virustotal.com/reference/whois"
scraped_at: "2026-02-08T06:35:52.702Z"
---

Whois records associated with domains and IPs. They contain the following information:

- `first_seen_date`: date the whois record was first retrieved by VirusTotal. UTC timestamp.

- `last_updated`: updated date field extracted from the whois record. UTC timestamp.

- `whois_map`. dictionary containing all parsed fields from the whois. All keys and values are strings, if there are repeated fields in the whois information, these are appended in the same string using the `|` character as separator. All `Registrant *` data is anonymised to protect private people&#x27;s identities but can be used to pivot. All `* Date` fields are in `%Y-%m-%dT%H:%M:%SZ` [format](http://strftime.org/).

JSON
```
`{
 "attributes": {
 "first_seen_date": <int:timestamp>,
 "last_updated": <int:timestamp>,
 
 "whois_map": {
 "<string>": "<string>", ...
 }
 }
 "id": "<string>",
 "links": {
 "self": "<string>"
 },
 "type": "whois"
}`
```