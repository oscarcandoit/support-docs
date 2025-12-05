---
url: "https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/"
title: "The find_outdated_services Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#main-content)

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
4. The find\_outdated\_services Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#options)

* * *

[The ignore\_outdated\_services file](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#the-ignoreoutdatedservices-file)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#options)

* * *

[The ignore\_outdated\_services file](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#the-ignoreoutdatedservices-file)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/#example)

* * *

## The find\_outdated\_services Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)

Last modified: _2022 August 3_

* * *

## Overview

After a system update, cPanel & WHM runs the `/usr/local/cpanel/scripts/find_outdated_services` script. This script checks all services to determine whether they require a restart. An outdated service is any service that depends on a library that is no longer present on the system.

Important:

This script ignores the following services:

- `auditd`
- `dbus`
- `exim-altport`
- `imap`
- `network`
- `NetworkManager`
- `pop`
- `syslogd`
- `tomcat`

The script ignores the `imap` and `pop` services because the Dovecot `lmtp` service handles them.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/find_outdated_services [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--always-restart` | The script locates and restarts any outdated services. By default, the script prompts you to restart outdated services. | `--always-restart` |
| `--never-restart` | The script locates any outdated services but will **not** restart them. | `--never-restart` |
| `--auto` | By default, the script uses this option when it runs as part of the `/usr/local/cpanel/scripts/maintenance` script. It will locate and restart any outdated services. If the `/var/cpanel/disabled/auto-restart-services` touchfile exists, the system will **not** restart any outdated services. | `--auto` |

## The ignore\_outdated\_services file

This script uses the `/etc/cpanel/local/ignore_outdated_services` file to exclude certain services from the script’s check. To exclude a service from this script, add it to the file.

Important:

The script does **not** apply this exclusion list to the `chkservd` or `restartsrv` services.

The `/etc/cpanel/local/ignore_outdated_services` file uses the following format:

- Use the pound character (`#`) at the beginning of a line to mark it as a comment.
- Enter only one service per line.






Note:





The service name **must** match its name as it appears in the process table. Use the [`ps` command](https://en.wikipedia.org/wiki/Ps_(Unix)) with the necessary flags to list processes (for example, `ps -aux`).

- Use Unix line endings (`\n`) to separate service entries.
- The system skips blank lines.

### Example

To block the `cloud-init` and `cloud-final` services from restart checks, create the `/etc/cpanel/local` directory:

```bash
mkdir -p /etc/cpanel/local
```

Next, create the `/etc/cpanel/local/ignore_outdated_services` file and add the `cloud-init` and `cloud-final` services with the following command:

```bash
echo -e "# Prevent cPanel from checking the cloud-init and cloud-final services\ncloud-init\ncloud-final" >> /etc/cpanel/local/ignore_outdated_services
```

The file’s contents will resemble the following:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br># Prevent cPanel from checking about the cloud-init service<br>cloud-init<br>cloud-final<br>``` |

#### Additional Documentation

* * *

- [The is\_script\_stuck Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)
- [The restartsrv Script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×