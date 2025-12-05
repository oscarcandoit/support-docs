---
url: "https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/"
title: "How to Authenticate your Server for cPanel Technical Support | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#main-content)

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
3. [Technical Support Services](https://docs.cpanel.net/knowledge-base/technical-support-services/)
4. How to Authenticate your Server for cPanel Technical Support


[support](https://docs.cpanel.net/tags/support/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#overview)

* * *

[The Grant cPanel Support Access interface](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#the-grant-cpanel-support-access-interface)

* * *

[Manually grant server access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#manually-grant-server-access)

* * *

[Update your server information](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#update-your-server-information)

* * *

[Allow cPanel access to your server](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#allow-cpanel-access-to-your-server)

* * *

[Manage SSH keys](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#manage-ssh-keys)

* * *

[Ensure cPanel Technical Support IP addresses server access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#ensure-cpanel-technical-support-ip-addresses-server-access)

* * *

[Direct SSH access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#direct-ssh-access)

* * *

[Servers with a non-root SSH login](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#servers-with-a-non-root-ssh-login)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#overview)

* * *

[The Grant cPanel Support Access interface](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#the-grant-cpanel-support-access-interface)

* * *

[Manually grant server access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#manually-grant-server-access)

* * *

[Update your server information](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#update-your-server-information)

* * *

[Allow cPanel access to your server](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#allow-cpanel-access-to-your-server)

* * *

[Manage SSH keys](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#manage-ssh-keys)

* * *

[Ensure cPanel Technical Support IP addresses server access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#ensure-cpanel-technical-support-ip-addresses-server-access)

* * *

[Direct SSH access](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#direct-ssh-access)

* * *

[Servers with a non-root SSH login](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-authenticate-your-server-for-cpanel-technical-support/#servers-with-a-non-root-ssh-login)

* * *

## How to Authenticate your Server for cPanel Technical Support

Last modified: _2023 July 25_

* * *

## Overview

If you [opened a support ticket](https://support.cpanel.net/hc/en-us) but did not grant cPanel Technical Support access to your server, you can do so at any time. Use one of the methods described below to authenticate your server for cPanel Technical Support access.

## The Grant cPanel Support Access interface

Use WHM’s [_Grant cPanel Support Access_](https://docs.cpanel.net/whm/support/grant-cpanel-support-access) interface ( _WHM » Home » Support » Grant cPanel Support Access_) to grant server access.

## Manually grant server access

To manually allow cPanel Technical Support server access, perform the following steps:

1. In your browser, navigate to the [cPanel Help Center](https://support.cpanel.net/hc/en-us) and log in to your account.

2. Click _My Requests_ at the top of this interface. The system will direct you to the _My Requests_ interface.

3. In the _Subject_ column, click the subject of the ticket that you want to update. A new interface will appear.

4. Select _Add/Update_ from the _Server Info_ row. You can find this in the _Ticket details_ panel on the right. Afterwards, the _Update Server Information_ interface will appear.


### Update your server information

In this interface, update any of your server’s information in the provided text boxes. If you **must** provide cPanel Technical Support any usernames and passwords, enter them in the _Server Notes_ text box.

Warning:

Do **not** provide any login details in your support responses. This is a security risk.

#### Authentication for multiple servers

You can also submit authentication information for multiple servers. This is useful if you want to migrate multiple servers to cPanel & WHM, or need support for multiple servers. Click the plus icon (`+`) in the _Update Server Information_ interface to create a new server tab, then enter the server’s information. When you are finished, click _Update Servers_ to save your changes.

#### Rename a server

To rename a server’s tab, then select the tab that you want to rename. In the _Server Name_ text box, enter the new name. Repeat this for any additional server tabs, then click _Update Servers_ to save. When you are finished, click _Done_.

### Allow cPanel access to your server

In the _Refuse Access to Server_ section, select _I DO NOT wish to provide cPanel access to my server_ to allow access.

### Manage SSH keys

You will receive a unique public SSH key for each server for which you provide information. Use WHM’s [_Manage root SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_) to add these SSH keys. You can also find your unique SSH key in the ticket’s _Update Server Information_ interface.

### Ensure cPanel Technical Support IP addresses server access

When you create a ticket, the ticket will display a list of cPanel Technical Support-sanctioned IP addresses. cPanel Technical Support also provides this list in your ticket’s confirmation email. You **must** ensure that your server’s firewall settings allow cPanel Technical Support to connect to your server from the following IP addresses:

`208.74.123.98
35.161.131.175
184.94.197.2
184.94.197.3
184.94.197.4
184.94.197.5
184.94.197.6
23.111.175.214
157.90.174.91
`

Use WHM’s [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) interface ( _WHM » Home » Security Center » Host Access Control_) to add these IP addresses to your firewall.

## Direct SSH access

You can also authorize cPanel Technical Support access via the command line. Use the following command, where `TICKETNUMBER` is your ticket ID number and `#` is the server ID number from your ticket:

```bash
AUTHUSER=root TICKET=`TICKETNUMBER` SERVERNUM=# /scripts/autorepair authorize
```

### Servers with a non-root SSH login

If your server does not use the `root` login, replace `root` in the command above with the SSH login username. The username you provide **must** have full `su` or `sudo` access. You must also provide all required `root` and user passwords in the ticket’s server information. To do this, perform the following steps:

1. In your browser, navigate to the [cPanel Help Center](https://support.cpanel.net/hc/en-us) and log in to your account.
2. Click _My Requests_ at the top of this interface. The system will direct you to the _My Requests_ interface.
3. In the _Subject_ column, click the subject of the ticket that you want to update. A new interface will appear.
4. Select _Add/Update_ from the _Server Info_ row. You can find this in the _Ticket details_ panel on the right. Afterwards, the _Update Server Information_ interface will appear.
5. In the _Username for SSH Access_ section, enter the non-`root` username.
6. In the _Authentication Method for SSH Access_ section, select _Provide Password_, then enter the non-`root` username’s password.
7. In the _Root Escalation Method_ section, select whether the user has `sudo` or `su` access.
8. In the _Password Visibility Information_ section, select one of the following options:

   - _Only permit Tech Analysts to access this server via our automated login system._ — Do **not** allow cPanel Technical Support to view your password information.
   - _Permit Tech Analysts to view your passwords for this server._ — Allow cPanel Technical Support to view your password information.
9. Click _Update Servers_ to save your changes.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Create Support Ticket](https://docs.cpanel.net/whm/support/create-support-ticket/)
- [Grant cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×