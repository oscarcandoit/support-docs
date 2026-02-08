---
title: "🔀 rules"
source: "https://docs.virustotal.com/reference/sigma-analysis-object-rules"
scraped_at: "2026-02-08T06:35:51.610Z"
---

**🚧
### DEPRECATED[](#deprecated)

Sigma analyses metadata is now included in both the File and File behaviour objects.

The *rules* relationship returns a list of *all matched rules for a given analysis***.

This relationship can be retrieved using the [relationships API endpoint](/reference/get-sigma-relationships) and contains a list of [Sigma Rule](/reference/sigma-rule-object) objects.

Sigma analysisExample
```
`{
 "data": [
 <MDXishSnakeCase0>,
 <MDXishSnakeCase0>,
 ...
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "action": "",
 "author": "Sami Ruohonen",
 "description": "Detects usage of attrib.exe to hide files from users.",
 "detection": {
 "condition": "selection and not (ini or intel)",
 "details": {
 "ini": "{\"CommandLine\":\"*\\\\desktop.ini *\"}",
 "intel": "{\"CommandLine\":\"+R +H +S +A \\\\\\\\*.cui\",\"ParentCommandLine\":\"C:\\\\WINDOWS\\\\system32\\\\\\\\*.bat\",\"ParentImage\":\"*\\\\cmd.exe\"}",
 "selection": "{\"CommandLine\":\"* +h *\",\"Image\":\"*\\\\attrib.exe\"}"
 }
 },
 "false_positives": [
 "igfxCUIService.exe hiding *.cui files via .bat script (attrib.exe a child of cmd.exe and igfxCUIService.exe is the parent of the cmd.exe)",
 "msiexec.exe hiding desktop.ini"
 ],
 "fields": [
 "CommandLine",
 "ParentCommandLine",
 "User"
 ],
 "level": "low",
 "log_source": {
 "category": "process_creation",
 "definition": "",
 "product": "windows",
 "service": ""
 },
 "references": [],
 "source": "Sigma Integrated Rule Set (GitHub)",
 "status": "experimental",
 "tags": [],
 "title": "Hiding Files with Attrib.exe"
 },
 "context_attributes": {
 "match": "$CommandLine: &#x27;attrib +H monitor.bak&#x27;, $EventID: &#x27;1&#x27;, $Image: &#x27;C:\\Windows\\System32\\attrib.exe&#x27;, $ParentCommandLine: &#x27;C:\\Windows\\system32\\cmd.exe /c attrib +H monitor.bak&#x27;"
 },
 "id": "5c3ea6806114163b8cdf5735aeb07e702ab63e0e486f721df84cf675e2b0a04b",
 "links": {
 "self": "https://www.virustotal.com/api/v3/sigma_rules/5c3ea6806114163b8cdf5735aeb07e702ab63e0e486f721df84cf675e2b0a04b"
 },
 "type": "sigma_rule"
 },
 {
 "attributes": {
 "action": "",
 "author": "Sami Ruohonen",
 "description": "Detects usage of attrib.exe to hide files from users.",
 "detection": {
 "condition": "selection and not (ini or intel)",
 "details": {
 "ini": "{\"CommandLine\":\"*\\\\desktop.ini *\"}",
 "intel": "{\"CommandLine\":\"+R +H +S +A \\\\\\\\*.cui\",\"ParentCommandLine\":\"C:\\\\WINDOWS\\\\system32\\\\\\\\*.bat\",\"ParentImage\":\"*\\\\cmd.exe\"}",
 "selection": "{\"CommandLine\":\"* +h *\",\"Image\":\"*\\\\attrib.exe\"}"
 }
 },
 "false_positives": [
 "igfxCUIService.exe hiding *.cui files via .bat script (attrib.exe a child of cmd.exe and igfxCUIService.exe is the parent of the cmd.exe)",
 "msiexec.exe hiding desktop.ini"
 ],
 "fields": [
 "CommandLine",
 "ParentCommandLine",
 "User"
 ],
 "level": "low",
 "log_source": {
 "category": "process_creation",
 "definition": "",
 "product": "windows",
 "service": ""
 },
 "references": [],
 "source": "Sigma Integrated Rule Set (GitHub)",
 "status": "experimental",
 "tags": [],
 "title": "Hiding Files with Attrib.exe"
 },
 "context_attributes": {
 "match": "$CommandLine: &#x27;attrib +H window_texts.txt&#x27;, $EventID: &#x27;1&#x27;, $Image: &#x27;C:\\Windows\\System32\\attrib.exe&#x27;, $ParentCommandLine: &#x27;C:\\Windows\\system32\\cmd.exe /c attrib +H window_texts.txt&#x27;"
 },
 "id": "5c3ea6806114163b8cdf5735aeb07e702ab63e0e486f721df84cf675e2b0a04b",
 "links": {
 "self": "https://www.virustotal.com/api/v3/sigma_rules/5c3ea6806114163b8cdf5735aeb07e702ab63e0e486f721df84cf675e2b0a04b"
 },
 "type": "sigma_rule"
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/sigma_analyses/c88c691ab968bd1bff58155ce1d18ef82558c6a655c9c31ae9bd564b8bfc7424/rules?cursor=STIKLg%3D%3D&limit=2",
 "self": "https://www.virustotal.com/api/v3/sigma_analyses/c88c691ab968bd1bff58155ce1d18ef82558c6a655c9c31ae9bd564b8bfc7424/rules?limit=2"
 },
 "meta": {
 "count": 4,
 "cursor": "STIKLg=="
 }
}`
```