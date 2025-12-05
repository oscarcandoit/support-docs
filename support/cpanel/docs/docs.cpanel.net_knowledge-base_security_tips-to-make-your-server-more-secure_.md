---
url: "https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/"
title: "Tips to Make Your Server More Secure | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#main-content)

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
4. Tips to Make Your Server More Secure


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#overview)

* * *

[Use secure passwords](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#use-secure-passwords)

* * *

[Secure SSH](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#secure-ssh)

* * *

[Secure Apache](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#secure-apache)

* * *

[Harden your operating system](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-operating-system)

* * *

[Harden your tmp partition](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition)

* * *

[Restrict the system compilers](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#restrict-the-system-compilers)

* * *

[Disable unused services and daemons](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#disable-unused-services-and-daemons)

* * *

[Monitor your system](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#monitor-your-system)

* * *

[Control access to services by IP Address](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#control-access-to-services-by-ip-address)

* * *

[Enable a firewall](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#enable-a-firewall)

* * *

[Prevent email abuse](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#prevent-email-abuse)

* * *

[Stay up-to-date](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#stay-up-to-date)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#overview)

* * *

[Use secure passwords](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#use-secure-passwords)

* * *

[Secure SSH](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#secure-ssh)

* * *

[Secure Apache](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#secure-apache)

* * *

[Harden your operating system](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-operating-system)

* * *

[Harden your tmp partition](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition)

* * *

[Restrict the system compilers](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#restrict-the-system-compilers)

* * *

[Disable unused services and daemons](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#disable-unused-services-and-daemons)

* * *

[Monitor your system](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#monitor-your-system)

* * *

[Control access to services by IP Address](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#control-access-to-services-by-ip-address)

* * *

[Enable a firewall](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#enable-a-firewall)

* * *

[Prevent email abuse](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#prevent-email-abuse)

* * *

[Stay up-to-date](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#stay-up-to-date)

* * *

## Tips to Make Your Server More Secure

Last modified: _2024 February 22_

* * *

## Overview

This document lists several tips that you can use to make your cPanel & WHM server more secure.

Warning:

Exercise caution when you follow these tips. WebPros International, LLC takes no responsibility for modifications to individual servers or the security practices of individual servers. Server security requires that the administrator make compromises, which means that any server that allows connections could contain vulnerabilities.

## Use secure passwords

Insecure passwords represent the most common security vulnerability. If a hacker compromises an account password, they can use it to deface or infect client sites, or use them to spread viruses.

Edit the `/etc/login.defs` file to configure many password options on your system.

Generally, a secure password utilizes at least eight characters, which includes alphanumeric and grammatical symbols. Never use passwords that include dictionary words or significant dates.

If you wish to check a password’s security, test it with [JTR cracker](http://www.openwall.com/john/). You can also install tools like [pam\_passwdqc](http://www.openwall.com/passwdqc/) to check the strength of passwords.

## Secure SSH

If you move SSH access to a different port, individuals without specific knowledge of your server will not know which port to use for SSH. Many malicious users attempt to use port `22` to access servers. To modify the port on which SSH runs, edit the `/etc/ssh/sshd_config` file.

We recommend that you use a port number less than `1024` and one that another service does **not** already use.

- These ports are “privileged” ports, because only the `root` user can bind to them.
- Ports `1024` and above are “unprivileged” ports, and anyone can use them.

Warning:

Always use SSHv2 only. SSHv1 will not properly secure connections. You must change the `#Protocol 2,1` line in the `/etc/ssh/sshd_config` file to `Protocol 2`.

You may also wish to configure shell resource limits for your users. These limits ensure that applications and scripts cannot use all of your server’s resources and take down your server. You can configure shell resource limits in the `/etc/security/limits.conf` file on most Linux® systems.

## Secure Apache

You **must** secure your Apache installation. The ModSecurity® tool can help you to secure your server’s Apache installation.

To use ModSecurity to secure Apache, install and enable the Open Web Application Security Project (OWASP) Core Rule Set (CRS). You can do this in WHM’s [_ModSecurity® Vendors_](https://docs.cpanel.net/whm/security-center/modsecurity-vendors) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_).

The OWASP® ModSecurity rule set is a set of rules that Apache’s ModSecurity module can use to help protect your server. While these rules do not make your server impervious to attacks, they greatly increase the amount of protection for your web applications.

You can use the following interfaces to manage ModSecurity:

- WHM’s [_ModSecurity® Tools_](https://docs.cpanel.net/whm/security-center/modsecurity-tools) interface ( _WHM_ » _Home_ » _Security Center_ » _ModSecurity® Tools_).

- WHM’s [_ModSecurity® Configuration_](https://docs.cpanel.net/whm/security-center/modsecurity-configuration) interface ( _WHM_ » _Home_ » _Security Center_ » _ModSecurity® Configuration_).


When you compile Apache, include the suEXEC module to ensure that CGI applications and scripts run as the user that owns and executes them. This module identifies the location of malicious scripts and who executed them. It also enforces permission and environment controls.

We **strongly** recommend that you compile Apache and PHP with the suPHP module. The suPHP module forces all PHP scripts to run as the user who owns the script. This allows you to identify the owner of all PHP scripts that run on your server and find the location of malicious scripts. To compile Apache and PHP with the suPHP module, select the suPHP option in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) or run the `/usr/local/cpanel/scripts/easyapache` script from the command line.

Finally, we recommend that you implement symlink race condition protection on your server through EasyApache. For more information about the symlink race condition vulnerability and how to protect against it, read our [Symlink Race Condition Protection](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection) documentation.

## Harden your operating system

We recommend that you take steps to harden your operating system to increase its security. Click the links below to access the security guides of supported Linux distributions on which you can install cPanel & WHM:

- [RedHat® Enterprise Linux (RHEL) Security Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Security_Guide/)
- [Security and Hardening CentOS 7 Guide](http://www.tecmint.com/security-and-hardening-centos-7-guide/)
- [CloudLinux Guide to SecureLinks](http://docs.cloudlinux.com/index.html?securelinks.html)

## Harden your tmp partition

Note:

Virtuozzo® and OpenVZ servers do not support this feature.

We recommend that you use a separate `/tmp` partition and that you mount it with the `nosuid` option. This option forces a process to run with the privileges of the user who executes it. You may also wish to mount the `/tmp` directory with `noexec` after you install cPanel & WHM.

Run the `/usr/local/cpanel/scripts/securetmp` script to mount your `/tmp` partition to a temporary file for extra security. The temporary file will use 1% of the available disk space in the `/usr` partition, from a minimum size of 500MB to a maximum size of 4GB.

Important:

We **strongly** recommend that you **do not** disable the `/usr/local/cpanel/scripts/securetmp` script. However, if you do not wish for your server to run the `/usr/local/cpanel/scripts/securetmp` script, perform either of the following actions:

- Run the `/usr/local/cpanel/scripts/securetmp` script and enter `y` when the system displays the following prompt:

```bash
Would you like to disable securetmp from the system startup?
```

- Create the `/var/cpanel/disabled/securetmp` file. To do this, run the following command:

```go
mkdir -p /var/cpanel/disabled ; touch /var/cpanel/disabled/securetmp
```

This file ensures that the script can't run on your server.



## Restrict the system compilers

Most users do **not** require the use of C and C++ compilers. We **strongly** recommend that you disable compilers for all users who do not exist in the `compilers` group in the `/etc/group` file. Many pre-packaged exploits require functional compilers.

- To disable compilers from the WHM interface, use WHM’s [_Compiler Access_](https://docs.cpanel.net/whm/security-center/compiler-access) interface ( _WHM » Home » Security Center » Compiler Access_).
- To disable compilers from the command line, run the following command as the `root` user:



```go
/scripts/compilers off
```


## Disable unused services and daemons

Any service or daemon that allows connections to your server may also allow hackers to gain access. To reduce security risks, disable all services and daemons that you do not use.

Disable any services that you do not currently use with WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

## Monitor your system

Make **certain** that you know when a user creates an account. Also make certain that you know what software runs on the server, when software requires updates, and other similar information about your server.

Run the following commands frequently to to ensure that your system functions in the way that you expect:

- `netstat -anp` — Check for programs on ports that you did not install or authorize.
- `find / \( -type f -o -type d \) -perm /o+w 2>/dev/null | egrep -v '/(proc|sys)' > world_writable.txt` — Check the `world_writable.txt` file for all of the world-writable files and directories. This command reveals locations where an attacker can store files on your system.






Note:





If you fix permissions on some improperly-written PHP and CGI scripts, the script or website may no longer function.

- `find / -nouser -o -nogroup >> no_owner.txt` — Check the `no_owner` file for all files that do not have a user or group associated with them. A specific user or group should own all files, to restrict access to them.
- `ls /var/log/` — Many of the different logs on your system can reveal security issues. Check your system logs, Apache logs, mail logs, and other logs frequently to ensure that your system functions as expected.

Third-party software companies offer readily-available utilities to monitor your system and to detect rootkits, backdoors, or other vulnerabilities.

For example, you could install one of the following commonly-available utilities:

- [Tripwire](http://tripwire.com/) — Monitors `checksums` of files and reports changes.
- [chkrookit](http://www.chkrootkit.org/) — Scans for common vulnerabilities.
- [Rkhunter](http://rkhunter.sourceforge.net/) — Scans for common vulnerabilities.
- [Logwatch](https://sourceforge.net/projects/logwatch/) — Monitors and reports on daily system activity.

Additionally, we recommend that you allow a technical security professional to perform regular configuration checks of your system.

## Control access to services by IP Address

You can use WHM’s [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) interface ( _WHM » Home » Security Center » Host Access Control_) to allow only certain IP addresses to access the following services on the server:

- cPanel (`cpaneld`)
- WHM (`whostmgrd`)
- Webmail (`webmaild`)
- Web Disk (`cpdavd`)
- FTP (`ftpd`)
- SSH (`sshd`)
- SMTP (`smtp`)
- POP3 (`pop3`)
- IMAP (`imap`)

You can also configure the `/etc/hosts.allow` file directly via the command line. To do this, perform the following steps:

1. Log in to your server as the `root` user.

2. Open the `/etc/hosts.allow` file with your preferred text editor.

3. Enter the desired rules in the following format:


```
service : IP address : action
```


The following example demonstrates how to allow the `192.168.0.0` IPv4 address to access the cPanel service:


```
cpaneld : 192.168.0.0 : allow
```


The following example demonstrates how to allow the `2001:0db8:0:0:1:0:0:1` IPv6 address to access the cPanel service:


```
cpaneld : [2001:0db8:0:0:1:0:0:1] : allow
```


Notes:

- When you configure your firewall directly, you can use CIDR notation.

- WHM does **not** use a `hosts.deny` file. Add deny statements to the `/etc/hosts.allow` file.


## Enable a firewall

Before you remove all unused services and daemons or disable unused services and daemons, you can enable a firewall to prevent unwanted access. For more information on the ports that cPanel & WHM requires to function properly, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

You may use all of these services or other services, and you should adjust your rules accordingly.

Remember:

Set a `cron` job to disable your firewall every five minutes while you test your rules, or your server may lock you out.

## Prevent email abuse

If your server uses the Secure Mail Transfer Protocol (SMTP), we recommend that you perform actions to prevent email abuse on your cPanel & WHM server. This can prevent hackers from gaining access to your server. For information about how to prevent email abuse, read our [How to Prevent Email Abuse](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse) documentation.

## Stay up-to-date

We **strongly** recommend that you run the latest stable versions of the software on your system to ensure that it contains patches for any security issues. Be aware of updates for the following:

- Kernel
- cPanel & WHM
  - You can set these to automatically update in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_).
- User Applications (bulletin boards, content management systems, blog engines, etc.)
  - You can upgrade all cPAddon installations in WHM’s [_Manage cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software) interface ( _WHM » Home » cPanel » Manage cPAddons Site Software_).
- System Software
  - You can set these to automatically update in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_).

#### Additional Documentation

* * *

- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×