---
title: "magic"
source: "https://docs.virustotal.com/reference/file-object-magic"
scraped_at: "2026-02-08T06:35:45.318Z"
---

`magic` gives a guess of the file type, based on a popular parsing tool from unix.

File type guess based on "magic" toolExample
```
`{
 "data": {
 ...
 "attributes" : {
 ...
 "magic": "<string>",
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "magic": "Mach-O fat file with 2 architectures"
 }
 }
}`
```