---
url: "https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/"
title: "The restorepkg Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#main-content)

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
4. The restorepkg Script


[backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#options)

* * *

[Files](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#files)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#options)

* * *

[Files](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#files)

* * *

[Examples](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/#examples)

* * *

## The restorepkg Script

_Valid for versions 102 through 118_

#### Version:

#### [102](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/102/)

#### [120](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/120/)

#### [130](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/)

Last modified: _2024 March 27_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/restorepkg` script to restore a cPanel account from a backup file.

Note:

- To create a backup file of a cPanel account, use the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) script.

- You can also restore a cPanel account from a backup file in WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_).


Warning:

- Do **not** use the `skip-name-resolve` setting in your server’s MySQL® configuration. This setting **will** cause **serious** issues with server operations. If you are **not** an advanced MySQL administrator, expect issues with this setting. For example, you will see issues with restoring backups. This setting will also cause issues with [phpMyAdmin](https://docs.cpanel.net/cpanel/databases/phpmyadmin).
- This feature does **not** transfer [Two-Factor Authentication (2FA)](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) configuration information for an account. The user will need to reconfigure 2FA on the new server.

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/restorepkg [arguments] [input] [filename|username]
```

Important:

You **must** pass the full path to a backup file or a cPanel account’s username to the script.


### Options

This script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--force` | Restore the account regardless of any errors or warnings. When the system restores the account, any existing data remains intact on the server. <br>Note:<br>If the account already exists on the server, this option operates similarly to the `--skipaccount` option. | `--force` |
| `--allow_reseller` | Restore reseller privileges. | `--allow_reseller` |
| `--ip` | Restore the account to a certain IP address: <br>- `y` — Use the next available IP address in the IP address pool to restore the account.<br>- `n` — Use the share IP address to restore the account.<br>- A valid IP address — Use this IP address to restore the account.<br>Note:<br>If an IP address is not available, the script uses the next available IP address in the IP address pool. If **no** IP addresses are available, the script uses the server’s shared IP address. | `--ip=192.0.2.169` |
| `--newuser` | Change the restored account’s username. To change the name of a database or database user after you restore the account, use WHM’s [_Manage Databases_](https://docs.cpanel.net/whm/sql-services/manage-databases) interface ( _WHM » Home » SQL Services » Manage Databases_) and WHM’s [_Manage Database Users_](https://docs.cpanel.net/whm/sql-services/manage-database-users) interface ( _WHM » Home » SQL Services » Manage Database Users_). <br>Warning:<br>- All of the account’s database users will keep their current username **except** for the user that matches the cPanel account.<br>- The new account name **cannot** already exist on the server.<br>- The username **must** contain 16 characters or fewer, and the first eight characters **must** be unique on the server.<br>- If you use this option with the `--skipaccount` option, the cPanel account may not restore correctly. | `--newuser=username` |
| `--skipaccount` | Restore a package for an existing account with the same username as another existing account. <br>Warning:<br>- If you use this option with the `--newuser` option, the cPanel account may not restore correctly. | `--skipaccount` |
| `--restricted` | Run the restoration process with the _Restricted Restore_ feature. This feature performs additional security checks on the backup file in order to mitigate the risk of transfers from unfamiliar sources. If a component of the backup file contains an issue (for example, a compromised MySQL® grant table or a symbolic link attack), the system does **not** restore that portion of the backup and adds a warning to the log file. If you do not trust the source of the account backup with `root` access to your server, use the _Restricted Restore_ feature to protect your server. <br>Note:<br>If you do not use this option, the script performs an unrestricted restore.<br> <br>Warning:<br>- The \*Restricted Restore\* feature is \*\*experimental\*\*. Do \*\*not\*\* consider it an effective security control. Exercise \*\*extreme\*\* caution when using the \*Restricted Restore\* feature.<br>- When you restore an account with the \*Restricted Restore\* feature, the system may leave behind unnecessary account data. This can cause conflicts and leave the account in a broken state. You must remove the account and then restore it \*\*without\*\* using the \*Restricted Restore\* feature.<br>- To use the \*Restricted Restore\* feature to restore an account that owns PostgreSQL® databases, the target server \*\*must\*\* use PostgreSQL version 8.4 or later.<br>- The \_Restricted Restore\_ feature will \*\*not\*\* restore parked (aliased) or addon domains.<br>- The \*Restricted Restore\* feature only allows restored accounts to use the \`noshell\` or \[\`jailshell\`\](/knowledge-base/accounts/virtfs-jailed-shell) options. If the restored account uses another shell, the system will set the account to use the \`noshell\` option. | None |
| `--unrestricted` | Restore a package in unrestricted mode. <br>Note:<br>This option defaults to enabled. The `--restricted` option overrides this option. | None |
| `--shared_mysql_server` | Restore a package without restoring some MySQL/MariaDB grants and databases if they already exist on the server. | `--shared_mysql_server` |
| `--help` | Display the script’s help information. This information includes a list of modules that you can disable with the `--disable` option. | `--help` |
| `--disable` | Disable specific modules during the account restoration process: <br>- Use a comma-separated list to specify multiple values.<br>- For a list of possible values, run the `–help` option, or read our WHM API 1 [`restore_modules_summary`](https://api.docs.cpanel.net/openapi/whm/operation/restore_modules_summary/) documentation.<br>- Module names are case-sensitive.<br>Warning:<br>We **strongly** recommend that **only** advanced users use this option. If you incorrectly configure this option, the cPanel account may restore in a broken state. | `--disable=MailRouting,SSL` |
| `--mail_location` | The server on which the account’s email will reside after the system completes the restore process: <br>- `.local` — The local server.<br>- `.existing` — Use the location defined in the account’s backup data. The is the default option.<br>- `ALIAS` — A remote [cPanel & WHM linked server node’s alias](https://docs.cpanel.net/whm/server-configuration/link-server-nodes). For example, the `example-alias` for the `servernode.example.com` domain.<br>Note:<br>The system will default to the `.local` option if: <br>- The system cannot use the cPanel & WHM linked server node when you use the `.existing` option.<br>- The cPanel & WHM linked server node’s `ALIAS` value is invalid. | `--mail_location=example-alias` |
| `--keep_local_cpuser_values` | Keep the specified value(s) from the local account’s [cpuser file](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cpuser-file).<br>- Use a comma-separated list to specify multiple values.<br>- For a list of possible values, refer to the local account’s `/var/cpanel/users` file.<br>- Values are case-sensitive.<br>Warning:<br>- We **strongly** recommend that **only** advanced users use this option. If you configure this option, the cPanel account may restore in an inconsistent state.<br>- The local account **must** already exist on the server to use this option.<br>- You can **only** use this option with the `--newuser` and `--skipaccount` options. | `--keep_local_cpuser_values=DNS,RS` |

### Files

The backup filename **must** use one of the following formats:

- `cpmove-{USER}`
- `cpmove-{USER}.tar`
- `cpmove-{USER}.tar.gz`
- `{USER}.tar`
- `{USER}.tar.gz`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar`
- `backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar.gz`

The restore package script searches for the archive in the following locations:

- `/home`
- `/home2`
- `/home3`
- `/root`
- `/usr`
- `/usr/home`
- `/web`

The script attempts to restore the account on the shared IP address with the following steps:

1. Adds the package to the `AccountLocal` queue.
2. Starts the restoration process.
3. Uses the `tail` command to output the log file’s contents after the restoration process begins.

### Examples

The following command uses the unrestricted restore method to restore the `cpmove-testaccount.tar.gz` file to the `192.0.2.169` IP address:

```bash
/usr/local/cpanel/scripts/restorepkg --ip=192.0.2.169 cpmove-testaccount.tar.gz
```

The following command restores the `username` user:

```bash
/usr/local/cpanel/scripts/restorepkg username
```

If the script cannot find a backup file to restore for that username, it will return an error similar to the following message:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>Searching for “example”’s account archive …<br>The system did not find an account archive for the user "example" in any of the possible locations “/home”, “/home2”, “/home3”, “/root”, “/usr”, “/usr/home”, and “/web”.<br>The system did not find an account archive for the user “example” in any of the possible locations “/home”, “/home2”, “/home3”, “/root”, “/usr”, “/usr/home”, and “/web”. at bin/restorepkg.pl line 264.<br>``` |

The following command creates the `newacct` user with the domain name and theme of the `oldacct` user:

```bash
/usr/local/cpanel/scripts/restorepkg --newuser newacct --skipaccount --keep_local_cpuser_values DNS,RS oldacct
```

#### Additional Documentation

* * *

- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [The restorepkg Script](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×