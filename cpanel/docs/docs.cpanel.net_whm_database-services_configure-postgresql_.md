---
url: "https://docs.cpanel.net/whm/database-services/configure-postgresql/"
title: "Configure PostgreSQL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/database-services/configure-postgresql/#main-content)

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
3. [Database Services](https://docs.cpanel.net/whm/database-services/)
4. Configure PostgreSQL


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [postgresql](https://docs.cpanel.net/tags/postgresql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/database-services/configure-postgresql/#overview)

* * *

[Postgres Config Install](https://docs.cpanel.net/whm/database-services/configure-postgresql/#postgres-config-install)

* * *

[Create Postgres Users](https://docs.cpanel.net/whm/database-services/configure-postgresql/#create-postgres-users)

* * *

[Postgres Password](https://docs.cpanel.net/whm/database-services/configure-postgresql/#postgres-password)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/database-services/configure-postgresql/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/database-services/configure-postgresql/#overview)

* * *

[Postgres Config Install](https://docs.cpanel.net/whm/database-services/configure-postgresql/#postgres-config-install)

* * *

[Create Postgres Users](https://docs.cpanel.net/whm/database-services/configure-postgresql/#create-postgres-users)

* * *

[Postgres Password](https://docs.cpanel.net/whm/database-services/configure-postgresql/#postgres-password)

* * *

## Configure PostgreSQL

![](https://docs.cpanel.net/img/whm-icons/configure_postgresql.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [120](https://docs.cpanel.net/whm/database-services/configure-postgresql/)

Last modified: _2024 August 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to complete the [PostgreSQL® installation process](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/), create PostgreSQL users, and update the PostgreSQL password.

Note:

In cPanel & WHM version 118 and earlier, we titled this interface’s section in the WHM interface [SQL Services](https://docs.cpanel.net/whm/sql-services/).

Warning:

- This interface’s features are for **advanced users only**.
- The interface only appears **after** you install PostgreSQL on your server.

## Postgres Config Install

After you install PostgreSQL on your server via the command line, you **must** use this interface to complete the installation process. To do this, click _Install Config_.

Warning:

**Only** use this feature to **complete** the PostgreSQL installation process. If you have already installed PostgreSQL on your server, this feature **will** overwrite the current `pg_hba.conf` file.


## Create Postgres Users

If cPanel accounts already exist on your server, you must create PostgreSQL accounts after the PostgreSQL installation process finishes. To do this, click _Create Users_.

Note:

When you create new cPanel accounts on a server with PostgreSQL, the system automatically creates the new cPanel account’s PostgreSQL user. **Only** use this feature to create PostgreSQL users for cPanel accounts that you created **before** you installed PostgreSQL.


## Postgres Password

To update your PostgreSQL password, enter the new password in the text boxes and click _Change Password_.

Enter and confirm the new password in the appropriate text boxes.

Note:

- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.

- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.

- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.


#### Additional Documentation

* * *

- [Change Database Root Password](https://docs.cpanel.net/whm/database-services/change-database-root-password/)
- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Configure PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql/)
- [Database Map Tool](https://docs.cpanel.net/whm/database-services/database-map-tool/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×