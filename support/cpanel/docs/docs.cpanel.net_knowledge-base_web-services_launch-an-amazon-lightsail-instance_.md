---
url: "https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/"
title: "Launch an Amazon Lightsail Instance | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#main-content)

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
4. Launch an Amazon Lightsail Instance


[aws](https://docs.cpanel.net/tags/aws/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#overview)

* * *

[Launch an Amazon Lightsail instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#launch-an-amazon-lightsail-instance)

* * *

[Select your instance location](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#select-your-instance-location)

* * *

[Select your instance image and blueprint](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#select-your-instance-image-and-blueprint)

* * *

[Choose your instance plan](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#choose-your-instance-plan)

* * *

[Identify your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#identify-your-instance)

* * *

[Create the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#create-the-instance)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#the-cpanel--whm-installation-process)

* * *

[Setting up WHM on your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#setting-up-whm-on-your-instance)

* * *

[Change the password for the root user](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#change-the-password-for-the-root-user)

* * *

[Attach a static IP address to your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#attach-a-static-ip-address-to-your-instance)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#configure-whm)

* * *

[Manage your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#manage-your-instance)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#overview)

* * *

[Launch an Amazon Lightsail instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#launch-an-amazon-lightsail-instance)

* * *

[Select your instance location](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#select-your-instance-location)

* * *

[Select your instance image and blueprint](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#select-your-instance-image-and-blueprint)

* * *

[Choose your instance plan](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#choose-your-instance-plan)

* * *

[Identify your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#identify-your-instance)

* * *

[Create the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#create-the-instance)

* * *

[The cPanel & WHM installation process](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#the-cpanel--whm-installation-process)

* * *

[Setting up WHM on your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#setting-up-whm-on-your-instance)

* * *

[Change the password for the root user](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#change-the-password-for-the-root-user)

* * *

[Attach a static IP address to your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#attach-a-static-ip-address-to-your-instance)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#configure-whm)

* * *

[Manage your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#manage-your-instance)

* * *

## Launch an Amazon Lightsail Instance

Last modified: _2024 November 21_

* * *

## Overview

This document explains how to launch a cPanel & WHM instance on Amazon Lightsail™. An [Amazon Lightsail instance](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-instances-virtual-private-servers-in-amazon-lightsail) is a virtual machine you can quickly and easily set up.

## Launch an Amazon Lightsail instance

Navigate to the [Amazon Lightsail website](https://lightsail.aws.amazon.com/). If you are not already signed in to your Amazon Web Services™ account, then sign in. If you do not have an account, [sign up](https://portal.aws.amazon.com/billing/signup#/start/email) for one.

Click _Create instance_. The _Create an instance_ interface will appear.

### Select your instance location

Amazon will suggest an _Instance location_. Hosting your instances in different locations can protect your instances from all experiencing outages at the same time. If you want to host your instance in a different region than the default, click _Change AWS Region and Availability Zone_:

1. The _Select a Region_ section will appear. Select the region for your instance.

2. You can also specify an availability zone by clicking _Change your Availability Zone_. Then, click the specific zone you want.


### Select your instance image and blueprint

Select the _Linux/Unix_ platform. Then, under _Select a blueprint_, click _cPanel & WHM for AlmaLinux_.

Important:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

There are several other options available in this section:

- You can [add scripts](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-configure-server-additional-data-shell-script) to further customize your instance by clicking _Add launch script_.

- This section also tells you the SSH key pair your instance will use. To change the SSH key pair or download the private key of the default key pair, click _Change SSH key pair_. The following options will appear:
  - _Create New_ — This will create a new SSH key pair in the the same region as your instance.






    Important:





    After you create the key pair, you will be given the option to download the private key. You **must** download it.

  - _Upload New_ — You can upload a public key if you already have an SSH key pair.
  - _Download_ — You can also download the private key of the _Default_ key pair if you do not want to manually create a new one.
- By checking the _Enable Automatic Snapshots_ box, the system creates a backup image of your instance each day.


### Choose your instance plan

Select the plan for your virtual machine. You can sort Amazon Lightsail’s plans by _Price per month_, _Memory_, _Processing_, _Storage_, or _Transfer_.

Warning:

You must select a plan with **at least** 1 GB of RAM. If you select a plan with less than 1 GB of RAM, the installation of cPanel & WHM **will** fail.

### Identify your instance

Enter a name for your instance. You **cannot** change the name of your instance after you create it.

You can also add [tags](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags) to your instance:

- _Key-only tags_ — A text only tag without associated values.

- _Key-value tags_ — A tag that has possible values. You must enter both the _Key_ as well as the _Value_.


### Create the instance

Once you enter all the details of your instance, click _Create instance_. You will return to the Amazon Lightsail console. The console will display your instance as it is being created.

## The cPanel & WHM installation process

When you create an instance, cPanel & WHM will automatically begin installation in the background.

Warning:

The installation process takes about 10-15 minutes. You cannot log in to WHM until the installation process is complete.

To watch the installation progress, perform the following steps:

1. On the _Instances_ page, click your instance’s name.

2. Click the _Connect_ tab.

3. Click _Connect using SSH_. The Lightsail terminal interface will appear, where you can watch the installation progress.


When the installation completes, a one-time start-up process will run. After, the [`post_snapshot`](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script/) script will run to ensure that cPanel & WHM configures itself properly.

## Setting up WHM on your instance

Once your instance is running, you need to set up a few things to ensure cPanel & WHM functions properly.

### Change the password for the `root` user

You **must** change the `root` user’s password to log in to WHM.

1. On the _Instances_ page, click your instance’s name.

2. Click the _Connect_ tab.

3. Click _Connect using SSH_. The Lightsail terminal interface will appear.

4. Enter the `sudo passwd` command into the terminal interface.

5. Enter a password.

6. Enter your password again.


### Attach a static IP address to your instance

By default, Amazon Lightsail assigns dynamic IP addresses to instances. They remain assigned to the instance as long as the instance is active. If you stop and then restart the instance, the IP address **will** change.

Important:

Your cPanel & WHM license is tied to your IP address. We **strongly** recommend assigning a static IP address to your instance **before** purchasing a license or using a trial license.

To configure a static IP address for your instance, perform the following steps:

1. On the _Instances_ page, click your instance’s name.

2. Click the _Networking_ tab.

3. Under _IP addresses_, click _Create static IP_.

4. Select your instance.

5. Enter a name for the static IP.

6. Click _Create_.


### Log in to WHM

To log in to WHM, perform the following steps:

1. Navigate to the `https://IPADDRESS:2087/` URL, where `IPADDRESS` represents your instance’s IP address.

2. Enter the `root` username and it’s password.

3. Click _Log in_.

4. Agree to the software license. A new interface will appear.

5. Enter your contact information and nameserver information. The WHM _Home_ interface will appear.


### Configure WHM

For more information on configuring cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

## Manage your instance

To access certain cPanel & WHM services, you must manually open specific firewall ports.

Log in to your Amazon Lightsail instance to [manage firewall ports and static IP addresses](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management).

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×