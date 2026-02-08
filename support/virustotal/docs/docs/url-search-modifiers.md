---
title: "URL search modifiers"
source: "https://docs.virustotal.com/docs/url-search-modifiers"
scraped_at: "2026-02-08T06:19:21.182Z"
---

[VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) allows you to perform advanced faceted searches over the historical collection of URLs. These searches can act on basically all the metadata that we generate for URLs: url string, path, query parameters and values, favicon, meta tags, contained Ad trackers, tags, reputation, etc.

VirusTotal Intelligence searches by default over the historical collection of files, **in order to search over URLs you need to add the facet condition *entity:url***. For example, let&#x27;s ask for all those URLs that have been detected by more than 5 URL scanners and were first submitted after October 17th 2019:

[entity:url p:5+ fs:2019-10-17+](https://www.virustotal.com/gui/search/entity%253Aurl%2520positives%253A5%252B%2520fs%253A2019-10-17%252B/urls)

You can click on the filter icon inside the main search box in order to navigate to a URL search assistant:

*

Note that the assistant will not allow you to build complex searches combining **AND, OR and NOT** conditions. For example:

[(entity:url AND positives:5+ AND fs:2019-10-17+) AND (tld:ru OR tld:tk)](https://www.virustotal.com/gui/search/(entity%253Aurl%2520AND%2520positives%253A5%252B%2520AND%2520fs%253A2019-10-17%252B)%2520AND%2520(tld%253Aru%2520OR%2520tld%253Atk)/urls)

The following table describes all the search modifiers (facets) that can be used, you can combine any number of them:

The following modifiers admits wildcards: **hostname** , **outgoing_link**, **path** , **url**.

| | |
| --- | --- |
| **comment:** | Search for URLs that have a VirusTotal Community comment containing the word or phrase provided. 
Example: [entity:url comment:IOCs](https://www.virustotal.com/gui/search/entity%253Aurl%2520comment%253AIOCs/urls) |
| **comment_author:** | Search for URLs that have been commented by the user with the username provided.
Example: [entity:url comment_author:68h7EGyNm](https://www.virustotal.com/gui/search/entity%253Aurl%2520comment_author%253A68h7EGyNm/urls) |
| **fs:** | Filter URLs based on the first seen date in VirusTotal. Note that less than and greater than syntax is allowed.
Examples: [entity:url fs:2019-10-10+](https://www.virustotal.com/gui/search/entity%253Aurl%2520fs%253A2019-10-10%252B/urls), [entity:url fs:2019-10-10-](https://www.virustotal.com/gui/search/entity%253Aurl%2520fs%253A2019-10-10-/urls) |
| **ls:** | Filter URLs based on the last seen date in VirusTotal. Note that less than and greater than syntax is allowed.
Examples: [entity:url ls:2019-10-10-](https://www.virustotal.com/gui/search/entity%253Aurl%2520ls%253A2019-10-10-/urls), [entity:url ls:2019-10-10+](https://www.virustotal.com/gui/search/entity%253Aurl%2520ls%253A2019-10-10%252B/urls) |
| **la:** | Filters URLs to be returned according to their last analysis datetime. Normally the last analysis datetime will be the same as the last submission datetime, however, sometimes users will rescan a URL but will then decide to view the latest report on the URL rather than waiting for the rescanning, in those cases both dates may differ. It allows you to specify larger than or smaller than values. 
 Examples: [entity:url la:2025-08-21T16:00:00](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A2025-08-21T16%253A00%253A00), [entity:url la:2025-01-01T19:59:22-](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A2025-01-01T19%253A59%253A22-), [entity:url la:2025-08-21T16:59:22+](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A2025-08-21T16%253A59%253A22%252B), [entity:url la:2025-08-21T16:00:00+](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A2025-08-21T16%253A00%253A00%252B), [entity:url la:2025-08-21T16:59:22-](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A2025-08-21T16%253A59%253A22-), [entity:url la:3d+ ](https://www.virustotal.com/gui/search/entity%253Aurl%2520la%253A3d%252B) |
| **lm:**
**last_modification_date:**
**last_modified:** | Filters URLs to be returned according to their last modification datetime. It allows you to specify larger than or smaller than values. 
Examples: [entity:url lm:2025-08-22T06:40:59](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A2025-08-22T06%253A40%253A59?type=urls), [entity:url lm:2026-01-01T19:59:22-](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A2025-01-01T19%253A59%253A22-?type=urls), [entity:url lm:2025-08-21T16:59:22+](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A2025-08-21T16%253A59%253A22%252B), [entity:url lm:2025-08-2116:00:00+](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A2025-08-2116%253A00%253A00%252B?type=urls) [entity:url lm:2025-08-2116:59:22-](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A2025-08-2116%253A59%253A22-?type=urls), [entity:url lm:3d+](https://www.virustotal.com/gui/search/entity%253Aurl%2520lm%253A3d%252B?type=urls) |
| **main_icon_dhash:** | Search for URLs with a favicon which is visually similar to another favicon, a visual similarity hash is used for this purpose. This search can be triggered by clicking on the favicon preview of the URL in the search listings. Can be useful to discover phishing sites targeting a given company.
Example: [entity:url main_icon_dhash:"cc8cccccaae070b2" NOT hostname:"dropbox.com" NOT hostname:"dropboxforum.com"](https://www.virustotal.com/gui/search/entity%253Aurl%2520main_icon_dhash%253A%2522cc8cccccaae070b2%2522%2520NOT%2520hostname%253A%2522dropbox.com%2522%2520NOT%2520hostname%253A%2522dropboxforum.com%2522/urls) |
| **p:** 
**positives:** | Filter URLs according to the number of engines/blocklists that detect them. Less than and greater than syntax is allowed.
Examples: [entity:url p:10+](https://www.virustotal.com/gui/search/entity%253Aurl%2520p%253A10%252B/urls), [entity:url p:10-](https://www.virustotal.com/gui/search/entity%253Aurl%2520p%253A10-/urls) |
| **engines:** | Focus on URLs that have been detected with a given label by at least one scanner/blocklist.
Example: [entity:url engines:malware](https://www.virustotal.com/gui/search/entity%253Aurl%2520engines%253Amalware/urls) |
| **engine_name:*** | Focus on URLs that have been detected with a given label by a specific scanner/blocklist.
You can check the full list of engines names in this [link](/docs/list-file-engines)
Example: [entity:url fortinet:malware](https://www.virustotal.com/gui/search/entity%253Aurl%2520fortinet%253Amalware/urls) |
| **reputation:** | Filter URLs according to its reputation among the VirusTotal user base.
Example: [entity:url reputation:70+](https://www.virustotal.com/gui/search/entity%253Aurl%2520reputation%253A70%252B/urls) |
| **s:**
**submissions:** | Filter URLs according to the number of times they have been sent to VirusTotal for analysis. Less than and greater than syntax is allowed.
Examples: [entity:url s:10+](https://www.virustotal.com/gui/search/entity%253Aurl%2520s%253A10%252B/urls), [entity:url s:10-](https://www.virustotal.com/gui/search/entity%253Aurl%2520s%253A10-/urls) |
| **submitter:** | Search for URLs submitted via a given interface (API, web) or sent from a given country (two-letter ISO country code).
Example: [entity:url submitter:web submitter:MY](https://www.virustotal.com/gui/search/entity%253Aurl%2520submitter%253Aweb%2520submitter%253AMY/urls) |
| **first_submitter:** | Search for URLs which first submission was sent from a given country (two-letter ISO country code).
Example: [entity:url first_submitter:ua](https://www.virustotal.com/gui/search/entity%253Aurl%2520first_submitter%253Aua/urls) |
| **tag:** | Filter URLs according to their tags.
Example: [entity:url tag:"downloads-pe" header_value:"image/jpeg"](https://www.virustotal.com/gui/search/entity%253Aurl%2520tag%253A%2522downloads-pe%2522%2520header_value%253A%2522image%252Fjpeg%2522/urls)
List of available tags:
- ***ip:*** the URL&#x27;s hostname is a bare IP address rather than a domain.
- ***non-ascii:*** the URL&#x27;s hostname contains non-ascii characters, i.e. punycode.
- ***downloads-pe:*** the URL downloads a windows executable.
- ***downloads-apk:*** the URL downloads an Android APK.
- ***downloads-elf:*** the URL downloads a Linux executable.
- ***downloads-dmg:*** the URL downloads an OS X package.
- ***downloads-zip:*** the URL downloads a ZIP bundle.
- ***downloads-pdf:*** the URL downloads a PDF document.
- ***downloads-doc:*** the URL downloads a Microsoft Office document.
- ***opendir:*** the URL is an open directory, i.e. directory browsing is possible.
- ***contains-pe:***the URL is an open directory and it lists at least one file with an .exe extension.
- ***contains-zip***: same as above but for .zip extension.
- ***contains-msi:***same as above but for .msi extension.
- ***contains-apk:*** same as above but for .apk extension.
- ***contains-dmg:*** same as above but for .dmg extension.
*For a complete list of tags, see [Full list of VirusTotal Intelligence tag modifier](/docs/intelligence-tag-list)* |
| **asn:**
**autonomous_system_number:** | Search for URLs in domains that resolve to an IP address under the responsibility of the given autonomous system number.
Example: [entity:url asn:7506](https://www.virustotal.com/gui/search/entity%253Aurl%2520asn%253A7506/urls) |
| **aso:**
**as_owner:**
**autonomous_system_owner:** | Search for URLs in domains that resolve to an IP address under the responsibility of the given autonomous system owner label.
Example: [entity:url aso:"Google LLC"](https://www.virustotal.com/gui/search/entity%253Aurl%2520aso%253A%2522Google%2520LLC%2522/urls) |
| **category:** | Filter URLs according to the content category of its domain, as depicted in the details section of the pertinent domain report.
Examples: [entity:url category:"business and economy"](https://www.virustotal.com/gui/search/entity%253Aurl%2520category%253A%2522business%2520and%2520economy%2522/urls), [entity:url category:"known infection source"](https://www.virustotal.com/gui/search/entity%253Aurl%2520category%253A%2522known%2520infection%2520source%2522/urls) |
| **cookie:** | Filter URLs according to the cookie name set in the HTTP server response. Note that this is a fulltext search, you can search for the entire cookie name or for subwords of it.
Example: [entity:url cookie:"VT_PREFERRED_LANGUAGE"](https://www.virustotal.com/gui/search/entity%253Aurl%2520cookie%253A%2522VT_PREFERRED_LANGUAGE%2522/urls) |
| **cookie_value:** | Filter URLs according to a cookie value set in the HTTP server response. Note that this is a fulltext search, you can search for the entire cookie value or for subwords of it.
Example: [entity:url cookie:"VT_PREFERRED_LANGUAGE" cookie_value:"en"](https://www.virustotal.com/gui/search/entity%253Aurl%2520cookie%253A%2522VT_PREFERRED_LANGUAGE%2522%2520cookie_value%253A%2522en%2522/urls) |
| **header:** | Filter URLs according to the HTTP server response header keys.
Example: [entity:url header:"set-cookie"](https://www.virustotal.com/gui/search/entity%253Aurl%2520header%253A%2522set-cookie%2522/urls) |
| **header_value:** | Filter URLs according to the HTTP server response header values.
Example: [entity:url header_value:"PHP/5.3.29, PleskLin"](https://www.virustotal.com/gui/search/entity%253Aurl%2520header_value%253A%2522PHP%252F5.3.29%252C%2520PleskLin%2522/urls) |
| **hostname:** | Filter URLs according to the hostname. Note that this is a fulltext search, meaning that subwords can be used.
Example: [entity:url hostname:santander NOT hostname:bancosantander](https://www.virustotal.com/gui/search/entity%253Aurl%2520hostname%253Asantander%2520NOT%2520hostname%253Abancosantander/urls) |
| **ip:** | Filter URLs according to the IP address to which its domain resolved at the time of analysis. Allows range searches and CIDRs.
Examples: [entity:url ip:"200.61.38.216"](https://www.virustotal.com/gui/search/entity%253Aurl%2520ip%253A%2522200.61.38.216%2522/urls), [entity:url ip:"200.61.38.216/24"](https://www.virustotal.com/gui/search/entity%253Aurl%2520ip%253A%2522200.61.38.216%252F24%2522/urls) |
| **max_url_positives:** | Filter URLs according to the maximum number of detections considering all historical analyses performed on the URL.
Example: [entity:url max_url_positives:10+ positives:0](https://www.virustotal.com/gui/search/entity%253Aurl%2520max_url_positives%253A10%252B%2520positives%253A0/urls) |
| **meta:** | Filter URLs according to the META tags contained in the HTML that gets returned. Can be used to discover phishing sites.
Example: [entity:url meta:"NAB personal banking financial solutions"](https://www.virustotal.com/gui/search/entity%253Aurl%2520meta%253A%2522NAB%2520personal%2520banking%2520financial%2520solutions%2522/urls) |
| **password:** | Focus on URLs that have a password field and match a given text. 
Example: [entity:url have:password NOT username:mailto](https://www.virustotal.com/gui/search/entity%253Aurl%2520have%253Apassword%2520NOT%2520username%253Amailto%2520hostname%253Aamazonaws/urls) |
| **path:** | Filter URLs according to path sequences or subwords within the URL’s path.
Example: [entity:url path:"gate.php" response_code:200](https://www.virustotal.com/gui/search/entity%253Aurl%2520path%253A%2522gate.php%2522%2520response_code%253A200/urls) |
| **exact_path:** | Filter URLs whose path is exactly the given value.
Example: [entity:url exact_path:"/virustotal/"](https://www.virustotal.com/gui/search/entity%253Aurl%2520exact_path%253A%2522%252Fvirustotal%252F%2522/urls) |
| **extension:** | Filter URLs according to extension parsing based on the URL path or content disposition filename HTTP response header.
Example: [entity:url extension:jpg tag:downloads-pe](https://www.virustotal.com/gui/search/entity%253Aurl%2520extension%253Ajpg%2520tag%253Adownloads-pe/urls) |
| **port:** | Filter URLs according to the port on which the HTTP server is operating.
Example: [entity:url port:8080](https://www.virustotal.com/gui/search/entity%253Aurl%2520port%253A8080/urls) |
| **query_field:** | Filter URLs according to the key/name of query fields contained in the URL.
Example: [entity:url query_field:"loginpage"](https://www.virustotal.com/gui/search/entity%253Aurl%2520query_field%253A%2522loginpage%2522/urls) |
| **query_value:** | Filter URLs according to the value contained in its query values.
Example: [entity:url query_value:"walala10.cab"](https://www.virustotal.com/gui/search/entity%253Aurl%2520query_value%253A%2522walala10.cab%2522/urls) |
| **redirects_to:** | Identify URLs that redirect to a given URL. This is a fulltext search, meaning that subwords can be used:
Example: [entity:url redirects_to:"login.php"](https://www.virustotal.com/gui/search/entity%253Aurl%2520redirects_to%253A%2522login.php%2522/urls) |
| **response_code:** | Filter URLs according to the HTTP status code returned by the server.
Example: [entity:url response_code:200 path:"gate.php"](https://www.virustotal.com/gui/search/entity%253Aurl%2520response_code%253A200%2520path%253A%2522gate.php%2522/urls) |
| **response_positives:** | Filter URLs according to the number of antivirus detections for the content that the URL delivers.
Example: [entity:url positives:0 response_positives:10+](https://www.virustotal.com/gui/search/entity%253Aurl%2520positives%253A0%2520response_positives%253A10%252B/urls) |
| **response_size:** | Filter URLs according to the size of the content returned, in bytes.
Example: [entity:url response_code:200 response_size:1000000+](https://www.virustotal.com/gui/search/entity%253Aurl%2520response_code%253A200%2520response_size%253A1000000%252B/urls) |
| **scheme:** | Filter URLs according to their protocol scheme.
Example: [entity:url scheme:https response_code:200 path:”gate.php”](https://www.virustotal.com/gui/search/entity%253Aurl%2520scheme%253Ahttps%2520response_code%253A200%2520path%253A%2522gate.php%2522/urls) |
| **title:** | Filter URLs according to the title tag contained in their HTML response, if any. Can be used to identify phishing against particular entities.
Example: [entity:url title:"NAB Personal Banking"](https://www.virustotal.com/gui/search/entity%253Aurl%2520title%253A%2522NAB%2520Personal%2520Banking%2522/urls) |
| **tld:** | Filter URLs according to their top level domain.
Example: [entity:url tld:ru path:"gate.php"](https://www.virustotal.com/gui/search/entity%253Aurl%2520tld%253Aru%2520path%253A%2522gate.php%2522/urls) |
| **tracker:** | Focus on URLs sharing a given ads tracker in their HTML bodies.
Example: [entity:url tracker:"15015754"](https://www.virustotal.com/gui/search/entity:url%20tracker:%2215015754%22/urls) |
| **url:** | Filter URLs according to subwords contained in the URL string. 
Example: [entity:url url:bankofamerica NOT hostname:bankofamerica](https://www.virustotal.com/gui/search/entity%253Aurl%2520url%253Abankofamerica%2520NOT%2520hostname%253Abankofamerica/urls) |
| **username:** | Filter URLs according to the URI username portion.
 Example: [entity:url username:anonymous](https://www.virustotal.com/gui/search/entity%253Aurl%2520username%253Aanonymous/urls) |
| **have:** | Allows you to impose a condition that the URL’s indexed metadata should meet, it accepts any of the modifiers above and it means that the URL should have data for a given modifier.
Example: [entity:url p:3+ have:tracker](https://www.virustotal.com/gui/search/entity%253Aurl%2520p%253A3%252B%2520have%253Atracker/urls) |
| **parent_domain:** | Filter URLs based on the parent Domain.
Example:[entity:url parent_domain:dropbox.com](https://www.virustotal.com/gui/search/entity%253Aurl%2520parent_domain%253Adropbox.com/urls) |
| **threat_actor**
**related_actor** | Filter URLs which have that related threat actor. 
Example: [entity:url threat_actor:"Lazarus Group"](https://www.virustotal.com/gui/search/entity%253Aurl%2520threat_actor%253A%2522Lazarus%2520Group%2522/urls) |
| **targeted_brand** | Filter URLs based on info extracted from phishing engines. 
Example: [entity:url targeted_brand:apple](https://www.virustotal.com/gui/search/entity%253Aurl%2520targeted_brand%253Aapple?type=urls) |

**Updated about 1 month ago