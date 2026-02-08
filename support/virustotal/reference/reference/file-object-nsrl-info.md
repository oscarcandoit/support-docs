---
title: "nsrl_info"
source: "https://docs.virustotal.com/reference/file-object-nsrl-info"
scraped_at: "2026-02-08T06:35:45.310Z"
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

`nsrl_info` is a dictionary only present for files in the [National Software Reference Library](http://www.nsrl.nist.gov/). These files have a `nsrl` tag (see `tag` attribute). The object contains two fields:

- `products`: <*list of strings*> contains the software products in which the given file was found.

- `filenames`: <*list of strings*> contains the filenames with which the file was found in any of these products.

NSRL informationExample
```
`{
 "data": {
 "attributes": {
 ...
 "nsrl_info": {
 "filenames": ["<strings>"],
 "products": ["<strings>"]
 },
 ...
 },
 ...
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "nsrl_info": {
 "filenames": [
 "NULL.TXT",
 "x0r.{kf",
 "x0r.{kc"
 ],
 "products": [
 "Quicken (Unknown)",
 "Linux Format Great Game Demos (Future Publishing)",
 "DISTROS GALORE Gentoo Linux 2005.0 and Ubuntu 5.04 (Future Publishing)",
 "Slackware Linux 10.1 (Linux Magazine)"
 ]
 }
 }
 }
}`
```