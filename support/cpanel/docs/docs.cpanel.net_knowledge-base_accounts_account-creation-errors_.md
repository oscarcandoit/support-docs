---
url: "https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/"
title: "Account Creation Errors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#main-content)

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
4. Account Creation Errors


[accounts](https://docs.cpanel.net/tags/accounts/) [accountcreation](https://docs.cpanel.net/tags/accountcreation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#overview)

* * *

[groupadd and useradd errors](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#groupadd-and-useradd-errors)

* * *

[Immutable files](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#immutable-files)

* * *

[Corrupt group shadow file](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#corrupt-group-shadow-file)

* * *

[unable to add user errors](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#unable-to-add-user-errors)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#overview)

* * *

[groupadd and useradd errors](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#groupadd-and-useradd-errors)

* * *

[Immutable files](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#immutable-files)

* * *

[Corrupt group shadow file](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#corrupt-group-shadow-file)

* * *

[unable to add user errors](https://docs.cpanel.net/knowledge-base/accounts/account-creation-errors/#unable-to-add-user-errors)

* * *

## Account Creation Errors

Last modified: _2020 April 15_

* * *

## Overview

This document contains common account creation errors and the steps to troubleshoot them.

Note:

For more information about account creation, read our [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/) documentation.

## groupadd and useradd errors

You may receive this error for several reasons:

### Immutable files

If the `/etc/passwd` or `/etc/group` files contain the immutable flag, the system **cannot** edit them and therefore **cannot** add the account to your server.

To check these files, run the following commands:

```
lsattr /etc/group
lsattr /etc/shadow
```

If these files contain the immutable flag, they will return `i` in these commands’ output.

To remove this flag, run the following commands:

```
chattr -i /etc/passwd
chattr -i /etc/group
```

### Corrupt group shadow file

If the `/etc/gshadow` file becomes corrupt, the system **cannot** correctly add the account to your server. For each group in the `/etc/groups` file, the `/etc/gshadow` file should include a line in the `groupname:::` format, where `groupname` represents the group name. Any `/etc/gshadow` file that does **not** include these lines is corrupt.

To rebuild corrupt files, perform the following steps:

1. To move the existing `/etc/gshadow` file, run the following command:


```
mv /etc/gshadow /etc/gshadow.corrupt
```

2. To rebuild the file, run the `grpconv` command.

3. If they exist, delete the `/etc/grshadow.lock` and `/etc/group.lock` files.


## unable to add user errors

If the system returns an `unable to add the user` error, the user may already exist in your system. To check whether the user already exists, perform either of the following steps:

- Attempt to navigate to the `/home/username` directory, where `username` represents the account username.

- Check the contents of the `/etc/passwd` directory for an entry for that user.


#### Additional Documentation

* * *

- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [The wwwacct Script](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×