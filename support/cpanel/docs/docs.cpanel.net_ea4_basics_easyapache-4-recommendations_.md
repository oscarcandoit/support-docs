---
url: "https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/"
title: "EasyApache 4 Recommendations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#main-content)

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
3. [Basics](https://docs.cpanel.net/ea4/basics/)
4. EasyApache 4 Recommendations


[ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#overview)

* * *

[Recommendation format](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#recommendation-format)

* * *

[Recommendation file fields](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#recommendation-file-fields)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#overview)

* * *

[Recommendation format](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#recommendation-format)

* * *

[Recommendation file fields](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/#recommendation-file-fields)

* * *

## EasyApache 4 Recommendations

Last modified: _2024 September 12_

* * *

## Overview

WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) gives you a variety of information about the packages that you can install. This could include security advice or notes about your configuration. For more information on PHP version recommendations, read our [How to Set PHP Version Recommendations](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/) documentation.

## Recommendation format

The system stores its recommendations inside the `ea-cpanel-tools` package. This package creates directories and files in the `/etc/cpanel/ea4/recommendations/` directory. The package contains JSON-formatted files for each recommendation. It places each file in a directory with the same name as the corresponding package.

The recommendation file will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```go<br>{<br>   "on" : "add",<br>   "name" : "PHP DSO",<br>   "desc" : "PHP DSO runs as the user by default. In a shared hosting environment, this is a security issue.",<br>   "level" : "danger",<br>   "url" : "https://www.example.com",<br>   "options" : [<br>      {<br>         "recommended" : true,<br>         "text" : "We strongly recommend that you install one of the following packages unless this is a single-user system:",<br>         "level" : "success",<br>         "items" : [<br>            "ea-apache24-mod_ruid2",<br>            "ea-apache24-mod_mpm_itk"<br>         ]<br>      },<br>      {<br>         "recommended" : false,<br>         "text" : "If you use suPHP, you will add some security, but may experience performance issues on your server.",<br>         "level" : "warning"<br>      }<br>   ]<br>}<br>``` |

### Recommendation file fields

The JSON file contains the following fields:

| Field | Required | Description | Accepted values |
| --- | --- | --- | --- |
| `on` | **Required** | The action that triggers a recommendation. <br> You can **only** use this field in the top level of the JSON file. | - `add`<br>- `remove` |
| `desc` | Optional | The package’s description. <br> You can **only** use this field in the top level of the JSON file. | A valid string. |
| `url` | **Required** | A URL that provides more information. <br>- If no URL exists, use the `false` value. <br>- You can use this field in both the top level of the JSON file and the `options` hash. | - A valid URL. <br>- `false` |
| `name` | **Required** | The package’s label. <br> You can **only** use this field in the top level of the JSON file. | A valid string. |
| `options` | **Required** | The options to resolve a recommendation. <br> You can **only** use this field in the top level of the JSON file. | An array of hashes that contains the `level`, `items`, `recommended`, `text`, and `url` fields. |
| `items` | Optional | An array of information that corresponds with the text field. <br> You can **only** use this field in the options hash. | A valid array. |
| `recommended` | Optional | The type of recommendation that the interface returns. <br>- This field determines which icon displays next to the text in the interface. If you **do not** include this field, then the interface will not display an icon. <br>- You can **only** use this field in the options hash. | - `true`<br>- `false` |
| `text` | **Required** | The text returned in the user interface. <br> You can only use this field in the options hash. | A valid string. |
| `level` | Optional | The level that triggers a recommendation to appear. This level is based on Bootstrap 3 alert components. <br>- You can use this field in both the top level of the JSON file and the `options` hash. <br>- The `danger` level is the **only** value that affects the UI. | - `primary`<br>- `success`<br>- `info`<br>- `warning`<br>- `danger` |
| `filter` | Optional | The user interface filters the recommendations it displays with the array of keywords. <br> You can **only** use this field in the top level of the JSON file. | An array of valid keywords. |

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