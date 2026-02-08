---
title: "files_copied"
source: "https://docs.virustotal.com/reference/file-behaviour-object-files-copied"
scraped_at: "2026-02-08T06:35:48.330Z"
---

`files_copied` contains a list of files that were copied from one location to another. It is a list, every item of the list containing the following fields:

- `destination` <*string*> full path of the destination file.

- `source` <*string*> full path of the source file.

Copied filesExample
```
`{
 "data": {
 "attributes": {
 "files_copied": [
 {
 "destination": "<string>",
 "source": "<string>"
 },...
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "files_copied": [
 {
 "destination": "C:\\Program Files (x86)\\blablabla\\blablabla.exe",
 "source": "C:\\Users\\FD1HVy\\Downloads\\blablabla.exe"
 }
 ]
 }
 }
}`
```