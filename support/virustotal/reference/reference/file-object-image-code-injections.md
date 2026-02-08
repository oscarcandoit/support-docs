---
title: "image_code_injections"
source: "https://docs.virustotal.com/reference/file-object-image-code-injections"
scraped_at: "2026-02-08T06:35:45.359Z"
---

`image_code_injections` returns content of code injection inside image files.

image code injectionExample
```
`{
 "data": {
 ...
 "attributes" : {
 ...
 "image_code_injections": "<string>"
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "image_code_injections": "?><script src=\"http://j56.gr/bin/s.js\"></script>"
 }
 }
}`
```