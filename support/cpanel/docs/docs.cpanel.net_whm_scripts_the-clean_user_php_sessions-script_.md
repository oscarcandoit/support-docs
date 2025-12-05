---
url: "https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/"
title: "The clean_user_php_sessions Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#main-content)

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
4. The clean\_user\_php\_sessions Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#arguments)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#run-the-script)

* * *

[Arguments](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#arguments)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/#example)

* * *

## The clean\_user\_php\_sessions Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script/)

Last modified: _2022 July 28_

* * *

## Overview

Use the `/usr/local/cpanel/scripts/clean_user_php_sessions` script to purge expired PHP sessions from a secure temporary directory. This script checks the `session.gc_maxlifetime` and `session.save_path` variables in the global `php.ini` file and determines when to remove the PHP session files.

- This script **only** recognizes the global `session.gc_maxlifetime` PHP configuration value for each version of PHP.
- If this script detects different values in the `session.gc_maxlifetime` variable, but the system stores the session data in a single location, the script uses the **minimum** value to determine when to purge expired session files.

For more information about PHP session files, read our [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor) documentation.

Note:

- This script **requires**`root`-level permission.
- We recommend that this script runs **at least** once per day to remove old PHP session files.
- When the `/usr/local/cpanel/scripts/maintenance` script runs, it adds the `/usr/local/cpanel/scripts/clean_user_php_sessions` script to the root user’s crontab.
- If you customize the `session.gc_maxlifetime` value, but **do not** customize the `session.save_path` value, the script does **not** use the `session.gc_maxlifetime` variable value.

## Run the script

When you run this script, the system **only** removes files with the `session.save_path` variable in a `sess_*` format by default.

### Arguments

This script accepts the following arguments:

| Option | Description | Example |
| --- | --- | --- |
| A valid [Perl Compatible Regular Expression (PCRE)](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions). | A PCRE to match custom PHP session filenames. | `/usr/local/cpanel/scripts/clean_user_php_sessions '^ci_session[[:alnum:]]\{40}$'` |

### Example

To clear out **all** PHP session files that match the `custom example_session_*` format, run the following command:

```bash
/usr/local/cpanel/scripts/clean_user_php_sessions '^ci_session[[:alnum:]]\{40}$'
```

Important:

Make **certain** the provided regular expression is specific so you do not remove any misconfigured `session.save_path` variables.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×