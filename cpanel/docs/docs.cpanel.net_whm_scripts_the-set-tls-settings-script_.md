---
url: "https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/"
title: "The set-tls-settings Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#main-content)

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
4. The set-tls-settings Script


[ssl](https://docs.cpanel.net/tags/ssl/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#options)

* * *

## The set-tls-settings Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/bin/set-tls-settings` script configures a server’s Secure Socket Layer (SSL) and Transport Layer Security (TLS) cipher suites and protocols for the following services:

- Web Disk (`cpdavd`).

- The cPanel server (`cpsrvd`).

- The Dovecot mail server (`dovecot`).

- Exim configuration settings (`exim`).


For more information about these services, read our [Service Manager](https://docs.cpanel.net/whm/service-configuration/service-manager/) documentation.

## Run the script

To run the `/usr/local/cpanel/bin/set-tls-settings` script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/set-tls-settings [options]
```

### Options

This script accepts the following options:

| Option | Description | Example |
| --- | --- | --- |
| `--if-missing` | Configure the SSL/TLS protocols if they do not currently exist on the server. | `--if-missing` |
| `--cipher-suites` | A standard OpenSSL cipher suite string. <br>Note:<br>For more information about cipher suites available to OpenSSL, read [OpenSSL’s Ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) documentation. | [Click to view...](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/#click-to-view---1764175700732354352)<br>`--cipher-suites=ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256` |
| `--protocols` | A colon-separated list of SSL/TLS protocols. This option accepts the following protocols:<br>- `SSLv2`<br>- `SSLv3`<br>- `TLSv1`<br>- `TLSv1.1`<br>- `TLSv1.2` | `--protocols=SSLv3:TLSv1.2` |
| `service` | The service for which to set SSL/TLS protocols. This option accepts the following services:<br>- `cpdavd`<br>- `cpsrvd`<br>- `dovecot`<br>- `exim`<br>Important:<br>Pass the `--all` option to set the SSL/TLS protocols for **all** of this option’s services. | `dovecot` |
| `--restart` | Restart the specified services to apply the changes. If you do **not** pass this option, the script sets the configuration parameters and rebuilds the configuration files. Changes to the services may not display until after a restart. <br>Note:<br>- This option \*\*requires\*\* you pass a \`service\` option.<br>- This option restarts \*\*all\*\* services when you pass the \`service\` option's \`--all\` option. | `--restart` |
| `--verbose` | Run the script in verbose mode. | `--verbose` |

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The checkallsslcerts Script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×