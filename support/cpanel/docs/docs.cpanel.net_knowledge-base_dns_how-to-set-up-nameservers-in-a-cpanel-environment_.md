---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/"
title: "How to Set Up Nameservers in a cPanel & WHM Environment | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#main-content)

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
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to Set Up Nameservers in a cPanel & WHM Environment


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [nameservers](https://docs.cpanel.net/tags/nameservers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#overview)

* * *

[Default nameservers](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#default-nameservers)

* * *

[Configure via WHM interfaces](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#configure-via-whm-interfaces)

* * *

[Instructions for various registrars](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#instructions-for-various-registrars)

* * *

[123-reg.co.uk](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#123-regcouk)

* * *

[DirectNIC](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#directnic)

* * *

[Dotster](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#dotster)

* * *

[DynaDot](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#dynadot)

* * *

[Enom](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#enom)

* * *

[GoDaddy](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#godaddy)

* * *

[NameCheap](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#namecheap)

* * *

[Network Solutions](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#network-solutions)

* * *

[OpenSRS](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#opensrs)

* * *

[Register.com](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#registercom)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#overview)

* * *

[Default nameservers](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#default-nameservers)

* * *

[Configure via WHM interfaces](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#configure-via-whm-interfaces)

* * *

[Instructions for various registrars](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#instructions-for-various-registrars)

* * *

[123-reg.co.uk](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#123-regcouk)

* * *

[DirectNIC](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#directnic)

* * *

[Dotster](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#dotster)

* * *

[DynaDot](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#dynadot)

* * *

[Enom](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#enom)

* * *

[GoDaddy](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#godaddy)

* * *

[NameCheap](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#namecheap)

* * *

[Network Solutions](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#network-solutions)

* * *

[OpenSRS](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#opensrs)

* * *

[Register.com](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#registercom)

* * *

## How to Set Up Nameservers in a cPanel & WHM Environment

Last modified: _2024 February 19_

* * *

## Overview

Nameservers match domain names to IP addresses. When a visitor attempts to find a website that your server hosts, their computer asks a nameserver for the IP address of the domain that they wish to view. The nameserver returns the IP address for your web server and directs the visitor to the correct page.

- You **must** publish records for your domain names to nameservers so that visitors can reach those sites.
- These nameservers communicate with other nameservers to distribute the records of sites that your server hosts.
- The propagation period is the amount of time that it takes for a domain’s DNS records to spread across the internet.

You can use a series of WHM interfaces to configure and update your nameservers.

## Default nameservers

When you log in to WHM for the first time, you can use default (`cprapid.com`) nameservers as a placeholder. These default nameservers are incompatible with many domain names, including `.com` domain names.

To make sure that visitors can find your website, you must update your nameservers in WHM. For more information, read the [Configure via WHM interfaces](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#configure-via-whm-interfaces) section below.

## Configure via WHM interfaces

To configure nameservers via the WHM interface, perform the following steps:

##### Select a nameserver software

Note:

If you already use your registrar’s DNS services, you can skip this step.

To select a nameserver software, perform the following steps:

1. Navigate to WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) interface ( _WHM » Home » Service Configuration » Nameserver Selection_).
2. Select the desired nameserver software.
3. Click _Save_.

Note:

The system installs _PowerDNS_ by default.

##### Configure your default nameservers

To configure your default nameservers, perform the following steps:

1. Navigate to WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).
2. At the bottom of the interface, enter the desired nameserver names in the text boxes.
3. Click _Save Changes_.

We recommend that you use the following guidelines when you name nameservers:

- The name **must** consist of a prefix, a dot (`.`), and your domain. The common convention for nameservers is to prefix your domain name with `ns1` (for example, `ns1.example.com` and `ns2.example.com`).
- Your nameservers **cannot** share a name.
- We **strongly** recommend that you use a domain that reflects your company’s main homepage URL.

##### Add IP addresses

To add IP addresses to your server, perform the following steps:

1. Navigate to WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address) interface ( _WHM » Home » IP Functions » Add a New IP Address_).
2. Enter the IP address or IP address range in the _New IP or IP range to add text_ box.
3. Enter the subnet mask in the _Select a subnet mask for the IP or IPs above to use_ text box.
4. Enter any IP addresses that you wish to exclude in the _IPs and IP ranges to exclude from the range of new IPs_ text box.
5. Click _Submit_.

##### Create A or AAAA entries for your nameservers

To create A or AAAA entries for your nameservers, perform the following steps:

1. Navigate to WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).
2. Next to the appropriate _Nameservers_ text box, click _Configure Address Records_. A new interface will appear and the system will perform a DNS lookup on the nameserver that you entered.
3. Optionally, update the IP addresses in the appropriate text boxes.
   - To enter a different IPv4 address, enter a new value in the _Enter an IPv4 address to create an A record_ text box or _Confirm the IPv4 address to create an A record_ text box.
   - To enter a different IPv6 address, enter a new value in the _Enter an IPv6 address to create an AAAA record (optional)_ text box.
4. Click _Configure Address Records_. The system will display the results of your changes.
5. Click _Close_.
6. Repeat these steps for each nameserver.

##### Create A entries for your hostname

To create A entries for your hostname, perform the following steps:

1. Navigate to WHM’s [_Add an A Entry for Your Hostname_](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname) interface ( _WHM » Home » DNS Functions » Add an A Entry for Your Hostname_).
2. Enter your server’s IP address in the available text box.
3. Click _Add Entry_.

##### Set up nameservers with your registrar

After you configure your server’s nameservers, you **must** register your nameservers with your registrar.

- When you register nameservers, you announce their existence to the rest of the internet. You do **not** perform this action in cPanel & WHM, but you **must** do it or your nameservers will **not** function.
- For steps for many popular registrars, see the [Instructions for various registrars](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#instructions-for-various-registrars) section below.

##### Manage reseller nameservers

After you configure your nameservers, you may wish to configure special nameservers for your server’s resellers. We design cPanel & WHM to accommodate a white-label reseller experience, which allows customizable branding. You can configure hosting resellers to each use their own nameservers.

Note:

Resellers may use their own nameservers, but individual cPanel accounts **cannot** use their own nameservers.

To edit nameserver names and assign nameserver IP addresses for individual reseller nameservers, use WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

##### Select a nameserver software

Note:

If you already use your registrar’s DNS services, you can skip this step.

Select the desired nameserver software. cPanel & WHM offers the following nameserver software:

- _PowerDNS_ — The system defaults to PowerDNS. For most servers, we recommend that you select _PowerDNS_.
- _BIND_
- _Disabled_

##### Name your nameservers

Enter the desired name for each of your nameservers. We recommend that you use the following guidelines when you name nameservers:

- The name **must** consist of a prefix, a dot (`.`), and your domain. The common convention for nameservers is to prefix your domain name with `ns1` (for example, `ns1.example.com` and `ns2.example.com`).
- Your nameservers **cannot** share a name.
- We **strongly** recommend that you use a domain that reflects your company’s main homepage URL.

##### Create A entries and add IP addresses

Select the desired settings for your server’s A entries and IP addresses.

- We **strongly** recommend that you select both the _Add “A Entries” for all Nameservers_ and _Add “A Entries” for Hostname_ checkboxes.
- If you do not enter IP addresses in the _Please enter an IP address for each of your nameservers_ text boxes, the system automatically assigns available IP addresses from your server to each nameserver.

##### Set up nameservers with your registrar

After you configure your server’s nameservers, you **must** register your nameservers with your registrar.

- When you register nameservers, you announce their existence to the rest of the internet. You do **not** perform this action in cPanel & WHM, but you **must** do it or your nameservers will **not** function.
- For steps for many popular registrars, see the [Instructions for various registrars](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/#instructions-for-various-registrars) section below.

##### Manage reseller nameservers

After you configure your nameservers, you may wish to configure special nameservers for your server’s resellers. We design cPanel & WHM to accommodate a white-label reseller experience, which allows customizable branding. You can configure hosting resellers to each use their own nameservers.

Note:

Resellers may use their own nameservers, but individual cPanel accounts **cannot** use their own nameservers.

To edit nameserver names and assign nameserver IP addresses for individual reseller nameservers, use WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).

## Instructions for various registrars

Each set of instructions assumes that the following statements are true:

- You have an account with the registrar.
- You have already registered your domain with that company.
- You have logged in to your account and are on the first screen that you see after you log in.

### 123-reg.co.uk

To register with `123-reg.co.uk`, perform the following steps:

1. Find and select the domain name for your nameserver (for example, select `example.com` if you wish to register `ns1.example.com`).
2. Click _Modify domain_.
3. Click _Change Nameservers_.
4. Scroll down and enter the names for your primary and secondary nameservers in the _Nameserver 1_ and _Nameserver 2_ text boxes (for example, `ns1.example.com`).
5. Click _Change Nameservers_.
6. Enter the IP addresses for your nameservers.
7. Click _Change Nameservers_.

### DirectNIC

To register with DirectNIC, perform the following steps:

1. Click _Domain Manager_.
2. Click _Change Nameserver Information_ next to your domain.
3. Click _Create Nameserver_ at the top of the interface.
4. Enter your nameserver’s hostname (for example, `ns1.example.com`).
5. Enter the appropriate IP address.
6. Repeat steps 3 through 5 for your second nameserver.

### Dotster

To register with Dotster, perform the following steps:

1. Click on _My Domains_ at the top of the _Account Management_ interface.
2. Click the domain for which you wish to register your nameservers.
3. Click _Register Nameserver_.
4. Enter the hostname (for example: `ns1.example.com`) for your first nameserver.
5. Enter the IP address for this nameserver in the four text boxes. You will need to enter each octet of your IP address in its respective text box.
6. Click _Update_.
7. Repeat steps 3 through 6 for your second nameserver.

### DynaDot

To register with DynaDot, perform the following steps:

1. Click _Domain Names_ on the right side of the interface.
2. Click _Nameservers_ near the top of the interface.
3. Click _Register a domain name server_.
4. Enter the full name of your first nameserver (for example: `ns1.example.com`) in the _Host Name_ text box.
5. Enter the IP address for that nameserver.
6. Click _Submit_.
7. Repeat steps 2 through 6 for your second nameserver.

### Enom

To register with Enom, perform the following steps:

1. Click _Select Domain Names_.
2. Click _Register DNS_.
3. Use the _Register a Nameserver Name_ feature in the first section of the interface to create your nameservers.

### GoDaddy

To register with GoDaddy, perform the following steps:

01. Under the _Domains_ heading, click _All Domains_.
02. Locate the domain for which you wish to set up your nameservers.
03. Click the gear icon and select _Manage DNS_.
04. Click the _Settings_ tab.
05. Under the _Host Names_ setting, click _Manage_.
06. Click _Add Hostname_.
07. Enter the primary nameserver’s name (for example, `ns1`) in the _Hostname_ text box.
08. Enter the primary nameserver’s IP address in the _IP Address_ text box.
09. Click _Add_.
10. Repeat steps 6-9 for your secondary nameserver (for example, `ns2`)
11. Click _Save_.
12. Click _Edit Nameservers_.
13. Select _Custom_.
14. Enter the full hostnames of your two nameservers. (for example, `ns1.example.com` and `ns2.example.com`)
15. Click _OK_.
16. Click _Save_.

The interface will process your request and then display a _“Set Nameservers: Your request has been submitted. Changes may take a few moments to take effect.”_ message.

### NameCheap

To register with NameCheap, perform the following steps:

1. Find the domain in your account and click on it.
2. Click _Nameserver Registration_.
3. Enter the IP addresses for each of your nameservers.
4. Click _Add Nameservers_.

### Network Solutions

To register with Network Solutions, perform the following steps:

1. Click _Manage Host Servers_ at the bottom left of the interface. If this link fails to appear, use [this alternate address](https://www.networksolutions.com/manage-it/manage-nameservers.jsp).
2. Enter your first nameserver’s hostname (for example, `ns1.example.com`) in the first text box.
3. Click _Go_.
4. Enter the IP address of your first nameserver.
5. Click _Go_.
6. Confirm the changes to the host server.
7. Click _Save Changes_.
8. Click _Back to Account Manager Home_.
9. Repeat this process for your second nameserver.

### OpenSRS

To register with OpenSRS, perform the following steps:

1. Click _Name Servers_ at the top of the interface.
2. Click _Create or modify a name server which is based on…_
3. Enter the name (for example: `ns1`) for your ﬁrst nameserver.
4. Enter the nameserverʼs IP address.
5. Click _Create Name Server_.
6. Repeat steps 3 through 6 to add your second nameserver.

### Register.com

To register with Register.com, perform the following steps:

1. Click on your domain name.
2. Click _Advanced Technical Settings_.
3. Click _Manage Registered Name Servers_.
4. Scroll down to _REGISTER NAME SERVER_ and enter the desired prefix for the first nameserver (for example: `ns1`).
5. Enter the IP address (A record) in the next text box.
6. Click _Continue_.
7. Repeat this process for your second nameserver.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [The swapip Script](https://docs.cpanel.net/whm/scripts/the-swapip-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×