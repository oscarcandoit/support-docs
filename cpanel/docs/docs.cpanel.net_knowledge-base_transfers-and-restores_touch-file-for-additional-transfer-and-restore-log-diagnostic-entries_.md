---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/"
title: "Touch File for Additional Transfer and Restore Log Diagnostic Entries | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. Touch File for Additional Transfer and Restore Log Diagnostic Entries


[transfers](https://docs.cpanel.net/tags/transfers/) [migrations](https://docs.cpanel.net/tags/migrations/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#overview)

* * *

[Create or remove the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#create-or-remove-the-touch-file)

* * *

[Examples](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#examples)

* * *

[Transfer log with the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#transfer-log-with-the-touch-file)

* * *

[Restore log without the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#restore-log-without-the-touch-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#overview)

* * *

[Create or remove the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#create-or-remove-the-touch-file)

* * *

[Examples](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#examples)

* * *

[Transfer log with the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#transfer-log-with-the-touch-file)

* * *

[Restore log without the touch file](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#restore-log-without-the-touch-file)

* * *

## Touch File for Additional Transfer and Restore Log Diagnostic Entries

Last modified: _2024 February 21_

* * *

## Overview

Use the `xferdebug` touch file to display all restore actions in those logs. After you create the touch file, transfers will contain additional diagnostic lines.

The `xferdebug` touch file sends transfer calls through the `Whostmgr::Remote::_exec_sshcontrol:` module, which displays the SSH options that the system passed to the module.

Important:

When the `xferdebug` touch file exists, the system will log passwords in plain text.


## Create or remove the touch file

To create the touch file, run the following command through an SSH connection as the `root` user:

```perl
touch /var/cpanel/xferdebug && /usr/local/cpanel/scripts/synctransfers
```

To remove the touch file, run the following command:

```perl
rm -fv /var/cpanel/xferdebug && /usr/local/cpanel/scripts/synctransfers
```

## Examples

### Transfer log with the touch file

The following examples show the SSH options that a user passed to the module to help diagnose connectivity or authentication issues between the servers:

[Click to view...](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#click-to-view---1764175698603418419)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>Whostmgr::Remote::_exec_sshcontrol: [/usr/local/cpanel/scripts/sshcontrol --ctl ssh --host 192.168.0.1 --port 22 --authuser username --escmethod sudo --sshkey username@example.com --stay_alive 1 --die_on_pid 25762]<br>Whostmgr::Remote::_exec_sshcontrol: [/usr/local/cpanel/scripts/sshcontrol --ctl scp --host 192.168.0.1.xxx --port 22 --authuser username --escmethod sudo --sshkey username@example.com --direction download --srcfile /home/username/cpmove-cprichsu-split/cpmove-cprichsu.tar.gz.part00001 --destfile . --external_master /root/.libnet-openssh-perl/username-208.74.1-25767-830516 --die_on_pid 25762]<br>Copying account package file... ...<br>Whostmgr::Remote::_exec_sshcontrol: [/usr/local/cpanel/scripts/sshcontrol --ctl ssh --host 192.168.0.1 --port 22 --authuser username --escmethod sudo --sshkey username@example.com --external_master /root/.libnet-openssh-perl/username-208.74.1-25767-830516 --die_on_pid 25762]<br>``` |

### Restore log without the touch file

The following example is a normal restore log:

[Click to view...](https://docs.cpanel.net/knowledge-base/transfers-and-restores/touch-file-for-additional-transfer-and-restore-log-diagnostic-entries/#click-to-view---1764175698617990539)

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>155<br>156<br>157<br>158<br>159<br>160<br>161<br>162<br>163<br>164<br>165<br>166<br>167<br>168<br>169<br>170<br>``` | ```go<br>Domains<br>Retrieving and sanitizing main userdata ...<br>Parsing domain databases ...<br>...Subdomains...<br>...ParkedDomains...<br>...AddonDomains...<br>Restoring Domains ...<br>Restoring Subdomain "site1.ajeff.test" ...<br>The subdomain, site1.ajeff.test has been added.<br>Done<br>Restoring Addon Domain "ajeff2.test" on to "site1.ajeff.test" ...<br>Domain was successfully parked.<br>Done<br>Restoring Subdomain "sub1.ajeff.test" ...<br>The subdomain, sub1.ajeff.test has been added.<br>Done<br>Domains<br>Domains restored<br>Cron<br>Restoring crontab<br>Cron<br>Roundcube<br>Roundcube<br>CustomLocale<br>CustomLocale<br>OK<br>Password<br>Restoring password ...<br>Password for "ajeff" has been changed.<br>Password<br>Restore log with the touch file<br>The following example is a log of the same restoration with a touch file enabled:<br> Collapse source<br>Domains<br>Retrieving and sanitizing main userdata ...<br>Parsing domain databases ...<br>...Subdomains...<br>...ParkedDomains...<br>...AddonDomains...<br>Restoring Domains ...<br>Restoring Subdomain "site1.ajeff.test" ...<br>The subdomain, site1.ajeff.test has been added.<br>Done<br>Restoring Addon Domain "ajeff2.test" on to "site1.ajeff.test" ...<br>Domain was successfully parked.<br>Done<br>Restoring Subdomain "sub1.ajeff.test" ...<br>The subdomain, sub1.ajeff.test has been added.<br>Done<br>Domains<br>Domains restored<br>NobodyFiles<br>NobodyFiles<br>Frontpage<br>Restoring Frontpage (if installed)...<br>Frontpage<br>Frontpage restored<br>Counter<br>Counter<br>BackupConfig<br>Restoring backup config<br>Updated backup config for "ajeff"<br>Restoring legacy backup config<br>Updated legacy backup config for "ajeff"<br>BackupConfig<br>Reseller<br>Restoring reseller packages and features (if any)<br>Restoring reseller privileges (if any)<br>Reseller<br>DKIM<br>DKIM<br>The account does not have any DKIM keys to restore.<br>Mail<br>Restoring Mail files<br>Mail<br>Unsuspend<br>Unsuspending .htaccess files for domains: "ajeff.test, site1.ajeff.test, ajeff2.test, and sub1.ajeff.test"<br>Unsuspend<br>MailRouting<br>Update mail routing<br>LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for ajeff.test's mail.This configuration has been manually selected.<br>LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for site1.ajeff.test's mail.This configuration has been automatically detected based on your mx entries.<br>LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for ajeff2.test's mail.This configuration has been automatically detected based on your mx entries.<br>LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for sub1.ajeff.test's mail.This configuration has been automatically detected based on your mx entries.<br>MailRouting<br>CustomLocale<br>CustomLocale<br>OK<br>Roundcube<br>Roundcube<br>DigestShadow<br>DigestShadow<br>FileProtect<br>Doing fileprotect conversion<br>FileProtect<br>VhostIncludes<br>Restoring custom virtualhost templates...<br>VhostIncludes<br>ZoneFile<br>Restoring DNS zones<br>Restoring zone: ajeff2.test.db<br>Changed all instances of [192.168.1.203] -> [10.5.40.48] in ajeff2.test<br>Restoring zone: ajeff.test.db<br>Changed all instances of [192.168.1.203] -> [10.5.40.48] in ajeff.test<br>Zone updates: ajeff.test, ajeff2.test<br>ZoneFile<br>Ftp<br>Ftp<br>Password<br>Restoring password ...<br>Password for "ajeff" has been changed.<br>Password<br>MailFix<br>Fixing mail permissions<br>Converting to maildir if needed<br>MailFix<br>Mailman<br>Restoring Mailman lists<br>Mailman<br>Mailman Restored<br>BandwidthData<br>Restoring Bandwidth Data<br>BandwidthData<br>Postgres<br>Preparing PostgreSQL restore ...<br>This system does not have PostgreSQL.<br>Postgres<br>Logaholic<br>Logaholic<br>Cron<br>Restoring crontab<br>Cron<br>ProxySubdomains<br>Update Proxy subdomains for "ajeff"<br>ajeff.test [ajeff.test, 10.5.40.48, +A@webdisk, +A@whm, +A@cpanel]<br>ajeff2.test [ajeff2.test, 10.5.40.48, +A@webdisk]<br>site1.ajeff.test [ajeff.test, 10.5.40.48, +A@webdisk.site1]<br>sub1.ajeff.test [ajeff.test, 10.5.40.48, +A@webdisk.sub1]<br>ProxySubdomains<br>SSL<br>Migrating pre-SSLStorage home directory resources...<br>SSL<br>Mysql<br>Preparing MySQL restore ...<br>Restoring MySQL databases<br>Restoring the database "ajeff_db1" as "ajeff_db1" ...<br>The system has created a new database named "ajeff_db1".<br>Granting "ajeff" access to "ajeff_db1" with temporary password ...<br>Connecting to MySQL server as "ajeff" in order to restore "ajeff_db1".<br>Restoring database data for "ajeff_db1".<br>The system has restored the contents of the database "ajeff_db1".<br>Restoring MySQL database mappings<br>Restoring MySQL privileges<br>Restoring MySQL grants<br>Restoring MySQL access hosts<br>Reloading MySQL<br>Mysql<br>SPF<br>Updating SPF Records<br>SPF<br>Logs<br>Logs<br>userdata<br>Restoring userdata...<br>Restoring userdata for "ajeff.test".<br>Restoring userdata for "site1.ajeff.test".<br>Restoring userdata for "ajeff2.test".<br>Restoring userdata for "sub1.ajeff.test".<br>userdata<br>``` |

The touch file information displays the details of each step in the restoration process. This can help you to determine whether the system did not restore or rename part of an account.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [Review Transfers and Restores](https://docs.cpanel.net/whm/transfers/review-transfers-and-restores/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×