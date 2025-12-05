---
url: "https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/"
title: "Guide to Reseller Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#main-content)

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
4. Guide to Reseller Accounts


[resellers](https://docs.cpanel.net/tags/resellers/) [accounts](https://docs.cpanel.net/tags/accounts/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#overview)

* * *

[How to manage reseller accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#how-to-manage-reseller-accounts)

* * *

[What privileges exist for reseller accounts?](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#what-privileges-exist-for-reseller-accounts)

* * *

[Privilege categories](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#privilege-categories)

* * *

[Default reseller privileges](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#default-reseller-privileges)

* * *

[Which packages can resellers view and assign?](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#which-packages-can-resellers-view-and-assign)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#overview)

* * *

[How to manage reseller accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#how-to-manage-reseller-accounts)

* * *

[What privileges exist for reseller accounts?](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#what-privileges-exist-for-reseller-accounts)

* * *

[Privilege categories](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#privilege-categories)

* * *

[Default reseller privileges](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#default-reseller-privileges)

* * *

[Which packages can resellers view and assign?](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/#which-packages-can-resellers-view-and-assign)

* * *

## Guide to Reseller Accounts

Last modified: _2024 February 19_

* * *

## Overview

This document describes reseller account privileges and how to manage reseller accounts. A reseller is a cPanel account owner that also sells cPanel accounts to other users. A reseller purchases system resources from a hosting provider, and then allocates the resources to the cPanel accounts that they sell. Reseller accounts include additional privileges. The system allows reseller accounts access to a limited version of the WHM interface, which allows them to manage the cPanel accounts that they sell.

Warning:

While the system allows resellers to create other resellers (nested resellers), we do **not** support this configuration. We do **not** test cPanel & WHM in this configuration, and we **strongly** recommend that you do not configure your server to use it.

## How to manage reseller accounts

To manage reseller accounts, use one of the following WHM interfaces:

- The _Resellers_ section ( _WHM » Home » Resellers_) provides access to all of the reseller features.
- The [_Reseller Center_](https://docs.cpanel.net/whm/resellers/reseller-center) interface ( _WHM » Home » Resellers » Reseller Center_) allows you to add or remove reseller privileges, and provides links to all of the other reseller features.

## What privileges exist for reseller accounts?

The system grants a set of reseller accounts limited privileges by default. To add privileges to a reseller account, use the [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

### Privilege categories

Resellers can access privileges from the following categories:

- _Initial Privileges_ — This list includes the privileges that the system assigns to newly-created reseller accounts.

- _Standard Privileges_ — This list includes basic reseller functions. For example, the reseller can add and remove accounts.

- _Package Privileges_ — This list includes the reseller’s ability to create and modify their own web hosting packages.

- _Global Privileges_ — This list includes privileges for server administrators, such as access to view and restart system services.

- _Super Privileges_ — This list includes settings such as account and quota modification.







Warning:





We do **not** recommend that you assign these privileges to your resellers.





The following settings allow resellers to create accounts without packages and circumvent resource limits:

  - _Account Modification_
  - _Bandwidth Limiting Modification_
  - _Quota Modification_
- _Root Access_ — The _All Features_ setting allows the reseller to access a fully functional WHM interface.







Warning:





- Do **not** enable the _All Features_ setting under _Root Access_ for your resellers.
- The _All Features_ setting overrides a reseller’s account creation limits. For example, if you set a reseller’s account creation limit to two accounts, and then you enable the _All Features_ setting under _Root Access_, WHM will **not** limit the reseller to two accounts. The reseller can create as many accounts as they wish.
- The _All Features_ setting allows the reseller to view all of the accounts on the server. This includes accounts that they do not own.

### Default reseller privileges

A reseller account has access to the following WHM features by default:

- [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) — This feature contains some basic configuration settings for cPanel & WHM.

- [_Manage External Authentications_](https://docs.cpanel.net/whm/security-center/manage-external-authentications) — This feature allows you to manage your server’s OpenID Connect-compliant identity providers.

- [_Remote Access Key_](https://docs.cpanel.net/whm/clusters/remote-access-key) — This feature allows a reseller to generate and copy a key to allow remote access to WHM functionality.







Note:





- We deprecated WHM’s Remote Access Key feature in cPanel & WHM version 64. We **strongly** recommend that you use API tokens instead.
- This interface will **not** appear on new installations of cPanel & WHM version 72.

- [_List Subdomains_](https://docs.cpanel.net/whm/account-information/list-subdomains) — This feature displays a list of the reseller’s subdomains.

- [_Web Template Editor_](https://docs.cpanel.net/whm/account-functions/web-template-editor) — This feature allows a reseller to edit the default page that the system displays for a website that does not yet contain content.







Warning:





We **strongly** recommend that resellers include their contact information in the default page content.

- _Change WebHost Manager Theme_ — This feature allows you to select the theme for WHM.







Note:





- We added this interface in cPanel & WHM version 64.
- We removed this interface in cPanel & WHM version 102. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.

- [_Mail Delivery Reports_](https://docs.cpanel.net/whm/email/mail-delivery-reports) — This feature allows a reseller to view users who have relayed mail.

- [_View Relayers_](https://docs.cpanel.net/whm/email/view-relayers) — This feature displays the total number of message delivery attempts that each domain on a reseller’s server makes.

- [_View Sent Summary_](https://docs.cpanel.net/whm/email/view-sent-summary) — This feature allows a reseller to change WHM themes.

- [_Change Log_](https://docs.cpanel.net/whm/cpanel/change-log) — This feature allows the reseller to track changes in our software.

- [_Customization_](https://docs.cpanel.net/whm/cpanel/customization) — This feature allows a reseller to customize the cPanel interface that their customers use.

- [_SSL Storage Manager_](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager) — This features allows system administrators to view detailed information about their SSL resources.

- [_cPanel Development Forum_](http://forums.cpanel.net/cpanel-developers.html) — This link allows resellers to access the cPanel Developers section of the cPanel Forums.

- [_Developer Documentation_](https://api.docs.cpanel.net/) — This set of documents provides helpful information for resellers of third-party products that interact with cPanel & WHM.

- [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm) — This feature allows you to create, list, update, and revoke API tokens.







Note:





We added this interface in cPanel & WHM version 64.

- _Plugins_ — This feature displays interfaces from your server’s installed WHM plugins.







Note:





This interface does **not** appear for all users.


## Which packages can resellers view and assign?

Packages allow resellers to assign limits and settings to cPanel accounts. For example, a reseller may want to assign disk quotas or monthly bandwidth restrictions. Hosting providers can create and modify packages for resellers or allow the reseller to do this for themselves.

Resellers can view and assign any package that contains their username. Additionally, hosting providers can enable the `viewglobalpackages` Access Control List (ACL), which allows resellers to view and assign global packages.

| Type of package | Example | Description | Reseller can view |
| --- | --- | --- | --- |
| Root | `root_package` | `root`, an underscore, and a package name. | No |
| User | `reseller_package` | The reseller’s username, an underscore, and a package name. | Yes |
| Global | `package` | A package name that does not contain any underscores. | Yes, if the hosting provider enables the `viewglobalpackages` ACL for the reseller; otherwise, no. |

Note:

- The `root` user can view all packages.
- Resellers can **only** view packages that contain **their** specific username.

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [Reseller Center](https://docs.cpanel.net/whm/resellers/reseller-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×