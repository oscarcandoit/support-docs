---
title: "packers"
source: "https://docs.virustotal.com/reference/file-object-packers"
scraped_at: "2026-02-08T06:35:45.328Z"
---

`packers` identifies packers used on Windows PE files by several tools and AVs. Keys are tool names and values are identified packers, both strings.

PEiD packer identifierExample
```
`{
 "data": {
 ...
 "attributes" : {
 ...
 "packers": {
 "<string>": "<string>", ...
 }
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "packers": {
 "F-PROT": "UPX",
 "PEiD": "UPX v0.89.6 - v1.02 / v1.05 -v1.22 (Delphi) stub"
 }
 }
 }
}`
```