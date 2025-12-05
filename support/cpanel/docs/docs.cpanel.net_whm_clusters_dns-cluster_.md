---
url: "https://docs.cpanel.net/whm/clusters/dns-cluster/"
title: "DNS Cluster | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/clusters/dns-cluster/#main-content)

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
4. DNS Cluster


[whmui](https://docs.cpanel.net/tags/whmui/) [dns](https://docs.cpanel.net/tags/dns/) [dnsclusters](https://docs.cpanel.net/tags/dnsclusters/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/clusters/dns-cluster/#overview)

* * *

[Managing DNS clusters](https://docs.cpanel.net/whm/clusters/dns-cluster/#managing-dns-clusters)

* * *

[Global Cluster Options](https://docs.cpanel.net/whm/clusters/dns-cluster/#global-cluster-options)

* * *

[Enable and disable DNS clustering](https://docs.cpanel.net/whm/clusters/dns-cluster/#enable-and-disable-dns-clustering)

* * *

[Failure threshold for cluster members](https://docs.cpanel.net/whm/clusters/dns-cluster/#failure-threshold-for-cluster-members)

* * *

[Add a new server to the cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#add-a-new-server-to-the-cluster)

* * *

[Unique DNS Clustering](https://docs.cpanel.net/whm/clusters/dns-cluster/#unique-dns-clustering)

* * *

[Servers in your DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#servers-in-your-dns-cluster)

* * *

[Delete a server from a DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#delete-a-server-from-a-dns-cluster)

* * *

[Edit a server in a DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#edit-a-server-in-a-dns-cluster)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/clusters/dns-cluster/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/clusters/dns-cluster/#overview)

* * *

[Managing DNS clusters](https://docs.cpanel.net/whm/clusters/dns-cluster/#managing-dns-clusters)

* * *

[Global Cluster Options](https://docs.cpanel.net/whm/clusters/dns-cluster/#global-cluster-options)

* * *

[Enable and disable DNS clustering](https://docs.cpanel.net/whm/clusters/dns-cluster/#enable-and-disable-dns-clustering)

* * *

[Failure threshold for cluster members](https://docs.cpanel.net/whm/clusters/dns-cluster/#failure-threshold-for-cluster-members)

* * *

[Add a new server to the cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#add-a-new-server-to-the-cluster)

* * *

[Unique DNS Clustering](https://docs.cpanel.net/whm/clusters/dns-cluster/#unique-dns-clustering)

* * *

[Servers in your DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#servers-in-your-dns-cluster)

* * *

[Delete a server from a DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#delete-a-server-from-a-dns-cluster)

* * *

[Edit a server in a DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#edit-a-server-in-a-dns-cluster)

* * *

## DNS Cluster

![](https://docs.cpanel.net/img/whm-icons/dns_cluster.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/clusters/dns-cluster/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

A DNS cluster is a group of nameservers that share records and allows you to physically separate nameservers that handle the DNS requests from your web servers. This interface allows you to configure a DNS cluster and add servers to an existing DNS cluster.

- For more information about DNS cluster configurations and steps to set them up, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/) documentation.
- For more information about cPanel DNSOnly®, read our [cPanel DNSOnly®](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly) and [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation) documentation.

Warning:

All servers in the DNS cluster **must** run PowerDNS if domains that use DNSSEC exist in that cluster. cPanel & WHM supports DNS Security Extensions (DNSSEC) in DNS clusters. PowerDNS servers with domains that have DNSSEC configured can configure DNS clusters.

For more information about DNSSEC, read our [How to Use cPanel’s PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns) and [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor/) documentation.

## Managing DNS clusters

Important:

Resellers **must** possess the _DNS Clustering_ Account Creation Limit (ACL) privilege to view the _DNS Clustering_ section of this interface. For more information about DNS cluster-related ACLs, read our [Edit Reseller Nameservers and Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#clustering) documentation.

Users who possess the _All_ ACL privilege can add their own custom DNS servers to a cluster. Users with this ACL can also make changes to existing cluster members.

To modify DNS cluster settings, select whether to manage your DNS clusters as the `root` user or as a reseller from the _Managing DNS Cluster as:_ menu.

- Before adding custom DNS servers or changing existing cluster members, select the `root` setting from the _Managing DNS Cluster as:_ menu.

## Global Cluster Options

This section of the interface allows you to enable and disable DNS clustering. You can also use this section to configure the _Failure threshold for cluster members_ setting.

### Enable and disable DNS clustering

To enable or disable DNS clustering, perform one of the following actions:

- To enable DNS clustering, click _Enable DNS clustering_.
- To disable DNS clustering, click _Disable DNS clustering_.

### Failure threshold for cluster members

The _Failure threshold for cluster members_ setting allows you to specify the number of `dnsadmin` commands that may fail before WHM disables an unresponsive DNS cluster member.

Note:

We recommend that you disable unresponsive DNS cluster members to improve performance.

To configure the _Failure threshold for cluster members_ setting, perform the following steps:

1. Select the desired setting:
   - Select _10 (Default)_ to use the default setting, which allows cluster members to fail up to ten `dnsadmin` commands.






     Note:





     We recommend that you use this setting.

   - Select the second setting to enter a custom failure threshold.






     Note:





     If server down times or network interruptions are common in your hosting environment, we recommend that you increase the failure number count so that the system does not mark certain cluster members as offline. This may also increase server and network load because the system may repeatedly send some DNS requests.

   - Select _Keep all cluster members online at all times_ to keep all of the servers in your DNS cluster continuously online, regardless of the number of failed `dnsadmin` commands.
2. To receive notifications when the system disables an unresponsive member in your DNS cluster, select the _Receive a notification when WHM disables an unresponsive cluster member_ checkbox.






Important:





You **must** manually reenable disabled cluster members.

3. Click _Change_.






Important:





If a cluster member in the sync role is offline for an extended period of time, resynchronize the other server’s zones. This ensures that the cluster member is up-to-date.


## Add a new server to the cluster

Important:

You **must** perform steps in other interfaces to fully configure a DNS cluster. For more information, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/) documentation.

To add a cPanel & WHM or cPanel DNSOnly® server to the DNS cluster, perform the following steps:

01. Select the server type from the _Backend Type_ menu.






    Note:





    To enable DNS clustering with SoftLayer or VPS.NET, you must first obtain an API username and key from VPS.net or SoftLayer. Then, select _SoftLayer_ or _VPS.NET_ from the _Type_ menu.

02. Click _Configure_. The _cPanel DNS Remote Configuration_ interface will appear.
03. Enter the hostname or IP address of the nameserver to add to the cluster in the _Remote cPanel & WHM DNS host_ text box.






    Note:





    The `/etc/ips.dnsmaster` file contains the DNS cluster’s list of trusted nameserver IP addresses. If the IP address for a nameserver does not match a trusted IP address, you may experience problems when users create addon or parked domains. For more information about how to add a nameserver’s IP address to your trusted IP addresses, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#add-trusted-ip-addresses) documentation.

04. Enter the WHM username for the nameserver in the _Remote server username_ text box.
05. Enter the nameserver’s API token hash in the _Remote server API token_ text box. If you do not have a saved API token hash from the nameserver, log in to the nameserver and create a new API token in WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm) interface ( _WHM » Home » Development » Manage API Tokens_).






    Important:





- After you create an API token, make **certain** that you save the token hash in a safe location.
- When you create an API token for DNS clusters, use the _DNS Clustering_ Access Control List (ACL) privilege. For more information, read the [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#clustering) documentation.

06. Select _Setup Reverse Trust Relationship_ to automatically configure the DNS cluster on the remote server.






    Note:





- If you select this setting, you will not need to log in to WHM’s _DNS Cluster_ interface on the remote server. However, you may do so if you wish to modify the remote server’s DNS cluster configuration.
- This setting automatically sets the remote server’s DNS role to _Standalone_.

07. Select _Synchronize Zones Immediately_ if you want to synchronize the new server with the other nameservers in your cluster.
08. Select _Debug mode_ if you want WHM to record DNS clustering transactions in the `/usr/local/cpanel/logs/dnsadmin_log` file.
09. Select a setting from the _DNS Role_ menu to specify the server’s DNS role. The [DNS role](https://docs.cpanel.net/whm/clusters/dns-cluster/#servers-in-your-dns-cluster) specifies how the server transfers information among the other servers in the DNS cluster.






    Note:





    If you select the _Synchronize_ DNS role and selected _Synchronize Zones Immediately_ in step 7 above, the server will pull all DNS zones from the remote server. This behavior is unique to the combination of the _Synchronize_ role and the _Synchronize Zones Immediately_ option.

10. Click _Submit_ to save your settings.

### Unique DNS Clustering

Warning:

This setting **only** appears if you manage your DNS cluster as a reseller.

By default, WHM uses the DNS servers in the cluster belonging to the `root` user or reseller with `root`-level privileges. To add a different DNS server to the cluster, enable this setting.

To change this setting, perform one of the following actions, where _username_ represents the reseller user:

- To enable this setting, click _Enable unique DNS clustering for accounts owned by username_.
- To disable this setting, click _Disable unique DNS clustering for accounts owned by username_.

If the `root` user configured a cluster member, resellers **cannot** change the settings of that member. However, a reseller can add an additional configuration, with some limitations:

- If the `root` user set a server’s role to the _Standalone_ role, then the reseller can select any role for the server.
- If the `root` user set a server’s role to the _Synchronize_ or _Write-only_ role, if the reseller selects _Standalone_, the selection will be ignored.

Resellers can add a _Standalone_ configuration if the root user did **not** configure the cluster member. However, the _Synchronize_ and _Write-only_ roles require `root` configuration.

## Servers in your DNS cluster

This section allows you to view, add, and delete servers from your DNS cluster.

The _Servers in your DNS cluster_ table displays the following information about each server in your DNS cluster:

| Column | Description |
| --- | --- |
| _Hostname_ | The server’s hostname. |
| _IP address_ | The server’s IP address. |
| _Username_ | The WHM username that you used when you configured this server in the DNS cluster. Typically, this is either root or the username of a reseller account. |
| _Type_ | The type of server: _cPanel_, _SoftLayer_, or _VPS.NET_. |
| _Status_ | The version of cPanel & WHM that the server currently runs, and an icon that indicates the server’s status.<br>- If your server doesn’t run PowerDNS, this column displays a warning message instead of the cPanel & WHM version. This message notifies you that you must update your server to use PowerDNS if you wish to use DNSSEC clustering. To update your server to use PowerDNS, click the _Upgrade_ link. |
| _Server Type_ | The server’s [nameserver software](https://docs.cpanel.net/whm/service-configuration/nameserver-selection). |
| _DNS role_ | The server’s DNS role. You can choose from the following settings: <br>- _Standalone_ — Servers with a _Standalone_ DNS role receive changes from zones with newer serials (modified timestamps) but will not send signals to modify other servers. Most administrators use this setting on their [DNS profile servers](https://docs.cpanel.net/whm/server-configuration/server-profile/#dns). <br>- _Synchronize_ — Servers with a _Synchronize_ DNS role synchronize records between the local server and the remote server, prioritizing the server with the most recent changes. If a _Synchronize_ server tries to push changes to a DNS zone that has been updated more recently than the _Synchronize_ server, the DNS zone server will push the more up-to-date information back to the _Synchronize_ server. Using the _Synchronize_ setting on servers with DNS profiles can cause overwrite conflicts. Most administrators use this setting on their [standard profile servers](https://docs.cpanel.net/whm/server-configuration/server-profile/#standard). <br>- _Write-only_ — Servers with a _Write-Only_ DNS role write the local server’s records to the remote server without zone checks. This means that unlike _Synchronize_ servers, _Write-only_ servers **can overwrite** more recent DNS zones. <br>Important:<br>A _Write-only_ server pushes records to the remote server **without** conflict resolution or checks. Two _Write-only_ servers that attempt to write changes to a matching record on the same remote DNS profile server will cause a conflict and may corrupt data. Setting one or both of these [DNS profile servers](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-profile) to _Synchronize_ will avoid this problem.<br> <br> You can use the menu in this column to [change a server’s DNS role](https://docs.cpanel.net/whm/clusters/dns-cluster/#edit-a-server-in-a-dns-cluster). |
| _Actions_ | You can use the icons in this column to [modify a DNS cluster server](https://docs.cpanel.net/whm/clusters/dns-cluster/#edit-a-server-in-a-dns-cluster) or to [delete a server from the DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/#delete-a-server-from-a-dns-cluster). |

### Delete a server from a DNS cluster

Important:

- You **must** delete a server from a DNS zone before you add a replacement server to the DNS cluster. You **cannot** have two servers with the same hostname in a DNS cluster.
- If you remove a server from a DNS cluster, the records will no longer synchronize with the other servers in the DNS cluster. The records on the deleted server will also no longer exist on the servers that remain in the DNS cluster.

To remove a cPanel & WHM or cPanel DNSOnly® server from a DNS cluster, perform the following steps:

1. Log in to the server that you wish to remove from the DNS cluster.
2. Navigate to the _DNS Cluster_ interface.
3. In the _Modify Cluster Status_ text box, select _Disable DNS Clustering_.
4. Click _Change_.
5. Click _Return to Cluster Status_.
6. Log in to the servers that remain in the cluster.
7. Navigate to the _DNS Cluster_ interface ( _WHM » Home » Clusters » DNS Cluster_).
8. Locate the server that you wish to delete.
9. Click the _X_ icon (![red X icon](https://docs.cpanel.net/img/red-x.png)) under the _Actions_ heading.

When you return to the _DNS Cluster_ interface, the server will no longer appear in the list of servers in the DNS cluster.

### Edit a server in a DNS Cluster

You can change a server’s DNS role or edit the server’s configuration settings at any time.

To edit a server’s DNS role, perform the following steps:

1. Locate the server that you wish to edit.
2. In the _DNS Role_ menu, select a new role for the server.
3. Click the _Save_ icon (![save disk icon](https://docs.cpanel.net/img/disk-icon.png)) to save your changes.

To edit a server’s configuration settings, perform the following steps:

1. Locate the server you wish to edit.
2. Click the _Edit_ icon (![edit icon](https://docs.cpanel.net/img/menuedit.png)) under the _Actions_ heading. The _cPanel DNS Remote Configuration_ interface will appear.
3. After you make your changes to the server’s settings, click _Submit_.

#### Additional Documentation

* * *

- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Remote Access Key](https://docs.cpanel.net/whm/clusters/remote-access-key/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×