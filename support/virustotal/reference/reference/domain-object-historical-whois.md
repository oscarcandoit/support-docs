---
title: "🔀 historical_whois"
source: "https://docs.virustotal.com/reference/domain-object-historical-whois"
scraped_at: "2026-02-08T06:35:44.223Z"
---

The *historical_whois* relationship returns a list of whois entries that have been associated with the domain at some moment in time.

This relationship can be retrieved using the [relationships API endpoint](/reference/domains-relationships). The response contains a list of [Whois](/reference/whois) objects.

JSONJSON
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "first_seen_date": 1570097077,
 "last_updated": 1568043544,
 "registrar_name": "MarkMonitor Inc.",
 "whois_map": {
 "Creation Date": "1997-09-15T04:00:00Z",
 "DNSSEC": "unsigned",
 "Domain Name": "FOO.COM",
 "Domain Status": "clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited | clientTransferProhibited https://icann.org/epp#clientTransferProhibited | clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited | serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited | serverTransferProhibited https://icann.org/epp#serverTransferProhibited | serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited",
 "Name Server": "NS1.FOO.COM | NS2.FOO.COM | NS3.FOO.COM | NS4.FOO.COM",
 "Registrar": "MarkMonitor Inc.",
 "Registrar Abuse Contact Email": "[[email&#160;protected]](/cdn-cgi/l/email-protection)",
 "Registrar Abuse Contact Phone": "+1.2011815110",
 "Registrar IANA ID": "292",
 "Registrar URL": "http://www.markmonitor.com",
 "Registrar WHOIS Server": "whois.markmonitor.com",
 "Registry Domain ID": "2111511_DOMAIN_COM-VRSN",
 "Registry Expiry Date": "2028-09-14T04:00:00Z",
 "Updated Date": "2019-09-09T15:39:04Z"
 }
 },
 "id": "c84752a4b19aa80c1a05a180f1cd107413e42b13071f4a1d73d1aa51fba101eb",
 "links": {
 "self": "https://www.virustotal.com/api/v3/whois/c84752a4b19aa80c1a05a180f1cd107413e42b13071f4a1d73d1aa51fba101eb"
 },
 "type": "whois"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/domains/foo.com/historical_whois?limit=10"
 },
 "meta": {
 "count": 1
 }
}`
```