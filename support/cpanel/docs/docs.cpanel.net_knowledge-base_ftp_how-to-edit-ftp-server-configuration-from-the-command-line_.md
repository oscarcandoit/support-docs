---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/"
title: "How to Edit FTP Server Configuration from the Command Line | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#main-content)

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
4. How to Edit FTP Server Configuration from the Command Line


[ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#overview)

* * *

[Determine your FTP server](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#determine-your-ftp-server)

* * *

[ProFTP configuration](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#proftp-configuration)

* * *

[ProFTP configuration with managed\_settings](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#proftp-configuration-with-managedsettings)

* * *

[Pure-FTP configuration](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#pure-ftp-configuration)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#overview)

* * *

[Determine your FTP server](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#determine-your-ftp-server)

* * *

[ProFTP configuration](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#proftp-configuration)

* * *

[ProFTP configuration with managed\_settings](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#proftp-configuration-with-managedsettings)

* * *

[Pure-FTP configuration](https://docs.cpanel.net/knowledge-base/ftp/how-to-edit-ftp-server-configuration-from-the-command-line/#pure-ftp-configuration)

* * *

## How to Edit FTP Server Configuration from the Command Line

Last modified: _2024 August 12_

* * *

## Overview

This document explains how to manually edit the FTP server’s configuration from the command line.

Note:

For more ways to configure your FTP server, read our [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/) documentation.

## Determine your FTP server

To determine which FTP server your server uses, log in to your server via SSH as the `root` user and run the following command:

```go
grep ftpserver /var/cpanel/cpanel.config
```

You will receive one of the following two results:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>ftpserver=proftpd<br>ftpserver=pure-ftpd<br>``` |

Follow the instructions that correspond to your FTP server type.

## ProFTP configuration

To edit the FTP configuration for ProFTP, perform the following steps:

1. Use your preferred text editor to create or edit the `/var/cpanel/conf/proftpd/local` file.
2. Enter your changes in the local file.
3. To apply your changes, perform a force update of FTP with the following command:



```go
/scripts/setupftpserver proftpd --force
```


### ProFTP configuration with managed\_settings

The `/usr/local/cpanel/Cpanel/FtpUtils/Config/Proftpd.pm` file contains `managed_settings` options for ProFTP users.

You may configure the following `managed_settings` options in the `root` user’s `/usr/local/cpanel/Cpanel/FtpUtils/Config/Proftpd.pm` files from the command line:

- Options that correspond to the settings in WHM’s _FTP Server Configuration_ interface ( _WHM » Home » Service Configuration » FTP Server Configuration_).





Note:





The _FTP Server Configuration_ interface **only** appears if you enable FTP on your WHM server.

- Options that manage [Network Address Translation (NAT)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#network-address-translation-nat).

To print this file’s contents to your command line, log into your server via SSH as the `root` user and run the following command with the appropriate file name:

```go
cat filename
```

In the file, the list of `managed_settings` options will appear in the `new` subroutine. For example, a portion of your file may resemble the following sample, where `MaxInstances` is the configurable option:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>sub new {<br>    my $class = shift;<br>    my $self  = $class->SUPER::_init();<br>    $self->{'managed_settings'} = {<br>        'maxinstances' => {<br>            'name'    => 'MaxInstances',<br>            'context' => { 'server' => 2, },<br>            'default' => 'none',<br>``` |

To apply your changes, then perform a force update of FTP with the following command:

```go
/scripts/setupftpserver proftpd --force
```

## Pure-FTP configuration

To edit the FTP configuration for Pure-FTP, perform the following steps:

1. Use your preferred text editor to create or edit the `/var/cpanel/conf/pureftpd/local` file.
2. Enter your changes in the local file. For example, to set the `ForcePassiveIP` setting to the IP address, enter the following in the local file:


```go
ForcePassiveIP: 203.0.113.0
```



   - To clear that value, change the local file to use the following setting:


     ```go
     ForcePassiveIP: ~
     ```
3. To apply your changes, perform a force update of FTP with the following command:



```go
/scripts/setupftpserver pure-ftpd --force
```


#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×