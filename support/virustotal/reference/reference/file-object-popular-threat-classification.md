---
title: "popular_threat_classification"
source: "https://docs.virustotal.com/reference/file-object-popular-threat-classification"
scraped_at: "2026-02-08T06:35:45.971Z"
---

`popular_threat_classification` extracts human readable names extracted from AV verdicts and clustering hashes. It contains the following fields:

- `popular_threat_name`: <*list of dictionaries*> dictionaries where &#x27;value&#x27; is a token and &#x27;count&#x27; is how many AV engines had said token. The dictionaries are sorted in decreasing frequency.

- `popular_threat_category`: <*list of dictionaries*> similar to popular_threat_name but these tokens are considered more generic or, in other words, categories of malware, instead of individual families. Unlike popular_threat_name, popular_threat_category is somewhat normalized. E.g.: &#x27;ransom&#x27; becomes &#x27;ransomware&#x27;.

- `suggested_threat_label`: <*string*> a string combining part of popular_threat_category and popular_threat_name.

Popular threat classificationExample
```
`{
 "data": {
 ...
 "attributes": {
 ...
 "popular_threat_classification": {
 "suggested_threat_label": <string>,
 "popular_threat_category": [
 {
 "count": <int>,
 "value": <string>
 },
 ...
 ],
 "popular_threat_name": [
 {
 "count": <int>,
 "value": <string>
 },
 ...
 ]
 },
 }
 }
}`
```

```
`{
 "data": {
 ...
 "attributes": {
 ...
 "popular_threat_classification": {
 "suggested_threat_label": "adware.jatift/machaer",
 "popular_threat_category": [
 {
 "count": 8,
 "value": "adware"
 }
 ],
 "popular_threat_name": [
 {
 "count": 8,
 "value": "jatift"
 },
 {
 "count": 7,
 "value": "machaer"
 },
 {
 "count": 4,
 "value": "mailru"
 }
 ]
 }
 }
 }
}`
```