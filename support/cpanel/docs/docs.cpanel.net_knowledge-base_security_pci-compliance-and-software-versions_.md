---
url: "https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/"
title: "PCI Compliance and Software Versions | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#main-content)

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
4. PCI Compliance and Software Versions


[mailman](https://docs.cpanel.net/tags/mailman/) [openssl](https://docs.cpanel.net/tags/openssl/) [security](https://docs.cpanel.net/tags/security/) [exim](https://docs.cpanel.net/tags/exim/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#overview)

* * *

[What is backporting?](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#what-is-backporting)

* * *

[OpenSSL](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#openssl)

* * *

[SSLCipherSuite](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#sslciphersuite)

* * *

[OpenSSH](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#openssh)

* * *

[The SSH daemon](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#the-ssh-daemon)

* * *

[Exim](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#exim)

* * *

[Simple Mail Transfer Protocol](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#simple-mail-transfer-protocol)

* * *

[Backported CVEs](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#backported-cves)

* * *

[FTP](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#ftp)

* * *

[TLS](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#tls)

* * *

[Bind](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#bind)

* * *

[BIND CVE-2011-4313](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#bind-cve-2011-4313)

* * *

[Hide the BIND Version](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#hide-the-bind-version)

* * *

[Hide the DNS Server Hostname](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#hide-the-dns-server-hostname)

* * *

[Mailman](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#mailman)

* * *

[Insecure Cookie configuration](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#insecure-cookie-configuration)

* * *

[RPC Portmapper](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#rpc-portmapper)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#overview)

* * *

[What is backporting?](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#what-is-backporting)

* * *

[OpenSSL](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#openssl)

* * *

[SSLCipherSuite](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#sslciphersuite)

* * *

[OpenSSH](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#openssh)

* * *

[The SSH daemon](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#the-ssh-daemon)

* * *

[Exim](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#exim)

* * *

[Simple Mail Transfer Protocol](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#simple-mail-transfer-protocol)

* * *

[Backported CVEs](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#backported-cves)

* * *

[FTP](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#ftp)

* * *

[TLS](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#tls)

* * *

[Bind](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#bind)

* * *

[BIND CVE-2011-4313](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#bind-cve-2011-4313)

* * *

[Hide the BIND Version](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#hide-the-bind-version)

* * *

[Hide the DNS Server Hostname](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#hide-the-dns-server-hostname)

* * *

[Mailman](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#mailman)

* * *

[Insecure Cookie configuration](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#insecure-cookie-configuration)

* * *

[RPC Portmapper](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/#rpc-portmapper)

* * *

## PCI Compliance and Software Versions

Last modified: _2024 February 20_

* * *

## Overview

Most PCI compliance scanning systems use a specific software package version number that contains a reported vulnerability. This document discusses some of the specific software packages that contain known vulnerabilities. This document will also help you determine whether developers used the backport process to patch a software package.

Important:

- The system transmits insecure cookies when a previous set of cookies expire. Insecure cookies replace any invalid cookies and help ensure that a cPanel & WHM login does not result in a redirect loop. For PCI compliance, the system reports this as a false positive because the system requires a secure SSL connection.
- Some of the commands in this document do not work on servers running the Ubuntu® operating system.

### What is backporting?

The backport process allows the operating system vendor to change only the parts of the software that the security vulnerability affected. In this way, it avoids the introduction of new features that the developers did not test. This process does not increment the version number. Instead, the developers attach a flag to the package.

Operating system developers often backport updates to avoid the need to distribute a new version of the software package.

For example, an operating system developer may combine OpenSSL 0.9.7c with a patch from OpenSSL 0.9.7.d to create OpenSSL 0.9.7c-2. If most PCI scanning systems look for OpenSSL version 0.9.7d or higher, they may incorrectly show OpenSSL 0.9.7c-2 as vulnerable. In this case, you would inform the PCI compliance company that you use a backported version of the software package, which its developers patched for the vulnerability. Your PCI compliance company can then record your software version and mark a false positive in the scan results.

## OpenSSL

Many different system services and packages use OpenSSL. To check your OpenSSL installation for backporting, perform the following steps:

1. Determine which OpenSSL package exists on your system. To do this, run the following command:




```perl
rpm -qa | grep openssl
```



The following example output indicates that your server runs version `openssl-0.9.8e-36` of OpenSSL:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>openssl-0.9.8e-36.el5_11<br>openssl-0.9.8e-36.el5_11<br>``` |

2. To check the change log for vulnerability fixes that the version includes, run the following command:



```perl
rpm --changelog -q openssl-0.9.8b-10.el5 | less
```

3. The package change log may include fixes for the CVEs that your PCI compliance scanning company requires. If these fixes appear, inform them of the patched version and which CVEs it includes so that they can mark it as a false positive.


### SSLCipherSuite

The [SSLCipherSuite](http://httpd.apache.org/docs/current/mod/mod_ssl.html#sslciphersuite) directive in the _Global Configuration_ section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_) defaults to a PCI-compliant value.

If you want to adjust the SSLCipherSuite directive, we recommend that you generate a Cipher configuration with [Mozilla’s SSL configuration generator](https://ssl-config.mozilla.org/#server=apache&server-version=2.4&openssl-version=1.0.1&hsts=true&config=intermediate).

If you have adjusted the SSLCipherSuite directive’s value and the PCI compliance scans of port `443` do **not** pass, reset the [SSLCipherSuite](http://httpd.apache.org/docs/current/mod/mod_ssl.html#sslciphersuite) directive in the _Global Configuration_ section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_) to the default setting.

## OpenSSH

To determine which OpenSSH package exists on your system, run the following command:

```perl
rpm -qa | grep openssh
```

The output may resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>openssh-clients-5.3p1-94.el6.i686<br>openssh-server-5.3p1-94.el6.i686<br>openssh-5.3p1-94.el6.i686<br>``` |

This output indicates that `openssh-5.3pl-94.e16` exists as your OpenSSH version. This OpenSSH version may result in a PCI scan that returns the following two vulnerabilities:

- OpenSSH `J-PAKE` Session Key Retrieval Vulnerability — This issue does **not** affect OpenSSH as shipped with RedHat Enterprise Linux® (RHEL) versions 6 and 7. For more information, read [CVE-2010-4478 on RedHat’s website](https://access.redhat.com/security/cve/CVE-2010-4478).

- OpenSSH `"child_set_env()"` Security Bypass Issue — This issue minimally impacts security and does **not** pose a severe risk to most systems. Even though this OpenSSH version 6.6 addressed this issue, the RHEL repositories do **not** contain this updated version. If you wish to update OpenSSH to the new version, you **must** install it manually.


If the OpenSSH package `6.6.1p1-35.el7_3` exists on your server, your output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>openssh-6.6.1p1-35.el7_3.x86_64<br>openssh-server-6.6.1p1-35.el7_3.x86_64<br>openssh-clients-6.6.1p1-35.el7_3.x86_64<br>``` |

This OpenSSH package contains a vulnerability that affects the way it handles authentication by users who do not exist on the system. To mitigate this issue, enable the Security-Enhanced Linux (SELinux) security module that ships with RHEL versions 6 and 7.

For more information about this vulnerability, read [CVE-2016-6210 on RedHat’s Website](https://access.redhat.com/security/cve/cve-2016-6210).

## The SSH daemon

PCI compliance requires the SSH daemon (`sshd`) to support strong hashtag algorithms. When reviewing a PCI scan, one of the common issues is that the SSHD supports weak hashing algorithms. More often than not, this issue can occur when a server is using the default SSHD settings. To solve this issue, perform the following steps:

1. Log in to the server as the `root` user via SSH.

2. Open the `/etc/ssh/sshd_config` file with a text editor.

3. Add the following lines to the file:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp521,ecdh-sha2-nistp384,ecdh-sha2-nistp256,diffie-hellman-group-exchange-sha256<br>Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr<br>MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,umac-128@openssh.com<br>``` |

4. Restart the SSH daemon. To do this, run the following command:


```bash
/usr/local/cpanel/scripts/restartsrv_sshd
```

5. Rescan your server with your account on the PCI company’s website.

## Exim

cPanel & WHM includes patches that help to make Exim PCI-compliant. The package change log includes information about these patches.

### Simple Mail Transfer Protocol

PCI Compliance requires mail client encryption. Your mail client provides SSL and TLS encryption. To confirm your server’s SMTP transactions remain encrypted, perform the following steps as the `root` user:

1. Navigate to the [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

2. Enable the _Require clients to connect with SSL or issue the STARTTLS command before they are allowed to authenticate with the server._ option.






Note:




cPanel & WHM defaults this option to _On_.


3. Click _Save_.

4. Navigate to the [Mailserver Configuration](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_)

5. Set the _Allow Plaintext Authentication (from remote clients)_ option to _No_.

6. Click _Save_.


### Backported CVEs

To view the CVE-related fixes in your version of Exim, run the following command:

```perl
rpm -q --changelog cpanel-exim | grep CVE
```

The output will display the CVE number, for example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```go<br>fix for CVEs CVE-2010-2024, CVE-2010-2023<br>Update CVE-2011-0017 patch to fix use of -C flag by unprivileged users.<br>CVE-2011-0017: Backport patch from EXIM 4.74 for arbitrary file overwrite bug.<br>CVE-2010-4344: Apply string_format buffer overflow patch<br>CVE-2010-4345: Compile with ALT_CONFIG_PREFIX=/etc/exim<br>CVE-2010-4345: Compile with ALT_CONFIG_PREFIX=/etc<br>``` |

To report the CVE fixes that your Exim installation includes, send the output that reflects the patched software to your PCI scanning company.

## FTP

We **strongly** recommend that you disable FTP services and use SFTP, SCP, or WebDisk for file transfers.

If you **cannot** disable FTP services, we recommend that you use WHM’s [_FTP Server Selection_](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection) interface ( _WHM » Home » Service Configuration » FTP Server Selection_) to configure your server to use ProFTPD.

Then, use WHM’s [_FTP Server Configuration_](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration) interface ( _WHM » Home » Service Configuration » FTP Server Configuration_) to configure ProFTPD to use to use the following TLS cipher suite:

```perl
TLSCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
```

### TLS

PCI compliance requires that your server run TLS version 1.2 or greater. For more information, read the Security Standards Council’s® [Date Change for Migrating from SSL and Early TLS](https://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls) article and our [**deprecated**](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.

## Bind

Although cPanel & WHM does not create BIND, all cPanel & WHM servers servers include BIND by default. Vendor updates will typically resolve PCI compliance issues.

### BIND CVE-2011-4313

The BIND change log does not show `CVE-2011-4313` directly. Instead, the change log shows under `RHEL #754398`.

Run the following command to test for the presence of this fix:

```perl
rpm -q --changelog bind | grep 754398
```

Your output should resemble the following example:

```perl
- fix DOS against recursive servers (#754398)
```

To report the CVE fixes that your BIND installation includes, send the output that reflects the patched software to the PCI scanning company.

### Hide the BIND Version

To become PCI compliant, you **must** hide the BIND version on your server.

To do this, perform the following steps:

1. Connect to the server via SSH as the `root` user.

2. Edit the `/etc/named.conf` file and add the following line of code to the options section:



```perl
version "";
```

3. Use the following command to restart BIND:



```perl
/usr/local/cpanel/scripts/restartsrv_named
```

4. Rescan your server with your account on the PCI company’s website.


### Hide the DNS Server Hostname

To become PCI compliant, you **must** hide your DNS server’s hostname.

To do this, perform the following steps:

1. Connect to the server via SSH as the `root` user.

2. Edit `/etc/named.conf` and add the following line of code to the options section:



```perl
hostname "";
```

3. Use the following command to restart BIND:



```perl
/usr/local/cpanel/scripts/restartsrv_named
```

4. Rescan your server with your account on the PCI company’s website.


## Mailman

You can completely disable Mailman when you scan for PCI Compliance.

To disable Mailman, perform the following steps:

1. Log in to WHM as the root user.

2. In the _Mail_ section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_), set the _Enable Mailman mailing lists_ setting to _Off_.

3. Click _Save_.


If you do **not** want to disable Mailman, perform the following steps to pass a PCI Compliance scan:

1. Log in to to the server as the `root` user via SSH.

2. Create the following file to deny web requests for Mailman:



```perl
/usr/local/cpanel/3rdparty/mailman/cgi-bin/.htaccess
```


The contents of the file should appear similar to the following example:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```go<br><Limit GET POST><br> order deny, allow<br> <deny from all><br> </Limit><br><Limit PUT DELETE><br> order deny, allow<br> <deny from all><br> </Limit><br>``` |

3. Rescan your server with your account on the PCI company’s website.


## Insecure Cookie configuration

During a PCI compliance scan, your system may indicate that your web applications contain insecure cookies. If your system contains insecure cookies, you may see the following error:

```go
A Cookie Vulnerability helps an attacker to gain access to session information stored in cookies. It may also be used as a 'locator' attack that precedes a Cross-Site Scripting (XSS) or Man-In-The-Middle attack. When looking for Cookie Vulnerabilities, an attacker will first observe cookies through various HTTP proxies and check their attributes. The attacker will then try to steal cookies of various users by employing multiple attacks. If successful, he/she may be able to get sensitive information which can be further used in an illegitimate way.
```

To fix this error, perform the following steps:

1. Navigate to WHM’s [_Include Editor_](https://docs.cpanel.net/whm/service-configuration/include-editor/) interface ( _WHM » Home » Service Configuration » Apache Configuration » Include Editor_)

2. Select the _Pre VirtualHost Include_ option.

3. From the _Select an Apache Version menu_, select _All Versions_.

4. Enter the following content in the available text box and click _Update_:



```perl
<IfModule mod_headers.c>
Header always set Strict-Transport-Security "max-age=300; includeSubDomains; preload"
Header always edit Set-Cookie (.*) "$1;HttpOnly;Secure"
Header always set X-Frame-Options "sameorigin"
Header setifempty Referrer-Policy: same-origin
Header set X-XSS-Protection "1; mode=block"
Header set X-Permitted-Cross-Domain-Policies "none"
Header set Referrer-Policy "no-referrer"
Header set X-Content-Type-Options: nosniff
</IfModule>
```


### RPC Portmapper

The RPC portmapper server converts RPC program numbers into TCP/IP protocol port numbers. An attacker may use it to enumerate RPC services. You must disable RPC portmapper on your server to become PCI compliant.

To check RPC portmapper’s status, run the following command:

```
rpcinfo -p | grep 'Connection refused'
```

If you receive no output, then your system is not PCI compliant.

If RPC services (such as NFS) are not used/needed on this machine, stop and disable this service. Otherwise, you will need to filter traffic to this port to allow access only from trusted machines.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>systemctl stop rpcbind<br>systemctl stop rpcbind.socket<br>systemctl disable rpcbind<br>``` |

Important:

Do **not** remove the package. If you remove the package, it could cause dependency issues.

- For example, the `quota` package is a dependency of `rpcbind`. If you remove `rpcbind`, you will also remove quota support.

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