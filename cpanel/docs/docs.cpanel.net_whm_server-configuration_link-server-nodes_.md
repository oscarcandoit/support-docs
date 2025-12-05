---
url: "https://docs.cpanel.net/whm/server-configuration/link-server-nodes/"
title: "Link Server Nodes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Link Server Nodes


[whmui](https://docs.cpanel.net/tags/whmui/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#overview)

* * *

[The Create a New Connection interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-create-a-new-connection-interface)

* * *

[The Link Server Nodes interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-link-server-nodes-interface)

* * *

[The Manage Settings interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-manage-settings-interface)

* * *

[Hostname](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#hostname)

* * *

[Manage Distributed Accounts](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#manage-distributed-accounts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#overview)

* * *

[The Create a New Connection interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-create-a-new-connection-interface)

* * *

[The Link Server Nodes interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-link-server-nodes-interface)

* * *

[The Manage Settings interface](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-manage-settings-interface)

* * *

[Hostname](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#hostname)

* * *

[Manage Distributed Accounts](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#manage-distributed-accounts)

* * *

## Link Server Nodes

![](https://docs.cpanel.net/img/whm-icons/link_server_nodes.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)

Last modified: _2025 April 25_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Link Server Nodes_ interface allows you to create linkages (connections) from this server to another server. You can use these links to perform certain functions on a different server. For example, you can create a linkage to a child server that uses the [_Mail_](https://docs.cpanel.net/whm/server-configuration/server-profile) server profile. The child server would handle all of the services related to mail for any new cPanel accounts.

Note:

- This interface only appears on a server that uses the [_Standard_](https://docs.cpanel.net/whm/server-configuration/server-profile/#standard-node) profile.
- You can **only** link to a child server that shares the same cPanel & WHM [major value](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers) as your server and that uses the _Mail_ or _Standard_ server profile.

## The Create a New Connection interface

This interface allows you to create a new linkage. Enter your remote server information in the following text boxes:

- _Hostname_ — The hostname of the linked server.






Note:





You can **only** create one linkage per hostname.

- _Friendly Name_ — Create a name for the linkage.
- _Remote root Password_ — Enter the `root` password for the child node.

To create a cPanel account that uses this linkage, perform the following steps:

1. Click _Create a New Account that Uses this Connection_.
2. WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_) will appear.
3. Select the _Mail Child Node_ option in the _Mail Routing Settings_ menu.

## The Link Server Nodes interface

After you successfully create a linkage, the _Link Server Nodes_ list will appear. This interface displays all of the linkages that exist on the server. The table displays the following information:

- _Friendly Name_ — The name that you create for the linkage.
- _Hostname_ — The hostname of the linked server.
- _TLS Verified_ — Whether the system used TLS verification to create the linkage.






Note:




We do **not** recommend sending information over non-TLS (insecure) connections.


- _Manage_ — Click _Manage_ to view all the cPanel accounts that use this linkage. The [_Manage Settings_](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-manage-settings-interface) interface will appear.
- _Unlink_ — Click _Unlink_ to remove the linkage.






Important:





- When you click _Unlink_, the system will display a dialog box asking you to confirm your action.
- When you unlink an account, the source server creates an archive of the account. This archive may be larger than the email account’s current size. **Ensure** that the target server has enough free disk space to move the archive **before** you begin the process.
- The radio buttons in this dialog box control what the system does with the API token that was used to link the parent and child nodes.
- The API token’s default behavior is to expire in 24 hours. We **strongly** recommend that you **do not** change this default setting.

Click _Create a New Connection_ to create a new linkage.

## The Manage Settings interface

This interface displays all of the [distributed cPanel accounts](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#distributed-cpanel-account) for a linkage. The table displays each account by name.

### Hostname

Important:

**Only** update the hostname of the child node to match the hostname on the linkage.

You can update the hostname of the child node. Use this operation to make sure the linkage and child node’s hostname match.

### Manage Distributed Accounts

Warning:

- Performing the following action will result in account data loss.
- Only use this procedure in an emergency situation, (for example, if the child node is permanently down).
- We **strongly** recommend that you use WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_) instead.

You can select accounts and click _Force Dedistribute Accounts_ to move any offloaded mail functionality to the local server.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [Server Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/)
- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×