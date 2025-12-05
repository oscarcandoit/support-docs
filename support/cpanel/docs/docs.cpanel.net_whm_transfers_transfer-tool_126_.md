---
url: "https://docs.cpanel.net/whm/transfers/transfer-tool/126/"
title: "Transfer Tool | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#main-content)

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
4. Transfer Tool


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#overview) [Before getting started](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#before-getting-started) [Warnings](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#warnings) [DNS transfers](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#dns-transfers) [Data transfers](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#data-transfers) [Important notes about account transfers from Plesk](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#important-notes-about-account-transfers-from-plesk) [Perform a transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#perform-a-transfer) [Live Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#live-transfer) - [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#installation-toggle)

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#overview) [Before getting started](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#before-getting-started) [Warnings](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#warnings) [DNS transfers](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#dns-transfers) [Data transfers](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#data-transfers) [Important notes about account transfers from Plesk](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#important-notes-about-account-transfers-from-plesk) [Perform a transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#perform-a-transfer) [Live Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/126/#live-transfer) - [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

## Transfer Tool

![](https://docs.cpanel.net/img/whm-icons/transfer_tool.svg)

_Valid for versions 126 through 128_

#### Version:

#### [98](https://docs.cpanel.net/whm/transfers/transfer-tool/98/)

#### [118](https://docs.cpanel.net/whm/transfers/transfer-tool/118/)

#### [124](https://docs.cpanel.net/whm/transfers/transfer-tool/124/)

#### [126](https://docs.cpanel.net/whm/transfers/transfer-tool/126/)

#### [130](https://docs.cpanel.net/whm/transfers/transfer-tool/)

Last modified: _2025 September 3_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

If you have `root` access or privileges with the `sudo` or `su` commands, you can use this interface to copy one or more cPanel accounts, packages, and configurations from a source server to a destination server.

## Before getting started

If you **only** possess user credentials and do **not** have `root` access or privileges, use WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_).

If you **only** want to transfer a cPanel license’s IP address from one server to another, read our [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address) documentation.

If you have `root` access or privileges and want to copy one or more cPanel accounts, packages, or configurations from a source server to a destination server, review the following tips before you use the Transfer Tool feature:

### Warnings

