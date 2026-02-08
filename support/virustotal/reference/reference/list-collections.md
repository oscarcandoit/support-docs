---
title: "🔒 List collections"
source: "https://docs.virustotal.com/reference/list-collections"
scraped_at: "2026-02-08T06:35:37.462Z"
---

**🚧
### Deprecated endpoint. This has been replaced by Google Threat Intelligence[](#deprecated-endpoint-this-has-been-replaced-by-google-threat-intelligence)

We are gearing up to the transition into Google Threat Intelligence! The endpoints are documented at [Threat Landscape** -> **Threat Actors, Malware & Tools, Campaigns, IoC Collections** section](https://gtidocs.virustotal.com/reference/threat-actors-malware-tools-campaigns-ioc-collections). Note that when upgrading to Google Threat Intelligence you will enjoy a much larger knowledge base of IoC collections, threat actors, malware, toolkits and campaigns.

- For **listing IoC collections**, refer to [**`/collections` endpoint documented here](https://gtidocs.virustotal.com/reference/list-threats).

- Find the new IoC collection object** definition [here](https://gtidocs.virustotal.com/reference/ioc-collection-object).

- Find additional information related to the new endpoints [here](https://gtidocs.virustotal.com/reference/threat-actors-malware-tools-campaigns-ioc-collections).

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> This endpoint is only available to users with the [Threat Landscape module](https://www.virustotal.com/gui/threat-landscape-overview).
> 
> 

Returns a list of [Collections](/reference/collections-object) objects.

Allowed filters:

- Text without modifiers: Collection&#x27;s name, description or tag.

- `creation_date`: Collection&#x27;s creation date.

- `description`: Collection&#x27;s description. You can search for word or expressions (full-text search).

- `name`: Collection&#x27;s name.

- `owner`: Collection&#x27;s owner.

- `source_region`: Collections&#x27;s source region. You can use [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes, the ISO or the full country name.

- `tag`: Collection&#x27;s tag.

- `targeted_industry`: Collections&#x27;s targeted industry.

- `targeted_region`: Collections&#x27;s targeted region. Same use as `source_region`.

- `threat_category`: Collection&#x27;s threat category.

Allowed orders:

- `creation_date`: Collection&#x27;s creation date.

- `creation_day`: Collection&#x27;s creation day. Collections created within the same day are sorted by relevance.

- `domains`: Number of domains in the collection.

- `files`: Number of files in the collection.

- `ip_addresses`: Number of IP addresses in the collection.

- `last_modification_date`: Collection&#x27;s last modification date.

- `last_modification_day`: Collection&#x27;s last modification day. Collections modified within the same day are sorted by relevance.

- `references`: Number of references in the collection.

- `urls`: Number of URLs in the collection.

Some examples:

`GET /api/v3/collections?filter=source_region:US&order=files-`

`GET /api/v3/collections?filter=targeted_industry:government&order:creation_day-`

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!