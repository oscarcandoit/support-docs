---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/"
title: "How to Install cPanel & WHM on Google Compute Engine™ through the Google Marketplace | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#main-content)

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
4. How to Install cPanel & WHM on Google Compute Engine™ through the Google Marketplace


[installation](https://docs.cpanel.net/tags/installation/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#overview)

* * *

[Create a cPanel & WHM instance on Google Compute Engine](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-a-cpanel--whm-instance-on-google-compute-engine)

* * *

[Access the Google Compute Engine](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#access-the-google-compute-engine)

* * *

[Accept the trial offer](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#accept-the-trial-offer)

* * *

[Enter or confirm your payment information](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#enter-or-confirm-your-payment-information)

* * *

[Use the cPanel & WHM Marketplace image](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#use-the-cpanel--whm-marketplace-image)

* * *

[Create an instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-an-instance)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#the-cpanel--whm-installation-process)

* * *

[Connect to the instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#connect-to-the-instance)

* * *

[Change the root password](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#change-the-root-password)

* * *

[Assign a hostname to the server](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#assign-a-hostname-to-the-server)

* * *

[Create the hostname fix hook](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-the-hostname-fix-hook)

* * *

[Configure a static IP address](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#configure-a-static-ip-address)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#configure-whm)

* * *

[Google blocks port 25](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#google-blocks-port-25)

* * *

[Deleting an instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#deleting-an-instance)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#overview)

* * *

[Create a cPanel & WHM instance on Google Compute Engine](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-a-cpanel--whm-instance-on-google-compute-engine)

* * *

[Access the Google Compute Engine](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#access-the-google-compute-engine)

* * *

[Accept the trial offer](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#accept-the-trial-offer)

* * *

[Enter or confirm your payment information](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#enter-or-confirm-your-payment-information)

* * *

[Use the cPanel & WHM Marketplace image](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#use-the-cpanel--whm-marketplace-image)

* * *

[Create an instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-an-instance)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#the-cpanel--whm-installation-process)

* * *

[Connect to the instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#connect-to-the-instance)

* * *

[Change the root password](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#change-the-root-password)

* * *

[Assign a hostname to the server](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#assign-a-hostname-to-the-server)

* * *

[Create the hostname fix hook](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#create-the-hostname-fix-hook)

* * *

[Configure a static IP address](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#configure-a-static-ip-address)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#configure-whm)

* * *

[Google blocks port 25](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#google-blocks-port-25)

* * *

[Deleting an instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#deleting-an-instance)

* * *

## How to Install cPanel & WHM on Google Compute Engine™ through the Google Marketplace

Last modified: _2025 February 13_

* * *

## Overview

This document explains how to install a cPanel & WHM instance on the Google Compute Engine™ service through the Google Marketplace.

Warning:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- To activate a new license, you **must** have a cPanel Store account with a verified email address.
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

## Create a cPanel & WHM instance on Google Compute Engine

### Access the Google Compute Engine

To log in to the Google Compute Engine website, perform the following steps:

1. If you do **not** already possess a Google account, [create one](https://myaccount.google.com/). Then, log in to Google.
2. Navigate to the [Google Compute Engine website](https://cloud.google.com/compute/). The _Google Compute Engine_ interface will appear.
3. Click _Start free_. A new interface will appear.

### Accept the trial offer

Accept the Terms of Service and click _CONTINUE_. The _Payment Information_ interface will appear.

### Enter or confirm your payment information

To enter or confirm your payment information, perform the following steps:

1. Enter your payment information or confirm the existing payment method on your account.
2. Click _START MY FREE TRIAL_. The _Google Cloud Platform_ interface will appear, and Google will send you a confirmation email. Provide the information the interface asks for.

### Use the cPanel & WHM Marketplace image

To use the cPanel & WHM image on Marketplace, perform the following steps:

1. Search for _Marketplace_. The _Marketplace_ interface will appear.

2. Search for _cPanel_. A list of images will appear.

3. Select the listing you wish to install:


   - For CentOS, select _cPanel & WHM on Linux_.
   - For Ubuntu®, select _cPanel & WHM on Ubuntu_.
   - For AlmaLinux OS, select _cPanel & WHM on AlmaLinux_.

The full image profile will appear.

4. Read the details, such as estimated costs.

5. Click the _LAUNCH_ button.

6. A list of required APIs will appear. Click _ENABLE_ to enable these required APIs. The deployment interface for the listing you selected will appear.


Important:

You **must** enable billing on your account to proceed. If asked, enable billing.


### Create an instance

To create the instance, perform the following steps:

1. In the _Deployment name_ text box, enter a name for the instance.





Note:




The _Deployment name_ can **only** contain lowercase characters, numbers or dashes. It **must** start with a lowercase letter and cannot end with a dash.


2. In the _Zone_ menu, select a zone within the region.
The zone determines which computing resources are available and where Google stores your data.
3. In the _Machine type_ section, select the _Series_ and _Machine type_ for your instance.





Note:




You **must** select a _Machine type_ with at least 2GB of memory.


4. In the _Boot disk_ section, select _Standard Persistent Disk_ from the _Boot disk type_ menu.
5. In the _Boot disk size in GB_ text box, enter a value greater than 40 GB.
6. In the _Networking_ section, click _Add network interface_ and select a network if you do **not** wish to use the default network.






Note:





For information about how to create an instance with multiple network interfaces, read Google’s [Creating instances with multiple network interfaces](https://cloud.google.com/vpc/docs/create-use-multiple-interfaces#console) documentation.

7. In the _Firewall_ section, we have already configured the required ports for your instance.
8. After the _Firewall_ section, select the _I accept the GCP Marketplace Terms of Service and WebPros International, LLC Terms of Service_ checkbox.
9. Click _DEPLOY_. The Google Cloud Platform™ _Deployment Manager_ interface will appear.

### The cPanel & WHM installation process

When you create an instance, cPanel & WHM will automatically begin installation in the background. To watch the installation progress, [connect to the instance via SSH](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#connect-to-the-instance) immediately after you create the instance.

Warning:

The installation process takes about 10-15 minutes. You cannot log in to WHM until the installation process is complete.

When the installation completes, a one-time start-up process will run. After, the [`post_snapshot`](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/) script will run to ensure that cPanel & WHM configures itself properly.

### Connect to the instance

The interface will display a green icon next to the instance name when it is ready.

The right panel contains helpful information to get you logged in to your server. To connect to the instance, perform the following steps:

1. Click _SSH_. A new window will appear with a terminal session.
2. Enter `sudo su -` to get `root` access.

### Change the root password

To change the `root` user’s password, perform the following steps:

1. Run the `passwd` command.
2. Enter a new password.
3. Enter the new password again.

A confirmation message will appear.

### Assign a hostname to the server

Note:

If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


To assign a hostname to the server, run the following command, where `hostname.example.com` represents your desired hostname:

```perl
hostnamectl set-hostname hostname.example.com
```

### Create the hostname fix hook

To configure VPS deployments, many cloud hosting providers use the `dhclient` script. This script includes the configuration of the instance’s hostname. The `dhclient` script may **not** preserve the locally-configured hostname. Hosting providers use scripts to work around this issue. For example, the Google Cloud Platform™ service uses the `google_set_hostname` script.

These workaround scripts may interfere with WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) feature ( _WHM » Home » Networking Setup » Change Hostname_). They can cause hostname configuration issues and a locked cPanel & WHM license. You **must** create a `dhclient` exit hook script to set the hostname properly.

To create the hook, run the following command, where `hostname.example.com` represents your server’s hostname:

```perl
mkdir -p /etc/dhcp/dhclient-exit-hooks.d/ && echo -ne '#!/bin/sh\nhostname hostname.example.com\n/scripts/fixetchosts\n' > /etc/dhcp/dhclient-exit-hooks.d/zzz-set-hostname && chmod +x /etc/dhcp/dhclient-exit-hooks.d/zzz-set-hostname
```

For information on this hook, read our [Cloud-Hosted Hostname Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution) documentation.

When you finish, close the terminal session and return to the _Deployment Manager_ interface.

### Configure a static IP address

By default, Google assigns ephemeral IP addresses to VM instances. They will remain assigned to the server as long as the VM is active, but will change if you turn off and then turn back on a VM.

To configure a static IP address for the server, perform the following steps:

1. Click the three-line menu button on the left side of the screen. Select _VPC network_, then select _IP addresses_.
2. Click the _EXTERNAL IP ADDRESSES_ tab. You will see all external IP addresses your instances use. Locate the IP address you want to convert.
3. In the row for that IP address, click _RESERVE_. The _Reserve a new static IP address_ inteface appears.
4. In the _Name_ text box, enter a name for the IP address.
5. Click _RESERVE_.

### Log in to WHM

To log in to WHM, perform the following steps:

1. Navigate to the following URL, where `IPADDRESS` represents your server’s external IP address: `https://IPADDRESS:2087`


Note:




You can also click the _Admin URL_ link or the _LOG INTO THE ADMIN PANEL_ button in the _Deployment Manager_ interface.


2. Enter your username and password.





Note:





Unless you have configured a different login, use `root` for the username, and the [password you changed](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-cpanel-on-google-compute-engine-through-the-google-marketplace/#change-the-root-password).

3. Click _Log in_.

## Configure WHM

For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

Remember:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).


### Google blocks port 25

By default, Google disables port `25` for outbound email traffic.

For more information on Google’s block of port `25`, read Google’s [Sending Email from an Instance](https://cloud.google.com/compute/docs/tutorials/sending-mail/) documentation.

For potential solutions, read Google’s [SMTP relay: Route outgoing non-Gmail messages through Google](https://support.google.com/a/answer/2956491) support article and the Smarthost configuration section in our [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) documentation.

### Deleting an instance

To delete a Google Compute instance, read Google’s [Deleting an Instance](https://cloud.google.com/compute/docs/instances/deleting-instance) documentation.

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×