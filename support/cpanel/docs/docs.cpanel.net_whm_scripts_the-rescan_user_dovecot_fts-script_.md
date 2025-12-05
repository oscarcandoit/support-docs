---
url: "https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/"
title: "The rescan_user_dovecot_fts Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#main-content)

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
4. The rescan\_user\_dovecot\_fts Script


[email](https://docs.cpanel.net/tags/email/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#success)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/#success)

* * *

## The rescan\_user\_dovecot\_fts Script

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script/)

Last modified: _2022 January 27_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/rescan_user_dovecot_fts` script to perform a full text search (FTS) scan on an account’s mailboxes.

Important:

If the `cpanel-dovecot-solr` package does not exist on the server, you will receive the following error message:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/usr/local/cpanel/scripts/rescan_user_dovecot_fts --user=example<br>The 'cpanel-dovecot-solr' package is not installed. Full text search rescan not possible<br>``` |

## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/rescan_user_dovecot_fts --user username
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--user` | **Required** \- The user account that owns the mailboxes which you wish to scan. | `/usr/local/cpanel/scripts/rescan_user_dovecot_fts --user example` |

Important:

The system treats each flag individually. If you pass an invalid value with a flag, the script will fail.


### Success

If the script succeeds, it will return output similar to the following example:

```perl
Rescanning mailboxes for full text search indexing for 'example'......4 rescanned... Done
```

#### Additional Documentation

* * *

- [The build\_maxemails\_config Script](https://docs.cpanel.net/whm/scripts/the-build_maxemails_config-script/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The convert\_maildir\_to\_mdbox Script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/)
- [The convert\_mdbox\_to\_maildir Script](https://docs.cpanel.net/whm/scripts/the-convert_mdbox_to_maildir-script/)
- [The copy\_user\_mail\_as\_root Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_root-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×