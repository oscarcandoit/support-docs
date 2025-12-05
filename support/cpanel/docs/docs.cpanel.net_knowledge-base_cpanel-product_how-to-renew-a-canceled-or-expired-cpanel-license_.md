---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/"
title: "How to Renew a Canceled or Expired cPanel License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#main-content)

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
4. How to Renew a Canceled or Expired cPanel License


[license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#overview)

* * *

[Renew a canceled or expired cPanel license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#renew-a-canceled-or-expired-cpanel-license)

* * *

[Licenses that expired less than 30 days ago](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#licenses-that-expired-less-than-30-days-ago)

* * *

[Licenses that are canceled or expired more than 30 days ago](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#licenses-that-are-canceled-or-expired-more-than-30-days-ago)

* * *

[Final steps](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#final-steps)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#overview)

* * *

[Renew a canceled or expired cPanel license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#renew-a-canceled-or-expired-cpanel-license)

* * *

[Licenses that expired less than 30 days ago](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#licenses-that-expired-less-than-30-days-ago)

* * *

[Licenses that are canceled or expired more than 30 days ago](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#licenses-that-are-canceled-or-expired-more-than-30-days-ago)

* * *

[Final steps](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-renew-a-canceled-or-expired-cpanel-license/#final-steps)

* * *

## How to Renew a Canceled or Expired cPanel License

Last modified: _2025 May 29_

* * *

## Overview

This document describes how to renew a canceled or expired cPanel license in the [cPanel Store](https://store.cpanel.net/).

## Renew a canceled or expired cPanel license

You can renew a canceled or expired cPanel license in the cPanel Store’s [_Manage Licenses_](https://store.cpanel.net/clientarea.php?action=services) interface.

Note:

Before renewing a canceled or expired cPanel license, you **must** log in to your cPanel Store account.

### Licenses that expired less than 30 days ago

If your license expired or was canceled **less** than 30 days ago, you can renew it by paying the existing invoice in your account.

To renew a canceled or expired cPanel license in the [_Manage Licenses_](https://store.cpanel.net/clientarea.php?action=services) interface, perform the following steps:

1. If the license is eligible for renewal, you will see a pending invoice when you log in to your cPanel Store account.
2. Click _Pay Now_ next to the invoice you want to pay.
3. Select your method of payment.
4. The payment will process and your license will automatically reactivate.

### Licenses that are canceled or expired more than 30 days ago

If your license expired **more** than 30 days ago, you must purchase a new license.

To purchase a new cPanel license from the [_cPanel Store_](https://store.cpanel.net/), perform the following steps:

1. Select _Order New Services_ in the _Orders/Licenses_ menu. The _cPanel Licenses_ interface will appear.
2. Locate the license type that you wish to purchase and click _Order Now_. The _Configure_ interface will appear.
3. Enter the IP address for your license in the _IP Address_ text box and select any addons that you want. The page will verify the IP address.
4. Click _Continue_. The _Review & Checkout_ interface will appear.
5. Review your order and click _Checkout_ to continue. The _Checkout_ interface will appear.
6. Select the account that you want to use to purchase the license. You can select either the current user or create a new account.
7. Accept the terms and conditions of the EULA.






Important:





Before you can complete the purchase process, you **must** accept WebPros International, LLC’s legal agreements.

8. Select your preferred method of payment and enter your payment details.
9. Click _Complete Order_. The _Order Confirmation_ interface will appear and display your order number. The cPanel Store will also send a copy of the invoice to your email address.

## Final steps

Your cPanel license will activate immediately when you purchase or renew it.

If your access to a renewed account is not restored immediately, log into your server via SSH and run the following command as the `root` user to verify your license:

```
/usr/local/cpanel/cpkeyclt
```

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