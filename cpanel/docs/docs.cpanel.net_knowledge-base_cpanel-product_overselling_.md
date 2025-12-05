---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/"
title: "Overselling | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. Overselling


[resellers](https://docs.cpanel.net/tags/resellers/) [quotas](https://docs.cpanel.net/tags/quotas/) [accounts](https://docs.cpanel.net/tags/accounts/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overview)

* * *

[Overselling enabled](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overselling-enabled)

* * *

[Overselling disabled](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overselling-disabled)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overview)

* * *

[Overselling enabled](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overselling-enabled)

* * *

[Overselling disabled](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/#overselling-disabled)

* * *

## Overselling

Last modified: _2019 December 10_

* * *

## Overview

This document explains the concept of overselling. Overselling means that the system limits resellers via the resources that their cPanel accounts actually use instead of the resources that you allocate to them.

WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_) allows you to set resource limits for a reseller. For example, you can specify a maximum bandwidth and allocate a maximum disk space, in megabytes (MB), that a reseller can allocate to a cPanel account. This interface also allows you to enable or disable overselling capability for a reseller.

Note:

Resource limits **only** affect a reseller’s ability to sell, upgrade and downgrade accounts. Resource limits do not affect reseller suspension or account suspension.


## Overselling enabled

When you set resource limits for a reseller and enable overselling, a reseller can create accounts with resource limits that exceed the maximum amount that you allocate. After the total combined resources that all of the accounts use exceeds the reseller’s resource limit, the reseller **cannot** create new accounts. However, their accounts can continue to use resources, up to their own allocated resource level. The resource limit does **not** affect an account’s use of resources, only the reseller’s ability to create more accounts.

For example, you allocate 500 MB to the reseller Adam and enable overselling. Adam sets disk space quotas of 200 MB for four users. Combined, the users’ accounts can use up to 800 MB of disk space. However, after the accounts collectively use 500MB of disk space, they can still function, but Adam **cannot** create any new accounts.

Warning:

We **strongly** recommend that you use additional account limitations if you enable overselling for a reseller. For example, you can set limits for either of the following settings:

- The types of per-approved packages for an account.

- The number of accounts that a reseller can create.


## Overselling disabled

If you disable overselling for a reseller, they can create accounts until they allocate the maximum amount of resources that you assign them. After the reseller allocates the maximum amount of resources that you assign them, they can no longer create accounts. The amount of disk space or bandwidth that the accounts use does **not** affect the reseller’s ability to create accounts if you disable overselling.

For example, you allocate 500MB of disk space to the reseller Bob and do **not** enable overselling. Bob creates five accounts and sets the maximum amount of disk space usage for each account to 100 MB. Combined, the accounts can use up to 500MB of disk space. Bob can no longer create new accounts.

#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [Limit Bandwidth Usage](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/)
- [Unsuspend Bandwidth Exceeders](https://docs.cpanel.net/whm/account-functions/unsuspend-bandwidth-exceeders/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×