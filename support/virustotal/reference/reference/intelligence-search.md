---
title: "Advanced corpus search"
source: "https://docs.virustotal.com/reference/intelligence-search"
scraped_at: "2026-02-08T06:35:37.372Z"
---

**📘
### Quota consumption[](#quota-consumption)

This endpoint consumes VirusTotal API quota if user has private/premium API or VirusTotal Intelligence quota if user only has VirusTotal Intelligence.

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> This endpoint is only available for users with premium privileges.
> 
> 

> 🚧
> 
> 
> 
> Searches using a fuzzy hash (ssdeep, TLSH, ...) are throttled due to performance reasons. The typical throttler is 15 searches / minute.
> 
> 

This endpoint allows to search for files in the VirusTotal&#x27;s dataset, using the same [query syntax](/docs/virustotal-intelligence-introduction) that you would use in the VirusTotal Intelligence user interface, where you can use this [full list of modifiers](/docs/search-modifiers-full-list). URL Safe encoding must be used when using this endpoint programatically.**

The result from this endpoint is a collection of file objects that match the given query. If the `descriptors_only` parameter is set to `true`, the resulting collection will contain only the object descriptors. This is useful if you are interested in getting only the SHA-256 of the matching files. In those cases you better set `descriptors_only=true` for reducing the latency of your requests.

> 🚧
> ### Content searches can not be sorted[](#content-searches-can-not-be-sorted)
> 
> 
> If your query contains content search the order parameter will make no effect.
> 
> 

The `order` parameter defines the order in which results are returned. They can be followed by a plus (`+`) or minus (`-`) sign for indicating ascending or descending order respectively (i.e: `<order>+`, `<order>-`). If no ascending/descending order is specified it&#x27;s assumed to be ascending, so `<order>` and `<order>+` are equivalent. If the `order` parameter is not provided, items are returned in a default order. The following table shows supported and default orders for every kind of entity:

| Entity type | Supported orders | Default order |
| --- | --- | --- |
| file | first_submission_date, last_submission_date, positives, times_submitted, size | last_submission_date- |
| url | first_submission_date, last_submission_date, positives, times_submitted, status | last_submission_date- |
| domain | creation_date, last_modification_date, last_update_date, positives | last_modification_date- |
| ip | ip, last_modification_date, positives | last_modification_date- |

This request returns a list of API objects ([files](/reference/files), [URLs](/reference/url-object), [IP addresses](/reference/ip-object) or [domains](/reference/domains-object)).

Also, some context attributes are added in certain searches:

- 

When searching files by `content`. These context attributes are:

`confidence`: <*float*> match confidence.

- `match_in_subfile`: <*boolean*> whether the content match was found in a [subfile](/reference/file-object-bundled-files) or not.

- `snippet`: <*string*> snippet ID. This ID can be later used in `/intelligence/search/snippets/{id}` endpoint.

When doing a hash similarity search:

- `similarity_score`: <*float*> number between 0 and 1 indicating the percentage of the fuzzy hash that matched. For example, `1.0` indicates the hash is the same as the specified; `0.5` that half of the hash matches the one given.

Example response (search by file content)
```
`{
 "data": [
 {
 "context_attributes": {
 "confidence": 1,
 "match_in_subfile": false,
 "snippet": "L3Z0c2FtcGxlcy8zODIzMzkzNjNhOTM2NDM2ZDM2MDM1MzFkM2IzOGEzMmUzMTUzNzM3MTM4MzY3MzBlM2Q2MzQ4MzY1M2MzYzNhfHw3MTg1Mzk2OjExfHwxNTk5NDY0OTQ3fHwzODIzMzkzNjNhOTM2NDM2ZDM2MDM1MzFkM2IzOGEzMmUzMTUzNzM3MTM4MzY3MzBlM2Q2MzQ4MzY1M2MzYzNh"
 },
 "id": "382339363a936436d3603531d3b38a32e315373713836730e3d63483653c3c3a",
 "type": "file"
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/intelligence/search?cursor=H4sI...A&query=content%3A+%22hello+world%22&limit=1&descriptors_only=true",
 "self": "https://www.virustotal.com/api/v3/intelligence/search?query=content%3A%20%22hello%20world%22&descriptors_only=true&limit=1"
 },
 "meta": {
 "cursor": "H4sIAAA...",
 "days_back": 365
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!