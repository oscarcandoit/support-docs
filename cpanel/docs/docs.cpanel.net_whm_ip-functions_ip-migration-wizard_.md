---
url: "https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/"
title: "IP Migration Wizard | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [IP Functions](https://docs.cpanel.net/whm/ip-functions/)
4. IP Migration Wizard


[ip](https://docs.cpanel.net/tags/ip/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#overview)

* * *

[Change the IP addresses of all cPanel accounts on your server](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#change-the-ip-addresses-of-all-cpanel-accounts-on-your-server)

* * *

[Step 1: Enter the new IP addresses](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-1-enter-the-new-ip-addresses)

* * *

[Step 2: Confirm the translation](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-2-confirm-the-translation)

* * *

[Step 3: Download the translation matrix](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-3-download-the-translation-matrix)

* * *

[Step 4: Convert the configuration files](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-4-convert-the-configuration-files)

* * *

[Step 5: DNS Migration](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-5-dns-migration)

* * *

[Step 6: Wait 48 hours](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-6-wait-48-hours)

* * *

[Step 7: Additional steps to clear the old IP addresses](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-7-additional-steps-to-clear-the-old-ip-addresses)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#overview)

* * *

[Change the IP addresses of all cPanel accounts on your server](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#change-the-ip-addresses-of-all-cpanel-accounts-on-your-server)

* * *

[Step 1: Enter the new IP addresses](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-1-enter-the-new-ip-addresses)

* * *

[Step 2: Confirm the translation](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-2-confirm-the-translation)

* * *

[Step 3: Download the translation matrix](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-3-download-the-translation-matrix)

* * *

[Step 4: Convert the configuration files](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-4-convert-the-configuration-files)

* * *

[Step 5: DNS Migration](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-5-dns-migration)

* * *

[Step 6: Wait 48 hours](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-6-wait-48-hours)

* * *

[Step 7: Additional steps to clear the old IP addresses](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/#step-7-additional-steps-to-clear-the-old-ip-addresses)

* * *

## IP Migration Wizard

![](https://docs.cpanel.net/img/whm-icons/ip_migration_wizard.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _IP Migration Wizard_ helps you to change the IP addresses of the cPanel accounts that your server hosts. You can also use the _IP Migration Wizard_ to change your server’s primary IP address. This feature is very useful if you move your server to different subnet or another datacenter.

Warning:

- We recommend that you do **not** add new cPanel accounts during the IP address migration. This ensures that any new accounts will use the new IP addresses.
- This change will take about 48 hours to complete, because DNS records across the internet need time to update. If you must undo this process, it will take another 48 hours to undo.

Note:

- This feature updates your server’s configuration files; however, it does **not** bind new IP addresses. To bind a new IP address, use WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address) interface ( _WHM » Home » IP Functions » Add a New IP Address_).
- If your server runs behind a Network Address Translator (NAT) you **must** enter the private IP address instead of the corresponding public IP address. For example, you would use `192.168.1.2` instead of `208.74.121.102`.

## Change the IP addresses of all cPanel accounts on your server

To change the IP addresses of multiple accounts, perform the following steps:

### Step 1: Enter the new IP addresses

1. Enter new IP addresses in the text box.






Note:





- Enter individual IP addresses on separate lines.
- You may use [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) to enter multiple IP addresses (for example, `192.168.0.20/25`).

2. Click _Continue_ to begin Step 2.

### Step 2: Confirm the translation

1. Read all of the information in the interface to ensure that it is correct.






Note:





- The wizard assigns a new IP address for each IP address that is currently on the server.
- If you enter more new IP addresses than the current number of IP addresses, the system discards the extra new IP addresses.
- If you enter fewer IP addresses than the current number of addresses, the system assigns all available new IP addresses and display an editable text box for accounts that require a new IP address. If you do not enter addresses in the empty text boxes, those accounts will retain their old IP addresses.

2. Click _Continue_ to begin Step 3.

### Step 3: Download the translation matrix

1. If you wish to view a list of each domain’s administrator username, old IP address, and new IP address, right-click _Click Here to Download a IP Translation Matrix_, and then click _Save Link As_.
2. Click _Continue_ to begin Step 4.

### Step 4: Convert the configuration files

In this step, the system updates the following files:

- The Apache configuration file.
- The FTP server configuration file.
- The cPanel internal data files.

The system changes the Apache configuration file to include both the old and new IP addresses for each virtual host. This allows visitors to access the website through both the updated DNS records and the old, cached IP address.

Note:

We recommend that you watch for and take note of any error messages during this step.


Click _Continue_ to begin Step 5.

### Step 5: DNS Migration

This step updates the DNS zone files, then automatically takes you to the next interface

Note:

We recommend that you watch for and take note of any error messages during this step.


### Step 6: Wait 48 hours

Log out of WHM and wait 48 hours for DNS records to propagate. When 48 hours is over, navigate to WHM’s _IP Migration Wizard_ interface ( _Home » IP Functions » IP Migration Wizard_) and then click _Click Here_ to proceed to Step 7.

### Step 7: Additional steps to clear the old IP addresses

In this step, the wizard removes the old IP addresses from the Apache configuration file. When this process finishes, click _Click Here_. A new interface will appear to announce that the IP address migration process is complete.

To completely remove the old IP addresses, perform the following steps:

Note:

We recommend that system administrators take note of any error messages during the update.


#### Step 7a: Remove the old IP addresses from this system

Click the _Show or Delete Current IP Addresses_ link to open the interface in a new window in order to remove the old IP addresses.

Warning:

You can **only** delete IP addresses that you created with WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address) interface ( _WHM » Home » IP Functions » Add a New IP Address_). You **cannot** remove IP addresses that the operating system controls.


#### Step 7b: Update your system’s startup scripts to reflect the new main IP address

Your system’s startup scripts assign the IP address that the system uses as the primary network interface. Your operating system determines how these scripts are configured. At the command line, run the `ifconfig -a` command to see your current IP address and the interface to which your IP address is assigned.

Note:

For a virtual server, your hosting provider **must** configure the primary network interface in the container configuration.


To assign your new IP address to the primary network interface on a dedicated server, perform the following steps:

1. Edit the proper file in the `/etc/sysconfig/network-scripts/` directory to remove the old IP address and add the new one.






Note:




For a dedicated server, `eth0` is the most common primary network interface.


2. Restart the network with the `/etc/init.d/network restart` command.






Note:




We recommend that you have a technician available at the server console to address any issues that may occur during the restart.


3. After the network service restarts, run the `ifconfig` and `ping` commands to verify that all of the IP addresses are available.

#### Step 7c: Change your licensed IP address

You **must** perform this step **immediately** after you complete the previous step. Until you complete this step, the cPanel, WHM, WebDAV, and Webmail interfaces will **not** be available. Websites, FTP, and email services through desktop mail clients will not be affected.

Note:

The instructions below are for WebPros International, LLC direct customers only. If you did not purchase your license directly from the WebPros International, LLC, you **must** contact your licensing provider. For more information, visit the [cPanel & WHM License Verification website](http://verify.cpanel.net/).


1. Log in to your [cPanel Store](http://store.cpanel.net/) account.
2. Under _Orders_, click _View My Licenses_. The _Manage Licenses_ interface will appear.
3. Under _Actions_, click the pencil icon. A new interface will appear.
4. Click _Edit IP_.
5. Enter the new IP address.
6. Click _Save Changes_.

#### Step 7d: Configure WHM to use the new IP address for new accounts

After you click _Server Setup_, WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_) appears in a new window. To configure the shared IP address, perform the following steps:

1. Click the _Basic Config_ tab.
2. In the _The IP address (only one address) that will be used for setting up shared IP virtual hosts_ text box, enter the new IP address that the system will use for shared IP virtual hosts.
3. Click _Save Changes_.

If you have set a different main IP address for your resellers, you **must** change the IP address in WHM’s [_Reseller Center_](https://docs.cpanel.net/whm/resellers/reseller-center) interface ( _WHM » Home » Resellers » Reseller Center_).

To update the main IP address for a reseller in the _Reseller Center_, perform the following steps:

1. Click _Manage Main Shared/IP-less IP_.
2. Select the reseller that you wish to modify from the menu.
3. Click _Submit_.
4. Select the desired IP address from the menu.
5. Click _Save_.

#### Step 7e: Ensure DNS and reverse DNS are configured properly

Your hosting provider will need to help you set the reverse DNS entries for your server. However, your new main IP address should already point back to the server’s hostname. To ensure that your hostname points to your new main IP address, navigate to WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM_ » _Home_ » _DNS Functions_ » _DNS Zone Manager_).

#### Step 7f: Revise custom configurations

If you have custom configurations in WHM, you **must** ensure that your configurations do not use the old main IP address.
For example, you may need to update the following customizations:

- Custom sender IP addresses for Exim in the `/etc/mailips` file.
- Custom DNS templates in WHM’s [_Edit Zone Templates_](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates) interface ( _WHM » Home » DNS Functions » Edit Zone Templates_).

#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Assign IPv6 Address](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/)
- [Change Multiple Sites' IP Addresses](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/)
- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×