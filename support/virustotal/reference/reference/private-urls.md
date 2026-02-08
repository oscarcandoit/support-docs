---
title: "🔒 Private URLs"
source: "https://docs.virustotal.com/reference/private-urls"
scraped_at: "2026-02-08T06:35:51.601Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

Private URLs are similar to [URLs](/reference/url-object), but they are only visible to the user who uploads the URL.

## Object attributes[](#object-attributes)

Most [URL&#x27;s](/reference/url-object) attributes are present in private URLs.

Private URL objectExample
`{
 "data": {
 "id": <string>,
 "type": "private_url",
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/urls/<id>"
 },
 "attributes": {
 "tags": [
 <string>,
 ...
 ],
 "html_meta": {
 "<str:tag_name>": ["<tag_value:string>"]
 },
 "favicon": {
 "raw_md5": <string>,
 "dhash": <string>
 },
 "title": <string>,
 "redirection_chain": [
 <string>,
 ...
 ],
 "tld": <string>,
 "url": <string>,
 "last_final_url": <string>,
 "last_analysis_results": {
 "Google Safebrowsing": {
 "method": <string>,
 "engine_name": <string>,
 "category": <string>,
 "result": <string>
 }
 },
 "last_http_response_content_length": <int>,
 "trackers": {
 "<str:tracker_name>": [
 {
 "id": "<string>",
 "timestamp": <int:timestamp>,
 "url": "<string>"
 },...
 ],....
 },
 "outgoing_links": [
 <string>,
 ...
 ],
 "last_http_response_content_sha256": <string>
 "last_http_response_code": <int>,
 "expiration": <int>,
 "last_analysis_stats": {
 "malicious": <int>,
 "suspicious": <int>,
 "undetected": <int>,
 "harmless": <int>,
 "timeout": <int>
 },
 "last_http_response_headers": {
 <string>,
 ...
 }
 }
 }
}`
```
`{
 "data": {
 "id": "7f182b8f63e6709a54645053736825e4c487e434239557ca197ae2cabe75feec",
 "type": "private_url",
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/urls/7f182b8f63e6709a54645053736825e4c487e434239557ca197ae2cabe75feec"
 },
 "attributes": {
 "html_meta": {},
 "redirection_chain": [
 "http://masmetodo.com/"
 ],
 "last_http_response_content_length": 57,
 "last_http_response_code": 200,
 "tags": [],
 "title": "",
 "tld": "com",
 "last_http_response_content_sha256": "7c80d872930ea719369314ee88eefa05181d758fc87e0a0a5cccbf9d36456966",
 "url": "http://masmetodo.com/",
 "last_analysis_results": {
 "Google Safebrowsing": {
 "method": "blacklist",
 "engine_name": "Google Safebrowsing",
 "category": "harmless",
 "result": "clean"
 }
 },
 "expiration": 1723897413,
 "outgoing_links": [],
 "last_analysis_stats": {
 "malicious": 0,
 "suspicious": 0,
 "undetected": 0,
 "harmless": 1,
 "timeout": 0
 },
 "last_http_response_headers": {
 "Connection": "keep-alive",
 "Content-Encoding": "gzip",
 "Content-Type": "text/html",
 "Transfer-Encoding": "chunked",
 "X-Accel-Version": "0.01",
 "X-Powered-By": "PleskLin",
 "Date": "Wed, 07 Aug 2024 12:46:37 GMT",
 "ETag": "W/\"260a46-39-605eeffe33b7a\"",
 "Last-Modified": "Fri, 22 Sep 2023 09:11:53 GMT",
 "Server": "nginx",
 "Vary": "Accept-Encoding"
 },
 "last_final_url": "http://masmetodo.com/",
 }
 }
}`
```

## Relationships[](#relationships)

Additionally, private URLs objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section.

The following table shows a summary of available relationships.

| Relationship | Return object type |
| --- | --- |
| analyses | List of [Private Analyses](/reference/private-analyses) |
| behaviours | List of [Private URLs Behaviours](/reference/private-url-behaviours) |
| last_serving_ip_address | A single [IP address](/reference/ip-object) |
| network_location | A single [IP address](/reference/ip-object) or [Domain](/reference/domains-object) |
| downloaded_files | List of downloaded [Files](/reference/files) |