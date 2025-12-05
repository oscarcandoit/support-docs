---
url: "https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/"
title: "Launch an Azure Virtual Machine | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#main-content)

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
4. Launch an Azure Virtual Machine


[cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#overview)

* * *

[Log in to your Azure account](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#log-in-to-your-azure-account)

* * *

[Go to the cPanel & WHM listing in the Marketplace](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#go-to-the-cpanel--whm-listing-in-the-marketplace)

* * *

[Create the virtual machine](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#create-the-virtual-machine)

* * *

[The WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#the-whm-installation-process)

* * *

[Logging in to WHM for the first time](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#logging-in-to-whm-for-the-first-time)

* * *

[Using a password](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#using-a-password)

* * *

[Using an SSH key](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#using-an-ssh-key)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#configure-whm)

* * *

[Managing your virtual machine](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#managing-your-virtual-machine)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#overview)

* * *

[Log in to your Azure account](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#log-in-to-your-azure-account)

* * *

[Go to the cPanel & WHM listing in the Marketplace](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#go-to-the-cpanel--whm-listing-in-the-marketplace)

* * *

[Create the virtual machine](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#create-the-virtual-machine)

* * *

[The WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#the-whm-installation-process)

* * *

[Logging in to WHM for the first time](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#logging-in-to-whm-for-the-first-time)

* * *

[Using a password](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#using-a-password)

* * *

[Using an SSH key](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#using-an-ssh-key)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#configure-whm)

* * *

[Managing your virtual machine](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#managing-your-virtual-machine)

* * *

## Launch an Azure Virtual Machine

Last modified: _2025 February 13_

* * *

## Overview

This document explains how to create an Azure® virtual machine with a cPanel & WHM image.

## Log in to your Azure account

Log in to your [Azure account](https://portal.azure.com/). If you do not have an account, [sign up for one](https://signup.live.com/).

## Go to the cPanel & WHM listing in the Marketplace

Warning:

We **strongly** recommend you only create a virtual machine from the cPanel & WHM marketplace listing. Creating an Azure virtual machine directly from the _Virtual machines_ interface will **not** configure some settings properly.

1. Navigate to the [cPanel & WHM for Azure listing](https://portal.azure.com/#create/cpanel.cpanelcpanel_byol) in the Marketplace.
2. Choose your desired operating system:
   - _cPanel & WHM - Bring your own license_ for a CentOS server.
   - _cPanel & WHM on Ubuntu - Bring your own license_ for an Ubuntu® server.
   - _cPanel & WHM on Rocky Linux - Bring your own license_ for a Rocky Linux server.
3. Click _Create_. The _Create a virtual machine_ interface will appear.

## Create the virtual machine

Once you are on the _Create a virtual machine_ interface, perform the following steps:

1. Select your _Project details_:
   - _Subscription_ — Select the subscription to pay for the virtual machine.
   - _Resource group_ — Either select an existing resource group or use the default _(New) Resource group_ value to create a new resource group.






     Note:





- If you do **not** select an existing resource group, Azure will use the _Virtual machine name_ you enter to name a new resource group.
- We recommend you make a new resource group any time you create a virtual machine. It is easier to delete all parts of the virtual machine by deleting the resource group rather than the individual parts.
2. Enter your _Instance details_:
   - _Virtual machine name_ — Name your virtual machine.






     Warning:





     You **cannot** change this name after you create the virtual machine.

   - _Region_ — Select the instance’s region. We suggest that you select a region that is close to you, your customers, or your customers’ visitors.
   - _Availability options_ — Select infrastructure redundancy options.
   - _Security type_ — Select the desired level of security for your virtual machine from the following options:

     - _Standard_ — Select this option for the basic level of security for your virtual machine.
     - _Trusted lanuch virtual machines_ — Select this option to protect against attacks on Gen 2 virtual machines with configurable features like secure boot and virtual Trusted Platform Module (vTPM).
     - _Confidential virtual machines_ — Select this option for higher confidentially.
   - _Image_ — This menu will populate with the image for the operating system you selected. If it does not, you can manually select the image.
   - _VM architecture_ — Select the desired architecture for your virtual machine.
   - _Run with Azure Spot discount_ — Select whether to use [Azure Spot](https://docs.microsoft.com/en-us/azure/virtual-machines/spot-vms).






     Important:





     We **strongly** recommend you do **not** use Azure Spot for your cPanel & WHM virtual machines.

   - _Size_ — Select the VM size for your virtual machine.






     Warning:





     Even though cPanel & WHM requires a minimum of 1GB of RAM and 20GB of disk space, we recommend **at least** 2GB of RAM and 40GB of disk space.



     For more information about hardware requirements, read our [Installation Guide - System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/) documentation.
3. Enter your _Authentication type_ details:







Note:





- If you use a password for your administrator account, you can easily log into WHM using your administrator username and password.
- If you use an SSH key for authentication, there are extra steps before you can log in to WHM for the first time. Follow the instructions in the [Log in for the first time](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#using-an-ssh-key) section below.
- Azure automatically generates an SSH key pair and allows you to store it for future use.

   - _SSH public key_
     - _Username_ — Enter the administrator username for the virtual machine.
     - _SSH public key source_ — Select the source of the key:

       - _Generate a new key pair_ — Generate a new key pair. Then, enter a _Key pair name_.
       - _Use existing key stored in Azure_ — Select a key from _Stored Keys_.
       - _Use existing public key_ — Paste your public key into the _SSH public keys_ field.
   - _Password_
     - _Username_ — Enter the administrator username for the virtual machine.
     - _Password_ — Enter a password for your virtual machine’s administrator account.
     - _Confirm password_ — Confirm your password.
4. There are further customizations you can make to your virtual machine using the _Disks_, _Networking_, _Management_, _Monitoring_, _Advanced_, and _Tags_ tabs. You do **not** need to enter any information in those tabs to create a virtual machine. However, for more information, read [Azure’s Linux virtual machine documentation](https://docs.microsoft.com/en-us/learn/modules/create-linux-virtual-machine-in-azure/2-create-a-linux-virtual-machine).

5. Click _Review + create_. An interface with all the details of your potential virtual machine will appear.

6. Review the details of your virtual machine, then click _Create_.







Note:





If you chose to create a new SSH key pair, after you click _Create_, you will have the option to download your key. We **highly** recommend you download it.

7. A deployment interface will appear, showing the virtual machine creation’s progress. It will also list all of the associated resources for your virtual machine.

8. Once deployment is complete, a _Your deployment is complete_ message will appear. Click _Go to resource_ to access information on your virtual machine.

9. Your server’s public IP address appears under the `Public IP address` field. You will use this IP address to connect to your server via SSH or WHM.


## The WHM installation process

When you create a virtual machine, WHM will automatically begin installation in the background. To watch the installation progress, [log in to the instance via SSH](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/#access-the-command-line) and run the following command:

```bash
sudo su -l
```

Warning:

The installation process takes about 10-15 minutes. You cannot log in to WHM until the installation process is complete.

When the installation completes, a one-time start-up process will run. After, the [`post_snapshot`](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/) script will run to ensure that cPanel & WHM configures itself properly.

## Logging in to WHM for the first time

Logging in to WHM for the first time differs based on your administrator account’s authentication method.

### Using a password

If you use a password for your administrator account, you can log into WHM using your administrator username and password. In a web browser, connect to your virtual machine’s public IP address using HTTPS on port `2087`. For example: `https://192.0.2.0:2087`. The cPanel & WHM installation process creates a [limited version of a reseller account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/) using that username and password.

If you need to access your virtual machine’s `root` account, perform the following steps:

1. Log in to WHM.
2. Navigate to WHM’s [_Change Root Password_](https://docs.cpanel.net/whm/server-configuration/change-root-password/) interface ( _WHM » Server Configuration » Change Root Password_).

You **cannot** change the `root` password for the instance in the Azure portal. To change the `root` password, use one of the following interfaces:

- WHM’s [_Change Root Password_](https://docs.cpanel.net/whm/server-configuration/change-root-password/) interface.
- WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm/) interface.
- The [command line (CLI)](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/).

### Using an SSH key

If you choose to use an SSH key rather than a password, you **must** perform the following extra steps before you can log in to WHM for the first time:

1. If using a new key pair, add your key to your computer.





- [macOS](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#tab-title-1)
- [Windows](https://docs.cpanel.net/knowledge-base/web-services/launch-an-azure-virtual-machine/#tab-title-2)

On an macOS® computer that uses the default download folder:

1. Run the following command, where `example` represents the key pair’s name:

```bash
mv ~/Downloads/example.pem ~/.ssh
```

2. Run the following command to modify the permissions for the `.pem` file, where `example` represents the key pair’s name:

```bash
chmod 600 ~/.ssh/example.pem
```

3. Run the following command to add the key pair, where `example` represents the key pair’s name:

```bash
ssh-add ~/.ssh/example.pem
```

An \`Identity added\` message will appear.

On a Windows® computer that runs [the PuTTY client](https://www.putty.org/) and uses the default download folder, perform the following steps:

1. From the Windows _Start_ menu, open _PuttyGen_.

2. Under the _Conversions_ heading, click _Import_.

3. Navigate to the _PuTTY Key Generator_ interface and select the `.pem` key you downloaded. Click _Open_.

4. Enter a passphrase in the _Key passphrase_ and _Confirm passphrase_ text boxes.

5. Click _Save private key_ and save the key as a `.ppk` file.

6. From the Windows _Start_ menu, open _PuTTY_.

7. In the _Session_ interface, enter the following information:
   - _Hostname (or IP address)_ — You virtual machine’s IP address.
   - _Port_ — Enter `22`.
   - _Connection type_ — Select _SSH_.
   - _Saved sessions_ — Enter a name for your session. Then click _Save_.
8. Navigate to the _Auth_ interface under the _SSH_ category.

9. Click _Browse_, select the `.ppk` file you created, and click _Open_.


2. After completing the installation of WHM on your virtual machine, log in to your virtual machine’s administrator user over SSH. Use the following command, where `key` represents the file path of your SSH key, `user` represents the user you created with your virtual machine and `IP` represents your virtual machine’s IP address:




```bash
ssh -i key user@IP
```

3. To get a temporary WHM login URL, run the following command:




```bash
sudo whmlogin
```

4. Use that login URL to add a password to the `root` user.


## Configure WHM

For more information on configuring cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

Note:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

## Managing your virtual machine

For more information on managing your Azure virtual machine, read [Microsft’s® tutorial on managing virtual machines in Azure](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-config-management).

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×