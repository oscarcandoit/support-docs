---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/"
title: "How to Modify Your Hosts File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to Modify Your Hosts File


[apache](https://docs.cpanel.net/tags/apache/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#overview)

* * *

[Modify the hosts file](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#modify-the-hosts-file)

* * *

[macOS® and Linux®](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#macos-and-linux)

* * *

[Microsoft Windows®](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#microsoft-windows)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#overview)

* * *

[Modify the hosts file](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#modify-the-hosts-file)

* * *

[macOS® and Linux®](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#macos-and-linux)

* * *

[Microsoft Windows®](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/#microsoft-windows)

* * *

## How to Modify Your Hosts File

Last modified: _2022 November 22_

* * *

## Overview

Your hosting provider may offer you a temporary URL in the `http://IP/~username` format (where `IP` represents the server’s IP address and `username` represents the cPanel account name) to access your website. This is useful, for example, if you migrate your website to a new server and want to test the site before you point the DNS records to it.

However, some sites will **not** work with a temporary URL. For those sites, you can configure your workstation with the server’s IP address. To do this, modify your workstation’s `/etc/hosts` file to use the server’s domain name and IP address.

This document explains how to modify your workstation’s `/etc/hosts` file.

Note:

Hosting providers can use the WHM’s [_Apache mod\_userdir Tweak_](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/) interface ( _WHM » Home » Security Center » Apache mod\_userdir Tweak_) to offer their customers a temporary URL.

## Modify the hosts file

The following methods allow you to modify your workstation’s `/etc/hosts` file.

Important:

Your workstation’s operating system will **not** remove your changes to the `/etc/hosts` file. If you want the domain that you added to use public DNS entries, you **must** manually remove the domain name and IP address in the `/etc/hosts` file.

### macOS® and Linux®

To modify your `/etc/hosts` file if your workstation runs macOS or a Linux distribution, perform the following steps:

1. On your workstation, open the `/etc/hosts` file with your preferred text editor.
2. Add the server’s IP address and domain name under the last entry in the file, for example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4<br>::1 localhost localhost.localdomain localhost6 localhost6.localdomain6<br>192.168.0.20    example.com<br>1.2.3.4 username.example.com<br>``` |







Note:





In this example, `1.2.3.4` represents the server’s IP address, and `username.example.com` represents the domain name.

3. Save your changes.
4. Reload your browser for the changes to take effect.

### Microsoft Windows®

To modify the `/etc/hosts` file on a Windows workstation, perform the following steps:

1. Open the _Start_ menu.

   - If you run Windows 8 or Windows 10, type **Win+X** on the keyboard or click the Windows icon in the lower-left corner of your desktop interface.
   - If you run Windows 7 or Windows Vista®, click _Start_.
2. Enter Notepad in the search text box.
3. Right-click _Notepad_ and select _Run as Administrator_.
4. In _Notepad_, open the following file:



```bash
C:\Windows\System32\Drivers\etc\hosts
```

5. Add the destination server’s IP address and domain name under the latest entry in the file, for example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4<br>::1 localhost localhost.localdomain localhost6 localhost6.localdomain6<br>192.168.0.20 example.com<br>1.2.3.4 username.example.com<br>``` |







Note:





In this example, `1.2.3.4` represents the destination server’s IP address, and `username.example.com` represents the domain name.

6. Save your changes.
7. Reload your browser for the changes to take effect.

#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×