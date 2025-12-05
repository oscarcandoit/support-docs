---
url: "https://docs.cpanel.net/whm/the-whm-interface/getting-started/"
title: "Getting Started in WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#main-content)

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
3. [The WHM Interface](https://docs.cpanel.net/whm/the-whm-interface/)
4. Getting Started in WHM


[whmui](https://docs.cpanel.net/tags/whmui/) [interface](https://docs.cpanel.net/tags/interface/) [nameservers](https://docs.cpanel.net/tags/nameservers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#overview)

* * *

[Security warning](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#security-warning)

* * *

[Legal agreements](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#legal-agreements)

* * *

[Trial License](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#trial-license)

* * *

[Contact information and nameservers](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#contact-information-and-nameservers)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#overview)

* * *

[Security warning](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#security-warning)

* * *

[Legal agreements](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#legal-agreements)

* * *

[Trial License](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#trial-license)

* * *

[Contact information and nameservers](https://docs.cpanel.net/whm/the-whm-interface/getting-started/#contact-information-and-nameservers)

* * *

## Getting Started in WHM

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/the-whm-interface/getting-started/)

Last modified: _2025 August 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

When you log in to WHM for the first time on a new cPanel & WHM server, the system will display our legal agreements and some basic configuration steps.

## Security warning

You may see a `There is a problem with this website's security certificate` message when you log in. To resolve this issue, replace the server’s self-signed certificate with a certificate that you purchase from WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_).

If your hosting provider allows it, your server will attempt to install a free hostname certificate from WebPros International, LLC during the installation process. For more information, read our [Automatic SSL Certificate Replacement](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) documentation.

## Legal agreements

When you log in to WHM for the first time on a new cPanel & WHM server, the system prompts you to accept our End User License Agreement (EULA). This agreement provides the terms under which you use WebPros International, LLC’s software. Read the EULA carefully. You **must** accept this agreement to use cPanel & WHM.

- If you click _Cancel and Exit_, the system will log you out of WHM. The EULA prompt will appear the next time you log in to WHM. You will **not** be able to use cPanel & WHM unless you accept the EULA.

- If you select _I have read and agree to all the legal documents listed above._ and then click _Continue_, the system will record that you have accepted the EULA. You will proceed to the next step of the basic configuration process.


Note:

To **revoke** EULA acceptance on an existing server, delete the EULA touch file in the `/var/cpanel/activate/` directory. The touch file will have a name that resembles the following example: `2024-05.v01.GDPR.CPWHMEULA`.

- Once you revoke a server’s EULA acceptance, you will **not** be able to use cPanel & WHM on that server until you accept the EULA again.
- If you have questions about your license agreement, contact [cPanel Customer Service](https://cpanel.net/contact/).

## Trial License

After accepting the EULA, the interface will display a “ _Get Started with a Free cPanel Trial!_” message. For information on activating your license in the [cPanel Store](https://store.cpanel.net/cart/), read our [How to Sign Up for a Trial License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started) document.

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- To activate a new license, you **must** have a cPanel Store account with a verified email address.

## Contact information and nameservers

After you accept the EULA, the system will allow you to specify a contact email address and two nameservers.

Important:

You **must** specify nameservers for the server or you will not be able to create new accounts.

Click _Next_ to proceed to [the WHM interface](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/).

- To view this interface on an existing server, delete the `/etc/.whostmgrft` file.

- You also can update your contact email address and nameservers in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).


Note:

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)
- [Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/)
- [The WHM Interface](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×