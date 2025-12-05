---
url: "https://docs.cpanel.net/knowledge-base/security/the-failurls-file/"
title: "The failurls File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#main-content)

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
4. The failurls File


[authentication](https://docs.cpanel.net/tags/authentication/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#requirements)

* * *

[Restart cPanel](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#restart-cpanel)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#requirements)

* * *

[Restart cPanel](https://docs.cpanel.net/knowledge-base/security/the-failurls-file/#restart-cpanel)

* * *

## The failurls File

Last modified: _2022 July 19_

* * *

## Overview

If a user fails to authenticate with cPanel through [a custom login form](https://api.docs.cpanel.net/guides/quickstart-development-guide/tutorial-create-custom-branded-login-pages/), the `/var/cpanel/failurls` file allows a reseller to redirect that user to a custom error page.

## Requirements

Make certain that your entries in the `failurls` file meet the following requirements:

- Each entry **must** be on a separate line.
- Each entry **must** be a static URL.
- For example: `http://example.com/index.php?failed=1` is not a valid entry because it is a dynamic URL.
- The login page **must** pass dynamic content via hidden `POST` variables. `GET` query strings will fail because they will not match any entry in the `failurls` file.
- For example: `<input type="hidden" name="failurl" value=" http://example.com/failed.html " />` is a valid hidden `POST` variable.
- The failurl value in the custom login form **must** match one of the entries in the `failurls` file.
- For example: `http://example.com/failed.html` in the `failurls` file matches the `<input type="hidden" name="failurl" value=" http://example.com/failed.html " />` hidden `POST` variable.

## Restart cPanel

After you create the entries in the `failurls` file, use the following command as the `root` user to restart cPanel:

```
/usr/local/cpanel/startup
```

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [The convert\_accesshash\_to\_token Script](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×