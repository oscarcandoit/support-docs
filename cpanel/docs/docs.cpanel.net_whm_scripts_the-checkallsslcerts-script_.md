---
url: "https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/"
title: "The checkallsslcerts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#main-content)

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
4. The checkallsslcerts Script


[ssl](https://docs.cpanel.net/tags/ssl/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#options)

* * *

[The allow-retry options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#the-allow-retry-options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#output)

* * *

[Disable an automatic hostname certificate](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#disable-an-automatic-hostname-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#options)

* * *

[The allow-retry options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#the-allow-retry-options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#output)

* * *

[Disable an automatic hostname certificate](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#disable-an-automatic-hostname-certificate)

* * *

## The checkallsslcerts Script

_Valid for versions 118 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/82/)

#### [112](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/)

#### [118](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)

Last modified: _2025 August 1_

* * *

## Overview

Warning:

We **strongly** recommend that you **only** run this script if cPanel Technical Support advises you to do so.

The system runs the `/usr/local/cpanel/bin/checkallsslcerts` script in the following situations:

- During the nightly cPanel & WHM update (`upcp`) process.
- When you [purchase](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/) or [add](https://docs.cpanel.net/manage2/licenses/add-license/) a cPanel & WHM license.

This script performs the following actions:

- Requests a SSL certificate to replace certificates that meet any of the [automatic replacement conditions](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/).
- Updates the SSL certificate for all cPanel & WHM services.






Note:





- If the automatic replacement conditions are **not** met, or automatic replacement is disabled, the system installs a self-signed SSL certificate instead.
- For more information about SSL certificates, read our [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) and [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) documentation.

## Run the script

Remember:

We **strongly** recommend that you only manually run this script if cPanel Technical Support advises you to do so.

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/checkallsslcerts [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--allow-retry` | If the cPanel Store continues to process the hostname certificate request, then the system checks the cPanel Store again in an hour. For more information about this option, see the [`allow-retry` options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/#the-allow-retry-options) section below. | `--allow-retry` |
| `--verbose` | Run the script in verbose mode. | `--verbose` |

### The allow-retry options

When the system checks the cPanel Store after an hour, it runs the following command:

```bash
/usr/local/cpanel/scripts/try-later --action '/usr/local/cpanel/bin/checkallsslcerts --no-retry' --check '/bin/sh -c exit 1' –delay 60 --max-retries 1 --skip-first
```

If the system must retry the SSL certificate update process, it adds an entry in the `at daemon` (`atd`) job queue. To view, execute, or remove a job from the `atd` queue, use the [`/usr/local/cpanel/scripts/try-later`](https://docs.cpanel.net/whm/scripts/the-try-later-script/) script with one of the following options:

| Option | Description |
| --- | --- |
| `atq` | List all `at` queue jobs. |
| `at -c #` | Display the contents of a specific job. |
| `at -c # | sh` | Manually execute a queued job. |
| `atrm #` | Manually remove a queued job. |

### Output

If this script detects errors when it runs, it sends an email to the system administrator that contains warnings about those errors.

## Disable an automatic hostname certificate

To disable an automatic hostname certificate’s installation, run the following command:

```bash
touch /var/cpanel/ssl/disable_auto_hostname_certificate
```

To disable the automatic replacement of all expired service certificates and disable notifications about expired or expiring service certificates, run the following command:

```bash
touch /var/cpanel/ssl/disable_service_certificate_management
```

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The set-tls-settings Script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×