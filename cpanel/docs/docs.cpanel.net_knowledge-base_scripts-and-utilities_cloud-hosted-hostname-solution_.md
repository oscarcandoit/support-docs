---
url: "https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/"
title: "Cloud-Hosted Hostname Solution | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Scripts and Utilities](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/)
4. Cloud-Hosted Hostname Solution


[hostname](https://docs.cpanel.net/tags/hostname/) [license](https://docs.cpanel.net/tags/license/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#overview)

* * *

[The solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#the-solution)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#overview)

* * *

[The solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/#the-solution)

* * *

## Cloud-Hosted Hostname Solution

Last modified: _2025 February 13_

* * *

## Overview

To configure VPS deployments, many cloud hosting providers use the `dhclient` script, which includes the configuration of the instance’s hostname.

The `dhclient` script may not preserve the locally-configured hostname, so hosting providers use scripts to work around this issue. For example, the Google Cloud Platform™ service uses the `google_set_hostname` script.

The workaround scripts may interfere with WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) feature _(WHM » Home » Networking Setup » Change Hostname)_, which causes hostname configuration issues and a locked cPanel & WHM license.

## The solution

To resolve this issue, you **must** create a `dhclient` exit hook script to set the hostname properly.

Create the `zzz-set-hostname` file with the following contents in the `/etc/dhcp/dhclient-exit-hooks.d/` directory, where `hostname.example.com` represents your server’s new hostname:

```
#!/bin/sh
hostname hostname.example.com
/scripts/fixetchosts
```

You can also create the file with the following command, where `hostname.example.com` represents your server’s new hostname:

```
mkdir -p /etc/dhcp/dhclient-exit-hooks.d/ && echo -ne '#!/bin/sh\nhostname hostname.example.com\n/scripts/fixetchosts\n' > /etc/dhcp/dhclient-exit-hooks.d/zzz-set-hostname && chmod +x /etc/dhcp/dhclient-exit-hooks.d/zzz-set-hostname
```

Warning:

Make **certain** that you set the `zzz-set-hostname` file with 0755 permissions. If you don’t perform this action, the script won’t run.

#### Additional Documentation

* * *

- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/)
- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The set\_hostname Utility](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×