---
url: "https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/"
title: "Modify cPanel & WHM News | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#main-content)

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
3. [cPanel](https://docs.cpanel.net/whm/cpanel/)
4. Modify cPanel & WHM News


[resellers](https://docs.cpanel.net/tags/resellers/) [whmui](https://docs.cpanel.net/tags/whmui/) [news](https://docs.cpanel.net/tags/news/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#overview)

* * *

[Modify cPanel & WHM News](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#modify-cpanel--whm-news)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#overview)

* * *

[Modify cPanel & WHM News](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/#modify-cpanel--whm-news)

* * *

## Modify cPanel & WHM News

![](https://docs.cpanel.net/img/whm-icons/modify_cpanel_whm_news.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to display custom messages in your users’ and resellers’ cPanel & WHM interfaces.

Note:

If you experience problems with this feature, run the following command to remove the cache file:

```perl
rm -f /var/cpanel/objcache/whmnews
```

## Modify cPanel & WHM News

To set the custom messages that you wish for your users and resellers to see, perform the following steps:

1. In the first text box, enter a message that you wish for all cPanel users on the system to see.

2. In the second text box, enter a message that you wish for subordinate resellers’ WHM accounts to see. They can click the _News_ link at the top of the WHM interface to view this information.

3. In the third text box, enter a message that you wish for user accounts that you do not own to see in their cPanel interfaces. Resellers who own their own accounts and resellers’ customers will see this message.

4. In the fourth text box, enter a message that you wish for users and accounts that you own to see in their cPanel interfaces. Resellers who own their accounts and resellers’ subordinate users will **not** see this message.







Note:





If you are a reseller and want to edit the _News_ section for your cPanel users, navigate to WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_) and select the _News Modification_ checkbox.

5. Click _Save News_ to update the appropriate interfaces.


Note:

The interface allows you to use HTML tags, such as `<br>` tags for line breaks, to format messages.


#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×