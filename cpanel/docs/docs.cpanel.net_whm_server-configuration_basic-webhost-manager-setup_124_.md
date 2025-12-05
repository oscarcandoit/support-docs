---
url: "https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/"
title: "Basic WebHost Manager Setup | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#main-content)

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
4. Basic WebHost Manager Setup


[server](https://docs.cpanel.net/tags/server/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmui](https://docs.cpanel.net/tags/whmui/) [contact](https://docs.cpanel.net/tags/contact/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#overview)

* * *

[Contact Information](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#contact-information)

* * *

[Basic Config](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#basic-config)

* * *

[Nameservers](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#nameservers)

* * *

[Save your changes](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#save-your-changes)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#overview)

* * *

[Contact Information](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#contact-information)

* * *

[Basic Config](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#basic-config)

* * *

[Nameservers](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#nameservers)

* * *

[Save your changes](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/#save-your-changes)

* * *

## Basic WebHost Manager Setup

![](https://docs.cpanel.net/img/whm-icons/basic_webhost_manager_setup.svg)

_Valid for version 124_

#### Version:

#### [124](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/124/)

#### [126](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)

Last modified: _2025 September 15_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure basic settings for cPanel & WHM, such as contact information or nameservers. The system displays all available setup settings by default.

## Contact Information

This section allows you to configure the following settings:

#### Enter one or more email addresses to contact in case a problem arises with this server

An email address to serve as your contact address if problems occur. The system also uses this address to create the `RNAME` field in the [Start of Authority (SOA) record in the DNS record zone](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager). For example:

```bash
user@example.com
```

Note:

- Use a comma-separated list of email addresses to designate multiple contacts.

- If you do not enter an email address, cPanel & WHM sends the following notifications to the `root` user:
  - Installer notifications.
  - Update (`upcp`) notifications.
  - New and terminated account notifications.
  - Errors from the `check_cpanel_pkgs` script.
  - Failed service notifications (for example, `IMAP` or the `httpd` daemon).
- The system will use the reseller’s email address in SOA records for cPanel accounts that the reseller creates.


Important:

We recommend that you enter an email account that does not exist on the server.

#### Enter the sender’s name you would like to appear on the notification email’s “From:” line. This value defaults to “cPanel on”, followed by your server’s hostname.

Notification emails will display the information you enter in this text box as coming from that sender. The sender’s name will appear in the notification email’s “From:” line. For example:

```bash
DO NOT REPLY - cPanel Notifications
```

If you leave this text box blank, the default sender’s name will appear as “cPanel on”, followed by your hostname. For example:

```bash
cPanel on DarkOrb Hosting
```

#### Enter an email address that accepts replies to notification emails. This setting ensures that customers’ responses to do-not-reply emails will not be lost.

An email address that recipients can reply to when they respond to notification emails. This address defaults to a do-not-reply address. However, you can set this value to a different address to allow recipients to reach customer assistance. For example:

```bash
questions@example.com
```

#### Enter one or more cellular phone or pager email addresses to message via email in case a problem arises with this server

A comma-separated list of cell phone or pager email addresses that can receive notifications if problems occur. For example:

```bash
user@sms.com, 8005551212@provider.com
```

#### An API Token for the Pushbullet API

A comma-separated list of Access Tokens for the Pushbullet™ accounts that you wish to receive notifications if problems occur. For example:

```bash
a1b2c3d4e5f6g7h8i9j0, z0y9x8w7v6u5t4s3r2q1
```

#### The ICQ ID that this server should use for login to ICQ when sending alerts

An ICQ number that your server can use to send notifications if problems occur. For example:

```bash
1234567
```

Note:

- To disable or fine-tune ICQ notifications, use the [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_).
- To register for an ICQ number, visit ICQ’s [website](https://www.icq.com/join/).

#### The ICQ ID password for sending alerts

The password for your server’s ICQ number. For example:

```bash
luggage123456
```

#### Enter one or more ICQ user identification numbers (comma delimited) you can be reached at in case a problem arises with this server

A comma-separated list of the ICQ numbers at which you wish to receive notifications if problems occur. For example:

```bash
1234568, 11223344, 1020304
```

#### A comma-separated list of http:// or https:// URLs of a system to which you want to send POST notifications as form data with the keys “hostname”, “subject”, and “body”

The URL for a form handler or ticket system that you wish to send the alert information. The system automatically sends the parameter’s hostname, subject, and body with the relevant data from the alert. For example:

```bash
https:\//www.cpanel.net/events.cgi?apikey=XXXXX&state=Texas&status=CRITICAL
```

Note:

- To send additional parameters, include those keys **after** the URL. For example, to send the `apikey` parameter with a value of `XXXXX`, append `?apikey=XXXXX` to the URL.

- To add additional parameters and values, separate those additional values with the ampersand character (`&`) instead of the question mark character (`?`). For example, to include a state parameter of `Texas` and a status parameter of `CRITICAL`, append `?apikey=XXXXX&state=Texas&status=CRITICAL` to the URL.

- If you enter a secure URL (`https://`), that site **must** possess a valid certificate.


#### Slack WebHook URL

The URL of a Slack® WebHook. The system will use the WebHook’s configuration to send the message to the desired workspace and channel.

To specify multiple Slack WebHooks, separate each URL with a comma (`,`). To obtain your own Slack WebHook, please read Slack’s [Sending messages using Incoming Webhooks](https://api.slack.com/messaging/webhooks) documentation

## Basic Config

This section allows you to configure the following settings:

#### The IPv4 address (only one address) to use to set up shared IPv4 virtual hosts

A single IPv4 address to function as the server’s shared IPv4 address. All of the accounts on your server that do not require a dedicated IPv4 address may use this IP address. For example:

```bash
10.11.133.14
```

Note:

If you change this IP address, the change will **not** affect accounts that use the previous value. To change the IP address for these accounts, use WHM’s [_IP Migration Wizard_](https://docs.cpanel.net/whm/ip-functions/ip-migration-wizard) interface ( _WHM » Home » IP Functions » IP Migration Wizard_).

#### The IPv6 address (only one address) to use to set up shared IPv6 virtual hosts

Warning:

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

A single IPv6 address to function as the server’s shared IPv6 address. All of the accounts on your server that do not require a dedicated IPv6 address may use this IP address. For example:

```bash
0:0:0:0:0:ffff:c000:200
```

Important:

- An IPv6 address range **cannot** contain a server’s shared IP address. The system does **not** allow you to set a shared IP address that exists within any configured IPv6 address range.

- You **must** add the IPv6 address that you added to the `IPV6ADDR` line in the `/etc/sysconfig/network-scripts/ifcfg-eth0` file.
  - After you do this, restart the network. To do this, run the `/usr/bin/systemctl restart network` command.

Note:

- If you change this IPv6 address, the change will **not** affect accounts that use the previous value. To change the IPv6 address for these accounts, use WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_).

- For all of cPanel & WHM’s features to function properly on IPv6, the `cpsrvd` daemon **must** listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- You **cannot** add this IPv6 address to **any** IPv6 range that you add through WHM’s [_IPv6 Address Ranges_](https://docs.cpanel.net/whm/ip-functions/ipv6-address-ranges) interface ( _WHM » Home » IP Functions » IPv6 Address Ranges_).

- When you configure this setting, BIND automatically starts to listen for DNS requests via IPv6.


#### The ethernet device onto which new IP addresses are added

Select which detected Ethernet device to add new IP addresses for your server, or enter a new device in the _Other_ text box. For example:

```bash
eth0
```

Note:

When you install cPanel & WHM, the system attempts to detect your ethernet device.

#### Enter the location where you wish for new users’ home directories to be created

A location in your server’s file system to contain all of your cPanel users’ home directories or enter one in the text box. For example:

```bash
/home
```

Note:

If you use more than one directory to store cPanel accounts, the directory with the most free space automatically stores new accounts.

This setting defaults to `/home`.

#### Additional home directories matching the following value will also be used for new home directory creations.

An additional directory that you wish to use to store your cPanel users’ home directories or enter one in the text box. You **must** enter a mount point for this setting’s value. This setting only accepts **one** value. For example:

```bash
home
```

Note:

If you use more than one directory to store cPanel accounts, the directory with the most free space automatically stores new accounts.

This setting defaults to `home`.

#### Select the Webmail default theme.

The default theme for the Webmail interface from this menu. This menu displays all of the Webmail themes that your server offers. For example:

```bash
jupiter
```

Note:

- The system uses the default theme whenever an account’s configuration does not specify a theme or uses a theme that does not exist on the server.
- If you do not select a default Webmail theme, cPanel & WHM uses the system default theme.

This setting defaults to _jupiter_.

#### Automatically create a cgi-bin script alias.

Whether the Apache web server software automatically aliases scripts in the `httpd.conf` file. For more information, read the [Apache web server documentation about the ScriptAlias directive](http://httpd.apache.org/docs/current/mod/mod_alias.html#scriptalias). For example:

```bash
Yes
```

Note:

This setting can be individually overridden during account creation.

This setting defaults to _Yes_.

#### This value defines the caching time for host name lookups for domains hosted on this server.

A Time To Live (TTL) value, in seconds, for DNS records. For example:

```bash
14400
```

Note:

- Shorter TTL values can cause heavier loads on the nameserver, but return more accurate information for zones that contain records that change frequently.
- Specify a value in seconds between `0` and `2147483647`.
- cPanel users that have the [_Zone Editor (AAAA, CAA, SRV, TXT)_ feature](https://docs.cpanel.net/whm/packages/feature-manager/#selectable-features) can override this value when they create or edit a DNS zone record.
- cPanel users that **only** have the [_Zone Editor (A, CNAME)_ feature](https://docs.cpanel.net/whm/packages/feature-manager/#selectable-features) or the [_MX Entry_ feature](https://docs.cpanel.net/whm/packages/feature-manager/#selectable-features) can override this value when they create or edit a DNS zone record via UAPI’s [`DNS::mass_zone_edit`](https://api.docs.cpanel.net/openapi/cpanel/operation/dns-mass_edit_zone/) function.

This setting defaults to `14400`.

#### This value is similar to the previous setting, but is specifically the value used for newly created zone file’s authoritative nameserver entries.

A TTL value, in seconds, for a newly-created zone file’s authoritative nameserver entries. For example:

```bash
86400
```

This setting defaults to `86400`.

#### Enter the style in which you wish to receive your Apache logs.

The style in which you wish to view Apache log files. You may select either of the following settings:

- _combined_ — This setting displays Apache log files with **all** of a request’s information. This includes referers, user agents, and requested files.
- _common_ — This setting **only** displays Apache log files with information about requested files.

This setting defaults to `combined`.

## Nameservers

Important:

You **must** specify nameservers for the server or you will not be able to create new accounts.


This section allows you to specify your server’s nameservers. Enter the nameservers that you wish to use as your primary, secondary, tertiary, and quaternary nameservers in the appropriate text boxes.

Note:

- `A` entries allow your nameserver to resolve to an IP address.
- Your nameservers require `A` entries to work over IPv4 properly.
- Your nameservers require `AAAA` entries to work over IPv6 properly.

To add an `A` entry or an `AAAA` entry for a nameserver, perform the following steps:

1. Click _Configure Address Records_. A new window will appear.

2. The system will perform a DNS lookup on the nameserver that you entered and list the results in the IP Addresses table.
   - To enter a different IPv4 address, change the entry in the _Enter an IPv4 address to create an A record_ text box.
   - To enter a different IPv6 address, change the entry in the _Enter an IPv6 address to create an AAAA record (optional)_ text box.






     Note:





     Your system will use the DNS resolvers that you configured in WHM’s [_Resolver Configuration_](https://docs.cpanel.net/whm/networking-setup/resolver-configuration) interface ( _WHM » Home » Networking Setup » Resolver Configuration_). You should check the configuration if you have problems with any nameserver IP resolution.
3. The system will display the results of your changes. Click _Close_.


## Save your changes

To save your changes to the server’s settings, click _Save Changes_.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Server Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/)
- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×