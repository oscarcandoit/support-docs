---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/"
title: "How to Use Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#main-content)

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
4. How to Use Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9


[operatingsystems](https://docs.cpanel.net/tags/operatingsystems/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#overview)

* * *

[Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9)

* * *

[Trouble with your own code](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#trouble-with-your-own-code)

* * *

[Trouble with code from another source](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#trouble-with-code-from-another-source)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#overview)

* * *

[Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9)

* * *

[Trouble with your own code](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#trouble-with-your-own-code)

* * *

[Trouble with code from another source](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/#trouble-with-code-from-another-source)

* * *

## How to Use Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9

Last modified: _2025 August 28_

* * *

## Overview

This document explains how the [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/), and [CloudLinux™ 9](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/) operating systems handle the `python` command. Due to changes in how these operating systems call this command, you may need to adjust your code.

Important:

We **removed** Python 2 in cPanel & WHM version 126. If your server runs cPanel & WHM version 126 or later, you **must** use Python 3.

## Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9

Since Python 2 is now end-of-life and many systems use Python 3, the `python` command may not refer to the correct version of Python. As many systems create an alias for the `python` command that refers to a specific version of Python, this alias may not point to the correct version of Python for your system.

On AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9 servers, the `/usr/bin/python` command does not exist. This means that the `python` command will **not** work. Instead, you **must** specify the version of Python installed on your system that you wish to use.

On AlmaLinux 8, Rocky Linux 8, and Ubuntu servers that run cPanel & WHM version 124 or earlier, you may specify either Python 2 or Python 3. On servers running AlmaLinux 9 or higher, Rocky Linux 9, or CloudLinux 9, you **must** specify Python 3.

- To run Python 2, use the `python2` command.
- To run Python 3, use the `python3` command.

### Trouble with your own code

If you experience trouble running Python code that you control, make certain that your code refers to the specific version of Python installed on your server rather than just `/usr/bin/python`.

Because Python 2 no longer receives updates and we removed it in cPanel & WHM version 126, we **strongly** recommend that you update your code to use Python 3 syntax. Python includes a [conversion tool](https://docs.python.org/3.6/library/2to3.html) that will perform many of the necessary updates to convert your code from version 2 to 3.

### Trouble with code from another source

If you have trouble with code that you do not control, contact the provider of the code and ask them to update their code to refer to a specific version of Python.

To work around this issue, you can create a symlink or use [alternatives](https://www.linux.org/docs/man8/alternatives.html) to redirect the `/usr/bin/python` command to the version of Python installed on your server.

#### Use alternatives to redirect your python command to Python 3

On AlmaLinux, Rocky Linux, and CloudLinux 9 servers, to use `alternatives` to redirect the `python` command to Python 3, run the following command:

```bash
alternatives --install /usr/bin/python python /usr/bin/python3 1
```

On Ubuntu servers, to use `update-alternatives` to redirect the `python` command to Python 3, run the following command:

```bash
update-alternatives --install /usr/bin/python python /usr/bin/python3 1
```

#### Use symlinks to redirect your python command to Python 3

On AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9 servers, to create a symlink to redirect the `python` command to Python 3, run the following command:

```bash
ln -s /usr/bin/python3 /usr/bin/python
```

#### Additional Documentation

* * *

- [Amazon Lightsail Instance Management](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/)
- [Create an Amazon® RDS™ Instance](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/)
- [Create Custom PHP Directives](https://docs.cpanel.net/knowledge-base/web-services/create-custom-php-directives/)
- [DigitalOcean® Droplet™ Management](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/)
- [DigitalOcean® Guide](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-guide/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×