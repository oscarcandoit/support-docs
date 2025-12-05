---
url: "https://docs.cpanel.net/cpanel/databases/remote-mysql/"
title: "Remote MySQL® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/databases/remote-mysql/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Databases](https://docs.cpanel.net/cpanel/databases/)
4. Remote MySQL®


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [databases](https://docs.cpanel.net/tags/databases/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/databases/remote-mysql/#overview)

* * *

[Add Access Host](https://docs.cpanel.net/cpanel/databases/remote-mysql/#add-access-host)

* * *

[Manage Access Hosts](https://docs.cpanel.net/cpanel/databases/remote-mysql/#manage-access-hosts)

* * *

[Edit a description](https://docs.cpanel.net/cpanel/databases/remote-mysql/#edit-a-description)

* * *

[Delete an access host](https://docs.cpanel.net/cpanel/databases/remote-mysql/#delete-an-access-host)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/databases/remote-mysql/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/databases/remote-mysql/#overview)

* * *

[Add Access Host](https://docs.cpanel.net/cpanel/databases/remote-mysql/#add-access-host)

* * *

[Manage Access Hosts](https://docs.cpanel.net/cpanel/databases/remote-mysql/#manage-access-hosts)

* * *

[Edit a description](https://docs.cpanel.net/cpanel/databases/remote-mysql/#edit-a-description)

* * *

[Delete an access host](https://docs.cpanel.net/cpanel/databases/remote-mysql/#delete-an-access-host)

* * *

## Remote MySQL®

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/databases/remote-mysql/)

Last modified: _2024 February 8_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This feature allows remote hosts (servers) to access MySQL® databases on your account. This is useful, for example, if you wish to allow shopping cart or guestbook applications on other servers to access your databases.

Note:

In cPanel & WHM version 120 and later, we renamed this interface to [_Remote Database Access_](https://docs.cpanel.net/cpanel/databases/remote-database-access/).

Warning:

Your hosting provider may add remote hosts to this list at the server level. If you see a hostname or IP address that you do not recognize, or remove a hostname or IP address that reappears later, contact your hosting provider.

## Add Access Host

To specify remote hosts that can access MySQL databases on your account, perform the following steps:

1. Enter the host’s name in the _Host_ text box.






Notes:





- You may enter a hostname, IPv4 address, or IPv6 address.
- You may use the percentage sign character (`%`) as a wildcard. For example, to allow access from all IP addresses that begin with `192.68.0`, enter `192.68.0%`.
- You **must** follow MySQL rules to use a range of IP addresses. For more information, you can read MySQL’s documentation for [_Specifying Account Names_](https://dev.mysql.com/doc/refman/5.7/en/account-names.html).

2. Enter a description for the remote host in the _Comment_ text box.






Notes:





- You **must** limit this description to 255 ASCII characters or fewer.
- This step is optional.

3. Click _Add Host_.

## Manage Access Hosts

This section of the database lists the remote hosts on your account and allows you to delete each host.

### Edit a description

To edit the description for a remote host, enter the new text and click _Update_. A message of success will appear.

## Delete an access host

To deny database access to a remote host, perform the following steps:

1. Click _Delete_ next to the host’s name or IP address. A confirmation message will appear.
2. Click _Remove Access Host_. A message of success will appear.

#### Additional Documentation

* * *

- [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/)
- [Manage My Databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases/)
- [MySQL® Database Wizard](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [MySQL® Databases](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
- [MySQL® Manager](https://docs.cpanel.net/cpanel/databases/mysql-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×