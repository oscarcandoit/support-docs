---
url: "https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/"
title: "The snapshot_prep Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#main-content)

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
4. The snapshot\_prep Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [images](https://docs.cpanel.net/tags/images/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#options)

* * *

[Create a third-party plugin](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#create-a-third-party-plugin)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#options)

* * *

[Create a third-party plugin](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#create-a-third-party-plugin)

* * *

## The snapshot\_prep Script

_Valid for versions 106 through 118_

#### Version:

#### [106](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/)

#### [120](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/)

Last modified: _2024 March 27_

* * *

## Overview

The `/usr/local/cpanel/scripts/snapshot_prep` script prepares your server to create a deployment image.

This script does not support all server configurations. The script checks your server for some, but not all, unsupported configurations. The script will exit early if any of the following exist on your server:

- [API Tokens](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#api-token).
- A [backup](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#backup) of the server, or a directory for backups.
- [Two-factor authentication](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#two-factor-authentication-2fa) enabled for the `root` user.
- Links to another server through a [cluster](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cluster) or a [linked node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#linked-node).
- One or more configured contacts in `/etc/wwwacct.conf` or `/etc/wwwacct.conf.shadow`.
- A remote MySQL® profile set up in WHM’s [_Manage MySQL Profiles_](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles) interface ( _WHM » SQL Services » Manage MySQL Profiles_).

This is **not** an exhaustive list of unsupported configurations, and we do **not** maintain a list of unsupported configurations. For more information about setting up virtualization templates, read our [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates) documentation.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/snapshot_prep [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--no-post-service` | Do not install the on-first-boot service. You must manually run the [`post_snapshot` script](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script) on the first boot of an instance created from an image. | `--no-post-service` |
| `--list-tasks` | Return a list of tasks that the script will perform. | `--list-tasks` |
| `--skip` | A comma-delimited list of tasks to skip. <br>Note:<br>- We **strongly** recommend that you do **not** use the `--skip` option. Skipping tasks can cause unpredictable behavior on your server.<br>- You cannot combine the `--skip` and `--only` options. | `--skip=mysql,license` |
| `--only` | A comma-delimited list of tasks to perform, skipping all other tasks. <br>Note:<br>- We **strongly** recommend that you do **not** use the `--only` option. Skipping tasks can cause unpredictable behavior on your server.<br>- You cannot combine the `--skip` and `--only` options. | `--only=license` |
| `--instance-packages` | Include a comma-delimited list of packages to install on the first boot of instances created from an image. Use this option for packages that generate per-instance data during installation. When you use this option, you avoid saving per-instance data to your deployment image. | `--instance-packages=cpanel-ccs-calendarserver,cpanel-z-push` |
| `--delete-saved-copies` | Delete backup copies of configuration files. The `snapshot_prep` script automatically saves these copies to your server. If you do not delete the copies, they will also exist on any images created from the server. | `--delete-saved-copies` |
| `--help` | Display the script’s help documentation. | `--help` |

## Create a third-party plugin

If you maintain third-party software for cPanel & WHM servers, you can provide a plugin for your users to run with the `snapshot_prep` script. By using your plugin, users can run additional tasks when preparing their servers to create deployment images. For example, imagine your software includes a unique access token. You want each instance created from an image to have its own unique token. In this case, we recommend creating a third-party plugin that adds a task to perform the following:

- Clean the token when a user runs the `snapshot_prep` script so that the token is not included in the image.

- Generate a new token upon the first boot of instances created from the image.


Important:

cPanel & WHM does not create third-party plugins for the `snapshot_prep` script.

This script uses a dependency system. The following tasks are dependencies for all third-party plugins. You cannot remove these dependencies:

- `ipaddr_and_hostname`
- `mysql`
- `cpwhm_misc`

For a description of these tasks, as well as all other tasks in this script, use the [`--list-tasks`](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/106/#options) option.

The `snapshot_prep` script uses `.json` files to point to a third-party plugin script. Before a plugin can run, your software must install a `.json` file in the `/var/cpanel/snapshot_prep.d` directory on your user’s server.

The `.json` file must use the following format:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>{<br>  "name": "exampleplugin",<br>  "type": "non-repair only",<br>  "pre": ["/var/cpanel/exampleplugin.py", "--before"],<br>  "post": ["/var/cpanel/exampleplugin.py", "--after"],<br>  "description": "Perform a task.\n"<br>}<br>``` |

The `.json` file includes the following options:

| Item | Description |
| --- | --- |
| `name` | The name of the file, excluding the `.json` suffix. For example, if the file is named `example.json`, write `example` in the `name` field. <br>Note:<br>The file name can only include letters, numbers, and underscores. |
| `type` | The type **must** be `non-repair only`. |
| `pre` | An executable file and any additional arguments. |
| `post` | An executable file and any additional arguments. |
| `description` | A description of what the plugin does. |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The post\_snapshot Script](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/)
- [The snapshot\_prep Script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×