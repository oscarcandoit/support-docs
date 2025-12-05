---
url: "https://docs.cpanel.net/whm/development/api-shell-for-whm/"
title: "API Shell for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/development/api-shell-for-whm/#main-content)

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
4. API Shell for WHM


[whmui](https://docs.cpanel.net/tags/whmui/) [api](https://docs.cpanel.net/tags/api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/development/api-shell-for-whm/#overview)

* * *

[Call a WHM API 1 function](https://docs.cpanel.net/whm/development/api-shell-for-whm/#call-a-whm-api-1-function)

* * *

[API call results](https://docs.cpanel.net/whm/development/api-shell-for-whm/#api-call-results)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/development/api-shell-for-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/development/api-shell-for-whm/#overview)

* * *

[Call a WHM API 1 function](https://docs.cpanel.net/whm/development/api-shell-for-whm/#call-a-whm-api-1-function)

* * *

[API call results](https://docs.cpanel.net/whm/development/api-shell-for-whm/#api-call-results)

* * *

## API Shell for WHM

![](https://docs.cpanel.net/img/whm-icons/api_shell.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/development/api-shell-for-whm/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to call WHM API functions interactively within the interface. To enable this feature, you **must** enable the _cPanel & WHM API shell (for developers)_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration» Tweak Settings_).

Warning:

This feature uses live data from your server. API function calls may change or delete data on your server, which can cause your server to fail. Read each function’s documentation thoroughly before you use it in the API Shell interface, a script, or through any other method.

Note:

Only the `root` user and resellers with `root`-level privileges may use this feature.

## Call a WHM API 1 function

To call a WHM API function, perform the following steps:

1. Select a version of the WHM API.







Note:





- Only WHM API version 1 is available through this interface.
- To learn more about each function, click _WHM API v1 Documentation_.

2. From the _v1_ menu, select the function that you wish to test.

3. Enter the input parameters that you wish to test, and their values. To enter more parameters and values, click _Add_.

4. To filter, sort, or paginate the results, click _Show Sort/Filter/Paginate Options_.
   - To select the first record to show from the results, enter a number in the _Index (0-based) of first result to show_ text box.
   - To limit the number of results that the interface displays, enter the maximum number of results to display in the _Maximum # of results to show_ text box.
   - To filter the results:
     1. Click _Add_ in the _Filters_ section.
     2. Enter the appropriate information in the _Field_ text box, condition menu, and _Term_ text box.
     3. To enter more filters, click _Add_.
   - To sort the results:
     1. Click _Add_ in the _Sorts_ section of the interface.
     2. Enter the appropriate information in the _Field_ text box and condition menu.
     3. Select the _Reverse_ checkbox if you want to reverse the sort order.
     4. To enter more sort methods, click _Add_.
   - To limit the columns to display:
     1. Click _Add_ in the _Columns_ section of the interface.
     2. Enter the appropriate information in the _Column_ text box.
     3. To enter more columns to display, click _Add_.
5. Click _Submit_.


## API call results

The system displays the results in the _API call response_ section of the interface. You can view the results in the _Tree view_, _Table view_, or _Raw view_ tabs.

Note:

The _Raw view_ tab’s response separates the function call’s response from the HTTP headers.

#### Additional Documentation

* * *

- [API Shell for cPanel](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/)
- [Apps Managed by AppConfig](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)
- [cPanel Plugin File Generator](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [Manage Hooks](https://docs.cpanel.net/whm/development/manage-hooks/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×