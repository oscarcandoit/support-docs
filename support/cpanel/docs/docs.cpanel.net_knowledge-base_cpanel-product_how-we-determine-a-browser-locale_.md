---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/"
title: "How We Determine a Browser Locale | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#main-content)

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
4. How We Determine a Browser Locale


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [locales](https://docs.cpanel.net/tags/locales/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#overview)

* * *

[cpsrvd service checks](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#cpsrvd-service-checks)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#overview)

* * *

[cpsrvd service checks](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/#cpsrvd-service-checks)

* * *

## How We Determine a Browser Locale

Last modified: _2024 October 4_

* * *

## Overview

cPanel & WHM provides localized login page that allows users to select a locale for their session. Several factors determine the locale that you see [when you log in to cPanel, WHM, or Webmail](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account).

## cpsrvd service checks

When you log in to the cPanel, WHM, or Webmail interface, the `cpsrvd` service uses the following process to determine which locale to display:

1. The `cpsrvd` service checks whether a locale query string parameter exists in the URL. If it does, the browser sets the `session_locale` cookie to the same value.

   - For example, the `https://example.com:2083/login?locale=ru` URL sets the Russian locale in the cPanel interface.
   - The `session_locale` cookie overrides the account’s configured locale and is valid for one year.
2. The `cpsrvd` service checks whether your browser already contains the `session_locale` cookie. If it does, the login interface and the rest of the user’s session uses the specified locale.
3. If the URL does not specify a locale query string and the browser does not have a `session_locale` cookie, the `cpsrvd` service checks whether your browser sent an `Accept-Language` header. If it did, the `cpsrvd` service uses the first valid locale that corresponds to the value of the `Accept-Language` header.






Note:





Some browsers don’t allow the `Accept-Language` header.

4. If none of the above steps were able to set a language, the login system uses the _Server Locale_ setting’s value in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

   - cPanel & WHM stores this setting in the `/var/cpanel/cpanel.config` file as the `server_locale` variable.
   - You can customize the language that the system uses to display a customer’s preferred locale in WHM’s [_Configure Application Locales_](https://docs.cpanel.net/whm/locales/configure-application-locales) interface ( _WHM » Home » Locales » Configure Application Locales_).
5. If your system does not meet **any** of the above conditions, the login system uses the U.S. English locale (`en`) by default.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×