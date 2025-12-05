---
url: "https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/"
title: "Modify Apache Virtual Hosts with Include Files | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. Modify Apache Virtual Hosts with Include Files


[apache](https://docs.cpanel.net/tags/apache/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#overview)

* * *

[Include file structure](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#include-file-structure)

* * *

[Apply to an individual virtual host](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-an-individual-virtual-host)

* * *

[Apply to all virtual hosts on the system](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-all-virtual-hosts-on-the-system)

* * *

[Apply to all virtual hosts that a user owns](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-all-virtual-hosts-that-a-user-owns)

* * *

[Restart Apache](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#restart-apache)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#overview)

* * *

[Include file structure](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#include-file-structure)

* * *

[Apply to an individual virtual host](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-an-individual-virtual-host)

* * *

[Apply to all virtual hosts on the system](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-all-virtual-hosts-on-the-system)

* * *

[Apply to all virtual hosts that a user owns](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#apply-to-all-virtual-hosts-that-a-user-owns)

* * *

[Restart Apache](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/#restart-apache)

* * *

## Modify Apache Virtual Hosts with Include Files

Last modified: _2024 September 4_

* * *

## Overview

You can use the command line interface to add include files that modify the content of the virtual hosts in your Apache configuration. You may wish to do this to modify the configuration of an individual domain, or a specific user’s domains.

You **must** create the directories and the include files for this type of configuration. For information on the directives that you can add to the virtual hosts in your Apache configuration, read [Apache’s](http://httpd.apache.org/docs/current/) documentation.

Important:

- Includes are the last directives in each virtual host. An include file’s contents override any value that exists in the primary configuration file.
- If you use an include that requires a specific Apache version, and you change to a different Apache version, the Apache configuration will ignore the include file.

## Include file structure

You **must** use the following directory structure to create an include file for an individual domain:

Note:

In the following examples:

- Replace `user` with the account’s username.
- Replace `domain` with the domain name.
- Replace `includename.conf` with the filename that you wish to include.

### Apply to an individual virtual host

| Protocol | Include file |
| --- | --- |
| With SSL | `/etc/apache2/conf.d/userdata/ssl/2_4/user/domain/includename.conf` |
| Without SSL | `/etc/apache2/conf.d/userdata/std/2_4/user/domain/includename.conf` |

### Apply to all virtual hosts on the system

Warning:

- Include files that do **not** designate a specific Apache version may **not** migrate properly to future versions of Apache.
- Include files with local overrides cause the system to permanently disable the _Force HTTPS Redirects_ option in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains) interface ( _cPanel » Home » Domains » Domains_).

| Protocol | Include file |
| --- | --- |
| With SSL | - `/etc/apache2/conf.d/userdata/ssl/2_4/includename.conf`<br>- `/etc/apache2/conf.d/userdata/ssl/includename.conf` |
| Without SSL | - `/etc/apache2/conf.d/userdata/std/2_4/includename.conf`<br>- `/etc/apache2/conf.d/userdata/std/includename.conf` |
| With and without SSL | `/etc/apache2/conf.d/userdata/includename.conf` |

### Apply to all virtual hosts that a user owns

| Protocol | Include file |
| --- | --- |
| With SSL | `/etc/apache2/conf.d/userdata/ssl/2_4/user/includename.conf` |
| Without SSL | `/etc/apache2/conf.d/userdata/std/2_4/user/includename.conf` |

## Restart Apache

After you create or edit an Apache include `userdata` file, you **must** rebuild the `httpd.conf` file **and** restart Apache for the changes to take effect.

To rebuild the `httpd.conf` file, run the following script:

```bash
/usr/local/cpanel/scripts/rebuildhttpdconf
```

To restart Apache, run the following script:

```bash
/usr/local/cpanel/scripts/restartsrv_httpd
```

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×