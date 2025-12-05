---
url: "https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/"
title: "FastUpdate Cache System FAQ | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [Knowledge Base](https://docs.cpanel.net/manage2/knowledge-base/)
4. FastUpdate Cache System FAQ


[manage2](https://docs.cpanel.net/tags/manage2/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#overview)

* * *

[How do I create a FastUpdate Cache mirror?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-create-a-fastupdate-cache-mirror)

* * *

[How do I view a list of servers that my FastUpdate Cache server monitors?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-view-a-list-of-servers-that-my-fastupdate-cache-server-monitors)

* * *

[How do I troubleshoot FastUpdate errors?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-troubleshoot-fastupdate-errors)

* * *

[Installation errors](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#installation-errors)

* * *

[Post-installation errors](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#post-installation-errors)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#overview)

* * *

[How do I create a FastUpdate Cache mirror?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-create-a-fastupdate-cache-mirror)

* * *

[How do I view a list of servers that my FastUpdate Cache server monitors?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-view-a-list-of-servers-that-my-fastupdate-cache-server-monitors)

* * *

[How do I troubleshoot FastUpdate errors?](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#how-do-i-troubleshoot-fastupdate-errors)

* * *

[Installation errors](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#installation-errors)

* * *

[Post-installation errors](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/#post-installation-errors)

* * *

## FastUpdate Cache System FAQ

Last modified: _2025 November 5_

* * *

## Overview

The FastUpdate Cache system serves as an on-demand cache for your servers. This system accepts update requests from cPanel & WHM
servers and provides them with the most recent software versions. The FastUpdate Cache system allows you to speed up new feature
installations for your cPanel & WHM servers.

A FastUpdate Cache server provides the following benefits:

- Provides cPanel & WHM updates from the `httpupdate` servers when you request them.
- Reduces redundant file transfers outside of your network when you download new features.
- Simplifies the cPanel & WHM deployment practices for current customers in the `httpupdate` network.
- Allows an easy method for you to participate in the `httpupdate` network.

When you install the FastUpdate Cache package, you can configure your cPanel & WHM servers to download updates from the mirror.

## How do I create a FastUpdate Cache mirror?

Important:

- You can only create a FastUpdate Cache mirror on a AlmaLinux 9 server.
- We strongly suggest that at least 50 gigabytes (GB) of total disk space, and 45 GB of available disk space, exist on the server.
  - The Varnish web accelerator requires at least 40 GB of available disk space to function.
- Before you run this script, you must disable SELinux on the server, or the installation script will fail.

Before you create a FastUpdate Cache mirror, install the `firewalld` daemon on the server. To do this, run the following commands:

```
sudo dnf install firewalld
sudo systemctl enable firewalld
sudo systemctl start firewalld
```

To install the FastUpdate Cache Package, perform the following steps:

1. Log in to the server as the `root` user via SSH.
2. Run the following script:

```
curl -L https://updateseeds.cpanel.net/install-almalinux9.sh | sh
```

The script performs the following actions:

- Installs required `dnf` repositories.
- Installs the `collectd` daemon and the Varnish web accelerator cache.
- Configures the `collectd` daemon to function on the server.
- Configures the Varnish web accelerator to function on the server.
- Configures the Varnish web accelerator’s firewall to open port `80`.

## How do I view a list of servers that my FastUpdate Cache server monitors?

To return a list of servers that a FastUpdate Cache server monitors, enter the following URL in a web browser:

```
https://updateseeds.cpanel.net/fastupdate_sources.pl
```

This URL returns a list of server IP addresses that the FastUpdate Cache server monitors, one per line. For example:

```
http://208.74.121.35/
http://208.74.121.41/
```

## How do I troubleshoot FastUpdate errors?

The following sections list some common FastUpdate Cache server errors and how to troubleshoot them.

Note:

For these errors, perform the troubleshooting steps before you rebuild your server and reinstall the FastUpdate Cache package.

### Installation errors

```bash
Your server does not possess enough free disk space.
```

The server on which you install the FastUpdate Cache package must contain at least 40 GB of available disk space. If your server contains less
than this amount, the system returns the following error message:

```
Jul 29 08:49:20 whm-11-50-c7.vm.local varnishd[6100]: Error: (-sfile) size "40G":
larger than file system
```

To troubleshoot this error, increase the available disk space on your server to at least 40 GB and run the installation script again.

* * *

```bash
You execute the installation script as a non-root user.
```

If you attempt to execute the FastUpdate Cache package installation script as a user other than the root user, the system returns the following error
message:

```
You must run this command as root.
```

To troubleshoot this issue, log in to the server as the `root` user and run the installation script again.

* * *

```bash
You execute the installation script on a server that runs AlmaLinux 8 or earlier.
```

If you attempt to execute the FastUpdate Cache package installation script on a non-AlmaLinux 9 server, the system returns the following error message:

```
You must install the package on AlmaLinux 9
```

To troubleshoot this issue, confirm that AlmaLinux 9 exists on your server and run the installation script again.

* * *

```bash
You leave SELinux enabled on the server.
```

You **must** set SELinux to run in `permissive` mode, or disable SELinux, before you attempt to install the FastUpdate Cache package. If you do **not**
perform either of these actions, Varnish cannot install.

If you attempt to execute the FastUpdate Cache package installation script on a server with SELinux in `enforcing` mode, the system returns the
following error message:

```
SELinux cannot run in 'enforcing' mode. Set the 'SELINUX’ line to ‘disabled' or
'permissive' in the /etc/selinux/config file, run the 'setenforce 0’ command, and
rerun the installation script.
```

To disable SELinux, open the `/etc/selinux/config` file with a text editor and set the `SELINUX` line to `permissive` or `disabled`. For
example:

```
SELINUX=disabled
```

After you perform this action, run the `setenforce 0` command and run the installation script again.

Important:

If you do not run the `setenforce 0` command before you re-run the installation script, the system returns the following error
message:

```
SELinux cannot run in 'enforcing' mode. Run the ‘setenforce 0’ command and rerun
```

### Post-installation errors

If the FastUpdate Cache package installs correctly on your server, but the server does not function, one of the following issues may exist:

```bash
The http-varnish Varnish daemon does not currently run on the server.
```

A FastUpdate Cache mirror requires the `http-varnish` daemon to run on the server. If the `http-varnish` daemon does not run on the server,
the system returns an error message that resembles the following example:

```
Failed to issue method call: Unit httpupdate-varnish.service failed to load: No such
file or directory.
```

To troubleshoot this issue, disable the `systemctl varnish` daemon and enable the `http-varnish` daemon. To do this, run the following
series of commands:

```
systemctl stop varnish
systemctl disable varnish
systemctl enable httpupdate-varnish
systemctl start httpupdate-varnish
```

For more information, read [Varnish Cache’s Troubleshooting Varnish](https://www.varnish-cache.org/docs/trunk/users-guide/troubleshooting.html) documentation.

* * *

```bash
More than one service's firewall attempts to listen on port 80.
```

You can only configure **one** service’s firewall to open port `80`. If more than one service attempts to open port `80`, your FastUpdate Cache server cannot function.

To troubleshoot this issue, remove one of the services whose firewall attempts to open port `80`. To do this, run the following series of commands:

```
firewall-cmd --permanent --zone=public --remove-service=https
firewall-cmd --reload
```

#### Additional Documentation

* * *

- [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/)
- [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/)
- [cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/)
- [Manage2 Authentication Methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/)
- [Manage2 Quickstart Development Guide](https://docs.cpanel.net/manage2/knowledge-base/manage2-quickstart-development-guide/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×