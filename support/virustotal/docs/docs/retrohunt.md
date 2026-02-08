---
title: "Retrohunt"
source: "https://docs.virustotal.com/docs/retrohunt"
scraped_at: "2026-02-08T06:19:22.379Z"
---

Retrohunt allows you to scan the files sent to VirusTotal in the past 12 months with your YARA rules (the 12 months limit applies to users of Hunting Pro, for standard users the limit is 3 months). Files that are larger than 100MB are not scanned by Retrohunt at all. A Retrohunt job scans a corpus of more than 500M files (~680TB worth of data) in 2-3 hours and reports you the files that matches your rules. However, the matches are limited to 10.000 per job. 

Also, you can scan a fixed and smaller corpus composed of about 1 million files that are known to be goodware, which is handy when you are testing your YARA rules, as it can help you to spot false-positives. These jobs usually finish in less than a minute.

Retrohunt jobs can&#x27;t have more than 300 YARA rules and the total size of the rules in text form can not exceed 1MB. A limit of 10 concurrent jobs per user is also enforced.

The standard YARA modules currently supported by Retrohunt are:

- [**pe**](https://virustotal.github.io/yara-x/docs/modules/pe/)

- [**elf**](https://virustotal.github.io/yara-x/docs/modules/elf/)

- [**dotnet**](https://virustotal.github.io/yara-x/docs/modules/dotnet/)

- [**lnk**](https://virustotal.github.io/yara-x/docs/modules/lnk/)

- [**macho**](https://virustotal.github.io/yara-x/docs/modules/macho/)

- [**math**](https://virustotal.github.io/yara-x/docs/modules/math/)

- [**magic**](https://yara.readthedocs.io/en/latest/modules/magic.html)

- [**hash**](https://virustotal.github.io/yara-x/docs/modules/hash/)

- [**string**](https://virustotal.github.io/yara-x/docs/modules/string/)

- [**time**](https://virustotal.github.io/yara-x/docs/modules/time/)

**Important:** In addition to the standard modules enumerated above, you can also the **vt** module, module. This module has been specifically created for Livehunt and Retrohunt and exposes additional information about the file being scanned. You can find more details about this in the following [article](/docs/writing-yara-rules-for-livehunt).

# Creating a Retrohunt job[](#creating-a-retrohunt-job)

1.  On the homepage, click on the **Hunting** menu at the top of the screen and then on the r the corresponding icon in the toolbar, either option leads you to the same place:

*
![Retrohunt menu](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/retrohunt_menu_icon_20231009.png)

 2.  Then click on the **New retrohunt job**.

![Retrohunt new job](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/retrohunt_new_20231009.png)

3.  A window will be opened with a text editor in which you can write your YARA rules and control its settings. The image below illustrates the usage of this window.

![Retrohunt editor](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/retrohunt_editor_20231009.png)

 

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

# Retrohunt results[](#retrohunt-results)

![Retrohunt results](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/retrohunt_results_20231009.png)

1. 

2. 

3. 

4. 

5. 

6. 

*Updated about 2 months ago