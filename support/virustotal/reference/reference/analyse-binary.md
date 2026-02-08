---
title: "Analyse code blocks with Code Insights"
source: "https://docs.virustotal.com/reference/analyse-binary"
scraped_at: "2026-02-08T06:35:36.876Z"
---

> 🚧
> 
> 
> 
> This API endpoint is limited to 50 requests per day. Please use it with caution!
> 
> 

To analyze disassembled or decompiled code, use this endpoint. It requires the input code Base64-encoded and returns a Base64-encoded description of the functionality, focusing on aspects relevant to malware analysis.

Example request
`"data": {
 "code": "<_string_> Code block in Base64",
 "code_type": "<_string_> Whether the code is `disassembled` or `decompiled`"
}`
This endpoint can be used as well to query code blocks, chaining previous analyses with modifications or corrections made by the analyst as follows:

Example request
```
`"data": {
 "code": "<_string_> Code block in Base64",
 "code_type": "<_string_> Whether the code is `disassembled` or `decompiled`"
 "history": [
 {
 "request": "<_string_> Same or related code block in Base64",
 "response": {
 "summary":"<_string_> The summary explanation provided by Code Insights in a previous analysis of the same or related code block, which is used as context for the new analysis",
 "description":"<_string_> Remarks made by the human analyst related to this previous analysis",
 },
 },
 {
 "request": "<_string_> Same or related code block in Base64",
 "response": {
 "summary": "<_string_> The summary explanation provided by Code Insights in a previous analysis of the same or related code block, which is used as context for the new analysis",
 "description": "<_string_> Remarks made by the human analyst related to this previous analysis",
 }
 }
 ]
}`
```

# Examples[](#examples)

Python
```
`import requests
import base64

decompiled_code = &#x27;&#x27;&#x27;int create_persistence_entry(char *path_to_malware)
{
 HKEY hKey;
 DWORD result;
 result = RegOpenKeyExA(
 HKEY_CURRENT_USER,
 "Software\\Microsoft\\Windows\\CurrentVersion\\Run",
 0,
 KEY_SET_VALUE,
 &hKey
 );

 if (result == ERROR_SUCCESS) {
 result = RegSetValueExA(
 hKey,
 "MalwareEntry",
 0,
 REG_SZ,
 (const BYTE *)path_to_malware,
 (strlen(path_to_malware) + 1) * sizeof(char)
 );
 
 RegCloseKey(hKey);
 }
 return result;
}&#x27;&#x27;&#x27;
code_b64 = base64.b64encode(decompiled_code.encode(&#x27;utf-8&#x27;)).decode(&#x27;utf-8&#x27;)

url = f"https://www.virustotal.com/api/v3/codeinsights/analyse-binary"
payload = { "data": {
 &#x27;code&#x27;: code_b64,
 &#x27;code_type&#x27;: &#x27;decompiled&#x27;
 } 
 }
headers = {"accept": "application/json","x-apikey": <api-key>,"content-type": "application/json"}
response = requests.post(url, json=payload, headers=headers)
if response.status_code == 200:
 print(base64.b64decode(response.json()["data"]).decode(&#x27;utf-8&#x27;))`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!