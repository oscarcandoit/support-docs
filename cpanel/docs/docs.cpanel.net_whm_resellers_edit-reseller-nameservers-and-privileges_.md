---
url: "https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/"
title: "Edit Reseller Nameservers and Privileges | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#main-content)

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
3. [Resellers](https://docs.cpanel.net/whm/resellers/)
4. Edit Reseller Nameservers and Privileges


[acls](https://docs.cpanel.net/tags/acls/) [resellers](https://docs.cpanel.net/tags/resellers/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#overview)

* * *

[Account Creation Limits](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-creation-limits)

* * *

[Account Enhancement Assignment Limits](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-enhancement-assignment-limits)

* * *

[Feature Limits (ACL Lists)](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#feature-limits-acl-lists)

* * *

[Load an ACL List](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#load-an-acl-list)

* * *

[Basic Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#basic-privileges)

* * *

[Standard Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#standard-privileges)

* * *

[Package Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#package-privileges)

* * *

[Global Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#global-privileges)

* * *

[Super Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#super-privileges)

* * *

[Root Access](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#root-access)

* * *

[Save the ACL List](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#save-the-acl-list)

* * *

[Nameservers](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#nameservers)

* * *

[Save settings](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#save-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#overview)

* * *

[Account Creation Limits](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-creation-limits)

* * *

[Account Enhancement Assignment Limits](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-enhancement-assignment-limits)

* * *

[Feature Limits (ACL Lists)](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#feature-limits-acl-lists)

* * *

[Load an ACL List](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#load-an-acl-list)

* * *

[Basic Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#basic-privileges)

* * *

[Standard Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#standard-privileges)

* * *

[Package Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#package-privileges)

* * *

[Global Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#global-privileges)

* * *

[Super Privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#super-privileges)

* * *

[Root Access](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#root-access)

* * *

[Save the ACL List](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#save-the-acl-list)

* * *

[Nameservers](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#nameservers)

* * *

[Save settings](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#save-settings)

* * *

## Edit Reseller Nameservers and Privileges

![](https://docs.cpanel.net/img/whm-icons/edit_reseller_name_servers_and_privileges.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to modify reseller permissions. You can set cPanel account creation limits and quotas for resellers. You can also select which privileges a particular reseller can access. You control these privileges with Access Control Lists (ACLs). For example, you can perform the following actions:

- Limit a reseller’s ability to create cPanel accounts.
- Assign nameserver IP addresses for cPanel accounts that the reseller creates. This setting also adds A entries for those addresses.

Important:

Make certain that you select the correct reseller.


To modify limits and privileges, select the reseller that you wish to modify, then click _Submit_.

If only one reseller exists, the interface automatically selects that reseller. Alternatively, use the _Reseller Actions for_ menu in WHM’s [_Reseller Center_](https://docs.cpanel.net/whm/resellers/reseller-center/) interface ( _WHM » Home » Resellers » Reseller Center_).

## Account Creation Limits

This interface uses three methods to limit a reseller’s ability to create cPanel accounts. A server that contains many cPanel accounts can deplete resources and cause it to run slowly. Use any of the following methods to prevent resource depletion:

- [Total number of accounts](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#total-number-of-accounts)
- [Limit by resource usage](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#limit-by-resource-usage)
- [Specify packages](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#specify-packages)

#### Total number of accounts

To limit the total number of cPanel accounts that a reseller can create, perform the following steps:

1. Select the _Limit the total number of accounts reseller can create_ checkbox.
2. Enter the maximum number of cPanel accounts to allow the reseller to create in the text box.

#### Limit by resource usage

Warning:

- Resource limits **only** function on cPanel accounts that you assign to packages. If a cPanel account does not use a hosting package, resource limits **do not** apply. To limit resellers in this way, you **must** require them to assign all of their cPanel accounts to a package. To do this, deselect all of the checkboxes under the _Super Privileges_ heading in the reseller’s feature list.
- If you select this setting, you **cannot** select the following privileges:

  - _Create Packages with Unlimited Disk Usage_.
  - _Create Packages with Unlimited Bandwidth_.

To limit cPanel accounts by resource usage, select the _Limit accounts that reseller can create by Resource Usage_ checkbox. This setting allows you to specify a maximum amount of disk space, bandwidth, or both, in megabytes (MB).

To limit a reseller account by resource usage, perform the following steps:

1. Select the _Limit accounts that reseller can create by Resource Usage_ checkbox. The _Resource Usage Limits_ settings will appear.
2. Enter the quotas, in megabytes, in the _Maximum Allowed Disk Space_ and _Maximum Allowed Bandwidth_ text boxes. You **cannot** enter an unlimited value in these text boxes.






Note:





You **must** provide values in both of these text boxes. However, if you want to limit a single setting, enter a very large numerical value in the **opposite** setting’s text box. For example, enter a `99999999` value in the _Maximum Allowed Disk Space_ text box. Then, enter a `1024` value in the _Maximum Allowed Bandwidth_ text box to limit the bandwidth to `1024` MB.

3. Select the _Allow Overselling_ checkbox next to each resource that you wish to allow your reseller to [oversell](https://docs.cpanel.net/knowledge-base/cpanel-product/overselling/).






Note:





Overselling combines the actual disk space used by a reseller’s cPanel accounts. If you do not enable overselling, resellers can only assign quotas that add up to the amount that you set.


#### Specify packages

Packages allow your reseller to specify settings for cPanel accounts. For example, a reseller can limit a cPanel account’s amount of monthly bandwidth or the number of subdomains. For more information about packages, read our [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/) documentation.

Note:

- To reset a package for a reseller, read our [_Reset Resellers_](https://docs.cpanel.net/whm/resellers/reset-resellers/) documentation.
- If you choose to limit a reseller by package, you cannot enter an _unlimited_ value.
- Some packages do not comply with resource limits.
- You cannot apply a resource limit to cPanel accounts with an unlimited bandwidth or disk space quota.

To specify which packages a reseller can use to create cPanel accounts, perform the following steps:

1. Select _Specify which packages reseller can use for account creation_. The _Package Limits_ settings will appear.
2. Select the _Creation Allowed_ checkbox for each package that you wish to allow the reseller to use.






Important:





You **must** select the desired _Creation Allowed_ checkboxes to allow the reseller to use that package.

3. To set a maximum number of cPanel accounts per package, select _Limit the number of accounts that a reseller can create per package_. Enter the number of packages that you wish to allow this reseller to sell for each package in the _Number Allowed_ text box.

## Account Enhancement Assignment Limits

Note:

- If you have not installed any third-party applications that use Account Enhancements, the _Account Enhancement Assignment Limits_ section will not appear.
- You must enable the [_Use Root Account Enhancements_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-enhancements) ACL to set Account Enhancement limits.

Use this section to set limits for how many [Account Enhancements](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) that a reseller can assign to the cPanel accounts they own.

To update the reseller’s Account Enhancement limit, perform the following steps.

1. Locate the Account Enhancement ID that you wish to edit in the table.
2. Set the Account Enhancement limit:
   - Enter the maximum number of Account Enhancements in the _Assignment Limit_ text box.
   - To allow unlimited Account Enhancement assignments, select the _Unlimited_ option.
   - To disallow Account Enhancement assignments, enter `0` in the _Assignment Limit_ text box.
3. Click _Save All Settings_.

## Feature Limits (ACL Lists)

You can use ACLs to manage your resellers’ privilege to access certain WHM features. For example, you can grant or deny the privilege to use WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/) interface ( _WHM » Home » Account Information » List Accounts_). By default, the system assigns the _Initial Privileges_ settings to newly-created reseller accounts.

Warning:

- You **must** correctly configure your _Super Privileges_ and _Root Access_ privileges. Carefully read the warnings for each ACL before you grant a reseller a particular ACL. **Many** of the _Super Privileges_ ACLs allow resellers to circumvent the limits that you impose.
- Granting `root`-level access to a reseller will grant the same privileges as the `root` user.

You can also edit ACL settings with one of the following methods:

- Set the privileges with the [WHM API 1 `setacls`](https://api.docs.cpanel.net/openapi/whm/operation/setacls/) function.
- Create an ACL list that contains these privileges with the [WHM API 1 `saveacllist`](https://api.docs.cpanel.net/openapi/whm/operation/saveacllist/) function. Then, assign that ACL list to the account. For more information, read our [Guide to WHM Plugins - ACL Reference Chart](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart/) documentation.

### Load an ACL List

To load a preconfigured ACL list, select that list from the _Load an ACL List_ menu. To add ACLs for the current reseller, select the checkbox for each ACL to add to the reseller account.

Note:

Only `root` or resellers with `root`-level access can modify ACLs for other resellers.

### Basic Privileges

These ACLs grant access to basic cPanel account information. The ACLs also allow resellers to perform session management. The server enables these privileges by default.

#### Initial Privileges

| ACL | Description | API value |
| --- | --- | --- |
| _Account Summary_ | Allows resellers to view their cPanel accounts’ information. | `acct-summary` |
| _Basic System Information_ | Allows resellers to retrieve basic system information. | `basic-system-info` |
| _Basic WHM Functions_ | Allows resellers to access basic cPanel & WHM options in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_). | `basic-whm-functions` |
| _Configure connected external applications_ | Allows resellers to configure connected external applications. | `connected-applications` |
| _Allow CORS HTTP Requests_ | Allows resellers to perform [Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS) requests. | `cors-proxy-get` |
| _Perform cPanel API and UAPI functions through the WHM API_ | Allow resellers to execute [cPanel API 1](https://documentation.cpanel.net/display/DD/Guide+to+cPanel+API+1), [cPanel API 2](https://documentation.cpanel.net/display/DD/Guide+to+cPanel+API+2), and [UAPI](https://api.docs.cpanel.net/cpanel/introduction/) functions via WHM. | `cpanel-api` |
| _Manage cPanel Integration Links_ | Allows resellers to manage integration links in the cPanel interface. | `cpanel-integration` |
| _Create User Session_ | Allows resellers to create a temporary user session. | `create-user-session` |
| _Digest Authentication_ | Allows resellers to enable or disable Digest Authentication in cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) interface ( _cPanel » Home » Files » Web Disk_). | `digest-auth` |
| _Generate Mobile Email Configurations_ | Allows resellers to generate email account configurations for a specific mail client. | `generate-email-config` |
| _List Packages_ | Allows resellers to view existing packages. | `list-pkgs` |
| _Manage API Tokens_ | Allows resellers to create, list, update, and revoke API tokens. | `manage-api-tokens` |
| _Manage DNS Records_ | Allows resellers to manage DNS records. | `manage-dns-records` |
| _Manage OpenID Connect_ | Allows resellers to manage their server’s OpenID Connect-compliant identity providers. | `manage-oidc` |
| _Manage Styles_ | Allows resellers to manage their cPanel accounts’ style information. | `manage-styles` |
| _MySQL Information_ | Allows resellers to view information about their MySQL® databases. | `mysql-info` |
| _Nameserver Configuration_ | Allows resellers to manage nameserver records. | `ns-config` |
| _Public Contact Information_ | Allows resellers to manage where to direct hosting provider contact information requests. | `public-contact` |
| _SSL Information_ | Allows resellers to view detailed SSL resource information. | `ssl-info` |
| _Track Email_ | Allows resellers to view a report about the [delivery route](https://docs.cpanel.net/cpanel/email/track-delivery/) for their cPanel accounts. Resellers can use this report to find problems with email delivery. | `track-email` |

### Standard Privileges

These ACLs allow resellers to view their cPanel accounts and the bandwidth that they use. The _Standard Privileges_ ACLs include the following groups:

- [Account Information](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-information)
- [Account Management](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-management)
- [DNS](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#dns)
- [Packages](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#packages)
- [Third-Party Services](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#third-party-services)
- [Troubleshooting](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#troubleshooting)
- [cPanel Management](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#cpanel-management)
- [Account Enhancements](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-enhancements)

#### Account Information

| ACL | Description | API value |
| --- | --- | --- |
| _List Accounts_ | Provides access to WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/) interface ( _WHM » Home » Account Information » List Accounts_). | `list-accts` |
| _View Account Bandwidth Usage_ | Allows the reseller to view bandwidth usage through WHM’s [_View Bandwidth Usage_](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/) interface ( _WHM » Home » Account Information » View Bandwidth Usage_). | `show-bandwidth` |

#### Account Management

| ACL | Description | API value |
| --- | --- | --- |
| _Create Accounts_ | Allows resellers to create new cPanel accounts. | `create-acct` |
| _Terminate Accounts_ | Allows resellers to terminate cPanel accounts that they own. | `kill-acct` |
| _Suspend/Unsuspend Accounts_ | Allows resellers to suspend and unsuspend cPanel accounts that they own. | `suspend-acct` |
| _Upgrade/Downgrade Accounts_ | Allows resellers to upgrade or downgrade cPanel accounts that they own. | `upgrade-account` |
| _SSL Site Management_ | Allows resellers to manage keys, CSRs, and certificates for their sites. | `ssl` |
| _Purchase SSL Certificates_ | Allows resellers to purchase third-party SSL certificates. | `ssl-buy` |
| _SSL CSR/Certificate Generator_ | Allows resellers to access and generates certificates. | `ssl-gencrt` |
| _Edit MX Entries_ | Allows resellers to edit MX (mail exchanger) entries. MX entries specify how the server routes mail. | `edit-mx` |
| _Change Passwords_ | Allows resellers to change passwords for cPanel accounts that they own. | `passwd` |
| _File and Directory Restoration_ | Allows resellers to restore items from local backup sources. | `file-restore` |

#### DNS

| ACL | Description | API value |
| --- | --- | --- |
| _Add DNS Zones_ | Allows resellers to add DNS zones. | `create-dns` |
| _Remove DNS Zones_ | Allows resellers to remove DNS zones. | `kill-dns` |
| _Park DNS Zones_ | Allows resellers to park domains. | `park-dns` |
| _Edit DNS Zones_ | Allows resellers to edit DNS zones. | `edit-dns` |

#### Packages

| ACL | Description | API value |
| --- | --- | --- |
| _Add/Remove Packages_ | Allows resellers to add and remove cPanel user packages. | `add-pkg` |
| _Edit Packages_ | Allows resellers to edit existing cPanel user packages. | `edit-pkg` |

#### Third-Party Services

| ACL | Description | API value |
| --- | --- | --- |
| _Manage Third-Party Services_ | Allows resellers to manage addon services such as plugins and cPAddons. <br>Note:<br>These privileges only appear if third-party software plugins exist on your WHM account. | `thirdparty` |

#### Troubleshooting

| ACL | Description | API value |
| --- | --- | --- |
| _Troubleshoot Mail Delivery_ | Allows resellers to use WHM’s [_Mail Troubleshooter_](https://docs.cpanel.net/whm/email/mail-troubleshooter/) interface ( _WHM » Home » Email » Mail Troubleshooter_). | `mailcheck` |

#### cPanel Management

| ACL | Description | API value |
| --- | --- | --- |
| _News Modification_ | Allows resellers to add news in WHM’s [_Modify cPanel & WHM News_](https://docs.cpanel.net/whm/cpanel/modify-cpanel-whm-news/) interface ( _WHM » Home » cPanel » Modify cPanel & WHM News_). | `news` |

#### Account Enhancements

| ACL | Description | API value |
| --- | --- | --- |
| _Use Root Account Enhancements_ | Allows resellers to assign and unassign [Account Enhancements](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) to their cPanel accounts. | `assign-root-account-enhancements` |

### Package Privileges

The following ACLs allow resellers to create, use, and modify [cPanel account packages](https://docs.cpanel.net/whm/packages/add-a-package/).

- [Accounts](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#accounts)
- [Package Access](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#package-access)
- [Package Creation](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#package-creation)

#### Accounts

| ACL | Description | API value |
| --- | --- | --- |
| _Allow Creation of Accounts with Shell Access_ | Allows resellers to create cPanel accounts that possess shell access. | `allow-shell` |

#### Package Access

| ACL | Description | API value |
| --- | --- | --- |
| _Use Root Packages_ | Allows resellers to use global packages. Reseller-specific packages contain an underscore ( `_` ) in the package name. Global packages do **not** include an underscore ( `_` ) in the package name. | `viewglobalpackages` |

#### Package Creation

| ACL | Description | API value |
| --- | --- | --- |
| _Create Packages with Addon Domains_ | Allows resellers to create packages that include addon domains. | `allow-addoncreate` |
| _Create Packages with Parked (Alias) Domains_ | Allows resellers to create packages that include parked domains (aliases). | `allow-parkedcreate` |
| _Create Packages with Dedicated IP Address_ | Allows resellers to create packages that include a dedicated IP address. | `add-pkg-ip` |
| _Create Packages with Shell Access_ | Allows resellers to create packages that grant shell access. | `add-pkg-shell` |
| _Create Packages with Unlimited Features_ | Allows resellers to set an unlimited quota on one or more package settings. | `allow-unlimited-pkgs` |
| _Create Packages with Custom Email Limits_ | Allows resellers to create packages with custom email quotas. | `allow-emaillimits-pkgs` |
| _Create Packages with Unlimited Disk Usage_ | Allows resellers to create packages with an unlimited disk quota. | `allow-unlimited-disk-pkgs` |
| _Create Packages with Unlimited Bandwidth_ | Allows resellers to create packages with unlimited bandwidth. | `allow-unlimited-bw-pkgs` |

### Global Privileges

The following ACLs grant access to server-level information and configurations. The _Global Privileges_ ACLs include the following groups:

- [Server Information](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#server-information)
- [Services](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#services)
- [Troubleshooting](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#troubleshooting)

#### Server Information

| ACL | Description | API value |
| --- | --- | --- |
| _View Server Status_ | Allows resellers to view all of the features in WHM’s [_Service Status_](https://docs.cpanel.net/whm/server-status/service-status/) interface ( _WHM » Home » Server Status » Service Status_). | `status` |
| _View Server Information_ | Allows resellers to view WHM’s [_Server Information_](https://docs.cpanel.net/whm/server-status/server-information/) interface ( _WHM » Home » Server Status » Server Information_). | `stats` |

#### Services

| ACL | Description | API value |
| --- | --- | --- |
| _Restart Services_ | Allows resellers to restart cPanel & WHM services. | `restart` |

#### Troubleshooting

| ACL | Description | API value |
| --- | --- | --- |
| _Resynchronize FTP Passwords_ | Allows resellers to access WHM’s _Synchronize FTP Passwords_ interface ( _WHM » Home » cPanel » Synchronize FTP Passwords_). | `resftp` |

### Super Privileges

The following ACLs grant `root`-level access configurations.

Warning:

These privileges allow resellers to bypass cPanel account package limits if you do not also use resource limits.

The _Super Privileges_ ACLs include the following groups:

- [Account Management](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#account-management)
- [Advanced Account Management](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#advanced-account-management)
- [Clustering](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#clustering)
- [Locales](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#locales)

#### Account Management

| ACL | Description | API value |
| --- | --- | --- |
| _Account Modification_ | Allows resellers to change an existing cPanel account in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM » Home » Account Functions » Modify an Account_). <br>Warning:<br>This privilege grants shell access unless you explicitly disallow it. However, it does not allow resellers to change a cPanel account’s IP address. | `edit-account` |
| _Bandwidth Limiting Modification_ | Allows resellers to change a cPanel account’s bandwidth usage limit in WHM’s [_View Bandwidth Usage_](https://docs.cpanel.net/whm/account-information/view-bandwidth-usage/) interface ( _WHM » Home » Account Functions » View Bandwidth Usage_). | `limit-bandwidth` |
| _Quota Modification_ | Allows resellers to change a cPanel account’s disk space quota in WHM’s [_Quota Modification_](https://docs.cpanel.net/whm/account-functions/quota-modification/) interface ( _WHM » Home » Account Functions » Quota Modification_). | `quota` |
| _Set an Account to be a Demo Account_ | Allows the reseller to enable a demonstration mode for a cPanel account. | `demo-setup` |

#### Advanced Account Management

| ACL | Description | API value |
| --- | --- | --- |
| _Rearrange Accounts_ | Allows resellers to move cPanel accounts between folders and hard drives. Select this privilege to optimize disk usage across disk drives. | `rearrange-accts` |

#### Clustering

| ACL | Description | API value |
| --- | --- | --- |
| _DNS Clustering_ | Allows resellers to access WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster/) interface ( _WHM » Home » Clusters » DNS Cluster_). <br>Warning:<br>This privilege allows a reseller to bypass many DNS zone modification restrictions. | `clustering` |

#### Locales

| ACL | Description | API value |
| --- | --- | --- |
| _Modify & Create Locales_ | Allows resellers to access WHM’s [_View Available Locales_](https://docs.cpanel.net/whm/locales/view-available-locales/) interface ( _WHM » Home » Locales » View Available Locales_). | `locale-edit` |

### Root Access

Warning:

This option grants resellers unrestricted access to **all** server functionality. **Only** grant this permission to resellers that you completely trust.


The following ACL grants a reseller `root`-level privileges on the server.

#### Everything

| ACL | Description | API value |
| --- | --- | --- |
| _All Features_ | Allows resellers complete access to the entire system. | `all` |

## Save the ACL List

You can save an ACL list and apply the same privilege configuration to other resellers. To do this, perform one of the following actions:

- _Save selections as a new ACL list_ — Saves the ACL list for future use. Select the option, enter an ACL list name, then click _Save All Settings_ to save.
- _Save selections as an existing ACL list_ — Updates an existing ACL list. Select the option, select the list to update from the menu, then click _Save All Settings_ to save.
- _Do not save selections_ — Applies privileges to the current reseller, but does not save any changes, and does not update any ACL lists. Select this option and click _Save All Settings_ to save.

## Nameservers

Use this section to set the default nameserver IP addresses. The server assigns these addresses to new cPanel accounts that the reseller creates. Available IP addresses **must** exist on your server to use this feature.

#### No available IP addresses

You may currently be using all of your IP addresses. If so, then you **must** purchase more from your internet service provider (ISP) or hosting provider. Add them to the server **before** you set up nameserver IP addresses. We recommend that you select _Inherit Nameservers from root_ to use the same nameservers as the `root` user.

#### Custom nameservers

You can enter custom nameservers for your primary, secondary, tertiary, and quaternary nameservers. To do this, select _Explicitly Set the Nameservers_ and then enter the appropriate information.

#### A and AAAA entries

A entries allow your nameserver to resolve to an IP address. To add an A entry or a AAAA entry for a nameserver, select _Explicitly Set the Nameservers_ and perform the following steps:

1. Click _Configure Address Records_. A new window will appear.
2. In the new window, enter an IPv4 address to create an A record. You may additionally enter an IPv6 address to create a AAAA record.
   - Your nameservers require A entries to work properly.
   - Your nameservers require AAAA entries to work over IPv6 properly.
3. Click _Configure Address Records_.






Warning:





You **must** register your nameserver’s domain names. The server uses the `ns` prefix, and a positive whole number to describe nameservers. For example, `ns1.example.com` or `ns2.example.com`).


## Save settings

To save your changes, you **must** click _Save All Settings_.

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [Manage Reseller's IP Delegation](https://docs.cpanel.net/whm/resellers/manage-resellers-ip-delegation/)
- [Manage Reseller's Shared IP](https://docs.cpanel.net/whm/resellers/manage-resellers-shared-ip/)
- [Reset Resellers](https://docs.cpanel.net/whm/resellers/reset-resellers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×