---
url: "https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/"
title: "FTP Server Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#main-content)

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
4. FTP Server Configuration


[ftp](https://docs.cpanel.net/tags/ftp/) [whmui](https://docs.cpanel.net/tags/whmui/) [anonymousftp](https://docs.cpanel.net/tags/anonymousftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#overview)

* * *

[Configure your ProFTPD server](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#configure-your-proftpd-server)

* * *

[ProFTPD Debug Mode](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#proftpd-debug-mode)

* * *

[Configure your Pure-FTPd server](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#configure-your-pure-ftpd-server)

* * *

[Increase File Limit](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#increase-file-limit)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#overview)

* * *

[Configure your ProFTPD server](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#configure-your-proftpd-server)

* * *

[ProFTPD Debug Mode](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#proftpd-debug-mode)

* * *

[Configure your Pure-FTPd server](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#configure-your-pure-ftpd-server)

* * *

[Increase File Limit](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/#increase-file-limit)

* * *

## FTP Server Configuration

![](https://docs.cpanel.net/img/whm-icons/ftp_server_configuration.svg)

_Valid for versions 112 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/102/)

#### [112](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)

Last modified: _2024 September 30_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _FTP Server Configuration_ interface allows you to customize your chosen [FTP server’s](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ftp) behavior.

Note:

- This interface is **only** available when you enable FTP services on your server. For more information, read our [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) documentation.
- We support [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246).

  - We strongly recommend that you enable `TLSv1.2` on your server.
  - You can use [RFC4346](https://tools.ietf.org/html/rfc4346) or [TLSv1.2](https://tools.ietf.org/html/rfc5246) to manage your Pure-FTPd server.

## Configure your ProFTPD server

To configure your [ProFTPD](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#proftpd) server, perform the following steps:

01. From the _TLS Encryption Support_ menu, select a setting for TLS encryption of FTP connections:

    - _Optional_ — FTP users choose whether to use TLS encryption. This setting offers the best compatibility.
    - _Required_ — Requires TLS encryption on commands that users issue to the FTP server and on data that comes through the FTP server. This setting protects all traffic from eavesdroppers.
02. In the _TLS Options_ text box, enter `NoSessionReuseRequired`. This is the default setting. This setting softens the requirement to reuse the SSL session for data connections from the control connection.
03. In the _TLS Cipher Suite_ text box, enter the list, in standard format, of the TLS ciphers that you wish your FTP server to use.

    - This setting defaults to `HIGH:MEDIUM:+TLSv1:!SSLv2:+SSLv3`.
    - Typically, you should only adjust this setting for PCI Compliance.
    - For more information about TLS ciphers, read OpenSSL’s [Cipher](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) documentation.
04. In the _TLS Protocol_ text box, enter the TLSProtocol directive that ProFTPD will use when it establishes SSL/TLS sessions.

    - This setting defaults to `SSLv23`. This setting allows the `SSLv3` and `TLSv1` protocols.
    - You should only adjust this setting for PCI Compliance.
05. From the _Allow Anonymous Logins_ menu, select whether users can log in to your FTP server anonymously.





    Warning:




    We do **not** recommend that you enable anonymous FTP, because it **dangerously** compromises the security of your server.


06. In the _Maximum Idle Time (seconds)_ text box, enter the number of seconds that an FTP connection may remain idle before the server disconnects it.
07. In the _Maximum Number of FTP Processes_ text box, enter the maximum number of active processes the FTP server may create. Because each connection creates a process, this setting limits the total number of FTP connections.





    Note:




    To disable limits on the number of FTP processes, enter _none_.


08. From the _Show Symlinks_ menu, select whether you want ProFTPD to display [symbolic links (symlinks)](http://en.wikipedia.org/wiki/Symbolic_link) as such, and not as files or directories. The default for this setting is _Yes_.
09. From the _Symlink Compatibility_ menu, select whether you want to allow some FTP clients to display the correct symlinks to directories. The default for this setting is _No_. If you choose _Yes_, you must also enable the _Show Symlinks_ setting.
10. From the _TCP Wrappers_ menu, select whether you would like ProFTPD to use the TCP Wrappers package. With this package, you can configure the `/etc/hosts.allow` and `/etc/hosts.deny` files. For more information on how to edit these files, read our [ProFTPD Configuration for Host Access Control](https://docs.cpanel.net/knowledge-base/ftp/proftpd-configuration-for-host-access-control) documentation. The default for this setting is _No_.





    Important:





- ProFTPD does **not** use TCP-Wrappers-based access controls on the following systems:

  - [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
  - [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
  - [CloudLinux™](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- Use the functionality available in WHM’s [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control/#host-access-control-for-cloudlinux-almalinux-and-rocky-linux) interface for these operating systems.
- The rest of ProFTPD’s functionality still works on these operating systems.

11. Click _Save_.

For more information about ProFTPD, read [ProFTPD’s](http://www.proftpd.org/docs/) documentation.

### ProFTPD Debug Mode

If you are having issues with your ProFTFD server, you can run ProFTPD’s debug mode to view debug messages.

To access ProFTPD’s debug mode, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br>/usr/local/cpanel/scripts/restartsrv_proftpd --stop<br>/usr/sbin/proftpd -nd9<br>``` |

For more information about debugging in ProFTPD, read ProFTPD’s [Debugging Problems](http://www.proftpd.org/docs/howto/Debugging.html) documentation.

## Configure your Pure-FTPd server

To configure your [Pure-FTPd](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#pure-ftpd) server, perform the following steps:

01. From the _TLS Encryption Support_ menu, select a setting for TLS encryption of FTP connections:

    - _Disabled_ — Disables TLS encryption.
    - _Optional_ — FTP users choose whether to use TLS encryption. This setting offers the best compatibility.
    - _Required (Command)_ — Requires TLS encryption on all commands users issue to the FTP server. This setting hides passwords and usernames.
    - _Required (Command/Data)_ — Requires TLS encryption on commands that users issue to the FTP server and on data that comes through the FTP server. This setting protects all traffic from eavesdroppers.
02. In the _TLS Cipher Suite_ text box, enter the list, in standard format, of the TLS ciphers you wish your FTP server to use.

    - This setting defaults to `HIGH`.
    - Typically, you should only adjust this setting for PCI compliance.
    - For more information about TLS ciphers, read OpenSSL’s [Cipher](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) documentation.
03. From the _Allow Anonymous Logins_ menu, select whether cPanel users can enable Anonymous FTP logins via cPanel’s [_Anonymous FTP_](https://docs.cpanel.net/cpanel/files/anonymous-ftp/) interface ( _cPanel » Home » Files » Anonymous FTP_).





    Warning:




    We do **not** recommend that you enable anonymous FTP, because it **dangerously** compromises the security of your server.


04. From the _Allow Anonymous Uploads_ menu, select whether anonymous users can upload files to your FTP servers.





    Warning:




    We do **not** recommend that you enable anonymous FTP, because it **dangerously** compromises the security of your server.


05. Enter the maximum load for anonymous downloads in the _Maximum Load for Anonymous Downloads_ text box. If the system’s load average exceeds this setting, your FTP server will prevent downloads by anonymous users.





    Warning:




    We do **not** recommend that you enable anonymous FTP, because it **dangerously** compromises the security of your server.


06. In the _Maximum Idle Time (minutes)_ text box, enter the number of minutes an FTP connection may remain idle before the server disconnects it.
07. Enter the maximum number of FTP connections in the _Maximum Connections_ text box. Your FTP server applies this limit server-wide and not on a per-user basis.
08. In the _Maximum Connections Per IP Address_ text box, enter the maximum number of FTP connections to allow from a single IP address.
09. From the _Allow Logins with Root Password_ menu, select whether to allow the root password to access all FTP accounts.
10. From the _Broken Clients Compatibility_ menu, select whether your FTP server will ignore some protocol standards in order to improve compatibility with buggy FTP clients and firewalls.






    Note:





    If you select _Yes_, your FTP server will perform the following actions:



- Create [symbolic links (symlinks)](http://en.wikipedia.org/wiki/Symbolic_link) as actual files and directories.
- Prompt for a dummy password for an anonymous user.
- Disable [FTP passive mode](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#passive-mode-pasv).

11. Click _Save_.

The system stores your configuration in the `/etc/pureftpd.conf` file.

For more information about Pure-FTPd, read [Pure-FTPd’s](http://www.pureftpd.org/project/pure-ftpd/doc) documentation.

### Increase File Limit

By default, Pure-FTPd **only** returns the first 10,000 files in a directory. To increase this number, perform the following steps:

1. Create the `/var/cpanel/conf/pureftpd/local` file with the `touch` command, if one does not exist.
2. In a text editor, open the `local` file and add the following line, where `15000` represents the value that you wish to increase to: `LimitRecursion: 15000 8`. The local file should be in the following YAML format:



```yaml
ChrootEveryone: 'yes'
LimitRecursion: 15000 8
```

3. Run the `/usr/local/cpanel/scripts/setupftpserver pure-ftpd --force` command to update the `/etc/pure-ftpd.conf` file.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×