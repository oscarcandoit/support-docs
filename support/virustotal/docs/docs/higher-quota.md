---
title: "How can I have access to a higher quota?"
source: "https://docs.virustotal.com/docs/higher-quota"
scraped_at: "2026-02-08T06:19:24.873Z"
---

Special privileges can be considered for honeypots, honeyclients and other projects providing resources (samples or URLs) to VirusTotal. If your are submitting hundreds new files per day from your honeypot, please don&#x27;t hesitate to contact us for additional quota. If you have a smaller number of samples, some things you can do:

- Adjust your scripts to wait 30 to 60 seconds before retrying up to X times, if you get a over quota 204 response code (api v2) or 429 (api v3).

- Implement logic to efficiently make use of your quota, for example:

1. 

2. 

3. 

VirusTotal also has a [premium API](https://docs.virustotal.com/reference/overview) to which you can subscribe. This API allows you, among other things, to have a higher rate and get additional information, you can read more at this [article](/docs/difference-public-private).

If any of these alternatives suits your purposes do not hesitate to [contact us](https://www.virustotal.com/gui/contact-us/premium-services).

**Updated about 2 months ago