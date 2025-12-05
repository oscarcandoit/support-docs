---
url: "https://docs.cpanel.net/whm/server-contacts/contact-manager/112/"
title: "Contact Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#main-content)

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
3. [Server Contacts](https://docs.cpanel.net/whm/server-contacts/)
4. Contact Manager


[whmui](https://docs.cpanel.net/tags/whmui/) [contact](https://docs.cpanel.net/tags/contact/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#overview)

* * *

[Communication Type](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#communication-type)

* * *

[Test a communication type](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#test-a-communication-type)

* * *

[Notifications](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#notifications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#overview)

* * *

[Communication Type](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#communication-type)

* * *

[Test a communication type](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#test-a-communication-type)

* * *

[Notifications](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/#notifications)

* * *

## Contact Manager

![](https://docs.cpanel.net/img/whm-icons/contact_manager.svg)

_Valid for version 112_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-contacts/contact-manager/110/)

#### [112](https://docs.cpanel.net/whm/server-contacts/contact-manager/112/)

#### [114](https://docs.cpanel.net/whm/server-contacts/contact-manager/114/)

#### [116](https://docs.cpanel.net/whm/server-contacts/contact-manager/116/)

#### [120](https://docs.cpanel.net/whm/server-contacts/contact-manager/120/)

#### [132](https://docs.cpanel.net/whm/server-contacts/contact-manager/)

Last modified: _2024 August 20_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to specify when your server sends notifications for each communication type. You can also specify whether you want to receive notifications of different importance levels.

- Any modifications to the settings in this interface affect the `root` user. To modify the contact settings for a reseller, log in to that account and navigate to cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).
- For notifications, your server uses the information that you entered in the _Contact Information_ tab of WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_). To change this information, click _Edit_ next to the communication type you need to change. A new interface will appear.
- For information about how to customize the templates that the system uses to generate these notifications, read our [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates) documentation.

## Communication Type

To set your alert preferences, perform the following steps:

1. Use the menus under the _Communication Type_ tab to specify the importance level for notifications of each communication type.

   - For example, if you **only** wish to receive email alerts about events that use the _High_ importance level, select _High only_ from the _Email_ menu.
   - To disable a communication type, select _None_.
2. Click _Save_.

### Test a communication type

To test notifications via ICQ, Post to URL, Pushbullet™, or Slack®, click _Test_ in the appropriate row. The system will send a test notification to the destination for that communication type.

Note:

Your server **only** displays _Test_ links for active communication types.

## Notifications

Click the _Notifications_ tab to list available alert types, the priority with which the system sends each alert, and which communication types will receive each alert.

- Select the desired priority for each alert type in the appropriate row.
- The interface displays icons that indicate which communication types will receive that particular alert.

Note:

Additional WP Toolkit templates may be available based on third-party installations. For more information, read the [WP Toolkit](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/wp-toolkit-in-plesk.73391/) documentation.

The following table describes the events that trigger each type of alert and the template file that the system uses to create the notification:

| Alert Type | Event that triggers your server to generate the alert | Notification Template File Locations |
| --- | --- | --- |
| _Account Creation_ | A system administrator or reseller creates an account. | `wwwacct/Notify.*.tmpl` |
| _Account Removal_ | A system administrator or reseller removes an account. | - `killacct/Notify.*.tmpl`<br>- `killacct/PostTerminateCleanup.*.tmpl` |
| _Account Suspensions_ | A system administrator or reseller suspends an account. | `suspendacct/Notify.*.tmpl` |
| _Account Unsuspensions_ | A system administrator or reseller unsuspends an account. | `unsuspendacct/Notify.*.tmpl` |
| _Account Upgrades/Downgrades_ | A user modifies the package for an account, or uses WHM’s [_Upgrade/Downgrade an Account_](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account) interface ( _WHM » Home » Account Functions » Upgrade/Downgrade an Account_). | `upacct/Notify.*.tmpl` |
| _Accounts with demo mode restrictions enabled and mail distributed to a child node._ | A demo account is distributing mail to a child node. | `DemoMode/MailChildNodeExists.*.tmpl` |
| _Altered Cpanel Packages Check_ | The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script finds altered packages. | `Check/CpanelPackages.*.tmpl` |
| _AppConfig Registration Notifications_ | The system registers an application with [AppConfig](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-appconfig-system/). | `appconfig/Notify.*.tmpl` |
| _AutoSSL cannot request a certificate because all of the website’s domains have failed DCV (Domain Control Validation)._ | AutoSSL fails to request a certificate because all of the website’s domains have failed DCV. | `AutoSSL/CertificateExpiring.*.tmpl` |
| _AutoSSL has deferred normal certificate renewal because a domain on the current certificate has failed DCV (Domain Control Validation)._ | AutoSSL defers normal certificate renewal because a domain on the current certificate has failed DCV. | `AutoSSL/CertificateExpiringCoverage.*.tmpl` |
| _AutoSSL has installed a certificate successfully._ | AutoSSL installs an SSL certificate. <br>Note:<br>This setting also requires you to enable the _Notify when AutoSSL has renewed a certificate successfully._ setting in WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_). | `AutoSSL/CertificateInstalled.*.tmpl` |
| _AutoSSL has provisioned a new certificate for a dynamic DNS domain._ | AutoSSL provisions a new certificate for a specific dynamic DNS domain. | `AutoSSL/DynamicDNSNewCertificate.*.tmpl` |
| _AutoSSL has renewed a certificate, but the new certificate lacks at least one domain that the previous certificate secured._ | AutoSSL renews a certificate but the new certificate lacks at least one domain that the previous certificate secured. <br>Note:<br>This setting also requires you to enable the _Notify when AutoSSL has renewed a certificate and the new certificate lacks at least one domain that the previous certificate secured._ setting in WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_). | `AutoSSL/CertificateInstalledReducedCoverage.*.tmpl` |
| _AutoSSL has renewed a certificate, but the new certificate lacks one or more of the website’s domains._ | AutoSSL renews a certificate but the new certificate lacks one or more of the website’s domains. | `AutoSSL/CertificateInstalledUncoveredDomains.*.tmpl` |
| _AutoSSL will not secure new domains because a domain on the current certificate has failed DCV (Domain Control Validation), and the certificate is not yet in the renewal period._ | AutoSSL **cannot** add any additional domains because domains that fail validation exist on the current certificate. | `AutoSSL/CertificateRenewalCoverage.*.tmpl` |
| _Backup Delayed_ | The backup process continues to run after 16 hours. | `Backup/Delayed.*.tmpl` |
| _Backup Failed To Finish_ | The system fails to finish a backup. | `Backup/Failure.*.tmpl` |
| _Backup Finished With Partial Failure_ | The backup process completed, but experienced some errors. | `Backup/PartialFailure.*.tmpl` |
| _Backup Successful_ | A backup succeeds. | `Backup/Success.*.tmpl` |
| _Backup Transport Error_ | A backup encounters transport errors. | `Backup/Transport.*.tmpl` |
| _Bandwidth Data Processing Timeout_ | The system times out while it attempts to process bandwidth data. | `Logd/Notify.*.tmpl` |
| _Bandwidth File Conversion Disk Space Failure_ | The system does not have enough free disk space to upgrade bandwidth files. | `installbandwidth/Notify.*.tmpl` |
| _Bandwidth Limits_ | An account exceeds its bandwidth limit. | `BandwidthUsageExceeded/Owner.*.tmpl` |
| _CloudLinux License Detected_ | The system detects a CloudLinux™ license and provides installation instructions. | `CloudLinux/Update.*.tmpl` |
| _Conversion of cpupdate.conf settings to local.versions_ | The system converts settings in the `cpupdate.conf` file to settings in the local.versions file. | `RPMVersions/Notify.*.tmpl` |
| _Conversion of cpupdate.conf Settings to local.versions (legacy notification)_ | The system converts settings in the `cpupdate.conf` file to settings in the `local.versions` file. | `RPMVersions/Notify.*.tmpl` |
| _Convert Addon Domain to Account Notifications_ | A system administrator or reseller converts an addon domain into an account. | `ConvertAddon/ConversionCompleted.*.tmpl` |
| _Corrupt Database Tables_ | The `/scripts/check_mysql` script finds corrupted database tables. | `Check/MySQL.*.tmpl` |
| _cPanel & WHM End of Life Notice_ | The cPanel & WHM version that exists on the server will reach its End Of Life (EOL) soon. | `Update/EndOfLife.*.tmpl` |
| _cPanel Account Password_ | A user changes their password. | `ChangePassword/User.*.tmpl` |
| _cPanel Backup_ | WHM generates a backup. <br>Note:<br>This event does not apply to cPanel account backups that a cPanel user generates. | `Backup/Success.*.tmpl` |
| _cPanel Backup (legacy notification)_ | WHM generates a legacy backup. <br>Note:<br>This event does not apply to cPanel account backups that a cPanel user generates. | `Backup/Success.*.tmpl` |
| _cPanel Backup Destination Disabled_ | A user disables a backup destination. | `Backup/Disabled.*.tmpl` |
| _cPanel Backup Destination Disabled (legacy notification)_ | A user disables a legacy backup destination. | `Backup/Disabled.*.tmpl` |
| _cPanel Configuration Checks_ | The system **cannot** find the `/var/cpanel/cpanel.config` file and also **cannot** find the `cpanel.config.cache` file. | `Config/CpConfGuard.*.tmpl` |
| _cPanel service SSL certificate warnings_ | The usr/local/cpanel/bin/checkallssl script detected issues with the cPanel & WHM services’ SSL certificates. | `SSL/CheckAllCertsWarnings.*.tmpl` |
| _cPanel Update Failures_ | The cPanel & WHM system fails to update. | - `upcp/Killed.*.tmpl`<br>- `upcp/MaintenanceFailed.*.tmpl`<br>- `upcp/PostSyncCleanupFailed.*.tmpl`<br>- `upcp/UpdateNowFailed.*.tmpl` |
| _cPHulk Configuration Issues_ | [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) experiences configuration issues. | `Install/FixcPHulkConf.*.tmpl` |
| _cPHulk Database Integrity Notices_ | [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) detects database corruption issues. | `Install/CheckcPHulkDB.*.tmpl` |
| _cPHulkd Brute Force_ | [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) detects a brute force attempt. | `cPHulk/BruteForce.*.tmpl` |
| _cPHulkd Login Notifications_ | The system detects a login with the `root` account. <br>Note:<br>This option is **not** available if [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) is disabled. | `cPHulk/Login.*.tmpl` |
| _cPHulkd Notifications_ | [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) generates an alert. <br>Note:<br>The system sends a notice only **once** in a 24-hour window for a specific username, service, and IP address combination. | `cPHulk/Login.*.tmpl` |
| _dbindex Cache File Out Of Date_ | The `dbindex` cache file is out-of-date by more than four hours. | `dbindex/Warn.*.tmpl` |
| _Digest Authentication Disabled Due to Account Rename_ | An account’s domain name changes and the system notifies the system administrator that it has disabled Digest Authentication. | `DigestAuth/Disable.*.tmpl` |
| _Disk Integrity Check_ | The system checks the integrity of a hard disk. | `Check/Smart.*.tmpl` |
| _Disk Usage Warnings_ | Disk usage notifications. | `chkservd/DiskUsage.*.tmpl` |
| _DNS Cluster Error_ | The system encounters an error with the [DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster). | `DnsAdmin/ClusterError.*.tmpl` |
| _DNS Resolver Performance Issues_ | The server’s DNS resolvers respond slowly or do not respond at all. | `Check/Resolvers.*.tmpl` |
| _DNSSEC key synchronization failure_ | DNSSEC keys don’t sync properly. This means servers in a DNS cluster don’t currently serve DNSSEC records for a DNS zone. | `DnsAdmin/DnssecError.*.tmpl` |
| _Dovecot Solr maintenance task errors._ | The `/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_maintenance` script fails. For more information, read our [The /usr/local/cpanel/3rdparty/scripts/cpanel\_dovecot\_solr\_maintenance Script](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script) documentation. | `Solr/Maintenance.*.tmpl` |
| _EasyApache 4 conflict removed_ | [EasyApache 4](https://docs.cpanel.net/ea4) attempts to resolve a package conflict. | `EasyApache/EA4_ConflictRemove.*.tmpl` |
| _EasyApache 4 template updated_ | The system detects an updated [EasyApache 4](https://docs.cpanel.net/ea4) template. | `EasyApache/EA4_TemplateCheckUpdated.*.tmpl` |
| _EasyApache Configuration_ | [EasyApache 4](https://docs.cpanel.net/ea4) encounters a missing handler. | `EasyApache/EA4_LangHandlerMissing.*.tmpl` |
| _Email Client Configuration_ | The system sends the mail client configuration file to a new mail user. | `Mail/ClientConfig.*.tmpl` |
| _Exim Update Failures_ | Exim fails to update. | `Check/EximConfig.*.tmpl` |
| _Filesystem quotas are currently broken._ | The system cannot enable disk quotas automatically. <br>Note:<br>This notification only affects systems that run Ubuntu®. | `Quota/Broken.*.tmpl` |
| _Filesystem Quotas Ready_ | The system successfully finishes the process to enable filesystem quotas. <br>Note:<br>Because the system automatically enables filesystem quotas for all new installations of cPanel & WHM, you will receive this notification during the installation process. | `Quota/SetupComplete.*.tmpl` |
| _Forced Disable of Digest Auth_ | A user or the system disables the [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) feature. | `Accounts/DigestAuthResetNeeded.*.tmpl` |
| _Generic Notifications_ | Any event that generates an alert and does not appear this list. | N/A |
| _Greylist System Changes_ | An administrator or the system removes a mail provider from the Greylisting Common Mail Providers list. | `Greylist/CommonProviderRemoval.*.tmpl` |
| _Hostname conflicts with a cPanel user account_ | The server’s hostname is identical to a cPanel user account’s site. | `Check/HostnameOwnedByUser.*.tmpl` |
| _Hostname’s SSL certificate expiring on a linked node_ | The system will send a notice when a linked node’s hostname SSL certificate will soon expire. | `SSL/LinkedNodeCertificateExpiring.*.tmpl` |
| _Hung Service Checks_ | The system detects a hung device and restarts it. | `chkservd/Hang.*.tmpl` |
| _Initial Website Creation_ | Website setup notifications. | `InitialWebsite/Creation.*.tmpl` |
| _Installation of purchased SSL certificates_ | The system installs SSL certificates that a user purchases through the cPanel Market. | `Market/SSLWebInstall.*.tmpl` |
| _Installation of purchased WHM Plugins._ | The system fails to install a WHM plugin that a user purchases through the [cPanel Store](https://store.cpanel.net/). | `Market/WHMPluginInstall.*.tmpl` |
| _Instant Message Failure_ | The system fails to send a notification via an instant message. | `iContact/SendIMFailed.*.tmpl` |
| _Invalid Domains_ | The system detects invalid domains. | `Check/InvalidDomains.*.tmpl` |
| _Invalid Hostname For Main IP Address_ | The system cannot resolve the hostname to the correct IP address. | `Check/ValidServerHostname.*.tmpl` |
| _IP Address DNS Check_ | The system runs the `/usr/local/cpanel/scripts/ipcheck` script. | `Check/IP.*.tmpl` |
| _Kernel Crash Check_ | The system finds specific errors in the output of the `dmesg` command. | `Check/Oops.*.tmpl` |
| _Large Amount of Outbound Email Detected_ | A mail user exceeds the preconfigured threshold of 500 unique outbound messages (excludes mailing lists). The system either takes no action, holds, or rejects additional messages. You can configure the action that the system performs when a domain exceeds this threshold with the _Select the action for the system to take on an email account when it detects a potential spammer_ setting in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | `Mail/SpammersDetected.*.tmpl` |
| _Legacy EA3 RPMs Installed List_ | The system detected that legacy EasyApache 3 RPMs still exist on the server. <br>Note:<br>The system only sends this notification one time. | `Deprecated/EA3RPMs.*.tmpl` |
| _Local configuration template detected upon service upgrade_ | The system detected a local custom configuration template for a service during an upgrade (for example, [Dovecot](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#add-dovecot-settings)). | `Check/LocalConfTemplate.*.tmpl` |
| _Lost Contact With DNS Cluster_ | The system could not contact a server in the [DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster). | `DnsAdmin/UnreachablePeer.*.tmpl` |
| _Mail Server Out of Memory_ | The mail server runs out of memory while it processes mail for an account. | `MailServer/OOM.*.tmpl` |
| _Mailbox Usage Warning_ | Mailbox quota warning notifications for a single mailbox. | `Quota/MailboxWarning.*.tmpl` |
| _Maximum Hourly Emails Exceeded_ | A domain exceeds the threshold for the maximum number of sent emails in an hour. | `Mail/HourlyLimitExceeded.*.tmpl` |
| _Migrate PowerDNS configuration upon upgrade_ | The system upgraded PowerDNS, but it may contain configuration settings which require manual migration and adjustment. | `Check/PdnsConf.*.tmpl` |
| _Notices concerning goods and services purchased via the cPanel Market_ | An SSL certificate purchased through the cPanel Market needs validation. | `Market/SSLCertActionNeeded.*.tmpl` |
| _Notification of New Addon Domains_ | A user creates an addon domain. | `parkadmin/Notify.*.tmpl` |
| _Notifications of Outdated Software_ | The system detects outdated software. <br>Note:<br>These notifications are for applications on your server. You can control notices for cPanel & WHM updates with the _System Update Failures_ and _Update Failures_ settings. | `OutdatedSoftware/Notify.*.tmpl` |
| _Offload Functionality to a Child Node Failure_ | The system failed to offload functionality to a linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildDistributionFailure.*.tmpl` |
| _Offload Functionality to a Child Node Success_ | The system successfully offloaded functionality to a linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildDistributionSuccess.*.tmpl` |
| _Outgoing Email Threshold Exceeded_ | A domain exceeds the daily emails sent threshold defined by the _Number of emails a domain may send per day before the system sends a notification._ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | `Mail/SendLimitExceeded.*.tmpl` |
| _Package Extension Name Conflicts_ | The system renames a package extension and updates all dependent package extensions to use the new filename due to a name conflict. | `Install/PackageExtension.*.tmpl` |
| _PHP-FPM Account is over quota._ | An over-quota account prevents PHP-FPM from starting on a server that runs in a Virtuozzo environment. | `PHPFPM/AccountOverquota.*.tmpl` |
| _queueprocd Critical Errors_ | The Queue Processor daemon shuts down because of repeated critical errors. | `queueprocd/Notify.*.tmpl` |
| _Reboot To Enable Filesystem Quotas Reminder_ | The system requires a reboot in order to enable filesystem quotas. | `Quota/RebootRequired.*.tmpl` |
| _Remote MySQL Connection Failure_ | The system encounters a remote MySQL connection issue. | `Check/MysqlConnection.*.tmpl` |
| _Remote MySQL Server Notifications_ | The system does not support the version of MySQL® on a remote MySQL server. | `Install/CheckRemoteMySQLVersion.*.tmpl` |
| _Root Compromise Checks_ | The system detects that your server’s `root` account is compromised. | `Check/Hack.*.tmpl` |
| _Scheduled Backup Will Start Soon_ | The system sends this notification before it runs a backup. | `Backup/PreBackupNotice.*.tmpl` |
| _Script Terminated Due to Deprecated Call_ | The system performs a deprecated call within a script and terminates the script. | `Logger/Notify.*.tmpl` |
| _Security Advisor State Change_ | WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_) detects new issues with high importance. | `Check/SecurityAdvisorStateChange.*.tmpl` |
| _Service failures (ChkServd)_ | cPanel & WHM detects that a service fails, recovers, or times out. | `chkservd/Notify.*.tmpl` |
| _Service SSL Certificate Expiration_ | A service-level SSL certificate expires. | `Check/SSLCertExpired.*.tmpl` |
| _Service SSL Certificate Expires Soon_ | A service-level SSL certificate will expire soon. | `Check/SSLCertExpiresSoon.*.tmpl` |
| _SSHD Configuration Error_ | The system detects an attempt to change the `sshd_config` file. | `SSHD/ConfigError.*.tmpl` |
| _SSL certificates expiring_ | An account’s SSL certificate expires soon. | `SSL/CertificateExpiring.*.tmpl` |
| _Stalled Process Notifications_ | A user’s process stalls. | `OverLoad/CpuWatch.*.tmpl` |
| _Stalled Statistics and Bandwidth Process Notifications_ | A process stalls while it processes a user’s statistics and bandwidth data. | `OverLoad/LogRunner.*.tmpl` |
| _Stats and Bandwidth Processing Errors_ | A process experiences an error while it processes a user’s statistics and bandwidth data. | `Stats/Lagging.*.tmpl` |
| _Stuck Script_ | The system detects a stuck script. | `StuckScript/Notify.*.tmpl` |
| _System Log Approaches 2GB_ | A log file currently approaches 2 GB in size. | `Check/Biglog.*.tmpl` |
| _System Out Of Memory_ | The system terminates a process to avoid a crash due to low memory. | `chkservd/OOM.*.tmpl` |
| _System Update Failures_ | The system fails to update. | `sysup/Notify.*.tmpl` |
| _Transfer Offloaded Functionality between Child Nodes Failure_ | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) failed to offload functionality to a different linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildRedistributionFailure.*.tmpl` |
| _Transfer Offloaded Functionality between Child Nodes Success_ | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) successfully offloaded functionality to a different linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildRedistributionSuccess.*.tmpl` |
| _Transfer Offloaded Functionality from a Child Node Failure_ | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) failed to restore a cPanel account’s offloaded service functionality from a [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildDedistributionFailure.*.tmpl` |
| _Transfer Offloaded Functionality from a Child Node Success_ | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) successfully restored a cPanel account’s offloaded service functionality from a [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | `Accounts/ChildDedistributionSuccess.*.tmpl` |
| _Uncategorized Notifications_ | A notification that an existing notification type and template does not already handle. | `Application/base.*.tmpl` |
| _Unmonitored Services_ | Every two weeks, the system scans all active services and sends a notification that lists all of the unmonitored services. | `Check/UnmonitoredEnabledServices.*.tmpl` |
| _Update Blocker - Service Deprecation Notice_ | The cPanel & WHM update fails because of a deprecated service. | `Update/ServiceDeprecated.*.tmpl` |
| _Update Failure Due to Immutable Files_ | The system cannot update cPanel & WHM due to immutable files. | `Check/ImmutableFiles.*.tmpl` |
| _Update Failures_ | Update failure notifications. | `Update/Now.*.tmpl` |
| _Update Version Blocker_ | The system fails to update because of an [upgrade version blocker](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers). | `Update/Blocker.*.tmpl` |
| _Upgrade Required - Service Is Outdated_ | The system will automatically upgrade a service. | `Update/UpgradeRequired.*.tmpl` |
| _User Disabled Two-Factor Authentication_ | A user disables two-factor authentication. | `TwoFactorAuth/UserDisable.*.tmpl` |
| _User Disk Usage Warning_ | Users approach or reach their disk quota limits. | - `Quota/DiskWarning.*.tmpl`<br>- `Quota/List.*.tmpl` |
| _User Enabled Two-Factor Authentication_ | A user enables two-factor authentication. | `TwoFactorAuth/UserEnable.*.tmpl` |

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Contact Manager](https://docs.cpanel.net/whm/server-contacts/contact-manager/)
- [Edit System Mail Preferences](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/)
- [Email All Resellers](https://docs.cpanel.net/whm/resellers/email-all-resellers/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×