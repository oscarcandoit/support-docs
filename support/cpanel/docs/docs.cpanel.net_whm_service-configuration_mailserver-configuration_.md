---
url: "https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/"
title: "Mailserver Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#main-content)

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
4. Mailserver Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [dovecot](https://docs.cpanel.net/tags/dovecot/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#overview)

* * *

[Mailserver Configuration settings](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#mailserver-configuration-settings)

* * *

[Add Dovecot settings](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#add-dovecot-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#overview)

* * *

[Mailserver Configuration settings](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#mailserver-configuration-settings)

* * *

[Add Dovecot settings](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#add-dovecot-settings)

* * *

## Mailserver Configuration

![](https://docs.cpanel.net/img/whm-icons/mailserver_configuration.svg)

_Valid for versions 132 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/104/)

#### [132](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/)

Last modified: _2025 August 27_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure the POP3 and IMAP protocols that the Dovecot mail servers use. You can access these settings when you run the Dovecot mail server. Read our [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/#mail-client-manual-settings) documentation for information on setting up a mail client.

Important:

Email authentication requires a valid cPanel & WHM license. If your license expires, mail delivery will continue to function. However, your mail client will **not** authenticate with the cPanel & WHM server. You must renew your cPanel & WHM license to reenable this service.

## Mailserver Configuration settings

Select the desired value for each setting. To save your changes, click _Save Changes_. To use a default configuration, click _Use Default Values_. To undo any changes, click _Reset Form_.

#### Protocols Enabled

This allows you to select your desired protocols. To enable or disable a protocol, select the corresponding checkbox.

Note:

- You cannot disable Local Mail Transport Protocol (LMTP).

- If you do not select a setting, the system will operate in authentication-only mode.

- cPanel’s [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface) feature requires that you enable the Internet Message Access Protocol (IMAP) protocol.


This setting defaults to _IMAP_, _LMTP_, and _POP3_.

#### IPv6 Enabled

This allows you to enable Dovecot to listen for any IPv6 connection requests.

This setting defaults to _enabled_.

#### Allow Plaintext Authentication (from remote clients)

This allows a remote mail client to authenticate without encryption.

- _Yes_ — Do not enforce encryption.

- _No_ — Enforce encryption for connections that do not come from the local server.







Note:





Use this setting to enforce encryption for remote webmail logins. We recommend using this setting instead of disabling IMAP.


This setting defaults to _yes_.

#### Allow Weak Authentication Schemes

Warning:

Users that use weak authentication hashing methods will **not** be able to log into their accounts if this setting is set to _No_. We **strongly** recommend that you force any users affected by this to change their password to use a more secure hashing method.

This allows weak password hashing methods.

- _Yes_ — Allow insecure hashing methods for authentication, such as MD5-CRYPT.







Note:





If you set this setting to _Yes_, then your users can use insecure hashing methods. We **strongly** recommend that you **only** use this setting temporarily to allow users to log in and reset their password.

- _No_ — Only allow secure hashing methods for authentication.


This setting defaults to _No_.

#### SSL Cipher List

A standard-format list of SSL ciphers. Dovecot uses this to connect to your server with the POP3 protocol. For more information, read [OpenSSL’s ciphers documentation](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html).

This setting defaults to a PCI-compliant SSL cipher.

#### SSL Minimum Protocol

The list of SSL protocols that the mail server uses:

- SSLv3

- TLSv1

- TLSv1.1

- TLSv1.2


Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
- Not all clients will support TLSv1.3, which requires OpenSSL 1.1.1 or higher.

This setting defaults to _TLSv1.2_.

#### Maximum Number of Mail Processes

The maximum number of mail processes that may run at one time.

This setting defaults to _512_.

#### Process Memory Limit for Mail (MB)

The maximum memory use of the IMAP and POP3 processes, in megabytes.

Note:

A high limit will not affect your server’s performance. That is because the IMAP and POP3 processes mostly read memory-mapped files.

This setting defaults to _512_.

#### Idle Hibernate Timeout (Seconds)

The number of seconds to delay before moving users to the IMAP hibernate process. This setting will help save system memory.

Note:

A value of `0` disables this setting.

This setting defaults to _30_.

#### Maximum IMAP Connections Per IP Address

The number of simultaneous IMAP connections that a single IP address can make at one time.

Note:

The system only applies this setting if you enabled an IMAP protocol.

This setting defaults to _20_.

#### Interval between IMAP IDLE “OK Still here” messages

The number of minutes between _IMAP IDLE “OK Still here”_ messages.

Note:

You can increase this value to help increase the battery life of some mobile clients.

This setting defaults to _24_.

#### Maximum POP3 Connections per IP Address

The number of simultaneous POP3 connections that a single IP address can make at one time.

Note:

The system only applies this setting if you enabled the POP3 protocol.

This setting defaults to _3_.

#### Number of Spare Authentication Processes

The total number of spare authentication processes the system runs. Dovecot uses the processes to listen for new connections.

This setting defaults to _2_.

#### Maximum Number of Authentication Processes

The maximum number of authentication daemons the system allows to run at one time. Consider the needs of your mail server before you enter a value that is **not** the default value.

Note:

- If you set this to a high value, it may degrade your server’s performance. A high number of these daemons can consume large amounts of system resources.

- If you set this to a low value, it may degrade your server’s performance. This is because there are a lack of daemons to authenticate each session.


This setting defaults to _50_.

#### Process Memory Limit for Authentication (MB)

The total amount of memory that the IMAP and POP3 authentication processes can use, in megabytes.

This setting defaults to _128_.

#### Size of Authentication Cache (MB)

The total amount of memory that the cache file can use, in megabytes. This file caches validated logins. This allows the mail server to retrieve mail multiple times before it must check login credentials again.

Note:

This value cannot exceed four characters. This includes the required `M` character (for example, `100M`).

This setting defaults to _1M_.

#### Time to Cache Successful Logins

The amount of time, in seconds, that the cache file stores successful login records.

Note:

When you reduce this value, it can increase the load of the authentication server. However, a lower value can help to prevent issues when updating passwords.

This setting defaults to _3600_.

#### Time to Cache Failed Logins

The amount of time, in seconds, that the cache file stores a failed login attempt’s record.

Note:

When you reduce this value, it can increase the load of the authentication server. However, a lower value can help to prevent issues when updating passwords.

This setting defaults to _3600_.

#### Use New Authentication Process for Each Connection

Whether to use a new login processes for each new POP3 or IMAP connection. Enable this to improve Dovecot’s authentication security.

Important:

Use caution if you select the _Yes_ setting. This can significantly reduce the performance of a heavily-loaded server.

This setting defaults to _No_.

#### Process Memory Limit: config (MB)

The maximum memory Dovecot’s internal `config` service uses, in megabytes. Each SSL/TLS certificate that Dovecot tracks require additional memory. Increase this value for servers with many domains. This will help to ensure that Dovecot runs correctly.

Note:

- We recommend that you set this value to at least `512`.
- This value cannot be lower than `128`.

This setting defaults to _2048_.

#### Idle Check Interval

The amount of time, in seconds, between updates to idle IMAP connections.

Note:

- We recommend that you use the default setting (`30` seconds).

- Lowering this value causes idle clients to see new messages faster. However, a lower value may also slightly increase your server load.


This setting defaults to _30_.

#### Include Trash in Quota

Whether the system counts mail in the _Trash_ folder against a user’s quota.

Note:

When you adjust this setting, the system does not update existing quotas. You **must** run the following command as the `root` user to recalculate existing quotas:

```bash
/usr/local/cpanel/scripts/generate_maildirsize --allaccounts --confirm
```

This setting defaults to _disabled_.

#### Compress Messages

This allows the system to compress recently created and delivered messages. This can help you to manage your server’s disk space. You can access the compressed messages via Dovecot’s mdbox format.

Note:

The system will only compress messages after you enable this setting. It does **not** compress existing messages.

This setting defaults to _disabled_.

#### Compression Level

The compression level at which to save messages. The system uses this setting when you enable the _Compress Messages_ setting. Enter an integer between `0` and `9`, where `0` is the default compression level and `9` is the highest compression level. For more information, read [zlib.net’s Compression documentation](http://www.zlib.net/manual.html#Constants).

This setting defaults to _6_.

#### Auto Expunge Trash

This allows the system to delete messages in the _Trash_ folder after a certain number of days. The number of days is the value that you define in the _Trash Expire Time_ setting.

This setting defaults to _disabled_.

#### Trash Expire Time

The total number of days that the mail server stores messages in the _Trash_ folder. The system will delete any messages that exceed this value.

Note:

This setting requires that you enable the _Auto Expunge Trash_ setting.

This setting defaults to _30_.

#### Auto Expunge Spam

This allows the system to delete messages in the _Junk_ folder after a certain number of days. The number of days is the value that you define in the _Spam Expire Time_ setting.

This setting defaults to _disabled_.

#### Spam Expire Time

The total number of days that the mail server stores messages in the _Junk_ folder. The system will delete any messages that exceed this value.

Note:

This setting requires that you enable the _Auto Expunge Spam_ setting.

#### MDBOX rotation size (MB)

The maximum size of an mdbox mailbox file, in megabytes, before the system rotates it.

Note:

The value that you enter cannot exceed four characters. This includes the required `M` character (for example, `100M`).

This setting defaults to _10M_.

#### MDBOX rotation interval (Weeks or Days)

The total time, in weeks or days, that an mdbox mailbox file may exist before the system rotates it. Enter a value that consists of a positive integer and the letter `w` for weeks or the letter `d` for days. For example, `2w` represents a two week rotation interval.

Note:

- A `0` value disables the time-based rotation of the mdbox mailbox files.

- The value that you enter cannot exceed nine characters. This includes the required `w` (weeks) or `d` (days) character.


This setting defaults to _0_.

#### Disk Quota Delivery Failure Response

How Dovecot responds when there is a system or mailbox disk quota preventing message delivery:

- _Reject the message permanently._ — Reject the message and return it to the sender.

- _Defer delivery temporarily._ — This setting allows a user to reduce their disk use to receive a message. For example, they can free disk space or increase disk quota before the system attempts to deliver the message again.


This setting defaults to _Reject the message permanently_.

#### Minimum Available LMTP Processes

The minimum number of processes that the system attempts to reserve in order to accept more client connections. A `0` value only starts the LMTP server as needed. A `0` value for this setting also helps the system conserve memory.

This setting defaults to _0_.

#### LMTP Process Limit

The total number of LMTP server processes the system allows.

This setting defaults to _500_.

#### LMTP User Concurrency Limit

This limits the total number of concurrent LMTP deliveries per user.

Note:

A value of `0` disables the per-user limit.

This setting defaults to _4_.

## Add Dovecot settings

You can add custom settings to configure the Dovecot mail server.

Important:

When a new release of Dovecot is available, you may need to recreate any customized configuration files based on the new default configuration files. For more information, read the [Dovecot documentation](https://doc.dovecot.org/).

#### The dovecot.conf file

The system uses the `/etc/dovecot/dovecot.conf` file to initialize the Dovecot service with the settings you define. It also applies any of your custom settings globally. You can configure these custom settings in WHM’s [_Mailserver Configuration_](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#overview) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_). By default, this file uses the template in the `/var/cpanel/templates/dovecot/main.default` file.

Important:

- Using this custom template applies any changes to **all** of your server’s accounts.
- If the `/var/cpanel/templates/dovecot2.4/main.local` file exists, the system will use that Dovecot configuration file until you create the `/var/cpanel/templates/dovecot/main.local` file. You can use this file to prevent your configuration from breaking upon upgrade, however any custom integrations will **not** be active.

To create a custom template for this file, perform the following steps:

1. Copy the `/var/cpanel/templates/dovecot/main.default` file to the `/var/cpanel/templates/dovecot/main.local` file. This ensures that the system will **not** overwrite your changes when Dovecot updates during the cPanel & WHM update (`upcp`) process.

2. Open the `/var/cpanel/templates/dovecot/main.local` file with a text editor.

3. Edit the file to reflect your desired settings. For example:




```bash
login_trusted_networks: 192.168.1.0/24
```

4. Save your changes to the file.

5. Rebuild the Dovecot mail server with the `/usr/local/cpanel/scripts/builddovecotconf` script. This applies the new configuration settings from the `/var/cpanel/templates/dovecot/main.local` file.

6. Restart the Dovecot mail server with the `/usr/local/cpanel/scripts/restartsrv_dovecot` script.


Note:

The `maildir_very_dirty_syncs` setting may prevent users from viewing new mail notifications in subscribed folders. This setting defaults to `yes`. To change this setting to `no`, follow the [instructions above](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#the-dovecot-conf-file) to create a custom template.

#### The sni.conf file

The system uses the `/etc/dovecot/sni.conf` file to define the SSL-capable domains that Dovecot service uses. This file only applies these changes to the defined domains. It does not make any global changes.

To create a custom template for this file, perform the following steps:

1. Copy the `/var/cpanel/templates/dovecotSNI/main.default` to the `/var/cpanel/templates/dovecotSNI/main.local` file. This ensures that the system will not overwrite your changes when cPanel & WHM updates.

2. Open the `/var/cpanel/templates/dovecotSNI/main.local` file with a text editor.

3. Add the following text to the end of the file:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>local_name "" {<br>ssl_server_cert_file =<br>ssl_server_key_file =<br>}<br>``` |

4. In the `local_name` field, enter the new domain’s name. For example:




```bash
local_name "example.com" {
```

5. In the `ssl_server_cert_file` field, enter the full path of the new domain’s SSL certificate file. For example:




```bash
ssl_server_cert_file = /path/to/ssl_crt_file/example.com.crt
```

6. In the `ssl_server_key_file` field, add the full path of the new domain’s SSL certificate’s private key file. For example:




```bash
ssl_server_key_file = /path/to/ssl_privatekey_file/example.com.key
```

7. Save your changes to the file.

8. Rebuild the Dovecot mail server with the `/usr/local/cpanel/scripts/builddovecotconf` script. This applies the new configuration settings from the `/var/cpanel/templates/dovecotSNI/main.local` file.

9. Restart the Dovecot mail server with the `/usr/local/cpanel/scripts/restartsrv_dovecot` script.


#### The ssl.conf file

The system uses the `/etc/dovecot/ssl.conf` file to store SSL settings that the Dovecot uses. It also applies any of your custom settings globally. You can configure most these custom settings in WHM’s [_Mailserver Configuration_](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#overview) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_). By default, this file uses the template in the `/var/cpanel/templates/dovecotSSL/main.default` file.

Important:

Using this custom template applies any changes to **all** of your server’s accounts.

To create a custom template for this file, perform the following steps:

1. Copy the `/var/cpanel/templates/dovecotSSL/main.default` file to the `/var/cpanel/templates/dovecotSSL/main.local` file. This ensures that the system will **not** overwrite your changes when Dovecot updates during the cPanel & WHM update (`upcp`) process.

2. Open the `/var/cpanel/templates/dovecotSSL/main.local` file with a text editor.

3. Edit the file to reflect your desired settings. For example:




```bash
ssl_server_prefer_ciphers = client
```

4. Save your changes to the file.

5. Rebuild the Dovecot mail server with the `/usr/local/cpanel/scripts/builddovecotconf` script. This applies the new configuration settings from the `/var/cpanel/templates/dovecotSSL/main.local` file.

6. Restart the Dovecot mail server with the `/usr/local/cpanel/scripts/restartsrv_dovecot` script.


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