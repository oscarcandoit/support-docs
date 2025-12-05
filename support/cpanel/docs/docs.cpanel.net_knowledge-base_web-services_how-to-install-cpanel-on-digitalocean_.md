---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/"
title: "How to Install cPanel & WHM on DigitalOcean® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#main-content)

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
4. How to Install cPanel & WHM on DigitalOcean®


[digitalocean](https://docs.cpanel.net/tags/digitalocean/) [installation](https://docs.cpanel.net/tags/installation/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#overview)

* * *

[Create a Droplet](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#create-a-droplet)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#the-cpanel--whm-installation-process)

* * *

[Log in via SSH](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-via-ssh)

* * *

[Change the root password](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#change-the-root-password)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#configure-whm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#overview)

* * *

[Create a Droplet](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#create-a-droplet)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#the-cpanel--whm-installation-process)

* * *

[Log in via SSH](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-via-ssh)

* * *

[Change the root password](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#change-the-root-password)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#configure-whm)

* * *

## How to Install cPanel & WHM on DigitalOcean®

Last modified: _2024 November 21_

* * *

## Overview

This document explains how to create a DigitalOcean® Droplet™ running the cPanel & WHM drive image.

Warning:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

- In order to activate a new license, you **must** have a cPanel Store account with a verified email address.

- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.


## Create a Droplet

01. Navigate to the [DigitalOcean website](https://www.digitalocean.com/).

02. Click _Log In_ in the top right corner, and log in to your DigitalOcean account.







    Note:





    You must first [create a DigitalOcean account](https://docs.digitalocean.com/products/getting-started/) before you can log in.

03. The _Projects_ page will appear.

04. Click _Marketplace_ in the lefthand navigation bar. The _Marketplace_ interface will open.

05. In the _Search_ bar, enter _cPanel & WHM_. The _cPanel & WHM_ listings will appear.

06. Select the listing you wish to install:


    - For AlmaLinux OS 8, select _cPanel & WHM® for AlmaLinux 8_, then click _Create cPanel & WHM® Droplet_.
    - For Ubuntu®, select _cPanel & WHM® for Ubuntu_, then click _Create cPanel & WHM® for Ubuntu Droplet_.

The _Create Droplets_ page will appear.

07. The _Choose Region_ section allows you to select the region in which your server will reside. Select the datacenter region that provides the fastest access for you and your customers.

08. The _Choose an image_ section allows you to select an image for your desired Droplet. The _Marketplace_ tab shows the cPanel & WHM image you selected previously.







    Important:





    If you select an image other than _cPanel & WHM® for AlmaLinux 8_ or _cPanel & WHM® for Ubuntu_, you will need to manually install cPanel & WHM.

09. The _Choose Size_ section lists the available Droplet sizes with the number of CPUs, disk size, bandwidth quota, and pricing. Select a Droplet type and a CPU option for your Droplet.






    Note:





    Even though cPanel & WHM requires a **minimum** of 1GB of RAM and 20GB of disk space, we recommend at least 2GB of RAM and 40GB of disk space.



    For more information about hardware requirements, read our [Installation Guide - System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/) documentation.

10. The _Additional Storage_ section allows you to configure additional storage space for your server.






    Note:




    We recommend that you skip this step until **after** you configure your cPanel & WHM server.


11. The _Choose Authentication Method_ section allows you to set either a `root` password or SSH keys to securely access your server.







    Important:





- If you do not set a `root` password in this section, you **must** [change the root password](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#change-the-root-password) after you [log in to the server via SSH](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-via-ssh).

- We **strongly** recommend that you use SSH keys to access your server via SSH, as they provide greater security than passwords.

To add an SSH key, perform the following steps:
1. Select the _SSH Key_ option.
2. Click _Add SSH Key_.
3. Follow the instructions in the _SSH Keys_ section to generate a new SSH key on your local system.
4. Copy and paste the contents of the [public key](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#public-key) file you created into the _SSH key content_ field.
5. Enter a name for the key in the _Name_ field.
6. Click _Add SSH Key_.

12. The _Advanced Options_ section allows you to enable IPv6 and add initialization scripts.

13. The _Finalize Details_ section allows you to duplicate your Droplet instance, set your server’s hostname, add reference tags, and select a project.

14. Enter a [fully-qualified domain name (FQDN)](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) as the hostname for your server.






    Important:





- This is the same FQDN that you will use as the server’s hostname when you configure WHM for the first time.

- If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.
  - Do **not** select a hostname that begins with `www` or a number, or a hostname that ends with a hyphen (`-`).

  - You **must** use a fully-qualified domain name (FQDN) that uniquely identifies the server (for example, `hostname.example.com` or `hostname.example.co.uk`).

  - Do **not** choose a hostname that a cPanel account on your server will use.

  - Do **not** choose a potential service subdomain as a hostname. For more information, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/) documentation.

  - Do **not** select a socially-unacceptable hostname. The hostname will appear in mail headers.

  - **Only** use lowercase, Latin-script letters in hostnames.

15. Click _Create Droplet_. DigitalOcean will provision your server, and its profile page will appear.

16. Your server’s IP address will appear in the _Droplets_ section of the _Projects_ page. You will use this address to log in to your server.







    Note:




    This IP address is also the IP address for which you will purchase a cPanel & WHM license.



## The cPanel & WHM installation process

When you create a Droplet, cPanel & WHM will automatically begin installation in the background. To watch the installation progress, [log in to the instance via SSH](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-digitalocean/#log-in-via-ssh) immediately after you create the Droplet.

Warning:

The installation process takes about 10-15 minutes. You cannot log in to WHM until the installation process is complete.

When the installation completes, a one-time start-up process will run. After, the [`post_snapshot`](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/) script will run to ensure that cPanel & WHM configures itself properly.

## Log in via SSH

To log in to the server via SSH, run the following command, where `IPADDRESS` represents the server’s IP address.

```perl
ssh root@IPADDRESS
```

The server will respond with a Message of the Day that contains helpful links.

## Change the root password

If you did not set a `root` password when you created the Droplet, you **must** change the `root` user’s password so you can log in to WHM. To change the `root` user’s password, perform the following steps:

1. Enter the `passwd` command.
2. Enter a new password.
3. Enter the new password again.

The system will update the `root` password.

## Log in to WHM

To log in to WHM, perform the following steps:

1. In your preferred browser, navigate to the `https://IPADDRESS:2087` URL, where `IPADDRESS` represents your server’s IP address. The WHM interface will appear.

2. Log in with the `root` username and password you set.

3. Click _Agree to All_. The _Get started with a Free cPanel Trial!_ interface will appear.

4. You will need to log in to or create a cPanel Store account. For information about how to do this, read our [How to Sign Up for a Trial License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started) documentation.

5. After you log in to the cPanel Store and obtain a trial license, click _Server Setup_ in the WHM interface. The _Contact Information_ interface will appear.

6. Enter your email address and nameserver information, then click _Next_. The WHM _Home_ interface will appear.


Warning:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). Since this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).


## Configure WHM

Now you’re ready to configure cPanel & WHM.

- You may wish to change your server’s hostname to the hostname you chose when you created the Droplet. For more information on how to change your server’s hostname, read our [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/) documentation.

- For more information about WHM and how to configure your server, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

- For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.


Remember:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). Since this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).


#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×