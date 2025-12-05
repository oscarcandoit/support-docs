---
url: "https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/"
title: "FTP Server Selection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#main-content)

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
4. FTP Server Selection


[ftp](https://docs.cpanel.net/tags/ftp/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#overview)

* * *

[How to select an FTP daemon](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#how-to-select-an-ftp-daemon)

* * *

[Pure-FTPd and ProFTPD](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#pure-ftpd-and-proftpd)

* * *

[Troubleshoot unmanaged FTP services](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#troubleshoot-unmanaged-ftp-services)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#overview)

* * *

[How to select an FTP daemon](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#how-to-select-an-ftp-daemon)

* * *

[Pure-FTPd and ProFTPD](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#pure-ftpd-and-proftpd)

* * *

[Troubleshoot unmanaged FTP services](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/#troubleshoot-unmanaged-ftp-services)

* * *

## FTP Server Selection

![](https://docs.cpanel.net/img/whm-icons/ftp_server_selection.svg)

_Valid for versions 112 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/102/)

#### [112](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to select an FTP server [daemon](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#daemon), or to disable [FTP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ftp) services.

This interface is only available when you enable the _FTP_ server role in WHM’s [_Server Profile_](https://docs.cpanel.net/whm/server-configuration/server-profile/) interface ( _WHM » Home » Server Configuration » Server Profile_).

Note:

- We disable FTP services by default because the FTP protocol sends clear-text usernames and passwords over public networks. It also does not enforce encryption, so third parties can attack the transmitted data. We recommend that you use transfer methods that use encryption, such as [the `scp` command](https://linux.die.net/man/1/scp) or cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).
- We support [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246).

  - We strongly recommend that you enable `TLSv1.2` on your server.
  - You can use [RFC4346](https://tools.ietf.org/html/rfc4346) or [TLSv1.2](https://tools.ietf.org/html/rfc5246) to manage your Pure-FTPd server.

## How to select an FTP daemon

To select an FTP daemon for your server, perform the following steps:

1. In the _FTP Server_ column, select _ProFTPD_ or _Pure-FTPD_.

   - Select _Disabled_ to disable FTP services.
2. Click _Save_.

## Pure-FTPd and ProFTPD

The following list offers comparisons between these FTP server daemons:

- Pure-FTPd typically provides faster FTP transfers than ProFTPD.
- Pure-FTPd does not display statistics in the statistics menu.
- Pure-FTPd supports virtual user quotas; ProFTPD does not.
- ProFTPD will display your bandwidth usage, allowing you to monitor the amount of bandwidth that FTP sessions use.

Important:

ProFTPD does **not** use TCP-Wrappers-based access controls on the following systems:

- [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [CloudLinux™](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)

Use the functionality available in WHM’s [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control/#host-access-control-for-cloudlinux-almalinux-and-rocky-linux) interface for these operating systems.

The rest of ProFTPD’s functionality still works on these operating systems.

For more information about these FTP server daemons, visit the [ProFTPD](http://www.proftpd.org/docs/) and [Pure-FTPd](http://www.pureftpd.org/project/pure-ftpd/doc) websites.

## Troubleshoot unmanaged FTP services

If you configured your server to use an [`unmanaged`](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#why-is-my-target-set-to-unmanaged) package target, problems may occur in the [cPanel](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) interface.

For more information, read our [How to Restore Missing FTP Interfaces in cPanel](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/) documentation.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Exim Configuration Manager Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×