---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/"
title: "Identify cPanel & WHM or WP Squared from the terminal | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. Identify cPanel & WHM or WP Squared from the terminal


[updates](https://docs.cpanel.net/tags/updates/) [versions](https://docs.cpanel.net/tags/versions/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#overview)

* * *

[Determine server type](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#determine-server-type)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#overview)

* * *

[Determine server type](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-whm-or-wp-squared/#determine-server-type)

* * *

## Identify cPanel & WHM or WP Squared from the terminal

Last modified: _2025 February 13_

* * *

## Overview

This document explains how you can use the `/usr/local/cpanel/server.type` file to determine if a server runs cPanel & WHM or WP Squared.

## Determine server type

To determine the server type from the terminal, use the [`readlink`](https://man7.org/linux/man-pages/man2/readlink.2.html) command:

Note:

For more information about accessing the terminal, read our [How to access the Command Line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/) documentation.

```bash
readlink /usr/local/cpanel/server.type
```

The output on a cPanel & WHM server resembles the following:

```bash
cpanel
```

The output on a WP Squared server resembles the following:

```bash
wp2
```

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×