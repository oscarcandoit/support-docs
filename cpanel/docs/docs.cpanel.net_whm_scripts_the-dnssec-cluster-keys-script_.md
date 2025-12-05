---
url: "https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/"
title: "The dnssec-cluster-keys Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#main-content)

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
4. The dnssec-cluster-keys Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/#example)

* * *

## The dnssec-cluster-keys Script

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)

Last modified: _2020 May 15_

* * *

## Overview

The `/usr/local/cpanel/scripts/dnssec-cluster-keys` script syncs and revokes currently active DNSSEC keys in a DNS cluster. This is useful, for example, to sync DNSSEC keys in a DNS cluster if they don’t sync properly.

To run this script:

- You **must** possess `root`-level privileges.

- You **must** use PowerDNS as your nameserver.

- You **must** enable DNS clustering in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_). For more information about DNSSEC in cPanel & WHM, read our [DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/) documentation.


## Run the script

To run the script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/dnssec-cluster-keys [options]
```

### Options

You can use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--sync` | Sync DNSSEC keys to the DNS cluster. Pass this option without the `--tag` option to sync all currently active DNSSEC keys on your server. <br>Note:<br>You **must** pass either the `--sync` flag or the `--revoke` flag, but **not** both. | `--sync` |
| `--revoke` | Revoke DNSSEC keys from the cluster <br>Note:<br>You **must** pass either the `--sync` flag or the `--revoke` flag, but **not** both. | `--revoke` |
| `--zone` | The DNS Zone on which to perform the action. <br>Note:<br>This option is required. | `--zone=example.com` |
| `--tag` | The DNSSEC key to sync. Pass this option multiple times to sync or revoke multiple DNSSEC keys <br>Note:<br>This option is required if you pass the `--revoke` option. | `--tag=46547` |
| `--nolocal` | Do not perform the actions on your local DNS server. This is useful, for example, if you revoke a DNSSEC key but want to keep the key on your local DNS server. | `--nolocal` |

## Example

To sync two active DNSSEC keys to the `example.com` DNS zone, run the following script as the `root` user:

```bash
/usr/local/cpanel/scripts/dnssec-cluster-keys --sync --zone=example.com --tag=46547 --tag=31016
```

If this script succeeds, it won’t return output.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×