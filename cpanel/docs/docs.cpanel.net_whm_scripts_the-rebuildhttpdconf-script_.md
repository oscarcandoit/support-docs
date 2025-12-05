---
url: "https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/"
title: "The rebuildhttpdconf Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#main-content)

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
4. The rebuildhttpdconf Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#success)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/#success)

* * *

## The rebuildhttpdconf Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/)

Last modified: _2022 January 20_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/rebuildhttpdconf` script to rebuild Apache’s main configuration file.

Important:

This script does **not** restart Apache. To restart Apache, run the [restartsrv\_httpd](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/) script.


Note:

The system automatically updates Apache's configuration as needed, so you may not need to run this script manually at all.


## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/rebuildhttpdconf --preview --nolock
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--preview` | Creates a file named `httpd-preview.conf` instead of `httpd.conf`. This allows you to inspect the configuration file before you use it on your system. | `/usr/local/cpanel/scripts/rebuildhttpdconf --preview` |
| ` --nolock` | Usually, the system locks the configuration file during the rebuilding process to prevent two processes from conflicting. This option disables that lock. | `/usr/local/cpanel/scripts/rebuildhttpdconf --nolock` |

### Success

If the script succeeds, it will return output similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```go<br># /scripts/rebuildhttpdconf<br>...<br>info [rebuildhttpdconf] Missing IP for domain install.example.com, using 192.168.0.20<br>info [rebuildhttpdconf] Missing ServerName for domain install.example.com, using install.example.com<br>info [rebuildhttpdconf] Missing port for domain install.example.com, using 80<br>info [rebuildhttpdconf] Missing user for domain install.example.com, using nobody<br>info [rebuildhttpdconf] Missing owner for domain install.example.com, force lookup to root<br>info [rebuildhttpdconf] Missing group for domain install.example.com, using nobody<br>Built /etc/apache2/conf/httpd.conf OK<br>``` |

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The fix-web-vhost-configuration Script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×