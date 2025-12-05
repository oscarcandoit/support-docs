---
url: "https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/"
title: "Troubleshoot Your Installation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Installation Guide](https://docs.cpanel.net/installation-guide/)
3. Troubleshoot Your Installation


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
[Overview](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#overview) [Security issues](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#security-issues) [License errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#license-errors) [Perl installation errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#perl-installation-errors) [High CPU load on Hyper-V](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#high-cpu-load-on-hyper-v) [Package installation failures](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#package-installation-failures) [Resolver errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#resolver-errors) [Hostname issues](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#hostname-issues) [Installation issues with ESET](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#installation-issues-with-eset) - [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
[Overview](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#overview) [Security issues](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#security-issues) [License errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#license-errors) [Perl installation errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#perl-installation-errors) [High CPU load on Hyper-V](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#high-cpu-load-on-hyper-v) [Package installation failures](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#package-installation-failures) [Resolver errors](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#resolver-errors) [Hostname issues](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#hostname-issues) [Installation issues with ESET](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/#installation-issues-with-eset) - [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - Troubleshoot Your Installation

* * *

## Overview

This documentation describes additional steps to use if you install cPanel & WHM with this guide, but still experience problems.

Important:

- If you check all of the options in this documentation and still experience problems, [submit a ticket to cPanel Support](https://tickets.cpanel.net/).
- To provide cPanel Support with access to your server, read our [Grant cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access) documentation.

## Security issues

##### Problem

When you log in, you may see the message: `There is a problem with this website's security certificate.`

##### Explanation

When you install cPanel & WHM, it attempts to secure your server with an SSL certificate immediately. First, it installs a self-signed hostname certificate. Then, if your hosting provider allows it, your server will attempt to install a free hostname certificate from [Let’s Encrypt™](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/).

However, if you did not set a resolvable Fully Qualified Domain Name (FQDN) as your domain name or get an [automatically-issued hostname](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/), Let’s Encrypt will **not** be able to send you a free certificate. This means that your server will **only** have a self-signed certificate.

If your server **only** has a self-signed certificate, it may display a security warning. This is because most browsers no longer recognize self-signed certificates as secure.

##### Solution

To resolve this issue, first make sure that your server uses a FQDN as its hostname. If it does not, update your domain name to a FQDN in WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).

If your hosting provider allows it, your server can [automatically use](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) a free hostname certificate.

If your hosting provider does **not** allow free hostname certificate replacement, manually replace the server’s self-signed certificate with a certificate that you purchase from WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_) instead.

## License errors

##### Problem

You see license errors during or after the installation process (for example, a License File Expired message).

##### Explanation

- Your license may be expired or improperly configured.
- Your system may not connect properly to the WebPros International, LLC license servers.
- Your server may use an invalid hostname.
- Your server may use an incorrect date and time.

##### Solution

To troubleshoot this issue, perform the steps in our [How to Fix License File Errors](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors) documentation.

## Perl installation errors

##### Problem

You see the following error message during the installation process:

```plaintext
Fatal! Perl must be installed before proceeding!
```

##### Explanation

Perl **must** exist on your server before the installation script for cPanel & WHM can run successfully. If Perl does **not** exist during installation, the cPanel & WHM installer attempts to install Perl as follows:

- For [Red Hat® Enterprise Linux®-derived](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#rhel) operating systems, via the `yum -y install perl` command.

- For Ubuntu® systems, via the `apt -y install perl perl-base` command.


If the installation does not succeed, the system displays this error message.

- We **strongly** recommend that you allow your operating system’s distribution to control the system Perl installation. Do **not** customize this Perl installation.

- For more information about Perl on your server, and which versions of Perl ship with specific operating systems, read our [Guide to Perl in cPanel & WHM](https://api.docs.cpanel.net/guides/guide-to-perl/) documentation. cPanel & WHM servers use multiple Perl environments.


##### Solution

- On AlmaLinux OS, CentOS, or CloudLinux™ servers, make certain that `yum` functions properly. To attempt to install Perl again on any of these operating systems, run the following command:




```bash
yum install perl
```

- On Ubuntu servers, make sure that `apt` functions properly. To attempt to install Perl again on the Ubuntu operating system, run the following command:




```bash
apt -y install perl-base
```


## High CPU load on Hyper-V

##### Problem

The server reports a high CPU load, and Hyper-V’s Dynamic Memory option is enabled.

##### Explanation

This problem is due to an issue with sleep interruptibility in Hyper-V.

##### Solution

For more information and a patch to fix the issue, visit the [LKML](https://lkml.org/lkml/2014/2/13/562) website.

## Package installation failures

##### Problem

One or more RPMs or `.deb` packages fail during installation.

##### Explanation

There are several reasons why your operating system’s package installations may fail.

##### Solution

For steps to fix this issue with RPMs, read our [RPM Installation Failures](https://docs.cpanel.net/knowledge-base/package-management/rpm-installation-failures) documentation.

We currently do not have documentation for how to fix `.deb` package installation failures when installing cPanel & WHM on Ubuntu.

## Resolver errors

##### Problem

You see the following warning during the installation process:

```bash
The system DNS resolvers went missing when cPanel adjusted the hostname.
```

##### Explanation

- Your hostname did not resolve during the installation process and the system replaced it with an [automatically-issued hostname](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/).
- Your system’s DNS resolvers disappeared, and the installation process attempted to fix the issue.

We attempt to detect when your system’s DNS resolvers disappear and correct the issue.

On systems that run AlmaLinux 9 or higher, Rocky Linux™ 9, or CloudLinux 9, the installation process performs the following actions:

- Writes the following contents to the `/etc/NetworkManager/conf.d/99-cpanel.conf` file, which configures the `NetworkManager` service to never overwrite the `/etc/resolv.conf` file:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>[main]<br>dns = none<br>``` |

- Reloads the `NetworkManager` service.

On all systems, the installation restores the contents of the previous `/etc/resolv.conf` file before it checks the hostname.

##### Solution

If your resolvers are not correct, you can use WHM’s [_Resolver Configuration_](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/) interface ( _Home » WHM » Networking Setup » Resolver Configuration_) to add and update the resolvers on your server.

You can update your server’s hostname in WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _Home » WHM » Networking Setup » Change Hostname_).

## Hostname issues

##### Problem

A cloud-hosted server does not retain the hostname setting.

##### Explanation

The `dhclient` script that the cloud hosting provider uses may interfere with cPanel & WHM’s hostname configuration script.

##### Solution

For steps to fix this issue, read our [Cloud-Hosted Hostname Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution) documentation.

## Installation issues with ESET

##### Problem

Some servers reported installation issues with [ESET® File Security](https://www.eset.com/us/business/server-antivirus/file-security-linux/),

##### Explanation

This problem was due to conflicts between ESET and cPanel & WHM in version 88 and earlier.

##### Solution

ESET is a third-party product and we do not provide support for third-party products.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×