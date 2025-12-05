---
url: "https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/"
title: "cPanel DNSOnly® Installation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#main-content)

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
3. cPanel DNSOnly® Installation


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
[Overview](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#overview) [Configuration requirements](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#configuration-requirements) [Install cPanel DNSOnly](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#install-cpanel-dnsonly) [Access cPanel DNSOnly](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#access-cpanel-dnsonly) [cPanel DNSOnly and DNSSEC](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#cpanel-dnsonly-and-dnssec) - [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
[Overview](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#overview) [Configuration requirements](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#configuration-requirements) [Install cPanel DNSOnly](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#install-cpanel-dnsonly) [Access cPanel DNSOnly](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#access-cpanel-dnsonly) [cPanel DNSOnly and DNSSEC](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/#cpanel-dnsonly-and-dnssec) - [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - cPanel DNSOnly® Installation

* * *

## Overview

This document describes how to install cPanel DNSOnly® on your server.

- For more information about cPanel DNSOnly, read our [cPanel DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly) documentation.
- For more information about DNS cluster configuration, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations) documentation.

You can [download cPanel DNSOnly](http://httpupdate.cpanel.net/) for free.

## Configuration requirements

To successfully install and use cPanel DNSOnly, your system **must** meet the following requirements:

- Your server **must** meet our [system requirements](https://docs.cpanel.net/installation-guide) for its specific operating system.
- Your server **cannot** have previous content on it.
- Your server **must** allow traffic on ports `53`, `953`, and `2087`.
- If you want the server to send email notifications, you **must** allow traffic on port `25`.
- Your DNS cluster configuration must meet the requirements for DNS clusters in our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations) documentation.
- If your DNS cluster will include domains that use DNSSEC, all of the cluster’s servers **must** run PowerDNS.

## Install cPanel DNSOnly

To install cPanel DNSOnly, perform the following steps:

1. Navigate to the `/home` directory on your server.
2. To fetch the latest installation files from WebPros International, LLC’s servers, run the following command:



```bash
curl -o latest-dnsonly -L https://securedownloads.cpanel.net/latest-dnsonly
```

3. To open and execute the installation files, run the following command:



```bash
sh latest-dnsonly
```


## Access cPanel DNSOnly

To access the cPanel DNSOnly interface, perform the following steps:

1. Navigate to `https://IP:2087` in your preferred browser.






Note:





In this address, `IP` represents your server’s IP address. If you have a domain name that resolves to the server, you can use it in place of the IP address.

2. Enter `root` in the _Username_ text box.
3. Enter your password in the _Password_ text box.
4. Click _Log in_.

## cPanel DNSOnly and DNSSEC

Warning:

If the DNS cluster includes domains that use DNSSEC, all of the cluster’s servers **must** run PowerDNS.

cPanel & WHM supports DNS Security Extensions (DNSSEC) in DNS clusters. A DNS resolver will compare the DNS server’s DNSSEC record to the DS record at the registrar. If they match, the record is valid.

- You can create, manage, or delete a domain’s DNSSEC keys in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_).
- The system uses [the `/usr/local/cpanel/scripts/dnssec-cluster-keys` script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/) to synchronize and revoke currently-active DNSSEC keys in a DNS cluster. If you wish to perform this step manually, run that script as the `root` user.

For more information about DNSSEC in cPanel & WHM, read our [DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×