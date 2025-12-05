---
url: "https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/"
title: "Create a New Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#main-content)

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
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Create a New Account


[accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/) [accountcreation](https://docs.cpanel.net/tags/accountcreation/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#overview)

* * *

[Domain Information](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#domain-information)

* * *

[Package](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#package)

* * *

[Account Enhancements](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#account-enhancements)

* * *

[Manual Resource Options](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#manual-resource-options)

* * *

[Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#settings)

* * *

[Mail Routing Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#mail-routing-settings)

* * *

[Package Extensions](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#package-extensions)

* * *

[Reseller Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#reseller-settings)

* * *

[DNS Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#dns-settings)

* * *

[Create the account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#create-the-account)

* * *

[Visitor experience](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#visitor-experience)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#overview)

* * *

[Domain Information](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#domain-information)

* * *

[Package](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#package)

* * *

[Account Enhancements](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#account-enhancements)

* * *

[Manual Resource Options](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#manual-resource-options)

* * *

[Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#settings)

* * *

[Mail Routing Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#mail-routing-settings)

* * *

[Package Extensions](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#package-extensions)

* * *

[Reseller Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#reseller-settings)

* * *

[DNS Settings](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#dns-settings)

* * *

[Create the account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#create-the-account)

* * *

[Visitor experience](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#visitor-experience)

* * *

## Create a New Account

![](https://docs.cpanel.net/img/whm-icons/create_a_new_account.svg)

_Valid for versions 124 through 128_

#### Version:

#### [106](https://docs.cpanel.net/whm/account-functions/create-a-new-account/106/)

#### [112](https://docs.cpanel.net/whm/account-functions/create-a-new-account/112/)

#### [124](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/)

#### [130](https://docs.cpanel.net/whm/account-functions/create-a-new-account/130/)

#### [132](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Create a New Account_ interface allows you to create new cPanel or WHM accounts. cPanel & WHM supports several types of users with multiple levels of permissions:

- The `root` user can create or modify any account and possesses access to all of cPanel & WHM’s features.
- Resellers can create and manage the cPanel accounts that they own and can access both the cPanel and WHM interfaces. The `root` user specifies the privileges for these accounts. For example, you can modify access to only allow resellers to suspend or unsuspend the accounts that they manage.
- cPanel users can access the cPanel interface and have access to manage most aspects of a website. The `root` user and the reseller who owns the cPanel account can specify the account’s privileges.

Important:

- If a reseller is over their account creation limit, they can’t create new accounts.
- You **must** specify nameservers for the server in WHM’s [_Basic WebHost Manager® Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_) or you will not be able to create new accounts.

Note:

Your interface may differ from what this document describes. Some users may not have access to certain features. If you need access, contact your system administrator.

## Domain Information

The _Domain Information_ section defines basic settings for a user’s account.

Important:

New users need the username and password that you enter here to log in to their accounts.

All accounts require the following information:

- _Domain_ — The domain name for the account (for example, `example.com`).






Important:





- You can create a user to represent a subdomain of a domain that you own. For example, if you own the `example.com` domain, you could assign the `username.example.com` subdomain to a new account for the `username` user.
- You **cannot** create a separate account for the `www.` subdomain. The system automatically removes the `www.` subdomain from the account name.

- _Username_ — The username for the new account.

  - The username **must** be unique and contain 16 characters or fewer.
  - The username **must** contain only lower-case letters and numbers.
  - The username **cannot** start with a number or the `test` string.
  - The username’s first eight characters **must** be unique if you plan to use MySQL® or PostgreSQL®. This prevents issues with database prefixing and account transfers. This restriction does **not** apply to servers that run MariaDB®.






    Note:





    You can disable database prefixing by selecting _Off_ for the _Require a username prefix on names of new databases and database users_ setting in the _SQL_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

  - For more information, read our [Reserved, Invalid, and Misconfigured Usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/) documentation.
- _Password_ — The password for the new account.






Note:





- Manually generated passwords do **not** have a character limit.
- System-generated passwords have an 18-character limit.

- _Re-type Password_ — The password you entered in the previous text box.
- _Strength_ — This tells you the strength of your password. Click _Password Generator_ to generate a strong password.

  - The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password. Some hosting providers require a minimum password strength.
  - A green password strength meter means that the password is equal to or greater than the required password strength.
  - For more information, read our [How to Determine Password Strength](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/) documentation.
- _Email_ — The contact email address for the new account.

#### SSL certificates

When you create an add-on, parked, or main domain or subdomain, the system attempts to secure it with an existing certificate. If none exist, the system generates a self-signed certificate. If you enable [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) for the account that owns the new domain, the system adds a request for an AutoSSL certificate. The system will install it when it becomes available.

#### UID and GID settings

The `/etc/login.defs` file contains the system accounts’ UID settings. We do **not** support customizing the `/etc/login.defs` file with new settings. cPanel & WHM uses the following UID conventions:

- On servers that run AlmaLinux OS 8, CloudLinux™ 8, or Rocky Linux™ 8, the system creates new system UIDs and GIDs with a number between `201` and `999`. The system also creates new account UIDs and GIDs with a number between `1000` and `60000`.
- On servers that run Ubuntu®, the system creates new system UIDs and GIDs with a number between `101` and `999`. The system also creates new account UIDs and GIDs with a number between `1000` and `60000`.
- On all other supported operating systems, the system creates new account and system UIDs and GIDs with a number between `0` and `500`.

## Package

The _Package_ section allows you to assign a package to a new account. A package defines the account’s limitations. For example, a package can determine how much disk space the new account can use or how much data the account can transfer. Some hosting providers use the term “domain templates” to describe this concept.

Important:

- If `root` users do not grant resellers the _Account Modification (edit-account)_ privilege then the reseller **must** specify a package when they create a new account. The `root` user can assign this privilege to resellers in WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_).
- Creating an account that will exist on a [linked server node](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/) (for example, a mail child node) **requires** a package with the [API Tokens](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) feature. If the selected package does **not** have it, the system will **not** create the account. For more information about packages, read our [Packages](https://docs.cpanel.net/whm/packages/) documentation.

- _Choose a Package_ — Allows you to assign an existing package. To view the package’s configuration hold your cursor over the magnifying glass icon (![magnifying glass icon](https://docs.cpanel.net/img/glass-icon.jpg)).
- _Select package options manually_ — Allows you to edit package settings manually. The following additional checkbox and sections will appear:

  - The _Save Manual Settings as a Package_ checkbox.
  - The _Manual Resource Options_ section.
  - Additional checkboxes in the _Settings_ section.
  - The _Package Extensions_ section, if you selected a package that uses package extensions from the _Choose a Package_ menu.
- _Save manual settings as a Package_ — Saves your manually-selected settings as a new package. If you select this, the _Package Name_ and _Feature List_ checkbox will appear.
- _Package Name_ — Names the new package you wish to create.






Important:





You **must** enter a package name in this text box.

- _Feature List_ — Allows you to select a feature list. Feature lists define which features are available to users. To edit or create a feature list, use WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).

## Account Enhancements

[Account Enhancements](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) allow you to control whether a cPanel account can access a third-party application, without modifying the account’s [package](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#package) settings. Select the checkbox for each Account Enhancement that you wish to enable for the cPanel account.

If you have not installed any third-party applications that use Account Enhancements, this section will not appear.

## Manual Resource Options

The _Manual Resource Options_ section appears when you select the _Select package options manually_ checkbox in the [_Package_](https://docs.cpanel.net/whm/account-functions/create-a-new-account/124/#package) section.

Note:

Before you set quotas, consider the type of content that your users intend to host.

You can set the following settings in the _Manual Resource Options_ section:

- _Disk Space Quota (MB)_ — The maximum amount of space on the server’s hard drive for the new account, in megabytes (MB).
- _Monthly Bandwidth Limit (MB)_ — The maximum amount of data that the new account can transfer each month, in megabytes (MB).
- _Max FTP Accounts_ — The maximum number of FTP accounts for the new account.
- _Max Email Accounts_ — The maximum number of email accounts for the new account.
- _Max Quota per Email Address (MB)_ — The maximum size that the account can define when it creates an email account, in megabytes (MB).






Note:





When you adjust this value it does **not** affect **existing** email accounts.

- _Max Mailing Lists_ — The maximum number of mailing lists for the new account. The [Mailman](http://www.gnu.org/software/mailman/docs.html) application controls mailing lists.
- _Max SQL Databases_ — The maximum number of each available type of SQL database. For example, if you set this value to `5` and allow MySQL and PostgreSQL databases, the account can create up to five MySQL databases and up to five PostgreSQL databases.
- _Max Sub Domains_ — The maximum number of subdomains that the new account may create.






Important:





A value of `0` **prevents** subdomain creation.

- _Max Parked Domains_ — The maximum number of parked domains (aliases) that the new account may create.






Important:





A value of `0` **prevents** parked domain creation.

- _Max Addon Domains_ — The maximum number of addon domains that the new account may create.






Important:





A value of `0` **prevents** addon domain creation.

- _Max Passenger Applications_ — Enter the maximum number of the account’s Passenger applications.
- _Maximum Hourly Email by Domain Relayed_ — The maximum number of emails that a domain can send per hour. This setting sets the same limit for every domain on the account. For more information, read our [How to Set Email Send Limits](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/) documentation.






Important:





A value of `0` allows unlimited outbound emails.

- _Maximum percentage of failed or deferred messages a domain may send per hour_ — The maximum percentage of failed or deferred messages that a domain can send before your server temporarily blocks outgoing mail from that domain.
- The system examines outgoing and local mail over the previous hour to determine whether the domain exceeds the limit.
- When a domain exceeds the limit, it **cannot** send mail until it no longer exceeds the limit.

## Settings

Important:

To access **all** settings in this section, you **must** select _Select Options Manually_ under the _Package_ heading.

You can set the following settings in this section:

- _Dedicated IP_ — Assigns the new account a static IP address. If you want other accounts to share an IP address you must configure them to use the same IP address. We **strongly** recommend this setting for reseller accounts.






Important:





If you select this when you create a package, you **cannot** change this setting later.





  - When you select this checkbox, the _Select the IP Address_ menu appears. You can assign an IP address or allow the system to assign an IP address to the account by selecting _Auto Assign_.
  - Unreserved IP addresses populate this menu. For more information, read our [Show Edit Reserved IPs](https://docs.cpanel.net/whm/ip-functions/show-edit-reserved-ips/) documentation.
- _Shell Access_ — Allows the user access to the server through the command line interface.
- _CGI Access_ — Allows the new account to execute CGI scripts.
- _Digest Authentication for Web Disk_ — Enables Digest Authentication support for [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/) access over a clear text or unencrypted connection.






Note:





- You **must** enable this if your server uses a self-signed certificate.
- You **must** enable this for users with Windows Vista®, Windows® 7, and Windows® 8 operating systems.

- _cPanel Theme_ — Assigns the account’s theme. You can select the default style for new accounts in WHM’s [_Customization_](https://docs.cpanel.net/whm/cpanel/customization/) interface ( _WHM » Home » cPanel » Customization_).
- _Locale_ — Assigns the new account’s language.
- _Enable Apache SpamAssassin™_ — Enables or disables Apache SpamAssassin’s [spam filters](https://docs.cpanel.net/cpanel/email/spam-filters/) on the new account.






Note:





To deselect this checkbox, you **must** set the _Apache SpamAssassin™: Forced Global ON_ setting to _Off_ in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

- _Enable Spam Box_ — Enables or disables spam box filtering for the new account.






Important:





The system delivers spam messages to the account’s inbox when you **disable** this setting. You **must** enable Apache SpamAssassin to use this feature.


## Mail Routing Settings

These settings allow you to specify how to route mail for the new account.

Select one of the following settings:

- _Automatically Detect Configuration (recommended)_ — Automatically detect which setting to use. We **recommend** this setting.
- _Local Mail Exchanger_ — Accept mail locally for the new domain.
- _Backup Mail Exchanger_ — Configure the server to be a backup mail exchanger for this domain.
- _Remote Mail Exchanger_ — Do not accept mail locally for this domain.
- _Mail child node_ — Select a [linked cPanel & WHM mail child node server](https://docs.cpanel.net/whm/server-configuration/link-server-nodes) from the menu to handle the new account’s mail functionality.






Note:





- You can only select this setting if an active cPanel & WHM mail child node server link exists on the server.
- This option is **only** available for `root` and resellers with `root`-level privileges.

## Package Extensions

Important:

You **cannot** add or remove package extensions while creating an account. To use a different set of package extensions, you **must** use one of the following methods:

- Add a new package with the desired extensions in the [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package/) interface ( _WHM » Home » Packages » Add a Package_).
- Use API calls to modify the package extension data for an existing package.

For more information, read our [Guide to Package Extensions](https://api.docs.cpanel.net/guides/guide-to-package-extensions/) documentation.

If the package that you select contains package extensions, you will see the _Package Extensions_ section. To view package extensions:

1. Select an existing package from the _Choose a Package_ menu.
2. Select the _Select Options Manually_ checkbox to modify the settings for the associated package extensions.
3. Any settings that you can edit will appear below each extension’s name.

Note:

For more information about your extension’s settings, consult the third-party software’s documentation.

## Reseller Settings

Resellers sell cPanel accounts that your server hosts. Resellers own the accounts that they create, and can modify these accounts in the WHM interface.

Warning:

Only grant reseller accounts the amount of access that they need. Also, only grant them the ability to create the types of accounts that they need. **Reseller access is only one step away from `root` access. Create reseller accounts carefully**.

- _Make the account a reseller_ — Makes the account a reseller account.






Note:





Reseller accounts are not required. You may wish to create reseller accounts if you intend to host from multiple servers. Hosting from multiple servers will decrease your overall workload.

- _Make the account own itself (i.e., the user can modify the account)_ — Allows resellers to modify their own hosting packages, which include quotas and limits. It also causes the system to log bandwidth to that reseller’s account, rather than to the `root` account.

## DNS Settings

The _DNS Settings_ section allows you to enable the new account’s DomainKeys Identified Mail (DKIM), Sender Policy Framework (SPF), and Domain-based Message Authentication, Reporting, and Conformance (DMARC) records. You can also configure which nameservers the new account’s domain will use.

Note:

[The `enable_spf_dkim_globally` script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/) allows you to enable DKIM and SPF for accounts that exist on the server. It also allows you to create the appropriate DNS records for their domains.

- _Enable DKIM on this account_ — DKIM allows the account to associate a domain name with email messages that it sends. The system will attach a digital signature to the header. A recipient’s mail transfer agent will verify the signature through DNS. This allows a recipient to confirm the message came from the account’s listed domain. It also helps reduce the chances that mail filters will mark the account’s message as spam.



Note:





This will override the server-wide DKIM setting that you set in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- _Enable SPF on this account_ — SPF allows a recipient mail server to verify the domain in the `From:` field of a message. This reduces the chance that a mail recipient’s spam filters will mark a message as spam. The system uses the following record by default:




```perl
v=spf1 +a +mx +ip4:10.0.0.1 ~all
```



In this example, `10.0.0.1` represents your IPv4 address.






Note:





- The system will **not** use this record if you assign an IPv6 address to the account in WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address/) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_).
- If you add a custom SPF record to this account in WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) it will **override** this setting.
- This setting will override the server-wide SPF settings that you set in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- _Enable DMARC on this account._ — A DMARC record sets a policy that tells servers how to handle mail based on the domain’s SPF and DKIM records. The system uses the following policy by default:




```perl
v=DMARC1; p=none;
```







Important:





- DMARC **requires** valid SPF and DKIM records. You **must** enable SPF and DKIM to enable DMARC.
- You can customize the DMARC record for a domain in WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) or in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home» Domains » Zone Editor_).
- This setting will override the server-wide DMARC setting that you set in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- _Use the nameservers specified at the Domain’s Registrar. (Ignore locally specified nameservers.)_ — Allows a different server to host the nameservers for this account. This allows the new account’s domain to begin propagating.







Note:





The nameservers that you select for the domain will appear in the _Nameservers_ list.

- _Overwrite any existing DNS zones for the account_ — Checks for existing DNS zones that may conflict with the DNS zones you add. If the system finds a conflict, it will overwrite the existing DNS zone. This allows the new account’s domain to begin propagating.

- _Nameservers_ — This section displays the current nameservers for this account. These allow a visitor to find a domain on the internet. If you select the _Use the nameservers specified at the Domain’s Registrar. (Ignore locally specified nameservers.)_ checkbox, this will display the domain’s registrar nameserver. This displays your server’s nameservers by default.


#### Write-only DNS server clusters

If you set a server in a DNS cluster to the write-only role, WHM will not check whether a DNS zone exists before you create an account. Because of this, it is possible to create the same domain name on two or more of these servers. If this occurs, the servers will compete for updates to that domain.

## Create the account

After you set the settings for the account, click _Create_ to create the account. The interface will display a confirmation message that contains the account’s settings

To log in to the account’s cPanel interface, click _Go to cPanel_.

### Visitor experience

Visitors to the account’s website will see one of the following items:

- The [default website page](https://docs.cpanel.net/whm/account-functions/web-template-editor/) template.
- Custom EasyApache 4 script overrides. For more information, read our [Web Template Editor](https://docs.cpanel.net/whm/account-functions/web-template-editor/) documentation.
- [Skeleton pages](https://docs.cpanel.net/whm/account-functions/skeleton-directory/) that you configure to populate the directory.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×