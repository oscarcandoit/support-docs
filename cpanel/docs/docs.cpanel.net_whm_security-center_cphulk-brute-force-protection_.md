---
url: "https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/"
title: "cPHulk Brute Force Protection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. cPHulk Brute Force Protection


[cphulk](https://docs.cpanel.net/tags/cphulk/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#overview)

* * *

[Enable cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#enable-cphulk)

* * *

[Configure cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#configure-cphulk)

* * *

[Configuration settings](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#configuration-settings)

* * *

[Whitelist Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#whitelist-management)

* * *

[Blacklist Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#blacklist-management)

* * *

[Countries Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#countries-management)

* * *

[History Reports](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#history-reports)

* * *

[Command variables](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#command-variables)

* * *

[Example behavior](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#example-behavior)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#overview)

* * *

[Enable cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#enable-cphulk)

* * *

[Configure cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#configure-cphulk)

* * *

[Configuration settings](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#configuration-settings)

* * *

[Whitelist Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#whitelist-management)

* * *

[Blacklist Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#blacklist-management)

* * *

[Countries Management](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#countries-management)

* * *

[History Reports](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#history-reports)

* * *

[Command variables](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#command-variables)

* * *

[Example behavior](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#example-behavior)

* * *

## cPHulk Brute Force Protection

![](https://docs.cpanel.net/img/whm-icons/cphulk_brute_force_protection.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure cPHulk, a service that provides protection for your server against brute force attacks. A brute force attack uses an automated system to guess the password of your web server or services.

cPhulk monitors the following web servers and services:

- cPanel services (Port 2083).

- WHM services (Port 2087).

- Mail services (Dovecot and Exim).

- The Pure-FTPd service.

- Secure Shell (SSH) access.


When cPHulk blocks an IP address or account, it does **not** identify itself as the source of the block. Instead, the login page displays the following warning message: _The login is invalid._

Important:

We **strongly** recommend that you add your own IP address or addresses to the whitelist to avoid a lockout of the `root` user account.


Note:

- cPHulk does **not** affect public key authentication to the server. If cPHulk locks an account or all accounts out of the server, you may still use public keys and API tokens to authenticate to your server.
- cPHulk does **not** consider multiple login attempts that use the same IP address, username, **and** password as separate failures if they occur within the same six-hour period.
- To manage cPHulk from the command line, read our [cPHulk Management on the Command Line](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line) documentation.
- The [_Create Support Ticket_](https://docs.cpanel.net/whm/support/create-support-ticket) interface ( _WHM » Home » Support » Create Support Ticket_) automatically adds cPanel Support’s IP addresses to cPHulk’s whitelist.

## Enable cPHulk

To enable cPHulk on the server, set the toggle to _On_.

Note:

- By default, your server enables the `UseDNS` setting in the `/etc/ssh/sshd_config` file. The `UseDNS` setting sends the hostname to the Password Authentication Module (PAM), which ships with cPanel & WHM, for SSH session authentication. cPHulk also requests authentication information from PAM to determine whether a login attempt could be a brute force attack.
- If an attacker spoofs a DNS pointer record to impersonate a trusted hostname, the `UseDNS` setting and cPHulk’s whitelist will conflict. This allows the attacker to perform a brute force attack against the server with unlimited login attempts. Therefore, the system disables the `UseDNS` setting when you enable cPHulk.

## Configure cPHulk

### Configuration settings

You can configure the following Configuration Settings options:

#### Username-based protection

- _Username-based Protection_ — Whether to enable the username-based protection settings. Set the toggle to _On_ to enable the _Username-based Protection_ setting. Username-based protection tracks login attempts for user accounts. When you disable cPHulk, existing account locks will remain. This setting defaults to _On_.







Note:





- You **must** click _Save_ to change this setting.
- The server does **not** send notifications for username-based brute force attacks.

- _Brute Force Protection Period_ (in minutes) — The number of minutes during which cPHulk measures all login attempts to a specific user’s account. This setting defaults to `5`.
  - If several attackers attempt to log in, and they reach the account’s _Maximum Failures by Account_ value within this period, cPHulk classifies this as a brute force attempt.

  - cPHulk blocks logins from **any** IP addresses to that account, regardless of the attackers’ IP address or addresses.

  - Enter a value between `1` and `1,440` for this setting.
- _Maximum Failures by Account_ — The maximum number of failures that cPHulk allows per account within the _Brute Force Protection Period (in minutes)_ time range. This setting defaults to `15`.
  - If a brute force attack meets this number of attempts, the system locks the account, regardless of the attackers’ IP addresses.

  - cPHulk locks the account for one minute for each attempt that you allow with this setting. For example, if you set the _Maximum Failures by Account_ setting to `15`, after 15 login attempts cPHulk locks the account for 15 minutes.

  - When you set this value to `0`, cPHulk blocks **all** login attempts (this includes the `root` account). To avoid this lock-out, you **must** whitelist your IP address.
- _Apply protection…_ — Select one of the following options to control how cPHulk applies its protection:
  - _Apply protection to local addresses only_ — Limit username-based protection to trigger **only** on requests that originate from the local system. This ensures that a user cannot brute force other accounts on the same server. This is the default setting.

  - _Apply protection to local and remote addresses_ — Allow username-based protection to trigger for all requests, regardless of their origin.
- _Allow username protection to lock the “root” user_ — Whether to apply username-based protection rules to the `root` user. This checkbox defaults to deselected.


#### IP Address-based protection

- _IP Address-based Protection_ — Whether to enable the IP address-related protection settings. Set the toggle to On to enable the _IP Address-based Protection_ setting. IP address-based protection tracks login attempts from specific IP addresses. When you disable cPHulk existing account locks will remain. This setting defaults to _On_.






Note:




You must click _Save_ to implement any change to this setting.


- _IP Address-based Brute Force Protection Period (in minutes)_ — The number of minutes during which cPHulk measures all login attempts from an attacker’s IP address. cPHulk classifies the following as a brute force attack:
  - Attackers from a specific IP address attempt to log in repeatedly with different usernames or passwords.

  - They reach the _Maximum Failures per IP Address_ value.






    Note:





- cPHulk measures the attacker’s IP address for the number of minutes that you specify.
  - cPHulk will **not** measure **all** IP addresses.
- _Maximum Failures per IP Address_ — The maximum number of times that a potential attacker at a specific IP address can fail to log in before cPHulk blocks that IP address. When you set this value to `0`, cPHulk blocks **all** login attempts (this includes the `root` account). To avoid this lock-out, you **must** whitelist your IP address. This setting defaults to `5`.

- _Command to Run When an IP Address Triggers Brute Force Protection_ — The full path to a command that you want the system to run when an IP address triggers brute force protection. For a list of variables to use in this command, read the [Command variables](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#command-variables) section below.

- _Block IP addresses at the firewall level if they trigger brute force protection_ — Whether you wish to automatically add IP addresses that trigger brute force protection to the firewall.






Note:





- This option writes a new `iptables` rule and requires `iptables` version 1.4 or higher to block IP addresses at the IP address-based level.

- This option does **not** exist on Virtuozzo.


#### One-day blocks

- _Maximum Failures per IP Address before the IP Address is Blocked for One Day_ — The maximum number of times that a potential attacker at a specific IP address can fail to log in before cPHulk blocks that IP address for a one-day period. This option defaults to `30`.

- _Command to Run When an IP Address Triggers a One-Day Block_ — The full path to a command that you want the system to run when the system blocks an IP address for a one-day period. For a list of variables to use in this command, read the [Command variables](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/#command-variables) section below.

- _Block IP addresses at the firewall level if they trigger a one-day block_ — Whether you wish to automatically add IP addresses that trigger a one-day block to the firewall. This option writes a new `iptables` rule and requires `iptables` version 1.4 or higher. This checkbox defaults to selected.






Note:





- This option writes a new `iptables` rule and requires `iptables` version 1.4 or higher to block IP addresses at the IP address-based level.

- This option does **not** exist on Virtuozzo.


#### Login History

- _Duration for Retaining Failed Logins (in minutes)_ — This setting determines for how long the system displays failed login entries on the `History Reports` tab. It also determines the number of minutes that the system allows for an attacker to reach the following settings:
  - _Maximum Failures by Account_

  - _Maximum Failures per IP Address_

  - _Maximum Failures per IP Address before the IP Address is Blocked for One Day_

This setting defaults to `360`.

#### Notifications

- _Send a notification upon successful root login when the IP address is not on the whitelist_ — Whether you wish to receive a notification when the root user successfully logs in from an IP address that does not exist in the whitelist. This checkbox defaults to deselected.






Note:




The system only sends a notification once in any 24-hour window for a specific username, service, and IP address combination.


- _Send a notification upon successful root login when the IP address is not on the whitelist, but from a known netblock_ — Whether you wish to receive a notification when the root user successfully logs in from an IP address that does not exist in the whitelist, but exists in a known netblock. This checkbox defaults to deselected.

- _Send a notification when the system detects a brute force user_ — Whether you wish to receive a notification when cPHulk detects a brute force attack. This checkbox defaults to deselected.


### Whitelist Management

The _Whitelist Management_ options allow you to manage the IP addresses on your server’s whitelist. The whitelist specifies IP addresses for which cPHulk **always** allows logins to your server.

Important:

We **strongly** recommend that you add your own IP address to the whitelist to avoid lockouts of the `root` account. cPHulk displays a warning if the whitelist does not include your IP address. Click _Add to Whitelist_ in the notification to automatically add your IP address.


#### New Whitelist Records

To add IP addresses to cPHulk’s whitelist, perform the following steps:

1. Enter one or more IP addresses, one per line, in the _New Whitelist Records_ text box.






Note:




Enter IP addresses individually (IPv4 or IPv6) or in [CIDR format](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).


2. Enter any desired comments in the _Comment_ text box. This comment will display for each of the IP addresses that you entered.

3. Click _Add_.


#### Delete an IP address

To delete a single IP address from the whitelist, click _Delete_ to the right of that IP address.

To delete multiple IP addresses from the whitelist, perform the following steps:

1. Select the checkboxes to the left of each IP address that you wish to remove, or select the checkbox to the left of the _IP Address_ heading to select them all.

2. Click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Delete Selected_.


To delete all of the IP addresses from the whitelist, you can also click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) to the top right of the list and click _Delete All_.

#### Edit a comment

To modify an IP address’s comment, perform the following steps:

1. Click _Edit_ to the right of that IP address. A _Comment_ text box will appear to the left of the list.

2. Enter the new comment in the _Comment_ text box.

3. Click Update to save your change, or _Cancel_ to reject it.


#### Whitelist search

You can use the _Search_ text box to locate a specific whitelisted record. To search, enter the IP address or comment in the search text box. The interface will automatically display the results of your search. You can also enter a partial IP address or comment to return multiple results.

#### Whitelist download

You can download your server’s whitelisted IP addresses in a `.txt` file. To download all of the whitelisted IP addresses, click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Download All_.

To selectively download whitelisted IP addresses, perform the following steps:

1. Select the checkboxes to the left of each IP address that you wish to download, or select the checkbox to the left of the _IP Address_ heading to select them all.

2. Click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Download Selected_.


### Blacklist Management

The _Blacklist Management_ options allow you to manage the IP addresses on your server’s blacklist. The blacklist specifies IP addresses for which cPHulk **never** allows logins to your server.

#### New Blacklist Records

To add IP addresses to cPHulk’s blacklist, perform the following steps:

1. Enter one or more IP addresses, one per line, in the New _Blacklist Records_ text box.







Note:





Enter IP addresses individually (IPv4 or IPv6) or in [CIDR format](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

2. Enter any desired comments in the _Comment_ text box. This comment will display for each of the IP addresses that you entered.

3. Click _Add_.


#### Delete an IP address

To delete a single IP address from the blacklist, click Delete to the right of that IP address.

To delete multiple IP addresses from the blacklist, perform the following steps:

1. Select the checkboxes to the left of each IP address that you wish to remove, or select the checkbox to the left of the _IP Address_ heading to select them all.

2. Click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Delete Selected_.


To delete all of the IP addresses from the blacklist, you can also click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) to the top right of the list and click _Delete All_.

#### Edit a comment

To modify an IP address’s comment, perform the following steps:

1. Click _Edit_ to the right of that IP address. A _Comment_ text box will appear to the left of the list.

2. Enter the new comment in the _Comment_ text box.

3. Click Update to save your change, or _Cancel_ to reject it.


#### Blacklist search

You can use the _Search_ text box to locate a specific blacklisted record. To search, enter the IP address or comment in the search text box. The interface will automatically display the results of your search. You can also enter a partial IP address or comment to return multiple results.

#### Blacklist download

You can download your server’s blacklisted IP addresses in a `.txt` file. To download all of the blacklisted IP addresses, click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Download All_.

To selectively download blacklisted IP addresses, perform the following steps:

1. Select the checkboxes to the left of each IP address that you wish to download, or select the checkbox to the left of the _IP Address_ heading to select them all.

2. Click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) on the top right of the list and click _Download Selected_.


### Countries Management

The _Countries Management_ tab lists countries that you can whitelist, blacklist, or remove from either list. The whitelist specifies the IP addresses that cPHulk **always** allows to log in to your server. The blacklist specifies the IP addresses that **cPHulk** never allows to log in to your server.

To add a country’s range of IP addresses to the whitelist or blacklist, select _Whitelisted_ or _Blacklisted_ for the country that you wish to modify. To specify the Whitelisted, Blacklisted, or _Not Specified_ option for multiple countries, perform the following steps:

1. Select the checkboxes for the countries that you wish to modify.

2. Click the gear icon (![gear icon](https://docs.cpanel.net/img/cphulk-gear.png)) at the top of the table.

3. Click _Whitelist Selected Countries_, _Blacklist Selected Countries_, or _Set Selected to “Not Specified”_.


Important:

- The _Unknown Region (ZZ)_ entry includes private IP addresses (for example, `192.168.1.1`).
- We update the [GeoIP](https://en.wikipedia.org/wiki/Geolocation_software) database for each [major release cPanel & WHM version](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process). The database includes GeoLite2 data created by [MaxMind](https://www.maxmind.com/).

### History Reports

The _History Reports_ tab displays information about failed attempts to log in to your server.

Important:

Monitor these lists to find IP addresses and accounts to add to the blacklist.


Note:

cPHulk stores failed login attempts in the cphulkd database.

- You may wish to access this database in order to identify IP addresses to add to the blacklist.

- You may wish to clear this database in order to conserve system resources. To clear the database, click _Clear Data for All Reports_. This action does not clear cPHulk’s whitelist or blacklist.


To view a report, select the report type from the _Select a Report_ menu.

#### Failed Logins or Blocked Users

The _Failed Logins_ and _Blocked Users_ reports display the following information:

- _User_ — The user who attempted to log in to your server.

- _IP Address_ — The IP address from which the user attempted to log in to your server.


Note:

The system populates this text box when it records an IP address. However, it is normal for this text box not to contain any information.


- Service - The service on your server to which the user attempted to log in. For example:
  - _system_ — cPanel, SSH, or WHM.

  - _mail_ — A POP3 or IMAP mail client, or Webmail.

  - _ftp_ — Normal FTP accounts.

Note:

- The Password Authentication Module (PAM) identifies the lack of @domain in a username to determine whether a user is a cPanel user.

- Any attempt to log in with a username without `@domain` displays in cPHulk (or the `cphulkd` daemon) as _system_, regardless of which service the user attempted to log in to.


- _Authentication Service_ — The authentication service of the failed login attempt.

- _Login Time_ — The time, in 24-hour format, when cPHulk blocked the IP address.

- _Expiration Time_ — The time, in 24-hour format, when cPHulk will remove the block.

- _Minutes Remaining_ — The number of minutes that remain in the lockout period.


The system may store these login attempts if, for example, a cPanel user enters the account’s password incorrectly.

#### Blocked IP Addresses or One-day Blocks

The _Blocked IP Addresses_ and _One-day Blocks_ reports display the following information:

- _IP Address_ — The IP address from which the user attempted to log in to your server.

- _Comments_ — Information about the IP address.






Note:




The system populates this data when it records an IP address. However, sometimes this column does not to contain any information.


- _Begin Time_ — The time, in 24-hour format, when cPHulk blocked the IP address.

- _Expiration Time_ — The time, in 24-hour format, when cPHulk will remove the block.

- _Minutes Remaining_ — The number of minutes that remain in the lockout period.

- _Actions_ \- Click _Remove Block_ to manually remove the block for this IP address.


## Command variables

You can use the following variables in commands that you enter for the _Command to Run When an IP Address Triggers Brute Force Protection_ and _Command to Run When an IP Address Triggers a One-Day Block_ settings:

- `%exptime%` — When cPHulk will release the ban.
- `%max_allowed_failures%` — The maximum number of allowed failures to trigger cPHulk (excessive or non-excessive failures).
- `%current_failures%` — The number of current failures.
- `%excessive_failures%` — When the one-day block triggers, this Boolean becomes true.
- `%reason%` — The reason for the ban.
- `%remote_ip%` — The IP address to ban.
- `%authservice%` — The last service to request authentication (for example, `webmaild`).
- `%user%` — The last username to request authentication.
- `%logintime%` — The time of the request.
- `%ip_version%` — The IP version, either IPv4 or IPv6.

## Example behavior

The following table contains variables for different hacking scenarios, and cPHulk’s response if you use the default settings:

| Address | Account | Password | Attempts | Time Range | cPHulk’s response |
| --- | --- | --- | --- | --- | --- |
| `192.0.2.1` | `username` | N/A | One. | N/A | No response. |
| `192.0.2.1` | `username` | The same password each time. | Five or more. | 365 minutes. | No response. |
| `192.0.2.1` | `username` | Different passwords each time. | Five to nine. | Five minutes. | Lock the `username` account for five minutes. |
| `192.0.2.1` | `username` | Different passwords each time. | Five or more. | 365 minutes. | No response. |
| `192.0.2.1` | `username` | Different passwords each time. | 10 to 29. | Five minutes. | Block `192.0.2.1` for 15 minutes. |
| `192.0.2.1` | `username` | Different passwords each time. | 30 or more. | Five minutes. | Block `192.0.2.1` for two weeks. |
| Various | `username` | N/A | Five or more. | Five minutes. | Lock the `username` account for five minutes. |
| Various | Various | N/A | Five or more. | Five minutes. | No response. |
| `192.0.2.1` | Various | N/A | Five to nine. | Five minutes. | No response. |
| `192.0.2.1` | Various | N/A | 10 to 29. | Five minutes. | Block `192.0.2.1` for 15 minutes. |
| `192.0.2.1` | Various | N/A | 30 or more. | Five minutes. | Block `192.0.2.1` for two weeks. |

Note:

The settings that you choose determine cPHulk’s behavior in these scenarios.


#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×