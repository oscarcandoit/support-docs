---
url: "https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/"
title: "Edit Zone Templates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#main-content)

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
3. [DNS Functions](https://docs.cpanel.net/whm/dns-functions/)
4. Edit Zone Templates


[whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#overview)

* * *

[Edit templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#edit-templates)

* * *

[Variables](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#variables)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#overview)

* * *

[Edit templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#edit-templates)

* * *

[Variables](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/#variables)

* * *

## Edit Zone Templates

![](https://docs.cpanel.net/img/whm-icons/edit_zone_templates.svg)

_Valid for versions 86 through 128_

#### Version:

#### [86](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/86/)

#### [130](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to edit the templates that cPanel & WHM uses to create DNS zone files for new domains. You may wish to use this interface when you use custom DNS configurations.

Warning:

- Custom DNS zone templates will **not** affect subdomains you add to a cPanel account.
- Custom DNS zone templates will **only** apply when you create new zone files.
- The system does **not** transfer custom DNS zone templates. When you transfer an account with WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_), the system ignores these zone templates when it recreates the account on the destination server. You **must** recreate any custom DNS zones on the destination server after you transfer the account.

## Edit templates

To edit a template, perform the following steps:

1. Click the template type that you wish to edit. The template will appear. You can choose from the following template types:
   - _simple_ — Edit the template for domains with **only** an A entry.
   - _standard_ — Edit the template for domains on a dedicated IP address, addon domains, or parked domains (aliases).
   - _standardvirtualftp_ — Edit the template for domains on a shared IP address.
2. Make the desired changes to the file.
   - For more information about the available template variables, read the Variables section below.
3. Click _Save_.

### Variables

You can use the following variables within DNS zone template files:

| Variable | Description |
| --- | --- |
| `%cpversion%` | The version of cPanel & WHM. |
| `%domain%` | The domain name. |
| `%ftpip%` | The domain’s FTP server’s IP address. |
| `%ip%` | The domain’s IPv4 address. |
| `%ipv6%` | The domain’s IPv6 address. |
| `%maildomain%` | The hostname of the server that handles the domain’s mail. |
| `%nameserver%` | The primary nameserver’s hostname for the primary NS record. |
| `%nameserver2%` | The secondary nameserver’s hostname for the secondary NS record. |
| `%nameserver3%` | The tertiary nameserver’s hostname for the tertiary NS record. |
| `%nameserver4%` | The quaternary nameserver’s hostname for the quaternary NS record. |
| `%nameservera%` | The primary nameserver’s IP address. |
| `%nameservera2%` | The secondary nameserver’s IP address. |
| `%nameservera3%` | The tertiary nameserver’s IP address. |
| `%nameservera4%` | The quaternary nameserver’s IP address. |
| `%nameserverentry%` | The primary nameserver’s hostname for the [glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records). Your system will use this hostname as a registered nameserver for the [`autocreateaentries`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/#keys-and-default-settings) setting. |
| `%nameserverentry2%` | The secondary nameserver’s hostname for the [glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records). Your system will use this hostname as a registered nameserver for the [`autocreateaentries`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/#keys-and-default-settings) setting. |
| `%nameserverentry3%` | The tertiary nameserver’s hostname for the [glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records). Your system will use this hostname as a registered nameserver for the [`autocreateaentries`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/#keys-and-default-settings) setting. |
| `%nameserverentry4%` | The quaternary nameserver’s hostname for the [glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records). Your system will use this hostname as a registered nameserver for the [`autocreateaentries`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/#keys-and-default-settings) setting. |
| `%nsttl%` | The nameserver’s [Time to Live (TTL)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ttl). |
| `%reseller%` | The reseller who owns the domain. <br>Important:<br>If a reseller owns the domain and has created their own DNS zone template files, your domain will apply these templates when you create it. |
| `%rpemail%` | The contact email address. |
| `%serial%` | The zone record’s serial number. |
| `%ttl%` | The domain’s [TTL](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ttl). |

#### Additional Documentation

* * *

- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×