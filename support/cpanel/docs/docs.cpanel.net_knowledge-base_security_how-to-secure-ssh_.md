---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/"
title: "How to Secure SSH | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#main-content)

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
4. How to Secure SSH


[security](https://docs.cpanel.net/tags/security/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#overview)

* * *

[Be careful who you grant SSH access to](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#be-careful-who-you-grant-ssh-access-to)

* * *

[Set an SSH Legal Message](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#set-an-ssh-legal-message)

* * *

[Use SSH Keys](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#use-ssh-keys)

* * *

[Strengthen SSH security](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#strengthen-ssh-security)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#overview)

* * *

[Be careful who you grant SSH access to](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#be-careful-who-you-grant-ssh-access-to)

* * *

[Set an SSH Legal Message](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#set-an-ssh-legal-message)

* * *

[Use SSH Keys](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#use-ssh-keys)

* * *

[Strengthen SSH security](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#strengthen-ssh-security)

* * *

## How to Secure SSH

Last modified: _2023 May 2_

* * *

## Overview

This document lists several helpful changes that you can make to your server to improve SSH security. We **strongly** recommend that you restrict and properly configure Secure Shell (SSH) access in order to secure your server.

## Be careful who you grant SSH access to

If a user does not need SSH access, do **not** grant them access. To remove a user’s SSH access, use WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Manage Shell Access_).

Some users may need SSH access, but only need access to files in their home directory. We recommend that you assign a jailed shell environment to these users. For more information about jailed shells, read our [VirtFS - Jailed Shell](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell) documentation.

## Set an SSH Legal Message

The system can display an SSH legal message (message of the day, or `motd`) whenever someone logs in to your server through SSH.

To set the message, use your preferred text editor to edit the `/etc/motd` file and save your changes. For example, one of our technical analysts uses the following message:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>ALERT! You have entered a secured area! The system has recorded<br>your IP and login information, and it has notified the administrator.<br>This system is restricted to authorized access only. All activities on<br>this system are recorded and logged. The system administrator will fully<br>investigate and report unauthorized activity to the appropriate law<br>enforcement agencies.<br>``` |

## Use SSH Keys

You can disable password authentication for SSH on your server, which will force users to log in through SSH with keys instead of passwords.

To do this, perform the following:

1. Use WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface ( _WHM_ » _Home_ » _Security Center_ » _Manage root’s SSH Keys_) to generate and download a key for the root user.

2. Use WHM’s [_SSH Password Authorization Tweak_](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/) interface ( _WHM_ » _Home_ » _Security Center_ » _SSH Password Authorization Tweak_) to disable password authentication for SSH.


## Strengthen SSH security

The `/etc/ssh/sshd_config` file contains your server’s configuration settings for SSH. We recommend that you change the following settings:

- `Port` — The port number on which the `sshd` daemon listens for connections. The highest acceptable value is `49151`.







Note:





We recommend that you use a privileged port of `1` \- `1023` that another service does **not** currently use. Only the `root` user can bind to ports `1` \- `1023`. Anyone can use the unprivileged ports of `1024` and greater.

- `Protocol` — The SSH protocol that your server uses. We recommend that you change this value to `2`.

- `ListenAddress` — The IP address on which the `sshd` daemon listens for connections. Your server **must** own this IP address. We **strongly** recommend that you do not use your main shared IP address for this value. You can create a custom DNS entry specifically for the new SSH IP address. To do so, create a zone file (for example, `ssh.example.com`) and add an A entry to the zone file for the new nameserver entry.

- `PermitRootLogin` — This option specifies whether you wish to allow people to directly log in to SSH as the `root` user. We strongly recommend that you set this value to `no`.


#### Edit the sshd\_config file

To configure the `/etc/ssh/sshd_config` file in order to tighten your server’s security, perform the following steps:

Note:

For CentOS 7, [CloudLinux™ 7 and 8](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), and Red Hat® Enterprise Linux® (RHEL) 7 firewall management, we recommend that you manage your server’s firewall with the `/etc/firewalld/services/cpanel.xml` file. You can read more about this file in our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

1. Log in to your server as the `root` user via SSH. If your server does **not** allow direct `root` logins to SSH, log in as your wheel user and use the `su` command to become the `root` user.

2. Back up the `sshd_config` file with the following command:




```go
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak`date +%F`
```

3. Open the `/etc/ssh/sshd_config` file with a text editor.

4. To change a parameter in the `sshd_config` file, uncomment the line that contains the parameter. To do this, remove the number-sign character (`#`) and change the value for the line.







Important:





If you change the default SSH port, you **must** update your server’s firewall configuration to allow traffic to the new port. For more information about firewall configuration, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.





For example, the default SSH port appears in a line similar to the following example:



```go
#Port 22
```



To change the SSH port to `456`, edit that line to resemble the following example:



```go
Port 456
```


After you configure SSH, run the `/scripts/restart_sshd` script or the `service sshd restart` command to restart the SSH daemon.

After you restart SSH, log out of your server and log in again with the user, IP address, and port number that you specified in the `sshd_config` file.

Warning:

If you accidentally misconfigure your SSH configuration file, navigate to the following link in your web browser (where `example.com` represents the server’s hostname or main IP address):

```go
https://example.com:2087/scripts2/doautofixer?autofix=safesshrestart
```

This script attempt to will temporarily configure an additional SSH configuration file for port `22`, which will allow you to access, edit, and fix the original SSH configuration file. If another service or daemon uses port `22`, the script will configure an additional SSH configuration file for port `23`.

#### Example sshd\_config File

Warning:

Do **not** copy the the example file below and attempt to use it on your server. It will break your SSH service configuration. This file is **only** an example.

[Click to view...](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh/#click-to-view---1764175698365448217)

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>``` | ```go<br>#   $OpenBSD: sshd_config,v 1.93 2014/01/10 05:59:19 djm Exp $<br># This is the sshd server system-wide configuration file.  See<br># sshd_config(5) for more information.<br># This sshd was compiled with PATH=/usr/local/bin:/usr/bin<br># The strategy used for options in the default sshd_config shipped with<br># OpenSSH is to specify options with their default value where<br># possible, but leave them commented.  Uncommented options override the<br># default value.<br># If you want to change the port on a SELinux system, you have to tell<br># SELinux about this change.<br># semanage port -a -t ssh_port_t -p tcp #PORTNUMBER<br>#<br>Port 456<br>#AddressFamily any<br>ListenAddress 192.168.69.187<br>#ListenAddress ::<br># The default requires explicit activation of protocol 1<br>Protocol 2<br># HostKey for protocol version 1<br>#HostKey /etc/ssh/ssh_host_key<br># HostKeys for protocol version 2<br>HostKey /etc/ssh/ssh_host_rsa_key<br>#HostKey /etc/ssh/ssh_host_dsa_key<br>HostKey /etc/ssh/ssh_host_ecdsa_key<br>HostKey /etc/ssh/ssh_host_ed25519_key<br># Lifetime and size of ephemeral version 1 server key<br>#KeyRegenerationInterval 1h<br>#ServerKeyBits 1024<br># Ciphers and keying<br>#RekeyLimit default none<br># Logging<br># obsoletes QuietMode and FascistLogging<br>#SyslogFacility AUTH<br>SyslogFacility AUTHPRIV<br>#LogLevel INFO<br># Authentication:<br>#LoginGraceTime 2m<br>#PermitRootLogin yes<br>#StrictModes yes<br>#MaxAuthTries 6<br>#MaxSessions 10<br>#RSAAuthentication yes<br>#PubkeyAuthentication yes<br># The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2<br># but this is overridden so installations will only check .ssh/authorized_keys<br>AuthorizedKeysFile  .ssh/authorized_keys<br>#AuthorizedPrincipalsFile none<br>#AuthorizedKeysCommand none<br>#AuthorizedKeysCommandUser nobody<br># For this to work you will also need host keys in /etc/ssh/ssh_known_hosts<br>#RhostsRSAAuthentication no<br># similar for protocol version 2<br>#HostbasedAuthentication no<br># Change to yes if you don't trust ~/.ssh/known_hosts for<br># RhostsRSAAuthentication and HostbasedAuthentication<br>#IgnoreUserKnownHosts no<br># Don't read the user's ~/.rhosts and ~/.shosts files<br>#IgnoreRhosts yes<br># To disable tunneled clear text passwords, change to no here!<br>#PasswordAuthentication yes<br>#PermitEmptyPasswords no<br>PasswordAuthentication yes<br># Change to no to disable s/key passwords<br>#ChallengeResponseAuthentication yes<br>ChallengeResponseAuthentication no<br># Kerberos options<br>#KerberosAuthentication no<br>#KerberosOrLocalPasswd yes<br>#KerberosTicketCleanup yes<br>#KerberosGetAFSToken no<br>#KerberosUseKuserok yes<br># GSSAPI options<br>GSSAPIAuthentication yes<br>GSSAPICleanupCredentials no<br>#GSSAPIStrictAcceptorCheck yes<br>#GSSAPIKeyExchange no<br>#GSSAPIEnablek5users no<br># Set this to 'yes' to enable PAM authentication, account processing,<br># and session processing. If this is enabled, PAM authentication will<br># be allowed through the ChallengeResponseAuthentication and<br># PasswordAuthentication.  Depending on your PAM configuration,<br># PAM authentication via ChallengeResponseAuthentication may bypass<br># the setting of "PermitRootLogin without-password".<br># If you just want the PAM account and session checks to run without<br># PAM authentication, then enable this but set PasswordAuthentication<br># and ChallengeResponseAuthentication to 'no'.<br># WARNING: 'UsePAM no' is not supported in Red Hat Enterprise Linux and may cause several<br># problems.<br>UsePAM yes<br>#AllowAgentForwarding yes<br>#AllowTcpForwarding yes<br>#GatewayPorts no<br>X11Forwarding yes<br>#X11DisplayOffset 10<br>#X11UseLocalhost yes<br>#PermitTTY yes<br>#PrintMotd yes<br>#PrintLastLog yes<br>#TCPKeepAlive yes<br>#UseLogin no<br>UsePrivilegeSeparation sandbox      # Default for new installations.<br>#PermitUserEnvironment no<br>#Compression delayed<br>#ClientAliveInterval 0<br>#ClientAliveCountMax 3<br>#ShowPatchLevel no<br>#UseDNS yes<br>#PidFile /var/run/sshd.pid<br>#MaxStartups 10:30:100<br>#PermitTunnel no<br>#ChrootDirectory none<br>#VersionAddendum none<br># no default banner path<br>#Banner none<br># Accept locale-related environment variables<br>AcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES<br>AcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT<br>AcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE<br>AcceptEnv XMODIFIERS<br># override default of no subsystems<br>Subsystem   sftp    /usr/libexec/openssh/sftp-server<br># Example of overriding settings on a per-user basis<br>#Match User anoncvs<br>#   X11Forwarding no<br>#   AllowTcpForwarding no<br>#   PermitTTY no<br>#   ForceCommand cvs server<br>``` |

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×