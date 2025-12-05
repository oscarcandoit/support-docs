---
url: "https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/"
title: "Manage API Tokens in WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#main-content)

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
4. Manage API Tokens in WHM


[whmui](https://docs.cpanel.net/tags/whmui/) [api](https://docs.cpanel.net/tags/api/) [apitoken](https://docs.cpanel.net/tags/apitoken/) [acls](https://docs.cpanel.net/tags/acls/) [authentication](https://docs.cpanel.net/tags/authentication/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#overview)

* * *

[The API Tokens table](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#the-api-tokens-table)

* * *

[Create an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#create-an-api-token)

* * *

[Edit an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#edit-an-api-token)

* * *

[Revoke an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#revoke-an-api-token)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#overview)

* * *

[The API Tokens table](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#the-api-tokens-table)

* * *

[Create an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#create-an-api-token)

* * *

[Edit an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#edit-an-api-token)

* * *

[Revoke an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#revoke-an-api-token)

* * *

## Manage API Tokens in WHM

![](https://docs.cpanel.net/img/whm-icons/api_tokens.svg)

_Valid for versions 110 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lets you to create, list, update, and revoke API tokens. It also lets you assign Access Control List (ACL) privileges to API tokens. You can use an API token to authenticate with WHM’s remote API. This is useful, for example, to allow a reseller or third-party developer to run API function calls with your account’s data.

Important:

- The ability to assign ACL restrictions to API tokens is **experimental**. This may change in future versions.
- Currently, you can **only** use API tokens with the following features:

  - [WHM API functions](https://api.docs.cpanel.net/whm/introduction/)
  - [DNS clusters](https://docs.cpanel.net/whm/clusters/dns-cluster)
  - [Configuration clusters](https://docs.cpanel.net/whm/clusters/configuration-cluster)

Note:

- If you change a cPanel account’s username in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Accounts » Modify an Account_) any API tokens the account uses will continue to function. To remove an account’s API token, you **must** revoke the API token.
- If you delete a cPanel account, the system will revoke the account’s API tokens.
- You **cannot** create an API token for a suspended account.

## The API Tokens table

Important:

This section of the interface **only** appears if all of the _Initial Privileges_ are enabled in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

This section of the interface displays all of your API tokens. You can also perform the following actions:

- To search for an API token, enter a term in the _Search_ text box. The interface automatically filters the API token names as you type.
- To refresh the API tokens list, click the gear icon (![Gear](https://docs.cpanel.net/img/gear-icon.png)) next to the _Actions_ column heading and click _Refresh List_.

The API tokens table displays the following:

- _Name_ — The API token’s name.

- _Created_ — The time that you created the API token, in `MM DD YYYY hh:mm:ss` format.

- _Expires_ — If an API token expires, the date and time at which the token will expire.
  - When an API token will soon expire, the interface displays its entry row in yellow. It also displays a notice icon (![Notice](https://docs.cpanel.net/img/warn.png)).
  - The interface displays expired API token entry rows in red. It also displays a notice icon (![Notice](https://docs.cpanel.net/img/warn.png)).






    Note:





    When API tokens expire, the system does **not** remove them. You **must** manually delete expired API tokens.

  - _IPs_ — The IP address or IP address range (in [CIDR](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#classless-inter-domain-routing-cidr) or prefix format) of the API caller that can use the token. If the column contains _Any_, any address can use the token.





    Note:




    This feature allows a maximum of 100 IP addresses and/or IP address range entries.
- _Actions_
  - [_Edit_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#edit-an-api-token) — Edit the API token.
  - [_Revoke_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#revoke-an-api-token) — Revoke the API token.

## Create an API token

To create an API token, perform the following steps:

1. Click _Generate Token_. The _Generate API Token_ interface will appear.

2. Enter a unique name for the API token in the _Name_ text box.







Note:





- An API token name can **only** contain up to 50 characters.
- You can **only** enter letters (`a` through `z` and `A` through `Z`), numbers (`0` through `9`), dashes (`-`), and underscores (`_`).

3. Select one of the following settings from the _Should the API Token Expire?_ section:
   - _The API Token will not expire._ — This will create a token that does **not** have an expiration date.
   - _Specify an expiration date._ — This allows you to create a token that expires on a specific date. By default, tokens expire one year from the current date. When you select this setting, the interface displays the _API Token Expiration Date_ section. Use the the calendar icon (![Calendar](https://docs.cpanel.net/img/calendar.png)) to open a calendar to select a desired expiration date. You can also enter a custom date in the calendar text box. Use the `YYYY-MM-DD` format, where `YYYY` is the four-digit year, `MM` is the month, and `DD` is the day of the month. The token will expire on the date you select at `11:59:59 PM`, server time.






     Important:





- When an API token expires, the system will **not** remove it. You **must** manually delete an API token.
- You can [remove an API token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/#revoke-an-api-token) in this interface or use the WHM API 1 [`api_token_revoke`](https://api.docs.cpanel.net/openapi/whm/operation/api_token_revoke/) function.
4. In the _IPs_ text box, enter the IP addresses of devices that can use this API token. You can enter IP addresses in any of the following formats:


   - Single IP address (for example, `10.5.3.33` or `12AB:0:0:CD30:123:4567:89AB:CDEF`).
   - [CIDR](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#classless-inter-domain-routing-cidr) or prefix format (for example, `10.5.3.0/24` or `12AB:0:0:CD30::/60`).

Note:

To allow all IP addresses to use the API token, leave this text box blank.


5. In the _Privileges_ section, deselect the checkbox for ACL privileges that you do **not** want to give to the token. For more information, read our [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) documentation.







Note:





- You **must** assign at least one ACL privilege to the token.

- Only ACL privileges that the user possesses will appear in this section.


Warning:

Use caution when you assign the following ACL privileges:

- _Everything_ — This allows an API token user access to the entire system. A user with this token can perform all `root` user functions.
- _Change Password_ — This will allow an API token user to change account passwords and log in with a new password.
- _Create User Session_ and _Manage API Tokens_ — These will allow an API token user to bypass **any** restrictions that you set on the API token.

6. Click _Generate_. The new API token hash and its name will appear. The interface also displays the date on which the API token will expire.







Warning:





Make **certain** that you save your API token in a safe location on your workstation. You **cannot** access the token after you navigate away from the interface or refresh the _API Tokens_ table.

7. Click _Yes, I saved my token_. The new API token and its creation time will appear in the _API Tokens_ list.







Note:





For information about how to use the API token with API calls, read our [Guide to API Authentication - API Tokens in WHM](https://api.docs.cpanel.net/guides/guide-to-api-authentication/guide-to-api-authentication-api-tokens-in-whm/) documentation.


## Edit an API token

To edit an API token, perform the following steps:

1. Locate the API token that you want to edit in the _API Tokens_ list.
2. Under the _Actions_ column, click _Edit_. The _Edit API Token_ interface will appear.
3. Edit the desired settings, then click _Save_. A success message will appear in the upper-right corner of the interface.






Remember:





You **must** assign at least one ACL privilege to the token.


## Revoke an API token

Warning:

If you revoke an API token, any script or account using the API token will **not** function.

To revoke an API token, perform the following steps:

1. Locate the API token that you want to revoke in the _API Tokens_ list.
2. Under the _Actions_ column, click _Revoke_. A confirmation message will appear.
3. Click _Continue_ to revoke the token. A success message will appear in the upper-right corner of the interface.

To revoke **all** API tokens, perform the following steps:

1. Click the gear icon (![Gear](https://docs.cpanel.net/img/gear-icon.png)) and click _Revoke All_. A confirmation message will appear.
2. Click _Continue_ to revoke all API tokens. A success message will appear in the upper-right corner of the interface.

#### Additional Documentation

* * *

- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Apps Managed by AppConfig](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×