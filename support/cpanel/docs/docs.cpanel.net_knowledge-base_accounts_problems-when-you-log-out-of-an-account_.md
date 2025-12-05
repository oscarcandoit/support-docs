---
url: "https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/"
title: "Problems When You Log Out Of An Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#main-content)

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
4. Problems When You Log Out Of An Account


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#overview)

* * *

[How to enable HTTP basic authentication](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#how-to-enable-http-basic-authentication)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#overview)

* * *

[How to enable HTTP basic authentication](https://docs.cpanel.net/knowledge-base/accounts/problems-when-you-log-out-of-an-account/#how-to-enable-http-basic-authentication)

* * *

## Problems When You Log Out Of An Account

Last modified: _2022 July 12_

* * *

## Overview

If you experience difficulty when you attempt to switch between cPanel accounts, or when you log in to and out of your webmail account, your server may use HTTP basic authentication. If a server uses HTTP basic authentication, most browsers will not log out of a session until the user closes their browser, regardless of whether they click Log Out. This can make it difficult to switch between webmail and cPanel accounts.

Note:

This is a fundamental HTTP basic authentication issue. It is not unique to cPanel. For additional information, read Wikipedia’s [Basic Access Authentication article](https://en.wikipedia.org/wiki/Basic_access_authentication)

## How to enable HTTP basic authentication

Warning:

We strongly recommend that you do not enable this setting.

HTTP basic authentication is set to _Off_ by default. You cannot enable HTTP basic authentication through the WHM interface.

To change your server’s HTTP basic authentication setting manually in the [`cpanel.config`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/) file, perform the following steps:

1. With your preferred text editor, open the `/var/cpanel/cpanel.config` file via an SSH session as the `root` user.
2. Change the `skiphttpauth=1` setting to `skiphttpauth=0`
3. Save the file, and [restart cPanel](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services).

If you own a website on a cPanel server and do not have access to WHM, submit a request to your hosting provider.

#### Additional Documentation

* * *

- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×