---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/"
title: "How to Deny FTP Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#main-content)

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
3. [FTP](https://docs.cpanel.net/knowledge-base/ftp/)
4. How to Deny FTP Access


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#overview)

* * *

[The /etc/ftpusers file](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#the-etcftpusers-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#overview)

* * *

[The /etc/ftpusers file](https://docs.cpanel.net/knowledge-base/ftp/how-to-deny-ftp-access/#the-etcftpusers-file)

* * *

## How to Deny FTP Access

Last modified: _2020 April 3_

* * *

## Overview

If the `/etc/ftpusers` file exists on your server, cPanel & WHM denies FTP access to all of the cPanel users in that file.

Important:

If the `/etc/ftpusers` file does **not** exist on your server, you **must** create it before you can use it to block FTP access.

## The /etc/ftpusers file

The `/etc/ftpusers` file lists of all of the cPanel users for whom to deny FTP access. To deny FTP access to a user, add the username to the file, with one username per line.
For example, an `/etc/ftpusers` file that blocks access to the `user1`, `user2`, and `user3` users would appear similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>user1<br>user2<br>user3<br>``` |

Note:

- Do **not** include additional information in the usernames (for example, the domain name).
- To deny FTP access to an FTP user, block the cPanel account that owns that FTP user.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [The setupftpserver script](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×