---
url: "https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/"
title: "HTTP Error Codes and Quick Fixes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. HTTP Error Codes and Quick Fixes


[errorcodes](https://docs.cpanel.net/tags/errorcodes/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#overview)

* * *

[Errors](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#errors)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#overview)

* * *

[Errors](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/#errors)

* * *

## HTTP Error Codes and Quick Fixes

Last modified: _2022 July 19_

* * *

## Overview

HTTP codes describe the status of a URL when a visitor attempts to access it. HTTP codes include error messages that describe the problems that visitors encounter. The codes are three-digit numbers.

The following list represents the five classes of HTTP codes, divided into categories, by the first digit:

- `1`, `2`, or `3` — A fully-functional request.
- `4` — A client-side error. The most common codes span `400` to `404`.
- `5` — A server-side error. The most common codes span `500` to `510`.

Note:

For more information, read Wikipedia’s [List of HTTP status codes](https://wikipedia.org/wiki/List_of_HTTP_status_codes) article.


## Errors

- **4xx Errors** — These errors occur from a problem with the client’s request (for example, the browser) but often point to a problem on a website. For example, if a faulty link exists on your home page, and visitors click it, they receive a `404` error. We **strongly** suggest that you monitor these errors and investigate their causes. Because visitors most often see this error, we suggest that you customize these error pages in cPanel’s [_Error Pages_](https://docs.cpanel.net/cpanel/advanced/error-pages/) interface ( _cPanel » Home » Advanced » Error Pages_).

- **400 Bad Request** — The user’s request contains an incorrect syntax.

- **401 Unauthorized** — You **must** provide authentication to access the requested file.

- **403 Forbidden** — The server will **not** allow the visitor to access the requested file. If a visitor receives this code in error, check the file’s permission settings. You can also confirm whether the system protects the file in cPanel’s [_Indexes_](https://docs.cpanel.net/cpanel/advanced/indexes/) interface ( _cPanel » Home » Advanced » Indexes_).

- **404 Not Found** — The server did **not** find a visitor’s requested file. This error commonly occurs when a visitor mistypes a URL.

- **5xx Errors** — These errors occur when a server cannot fulfill an apparently-valid request from a visitor. To resolve these issues, contact your system administrator. It is also important to consider that many times, a chain of servers handles an HTTP request. This means that the returned error may come from a different web server and not your own.

- **500 Internal Server Error** — The server encountered an unexpected condition. This multipurpose error displays when the server cannot gather any specific information about the problem. This error often occurs when the server cannot fulfill an application request because of a misconfigured application. To resolve this issue, contact your system administrator.

- **501 Not Implemented** — The server does not support the client’s chosen HTTP method. This error often occurs if the server is out of date.






Note:




This error rarely occurs. To resolve this issue, contact your system administrator.


- **502 Bad Gateway** — This error usually occurs due to improperly configured proxy servers. However, the error also arises when there is poor IP communication between backend computers, when the client’s Internet Service Provider (ISP) is overloaded, or when a firewall functions improperly. Clear the client’s cache as a first step to resolve this issue. This action results in the use of a different proxy to resolve the web server’s content.

- **503 Service Unavailable** — The server cannot handle requests because of a temporary overload or because the server is temporarily closed for maintenance. This error signifies that the server will only be unavailable temporarily. It is possible to receive other errors in place of the 503 error. To resolve this issue, contact your system administrator.

- **504 Gateway Timeout** — A server did not receive a timely response from another server. Slow communication between upstream servers causes this error. To resolve this issue, contact your system administrator.

- **505 HTTP Version Not Supported** — The server refuses to support the HTTP protocol that the client computer specifies. This error occurs if the client computer does not correctly specify the protocol (for example, if it specifies an invalid version number). This error should **not** occur if you have a current installation of cPanel & WHM.

- **506 Variant Also Negotiates** — The server’s configuration is incorrect. To resolve this issue, contact your system administrator.

- **507 Insufficient Storage** — The server is out of free memory. This error usually occurs when a requested application cannot allocate the necessary system resources in order to run. To resolve this issue, contact your system administrator.

- **509 Bandwidth Limit Exceeded** — Your server reached the bandwidth limit that the system administrator imposed. Wait until the limit resets in the following cycle, or contact your system administrator to resolve this issue.

- **510 Not Extended** — The web server does not support an extension that is attached to the HTTP request. To resolve this issue, contact your system administrator.


#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×