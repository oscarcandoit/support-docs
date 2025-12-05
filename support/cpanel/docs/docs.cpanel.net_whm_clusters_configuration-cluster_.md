---
url: "https://docs.cpanel.net/whm/clusters/configuration-cluster/"
title: "Configuration Cluster | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/clusters/configuration-cluster/#main-content)

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
3. [Clusters](https://docs.cpanel.net/whm/clusters/)
4. Configuration Cluster


[whmui](https://docs.cpanel.net/tags/whmui/) [configclusters](https://docs.cpanel.net/tags/configclusters/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/clusters/configuration-cluster/#overview)

* * *

[Assigning the master server in the configuration cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/#assigning-the-master-server-in-the-configuration-cluster)

* * *

[Updating configuration cluster settings](https://docs.cpanel.net/whm/clusters/configuration-cluster/#updating-configuration-cluster-settings)

* * *

[Import configuration settings](https://docs.cpanel.net/whm/clusters/configuration-cluster/#import-configuration-settings)

* * *

[The configuration cluster table](https://docs.cpanel.net/whm/clusters/configuration-cluster/#the-configuration-cluster-table)

* * *

[Add a server](https://docs.cpanel.net/whm/clusters/configuration-cluster/#add-a-server)

* * *

[Edit a server in the configuration cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/#edit-a-server-in-the-configuration-cluster)

* * *

[Delete a server](https://docs.cpanel.net/whm/clusters/configuration-cluster/#delete-a-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/clusters/configuration-cluster/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/clusters/configuration-cluster/#overview)

* * *

[Assigning the master server in the configuration cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/#assigning-the-master-server-in-the-configuration-cluster)

* * *

[Updating configuration cluster settings](https://docs.cpanel.net/whm/clusters/configuration-cluster/#updating-configuration-cluster-settings)

* * *

[Import configuration settings](https://docs.cpanel.net/whm/clusters/configuration-cluster/#import-configuration-settings)

* * *

[The configuration cluster table](https://docs.cpanel.net/whm/clusters/configuration-cluster/#the-configuration-cluster-table)

* * *

[Add a server](https://docs.cpanel.net/whm/clusters/configuration-cluster/#add-a-server)

* * *

[Edit a server in the configuration cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/#edit-a-server-in-the-configuration-cluster)

* * *

[Delete a server](https://docs.cpanel.net/whm/clusters/configuration-cluster/#delete-a-server)

* * *

## Configuration Cluster

![](https://docs.cpanel.net/img/whm-icons/configuration_cluster.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/clusters/configuration-cluster/)

Last modified: _2024 July 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Configuration Cluster_ interface allows you to link a master server to secondary (additional) servers in a configuration cluster. In a configuration cluster, a master server pushes out configurations to secondary servers so they all have the same settings.

After you create a configuration cluster, you can copy changes you make in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Update Preferences_) settings on the master server out to all servers in the cluster.

Important:

- If you log in to a secondary configuration cluster server, the interface will **not** indicate that the secondary server resides in the configuration cluster. You can **only** view this information on the master server.
- If you make changes to the configuration cluster’s settings on a secondary server, the master server’s settings may **overwrite** those changes.

### Assigning the master server in the configuration cluster

To set up a configuration cluster in this interface, log in as `root` or a reseller with `root`-level privileges on the server that you wish to use as your master server. When you link to a server through the _Configuration Cluster_ interface, the linked server becomes a secondary server in the master server’s configuration cluster.

### Updating configuration cluster settings

Any time you update your settings in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/#send-my-settings-to-all-configuration-cluster-servers) interface ( _WHM » Home » Server Configuration » Update Preferences_) on the master server, you can then choose to copy the master server’s changes out to all of its cluster servers. To do this, you **must** select the _Send my settings to all configuration cluster servers_ checkbox. This will then send your updates to all servers on the cluster.

### Import configuration settings

To import a service configuration from a remote server, use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_).

## The configuration cluster table

The _Configuration Cluster_ interface table contains information about the servers in the cluster:

- _Server_ — The server’s hostname or IP address.






Important:





You can use any other domain name that resolves to the server’s IP address for this value. However, to prevent problems if you migrate domains to another server, we recommend that you use the server’s hostname.

- _User_ — The username of the server’s `root`-level account. This value defaults to the `root` user.
- _Remote Access Key_ — The signature of the server’s API token or a remote access key.

## Add a server

To add a server to the configuration cluster, perform the following steps:

1. Click _Create_ at the top-right or bottom-right corner of the configuration cluster servers table.
2. Enter the server name in the _Server_ text box.
3. Enter the server’s `root`-level account username in the _User_ text box.
4. Paste the server’s API token or a remote access key in the _API Token or Remote Access Key_ text box.

   - You can generate an API token in WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) interface ( _WHM_ » _Home_ » _Development_ » _Manage API Tokens_).






     Note:





     When you create an API token for a configuration cluster, it **must** have the root-level _Everything_ Access Control List (ACL) privilege. For more information, review the [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#root-access) documentation.

   - You can generate a remote access key in WHM’s [_Remote Access Key_](https://docs.cpanel.net/whm/clusters/remote-access-key/) interface ( _WHM_ » _Home_ » _Clusters_ » _Remote Access Key_).






     Warning:





     We **strongly** recommend that you use API tokens. We deprecated WHM’s _Remote Access Key_ feature and plan to remove it in a future release.
5. Click _Save_. The server will appear in the configuration cluster servers table.

## Edit a server in the configuration cluster

To modify a server in the configuration cluster, perform the following steps:

1. Click the arrow icon (![An arrow icon.](https://docs.cpanel.net/img/arrow.png)) that corresponds to the server you want to modify.
2. Make any desired changes in the _User_ and _API Token or Remote Access Key_ text boxes.
3. Click _Save_.

## Delete a server

Note:

When you delete a server from the list of configuration cluster servers, the settings that you already applied to that server remain in place. The master server will **not** relay any new changes and will **not** overwrite changes that you make on the previously-linked server.

To remove a server from the list of the configuration cluster’s servers, perform the following steps:

1. Click the trash icon (![A trash can icon.](https://docs.cpanel.net/img/trash.png)) that corresponds to the server that you wish to delete.
2. A confirmation window will appear. Click _Continue_.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Remote Access Key](https://docs.cpanel.net/whm/clusters/remote-access-key/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×