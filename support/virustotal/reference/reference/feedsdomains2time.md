---
title: "Get a minutely domain feed batch"
source: "https://docs.virustotal.com/reference/feedsdomains2time"
scraped_at: "2026-02-08T06:35:40.874Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Domain feeds endpoints are only available to users with a Domain feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

With this endpoint you can download an individual one-minute batch by providing a time consisting of a string with format `YYYYMMDDhhmm`. Time `201912010802` will return the batch corresponding to December 1st, 2019 08:02 UTC. You can download batches up to 7 days old, and the most recent batch has always a 60 minutes lag with respect with to the current time. This means that if the current time in UTC is `T` you can download batch `T-60m` but not `T-59m` or any more recent.

Successful calls to this endpoint will return a `302` redirect response to a URL from which the final batch file will be downloaded.

> 🚧
> ### Missing batches[](#missing-batches)
> 
> 
> Missing batches are rare, but still can happen occasionally. This doesn&#x27;t mean that you are losing any Domains in the feed, it just means that no batches were generated on a specific minute. The client code should be ready to accept a `404` error while retrieving a batch and proceed with the following one. However, receiving multiple `404` errors in a row for consecutive batches shouldn&#x27;t happen and should be treated as an error condition.
> 
> 

The downloaded file is a bzip2 compressed UTF-8 text file contains one JSON structure per line, where the structure represents a URL object as returned by the [GET /domains/{domain}](/reference/domain-info) endpoint.

**Shell**PythonClick `Try It!` to start a request and see the response here!