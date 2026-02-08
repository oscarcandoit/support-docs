---
title: "Get file content search snippets"
source: "https://docs.virustotal.com/reference/intelligence-search-snippets"
scraped_at: "2026-02-08T06:35:37.289Z"
---

This request returns file content snippets that matched a query in the [`/search`](/reference/intelligence-search) endpoint. The response is a list of strings containing both content hexdump and plain text. Matched content is found between `*` characters, more file content is returned to provide additional context about the match.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!