---
url: "https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/"
title: "Reserved, Invalid, and Misconfigured Usernames | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Reserved, Invalid, and Misconfigured Usernames


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#overview)

* * *

[Basic restrictions](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#basic-restrictions)

* * *

[Special cases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#special-cases)

* * *

[Reserved usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#reserved-usernames)

* * *

[Reserved aliases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#reserved-aliases)

* * *

[Resolve problems](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#resolve-problems)

* * *

[Remove username aliases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#remove-username-aliases)

* * *

[Misconfigured usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#misconfigured-usernames)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#overview)

* * *

[Basic restrictions](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#basic-restrictions)

* * *

[Special cases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#special-cases)

* * *

[Reserved usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#reserved-usernames)

* * *

[Reserved aliases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#reserved-aliases)

* * *

[Resolve problems](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#resolve-problems)

* * *

[Remove username aliases](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#remove-username-aliases)

* * *

[Misconfigured usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username/#misconfigured-usernames)

* * *

## Reserved, Invalid, and Misconfigured Usernames

Last modified: _2025 September 16_

* * *

## Overview

This document explains cPanel & WHM’s username restrictions and what to do if you encounter an invalid, reserved, or misconfigured username.

## Basic restrictions

cPanel & WHM applies the following rules when you create or modify a cPanel or WHM username:

Usernames may **only** use lowercase letters (`a–z`) and digits (`0–9`).

- Usernames **cannot** contain more than 16 characters.
- Usernames **cannot** begin with a digit (`0–9`) or the string `test`.
- Usernames **cannot** end with the string `assword`.

### Special cases

- You **cannot** create a username with the hyphen character (`-`), but you can change an account’s name to use a hyphen when you transfer that account to another system.
- To allow usernames over eight characters in length, set the `LONGUSERS: 1` environment variable in the `/var/cpanel/whm/nvdata/root.yaml` file.
- If you plan to use MySQL® or PostgreSQL® as a database engine, the first eight characters **must** be unique on the system.






Note:





You can disable database prefixing with the _Add prefix to names of new databases and database users_ option in the SQL section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- To allow leading digits in a username, create the `/etc/allowstupidstuff` touch file.
- You **cannot** use a username that is group name in the `/etc/sudoers` file or files in the `/etc/sudoers.d` directory.

## Reserved usernames

Important:

During [TSR-2017-0006](https://news.cpanel.com/cpanel-tsr-2017-0006-full-disclosure/), we expanded the list of reserved usernames to include email aliases listed in the `/etc/aliases` and `/etc/localaliases` files. The system will also reserve usernames that are aliased to a reserved username.


cPanel & WHM reserves some usernames for the system’s use, and you cannot use them for cPanel or WHM accounts. This list of reserved usernames can grow over time, and new versions of cPanel & WHM may add to this list.

cPanel & WHM checks the following files to determine whether to reserve or restrict a username or alias:

- `/usr/local/cpanel/Cpanel/Validate/Username/Core.pm`
- `/etc/aliases`
- `/etc/localaliases`

### Reserved aliases

By default, the system reserves the following list of aliases:

| Username | Alias |
| --- | --- |
| `root` | `admin, abuse, adm, amandabackup, apache, bin, canna, daemon, dbus, decode, desktop, dovecot, dumper, fax, ftp, games, gdm, gopher, halt, hostmaster, hkadmincp, ident, ingres, ldap, lp, mail, mailnull, manager, mysql, named, netdump, news, nfsnobody, nobody, noc, nscd, ntp, nut, operator, pcap, postfix, postgres, postmaster, privoxy, pvm, quagga, radiusd, radvd, root, rpc, rpcuser, rpm, security, shutdown, smmsp, squid, sshd, sudo, sync, system, toor, uucp, vcsa, webalizer, webmaster, wheel, wnn, xfs` |
| `postmaster` | `info, mailer-daemon, marketing, sales, support` |
| `news` | `newsadm, newsadmin, usenet` |
| `ftp` | `ftp-adm, ftp-admin, ftpadm, ftpadmin` |
| `webmaster` | `www` |

## Resolve problems

To resolve issues with invalid, reserved, or restricted usernames or aliases, run the following command as the `root` user to rename the account:

```bash
whmapi1 modifyacct user=username newuser=newusername
```

Note:

In this example, `username` represents the current (restricted) username, and `newusername` represents the new username that you wish to assign to the account.

### Remove username aliases

You can also remove reserved aliases from the `/etc/aliases` and `/etc/localaliases` files.

### Misconfigured usernames

Misconfigured usernames do not possess some information or exist in an incomplete state. To fix a misconfigured username, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/updateuserdomains --force
```

#### Additional Documentation

* * *

- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The modify\_accounts Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×