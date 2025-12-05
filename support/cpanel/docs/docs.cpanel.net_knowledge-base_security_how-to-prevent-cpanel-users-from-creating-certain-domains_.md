---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/"
title: "How to Prevent cPanel Users from Creating Certain Domains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. How to Prevent cPanel Users from Creating Certain Domains


[domains](https://docs.cpanel.net/tags/domains/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [aliases](https://docs.cpanel.net/tags/aliases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#overview)

* * *

[Add to the list of user-denied domains](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#add-to-the-list-of-user-denied-domains)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#overview)

* * *

[Add to the list of user-denied domains](https://docs.cpanel.net/knowledge-base/security/how-to-prevent-cpanel-users-from-creating-certain-domains/#add-to-the-list-of-user-denied-domains)

* * *

## How to Prevent cPanel Users from Creating Certain Domains

Last modified: _2023 July 27_

* * *

## Overview

cPanel & WHM allows you to deny cPanel users the ability to create certain domains or use certain top-level domains (TLDs). This feature is useful, for example, to deny cPanel users the ability to park a well-known domain (such as `google.com`) on top of a domain.

For more information about the domains that cPanel users can create, read our [Domains](https://docs.cpanel.net/cpanel/domains/domains) documentation.

## Add to the list of user-denied domains

To add to the list of domains that cPanel & WHM does not allow users to create, perform the following steps:

1. From the command line, run the following command to view the default list of domains that cPanel & WHM does not allow users to create.



```perl
cat /usr/local/cpanel/etc/commondomains
```




   - If the file contains a large number of entries, run the `grep 'example.com' /usr/local/cpanel/etc/commondomains` command to determine whether the `example.com` domain exists in the list.

Warning:

Do **not** edit this file directly. System updates overwrite any changes to this file. Instead, follow the next step to create a new file.

2. With a text editor, add the domains and TLDs that you do **not** want to allow users to create to the `/var/cpanel/commondomains` file.
   - Add each domain or TLD on a separate line, and do **not** prepend or append a dot to the domains. For example:





     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>a.com<br>b.com<br>c.com<br>.cat<br>.ninja<br>``` |

   - **Only** add domain names and TLDs to this file (for example, `example.com`). When you list a domain name, cPanel & WHM will automatically prevent the creation of subdomains for that domain or domains under a TLD. For example, if you list the `example.com` domain, users also cannot create the `sub.example.com` domain.
3. In the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_), set the _Prevent cPanel users from creating specific domains_ setting to _On_.


#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [List Parked Domains](https://docs.cpanel.net/whm/account-information/list-parked-domains/)
- [List Subdomains](https://docs.cpanel.net/whm/account-information/list-subdomains/)
- [Park a Domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×