---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/"
title: "How to Move All cPanel Accounts from One Server to Another | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Move All cPanel Accounts from One Server to Another


[transfers](https://docs.cpanel.net/tags/transfers/) [migrations](https://docs.cpanel.net/tags/migrations/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#overview)

* * *

[Migrate your cPanel accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#migrate-your-cpanel-accounts)

* * *

[Install cPanel & WHM on your target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#install-cpanel--whm-on-your-target-server)

* * *

[Copy all service configurations to the target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#copy-all-service-configurations-to-the-target-server)

* * *

[Copy all accounts to the target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#copy-all-accounts-to-the-target-server)

* * *

[Shut down your source server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#shut-down-your-source-server)

* * *

[Finish your transfer](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#finish-your-transfer)

* * *

[Confirm that you possess a valid cPanel license](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#confirm-that-you-possess-a-valid-cpanel-license)

* * *

[Change the target server main IP address to the source server IP address](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#change-the-target-server-main-ip-address-to-the-source-server-ip-address)

* * *

[Check the IP addresses of the transferred accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#check-the-ip-addresses-of-the-transferred-accounts)

* * *

[Configure your target server’s DNS zone files](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#configure-your-target-servers-dns-zone-files)

* * *

[Add the target server to the DNS cluster](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#add-the-target-server-to-the-dns-cluster)

* * *

[Reinstall all SSL certificates](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#reinstall-all-ssl-certificates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#overview)

* * *

[Migrate your cPanel accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#migrate-your-cpanel-accounts)

* * *

[Install cPanel & WHM on your target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#install-cpanel--whm-on-your-target-server)

* * *

[Copy all service configurations to the target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#copy-all-service-configurations-to-the-target-server)

* * *

[Copy all accounts to the target server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#copy-all-accounts-to-the-target-server)

* * *

[Shut down your source server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#shut-down-your-source-server)

* * *

[Finish your transfer](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#finish-your-transfer)

* * *

[Confirm that you possess a valid cPanel license](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#confirm-that-you-possess-a-valid-cpanel-license)

* * *

[Change the target server main IP address to the source server IP address](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#change-the-target-server-main-ip-address-to-the-source-server-ip-address)

* * *

[Check the IP addresses of the transferred accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#check-the-ip-addresses-of-the-transferred-accounts)

* * *

[Configure your target server’s DNS zone files](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#configure-your-target-servers-dns-zone-files)

* * *

[Add the target server to the DNS cluster](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#add-the-target-server-to-the-dns-cluster)

* * *

[Reinstall all SSL certificates](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/#reinstall-all-ssl-certificates)

* * *

## How to Move All cPanel Accounts from One Server to Another

_Valid for versions 112 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/108/)

#### [112](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)

Last modified: _2025 July 14_

* * *

## Overview

This tutorial explains how to migrate your cPanel accounts, SSL certificates, and main server IP address from one server to another. Typically, you would do this when you need to replace your old source server with a new target server.

Warning:

- Your websites will likely experience downtime during this process.
- We do **not** recommend that you transfer accounts with calendars or contacts data from a server that runs cPanel & WHM version 120 or later to a server that runs cPanel & WHM version 118 or earlier. If you do this, you will need to manually copy and import the accounts’ calendars and contacts data once the transfer has completed.
- This procedure assumes that your server’s IP addresses are portable, and that you can migrate them from the source server to the target server. If you use a third-party data center or hosting provider for your cPanel & WHM server, contact them to confirm that you can migrate your IP addresses.

## Migrate your cPanel accounts

### Install cPanel & WHM on your target server

Before you transfer the accounts, install cPanel & WHM on your new target server. To do so, follow the steps in our [Installation Guide](https://docs.cpanel.net/installation-guide).

During the installation process, select a hostname and main IP address for the target server. You **must** select a main IP address that differs from your source server.

Important:

- The replacement cPanel & WHM server **should** contain identical software to the old source server. This includes MySQL® or MariaDB®, PHP, PHP extensions, Apache®, Apache extensions, and other software options.
  - If you do **not** use the same version of MySQL or MariaDB on the target server, you may encounter serious errors.
  - If you **cannot** use the same version of a software on the target server — for example, because [your version of MySQL has been deprecated](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) — ensure that your source server’s version of that software is up-to-date **before** you start the transfer.
  - If you wish to update any of the software on the target server, we strongly recommend that you perform the transfer first and then perform any updates.
- Make **certain** that you copy your cPanel accounts’ Apache configuration to the target server. To do so, follow the steps in our [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation) documentation.


Note:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- In order to activate a new license, you **must** have a cPanel Store account with a verified email address.
- The migration process will transfer your permanent license to the target server.

### Copy all service configurations to the target server

Important:

- Make **certain** to transfer the account service configurations **before** you transfer the accounts. If you transfer the accounts first, your websites may experience issues.
- If you do not use a [Server Name Indication (SNI)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#server-name-indication-sni)-capable operating system, make **certain** to copy all SSL certificates **before** you transfer accounts between servers. SSL certificates and keys reside in the `/etc/ssl/` directory.

To move all of your account service configurations from one server to another, use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_). Select the following service configurations in the [_Service Configurations_](https://docs.cpanel.net/whm/transfers/transfer-tool/#service-configurations) tab of the _Transfer Tool_ interface:

- AutoSSL options
- Backups
- cPanel & WHM (`whmconf`)
- Database servers
- EasyApache
- Exim
- GreyList
- Hulk
- ModSecurity®
- User interface themes

### Copy all accounts to the target server

Important:

Make **certain** to transfer your [reseller](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) accounts **before** your cPanel accounts. If you transfer the cPanel accounts first, they may lose their reseller ownership.

After you install cPanel & WHM on your target server, copy each account from your source server to your target server. We recommend that you use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_) to copy the accounts.

The _Transfer Tool_ interface allows you to use the [_Live Transfer_](https://docs.cpanel.net/whm/transfers/transfer-tool/#live-transfer) feature. This feature reduces downtime during transfers between cPanel & WHM servers. This feature is especially useful if you have external nameservers that your cPanel & WHM servers do **not** update, as the Live Transfer feature’s proxy configuration will ensure that traffic flows to the correct destination.

If you **only** possess user credentials and do **not** have `root` access or privileges on the target server, use WHM’s [_Transfer or Restore a cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_) to transfer the accounts.

## Shut down your source server

After you copy your accounts to the target server, you can shut down your source server.

If you used the Live Transfer feature, we recommend that you keep the source server online for two days to allow the proxy features to function.

Warning:

- Active licenses associated with the **source** servers you no longer use will continue to be invoiced until you cancel them.
- Refunds or credits are not available for licenses that remain active without cancellation.
- For more information about canceling your **source** server license, read our [How to Cancel a cPanel License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-cancel-a-cpanel-license/) documentation.

## Finish your transfer

The following actions will let you finish preparing your target server to use the data and configurations you transferred from your source server:

### Confirm that you possess a valid cPanel license

After you move all of your accounts to your target server, confirm that you possess a valid cPanel license. To do this, navigate to our [License Verification interface](https://verify.cpanel.net/app/verify).

### Change the target server main IP address to the source server IP address

Important:

- If you purchased your license directly from WebPros International, LLC, or a third-party license provider, you must perform this step.
- We recommend that you do **not** perform this step if the following conditions are true:

  - You wish to migrate your accounts to a target server with a new hosting provider.
  - You purchased your cPanel license from your former hosting provider.

After you shut down your source server, change the target server’s main IP address to the IP address of your source server. Perform this action via the command line in a local session. A local session allows you to make changes, restart the network service, and remain connected to the server.

#### Change the main IP address on a RHEL-based server

For servers running [RHEL®-based](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#rhel) operating systems, perform the following steps to change the server’s main IP address:

1. Open the `/etc/sysconfig/network-scripts/ifcfg-eth0` file.
2. Edit the `IPADDR` and `GATEWAY` lines to use the IP address and gateway of your source server.
3. If your source server belongs to a DNS cluster, delete the DNS clusters in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
4. Open the `/etc/ips` file with a text editor.
5. Add your source server’s primary IP address, netmask, and gateway to the file.






Note:





Remove the target server’s primary IP address from this file.

6. Run the `systemctl restart network` command to restart the network service.
7. Run the `/scripts/mainipcheck` command to add the IP address to the `/var/cpanel/mainip` file.
8. Run the `/scripts/fixetchosts` command to add the IP address and hostname of your server to the `/etc/hosts` file.

#### Change the main IP address on an Ubuntu server

For servers running Ubuntu, perform the following steps to change the server’s main IP address:

1. Navigate to the `/etc/netplan` folder and open its `.yaml` file. The filename will resemble the following example: `50-cloud-init.yaml`
2. Configure the file to use the IP address and gateway of your source server. To learn more about how to do this, read Netplan’s [How to Configure a Static IP Address on an Interface](https://netplan.readthedocs.io/en/stable/examples/#how-to-configure-a-static-ip-address-on-an-interface) and [How to Use a Directly Connected Gateway](https://netplan.readthedocs.io/en/stable/examples/#how-to-use-a-directly-connected-gateway) documentation.
3. If your source server belongs to a DNS cluster, delete the DNS clusters in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
4. Open the `/etc/ips` file with a text editor.
5. Add your source server’s primary IP address, netmask, and gateway to the file.






Note:





Remove the target server’s primary IP address from this file.

6. Run the `systemctl restart systemd-networkd` command to restart the network service.
7. Run the `/scripts/mainipcheck` command to add the IP address to the `/var/cpanel/mainip` file.
8. Run the `/scripts/fixetchosts` command to add the IP address and hostname of your server to the `/etc/hosts` file.

### Check the IP addresses of the transferred accounts

When you transfer your accounts to the target server, the system may set the accounts’ IP addresses to the target server’s **original** main IP address. Check and update each account’s IP address with WHM’s [_IP Migration Wizard_](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard) interface ( _WHM » Home » IP Functions » IP Migration Wizard_).

### Configure your target server’s DNS zone files

In WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_), enter the same shared IP address and nameservers that your source server uses. The system will configure the DNS zone files of restored accounts on the target server with those settings.

### Add the target server to the DNS cluster

Note:

If your server does **not** belong to a DNS cluster, proceed to the next step.

To add the target server to the DNS cluster, perform the following steps:

1. Navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
2. Select _Enable DNS Clustering_.
3. Click _Change_.
4. Click _Return to Cluster Status_.
5. Select the server to add to the DNS cluster from the _Add a new server to the cluster_ menu.
6. Click _Configure_.

### Reinstall all SSL certificates

Note:

Proceed to the next step if your server meets the following conditions:

- The accounts on your server do not use SSL certificates from a Certificate Authority.
- Both of your servers use an SNI-capable operating system.

To upload an existing SSL certificate to your server, perform the following steps:

1. Navigate to WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain) interface ( _WHM » Home » SSL/TLS » Install an SSL Certificate on a Domain_).
2. Paste the certificate into the text box, or click _Fetch_ to upload a `.crt` file.
3. Click _Submit_ to install the certificate.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Review Transfers and Restores](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)
- [The view\_transfer Script](https://docs.cpanel.net/whm/scripts/the-view_transfer-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×