---
url: "https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/"
title: "Using Passenger Applications | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. Using Passenger Applications


[ruby](https://docs.cpanel.net/tags/ruby/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#overview)

* * *

[The Passenger package](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#the-passenger-package)

* * *

[Install the package](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#install-the-package)

* * *

[Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#using-passenger-applications)

* * *

[Default application paths](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#default-application-paths)

* * *

[Missing parameters error](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#missing-parameters-error)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#overview)

* * *

[The Passenger package](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#the-passenger-package)

* * *

[Install the package](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#install-the-package)

* * *

[Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#using-passenger-applications)

* * *

[Default application paths](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#default-application-paths)

* * *

[Missing parameters error](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/#missing-parameters-error)

* * *

## Using Passenger Applications

Last modified: _2025 August 28_

* * *

## Overview

This document explains how to use [Passenger](https://www.phusionpassenger.com/) applications with the `ea-apache24-mod-passenger` package.

Note:

- This is the **only** option available for systems that run Ubuntu.
- This option is **also** available on systems that run AlmaLinux OS 9 or higher and Rocky Linux™ 9.
- For information on how to install an application on other Red Hat® Enterprise License® (RHEL)-based servers, read our [How to Install a Node.js Application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/) documentation.

## The Passenger package

The `ea-apache24-mod-passenger` package replaces the `ea-ruby2*-mod_passenger` packages. In the previous packages, when you installed Passenger, you also installed Ruby. The version of the package that you installed depended on your operating system.

With this package, Ruby is **no longer** installed with Passenger. When you install this Passenger package, the system uses the newest installed version of Ruby, NodeJS, and Python that exists on the system. This simplifies the installation process and ensures compatibility with future versions.

If you want your new application to use a different version than one of these, you **must** configure it manually.

### Install the package

You can install the `ea-apache24-mod-passenger` package in the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) or on the command line with your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics/).

## Using Passenger Applications

You can use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _Home » cPanel » Software » Application Manager_) to install your Passenger applications. Any new applications will use the most recent version of Ruby, NodeJS, or Python installed on the system. Any previously-installed applications will continue to use their existing configuration.

### Default application paths

You can set your Passenger default paths in the following files:

- Ruby — `/etc/cpanel/ea4/passenger.ruby`
- NodeJS — `/etc/cpanel/ea4/passenger.nodejs`
- Python — `/etc/cpanel/ea4/passenger.python`

This package also sets the following symlinks for the newest installed version of Ruby, NodeJS, and Python that exists on the system:

- Ruby — `/etc/cpanel/ea4/passenger.ruby.system-default`
- NodeJS — `/etc/cpanel/ea4/passenger.nodejs.system-default`
- Python — `/etc/cpanel/ea4/passenger.python.system-default`

### Missing parameters error

If you receive an error that parameters are missing in cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _Home » cPanel » Software » Application Manager_), you can run the following command to reset your Passenger application settings:

```bash
/usr/local/bin/ea-passenger-runtime-applications-settings --fix
```

This script is **only** available if the `ea-passenger-runtime` package is installed on your system. It verifies and, if necessary, resets the settings for your system’s Ruby, Python, and NodeJS. This ensures they work properly with your Passenger applications.

You can also view your Passenger application settings with the following command:

```bash
/usr/local/bin/ea-passenger-runtime-applications-settings
```

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×