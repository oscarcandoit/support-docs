---
title: "Domain search modifiers"
source: "https://docs.virustotal.com/docs/domain-search-modifiers"
scraped_at: "2026-02-08T06:19:20.919Z"
---

[VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) allows you to perform advanced faceted searches over the historical collection of domains seen by VirusTotal. These searches can act on basically all the metadata generated for domains: categories, popularity ranks, SSL certificates, Whois lookup, resolutions, detections, relationships, etc. For example, you can pivot on the registrant (Whois) of a given domain to try to identify other network infrastructure set up by a given adversary. 

VirusTotal Intelligence searches by default over the historical collection of files, **in order to search over domains you need to add the facet condition entity:domain**. For example, let&#x27;s ask for all those domains that have been detected by more than 5 blocklists and were created after February 10th 2020:

[entity:domain positives:5+ creation_date:2020-02-10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520positives%253A5%252B%2520creation_date%253A2020-02-10%252B/domains)

You can click on the filter icon inside the main search box in order to navigate to a domain search assistant:

*

Note that the assistant will not allow you to build complex searches combining **AND, OR and NOT** conditions. For example:

[(entity:domain positives:5+ creation_date:2020-02-10+) AND (domain:*chase OR domain:*paypal*)](https://www.virustotal.com/gui/search/(entity%253Adomain%2520positives%253A5%252B%2520creation_date%253A2020-02-10%252B)%2520AND%2520(domain%253A*chase*%2520OR%2520domain%253A*paypal*)/domains)

The following table describes all the search modifiers (facets) that can be used, you can combine any number of them:

| Modifier | Description |
| --- | --- |
| **domain** | Search for domains containing a word or fulltext sequence. Accepts wildcard notation.
Examples: [entity:domain domain:chase p:5+](https://www.virustotal.com/gui/search/entity%253Adomain%2520domain%253Achase%2520p%253A5%252B/domains), [entity:domain domain:"*chase*" p:5+](https://www.virustotal.com/gui/search/entity%253Adomain%2520domain%253A%2522*chase*%2522%2520p%253A5%252B/domains) |
| **tld** | Fix a condition based on the domain&#x27;s TLD.
Example: [entity:domain tld:ru](https://www.virustotal.com/gui/search/entity%253Adomain%2520tld%253Aru) |
| **depth** | Fix a condition on how many levels the domains matching your search should have. Accepts less than and greater than syntax.
Example: [entity:domain p:5+ depth:3+ depth:7-](https://www.virustotal.com/gui/search/entity%253Adomain%2520p%253A5%252B%2520depth%253A3%252B%2520depth%253A7-/domains) |
| **a_record** 
**a** | Search for domains that resolve to a given IP address (range). Note that this is not the recommended way to leverage VirusTotal passive DNS data, if you want to know all domains observed behind a given IP address you should be looking up such IP address in VirusTotal, making use of the *relations* tab. This modifier should only be used for IP address ranges.
Example: [entity:domain a_record:"127.0.0.1/24"](https://www.virustotal.com/gui/search/entity%253Adomain%2520a_record%253A%2522127.0.0.1%252F24%2522/domains) |
| **a_ttl** 
**a_record_ttl** | Search for domains whose resolution have a given TTL, accepts less than and greater than syntax. This can be useful in identifying [fast flux](https://en.wikipedia.org/wiki/Fast_flux).
Example: [entity:domain a_record_ttl:1+ a_record_ttl:5- category:malware](https://www.virustotal.com/gui/search/entity%253Adomain%2520a_record_ttl%253A1%252B%2520a_record_ttl%253A5-%2520category%253Amalware/domains) |
| **aaaa** 
**aaaa_record** | Same as *a_record* but for IPv6. Please refer to the *a_record* description. |
| **aaaa_ttl** 
**aaaa_record_ttl** | Same as *a_record_ttl* but for IPv6, please refer to the aforementioned description. |
| **caa** 
**caa_record** | DNS Certification Authority Authorization is an Internet security policy mechanism which allows domain name holders to indicate to certificate authorities whether they are authorized to issue digital certificates for a particular domain name. This modifier allows you to search for any word or phrase contained in the DNS CAA record.
Example: [entity:domain caa_record:google](https://www.virustotal.com/gui/search/entity%253Adomain%2520caa_record%253Agoogle/domains) |
| **cname**
**cname_record** | CNAME is a Canonical Name Record or Alias Record. A type of resource record in the Domain Name System (DNS), that specifies that one domain name is an alias of another canonical domain name. This modifier allows you to search for any word or phrase contained in the DNS CNAME record.
Example: [entity:domain cname:appspot.com](https://www.virustotal.com/gui/search/entity%253Adomain%2520cname%253Aappspot.com/domains) |
| **cname_ttl** 
**cname_record_ttl** | Same as *a_record_ttl* but for the CNAME DNS record. |
| **dname** 
**dname_record** | DNS record to perform redirection at the DNS level. This modifier allows you to search for any word or phrase contained in DNAME records.
Example: [entity:domain dname:"apple.com"](https://www.virustotal.com/gui/search/entity%253Adomain%2520dname%253A%2522apple.com%2522/domains) |
| **dname_ttl** 
**dname_record_ttl** | Same as *a_record_ttl* but for the DNAME DNS record. |
| **mx** 
**mx_record** | An MX record is used to tell the world which mail servers accept incoming mail for your domain and where emails sent to your domain should be routed to. This modifier allows you to search for any word or phrase contained in MX records.
Example: [entity:domain mx_record:"francedns.com"](https://www.virustotal.com/gui/search/entity%253Adomain%2520mx_record%253A%2522francedns.com%2522/domains) |
| **mx_ttl** 
**mx_record_ttl** | Same as *a_record_ttl* but for the MX DNS record. |
| **ns** 
**ns_record** | DNS NS records indicate which DNS server is authoritative for that domain (which server contains the actual DNS records). This modifier allows you to search for any word or phrase contained in an NS record.
Example: [entity:domain ns_record:ekiptech.com](https://www.virustotal.com/gui/search/entity%253Adomain%2520ns_record%253Aekiptech.com/domains) |
| **ns_ttl** 
**ns_record_ttl** | Same as *a_record_ttl* but for the NS DNS record. |
| **soa** 
**soa_record** | A Start of Authority DNS record is a type of resource record in the Domain Name System containing administrative information about the zone, especially regarding zone transfers. This modifier allows you to search for any word or phrase contained in domain SOA records.
Example: [entity:domain soa_record:google.com](https://www.virustotal.com/gui/search/entity%253Adomain%2520soa_record%253Agoogle.com/domains) |
| **txt** 
**txt_record** | A TXT record is a type of DNS resource record used to provide the ability to associate arbitrary text with a host or other name, such as human readable information about a server, network, data center, or other accounting information.
Example: [entity:domain txt_record:"topdns.com"](https://www.virustotal.com/gui/search/entity%253Adomain%2520txt_record%253A%2522topdns.com%2522/domains) |
| **txt_ttl** 
**txt_record_ttl** | Same as *a_record_ttl* but for TXT DNS record. |
| **ttl** | Focus on domains that have at least one DNS record TTL matching your criteria. Accepts less than and greater than syntax.
Example: [entity:domain ttl:1+ ttl:5-](https://www.virustotal.com/gui/search/entity%253Adomain%2520ttl%253A1%252B%2520ttl%253A5-/domains) |
| **category** | Filter domains according to their content category, as displayed in the details section of a domain report.
Example: [entity:domain category:"malware command and control"](https://www.virustotal.com/gui/search/entity%253Adomain%2520category%253A%2522malware%2520command%2520and%2520control%2522/domains) |
| **comment** | Search for domains that have a VirusTotal Community comment containing the word or phrase provided.
Example: [entity:domain comment:phishing](https://www.virustotal.com/gui/search/entity%253Adomain%2520comment%253Aphishing/domains) |
| **comment_author** | Search for domains that have been commented by the user with the username provided.
Example: [entity:domain comment_author:hugoklugman](https://www.virustotal.com/gui/search/entity%253Adomain%2520comment_author%253Ahugoklugman/domains) |
| **creation_date** | Filter domains based on the creation date as reported by the registration details. Accepts less than and greater than syntax.
Examples: [entity:domain creation_date:2020-02-10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520creation_date%253A2020-02-10%252B/domains), [entity:domain creation_date:2020-02-10-,](https://www.virustotal.com/gui/search/entity%253Adomain%2520creation_date%253A2020-02-10-/domains) [entity:domain creation_date:3d-](https://www.virustotal.com/gui/search/entity%253Adomain%2520creation_date%253A3d-/domains) |
| **last_update_date** | Filter domains based on the latest registration update. Accepts less than and greater than syntax.
Examples: [entity:domain p:5+ last_update_date:2020-02-10+,](https://www.virustotal.com/gui/search/entity%253Adomain%2520p%253A5%252B%2520last_update_date%253A2020-02-10%252B/domains) [entity:domain last_update_date:3d-](https://www.virustotal.com/gui/search/entity%253Adomain%2520last_update_date%253A3d-/domains) |
| **main_icon_dhash** | Search for domains with a favicon which is visually similar to another favicon, a visual similarity hash is used for this purpose. This search can be triggered by clicking on the favicon preview of the domain in the search listings. Can be useful to discover phishing sites targeting a given company. However, note that this search will work better for URL entities, as phishing kits are often deployed and subpaths and hence the favicon will not be globally tied to the bare domain.
Example: [entity:domain main_icon_dhash:"cc8cccccaae070b2" NOT domain:"dropbox.com" NOT domain:"dropboxforum.com"](https://www.virustotal.com/gui/search/entity%253Adomain%2520main_icon_dhash%253A%2522cc8cccccaae070b2%2522%2520NOT%2520domain%253A%2522dropbox.com%2522%2520NOT%2520domain%253A%2522dropboxforum.com%2522/domains) |
| **popularity_rank** | Filter domains according to their popularity rank. Accepts less than and greater than syntax. A popularity rank of 1 means that it is the most popular domain as reported by one of the ranks aggregated.
Example: [entity:domain popularity_rank:10-](https://www.virustotal.com/gui/search/entity%253Adomain%2520popularity_rank%253A10-) |
| **p** 
**positives** | Filter domains according to the number of engines/blocklists that detect them. Less than and greater than syntax is allowed.
Examples: [entity:domain p:5+](https://www.virustotal.com/gui/search/entity%253Adomain%2520p%253A5%252B/domains) |
| **engines** | Focus on domains that have a given detection label by at least one blocklist/scanner.
Example: [entity:domain engines:phishing](https://www.virustotal.com/gui/search/entity%253Adomain%2520engines%253Aphishing/domains) |
| ***<engine name>*** | Focus on domains that are detected with a given label by a given blocklist/scanner.
Example: [entity:domain fortinet:malware](https://www.virustotal.com/gui/search/entity%253Adomain%2520fortinet%253Amalware/domains) |
| **reputation** | Filter domains according to their reputation among the VirusTotal user base.
Example: [entity:domain reputation:-20-](https://www.virustotal.com/gui/search/entity%253Adomain%2520reputation%253A-20-/domains) |
| **detected_communicating_files_count** | Fix a condition based on how many detected files have been seen contacting the given domain when executed in a sandbox. Less than and greater than syntax is allowed but the count saturates at 100.
Example: [entity:domain detected_communicating_files_count:5+](https://www.virustotal.com/gui/search/entity%253Adomain%2520detected_communicating_files_count%253A5%252B/domains) |
| **communicating_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that communicate with a given domain.
Example: [entity:domain communicating_files_max_detections:30+ detected_communicating_files_count:5+](https://www.virustotal.com/gui/search/entity%253Adomain%2520communicating_files_max_detections%253A30%252B%2520detected_communicating_files_count%253A5%252B/domains) |
| **detected_downloaded_files_count** | Fix a condition based on how many detected files VirusTotal has downloaded from a URL hosted under a given domain.
Example: [entity:domain detected_downloaded_files_count:10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520detected_downloaded_files_count%253A10%252B) |
| **downloaded_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that were downloaded by VirusTotal from a given domain.
Example: [entity:domain downloaded_files_max_detections:20+](https://www.virustotal.com/gui/search/entity%253Adomain%2520downloaded_files_max_detections%253A20%252B/domains) |
| **detected_referring_files_count** | Fix a condition based on how many detected files have been seen containing the given domain in their strings. 
Example: [entity:domain detected_referring_files_count:10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520detected_referring_files_count%253A10%252B) |
| **referring_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that contain a given domain in their strings.
Example: [entity:domain referring_files_max_detections:30+ detected_referring_files_count:10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520referring_files_max_detections%253A30%252B%2520detected_referring_files_count%253A10%252B/domains) |
| **detected_urls_count** | Fix a condition based on how many detected URLs have been seen hosted under a given domain.
Example: [entity:domain detected_urls_count:10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520detected_urls_count%253A10%252B/domains) |
| **urls_max_detections** | Fix a condition based on the maximum number of detections observed for URLs hosted under a given domain.
Example: [entity:domain urls_max_detections:5+ detected_urls_count:10+](https://www.virustotal.com/gui/search/entity%253Adomain%2520urls_max_detections%253A5%252B%2520detected_urls_count%253A10%252B/domains) |
| **tag** | Filter domains according to their tags.
Example: [entity:domain tag:dga category:bot](https://www.virustotal.com/gui/search/entity%253Adomain%2520tag%253Adga%2520category%253Abot/domains)
List of available tags:
 - ***dga:*** bigram frequency analysis suggests that this could be an algorithmically generated domain.
 - ***hex:*** domain name contains a long hex character sequence, often used in rock phish campaigns.
 - ***non-ascii:*** domain name contains non-ascii characters, e.g. punycode.
 - ***dynamic-dns:*** domain set up with a [dynamic DNS](https://en.wikipedia.org/wiki/Dynamic_DNS) provider.
 - ***nxdomain:*** domain that cannot be resolved to an IP Address. 
*For a complete list of tags, see [Full list of VirusTotal Intelligence tag modifier](/docs/intelligence-tag-list)* |
| **registrar** | Filter domains according to the entity in which they were registered. This is a narrow search with respect to the broader *whois* search described below
Example: [entity:domain registrar:markmonitor](https://www.virustotal.com/gui/search/entity%253Adomain%2520registrar%253Amarkmonitor/domains) |
| **ssl_issuer** | Focus on domains that contain a given string or fulltext pattern within their SSL certificate issuer field.
Example: [entity:domain ssl_issuer:"DigiCert Baltimore CA-2 G2"](https://www.virustotal.com/gui/search/entity:domain%20ssl_issuer:%22DigiCert%20Baltimore%20CA-2%20G2%22/domains) |
| **ssl_serial** | Focus on domains that share a given SSL certificate serial field. 
Example: [entity:domain ssl_serial:"4648f925c65eea8795a81cfe87d971e"](https://www.virustotal.com/gui/search/entity:domain%20ssl_serial:%224648f925c65eea8795a81cfe87d971e%22/domains) |
| **ssl_subject** | Focus on domains that contain a given string or fulltext pattern within their subject field.
Example: [entity:domain ssl_subject:"*.s3.amazonaws.com"](https://www.virustotal.com/gui/search/entity%253Adomain%2520ssl_subject%253A%2522*.s3.amazonaws.com%2522/domains) |
| **ssl_thumbprint** | Focus on domains sharing a given SSL certificate thumbprint field.
Example: [entity:domain ssl_thumbprint:"17e0a93e58af0a068d6c2db6c180b3e7e352d48e"](https://www.virustotal.com/gui/search/entity:domain%20ssl_thumbprint:%2217e0a93e58af0a068d6c2db6c180b3e7e352d48e%22/domains) |
| **whois** | Filter domains according to any word or phrase contained within their Whois record, as redacted by VirusTotal to respect personal information.
Example: [entity:domain whois:"1ecd1739ef269eacs@"](https://www.virustotal.com/gui/search/entity:domain%20whois:%221ecd1739ef269eacs@%22/domains) |
| **have** | Allows you to fix a condition that the domain’s indexed metadata should meet, it accepts any of the modifiers above and it means that the domain should have data for a given modifier.
Example: [entity:domain p:3+ have:whois](https://www.virustotal.com/gui/search/entity%253Adomain%2520p%253A3%252B%2520have%253Awhois/domains) |
| **last_modification_date**
**lm** | Filter Domains based on the latest update on VirusTotal for Domain.
Example: [entity:domain last_modification_date:3d+](https://www.virustotal.com/gui/search/entity%253Adomain%2520last_modification_date%253A3d%252B) |
| **jarm** | Filter Domains based on the JARM fingerprint.
Example: [entity:domain jarm:29d3fd00029d29d21c42d43d00041d188e8965256b2536432a9bd447ae607f](https://www.virustotal.com/gui/search/entity%3Adomain%20jarm%3A29d3fd00029d29d21c42d43d00041d188e8965256b2536432a9bd447ae607f/domains) |
| **parent_domain** | Filter Domains based on the parent Domain.
Example:[entity:domain parent_domain:dropbox.com](%20https://www.virustotal.com/gui/search/entity%253Adomain%2520parent_domain%253Adropbox.com/domains) |
| **domain_regex** | Search for domains using a regular expression.
Example: [entity:domain domain\_regex:"\[b-y\]12\.(biz\ |
| **fuzzy_domain** | Search for fuzzy domains.
Example: [entity:domain fuzzy_domain:www.santander.com not domain:www.santander.com](https://www.virustotal.com/gui/search/entity%253Adomain%2520fuzzy_domain%253Awww.santander.com%2520not%2520domain%253Awww.santander.com/domains) |
| **ssl_not_before** | Filter Domains based on the start date of the last SSL certificates&#x27; validity.
Example: [entity:domain ssl_not_before:2023-10-01](https://www.virustotal.com/gui/search/entity%253Adomain%2520ssl_not_before%253A2023-10-01/domains) |
| **ssl_not_after** | Filter Domains based on the end date of the last SSL certificates&#x27; validity.
Example: [entity:domain ssl_not_after:2023-10-01](https://www.virustotal.com/gui/search/entity%253Adomain%2520ssl_not_after%253A2023-10-01/domains) |
| **threat_actor**
**related_actor** | Searches for IoCs which have that related threat actor. 
Example: [entity:domain threat_actor:"Lazarus Group"](https://www.virustotal.com/gui/search/entity%253Adomain%2520threat_actor%253A%2522Lazarus%2520Group%2522/domains) |

**Updated about 2 months ago