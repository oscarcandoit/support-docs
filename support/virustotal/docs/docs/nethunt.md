---
title: "Network hunting: Writing YARA rules for Livehunt"
source: "https://docs.virustotal.com/docs/nethunt"
scraped_at: "2026-02-08T06:19:23.038Z"
---

# Hunting network assets[](#hunting-network-assets)

In addition to hunting all scanned files in VirusTotal, you can also hunt for all scanned URLs, domains and IP addresses. For this now you need to choose between File, URL, Domain or IP when you create a new Livehunt ruleset.

*

The "vt" module is now expanded with a ".net" attribute that contains all metadata extracted from the URL, its Domain and the IP address where it’s hosted. It also has complementary attributes to easily reference specific IoCs characteristics without having to deal with data&#x27;s internal representation. Instead of that, [self-descriptive](/docs/writing-yara-rules-for-livehunt#http-methods) enums are provided.

The tables below summarize all “vt” module attributes.
The first table is focused on the **main attributes**:

- The first column shows the **entity type** that the YARA rule match against

- The second column shows the **main attribute** used in the rule

- The third column shows other **secondary attributes** belonging to different entity types and **complementary attributes** that can be **combined in the same YARA rule**

- The last column provides a brief **description** of the **main attribute**

| Type of IoC/entity | “vt” module attribute | Other fields combination | Description |
| --- | --- | --- | --- |
| URL | [vt.net.url](#url-metadata) | vt.net.domain 
 vt.net.ip 
 vt.FileType (complementary attributes) | URL characteristics and other IoCs relationships |
| Domain | [vt.net.domain](#domain-metadata) | vt.net.ip 
 vt.FileType (complementary attributes) | Domain characteristics and other IoCs relationships |
| IP Address | [vt.net.ip](#ip-metadata) | vt.FileType (complementary attributes) | IP addresses characteristics and other IoCs relationships |
| Files *static | [vt.metadata](/docs/writing-yara-rules-for-livehunt#using-files-metadata-in-your-rules) | vt.FileType and vt.behaviour + rest of complementary attributes | File metadata |
| Files *dynamic | [vt.behaviour](/docs/writing-yara-rules-for-livehunt#creating-rules-based-on-file-behavior) | vt.metadata + vt.FileType and the rest of complementary attributes | File characteristics extracted via sandbox execution and other IoCs relationships |

The second table shows the **complementary attributes**, basically enums that can be used in combination with the previous attributes to deploy a functional rule.

| Type of IoC/entity | “vt” module attribute | Description |
| --- | --- | --- |
| Files *static | [vt.FileType](/docs/writing-yara-rules-for-livehunt#file-types) | Enum of available file types |
| Files *dynamic | [vt.BehaviourTrait](/docs/writing-yara-rules-for-livehunt#behaviour-traits) | Enum of behavior traits that can be found on a file behavior report after sandbox execution |
| Files *dynamic | [vt.BehaviourVerdict](/docs/writing-yara-rules-for-livehunt#behaviour-verdicts) | Enum of sandbox verdicts based on file behavior after sandbox execution |
| Files *dynamic | [vt.Http](/docs/writing-yara-rules-for-livehunt#http-methods) | Enum of HTTP methods |
| Files *dynamic | [vt.Net](/docs/writing-yara-rules-for-livehunt#network-protocols) | Enum of network protocols |

⚠️ Please note that `vt.net` and `vt.Net` are different attributes. The first one represents network entities while the second one provides an abstraction layer of the internal representation of the network protocols.

Let’s walk through some examples:

Get all detected URLs under a specific domain first select "Create a new rule" and choose to match URL, these will produce URL notifications.

C++
`import "vt"

rule detectedPythonPackages {
meta:
 description = "URLs with detections matching files.pythonhosted.org domain"
 author = "virustotal"
 target_entity = "url"
condition:
 vt.net.url.analysis_stats.malicious > 1 and
 vt.net.domain.raw == "files.pythonhosted.org"
}`
Notice how is possible to combine `vt.net.url` and `vt.net.domain`, it works in a top down fashion:

- URL matching rules will allow `vt.net.url`, `vt.net.domain` and `vt.net.ip` fields

- Domain matching rules will allow `vt.net.domain` and `vt.net.ip` fields

- IP matching rules will allow only `vt.net.ip` fields

In a similar way we can create another URL rule to monitor new URLs from the [LilithBot campaign](https://www.zscaler.com/blogs/security-research/analysis-lilithbot-malware-and-eternity-threat-group):

C++
`import "vt"

rule LilithBot {
meta:
 description = "URLs matching LilithBot C2C"
 author = "virustotal"
 target_entity = "url"
condition:
 vt.net.url.raw matches /\/gate\/.{60}\/registerBot/ or
 vt.net.url.raw matches /\/gate\/.{60}\/getFile\?name=admin_settings_plugin\.json/ or
 vt.net.url.raw matches /\/gate\/.{60}\/uploadFile\?name/
}`
The vt.net module contains the following metadata:

## URL metadata[](#url-metadata)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| vt.net.url.raw | string | The URL in canonical form. | vt.net.url.raw matches /.*\.php/ |
| vt.net.url.path | string | Path part of the current URL. | vt.net.url.path icontains "private/reviewsGallery/get-image-gallery-assets" |
| vt.net.url.query | string | Raw URL query string | vt.net.url.query contains "dir=" |
| vt.net.url.hostname | string | Hostname part of the current URL. | vt.net.url.hostname iendswith "google.com" |
| vt.net.url.new_url | bool | Wether the URL is observed for the first time or not. | |
| vt.net.url.first_submission_date | int | UNIX UTC timestamp for the URL&#x27;s first submission date. | vt.net.url.first_submission_date < 1672531200 |
| vt.net.url.params | dict | Parsed URL GET params | for any k, v in vt.net.url.params: ( k == "user" ) |
| vt.net.url.port | int | The port in which the URL is accessed | vt.net.url.port > 8080 and vt.net.url.port < 8090 |
| vt.net.url.trackers | array of struct | All trackers found in the URL | for any tracker in vt.net.url.trackers: (
  tracker.name == "Google Tag Manager" and
  tracker.id == "G-Y8J4SNTNFY"
) |
| vt.net.url.trackers[x].name | string | Tracker name | |
| vt.net.url.trackers[x].id | string | Tracker assigned unique ID | |
| vt.net.url.trackers[x].url | string | URL the tracker is loaded from | for any tracker in vt.net.url.trackers: ( tracker.url contains "google-analytics.com/analytics.js" ) |
| vt.net.url.response_headers | dict | Headers returned when making a request to the URL | vt.net.url.response_headers["Server"] == "nginx" |
| vt.net.url.number_of_response_headers | int | Amount of response headers | vt.net.url.number_of_response_headers == 10 |
| vt.net.url.response_code | int | HTTP status code seen when making a request to the URL | vt.net.url.response_code == 429 |
| vt.net.url.cookies | dict | Request cookies | for any k, v in vt.net.url.cookies: ( k == "APPSESSID" ) and vt.net.url.cookies["APPSESSID"] contains "xxx" |
| vt.net.url.favicon.raw_md5 | string | MD5 hash of the URL&#x27;s favicon. To find a property raw md5 search VT for its URL and check details. [Retrieving raw_md5](#how-do-i-obtain-a-domain-favicon-hashes). | vt.net.url.favicon.raw_md5 == "6cf6865d5e5cb8f65fe9c0ff93a7904d" |
| vt.net.url.favicon.dhash | string | The URL&#x27;s favicon dhash. To find a property dhash search VT for its URL and check details. [Retrieving dhash](#how-do-i-obtain-a-domain-favicon-hashes). | vt.net.url.favicon.dhash == "924dccd4d46933cc" |
| vt.net.url.outgoing_links | array of string | Links included in the URL’s response pointing to URLs from other domains. | for any link in vt.net.url.outgoing_links: ( link matches /.*www\.bankofamerica\.com.*/ ) |
| vt.net.url.redirects | array of string | List of redirecting URLs visited until reaching the final one. | for any r in vt.net.url.redirects: ( not r contains vt.net.domain.domain) |
| vt.net.url.html_title | string | Text found under the URL’s returned HTML <title> tag | |
| vt.net.url.html_meta_tags | dict | Values found under the `meta` tags in the returned HTML | for any meta_tags in vt.net.url.html_meta_tags: ( meta_tags.key == "og:title" and for any value in meta_tags.values: ( value == "Amazon - Start a Career" )) |
| vt.net.url.tags | array of string | Tags defining interesting features of the URL | for any tag in vt.net.url.tags: ( tag == "opendir" or tag == "ip" ) |
| vt.net.url.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | vt.net.url.analysis_stats.malicious > 1 |
| vt.net.url.categories | dict | Content categories of its domain by engine | for any engine, value in vt.net.url.categories: (value == "known infection source") |
| vt.net.url.signatures | dict | Signature returned by the engine. | for any engine, value in vt.net.url.signatures: ( engine == "Kaspersky" and value icontains "pua" ) |
| vt.net.url.downloaded_file | struct | Metadata from the latest file downloaded from the URL. | |
| vt.net.url.downloaded_file.new_for_vt | bool | Indicates that the file has not been previously seen in VT. | |
| vt.net.url.downloaded_file.new_for_url | bool | Indicates that the file has not been previously seen being downloaded from that particular URL. | |
| vt.net.url.downloaded_file.new_for_domain | bool | Indicates that the file has not been previously seen being downloaded from the URL’s domain. | |
| vt.net.url.downloaded_file.new_for_ip | bool | Indicates that the file has not been previously seen being downloaded from the IP the URL resolves to. | |
| vt.net.url.downloaded_file.sha256 | string | Latest downloaded file SHA256. | |
| vt.net.url.downloaded_file.file_type | int | Latest downloaded file&#x27;s type (one of the types listed in the file types table). | |
| vt.net.url.downloaded_file.analysis_stats | struct | Latest downloaded file analysis stats. [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.url.downloaded_file.signatures | dict | Signature returned by the engine. | |
| vt.net.url.communicating_file | struct | Metadata from the latest file that has made communications (behaviour) with this URL. | |
| vt.net.url.communicating_file.new_for_vt | bool | File has not been previously seen in VT. | |
| vt.net.url.communicating_file.new_for_url | bool | | |
| vt.net.url.communicating_file.new_for_domain | bool | | |
| vt.net.url.communicating_file.new_for_ip | bool | | |
| vt.net.url.communicating_file.sha256 | string | Latest file (sha256) making communications with this URL. | |
| vt.net.url.communicating_file.file_type | int | Latest file type making communications with this URL (one of the types listed in the file types table). | |
| vt.net.url.communicating_file.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.url.submitter.city | string | City from where the resource was submitted, referred to the last submission. All lowercases. | |
| vt.net.url.submitter.country | string | Country from where the resource was submitted, referred to the last submission. This is a two-letter [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code, in uppercase. | |

## IP Metadata[](#ip-metadata)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| vt.net.ip.raw | | The URL in canonical form. | |
| vt.net.ip.new_ip | | | |
| vt.net.ip.whois | dict | Whois record in key, value format. | vt.net.ip.whois["Admin Country"] == "ES" |
| vt.net.ip.whois_raw | string | Whole IP whois as a string for pattern matching. | |
| vt.net.ip.new_whois | bool | IP has an updated whois. | |
| vt.net.ip.reverse_lookup | string | Domain observed resolving to this IP address for first time. [Creating a feed of domain IP resolutions](#how-do-i-obtain-a-feed-of-ip-resolutions-for-a-certain-domain). | vt.net.ip.reverse_lookup equals "yourdomain.com" |
| vt.net.ip.jarm | string | TLS fingerprint | |
| vt.net.ip.https_certificate.thumbprint | | | |
| vt.net.ip.https_certificate.subject | struct | [Certificate Subject info](#https-certificate-subject-struct) | |
| vt.net.ip.https_certificate.validity.not_after | int | Timestamp after which the certificate is no longer valid, in seconds since the Unix epoch | vt.net.ip.https_certificate.validity.not_after < 1672531200 // 2023–01-01 |
| vt.net.ip.https_certificate.validity.not_before | int | Timestamp at which the certificate becomes valid, in seconds since the Unix epoch | vt.net.ip.https_certificate.validity.not_before < 946684800 // 2000-01-01 |
| vt.net.ip.https_certificate.subject_alternative_name | string | | |
| vt.net.ip.https_certificate.signature | string | | |
| vt.net.ip.https_certificate.serial_number | string | | |
| vt.net.ip.https_certificate.issuer | struct | [Certificate Subject info](#https-certificate-subject-struct) | |
| vt.net.ip.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.ip.signatures | dict | Signature returned by the engine. | for any engine, value in vt.net.ip.signatures: ( engine == "Kaspersky" and value icontains "pua" ) |
| vt.net.ip.downloaded_file | struct | Metadata from the latest file downloaded from the IP. | |
| vt.net.ip.downloaded_file.new_for_vt | bool | Seen for the first time being downloaded in VT. | |
| vt.net.ip.downloaded_file.new_for_ip | bool | Seen for the first time being downloaded from this IP. Notice that it may already be known in VT. | |
| vt.net.ip.downloaded_file.sha256 | string | Latest downloaded file SHA256. | |
| vt.net.ip.downloaded_file.file_type | int | Latest downloaded file&#x27;s type (one of the types listed in the file types table). | |
| vt.net.ip.downloaded_file.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.ip.downloaded_file.signatures | dict | Signature returned by the engine. | |
| vt.net.ip.communicating_file | struct | Metadata from the latest file that has made communications (behavior) with this IP. | |
| vt.net.ip.communicating_file.new_for_ip | bool | A communicating file is seen for the first time connected to this IP. Notice that it may already be known in VT. | |
| vt.net.ip.communicating_file.new_for_vt | bool | | |
| vt.net.ip.communicating_file.sha256 | string | Latest file sha256 that made communications with this IP. | |
| vt.net.ip.communicating_file.file_type | int | Latest file type (one of the types listed in the file types table) that made communications with this IP. | |
| vt.net.ip.communicating_file.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.ip.communicating_file.signatures | dict | Signature returned by the engine. | |
| vt.net.ip.ip_as_owner | string | IP AS (Autonomous System) owner | |
| vt.net.ip.ip_asn | int | Autonomous System Number | |
| vt.net.ip.ip_country | string | IP Country | |
| vt.net.ip.ip_as_int | int | IP dotless decimal number notation | vt.net.ip.ip_as_int == 3941835776 |

## Domain metadata[](#domain-metadata)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| vt.net.domain.raw | string | Domain as a string | vt.net.domain.raw matches /virustotal/ |
| vt.net.domain.root | string | Root part of the domain, ie: sub2.sub.root.tld -> root.tld | vt.net.domain.root == "example.com" |
| vt.net.domain.new_domain | bool | Domain is first seen in VT, not necessarily still exists. | |
| vt.net.domain.first_resolution | bool | Domain resolves to an IP for first time | |
| vt.net.domain.new_resolution | bool | Domain resolves to a different IP | |
| vt.net.domain.whois | dict | Whois record in key, value format. | vt.net.domain.whois["Admin Country"] == "ES" |
| vt.net.domain.whois_raw | string | Whole Domain whois as a string for pattern matching. | |
| vt.net.domain.first_whois | bool | Domain has whois for first time | |
| vt.net.domain.new_whois | bool | Domain has an updated whois | |
| vt.net.domain.https_certificate.thumbprint | string | Hash of the certificate | vt.net.domain.https_certificate.thumbprint == "5d079c6fad2ac214bbdbfcead1584475c3ff41a1" |
| vt.net.domain.https_certificate.subject | struct | [Certificate Subject info](#https-certificate-subject-struct) | |
| vt.net.domain.https_certificate.validity.not_after | int | Timestamp after which the certificate is no longer valid, in seconds since the Unix epoch | vt.net.domain.https_certificate.validity.not_after < 1672531200 // 2023–01-01 |
| vt.net.domain.https_certificate.validity.not_before | int | Timestamp at which the certificate becomes valid, in seconds since the Unix epoch | vt.net.domain.https_certificate.validity.not_before < 946684800 // 2000-01-01 |
| vt.net.domain.https_certificate.subject_alternative_name | array of strings | Additional certified hostnames | for any name in vt.net.domain.https_certificate.subject_alternative_name: name matches /virustotal/ |
| vt.net.domain.https_certificate.signature | string | Certificate signature | vt.net.domain.https_certificate.signature matches /757abd2f/ |
| vt.net.domain.https_certificate.serial_number | string | Unique identifier of the certificate, generated by the issuer | vt.net.domain.https_certificate.serial_number = "0bd240b87061dc31bda675382053bef9" |
| vt.net.domain.https_certificate.issuer | struct | [Certificate Subject info](#https-certificate-subject-struct) | |
| vt.net.domain.jarm | string | TLS fingerprint | vt.net.domain.jarm = "29d3fd00029d29d21c42d43d00041d188e8965256b2536432a9bd447ae607f" |
| vt.net.domain.dns_records[].value | string | DNS record resolution. | for any record in vt.net.domain.dns_records: (record.value contains "sslserver") |
| vt.net.domain.dns_records[].type | string | Record type | for any record in vt.net.domain.dns_records: (record.type == "SOA") |
| vt.net.domain.dns_records[].dns_class | string | Class (IN, CH or HS) | for any record in vt.net.domain.dns_records: (record.dns_class == "CH") |
| vt.net.domain.dns_records[].ttl | int | TTL (in seconds) | for any record in vt.net.domain.dns_records: (record.ttl < 2) |
| vt.net.domain.dns_records[].mname | string | Primary name server | for any record in vt.net.domain.dns_records: (record.mname matches /nameserver/) |
| vt.net.domain.dns_records[].rname | string | E-mail address of the administrator | for any record in vt.net.domain.dns_records: (record.rname matches /cloud.*host/) |
| vt.net.domain.dns_records[].priority | int | Priority | for any record in vt.net.domain.dns_records: (record.priority = 1) |
| vt.net.domain.dns_records[].serial | int | Serial number | for any record in vt.net.domain.dns_records: (record.serial matches /^9999/) |
| vt.net.domain.dns_records[].retry | int | Number of seconds after which secondary name servers should retry to request the serial number from the master if the master does not respond | for any record in vt.net.domain.dns_records: (record.retry < 100) |
| vt.net.domain.dns_records[].refresh | int | Seconds after which secondary name servers should query the master for the SOA record, to detect zone changes | for any record in vt.net.domain.dns_records: (record.refresh < 5000) |
| vt.net.domain.dns_records[].expire | int | Seconds after which secondary name servers should stop answering request for this zone if the master does not respond | for any record in vt.net.domain.dns_records: (record.expire < 500000) |
| vt.net.domain.dns_records[].minimum | int | In seconds. Used in calculating the TTL for purposes of negative caching | for any record in vt.net.domain.dns_records: (record.minimum == 3000) |
| vt.net.domain.favicon.raw_md5 | string | MD5 hash of the URL&#x27;s favicon. To find a property raw md5 search VT for its URL and check details. [Retrieving raw_md5](#how-do-i-obtain-a-domain-favicon-hashes). | vt.net.domain.favicon.raw_md5 == "6cf6865d5e5cb8f65fe9c0ff93a7904d" |
| vt.net.domain.favicon.dhash | string | The URL&#x27;s favicon dhash. To find a property dhash search VT for its URL and check details [Retrieving dhash](#how-do-i-obtain-a-domain-favicon-hashes). | vt.net.domain.favicon.dhash == "924dccd4d46933cc" |
| vt.net.domain.tags | array of strings | | for any tag in vt.net.domain.tags: name == "dga" |
| vt.net.domain.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.domain.categories | dict | Content categories by engine | for any engine, value in vt.net.domain.categories: (value == "malware command and control") |
| vt.net.domain.popularity_ranks[].position | int | Position of the domain in a specific popularity rank. Low numbers (closer to 1) indicate that the domain is more popular. | for any r in vt.net.domain.popularity_ranks: (r.position < 10) |
| vt.net.domain.popularity_ranks[].ingestion_time | int | UNIX UTC timestamp at which the position in the rank was ingested. | for any r in vt.net.domain.popularity_ranks: (r.ingestion_time > 1672531200) // 2023-01-01 |
| vt.net.domain.popularity_ranks[].rank | string | Name of the popularity rank. | for any r in vt.net.domain.popularity_ranks: (r.rank == "Example") |
| vt.net.domain.number_of_popularity_ranks | int | Number of popularity ranks entries for the domain. | vt.net.domain.number_of_popularity_ranks == 5 |
| vt.net.domain.root_popularity_ranks[].position | int | Position of the root domain in a specific popularity rank. Low numbers (closer to 1) indicate that the domain is more popular. | for any r in vt.net.domain.root_popularity_ranks: (r.position < 10) |
| vt.net.domain.root_popularity_ranks[].ingestion_time | int | UNIX UTC timestamp at which the position in the rank was ingested. | for any r in vt.net.domain.root_popularity_ranks: (r.ingestion_time > 1672531200) // 2023-01-01 |
| vt.net.domain.root_popularity_ranks[].rank | string | Name of the popularity rank. | for any r in vt.net.domain.root_popularity_ranks: (r.rank == "Example") |
| vt.net.domain.number_of_root_popularity_ranks | int | Number of popularity ranks entries for the root domain. | vt.net.domain.number_of_root_popularity_ranks == 5 |
| vt.net.domain.signatures | dict | Dictionary where keys are antivirus names and values are malware signatures (in lowercase). | vt.net.domain.signatures["Avira"] == "phishing" |
| vt.net.url.downloaded_file | struct | Metadata from the latest file downloaded from the domain. | |
| vt.net.domain.downloaded_file.new_for_vt | bool | Seen for the first time being downloaded in VT. | |
| vt.net.domain.downloaded_file.new_for_domain | bool | Seen for the first time being downloaded from this domain. Notice that it may already be known in VT. | |
| vt.net.domain.downloaded_file.sha256 | string | Latest downloaded file SHA256. | |
| vt.net.domain.downloaded_file.file_type | int | Latest downloaded file&#x27;s type (one of the types listed in the file types table). | |
| vt.net.domain.downloaded_file.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.domain.downloaded_file.signatures | dict | Dictionary where keys are antivirus names and values are malware signatures (in lowercase). | |
| vt.net.domain.communicating_file | struct | Metadata from the latest file that has made communications (behaviour) with this domain. | |
| vt.net.domain.communicating_file.new_for_domain | bool | | |
| vt.net.domain.communicating_file.new_for_vt | bool | | |
| vt.net.domain.communicating_file.sha256 | string | Latest file sha256 that made communications with this domain. | |
| vt.net.domain.communicating_file.file_type | int | Latest file&#x27;s type (one of the types listed in the file types table) that made communications with this domain. | |
| vt.net.domain.communicating_file.analysis_stats | struct | [Analysis Stats Struct info](#analysis-stats-struct) | |
| vt.net.domain.communicating_file.signatures | dict | Dictionary where keys are antivirus names and values are malware signatures (in lowercase). | |

## File ITW field[](#file-itw-field)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| vt.metadata.itw | struct | Latest ITW relation observed for the file. When VirusTotal opens a URL that downloads a file this struct will be filled with the information of the corresponding URL/Domain/IP and it will notify you accordingly. | |
| vt.metadata.itw.url | struct | Refers to [URL information](#url-metadata) for the latest itw relation | |
| vt.metadata.itw.domain | struct | Refers to [Domain information](#domain-metadata) for the latest itw relation | |
| vt.metadata.itw.ip | struct | Refers to [IP information](#ip-metadata) for the latest itw relation | |

## Analysis stats struct[](#analysis-stats-struct)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| analysis_stats.malicious | int | Amount of engine returning malicious in the analysis. | vt.net.domain.analysis_stats.malicious > 5 |
| analysis_stats.suspicious | int | Amount of engine returning suspicious in the analysis. | vt.net.url.analysis_stats.suspicious > 10 |
| analysis_stats.undetected | int | Amount of engine returning undetected in the analysis. | vt.net.ip.analysis_stats.undetected > 20 |
| analysis_stats.harmless | int | Amount of engine returning harmless in the analysis. | vt.metadata.analysis_stats.harmless > 25 |
| analysis_stats.timeout | int | Amount of engine returning timeout in the analysis. | vt.net.domain.analysis_stats.timeout > 1 |
| analysis_stats.confirmed_timeout | int | Amount of engine returning confirmed timeout in the analysis. | vt.net.url.analysis_stats.confirmed_timeout > 1 |
| analysis_stats.failure | int | Amount of engine that failed during the analysis process. | vt.net.ip.analysis_stats.failure > 1 |
| analysis_stats.type_unsupported | int | Amount of engine that do not support the file/IoC type. | vt.metadata.analysis_stats.type_unsupported > 1 |

## HTTPs Certificate Subject struct[](#https-certificate-subject-struct)

| Field | Type | Description | Example |
| --- | --- | --- | --- |
| https_certificate.subject.common_name | string | Common name, also known as the Fully Qualified Domain Name (FQDN), of the subject that is certified. | vt.net.ip.https_certificate.subject.common_name matches /virustotal/ |
| https_certificate.subject.country | string | Two-letter country code that identifies the country of the subject that is certified. | vt.net.domain.https_certificate.subject.country == "US" |
| https_certificate.subject.organization | string | The organization to which the certificate has been issued. | vt.net.ip.https_certificate.subject.organization matches /VirusTotal/ |
| https_certificate.subject.organizational_unit | string | Additional information about the certified organization. | vt.net.domain.https_certificate.subject.organizational_unit matches /Domain Control/ |
| https_certificate.subject.locality | string | The city where the certified organization is located. | vt.net.ip.https_certificate.subject.locality == "Madrid" |
| https_certificate.subject.state | string | The state where the certified organization is located. | vt.net.domain.https_certificate.subject.state == "Washington" |

## Network range[](#network-range)

In order to match complex IP range you can use the `in_range` method associated to IP addresses. These are some examples:

C++
`import "vt"

rule ip_in_range {
 condition:
 vt.net.ip.in_range("142.250.184.164/20")
}

rule ip_in_range {
 condition:
 vt.metadata.itw.ip.in_range("192.168.1.0/24")
}`
This method also works with IPv6 addresses:

C++
`import "vt"

rule ip_in_range {
 condition:
 vt.net.ip.in_range("2001:db8::1/32")
}

rule ip_in_range {
 condition:
 vt.metadata.itw.ip.in_range("2001:db8::1/32")
}`

## Typosquatting[](#typosquatting)

The `vt` module provides a `permutation_of` method to detect malicious domains attempting to impersonate legitimate ones using typosquatting techniques. This feature helps identify domains designed to deceive users by mimicking trusted domain names.

### Basic Usage[](#basic-usage)

To detect typosquatted domains, use the permutation_of method as shown in the example below:

C++
`import "vt"

rule fake_virustotal {
 condition:
 vt.net.domain.permutation_of("www.virustotal.com")
}`
In this example, any scanned domain that attempts to pass as `www.virustotal.com` using common typosquatting techniques will be detected. The `vt.net.domain.permutation_of` method returns true if the examined domain is a permutation of the specified domain.

### Detected Typosquatting Techniques[](#detected-typosquatting-techniques)

The `permutation_of` method detects various types of domain permutations, including:

#### 1. Typo squatting[](#1-typo-squatting)

- 

Character omission: `www.vrustotal.com`

- 

Character repetition: `www.viirustotal.com`

- 

Character replacement (keyboard proximity): `www.viorustotal.com`, `www.vurustotal.com`

- 

Character swapping: `www.virustoatl.com`

#### 2. Homoglyph attacks[](#2-homoglyph-attacks)

Replaces characters with visually similar ones:

- `www.vırustotal.com` ("i" was replaced with "ı")

- `www.viruṡtotal.com` ("s" was replaced with "ṡ")

#### 3. Hyphenation[](#3-hyphenation)

Inserts hyphens between domain name characters:

- `www.virus-total.com`

#### 4. Subdomain[](#4-subdomain)

Inserts additional dots (.) in the domain name:

- `www.vi.rustotal.com`

- `www.viru.stotal.com`

#### 5. Bitsquatting[](#5-bitsquatting)

Bitsquatting is a type of cybersquatting attack where attackers register domain names that are one bit-flip
away from a legitimate domain name. This exploits memory errors, transmission errors, or hardware faults that
can cause a single bit in a domain name to change, leading users to the attacker&#x27;s domain instead of the
intended one.

For more information, refer to:

- [Why bitsquatting attacks are here to stay](https://sec.okta.com/articles/2020/11/why-bitsquatting-attacks-are-here-stay/)

- [Understanding bitsquatting attacks](https://www.the-parallax.com/bitsquatting-cyberattack/)

### Fine tunning your detection[](#fine-tunning-your-detection)

By default, `permutation_of` detects all types of typosquatting attacks. However, you can customize detection by specifying specific techniques using flags. For example:

C++
`import "vt"

rule fake_virustotal {
 condition:
 vt.net.domain.permutation_of("www.virustotal.com", vt.Net.Domain.Permutation.TYPO)
}`
Or to combine multiple techniques:

C++
`import "vt"

rule fake_virustotal {
 condition:
 vt.net.domain.permutation_of("www.virustotal.com", vt.Domain.Permutation.TYPO | vt.Domain.Permutation.HOMOGLYPH)
}`
The following flags can be used to refine detection and can be combined using the bitwise OR (|) operator:

- `vt.Domain.Permutation.TYPO`

- `vt.Domain.Permutation.HOMOGLYPH`

- `vt.Domain.Permutation.HYPHENATION`

- `vt.Domain.Permutation.SUBDOMAIN`

- `vt.Domain.Permutation.BITSQUATTING`

Using these options, you can precisely target the types of typosquatting threats relevant to your security needs.

## Filetypes automatically analysed[](#filetypes-automatically-analysed)

There is only some filetypes that are automatically submitted for a file analysis after URL is received:

| | | | | | |
| --- | --- | --- | --- | --- | --- |
| GZIP | .Z compressed | PDF | Certificates | 7ZIP | BZIP |
| ISO9660 | Chrome extensions | DMG | Microsoft Cabinet | EXE | ZIP |
| RAR | WinZip | Android dex files | Apple Disk Image | ELF | DMG |
| Java bytecode | Macho | DOCs | | | |

These filetypes applies to `vt.net.url.downloaded_file.` attributes, in case you want to scan other filetypes you should write a content rule ("strings") and once the match is done the hash will be visible in VT and you will have the possibility to submit it for a file analysis.

## FAQ[](#faq)

### How do I match certain content or sized response:[](#how-do-i-match-certain-content-or-sized-response)

In Nethunt the content of the response is treated as a file (HTTP headers, etc are not included), you can use that content/file to make matches like in traditional matching yaras. Some examples:

- Matching some strings:

C++
`import "vt"

rule html_content {
meta:
 description = "URLs matching certain strings in content"
 author = "virustotal"
 target_entity = "url"
strings:
 $mystring = "some&html"
condition:
 $mystring and $mystring at 400
}`

- Matching empty response:

C++
```
`import "vt"

rule empty_content {
meta:
 description = "URLs matching empty content"
 author = "virustotal"
 target_entity = "url"
condition:
 filesize == 0
}`
```

### How do I match URLs in certain ASN number/IP range, etc:[](#how-do-i-match-urls-in-certain-asn-numberip-range-etc)

You are able to mix different net modules in a single rule and match over a single net type, for example:

- Notify new URLs whos domain resolve its IP address of a certain ASN in a certain IP range

C++
`import "vt"

rule urls_in_asn {
meta:
 description = "New URLs whos domain resolve to certain ASN"
 author = "virustotal"
 target_entity = "url"
condition:
 vt.net.url.new_url and
 vt.net.ip.ip_asn == 74838
}`

- Notify new URLs whos domain resolve in a certain IP range ([IP range helper](#network-range-helper)):

C++
```
`import "vt"

rule urls_in_iprange {
meta:
 description = "New URLs whos domain resolve to my IP range"
 author = "virustotal"
 target_entity = "url"
condition:
 vt.net.url.new_url and
 vt.net.ip.ip_as_int >= 3941835776 and vt.net.ip.ip_as_int < 3941836800 // 234.243.166.33/22
}`
```

### How do I obtain a domain favicon hashes:[](#how-do-i-obtain-a-domain-favicon-hashes)

You need to search for the domain URL in VirusTotal, go to [https://www.virustotal.com/gui/search](https://www.virustotal.com/gui/search), and write your domain url, ie: [http://google.com](http://google.com) , then go to details tab and at the end you will find a "Favicon" header, there you can see both dhash and raw mad5 hashes.

C++
`import "vt"

rule urls_with_dhash {
meta:
 description = "Domains with similar favicons"
 author = "virustotal"
 target_entity = "domain"
condition:
 vt.net.url.favicon.dhash == "f0cc929ab296cc71" or
 vt.net.url.favicon.raw_md5 == "30e26a059b7b858731e172c431d55bb4"
}`

### How do I obtain domains with self signed certificates:[](#how-do-i-obtain-domains-with-self-signed-certificates)

You can use the "self-signed" tag for that, to be notified you could use for example:

C++
`import "vt"

rule selfsigned_certificate_domains {
meta:
 description = "Domains with self signed certificates"
 author = "virustotal"
 target_entity = "domain"
condition:
 for any tag in vt.net.domain.tags: (
 tag == "self-signed"
 )
}`

### How do I obtain a feed of IP resolutions for a certain domain:[](#how-do-i-obtain-a-feed-of-ip-resolutions-for-a-certain-domain)

It&#x27;s currently not possible to combine domain matching attributes in IP rules, to overcome this limitation exists the `vt.net.ip.reverse_lookup` attribute, it can be used like this:

C++
`import "vt"

rule ip_resolutions_for_domain {
meta:
 description = "IP resolutions for a certain domain"
 author = "virustotal"
 target_entity = "ip_address"
condition:
 vt.net.ip.reverse_lookup == "somedomain.com"
}`*Updated about 2 months ago