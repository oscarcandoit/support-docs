---
title: "Get an hourly URL feed batch"
source: "https://docs.virustotal.com/reference/feeds-url-hourly"
scraped_at: "2026-02-08T06:35:41.509Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> URL feeds endpoints are only available to users with a URL feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

This endpoint returns a single package containing all minutely packages returned in [`/feeds/urls/{time}`](/reference/feeds-url) endpoint for a given hour. The returned file is a .tar.bz2 file which contains the 60 minutely feeds for that hour.

The provided time argument must be in `YYYYMMDDhh` format. For example, time `2021012211` returns the batches correspoding to January 21st 2021 11:00 - 11:59 UTC. You can download batches up to 7 days old, and the most recent batch has always a 2 hours lag with respect with to the current time. This means that if the current time in UTC is T you can download batch T-2h but any more recent.

Successful calls to this endpoint will return a `302` redirect response to a URL from which the final batch file will be downloaded.

**Shell**PythonClick `Try It!` to start a request and see the response here!