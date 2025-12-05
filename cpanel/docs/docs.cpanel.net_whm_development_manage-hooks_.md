---
url: "https://docs.cpanel.net/whm/development/manage-hooks/"
title: "Manage Hooks | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/development/manage-hooks/#main-content)

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
3. [Development](https://docs.cpanel.net/whm/development/)
4. Manage Hooks


[whmui](https://docs.cpanel.net/tags/whmui/) [hooks](https://docs.cpanel.net/tags/hooks/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/development/manage-hooks/#overview)

* * *

[Available hooks](https://docs.cpanel.net/whm/development/manage-hooks/#available-hooks)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/development/manage-hooks/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/development/manage-hooks/#overview)

* * *

[Available hooks](https://docs.cpanel.net/whm/development/manage-hooks/#available-hooks)

* * *

## Manage Hooks

![](https://docs.cpanel.net/img/whm-icons/manage_hooks.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/development/manage-hooks/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to perform a variety of actions on the hooks that exist on your server. By default, the interface sorts hooks by the hook type (for example, `PkgAcct`) and then by the order in which they run.

Note:

- To search for a specific hook, enter the name of that hook in the _Search_ text box.

- To hide all of the hooks’ attributes and actions, click _Collapse All_.

- To show all of the hooks’ attributes and actions, click _Expand All_.

- You **must** create and edit hooks on the command line. For more information, read our [Guide to Standardized Hooks](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/) documentation.


## Available hooks

The table of hooks lists the following information about each hook:

- _Event/Hook_ —
  - The first row in this column lists the hook’s event. For more information, read our [Hookable Events](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/) documentation.

  - The second row in this column lists the hook’s location.

  - To change the order in which a hook executes, click the up or down arrows next to the hook’s location. In the following diagram, `pure-ftpd` is the hook action, and `/scripts/postftpup` and `/scripts/postftpinstall` are the locations for the hook.

    ![The table of hooks, where pure-ftpd is the hook and /scripts/postftpup and /scripts/postftpinstall are the hook's locations.](https://docs.cpanel.net/img/managehooksarrows.jpg)
- _Stage_ — When the hook executes (for example, `pre`). For more information, read our [Guide to Standardized Hooks](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/) documentation.
Description/Notes The unique identifier for the hook.

- _Attributes_ — The _Attributes_ icons indicate the status of the hook:
  - ![block icon](https://docs.cpanel.net/img/managehooksnewaccount.jpg) — A blue icon indicates that the hook blocks certain actions. For example, a hook may block the creation of a new account.

  - ![active icon](https://docs.cpanel.net/img/managehooksactive.jpg) — A blue icon indicates that the hook is active.

  - ![manual run icon](https://docs.cpanel.net/img/managehooksroot.jpg) — A blue icon indicates that the `root` user must run the hook.

  - ![check action icon](https://docs.cpanel.net/img/managehookscondition.jpg) — A blue icon indicates that the hook checks for a specified condition (a check action) before it runs.

  - ![failure routine icon](https://docs.cpanel.net/img/managehooksfailure.jpg) — A blue icon indicates that a subroutine or script executes if the hook fails.
- _Actions_ — You can perform the following actions for each hook:
  - _Details_ — Opens a separate window that displays all of the hook’s information.






    Note:




    Changes to the contents of the _Notes_ text box do **not** change the functionality of the hook.


  - _Disable_ or _Enable_ — Disables or enables the hook.

  - _Delete_ — Deletes the hook. Click _Proceed_ to confirm that you wish to delete the hook.






    Warning:




    If you delete a hook, you may break applications that depend on that hook to function. If you are unsure whether any applications depend on the hook, use the _Disable_ option instead.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Apps Managed by AppConfig](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)
- [cPanel Plugin File Generator](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)