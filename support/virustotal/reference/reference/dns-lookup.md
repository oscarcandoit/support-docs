---
title: "dns_lookups"
source: "https://docs.virustotal.com/reference/dns-lookup"
scraped_at: "2026-02-08T06:35:48.311Z"
---

**`dns_lookups` attribute contains a list of domain name resolutions performed** by a given file. It is a *list of dictionaries*, each one containing the following fields:

- `hostname` <*string*>: hostname of DNS query.

- `resolved_ips` <*list of strings*>: all resolved IP addresses, may be empty on NX domain.

DNS lookupsExample
```
`{
 "data": {
 "attributes": {
 "dns_lookups": [
 {
 "hostname": "<string>",
 "resolved_ips": [
 "<string>",...
 ]
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
 "dns_lookups": [
 {
 "hostname": "blablabla.com",
 "resolved_ips": [
 "66.66.66.66"
 ]
 },
 {
 "hostname": "example.com",
 }
 ]
 }
 }
}`
```