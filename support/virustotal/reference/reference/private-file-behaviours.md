---
title: "🔒 Private Files Behaviours"
source: "https://docs.virustotal.com/reference/private-file-behaviours"
scraped_at: "2026-02-08T06:35:50.383Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Private file behaviours are identical to [file behaviours](/reference/file-behaviour-summary), but they summarize the behaviour of a [private file](/reference/private-files). They can be only seen by the users who uploaded the original file.

## Additional attributes[](#additional-attributes)

- `html_report_link`: <*string*> download URL of the reports&#x27;s HTML report (if present).

- `pcap_link`: <*string*> download URL of the report&#x27;s PCAP file (if present).

- `evtx_link`: <*string*> download URL of the report&#x27;s EVTX file (if present).

- `memdump_link`: <*string*> download URL of the report&#x27;s memdump file (if present).

## Relationships[](#relationships)

In addition to the previously described attributes, private file behaviour objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section.

The following table shows a summary of available relationships.

| Relationship | Return object type |
| --- | --- |
| attack_techniques | List of [Attack Techniques](/reference/attack-techniques) |
| file | A single [Private File](/reference/private-files) |