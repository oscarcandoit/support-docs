---
title: "Collection search modifiers"
source: "https://docs.virustotal.com/docs/collection-search-modifiers"
scraped_at: "2026-02-08T06:19:20.718Z"
---

**🚧
### Special privileges required[](#special-privileges-required)

This feature is only available to users with the [Threat Landscape module](https://www.virustotal.com/gui/threat-landscape-overview).

[VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) allows you to perform advanced faceted searches over the historical set of collections. These searches can act on basically all the metadata that we generate for collections: name, threat actor, references, urls, malware role, tags, etc.

VirusTotal Intelligence searches by default over the historical set of files, in order to search over collections you need to add the facet condition *entity:collection***. For example, let&#x27;s ask for all those collections that contains more than 5 files and were first submitted after October 17th 2019:

[entity:collection files:5+ fs:2019-10-17+](https://www.virustotal.com/gui/search/entity%253Acollection%2520files%253A5%252B%2520fs%253A2019-10-17%252B/collections)

Note that you&#x27;re able to build complex searches combining **AND, OR and NOT** conditions. For example:

[(entity:collection AND files:5+ AND fs:2019-10-17+) AND (threat_actor:apt29 OR threat_actor:"mummy spider")](https://www.virustotal.com/gui/search/(entity%253Acollection%2520AND%2520files%253A5%252B%2520AND%2520fs%253A2019-10-17%252B)%2520AND%2520(threat_actor%253Aapt29%2520OR%2520threat_actor%3A%22mummy_spider%22)/collections)

You can directly type these modifiers on the search box:

*

The following table describes all the search modifiers (facets) that can be used, you can combine any number of them:

| | |
| --- | --- |
| **comment:** | Search for collections that have a VirusTotal Community comment containing the word or phrase provided. 
Example: [entity:collection comment:IOCs](https://www.virustotal.com/gui/search/entity%253Acollection%2520comment%253AIOCs) |
| **comment_author:** | Search for collections that have been commented by the user with the username provided.
Example: [entity:collection comment_author:68h7EGyNm](https://www.virustotal.com/gui/search/entity%253Acollection%2520comment_author%253A68h7EGyNm) |
| **creation_date** | Filter collections based on its creation date. Accepts less than and greater than syntax.
Examples: [entity:collection creation_date:2020-02-10+](https://www.virustotal.com/gui/search/entity%253Acollection%2520creation_date%253A2020-02-10%252B), [entity:collection creation_date:2020-02-10-,](https://www.virustotal.com/gui/search/entity%253Acollection%2520creation_date%253A2020-02-10-) [entity:collection creation_date:3d-](https://www.virustotal.com/gui/search/entity%253Acollection%2520creation_date%253A3d-) |
| **description:** | Search for collections that have a description containing the word or phrase provided. 
Example: [entity:collection description:IOCs](https://www.virustotal.com/gui/search/entity%253Acollection%2520description%253AIOCs) |
| **domains:** | Filter collections based on the number of domains included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection domains:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520domains%253A5%252B) |
| **files:** | Filter collections based on the number of files included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection files:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520files%253A5%252B) |
| **fs:** | Filter collections based on the first seen date in VirusTotal. Note that less than and greater than syntax is allowed.
Examples: [entity:collection fs:2019-10-10+](https://www.virustotal.com/gui/search/entity%253Acollection%2520fs%253A2019-10-10%252B), [entity:collection fs:2019-10-10-](https://www.virustotal.com/gui/search/entity%253Acollection%2520fs%253A2019-10-10-) |
| **have:**
**has:** | Search the collections which report contains information from the selected field it accepts any of the modifiers described in this arcticle.
Example: [entity:collection have:comment](https://www.virustotal.com/gui/search/entity%253Acollection%2520p%253A3%252B%2520have%253Acomment) |
| **ips:**
**ip_addresses:** | Filter collections based on the number of ip addresses included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection ips:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520ips%253A5%252B) |
| **last_modification_date:**
**lm:** | Filter collections based on the last modification date. Note that less than and greater than syntax is allowed.
Examples: [entity:collection fs:2019-10-10+](https://www.virustotal.com/gui/search/entity%253Acollection%2520fs%253A2019-10-10%252B) , [entity:collection lm:2019-10-10-](https://www.virustotal.com/gui/search/entity%253Acollection%2520lm%253A2019-10-10-) |
| **ls:** | Filter collections based on the last seen date in VirusTotal. Note that less than and greater than syntax is allowed.
Examples: [entity:collection ls:2019-10-10-](https://www.virustotal.com/gui/search/entity%253Acollection%2520ls%253A2019-10-10-), [entity:collection ls:2019-10-10+](https://www.virustotal.com/gui/search/entity%253Acollection%2520ls%253A2019-10-10%252B) |
| **name:** | Search for collections whose name containing the word or phrase provided. 
Example: [entity:collection name:malware](https://www.virustotal.com/gui/search/entity%253Acollection%2520name%253Amalware) |
| **owner:** | Search for collections that have been created by an specific owner. 
Example: [entity:collection owner:Malpedia](https://www.virustotal.com/gui/search/entity%253Acollection%2520owner%253AMalpedia) |
| **references:** | Filter collections based on the number of references included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection references:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520references%253A5%252B) |
| **sigma_rules:** | Filter collections based on the number of sigma rules included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection sigma_rules:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520sigma_rules%253A5%252B) |
| **sponsor_region:** | Filter collections which have that related sponsor regions. Accept the region in ISO code 2 format 
Example: [entity:collection sponsor_region:"US"](https://www.virustotal.com/gui/search/entity%253Acollection%2520sponsor_region%253AUS) |
| **source_region:** | Filter collections which have that related source regions. Accept the region in ISO code 2 format 
Example: [entity:collection source_region:"US"](https://www.virustotal.com/gui/search/entity%253Acollection%2520source_region%253AUS) |
| **tag** | Filter collections according to their tags.
Example: [entity:collection tag:attachment](https://www.virustotal.com/gui/search/entity%253Adomain%2520tag%25253Aattachment) |
| **targeted_industry:** | Filter collections which have that related targeted industry. Accept the region in ISO code 2 format 
Example: [entity:collection targeted_industry:"banking"](https://www.virustotal.com/gui/search/entity%253Acollection%2520source_region%253Abanking) |
| **targeted_region:** | Filter collections which have that related targeted regions. Accept the region in ISO code 2 format 
Example: [entity:collection targeted_region:"US"](https://www.virustotal.com/gui/search/entity%253Acollection%2520targeted_region%253AUS) |
| **threat_actor:** | Filter collections which have that related threat actor. 
Example: [entity:collection threat_actor:"Lazarus Group"](https://www.virustotal.com/gui/search/entity%253Acollection%2520threat_actor%253A%2522Lazarus%2520Group%2522) |
| **threat_actors:** | Filter collections based on the number of threat actors included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection threat_actors:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520threat_actors%253A5%252B) |
| **threat_category:** | Filter collections which have that related threat category associated to the files in the collection. 
Example: [entity:collection threat_category:"banker"](https://www.virustotal.com/gui/search/entity%253Acollection%2520threat_category%253Abanker) |
| **urls:** | Filter collections based on the number of urls included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection urls:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520urls%253A5%252B) |
| **yara_rulesets:** | Filter collections based on the number of yara rulesets included on the collection. Accepts less than and greater than syntax.
Examples: [entity:collection yara_rulesets:5+](https://www.virustotal.com/gui/search/entity%253Acollection%2520yara_rulesets%253A5%252B) |
| **malware_role:** | Filter collections which have that malware role. 
Example: [entity:collection malware_role:backdoor-botnet](https://www.virustotal.com/gui/search/entity%253Acollection%2520malware_role%253Abackdoor-botnet) |
| **motivation:** | Filter collections which have that motivation. 
Example: [entity:collection motivation:ideological](https://www.virustotal.com/gui/search/entity%253Acollection%2520motivationr%253Aideological) |
| **operating_system:** | Filter collections which have operating system related to their files. 
Example: [entity:collection operating_system:linux](https://www.virustotal.com/gui/search/entity%253Acollection%2520operating_systemr%253Alinux) |
| **detection:** | Search for collections whose detections associated to the files containing the word or phrase provided. 
Example: [entity:collection detection:Trojan](https://www.virustotal.com/gui/search/entity%253Acollection%2520detection%253Atrojan) |
| **capability:** | Search for collections whose capabilities associated to the files containing the word or phrase provided. 
Example: [entity:collection detection:"capture credentials"](https://www.virustotal.com/gui/search/entity%253Acollection%2520capability%253A%2522capture%2520credentials%2522) |
| **origin:** | Search for collections whose report author containing the word or phrase provided. 
Example: [entity:collection origin:"google threat intelligence"](https://www.virustotal.com/gui/search/entity%253Acollection%253A%2522google%2520threat%2520intelligence%2522) |

*Updated about 2 months ago