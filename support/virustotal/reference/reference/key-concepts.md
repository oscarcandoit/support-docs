---
title: "Key concepts"
source: "https://docs.virustotal.com/reference/key-concepts"
scraped_at: "2026-02-08T06:35:33.039Z"
---

The VirusTotal API v3 revolves around three key concepts: [objects](/reference/objects), [collections](/reference/collections) and [relationships](/reference/relationships).

An object is any item that can be retrieved or manipulated using the API. Files, URLs, domain names and VT Hunting rulesets are some of the object types exposed by the API.

A collection is a set of objects. Objects in a collection are usually of the same type, but there are a few exceptions to that rule. Some API operations are performed on objects, while some others are performed on collections.

Relationships are links between objects, for example: a file can be related to another file because one of them is a ZIP that contains the other, a URL can be related to a file because the file was downloaded from the URL, a domain name is related to all the URLs on that domain.