---
title: "Get comments on a URL"
source: "https://docs.virustotal.com/reference/urls-comments-get"
scraped_at: "2026-02-08T06:35:36.301Z"
---

Returns a list of [Comment](/reference/comments) objects.

Check comments done in VT Community regarding a specific URL.

> 📘
> 
> 
> 
> See [URL identifiers](/reference/url#url-identifiers) from more information about how to generate a valid URL identifier for a URL.
> 
> 

- `data`: list of ("comment" objects)[ref:comment-object].

- `links`: contains "self" with a reference to this group of comments and "next", with a reference to the next group.

- `cursor`: contains the cursor token used to access the next group of comments.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!