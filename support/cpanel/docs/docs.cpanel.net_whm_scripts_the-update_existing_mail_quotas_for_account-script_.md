---
url: "https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/"
title: "The update_existing_mail_quotas_for_account Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#main-content)

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
4. The update\_existing\_mail\_quotas\_for\_account Script


[script](https://docs.cpanel.net/tags/script/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/#options)

* * *

## The update\_existing\_mail\_quotas\_for\_account Script

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script/)

Last modified: _2021 September 8_

* * *

## Overview

The `/usr/local/cpanel/scripts/update_existing_mail_quotas_for_account` script will update the quota for all existing email accounts for a given user or for all users on the system

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/update_existing_mail_quotas_for_account [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--all` | All emails created by the `user` of the cPanel account. | –all 1000 |
| `--user` | The name of the cPanel account. | –user example 1000 |
| `--quota <quota_in_megabytes>` | The new quota size for email accounts, measured in megabytes. | –quota 2048 |
| `--help` | Display the script’s help documentation. | `--help` |

Note:

The `<quota_in_megabytes>` value must be a positive integer. Use `0` for unlimited or maximum allowed quota (based on `MAX_EMAILACCT_QUOTA` for account).

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×