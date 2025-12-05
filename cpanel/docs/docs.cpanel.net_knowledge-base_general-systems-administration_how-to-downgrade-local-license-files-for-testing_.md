---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/"
title: "How to Downgrade Local License for Testing | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Downgrade Local License for Testing


[license](https://docs.cpanel.net/tags/license/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#overview)

* * *

[Downgrade your local license](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#downgrade-your-local-license)

* * *

[Available values](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#available-values)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#overview)

* * *

[Downgrade your local license](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#downgrade-your-local-license)

* * *

[Available values](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#available-values)

* * *

## How to Downgrade Local License for Testing

Last modified: _2024 February 19_

* * *

## Overview

This document provides steps to downgrade your server’s local license for testing purposes. You can use the file `/var/cpanel/license.cfg` to request a restricted cPanel & WHM license. This restricted license will benefit developers who would like to test custom code or experiment with user limitations.

The system uses the `/var/cpanel/license.cfg` file to determine the license request to downgrade your local license.

Note:

You **cannot** use this file to upgrade your license. To upgrade your license, contact [cPanel Customer Service](http://tickets.cpanel.net/).

## Downgrade your local license

To downgrade your local license for testing, perform the following steps:

1. From the command line, log in to your cPanel & WHM server as the `root` user.

2. Open the `/var/cpanel/license.cfg` file with your favorite editor.

3. Edit the `producttype` and `maxusers` values to your desired settings. See [the table below](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-downgrade-local-license-files-for-testing/#available-values) for more information.

4. Save the file and refresh the license. To refresh the license, run the `/usr/local/cpanel/cpkeyclt` script.


## Available values

| Variable | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `producttype` | _string_ | A [server profile](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/). | - `databasenode` — The _Database_ profile. <br>- `dnsnode` — The _DNS_ profile. <br>- `dnsonly` — The DNSOnly® mode. <br>- `mailnode` — The _Mail_ profile. <br>- `cloudlinux` — The CloudLinux Node profile | `dnsnode` |
| `maxusers` | _integer_ | A numeric value. | A positive integer that does **not** exceed the maximum user count for your license. | `40` |

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×