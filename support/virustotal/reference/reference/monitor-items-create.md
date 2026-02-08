---
title: "Upload a file or create a new folder"
source: "https://docs.virustotal.com/reference/monitor-items-create"
scraped_at: "2026-02-08T06:35:53.197Z"
---

This endpoint can be used to create or overwrite an already existing file using a multipart/form-data encoded request. The file has to be smaller than 32MB, for bigger files use a URL returned by [/items/upload_url](/reference/monitor-items-upload-url).

The parameter `path` indicates the path relative to your monitor root folder where the file is going to be stored. This path must include the name of the file being uploaded. For example `/folder/myfile.exe`. You can also provide a [MonitorItemID](/reference/monitoritem-description) representing a path to a file previously uploaded to VT Monitor and this will upload the new file to this path, overwriting the file referenced by the MonitorItemID.

To create a new folder just make a request with the desired `path` or `item` ending it with a slash (`/`), for example `/mynewfolder/`.

The [MonitorItemID](/reference/monitoritem-description) returned in the response can be used at a later stage to operate with the given file or folder and request its analysis information.

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor/items"

files = {&#x27;file&#x27;: (&#x27;filepath&#x27;, open(&#x27;<filename>&#x27;, &#x27;rb&#x27;), &#x27;application/octet-stream&#x27;)}
args = {&#x27;path&#x27;: &#x27;<monitor-path>&#x27;}

response = session.post(url, files=files, data=args)
print(response.text)`
```

cURL
```
`curl --request POST \
 --url &#x27;https://www.virustotal.com/api/v3/monitor/items&#x27; \
 --header &#x27;X-Apikey: <api-key>&#x27; \
 --form &#x27;path=<monitor-folder-ending-with-slash>&#x27; \
 `
```

Python
```
`import requests

session = requests.Session()
session.headers = {&#x27;X-Apikey&#x27;: &#x27;<api-key>&#x27;}

url = "https://www.virustotal.com/api/v3/monitor/items"
args = {&#x27;path&#x27;: &#x27;<monitor-folder-ending-with-slash>&#x27;}

response = session.post(url, data=args)
print(response.text)`
```

JSON
```
`{
 "data": {
 "type": "monitor_item", 
 "id": "[MONITOR-ID]"
 }
}
`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!