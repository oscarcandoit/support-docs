---
url: "https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/"
title: "The convert_accesshash_to_token Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#main-content)

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
4. The convert\_accesshash\_to\_token Script


[authentication](https://docs.cpanel.net/tags/authentication/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apitoken](https://docs.cpanel.net/tags/apitoken/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#arguments)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/#arguments)

* * *

## The convert\_accesshash\_to\_token Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/)

Last modified: _2022 December 5_

* * *

## Overview

The `/usr/local/cpanel/scripts/convert_accesshash_to_token` script converts a WHM user’s access hash to an API token, which you can use this token to authenticate with WHM. You can view access hashes in WHM’s [_Remote Access Key_](https://docs.cpanel.net/whm/clusters/remote-access-key/) interface ( _WHM_ » _Home_ » _Clusters_ » _Remote Access Key_).

Important:

- When you use this script to convert an access hash to an API token, the system does **not** revoke the access hash.
- We **strongly** recommend that you **only** run this script one time for each user.

For more information about API tokens, read our [Manage API Tokens](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) documentation.

## Run the script

To use this script, run the following command as the root user:

```bash
/usr/local/cpanel/scripts/convert_accesshash_to_token [options] [user]
```

Note:

In this example, `user` represents the WHM username for which to convert an access hash to an API token.

- If you do **not** specify a username, this option defaults to the root user.
- You can specify multiple users when you run this script.

### Arguments

The `/usr/local/cpanel/scripts/convert_accesshash_to_token` script accepts the following arguments:

| Option | Description | Example |
| --- | --- | --- |
| `--verbose` | Return a complete list of API tokens that the script generated. <br>Note:<br>If you do not receive output, the user that you specified does not possess an access hash to convert to an API token. | `/usr/local/cpanel/scripts/convert_accesshash_to_token --verbose` |
| `--all-resellers` | Convert all of the system’s reseller’s access hash keys to API tokens. <br>Note:<br>If you use this option, do **not** include the reseller’s username. | `/usr/local/cpanel/scripts/convert_accesshash_to_token --all-resellers` |

#### Additional Documentation

* * *

- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×