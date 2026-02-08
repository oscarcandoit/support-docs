---
title: "Get a per-minute file behaviour feed batch"
source: "https://docs.virustotal.com/reference/feeds-file-behaviour"
scraped_at: "2026-02-08T06:35:40.999Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Sandbox analyses feeds endpoints are only available to users with a Sandbox feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

With this endpoint you can download an individual one-minute batches by providing a `time` consisting of a string with format `YYYYMMDDhhmm`. Time `201912010802` will return the batch corresponding to December 1st, 2019 08:02 UTC. You can download batches up to 7 days old, and the most recent batch has always a 60 minutes lag with respect to the current time. This means that if the current time in UTC is `T` you can download batch `T-60m` but not `T-59m` or any more recent.

Successful calls to this endpoint will return a `302` redirect response to a URL from which the final batch file will be downloaded.

> 🚧
> ### Missing batches[](#missing-batches)
> 
> 
> Missing batches are rare, but still can happen occasionally. This doesn&#x27;t mean that you are losing any files in the feed, it just means that no batches were generated on a specific minute. The client code should be ready to accept a `404` error while retrieving a batch and proceed with the following one. However, receiving multiple `404` errors in a row for consecutive batches shouldn&#x27;t happen and should be treated as an error condition.
> 
> 

The downloaded file is a bzip2 compressed UTF-8 text file containing one JSON structure per line, where the structure represents a FileBehaviour object as returned by the [GET /files/{id}/behaviour](/reference/files-relationships) endpoint and is defined by [FileBehaviourSummary Object](/reference/file-behaviour-summary).

The FileBehaviour object will contain an extra attribute (`context_attributes`), which is a JSON structure that contains links for downloading the PCAP, HTML, EVTX and memdump files generated in the analysis through our API without consuming your quota (bear in mind that you will have to use your API Key and add it to the request headers in order to get access to the behaviour reports pointed by those two links).

Entry line structure
```
`{
 "attributes": <FileBehaviour object attributes>,
 "context_attributes": {
 "file_md5": "<string>",
 "file_sha1": "<string>",
 "file_type_tag": "<string>",
 "html_report": "https://www.virustotal.com/api/v3/feeds/file-behaviours/<TOKEN>/html",
 "pcap": "https://www.virustotal.com/api/v3/feeds/file-behaviours/<TOKEN>/pcap",
 "evtx": "https://www.virustotal.com/api/v3/feeds/file-behaviours/<TOKEN>/evtx",
 "memdump": "https://www.virustotal.com/api/v3/feeds/file-behaviours/<TOKEN>/memdump"
 },
 "id": "<MDXishSnakeCase0 name>",
 "type": "file_behaviour",
 "relationshiops": {...},
 "links": {...} 
}`
```

**Shell**PythonClick `Try It!` to start a request and see the response here!