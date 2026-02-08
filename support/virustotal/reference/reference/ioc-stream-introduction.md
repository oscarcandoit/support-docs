---
title: "IoC Stream"
source: "https://docs.virustotal.com/reference/ioc-stream-introduction"
scraped_at: "2026-02-08T06:35:38.014Z"
---

VirusTotal IoC Stream is an evolution to the previous Hunting&#x27;s Livehunt but opening the flux to other origins that allows you to curate your own custom feeds based on your interests. This service sinks all the IoC matches in a single place to expose them following a common interface to make the IoC Stream actionable.

The IoC stream supports multiple filters and orders to filter your matches by their origin, entity type (file, domain, url, IP address), etc. You can find the complete reference [here](/reference/get-objects-from-the-ioc-stream)

## Notification origins[](#notification-origins)

> 📘
> 
> 
> 
> More origins coming soon, keep tuned!
> 
> 

### Hunting[](#hunting)

Allows you to hook onto the stream of files submitted to VirusTotal and get notified whenever one of them matches a certain [YARA](http://virustotal.github.io/yara/) rule.