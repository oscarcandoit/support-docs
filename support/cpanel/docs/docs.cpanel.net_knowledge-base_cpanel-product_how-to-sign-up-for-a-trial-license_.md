---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/"
title: "How to Sign Up for a Trial License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#main-content)

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
4. How to Sign Up for a Trial License


[license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#overview)

* * *

[Activating during Getting Started](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started)

* * *

[Using the cPanel Products Trial Form](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#using-the-cpanel-products-trial-form)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#overview)

* * *

[Activating during Getting Started](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started)

* * *

[Using the cPanel Products Trial Form](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#using-the-cpanel-products-trial-form)

* * *

## How to Sign Up for a Trial License

Last modified: _2024 March 20_

* * *

## Overview

If you are installing a new instance of cPanel & WHM on to a server, you are eligible for a 15-day trial license. This will allow you a chance to test the product prior to purchasing a full license for your server.

This document explains the two methods for signing up for a trial license.

Note:

For servers on trial licenses, we [collect behavioral data](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/) on the `root` account’s interactions with the WHM interface by default. We collect this data to help us understand how customers use our software during trial periods. We use the gathered information to improve the WHM interface for new users.


## Activating during Getting Started

To sign up for a trial license for cPanel & WHM during the [Getting Started in WHM](https://docs.cpanel.net/whm/the-whm-interface/getting-started/) process within WHM, follow the steps below:

1. After accepting the End User License Agreement, the interface will display a “ _Get Started with a Free cPanel Trial!_” message.

2. Click _Log in_. The [cPanel Store](https://store.cpanel.net/cart/) will appear.

3. Log in to your cPanel Store account. If you do not have one, you can [register for an account](https://store.cpanel.net/register.php).

4. Once successfully logged in, you will be redirected back to the WHM interface. You will see a green check mark next to _Activate Trial License_ if the activation was successful.



Note:




You will receive an email for an order for the 15-day trial license. The license is free and you will not be charged.


5. Your server is now ready to be used. Click _Server Setup_ to finish setting up WHM.



More:





For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.



For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.


## Using the cPanel Products Trial Form

To sign up for a trial license for cPanel & WHM using the trial form, follow the steps below:

1. Visit the [cPanel Products Trial Form](https://cpanel.net/products/trial/).

2. Fill out the form with the following required information:
   - _Email_
   - _Country_
   - _Job title_
3. Click _Submit_. A new interface will appear.

4. Select the _Subscriber consent_ box to consent to receiving email communications. This will allow you to receive the email regarding your free trial license.

5. Select the _I’m not a robot_ box.

6. Click _Submit_. A new interface will appear that states “ _Thanks for signing up!_”.

7. Check your email for an email from _list@info.cpanel.net_ with the subject of _Install Your Free Trial of cPanel & WHM_.



Important:




You must wait for the email to arrive prior to completing the next step.


8. Use SSH to connect to your server and run the following command found in that email:




```bash
cd /home && curl -o latest -L https://securedownloads.cpanel.net/latest && sh latest
```





More:




For more information on how to access SSH, read our [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/) documentation.


9. Your server is now ready to use.



More:





For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.



For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.


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