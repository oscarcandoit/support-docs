---
url: "https://docs.cpanel.net/whm/account-functions/quota-modification/"
title: "Quota Modification | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/quota-modification/#main-content)

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
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Quota Modification


[quotas](https://docs.cpanel.net/tags/quotas/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/quota-modification/#overview)

* * *

[What is a quota?](https://docs.cpanel.net/whm/account-functions/quota-modification/#what-is-a-quota)

* * *

[Quotas and operating systems](https://docs.cpanel.net/whm/account-functions/quota-modification/#quotas-and-operating-systems)

* * *

[Quotas and system processes](https://docs.cpanel.net/whm/account-functions/quota-modification/#quotas-and-system-processes)

* * *

[Change quotas](https://docs.cpanel.net/whm/account-functions/quota-modification/#change-quotas)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/quota-modification/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/quota-modification/#overview)

* * *

[What is a quota?](https://docs.cpanel.net/whm/account-functions/quota-modification/#what-is-a-quota)

* * *

[Quotas and operating systems](https://docs.cpanel.net/whm/account-functions/quota-modification/#quotas-and-operating-systems)

* * *

[Quotas and system processes](https://docs.cpanel.net/whm/account-functions/quota-modification/#quotas-and-system-processes)

* * *

[Change quotas](https://docs.cpanel.net/whm/account-functions/quota-modification/#change-quotas)

* * *

## Quota Modification

![](https://docs.cpanel.net/img/whm-icons/quota_modification.svg)

_Valid for versions 112 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/account-functions/quota-modification/100/)

#### [112](https://docs.cpanel.net/whm/account-functions/quota-modification/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to change an account’s disk space quota.

## What is a quota?

Quotas specify the maximum amount of disk space that an account can use on your server, though they do **not** limit changes to MySQL® or PostgreSQL® databases.

Note:

Quotas that include database space only affect cPanel-related functions.

We enable quotas by default on new cPanel & WHM installations. We recommend that you set appropriate quotas for each account on your server. For example, users who wish to host video content need more disk space than a user who only hosts a blog.

The backup process for an account near or over its quota may **fail** because the system cannot write necessary files, such as a database lock file.

### Quotas and operating systems

Quotas interact with operating systems in the following ways:

- If you [disable](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/) and then [reenable](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#enable-quotas-on-your-devices) quotas, servers that use the XFS® filesystem and run AlmaLinux OS 8, Rocky Linux™ 8, CloudLinux™ 8, or Ubuntu® require additional actions for quotas to function properly:
  - **WHM Interface** — Use WHM’s [_Initial Quota Setup_](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/) interface ( _WHM » Home » Server Configuration » Initial Quota Setup_) to configure quotas.
  - **Command Line** — Run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.
  - **Manually via the Command Line** — For instructions on how to perform the `/usr/local/cpanel/scripts/fixquotas` script’s actions manually, read the Red Hat® [XFS](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/ch-xfs.html) and [XFS Quota Management](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/xfsquota.html) documentation.
- CloudLinux updates may break quotas. For this reason, after each CloudLinux update, you **must** run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.


### Quotas and system processes

Processes that the system runs, such as PHP scripts that create files, can create user-owned files until the number of files reaches the quota. This situation occurs because the kernel-enforced quota does not access cPanel settings.

## Change quotas

To change a quota, navigate to the _Quota Modification_ ( _WHM » Account Functions » Quota Modification_) interface. The table displays a list of your cPanel accounts. The _Search_ text box allows you to search by user or domain. You can also choose to display the list by _All_, _Users_, or _Domains_.

If your WHM account **only** manages one cPanel account, the account’s bandwidth information will appear. If your WHM account does **not** manage cPanel accounts, you cannot modify quotas in this interface.

To change an account’s quota, you must access its bandwidth information with one of the following methods:

- To change a single quota, select the desired account and click _Modify_ at the bottom of the interface. The bandwidth information for the selected account will appear.
- To view all of your users’ quotas, click _Show all Accounts_ at the bottom of the interface. The bandwidth information for the accounts will appear. If you chose to view all of your accounts, click _Show Only this Reseller’s Accounts_ under a reseller’s username to view **only** that reseller’s accounts.

The bandwidth information displays an account’s domain, username, their current disk space usage, and their quota. It resembles the following image:

![table that displays account's domain, username, their current disk space usage, and their quota](https://docs.cpanel.net/img/quota-bandwidth-information.png)

To change a quota, enter the new quota for each account in the appropriate text box, in megabytes (MB), or select _Unlimited_ to grant the user unlimited disk space. Click _Save_.

Note:

- If all of your accounts’ quotas incorrectly display as `0`, rebuild your system’s quota files. Click the _click here_ link, or, if the interface does not display a link, use WHM’s [_Initial Quota Setup_](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup/) interface ( _WHM » Home » Server Configuration » Initial Quota Setup_). If you have enabled [_Quota System Administration_](https://docs.cpanel.net/whm/server-contacts/contact-manager/) notifications, the system sends notifications when it is ready to reboot **and** when the quota scan finishes and quotas are functional.
- If a discrepancy exists between an account’s quota and the results of the `du -sh /home/username` command, the user’s UID may own other files on the system. To find the locations of the user’s files, run the `find / -user username -ls` command, where `username` is the username.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [Limit Bandwidth Usage](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×