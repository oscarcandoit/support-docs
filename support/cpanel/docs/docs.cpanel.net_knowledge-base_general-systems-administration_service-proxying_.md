---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/"
title: "Service Proxying | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Service Proxying


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#overview)

* * *

[Service proxy configuration](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#service-proxy-configuration)

* * *

[Set up service proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#set-up-service-proxying)

* * *

[Service proxy groups](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#service-proxy-groups)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#mail)

* * *

[Unsuspend an account](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#unsuspend-an-account)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#overview)

* * *

[Service proxy configuration](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#service-proxy-configuration)

* * *

[Set up service proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#set-up-service-proxying)

* * *

[Service proxy groups](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#service-proxy-groups)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#mail)

* * *

[Unsuspend an account](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#unsuspend-an-account)

* * *

## Service Proxying

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)

Last modified: _2025 October 9_

* * *

## Overview

Service proxying configures local services to [proxy requests](https://en.wikipedia.org/wiki/Proxy_server) for a cPanel account’s domains to a remote server. You can manage a cPanel account’s service proxying via API with the WHM API 1 [`set_service_proxy_backends`](https://api.docs.cpanel.net/openapi/whm/operation/set_service_proxy_backends/) and [`unset_all_service_proxy_backends`](https://api.docs.cpanel.net/openapi/whm/operation/unset_all_service_proxy_backends/) functions.

You can configure the following services via service proxying:

- Web Server (`httpd`)
- Mailbox ( [Dovecot](https://www.dovecot.org/) ®)

For information about a specific service, read our [cPanel service daemons](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons) documentation.

## Service proxy configuration

All service proxy configurations assign a host as the general proxy backend server. In the absence of any other configurations, all compatible services proxy requests to that proxy backend server.

You can also configure different services to use different proxy backend servers. For example, you can configure the web server (`httpd`) to proxy requests to `web.example.com` server, while Dovecot proxies its requests to the `mail.example.com` server.

To create such a configuration, you **must** first assign a general proxy backend server. Then, assign other backend servers to the related service group. For example, you can assign the `web.example.com` server as the general proxy backend server. You can then assign the `mail.example.com` server as the [Mail](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/#mail) service group’s proxy backend server.

## Set up service proxying

To set up service proxying for a cPanel account, perform the following steps:

1. Use WHM API 1’s [get\_service\_proxy\_backends](https://api.docs.cpanel.net/openapi/whm/operation/get_service_proxy_backends/) function to verify the account’s current proxy configuration:



```bash
whmapi1 get_service_proxy_backends username=example
```

2. Use WHM API 1’s [set\_service\_proxy\_backends](https://api.docs.cpanel.net/openapi/whm/operation/set_service_proxy_backends/) function to configure the account’s proxy configuration to the remote server, for example:

   - To proxy all services for the `example` user to the `remote.example.com` server:


     ```bash
     whmapi1 set_service_proxy_backends username=example general=remote.example.com
     ```

   - To proxy the Dovecot service for the `example` user to the `web.example.com` server:


     ```bash
     whmapi1 set_service_proxy_backends username=example service_group=Mail service_group_backend=mail.example.com
     ```
3. Use WHM API 1’s [get\_service\_proxy\_backends](https://api.docs.cpanel.net/openapi/whm/operation/get_service_proxy_backends/) function to confirm the updated proxy configuration, for example:



```bash
whmapi1 get_service_proxy_backends username=example
```


## Service proxy groups

Service proxy groups consist of a group of one or more related services:

### Mail

The _Mail_ service group consists of the Dovecot service, which handles the IMAP and POP3 protocols.

Note:

- This service proxy group does **not** include Exim.
- While you cannot proxy SMTP, you can configure a manual MX redirect. To do this, use the WHM API 1 [`set_manual_mx_redirects`](https://api.docs.cpanel.net/openapi/whm/operation/set_manual_mx_redirects/) function.

## Unsuspend an account

To remove service proxying, unsuspend the account. For example, the [_Live Transfer_](https://docs.cpanel.net/whm/transfers/transfer-tool/#live-transfer) feature proxies services to the destination server. The feature then suspends the account. You can unsuspend the account on the source server to disable proxying.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×