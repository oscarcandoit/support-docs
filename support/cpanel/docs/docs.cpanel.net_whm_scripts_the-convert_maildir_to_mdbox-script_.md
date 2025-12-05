---
url: "https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/"
title: "The convert_maildir_to_mdbox Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#main-content)

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
4. The convert\_maildir\_to\_mdbox Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/#options)

* * *

## The convert\_maildir\_to\_mdbox Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/)

Last modified: _2021 January 28_

* * *

## Overview

The `/usr/local/cpanel/scripts/convert_maildir_to_mdbox` script lets you convert mailboxes from maildir format to mdbox format. After conversion, the script reconfigures Dovecot to access the converted account in mdbox format.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/convert_maildir_to_mdbox [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--user` | Convert a cPanel account and all of its email accounts to mdbox format. | `--user=username` |
| `--email` | Convert an email account to mdbox format. You **must** use one of the following formats: <br>- `username@example.com`<br>- `username`<br>- `_mainaccount@example.com` | `--email=username@example.com` |
| `--delete-old-format` | Remove the maildir files after a successful conversion to mdbox format. | `--delete-old-format` |
| `--help` | Display the script’s help documentation. | `--help` |

#### Additional Documentation

* * *

- [The build\_maxemails\_config Script](https://docs.cpanel.net/whm/scripts/the-build_maxemails_config-script/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The convert\_mdbox\_to\_maildir Script](https://docs.cpanel.net/whm/scripts/the-convert_mdbox_to_maildir-script/)
- [The copy\_user\_mail\_as\_root Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_root-script/)
- [The copy\_user\_mail\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×