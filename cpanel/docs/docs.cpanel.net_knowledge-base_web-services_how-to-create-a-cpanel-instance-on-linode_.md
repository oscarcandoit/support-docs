---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/"
title: "How to Create a cPanel & WHM Instance on Linode | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#main-content)

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
4. How to Create a cPanel & WHM Instance on Linode


[installation](https://docs.cpanel.net/tags/installation/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#overview)

* * *

[Log in to Linode](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#log-in-to-linode)

* * *

[Create the Linode instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#create-the-linode-instance)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#log-in-to-whm)

* * *

[Set the hostname](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#set-the-hostname)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#configure-whm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#overview)

* * *

[Log in to Linode](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#log-in-to-linode)

* * *

[Create the Linode instance](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#create-the-linode-instance)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#log-in-to-whm)

* * *

[Set the hostname](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#set-the-hostname)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-cpanel-instance-on-linode/#configure-whm)

* * *

## How to Create a cPanel & WHM Instance on Linode

Last modified: _2024 February 22_

* * *

## Overview

The following document provides the steps to build a production hosting environment on Linode®.

Warning:

- This document assumes that you have already created an account at [Linode](https://www.linode.com/docs/products/platform/get-started/#sign-up-for-an-account).
- We **only** support the official [cPanel Marketplace listing](https://www.linode.com/marketplace/apps/cpanel/cpanel/) for Linode.
- We recommend that you host interconnected servers at Linode within the same region. This will allow the servers to intercommunicate quickly on the local network.

Note:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- To activate a new license, you **must** have a cPanel Store account with a verified email address.

## Log in to Linode

To log in to Linode, perform the following steps:

1. Navigate to the [_Linode Login_](https://login.linode.com/login) interface.

2. Enter your username and password and click _Log In_. The _Dashboard_ interface will appear.


## Create the Linode instance

To create a cPanel & WHM Linode instance, perform the following steps:

01. Click _Create_ and then click _Linode_. The _Linodes / Create_ interface will appear.

02. Click _Marketplace_. A list of available applications will appear.

03. Click _cPanel_.

04. In the _Select an Image_ section, choose your desired operating system.

05. In the _Region_ section, select an appropriate region in which to create the instance.

06. In the _Linode Plan_ section, select a plan that meets your hosting needs.

07. Enter a label for the instance in the _Linode Label_ text box.

08. If you wish, enter tags in the _Add Tags_ text box to assist you in categorizing your instances.

09. Enter a secure password in the _Root Password_ text box.







    Note:





    Even if you plan to only access your instance via SSH keys, you **must** enter a `root` password.

10. In the _SSH Keys_ section, select the users whose SSH keys you wish to add to your Linode instance and click _Add An SSH Key_. The _Add SSH Key_ menu will open.

11. Enter a label for the SSH key in the _Label_ text box (for example, `id_rsa`).

12. On your local computer, open a command line session.

13. Run the `cat ~/.ssh/id_rsa.pub` command.

14. If the `id_rsa.pub` file does not exist, perform the following steps:
    1. Run the `cd ~/.ssh/` command to navigate to your `.ssh` directory.
    2. Run the `ssh-keygen` command.
    3. Confirm `id_rsa` as the new filename.
    4. Enter a passphrase, and then confirm it.
    5. Run the `cat ~/.ssh/id_rsa.pub` command again.
15. Copy the results and paste them into the _SSH Public Key_ text box.

16. If you wish to attach a [Virtual Local Area Network (VLAN)](https://ipcisco.com/lesson/vlans-virtual-local-area-networks/) to your Linode instance, select or create the _VLAN_ in the _Attach a VLAN_ menu.

17. In the _Addons_ menu, ensure that the _Backups_ and _Private IP_ services are **not** selected. You can configure these settings later.

18. Click _Create Linode_. The instance’s profile interface will appear.


Important:

For more information about creating a cPanel instance on Linode, read Linode’s [Deploy cPanel Through the Linode Marketplace](https://www.linode.com/docs/products/tools/marketplace/guides/cpanel/) documentation.

## Log in to WHM

To log in to WHM, perform the following steps:

1. In your preferred browser, navigate to the cPanel & WHM login URL. A new interface will appear.

2. Agree to the software license. The _Get started with a Free cPanel Trial!_ interface will appear.

3. You will need to log in to or create a cPanel Store account. For information how to do this, read our [How to Sign Up for a Trial License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started) documentation.

4. After you log in to the cPanel Store and obtain a trial license, the _Contact Information_ interface will appear.

5. Enter your contact information and nameserver information. The WHM _Home_ interface will appear.


Note:

After you configure the `root` user’s password, you can log in to WHM at the following URL, where `IPADDRESS` represents your server’s IP address:
`https://IPADDRESS:2087`

## Set the hostname

Note:

If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


To configure the hostname of the instance, navigate to WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).

## Configure WHM

For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm) documentation.

For more information about how to quickly publish a website on a new cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

Remember:

cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×