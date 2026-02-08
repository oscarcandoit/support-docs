---
title: "Get a hourly file feed batch"
source: "https://docs.virustotal.com/reference/feeds-file-hourly"
scraped_at: "2026-02-08T06:35:40.811Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> File feeds endpoints are only available to users with a File feeds license. [Contact us](https://www.virustotal.com/gui/contact-us/) for more information.
> 
> 

This endpoint returns a single package containing all minutely packages returned in [/feeds/files/{time}](/reference/feeds-file) endpoint for a given hour. The returned file is a `.tar.bz2` file which contains the 60 minutely feeds for that hour.

The provided `time` argument must be in `YYYYMMDDhh` format. For example, time `2021012211` returns the batches correspoding to January 21st 2021 11:00 - 11:59 UTC. You can download batches up to 7 days old, and the most recent batch has always a 2 hours lag with respect with to the current time. This means that if the current time in UTC is T you can download batch T-2h but any more recent.

Successful calls to this endpoint will return a `302` redirect response to a URL from which the final batch file will be downloaded.

The downloaded file is a bzip2 tar file which include 60 files, one for each minute, these are UTF-8 text file which contains one JSON structure per line, where the structure represents a file object as returned by the GET /files/{id} endpoint. Besides the standard attributes usually found in all file objects, two additional context attributes are also included: download_url and submitter. The download_url attribute is a link that can be used to download the file itself, while submitter is a dictionary with lossy-ciphered non-identifiable information about who submitted the file to VirusTotal. Notice however that `submitter` is not present in all files, it will be absent when files are submitted via the web interface without triggering a new analysis due to recent submissions, or when files are re-analyzed by VirusTotal without being submitted by some external user.

**Shell**PythonClick `Try It!` to start a request and see the response here!