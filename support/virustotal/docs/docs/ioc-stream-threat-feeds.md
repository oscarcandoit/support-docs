---
title: "Threat Feeds"
source: "https://docs.virustotal.com/docs/ioc-stream-threat-feeds"
scraped_at: "2026-02-08T06:19:22.583Z"
---

The IOC Stream view is an evolution to the previous Livehunt Notifications view. This view allows users to digest the incoming VT flux into relevant threat feeds that you can study here or easily export to improve detection in your security technologies.

*[Walkthrough VirusTotal IoC Stream](https://www.youtube.com/watch?v=IbOPJ27gEv0)

As you can see in the screenshot below, you will see different tabs for the different Threat Feeds: Files, URLs, Domains and IP Addresses.

![IOC Stream Tabs](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/images/iocstream_tabs_20231031.png)

There is also the Aggregated tab for all the feeds combined and a [manage sources](/docs/ioc-stream-sources-subscriptions) link.

In [this other article](/docs/ioc-stream-sources-subscriptions) you can check how to subscribe to the new Threat Feeds (Collections and Threat Actors).

# Feeds[](#feeds)

We&#x27;ll use the files feed as an example, but all the views are similar.

In the [IoC stream view](https://www.virustotal.com/gui/ioc-notifications/iocs/files), all the notifications are listed **sorted by the matching date in descending order** as shown in the image below. Notifications are **deleted automatically after 7 days**.

 

![IOC Stream View](https://storage.googleapis.com/vtdocresources/guides/vt-hunting/images/iocstream_view_20231031.png)

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 

11. 

Refresh the data
Delete selected or all notifications.
Feature Icons:

1. 

2. 

3. 

4. 

For livehunt rules, additionally, you will **receive notifications in your email if you configured** your ruleset as described in the previous section. You can also **access your notifications via the [VirusTotal API](https://docs.virustotal.com/reference/ioc-stream-introduction)**.

*Updated about 2 months ago