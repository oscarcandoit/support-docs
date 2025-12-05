---
url: "https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/"
title: "Amazon Lightsail Instance Management | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#main-content)

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
4. Amazon Lightsail Instance Management


[aws](https://docs.cpanel.net/tags/aws/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#overview)

* * *

[Access your instance](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#access-your-instance)

* * *

[Manage instances](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-instances)

* * *

[Manage firewall ports](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-firewall-ports)

* * *

[Open a firewall port](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#open-a-firewall-port)

* * *

[Close a firewall port](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#close-a-firewall-port)

* * *

[Manage or delete static IP addresses](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-or-delete-static-ip-addresses)

* * *

[Delete an instance](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#delete-an-instance)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#overview)

* * *

[Access your instance](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#access-your-instance)

* * *

[Manage instances](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-instances)

* * *

[Manage firewall ports](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-firewall-ports)

* * *

[Open a firewall port](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#open-a-firewall-port)

* * *

[Close a firewall port](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#close-a-firewall-port)

* * *

[Manage or delete static IP addresses](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-or-delete-static-ip-addresses)

* * *

[Delete an instance](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#delete-an-instance)

* * *

## Amazon Lightsail Instance Management

Last modified: _2024 November 22_

* * *

## Overview

This document describes common instance management tasks that your cPanel & WHM instance on Amazon Lightsail™ may require.

Note:

For more information about Amazon Lightsail instance management, read Amazon’s [_Managing your Amazon Lightsail instance_](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/managing-your-instance-using-lightsail) documentation.

## Access your instance

1. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

2. The dashboard will display your instance on the _Instances_ tab.


Note:

For information on launching an Amazon Lightsail instance, read our [_Launch an Amazon Lightsail Instance_](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance) documentation.

## Manage instances

Important:

- We **strongly** recommend that you stop unused instances to avoid unnecessary costs.
- If you stop an instance, Amazon Lightsail retains the instance’s basic information, but removes some data. For example, when you restart the instance, Amazon Lightsail will generate a new IP address **unless** you [attached a static IP address](https://docs.cpanel.net/knowledge-base/web-services/launch-an-amazon-lightsail-instance/#attach-a-static-ip-address-to-your-instance).

To start, stop, reboot, or terminate an instance, perform the following steps:

1. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

2. Click the three dot menu icon next to your instance’s name.

3. Select the desired action from the menu:
   - _Connect_ — Connect to your instance with a browser based SSH client.
   - _Manage_ — Open your instance in the Amazon Lightsail interface. You can also click your instance’s name.
   - _Stop_ — Pause the instance and retain some, but not all, of its data. This action is only available while an instance is running.
   - _Start_ — Restart a previously stopped instance.
   - _Reboot_ — Reboot the instance. You may need to reboot your instance after making changes.
   - _Delete_ — Delete the instance. If you attached a static IP address to your instance the IP address will remain on your account. You can attach it to a different instance or delete it separately.






     Warning:





     When you delete an instance, the system will delete the instance’s data. You **cannot** restore a deleted instance.

A confirmation message will appear once you select an action. Confirm your action.

## Manage firewall ports

When you first create an Amazon Lightsail instance, the setup process only opens a select few ports. This is to provide the safest possible experience to novice users. However, some core functionality requires you to manually open further ports.

Note:

For a list of ports used by specific services, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.

The following firewall ports are open by default:

| Service | Protocol | Port number |
| --- | --- | --- |
| SSH | TCP | `22` |
| DNS | UDP | `53` |
| DNS | TCP | `53` |
| HTTP | TCP | `80` |
| HTTPS | TCP | `443` |
| WebDAV SSL | TCP | `2078` |
| cPanel SSL | TCP | `2083` |
| WHM SSL | TCP | `2087` |
| cPanel Licensing | TCP | `2089` |

### Open a firewall port

To open ports and enable further features, perform the following actions:

1. Determine [which ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) are necessary.

2. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

3. Click your instance’s name.

4. Click the _Networking_ tab. Your instance’s _Networking_ interface will appear.

5. Scroll to the _Firewall_ section and click _Add rule_.

6. Enter the port information in the appropriate boxes.







Note:





The necessary _Protocol_ and _Port or range_ information can be found in the table in our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation. You can leave the _Application_ field set to `custom`.

7. Click _Create_.


### Close a firewall port

To close firewall ports, perform the following actions:

1. Determine [which ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) are necessary.

2. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

3. Click your instance’s name.

4. Click the _Networking_ tab. Your virtual machine’s _Networking_ interface will appear.

5. Scroll to the _Firewall_ section and locate the port to close.

6. Click the trash can icon in that port’s row.


## Manage or delete static IP addresses

To manage or delete IP addresses, perform the following:

1. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

2. Click the _Networking_ tab. The _Networking_ interface will appear.

3. Click the three dot menu icon next to the Static IP address’s name.

4. Select the desired action from the menu:
   - _Manage_ — Open the IP address interface. From that interface you can attach, detach, or view the details of your IP address.
   - _Delete_ — Delete this IP address.






     Note:





     Static IP addresses are free when attached to an instance but incur charges when detached. We recommend you delete static IP addresses you do not intend to reuse.

## Delete an instance

To delete an instance, perform the following:

1. Log in to [your Amazon Lightsail account](https://lightsail.aws.amazon.com/).

2. Click your instance’s name. The management interface will appear.

3. Click the _Delete_ tab.

4. Click _Delete instance_. A confirmation message will appear.

5. Click _Yes, delete_. Once the deletion process starts, you will return to the Amazon Lightsail console.

6. If you had attached a static IP address to the instance, it will remain on your account. Static IP addresses are free when attached to an instance but incur charges when detached. You can attach the static IP address to a different instance or [delete it](https://docs.cpanel.net/knowledge-base/web-services/amazon-lightsail-instance-management/#manage-or-delete-static-ip-addresses) to avoid charges.


#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×