---
url: "https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/"
title: "The remove_dovecot_index_files Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#main-content)

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
4. The remove\_dovecot\_index\_files Script


[email](https://docs.cpanel.net/tags/email/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#success)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#options)

* * *

[Success](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/#success)

* * *

## The remove\_dovecot\_index\_files Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script/)

Last modified: _2020 December 16_

* * *

## Overview

You can use the `/usr/local/cpanel/scripts/remove_dovecot_index_files` script to remove the Dovecot index logs and cache files from cPanel mail accounts. You could use this, for example, to remove corrupted index logs and cache files or to remove files that lost synchronization during a transfer.

Note:

The Dovecot service automatically regenerates an account’s index logs and cache files the next time an account logs in.


## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/remove_dovecot_index_files --user username --reseller resellername --all  --verbose
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--user` | The cPanel account that owns the mailboxes from which you wish to remove Dovecot index files. | `/usr/local/cpanel/scripts/remove_dovecot_index_files --user username` |
| ` --reseller` | The reseller account that owns the cPanel accounts which owns the mailboxes from which you wish to remove Dovecot index files. | `/usr/local/cpanel/scripts/remove_dovecot_index_files --user username --reseller resellername` |
| `--all` | Remove Dovecot index files from all email accounts that exist on the server. | `/usr/local/cpanel/scripts/remove_dovecot_index_files --all` |
| `--verbose` | Return expanded output. | `/usr/local/cpanel/scripts/remove_dovecot_index_files --all --verbose` |

Important:

The system treats each flag individually. If you pass an invalid value with a flag, the script will fail.


### Success

If the script succeeds, it will return output similar to the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```go<br># /scripts/remove_dovecot_index_files --user example --verbose<br>...<br>Unlinking '/home/example/mail/.Sent/dovecot.index' …<br>Unlinking '/home/example/mail/.Sent/dovecot.index.log' …<br>Unlinking '/home/example/mail/.Drafts/dovecot.index.log' …<br>Unlinking '/home/example/mail/.Drafts/dovecot.index' …<br>Unlinking '/home/example/mail/.Junk/dovecot.index.log' …<br>Unlinking '/home/example/mail/.Junk/dovecot.index' …<br>Unlinking '/home/example/mail/.Trash/dovecot.index' …<br>Unlinking '/home/example/mail/.Trash/dovecot.index.log' …<br>Unlinking '/home/example/mail/.spam/dovecot.index.log' …<br>Unlinking '/home/example/mail/.spam/dovecot.index.cache' …<br>Unlinking '/home/example/mail/.mailbox_format.cpanel/dovecot.index.log' …<br>[+] 'example' processed.<br>``` |

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