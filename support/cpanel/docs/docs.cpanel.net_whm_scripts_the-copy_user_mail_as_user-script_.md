---
url: "https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/"
title: "The copy_user_mail_as_user Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#main-content)

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
4. The copy\_user\_mail\_as\_user Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/#example)

* * *

## The copy\_user\_mail\_as\_user Script

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script/)

Last modified: _2021 March 19_

* * *

## Overview

The `/usr/local/cpanel/scripts/copy_user_mail_as_user` script copies a cPanel account’s mail to or from a remote server as the account. After you run the script, it will prompt for an API token for the cPanel account on the remote server.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/copy_user_mail_as_user [options]
```

## Options

Use the following options with this script:

| Option | Description | Example |
| --- | --- | --- |
| `--mode` | **Required**<br> Whether to copy the account’s mail to the local server or a remote server: <br>- `tolocal` — Download mail from a remote server to the local server.<br>- `toremote` — Upload mail from the local server to a remote server. | `--mode=toremote` |
| `hostname` | **Required**<br> The hostname to copy the account’s mail to or from. | `example.com` |
| `username` | **Required**<br> The cPanel account’s username. | `exampleuser` |
| `--help` | Display the script’s help documentation | `--help` |

## Example

The following example uploads the `exampleuser` account’s mail to the `example.com` remote server:

```bash
/usr/local/cpanel/scripts/copy_user_mail_as_user --mode=toremote example.com exampleuser
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