---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/"
title: "How to Enable and Disable the Dovecot Mail Log Plugin | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#main-content)

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
4. How to Enable and Disable the Dovecot Mail Log Plugin


[email](https://docs.cpanel.net/tags/email/) [dovecot](https://docs.cpanel.net/tags/dovecot/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#overview)

* * *

[Enable the Dovecot mail log plugin](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#enable-the-dovecot-mail-log-plugin)

* * *

[Disable the Dovecot mail log plugin](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#disable-the-dovecot-mail-log-plugin)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#overview)

* * *

[Enable the Dovecot mail log plugin](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#enable-the-dovecot-mail-log-plugin)

* * *

[Disable the Dovecot mail log plugin](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/#disable-the-dovecot-mail-log-plugin)

* * *

## How to Enable and Disable the Dovecot Mail Log Plugin

_Valid for versions 104 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin/)

Last modified: _2025 August 26_

* * *

## Overview

This document explains how to enable and disable the Dovecot mail log plugin. The additional entries to the `/var/log/maillog` log file can help you to diagnose issues with mail delivery.

The plugin will add the following entries to the log file:

- Setting and removing the `\Deleted` flag
- Expunging (includes autoexpunge)
- Copying mails to another mailbox
- Mailbox creations
- Mailbox deletions
- Mailbox renames
- Any flag changes
- Saves

Important:

- The additional log entries will increase the size of the log files and cause the system to archive them more frequently.
- The system now the `/var/cpanel/templates/dovecot/` directory.

## Enable the Dovecot mail log plugin

To enable the Dovecot mail log plugin, perform the following steps:

1. Log in to your server via SSH as the `root` user.

2. Run the following command to determine if a local template file already exists:



```bash
stat /var/cpanel/templates/dovecot/main.local
```


   - If a template file does **not** exist, run the following command:


     ```bash
     cp -v /var/cpanel/templates/dovecot/main.{default,local}
     ```
3. Create the `/root/dovecot.patch` file and add the following code to it:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>``` | ```bash<br>--- main.default	2022-05-04 18:43:43.231310505 +0000<br>+++ main.local	2022-08-05 05:00:33.996931597 +0000<br>@@ -669,7 +669,7 @@<br> [%- ELSE %]<br>   #mail_plugins = acl quota imap_quota<br> [%- END %]<br>-  mail_plugins = $mail_plugins zlib imap_zlib quota_clone virtual [% IF xaps_topic %]imap_xaps[% END %] [% IF fts_support %]fts fts_solr[% END %]<br>+  mail_plugins = $mail_plugins mail_log notify zlib imap_zlib quota_clone virtual [% IF xaps_topic %]imap_xaps[% END %] [% IF fts_support %]fts fts_solr[% END %]<br>   #mail_plugin_dir = /usr/lib/dovecot/imap<br>@@ -1251,10 +1251,10 @@<br> # mail_log plugin provides more event logging for mail processes.<br> plugin {<br>   # Events to log. Also available: flag_change append<br>-  #mail_log_events = delete undelete expunge copy mailbox_delete mailbox_rename<br>+  mail_log_events = delete undelete expunge copy mailbox_delete mailbox_rename<br>   # Available fields: uid, box, msgid, from, subject, size, vsize, flags<br>   # size and vsize are available only for expunge and copy events.<br>-  #mail_log_fields = uid box msgid size<br>+  mail_log_fields = uid box msgid size<br> }<br>``` |

4. Run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>patch -p1 /var/cpanel/templates/dovecot/main.local < /root/dovecot.patch<br>/scripts/builddovecotconf && /scripts/restartsrv_dovecot<br>``` |


To view the log file, run the following command:

```bash
tail -fn0 /var/log/maillog
```

## Disable the Dovecot mail log plugin

To disable the Dovecot mail log plugin, perform the following steps:

1. Log in to your server via SSH as the `root` user.
2. Run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>mv -vi /var/cpanel/templates/dovecot/main.local{,.bak}<br>/scripts/builddovecotconf && /scripts/restartsrv_dovecot<br>``` |


#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [Mailbox Conversion](https://docs.cpanel.net/whm/email/mailbox-conversion/)
- [Repair Mailbox Permissions](https://docs.cpanel.net/whm/email/repair-mailbox-permissions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×