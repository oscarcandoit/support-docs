---
url: "https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/"
title: "Show or Delete Current IP Addresses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#main-content)

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
3. [IP Functions](https://docs.cpanel.net/whm/ip-functions/)
4. Show or Delete Current IP Addresses


[nat](https://docs.cpanel.net/tags/nat/) [ip](https://docs.cpanel.net/tags/ip/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#overview)

* * *

[Display table](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#display-table)

* * *

[1-to-1 NAT display table](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#1-to-1-nat-display-table)

* * *

[Validate a public IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#validate-a-public-ip-address)

* * *

[Edit a public IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#edit-a-public-ip-address)

* * *

[Delete an IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#delete-an-ip-address)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#overview)

* * *

[Display table](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#display-table)

* * *

[1-to-1 NAT display table](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#1-to-1-nat-display-table)

* * *

[Validate a public IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#validate-a-public-ip-address)

* * *

[Edit a public IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#edit-a-public-ip-address)

* * *

[Delete an IP address](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/#delete-an-ip-address)

* * *

## Show or Delete Current IP Addresses

![](https://docs.cpanel.net/img/whm-icons/show_or_delete_current_ip_addresses.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature displays the IP addresses that are bound to your server. It also allows you to delete these IP addresses from the server.

## Display table

If your server is not in NAT mode, you will see a table with the following columns:

- _Interface_ — Displays the name of the Ethernet port to which the IP address is assigned.
- _IP_ — Displays the IP address (for example, `10.5.3.333`).
- _Notes_ — Displays notes about the type of IP address and its users (for example, `Main/shared IP for: user, user2, and user3`).






Note:





If you assign an IP address to more than 10 users, the interface will only display the first 10 usernames and the number of additional users.

- _Actions_ — You can delete unused IP addresses from this column.

## 1-to-1 NAT display table

If your server is in NAT mode, you will see a table with the following columns:

- _Interface_ — Displays the name of the Ethernet port to which the IP address is assigned.

- _Local IP_ — Displays the local IP address (For example, `192.168.4.10`).

- _Notes_ — Displays notes about the type of IP address and its users (for example, `Main/shared IP for: user, user2, and user3`).







Note:





If you assign an IP address to more than 10 users, the interface will only display the first 10 usernames and the number of additional users.







Warning:





A value in the _Notes_ column indicates an assigned IP address that you cannot delete.

- _Public IP_ — Displays the public IP address to which the local IP address is mapped (for example, `10.5.3.333`).







Note:





If the server cannot map the address to a public IP address, then the column will display `Not Routable`.

- _Warnings_ — Displays warning and confirmation icons (for example, a warning icon will appear in this column if the public IP address is not routable).

- _Actions_ — The following actions are available in this column:
  - Click _Validate_ to validate a public IP address.

  - Click _Edit_ to edit the public IP address.

  - Click _Delete_ to delete an IP address from the table.

### Validate a public IP address

If a local IP address does not properly map to a public IP address, or the local IP address maps to the wrong public IP address, validate the address to correct this problem.

To validate and map a local IP address to the correct public IP address, click _Validate_ in the row that corresponds to the IP address that you wish to validate.

The validation process sends an outgoing connection from the local IP address to the `http://myip.cpanel.net/v1.0/` server. This server responds with the public IP address from which it received the request. The system then maps the local IP address to this public IP address.

Note:

If the system cannot route an address, a warning message will appear and the _Public IP_ address column will display the message `Not Routable`.


### Edit a public IP address

To edit a public IP address in the table, perform the following steps:

1. Click _Edit_ in the row that corresponds to the IP address that you wish to edit.

2. Enter the public IP address that you wish to map to the local IP address.

3. Click _Save_ to save the new IP address, or click _Cancel_ to cancel the edit.


Note:

- You cannot use a public IP address more than once.

- You can only edit one IP address at a time.


## Delete an IP address

Warning:

You cannot delete an IP address that is currently in use.

To remove an IP address from the table, perform the following steps:

1. Click _Delete_ in the row that corresponds to the IP address that you wish to delete.

2. Click _Confirm Delete_.


#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [IP Migration Wizard](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/)
- [IPv6 Address Ranges](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×