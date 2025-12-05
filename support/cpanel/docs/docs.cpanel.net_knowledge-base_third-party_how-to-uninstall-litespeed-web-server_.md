---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/"
title: "How to Uninstall LiteSpeed Web Server | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. How to Uninstall LiteSpeed Web Server


[server](https://docs.cpanel.net/tags/server/) [apache](https://docs.cpanel.net/tags/apache/) [litespeed](https://docs.cpanel.net/tags/litespeed/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#overview)

* * *

[Uninstall LiteSpeed Web Server](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#uninstall-litespeed-web-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#overview)

* * *

[Uninstall LiteSpeed Web Server](https://docs.cpanel.net/knowledge-base/third-party/how-to-uninstall-litespeed-web-server/#uninstall-litespeed-web-server)

* * *

## How to Uninstall LiteSpeed Web Server

Last modified: _2024 February 22_

* * *

## Overview

This document describes the steps to uninstall [LiteSpeed Web Server](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license) from cPanel & WHM. These steps will prevent an accidental reinstallation of LiteSpeed Web Server.

## Uninstall LiteSpeed Web Server

To uninstall LiteSpeed Web Server, perform the following steps:

1. As the `root` user, convert your server to use the Apache web server. To do so, run the following command:

```bash
/usr/local/lsws/admin/misc/cp_switch_ws.sh apache
```

2. Ensure that Apache is running. You can do so from WHM’s [_Apache Status_](https://docs.cpanel.net/whm/server-status/apache-status) interface ( _WHM » Home » Server Status » Apache Status_).
   - The _Restart Time_ header will indicate the time and date when Apache restarted.
3. Uninstall the LiteSpeed Web server plugin. From the command line, run the WHM plugin uninstallation script:


```bash
/usr/local/cpanel/whostmgr/docroot/cgi/lsws/lsws_whm_plugin_uninstall.sh
```

Note:

This action **only** removes the LiteSpeed Web Server plugin from your server. It does **not** remove LiteSpeed Web Server from your server.

4. Remove LiteSpeed Web Server files from your server. The following command removes the LiteSpeed Web Server directory (`lsws`) from the `/usr/local` directory:

```bash
/usr/local/lsws/admin/misc/uninstall.sh
```

Note:

Users who purchased LiteSpeed Web Server through WebPros International, LLC **must** complete the following step. Otherwise, you may stop at step 4.

5. Users who purchased LiteSpeed Web Server through the cPanel Store must create a `touch` file. This file will prevent the `upcp` script from reinstalling LiteSpeed Web Server during the next cPanel & WHM update.

To create the touch file, run the following command:

```bash
touch /var/cpanel/disable_auto_lsws
```

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×