---
url: "https://docs.cpanel.net/whm/scripts/the-spf_installer-script/"
title: "The spf_installer Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#main-content)

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
4. The spf\_installer Script


[spf](https://docs.cpanel.net/tags/spf/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#options)

* * *

[Success and failure](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#success-and-failure)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#options)

* * *

[Success and failure](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/#success-and-failure)

* * *

## The spf\_installer Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/)

Last modified: _2025 June 5_

* * *

## Overview

The `/usr/local/cpanel/bin/spf_installer` script allows you to add an SPF record to all of a user’s domains’ zone files from the command line. For more information about SPF records, read our [Email Deliverability in cPanel](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/) documentation.

Note:

- The `/usr/local/cpanel/scripts/enable_spf_dkim_globally` script allows you to enable SPF and DKIM for accounts that exist on the server, and to create the appropriate DNS records for their domains. For more information, read our [The Enable SPF DKIM Globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/) documentation.
- If the user requires full control over a domain’s SPF record, use UAPI’s [`EmailAuth::install_spf_records`](https://api.docs.cpanel.net/openapi/cpanel/operation/install_spf_records/) function instead of this script.

## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/bin/spf_installer username policy is_complete overwrite preserve
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `user` | **Required**<br> The username to whose domains you wish to assign SPF records. | `cpaneluser` |
| `policy` | A comma-delimited list of SPF records that you wish to assign to the user’s domains. <br>Note:<br>The script will prepend the following code to the policy, where `main-IP` is the IP address of your server: `+a +mx +ip4:<main-IP>.` | `v=spf1 +a +mx +ip4:192.0.2.0/24,-ip4:203.0.113.5,+ip6:2001:db8:1a34::/64` |
| `is_complete` | Whether the SPF key is a complete SPF entry (ends with `-all`).<br>- A value of `1` indicates that the `policy` option’s value is a complete SPF record.<br>- A value of `0` indicates that the `policy` option’s value is **not** a complete SPF record.<br>Important:<br>This option is **required** when you use the `overwrite` and `preserve` options.<br> <br> This option defaults to `0`. | `1` |
| `overwrite` | Whether to overwrite the existing domains’ and subdomains’ SPF records with the value of the `policy` option.<br>- A value of `1` indicates that you wish to overwrite the user’s current SPF records.<br>- A value of `0` indicates that you do not wish to overwrite the user’s current SPF records.<br>Important:<br>This option is **required** when you use the `preserve` option.<br> <br>Warning:<br>When you run the `/usr/local/cpanel/bin/spf_installer` script, it inspects the zone file for the domain and records the first SPF record found. This is usually the main domain. If other subdomains have an identical SPF record, the script replaces those as well.<br> <br> This option defaults to `0`. | `1` |
| `preserve` | Whether to add the new set of keys to the existing records.<br>- A value of `1` indicates that you wish to append the `policy` option’s value to the user’s current SPF records.<br>- A value of `0` indicates that you wish to replace the user’s current SPF record with the `policy` option’s value.<br> This option defaults to `0`. | `0` |
| `--help` | Displays the help text for this script. | `/usr/local/cpanel/bin/spf_installer --help` |

### Success and failure

If the function does **not** succeed, you will receive the following error message:

```perl
Failed to set up SPF for this user.
```

If the function succeeds, you will **not** receive confirmation from the command line. To confirm that the function succeeded, navigate to cPanel’s [_Email Deliverability in cPanel_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/) interface ( _cPanel » Home » Email » Email Deliverability_) for each domain that the user owns.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×