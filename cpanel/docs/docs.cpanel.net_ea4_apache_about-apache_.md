---
url: "https://docs.cpanel.net/ea4/apache/about-apache/"
title: "About Apache | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/about-apache/#main-content)

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
4. About Apache


[ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/about-apache/#overview)

* * *

[Apache versions](https://docs.cpanel.net/ea4/apache/about-apache/#apache-versions)

* * *

[Apache configuration](https://docs.cpanel.net/ea4/apache/about-apache/#apache-configuration)

* * *

[Apache file locations](https://docs.cpanel.net/ea4/apache/about-apache/#apache-file-locations)

* * *

[Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#apache-modules)

* * *

[Default Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#default-apache-modules)

* * *

[Other available Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#other-available-apache-modules)

* * *

[Apache and Cloudflare](https://docs.cpanel.net/ea4/apache/about-apache/#apache-and-cloudflare)

* * *

[Apache security](https://docs.cpanel.net/ea4/apache/about-apache/#apache-security)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/about-apache/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/about-apache/#overview)

* * *

[Apache versions](https://docs.cpanel.net/ea4/apache/about-apache/#apache-versions)

* * *

[Apache configuration](https://docs.cpanel.net/ea4/apache/about-apache/#apache-configuration)

* * *

[Apache file locations](https://docs.cpanel.net/ea4/apache/about-apache/#apache-file-locations)

* * *

[Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#apache-modules)

* * *

[Default Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#default-apache-modules)

* * *

[Other available Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#other-available-apache-modules)

* * *

[Apache and Cloudflare](https://docs.cpanel.net/ea4/apache/about-apache/#apache-and-cloudflare)

* * *

[Apache security](https://docs.cpanel.net/ea4/apache/about-apache/#apache-security)

* * *

## About Apache

Last modified: _2025 June 13_

* * *

## Overview

EasyApache 4 installs and manages the [Apache® web server](http://httpd.apache.org/) and all of its components. When you install cPanel & WHM, the installation process automatically runs EasyApache 4, which installs Apache with the basic requirements for a functional web server.

To modify your Apache configuration, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

Important:

The Apache Software Foundation develops the Apache HTTP Server Project, which provides the Apache web server software. For an introduction to the Apache web server, read Apache’s [Getting Started](http://httpd.apache.org/docs/current/getting-started.html) documentation.


## Apache versions

EasyApache 4 **only** supports Apache 2.4.

When Apache releases a new version, we test and update the EasyApache 4 packages. Minor version number changes do not impact functionality, but major updates may require changes to your configuration.

## Apache configuration

The Apache configuration we provide includes the following components by default:

- The core Apache modules — These include the modules necessary to perform the basic duties of a web server.
- The most common Apache modules — These include the modules that most web servers use.
- A [Multi-Processing Module (MPM)](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/) — Our default Apache configuration uses MPM Prefork. The MPM that you select determines how Apache handles requests.
- PHP — PHP versions 8.1 and 8.2 are included by default. For more information, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php) documentation.
- Cloudflare® — Apache properly routes IPs for Cloudflare. For more information, read the [Apache and Cloudflare](https://docs.cpanel.net/ea4/apache/about-apache/#apache-and-cloudflare) section below.

## Apache file locations

The following table provides a list of the most common Apache file paths:

| File path | Description |
| --- | --- |
| `/usr/sbin/httpd` | The Apache binary file. |
| `/var/log/apache2/` | This directory contains Apache log files. |
| `/etc/apache2/` | This directory contains Apache’s configuration directories for its includes, modules, and configuration files. |
| `/etc/apache2/conf/httpd.conf` | The primary Apache configuration file. |
| `/etc/apache2/conf.d/` | The primary Apache configuration file directory. |
| `/etc/apache2/conf.d/includes/` | The directory that contains the include files that add content to the `httpd.conf` file. <br> You can modify these configuration files via the command line interface (CLI) or WHM’s [_Include Editor_](https://docs.cpanel.net/whm/service-configuration/include-editor/) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Apache Configuration_ » _Include Editor_). |
| `/usr/lib64/apache2/modules/` | This directory contains all of the dynamic modules for Apache. <br>Some servers use the `/usr/lib/apache2/modules/` directory instead. |
| `/etc/apache2/logs/access_log` | This file contains HTTP requests that the server received and that did not go to a domain. |
| `/etc/apache2/logs/domlogs/` | This directory contains a log of HTTP requests that the system routed to a domain. |
| `/etc/apache2/logs/error_log` | This file contains error information. |
| `/var/www/html/` | This directory contains the document root for the server. It contains default pages that users can see. |
| `/etc/apache2/logs/` | This directory contains an alias to the `/var/log/apache2/` directory. |
| `/etc/apache2/modules/` | This directory contains an alias to the `/usr/lib64/apache2/modules/` directory. |

For more information about Apache configuration and file paths, read our [Advanced Apache Configuration](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration) and [Advanced Apache Configuration — The paths.conf](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration-the-paths-conf-file) documentation.

## Apache modules

### Default Apache modules

When you install cPanel & WHM, the system installs the _cPanel Default_ EasyApache 4 profile. This profile provides the basic components for a web server.

The _cPanel Default_ profile includes the following Apache modules by default:

| Apache module | Description |
| --- | --- |
| [`mod_cgi`](http://httpd.apache.org/docs/current/mod/mod_cgi.html) | Handles CGI requests. |
| [`mod_deflate`](http://httpd.apache.org/docs/current/mod/mod_deflate.html) | Compresses content before delivery to the client. |
| [`mod_expires`](http://httpd.apache.org/docs/current/mod/mod_expires.html) | Generates Expires and Cache-Control HTTP headers with user-specified criteria. |
| [`mod_headers`](http://httpd.apache.org/docs/current/mod/mod_headers.html) | Customization of HTTP request and response headers. |
| [`mod_mpm_prefork`](http://httpd.apache.org/docs/current/mod/prefork.html) | Implements a non-threaded, pre-forking web server. |
| [`mod_proxy`](http://httpd.apache.org/docs/current/mod/mod_proxy.html) | HTTP/1.1 proxy/gateway server. |
| [`mod_proxy_fcgi`](http://httpd.apache.org/docs/current/mod/mod_proxy_fcgi.html) | FastCGI proxy module for the Apache HTTP server. |
| [`mod_ruid2`](https://github.com/mind04/mod-ruid2) | Allows a domain’s HTTP requests to run as the owner of that domain. <br> For more information, read our [Apache Module: Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/) documentation. |
| [`mod_security2`](https://github.com/owasp-modsecurity/ModSecurity/wiki) | A web application firewall. <br>For more information, read our [Apache Module: ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity) documentation. |
| [`mod_ssl`](http://httpd.apache.org/docs/current/mod/mod_ssl.html) | Handles security through the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols. |
| [`mod_unique_id`](http://httpd.apache.org/docs/current/mod/mod_unique_id.html) | Provides an environment variable with a unique identifier for each request. |

### Other available Apache modules

You can select other Apache modules in the _Apache Modules_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_) when you customize a profile.

[Click to view...](https://docs.cpanel.net/ea4/apache/about-apache/#click-to-view---1764175696177304581)

| Apache module | Description |
| --- | --- |
| [`mod_allowmethods`](http://httpd.apache.org/docs/current/mod/mod_allowmethods.html) | Restrict which HTTP methods the server can use. |
| [`mod_asis`](http://httpd.apache.org/docs/current/mod/mod_asis.html) | As-is provider module for the Apache HTTP server. |
| [`mod_auth_digest`](http://httpd.apache.org/docs/current/mod/mod_auth_digest.html) | HTTP Digest Authentication module for the Apache HTTP server. |
| [`mod_authn_anon`](http://httpd.apache.org/docs/current/mod/mod_authn_anon.html) | Anonymous-user authentication module for the Apache HTTP server. |
| [`mod_authn_dbd`](http://httpd.apache.org/docs/current/mod/mod_authn_dbd.html) | DBD-based authentication module for the Apache HTTP server. |
| [`mod_authn_dbm`](http://httpd.apache.org/docs/current/mod/mod_authn_dbm.html) | DBM-based authentication module for the Apache HTTP server. |
| [`mod_authn_socache`](http://httpd.apache.org/docs/current/mod/mod_authn_socache.html) | Shared-memory authentication caching module for the Apache HTTP server. |
| [`mod_authnz_ldap`](http://httpd.apache.org/docs/current/mod/mod_authnz_ldap.html) | LDAP authentication/authorization module for the Apache HTTP server. |
| [`mod_authz_dbd`](http://httpd.apache.org/docs/current/mod/mod_authz_dbd.html) | DBD-based group authorization module for the Apache HTTP server. |
| [`mod_authz_dbm`](http://httpd.apache.org/docs/current/mod/mod_authz_dbm.html) | DBM-based group authorization module for the Apache HTTP server. |
| [`mod_authz_owner`](http://httpd.apache.org/docs/current/mod/mod_authz_owner.html) | Ownership-based authorization module for the Apache HTTP server. |
| [`mod_buffer`](http://httpd.apache.org/docs/current/mod/mod_buffer.html) | Request buffering module for the Apache HTTP server. |
| [`mod_brotli`](https://httpd.apache.org/docs/current/mod/mod_brotli.html) | Compression module for the Apache HTTP server. <br>If you install this module, it applies to all virtual hosts. For more information, read our [Apache Module: Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli) documentation. |
| [`mod_bw`](https://github.com/IvnSoft/mod_bw) | Bandwidth limitation options for the Apache HTTP server. <br> This module includes the `/usr/local/cpanel/scripts/setbwlimit` script to modify bandwidth limits. For more information, run the `/usr/local/cpanel/scripts/setbwlimit —help` command. |
| [`mod_cache`](http://httpd.apache.org/docs/current/mod/mod_cache.html) | Content caching module for the Apache HTTP server. |
| [`mod_cache_disk`](http://httpd.apache.org/docs/current/mod/mod_cache_disk.html) | Disk-based caching module for the Apache HTTP server. |
| [`mod_cache_socache`](http://httpd.apache.org/docs/current/mod/mod_cache_socache.html) | Shared-memory caching module for the Apache HTTP server. |
| [`mod_cgid`](http://httpd.apache.org/docs/current/mod/mod_cgid.html) | CGI module for the Apache HTTP server. |
| [`mod_charset_lite`](http://httpd.apache.org/docs/current/mod/mod_charset_lite.html) | Character-set conversion module for the Apache HTTP server. |
| [`mod_cpanel`](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel) | Improves how Apache processes requests. |
| [`mod_data`](http://httpd.apache.org/docs/current/mod/mod_data.html) | RFC2379 data URL generation module for the Apache HTTP server. |
| [`mod_dav`](http://httpd.apache.org/docs/current/mod/mod_dav.html) | DAV module for the Apache HTTP server. |
| [`mod_dav_fs`](http://httpd.apache.org/docs/current/mod/mod_dav_fs.html) | DAV filesystem provider module for the Apache HTTP server. |
| [`mod_dav_lock`](http://httpd.apache.org/docs/current/mod/mod_dav_lock.html) | Generic DAV locking module for the Apache HTTP server. |
| [`mod_dbd`](http://httpd.apache.org/docs/current/mod/mod_dbd.html) | Database connection module for the Apache HTTP server. |
| [`mod_dialup`](http://httpd.apache.org/docs/current/mod/mod_dialup.html) | Bandwidth rate-limiting module for the Apache HTTP server. |
| [`mod_dumpio`](http://httpd.apache.org/docs/current/mod/mod_dumpio.html) | Debug logging module for the Apache HTTP server. |
| [`mod_env`](http://httpd.apache.org/docs/current/mod/mod_env.html) | Environment variable module for the Apache HTTP server. |
| [`mod_evasive`](https://github.com/shivaas/mod_evasive) | DoS, DDoS, and brute force attack protection for the Apache HTTP server. <br>For more information, read our [Apache Module: Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive) documentation. |
| [`mod_ext_filter`](http://httpd.apache.org/docs/current/mod/mod_ext_filter.html) | Generic filter module for the Apache HTTP server. |
| [`mod_file_cache`](http://httpd.apache.org/docs/current/mod/mod_file_cache.html) | Static file caching module for the Apache HTTP server. |
| [`mod_heartbeat`](http://httpd.apache.org/docs/current/mod/mod_heartbeat.html) | Status reporting module for the Apache HTTP server. |
| [`mod_heartmonitor`](http://httpd.apache.org/docs/current/mod/mod_heartmonitor.html) | Heartbeat monitoring module for the Apache HTTP server. |
| [`mod_http2`](https://httpd.apache.org/docs/current/mod/mod_http2.html) | The http2 module for the Apache HTTP server. <br>For more information, read our [Apache Module: HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2) documentation. |
| [`mod_imagemap`](http://httpd.apache.org/docs/current/mod/mod_imagemap.html) | Server-side imagemap module for the Apache HTTP server. |
| [`mod_info`](http://httpd.apache.org/docs/current/mod/mod_info.html) | Provides a comprehensive overview of server configuration. We do not recommend this module for shared servers. |
| [`mod_lbmethod_bybusyness`](http://httpd.apache.org/docs/current/mod/mod_lbmethod_bybusyness.html) | Busyness load-balancing module for the Apache HTTP server. |
| [`mod_lbmethod_byrequests`](http://httpd.apache.org/docs/current/mod/mod_lbmethod_byrequests.html) | Request load-balancing module for the Apache HTTP server. |
| [`mod_lbmethod_bytraffic`](http://httpd.apache.org/docs/current/mod/mod_lbmethod_bytraffic.html) | Traffic load-balancing module for the Apache HTTP server. |
| [`mod_lbmethod_heartbeat`](http://httpd.apache.org/docs/current/mod/mod_lbmethod_heartbeat.html) | Heartbeat load-balancing module for the Apache HTTP server. |
| [`mod_ldap`](http://httpd.apache.org/docs/current/mod/mod_ldap.html) | LDAP connection-handling module for the Apache HTTP server. |
| [`mod_log_debug`](http://httpd.apache.org/docs/current/mod/mod_log_debug.html) | Debug logging module for the Apache HTTP server. |
| [`mod_log_forensic`](http://httpd.apache.org/docs/current/mod/mod_log_forensic.html) | Forensic logging module for the Apache HTTP server. |
| [`mod_lua`](http://httpd.apache.org/docs/current/mod/mod_lua.html) | The Lua language extension module for the Apache HTTP server. <br>We do **not** recommend this module for shared servers. For more information, read our [Apache Module: Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua) documentation. |
| [`mod_macro`](http://httpd.apache.org/docs/current/mod/mod_macro.html) | Configuration macro module for the Apache HTTP server. |
| [`mod_mime_magic`](http://httpd.apache.org/docs/current/mod/mod_mime_magic.html) | MIME-type autosensing module for the Apache HTTP server. |
| [`mod-passenger`](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) | The Phusion Passenger® package. <br> For more information, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications) documentation. |
| [`mod_pagespeed`](https://www.modpagespeed.com/doc/) | Improve web page latency. |
| [`mod_proxy_ajp`](http://httpd.apache.org/docs/current/mod/mod_proxy_ajp.html) | Apache JServ Protocol 1.3 proxy module for the Apache HTTP server. |
| [`mod_proxy_balancer`](http://httpd.apache.org/docs/current/mod/mod_proxy_balancer.html) | Load-balancing module for the Apache HTTP server. |
| [`mod_proxy_connect`](http://httpd.apache.org/docs/current/mod/mod_proxy_connect.html) | CONNECT HTTP method proxy module for the Apache HTTP server. |
| [`mod_proxy_express`](http://httpd.apache.org/docs/current/mod/mod_proxy_express.html) | Dynamic reverse-proxy module for the Apache HTTP server. |
| [`mod_proxy_fdpass`](http://httpd.apache.org/docs/current/mod/mod_proxy_fdpass.html) | File descriptor-passing proxy module for the Apache HTTP server. |
| [`mod_proxy_ftp`](http://httpd.apache.org/docs/current/mod/mod_proxy_ftp.html) | FTP proxy module for the Apache HTTP server. |
| [`mod_proxy_hcheck`](http://httpd.apache.org/docs/current/mod/mod_proxy_hcheck.html) | Dynamic health check of Balancer members (workers) for mod\_proxy. |
| [`mod_proxy_html`](http://httpd.apache.org/docs/current/mod/mod_proxy_html.html) | HTML and XML content filters for the Apache HTTP server. |
| [`mod_proxy_http`](http://httpd.apache.org/docs/current/mod/mod_proxy_http.html) | HTTP/HTTPS proxy module for the Apache HTTP server. |
| [`mod_proxy_scgi`](http://httpd.apache.org/docs/current/mod/mod_proxy_scgi.html) | SCGI module for the Apache HTTP server. |
| [`mod_proxy_uwsgi`](https://httpd.apache.org/docs/2.4/mod/mod_proxy_uwsgi.html) | Websockets proxy support for the WSGWI protocol for the Apache HTTP server. |
| [`mod_proxy_wstunnel`](http://httpd.apache.org/docs/current/mod/mod_proxy_wstunnel.html) | Websockets proxy module for the Apache HTTP server. |
| [`mod_qos`](http://mod-qos.sourceforge.net/) | Quality-of-service module for the Apache HTTP server. |
| [`mod_ratelimit`](http://httpd.apache.org/docs/current/mod/mod_ratelimit.html) | Client bandwidth limiting module for the Apache HTTP server. |
| [`mod_reflector`](http://httpd.apache.org/docs/current/mod/mod_reflector.html) | Filter-as-service module for the Apache HTTP server. This module is installed when you install Apache. Removing this module will **uninstall** your Apache webserver. |
| [`mod_remoteip`](http://httpd.apache.org/docs/current/mod/mod_remoteip.html) | IP address replacement module for the Apache HTTP server. |
| [`mod_reqtimeout`](http://httpd.apache.org/docs/current/mod/mod_reqtimeout.html) | Request timeout module for the Apache HTTP server. |
| [`mod_request`](http://httpd.apache.org/docs/current/mod/mod_request.html) | Request body retention module for the Apache HTTP server. |
| [`mod_sed`](http://httpd.apache.org/docs/current/mod/mod_sed.html) | Regex replacement content filter module for the Apache HTTP server. |
| [`mod_session`](http://httpd.apache.org/docs/current/mod/mod_session.html) | Session interface for the Apache HTTP server. |
| [`mod_slotmem_plain`](http://httpd.apache.org/docs/current/mod/mod_slotmem_plain.html) | Slot-based memory module for the Apache HTTP server. |
| [`mod_socache_memcache`](http://httpd.apache.org/docs/current/mod/mod_socache_memcache.html) | Memcache-based object cache module for the Apache HTTP server. |
| [`mod_speling`](http://httpd.apache.org/docs/current/mod/mod_speling.html) | URL fallback module for the Apache HTTP server. |
| [`mod_substitute`](http://httpd.apache.org/docs/current/mod/mod_substitute.html) | Response body substitution module for the Apache HTTP server. |
| [`mod_suexec`](http://httpd.apache.org/docs/current/mod/mod_suexec.html) | Per-user/group execution module for the Apache HTTP server. |
| [`mod_suphp`](http://www.suphp.org/Documentation.html) | This module executes PHP scripts with the permissions of their owners. |
| [`mod_usertrack`](http://httpd.apache.org/docs/current/mod/mod_usertrack.html) | Cookie tracking module for the Apache HTTP server. |
| [`mod_version`](http://httpd.apache.org/docs/current/mod/mod_version.html) | Version comparing module for the Apache HTTP server. |
| [`mod_vhost_alias`](http://httpd.apache.org/docs/current/mod/mod_vhost_alias.html) | Dynamic mass virtual hosting module for the Apache HTTP server. |
| [`mod_watchdog`](http://httpd.apache.org/docs/current/mod/mod_watchdog.html) | Periodic task module for the Apache HTTP server. |

## Apache and Cloudflare

Apache configures your system to work properly with Cloudflare.

The system saves the Cloudflare configuration to the following location:

```bash
/etc/apache2/conf.d/includes/cloudflare.conf
```

Apache also installs the `mod_remoteip` Apache module when you install the Apache web server. This module is **required** to ensure that Cloudflare logs the correct IP address. You **cannot** uninstall the` mod_remoteip` Apache module.

If you do **not** want to use Cloudflare, run the following commands to create a touch file and restart Apache:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>touch /var/cpanel/no_apache_cloudflare<br>/usr/local/cpanel/scripts/rebuildhttpdconf<br>/usr/local/cpanel/scripts/restartsrv_httpd<br>``` |

## Apache security

EasyApache 4 provides a web application firewall, the ModSecurity® Apache module.

You **must** install and configure a ruleset with WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM » Home » Security Center » ModSecurity® Configuration_) to use ModSecurity. For more information about the ModSecurity Apache module, read our [Apache Module: ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity) documentation.

We **strongly** recommend that you read Apache’s [Security Tips](http://httpd.apache.org/docs/current/misc/security_tips.html) documentation.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [The fix-web-vhost-configuration Script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/)
- [The rebuildhttpdconf Script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×