---
url: "https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/"
title: "Transfer Tool — Prepare The Source Server | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#main-content)

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
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Transfer Tool — Prepare The Source Server


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#overview) [Set up a source server for transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#set-up-a-source-server-for-transfer) [Remote server information](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#remote-server-information) [Authentication](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#authentication) [Security](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#security) [Advanced](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#advanced) [The Account List interface](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#the-account-list-interface) - [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#installation-toggle)

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#overview) [Set up a source server for transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#set-up-a-source-server-for-transfer) [Remote server information](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#remote-server-information) [Authentication](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#authentication) [Security](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#security) [Advanced](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#advanced) [The Account List interface](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/#the-account-list-interface) - [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

## Transfer Tool — Prepare The Source Server

![](https://docs.cpanel.net/img/whm-icons/transfer_tool.svg)

_Valid for versions 118 through 122_

#### Version:

#### [118](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/118/)

#### [124](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)

Last modified: _2025 September 11_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

You can use WHM’s [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool) feature to copy one or more cPanel accounts, packages, and configurations from a source server to a destination server. To complete a transfer, you must first prepare the source server to interact with the Transfer Tool.

## Set up a source server for transfer

To set up a source server for transfer, perform the steps listed in each of the _Transfer Tool_ interface sections below:

### Remote server information

This section of the _Transfer Tool_ interface allows you to specify information about the **source** server (the server **from which** to transfer accounts).

1. In the _Remote Server Address_ text box, enter an IP address or a Fully Qualified Domain Name (FQDN).

   - **IP address example** — `127.0.0.1`
   - **FQDN example** — `host.example.com`


     Note:




     In this case, the FQDN does **not** require the trailing dot.
2. In the _Remote SSH port_ text box, specify the port to use.






Note:





The default value for SSH is port `22`. If the server cannot establish an SSH connection, the _Transfer Tool_ uses port `2087` instead.


### Authentication

In this section of the _Transfer Tool_ interface, specify the authentication method the tool will use to log into the source server with the following steps:

1. Select whether to log in as the `root` user or with a specific username.






Note:





If the `PermitRootLogin` value equals `no` in the `sshd_config` file on the source server, you **must** log in as a user other than the `root` user and then escalate to the `root` user.

2. If you selected _User for Login_, perform the following actions:

   - Enter the source account’s username in the _Username_ text box.
   - Enter the source account’s password in the _Password_ text box.
3. Use the _Authentication Method_ menu to specify whether to use a password or an SSH key pair to authenticate to the source server.

   - If you select _Password_, enter the password for the account in the _Password_ text box.
   - If you select _SSH Public Key_, select the key pair to use during authentication. Make certain that you installed the appropriate key pair in WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_).






     Note:





- If you encrypted your account’s SSH key pair, enter the _SSH Key Passphrase_.
- If you’re experiencing firewall issues, use the _Password_ method instead.
4. Optionally:
   - If you select _User under Login_, select a `root` escalation method under the _Root Escalation Method_ heading.
   - If you select _su_ for the _Root Escalation Method_, enter the `root` password in the _Root Password_ text box.
   - To bypass TLS verification, select the _I understand the risks. Connect anyway._ checkbox and then click _Continue_.






     Warning:





     We **strongly** recommend that you do **not** use this option. **Only** use this option if you can confirm the identity of the source server.

### Security

Warning:

This feature is **experimental**. Do **not** consider it an effective security control. Exercise **extreme** caution when using the _Restricted Restore_ feature. Be advised that:

