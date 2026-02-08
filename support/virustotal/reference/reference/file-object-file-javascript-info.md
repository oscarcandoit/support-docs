---
title: "javascript_info"
source: "https://docs.virustotal.com/reference/file-object-file-javascript-info"
scraped_at: "2026-02-08T06:35:45.420Z"
---

`javascript_info` returns information about [Javascript files](https://en.wikipedia.org/wiki/JavaScript). It contains the following fields:

- `tags`: <*list of strings*> interesting elements in the code. Can be any of:

`aes-encoded`

- `Aes.Ctr.decrypt`

- `charAt`

- `charCodeAt`

- `document.getElementById`

- `document.write`

- `eval`

- `eval+unescape`

- `fromCharCode`

- `location`

- `malformed`

- `Math`

- `obfuscated`

- `ParseInt`

- `replace`

- `substr`

- `unescape`

- `write`

- `write+unescape`

Javascript informationExample
```
`{
 "data": {
 "attributes": {
 "javascript_info": {
 "tags": ["<string>", ...]
 }
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "javascript_info": {
 "tags": [
 "document.getElementById",
 "unescape",
 "charAt",
 "charCodeAt",
 "replace",
 "write",
 "substr",
 "location",
 "eval",
 "Math",
 "fromCharCode"
 ]
 }
 }
 }
}`
```