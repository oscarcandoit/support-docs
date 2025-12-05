---
url: "https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/"
title: "Multi-Processing Modules: MPMs | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#main-content)

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
4. Multi-Processing Modules: MPMs


[ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#overview)

* * *

[Available MPMs](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#available-mpms)

* * *

[Guidelines to select an MPM](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#guidelines-to-select-an-mpm)

* * *

[The MPM ITK module](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#the-mpm-itk-module)

* * *

[Change your Apache MPM](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#change-your-apache-mpm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#overview)

* * *

[Available MPMs](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#available-mpms)

* * *

[Guidelines to select an MPM](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#guidelines-to-select-an-mpm)

* * *

[The MPM ITK module](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#the-mpm-itk-module)

* * *

[Change your Apache MPM](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#change-your-apache-mpm)

* * *

## Multi-Processing Modules: MPMs

Last modified: _2024 September 5_

* * *

## Overview

An Apache Multi-Processing Module (MPM) provides a modular approach to web server functions. The MPM that you select determines how Apache binds to network ports, accepts HTTP requests, and dispatches child processes to handle the HTTP requests.

- MPMs allow the user to choose which features, characteristics, or modules they want to include with a server request. The modules then load these requests at compile or run time.
- Due to the differences between each MPM, some MPMs work better on specific systems than others. For example, we recommend that you use the `prefork` MPM if you use older software that requires stability and compatibility. For websites that require more diversity and scalability, we recommend that you use the `worker` or `event` MPMs.

EasyApache 4 installs the prefork MPM by default. You can **only** install one MPM on your system at a time.

## Available MPMs

EasyApache 4 provides the following MPMs:

| MPM | Description |
| --- | --- |
| `worker` | The `worker` MPM causes Apache to fork multiple processes to ensure that a single crash does not terminate the entire Apache service. Each forked process creates multiple threads, and a listener thread that listens for incoming connections. This configuration enables the server to handle multiple requests concurrently. For more information, read Apache’s [MPM worker](https://httpd.apache.org/docs/current/mod/worker.html) documentation. |
| `event` | The `event` MPM processes a single HTTP request across multiple threads. It dedicates threads to handle active connections and uses an event-driven mechanism to manage keep-alive requests efficiently. This behavior ensures that threads are instantly available after a request is completed. <br> We recommend the event MPM for users with occasional concurrent requests, or those that require long keep-alive timeouts. For more information, read Apache’s [MPM event](https://httpd.apache.org/docs/current/mod/event.html) documentation. |
| `prefork` | The `prefork` MPM forks additional processes in advance of incoming requests. When Apache receives a request, the server can respond promptly because an Apache process is already available to handle it. If a problem occurs with an individual process, Apache can terminate that process without affecting the others.<br> Since the `prefork` MPM is **not** threaded, each child process can handle only one request at a time. The system queues concurrent requests and the MPM processes each request as resources become available. This configuration can consume a large amount of system RAM due to multiple child processes. For more information, read Apache’s [MPM prefork](https://httpd.apache.org/docs/current/mod/prefork.html) documentation. <br>- **Only** use the prefork MPM for non-thread-safe modules.<br>- You may also use the MPM ITK module. |

### Guidelines to select an MPM

Because each system possesses different requirements, use the following information to determine the proper MPM for your system.

- If your system requires threads and allows for safe thread-polling, use the event MPM.
- If your system requires threads, but does not allow for safe thread-polling, use the worker MPM.
- If your system does not require threads and does not allow for safe thread-polling, use the prefork MPM.

Remember:

- If you do **not** select an MPM option, EasyApache installs the `prefork` MPM by default.
- EasyApache 4 **only** builds one MPM into your Apache configuration.
- The MPM ITK module is **not** an MPM. You **must** use the `prefork` MPM in order to use the MPM ITK Apache module. For more information, read the [The MPM ITK module](https://docs.cpanel.net/ea4/apache/multi-processing-modules-mpm/#the-mpm-itk-module) section.
- cPanel & WHM **only** supports systems that offer threads and safe-thread polling.

### The MPM ITK module

The `mod_mpm_itk` module now exists only as an Apache module. It does **not** function as a stand-alone MPM. You can install this module with WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_) or via yum. For more information, read our [Apache Module: MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk) documentation.

Warning:

- **Only** systems that run Apache 2.4 can install the MPM ITK Apache module.
- You **must** install the `prefork` MPM in order to use the MPM ITK module.

## Change your Apache MPM

To change your Apache MPM, use the _Apache MPM_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM_ » _Home_ » _Software_ » _EasyApache 4_).

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×