- Do **not** shut down or restart any processes on either server during the transfer and restoration process.
- Do **not** start a transfer during a system update (`upcp`) or start a system update during a transfer. The system update will fail.
- If one of the accounts that you wish to transfer uses [Microsoft® FrontPage®](https://en.wikipedia.org/wiki/Microsoft_FrontPage) on the source server, we **strongly** recommend that you disable FrontPage for that account before you attempt to transfer the account. cPanel & WHM does **not** support FrontPage, and the restoration process does **not** restore FrontPage-specific files and directories.
- To use this feature, we **strongly** recommend that your source and destination servers are able to communicate over port `2087`. For more information about the ports that cPanel & WHM uses, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.
- If you experience problems with session timeouts during a transfer, increase the number of seconds in the _Number of seconds an SSH connection related to an account transfer may be inactive before timing out_ setting in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

### DNS transfers

- The Transfer Tool feature **replaces** the source server’s files with the destination server’s [DNS Zone Files](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#zone) when the following conditions are true:

  - The destination server resides in the same [Domain Name System (DNS)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dns) cluster as the source server.
  - The source server and the DNS nodes use the _Synchronized Changes_ DNS [role](https://docs.cpanel.net/whm/clusters/dns-cluster/#servers-in-your-dns-cluster).
- The Transfer Tool feature does **not** transfer the DNS zone templates. If custom DNS zone templates exist on the source server, the system ignores these zone templates when it recreates the account on the destination server. For more information, read our [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process) documentation.
- Account transfers process AAAA records differently than A records.
- The destination server will **not** alter AAAA records that point to servers other than the source server or servers related to the source.
- A destination server without IPv6 enabled will strip locally-managed AAAA records that pointed to the source server.
- A destination server with IPv6 enabled will point any source-related AAAA record to the account’s shared IPv6 address in the domain’s locally-managed zone file.

### Data transfers

- The server disregards the _Restrict document roots to public\_html_ [_Tweak Setting_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) setting during server transfers. The Transfer Tool retains any pre-transfer `public_html/` directory structures, even those that place addon and subdomains document roots outside of the primary website’s document root. However, after the transfer, addon and subdomains that the restored user creates will adhere to this setting.
- Do **not** use the `skip-name-resolve` setting in your server’s MySQL® configuration. This setting can cause problems on any server. It will create **more** problems on remote MySQL servers during account transfers.
- If the destination server contains a database with the **same name** as a database on your source server, the Transfer Tool will **rename** the source server’s database during the transfer. This prevents corruption problems. To avoid this issue, rename or remove the database on the destination server before transfer.
- This feature does **not** transfer [Two-Factor Authentication (2FA)](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) configuration information for an account. The user will need to reconfigure 2FA on the new server.
- When you transfer data between CloudLinux™ servers, the Transfer Tool will **preserve** settings from the [CloudLinux PHP Selector](https://docs.cloudlinux.com/legacy/cloudlinux_os_components/#php-selector).
- Do **not** transfer accounts with calendars, contacts, or task list data from a server that runs cPanel & WHM version 120 or later to a server that runs cPanel & WHM version 118 or earlier. If you do this, you will need to manually copy and import the accounts’ calendars, contacts, and task list data once the transfer has completed.

## Important notes about account transfers from Plesk

The system will not transfer any email addresses from Plesk to cPanel & WHM that contain a plus sign (`+`) in the email username. The system will also not transfer any FTP accounts that contain an underscore (`_`) in the username.

To transfer accounts from Plesk, first change any forwarded domains to physical hosting accounts. To do this, run the following command as the `root` user:

```bash
/usr/local/psa/bin/domain --update example.com -hst_type phys -login "example" -hosting true -ip 127.0.0.1 -passwd "12345luggage"
```

- `example.com` represents the forwarding domain.
- `example` represents the new account’s username.
- `127.0.0.1` represents the new account’s IP address.
- `12345luggage` represents the new account’s password.

If you need to convert several forwarding domains into hosting accounts, [open a support ticket](https://tickets.cpanel.net/) and our migration team will contact you.

## Perform a transfer

To transfer one or more cPanel accounts, packages, and configurations from a source server to your destination cPanel & WHM server using the Transfer Tool, perform the following steps:

1. [Prepare the source server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/).
2. [Select what to transfer to your destination server](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/).
3. [Manually configure what isn’t automatically transferred](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/).

## Live Transfer

Warning:

- You can **only** use the Live Transfer feature to transfer accounts between cPanel & WHM servers.
- You **must** update your DNS before removing your old account from your previous server with _Live Transfer_.

Note:

- You **cannot** enable this setting if the destination server’s hostname does not resolve. Run the `/usr/local/cpanel/scripts/ensure_hostname_resolves` script, or use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname) interface ( _WHM » Home » Networking Setup » Change Hostname_) to fix your hostname resolution.
- This process **only** includes active PHP sessions from the user’s home directory. Users may need to log in again for features such as WordPress®, phpMyAdmin, and Webmail.
- The Live Transfer feature uses the _Accept and queue messages_ setting behavior for email delivery. For more information about this setting, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#email-delivery-behavior) documentation.

Use the Live Transfer feature to reduce downtime during account transfers. The interface enables this feature by default. The Live Transfer feature moves cPanel accounts to a new server and performs the following actions on the source server:

1. Updates the account’s A record to point to the destination server.
2. Changes the domain’s nameserver entries to point to the destination server.
3. Updates the email routing configuration’s MX records so that mail arrives at the destination server.






Note:





If the domain uses remote mail servers, the system will **not** update the MX records when it transfers the account.

4. Sends requests for certain services to the destination server. For example, the system can redirect web and mail traffic to the destination server.






Note:





- Mail services redirect to the child node, if applicable.
- To disable [service proxying](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#service-proxying), unsuspend the account on the source server.

5. Copy the mailbox data from the source server again.
6. Suspends the transferred accounts on the source server. For more information, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/) documentation.
The system performs changes on the source server in the `/usr/local/cpanel/scripts/xferpoint` directory.






Note:





If you do **not** want to use this feature, you can use [the swapip script](https://docs.cpanel.net/whm/scripts/the-swapip-script) to update the transferred accounts’ nameserver records.


[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×