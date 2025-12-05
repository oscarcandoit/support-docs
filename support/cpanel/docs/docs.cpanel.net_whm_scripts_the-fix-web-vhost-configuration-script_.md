---
url: "https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/"
title: "The fix-web-vhost-configuration Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#main-content)

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
4. The fix-web-vhost-configuration Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#example)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#output)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#example)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/#output)

* * *

## The fix-web-vhost-configuration Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/)

Last modified: _2022 November 29_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/fix-web-vhost-configuration` script to iterate through each user’s web virtual host configuration files and remove excess alias names. Certain historical errors in cPanel & WHM make it possible for discrepancies to exist between what the system expects and the actual configuration.

Note:

- You **must** run this script as the `root` user.

- The system automatically runs the `/usr/local/cpanel/scripts/fix-web-vhost-configuration` script when you upgrade major versions of cPanel & WHM.


This script performs the following actions:

Note:

If you pass the `--dry-run` argument, the script will **not** delete or add any domains form the web virtual host configuration files.


1. Identify any unrecognized alias domains.

2. Delete the following unrecognized alias domains from the web virtual host configuration files:
   - Active service subdomains - `cpanel.example.com`

   - `www` subdomains of active service subdomains - `www.cpanel.example.com`

   - `www` subdomains of any expected alias - `www.mail.example.com`



     Note:




     This will ignore other unrecognized alias domains
3. Identify and add any missing alias domains.


## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/fix-web-vhost-configuration [arguments]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--user` | **Required** \- Update the web virtual host configuration files of the user that you specify. <br>Note:<br>You **must** pass either the `user` flag or the `all-users` flag, but not both. | `--user=username` |
| `--all-users` | **Required** \- Update the web virtual host configuration files for all users. <br>Note:<br>You **must** pass either the `user` flag or the `all-users` flag, but not both. | `--all-users` |
| `--dry-run` | Identify, but do not delete or add any alias domains in the user’s web virtual host configuration files. | `--dry-run` |
| `--help` | Display a help message. | `--help` |

### Example

For example, the following command removes the excess alias name from the `username` cPanel user’s web virtual host configuration files:

```perl
/usr/local/cpanel/scripts/fix-web-vhost-configuration --user=username
```

### Output

This script’s output could resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>----- Checking “username” …<br>--- Virtual host: “example.com”<br>⚠ Unrecognized: cpanel.example.com<br>⚠ Pending deletion: cpanel.example.com<br>Fixed!<br>- Non-SSL configuration …<br>Done!<br>``` |

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The rebuildhttpdconf Script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×