---
url: "https://docs.cpanel.net/whm/security-center/modsecurity-tools/"
title: "ModSecurity® Tools | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. ModSecurity® Tools


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#overview)

* * *

[Hits List](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#hits-list)

* * *

[Report a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#report-a-rule)

* * *

[Rules List](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#rules-list)

* * *

[Filter rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#filter-rules)

* * *

[Add a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#add-a-rule)

* * *

[Edit a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#edit-a-rule)

* * *

[Copy a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#copy-a-rule)

* * *

[Edit all rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#edit-all-rules)

* * *

[Enable or disable a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#enable-or-disable-a-rule)

* * *

[Delete a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#delete-a-rule)

* * *

[ModSecurity database script](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#modsecurity-database-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#overview)

* * *

[Hits List](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#hits-list)

* * *

[Report a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#report-a-rule)

* * *

[Rules List](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#rules-list)

* * *

[Filter rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#filter-rules)

* * *

[Add a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#add-a-rule)

* * *

[Edit a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#edit-a-rule)

* * *

[Copy a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#copy-a-rule)

* * *

[Edit all rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#edit-all-rules)

* * *

[Enable or disable a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#enable-or-disable-a-rule)

* * *

[Delete a rule](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#delete-a-rule)

* * *

[ModSecurity database script](https://docs.cpanel.net/whm/security-center/modsecurity-tools/#modsecurity-database-script)

* * *

## ModSecurity® Tools

![](https://docs.cpanel.net/img/whm-icons/modsecurity_tools.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/modsecurity-tools/)

Last modified: _2024 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _ModSecurity® Tools_ interface allows you to install and manage ModSecurity rules.

- Click _Rules List_ to view the _Rules List_ section of the interface.

- In the _Rules List_ section of the interface, click _Hits List_ to return to the _Hits List_ section of the interface.


Important:

You **must** install the ModSecurity Apache module in order to use this interface. Use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) or your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/) to install the ModSecurity Apache module.

Note:

EasyApache 4 loads the `/etc/apache2/conf.d/modsec/modsec2.cpanel.conf` and `/etc/apache2/conf.d/modsec/modsec2.user.conf` files as an include.

- This file’s rules may still affect the way in which ModSecurity functions, which may result in false positives on your system.
- If you see many false positives, check this file for custom rules.

## Hits List

Use the _Hits List_ section of the interface to view your server’s history of rule events. To edit or disable the ModSecurity rule that generated a hit, click _Rule ID_.

Note:

The _Hits List_ shows only the most relevant hit for individual requests. You must check the logs to see a full history of rule events. For more information on event logs, read our [Apache Module Modsecurity Configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity#configuration-details) documentation.

### Report a rule

If you find a problem with a vendor’s rule, perform the following steps to report the issue to the rule’s vendor:

1. Locate the hit that the rule generated in the _Hits List_ and click _More_.

2. Click _Report_ this hit.






Note:




This option does **not** appear if the vendor does not accept reports.


3. Enter your email address, the reason for the report, and any additional comments for the vendor.

4. Click _Review Report_.

5. Verify the information in your report and click _Submit_.


## Rules List

Important:

To update the Apache server with your staged changes, click _Deploy and Restart Apache_ at the top or bottom of the interface.


Note:

For more information about how to create your own ModSecurity rules, read [GitHub’s ModSecurity Reference Manual](https://github.com/SpiderLabs/ModSecurity/wiki) documentation.


### Filter rules

To filter the list of rules, click the _Vendor_ button in the right corner of the table. Click the vendors that you wish to display in the _Vendors_ menu and click _Apply_. To deselect a vendor, hold the _Control_ key while you click the vendor.

### Add a rule

To add a rule, perform the following steps:

1. Click _Add Rule_. A new interface will appear.

2. Enter the rule in the _Rule Text_ text box.

3. To enable the rule when you deploy the configuration, select the _Enable Rule_ checkbox.

4. To deploy the rule and restart Apache immediately, select the _Deploy and Restart Apache_ checkbox.

5. Click _Save_.


### Edit a rule

To edit a rule, perform the following steps:

1. Click _Edit_ for the rule that you wish to update.

2. Make the desired changes in the _Rule Text_ text box.

3. Click _Save_.


Note:

You **cannot** edit vendor rules. To remove all of a vendor’s rules from your system, use the [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_).

### Copy a rule

To copy a rule, perform the following steps:

1. Click _Copy_ for the rule that you wish to update.

2. Make any desired changes in the _Rule Text_ text box.

3. Click _Save_.


### Edit all rules

To edit all of your rules, perform the following steps.

1. Click _Edit Rules_.

2. Enter the desired changes in the _Rules_ text box.

3. Click _Save_.


Remember:

You **cannot** edit vendor rules. To remove all of a vendor’s rules from your system, use the [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_).

### Enable or disable a rule

To enable or disable a ModSecurity rule, click _Enable_ or _Disable_ in that rule’s row.

### Delete a rule

To delete a rule, perform the following steps:

1. Click _Delete_ for the rule that you wish to delete.

2. Click _Delete_ to confirm your action.


Note:

You **cannot** delete vendor rules. To remove all of a vendor’s rules from your system, use the [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_).

## ModSecurity database script

To create the ModSecurity database manually, run the following command:

```perl
/usr/local/cpanel/scripts/setup_modsec_db
```

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×