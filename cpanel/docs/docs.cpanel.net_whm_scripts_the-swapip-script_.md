---
url: "https://docs.cpanel.net/whm/scripts/the-swapip-script/"
title: "The swapip Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-swapip-script/#main-content)

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
4. The swapip Script


[ip](https://docs.cpanel.net/tags/ip/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-swapip-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-swapip-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-swapip-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-swapip-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-swapip-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-swapip-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-swapip-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-swapip-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-swapip-script/#example)

* * *

## The swapip Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-swapip-script/)

Last modified: _2021 January 25_

* * *

## Overview

Use this script to update a domain’s IP address in the zone file. It will update the domain’s source IP address with the destination server’s IP address.

This script is useful for cPanel account transfers. When you transfer an account to a new server, you **must** update the account’s DNS records to match. You should also use this script if you did **not** select the _Express Transfer_ option in WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_).

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/bin/swapip [sourceip] [destip] [ftpip] [domains]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `sourceip` | **Required.**<br> The source IP address. This is the original IP address that you want to change a DNS record from. | `10.0.0.0` |
| `destip` | **Required.**<br> The destination IP address. This is the IP address that you want to update a DNS record to. | `172.16.0.0` |
| `ftpip` | **Required.**<br> The destination server’s FTP IP address. | `172.16.0.0` |
| `domains` | **Required.**<br> The associated domain name. For multiple domains, separate each with a comma. <br>Important:<br>You **must** pass this option **last**. | `example.com` |

Note:

The `--help` option will **not** provide help documentation. Instead, the script will return an error message.

### Example

The following example changes the IP address (A record) in the DNS zone file for the `example.com` domain. It uses the `10.0.0.0` IPv4 address to point HTTP and FTP requests to the `172.16.0.0` IPv4 address:

```bash
/usr/local/cpanel/bin/swapip 10.0.0.0 172.16.0.0 172.16.0.0 example.com
```

If the script succeeds, the output will look like the following:

```bash
The system updated “1” entry.
```

If the script fails, it returns an error message that looks like the following:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Error: domains missing<br>Usage: /usr/local/cpanel/bin/swapip sourceip destip ftpip domains...<br>``` |

Note:

The error message may not return an accurate assessment of the error that occurs.

#### Additional Documentation

* * *

- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×