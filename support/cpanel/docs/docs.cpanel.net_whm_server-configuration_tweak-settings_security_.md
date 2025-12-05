---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/"
title: "Tweak Settings — Security | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/#main-content)

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
4. Tweak Settings — Security


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

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/#installation-toggle)

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

## Tweak Settings — Security

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for versions 124 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Security_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Allow autocomplete for login screens._ | This setting specifies whether users can save their cPanel, WHM, and Webmail passwords in the browser’s cache. | - _On_ — Users can save to the browser’s cache.<br>- _Off_ — Users can’t save to the browser’s cache. | _On_ |
| _Hide login password from cgi scripts_ | This setting hides the `REMOTE_PASSWORD` variable from scripts that the `cpsrvd` daemon’s CGI handler executes.<br>- This setting does **not** hide the `REMOTE_PASSWORD` variable from phpMyAdmin.<br>- cPanel’s _CGI Center_ interface ( _cPanel » Home » Software and Services » CGI Center_) **only** exists in cPanel’s **removed** x3 theme. You **cannot** create new CGI scripts with cPanel’s current theme (Jupiter), and we **strongly** discourage the use of the x3 theme. | - _On_ — Hide.<br>- _Off_ — Don’t hide. | _Off_ |
| _Cookie IP validation_ | This setting validates IP addresses for cookie-based logins. This denies attackers the ability to capture cPanel session cookies in order to gain access to your server’s cPanel & WHM interfaces.<br>- If you enable this setting, we **recommend** that you disable the _Service subdomains_ setting. | - _disabled_ — The system does not validate IP addresses.<br>- _loose_ — The system requires that the access IP address and the cookie IP address must be in the same class C subnet.<br>- _strict_ — The system requires that the access IP address and the cookie IP address match exactly. | _strict_ |
| _Generate core dumps_ | This setting specifies whether cPanel & WHM’s services create core dumps. You can use core dumps to debug a service.<br>Core dumps contain **sensitive** information. Make **certain** that you keep them secure. | - _On_ — Create.<br>- _Off_ — Don’t create. | _Off_ |
| _Send passwords when creating a new account_ | This setting allows you to send new users their passwords in plaintext over email when you create a new account.<br>We **strongly** recommend that you do **not** enable this setting to avoid a security risk. | - _On_ — Send in plaintext.<br>- _Off_ — Don’t send in plaintext. | _Off_ |
| _Enable File Protect_ | This setting enables EasyApache 4’s [FileProtect](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option) option, which improves the security of each user’s `public_html` directory. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Blank referrer safety check_ | This setting only permits cPanel & WHM to perform functions when the browser provides a referral URL. Each attempt to submit data to cPanel & WHM **must** have a referral URL. This helps the system to prevent cross-site request forgery (XSRF) attacks.<br>- The visitor or application that queries the server **must** enable cookies for this setting to function.<br>Important:<br>Exercise **caution** if you enable this setting. This setting can **break** the system’s integration with other systems, login applications, and billing software. | - _On_ — Require a referral URL.<br>- _Off_ — Don’t require a referral URL. | _Off_ |
| _Referrer safety check_ | This setting only permits cPanel & WHM to perform functions when the browser provides a referral URL that exactly matches the destination URL. Each attempt to submit data to cPanel & WHM must have a referral URL for which the domain or IP address and port number exactly match those of the destination URL. This helps the system to prevent cross-site request forgery (XSRF) attacks.<br>- The visitor or application that queries the server **must** enable cookies for this setting to function.<br>Important:<br>Exercise **caution** if you enable this setting. This setting can **break** the system’s integration with other systems, login applications, and billing software. | - _On_ — Require a referral URL.<br>- _Off_ — Don’t require a referral URL. | _Off_ |
| _Require SSL for cPanel Services_ | This option forces the server to redirect unencrypted cPanel, Webmail, WHM, and DAV requests to secure ports according to the SSL redirection settings. We **strongly** recommend that you enable this setting. | - _On_ — Require encryption.<br>- _Off_ — Don’t require encryption. | _On_ |
| _Allow PHP to be run when logged in as a reseller to WHM_ | This setting enables resellers to run PHP code in WHM. WHM’s PHP code runs as the `root` user. **Exercise caution** if you enable this setting. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Allow apps that have not registered with AppConfig to be run when logged in as a reseller to WHM._ | This setting allows unregistered AppConfig applications to run when you log in to WHM as a reseller. When you disable this setting, resellers can only run registered AppConfig applications. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Allow apps that have not registered with AppConfig to be run when logged in as root or a reseller with the “all” ACL in WHM._ | This setting allows unregistered AppConfig applications to run when you log in as a `root` user. When you disable this setting, a `root` user can only run registered AppConfig applications. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _This setting allows WHM applications and addons to execute even if an ACL list has not been defined._ | This setting allows registered AppConfig applications and addons to run without a defined ACL list. When you disable this setting, cPanel & WHM forces registered AppConfig applications and addons to set an ACL list. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _This setting allows cPanel and Webmail applications and addons to execute even if a feature list has not been defined._ | This setting allows registered AppConfig cPanel and Webmail apps to run without a defined required features list. When you disable this setting, cPanel & WHM forces registered AppConfig cPanel and Webmail apps to set a _Required Features_ list. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Use MD5 passwords with Apache_ | This setting specifies whether the system uses MD5 hashing for new passwords in Apache `.htpasswd` files. Because Apache `.htpasswd` files can contain a mix of crypt- and MD5-encoded passwords, this setting does not change the encoding of any existing passwords.<br>MD5-encoded passwords provide more security than crypt-encoded passwords. Crypt only uses the first eight characters of the password for authentication, but the system allows MD5 passwords of length. | - _On_ — Enable.<br>- _Off_ — Disable. When you disable this option, Apache uses crypt hashing. | _On_ |
| _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell._ | This setting enables the _JailManager_ TailWatch Driver module. _JailManager_ keeps each VirtFS filesystem jail shell in sync with the `root` filesystem. _JailManager_ also returns the VirtFS filesystem jailed shells to a usable state when the system reboots.<br>Warning:<br>This feature is unstable and can result in unintended consequences, including performance and connection issues. Exercise **extreme** caution if you enable an _EXPERIMENTAL_ feature or setting.<br> <br>- These features **may not** function with other features or settings.<br>- These features **do not** provide current and effective security controls.<br>- _EXPERIMENTAL_ features do not qualify for our security bounty.<br>- For more information about an _EXPERIMENTAL_ feature’s compatibility, read our [Change Logs](https://docs.cpanel.net/changelogs) documentation.<br>You do not need to enable or disable _JailManager_ in the [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_) because this setting controls the module’s state.<br>- The `mod_ruid2` module uses the `chroot` command on Apache virtual hosts if you enable this setting. This action runs Apache virtual hosts in an environment with an altered `root` directory.<br>- You can use this setting when you compile Apache through EasyApache and you have installed `mod_ruid2` version 0.9.4a or later.<br>- You can use this setting on AlmaLinux OS, Rocky Linux™, or Ubuntu® servers. The CloudLinux™ operating system does **not** support the `mod_ruid2` module.<br>When you enable this option, each user with a configured `jailshell` or `noshell` experiences the following changes:<br>- The `chroot` command jails the user’s Apache Virtual Hosts into the `/home/virtfs` directory.<br>- The system adds the `RDocumentChRoot` directive to the user’s Virtual Host.<br>- The system limits the user’s filesystem view to their `/home/virtfs/username` filesystem. Various jail shell-related options control the `/home/virtfs/username` filesystem configuration. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Signature validation on assets downloaded from cPanel & WHM mirrors._ | This setting specifies the type of GnuPG (GPG) key signature file (keyring) that the system uses to verify and sign files that you download from cPanel & WHM `httpupdate` mirrors.<br>- For more information about these GPG keys, read our [Download Security](https://docs.cpanel.net/knowledge-base/security/download-security) documentation.<br>- This setting **does not** provide effective security control. | - _Off_ — The system does not validate any digital signatures.<br>- _Release Keyring Only_ — The system uses the Release GPG keyring to validate official release downloads from cPanel & WHM `httpupdate` mirrors.<br>- _Release and Development Keyrings_ — The system uses the Release and Development GPG keyrings to validate test and development release downloads from cPanel & WHM `httpupdate` mirrors. | _Release Keyring Only_ |
| _Default SSL/TLS Key Type_ | This setting lets you specify the system’s default SSL/TLS key type. The system uses the selected key type to generate `root`’s SSL/TLS keys. The system also uses this key type when it generates keys for cPanel users who do **not** specify a preferred SSL/TLS key type in cPanel’s [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_). For more information about the available key types, read the [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types) documentation. <br>Note:<br>When you update your preferred key type, the system will perform an [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) run. This updates **all** installed AutoSSL-issued certificates to use the new key type. | - _RSA, 2,048-bit_<br>- _ECDSA, P-384 (secp384r1)_<br>- _ECDSA, P-256 (prime256v1)_<br>- _RSA, 4,096-bit_ | _RSA, 2,048-bit_ |
| _Generate a self signed SSL certificate if a CA signed certificate is not available when setting up new domains._ | When you create a new domain, cPanel will automatically enable SSL for that domain if an SSL certificate exists. If no SSL certificate exists, this functionality will generate a self-signed certificate.<br>Important:<br>- We **strongly** recommend that you enable AutoSSL.<br>- If you disable this option, and a CA-signed certificate is not available, when a user attempts to visit the newly created domain over HTTPS, the user will see the first SSL certificate installed on that IP address.<br>- If you have **not** enabled a CA-signed certificate or AutoSSL, Google search results may point to the SSL site version with a self-signed certificate. Self-signed certificates generate browser warnings. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Verify signatures of 3rdparty cPaddons._ | This setting verifies all third-party cPAddons’ GPG keys. You can enable this setting if you enable the _Signature validation on assets downloaded from cPanel & WHM mirrors_ setting. This **experimental** setting **does not** provide effective security control. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Allow deprecated WHM accesshash authentication_ | This setting allows users to authenticate with WHM via an access hash that they create in WHM’s [_Remote Access Key_](https://docs.cpanel.net/whm/clusters/remote-access-key/) interface ( _WHM » Home » Clusters » Remote Access Key_). We deprecated WHM’s _Remote Access Key_ feature in cPanel & WHM version 64. We **strongly** recommend that you use API tokens instead. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |
| _Use X-Frame-Options and X-Content-Type-Options headers with cpsrvd_ | This setting adds the `X-Frame-Options: SAMEORIGIN` and `X-Content-Type-Options: nosniff` headers to `cpsrvd` responses.<br>- This setting only controls header directives for cPanel & WHM service ports `2082`, `2083`, `2086`, `2087`, `2095`, and `2096`.<br>- For more information about `X-Frame-Options`, read [Mozilla’s X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) documentation.<br>- For more information about `X-Content-Type-Options`, read Mozilla’s [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) documentation. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Enable strict SSH host key checking_ | This setting configures the server to always verify the host key of remote systems for outgoing SSH connections, such as `rsync` and SFTP backup, transfers, and remote MySQL® connections. This setting helps defend the server against [man-in-the-middle](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks) (MITM) attacks. | - _disabled_ — Do **not** require that the server verifies the host key of remote systems for outgoing SSH connections.<br>- _enabled_ — Require that the server verifies the host key of all remote systems for outgoing SSH connections. If you select _enabled_, you **must** add a host key for each remote system to the `/etc/ssh/ssh_known_hosts` file.<br>- _dns_ — If the remote system contains SSHFP records in a DNSSEC-signed zone **and** the local system uses EDNS0 resolving, the local system uses the SSHFP records to verify the remote system. Otherwise, the system uses the _enabled_ setting’s behavior. If you select _dns_, you **must** perform the following actions and meet the following conditions:<br>  - You **must** add a host key for each remote system to the `/etc/ssh/ssh_known_hosts` file if either of the following conditions is true:<br>    - The remote system does **not** contain SSHFP records in a DNSSEC-signed zone.<br>    - The local system does **not** use EDNS0 resolving.<br>  - You **must** use the remote system’s hostname instead of the IP address in all relevant interfaces.<br>  - The remote system’s hostname **must** exist in a DNSSEC-signed zone.<br>  - The server’s resolvers in the `/etc/resolv.conf` file **must** be DNSSEC-aware (for example, BIND, PowerDNS, and Google Public DNS nameservers).<br>  - The remote system’s resolvers must use EDNS0 resolving. To confirm this, locate the `options edns0` option in the `/etc/resolv.conf` file.<br>  - For AlmaLinux and Rocky Linux servers, the server that makes the connection **must** possess SSHFP records with the SHA-1 (algorithm 1) or SHA-256 (algorithm 2) encryption algorithms. | _disabled_ |
| _Display a message to reboot the server after essential software updates._ | This setting configures the server to display a prompt to reboot the server after it installs an essential software update. If you disable this setting, you **must** manually reboot the server after essential software updates in order to address security issues. | - _On_ — Enable.<br>- _Off_ — Disable. | _On_ |
| _Enable Content-Security-Policy on some interfaces_ | This setting enables the Content-Security-Policy (CSP) header on WHM’s [_Configure Application Locales_](https://docs.cpanel.net/whm/locales/configure-application-locales/), [_Delete a Locale_](https://docs.cpanel.net/whm/locales/delete-a-locale/), [_Locale XML Download_](https://docs.cpanel.net/whm/locales/locale-xml-download/), [_Locale XML Upload_](https://docs.cpanel.net/whm/locales/locale-xml-upload/), [_View Available Locales_](https://docs.cpanel.net/whm/locales/view-available-locales/), and [_Shell Fork Bomb Protection_](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/) interfaces. This header can help to prevent certain cross-site scripting (XSS) attacks, and it may block JavaScript from external sites when you visit a CSP-enabled interface. | - _On_ — Enable.<br>- _Off_ — Disable. | _Off_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×