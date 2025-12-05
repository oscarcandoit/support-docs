---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/"
title: "Guide to Node.js™ Installations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. Guide to Node.js™ Installations


[whmui](https://docs.cpanel.net/tags/whmui/) [nodejs](https://docs.cpanel.net/tags/nodejs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#requirements)

* * *

[Install Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#install-nodejs)

* * *

[Installing Node.js on servers running RHEL-derived operating systems](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#installing-nodejs-on-servers-running-rhel-derived-operating-systems)

* * *

[Installing Node.js on servers running Ubuntu](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#installing-nodejs-on-servers-running-ubuntu)

* * *

[Install a Node.js application](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#install-a-nodejs-application)

* * *

[Uninstall Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#uninstall-nodejs)

* * *

[Troubleshoot Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#troubleshoot-nodejs)

* * *

[Included applications](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#included-applications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#requirements)

* * *

[Install Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#install-nodejs)

* * *

[Installing Node.js on servers running RHEL-derived operating systems](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#installing-nodejs-on-servers-running-rhel-derived-operating-systems)

* * *

[Installing Node.js on servers running Ubuntu](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#installing-nodejs-on-servers-running-ubuntu)

* * *

[Install a Node.js application](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#install-a-nodejs-application)

* * *

[Uninstall Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#uninstall-nodejs)

* * *

[Troubleshoot Node.js](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#troubleshoot-nodejs)

* * *

[Included applications](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#included-applications)

* * *

## Guide to Node.js™ Installations

Last modified: _2025 November 10_

* * *

## Overview

Node.js™ is an open-source server environment that runs JavaScript. It does not use threads and does not block processes. Because of this, it provides efficient resource management.

For more information about Node.js, visit the [Node.js website](https://nodejs.org/).

## Requirements

Before you can install Node.js, your system **must** meet the following requirements:

- You **must** possess `root`-level access to the server.
- Your server’s package manager **must** function properly. For more information about package managers, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.

## Install Node.js

### Installing Node.js on servers running RHEL-derived operating systems

You can install Node.js on all [supported Red Hat® Enterprise License® (RHEL)-based operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system) with one of the following methods:

- In the interface, install the Node.js package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).
- On the command line, use your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics) to install one of the following packages:

  - `ea-nodejs16`


    Note:




    If your system runs CentOS 7, you can **only** install the `ea-nodejs16` package.


  - `ea-nodejs18`
  - `ea-nodejs20`
  - `ea-nodejs22`

### Installing Node.js on servers running Ubuntu

To install Node.js on Ubuntu® operating systems run the following commands, where `20.x` represents the Node.js version that you want to install:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>curl -s https://deb.nodesource.com/setup_20.x | sudo bash<br>apt install nodejs<br>apt install ea-apache24-mod-passenger<br>ls -al /etc/cpanel/ea4/passenger*.system-default<br>``` |

## Install a Node.js application

cPanel users can install Node.js web applications in one of the following ways:

- Clone an existing application in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_).

- Create a new application.
  - For information on how to do this for a RHEL-based server, read our [_How to Install a Node.js Application_](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/) documentation.
  - For information on how to do this for a server that runs Ubuntu, AlmaLinux OS 9 or higher, or Rocky Linux™ 9, read our [_Using Passenger Applications_](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation.

The [Node.js Foundation](https://foundation.nodejs.org/) provides a list of [Node.js applications](https://foundation.nodejs.org/resources/app-showcase). This list is not comprehensive.

## Uninstall Node.js

You can uninstall Node.js from a server running an RHEL-derived operating system with one of the following methods:

- In the interface, uninstall the Node.js package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

- On the command line, use your [package manager](https://docs.cpanel.net/ea4/basics/package-manager-basics) to uninstall your NodeJS package.


To uninstall Node.js from an Ubuntu server, run the following command:

```bash
apt-get purge --auto-remove nodejs
```

## Troubleshoot Node.js

If you experience issues with your Node.js installation, use Phusion Passenger’s™ [Troubleshooting Passenger Standalone and Node.js](https://www.phusionpassenger.com/library/admin/standalone/troubleshooting/nodejs/#common-problems-specific-to-node.js) documentation to troubleshoot the issue.

If you experience issues with the port on which your Node.js applications listens, use Phusion Passenger’s™ [Reverse port binding in Node.js](https://www.phusionpassenger.com/library/indepth/nodejs/reverse_port_binding.html) documentation to troubleshoot the issue.

## Included applications

When you install Node.js, the package includes the following applications:

- [Node.js](https://nodejs.org/)
- [NPM](https://docs.npmjs.com/) — A Node process manager.
- [NPX](https://www.npmjs.com/package/npx) — A Node process runner.

The system stores these applications in the `/opt/cpanel/ea-nodejs16/bin/` directory.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×