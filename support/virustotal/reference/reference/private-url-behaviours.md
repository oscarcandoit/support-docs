---
title: "🔒 Private URLs Behaviours"
source: "https://docs.virustotal.com/reference/private-url-behaviours"
scraped_at: "2026-02-08T06:35:51.531Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Private URL behaviours are identical to [URL behaviours](/reference/url-behaviour-summary), but they summarize the behaviour of a [private URL](/reference/private-urls). They can be only seen by the users who uploaded the original URL.

## Additional attributes[](#additional-attributes)

- `expiration`: <*integer*> the date when the report will no longer be available.

## Relationships[](#relationships)

Additionally, private URL behaviour objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section.

The following table shows a summary of available relationships.

| Relationship | Return object type |
| --- | --- |
| analyses | List of [Private Analyses](/reference/private-analyses) |