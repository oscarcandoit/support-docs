---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/"
title: "How to Fix License File Errors | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. How to Fix License File Errors


[license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#overview)

* * *

[Troubleshoot license errors](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#troubleshoot-license-errors)

* * *

[Verify your license IP address](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#verify-your-license-ip-address)

* * *

[Check for connectivity issues](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-for-connectivity-issues)

* * *

[Check resolving and hostname](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-resolving-and-hostname)

* * *

[Check the server time and date settings](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-the-server-time-and-date-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#overview)

* * *

[Troubleshoot license errors](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#troubleshoot-license-errors)

* * *

[Verify your license IP address](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#verify-your-license-ip-address)

* * *

[Check for connectivity issues](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-for-connectivity-issues)

* * *

[Check resolving and hostname](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-resolving-and-hostname)

* * *

[Check the server time and date settings](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/#check-the-server-time-and-date-settings)

* * *

## How to Fix License File Errors

Last modified: _2024 February 22_

* * *

## Overview

In some circumstances, you may see a license-related error message on your cPanel & WHM server (for example, `License File Expired` or `Cannot Read License File`). Use the steps in this guide to troubleshoot and fix this problem.

If the steps in this document do not resolve the problem, open a ticket with [cPanel Customer Service](https://tickets.cpanel.net/) for further assistance.

## Troubleshoot license errors

Use the following procedures to troubleshoot your license errors:

### Verify your license IP address

In most cases, the system returns these errors because of an invalid or expired license. To check whether your license is invalid or expired, perform the following steps:

1. Run either of the following commands to obtain your license’s IP address:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>curl -w '\n' -s http://myip.cpanel.net/v1.0/<br>curl -w '\n' -s http://myip.cpanel.net:2089/v1.0/<br>``` |

2. Navigate to the [cPanel License Verification](https://verify.cpanel.net/app/verify) page.






Note:





The License Verification page lists licenses for cPanel & WHM and other products separately. The list sorts each license from newest to oldest. For example, you may see `COMPANYNAME-INTERNAL` and `COMPANY-CLOUDLINUX-INTERNAL-WITH-CPANEL` in the _Package_ column, where `COMPANYNAME` represents the name of the partner that issued the license. This example indicates that your server possesses a cPanel license and a CloudLinux license that you purchased through WebPros International, LLC. Your CloudLinux license may report an _active_ status while your cPanel license reports as expired.

3. Enter the IP address that you obtained in Step 1. Our website will display the status of your license.
   - If the most recent license for a product has an expired status, renew your license through the [cPanel Store](https://store.cpanel.net/cart/) or open a ticket with [cPanel Customer Service](https://tickets.cpanel.net/) for further assistance.
   - If no valid licenses exist for your IP address, open a ticket with [cPanel Customer Service](https://tickets.cpanel.net/) for further assistance.

### Check for connectivity issues

If your IP address is already licensed and you still experience problems, run the following script as the `root` user to verify your license:

```bash
/usr/local/cpanel/cpkeyclt
```

If your license works properly, the script will **not** return a message. If the script requires more than a few seconds to run, your server may have encountered connectivity issues.

### Check resolving and hostname

To check whether you can resolve our servers, run the following command:

```bash
host auth.cpanel.net
```

Additionally, ensure that your hostname is valid. For more information about the requirements for valid hostnames, read RFCs [952](https://tools.ietf.org/html/rfc952) and [1123](https://tools.ietf.org/html/rfc1123).

### Check the server time and date settings

Ensure that the time and date of the server are not set too far in the future or past. To do this, run the `date` command on the command line. If the system returns an incorrect time or date, reset it. For information on how to update the server’s date and time, read the [Linux `date` manual entry](https://linux.die.net/man/1/date).

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [Onboarding Assistant](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The Quota File Systems Configuration File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-quota-file-systems-configuration-file/)
- [Third-Party Applications Updates](https://docs.cpanel.net/knowledge-base/cpanel-product/third-party-applications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×