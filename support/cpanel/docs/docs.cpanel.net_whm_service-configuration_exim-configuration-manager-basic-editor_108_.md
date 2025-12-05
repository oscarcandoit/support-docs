---
url: "https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/"
title: "Exim Configuration Manager Basic Editor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. Exim Configuration Manager Basic Editor


[exim](https://docs.cpanel.net/tags/exim/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#overview)

* * *

[All](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#all)

* * *

[ACL Options](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#acl-options)

* * *

[Access Lists](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#access-lists)

* * *

[Domains and IPs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#domains-and-ips)

* * *

[Filters](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#filters)

* * *

[Mail](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#mail)

* * *

[RBLs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#rbls)

* * *

[Security](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#security)

* * *

[Apache SpamAssassin™ Options](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#apache-spamassassin-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#overview)

* * *

[All](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#all)

* * *

[ACL Options](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#acl-options)

* * *

[Access Lists](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#access-lists)

* * *

[Domains and IPs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#domains-and-ips)

* * *

[Filters](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#filters)

* * *

[Mail](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#mail)

* * *

[RBLs](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#rbls)

* * *

[Security](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#security)

* * *

[Apache SpamAssassin™ Options](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#apache-spamassassin-options)

* * *

## Exim Configuration Manager Basic Editor

![](https://docs.cpanel.net/img/whm-icons/exim_configuration_manager.svg)

_Valid for versions 108 through 112_

#### Version:

#### [108](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/)

#### [114](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/114/)

#### [116](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/116/)

#### [122](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/)

Last modified: _2025 March 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Select the _Basic Editor_ tab in the _Exim Configuration Manager_ interface to modify your server’s Exim configuration settings.

## All

This tab displays all available settings. To filter the displayed settings, select a category tab. You can also use the _Find_ text box to search for a specific Basic Editor setting.

### ACL Options

These settings limit who can send mail to your server. Use these settings to minimize bandwidth usage, prevent spam, and block emails with a forged sender address (spoofed emails).

Note:

The system **discards** any email messages that it rejects at SMTP time.

##### _Apache SpamAssassin™ reject spam score threshold_

This setting sets the spam score that [Apache SpamAssassin™](https://spamassassin.apache.org/doc.html) uses to reject incoming messages.

Enter a positive or negative number, which may contain a single decimal point.

Important:

If you enter a value that contains an integer greater than or less than `0` and a decimal point, Apache SpamAssassin multiplies the value that you enter by a measure of ten. For example, if you enter a spam score threshold of `1.6`, Apache SpamAssassin sets the threshold to `16`.

This setting defaults to _No reject rule by spam score_.

##### _Dictionary attack protection_

This setting allows you to drop and rate-limit hosts with more than four failed recipients, in order to block dictionary attacks. A dictionary attack is a method whereby a malicious user uses words in a dictionary to produce email addresses or password attempts.

This setting defaults to _On_.

##### _Reject remote mail sent to the server’s hostname_

This setting allows you to reject messages in which the recipient exists as an address of your server’s primary hostname. In general, the primary hostname, a common target for spammers, should **not** receive remote mail.

This setting defaults to _Off_.

##### _Enable Apache SpamAssassin™ for secondary MX domains_

This setting configures Apache SpamAssassin to scan email for domains that exist in the `/etc/secondarymx` file which users send to the primary mail exchanger.

This setting defaults to _On_.

##### _Ratelimit suspicious SMTP servers_

This setting allows you to rate-limit incoming SMTP connections that violate RFCs. This setting rate-limits mail servers that do not send QUIT, recently matched an RBL, or recently attacked the server. Real mail servers **must** follow RFC specifications.

Note:

To ensure that the system does not rate-limit an SMTP connection, add the server to a whitelist. This allows the system to deliver mail from connections that violate RFCs to your inbox. To add a server to a whitelist, edit the _Only-verify-recipient_ setting in the _Access Lists_ tab, and enter the IP address of the trusted server.

This setting defaults to _On_.

##### _Apache SpamAssassin™: ratelimit spam score threshold_

This setting allows you to rate-limit hosts that send spam to your server. When you activate this setting, rate limits delay email from hosts that send you spam. The system activates rate limits when it meets both of the following conditions:

1. A host reaches or exceeds the Apache SpamAssassin score that you enter in the text box.

2. That host exceeds the number of emails that the rate-limit formula specifies. Exim averages rate limits over time. By default, the system uses the following rate-limit formula:




```bash
ratelimit = 1.2 / 1h / strict / per_conn / noupdate
```


This setting defaults to _No ratelimiting by spam score_.

##### _Ratelimit incoming connections with only failed recipients_

This setting allows you to rate-limit incoming SMTP connections that only send email to failed recipients during five separate connection times in the past hour.

This setting defaults to _On_.

##### _Require HELO before MAIL_

This setting allows you to require that incoming SMTP connections send a HELO command before they send a MAIL command.

A HELO is a command that mail servers send before an email, and that specifies the name of the sending domain. Apache SpamAssassin can perform various checks on this information (for example, it can ensure that the domain name matches the IP address that sent the message). This ensures that your server does not receive spam that reports a false domain name.

This setting defaults to _On_.

##### _Introduce a delay into the SMTP transaction for unknown hosts and messages detected as spam._

This setting configures the SMTP receiver to wait a few additional seconds for a connection when it detects spam messages. Typically, legitimate mailing systems will wait past the delay, whereas spammers do not wait past the delay.

Note:

The system excludes the following remote hosts from the delay:

- Neighbor IP addresses in the same netblock

- Loopback addresses

- Trusted Hosts

- Relay Hosts

- Backup MX Hosts

- Skip SMTP Checks Host

- Sender Verify Bypass Hosts


Warning:

- If you use third-party sites to diagnose mail server issues, this setting may falsely detect spam messages.

- If your external monitoring system reports failures after you update your server, configure your monitoring system to allow 45 seconds timeout for connections to port `25`. For more information about how to adjust the timeout and polling settings, read your monitoring system’s documentation.
  - If that does not resolve the problem, add the IP address of your monitoring system to the _Trusted SMTP IP Addresses_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

  - If you still encounter errors on your monitoring system, disable the _Introduce a delay into the SMTP transaction for unknown hosts and messages detected as spam_ setting in the Basic Editor section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_). However, this will likely result in an increase in spam that your server receives.

This setting defaults to _On_.

##### _Do not delay the SMTP connections for hosts in the Greylisting “Trusted Hosts” list_

This setting configures the SMTP receiver to not delay any hosts that you add to the list in the _Trusted Hosts_ tab in WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM » Home » Email » Greylisting_).

This setting defaults to _On_.

##### _Do not delay the SMTP connections for hosts in the Greylisting “Common Mail Providers” list_

This setting configures the SMTP receiver to not delay any hosts that you add to the list in the _Common Main Providers_ tab in WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM » Home » Email » Greylisting_).

This setting defaults to _Off_.

##### _Require remote (hostname/IP address) HELO_

This setting allows you to require that incoming SMTP connections send a HELO command that does not match the primary hostname or a local IP address (IPv4 or IPv6). Enable this setting to block emails with a forged sender address (spoofed emails).

This setting defaults to _On_.

##### _Require remote (domain) HELO_

This setting allows you to require that incoming SMTP connections send a HELO command that does not match your server’s local domains. Enable this setting to block emails with a forged sender address (spoofed emails).

This setting defaults to _Off_.

##### _Require RFC-compliant HELO_

This setting allows you to require that incoming SMTP connections send a HELO command that conforms with the internet standards in [RFC 2821 4.1.1.1](https://tools.ietf.org/html/rfc2821).

Note:

If you enable this setting, it overrides any entries in the `/etc/alwaysrelay` and `/etc/relayhosts` files.

This setting defaults to _On_.

##### _Allow DKIM verification for incoming messages_

This setting allows you to use [DomainKeys Identified Mail (DKIM)](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel) verification to verify incoming messages.

Warning:

This verification process can slow your server’s performance.

This setting defaults to _Off_.

##### _Reject DKIM failures_

This setting allows you to reject email at SMTP time if the sender fails DKIM key validation.

Note:

You **must** set the _Allow DKIM verification for incoming messages_ setting to _On_ to enable this setting.

This setting defaults to _Off_.

##### _Maximum message recipients (soft limit)_

This setting allows you to determine the number of recipient addresses your server accepts in a single message.

Note:

RFCs specify that SMTP servers **must** accept at least 100 RCPT commands for a single message.

This setting defaults to _No rejection based on number of recipients_.

##### _Maximum message recipients before disconnect (hard limit)_

This setting allows you to determine the number of recipient addresses that your server permits in a single message before it disconnects and rate-limits a connection.

Note:

RFCs specify that SMTP servers **must** accept at least 100 RCPT commands for a single message.

This setting defaults to _No disconnection based on number of recipients_.

### Access Lists

These settings further limit who sends mail to your server.

##### _Blacklisted SMTP IP addresses_

This setting allows you to edit the list of blacklisted SMTP IP addresses. The system does not allow these IP addresses to connect to the SMTP server, and instead drops connections with a 550 error.

Click _Edit_ to modify this setting.

##### _Sender verification bypass IP addresses_

This setting allows you to edit the list of IP addresses that the system excludes from SMTP sender verification checks.

Click _Edit_ to modify this setting.

##### _Only-verify-recipient_

This setting allows you to edit the list of hosts or IP addresses that the system excludes from all spam checks at SMTP connection time, except recipient verification checks. The system adds any hosts or IP addresses you enter here to the `/etc/trustedmailhosts` file.

Click _Edit_ to modify this setting.

##### _Trusted SMTP IP addresses_

This setting allows you to edit the list of hosts or IP addresses that the system excludes from the following checks at SMTP connection time:

- Recipient verification checks

- Sender checks







Note:





These senders must still use an RFC-compliant HELO name if the _Require RFC-compliant HELO_ setting is enabled.

- Spam checks

- Relay checks.







Note:





The system adds any hosts’ IP addresses that you enter here to the `/etc/skipsmtpcheckhosts` file.


Click _Edit_ to modify this setting.

##### _Backup MX hosts_

This setting allows you to edit the list of hosts from which the system permits SMTP connections, regardless of rate limits. Make certain that you properly configure reverse DNS records for any hosts which you enter here.

Click _Edit_ to modify this setting.

##### _Trusted mail users_

The _Trusted mail users_ setting allows system administrators to designate certain users as trusted mail users. This setting affects the [_EXPERIMENTAL: Rewrite From: header to match actual sender_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#experimental-rewrite-from-header-to-match-actual-sender) setting in the _Mail_ tab. Trusted users can bypass the _EXPERIMENTAL: Rewrite From: header to match actual sender_ setting. The _Trusted mail users_ setting allows the listed users to modify their _From:_ header, and the _EXPERIMENTAL: Rewrite From: header to match actual sender_ setting does not override these changes. Enter the trusted mail usernames or their email addresses, one per line.

Click _Edit_ to modify this setting.

##### _Blocked Domains_

This setting allows you to filter your server’s incoming email by domain.

When you click _Manage_, a new browser tab will appear with WHM’s [_Filter Incoming Emails by Domain_](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain) interface ( _WHM » Home » Email » Filter Incoming Emails by Domain_).

##### _Blocked Countries_

This setting allows you to filter your server’s incoming email by region or country.

When you click _Manage_, a new browser tab will appear with WHM’s [_Filter Incoming Emails by Country_](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country) interface ( _WHM » Home » Email » Filter Incoming Emails by Country_).

### Domains and IPs

These settings change the IP address from which Exim sends mail. When you disable them, Exim will automatically send mail from your server’s main shared IP address. For more information, read our [How to Configure the Exim Outgoing IP Address](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address) documentation.

##### _Send mail from the account’s IP address_

This setting allows you to automatically send mail for users **without** a dedicated IP address from a reseller’s main shared IP address. It will **not** use the server’s main shared IP address. The system will also use the server’s hostname for reseller accounts that share an IP address. If you want to change this, you **must** use a [custom configuration](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address).

Warning:

Make **certain** that you use the correct reverse DNS (rDNS) entries for your hosting provider. An invalid entry can cause mail servers to reject your server’s mail. For more information, read our [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm) documentation.

Note:

- This setting **only** applies to IPv4 addresses.

- When you enable this setting:
  - The `/usr/local/cpanel/scripts/updateuserdomains` script will automatically populate the `/etc/mailhelo` and `/etc/mailips` files. This will overwrite any manual changes in the `/etc/mailhelo` and `/etc/mailips` files.

  - The system **disables** the _Reference /etc/mailhelo for custom outgoing SMTP HELO_ and _Reference /etc/mailips for custom IP on outgoing SMTP connections_ settings.

This setting defaults to _Off_.

##### _Use the reverse DNS entry for the mail HELO/EHLO if available_

The system will use the server’s IP address as the reverse DNS for all outgoing SMTP connections. This **only** applies during the HELO/EHLO request.

This setting defaults to _On_.

##### _Rebuild Reverse DNS Cache and Update Mail HELO_

This setting updates the reverse DNS cache and user domains for mail HELO. This setting **only** appears when you enable the _Use the reverse DNS entry for the mail HELO/EHLO if available_ setting.

##### _Reference /etc/mailhelo for custom outgoing SMTP HELO_

This setting allows you to send a HELO command based on the domain name in the `/etc/mailhelo` file. For more information, read our [How to Configure the Exim Outgoing IP Address](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address) documentation.

Note:

The system **disables** this setting if you enable the _Send mail from account’s IP address_ or the _Use the reverse DNS entry for the mail HELO/EHLO if available_ settings.

This setting defaults to _Off_.

##### _Reference /etc/mailips for custom IP on outgoing SMTP connections_

This setting allows you to send outgoing mail from the IP address that matches the domain name in the `/etc/mailips` file. For more information, read our [How to Configure the Exim Outgoing IP Address](https://docs.cpanel.net/knowledge-base/email/how-to-configure-the-exim-outgoing-ip-address) documentation.

Note:

The system **disables** this setting if you enable the _Send mail from account’s IP address_ setting.

This setting defaults to _Off_.

### Filters

These settings allow you to select and configure filters that can block spam and potentially dangerous attachments.

##### _System Filter File_

Use this setting to enable or disable Exim’s system filter file, which the system stores in the `/etc/cpanel_exim_system_filter` file. You can also choose to [specify and customize another Exim system filter file](https://docs.cpanel.net/knowledge-base/email/how-to-customize-the-exim-system-filter-file).

Warning:

Regardless of the setting that you select, the Exim configuration includes **all** of the files in the `/usr/local/cpanel/etc/exim/sysfilter/options/` directory.

This setting defaults to _/etc/cpanel\_exim\_system\_filter_.

##### _Attachments: Filter messages with dangerous attachments_

This setting allows you to filter email messages that contain potentially dangerous attachments. The system filters the following file extensions:

[Click to view...](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#click-to-view---1764175702332989915)

```perl
.ade
.adp
.bas
.bat
.chm
.cmd
.com
.cpl
.crt
.eml
.exe
.hlp
.hta
.inf
.ins
.isp
.js
.jse
.lnk
.mdb
.mde
.msc
.msi
.msp
.mst
.pcd
.pif
.reg
.scr
.sct
.shs
.url
.vbs
.vbe
.wsf
.wsh
.wsc
```

This setting defaults to _On_.

##### _Apache SpamAssassin™: Global Subject Rewrite_

This setting allows you to prefix the Subject header with information from the _X-Spam-Subject_ header and omit the _X-Spam-Subject_ header.

This setting defaults to _On_.

##### _Apache SpamAssassin™: bounce spam score threshold_

This setting allows you to define the spam score that Apache SpamAssassin uses to bounce incoming messages. Enter a positive or negative number, which may contain a single decimal point. For more information, read the [Apache SpamAssassin documentation](http://spamassassin.apache.org/doc.html).

This setting defaults to _No bouncing by spam score_.

##### _Apache SpamAssassin™: X-Spam-Subject/Subject header prefix for spam emails_

This setting allows you to use the default _X-Spam-Subject_ header prefix for spam email or to enter a custom prefix.

Note:

You can use an Exim variable as a custom prefix. For a complete list of Exim’s variables, read [Exim’s documentation](http://exim.org/exim-html-current/doc/html/spec_html/ch11.html#SECTexpvar).

This setting defaults to _\*\*\*SPAM\*\*\*_.

### Mail

Use these settings to configure specific mail settings.

##### _Log sender rates in the exim mainlog. This can be helpful for tracking problems and/or spammers._

This setting allows you to log sender rates in the Exim mail log.

This setting defaults to _Off_.

##### _Sender Verification Callouts_

This setting allows Exim to connect to the mail exchanger for an address. This allows Exim to verify that the address exists before Exim accepts the message.

This setting defaults to _Off_.

##### _Smarthost support_

This setting allows you to use a smarthost for outgoing messages. To configure this setting, enter a valid `route_list` value in the _Smarthost support_ text box.

Important:

- If you enter IPv6 addresses, you **must** enclose the IP addresses in quotes and begin the list with `</` to cause Exim to use slashes (`/`) as separators. Otherwise, Exim will interpret the colons in each IPv6 address as separators, and use each segment of the IPv6 address as a separate host. For more information, read the [Exim route\_list documentation](http://www.exim.org/exim-html-current/doc/html/spec_html/ch-the_manualroute_router.html).

- If you do not enter an asterisk before the IP address or addresses, the smarthost will **not** function.


- To configure a smarthost that uses one IP address, enter an asterisk ( `*` ) followed by an IPv4 or IPv6 address. For example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>* 192.168.0.1<br>* "</ 2001:0db8:85a3:0042:1000:8a2e:0370:7334"<br>``` |

- To configure a smarthost that uses multiple IP addresses, enter an asterisk, followed by the IP addresses. For example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>* 192.188.0.20:192.188.0.21:192.188.0.22<br>* "</ [2001:0db8:85a3:0042:1000:8a2e:0370:7334]:1225 / [::1]:1226 / 192.168.0.1"<br>``` |

- To configure a smarthost that uses only specific domains from the hosts that you enter, replace the asterisk with the desired domain name. Separate entries for multiple domain names with a semicolon (`;`). For example:
  - For IPv4 domains:



    ```go
    example.com 192.188.0.20:192.188.0.21:192.188.0.22; exampletwo.com 192.168.0.1
    ```

  - For IPv6 domains:



    ```go
    example.com "</ [2001:0db8:85a3:0042:1000:8a2e:0370:7334]:1225 / [::1]:1226 / 192.168.0.1"; exampletwo.com "</ 2001:0db8:85a3:0042:1000:8a2e:0370:7334"
    ```

This setting defaults to _None_.

##### _Smarthost requires SMTP authentication_

You can use the _Basic Editor_ to manage smarthost configuration for domains that use the same credentials. If you used the _Advanced Editor_ tab to modify the default configuration of Exim for smarthosts, you may be able to use the _Basic Editor_ function now.

Use this setting to provide a username and a password for Exim to use when connecting to the smarthost servers. You must enter a valid `route_list` value in the [_Smarthost support_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#mail) text box in order to use this setting.

When you select the _On_ button for the _Smarthost requires SMTP authentication_ function, Exim will use SMTP authentication for all servers listed in the `route_list`.

This setting defaults to _Off_.

##### _Smarthost username_

Use this setting to provide the username that Exim will use to connect to the smarthost servers.

Note:

- You **must** set the _Smarthost requires SMTP authentication_ setting to _On_ to enable this setting.
- Due to limitations with Exim, the username and password **cannot** start or end with spaces or start with a caret character (`^`).
- You **cannot** use this setting if multiple smarthosts require different login credentials. Use the _Advanced Editor_ tab on WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) interface ( _WHM » Service Configuration » Exim Configuration Manager_) instead.

##### _Smarthost password_

Use this setting to provide the password that Exim will use to connect to the smarthost servers.

Note:

- You **must** set the _Smarthost requires SMTP authentication_ setting to _On_ to enable this setting.
- Due to limitations with Exim, the username and password **cannot** start or end with spaces or start with a caret character (`^`).
- You **cannot** use this setting if multiple smarthosts require different login credentials. Use the _Advanced Editor_ tab on WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) interface ( _WHM » Service Configuration » Exim Configuration Manager_) instead.

##### _Autodiscovery SPF include hosts from the smarthost route list_

This setting allows the system to check the smarthost route list labels for SPF entries and insert an include entry to the SPF records. For example, `example.com` has an SPF record and the `* outbound.example.com` smarthost routelist setting. The system adds an include entry for all SPF-enabled domains.

This setting defaults to _On_.

##### _SPF include hosts for all domains on this system_

This setting allows you to enter hosts that the system will add as SPF include entries for all SPF enabled-domains.

Note:

Use commas (`,`) to separate multiple host entries.

This setting defaults to _None_.

##### _EXPERIMENTAL: Rewrite From: header to match actual sender_

This setting rewrites the _From_ header in emails to show the original identity of the actual sender for messages sent from your server. Email recipients can see the original _From_ header as the _X-From-Rewrite_ header as well as the rewritten _From_ header. This setting is useful to determine the actual mail sender.

In order to conduct an attack or send unsolicited email, a malicious user can alter the _From_ header in an email to confuse the recipient. For example, a user may authenticate as `user@example.com` and send a message with the _From_ header set to `account@forged.example.com`. When you enable this setting, Exim rewrites the _From_ header to show the authenticated sender (`user@example.com`).

You can enable this setting to ensure that the _From_ header for mail sent from their servers always matches one of the following methods:

- The actual sender. — If you authenticate as `user@example.com`, the _From_ header will **always** display `user@example.com`.

- An email address that has been forwarded to the actual sender. — If `user@example.com` is an email address on your server and it forwards mail to `account@domain.org`, then `account@domain.org` may set the _From_ header to either address.

- An email address to which the sender has access. — If you authenticate as the `username` user, set the _From_ header to any email account that the `username` user controls.


Note:

- This setting does **not** affect mail that you receive from a remote host. The system only rewrites the _From_ header for mail that it sends from the local machine because it is not possible to determine or validate the actual mail sender from remote machines.
- [Trusted mail users](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/108/#trusted-mail-users) can bypass this setting.

You can select the following settings:

- _remote_ — This setting uses SMTP to rewrite the _From_ header in outgoing emails to match the actual sender.
  - If a local user sends mail to a user on a remote host, this setting rewrites the _From_ header.
  - If a local user receives mail from a user on a remote host, this setting does **not** rewrite the _From_ header because it is not possible to determine the authenticated sender.
  - If a local user sends mail to another local user on the same server, this setting does **not** rewrite the _From_ header because this is not a remote delivery.
  - If a local user receives mail from another local user on the same server, this setting does **not** rewrite the _From_ header.
- _all_ — This setting rewrites the _From_ header in all outgoing emails to match the actual sender.
  - If a local user sends mail to a user on a remote host, the system rewrites the _From_ header.
  - If a local user receives mail from a user on a remote host, this setting does **not** rewrite the _From_ header because it is not possible to determine the authenticated sender.
  - If a local user sends mail to another local user on the same server, this setting rewrites the _From_ header because this setting includes local deliveries.
  - If a local user receives mail from another local user on the same server, this setting rewrites the _From_ header because the sender already rewrote the _From_ header.
- _disable_ — This setting does not rewrite the _From_ header in any email. This is the default setting.


##### _Allow mail delivery if malware scanner fails_

This setting allows the system to deliver mail if the malware scanner if it fails. If you select _On_, in the event of a malware scanner failure, the server delivers all mail normally.

Note:

If you select _Off_ and the malware scanner fails, users will **not** receive new messages until you repair the malware scanner.

This setting defaults to _On_.

##### _Sender Verification_

This setting allows you to verify the origin of mail senders.

This setting defaults to _On_.

##### _Set SMTP Sender: headers_

This setting allows you to set the _Sender:_ header as - _f flag passed to sendmail_ when a mail sender changes.

Note:

If you set this setting to _Off_, Microsoft® Outlook® will **not** add an _On behalf of_ header. This may limit your ability to track abuse of the mail system.

This setting defaults to _Off_.

##### _Allow mail delivery if spam scanner fails_

This setting allows you to disable the spam scanner if it fails. If you select _On_, the system delivers all mail normally in the event of a spam scanner failure.

Note:

If you select _Off_ and the spam scanner fails, users will **not** receive new messages until you repair the spam scanner.

This setting defaults to _On_.

##### _Enable Sender Rewriting Scheme (SRS) Support_

This setting rewrites sender addresses so that the email appears to come from the forwarding mail server. This allows forwarded email to pass an SPF check on the receiving server.

Note:

This setting uses the default configuration for SRS. If you wish to customize the SRS configuration, use the [_Advanced Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface.

This setting defaults to _Off_.

##### _Query Apache server status to determine the sender of email sent from processes running as nobody_

This setting allows the mail delivery process to query the Apache server to determine the true sender of a message when the `nobody` user sends a message.

- This setting requires an additional connection to the server for each message that the `nobody` user account sends when suPHP and the `mod_ruid2` module are both disabled.

- This setting is more secure, but it is faster to trust the _X-PHP-Script_ headers.


This setting defaults to _On_.

##### _Trust X-PHP-Script headers to determine the sender of email sent from processes running as nobody_

This setting allows Exim to trust messages that the `nobody` user sends with _X-PHP-Script_ headers. This setting also enables the mail server to determine the true sender. This provides a faster delivery process than a query to the Apache server to determine the sender.

Note:

Advanced users may forge this header. If your users may misuse this function, disable this setting and send a query to the Apache server to determine the sender of `nobody` messages.

This setting defaults to _On_.

##### _Hosts to which to advertise the SMTP DSN option_

This setting allows you to specify a list of hostnames to which to advertise SMTP Delivery Status Notification (DSN) support. Enter a list of hostnames to which to advertise the SMTP DSN extension in the text box, or an asterisk ( `*` ) to advertise to all of the hosts on the internet.

Note:

For more information about SMTP DSN support, read ietf.org’s [RFC 3461](https://www.rfc-editor.org/rfc/rfc3461.txt) documentation.

This setting defaults to _Disabled for all hosts_.

##### _Hosts to which to advertise the SMTPUTF8 SMTP option_

This setting allows you to specify a list of hostnames to which to advertise SMTP support for international email addresses that contain UTF-8 characters. Enter a list of hostnames to which to advertise the SMTP UTF-8 support in the text box, or an asterisk ( `*` ) to advertise to all of the hosts on the internet.

Note:

For more information about SMTPUTF8 support, read ietf.org’s [RFC 6531](https://tools.ietf.org/html/rfc6531) documentation.

This setting defaults to _Disabled for all hosts_.

##### _Delivery behavior for suspended cPanel accounts_

This setting configures what action the server should perform when an email message is sent to a suspended account. To read more information about suspended accounts, read our [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) documentation.

Warning:

Delivering email to a suspended account requires the evaluation of filters, redirection lists, and other data that can be abused to retain access to the server. For more information, read our [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#email-delivery-behavior) documentation.

This setting defaults to _Accept and queue messages_.

##### _Maximum line length for SMTP transports_

This setting allows you to set the maximum line length for SMTP transports in bytes. The system will refuse to send (bounce) any messages longer than the maximum line length. On bouncing a message, the system will attempt to return a failure message to the sender.

This setting defaults to _2048_.

### RBLs

These settings allow you to configure your mail server to check incoming mail against the available Real-time Blackhole Lists (RBLs). Your server blocks the incoming messages if the IP address or hostname matches an RBL entry.

RBL servers store lists of spam-heavy IP addresses and hostnames so that you can easily block them. The WHM interface accesses two RBLs: [`bl.spamcop.net`](http://spamcop.net/) and [`zen.spamhaus.org`](http://www.spamhaus.org/zen).

##### _Manage Custom RBLs_

Click _Manage_ to view and manage your server’s RBLs. A new interface will appear. The _Current RBLs_ table lists the following information for each RBL:

- _Origin_ — The source of the RBL.
  - _Custom_ — Indicates that you added the RBL.
  - _System_ — Indicates cPanel-included RBLs.
- _RBL name_ — The RBL’s name.

- _DNS list_ — The RBL’s DNS list.

- _Info URL_ — The RBL information URL.

- _Action_ — For custom RBLs, click _Delete_ to remove the RBL.







Note:





- You **cannot** delete cPanel-included RBLs.

- To add an RBL, enter the appropriate information in the text boxes and click _Add_.
  - Make certain that you choose an RBL name that allows you to remember the DNS list for this RBL.
  - After you add custom RBLs, each custom RBL will appear at the bottom of the RBLs settings tab. Select _On_ to enable a custom RBL.
  - Custom RBLs default to _Off_.

##### _RBL: bl.spamcop.net_

This setting allows you to reject mail at SMTP-time if the sender’s host is in the [bl.spamcop.net](http://spamcop.net/) RBL.

This setting defaults to _Off_.

##### _RBL: zen.spamhaus.org_

This setting allows you to reject mail at SMTP-time if the sender’s host is in the [zen.spamhaus.org](http://www.spamhaus.org/zen) RBL.

This setting defaults to _Off_.

##### _Exempt servers in the same netblock as this one from RBL checks_

This setting allows you to disable RBL checks of mail from servers in the same IANA netblock.

This setting defaults to _On_.

##### _Exempt servers in the Greylisting “Common Mail Providers” list from RBL checks_

This setting allows you to disable RBL checks of mail from an IP address block that you include in the
_Common Mail Providers_ list in WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM » Home » Email » Greylisting_).

This setting defaults to _On_.

##### _Exempt servers in the Greylisting “Trusted Hosts” list from RBL checks_

This setting allows you to disable RBL checks of mail from IP address blocks that you include in the _Trusted Hosts_ list in WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM » Home » Email » Greylisting_).

This setting defaults to _Off_.

##### _Whitelist: IP addresses that should not be checked against RBLs_

This setting allows you to choose a list of IP addresses to whitelist. Exim does **not** RBL-check these addresses.

Note:

Enter one IP address per line in the text box. You may also use [CIDR](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#classless-inter-domain-routing-cidr) notation to specify an address range. For example, to whitelist the IP addresses `10.88.135.144` and `10.88.135.145`, you would whitelist the CIDR range `10.88.135.144/31`.

### Security

These settings allow you to configure security settings for your mail server.

##### _Allow weak SSL/TLS ciphers_

This setting allows you to use weak SSL/TLS encryption ciphers.

Important:

- Weak SSL/TLS encryption ciphers violate PCI compliance. For more information about PCI compliance, read the [PCI Compliance Guide](https://www.pcicomplianceguide.org/).
- cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

  - cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
  - Not all clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.

This setting defaults to _Off_.

##### _Require clients to connect with SSL or issue the STARTTLS command before they are allowed to authenticate with the server._

This setting allows you to specify whether clients must connect with SSL or issue the `STARTTLS` command before they authenticate.

This setting defaults to _On_.

##### _Scan messages for malware from authenticated senders (exiscan)._

Note:

To view this setting, you **must** install [ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner) on your server.

This setting configures the ClamAVconnector plugin to scan all outbound messages for malware. The system rejects any mail that tests positive for malware.

This setting defaults to _Off_.

##### _Scan outgoing messages for malware_

Note:

To view this setting, you **must** install [ClamAV](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner) on your server.

This setting configures the ClamAVconnector plugin to scan mail from non-whitelisted domains for malware. The system rejects any mail from non-whitelisted domains that tests positive for malware.

This setting defaults to _Off_.

##### _Options for OpenSSL_

This setting configures SSL and TLS protocols in OpenSSL that Exim will use to securely communicate with client software. Either select the default setting or enter a space-separated list of protocols that you wish to disallow in the text box. For more information about OpenSSL’s protocol settings, read [OpenSSL’s Client](https://www.openssl.org/docs/manmaster/man1/s_client.html) documentation.

##### _SSL/TLS Cipher Suite List_

This setting allows you to configure the cipher suites in OpenSSL that Exim uses to securely communicate with client software. Either select the default setting or enter a cipher suite that you wish to use. For more information about cipher suites available to OpenSSL, read [OpenSSL’s Cipher](https://www.openssl.org/docs/manmaster/man1/ciphers.html) documentation.

### Apache SpamAssassin™ Options

These settings allow you to configure [Apache SpamAssassin](https://spamassassin.apache.org/doc.html) to suit your server’s needs. Apache SpamAssassin is a spam detection and blocking program which examines the content of an email message and assigns it an overall score. Apache SpamAssassin bases this score on the number of spam-related traits that it finds in the message. If the message’s score exceeds a predefined limit, Apache SpamAssassin discards it as spam.

Note:

Any changes that you make to Apache SpamAssassin’s configuration may require you to run the `/usr/local/cpanel/3rdparty/bin/sa-compile` script before they take effect. This script runs SpamAssassin’s [`sa-compile`](https://spamassassin.apache.org/full/3.2.x/doc/sa-compile.html) command.

##### _Apache SpamAssassin™: Forced Global ON_

This setting allows you to turn on Apache SpamAssassin for all accounts on the server without a setting for the users to disable it.

This setting defaults to _Off_.

##### _Apache SpamAssassin™: message size threshold to scan_

This setting allows you to set the maximum size, in Kilobytes (KB), for messages that Apache SpamAssassin scans. It is generally inefficient to scan large messages because spam messages are typically small (`4` KB or smaller).

This setting defaults to _1000 KB_.

##### _Scan outgoing messages for spam and reject based on the Apache SpamAssassin™ internal spam\_score setting_

This setting allows Apache SpamAssassin to scan and reject messages to non-local domains with a higher spam score than Apache SpamAssassin’s internal `spam_score` setting of `5`.

Note:

- This setting does **not** affect outbound forwarded mail. Forwarders use the _Do not forward mail to external recipients if it matches the Apache SpamAssassin™ internal spam\_score setting_ setting.
- Enabling this setting **disables** the _Scan outgoing messages for spam and reject based on defined Apache SpamAssassin™ score_ setting.

This setting defaults to _Off_.

##### _Scan outgoing messages for spam and reject based on defined Apache SpamAssassin™ score_

This setting allows you to set the `spam_score` threshold that Apache SpamAssassin uses to determine when it rejects messages to non-local domains. To enable this setting, enter a number to use as a minimum spam score in the text box.

- This value **must** be a number between `0.1` and `99.9`.
- This value **only** accepts one decimal place.

Note:

- This setting does **not** affect outbound forwarded mail. Forwarders use the _Do not forward mail to external recipients based on the defined Apache SpamAssassin™ score_ setting.
- Enabling this setting **disables** the _Scan outgoing messages for spam and reject based on the Apache SpamAssassin™ internal spam\_score setting_ setting.

This setting defaults to _Disabled_.

##### _Do not forward mail to external recipients if it matches the Apache SpamAssassin™ internal spam\_score setting_

This setting allows Apache SpamAssassin to scan and reject messages in the forwarder queue with a higher spam score than Apache SpamAssassin’s internal `spam_score` setting of `5`. The system disables this setting by default.

This setting defaults to _Off_.

Note:

To use this setting, each user **must** have enabled Apache SpamAssassin™. Your server administrator may also enable the _Apache SpamAssassin™: Forced Global ON_ setting to ensure that the Apache SpamAssassin has access to each user.

##### _Do not forward mail to external recipients based on the defined Apache SpamAssassin™ score_

This setting allows you to set the `spam_score` threshold that Apache SpamAssassin uses to determine whether it rejects messages that users forward to non-local domains. To enable this setting, enter a number to use as a minimum spam score in the text box.

- This value **must** be a number between `0.1` and `99.9`.
- This value **only** accepts one decimal place.

This setting defaults to _Disabled_.

Note:

To use this setting, each user **must** have enabled Apache SpamAssassin™. Your server administrator may also enable the _Apache SpamAssassin™: Forced Global ON_ setting to ensure that the Apache SpamAssassin has access to each user.

##### _Enable BAYES\_POISON\_DEFENSE Apache SpamAssassin™ ruleset_

This setting increases the scoring thresholds that the Bayes Poison Defense module needs to learn SPAM and HAM (not spam). This helps Apache SpamAssassin to better protect the system against spammers who use [Bayes poisoning](https://en.wikipedia.org/wiki/Bayesian_poisoning).

This setting defaults to _On_.

##### _Enable Passive OS Fingerprinting for Apache SpamAssassin™_

This setting allows Apache SpamAssassin to use Passive OS Fingerprinting.

Note:

You **must** enable the _Passive OS Fingerprinting_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_) for this setting to function.

This setting defaults to _On_.

##### _Enable KAM Apache SpamAssassin™ ruleset_

This setting allows Apache SpamAssassin to use the Kevin A. McGrail’s KAM ruleset, with significant contributions from Joe Quinn. For more information about the KAM ruleset, read the [module’s website](https://www.pccc.com/downloads/SpamAssassin/contrib/KAM.cf).

This setting defaults to _On_.

##### _Enable the Apache SpamAssassin™ ruleset that cPanel uses on cpanel.net_

This setting allows Apache SpamAssassin to use the ruleset that WebPros International, LLC uses on the `cpanel.net` servers.

This setting defaults to _On_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Exim Configuration Manager Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×