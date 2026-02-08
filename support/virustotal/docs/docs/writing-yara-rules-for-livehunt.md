---
title: "File hunting: Writing YARA rules for Livehunt"
source: "https://docs.virustotal.com/docs/writing-yara-rules-for-livehunt"
scraped_at: "2026-02-08T06:19:21.780Z"
---

Livehunt uses an up-to-date version of YARA, which means that the [latest YARA documentation](https://virustotal.github.io/yara-x/docs/intro/getting-started/) is usually the place to go for a detailed description of the language and its features. However, there are a few things that you need to know while creating YARA rules specifically tailored for Livehunt.

- 

Rules for which YARA raise performance warnings are not accepted by Livehunt. Such rules are usually very slow and degrade the service both for you and the rest of the users.

- 

You can not use **include** statements in your rules.

- 

Standard modules currently supported are:

[**pe**](https://virustotal.github.io/yara-x/docs/modules/pe/)

- [**elf**](https://virustotal.github.io/yara-x/docs/modules/elf/)

- [**dotnet**](https://virustotal.github.io/yara-x/docs/modules/dotnet/)

- [**lnk**](https://virustotal.github.io/yara-x/docs/modules/lnk/)

- [**macho**](https://virustotal.github.io/yara-x/docs/modules/macho/)

- [**math**](https://virustotal.github.io/yara-x/docs/modules/math/)

- [**magic**](https://yara.readthedocs.io/en/latest/modules/magic.html)

- [**hash**](https://virustotal.github.io/yara-x/docs/modules/hash/)

- [**string**](https://virustotal.github.io/yara-x/docs/modules/string/)

- [**time**](https://virustotal.github.io/yara-x/docs/modules/time/)

In addition to the standard modules enumerated above, you can also use the **vt** module. This module has been specifically created for Livehunt and Retrohunt and exposes additional information about the file being scanned. Keep reading for more information about this module.

[Using file&#x27;s metadata in your rules](#using-files-metadata-in-your-rules)

[The *vt* module](#the-vt-module)

[Creating rules based on file behavior](#creating-rules-based-on-file-behavior)

[HTTP Methods](#http-methods)

[Network Protocols](#network-protocols)

[Behaviour traits](#behaviour-traits)

[Behaviour verdicts](#behaviour-verdicts)

[File types](#file-types)

[Legacy variables](#legacy-variables)

## Using file&#x27;s metadata in your rules[](#using-files-metadata-in-your-rules)

Most YARA rules are based in patterns found inside the files themselves, however this is not always enough. Sometimes you may need to create rules that leverage additional information that VirusTotal has about the file. For example, you may want to create a rule that only applies to a certain file type, or files that are detected by at least one antivirus, or perhaps you are only interested in files that are submitted to VirusTotal for the first time or from a given country. All these cases, and many more, can be expressed in your YARA rules.

In order to expose all the information that VirusTotal have about the file being scanned we have created a custom YARA module named **vt**. This module contains metadata like antivirus signatures, file type, file behavior, submitter, etc. The **vt** module replaces the previous mechanism for exposing file&#x27;s metadata based in custom variables like **signatures**, **positives**, **file_name**, and so on. These variables have been deprecated, but they will continue to work and are still documented in the [Legacy variables](#legacy-variables) section.

## The *vt* module[](#the-vt-module)

**⚠️
### The vt module always matches the last submission, i.e. the one that generated the YARA matching event.[](#the-vt-module-always-matches-the-last-submission-ie-the-one-that-generated-the-yara-matching-event)

The vt** module exposes all the metadata that VirusTotal has about a file to YARA, so that you can create Livehunt rules based on that metadata. Let&#x27;s see some examples:

**`import "vt"

rule infected_pe {
  condition:
 vt.metadata.analysis_stats.malicious > 1 and vt.metadata.file_type == vt.FileType.PE_EXE
}`

```
`import "vt"

rule new_file_from_china {
  condition:
 vt.metadata.new_file and vt.metadata.submitter.country == "CN"
}`
```

```
`import "vt"

rule zbot {
 condition:
 for any engine, signature in vt.metadata.signatures : (
 signature contains "zbot"
 )
}`
```

 

 

From the examples above you probably already got the idea. The vt** module has a lot of information about the file being scanned, and that information can be used in your Livehunt rules for filtering unwanted files and focusing in what you are really looking for. You are not limited to creating rules based on file content alone, there is a lot of metadata at your disposal as you can see in the table below.

| **Field** | **Type** | **Description** | **Example** |
| --- | --- | --- | --- |
| vt.metadata.analysis_stats.malicious | integer | Number of antivirus engines that detected the file as malicious. | vt.metadata.analysis_stats.malicious < 10 |
| vt.metadata.analysis_stats.undetected | integer | Number of antivirus engines that didn&#x27;t detected the file. | vt.metadata.analysis_stats.undetected > 20 |
| vt.metadata.analysis_stats.failure | integer | Number of antivirus engines that failed scanning the file. | vt.metadata.analysis_stats.failure > 0 |
| vt.metadata.analysis_stats.type_unsupported | integer | Number of antivirus engines that don&#x27;t support the file&#x27;s type. | vt.metadata.analysis_stats.type_unsupported > 0 |
| vt.metadata.exiftool | dictionary | Dictionary that contains the information generated by [ExifTool](https://exiftool.org/) for the file being scanned. Both keys and values are strings. ExifTool generates numeric values for some properties, but values in YARA dictionaries must have the same time, therefore they are converted to strings. | vt.metadata.exiftool["MIMEType"] == "application/pdf" andvt.metadata.exiftool["PageCount"] == "37" |
| vt.metadata.first_submission_date | integer | Date on which the file was submitted to VirusTotal for the first time, as a UNIX timestamp. | vt.metadata.first_submission_date < 1582934400 // 2020-02-29 |
| vt.metadata.file_name | string | File&#x27;s name as it was last submitted to VirusTotal. | vt.metadata.file_name contains "foobar" |
| vt.metadata.file_size | integer | File size in bytes. | vt.metadata.file_size > 100KB |
| vt.metadata.file_type | integer | One of the types listed in the [file types](#file-types) table. | vt.metadata.file_type == vt.FileType.PE_DLL |
| vt.metadata.file_type_tags | array of strings | Tags associated to the file&#x27;s type, as listed in the [file types](#file-types) table | for any tag in vt.metadata.file_type_tags : ( tag == "pedll") |
| vt.metadata.goresym.version | string | Version of the Golang compiler used | vt.metadata.goresym.version == "1.18.7" |
| vt.metadata.goresym.arch | string | Target architecture for a Golang binary | vt.metadata.goresym.arch == "386" |
| vt.metadata.goresym.os | string | Target OS for a Golang binary | vt.metadata.goresym.os == "windows" |
| vt.metadata.goresym.build_id | string | Build ID of Golang binary | vt.metadata.goresym.build_id == "A_l09FDsHNuaJaKZ8MRU/H38D...HwLHCg-V/oTM-3A-yDyJSq4LWt0fu" |
| vt.metadata.goresym.build_info.deps | array of structs | Golang binary&#x27;s dependencies | for any dep in vt.metadata.goresym.build_info.deps : ( dep.path == "github.com/mattn/go-isatty" and dep.version == "v0.0.14") |
| vt.metadata.goresym.build_info.path | string | Golang package path | vt.metadata.goresym.build_info.path == "github.com/portapps/discord-portable" |
| vt.metadata.goresym.build_info.settings | dictionary | Dictionary where keys are setting names and values are the setting value. | vt.metadata.goresym.build_info.settings["vcs.revision"] startswith "2f0e4453eec4" |
| vt.metadata.goresym.summary.num_dependencies | integer | Total number of dependencies for a Golang binary | |
| vt.metadata.goresym.summary.num_interfaces | integer | Total number of interfaces in a Golang binary | |
| vt.metadata.goresym.summary.num_types | integer | Total number of types in a Golang binary | |
| vt.metadata.goresym.summary.num_std_functions | integer | Number of functions from standard library used by a Golang binary. | |
| vt.metadata.goresym.summary.num_user_functions | integer | Number of user-defined functions in a Golang binary. | |
| vt.metadata.imphash | string | File&#x27;s [import hash](https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html). | vt.metadata.imphash == "9129bdbc18cfd1aba498c94e809567d5" |
| vt.metadata.new_file | boolean | True if the file is being submitted to VirusTotal for the first time. | not vt.metadata.new_file |
| vt.metadata.magic | string | File&#x27;s type as returned by Linux&#x27;s *[file](https://en.wikipedia.org/wiki/File_(command))* command. | vt.metadata.magic contains "Audio" |
| vt.metadata.main_icon.dhash | string | Hash that clusters together files with [similar icons or thumbnails](https://pypi.org/project/dhash/). | vt.metadata.main_icon.dhash == "00ccc4d0c4fc7c02" |
| vt.metadata.main_icon.raw_md5 | string | MD5 of the icon associated to the file. | vt.metadata.main_icon.raw_md5 == "997382cd5338048b70dbfbcd9b125552" |
| vt.metadata.malware_families | array of strings | List of family names produced from a malware config extraction process. Samples with malware configs can be obtained searching [have:malware_config](https://www.virustotal.com/gui/search/have%253Amalware_config/files), family names will be displayed in the detections tab under "Malware config detection" or in the details tab under "Malware configuration file" where there is the full report. | for any family_name in vt.metadata.malware_families : ( family_name == "redline") |
| vt.metadata.md5 | string | File&#x27;s MD5. | vt.metadata.md5 == "44d88612fea8a8f36de82e1278abb02f" |
| vt.metadata.sha256 | string | File&#x27;s SHA-256. | vt.metadata.sha256 == "275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f" |
| vt.metadata.sha1 | string | File&#x27;s SHA-1. | vt.metadata.sha1 == "3395856ce81f2b7382dee72602f798b642f14140" |
| vt.metadata.signatures | dictionary | Dictionary where keys are antivirus names and values are malware signatures. The casing for both antivirus names and signatures is exactly as they appear in the web reports or API responses. | for any engine, signature in vt.metadata.signatures : ( engine == "Kaspersky" and signature contains "") |
| vt.metadata.ssdeep | string | File&#x27;s [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html) hash. | vt.metadata.ssdeep == "3:a+JraNvsgzsVqSwHq9:tJuOgzsko" |
| vt.metadata.subfile | boolean | True if the file being scanned is not the one submitted to VirusTotal but one derived from it. For example, when a PE file packed with UPX is submitted to VirusTotal, both the original file and the unpacked file are scanned. This is true for the unpacked file and false for the original packed one. | |
| vt.metadata.submitter.city | string | City from where the file was submitted, referred to the last submission. All lowercases. | vt.metadata.submitter.city == "madrid" |
| vt.metadata.submitter.country | string | Country from where the file was submitted, referred to the last submission. This is a two-letter [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code, in uppercase. | vt.metadata.submitter.country == "ES" |
| vt.metadata.tags | array of strings | File&#x27;s tags. | for any tag in vt.metadata.tags : ( tag == "signed" ) |
| vt.metadata.telfhash | string | File&#x27;s [telfhash](https://github.com/trendmicro/telfhash). | vt.metadata.telfhash == "t1992121a2ba6509a0f1fbf561b304d0450d200a1416fa36f2c275b9fadba5b820f78c37" |
| vt.metadata.tlsh | string | File&#x27;s [tlsh](https://tlsh.org/) hash. | vt.metadata.tlsh == "T1BA45332537E1A552EB728E3053E65759CDB8B2379D66C32F3E5A100E1F72BA07D32A10" |
| vt.metadata.times_submitted | integer | Number of times the file has been submitted to VirusTotal. This is 1 for the first submission. | vt.metadata.times_submitted > 5 |
| vt.metadata.unique_sources | integer | Number of unique sources that have submitted this file. | vt.metadata.unique_sources > 3 |
| vt.metadata.vhash | string | File&#x27;s vhash. | |

[Back to top](#top)

## Creating rules based on file behavior[](#creating-rules-based-on-file-behavior)

The **vt** module not only exposes information about the file itself and how it was detected by antivirus engines, it also exposes information about how the file *behaves*. In VirusTotal we run executable files through multiple sandboxes, which include our own in-house developed sandbox called [Jujubox](https://blog.virustotal.com/2019/10/in-house-dynamic-analysis-virustotal-jujubox.html), and some third-party sandboxes. The behavioral information generated by all those sandboxes is normalized into a common format, and mixed together as if it was generated by a single sandbox. This aggregated behavior report is what the **vt** module exposes to your rule. Here you have a few examples:

**`import "vt"

rule drops_foo_exe {
  condition:
 for any file_dropped in vt.behaviour.files_dropped : (
 file_dropped.path contains "foo.exe"
 )
}`

```
`import "vt"

rule mutex_hgl345 {
 condition:
 for any mutex in vt.behaviour.mutexes_created : (
 mutex == "HGL345"
 )
}`
```

```
`import "vt"

rule persistence_and_self_deletion {
 condition:
 for any trait in vt.behaviour.traits : ( trait == vt.BehaviourTrait.PERSISTENCE ) and
 for any trait in vt.behaviour.traits : ( trait == vt.BehaviourTrait.SELF_DELETE )
}`
```

 The list below describes all the existing behaviour-related fields:

| Variable** | **Type** | **Description** | **Example** |
| --- | --- | --- | --- |
| vt.behaviour.calls_highlighted | array of strings | API calls that are worth remarking because they are suspicious (e.g. "android.media.AudioRecord.startRecording", "GetTickCount" | |
| vt.behaviour.text_highlighted | array of strings | Text that can provide further context about the file, this might be windows titles, dialogs, outputs streams, etc. | |
| vt.behaviour.text_decoded | array of strings | Strings that are either encoded or decoded during the observed time frame, we just record the decoded strings in plain form. | |
| vt.behaviour.traits | array of integers | List that contains a subset of the values listed in the [behaviour traits](#behaviour-traits) table. | for any t in vt.behaviour.traits : ( t == vt.BehaviourTrait.LONG_SLEEPS) |
| vt.behaviour.invokes | array of strings | | |
| vt.behaviour.verdicts | array of integers | Some sandboxes produce a verdict based on the file behaviour. This list contains one or more of the values listed in the [behaviour verdicts](#behaviour-verdicts) table. | for any t in vt.behaviour.verdicts : ( t == vt.BehaviourVerdict.RANSOM) |
| vt.behaviour.verdict_labels | string | List that contains the verdict labels based on the file behaviour sandboxes. | for any label in vt.behaviour.verdict_labels : ( label contains "PDFPhish") |
| vt.behaviour.mitre_attack_techniques | string | String containing the mitre attack techniques. | for any technique in vt.behaviour.mitre_attack_techniques : ( technique.id == "t1012") |
| **Files** | | | |
| vt.behaviour.files_attribute_changed | array of strings | Paths of the files whose attributes have changed. | for any f in vt.behaviour.files_attribute_changed : ( f contains ".exe") |
| vt.behaviour.files_copied | array of structs | Structures with information about files that have been copied. | for any f in vt.behaviours.files_copied : ( f.source contains ".exe" and f.destination contains "system32") |
| vt.behaviour.files_copied[x].source | string | Path where the file was copied from. | |
| vt.behaviour.files_copied[x].destination | string | Path where the file was copied to. | |
| vt.behaviour.files_deleted | array of strings | Paths of the files that have been deleted. | |
| vt.behaviour.files_dropped | array of structs | Structures with information about files that have been dropped. | |
| vt.behaviour.files_dropped[x].path | string | Path of the dropped file. | |
| vt.behaviour.files_dropped[x].sha256 | string | SHA-256 of the dropped file. | |
| vt.behaviour.files_dropped[x].type | integer | Type of the dropped file as listed in the [file types](#file-types) table. | |
| vt.behaviour.files_dropped[x].process_name | string | Name of the process that dropped the file. | |
| vt.behaviour.files_dropped[x].process_id | string | ID of the process that dropped the file. | |
| vt.behaviour.files_opened | array of strings | Paths of the files that have been opened. | |
| vt.behaviour.files_written | array of strings | Paths of the files that have been written. | |
| **Network** | | | |
| vt.behaviour.dns_lookups | array of structs | List of DNS resolutions performed. | |
| vt.behaviour.dns_lookups[x].hostname | string | Hostname in the DNS lookup request. | |
| vt.behaviour.dns_lookups[x].resolved_ips | array of strings | List of IP address returned for the requested hostname. | |
| vt.behaviour.hosts_file | string | Content of the "hosts" file. | |
| vt.behaviour.ip_traffic | array of structs | List of established IP connections. | |
| vt.behaviour.ip_traffic[x].destination_ip | string | Destination IP address. | |
| vt.behaviour.ip_traffic[x].destination_ip_as_int | integer | Destination IP address dotless decimal number notation. | for any t in vt.behaviour.ip_traffic : ( t.destination_ip_as_int == 3941835776) |
| vt.behaviour.ip_traffic[x].destination_ip_asn | integer | Destination IP Autonomous System Number. | for any t in vt.behaviour.ip_traffic : ( t.destination_ip_asn == 74838) |
| vt.behaviour.ip_traffic[x].destination_port | integer | Destination port. | |
| vt.behaviour.ip_traffic[x].transport_layer_protocol | integer | One of the constants listed in [network protocols](#network-protocols) | |
| vt.behaviour.http_conversations | array of structs | List of HTTP requests performed. | |
| vt.behaviour.http_conversations[x].url | string | Requested URL. | |
| vt.behaviour.http_conversations[x].request_method | integer | One of the constants listed in [HTTP methods](#http-methods) | for any c in vt.behaviour.http_conversations : (  c.request_method == vt.Http.Method.GET) |
| vt.behaviour.http_conversations[x].request_headers | dictionary | HTTP request headers. Notice that dictionary keys are case-sensitive and therefore request_headers["user-agent"] is not the same than request_headers["User-Agent"]. The header name appears as reported by the sandbox. | for any c in vt.behaviour.http_conversations : (  c.request_headers["user-agent"] == "Moxilla") |
| vt.behaviour.http_conversations[x].response_headers | dictionary | HTTP response headers. | |
| vt.behaviour.http_conversations[x].response_status_code | integer | HTTP status code returned by the server. | |
| vt.behaviour.http_conversations[x].response_body_filetype | integer | Type of the response&#x27;s body, if it was one of the recognizable [file types](#file-types). | |
| vt.behaviour.mbc[x].id | string | MBC identifier. Check [Malware Behavior Catalog](https://github.com/MBCProject/mbc-markdown?tab=readme-ov-file#identifiers) for more info. | for any catalog in vt.behaviour.mbc: (
 catalog.id == "B0003.003"
) |
| vt.behaviour.mbc[x].method | string | Textual description of the [method](https://github.com/MBCProject/mbc-markdown?tab=readme-ov-file#methods) used. | for any catalog in vt.behaviour.mbc: (
 catalog.method == "Delayed Execution"
) |
| vt.behaviour.mbc[x].objective | string | Textual description of the [objective](https://github.com/MBCProject/mbc-markdown#malware-objective-descriptions) used. | for any catalog in vt.behaviour.mbc: (
 catalog.objective == "Anti-Behavioral Analysis"
) |
| vt.behaviour.mbc[x].behavior | string | Textual description of the [behavior](https://github.com/MBCProject/mbc-markdown?tab=readme-ov-file#mbc-behaviors) used. | for any catalog in vt.behaviour.mbc: (
 catalog.behavior == "Dynamic Analysis Evasion"
) |
| vt.behaviour.smtp_conversations[x].hostname | string | Host name of the SMTP server | |
| vt.behaviour.smtp_conversations[x].destination_ip | integer | IP address of the SMTP server | |
| vt.behaviour.smtp_conversations[x].destination_port | integer | Port number of the SMTP server (usually 25) | |
| vt.behaviour.smtp_conversations[x].smtp_from | string | MAIL FROM: field in the SMTP protocol | |
| vt.behaviour.smtp_conversations[x].smtp_to | array of strings | MAIL TO: field in the SMTP protocol | |
| vt.behaviour.smtp_conversations[x].message_from | array of strings | "from" field in message header | |
| vt.behaviour.smtp_conversations[x].message_to | array of strings | "to" field in message header | |
| vt.behaviour.smtp_conversations[x].message_cc | array of strings | "cc" field in message header | |
| vt.behaviour.smtp_conversations[x].message_bcc | array of strings | "bcc" field in message header | |
| vt.behaviour.smtp_conversations[x].timestamp | string | Message timestamp. Example: "Thu, 16 Jul 2020 6:1:58 GMT" | |
| vt.behaviour.smtp_conversations[x].subject | string | Message subject | |
| vt.behaviour.smtp_conversations[x].html_body | string | Message body in HTML form | |
| vt.behaviour.smtp_conversations[x].txt_body | string | Message body in text form | |
| vt.behaviour.smtp_conversations[x].x_mailer | string | Program used for sending the email. Same than "X-Mailer" header. | |
| vt.behaviour.tls | array of structs | Contacted domains/IPs certificates. | |
| vt.behaviour.tls[x].issuer | dictionary | Certificate issuer information. Keys are certificate fields (C, CN, O, etc.) as strings and values are strings. | for any t in vt.behaviour.tls: (t.issuer["CN"] == "Foobar") |
| vt.behaviour.tls[x].ja3 | string | Certificate JA3. | for any t in vt.behaviour.tls: (t.ja3 == "00112233445566778899aabbccddeeff") |
| vt.behaviour.tls[x].ja3s | string | Certificate JA3s. | for any t in vt.behaviour.tls: (t.ja3s == "00112233445566778899aabbccddeeff") |
| vt.behaviour.tls[x].serial_number | string | Certificate serial number. | for any t in vt.behaviour.tls: (t.serial_number == "00112233445566778899aabbccddeeff") |
| vt.behaviour.tls[x].sni | string | Certificate&#x27;s server name indication. | for any t in vt.behaviour.tls: (t.sni matches /example.com/) |
| vt.behaviour.tls[x].thumbprint | string | Certificate thumbprint. | for any t in vt.behaviour.tls: (t.thumbprint == "00112233445566778899aabbccddeeff00112233") |
| vt.behaviour.tls[x].subject | dictionary | Certificate subject information. Same format as **`issuer` field. | for any t in vt.behaviour.tls: (t.issuer["CN"] == "example.com") |
| vt.behaviour.tls[x].version | string | TLS version. | for any t in vt.behaviour.tls: (t.version == "TLS 1.2") |
| Permissions** | | | |
| vt.behaviour.permissions_checked | array of structs | Permissions checked by the application. | |
| vt.behaviour.permissions_checked[x].permission | string | Permission checked, example: "android.permission.INTERNET" | |
| vt.behaviour.permissions_checked[x].owner | string | | |
| vt.behaviour.permissions_requested | array of strings | Permissions requested by the application. | for any p in vt.behaviour.permissions_requested : (  p == "android.permission.BLUETOOTH") |
| **Processes** | | | |
| vt.behaviour.command_executions | array of strings | Commands executed, including their command-line arguments. | for any cmd in vt.behaviour.command_executions : (  cmd contains "cmd.exe /Q /c") |
| vt.behaviour.modules_loaded | array of strings | Modules or libraries dynamically loaded (e.g. DLLs loaded with LoadLibrary in Windows, DEX and .class files dynamically loaded in Android) | for any lib in vt.behaviour.modules_loaded : (  lib == "zlib.dll") |
| vt.behaviour.mutexes_created | array of strings | Mutexes created. | for any mutex in vt.behaviour.mutexes_created : (  mutex contains "HGL345") |
| vt.behaviour.mutexes_opened | array of strings | Mutexes opened. | |
| vt.behaviour.processes_created | array of strings | Processes created. | |
| vt.behaviour.processes_injected | array of strings | Processes in which some kind of code was injected. For instance, in Window this is commonly done using CreateRemoteThread. | |
| vt.behaviour.processes_killed | array of strings | Processes that were explicitly killed. | |
| vt.behaviour.processes_terminated | array of strings | Processes that terminated during the observed time, not necessarily killed. | |
| vt.behaviour.signals_hooked | array of strings | Signals hooked. In Windows this includes the windows messages hooked with [SetWindowsHook](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowshookexa) and the string contains both the hook type and the function used (i.e "WH_KEYBOARD - SetWindowsHook")
In Android registered receivers are considered hooks. | Windows: for any s in vt.behaviour.signals_hooked : ( s contains "WH_KEYBOARD") Android: for any s in vt.behaviour.signals_hooked : ( s == "android.intent.action.PROXY_CHANGE") |
| vt.behaviour.signals_observed | array of strings | From the signals hooked which were actually observed. | |
| **Services** | | | |
| vt.behaviour.services_bound | array of strings | [Service binding](https://developer.android.com/guide/components/bound-services.html) applies only to Android. A bind operation takes a component, an action, and potentially multiple extras. These are represented as: | for any svc in vt.behaviour.services_bound : ( svc contains "gms.analytics.service.START") |
| vt.behaviour.services_created | array of strings | Services created. In some OSes services are simply any program that runs in the background without user interaction. | for any svc in vt.behaviour.services_created : ( svc == "eckwIIMB") |
| vt.behaviour.services_opened | array of strings | Services opened. | |
| vt.behaviour.services_started | array of strings | Services started. | |
| vt.behaviour.services_stopped | array of strings | Services stopped. | |
| **Registry** | | | |
| vt.behaviour.registry_keys_deleted | array of strings | Deleted registry keys. | for any key in vt.behaviour.registry_key_deleted : ( key contains "") |
| vt.behaviour.registry_keys_opened | array of strings | Opened registry keys. | |
| vt.behaviour.registry_keys_set | array of structs | Modified registry keys and their new values. | for any r in vt.behaviour.registry_keys_set : (  r.key matches /\windows\currentversion\run/i and r.value contains "VMIntel386.exe") |
| vt.behaviour.registry_keys_set[x].key | string | Registry key. | |
| vt.behaviour.registry_keys_set[x].value | string | New value for registry key. | |
| **Android-specific** | | | |
| vt.behaviour.shared_preferences_lookups | array of strings | [Shared preferences](https://developer.android.com/reference/android/content/SharedPreferences.html) that have been read. | |
| vt.behaviour.shared_preferences_sets | array of structs | Shared preferences that have been modified. | |
| vt.behaviour.shared_preferences_sets[x].key | string | Shared preference key. | |
| vt.behaviour.shared_preferences_sets[x].value | string | New value for preference. | |
| vt.behaviour.system_property_lookups | array of strings | System properties that have been read. | |
| vt.behaviour.system_property_sets | array of structs | System properties that have been modified. | |
| vt.behaviour.system_property_sets[x].key | string | Property key. | |
| vt.behaviour.system_property_sets[x].value | string | New value for property. | |
| **Windows** | | | |
| vt.behaviour.windows_hidden | array of strings | Information about windows that have been hidden. The string contains the caption of the hidden Window and the name of the process owning the window. | for any w in vt.behaviour.windows_hidden : (  w contains "cmd.exe /C") |
| vt.behaviour.windows_searched | array of strings | Windows that have been searched for (e.g. using [FindWindow](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-findwindowa)). The strings can contain the window&#x27;s name, the window&#x27;s class name, or both. | for any w in vt.behaviour.windows_searched : (  w contains "BANCO REAL") |

[Back to top](#top)

### HTTP methods[](#http-methods)

| |
| --- |
| vt.Http.Method.GET |
| vt.Http.Method.HEAD |
| vt.Http.Method.PATCH |
| vt.Http.Method.POST |
| vt.Http.Method.PUT |
| vt.Http.Method.DELETE |
| vt.Http.Method.TRACE |
| vt.Http.Method.OPTIONS |
| vt.Http.Method.CONNECT |

## Network protocols[](#network-protocols)

| |
| --- |
| vt.Net.Protocol.ICMP |
| vt.Net.Protocol.IGMP |
| vt.Net.Protocol.TCP |
| vt.Net.Protocol.UDP |
| vt.Net.Protocol.ESP |
| vt.Net.Protocol.AH |
| vt.Net.Protocol.L2TP |
| vt.Net.Protoco.SCTP |

## Behaviour traits[](#behaviour-traits)

| |
| --- |
| vt.BehaviourTrait.BIG_UPSTREAM |
| vt.BehaviourTrait.CHECKS_BIOS |
| vt.BehaviourTrait.CHECKS_CPU_NAME |
| vt.BehaviourTrait.CHECKS_DISK_SPACE |
| vt.BehaviourTrait.CHECKS_GPS |
| vt.BehaviourTrait.CHECKS_HOSTNAME |
| vt.BehaviourTrait.CHECKS_MEMORY_AVAILABLE |
| vt.BehaviourTrait.CHECKS_NETWORK_ADAPTERS |
| vt.BehaviourTrait.CHECKS_PCI_BUS |
| vt.BehaviourTrait.CHECKS_USB_BUS |
| vt.BehaviourTrait.CLIPBOARD |
| vt.BehaviourTrait.CRYPTO |
| vt.BehaviourTrait.DECRYPTS_EXE |
| vt.BehaviourTrait.DETECT_DEBUG_ENVIRONMENT |
| vt.BehaviourTrait.DIRECT_CPU_CLOCK_ACCESS |
| vt.BehaviourTrait.EXECUTES_DROPPED_FILE |
| vt.BehaviourTrait.FTP_COMMUNICATION |
| vt.BehaviourTrait.HOSTS_MODIFIER |
| vt.BehaviourTrait.INSTALLS_BROWSER_EXTENSION |
| vt.BehaviourTrait.IRC_COMMUNICATION |
| vt.BehaviourTrait.LONG_SLEEPS |
| vt.BehaviourTrait.MACRO_ANTI_ANALYSIS |
| vt.BehaviourTrait.MACRO_COPY_FILE |
| vt.BehaviourTrait.MACRO_CREATE_DIR |
| vt.BehaviourTrait.MACRO_CREATE_FILE |
| vt.BehaviourTrait.MACRO_CREATE_OLE |
| vt.BehaviourTrait.MACRO_DOWNLOAD_URL |
| vt.BehaviourTrait.MACRO_ENUM_WINDOWS |
| vt.BehaviourTrait.MACRO_ENVIRON |
| vt.BehaviourTrait.MACRO_HANDLE_FILE |
| vt.BehaviourTrait.MACRO_HIDE_APP |
| vt.BehaviourTrait.MACRO_OPEN_FILE |
| vt.BehaviourTrait.MACRO_POWERSHELL |
| vt.BehaviourTrait.MACRO_REGISTRY |
| vt.BehaviourTrait.MACRO_RUN_DLL |
| vt.BehaviourTrait.MACRO_RUN_FILE |
| vt.BehaviourTrait.MACRO_SAVE_WORKBOOK |
| vt.BehaviourTrait.MACRO_SEND_KEYS |
| vt.BehaviourTrait.MACRO_WRITE_FILE |
| vt.BehaviourTrait.MYSQL_COMMUNICATION |
| vt.BehaviourTrait.OBFUSCATED |
| vt.BehaviourTrait.PASSWORD_DIALOG |
| vt.BehaviourTrait.PERSISTENCE |
| vt.BehaviourTrait.REFLECTION |
| vt.BehaviourTrait.RUNTIME_MODULES |
| vt.BehaviourTrait.SELF_DELETE |
| vt.BehaviourTrait.SENDS_SMS |
| vt.BehaviourTrait.SMTP_COMMUNICATION |
| vt.BehaviourTrait.SSH_COMMUNICATION |
| vt.BehaviourTrait.SUDO |
| vt.BehaviourTrait.SUSPICIOUS_DNS |
| vt.BehaviourTrait.SUSPICIOUS_UDP |
| vt.BehaviourTrait.TELEPHONY |
| vt.BehaviourTrait.TELNET_COMMUNICATION |
| vt.BehaviourTrait.TUNNELING |

## Behaviour verdicts[](#behaviour-verdicts)

| |
| --- |
| vt.BehaviourVerdict.ADWARE |
| vt.BehaviourVerdict.BANKER |
| vt.BehaviourVerdict.CLEAN |
| vt.BehaviourVerdict.EVADER |
| vt.BehaviourVerdict.EXPLOIT |
| vt.BehaviourVerdict.GREYWARE |
| vt.BehaviourVerdict.MALWARE |
| vt.BehaviourVerdict.PHISHING |
| vt.BehaviourVerdict.RANSOM |
| vt.BehaviourVerdict.RAT |
| vt.BehaviourVerdict.SPREADER |
| vt.BehaviourVerdict.TROJAN |
| vt.BehaviourVerdict.UNKNOWN_VERDICT |

[Back to top](#top) 

## File types[](#file-types)

| **Type** | **Type tags** |
| --- | --- |
| vt.FileType.ACE | compressed ace |
| vt.FileType.ANDROID | executable mobile android apk |
| vt.FileType.APPLE | apple apple-gen |
| vt.FileType.APPLE_PLIST | apple appleplist |
| vt.FileType.APPLEDOUBLE | apple appledouble |
| vt.FileType.APPLESINGLE | apple applesingle |
| vt.FileType.ARC | compressed arc |
| vt.FileType.ARJ | compressed arj |
| vt.FileType.ASD | compressed asd |
| vt.FileType.ASF | multimedia video asf |
| vt.FileType.AVI | multimedia video avi |
| vt.FileType.AWK | source awk |
| vt.FileType.BMP | multimedia image bmp |
| vt.FileType.BZIP | compressed bzip |
| vt.FileType.C | source c |
| vt.FileType.CAB | compressed cab |
| vt.FileType.CAP | internet cap pcap |
| vt.FileType.CHM | help chm |
| vt.FileType.COFF | executable coff |
| vt.FileType.COOKIE | internet iecookie |
| vt.FileType.CPP | source cpp |
| vt.FileType.CRX | crx chrome extension browser |
| vt.FileType.DEB | executable linux deb |
| vt.FileType.DIB | multimedia image dib |
| vt.FileType.DIVX | multimedia video divx |
| vt.FileType.DMG | executable mac dmg |
| vt.FileType.DOC | document msoffice text word doc |
| vt.FileType.DOCX | document msoffice text word docx |
| vt.FileType.DOS_COM | executable dos com |
| vt.FileType.DOS_EXE | executable dos mz |
| vt.FileType.DYALOG | source dyalog |
| vt.FileType.DZIP | compressed dzip |
| vt.FileType.EBOOK | document ebook epub |
| vt.FileType.ELF | executable linux elf |
| vt.FileType.EMAIL | internet email |
| vt.FileType.EMF | multimedia image emf |
| vt.FileType.EOT | font opentype eof |
| vt.FileType.FLAC | multimedia audio flac |
| vt.FileType.FLC | multimedia animation flc |
| vt.FileType.FLI | multimedia animation fli |
| vt.FileType.FLV | multimedia video flv |
| vt.FileType.FORTRAN | source fortran |
| vt.FileType.FPX | multimedia image fpx |
| vt.FileType.GIF | multimedia image gif |
| vt.FileType.GIMP | multimedia image gimp |
| vt.FileType.GUL | document samsungdoc text gul |
| vt.FileType.GZIP | compressed gzip |
| vt.FileType.HTML | internet html |
| vt.FileType.HWP | document hangul text hwp |
| vt.FileType.ICO | multimedia image ico |
| vt.FileType.IN_DESIGN | multimedia image indesign |
| vt.FileType.IPHONE | executable mobile iphone ios |
| vt.FileType.ISOIMAGE | compressed isoimage |
| vt.FileType.JAR | compressed jar |
| vt.FileType.JAVA | source java |
| vt.FileType.JAVA_BYTECODE | executable java-bytecode class |
| vt.FileType.JAVASCRIPT | source javascript |
| vt.FileType.JNG | multimedia image jng |
| vt.FileType.JPEG | multimedia image jpeg jpg |
| vt.FileType.KGB | compressed kgb |
| vt.FileType.LATEX | document latex |
| vt.FileType.LINUX | linux |
| vt.FileType.LINUX_KERNEL | linux |
| vt.FileType.LNK | windows lnk |
| vt.FileType.MACH_O | executable mac macho |
| vt.FileType.MACINTOSH | apple macintosh mac macintosh-gen |
| vt.FileType.MACINTOSH_HFS | apple macintosh mac machfs |
| vt.FileType.MACINTOSH_LIB | apple mac maclib |
| vt.FileType.MIDI | multimedia audio midi |
| vt.FileType.MOV | multimedia video mov |
| vt.FileType.MP3 | multimedia audio mp3 |
| vt.FileType.MP4 | multimedia audio mp4 |
| vt.FileType.MPEG | multimedia video mpeg |
| vt.FileType.MSCOMPRESS | compressed mscompress |
| vt.FileType.MSI | installer windows msi |
| vt.FileType.NE_DLL | executable windows win16 ne nedll |
| vt.FileType.NE_EXE | executable windows win16 ne neexe |
| vt.FileType.ODF | document openoffice math odf |
| vt.FileType.ODG | document openoffice draw odg |
| vt.FileType.ODP | document openoffice presentation odp |
| vt.FileType.ODS | document openoffice spreadsheet ods |
| vt.FileType.ODT | document openoffice text odt |
| vt.FileType.OGG | multimedia video ogg |
| vt.FileType.OUTLOOK | internet email outlook |
| vt.FileType.PALMOS | executable mobile palmos |
| vt.FileType.PASCAL | source pascal |
| vt.FileType.PDF | document pdf |
| vt.FileType.PE_DLL | executable windows win32 pe pedll |
| vt.FileType.PE_EXE | executable windows win32 pe peexe |
| vt.FileType.PERL | source perl |
| vt.FileType.PHP | source php |
| vt.FileType.PKG | executable mac pkg |
| vt.FileType.PNG | multimedia image png |
| vt.FileType.PPSX | document msoffice presentation powerpoint slideshow ppsx |
| vt.FileType.PPT | document msoffice presentation powerpoint ppt |
| vt.FileType.PPTX | document msoffice presentation powerpoint pptx |
| vt.FileType.PS | document ps postscript |
| vt.FileType.PSD | multimedia image photoshop psd |
| vt.FileType.PYTHON | source python |
| vt.FileType.QUICKTIME | multimedia video quicktime qt |
| vt.FileType.RAR | compressed rar |
| vt.FileType.RM | multimedia video realmedia rm |
| vt.FileType.ROM | rom bios firmware |
| vt.FileType.RPM | linux rpm |
| vt.FileType.RTF | document msoffice text word rtf |
| vt.FileType.RUBY | source ruby |
| vt.FileType.RZIP | compressed rzip |
| vt.FileType.SCRIPT | script |
| vt.FileType.SEVENZIP | compressed 7zip |
| vt.FileType.SHELLSCRIPT | script shell |
| vt.FileType.SVG | multimedia image svg |
| vt.FileType.SWF | internet flash swf |
| vt.FileType.SYMBIAN | executable mobile symbian |
| vt.FileType.T3GP | multimedia video 3gp |
| vt.FileType.TAR | compressed tar |
| vt.FileType.TARGA | multimedia image targa |
| vt.FileType.TEXT | text |
| vt.FileType.TIFF | multimedia image tiff |
| vt.FileType.TORRENT | link internet bittorrent |
| vt.FileType.TTF | font truetype ttf |
| vt.FileType.WAV | multimedia audio wav |
| vt.FileType.WINCE | executable mobile wince |
| vt.FileType.WMA | multimedia audio wma |
| vt.FileType.WMV | multimedia video wmv |
| vt.FileType.WOFF | font openfont woff |
| vt.FileType.XLS | document msoffice spreadsheet excel xls |
| vt.FileType.XLSX | document msoffice spreadsheet excel xlsx |
| vt.FileType.XML | internet xml |
| vt.FileType.XPI | browser extension firefox xpi |
| vt.FileType.XWD | multimedia image xwd |
| vt.FileType.ZIP | compressed zip |
| vt.FileType.ZLIB | compressed zlib |

[Back to top](#top) 

## Legacy variables[](#legacy-variables)

YARA offers a mechanism for [defining custom variables](https://virustotal.github.io/yara-x/docs/writing_rules/external-global-variables/) that has been used in Livehunt for providing additional information about the file being scanned. These variables are now deprecated in favor of our [vt module](#the-vt-module), but they will continue to work as always for backward compatibility. You can find list of variables defined by Livehunt below, but we highly encourage you to start using the **vt** module instead.

| Variable | Type | Description |
| --- | --- | --- |
| file_name | string | File&#x27;s name as it was last submitted to VirusTotal. |
| file_type | string | String that contains information about the file type. The string contains a serie of type tags as described in the **Type tags** column in [File types](#file-types) |
| imphash | string | File&#x27;s import hash |
| md5 | string | File&#x27;s MD5 |
| new_file | boolean | True if this is the first time the file is submitted to VirusTotal |
| positives | integer | Number of antivirus engines detecting the file |
| sha256 | string | File&#x27;s SHA-256 |
| sha1 | string | File&#x27;s SHA-1 |
| signatures | string | Detection signatures from all antivirus engines concatenated together and separated by spaces. This variable is normally used with **contains** or **matches** operators |
| submissions | integer | Number of times the file has been submitted to VirusTotal. The value is 1 for the first submission. |
| ssdeep | string | File&#x27;s [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html) hash |
| tags | string | File&#x27;s tags concatenated together and separated by spaces. |
| vhash | string | File&#x27;s vhash |

[Back to top](#top)

**Updated about 2 months ago