---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/"
title: "How to Customize the Exim System Filter File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Customize the Exim System Filter File


[exim](https://docs.cpanel.net/tags/exim/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#overview)

* * *

[How to create a custom filter rule file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-create-a-custom-filter-rule-file)

* * *

[How to create a custom Exim system filter file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-create-a-custom-exim-system-filter-file)

* * *

[How to block additional extensions](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-block-additional-extensions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#overview)

* * *

[How to create a custom filter rule file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-create-a-custom-filter-rule-file)

* * *

[How to create a custom Exim system filter file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-create-a-custom-exim-system-filter-file)

* * *

[How to block additional extensions](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#how-to-block-additional-extensions)

* * *

## How to Customize the Exim System Filter File

Last modified: _2023 January 26_

* * *

## Overview

Warning:

The steps in this document are for advanced users only.


The Exim system filter file scans messages that your server has received, but that it has not yet delivered. To add custom filter rules to your Exim configuration, you may either create custom filter rule files for Exim to include in its configuration, or create a custom Exim system filter file.

## How to create a custom filter rule file

To create a custom filter rule file, perform the following steps:

1. Create a file in the `/usr/local/cpanel/etc/exim/sysfilter/options/` directory.

2. Within that file, enter your custom filter rules. For example, to block mail from `user@example.com`, add the following rule:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>if ("$h_from:" contains "user@example.com")<br>then fail<br>endif<br>``` |

3. Navigate to WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_). In the _Basic Editor_ section, select the _Filters_ tab.

4. Disable any undesired filter rules.

5. Click _Save_.


Warning:

The Exim configuration enables all of the custom filter rules within the `/usr/local/cpanel/etc/exim/sysfilter/options/` directory.


## How to create a custom Exim system filter file

Warning:

Do **not** directly edit the `/etc/cpanel_exim_system_filter` file. The system will lose any changes when your Exim Configuration rebuilds.

To create a custom system filter file, perform the following steps:

1. Log in to the server as the `root` user.

2. Run the following command to copy the `/etc/cpanel_exim_system_filter` file:




```perl
cp -p /etc/cpanel_exim_system_filter /etc/cpanel_system_filter_new
```





Warning:





We **strongly** recommend that you copy this file before you edit it. If you experience problems, use the file to revert your changes.

3. Confirm that the new file has the following ownership and file permissions:




```perl
   -rw-r--r-- 1 root root
```

4. Use your preferred text editor to edit the `/etc/cpanel_system_filter_new` file.

5. Navigate to the _Basic Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

6. Select the text box option for the _System Filter File_ setting.







Warning:





Regardless of which option you select, the Exim configuration will include **all** of the files within the `/usr/local/cpanel/etc/exim/sysfilter/options/` directory.

7. Enter the new file’s absolute path in the text box (for example, `/etc/cpanel_system_filter_new`).

8. Click _Save_.





Note:





Exim restarts when you save changes in the _Exim Configuration Manager_ interface.


For more information about the Exim system filter file, visit [Exim’s system filter documentation](http://www.exim.org/exim-html-current/doc/html/spec_html/ch-systemwide_message_filtering.html).

## How to block additional extensions

The `/etc/cpanel_exim_system_filter` file is the system’s default filter file. It contains the following sections:

- Single-part MIME messages with suspicious name extensions.
- Single-part MIME messages with suspicious name extensions that use unquoted filenames.
- Embedded VBS attachments.
- Embedded VBS attachments that use unquoted filenames.

To block a new extension:

Remember:

Do **not** directly edit the `/etc/cpanel_exim_system_filter` file. The system will lose any changes when your Exim Configuration rebuilds.

1. Create a custom filter file. To do this, follow steps 1-3 of the [How to create a custom Exim system filter file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file/#customfilter) section.

2. Edit the regular expressions in the following lines:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>if $header_content-type: matches "(?:file)?name=(\"[^\"]+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc])\")"<br>if $header_content-type: matches "(?:file)?name=(\\\\S+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc]))"<br>if $message_body matches "(?:Content-(?:Type:(?>\\\\s*)[\\\\w-]+/[\\\\w-]+|Disposition:(?>\\\\s*)attachment);(?>\\\\s*)(?:file)?name=|begin(?>\\\\s+)[0-7]{3,4}(?>\\\\s+))(\"[^\"]+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc])\")[\\\\s;]"<br>if $message_body matches "(?:Content-(?:Type:(?>\\\\s*)[\\\\w-]+/[\\\\w-]+|Disposition:(?>\\\\s*)attachment);(?>\\\\s*)(?:file)?name=|begin(?>\\\\s+)[0-7]{3,4}(?>\\\\s+))(\\\\S+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc]))[\\\\s;]"<br>``` |







Note:





To unblock an extension, remove it from those regular expressions.





For example, if you blocked the `.foo` extension, your changes would resemble the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>if $header_content-type: matches "(?:file)?name=(\"[^\"]+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|foo|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc])\")"<br>if $header_content-type: matches "(?:file)?name=(\\\\S+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|foo|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc]))"<br>if $message_body matches "(?:Content-(?:Type:(?>\\\\s*)[\\\\w-]+/[\\\\w-]+|Disposition:(?>\\\\s*)attachment);(?>\\\\s*)(?:file)?name=|begin(?>\\\\s+)[0-7]{3,4}(?>\\\\s+))(\"[^\"]+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|foo|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc])\")[\\\\s;]"<br>if $message_body matches "(?:Content-(?:Type:(?>\\\\s*)[\\\\w-]+/[\\\\w-]+|Disposition:(?>\\\\s*)attachment);(?>\\\\s*)(?:file)?name=|begin(?>\\\\s+)[0-7]{3,4}(?>\\\\s+))(\\\\S+\\\\.(?:ad[ep]|ba[st]|chm|cmd|com|cpl|crt|eml|exe|foo|hlp|hta|in[fs]|isp|jse?|lnk|md[be]|ms[cipt]|pcd|pif|reg|scr|sct|shs|url|vb[se]|ws[fhc]))[\\\\s;]"<br>``` |

3. Log in to WHM as the `root` user.

4. Navigate to the Filters section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

5. Enter the new filter file’s filepath in the _System Filter File_ option’s text box.

6. Click _Save_.


#### Additional Documentation

* * *

- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [The slurp\_exim\_mainlog Script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script/)
- [View Mail Statistics Summary](https://docs.cpanel.net/whm/email/view-mail-statistics-summary/)
- [View Sent Summary](https://docs.cpanel.net/whm/email/view-sent-summary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×