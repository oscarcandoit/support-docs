---
url: "https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/"
title: "Linode Instance Management | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#main-content)

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
4. Linode Instance Management


[installation](https://docs.cpanel.net/tags/installation/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#overview)

* * *

[Access your instance for the first time](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#access-your-instance-for-the-first-time)

* * *

[Manage your instances](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#manage-your-instances)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#overview)

* * *

[Access your instance for the first time](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#access-your-instance-for-the-first-time)

* * *

[Manage your instances](https://docs.cpanel.net/knowledge-base/web-services/linode-instance-management/#manage-your-instances)

* * *

## Linode Instance Management

Last modified: _2023 April 19_

* * *

## Overview

After you create an instance at Linode, you can manage it from the _Linode Manager_ interface. This document describes common instance-management tasks that your cPanel & WHM instance may require.

Warning:

- This document assumes that you have already created an account at [Linode](https://www.linode.com/docs/guides/getting-started/#sign-up-for-an-account.).
- Linode refers to their instances as _Linodes_. This document refers to them as _instances_.
- You **must** [purchase a license for cPanel & WHM](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). New installations automatically receive a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

## Access your instance for the first time

To access a new instance, perform the following steps:

01. Navigate to the [_Linode Login_](https://login.linode.com/) interface.
02. Enter your username and password and click _Log In_. The _Linode Manager_ interface will appear.
03. From the left navigation bar, click _Linodes_. The _Linodes_ interface will appear.
04. Click the label of the instance that you wish to access. The instance’s profile interface will appear.






    Note:





    The instance’s profile interface displays your instance’s statistics. It also allows you to perform a long list of actions and configuration updates on your instance. This document only focuses on basic actions for instances.

05. In the list of instances, locate the _IP Addresses_ values. These are the public IPv4 and IPv6 addresses for the instance.
06. Click _Launch LISH Console_ if you wish to access the command line for the instance.






    Note:





    If you wish to access the command line via SSH, run the following command, where `example` represents the key pair name and `IPADDRESS` represents the public DNS address:





    ```perl
    ssh -i "~/.ssh/example.pem" root@IPADDRESS
    ```

07. Enter `root` as the username and the `root` password to log in to the instance. The instance will respond with a _Message of the Day_ message that contains helpful links and a URL to log in to cPanel & WHM.
08. In your preferred browser, navigate to the cPanel & WHM login URL. A new interface will appear.






    Note:





    You can also use the `root` user and password to log in to WHM at the following URL, where `IPADDRESS` represents your server’s IP address:





    ```perl
    https://IPADDRESS:2087
    ```

09. Agree to the software license. A new interface will appear.
10. Enter your contact information and nameserver information. The WHM _Home_ interface will appear.
11. To configure the hostname of the instance, navigate to WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).






    Important:





    You **must** set the instance’s hostname before you obtain a license for cPanel & WHM.


## Manage your instances

Important:

We **strongly** recommend that you stop unused instances to avoid unnecessary costs.

To manage an instance, perform the following steps:

1. Navigate to [Linode’s website](https://login.linode.com/).
2. Enter your username and password, and click _Log In_. The _Linode Manager_ interface will appear.
3. From the left navigation bar, click _Linodes_. The _Linodes_ interface will appear.
4. Next to the desired instance, click the three dots. A list of actions will appear.
5. Select the desired action from the menu:
   - _Power On_ or _Power Off_ — Turn on or off the instance.
   - _Reboot_ — Reboot the instance.
   - _Launch LISH Console_ — Open a command-line terminal for the instance.
   - _Clone_ — Duplicate the instance. You can select the instance to duplicate, the region in which to duplicate it, the plan to host it on, and a label for the new instance.
   - _Resize_ — Change the CPU, memory, and drive space on your instance.
   - _Rebuild_ — Rebuild the instance.






     Warning:




     Rebuilding destroys all data on the instance.


   - _Rescue_ — Boot the instance into Rescue Mode.
   - _Migrate_ — Migrate the instance to another region.






     Important:





     Your instance will receive new IPv4 and IPv6 addresses. Also, you will need to update DNS records and your cPanel license.

   - _Delete_ — Permanently delete the instance.

     - When you click _Delete_, a confirmation message will appear. Click _Delete_ to confirm your action.
     - Linode may require several minutes in order to power off and delete the instance.






       Warning:




       When you delete an instance, the system will delete the instance’s data. You **cannot** restore a deleted instance.

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×