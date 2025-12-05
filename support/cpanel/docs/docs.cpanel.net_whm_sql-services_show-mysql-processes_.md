---
url: "https://docs.cpanel.net/whm/sql-services/show-mysql-processes/"
title: "Show MySQL Processes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#main-content)

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
3. [SQL Services](https://docs.cpanel.net/whm/sql-services/)
4. Show MySQL Processes


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#overview)

* * *

[Process information](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#process-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#overview)

* * *

[Process information](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/#process-information)

* * *

## Show MySQL Processes

![](https://docs.cpanel.net/img/whm-icons/show_mysql_processes.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/sql-services/show-mysql-processes/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lists all of the processes that currently run on any database on your server.

Note:

In cPanel & WHM version 120 and later, we renamed this interface to [_Show Database Processes_](https://docs.cpanel.net/whm/database-services/show-database-processes) and its section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services/).

## Process information

The interface displays this information in the following columns:

- _Id_ — The Process ID.
  - Linux systems assign a unique process identification number to every process and application.
- _User_ — The user that executed the process on the database.

- _Host_ — The client’s hostname and the port from which the process executed. For example, _Host:0000_

- _db_ — The database on which the process runs.
  - This column displays _NULL_ if the process does not run on a database.
- _Command_ — The type of command that the system issued to the database.
  - For more information, read [MySQL’s Examining Thread Information](http://dev.mysql.com/doc/refman/5.0/en/thread-information.html) documentation.
- _Time_ — The time, in seconds, that the process has remained in its current state.

- _State_ — The action, state, or event of the process.
  - This column displays _NULL_ for the SHOW PROCESSLIST state.
  - For more information, read [MySQL’s Examining Thread Information](http://dev.mysql.com/doc/refman/5.0/en/thread-information.html) documentation.
- _Info_ — The text of the statement that the process currently executes.
  - If the process does not execute a statement, this column displays _NULL_.
  - This column may display a statement sent to the server, or an inner statement to execute other statements.

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Manage MySQL® Profiles](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)
- [MySQL Root Password](https://docs.cpanel.net/whm/sql-services/mysql-root-password/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×