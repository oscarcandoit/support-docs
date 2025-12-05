---
url: "https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/"
title: "The checkallsslcerts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#main-content)

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

[Overview](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#overview)

* * *

[What the script does](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#what-the-script-does)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#options)

* * *

[The allow-retry options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#the-allow-retry-options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#output)

* * *

[Disable a cPanel-signed hostname certificate](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#disable-a-cpanel-signed-hostname-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#overview)

* * *

[What the script does](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#what-the-script-does)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#options)

* * *

[The allow-retry options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#the-allow-retry-options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#output)

* * *

[Disable a cPanel-signed hostname certificate](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#disable-a-cpanel-signed-hostname-certificate)

* * *

## The checkallsslcerts Script

_Valid for versions 112 through 116_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/82/)

#### [112](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/)

#### [118](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)

Last modified: _2023 October 20_

* * *

## Overview

Warning:

We **strongly** recommend that you **only** run this script if cPanel Technical Support advises you to do so.

The system runs the `/usr/local/cpanel/bin/checkallsslcerts` script in the following situations:

- During the nightly cPanel & WHM update (`upcp`) process.
- When you [purchase](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/) or [add](https://docs.cpanel.net/manage2/licenses/add-license/) a cPanel & WHM license.

This script performs the following actions:

- Requests a Sectigo-signed SSL certificate to replace certificates that meet any of the following conditions:
  - It maintains a weak signature algorithm.
  - It has been revoked.
  - It does **not** have a Subject Alternative Name (SAN) extension.
  - It does **not** have an Extended Key Usage (EKU) extension with the Server Authentication value.
  - It is self-signed.
  - It is invalid (for example, your server’s hostname must be valid and resolve in DNS).
  - It will expire soon, based on the following criteria:
    - cPanel-provided certificates that expire in less than 25 days.
    - Certificates issued by any other provider that expire in less than 3 days.
- Updates the SSL certificate for all cPanel & WHM services.






Note:





- If any of the above is not true, the system installs a self-signed SSL certificate instead.
- For more information about SSL certificates, read our [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) and [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) documentation.

### What the script does

When the `/usr/local/cpanel/bin/checkallsslcerts` script runs, the system performs the following steps:

1. The system creates a Domain Control Validation (DCV) file, which resembles the following example:



```bash
4221C402112E4831C72C2E004614C47C.txt
```





Note:





Systems that use EasyApache 4 store this file in the `/var/www/html/.well-known/pki-validation` directory.

2. The system performs a DNS lookup for the hostname’s IP address on the root nameservers.






Note:





If the hostname returns multiple IP addresses, the system will use the first IP address.

3. The system uses the hostname’s IP address to confirm that it can access the Domain Control Validation (DCV) file.
   - For cPanel & WHM servers, the script uses HTTP validation of the DCV file.
   - For cPanel DNSOnly® servers, the script uses DNS validation against a DNS `TXT` record.
4. When the local DCV check passes, the system sends a request to the cPanel Store API for the new SSL certificate.
   - If a valid SSL certificate exists and matches the DCV file, the system does not perform any action.
   - If the system must issue a new SSL certificate, the system sends a request to Sectigo.
   - Sectigo validates the DCV file from the following IP addresses:





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>178.255.81.12<br>178.255.81.13<br>91.199.212.132<br>199.66.201.132<br>``` |







     Important:





     Sectigo uses these IP addresses to attempt to access the cPanel server. You **must** allow these IPs in the server firewall. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.
5. The system logs the Sectigo requests for HTTP DCV in the `/etc/apache2/logs/access` file. It also contains user agent strings that show who accesses the DCV file. These user agent strings resemble the following examples:

   - cPanel user agent strings





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>``` | ```bash<br>192.0.2.0 - - [16/Jun/2016:16:16:16 -0500]  "GET /4221C402112E4831C72C2E004614C47C.txt HTTP/1.1" 200 53  "-" "Cpanel-HTTP-Client/1.0"<br>192.0.2.0 - - [16/Jun/2016:16:16:16 -0500]  "GET /4221C402112E4831C72C2E004614C47C.txt HTTP/1.1" 200 53  "-" "Cpanel-HTTP-Client/1.0"<br>``` |

   - Sectigo user agent strings





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>``` | ```bash<br>199.66.201.132 - - [16/Jun/2016:16:18:46 +0000]  "GET /4F571E4CB76F46E37B8118CEA1DB42BA.txt HTTP/1.1" 200 53  "-" "SECTIGO DCV"<br>199.66.201.132 - - [16/May/2016:16:18:46 +0000]  "GET /4F571E4CB76F46E37B8118CEA1DB42BA.txt HTTP/1.1" 200 53  "-" "SECTIGO DCV"<br>``` |

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
| `--allow-retry` | If the cPanel Store continues to process the hostname certificate request, then the system checks the cPanel Store again in an hour. For more information about this option, see the [`allow-retry` options](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/112/#the-allow-retry-options) section below. | `--allow-retry` |
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

## Disable a cPanel-signed hostname certificate

To disable a cPanel-signed hostname certificate’s installation, run the following command:

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
- [The checkallsslcerts Script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)
- [The set-tls-settings Script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×