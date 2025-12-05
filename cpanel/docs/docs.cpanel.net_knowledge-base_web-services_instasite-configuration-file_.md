---
url: "https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/"
title: "InstaSite Configuration File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. InstaSite Configuration File


[installation](https://docs.cpanel.net/tags/installation/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#overview)

* * *

[The configuration file](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#the-configuration-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#overview)

* * *

[The configuration file](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#the-configuration-file)

* * *

[Example](https://docs.cpanel.net/knowledge-base/web-services/instasite-configuration-file/#example)

* * *

## InstaSite Configuration File

Last modified: _2024 February 21_

* * *

## Overview

The InstaSite feature allows an administrator to quickly generate a new website immediately after they install cPanel & WHM.

We currently offer the InstaSite feature as an experiment to a limited number of hyperscalers.

This document describes the `/var/cpanel/.create-website` configuration file which the InstaSite feature uses in the background to temporarily store values.

Note:

Typically, a third-party service will create this file, not the system administrator.


## The configuration file

The `/var/cpanel/.create-website` configuration file uses JSON format, and it uses the following parameters:

| Parameter | Description | Example |
| --- | --- | --- |
| `domain` | The new account’s domain name. | `example.com` |
| `username` | The new account’s user name. | `example` |
| `password` | The new account’s password. | `password` |

All three parameters are **required**.

## Example

The following example demonstrates the contents of the `/var/cpanel/.create-website` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>{<br>    "domain":   "example.com",<br>    "username": "example",<br>    "password": "yourPassword"<br>}<br>``` |

Important:

Because this file contains a password, make sure that the file uses `0600` permissions.


#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×