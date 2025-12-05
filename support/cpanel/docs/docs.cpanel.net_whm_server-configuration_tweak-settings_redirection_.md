---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/"
title: "Tweak Settings — Redirection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Tweak Settings — Redirection


[server](https://docs.cpanel.net/tags/server/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/#installation-toggle)

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

## Tweak Settings — Redirection

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for versions 124 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)

Last modified: _2024 October 16_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

This section allows you to configure the SSL and non-SSL redirects for the cPanel, WHM, and Webmail services. This affects the URL the users see when they access the services.

The _Redirection_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Choose the closest matched domain for which that the system has a valid certificate when redirecting from non-SSL to SSL URLs. Formerly known as “Always redirect to SSL/TLS”_ | This setting allows you to redirect users to the proper SSL/TLS ports when they visit specific URLs. The system will redirect users who navigate to the `/cpanel`, `/webmail`, or `/whm` paths to the appropriate port.<br>- For example, when a user accesses `www.example.com/cpanel`, the system will redirect them to `www.example.com:2083`.<br>- The system will **not** redirect users if they enter the corresponding subdomain (for example, `cpanel.example.com`).<br>- The _Require SSL_ setting forces SSL direction by default. We recommend that you do **not** change this setting.<br>If you enable this setting, the system attempts to redirect in the following order:<br>1. Redirect to the _Origin Domain Name_ location if an installed certificate secures that domain.<br>2. Redirect to a wildcard domain that matches the name on the main service certificate.<br>3. If no domain matches the domains on any certificate, redirect to the `https://` protocol for the domain.<br>If you disable this option, these settings become available:<br>- _Non-SSL redirect destination_<br>- _SSL redirect destination_ | - _On_ — Redirect.<br>- _Off_ — Don’t redirect. If you disable this option, users may send their passwords to these links **without** encryption. We **strongly** recommend that you do **not** disable this option. | _On_ |
| _Non-SSL redirect destination_ | This setting allows you to specify how to redirect users who access cPanel & WHM via the `/cpanel`, `/webmail`, or `/whm` paths without SSL. If you enable the _Always redirect to SSL/TLS_ setting, the system ignores this setting. | - _Hostname_ — Redirects users to the server’s hostname (for example, `host.example.com:2082`, where `host.example.com` represents the server’s hostname).<br>- _Origin Domain Name_ — Redirects a user to their main domain (for example, `example.com:2082`, where `example.com` represents the user’s domain). | _Origin Domain Name_ |
| _SSL redirect destination_ | This setting allows you to specify how to redirect users who access cPanel & WHM via the `/cpanel`, `/webmail`, or `/whm` paths with SSL. If you enable the _Always redirect to SSL/TLS_ setting, the system ignores this setting. | - _SSL Certificate Name_ — Redirects users to the domain that the website’s SSL certificate secures. You can view this certificate in WHM’s [_Manage Service SSL Certificates_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) interface ( _WHM » Home » Service Configuration » Manage Service SSL Certificates_).<br>- _Hostname_ — Redirects users to the server’s hostname (for example, `host.example.com:2083`, where `host.example.com` represents the server’s hostname).<br>- _Origin Domain Name_ — Redirects a user to their main domain (for example, `example.com:2083`, where `example.com` represents the user’s domain). | _SSL Certificate Name_ |
| _Logout redirection URL_ | This setting allows you to redirect users to a specific URL after they log out. | - _No redirection_ — Don’t redirect users.<br>- Select the text box and enter a URL. | _No redirection_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×