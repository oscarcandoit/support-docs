---
url: "https://docs.cpanel.net/whm/scripts/the-servicedomains-script/"
title: "The servicedomains Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The servicedomains Script


[domains](https://docs.cpanel.net/tags/domains/) [dns](https://docs.cpanel.net/tags/dns/) [services](https://docs.cpanel.net/tags/services/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#example)

* * *

[Additional records](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#additional-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#example)

* * *

[Additional records](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#additional-records)

* * *

## The servicedomains Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)

Last modified: _2021 January 27_

* * *

## Overview

The `/usr/local/cpanel/scripts/servicedomains` script lets you create [Domain Name System (DNS)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#dns) records for [service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains). The script adds the required DNS records for the subdomains to the main domain’s records. However, it does **not** create a [VirtualHost](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#virtualhost) entry in the `/usr/local/apache/conf/httpd.conf` file.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/servicedomains [options]
```

### Options

Important:

You **must** use the `add` or `remove` option to run this script.

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `add` | **Required.**<br> Create DNS records for a service subdomain. | `add` |
| `remove` | **Required.**<br> Remove DNS records for a service subdomain. | `remove` |
| `--user` | The account for which to configure the user’s domains.<br>If you do not use this option, the system adds or removes records for **all** service subdomains. | `--user=username` |
| `--domain` | The domain to configure. <br>If you do not use this option but do specify a user, the system adds or removes records for that user’s service subdomains. | `--domain=example.com` |
| `--subdomain` | The service subdomain to configure. <br>Note:<br>You **cannot** add the `cpanel`, `whm`, or `webmail` service subdomains for addon or parked domains (aliases).<br> <br> If you do not use this option, the system adds or removes DNS records for the [default service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains). | `--subdomain=webdisk` |
| `--no_replace` | Whether to replace any existing DNS records. <br>- This option **only** accepts the `0` value.<br>- This option **only** applies to [Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover) service subdomains.<br>For more information about Autodiscover and service subdomains, read the [Additional records](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#additional-records) section below. | `--no_replace=0` |
| `--old_autodiscover_host` | The previously-configured `autodiscover` service subdomain.<br>For more information about Autodiscover and service subdomains, read the [Additional records](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#additional-records) section below. | `--old_autodiscover_host=autodiscover.example.com` |
| `--force_autodiscover_support` | Whether the script should run as if you enabled Autodiscover support (even if you disabled it). <br>- **Always** pass `1` as the value for this option.<br>- You **must** disable `autodiscovery` service subdomains for the domain before you remove DNS records.<br> For more information about Autodiscover and service subdomains, read the [Additional records](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/#additional-records) section below. | `--force_autodiscover_support=1` |
| `--ifenabled` | Only run the script if service subdomains are enabled.<br>For more information on enabling service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation. | `--ifenabled` |
| `--help` | Display the script’s brief help documentation. | `--help` |
| `--man` | Display the script’s full documentation. | `--man` |

### Example

To add the `webdisk.example.com` service subdomain for the `username` account, run the following command:

```bash
/usr/local/cpanel/scripts/servicedomains add --user=username --subdomain=webdisk --no_replace=0 --force_autodiscover_support=1 --ifenabled
```

This returns the following output:

```bash
Adding service subdomains for user username.
```

Note:

The options that you pass to the script determine its output.

### Additional records

This script adds the following records if you [enable AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover#enable-autoconfig-and-autodiscover) support:

| Record type | Entry |
| --- | --- |
| A records | - `autoconfig`<br>- `autodiscover` |
| SRV and TXT records | - `_caldav._tcp`<br>- `_caldavs._tcp`<br>- `_carddav._tcp`<br>- `_carddavs._tcp` |
| SRV records | `_autodiscover._tcp` |

#### Additional Documentation

* * *

- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The is\_script\_stuck Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×