---
title: "Should I upload files larger than 650MBs ?"
source: "https://docs.virustotal.com/docs/large-files"
scraped_at: "2026-02-08T06:19:26.283Z"
---

Files larger than 650MBs tend to be bundles of some sort, (compressed files, ISO images, etc.) in these cases it makes sense to upload the inner individual files instead for several reasons, as an example:

- Engines tend to have performance issues on big files (timeouts, some may not even scan them).

- Some engines are not able to inspect certain file types whereas they will be able to inspect the inner files if submitted.

- When scanning a big bundle you lose context on which specific inner file is causing the detection.

Remember that if you use our [API](/reference/overview), you need to use the [files-upload-url](/reference/files-upload-url) endpoint.

**Updated about 2 months ago