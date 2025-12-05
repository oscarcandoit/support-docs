---
url: "https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/"
title: "cPanel DNSOnly® | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#main-content)

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
3. [DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/)
4. cPanel DNSOnly®


[dnsonly](https://docs.cpanel.net/tags/dnsonly/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#overview)

* * *

[WHM DNSOnly interfaces](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#whm-dnsonly-interfaces)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#overview)

* * *

[WHM DNSOnly interfaces](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/#whm-dnsonly-interfaces)

* * *

## cPanel DNSOnly®

_Valid for versions 126 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/110/)

#### [112](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/112/)

#### [126](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/)

Last modified: _2025 September 5_

* * *

## Overview

The cPanel DNSOnly® software allows you to run a dedicated physical [nameserver](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver). You can then use this and other servers to create a DNS cluster. It is the simplest version of cPanel & WHM and only replicates DNS zones to your other servers.

- To install cPanel DNSOnly, follow the instructions in our [cPanel DNSOnly Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/) documentation.
- For more information about configuring a DNS cluster, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/) documentation.

### WHM DNSOnly interfaces

You can access the following interfaces from the WHM DNSOnly left-hand sidebar menu:

#### Server Configuration

- [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) — This interface allows you to change basic WHM settings.

- [_Configure cPanel Analytics_](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/) — This interface allows you to control whether Interface Analytics collects data about your server and its accounts.







Note:





This interface **only** appears if you enable Interface Analytics interface options. To learn how to do this, read our [How to Allow Users to Manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/) documentation.

- [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) — This interface allows you to define how your server performs software updates and upgrades.


#### Support

- [_Create Support Ticket_](https://docs.cpanel.net/whm/support/create-support-ticket/) — This interface allows you to create a cPanel support ticket.

- [_Grant cPanel Support Access_](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/) — This interface allows you to grant cPanel support access to your server.

- [_Support Center_](https://docs.cpanel.net/whm/support/support-center/) — This interface provides several links that allow you to access cPanel & WHM support features.


#### Networking Setup

- [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) — This interface allows you to change your server’s hostname.

- [_Resolver Configuration_](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/) — This interface allows you to use a configuration wizard to edit your server’s `/etc/resolv.conf` file.


#### Security Center

- [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/) — This interface allows you to configure cPHulk. The cPHulk service provides protection for your server against brute force attacks.

- [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control/) — This interface allows you to deny access to services by IP address.

- [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) — This interface allows you to manage your server’s SSH keys and add or import new SSH keys to your server.

- [_SSH Password Authorization Tweak_](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/) — This interface allows you to disable the use of passwords for SSH authentication.

- [_Two-Factor Authentication_](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)
— This interface allows you to configure two-factor authentication (2FA), a security measure for logging in to WHM.


#### Server Contacts

- [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager/) — This interface defines how cPanel & WHM sends alert notifications for server and account events.

- [_Edit System Mail Preferences_](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/) — This interface allows you to define how your server handles mail for the following system mail addresses:
  - `root`
  - `nobody`
  - `cpanel`

#### Service Configuration

- [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/) — This interface allows you to select cPanel & WHM log files for the `cpanellogd` daemon to compress and archive.

- [_Manage Service SSL Certificates_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) — This interface allows you to manage the SSL certificates for the services that exist on your server.

- [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/) — This interface allows you to select BIND or PowerDNS as your nameserver software or to disable the nameserver.

- [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) — This interface allows you to select which daemons to enable and which of the enabled daemons to monitor.


#### Clusters

- [_Configuration Cluster_](https://docs.cpanel.net/whm/clusters/configuration-cluster/) — This interface allows you to link a master server to additional servers in the configuration cluster.

- [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) — This interface allows you to configure a DNS cluster. The _DNS Cluster_ feature allows visitors to reach websites on your server more quickly after the web server comes back online.


#### System Reboot

- [_Forceful Server Reboot_](https://docs.cpanel.net/whm/system-reboot/system-reboot/#forceful-server-reboot) — This interface allows you to reboot your server regardless of any errors that the server may encounter.

- [_Graceful Server Reboot_](https://docs.cpanel.net/whm/system-reboot/system-reboot/#graceful-server-reboot) — This interface allows you to reboot your server by first closing any user-level processes and storing their data before the reboot.


#### DNS Functions

- [_Add an A Entry for Your Hostname_](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/) — This interface allows you to add a DNS address record for your server’s hostname.

- [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records/) — This interface allows you to reconcile differences in zone files between servers in a DNS cluster. Use this interface if some servers in your DNS cluster give outdated responses to DNS queries. This interface includes features to compare zone files among servers, recognize the most up-to-date zone files, and update the servers in the DNS cluster.


#### SQL Services

- [_MySQL/MariaDB Upgrade_](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) — This interface allows you to manage MySQL® or MariaDB® version upgrades.

#### IP Functions

- [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/) — This interface allows you to add an IP address to your IP address pool.

- [_Configure Remote Service IPs_](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/) — This interface allows you to specify remote mail server and remote nameserver IP addresses.

- [_Show or Delete Current IP Addresses_](https://docs.cpanel.net/whm/ip-functions/show-or-delete-current-ip-addresses/) — This interface allows you to view or delete your server’s bound IP addresses.



Important:





You **cannot** delete an IP address in active use.


#### cPanel

- [_Change Log_](https://docs.cpanel.net/whm/cpanel/change-log/) — This interface allows you to view published builds of cPanel & WHM software. The change log documents updates to the cPanel & WHM software that include fixes, enhancements, and patches.

- [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/) — This interface allows you to update your cPanel & WHM software to the most recent build available on your server’s Release Tier.


#### Restart Services

- _DNS Server_ — To restart the DNS server service, click _DNS Server_.

- _SQL Server (MySQL)_ — To restart the SQL (MySQL) server service, click _SQL Server (MySQL)_.

- _SSH Server (OpenSSH)_ — To restart the SSH server service, click _SSH Server (OpenSSH)_.


#### Development

- [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) — This interface allows you to create, list, and revoke API tokens. You can use an API token to authenticate with WHM’s remote API.



Note:





Users on cPanel DNSOnly systems can access the following [privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/):



- _All Features_
- _Add DNS Zones_
- _Basic System Information_
- _Basic WHM Functions_
- _Change Passwords_
- _Create User Session_
- _DNS Clustering_
- _Manage API Tokens_
- _Manage DNS Records_
- _Manage Styles_
- _Nameserver Configuration_
- _Remove DNS Zones_
- _Restart Services_
- _SSL Information_
- _SSL Site Management_
- _View Server Information_
- _View Server Status_

#### Additional Documentation

* * *

- [cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×