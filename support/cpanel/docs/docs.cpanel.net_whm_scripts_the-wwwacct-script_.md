---
url: "https://docs.cpanel.net/whm/scripts/the-wwwacct-script/"
title: "The wwwacct Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The wwwacct Script


[accounts](https://docs.cpanel.net/tags/accounts/) [accountcreation](https://docs.cpanel.net/tags/accountcreation/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/#example)

* * *

## The wwwacct Script

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/)

Last modified: _2025 June 5_

* * *

## Overview

This script creates a new cPanel account.

Note:

You can also create an account with the [WHM API 1 `createacct`](https://api.docs.cpanel.net/openapi/whm/operation/createacct/) function.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/wwwacct domain user pass [options]
```

Note:

- You must specify all options in the following order. If you do not include all options, the script may apply values to incorrect options and will set the remaining options to default values.

```bash
/usr/local/cpanel/scripts/wwwacct <domain> <user> <pass> <quota> <cpmod[advanced/?]> <ip[y/n]> <cgi[y/n]> <frontpage[always n]> <maxftp> <maxsql> <maxpop> <maxlst> <maxsub> <bwlimit> <hasshell[y]/[n]> <owner> <plan> <maxpark> <maxaddon> <featurelist> <contactemail> <use_registered_nameservers> <language> <spamassassin[Y/n]> <max_emailacct_quota> <spambox[Y/n]>
```

## Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `domain` | **Required.**<br> The account’s main domain. | `example.com` |
| `user` or `username` | **Required.**<br> The new account’s username. cPanel usernames **must** adhere to the following criteria: <br>- The first eight characters of a username **must** be unique.<br>- A username **cannot** begin with a number or the `test` string. | `username` |
| `pass` or `password` | **Required.**<br> The account’s password. | `luggage123456` |
| `bwlimit` | The account’s maximum bandwidth. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account possesses unlimited bandwidth.<br> This value defaults to `unlimited`. | `0` |
| `cgi` | Whether the account has CGI access. <br>- `y` — CGI access enabled.<br>- `n` — CGI access disabled. | `y` |
| `quota` | The account’s disk space quota. <br>- A positive integer.<br>- `0` — The account’s disk space is unlimited.<br> This value defaults to `0` (unlimited). | `0` |
| `cpmod` | The account’s cPanel theme.<br>This value defaults to the server’s default _Theme_ setting. | `jupiter` |
| `ip` | Whether the account has a dedicated IP address. <br>- `y` — The account has a dedicated IP address.<br>- `n` — The account does **not** have a dedicated IP address. <br> This value defaults to `n`. | `n` |
| `frontpage` | Whether Microsoft® FrontPage® Extensions exist on the account. <br>Important:<br>This option is **deprecated**. cPanel & WHM ignores all FrontPage settings. | `n` |
| `maxftp` | The account’s maximum number of FTP accounts. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account can create unlimited FTP accounts.<br> This value defaults to `unlimited`. | `0` |
| `maxsql` | The account’s maximum number of each available type of SQL database. For example, this parameter has a `5` value and the system administrator allows MySQL® and PostgreSQL® databases. Users can create up to five MySQL databases and up to five PostgreSQL databases. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account can create unlimited SQL databases.<br> This value defaults to `unlimited`. | `0` |
| `maxpop` | The account’s maximum number of email addresses. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account can create unlimited email accounts.<br> This value defaults to `unlimited`. | `0` |
| `maxlst` | The account’s maximum number of [Mailman](https://www.list.org/) mailing lists. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account can create unlimited mailing lists.<br> This value defaults to `unlimited`. | `0` |
| `maxsub` | The account’s maximum number of subdomains. <br>- A positive integer.<br>- `0`, `unlimited`, or `null` — The account can create unlimited subdomains.<br> This value defaults to `unlimited`. | `0` |
| `hasshell` | Whether the account has shell (SSH) access. <br>- `y` — The account has shell access.<br>- `n` — The account does not have shell access.<br> This value defaults to the default package’s _Shell Access_ value. | `y` |
| `owner` | The `root` user or WHM reseller account that will own this account. <br>Important:<br>The authenticated user calling this script **must** have `root` privileges to assign the cPanel account owner to a reseller.<br> <br> This value defaults to the authenticated user who runs the script. | `root` |
| `plan` | The account’s [hosting plan (package)](https://docs.cpanel.net/whm/packages/feature-manager). <br>Important:<br>If you use this option, **do not** use the quota-related options in this script. Instead, we recommend that you allow the assigned plan determine quotas.<br> <br> This value defaults to the `default` hosting plan. | `default` |
| `maxpark` | The account’s maximum number of [parked domains (aliases)](https://docs.cpanel.net/whm/dns-functions/park-a-domain). <br>- A positive integer.<br>- `unlimited` — The account can use unlimited parked domains.<br> This value defaults to the selected package’s _Maximum Parked Domains_ value. | `unlimited` |
| `maxaddon` | The account’s maximum number of addon domains. <br>- A positive integer.<br>- `0` or `unlimited` — The account can use unlimited addon domains.<br> This value defaults to the selected package’s _Maximum Addon Domains_ value. | `unlimited` |
| `featurelist` | The account’s assigned feature list.<br>This value defaults to the selected package’s _Feature List_ value. | `default` |
| `contactemail` | The account’s contact email address. <br>This value defaults to an empty string value. | `username@example.com` |
| `use_registered_nameservers` | Whether to use the domain’s registered nameservers instead of the server’s nameservers. <br>- `y` — Use the domain’s nameservers.<br>- `n` — Use the server’s nameservers.<br> This value defaults to `n`. | `n` |
| `language` | The account’s locale, in two-letter [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format. This value is case-sensitive. <br>Note:<br>For region-specific locales, use the ISO 639-1 code, an underscore (`_`), and the ISO 3166-1 code.<br> <br>This value defaults to the selected package’s _Locale_ value. | `EN` |
| `spamassassin` | Whether Apache SpamAssassin™ is enabled on the account. <br>- `y` — Enable SpamAssassin.<br>- `n` — Disable SpamAssassin.<br> This value defaults to `y`. | `y` |
| `spambox` | Whether to enable [spam box](https://docs.cpanel.net/cpanel/email/spam-filters) filtering on the account. <br>- `y` — Enable spam box filtering.<br>- `n` — Disable spam box filtering.<br> This value defaults to `y`. <br>Important:<br>You **must** enable Apache SpamAssassin if you use this option. | `y` |
| `max_emailacct_quota` | The maximum email quota size, in megabytes (MB), that the account can define when it creates an email account. <br>- A positive integer.<br>- `0` or `unlimited` — The account has an unlimited quota.<br> This value defaults to the selected package’s _Max Quota per Email Address (MB)_ value. <br>Important:<br>- This value applies to each email account, **not** each cPanel account.<br>- If you call this option, it overwrites the hosting plan's defined value for the account.<br>- We recommend that you let the account's defined hosting plan determine this option's value. | `unlimited` |

## Example

The following example creates an account with the specified values.

```bash
/usr/local/cpanel/scripts/wwwacct example.com username luggage123456 123 jupiter n n n unlimited 4 6 8 10 unlimited n root default 10 10 default usernames@exampless.com y EN y 10
```

If the script succeeds, the output will look like the following:

```bash
+===================================+
| New Account Info                  |
+===================================+
Domain: example.com
Ip: 10.2.65.83 (n)
HasCgi: n
UserName: username
PassWord: luggage123456
CpanelMod: jupiter
HomeRoot: /home
Quota: 123 MB
NameServer1: a.iana-servers.net
NameServer2: b.iana-servers.net
NameServer3:
NameServer4:
Contact Email: usernames@exampless.com
Package: default
Feature List: default
Account Enhancements: None
Language: en
+===================================+
```

#### Additional Documentation

* * *

- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The removeacct Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script/)
- [The suspendacct Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script/)
- [The sync\_child\_accounts Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×