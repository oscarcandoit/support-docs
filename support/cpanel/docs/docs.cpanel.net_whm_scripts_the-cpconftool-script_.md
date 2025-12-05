---
url: "https://docs.cpanel.net/whm/scripts/the-cpconftool-script/"
title: "The cpconftool Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#main-content)

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
4. The cpconftool Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#overview)

* * *

[Modules](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#modules)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#options)

* * *

[Back up a configuration module](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#back-up-a-configuration-module)

* * *

[Configuration backup contents](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#configuration-backup-contents)

* * *

[Restore configuration settings](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#restore-configuration-settings)

* * *

[Transfer configuration settings](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#transfer-configuration-settings)

* * *

[Apache module differences](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#apache-module-differences)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#overview)

* * *

[Modules](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#modules)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#options)

* * *

[Back up a configuration module](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#back-up-a-configuration-module)

* * *

[Configuration backup contents](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#configuration-backup-contents)

* * *

[Restore configuration settings](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#restore-configuration-settings)

* * *

[Transfer configuration settings](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#transfer-configuration-settings)

* * *

[Apache module differences](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#apache-module-differences)

* * *

## The cpconftool Script

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/)

Last modified: _2020 December 2_

* * *

## Overview

Use the `/usr/local/cpanel/bin/cpconftool` script to back up and restore configuration settings. The script groups the configuration settings for different services into modules.

## Modules

You can use this script to back up and restore the following modules:

- Apache® — cPanel & WHM uses Apache to host websites.







Note:





- The Apache module also modifies the servers’ ModSecurity® settings. Apache uses ModSecurity to provide intrusion detection and prevention on your web server.
- The Apache backup, restoration, and transfer processes differ from other modules. For more information, read the [Apache Module Differences](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#apache-module-differences) section below.

- AutoSSL — The AutoSSL feature automatically issues free, Domain-Validated SSL certificates to users’ domains.







Note:





This module does **not** modify the SSL Provider. To update your SSL provider, use WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_).

- Backups — cPanel & WHM uses backups to copy or archive data. You can use this data to recover to a previous state.







Note:




The backup module does **not** include legacy backup settings.


- cPanel themes — cPanel & WHM uses cPanel themes to generate the cPanel and the WHM interfaces.

- cPHulk — The cPHulk service helps to protect your server against brute force attacks.







Note:





- The script does **not** copy history reports.
- The script **appends** whitelist- and blacklist-management configuration settings. It does **not** replace these configuration settings.

- Exim — cPanel & WHM uses Exim as the server’s main mail transfer agent.

- GreyListing — The Greylisting feature defends email users against spam.

- ModSecurity — This open-source web application firewall helps to detect and prevent intrusion. For more information, read our [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity) documentation.

- MySQL® — cPanel & WHM uses MySQL as the server’s database management.







Note:





WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_) does **not** allow you to back up, restore, or transfer MySQL configurations. You **must** use this script to perform these actions.

- WHM (`whmconf`) — cPanel & WHM uses the `whmconf` configuration to back up and restore WHM’s common settings that aren’t user-specific. For example, the settings from WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) and WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).


## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/bin/cpconftool --option
```

### Options

The `/usr/local/cpanel/bin/cpconftool --option` script accepts the following options:

Note:

You can rename a backup file. The `--restore` and `--prerestore_backup` options do not rely on the file’s name. You could include modules in the filename.

- `--modules` — ( **Required**) A comma-separated list of the modules to restore or back up.







Note:





The Apache module also contains some ModSecurity settings. Use the ModSecurity module to affect **only** the ModSecurity settings.









```bash
  --modules=cpanel::smtp::exim,cpanel::system::mysql
```

- `--backup` — Generate a backup file. For more information, read the [Back up a configuration module](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#back-up-a-configuration-module) section below.



```bash
  --backup --modules=cpanel::smtp::exim
```

- `--restore` — Restore from a backup file. For more information, read the [Restore configuration settings](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#restore-configuration-settings) section below.







Important:





- Make **certain** that you specify the full path to the backup file.
- We **strongly** recommend that you create a backup **before** you restore a module. Use either the `--backup` or the `--prerestore_backup` option.

```bash
--restore=/home/whm-config-backup-all-1.1-1411229033.tar.gz --modules=cpanel::smtp::exim
```

- `--list-modules` — List the available modules on your server.







Note:





You do **not** need to include the `--modules` option.





The output will resemble the following example:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```bash<br>cpanel::easy::apache<br>cpanel::smtp::exim<br>cpanel::system::autossloptions<br>cpanel::system::backups<br>cpanel::system::greylist<br>cpanel::system::hulk<br>cpanel::system::modsecurity<br>cpanel::system::mysql<br>cpanel::system::whmconf<br>cpanel::ui::themes<br>``` |

- `--query-module-info` — List information about the version of the module.



```bash
  --query-module-info --modules=cpanel::smtp::exim
```

- `--verbose` — Display details about the operation that the script performs.







Note:





You can **only** pass this option with the `--backup` or `--restore` options.









```bash
  --backup --modules=cpanel::smtp::exim --verbose
```

- `--prerestore_backup` — Restore the original version of the file. The script creates a backup **before** it restores the module.



Note:





The `--prerestore_backup` option is **always** active for Apache restorations.







```bash
  --restore=/home/whm-config-backup-all-1.1-1411229033.tar.gz --modules=cpanel::smtp::exim --prerestore_backup
```


## Back up a configuration module

To back up a configuration module, perform the following steps:

1. Log in to the server as the `root` user via SSH.

2. Navigate to the `/usr/local/cpanel` directory.

3. To list available configuration modules, run the following command:




```bash
/usr/local/cpanel/bin/cpconftool --list-modules
```



The script will display a list of available configuration modules. For example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```bash<br>cpanel::easy::apache<br>cpanel::smtp::exim<br>cpanel::system::autossloptions<br>cpanel::system::backups<br>cpanel::system::greylist<br>cpanel::system::hulk<br>cpanel::system::modsecurity<br>cpanel::system::mysql<br>cpanel::system::whmconf<br>cpanel::ui::themes<br>``` |

4. To back up the configuration module, run the following command. In the following example, `configuration::to::backup` represents the configuration module name:




```bash
/usr/local/cpanel/bin/cpconftool --backup --modules=configuration::to::backup
```





The script will display a confirmation message that resembles the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Backup Successful<br>/home/whm-config-backup-1562881772.tar.gz<br>``` |







Note:





The script will generate a unique backup filename. In this example, the script generated the backup as the `whm-config-backup-1562881772.tar.gz` file.


### Configuration backup contents

When you back up a configuration, the system uses the settings contained in certain files for each module. You can list the files that your server uses for a particular module. For example, to list the files for the Exim module, run the following command:

```bash
/usr/local/cpanel/bin/cpconftool --backup --modules=cpanel::smtp::exim --verbose
```

You can run this command for any module. You will receive output similar to the following example:

[Click to view...](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#click-to-view---1764175700455037224)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>``` | ```bash<br>Backing up /etc/cpanel_exim_system_filter …<br>Backing up /etc/blocked_incoming_email_country_ips …<br>Backing up /var/cpanel/config/email/trust_x_php_script …<br>Backing up /var/cpanel/config/email/query_apache_for_nobody_senders …<br>Backing up /etc/exim.conf …<br>Backing up /var/cpanel/custom_mailips …<br>Backing up /etc/mail/spamassassin/KAM.cf …<br>Backing up /etc/spammers …<br>Backing up /etc/mail/spamassassin/CPANEL.cf …<br>Backing up /etc/mail/spamassassin/P0f.cf …<br>Backing up /etc/mail/spamassassin/deadweight.cf …<br>Backing up /etc/trustedmailhosts …<br>Backing up /etc/blocked_incoming_email_domains …<br>Backing up /etc/cpanel_mail_netblocks …<br>Backing up /etc/greylist_trusted_netblocks …<br>Backing up /var/cpanel/per_domain_mailips …<br>Backing up /etc/mail/spamassassin/kam_heavyweights.cf …<br>Backing up /etc/global_spamassassin_enable …<br>Backing up /etc/spammeripblocks …<br>Backing up /etc/exim.conf.localopts …<br>Backing up /var/cpanel/custom_mailhelo …<br>Backing up /etc/exim.conf.local …<br>Backing up /etc/backupmxhosts …<br>Backing up /etc/neighbor_netblocks …<br>Backing up /etc/mail/spamassassin/deadweight2.cf …<br>Backing up /var/cpanel/use_rdns_for_helo …<br>Backing up /etc/blocked_incoming_email_countries …<br>Backing up /etc/mail/spamassassin/deadweight2_meta.cf …<br>Backing up /etc/senderverifybypasshosts …<br>Backing up /etc/mail/spamassassin/BAYES_POISON_DEFENSE.cf …<br>Backing up /etc/skipsmtpcheckhosts …<br>Backing up /etc/mail/spamassassin/deadweight2_sub.cf …<br>Backup Successful<br>/home/whm-config-backup-cpanel__smtp__exim-90.001000-1604326024.tar.gz<br>``` |

## Restore configuration settings

Important:

The Apache configurations may require additional steps. For more details, see the [Apache module differences](https://docs.cpanel.net/whm/scripts/the-cpconftool-script/#apache-module-differences) section below.


To restore a configuration from a backup file, run the following command, where `/home/backup.tar.gz` represents the full path to the desired backup file and `config::to::restore` represents the configuration to restore:

```bash
/usr/local/cpanel/bin/cpconftool --restore=/home/backup.tar.gz --modules=config::to::restore --prerestore_backup
```

When you restore a configuration module, the following actions occur:

1. The system restores all of the configuration files.






Note:




The script **removes** any configuration files on the destination server that did not exist the source server.


2. The `/usr/local/cpanel/bin/cpconftool` script tests whether the configuration settings are valid.
3. The `/usr/local/cpanel/bin/cpconftool` script runs the `/usr/local/cpanel/scripts/buildeximconf` script.

- If the test fails, the script reverts the changes.
- If the test succeeds, the script restarts the service.

The restoration process returns output that resembles the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```bash<br>Restore Successful<br>---<br>cpanel::system::whmconf:<br>post_restore:<br>  data: "<span class=\"b2\">Your changes have been saved.</span><br /><br /><span class=\"b2\">Restarting cPanel daemons...</span><span class=\"b2\">done.</span><br /><br /><span class=\"b2\">Updating your system to reflect any changes...</span><br /><pre>Processing post action for <span class=\"setting_label\">Thunderbird and Outlook autodiscover and autoconfig support (enables proxy subdomain and SRV record creation)</span>:\nThe master proxysubdomains setting changed state so we do not need to update the autodiscover domains.\nProcessing post action for <span class=\"setting_label\">Conserve memory</span>:\nProcessing post action for <span class=\"setting_label\">Standardized Hooks - Debug Mode</span>:\nProcessing post action for <span class=\"setting_label\">Include mailman in disk usage calculations</span>:\nProcessing post action for <span class=\"setting_label\">Include databases in disk usage calculations</span>:\nProcessing post action for <span class=\"setting_label\">Mail authentication via domain owner password</span>:\nProcessing post action for <span class=\"setting_label\">Number of failed or deferred messages a domain may send before protections can be triggered</span>:\nProcessing post action for <span class=\"setting_label\">Enable Email Archiving support</span>:\nProcessing post action for <span class=\"setting_label\">Email delivery retry time</span>:\nProcessing post action for <span class=\"setting_label\">Allow cPanel & WHM to determine the best value for your MySQL innodb_buffer_pool_size configuration?</span>:\nProcessing post action for <span class=\"setting_label\">Allow cPanel & WHM to determine the best value for your MySQL max_allowed_packet configuration?</span>:\nProcessing post action for <span class=\"setting_label\">Allow cPanel & WHM to determine the best value for your MySQL open_files_limit configuration?</span>:\nProcessing post action for <span class=\"setting_label\">cPanel PHP max execution time</span>:\nProcessing post action for <span class=\"setting_label\">cPanel PHP max POST size</span>:\nProcessing post action for <span class=\"setting_label\">cPanel PHP max upload size</span>:\nProcessing post action for <span class=\"setting_label\">cPanel PHP loader</span>:\nProcessing post action for <span class=\"setting_label\">Allow users to relay mail if they use an IP address through which someone has validated an IMAP or POP3 login within the last hour (Pop-before-SMTP)</span>:\nProcessing post action for <span class=\"setting_label\">Proxy subdomains</span>:\nCreating service domain DNS entries in background. This process can take several minutes to complete.\nProcessing post action for <span class=\"setting_label\">Require SSL</span>:\nProcessing post action for <span class=\"setting_label\">Enable Analog stats</span>:\nProcessing post action for <span class=\"setting_label\">Enable Awstats stats</span>:\nProcessing post action for <span class=\"setting_label\">Enable BoxTrapper spam trap</span>:\nProcessing post action for <span class=\"setting_label\">Enable Horde Webmail</span>:\nProcessing post action for <span class=\"setting_label\">Enable Mailman mailing lists</span>:\nmailman...(XID jcptbq) The \xE2\x80\x9Cmailman\xE2\x80\x9D service is disabled.\nWaiting for \xE2\x80\x9Cmailman\xE2\x80\x9D to stop \xE2\x80\xA6\xE2\x80\xA6\xE2\x80\xA6finished.<br />\n<br />\n...Done\nRestarting mailman\nConfiguration file passes test!  New configuration file was installed.\n\n\n\n/etc/exim.pl.local installed!\nSPF is disabled in exim or unavailable, enabling SPF for SpamAssassin\nRefreshing SMTP Mail protection.\nSMTP Mail protection has been disabled.  All users may make outbound smtp connections.\nDisabled scgi-bin since suexec is enabled or the webserver runs as the user\nDistilled successfully\nProcessing post action for <span class=\"setting_label\">Enable Apache SpamAssassin\xE2\x84\xA2 spam filter</span>:\nProcessing post action for <span class=\"setting_label\">Enable Apache SpamAssassin\xE2\x84\xA2 Spam Box delivery for messages marked as spam (user configurable)</span>:\nProcessing post action for <span class=\"setting_label\">Enable Webalizer stats</span>:\nProcessing post action for <span class=\"setting_label\">Restrict outgoing SMTP to root, exim, and mailman (FKA SMTP Tweak)</span>:\nProcessing post action for <span class=\"setting_label\">Prefix &ldquo;mail.&rdquo; onto Mailman URLs</span>:\nProcessing post action for <span class=\"setting_label\">Use pre-4.1-style MySQL<sup>&reg;</sup> passwords</span>:\n</pre><span class=\"b2\">Done.</span></div>\n</body>\n</html>\n"<br>status: 1<br>  statusmsg: Update WHMhostmgr Succeeded<br>restore:<br>  data:<br>    warnings: []<br>    status: 1<br>    statusmsg: "Whostmgr::Config::Restore::System::WHMConf: ok"<br>``` |

## Transfer configuration settings

Warning:

If you use this script to transfer configuration settings, you may encounter undesired behavior. Instead, we **strongly** recommend that you use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_).

To transfer configuration settings, perform the following steps:

1. Perform the backup process for the configuration module on the source server.
2. Copy the `.tar.gz` file from the previous step from the source server to the destination server.
3. Perform the restoration process for the configuration module on the destination server.

## Apache module differences

Important:

When you restore the Apache module, the `/usr/local/cpanel/bin/cpconftool` script removes Apache’s default include files. If Apache fails to start, run the `/usr/local/cpanel/scripts/rebuildhttpdconf` script with the `--help` flag and restart Apache.

To restore configuration settings from a backup file, run the following command. In the following example, `/home/backup.tar.gz` represents the full path to the desired backup file:

```bash
/usr/local/cpanel/bin/cpconftool --restore=/home/backup.tar.gz --modules=cpanel::easy::apache
```

The script performs the following tasks:

- The script moves the `/var/cpanel/secdatadir` file to the same location on the destination server.
- The script moves the `/var/cpanel/modsec_cpanel_conf_datastore` file to the same location on the destination server.
- The script determines the [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors) configuration settings on your server.
- The script then determines the active or inactive rules that you set on your script.
- The script moves the ModSecurity configuration settings to the destination server.

The script does **not** perform the following tasks:

- The script does **not** move the `modsec2.conf`, `modsec2.user.conf`, or `modsec2.cpanel.conf` files. Any differences in Apache configurations could cause Apache to fail to restart.
- The script modifies the ModSecurity settings in the current `modsec2.*.conf` files but does **not** replace them.
- If the user has control of the `modsec2.user.conf` file, the script archives this file. The script also archives any file the `modsec2.user.conf` configuration file includes.






Warning:





We **strongly** recommend that you do **not** manually extract these files.


#### Additional Documentation

* * *

- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The backups\_create\_metadata Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script/)
- [The backups\_list\_user\_files Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×