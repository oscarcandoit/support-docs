---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/"
title: "Tweak Settings — Domains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/#main-content)

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
4. Tweak Settings — Domains


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/#installation-toggle)

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

## Tweak Settings — Domains

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for versions 124 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)

Last modified: _2025 August 1_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Domains_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Allow users to park subdomains of the server’s hostname._ | This setting allows users to park subdomains on your server’s main domain. For example, for a user creating the `subdomain.server.example.com` alias on the `server.example.com` FQDN, _On_ would cause the action to succeed. | - _On_ — Allow creation of subdomains on the server’s hostname.<br>- _Off_ — Don’t allow creation of subdomains on the server’s hostname. If a cPanel user tries to create a subdomain, they receive an error message. | _Off_ |
| _Allow cPanel users to create subdomains across accounts_ | This setting allows a cPanel user to create an addon domain or subdomain on a domain that another user owns. For example, if a user owns the `example.com` domain, another user could create the `store.example.com` subdomain. | - _On_ — Allow creation of subdomains across accounts. **Do not enable this option.** It can cause serious security issues.<br>- _Off_ — Don’t allow creation of subdomains across accounts. If a cPanel user tries to create a subdomain on another account, they receive an error message. | _Off_ |
| _Allow WHM users to create subdomains across accounts_ | This setting allows WHM users to create an addon domain or subdomain for a domain that another user owns. For example, if a cPanel user owns the `example.com` domain, a WHM user could add a DNS zone for the `store.example.com` subdomain. | - _On_ — Allow creation of subdomains across accounts. **Do not enable this option.** It can cause serious security issues.<br>- _Off_ — Don’t allow creation of subdomains across accounts. This is the **default** setting. | _Off_ |
| _Allow Remote Domains_ | This setting allows the creation of parked domains (aliases) and addon domains that resolve to other servers. | - _On_ — Allow creation. **Do not enable this option.** It can cause serious security issues.<br>- _Off_ — Don’t allow creation. | _Off_ |
| _Allow resellers to create accounts with subdomains of the server’s hostname._ | This setting allows resellers to create accounts with subdomains on your server’s main domain. For example, if your hostname is `server.example.com`, enable this setting to redirect `user.server.example.com` visitors to the reseller’s website. | - _On_ — Allow creation.<br>- _Off_ — Don’t allow creation. | _Off_ |
| _Allow unregistered domains_ | This setting lets users add domains without assigning any nameserver records to them. | - _On_ — Allow creation.<br>- _Off_ — Don’t allow creation. | _Off_ |
| _Automatically add A entries for registered nameservers when creating a new zone_ | This setting controls whether to add [A entries](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#a-address-entry) automatically for a domain’s nameservers when a user creates a domain. | - _On_ — Create.<br>- _Off_ — Don’t create. | _On_ |
| _Replace service SSL certificates that do not match the local hostname_ | This setting changes how the `/usr/local/cpanel/scripts/checkallsslcerts` script functions. If you enable this, the system replaces SSL certificates that don’t match the server’s hostname. The system replaces them with a [Let’s Encrypt™ certificate](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/). This also applies to wildcard certificates. | - _On_ — Replace the certificates.<br>- _Off_ — Retain the certificates. | _On_ |
| _Prevent cPanel users from creating specific domains_ | This setting prevents creating domains whose names appear in the `/var/cpanel/commondomains` file. If you enable this, cPanel users can’t create any domains (addon or parked) that exist in the `/var/cpanel/commondomains` and `/usr/local/cpanel/etc/commondomains` files. <br>Note:<br>Do **not** edit the `/usr/local/cpanel/etc/commondomains` file directly. If you do, the system will overwrite your changes whenever cPanel & WHM updates. | - _On_ — Prevent creation.<br>- _Off_ — Allow creation. | _On_ |
| _Check zone syntax_ | This setting allows the system to check zone file syntax each time it saves or syncs DNS zone files. | - _On_ — Check the syntax.<br>- _Off_ — Don’t check the syntax. | _On_ |
| _Check zone owner_ | This setting allows the system to check a DNS zone’s owner whenever it saves or syncs DNS zone files. | - _On_ — Check the owner.<br>- _Off_ — Don’t check the owner. | _On_ |
| _Enable DKIM on domains for newly created accounts_ | [DKIM (DomainKeys Identified Mail)](http://www.dkim.org/) verifies a message’s sender and integrity. It allows an email system to prove that a message is valid, not forged, and came from the specified domain. This setting allows you to specify whether to enable DKIM for new accounts by default.<br>- The `/scripts/enable_spf_dkim_globally` script allows you to enable SPF and DKIM for accounts that exist on the server, and to create the appropriate DNS records for their domains. For more information, read our [The SPF and DKIM Global Settings Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/) documentation. | - _On_ — Enable DKIM.<br>- _Off_ — Don’t enable DKIM. | _On_ |
| _Enable DMARC on domains for newly created accounts_ | A [DMARC](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dmarc) record sets a policy that tells servers how to handle mail based on the domain’s SPF and DKIM records. This setting allows you to specify whether to enable DMARC for new accounts by default.<br>Important:<br>DMARC **requires** valid DKIM and SPF records. To enable this setting, you must **also** select the _Enable DKIM on domains for newly created accounts_ and _Enable SPF on domains for newly created accounts_ settings. | - _On_ — Enable DMARC.<br>- _Off_ — Don’t enable DMARC. | _On_ |
| _Enable SPF on domains for newly created accounts_ | [SPF (Sender Policy Framework)](https://en.wikipedia.org/wiki/Sender_Policy_Framework) keeps spammers from sending email that shows your domain as the sender (spoofing). This adds addresses to a list of computers that you authorize to send mail from your domain. It verifies that your domain’s sent messages come from the listed sender. This reduces the amount of backscatter that you receive. This setting allows you to specify whether to enable SPF for new accounts by default.<br>- The `/scripts/enable_spf_dkim_globally` script allows you to enable SPF and DKIM for accounts that exist on the server, and to create the appropriate DNS records for their domains. For more information, read our [The SPF and DKIM Global Settings Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/) documentation. | - _On_ — Enable SPF.<br>- _Off_ — Don’t enable SPF. | _On_ |
| _DNS request management application_ | This setting determines which application handles DNS management requests. | - _dnsadmin, auto-detect SSL_ — Use dnsadmin.<br>- Select the text box and enter the path to another application. | _dnsadmin, auto-detect SSL_ |
| _Service subdomains_ | This setting gives users access to cPanel & WHM through standard HTTP ports (`80` and `443`).<br>- If you enable this setting, the system creates an entry in the `httpd.conf` file.<br>- Do **not** manually disable the `mod_rewrite`, `mod_headers`, or `mod_proxy` settings in the `httpd.conf` file.<br>If you enable this setting, the system creates these service subdomains, where `example.com` is the domain:<br>- `cpanel.example.com` directs users to cPanel’s [_Home_](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) interface.<br>- `whm.example.com` directs users to WHM’s [_Home_](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface) interface.<br>- `webmail.example.com` directs users to the [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface/) interface.<br>- `webdisk.example.com` directs users to cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_).<br>The settings in the _Redirection_ section below do not apply to service subdomains. For more information about service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation. | - _On_ — Allow ports and create service subdomains.<br>- _Off_ — Don’t allow. | _On_ |
| _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ | This setting creates the [`autodiscover`](http://technet.microsoft.com/en-us/library/bb124251.aspx) and autoconfig service subdomains when you create a domain. It also creates `autodiscover` and `autoconfig` SRV records.<br>- Local domains require these for Microsoft Outlook® and Thunderbird.<br>- If you set the `Service Subdomains` option to `Off`, the system disables this setting.<br>- If you disable this setting, your users may have issues when they set up their email, calendars, or contacts.<br>For more information about service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation. | - _On_ — Create service subdomains.<br>- _Off_ — Don’t create service subdomains. | _On_ |
| _Preferred mail service to configure to use for Thunderbird and Outlook autodiscover and autoconfig support_ | This setting lets you choose the email transfer method to use with Thunderbird and Outlook for Autodiscover and AutoConfig support.<br>Note:<br>You **must** enable the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ setting to configure this setting. | - _imap_ — Use IMAP.<br>- _pop3_ — Use POP3. | _imap_ |
| _Host to publish in the SRV records for Outlook autodiscover support._ | The Microsoft Outlook® Autodiscover service searches DNS records. It searches for the SRV record for a domain that points to a particular Autodiscover server. This setting lets you take these actions:<br>- Choose the host to publish to the SRV records.<br>- Change the default host to an SSL-enabled host with a CA-signed SSL certificate.<br>- Use your own server for Outlook® Autodiscover. Enter the Fully Qualified Domain Name (FQDN) in the available text box.<br>Note:<br>- When you input a server in the _Host to publish in the SRV records for Outlook autodiscover support_ setting, the system queries that server for autodiscover settings. If you use your own server for autodiscover, you **must** have a custom XML file configured on it for autodiscover to work. For more information, read [Microsoft’s Autodiscover](http://technet.microsoft.com/en-us/library/bb124251.aspx) documentation.<br>- You **must** enable the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ setting to configure this setting. | - Click to view…`cpanelemaildiscovery.cpanel.net`<br>- A valid hostname. | Click to view…`cpanelemaildiscovery.cpanel.net` |
| _Overwrite custom A records used for service subdomains_ | This setting removes A records that match your service subdomains.<br>- For more information about service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation.<br>- If you set the _Service subdomains_ setting to _Off_, the system disables this setting. | - _On_ — Remove A records.<br>- _Off_ — Don’t remove A records. | _Off_ |
| _Overwrite custom SRV records used by Outlook AutoDiscover support_ | This setting removes SRV records when adding or removing Outlook Autodiscover support.<br>Note:<br>You **must** set the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ setting to _On_ to toggle this setting. | - _On_ — Remove SRV records.<br>- _Off_ — Don’t remove SRV records. | _Off_ |
| _Service subdomain override_ | This setting creates cPanel, Webmail, Web Disk, and WHM subdomains that override the default service subdomains. For example, a user could direct `cpanel.example.com` visitors to `mycontrolpanel.example.com`. For more information about service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation. | - _On_ — Create subdomains.<br>- _Off_ — Don’t create subdomains. | _On_ |
| _Restrict document roots to public\_html_ | This setting keeps users from creating addon domains and subdomains outside of their `public_html` directory. For example, if you enable this option and create the `example.com` addon domain, the system creates the `/home/username/public_html/example.com` directory and **not** the `/home/username/example.com` directory. | - _On_ — Prevent creation outside of the `public_html` directory.<br>- _Off_ — Allow creation in other locations. | _On_ |
| _Share the document root by default when creating a domain_ | This setting automatically selects the _Share document root_ checkbox in the _Create a New Domain_ interface within cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains) interface ( _cPanel » Home » Domains » Domains_). | - _On_ — Automatically select the checkbox.<br>- _Off_ — Automatically deselect the checkbox. | _On_ |
| _Always use authoritative (registered) nameservers when creating a new DNS zone._ | This setting lets a new domain use authoritative nameservers. If you enable this setting, the server won’t use the nameservers you set when creating the domain. | - _On_ — Allow authoritative nameservers.<br>- _Off_ — Don’t allow. | _Off_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×