---
url: "https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/"
title: "The EasyApache 4 FileProtect Option | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#main-content)

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
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. The EasyApache 4 FileProtect Option


[ea4](https://docs.cpanel.net/tags/ea4/) [security](https://docs.cpanel.net/tags/security/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#overview)

* * *

[Functionality](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#functionality)

* * *

[Enable or disable FileProtect](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#enable-or-disable-fileprotect)

* * *

[Requirements](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#compatibility)

* * *

[Tweak Settings](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#tweak-settings)

* * *

[Command line](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#command-line)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#overview)

* * *

[Functionality](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#functionality)

* * *

[Enable or disable FileProtect](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#enable-or-disable-fileprotect)

* * *

[Requirements](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#compatibility)

* * *

[Tweak Settings](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#tweak-settings)

* * *

[Command line](https://docs.cpanel.net/ea4/apache/the-easyapache-4-fileprotect-option/#command-line)

* * *

## The EasyApache 4 FileProtect Option

Last modified: _2024 August 30_

* * *

## Overview

The EasyApache _FileProtect_ option improves the security of each cPanel user’s `public_html` and addon domain document root directories by allowing **only** Apache and the user to view their contents.

In EasyApache 4, the system enables this option by default.

## Functionality

When you enable the _FileProtect_ option, EasyApache performs the following actions:

- Creates the `/var/cpanel/fileprotect` file.






Note:




When you disable this option, EasyApache removes this file.


- Executes the `/usr/local/cpanel/scripts/enablefileprotect` script, which sets more secure [permissions](https://en.wikipedia.org/wiki/Chmod) for each cPanel user’s `/public_html` directory.

- Sets the cPanel user’s `/home/username/` directory to `0711` permissions.

- Sets all document root directories’ GroupID to the `nobody` user with `0750` permissions.







Note:





If you enable the `mod_ruid2` or `mod_mpm_itk` Apache modules, EasyApache will set all document root directories’ GroupID to the `username` user.


When you disable this option, EasyApache resets permissions to their **default settings**, even if you have modified them elsewhere. To do this, EasyApache performs the following actions:

- Resets the user’s `/home/username/` directory to `0711` permissions.

- Resets the user’s `/home/username/public_html` directory Group ID to the `username` user and `0711` permissions.

- Resets each addon domain’s document root directory to `0711` permissions.


## Enable or disable FileProtect

### Requirements

This option does **not** possess any requirements.

### Compatibility

This option does **not** possess any known compatibility issues, and works when you enable the `mod_ruid2` Apache module.

### Tweak Settings

You can enable or disable the _FileProtect_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) with the _Enable File Protect_ option. This option appears in the _Security_ section and defaults to _on_.

### Command line

To enable the _FileProtect_ option via the command line, connect via SSH as the `root` user and run the following script:

```perl
/usr/local/cpanel/scripts/enablefileprotect
```

To disable the FileProtect option, connect via SSH as the `root` user and run the following script:

```perl
/usr/local/cpanel/scripts/disablefileprotect
```

For more information about these scripts, run these scripts with the `--help` flag.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The check\_security\_advice\_changes Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)
- [The securetmp Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×