---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/"
title: "Apache Module — Evasive | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/)
5. Apache Module — Evasive


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
[How the module works](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#how-the-module-works) [Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#how-to-install-or-uninstall-the-module) [Configuration directives](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#configuration-directives) [Test your configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#test-your-configuration) [Vendor documentation](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#vendor-documentation) - [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
[How the module works](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#how-the-module-works) [Requirements](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#requirements) [Compatibility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#compatibility) [How to install or uninstall the module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#how-to-install-or-uninstall-the-module) [Configuration directives](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#configuration-directives) [Test your configuration](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#test-your-configuration) [Vendor documentation](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#vendor-documentation) - [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
- [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — Evasive

Last modified: _2025 February 19_

* * *

This module provides DoS, DDoS, and brute force attack protection.

The `mod_evasive` Apache module creates an internal, dynamic hash table of IP addresses and URIs, and it denies any single IP address that performs the following actions:

- Requests the same page more than a few times per second.
- Makes more than 100 concurrent requests on the same child process per second.
- Makes any request while temporarily blacklisted.

The module creates an instance for each listener, which ensures a built-in cleanup mechanism and good scaling. Because of this, the module rarely stops a legitimate request, even if a user repeatedly clicks on reload.

Note:

- If you find that the module blocks access to webmail through a proxy subdomain, you may need to adjust the configuration settings.
- We strongly recommend that you integrate this module with your firewall and router for the best protection. For more information, read the [DOSSystemCommand](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/#dossystemcommand) section.

### How the module works

When your server receives a request, the module performs the following steps:

The system checks the temporary blacklist for the requestor’s IP address.
The system adds the requestor’s IP address and the URI to a hash key and looks up the key on the listener’s hash table. It then checks if the requestor requested the same page more than once in the last second.

The system adds the requestor’s IP address to a hash key and looks up the key on the listener’s hash table. It then checks if the requestor requested more than 50 objects in the last second.
If the module finds that any of the above are true, the system sends a 403 response. When a 403 response occurs, the `mod_evasive` Apache module blocks the IP address for 10 seconds. If the requestor sends additional requests during this time, the system extends the block.

You can also configure the module to trigger a system command or email notification to block the originating addresses.

* * *

### Requirements

This module has no requirements. However, your server must possess bandwidth and processing power sufficient to defend against a DoS attack.

### Compatibility

If your server uses `mod_ruid2`, Apache will **not** write to the `/var/log/apache2/mod_evasive` log files. If you require Apache logs for `mod_evasive`, use the `mod_suexec` module instead of `mod_ruid2`.

* * *

## How to install or uninstall the module

You can install or uninstall the `mod_evasive` Apache module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

### Configuration directives

You can set several directives in the `mod_evasive` configuration file. We recommend the following directives:

| Directive | Description |
| --- | --- |
| `DOSWhiteList` | You can whitelist clients to ensure that the module does not block them. We **strongly** recommend that you only whitelist automated tools that may request large amounts of data.

To whitelist a client, set the IP address or range of IP addresses in the directive.

Your whitelist entry might resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>DOSWhitelist    127.0.0.1<br>DOSWhitelist    127.0.0.*<br>``` |

The system does not set this directive by default. |
| `DOSHashTableSize` | This directive defines the number of top-level nodes that each child’s hash table contains. You can increase this number to increase performance, but the system will consume more memory. The module will round this value up to the next prime number in its primes list. This directive defaults to `3097`. |
| `DOSPageCount` | This directive sets the maximum number of requests per interval for a single page that the module allows before it blocks the IP address. This directive defaults to `4`. |
| `DOSSiteCount` | This directive sets the maximum number of requests per interval for any object by the same client that the module allows before it blocks the IP address. This directive defaults to `100`. |
| `DOSPageInterval` | This directive sets the time interval, in seconds, for the number of page allowed requests as specified in the `DOSPageCount` directive. This directive defaults to `2`. |
| `DOSSiteInterval` | This directive sets the time interval, in seconds, for the number of allowed requests for an object as specified in the `DOSSiteCount` directive. This directive defaults to `2`. |
| `DOSBlockingPeriod` | This directive sets the time, in seconds, to block a site’s IP address if the module adds the site to the block list. This directive defaults to `10`. <br>Note:<br>Any subsequent client requests during the blocked period will reset the the block timer and return a 403 error. |
| `DOSEmailNotify` | This directive sets the email address to notify when the module adds an IP address to a blacklist. The system does not set this directive by default. |
| `DOSSystemCommand` | This directive sets the system command to execute when it adds an IP address to a blacklist. Use this directive to call your IP filter or another tool to integrate the module with your firewall or router. <br> The system does **not** set this directive by default. |
| `DOSLogDir` | This directive sets the location of the log file. <br> EasyApache 4 sets the `DOSLogDir` directive to the `/var/log/apache2/mod_evasive/` directory. We **strongly** recommend that you do not change this location. If you do, the new directory must possess the same permissions. |

#### Apache configuration

We strongly recommend that you set the `MaxConnectionsPerChild` directive in your `apache.conf` file to a value of at least `10000`. Do **not** set this value to `0`.

This ensures that the `mod_evasive` Apache module can clean up its internal hashes but does not allow unlimited requests. Set this directive in the _Global Configuration_ section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration_).

### Test your configuration

You can test your configuration with the [`test.pl`](https://github.com/shivaas/mod_evasive/blob/master/test.pl) script. We **strongly** recommend that you run the script several times to ensure that you receive 403 Forbidden responses. The speed at which your server blacklists an address depends on your server’s configuration.

Important:

Do **not** perform DoS attacks on a server without the owner’s permission.

## Vendor documentation

For more configuration information, read the [`mod_evasive`](https://github.com/shivaas/mod_evasive) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×