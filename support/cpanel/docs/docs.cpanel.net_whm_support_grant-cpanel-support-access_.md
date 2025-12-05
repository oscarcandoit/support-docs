---
url: "https://docs.cpanel.net/whm/support/grant-cpanel-support-access/"
title: "Grant cPanel Support Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#main-content)

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
3. [Support](https://docs.cpanel.net/whm/support/)
4. Grant cPanel Support Access


[support](https://docs.cpanel.net/tags/support/) [whmui](https://docs.cpanel.net/tags/whmui/) [whmsupport](https://docs.cpanel.net/tags/whmsupport/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#overview)

* * *

[Connect to the cPanel Customer Portal](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#connect-to-the-cpanel-customer-portal)

* * *

[cPanel Technical Support IP addresses](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#cpanel-technical-support-ip-addresses)

* * *

[Grant or Revoke cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#grant-or-revoke-cpanel-support-access)

* * *

[Revoke closed tickets](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#revoke-closed-tickets)

* * *

[Grant cPanel Technical Support access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#grant-cpanel-technical-support-access)

* * *

[SSH connection test](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#ssh-connection-test)

* * *

[Revoke server access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#revoke-server-access)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#overview)

* * *

[Connect to the cPanel Customer Portal](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#connect-to-the-cpanel-customer-portal)

* * *

[cPanel Technical Support IP addresses](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#cpanel-technical-support-ip-addresses)

* * *

[Grant or Revoke cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#grant-or-revoke-cpanel-support-access)

* * *

[Revoke closed tickets](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#revoke-closed-tickets)

* * *

[Grant cPanel Technical Support access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#grant-cpanel-technical-support-access)

* * *

[SSH connection test](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#ssh-connection-test)

* * *

[Revoke server access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/#revoke-server-access)

* * *

## Grant cPanel Support Access

![](https://docs.cpanel.net/img/whm-icons/grant_cpanel_support_access.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/)

Last modified: _2025 September 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

When you [create a ticket](https://docs.cpanel.net/whm/support/create-support-ticket) with cPanel Technical Support, it is sometimes necessary to allow them access to your server. This interface uses the server authentication details in your ticket to provide cPanel Technical Support with SSH access to your server.

Important:

The transactional log for the _Grant cPanel Support Access_ interface exists in the `/var/cpanel/logs/supportauth/audit.log` file. This file **only** logs changes from this interface.

## Connect to the cPanel Customer Portal

In the _Grant cPanel Support Access_ interface, you **must** connect your server to the [cPanel Customer Portal](https://tickets.cpanel.net/). This secure connection transfers the required authentication details to cPanel Technical Support. To connect, perform the following steps:

1. Click _Log in to cPanel Customer Portal_. The _cPanel Authorization Request_ window will appear in a new browser window.
2. Enter your cPanel customer account email address and password in the provided text boxes.
   - If you are already logged in to your cPanel account, click _Allow Access_.
   - To sign in as a different user, click _Sign in as a Different User_.
3. Click _Sign In_. The browser window will close.

Afterwards, the _Grant cPanel Support Access_ interface will update. It will display your tickets and their current status.

### cPanel Technical Support IP addresses

After you connect to the [cPanel Customer Portal](https://tickets.cpanel.net/), ensure that the following cPanel Technical Support IP addresses have access to your server:

`208.74.123.98
35.161.131.175
184.94.197.2
184.94.197.3
184.94.197.4
184.94.197.5
184.94.197.6
23.111.175.214
157.90.174.91
`

## Grant or Revoke cPanel Support Access

The _Grant or Revoke cPanel Support’s Access_ section displays the tickets for which you granted access. You can view each ticket’s status, the ticket number, and the following information:

- _Server_ — The server’s ID.
- _User_ — The login username.
- _SSH Info_ — The `sshd` IP address and port.
- _Granted_ — Whether Support has server access.

If you don’t see your ticket, click _Reload Tickets_ to update the list. If you still don’t see your ticket, you may need to log in with a different [cPanel Customer Portal](https://tickets.cpanel.net/) account.

### Revoke closed tickets

If you have any closed tickets that still grant cPanel Technical Support access to your server, the system displays the _Revoke and Remove Closed Tickets_ option. You can use this option to revoke server access for your closed tickets.

### Grant cPanel Technical Support access

To allow cPanel Technical Support access to your server, click _Grant_ in the row that corresponds to the server to which you wish to grant access.

![an open ticket with Grant button](https://docs.cpanel.net/img/grant.png)

When you select this option, the system checks whether it allows the `root` user to log in via SSH. If SSH `root` login is disabled, the system will create a temporary user in the `wheel` group. The system also assigns the SSH key to that user for cPanel Technical Support’s access.

Note:

You can view the SSH keys this interface creates in WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_).

#### Whitelisted services

When you grant cPanel Technical Support access to your server, the server whitelists cPanel Technical Support’s IP addresses for the following services:

- The `iptables` or `firewalld` service. This is the server’s default firewall.
- The [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) service.
- The [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) interface ( _WHM » Home » Security Center » Host Access Control_).
- Any installed [ConfigServer Security & Firewall](https://github.com/waytotheweb/scripts/tree/main/csf) (CSF) software.

For more information about firewall configuration, read our [How to Configure Your Firewall for cPanel Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

### SSH connection test

After granting access, you **must** test the SSH configuration and login details. Click _Test_ in the row that corresponds to that ticket and account. This test verifies that your server’s configuration allows cPanel Technical Support to connect to it.

![an open ticket with Test button](https://docs.cpanel.net/img/test.png)

#### SSH test statuses

After performing the test, the interface will display one of the following status results:

- _Success_ — The test succeeded.
- _Timeout_ — The server’s connection test timed out.
- _Escalate_ — The configured user failed to escalate to `root` privileges on the server.
- _Auth_ — Server authentication failed during connection.
- _Unreachable_ — The server is unreachable.
- _Refused_ — The server refused the connection.
- _Protocol_ — A protocol-level error occurred on the server.
- _Environment_ — The server responded unexpectedly.
- _Unknown_ — An unexpected error occurred.
- _Ticket System Timeout_ — The cPanel Ticket System failed to respond.

### Revoke server access

You can revoke access to your servers at any time.

#### Open tickets

To revoke cPanel Technical Support’s access to your server, click _Revoke_ in the row that corresponds to that ticket and account.

#### Closed tickets

To revoke cPanel Technical Support’s access to your server, click _Revoke and Remove_ in the row that corresponds to that ticket.

![closed ticket with Revoke and Remove button](https://docs.cpanel.net/img/revoke.png)

A confirmation window will appear. Click _OK_. The browser will display a confirmation message. Afterwards, the system removes the ticket.

Important:

You should **always** revoke access after closing a cPanel Support ticket.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Create Support Ticket](https://docs.cpanel.net/whm/support/create-support-ticket/)
- [Support Center](https://docs.cpanel.net/whm/support/support-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×