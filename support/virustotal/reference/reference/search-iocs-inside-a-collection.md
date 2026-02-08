---
title: "🔒 Search IoCs inside a collection"
source: "https://docs.virustotal.com/reference/search-iocs-inside-a-collection"
scraped_at: "2026-02-08T06:35:37.427Z"
---

**🚧
### Deprecated endpoint. This has been replaced by Google Threat Intelligence[](#deprecated-endpoint-this-has-been-replaced-by-google-threat-intelligence)

We are gearing up to the transition into Google Threat Intelligence! The endpoints are documented at [Threat Landscape** -> **Threat Actors, Malware & Tools, Campaigns, IoC Collections** section](https://gtidocs.virustotal.com/reference/threat-actors-malware-tools-campaigns-ioc-collections). Note that when upgrading to Google Threat Intelligence you will enjoy a much larger knowledge base of IoC collections, threat actors, malware, toolkits and campaigns.

- For **searching IoCs inside a collection**, refer to [**`/collections/{id}/search` endpoint documented here](https://gtidocs.virustotal.com/reference/search-iocs-inside-a-threat).

- Find the new IoC collection object** definition [here](https://gtidocs.virustotal.com/reference/ioc-collection-object).

- Find additional information related to the new endpoints [here](https://gtidocs.virustotal.com/reference/threat-actors-malware-tools-campaigns-ioc-collections).

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> This endpoint is only available to users with the [Threat Landscape module](https://www.virustotal.com/gui/threat-landscape-overview).
> 
> 

Allows to search IoCs inside a collection using VT Intelligence queries.

The expected input is the same as [/intelligence/search](/reference/intelligence-search). By default it searches files, in order to search other entities use `entity:domain/ip/url`.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!