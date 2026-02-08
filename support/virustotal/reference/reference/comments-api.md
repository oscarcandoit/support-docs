---
title: "Comments"
source: "https://docs.virustotal.com/reference/comments-api"
scraped_at: "2026-02-08T06:35:36.161Z"
---

VirusTotal users can post comments to give additional context about a file, domain, IP address, graph or URL. These comments can be retrieved using our API.

## Comment identifiers[](#comment-identifiers)

Comment IDs have three main parts divided by a `-` character:

- A character representing the item where the comment is posted. This can be one of:

`d` if the comment is posted in a domain.

- `f` if the comment is posted in a file.

- `g` is the comment is posted in a graph.

- `i` if the comment is posted in a IP address.

- `u` if the comment is posted in a URL.

The item&#x27;s ID.
A random string.

All comment identifiers returned by the API can be used in subsequent API calls that require a comment identifier.