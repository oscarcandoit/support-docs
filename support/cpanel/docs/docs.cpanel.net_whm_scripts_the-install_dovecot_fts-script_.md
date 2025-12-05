---
url: "https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/"
title: "The install_dovecot_fts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The install\_dovecot\_fts Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dovecot](https://docs.cpanel.net/tags/dovecot/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#output)

* * *

[Uninstall FTS](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#uninstall-fts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#options)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#output)

* * *

[Uninstall FTS](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/#uninstall-fts)

* * *

## The install\_dovecot\_fts Script

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script/)

Last modified: _2022 September 21_

* * *

## Overview

The `/usr/local/cpanel/scripts/install_dovecot_fts script` enables Internet Message Access Protocol (IMAP) Full-Text Search (FTS) Indexing (powered by Apache Solr™), which provides fast search capabilities for IMAP mailboxes. FTS significantly improves the speed and convenience of the search experience for iOS® device, Microsoft Outlook®, Roundcube, and Mozilla Thunderbird users.

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/install_dovecot_fts
```

### Options

This script does not accept options.

Warning:

The `--help` option will not provide help documentation. Instead, the script will run as if you did not pass an option.


### Output

When the script successfully completes, you will receive a message similar to the following:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```go<br>Loaded plugins: fastestmirror, tsflags, universal-hooks<br>Loading mirror speeds from cached hostfile<br> * EA4: 208.74.121.37<br>Resolving Dependencies<br>--> Running transaction check<br>--> Finished Dependency Resolution<br>Downloading packages:<br>Running transaction check<br>Running transaction test<br>Transaction test succeeded<br>  Installing : cpanel-dovecot-solr-6.6.2-8.1.noarch                        1/1<br>  Verifying  : cpanel-dovecot-solr-6.6.2-8.1.noarch                        1/1<br>Complete!<br>``` |

### Uninstall FTS

To uninstall the Dovecot FTS indexing, run the following command:

```bash
/usr/local/cpanel/scripts/uninstall_dovecot_fts
```

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The cpanel\_dovecot\_solr\_rebuild\_index Script](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×