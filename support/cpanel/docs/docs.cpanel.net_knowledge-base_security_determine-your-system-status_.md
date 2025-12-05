---
url: "https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/"
title: "Determine Your System Status | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. Determine Your System Status


[security](https://docs.cpanel.net/tags/security/) [rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#overview)

* * *

[Rootkits](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#rootkits)

* * *

[Check system libraries](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-system-libraries)

* * *

[Check Size and Key ID of packages](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-size-and-key-id-of-packages)

* * *

[Check size of system library](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-size-of-system-library)

* * *

[Check timestamp on library](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-timestamp-on-library)

* * *

[Check hash of library on VirusTotal](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-hash-of-library-on-virustotal)

* * *

[Run the CSI script](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#run-the-csi-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#overview)

* * *

[Rootkits](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#rootkits)

* * *

[Check system libraries](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-system-libraries)

* * *

[Check Size and Key ID of packages](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-size-and-key-id-of-packages)

* * *

[Check size of system library](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-size-of-system-library)

* * *

[Check timestamp on library](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-timestamp-on-library)

* * *

[Check hash of library on VirusTotal](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#check-hash-of-library-on-virustotal)

* * *

[Run the CSI script](https://docs.cpanel.net/knowledge-base/security/determine-your-system-status/#run-the-csi-script)

* * *

## Determine Your System Status

Last modified: _2022 December 8_

* * *

## Overview

Hosting providers and system administrators can use this document to determine whether their systems have been `root`-level compromised. We also recommend that you read our [Tips to Make Your Server More Secure](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/) documentation.

Important:

We **strongly** recommend that you consult a qualified security specialist and/or your hosting provider if you believe your server has been compromised.


## Rootkits

Rootkits allow a malicious user to gain undetected administrative access to the server. Every rootkit has at least two purposes:

- Hides the attacker.
- Grants access to the attacker.

Rootkits are difficult but not impossible to detect. Some rootkits (such as Ebury, NCOM, Shellbot, and XorDDoS) affect system libraries. These libraries run on the operating-system level, you should install them via the `yum` or `rpm` commands.

Note:

These commands do **not** work on servers running the Ubuntu® operating system.

### Check system libraries

If a library file is not owned by a package, this may indicate a possible compromised `root` user. You can check whether a system library has been installed by a package with this command:

```bash
rpm -qf /path/to/libraryfile
```

For example, run the following command to check the package that owns the `/lib64/libpw5.so` file:

```bash
rpm -qf /lib64/libpw5.so
```

The output should show that the library is owned by a package.

### Check Size and Key ID of packages

If the output shows that the library is owned by a package, you should check the _Size_ and _Key ID_ values of the package that owns the library file and compare them to the _Size_ and _Key ID_ values of the same package on a known clean server. If the _Size_ and _Key ID_ values do not match, this may indicate a compromise. Use this command to check the _Size_ and _Key ID_ values of a package:

```bash
rpm -qil <package-name> | egrep 'Size|Key ID'
```

Note:

You **must** compare package versions on the same operating system. For example, you **cannot** compare packages between servers running the CentOS and CloudLinux™ operating system.

### Check size of system library

You should also check the size of the library in question. On clean servers, the library file either does not exist or its size is 25 Kb or smaller. On servers compromised by a rootkit, the file’s size is larger than 25 Kb. You can check the size of the library file with this command:

```bash
ls -lh /path/to/libraryfile
```

### Check timestamp on library

You can get an idea of a rootkit’s installation date via the _Change_ timestamp from the `stat` command’s output. For example, to check the timestamp on the `/lib64/libpw5.so` library file, run the following command:

```bash
stat /lib64/libpw5.so
```

Then check the _Change_ line of the output:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>  File: '/lib64/libpw5.so'<br>  Size: 16        	Blocks: 0          IO Block: 4096   symbolic link<br>Device: fc01h/64513d	Inode: 5072132     Links: 1<br>Access: (0777/lrwxrwxrwx)  Uid: (    0/    root)   Gid: (    0/    root)<br>Access: 2021-10-28 23:39:26.107888218 +0000<br>Modify: 2021-09-08 22:00:57.707609700 +0000<br>Change: 2021-09-08 22:00:57.707609700 +0000<br> Birth: -<br>``` |

### Check hash of library on VirusTotal

Run the sha256 hash of the library file through the [VirusTotal](http://www.virustotal.com/) website to check it against pre-existing scans of the same file.

For example, to generate the sha256 hash for the `/lib64/libpw5.so` file, run the following command:

```bash
sha256sum /lib64/libpw5.so
```

make note of the `sha256sum` value in its output:

```bash
sha256sum: 970b49c16eebd558ac8984643f3763e76a52c9be4118f9e5830b8f5c406414fc
```

Then navigate to the [VirusTotal](https://www.virustotal.com/) website, using the following URL where `970b49c16eebd558ac8984643f3763e76a52c9be4118f9e5830b8f5c406414fc` represents the `sha256sum` value:

[www.virustotal.com/en/file/970b49c16eebd558ac8984643f3763e76a52c9be4118f9e5830b8f5c406414fc/analysis/](https://www.virustotal.com/en/file/970b49c16eebd558ac8984643f3763e76a52c9be4118f9e5830b8f5c406414fc/analysis/)
The website’s output displays a list of antivirus systems that have detected this file as a compromise.

Important:

- Replace `970b49c16eebd558ac8984643f3763e76a52c9be4118f9e5830b8f5c406414fc` with the actual hash from the `sha256sum` command.
- The VirusTotal website does **not** contain results from every potentially compromised file. However, if your server is reported as `root`-compromised and the report includes a link to [virustotal.com](https://www.virustotal.com/), there is a very strong chance that the server is `root`-compromised.

## Run the CSI script

cPanel Security Investigator (CSI) is a script that provides a variety of functions to assist with the investigation of both `root`\- and user-level compromises. By default, it scans for rootkits or `root`-level compromises, but it can also perform user-level scans.

To perform a `root`-level scan, run the following command:

```bash
/usr/local/cpanel/3rdparty/bin/perl <(curl -s https://raw.githubusercontent.com/cPanelTechs/CSI/master/csi.pl)
```

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×