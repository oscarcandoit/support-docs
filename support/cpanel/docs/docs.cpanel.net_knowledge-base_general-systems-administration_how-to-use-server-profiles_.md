---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/"
title: "How to Use Server Profiles | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Use Server Profiles


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#overview)

* * *

[Roles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#roles)

* * *

[Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#profiles)

* * *

[Standard](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#standard)

* * *

[DNS](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#dns)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#mail)

* * *

[Database](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#database)

* * *

[The cphttpd service](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#the-cphttpd-service)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#overview)

* * *

[Roles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#roles)

* * *

[Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#profiles)

* * *

[Standard](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#standard)

* * *

[DNS](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#dns)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#mail)

* * *

[Database](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#database)

* * *

[The cphttpd service](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#the-cphttpd-service)

* * *

## How to Use Server Profiles

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)

Last modified: _2024 March 26_

* * *

## Overview

Server profiles let you set up servers to perform specific tasks or functions. They also manage roles that enable or disable task-specific services. For example, the _Mail_ server profile disables most non-mail services. This server hosts accounts that only need mail features and not other services.

- You can configure your server’s profile with WHM’s [_Server Profile_](https://docs.cpanel.net/whm/server-configuration/server-profile) interface ( _WHM » Home » Server Configuration » Server Profile_).
- Server profiles hide some cPanel & WHM interfaces and block some associated API functions.
  - This feature **doesn’t** block you from manually installing software.
  - Attempts to customize this feature are **not** supported and can cause unwanted results.

Important:

The system uses the `dynamicui.conf` files’s `roles` and `services` values to display and hide features in the interface. **Don’t** modify this file or these values. We **don’t** support this behavior.

#### Server profiles and licenses

Your cPanel & WHM license may determine your server’s profile.

- You can buy a [cPanel Solo® License](https://docs.cpanel.net/knowledge-base/accounts/cpanel-solo-license) for a server that uses **any** profile, but that server’s cPanel & WHM access will only allow **one** user.
- For more information, read the [Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#profiles) section below.

## Roles

Important:

- If a role disables a service, the system disables the role’s related modules and functions.
- If a server profile enables a service, the system will **also** enable service monitoring. To disable this, use WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

Roles are collections of one or more services. Profiles use roles to provide specific server functionality. A server profile may consist of one or more of the following roles:

| Role | Description | Module name | Services |
| --- | --- | --- | --- |
| Calendars and Contacts | Allows users to access CalDAV and CardDAV services and features. | `CalendarContact` | `cpdavd` |
| DNS | Allows users to create and edit Domain Name System (DNS) zone files. <br>Important:<br>- This role **doesn’t** convert your server to a [cPanel DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly) ® server. | `DNS` | `bind`, `named`, `pdns`, `powerdns` |
| File Storage | Allows users to access cPanel’s [File Manager](https://docs.cpanel.net/cpanel/files/file-manager) and [Git™ Version Control](https://docs.cpanel.net/cpanel/files/git-version-control) features. <br>Note:<br>When a profile disables this role, you **can’t** enable the _Shell Access_ setting when you [create a new cPanel account](https://docs.cpanel.net/whm/account-functions/create-a-new-account). | `FileStorage` | There are currently no services for this role. |
| FTP | Allows users to manage their account’s files with an FTP client. | `FTP` | `ftpd`, `pureftp`, `proftpd` |
| Local Mail | Allows the control of local mail delivery and related features. | `MailLocal` | `exim`, `dovecot` |
| MySQL Client | This role checks whether the MySQL/MariaDB client access exists locally or remotely. <br>Note:<br>You **cannot** directly enable or disable this role. The system enables or disables this role depending on the MySQL configuration. | `MySQLClient` | None. |
| MySQL/MariaDB | Allows users to create and manage MySQL® or MariaDB databases. | `MySQL` | `mysql` |
| PostgreSQL | Allows users to create and manage [PostgreSQL](https://docs.cpanel.net/whm/sql-services/configure-postgresql) databases if cPanel & WHM manages the server’s PostgreSQL. <br>Note:<br>You **must** install PostgreSQL to enable this optional role. | `Postgres` | `postgresql` |
| Receive Mail | Allows users to receive mail from external sources. | `MailReceive` | `cpanel_dovecot_solr`, `cpdavd`, `cpgreylistd`, `dovecot`, `imap`, `mailman`, `pop` |
| Relay Mail | Allows the server’s Message Transfer Agent (MTA) to forward mail from one remote host to another. | `MailRelay` | `exim`, `exim-altport` |
| Send Mail | Allows users to send mail and control the features necessary for sending mail. | `MailSend` | `exim`, `exim-altport` |
| Spam Filter | Allows users to use Apache SpamAssassin™ to identify, sort, and delete unsolicited mail. | `SpamFilter` | `spamd` |
| Webmail | Allows users to access webmail services and features. | `Webmail` | There are currently no services for this role. |
| Web Disk | Allows users to manage their account’s files with a WebDAV client. | `WebDisk` | `cpdavd` |
| Web Server | Allows users to create and manage websites for their domains. <br>Important:<br>When a profile disables this role, the system takes specific actions. For more information, read the [Disabled Web Server role](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabledwebserver) section below. | `WebServer` | `httpd` |

#### Disabled Web Server role

When a profile disables this role, the system applies two restrictions:

- You **can’t** enable the _CGI Access_ setting when you [create a new cPanel account](https://docs.cpanel.net/whm/account-functions/create-a-new-account).

- The `cpsrvd` daemon takes over service for the standard HTTP ports `80` and `443`.
  - This ensures that cPanel & WHM features that depend on these ports continue to function. For example, the AutoSSL, Mailman, and BoxTrapper features depend on these ports.
  - To prevent the `cpsrvd` daemon from serving ports `80` and `443`, enable the _Prevent cpsrvd from serving standard HTTP ports_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

## Profiles

Important:

Server profiles provide performance improvements, **not** necessarily additional security.

Distributed accounts have the **same** level of access on the child node as they do on the parent node. This access allows linked nodes to work smoothly with existing systems. We are researching methods to transition to a reduced access security model in a future version.

You can select from one of the following profiles:

### Standard

This profile provides all services and has access to all cPanel interfaces. This is the default server profile for a full cPanel & WHM license.

##### Roles

This profile provides all services and has access to all cPanel interfaces.

##### Disabled services

This profile doesn’t disable any [cPanel & WHM services](https://docs.cpanel.net/whm/service-configuration/service-manager).

##### Interfaces

- This profile enables all WHM interfaces.
- This profile allows cPanel users access to all cPanel interfaces.

### DNS

This profile allows the system to serve Domain Name System (DNS) zones.

Important:

- If you purchase a DNS license, the system defaults to this profile.
  - You **can’t** select a different profile.
  - You **must** upgrade to a full cPanel & WHM license to select a new profile.
  - **Only** [cPanel partners](https://cpanel.net/partners/) can purchase DNS licenses.
- Selecting this profile **doesn’t** convert your server to a [cPanel DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/) server.

##### Roles

This profile has the following role configuration:

| Role | Enabled | Disabled | Optional |
| --- | --- | --- | --- |
| Calendars and Contacts |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| DNS | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| File Storage |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| FTP |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Local Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| MySQL/MariaDB |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| PostgreSQL |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Receive Mail |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Relay Mail |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| Send Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Spam Filter |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Webmail |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Web Disk |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Web Server |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |

##### Disabled services

This profile disables the following [services](https://docs.cpanel.net/whm/service-configuration/service-manager):

[Disabled services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-services1764175697751702824)

- `cpanel_dovecot_solr`
- `cpdavd`
- `cpgreylistd`
- `ftpd`
- `httpd`
- `imap`
- `mailman`
- `mysql`
- `pop`
- `postgresql`
- `proftpd`
- `pureftp`
- `spamd`

##### Interfaces

[Disabled WHM interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-whm-interfaces1764175697752063405)

By default, this profile disables the following WHM interfaces:

| WHM section | Interfaces |
| --- | --- |
| _Account Functions_ | - _Raw Apache Log Download_<br>- _Raw FTP Log Download_<br>- _Web Template Editor_ |
| _Account Information_ | - _List Subdomains_ |
| _cPanel_ | - _Install cPAddons Site Software_<br>- _Manage cPAddons Site Software_<br>- _Reset a Mailman Password_ |
| _DNS Functions_ | - _Email Routing Configuration_ |
| _Email_ | - _Greylisting_<br>- _Mailbox Conversion_<br>- _Repair Mailbox Permissions_<br>- _Spamd Startup Configuration_ |
| _Restart Services_ | - _FTP Server (ProFTPd/PureFTPd)_<br>- _HTTP Server (Apache)_<br>- _IMAP Server_<br>- _Mailing List Manager (Mailman)_<br>- _PHP-FPM service for Apache_<br>- _SQL Server (MySQL)_ — This interface is unavailable if you disable the optional _MySQL/MariaDB_ role. |
| _Security Center_ | - _Apache mod\_userdir Tweak_<br>- _ModSecurity® Configuration_<br>- _ModSecurity® Tools_<br>- _ModSecurity® Vendors_ |
| _Server Configuration_ | - _Statistics Software Configuration_ |
| _Server Status_ | - _Apache Status_ |
| _Service Configuration_ | - _Apache Configuration_<br>- _cPanel Web Disk Configuration_<br>- _Exim Configuration Manager_<br>- _FTP Server Configuration_<br>- _FTP Server Selection_<br>- _Mailserver Configuration_ |
| _Software_ | - _EasyApache4_<br>- _MultiPHP INI Editor_<br>- _MultiPHP Manager_ |
| _SQL Services_ | - _Additional MySQL Access Hosts_<br>- _Change MySQL User Password_<br>- _Database Map Tool_<br>- _Manage Database Users_<br>- _Manage Databases_<br>- _MySQL Root Password_<br>- _MySQL/MariaDB Upgrade_<br>- _phpMyAdmin_<br>- _Repair a MySQL Database_<br>- _Show MySQL Processes_ |
| _Transfers_ | - _Convert Addon Domain to Account_ |

[Enabled cPanel interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#enabled-cpanel-interfaces1764175697752275131)

By default, this profile **and** the optional _MySQL/MariaDB_ role allow cPanel users access to the following interfaces:

| cPanel section | Interfaces |
| --- | --- |
| _Advanced_ | - _Track DNS_ |
| _Databases_ | - _phpMyAdmin_<br>- _MySQL Databases_<br>- _MySQL Database Wizard_<br>- _Remote MySQL_ |
| _Domains_ | - _Domains_<br>- _Dynamic DNS_<br>- _Zone Editor_ |
| _Email_ | - _Email Routing_<br>- _Email Deliverability_ |
| _Files_ | - _Backup_ — This profile limits functionality in this interface.<br>- _Backup Wizard_ — This profile disables this interface if you don’t enable the optional _MySQL/MariaDB_ role. |
| _Metrics_ | - This profile disables this section. |
| _Preferences_ | - _Password & Security_<br>- _Change Language_<br>- _Contact Information_ |
| _Security_ | - _SSH Access_<br>- _Manage API Tokens_ |

### Mail

This profile allows the system to serve mail. Certain cPanel & WHM features, such as AutoSSL and GNU Mailman, require HTTP service. On a _Mail_ server profile, the server disables the web server but enables the `cpsrvd` service to handle the TCP ports `80` and `443`. This ensures that HTTP-dependent cPanel & WHM features continue to function.

##### Warnings

Warning:

You **must** comply with **all** of the instructions below.

[Synchronization warnings](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#synchronization-warnings1764175697758219442)

The following instructions apply to synchronization for [linked mail child nodes](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#linked-node):

- Do **not** make changes to `userdata` files on a [child node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node) directly. We do **not** offer support if you make these changes. This behavior could cause the nodes to become out of sync.
- You **must** manually update system settings on a linked node (for example, server or Exim configuration settings).
- System and user configurations do **not** propagate from the child to the parent node.

[cPanel account warnings](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#cpanel-account-warnings1764175697758946041)

Warning:

Role restrictions may allow access to **restricted** features in some contexts. We intend to remove this functionality in a future version.


The following instructions apply to cPanel accounts for linked mail child nodes:

- Do **not** update your node’s hostname after you link two nodes. This operation could corrupt the nodes’ ability to communicate.
- You **cannot** enable IPv6 on a cPanel account if you want to distribute that account to a mail node.
- If you manually edited your [zone templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates), you **must** update the mail CNAME record. For example, update:



```bash
mail IN CNAME %domain%
```



to:



```bash
mail IN CNAME %maildomain%
```


[cPanel account restoration warnings](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#cpanel-account-restoration-warnings1764175697759087265)

The following instructions apply to cPanel account restoration for linked mail child nodes:

- When you restore a cPanel account, the A records for service subdomains may be different than when you created the cPanel account. Compare the restored zone records to your current records to repair them manually.
- You **must** perform backups for linked cPanel accounts on the controller node.

Important:

A server that uses the _Mail_ server profile disables web hosting features.


##### Roles

This profile has the following role configuration:

| Role | Enabled | Disabled | Optional |
| --- | --- | --- | --- |
| Calendars and Contacts | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| DNS |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| File Storage |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| FTP |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Local Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| MySQL/MariaDB |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| PostgreSQL |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| Receive Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Relay Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Send Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Spam Filter |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| Webmail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Web Disk |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Web Server |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |

##### Disabled services

This profile disables the following [services](https://docs.cpanel.net/whm/service-configuration/service-manager):

[Disabled services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-services1764175697759157214)

- `ftpd`
- `httpd`
- `mysql`
- `postgresql`
- `proftpd`
- `pureftp`

##### Interfaces

[Disabled WHM interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-whm-interfaces1764175697759567490)

By default, this profile disables the following WHM interfaces:

| WHM section | Interfaces |
| --- | --- |
| _Account Functions_ | - _Raw Apache Log Download_<br>- _Raw FTP Log Download_<br>- _Web Template Editor_ |
| _Account Information_ | - _List Subdomains_ |
| _Clusters_ | - _DNS Cluster_ — This interface is unavailable when you disable the optional _DNS_ role. |
| _cPanel_ | - _Install cPAddons Site Software_<br>- _Manage cPAddons Site Software_ |
| _DNS Functions_ | - _Email Routing Configuration_<br>- This section is unavailable when you disable the optional _DNS_ role. |
| _Email_ | - _Mailbox Conversion_ |
| _Resellers_ | - _Change Ownership of an Account_<br>- _Edit Reseller Nameservers and Privileges_<br>- _Manage Reseller’s IP Delegation_<br>- _Manage Reseller’s Shared IP_<br>- _View Reseller Usage and Manage Account Status_<br>- _Change Ownership of Multiple Accounts (redirects to modify account)_<br>- _Email All Resellers_ |
| _Restart Services_ | - _DNS Server_ — This interface is unavailable when you disable the optional _DNS_ role.<br>- _FTP Server (ProFTPd/PureFTPd)_<br>- _HTTP Server (Apache)_<br>- _PHP-FPM service for Apache_<br>- _SQL Server (MySQL)_<br>- _SQL Server (PgSQL)_ |
| _Security Center_ | - _Apache mod\_userdir Tweak_<br>- _Compiler Access_<br>- _ModSecurity® Configuration_<br>- _ModSecurity® Tools_<br>- _ModSecurity® Vendors_<br>- _Shell Fork Bomb Protection_<br>- _Traceroute Enable/Disable_ |
| _Server Configuration_ | - _Statistics Software Configuration_ |
| _Server Status_ | - _Apache Status_ |
| _Service Configuration_ | - _Apache Configuration_<br>- _cPanel Web Disk Configuration_<br>- _FTP Server Configuration_<br>- _FTP Server Selection_<br>- _Nameserver Selection_ — This interface is unavailable when you disable the optional _DNS_ role.<br>- _Manage Service SSL Certificates_ |
| _Software_ | - _EasyApache4_<br>- _MultiPHP INI Editor_<br>- _MultiPHP Manager_ |
| _SQL Services_ | - This section is unavailable. |
| _SSL/TLS_ | - _Manage SSL Hosts_<br>- _Purchase and Install an SSL Certificate_ |

[Enabled cPanel interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#enabled-cpanel-interfaces1764175697759826041)

By default, this profile and its roles let cPanel users access the following interfaces:

| cPanel section | Interfaces |
| --- | --- |
| _Advanced_ | - _Track DNS_ |
| _Domains_ | - _Domains_<br>- _Dynamic DNS_ — This profile disables this interface if you don’t enable the optional _DNS_ role.<br>- _Zone Editor_ |
| _Email_ | - _Email Accounts_<br>- _Forwarders_<br>- _Email Routing_<br>- _Autoresponders_<br>- _Default Address_<br>- _Mailing Lists_<br>- _Track Delivery_<br>- _Global Email Filters_<br>- _Email Filters_<br>- _Email Deliverability_<br>- _Address Importer_<br>- _Spam Filters_<br>- _Encryption_<br>- _BoxTrapper_<br>- _Configure Greylisting_<br>- _Calendars & Contacts_<br>- _Email Disk Usage_ |
| _Files_ | - _Backup_<br>- _Backup Wizard_ |
| _Preferences_ | - _Password & Security_<br>- _Change Language_<br>- _Contact Information_ |
| _Security_ | - _SSL/TLS_<br>- _SSL/TLS Status_ |

### Database

By default, this profile allows the server to only serve databases.

Warning:

This profile is experimental, and we do **not** recommend it for production environments.

##### Roles

This profile has the following role configuration:

| Role | Enabled | Disabled | Optional |
| --- | --- | --- | --- |
| Calendars and Contacts |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| DNS |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| File Storage |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| FTP |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Local Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| MySQL/MariaDB | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| PostgreSQL |  |  | ![Optional](https://docs.cpanel.net/img/green-check-icon.png) |
| Receive Mail |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Relay Mail |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Send Mail | ![Enabled](https://docs.cpanel.net/img/green-check-icon.png) |  |  |
| Spam Filter |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Webmail |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Web Disk |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |
| Web Server |  | ![Disabled](https://docs.cpanel.net/img/green-check-icon.png) |  |

##### Disabled services

By default, this profile disables the following [services](https://docs.cpanel.net/whm/service-configuration/service-manager):

[Disabled services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-services1764175697759933578)

- `bind`
- `cpanel_dovecot_solr`
- `cpdavd`
- `cpgreylistd`
- `ftpd`
- `httpd`
- `imap`
- `mailman`
- `named`
- `nsd`
- `pdns`
- `pop`
- `powerdns`
- `proftpd`
- `pureftp`
- `spamd`

##### Interfaces

[Disabled WHM interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#disabled-whm-interfaces1764175697760217236)

By default, this profile disables the following WHM interfaces:

| WHM section | Interfaces |
| --- | --- |
| _Account Functions_ | - _Raw Apache Log Download_<br>- _Raw FTP Log Download_<br>- _Web Template Editor_ |
| _Account Information_ | - _List Subdomains_ |
| _Clusters_ | - _DNS Cluster_ |
| _cPanel_ | - _Install cPAddons Site Software_<br>- _Manage cPAddons Site Software_<br>- _Reset a Mailman Password_ |
| _DNS Functions_ | - This profile disables this section. |
| _Email_ | - _Greylisting_<br>- _Mailbox Conversion_<br>- _Repair Mailbox Permissions_<br>- _Spamd Startup Configuration_ |
| _Restart Services_ | - _DNS Server_<br>- _FTP Server (ProFTPd/PureFTPd)_<br>- _HTTP Server (Apache)_<br>- _IMAP Server_<br>- _Mailing List Manager (Mailman)_<br>- _PHP-FPM service for Apache_ |
| _Security Center_ | - _Apache mod\_userdir Tweak_<br>- _ModSecurity® Configuration_<br>- _ModSecurity® Tools_<br>- _ModSecurity® Vendors_ |
| _Server Configuration_ | - _Statistics Software Configuration_ |
| _Server Status_ | - _Apache Status_ |
| _Service Configuration_ | - _Apache Configuration_<br>- _cPanel Web Disk Configuration_<br>- _FTP Server Configuration_<br>- _FTP Server Selection_<br>- _Mailserver Configuration_<br>- _Nameserver Selection_ |
| _Software_ | - _EasyApache4_<br>- _MultiPHP INI Editor_<br>- _MultiPHP Manager_ |

[Enabled cPanel interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#enabled-cpanel-interfaces1764175697760448395)

Note:

This list does **not** include the optional _PostgreSQL_ role.


By default, this profile allows cPanel users access to the following interfaces:

| cPanel section | Interfaces |
| --- | --- |
| _Advanced_ | - _Track DNS_ |
| _Databases_ | - _phpMyAdmin_<br>- _MySQL Databases_<br>- _MySQL Database Wizard_<br>- _Remote MySQL_ |
| _Email_ | - _Email Routing_<br>- _Email Deliverability_ |
| _Files_ | - _Backup_ — This profile limits functionality in this interface.<br>- _Backup Wizard_ |
| _Metrics_ | - This profile disables this section. |
| _Preferences_ | - _Password & Security_<br>- _Change Language_<br>- _Contact Information_ |
| _Security_ | - _SSH Access_<br>- _Manage API Tokens_ |

## The cphttpd service

The system uses the cphttpd service on DNSOnly, MailNode, and other non-web hosting server profiles as a method to provide hostname SSL certificates. This process listens and responds to requests on ports 80 and 443 so that the [AutoSSL](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#autossl) service can run for your hostname.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [cPanel Linked Nodes Guide](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)