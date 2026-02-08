---
title: "What&#x27;s VT Hunting?"
source: "https://docs.virustotal.com/docs/whats-vthunting"
scraped_at: "2026-02-08T06:19:20.622Z"
---

VT Hunting is a service that leverages the power of [YARA](https://virustotal.github.io/yara-x/) over VirusTotal&#x27;s dataset, it consists of three different components: [Livehunt,](/docs/livehunt) [Retrohunt](/docs/retrohunt) and [VTDIFF](/docs/vtdiff-automatic-yara-rules). If you have never used YARA before we recommend you to start by reading the [YARA documentation](https://virustotal.github.io/yara-x/docs/intro/getting-started/).
**[Livehunt](/docs/livehunt)** allows you to hook into the stream of files submitted to VirusTotal and to get notified whenever one of them matches your rules. By matching the submitted files with YARA you should be able to (1) get a constant flow of malware files classified by family, (2) discover new malware flying under the industry&#x27;s radar, (3) collect files written in a given language or packed with a specific run-time packer, (4) create heuristic rules to detect suspicious files, (5) track threat actors, and, in general, enjoy the benefits of YARA&#x27;s versatility acting on the huge amount of files processed by VirusTotal every day.

Besides hunting for files in real time as they arrive to VirusTotal, you can also apply your YARA rules to the historical collection of files with **[Retrohunt](/docs/retrohunt)**. A Retrohunt job takes around ~3-4 hours to complete and scans over 600TB of files sent to VirusTotal during the past year.

Last, **[VTDIFF](/docs/how-does-vtdiff-work)** eases the task of creating YARA rules. It allows you to provide a collection of hashes that you are interested in matching and a collection of hashes that you do not want to match at all and it will generate common binary subsequences that are shared by your selection. VTDIFF takes into account binary sequence prevalence across the entire VirusTotal dataset in order to make sure it does not suggest noisy patterns that may produce false positives.

These hunting components can be automated using the [VirusTotal API v3](/reference/api-livehunt).

**Updated about 2 months ago