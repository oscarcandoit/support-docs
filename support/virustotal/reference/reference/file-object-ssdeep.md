---
title: "ssdeep"
source: "https://docs.virustotal.com/reference/file-object-ssdeep"
scraped_at: "2026-02-08T06:35:45.906Z"
---

`ssdeep` is a program for computing [Context Triggered Piecewise Hashes](https://ssdeep-project.github.io/ssdeep/index.html). Also called fuzzy hashes, it allows identifying similar files by comparing (via Edit Distance) their hashes.

ssdeepExample
```
`{
 "data": {
 ...
 "attributes" : {
 ...
 "ssdeep": "<string>"
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "ssdeep": "98504:G5j6i51u5gM0P5kv5GzH5AY5NfrL5sZte5vw5CA:e5AA5i5vw"
 }
 }
}`
```