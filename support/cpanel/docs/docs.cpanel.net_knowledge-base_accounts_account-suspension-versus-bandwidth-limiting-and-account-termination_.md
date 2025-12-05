---
url: "https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/"
title: "Account Suspension Versus Bandwidth Limiting and Account Termination | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Account Suspension Versus Bandwidth Limiting and Account Termination


[accounts](https://docs.cpanel.net/tags/accounts/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#overview)

* * *

[Account suspension](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#account-suspension)

* * *

[Suspend or unsuspend an account](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#suspend-or-unsuspend-an-account)

* * *

[Bandwidth limiting](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#bandwidth-limiting)

* * *

[Remove bandwidth limitations](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#remove-bandwidth-limitations)

* * *

[Account termination](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#account-termination)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#overview)

* * *

[Account suspension](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#account-suspension)

* * *

[Suspend or unsuspend an account](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#suspend-or-unsuspend-an-account)

* * *

[Bandwidth limiting](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#bandwidth-limiting)

* * *

[Remove bandwidth limitations](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#remove-bandwidth-limitations)

* * *

[Account termination](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/#account-termination)

* * *

## Account Suspension Versus Bandwidth Limiting and Account Termination

Last modified: _2022 November 30_

* * *

## Overview

This document explains the differences between account suspension, bandwidth limiting, and account termination. This document also describes why you might terminate an account or suspend an account.

## Account suspension

Important:

The system does **not** automatically initiate account suspension.

When you suspend an account, the system imposes several limitations that remain in place until you unsuspend the account. You may wish to suspend an account for the following reasons:

- A user fails to comply with your terms of service.
- A user did not pay their bill for service.

### Suspend or unsuspend an account

To suspend or unsuspend an account, use one of the following methods:

- WHM’s [_Manage Account Suspension_](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) interface ( _WHM » Home » Account Functions » Manage Account Suspension_).
- From the command line, run either of the following scripts:
  - `/usr/local/cpanel/scripts/suspendacct` — Suspends an account
  - `/usr/local/cpanel/scripts/unsuspendacct` — Unsuspends an account.

If you suspend an account, the following statements are true:

- The account’s `cpuser` file contains the `SUSPENDED=1` flag.
- Apache’s `/usr/local/apache/conf/includes/account_suspensions.conf` file contains a Virtual Host include for the user. This file contains a `RedirectMatch` directive that redirects website traffic for the user’s account to an account suspension page. This directive resembles the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br><Directory "/home/cptest"><br>AllowOverride none<br>RedirectMatch ^/(?!cgi-sys/suspendedpage.cgi).* /cgi-sys/suspendedpage.cgi<br></Directory><br>``` |

- The system prepends the account’s password hash in the `/etc/shadow` and `/etc/proftpd/username` files with two exclamation points (`!!`).
- The `/var/cpanel/suspended/user` file contains a reason for suspension or the account’s previous shell location.
- The system places `*LOCKED*` entries around the password entries in the mail user’s `/home/user/etc/example.com/shadow` file. For example:



```perl
hue:*LOCKED*$6$SK2DwDferi8HQUIn$pDNuLqgZPE.NzY1rEuhsKpFwHrmzkrkfLe5rCMxt7rU6te8cFqy5MDVyL2OtNHpylyzRN7txUJCgb7NIqI1Eq/:17073::::::*LOCKED*
```

- The system allows email delivery and forwarding in addition to DNS queries.
- The system will **not** suspend any of the account’s Amazon RDS remote databases.

For more information about the effects of account suspension, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/) documentation.

## Bandwidth limiting

The system can automatically initiate temporary limits on accounts that exceed the monthly bandwidth limit. The system removes the limits the first time that it processes bandwidth statistics each month. At that time, the account no longer exceeds the limit.

Note:

The system **only** imposes bandwidth limiting on an account’s Apache services. Users can still access FTP, Mail, and DAV services, even if their account exceeds the monthly bandwidth limit.

If the system imposes account limitations due to bandwidth limiting, the following statements are true:

- The system **only** imposes account limitations on services that users access via the `http` or `https` method.
- The _Disk Used_ value exceeds the _Disk Limit_ setting in WHM’s [_View Bandwidth Usage_](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage) interface ( _WHM » Home » Account Information » View Bandwidth Usage_).
- The `/var/cpanel/bwlimited/` directory contains `./user` and `./domain` files that correspond to the account.

### Remove bandwidth limitations

To remove these limitations, use one of the following methods to raise the monthly bandwidth limit:

- Increase the bandwidth limit for a single user in WHM’s [_Limit Bandwidth Usage_](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage) interface ( _WHM » Home » Account Functions » Limit Bandwidth Usage_).
- Increase the _Monthly Bandwidth Limit_ setting for all of a package’s users in WHM’s [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package) interface ( _WHM » Home » Packages » Edit a Package_).
- Increase the _Monthly Bandwidth Limit_ setting for a single user in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_).






Note:





Changes to this setting may trigger a package conflict. For more information, read our [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) documentation.

- To remove the limitations for all of the accounts on your server with exceeded monthly bandwidth limits, use WHM’s [_Unsuspend Bandwidth Exceeders_](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders) interface ( _WHM » Home » Account Functions » Unsuspend Bandwidth Exceeders_).

## Account termination

When you terminate an account, the system **permanently** deletes all of its data from the server. You may wish to terminate an account for the following reasons:

- You moved an account from one server to another server and all of the first server’s information properly transferred..
- A user has not paid their bill for service for a significant period of time.### Terminate an account

To terminate an account, use one of the following methods:

- WHM’s [_Terminate Accounts_](https://docs.cpanel.net/whm/account-functions/terminate-accounts) interface ( _WHM » Home » Account Functions » Terminate Accounts_).
- Run the `/usr/local/cpanel/scripts/removeacct` script via the command line as the `root` user.

If you terminate an account, the following statements are true:

- You **cannot** immediately recreate the account, because the system **must** remove the account’s MySQL® users.
- The system deletes the account’s DNS zones by default.

Note:

You can choose to keep the account’s DNS zone. This is useful, for example, when you need to move the account to a different server that belongs in the same DNS cluster.

#### Additional Documentation

* * *

- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×