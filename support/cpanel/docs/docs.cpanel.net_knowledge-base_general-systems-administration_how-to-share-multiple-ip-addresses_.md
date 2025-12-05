---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/"
title: "How to Share Multiple IP Addresses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Share Multiple IP Addresses


[ip](https://docs.cpanel.net/tags/ip/) [resellers](https://docs.cpanel.net/tags/resellers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#overview)

* * *

[Add and reserve multiple IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#add-and-reserve-multiple-ip-addresses)

* * *

[Rebuild the IP address pool](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#rebuild-the-ip-address-pool)

* * *

[Create the reseller accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#create-the-reseller-accounts)

* * *

[Change a reseller’s IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#change-a-resellers-ip-addresses)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#overview)

* * *

[Add and reserve multiple IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#add-and-reserve-multiple-ip-addresses)

* * *

[Rebuild the IP address pool](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#rebuild-the-ip-address-pool)

* * *

[Create the reseller accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#create-the-reseller-accounts)

* * *

[Change a reseller’s IP addresses](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-share-multiple-ip-addresses/#change-a-resellers-ip-addresses)

* * *

## How to Share Multiple IP Addresses

Last modified: _2025 February 11_

* * *

## Overview

You can configure cPanel & WHM to allow a [reseller](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) to share a single IP address with its accounts, or to allow multiple resellers to share one or more IP addresses.

Sharing IP addresses is useful in many cases, as it allows you to streamline the account creation process, and is often more cost-effective than assigning each user a different server with its own IP address.

This document demonstrates how to share multiple IP addresses over reseller accounts on cPanel & WHM.

Note:

This document shows the **full** process. If you have already performed a step in this process - for example, adding multiple IP addresses - you can skip it and move on to the next step.


## Add and reserve multiple IP addresses

To share your IP addresses, you must first add them to your WHM server and reserve them by performing the following steps:

1. Connect to WHM as the `root` user.
2. Navigate to WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/) interface ( _WHM » Home » IP Functions » Add a New IP Address_), and add the IP addresses you want to share to the server.
3. Navigate to WHM’s [_Show/Edit Reserved IPs_](https://docs.cpanel.net/whm/ip-functions/show-edit-reserved-ips/) interface ( _WHM » Home » IP Functions » Show/Edit Reserved IPs_). Reserve the addresses you want to share, entering the name of the resellers who will own each address in the appropriate _Notes_ text box.

## Rebuild the IP address pool

Then, you must rebuild the IP address pool. You can do so as follows:

Navigate to WHM’s [_Rebuild the IP Address Pool_](https://docs.cpanel.net/whm/ip-functions/rebuild-the-ip-address-pool/) interface ( _WHM » Home » IP Functions » Rebuild the IP Pool_) and rebuild the IP address pool.

## Create the reseller accounts

After that, create your reseller accounts and provision their packages with the following steps:

1. Navigate to WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account/) interface ( _WHM > Home » Account Functions » Create a New Account_) and create an account or accounts with reseller privileges.
2. Navigate to WHM’s [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package/) interface ( _WHM » Home » Packages » Add a Package_) and create the necessary packages for the resellers to use.
3. Navigate to WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_) and set the resellers’ privileges.

   - If the resellers already own accounts and you want to allow them to change these accounts to the new shared IP addresses, you will need to select _Everything - All Features_ for the reseller.





     Warning:




     This action grants full `root`-level access to the reseller accounts.


   - If you do not wish to allow the resellers to change their own accounts, use WHM’s [_Change Multiple Sites’ IP Addresses_](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/) interface ( _WHM » Home » Multi Account Functions » Change Multiple Sites’ IP Addresses_) to change their IP addresses for them.





     Warning:




     Coordinate this process with your resellers to schedule any necessary changes to DNS entries and downtime for their their clients’ domains.

## Change a reseller’s IP addresses

Then, you can change the reseller’s IP address to one of your shared, reserved addresses with the following steps:

1. Navigate to WHM’s [_Manage Reseller’s Shared IP_](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/) interface ( _WHM » Home » Resellers » Manage Reseller’s Shared IP_).
2. Select the reseller that you want to use a shared IP address and click _Submit_.
3. Select the shared IP address for the reseller to use and click _Save_.

#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Manage Reseller's IP Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)
- [Manage Reseller's Shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×