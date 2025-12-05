---
url: "https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/"
title: "Configure ClamAV Scanner | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#main-content)

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
3. [Plugins](https://docs.cpanel.net/whm/plugins/)
4. Configure ClamAV Scanner


[clamav](https://docs.cpanel.net/tags/clamav/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#overview)

* * *

[How to install ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#how-to-install-clamav)

* * *

[Configure ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav)

* * *

[Configure ClamAV for specific users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav-for-specific-users)

* * *

[Add or remove configured users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#add-or-remove-configured-users)

* * *

[Configure defaults for new configured users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-defaults-for-new-configured-users)

* * *

[Configure settings for an individual user](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-settings-for-an-individual-user)

* * *

[Configure ClamAV for Exim](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav-for-exim)

* * *

[ClamAV with m-box formatted mailboxes](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#clamav-with-m-box-formatted-mailboxes)

* * *

[Command line interface](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#command-line-interface)

* * *

[ClamAV cron job](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#clamav-cron-job)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#overview)

* * *

[How to install ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#how-to-install-clamav)

* * *

[Configure ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav)

* * *

[Configure ClamAV for specific users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav-for-specific-users)

* * *

[Add or remove configured users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#add-or-remove-configured-users)

* * *

[Configure defaults for new configured users](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-defaults-for-new-configured-users)

* * *

[Configure settings for an individual user](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-settings-for-an-individual-user)

* * *

[Configure ClamAV for Exim](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav-for-exim)

* * *

[ClamAV with m-box formatted mailboxes](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#clamav-with-m-box-formatted-mailboxes)

* * *

[Command line interface](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#command-line-interface)

* * *

[ClamAV cron job](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#clamav-cron-job)

* * *

## Configure ClamAV Scanner

![](https://docs.cpanel.net/img/whm-icons/plugin_placeholder.svg)

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Note:

We recommend using ImunifyAV instead of ClamAV.

For more information, read our [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/) documentation.

The Clam AntiVirus Scanner (ClamAV) antivirus software searches your server for malicious programs. If the scanner identifies a potential security threat, it flags the file to allow you to take the appropriate action.

## How to install ClamAV

To install or uninstall ClamAV, use WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).

Important:

We **strongly** recommend that at least three gigabytes (GB) of RAM exist on your server if you install ClamAV. Your server may experience performance issues if it lacks enough RAM and you use ClamAV.

## Configure ClamAV

Note:

After you configure ClamAV, we recommend that you schedule a `root` cron job to run daily during off-peak hours. For more information on ClamAV cron jobs, read the [ClamAV cron job](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#clamav-cron-job) section of this document.

To configure ClamAV, perform the following steps:

1. Select the services that you wish to scan.
   - _Scan Entire Home Directory_ — Scans your server’s home directory.
   - _Scan Mail_ — Scans all of your server’s mail folders.
   - _Scan Public FTP Space_ — Scans all folders that FTP users can access.
   - _Scan Public Web Space_ — Scans all folders that web visitors can access.
2. Click _Save_.


Important:

ClamAV automatically scans inbound messages through Exim. You **must** perform additional steps if you wish for ClamAV to scan outbound messages through [Exim](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#configure-clamav-for-exim).

## Configure ClamAV for specific users

If you wish to override the ClamAV configuration for specific users, click _User Configuration_. The _User Configuration_ interface also allows you to set override defaults for all configured users.

### Add or remove configured users

Before you can configure a user’s ClamAV settings, that user **must** appear in the _Configured Users_ menu.

To add a user to the _Configured Users_ menu, perform the following steps:

1. Select the desired user from the _User List_ menu.
2. Click _Add_.

   - If you wish to add all available users to the _Configured Users_ menu, click _Add All_.

To remove a user from the _Configured Users_ menu, perform the following steps:

1. Select the desired user from the _Configured Users_ menu.
2. Click _Remove_.

   - If you wish to remove all available users from the _Configured Users_ menu, click _Remove All_.






     Note:





     After you remove a user from the _Configured Users_ menu, ClamAV will use the main configuration to scan that user’s portion of the server.

### Configure defaults for new configured users

ClamAV applies the settings that you specify under the _Defaults_ header to all new configured users.

To set the default settings for new configured users, perform the following steps:

1. Select the services that you wish to scan.
   - _Scan Entire Home Directory_ — Scans the user’s home directory.
   - _Scan Mail_ — Scans the user’s mail folders.
   - _Scan Public FTP Space_ — Scans all folders that FTP users can access.
   - _Scan Public Web Space_ — Scans all folders that web visitors can access.
2. Click _Save_.

### Configure settings for an individual user

To configure ClamAV for an individual user, perform the following steps:

1. In the _Group Scanner Configuration_ section’s _Configured Users_ menu, select the user for whom you wish to configure ClamAV.

   - If the desired user does not appear in the _Configured Users_ menu, follow the instructions in the _Add or remove configured users_ section above to [add that user](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/#add-or-remove-configured-users).
   - In the _User Scanner Configuration_ section, click _Configure_.
2. Select the services that you wish to scan.
   - _Scan Entire Home Directory_ — Scans the user’s home directory.
   - _Scan Mail_ — Scans the user’s mail folders.
   - _Scan Public FTP Space_ — Scans all folders that FTP users can access.
   - _Scan Public Web Space_ — Scans all folders that web visitors can access.
3. Click _Save Defaults_.

## Configure ClamAV for Exim

Important:

You **must** perform these additional steps if you wish for ClamAV to scan outgoing messages through Exim.

To configure ClamAV to scan outbound messages through Exim, perform the following steps:

1. Navigate to WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager » Basic Editor » Security_).
2. For the _Scan messages for malware from authenticated senders (exiscan)_ option, select the _On_ setting.
3. For the _Scan outgoing messages for malware_ option, select the _On_ setting.
4. Click _Save_.

## ClamAV with m-box formatted mailboxes

Unlike the maildir mailbox, which stores messages individually, the mbox mailbox format uses a simpler index and bundles messages into files. System administrators can use the `doveadm` command to manage ClamAV flagged files on mbox-formatted mailboxes. You can convert your server’s mailboxes to the maildir format if you are unfamiliar with the `doveadm` command.

More:

- For more information about the `doveadm` command and the mbox format, read [DoveCot’s MailboxFormat](https://doc.dovecot.org/admin_manual/mailbox_formats/dbox/)
documentation.
- For more information on how to convert your server’s mailboxes to the maildir format, read our [Mailbox Conversion](https://docs.cpanel.net/whm/email/mailbox-conversion) documentation.

## Command line interface

If you prefer to use the command line interface to run ClamAV, the binaries reside in the `/usr/local/cpanel/3rdparty/bin/` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/usr/local/cpanel/3rdparty/bin/clamscan<br>/usr/local/cpanel/3rdparty/bin/clamdscan<br>/usr/local/cpanel/3rdparty/bin/freshclam<br>``` |

To customize a manual run of ClamAV on the command line, you can edit the following options in the `/usr/local/cpanel/3rdparty/etc/clamd.conf` file:

- `FixStaleSocket` — Removes a stale socket file after an unsuccessful system shutdown.
- `LocalSocket` — The path to a local socket file on which the daemon listens.
- `PhishingScanURLs` — Scans URLs that appear in emails for phishing attempts.
- `PhishingSignatures` — Scans signatures that appear in emails for phishing attempts.
- `PidFile` — The path to the process identifier file of the listening daemon.
- `ScanMail` — Enables the internal email scanner.

If you use scripts that expect ClamAV binaries in the `/usr/local/bin` directory, create symbolic links with the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>ln -s /usr/local/cpanel/3rdparty/bin/clamscan /usr/local/bin/clamscan<br>ln -s /usr/local/cpanel/3rdparty/bin/freshclam /usr/local/bin/freshclam<br>``` |

## ClamAV cron job

After you configure ClamAV, we recommend that you schedule a `root` cron job to run daily during off-peak hours. The following example demonstrates a command that will scan the server’s accounts:

```perl
while read domain user; do /usr/local/cpanel/3rdparty/bin/clamscan -i -r /home/"$user" 2>&1; done </etc/trueuserdomains >>/root/infections.txt
```

This command recursively searches the `home` directory for spam and infected files.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [WP Toolkit for WHM](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×