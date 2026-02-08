---
title: "trid"
source: "https://docs.virustotal.com/reference/file-object-trid"
scraped_at: "2026-02-08T06:35:45.926Z"
---

`trid`: [TrID](http://mark0.net/soft-trid-e.html) is a utility designed to identify file types from their binary signatures. It may give several detections, ordered by higher to lower probability of file format identification (given as percentage).

TRiDExample
```
`{
 "data": {
 ...
 "attributes" : {
 ...
 "trid": [
 {"file_type": "<string>", "probability": <float>}, ... 
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "trid": [
 {
 "file_type": "iOS Application",
 "probability": 39.6
 },
 {
 "file_type": "Sweet Home 3D design (generic)",
 "probability": 20.7
 },
 {
 "file_type": "Mozilla Firefox browser extension",
 "probability": 15.8
 },
 {
 "file_type": "Mozilla Archive Format (gen)",
 "probability": 13.8
 },
 {
 "file_type": "ZIP compressed archive",
 "probability": 7.9
 }
 ]
 }
 }
}`
```