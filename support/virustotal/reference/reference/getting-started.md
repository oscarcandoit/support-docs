---
title: "Getting started"
source: "https://docs.virustotal.com/reference/getting-started"
scraped_at: "2026-02-08T06:35:32.918Z"
---

In order to use the API you must [sign up to VirusTotal Community](https://www.virustotal.com/gui/join-us). Once you have a valid VirusTotal Community account you will find your personal API key in your personal settings section. This key is all you need to use the VirusTotal API.

> ❗️
> ### Important[](#important)
> 
> 
> The VirusTotal public API must not be used in commercial products or services. It can not be used as a substitute for antivirus products and it can not be integrated in any project that may harm the antivirus industry directly or indirectly. Noncompliance of these terms will result in immediate permanent ban of the infractor individual or organization.
> 
> 
> Under all circumstances VirusTotal&#x27;s [Terms of Service](/docs/terms-of-service) and [Privacy Policy](/docs/privacy-policy) must be respected.
> 
> 

By default any VirusTotal Community registered user is entitled to an API key that allows them to interact with a basic set of endpoints. Advanced calls and higher limits are available via the premium API, which requires special privileges. [Contact us](https://www.virustotal.com/gui/contact-us/premium-services) if you would like to learn more about how to obtain access.

![1028](https://files.readme.io/73a8178-Screen_Shot_2019-10-16_at_3.51.46_PM.png)

## Most popular API endpoints[](#most-popular-api-endpoints)

- [Upload a file for scanning](/reference/files-scan): analysis your file with 70+ antivirus products, 10+ dynamic analysis sandboxes and a myriad of other security tools to produce a threat score and relevant context to understand it.

- [Get a file report by hash](/reference/file-info): given a {md5, sha1, sha256} hash, retrieves the pertinent analysis report including threat reputation and context produced by 70+ antivirus products, 10+ dynamic analysis sandboxes and a myriad of other security tools and datasets.

- [Scan URL](/reference/scan-url): analysis your URL with 70+ antivirus products/blocklists and a myriad of other security tools to produce a threat score and relevant context to understand it.

- [Get a URL analysis report](/reference/url-info): given a URL, retrieves the pertinent analysis report including threat reputation and context produced by 70+ antivirus products/blocklists and a myriad of other security tools and datasets.

- [Get a domain report](/reference/domain-info): given a domain, retrieves the pertinent analysis report including threat reputation and context produced by 70+ antivirus products/blocklists and a myriad of other security tools and datasets.

- [Get an IP address report](/reference/ip-info): given an IP address, retrieves the pertinent analysis report including threat reputation and context produced by 70+ antivirus products/blocklists and a myriad of other security tools and datasets.