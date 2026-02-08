---
title: "IP address search modifiers"
source: "https://docs.virustotal.com/docs/ip-address-search-modifiers"
scraped_at: "2026-02-08T06:19:20.808Z"
---

[VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) allows you to perform advanced faceted searches over the historical collection of IP addresses seen by VirusTotal. These searches can act on basically all the metadata generated for IPs: autonomous system, country, whois, SSL certificate, community comments, detections, relationships, etc. For example, you can pivot on SSL certificate fields to try to identify other network infrastructure set up by a given adversary. 

VirusTotal Intelligence searches by default over the historical collection of files, **in order to search over IPs you need to add the facet condition entity:ip**. For example, let&#x27;s ask for all those IP addresses that have been detected by more than 5 blocklists:

[entity:ip positives:5+](https://www.virustotal.com/gui/search/entity%253Aip%2520positives%253A5%252B/ips)

You can click on the filter icon inside the main search box in order to navigate to an IP address search assistant:

*

Note that the assistant will not allow you to build complex searches combining **AND, OR and NOT** conditions. For example:

[entity:ip positives:5+ AND (aso:ovh OR aso:google)](https://www.virustotal.com/gui/search/entity%253Aip%2520positives%253A5%252B%2520AND%2520(aso%253Aovh%2520OR%2520aso%253Agoogle)/ips)

The following table describes all the search modifiers (facets) that can be used, you can combine any number of them:

| Modifier | Description |
| --- | --- |
| **ip** | Narrow down a search to a given IP address range.
Example: [entity:ip ip:"8.8.8.8/24"](https://www.virustotal.com/gui/search/entity%253Aip%2520ip%253A%25228.8.8.8%252F24%2522?type=ips) |
| **asn** 
**autonomous_system_number** | Narrow down a search to a given autonomous system (by number).
Example: [entity:ip asn:"15169"](https://www.virustotal.com/gui/search/entity:ip%20asn:%2215169%22/ips) |
| **aso** 
**autonomous_system_owner** | Narrow down a search to a given autonomous system (by organization).
Example: [entity:ip aso:google](https://www.virustotal.com/gui/search/entity%253Aip%2520aso%253Agoogle) |
| **country** | Country where IPs matching a given criteria should be located. ISO ALPHA 2 code required.
Example: [entity:ip country:us](https://www.virustotal.com/gui/search/entity%253Aip%2520country%253Aus/ips) |
| **continent** | Continent where IPs matching a given criteria should be located. ISO ALPHA 2 code required.  
Example: [entity:ip continent:eu](https://www.virustotal.com/gui/search/entity%253Aip%2520continent%253Aeu/ips) |
| **comment** | Search for IPs that have a VirusTotal Community comment containing the word or phrase provided.
Example: [entity:ip comment:phishing](https://www.virustotal.com/gui/search/entity%253Aip%2520comment%253Aphishing/ips) |
| **comment_author** | Search for domains that have been commented by the user with the username provided.
Example: [entity:ip comment_author:hugoklugman](https://www.virustotal.com/gui/search/entity%253Aip%2520comment_author%253Ahugoklugman?type=ips) |
| **p**
**positives** | Filter IPs according to the number of engines/blocklists that detect them. Less than and greater than syntax is allowed.
Examples: [entity:ip p:5+](https://www.virustotal.com/gui/search/entity%253Aip%2520p%253A5%252B/ips) |
| **engines** | Focus on IPs that have a given detection label by at least one blocklist/scanner.
Example: [entity:ip engines:phishing](https://www.virustotal.com/gui/search/entity%253Aip%2520engines%253Aphishing/ips) |
| **<engine name>*** | Focus on IPs that are detected with a given label by a given blocklist/scanner.
Example: [entity:ip eset:phishing](https://www.virustotal.com/gui/search/entity%253Aip%2520eset%253Aphishing/ips) |
| **reputation** | Filter IPs according to their reputation among the VirusTotal user base.
Example: [entity:ip reputation:-20-](https://www.virustotal.com/gui/search/entity%253Aip%2520reputation%253A-20-) |
| **domain_resolutions_count** | Search for IPs that have hosted a given number of domains. Accepts greater and less than syntax and saturates at a count of 100.
Example: [entity:ip domain_resolutions_count:20+](https://www.virustotal.com/gui/search/entity%253Aip%2520domain_resolutions_count%253A20%252B?type=ips) |
| **detected_communicating_files_count** | Fix a condition based on how many detected files have been seen contacting the given ip when executed in a sandbox. Less than and greater than syntax is allowed but the count saturates at 10.
Example: [entity:ip detected_communicating_files_count:5+](https://www.virustotal.com/gui/search/entity%253Aip%2520detected_communicating_files_count%253A5%252B/ips) |
| **communicating_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that communicate with a given IP.
Example: [entity:ip communicating_files_max_detections:30+](https://www.virustotal.com/gui/search/entity%253Aip%2520communicating_files_max_detections%253A30%252B?type=ips) |
| **detected_downloaded_files_count** | Fix a condition based on how many detected files VirusTotal has downloaded from a URL hosted under a given IP address.
Example: [entity:ip detected_downloaded_files_count:10+](https://www.virustotal.com/gui/search/entity%253Aip%2520detected_downloaded_files_count%253A10%252B/ips) |
| **downloaded_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that were downloaded by VirusTotal from a given IP address. 
Example: [entity:ip downloaded_files_max_detections:20+](https://www.virustotal.com/gui/search/entity%253Aip%2520downloaded_files_max_detections%253A20%252B/ips) |
| **detected_referring_files_count** | Fix a condition based on how many detected files have been seen containing the given IP address in their strings.
Example: [entity:ip detected_referring_files_count:10+](https://www.virustotal.com/gui/search/entity%253Aip%2520detected_referring_files_count%253A10%252B/ips) |
| **referring_files_max_detections** | Fix a condition based on the maximum number of detections observed for files that contain a given IP address in their strings.
Example: [entity:ip referring_files_max_detections:10+](https://www.virustotal.com/gui/search/entity%253Aip%2520referring_files_max_detections%253A10%252B/ips) |
| **detected_urls_count** | Fix a condition based on how many detected URLs have been seen hosted under a given IP address.
Example: [entity:ip detected_urls_count:10+](https://www.virustotal.com/gui/search/entity%253Aip%2520detected_urls_count%253A10%252B/ips) |
| **urls_max_detections** | Fix a condition based on the maximum number of detections observed for URLs hosted under a given IP address.
Example: [entity:ip urls_max_detections:5+](https://www.virustotal.com/gui/search/entity%253Aip%2520urls_max_detections%253A5%252B?type=ips) |
| **tag** | Filter IPs according to their tags.
Example: [entity:ip tag:reserved](https://www.virustotal.com/gui/search/entity%253Aip%2520tag%253Areserved/ips)
List of available tags:
- ***private:*** private IP address space, e.g. 192.168.0.1.
 - ***multicast:*** IP address in the [multicast range](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml).
- ***link-local:*** IP valid only for communications [within the network segment](https://en.wikipedia.org/wiki/Link-local_address).
- ***reserved:*** [reserved IP address space](https://en.wikipedia.org/wiki/Reserved_IP_addresses).
- ***loopback:*** IP for the local machine.
*For a complete list of tags, see [Full list of VirusTotal Intelligence tag modifier](/docs/intelligence-tag-list)* |
| **ssl_issuer** | Focus on IPs that contain a given string or fulltext pattern within their SSL certificate issuer field.
Example: [entity:ip ssl_issuer:"Starfield Secure Certificate Authority - G2"](https://www.virustotal.com/gui/search/entity:ip%20ssl_issuer:%22Starfield%20Secure%20Certificate%20Authority%20-%20G2%22/ips) |
| **ssl_serial** | Focus on IPs that share a given SSL certificate serial field. 
Example: [entity:ip ssl_serial:"99c942e5f4049537"](https://www.virustotal.com/gui/search/entity:ip%20ssl_serial:%2299c942e5f4049537%22/ips) |
| **ssl_subject** | Focus on IPs that contain a given string or fulltext pattern within their subject field.
Example: [entity:ip ssl_subject:"naranjamarketing.com"](https://www.virustotal.com/gui/search/entity%253Aip%2520ssl_subject%253A%2522naranjamarketing.com%2522/ips) |
| **ssl_thumbprint** | Focus on IPs sharing a given SSL certificate thumbprint field.
Example: [entity:ip ssl_thumbprint:62cd39d8b06d1d26e02e7fc8fabe7cb442e08489](https://www.virustotal.com/gui/search/entity%253Aip%2520ssl_thumbprint%253A62cd39d8b06d1d26e02e7fc8fabe7cb442e08489?type=ips) |
| **whois** | Filter IPs according to any word or phrase contained within their Whois record.
Example: [entity:ip whois:"Hurricane Electric LLC"](https://www.virustotal.com/gui/search/entity:ip%20whois:%22Hurricane%20Electric%20LLC%22/ips) |
| **have** | Allows you to fix a condition that the IP’s indexed metadata should meet, it accepts any of the modifiers above and it means that the IP should have data for a given modifier.
Example: [entity:ip have:comment](https://www.virustotal.com/gui/search/entity%253Aip%2520have%253Acomments?type=ips) |
| **last_modification_date**
**lm** | Filter IPs based on the latest update on VirusTotal for IP.
Example: [entity:ip last_modification_date:3d+](https://www.virustotal.com/gui/search/entity%253Aip%2520last_modification_date%253A3d%252B/ips) |
| **jarm** | Filter IPs based on the JARM fingerprint.
Example: [entity:ip jarm:29d3fd00029d29d21c42d43d00041d188e8965256b2536432a9bd447ae607f](https://www.virustotal.com/gui/search/entity%253Aip%2520jarm%253A29d3fd00029d29d21c42d43d00041d188e8965256b2536432a9bd447ae607f/ips) |
| **ssl_not_before** | Filter IPs based on the start date of the last SSL certificates&#x27; validity.
Example: [entity:ip ssl_not_before:2023-10-01](https://www.virustotal.com/gui/search/entity%253Aip%2520ssl_not_before%253A2023-10-01/ips) |
| **ssl_not_after** | Filter IPs based on the end date of the last SSL certificates&#x27; validity.
Example: [entity:ip ssl_not_after:2023-10-01](https://www.virustotal.com/gui/search/entity%253Aip%2520ssl_not_after%253A2023-10-01/ips) |
| **threat_actor**
**related_actor** | Filter IPs which have that related threat actor. 
Example: [entity:ip threat_actor:apt29](https://www.virustotal.com/gui/search/entity%253Aip%2520threat_actor%253Aapt29?type=ips) |

**Updated about 2 months ago