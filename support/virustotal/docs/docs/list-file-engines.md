---
title: "File - List of Engines"
source: "https://docs.virustotal.com/docs/list-file-engines"
scraped_at: "2026-02-08T06:19:20.620Z"
---

The main [search box](https://www.virustotal.com/gui/home/search) also allows you to specify a full or partial malware family name ( [Backdoor.Win32.PcClient!IK](https://www.virustotal.com/gui/search/%2522Backdoor.Win32.PcClient!IK%2522/files), [Sality](https://www.virustotal.com/gui/search/sality/files), [Mydoom.R](https://www.virustotal.com/gui/search/Mydoom.R)), or any other text you want to find inside the antivirus reports. However, this kind of search will look at all indexed fields for the file, it will not only focus on the antivirus results. In order to focus exclusively on the antivirus results (no matter which particular engine produced the output), you should use the *engines* prefix. For example:[engines:"Trojan.Isbar"](https://www.virustotal.com/gui/search/engines%253A%2522Trojan.Isbar%2522/files)or [engines:"zbot"](https://www.virustotal.com/gui/search/engines%253A%2522zbot%2522).

*

If you are looking for files detected by some specific antivirus vendor you can make use of vendor prefixes. These prefixes should preceed your keyword in order to restrict the scope of the search to a particular antivirus solution, for example: [symantec:infostealer](https://www.virustotal.com/gui/search/symantec%253Ainfostealer/files), [mcafee:rahack](https://www.virustotal.com/gui/search/mcafee%253Arahack/files), [f-secure:virut](https://www.virustotal.com/gui/search/f-secure%253Avirut/files).

![Identifying Antivirus Symantec](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/identifyingantivirus_symantec_20231004.png)

By using vendor prefixes you can also search for all files detected by a given vendor, independently of the malware name. To do this you must write the vendor prefix followed by the special keyword infected*, e.g. [ESET-NOD32:infected](https://www.virustotal.com/gui/search/ESET-NOD32%253Ainfected/files). In this case the word infected does not necessarily have to be present in the antivirus signature, it is just indicating that the file must be detected. Similarly, you can list all files not detected by some antivirus by using the keyword *clean*. For example:[ESET-NOD32:clean](https://www.virustotal.com/gui/search/ESET-NOD32%253Aclean/files).

*

 

This is the full list of allowed vendor prefixes:

| | | | |
| --- | --- | --- | --- |
| acronis | ad_aware | aegislab | ahnlab |
| ahnlab_v3 | alibaba | alibabacloud | alyac |
| antivir | antivir7 | antiy_avl | apex |
| arcabit | avast | avast_mobile | avg |
| avira | avware | babable | baidu |
| bitdefender | bitdefenderfalx | bitdefendertheta | bkav |
| bkav_pro | cat_quickheal | clamav | cmc |
| commtouch | comodo | crowdstrike | ctx |
| cybereason | cylance | cynet | cyren |
| deepinstinct | drweb | egambit | elastic |
| emsisoft | endgame | escan | eset_nod32 |
| f_prot | f_secure | fireeye | fortinet |
| gdata | google | gridinsoft | huorong |
| ikarus | invincea | jiangmin | k7antivirus |
| k7gw | kaspersky | kingsoft | lionic |
| malwarebytes | max | maxsecure | mcafee |
| mcafee_gw_edition | microsoft | microworld_escan | nano_antivirus |
| nod32 | nprotect | paloalto | panda |
| prevx1 | qihoo_360 | rising | sangfor |
| sentinelone | sophos | sunbelt | superantispyware |
| symantec | symantecmobileinsight | tachyon | tencent |
| thehacker | totaldefense | trapmine | trendmicro |
| trendmicro_housecall | trellixens | trustlook | varist |
| vba32 | vipre | virit | virobot |
| webroot | whitearmor | yandex | zillya |
| zonealarm | zoner | | |

The list is subject to changes as new antivirus solutions are integrated in VirusTotal and existing ones change names so do not forget to visit it every once in a while.

[Back to Top](#top)

*Updated about 2 months ago