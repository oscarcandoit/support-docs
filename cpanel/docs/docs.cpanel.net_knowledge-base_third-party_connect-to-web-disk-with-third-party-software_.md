---
url: "https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/"
title: "Connect to Web Disk with Third-Party Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. Connect to Web Disk with Third-Party Software


[webdisk](https://docs.cpanel.net/tags/webdisk/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#overview)

* * *

[Connect to Web Disk with a configuration script](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#connect-to-web-disk-with-a-configuration-script)

* * *

[Connect to Web Disk manually](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#connect-to-web-disk-manually)

* * *

[Apple Operating system](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#apple-operating-system)

* * *

[BitKinex](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#bitkinex)

* * *

[Konqueror](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#konqueror)

* * *

[Nautilus](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#nautilus)

* * *

[Transmit](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#transmit)

* * *

[Windows® Operating System](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#windows-operating-system)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#overview)

* * *

[Connect to Web Disk with a configuration script](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#connect-to-web-disk-with-a-configuration-script)

* * *

[Connect to Web Disk manually](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#connect-to-web-disk-manually)

* * *

[Apple Operating system](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#apple-operating-system)

* * *

[BitKinex](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#bitkinex)

* * *

[Konqueror](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#konqueror)

* * *

[Nautilus](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#nautilus)

* * *

[Transmit](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#transmit)

* * *

[Windows® Operating System](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/#windows-operating-system)

* * *

## Connect to Web Disk with Third-Party Software

Last modified: _2025 June 10_

* * *

## Overview

You may want to connect to the [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/) feature through software that includes the WebDAV functionality, such as Transmit™ or BitKinex.

## Connect to Web Disk with a configuration script

cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) interface ( _cPanel » Home » Files » Web Disk_) provides configuration scripts for many common operating systems, applications, and devices. Availability of configuration scripts depends on the version of cPanel & WHM that your server uses.

To download the configuration script for a supported operating system or application, perform the following steps:

1. Navigate to cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) interface ( _cPanel » Home » Files » Web Disk_).
2. Click _Configure Client Access_ for the desired account.
3. Select the desired connection type from the menus.
4. Click _Download Configuration Script_ to download the configuration script.
5. If your system will not uncompress it automatically, unzip the `.zip` configuration script file.
6. Search for the `hostname Secure WebDisk` file, where hostname represents your server’s hostname.
7. Open the file and allow it to run in order to configure _Web Disk_.

## Connect to Web Disk manually

Important:

To find the configuration details for your _Web Disk_ account, navigate to cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) interface ( _cPanel » Home » Files » Web Disk_) and click _Configure Client Access_ for the desired account. The interface will display the configuration information for the account.

In every connection method, _Additional Web Disk Account_ usernames **must** include the domain for the account (for example, `username@example.com`). The _Main Web Disk Account_ does **not** require the domain.

### Apple Operating system

To connect to Apple® operating systems (for example, macOS® X or Sierra), perform the following steps:

1. Open _Apple’s Finder_ application.
2. From the _Go_ menu, select _Connect to Server_.
3. Enter the _Web Disk_ server’s URL in the _Server Address_ text box (for example, `https://example.com:2078`).
4. Click _Connect_.
5. Enter your _Web Disk_ account’s username and password.
6. Click _Connect_.

### BitKinex

To connect to _Web Disk_ with BitKinex, perform the following steps:

1. Open BitKinex.
2. Select _Http/WebDAV_ in the menu.
![A BitKinex menu with the Http/WebDAV folder selected](https://docs.cpanel.net/img/bitkinex1.png)
3. In the _Server_ window, enter your _Web Disk_ account’s login information. The new connection will appear in the BitKinex list.
![A BitKinex menu with the Http/WebDAV section open to show MyWebDiskSite](https://docs.cpanel.net/img/bitkinex2.png)
4. Double-click your site’s name to open your _Web Disk_.
![MyWebDiskSite's Web Disk](https://docs.cpanel.net/img/bitkinex3.png)

For more information, visit the [BitKinex](http://www.bitkinex.com/) website.

### Konqueror

To connect to the [Konqueror](https://apps.kde.org/konqueror/) application, perform the following steps:

1. Open Konqueror.
2. Paste the following address into the address bar, where `example.com` represents your server’s hostname.


```perl
WebDAVs://example.com:2078
```

3. To save the location for future use, click _Bookmarks_ and then select _Add Bookmark_.

### Nautilus

To connect to the [Nautilus](https://apps.gnome.org/Nautilus/) application, perform the following steps:

1. Open Nautilus. If you do not see an address bar, click _Go_ and then select _Location_.

2. Paste the following address into the address bar, where `example.com` represents your server’s hostname.



```perl
davs://example.com:2078
```

3. To save the location for future use, click _Bookmarks_ and then select _Add Bookmark_.


### Transmit

To connect to _Web Disk_ through Transmit™, perform the following steps:

1. Open Transmit.
2. Click _WebDAV_.
3. Enter your _Web Disk_ account’s login information.
4. Click _Connect_ to open the Web Disk folder. ![an example Web Disk folder](https://docs.cpanel.net/img/transmit1.png)


Note:




Choose the _Mount as Disk_ option to access the Web Disk directly from your _Finder_ window.



    For more information, visit the [Transmit website](http://www.panic.com/transmit).

### Windows® Operating System

To connect to Microsoft® Windows operating systems (for example, Windows® 8 or Windows® 10), perform the following steps:

1. In your preferred browser, navigate to `https://example.com:2078`, where `example.com` represents your server’s hostname.
2. In the _Start_ menu, select _My Network Places_.
3. Perform the appropriate actions for your system:
   - **Other Windows operating systems** — Click the icon for the domain that corresponds to the _Web Disk_ account’s domain.
   - **Windows® XP** — Click Add a network place, click Next, select Choose another network location, and then follow the prompts to finish the configuration process.

Important:

- If you use Windows XP, Windows® Vista, or Windows® 2003, you may experience errors when you attempt to connect to your _Web Disk_ account. These operating systems require a patch that Microsoft no longer offers, and it no longer supports these operating systems.
- If you use Windows® 7, a discrepancy may exist between the amount of disk space that the system reports and the actual available disk space. This happens because the WebDAV protocol, which _Web Disk_ uses, cannot query a server’s disk capacity.

#### Additional Documentation

* * *

- [cPanel Web Disk Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-web-disk-configuration/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [The Let's Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/)
- [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×