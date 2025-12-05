---
url: "https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/"
title: "The modsec_vendor Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#main-content)

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
4. The modsec\_vendor Script


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#arguments)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/#arguments)

* * *

## The modsec\_vendor Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script/)

Last modified: _2021 July 15_

* * *

## Overview

The `/usr/local/cpanel/scripts/modsec_vendor` script manages the vendors in your server’s ModSecurity® installation. You can also make these changes in WHM’s [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM_ » _Home_ » _Security Center_ » _ModSecurity® Vendors_).

## Run the script

To use the `/usr/local/cpanel/scripts/modsec_vendor` script, run the following script:

```bash
/usr/local/cpanel/scripts/modsec_vendor [arguments]
```

### Arguments

The `/usr/local/cpanel/scripts/modsec_vendor` script accepts the following arguments:

| Argument | Description | Example |
| --- | --- | --- |
| `list` | Lists the currently-installed vendors. | `/usr/local/cpanel/scripts/modsec_vendor list` |
| `add metadata YAML URL` | Installs a new vendor with the specified metadata, YAML information, and URL. | `/usr/local/cpanel/scripts/modsec_vendor add http://httpupdate.cpanel.net/modsecurity-rules/meta_OWASP3.yaml` |
| `remove vendor_id` | Removes the vendor with the specified vendor id. | `/usr/local/cpanel/scripts/modsec_vendor remove OWASP3` |
| `update vendor_id`<br>`update metadata YAML URL`<br>`update  --auto` | Updates the vendor with the provided information. <br>Note:<br>- If a \`vendor\_id\` is provided, this command updates the vendor specified by that id from the same URL that was used to install it.<br>- If a URL is provided, this command updates an existing vendor from the specified URL.<br>- The URL need not be the same as the one used to originally install the vendor.<br>- If \`--auto\` is specified, updates all installed vendors for which auto-update is enabled using the URLs from which they were originally installed. | `/usr/local/cpanel/scripts/modsec_vendor update OWASP3`<br>`/usr/local/cpanel/scripts/modsec_vendor update http://httpupdate.cpanel.net/modsecurity-rules/meta_OWASP3.yaml`<br>`/usr/local/cpanel/scripts/modsec_vendor update --auto` |
| `enable vendor_id` | Enables a vendor. | `/usr/local/cpanel/scripts/modsec_vendor enable OWASP3` |
| `disable vendor_id` | Disables a vendor. | `/usr/local/cpanel/scripts/modsec_vendor disable OWASP3` |
| `enable-updates vendor_id` | Enables automatic updates for a vendor. | `/usr/local/cpanel/scripts/modsec_vendor enable_updates OWASP3` |
| `disable-updates vendor_id` | Disables automatic updates for a vendor. | `/usr/local/cpanel/scripts/modsec_vendor disable-updates OWASP3` |
| `enable-configs vendor_id` | Enables all configs for a vendor. | `/usr/local/cpanel/scripts/modsec_vendor enable-configs OWASP3` |
| `disable-configs vendor_id` | Disables all configs for a vendor. | `/usr/local/cpanel/scripts/modsec_vendor disable-configs OWASP3` |

#### Additional Documentation

* * *

- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The onboot\_handler Script](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×