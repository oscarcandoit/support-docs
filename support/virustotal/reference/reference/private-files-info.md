---
title: "Get a private file report"
source: "https://docs.virustotal.com/reference/private-files-info"
scraped_at: "2026-02-08T06:35:39.843Z"
---

> 🚧
> ### Special privileges required[](#special-privileges-required)
> 
> 
> Private Scanning endpoints are only available to users with [Private Scanning license](https://www.virustotal.com/gui/private-scanning-overview).
> 
> 

This endpoint return information about a file scanned privately. Notice that it only accepts SHA-256 as the file&#x27;s ID, MD5 and SHA-1 are not supported like in its [GET /files/{id}](/reference/file-info) public counterpart. The SHA-256 for the analysed file can be computed by yourself or obtained from the response to the call to [GET /analyses/{id}](/reference/private-analysis).

Example response
```
`{
 "data": {
 "attributes": {
 "sha1": "7bae8076a5771865123be7112468b79e9d78a640",
 "magic": "ASCII text",
 "tags": [
 "text"
 ],
 "exiftool": {
 "MIMEType": "text/plain",
 "LineCount": "1",
 "MIMEEncoding": "us-ascii",
 "FileTypeExtension": "txt",
 "FileType": "TXT",
 "WordCount": "1",
 "Newlines": "Unix LF"
 },
 "trid": [
 {
 "file_type": "file seems to be plain text/ASCII",
 "probability": 0.0
 }
 ],
 "vhash": "9eecb7db59d16c80417c72d1e1f4fbf1",
 "sha256": "11a77c3d96c06974b53d7f40a577e6813739eb5c811b2a86f59038ea90add772",
 "ssdeep": "3:tdn:T",
 "md5": "e5828c564f71fea3a12dde8bd5d27063",
 "size": 5
 },
 "type": "private_file",
 "id": "11a77c3d96c06974b53d7f40a577e6813739eb5c811b2a86f59038ea90add772",
 "links": {
 "self": "https://www.virustotal.com/api/v3/private/files/11a77c3d96c06974b53d7f40a577e6813739eb5c811b2a86f59038ea90add772"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!