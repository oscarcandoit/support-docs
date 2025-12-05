---
url: "https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/"
title: "The ea-cpanel-tools Package's Scripts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#main-content)

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
4. The ea-cpanel-tools Package's Scripts


[rpms](https://docs.cpanel.net/tags/rpms/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#overview)

* * *

[Create a new profile](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#create-a-new-profile)

* * *

[Script arguments](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#script-arguments)

* * *

[Provision an EA4 profile](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#provision-an-ea4-profile)

* * *

[Synchronize a user’s PHP configuration](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#synchronize-a-users-php-configuration)

* * *

[Other tools](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#other-tools)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#overview)

* * *

[Create a new profile](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#create-a-new-profile)

* * *

[Script arguments](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#script-arguments)

* * *

[Provision an EA4 profile](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#provision-an-ea4-profile)

* * *

[Synchronize a user’s PHP configuration](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#synchronize-a-users-php-configuration)

* * *

[Other tools](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#other-tools)

* * *

## The ea-cpanel-tools Package's Scripts

Last modified: _2025 July 23_

* * *

## Overview

The `ea-cpanel-tools` package includes scripts that allow you to work with EasyApache 4 (EA4) from the command line rather than in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

## Create a new profile

The `/usr/local/bin/ea_current_to_profile` script creates a new [EasyApache 4 profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#easyapache-4-profile) based on your current EasyApache 4 configuration.

To use this script, run the following command:

```perl
/usr/local/bin/ea_current_to_profile [options]
```

Note:

If you do **not** pass an [argument](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts/#script-arguments) to this script, it creates the profile in the `etc/cpanel/ea4/profiles/custom` directory and names the file automatically. The script then adds it to the list of available custom profiles in the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). The file’s name will resemble the following example:

```perl
current_state_at_2015-08-28_10:10:04.json
```

### Script arguments

| Option | Description | Example |
| --- | --- | --- |
| `--help` | Display a help message. | `/usr/local/bin/ea_current_to_profile --help` |
| `--output=profile_name` | Create a profile from EasyApache 4’s current configuration. In this option, `profile_name` represents the name of the profile file that you wish to create. <br>Important:<br>- You **must** include the `.json` extension in your profile file's name.<br>- Your new profile will only display in the EasyApache 4 interface if you use the `/etc/cpanel/ea4/profiles/custom/` path.<br>- If you do **not** specify a path, the system creates the file in your current working directory. | `/usr/local/bin/ea_current_to_profile --output=/etc/cpanel/ea4/profiles/custom/myprofile.json` |
| `--target-os=operating_system` | Create a profile from EasyApache 4’s current configuration that **excludes** any packages that are incompatible with the targeted operating system. In this option, `operating_system` represents the specified operating system. <br> This option **only** works with CloudLinux™ and Ubuntu® operating systems. You can refer to these systems with the following patterns:<br>- Ubuntu — `xos_version-number`, where `x` is attaches directly to `Ubuntu` and `version-number` includes both the major and minor version numbers.<br>- CloudLinux — `os_version-number`, where `version_number` only includes the major version number.<br>Warning:<br>This option is meant for internal use **only**. | - `/usr/local/bin/ea_current_to_profile --target-os=xUbuntu_22.04`<br>- `/usr/local/bin/ea_current_to_profile --target-os=CloudLinux_9` |

## Provision an EA4 profile

The `/usr/local/bin/ea_install_profile` script provisions a profile from the command line.

To use this script, run the following command, including the **full** file path to the profile file:

```perl
/usr/local/bin/ea_install_profile [--install] profile_file
```

Note:

If you do **not** pass the `--install` option, the system displays the changes it will make if you provision the profile before you install it. You **must** pass the `--install` option to provision the profile.

## Synchronize a user’s PHP configuration

The `/usr/local/bin/ea_sync_user_phpini_settings` script synchronizes the `php.ini` file in a user’s [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) with the corresponding `.user.ini` and [`.htaccess`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#htaccess) files that also exist there. This ensures that the user’s PHP configuration behaves as expected.

Note:

**Only** the `root` user can run this script.

To use this script, run the following command:

```perl
/usr/local/bin/ea_sync_user_phpini_settings [options]
```

| Option | Description | Example |
| --- | --- | --- |
| `--help` | Displays a help message. | `/usr/local/bin/ea_sync_user_phpini_settings --help` |
| `--user=username` | Sync the specified user’s `.ini` files. <br>Note:<br>You can pass this option multiple times. | `/usr/local/bin/ea_sync_user_phpini_settings --user=user1 --user-user2` |
| `--all-users` | Sync the `.ini` files for all users on the system. | `/usr/local/bin/ea_sync_user_phpini_settings --all-users` |

## Other tools

The `ea-cpanel-tools` package also contains the following tools:

- The `ea4-metainfo.json` file, which contains EasyApache 4’s default PHP version, PHP handler, and the packages shown in the _Additional Packages_ section of the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

- The [_EasyApache 4 Recommendations_](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations/) system, which provides a variety of recommendations about the packages you can select.

- The `ea_convert_php_ini` script, which converts a user’s existing `php.ini` file to one that EasyApache 4 can use if the user’s PHP version uses [suPHP](https://smarsching.github.io/suphp/Home.html). This conversion happens during the EasyApache 3 to EasyApache 4 migration process.






Warning:





We **strongly** recommend that you do not manually execute this script.


#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [How to Build and Install Custom RPMs on Red-Hat Systems](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×