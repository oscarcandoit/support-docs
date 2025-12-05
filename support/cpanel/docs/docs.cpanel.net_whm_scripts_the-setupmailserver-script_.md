---
url: "https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/"
title: "The setupmailserver Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#main-content)

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
4. The setupmailserver Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/#options)

* * *

## The setupmailserver Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/setupmailserver` script lets you select a mail server.

Note:

cPanel & WHM **only** ships with the [Dovecot](https://www.dovecot.org/) mail server.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/setupmailserver [options] [mailserver]
```

Important:

This script **only** accepts the following `mailserver` values:

- `dovecot` — The Dovecot mail server.
- `disabled` — This disables local [POP3](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#pop3) and [IMAP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#imap) functionality. Dovecot will **only** function in authentication-only mode.

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--force` | Force the system to perform the mail server conversion. | `--force` |
| `--current` | Display the currently-configured mail server. | `--current` |
| `--help` | Display the script’s help documentation. | `--help` |

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