---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/"
title: "How to Edit the exim.conf File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Edit the exim.conf File


[exim](https://docs.cpanel.net/tags/exim/) [ip](https://docs.cpanel.net/tags/ip/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#overview)

* * *

[Edit the file](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#edit-the-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#overview)

* * *

[Edit the file](https://docs.cpanel.net/knowledge-base/email/how-to-edit-the-exim-conf-file/#edit-the-file)

* * *

## How to Edit the exim.conf File

Last modified: _2024 March 20_

* * *

## Overview

This document describes the final adjustments to change the IP address that Exim uses to send email.

Before you perform this procedure, you **must** follow the directions in our [How to Configure the Exim Outgoing IP Address](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address) documentation.

Warning:

This document describes an unsupported workaround that is **not** guaranteed to work in the future.

- After you perform these steps, it is the system administrator’s responsibility to manage and maintain the server’s database software.
- We recommend that **only** experienced system administrators attempt to perform these steps.
- WebPros International, LLC is **not** responsible for any data loss that this procedure may cause.

## Edit the file

Warning:

- Any edits that you make directly to the `/etc/exim.conf` file will **only** work temporarily.
- Exim stores its default configuration in its override file, `/etc/exim.conf.local`. The system uses the `/etc/exim.conf.local` file to create the `/etc/exim.conf` file upon initialization.
- You **must** use the _Advanced Editor_ feature to make changes to your `/etc/exim.conf.local` file to make those changes permanent.

To edit the `/etc/exim.conf` file, perform the following steps:

1. Open the `/etc/exim.conf` file with a text editor and locate the following lines:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```go<br>remote_smtp:<br>  driver = smtp<br>dkim_remote_smtp:<br>  driver = smtp<br>  <br>``` |

2. Below each `driver = smtp` line, add the following line:


```
connection_max_messages = 1
```

The file will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```go<br>remote_smtp:<br>driver = smtp<br>connection_max_messages = 1<br>interface = ${if exists {/etc/mailips}{${lookup{$original_domain}lsearch{/etc/ma<br>helo_data = ${if exists {/etc/mailhelo}{${lookup{$original_domain}lsearch{/etc/m<br>dkim_remote_smtp:<br>driver = smtp<br>connection_max_messages = 1<br>interface = ${if exists {/etc/mailips}{${lookup{$original_domain}lsearch{/etc/ma<br>helo_data = ${if exists {/etc/mailhelo}{${lookup{$original_domain}lsearch{/etc/m<br>dkim_domain = $sender_address_domain<br>dkim_selector = default<br>dkim_private_key = "/var/cpanel/domain_keys/private/${dkim_domain}"<br>dkim_canon = relaxed<br>``` |

#### Additional Documentation

* * *

- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [The slurp\_exim\_mainlog Script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/)
- [The swapip Script](https://docs.cpanel.net/whm/scripts/the-swapip-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×