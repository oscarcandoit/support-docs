---
title: "Get a minutely URL feed batch"
source: "https://docs.virustotal.com/reference/feeds-url"
scraped_at: "2026-02-08T06:35:41.543Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> URL feeds endpoints are only available to users with a URL feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

With this endpoint you can download an individual one-minute batch by providing a time consisting of a string with format `YYYYMMDDhhmm`. Time `201912010802` will return the batch corresponding to December 1st, 2019 08:02 UTC. You can download batches up to 7 days old, and the most recent batch has always a 60 minutes lag with respect with to the current time. This means that if the current time in UTC is `T` you can download batch `T-60m` but not `T-59m` or any more recent.

Successful calls to this endpoint will return a `302` redirect response to a URL from which the final batch file will be downloaded.

> 🚧
> ### Missing batches[](#missing-batches)
> 
> 
> Missing batches are rare, but still can happen occasionally. This doesn&#x27;t mean that you are losing any URLs in the feed, it just means that no batches were generated on a specific minute. The client code should be ready to accept a `404` error while retrieving a batch and proceed with the following one. However, receiving multiple `404` errors in a row for consecutive batches shouldn&#x27;t happen and should be treated as an error condition.
> 
> 

The downloaded file is a bzip2 compressed UTF-8 text file contains one JSON structure per line, where the structure represents a URL object as returned by the [GET /urls/{id}](/reference/url-info) endpoint. Besides the standard attributes usually found in all URLs objects, an additional context attribute is also included: `submitter`. The `submitter` attribute is a dictionary with lossy-ciphered non-identifiable information about who submitted the URL to VirusTotal. Notice however that `submitter` is not present in all URLs as some of them are re-analyzed by VirusTotal without being submitted by some external user.

**Shell**PythonClick `Try It!` to start a request and see the response here!