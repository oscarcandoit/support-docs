---
url: "https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/"
title: "Exim Configuration Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. Exim Configuration Manager


[whmui](https://docs.cpanel.net/tags/whmui/) [exim](https://docs.cpanel.net/tags/exim/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#overview)

* * *

[Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#basic-editor)

* * *

[Advanced Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor)

* * *

[Custom ACLs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#custom-acls)

* * *

[Skip RBLs for local domains](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#skip-rbls-for-local-domains)

* * *

[Multi-domain smarthost authentication](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#multi-domain-smarthost-authentication)

* * *

[Backup](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#backup)

* * *

[Restore](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#restore)

* * *

[Reset](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#reset)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#overview)

* * *

[Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#basic-editor)

* * *

[Advanced Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor)

* * *

[Custom ACLs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#custom-acls)

* * *

[Skip RBLs for local domains](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#skip-rbls-for-local-domains)

* * *

[Multi-domain smarthost authentication](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#multi-domain-smarthost-authentication)

* * *

[Backup](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#backup)

* * *

[Restore](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#restore)

* * *

[Reset](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#reset)

* * *

## Exim Configuration Manager

![](https://docs.cpanel.net/img/whm-icons/exim_configuration_manager.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Note:

Some settings may not appear if your server does not use the _Standard Node_ server profile. For more information, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/) documentation.

Use the features in the Exim Configuration Manager interface to modify your Exim configuration. Exim is a mail transfer agent that cPanel & WHM includes. Mail transfer agents send and receive email messages to your server.

Many of the _Exim Configuration Manager_ options involve Simple Mail Transfer Protocol (SMTP). Servers use SMTP as the standard protocol to send and receive email messages.

Warning:

- SMTP’s simplicity causes it to be a relatively vulnerable protocol. Spammers who send email messages with falsified headers often abuse it.
- Make **certain** that you define the system’s SMTP options. They help spam attacks on and from your server. Spammers can send many spam messages within a short period of time, which use a large amount of your server’s bandwidth.
- We **strongly** recommend that you use the [_Basic Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#basic-editor) and [_Advanced Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) interfaces to make changes to your Exim configuration. Do **not** modify the Exim configuration files manually.

## Basic Editor

Click the _Basic Editor_ tab to modify the options in your Exim configuration. For detailed information about each option in the _Basic Editor_ tab, read our [Exim Configuration Manager - Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/) documentation.

## Advanced Editor

Warning:

This feature is for advanced users. Exercise **extreme** caution when you use this feature.

- Changes that you make to the default configuration can significantly impact Exim’s performance, and may render Exim **nonfunctional**.
- If you manually change any of these directives, you may break Mail SNI integration in cPanel & WHM:
  - `tls_privatekey`
  - `tls_certificate`
  - `tls_verify_certificates`
- Exim does **not** update your configuration changes across Exim updates and reinstallation.

Click the _Advanced Editor_ tab to modify Exim’s default configuration. For information about how to configure these directives, read [Exim’s](http://www.exim.org/) documentation.

For most changes that you make to your Exim configuration, the system changes both the `/etc/exim.conf.localopts` and `/etc/exim.conf.local` files. The system uses the information in these files when it rebuilds the `/etc/exim.conf` file.

- The `/etc/exim.conf.local` file is Exim’s override file and stores Exim’s default configuration.






Note:





- The `/etc/exim.conf.local` file does **not** exist by default. The system creates the `/etc/exim.conf.local` file **after** you configure Exim’s settings to use non-default values.
- Any edits that you make directly to the `/etc/exim.conf` file will **only** work temporarily.
- You **must** use the _Advanced Editor_ feature to make permanent changes to your `/etc/exim.conf.local` file.

### Custom ACLs

For custom ACL changes to the Exim configuration, the system creates a file in a subdirectory under the `/usr/local/cpanel/etc/exim/acls/` directory. For example, if you create a custom `acl_smtp_helo_block` entry, the system stores the setting in the `/usr/local/cpanel/etc/exim/acls/ACL_SMTP_HELO_BLOCK/custom_begin_smtp_helo` file.

### Skip RBLs for local domains

To skip [Realtime Blackhole Lists (RBLs)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#realtime-blackhole-list-rbl) for specific, local domains, perform the following steps:

1. Log in to your server as the `root` user via either the [WHM Terminal](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm/) or [via SSH](https://docs.cpanel.net/cpanel/security/ssh-access/).
2. Use a text editor to create and edit the `/etc/skiprbldomains` file.
3. Add the local domains to the file, with one domain name per line.
4. Verify that the `skip_rbl_domains` domainlist appears in the _Advanced Editor_.
5. Click _Save_.

### Multi-domain smarthost authentication

You can use the Basic Editor to manage smarthost configuration for domains that use the same authentication information. If you used the Advanced Editor in the past for this, you may be able to use the Basic Editor now. To learn more about smarthost authentication in the Basic Editor, read our [_Exim Configuration Manager Basic Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#mail) documentaiton.

To set up smarthost authentication for multiple domains, enter the following lines in the `AUTH` section for each domain:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>remoteserver_login:<br>  driver = plaintext<br>  public_name = user<br>  hide client_send = : user@example.com : 12345luggage<br>``` |

Notes:

These lines use the following examples:

- `user` represents user’s login ID.
- `user@example.com` represents the email account to authenticate.
- `12345luggage` represents the account’s password.

## Backup

Click the _Backup_ tab to create a backup of your Exim configuration, which you can either download to your computer or save on the server.

To create a backup, perform the following steps:

1. Select one of the following options:
   - _Download_ — Save the backup to a local drive on your computer.
   - _Save on Server_ — Save the backup to the server.
2. Click _Run Backup_.

Note:

You **cannot** delete these backups.

## Restore

Click the _Restore_ tab to restore an existing backup of an Exim configuration. To restore an Exim configuration backup that you saved to a local drive, perform the following steps:

1. Click _Choose File_ to select the backup file. Backup files use the `.tar.gz` file format by default.
2. Click _Upload_ to upload and restore the selected backup file.

To restore an Exim configuration backup that you saved to the server, click _Restore_ for the file name of the backup that you wish to restore.

## Reset

Click the _Reset_ tab to restore Exim’s default configuration.

1. Select the type of reset to perform from the _Reset type_ menu. The following types of reset are available:

   - _Reset cPanel & WHM Exim configuration files, one option at a time, until the installed Exim configuration is valid._
   - _Update the installed Exim configuration to the minimum version required by this version of cPanel & WHM._
   - _Reset the entire Exim configuration to the default settings provided with cPanel & WHM._
   - _Reset any manually customized data in the ACLs section._
   - _Reset all Advanced Editor options, except third-party and custom ACLs._
   - _Disable all third-party and custom ACLs._
2. Read the description of your chosen reset type **carefully**. The description appears below the _Reset type_ menu.
3. If you wish to disable third-party and custom ACLs, select the _Disable third-party and custom ACLs_ checkbox.





Note:




The _Reset cPanel & WHM Exim configuration files, one option at a time, until the installed Exim configuration is valid._ and _Update the installed Exim configuration to the minimum version required by this version of cPanel & WHM._ do **not** include this option.


4. Click _Reset_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×