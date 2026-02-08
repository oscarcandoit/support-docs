---
title: "Searching using entities"
source: "https://docs.virustotal.com/docs/searching-entities"
scraped_at: "2026-02-08T06:19:20.640Z"
---

One of the basics of VT Intelligence is using the “entity” search keyword to directly specify the type of output you want to get. There are specific modifiers for every entity, here you can find direct links to documentation for [File Sarch modifiers](/docs/file-search-modifiers) , [URL search modifiers](/docs/url-search-modifiers) , [Domain search modifiers](/docs/domain-search-modifiers) and [IP address search modifiers](/docs/ip-address-search-modifiers) .

*

The best approach to learn how to use them is with some real life examples:

[Windows Executables that communicate over http](#windows-executables-that-communicate-over-http)
[Argentinian domains used in phishing campaigns](#argentinian-domains-used-in-phishing-campaigns)
[Samples exploiting a recent exploit and barely detected by AVs](#samples-exploiting-a-recent-exploit-and-barely-detected-by-avs)
[Windows file that connects to port 445 and (allegedly) use an exploit](#windows-file-that-connects-to-port-445-and-allegedly-use-an-exploit)
[LilithBot Malware command-and-control IPs](#lilithbot-malware-command-and-control-ips)
[Using telegram favicon icon but not official telegram domains](#using-telegram-favicon-icon-but-not-official-telegram-domains)
[Using typosquatting attacks on telegram](#using-typosquatting-attacks-on-telegram)
[Some other examples](#some-other-examples)
[Ordering VirusTotal Intelligence searches](#ordering-virustotal-intelligence-searches)

# [Windows Executables that communicate over http](https://www.virustotal.com/gui/search/entity%253Afile%2520(type%253Apeexe%2520or%2520type%253Apedll)%2520behavior%253Ahttp/files)[](#windows-executables-that-communicate-over-http)

![Search Windows Executables that communicate over http](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_windowsfiles_20231110.png)([https://www.virustotal.com/gui/search/entity%253Afile%2520(type%253Apeexe%2520or%2520type%253Apedll)%2520behavior%253Ahttp/files](https://www.virustotal.com/gui/search/entity%253Afile%2520(type%253Apeexe%2520or%2520type%253Apedll)%2520behavior%253Ahttp/files))

# [Argentinian domains used in phishing campaigns](https://www.virustotal.com/gui/search/entity%253Adomain%2520engines%253Aphishing%2520tld%253Aar)[](#argentinian-domains-used-in-phishing-campaigns)

![Argentinian domains used in phishing campaigns](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_argertinaphising_20231110.png)([https://www.virustotal.com/gui/search/entity%253Adomain%2520engines%253Aphishing%2520tld%253Aar](https://www.virustotal.com/gui/search/entity%253Adomain%2520engines%253Aphishing%2520tld%253Aar))

# [Samples exploiting a recent exploit and barely detected by AVs](https://www.virustotal.com/gui/search/entity%253Afile%2520tag%253A%2522cve-2022*%2522%2520p%253A5%252B%2520p%253A20-/files)[](#samples-exploiting-a-recent-exploit-and-barely-detected-by-avs)

![Samples exploiting a recent exploit and barely detected by AVs](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_exploit_20231110.png)([https://www.virustotal.com/gui/search/entity%253Afile%2520tag%253A%2522cve-2022*%2522%2520p%253A5%252B%2520p%253A20-/files](https://www.virustotal.com/gui/search/entity%253Afile%2520tag%253A%2522cve-2022*%2522%2520p%253A5%252B%2520p%253A20-/files))

# [Windows file that connects to port 445 and (allegedly) use an exploit](https://www.virustotal.com/gui/search/entity%253Afile%2520behaviour_network%253A%2522%253A445%2522%2520type%253Apeexe%2520tag%253Aexploit/files)[](#windows-file-that-connects-to-port-445-and-allegedly-use-an-exploit)

![Windows file that connects to port 445 and (allegedly) use an exploit](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_port445_20231110.png)([https://www.virustotal.com/gui/search/entity%253Afile%2520behaviour_network%253A%2522%253A445%2522%2520type%253Apeexe%2520tag%253Aexploit/files](https://www.virustotal.com/gui/search/entity%253Afile%2520behaviour_network%253A%2522%253A445%2522%2520type%253Apeexe%2520tag%253Aexploit/files))

# [LilithBot Malware command-and-control IPs](https://www.virustotal.com/gui/search/entity%253Aurl%2520path%253A%252Fgate%252F*%252FregisterBot%2520or%2520path%253A%252Fgate%252F*%252FgetFile%253Fname%253Dadmin_settings_plugin.json%2520or%2520path%253A%252Fgate%252F*%252FuploadFile%253Fname/urls)[](#lilithbot-malware-command-and-control-ips)

![LilithBot Malware command-and-control IPs](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_lilithbot_20231110.png)([https://www.virustotal.com/gui/search/entity%253Aurl%2520path%253A%252Fgate%252F*%252FregisterBot%2520or%2520path%253A%252Fgate%252F*%252FgetFile%253Fname%253Dadmin_settings_plugin.json%2520or%2520path%253A%252Fgate%252F*%252FuploadFile%253Fname/urls](https://www.virustotal.com/gui/search/entity%253Aurl%2520path%253A%252Fgate%252F*%252FregisterBot%2520or%2520path%253A%252Fgate%252F*%252FgetFile%253Fname%253Dadmin_settings_plugin.json%2520or%2520path%253A%252Fgate%252F*%252FuploadFile%253Fname/urls))

# [Using telegram favicon icon but not official telegram domains](https://www.virustotal.com/gui/search/entity%253Aurl%2520main_icon_dhash%253Ae89e436964638ee8%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520)/urls)[](#using-telegram-favicon-icon-but-not-official-telegram-domains)

![Using telegram favicon icon but not official telegram domains](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_telegramfavicon_20231110.png)([https://www.virustotal.com/gui/search/entity%253Aurl%2520main_icon_dhash%253Ae89e436964638ee8%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520)/urls](https://www.virustotal.com/gui/search/entity%253Aurl%2520main_icon_dhash%253Ae89e436964638ee8%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520)/urls))

# [Using typosquatting attacks on telegram](https://www.virustotal.com/gui/search/entity%253Adomain%2520fuzzy_domain%253Atelegram.org%2520%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520))[](#using-typosquatting-attacks-on-telegram)

![Using typosquatting attacks on telegram](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/searchentities_typosquatting_20231110.png)([https://www.virustotal.com/gui/search/entity%253Adomain%2520fuzzy_domain%253Atelegram.org%2520%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520)](https://www.virustotal.com/gui/search/entity%253Adomain%2520fuzzy_domain%253Atelegram.org%2520%2520AND%2520NOT%2520(%2520parent_domain%253A%2522tdesktop.com%2522%2520%2520OR%2520parent_domain%253A%2522telegram.org%2522%2520OR%2520parent_domain%253A%2522telegram.me%2522%2520OR%2520parent_domain%253A%2522t.me%2522%2520)))

# Some other examples:[](#some-other-examples)

---

[entity:ip asn:"15169" communicating_files_max_detections:30+](https://www.virustotal.com/gui/search/entity%253Aip%2520asn%253A%252215169%2522%2520communicating_files_max_detections%253A30%252B/ips)
[entity:domain downloaded_files_max_detections:20+](https://www.virustotal.com/gui/search/entity%253Adomain%2520downloaded_files_max_detections%253A20%252B)
[entity:url p:3+ have:tracker](https://www.virustotal.com/gui/search/entity%3Aurl%20p%3A3+%20have%3Atracker/urls)
[entity:file tag:signed p:10+](https://www.virustotal.com/gui/search/entity%253Afile%2520tag%253Asigned%2520p%253A10%252B/files)
[entity:collection name:apt or tag:apt](https://www.virustotal.com/gui/search/entity%253Acollection%2520name%253Aapt%2520or%2520tag%253Aapt/collections)

# Ordering VirusTotal Intelligence searches[](#ordering-virustotal-intelligence-searches)

---

Remember that VirusTotal Intelligence searches can user an order parameter. This**`order`parameter defines the order in which results are returned. They can be followed by a plus (`+`) or minus (`-`) sign for indicating ascending or descending order respectively (i.e:`<order>+`,`<order>-`). If no ascending/descending order is specified it&#x27;s assumed to be ascending, so`<order>`and`<order>+`are equivalent. If the`order`parameter is not provided, items are returned in a default order. The following table shows supported and default orders for every kind of entity:

| | | |
| --- | --- | --- |
| Entity type** | **Supported orders** | **Default order** |
| file* | *first_submission_date, last_submission_date, positives, times_submitted, size* | *last_submission_date-* |
| *url* | *first_submission_date, last_submission_date, positives, times_submitted, status* | *last_submission_date-* |
| *domain* | *creation_date, last_modification_date, last_update_date, positives* | *last_modification_date-* |
| *ip* | *ip, last_modification_date, positives* | *last_modification_date-* |

***Remember that content searches can not be sorted, so If your query contains content search the order parameter will make no effect.***

**Updated about 2 months ago