---
url: "https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/"
title: "The setupftpserver script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#main-content)

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
4. The setupftpserver script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/#options)

* * *

## The setupftpserver script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/)

Last modified: _2020 October 19_

* * *

## Overview

The `/usr/local/cpanel/scripts/setupftpserver` script allows you to select your server’s FTP server, configure anonymous FTP services, or disable FTP services.

Note:

You can select an FTP server with WHM’s [_FTP Server Selection_](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection) interface ( _WHM » Home » Service Configuration » FTP Server Selection_). You can also configure anonymous FTP with WHM’s [_FTP Server Configuration_](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration) interface ( _WHM » Home » Service Configuration » FTP Server Configuration_).

## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/setupftpserver options ftpserver
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--force` | Run this script and do not stop for warnings, even if the script fails. | `/usr/local/cpanel/scripts/setupftpserver --force pure-ftpd` |
| `--current` | Display the currently-configured FTP server. | `/usr/local/cpanel/scripts/setupftpserver --current` |
| `--enable-anonymous` | Enable anonymous FTP. <br>Warning:<br>This feature may cause security risks. | `/usr/local/cpanel/scripts/setupftpserver --enable-anonymous pure-ftpd` |

Use the following values for the `ftpserver` option:

| Value | Description | Example |
| --- | --- | --- |
| `pure-ftpd` | Use the Pure-FTPd FTP server. | `/usr/local/cpanel/scripts/setupftpserver pure-ftpd` |
| `proftp` | Use the ProFTP FTP server. | `/usr/local/cpanel/scripts/setupftpserver proftpd` |
| `disabled` | Disable FTP services. | `/usr/local/cpanel/scripts/setupftpserver disabled` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×