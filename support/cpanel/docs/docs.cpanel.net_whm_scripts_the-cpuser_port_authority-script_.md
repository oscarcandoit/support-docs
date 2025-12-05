---
url: "https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/"
title: "The cpuser_port_authority Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#main-content)

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
4. The cpuser\_port\_authority Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ports](https://docs.cpanel.net/tags/ports/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/#options)

* * *

## The cpuser\_port\_authority Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `cpuser_port_authority` script assigns one or more 5-digit port numbers for a user’s exclusive use. These five-digit port numbers use the range of `10000` to `65535`. They exclude any [ephemeral ports](https://en.wikipedia.org/wiki/Ephemeral_port) and passive ports.

Important:

- You **must** possess `root` user access to use this script.
- You **must** use `iptables` to enforce port ownership. If you use `firewalld`, the system does **not** currently enforce port ownership.

## Run the script

To run this script on the command line, use the following format:

```
/usr/local/cpanel/scripts/cpuser_port_authority [argument] [options]
```

### Options

Use the following options with this script:

Note:

- This script saves port assignments to the `/etc/cpanel/cpuser_port_authority.json` file.
- In the following table, `user` represents a username, `amount` represents the number of ports, `port-number` represents a specific five-digit port number, and `my_app` represents an application.

| Options | Description | Example |
| --- | --- | --- |
| `give [user] [amount] [--service=my_app]`<br>Note:<br>The `--service` option assigns the requested port numbers to a specific service. | Assign a user one or more ports. | `/usr/local/cpanel/scripts/cpuser_port_authority give exampleuser 3 --service=store` |
| `take [user] [port-number]`<br>Note:<br>You can pass the `port-number` argument multiple times to remove several ports numbers. | Remove a port from a user’s assignments. <br>Note:<br>If you attempt to remove a port that does not belong to the specified user, then the function will fail. | `/usr/local/cpanel/scripts/cpuser_port_authority take exampleuser 12345` |
| `fw` | Update the firewall rules to match port assignments and restart the firewall. | `/usr/local/cpanel/scripts/cpuser_port_authority fw` |
| `list [user]` | Display the ports assigned to a user. | `/usr/local/cpanel/scripts/cpuser_port_authority list exampleuser` |
| `user remove [user]` | Remove a user’s assigned ports. | `/usr/local/cpanel/scripts/cpuser_port_authority user remove exampleuser` |
| `user change [olduser] [newuser]` | Change the ownership of one user’s ports to another user. | `/usr/local/cpanel/scripts/cpuser_port_authority user change exampleuser currentuser` |
| `hint [argument]` | Display the abbreviated help information. <br>Note:<br>The `argument` is optional. If you specify an argument, **only** that argument’s abbreviated help information will display. | `/usr/local/cpanel/scripts/cpuser_port_authority hint list` |
| `help [argument]` | Display the script’s help information. <br>Note:<br>The `argument` is optional. If you specify an argument, **only** that argument’s help information will display. | `/usr/local/cpanel/scripts/cpuser_port_authority help list` |

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