- When you restore an account with this feature, the system may leave behind unnecessary account data. This can cause conflicts and leave the account in a broken state. You must remove the account and then restore it **without** using the _Restricted Restore_ feature.
- The _Restricted Restore_ feature will **not** restore reseller privileges. If you wish to add reseller privileges to a transfered account, use WHM’s [_Reseller Center_](https://docs.cpanel.net/whm/resellers/reseller-center/) interface ( _WHM » Home » Resellers » Reseller Center_).
- This feature will **not** restore parked (aliased) or addon domains.
- This feature **only** allows restored accounts to use `noshell` or [`jailshell`](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell) environments. If the restored account uses another shell, the system will set the account to use `noshell` environment.
- If you use this feature to restore an account that contains PostgreSQL® databases, the destination server **must** use PostgreSQL version 8.4 or later.

In this section of the _Transfer Tool_ interface, select whether to use the _Restricted Restore_ feature or copy reseller privileges. If you do not trust the source of the account backup with `root` access to your server, you may use the _Restricted Restore_ feature to protect your server. The _Restricted Restore_ feature lets the system perform extra security checks on the archive file. If part of the file has a security issue, the system will **not** restore that part of the archive file. This helps mitigate the risk of transfers from unfamiliar sources.

The system enables this feature by default.

### Advanced

This section of the _Transfer Tool_ interface provides advanced settings for the transfer. Click _Show_ to display the list of settings.

To select the advanced settings, perform the following steps:

01. From the _Remote Server Type_ menu, select the web control panel that the source server runs. Choose from the following settings:

    - _Auto Detect_
    - _cPanel & WHM_
    - _DirectAdmin_
    - _Plesk_
02. Select _Unencrypted_ to use an unencrypted session to transfer the files.
03. Select _Compressed Transfers_ to compress the files during the rsync process when the source server transfers the files between the source and destination servers.






    Note:





    This setting does **not** affect the package account function, which creates a `gzip` archive of the user’s account on the source server.

04. Select _Low Priority_ to use less CPU and input/output (I/O) on the source server.






    Note:





    This setting reduces the impact on performance on the source server, but increases the duration of the transfer session.

05. Select _Use Incremental Backups speed-up_ to decrease the amount of time that the system uses to package the account on the source server. If a daily incremental backup exists, WHM uses that backup as a starting point. The system then updates the package before transfer.
06. Select _Use custom account packaging modules from /var/cpanel/lib/Whostmgr/Pkgacct_ to use packaging scripts in that directory.






    Important:





    The system does **not** create the `/var/cpanel/lib/Whostmgr/Pkgacct` directory by default. You must create the `/var/cpanel/lib/Whostmgr/Pkgacct` directory **before** you select this setting, if the directory does not already exist.







    Note:





    cPanel & WHM always prioritizes custom restore modules in the `/var/cpanel/perl/Whostmgr/Transfers/Systems` directory over the cPanel-provided modules in the `/usr/local/cpanel/Whostmgr/Transfers/Systems` directory.



- The `/var/cpanel/perl/Whostmgr/Transfers/Systems` directory stores any custom modules that you create.
- The `/usr/local/cpanel/Whostmgr/Transfers/Systems` directory stores the modules that ship with cPanel & WHM.

07. Set the number of CPU threads (processes) for the transfer session in the _Number of Transfer Threads_ text box.






    Note:





    This setting defaults to a number of threads based on the available amount of memory and number of CPUs. You can set a maximum value of five, but the system may still automatically reduce that number based on available resources.

08. Set the number of CPU threads (processes) for the restore session in the _Number of Restore Threads_ text box.






    Note:





    This setting defaults to a number of threads based on the available amount of memory and number of CPUs. You can set a maximum value of five, but the system may still automatically reduce that number based on available resources.

09. Enter the number of seconds that the transfer session remains open before it times out in the _Transfer Session Timeout_ text box.






    Important:





    If you change the default in the _Transfer Session Timeout_ text box, it will only apply to the current session. You **must** enter a new value each time that you run a transfer. You can permanently change the value in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

10. After you make your selections, click _Scan Remote Server_. The _Account List_ interface will appear.

## The Account List interface

The _Account List_ interface will appear after you prepare a source server for transfer. It displays information about the source server. If any of this information appears incorrect, click _Rescan Source Server_.

Below the source server information, the interface displays if any available IP addresses exist.

Warning:

If no available IP addresses exist on the destination server, accounts on the source server that use a dedicated IP address will **not** transfer.

If all the information is correct, click the [_Accounts_](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer) tab to prepare your destination server for the transfer by selecting the accounts, configurations, and packages you want to transfer.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×