---
title: "monitor_info"
source: "https://docs.virustotal.com/reference/file-object-monitor-info"
scraped_at: "2026-02-08T06:35:45.301Z"
---

> 🚧
> ### Deprecated[](#deprecated)
> 
> 
> This field is deprecated. Use [known_distributors](#known_distributors) instead.
> 
> 
> The field will be removed from the API on January 1st 2022.
> 
> 

`monitor_info` contains information extracted from our VT Monitor service. Indicates that this file is present in a VirusTotal Monitor collection.

- `filenames`: <*list of strings*> all different filenames the file has been submitted under.

- `organizations`: <*list of strings*> organization names who uploaded the file.

monitor_infoExample
```
`{
 "data": {
 "attributes": {
 "monitor_info": {
 "filenames": [
 "<strings>"
 ],
 "organizations": [
 "<strings>"
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "monitor_info": {
 "filenames": [
 "testfilename"
 ],
 "organizations": [
 "Example Inc."
 ]
 },
 }
}`
```