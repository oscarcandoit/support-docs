---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/"
title: "The Statistics Software Configuration File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#main-content)

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
4. The Statistics Software Configuration File


[stats](https://docs.cpanel.net/tags/stats/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#overview)

* * *

[File contents](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#file-contents)

* * *

[Example](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#overview)

* * *

[File contents](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#file-contents)

* * *

[Example](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-statistics-software-configuration-file/#example)

* * *

## The Statistics Software Configuration File

Last modified: _2020 September 28_

* * *

## Overview

The `/etc/stats.conf` file stores the configuration changes that you make in WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_).

Note:

Do **not** edit this file manually.


## File contents

| Name | Description | Example |
| --- | --- | --- |
| `ALLOWALL` | This settings allows all users to change their web statics generating software. | `no` |
| `BLACKHOURS` | This setting prevents statistic processing during the specified 24 hour. | `10,11` |
| `DEFAULTGENS` | This setting allows you to set the default statistic generators. | `ANALOG,WEBALIZER` |
| `allow_awstats_include` | This settings allows users to defined AWStats configuration include file. | `0` |

## Example

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>ALLOWALL=no<br>BLACKHOURS=10,11<br>DEFAULTGENS=ANALOG,WEBALIZER<br>allow_awstats_include=0<br>``` |

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×