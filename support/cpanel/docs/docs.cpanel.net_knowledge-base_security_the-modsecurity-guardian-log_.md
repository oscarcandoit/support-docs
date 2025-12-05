---
url: "https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/"
title: "The ModSecurity® Guardian Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. The ModSecurity® Guardian Log


[apache](https://docs.cpanel.net/tags/apache/) [modsecurity](https://docs.cpanel.net/tags/modsecurity/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#overview)

* * *

[Install and configure the http-guardian script](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#install-and-configure-the-http-guardian-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#overview)

* * *

[Install and configure the http-guardian script](https://docs.cpanel.net/knowledge-base/security/the-modsecurity-guardian-log/#install-and-configure-the-http-guardian-script)

* * *

## The ModSecurity® Guardian Log

Last modified: _2024 April 29_

* * *

## Overview

This document explains how to install and configure Apache’s `httpd-guardian` script, which allows you to use ModSecurity’s _SecGuardianLog_ directive. This script monitors web server requests via the piped log mechanism to detect Denial-of-Service (DoS) attacks. It tracks of the number of requests that IP address sends and calculates request speed at one minute and five minute intervals. After the requests reach a specified threshold, the `httpd-guardian` script either emits a warning or blocks the IP address. Error messages from the `http-guardian` script reside in the `/var/log/apache2/error_log` file.

After you download and configure the `httpd-guardian` script, you can specify the path to the script in the _Guardian Log_ section of WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM_ » _Home_ » _Security Center_ » _ModSecurity® Configuration_).

Note:

The `httpd-guardian` script ships with a version of [The Spread toolkit](http://www.spread.org/), an open source toolkit, that you can configure. However, the script does **not** require this toolkit to function correctly.


## Install and configure the http-guardian script

To install and configure the `http-guardian` script, perform the following steps:

1. Download the apache-tools repository from the [sourceforge.net](https://sourceforge.net/projects/apache-tools/) website. To do this, run the following command as the `root` user:



```go
cvs -z3 -d:pserver:anonymous@a.cvs.sourceforge.net:/cvsroot/apache-tools co -P apache-tools
```





Note:





If the Concurrent Versioning System (CVS) does not exist on your server, install it via the `yum install cvs` command.

2. Open the `/root/apache-tools/http-guardian` file with a text editor and make any desired configuration changes. For example, to enable the system to log data that it receives from Apache, set the `COPY_LOG` variable’s value to the log file’s filepath. This will resemble the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/# $COPY_LOG = "/var/lib/http-guardian.log";<br>my $COPY_LOG;<br>``` |

3. Log in to the WHM interface as the `root` user and navigate to WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM_ » _Home_ » _Security Center_ » _Modsecurity® Configuration_).
4. Enter the `http-guardian` script’s path in the _Guardian Log_ setting’s text box, for example:



```go
/root/apache-tools/httpd-guardian
```

5. After you save your changes in WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/) interface ( _WHM_ » _Home_ » _Security Center_ » _Modsecurity® Configuration_), restart Apache and check the process list for the `httpd-guardian` script. To do this, run the following command:



```go
ps faux | grep httpd-guardian | grep -v grep
```



The output will resemble the following example:



```go
root 24722 0.0 0.3 28872 3272 ? S 19:31 0:00 \_ /usr/bin/perl -w /root/apache-tools/httpd-guardian
```


For more information about ModSecurity directives, read github.com’s [ModSecurity Reference Manual](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29) documentation.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [ModSecurity® Configuration](https://docs.cpanel.net/whm/security-center/modsecurity-configuration/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×