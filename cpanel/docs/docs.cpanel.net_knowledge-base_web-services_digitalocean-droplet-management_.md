---
url: "https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/"
title: "DigitalOcean® Droplet™ Management | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#main-content)

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
4. DigitalOcean® Droplet™ Management


[digitalocean](https://docs.cpanel.net/tags/digitalocean/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#overview)

* * *

[Access your instance for the first time](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#access-your-instance-for-the-first-time)

* * *

[Reserved IP management](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#reserved-ip-management)

* * *

[Add Monitoring](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#add-monitoring)

* * *

[Manage the Droplet](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#manage-the-droplet)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#overview)

* * *

[Access your instance for the first time](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#access-your-instance-for-the-first-time)

* * *

[Reserved IP management](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#reserved-ip-management)

* * *

[Add Monitoring](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#add-monitoring)

* * *

[Manage the Droplet](https://docs.cpanel.net/knowledge-base/web-services/digitalocean-droplet-management/#manage-the-droplet)

* * *

## DigitalOcean® Droplet™ Management

Last modified: _2025 February 13_

* * *

## Overview

After you create an cPanel & WHM instance on a DigitalOcean® Droplet™, you can manage that instance from within DigitalOcean’s portal. This document describes common instance-management tasks that you may perform on your cPanel & WHM Droplet.

Note:

New Droplets may require several minutes to initialize. When the Droplet is ready, the portal will display a success message.


## Access your instance for the first time

To access a new instance, perform the following steps:

1. Navigate to the [DigitalOcean website](https://digitalocean.com/) and log in to your account. Your project page will appear. Click a project in the left sidebar to see its associated Droplets.

2. In the list of Droplets, locate the IP address of the server.

3. To connect to your Droplet via SSH, run the following command, where `IPADDRESS` represents the server’s public IP address:



```perl
ssh root@IPADDRESS
```

4. To change the `root` user’s password, run the `passwd` command. The system will prompt you to enter a new password.

5. Enter the desired password and press _Enter_. The system will prompt you to confirm the password.

6. Reenter the desired password and press _Enter_. A confirmation message will appear.

7. If you wish to access WHM in your browser, perform the following additional steps:
   - Navigate to the following address, where `IPADDRESS` represents the server’s public IP address:



     ```perl
     https://IPADDRESS:2087
     ```

   - Use the `root` password to log in to the WHM interface as the `root` user.

Note:

For more information, read our [How to Access the Command Line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/) and [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.


## Reserved IP management

DigitalOcean allows you to point a publicly-accessible Reserved IP address at the Droplet. Reserved IP addresses are IP addresses that you can move from one instance to another.

The Reserved IP address connects to [an anchor IP address](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/) (RFC-1918) on the server. DigitalOcean maps the addresses in a NAT relationship.

Important:

- When you purchase a cPanel & WHM license, use the Droplet’s public IP address.

- The project page will display the Droplet’s Reserved IP address. The Droplet’s page will display the Droplet’s public IP address in IPv4 format with the option to enable IPv6 format.

- DigitalOcean’s anchor IP addresses are not private networking IP addresses.

- DigitalOcean binds public and anchor IP addresses to `eth0`. This is a standard DigitalOcean configuration. For more information, read DigitalOcean’s [Reserved IP address documentation](https://docs.digitalocean.com/products/networking/reserved-ips/).

- Currently, WebPros International, LLC recommends that you **only** use Reserved IP addresses for secondary and tertiary nameservers.

- Reserved IP addresses do **not** support PTR records. Due to this technical limitation, Reserved IP addresses may cause issues with email deliverability.


To enable a Reserved IP address on the Droplet, perform the following steps:

1. In the list of Droplets, click the hostname of your Droplet.
2. Next to _Reserved IP_, click _Enable now_. The _Reserved IPs_ tab on the _Networking_ page will appear.
3. Click _Assign Reserved IP_. DigitalOcean will assign a Reserved IP address and display it on the page.

## Add Monitoring

DigitalOcean allows you to set up monitoring of your Droplet. It can send you alerts via email or Slack.

Note:

These are monitoring alerts that DigitalOcean manages. For monitoring alerts that cPanel & WHM manages, read our [Contact Manager](https://docs.cpanel.net/whm/server-contacts/contact-manager/) documentation.


To add monitoring to your DigitalOcean Droplet, perform the following steps:

1. To connect to your Droplet via SSH, run the following command, where `IPADDRESS` represents the server’s public IP address:


```perl
ssh root@IPADDRESS
```

2. Run the following command:


```perl
curl -sSL https://repos.insights.digitalocean.com/install.sh | sudo bash
```


    A success message will appear.
3. In the left sidebar, click _MANAGE_, then _Monitoring_. The _Monitoring_ interface will open.
4. Click _Create Resource Alert_.
5. Select the metric and threshold to monitor.
6. Enter the name of the Droplet to monitor in the _Droplets or Tag_ text box.
7. If you wish to receive alerts via Slack, check the _Slack_ box, then click _Connect Slack_ and follow the instructions.
8. Enter a label for the alert in the _Name_ text box and click _Create Resource Alert_. A success message will appear.

For more information about monitoring at DigitalOcean, read their [How to Set Up Monitoring Alerts](https://www.digitalocean.com/docs/monitoring/how-to/set-up-alerts/) documentation.

## Manage the Droplet

Important:

We **strongly** recommend that you stop unused Droplets to reduce unnecessary costs.


To resize, reboot, manage DigitalOcean backups, or destroy a Droplet, perform the following steps:

1. Navigate to the [DigitalOcean website](https://digitalocean.com/) and log in to your account. Your project page will appear with a list of Droplets.

2. Click the Droplet that you wish to manage. The Droplet’s profile page will appear.

3. To perform an action, click the section that corresponds to it in the Droplet’s navigation bar:
   - _Graphs_ — Review your Droplet’s performance charts.

   - _Access_ — Connect to your Droplet via SSH or console, or reset the server’s root password.

   - _Power_ — Power on, power off, or reboot your Droplet.

   - _Volumes_ — Add, remove, or manage storage volumes.

   - _Resize_ — Change the Droplet’s CPU, RAM, or disk size.

   - _Networking_ — Review the Droplet’s network information or manage the Droplet’s firewall.

   - _Backups_ — Manage backups of your Droplet.






     Note:




     These are system-level backups that DigitalOcean performs and manages. For backups that cPanel & WHM performs and manages, read our [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/) documentation.


   - _Snapshots_ — Take a snapshot of your Droplet’s data.






     Important:




     You **must** power down the Droplet before you take a snapshot of it.


   - _Kernel_ — Do **not** use this option. You will manage your Droplet’s kernel directly in the server.

   - _History_ — View a log of actions performed on the portal for your Droplet.

   - _Destroy_ — Terminate the Droplet and all of its DigitalOcean backups.

   - _Tags_ — Add or manage tags to organize Droplets.

   - _Recovery_ — Boot from a recovery ISO or hard drive.

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×