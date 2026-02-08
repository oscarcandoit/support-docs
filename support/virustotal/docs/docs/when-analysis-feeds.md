---
title: "When is an analysis included in the feeds?"
source: "https://docs.virustotal.com/docs/when-analysis-feeds"
scraped_at: "2026-02-08T06:19:26.298Z"
---

The VirusTotal feeds include entries for it resources (files, URLs, domains or sandboxes, depending on the specific feed) based on the following events:

1. 

2. 

When a resource entry appears due to re-analysis, it contains the updated information gathered from this latest analysis. Importantly, this entry also includes the original, unchanging basic properties of the resource, consistent with the first time it was seen.

Notice however that submitter is not present in all entries, it will be absent when resources are submitted via the web interface without triggering a new analysis due to recent submissions, or when resources are re-analyzed by VirusTotal without being submitted by some external user.

**Updated about 2 months ago