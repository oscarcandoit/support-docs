---
title: "known_distributors"
source: "https://docs.virustotal.com/reference/file-object-known-distributors"
scraped_at: "2026-02-08T06:35:45.294Z"
---

The `known_distributors` attribute includes information about the file&#x27;s distributor. It combines data from multiple data sources such as the [NSRL](https://www.nist.gov/itl/ssd/software-quality-group/national-software-reference-library-nsrl). It contains the following fields:

- `data_sources`: <*list of strings*> data sources where the information was ingested from.

- `distributors`: <*list of strings*> companies distributing the file.

- `filenames`: <*list of strings*> names the file is distributed as.

- `links`: <*list of strings*> URLs to get more information about the file.

- `products`: <*list of strings*> products this file belongs to.

known_distributorsExample
```
`{
 "data": {
 "attributes": {
 "known_distributors": {
 "filenames": [
 "<string>"
 ],
 "products": [
 "<string>"
 ],
 "distributors": [
 "<string>"
 ],
 "links": [
 "<string>"
 ],
 "data_sources": [
 "<string>"
 ]
 }
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "known_distributors": {
 "filenames": [
 "fil3651F9A1764CF55617C54746C399DFA3",
 "fontawesome-webfont.woff2"
 ],
 "products": [
 "XenApp"
 ],
 "distributors": [
 "Microsoft",
 "Citrix Systems, Inc"
 ],
 "data_sources": [
 "Microsoft Corporation",
 "National Software Reference Library (NSRL)"
 ]
 }
 }
 }
}`
```