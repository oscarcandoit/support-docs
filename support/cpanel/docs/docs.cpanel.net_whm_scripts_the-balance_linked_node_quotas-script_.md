---
url: "https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/"
title: "The balance_linked_node_quotas Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The balance\_linked\_node\_quotas Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [quotas](https://docs.cpanel.net/tags/quotas/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/#options)

* * *

## The balance\_linked\_node\_quotas Script

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)

Last modified: _2020 May 13_

* * *

## Overview

The `/usr/local/cpanel/scripts/balance_linked_node_quotas` script lets you enforce disk use quotas for [distributed cPanel accounts](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary). These accounts use [linked cPanel & WHM nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes). The system aggregates the disk usage for each cPanel account from the both the parent node and its child nodes. The script then adjusts each cPanel account’s disk use quota on both the parent and child nodes. The quota is closer to the actual disk space the cPanel account uses on each server. This helps ensure that distributed cPanel accounts do not exceed their quota limits.

For example, you have a cPanel user with a disk use quota of 10 gigabytes (GB). This account uses 7.5 GB for mail services. You decide to [offload the mail services to a cPanel & WHM child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles). When you run this script, the system assigns 75% of the user’s disk quota to the child node, and 25% to the parent node.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/balance_linked_node_quotas [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--verbose` | Run the script in verbose mode. | `--verbose` |
| `--help` | Displays the help documentation. | `--help` |

#### Additional Documentation

* * *

- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The modsec\_vendor Script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/)
- [The onboot\_handler Script](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)