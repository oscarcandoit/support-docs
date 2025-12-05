---
url: "https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/"
title: "The enable_spf_dkim_globally Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#main-content)

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
4. The enable\_spf\_dkim\_globally Script


[spf](https://docs.cpanel.net/tags/spf/) [dkim](https://docs.cpanel.net/tags/dkim/) [dns](https://docs.cpanel.net/tags/dns/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/#options)

* * *

## The enable\_spf\_dkim\_globally Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)

Last modified: _2021 February 9_

* * *

## Overview

This script enables SPF and DKIM system-wide. It also creates the appropriate DNS records for all users’ domains. If the system detects that a DKIM record exists for a domain, it will not update it. If it detects that an SPF record exists for a domain, it will update it.

Important:

You **must** run this script as a `root`-level user.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/enable_spf_dkim_globally [options]
```

### Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `-x` | **Required.**<br> Use this option to run the script. <br>Important:<br>If you do **not** use this option, the script dies with a warning message. | `-x` |
| `--user` | Specify an account for which to enable SPF and DKIM. The system will also create the DNS record for the user’s domain. <br>Note:<br>To run this script for multiple users, use this option multiple times. For example, `--user=user1 --user=user2`. | `--user=username` |

Important:

The `--help` option will **not** provide help documentation.

#### Additional Documentation

* * *

- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The spf\_installer Script](https://docs.cpanel.net/whm/scripts/the-spf_installer-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×