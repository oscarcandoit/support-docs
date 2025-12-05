---
url: "https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/"
title: "The backups_clean_metadata_for_missing_backups Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#main-content)

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
4. The backups\_clean\_metadata\_for\_missing\_backups Script


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#run-the-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/#run-the-script)

* * *

## The backups\_clean\_metadata\_for\_missing\_backups Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)

Last modified: _2020 May 13_

* * *

## Overview

The `backups_clean_metadata_for_missing_backups` script removes the metadata for backup files that a user manually removed from the system. Use this script when you want to remove metadata from the system outside of the daily Backup System run.

## Run the script

To use the `backups_clean_metadata_for_missing_backups` script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/backups_clean_metadata_for_missing_backups
```

This script has no arguments or output.



#### Additional Documentation

* * *

- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_create\_metadata Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)
- [The backups\_list\_user\_files Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)
- [The cpconftool Script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×