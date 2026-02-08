---
title: "Zipping files"
source: "https://docs.virustotal.com/reference/zip-files"
scraped_at: "2026-02-08T06:35:37.355Z"
---

You can download individual files from VirusTotal by using the [GET /files/{id}/download](/reference/zip-files-download) and [GET /files/{id}/download_url](/reference/zip-files-download-url) endpoints, however, sometimes you may want to download files in bulk in a password-protected ZIP file. This is specially useful in corporate environments where a gateway antivirus may be blocking your downloads because they contain malware (as expected from files downloaded from VirusTotal)