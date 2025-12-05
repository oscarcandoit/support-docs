---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/"
title: "Notification Templates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Notification Templates


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [contact](https://docs.cpanel.net/tags/contact/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#overview)

* * *

[Available notification templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#available-notification-templates)

* * *

[Notification types](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#notification-types)

* * *

[Notification names](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#notification-names)

* * *

[Additional templates and resources](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#additional-templates-and-resources)

* * *

[Available variables](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#available-variables)

* * *

[Customize a template](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#customize-a-template)

* * *

[Example](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#overview)

* * *

[Available notification templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#available-notification-templates)

* * *

[Notification types](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#notification-types)

* * *

[Notification names](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#notification-names)

* * *

[Additional templates and resources](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#additional-templates-and-resources)

* * *

[Available variables](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#available-variables)

* * *

[Customize a template](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#customize-a-template)

* * *

[Example](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#example)

* * *

## Notification Templates

_Valid for versions 116 through 118_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/110/)

#### [112](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/112/)

#### [114](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/114/)

#### [116](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/)

#### [120](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)

Last modified: _2024 August 15_

* * *

## Overview

cPanel & WHM can send alerts to users for various reasons (for example, when someone changes their account settings or an account approaches a quota). You can select the notifications that an account receives with the following interfaces:

- cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) interface ( _cPanel » Home » Preferences » Contact Information_).

- The _Notifications_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

- WHM’s [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_).


The notifications use Template Toolkit templates that hosting providers can customize. For example, you can add your logo to a notification, or include a link to your support website. This document explains which notification templates exist and how to customize them.

## Available notification templates

cPanel & WHM stores the templates in subdirectories under the `/usr/local/cpanel/etc/icontact_templates/` directory. Each subdirectory’s name represents the module that triggers the alert.

Warning:

The system will **overwrite** any changes that you make to the templates in this directory. For more information about the custom templates directory, read the [_Customize a template_](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/116/#customize-a-template) section below.

These templates use the `notification_name.type.tmpl` naming convention, where `notification_name` represents the name of the notification that triggers the alert and `type` represents the type of template.

### Notification types

Notification templates use the following types:

- `subject` — Subject line template, which allows you to configure the subject line of the message.
- `html` or `text` — Message body template, which allows you to configure the body of the message.
- `html` — HTML version.
- `text` — Plaintext version.
- If the text template does not exist, the system will derive the text template from the HTML template.

Note:

Additional WP Toolkit notification templates may be available based on third-party installations. For more information, read Plesk’s [WP Toolkit](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/wp-toolkit-in-plesk.73391/) documentation.

### Notification names

The system uses the following notification templates:

| Template file | Description | Interface setting |
| --- | --- | --- |
| `Accounts/ChildDedistributionFailure.*.tmpl` | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) failed to restore a cPanel account’s offloaded service functionality from a [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Transfer Offloaded Functionality from a Child Node Failure_ |
| `Accounts/ChildDedistributionSuccess.*.tmpl` | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) successfully restored a cPanel account’s offloaded service functionality from a [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Transfer Offloaded Functionality from a Child Node Success_ |
| `Accounts/ChildDistributionFailure.*.tmpl` | The system failed to offload functionality to a linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Offload Functionality to a Child Node Failure_ |
| `Accounts/ChildDistributionSuccess.*.tmpl` | The system successfully offloaded functionality to a linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Offload Functionality to a Child Node Success_ |
| `Accounts/ChildRedistributionFailure.*.tmpl` | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) failed to offload functionality to a different linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Transfer Offloaded Functionality between Child Nodes Failure_ |
| `Accounts/ChildRedistributionSuccess.*.tmpl` | A [parent server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) successfully offloaded functionality to a different linked cPanel & WHM [child server node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Transfer Offloaded Functionality between Child Nodes Success_ |
| `Accounts/DigestAuthResetNeeded.*.tmpl` | An account’s domain name changes and the system notifies the system administrator that it disabled Digest Authentication. This notification template uses the `DigestAuthResetNeeded.body.html.tmpl` sub-template from the `Accounts/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Forced Disable of Digest Auth_ |
| `AdminBin/FullBackup.*.tmpl` | An account experiences a backup failure. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Failure_ |
| `appconfig/Notify.*.tmpl` | Application notifications for plugin installations. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AppConfig registration notifications_ |
| `Application/base.*.tmpl` | A notification that an existing notification type and template does not monitor. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Uncategorized Notifications_ |
| `AutoSSL/CertificateExpiring.*.tmpl` | AutoSSL fails to request a certificate because all of the website’s domains have failed DCV. This notification template uses the following sub-templates from the `AutoSSL/includes` directory: <br>- `autossl_problems_table.tmpl`<br>- `autossl_queue_table.tmpl` | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL cannot request a certificate because all of the website’s domains have failed DCV (Domain Control Validation)._ |
| `AutoSSL/CertificateExpiringCoverage.*.tmpl` | AutoSSL defers normal certificate renewal because a domain on the current certificate failed DCV. This notification template uses the following sub-templates from the `AutoSSL/includes` directory: <br>- `autossl_problems_table.tmpl`<br>- `autossl_queue_table.tmpl` | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL has deferred normal certificate renewal because a domain on the current certificate has failed DCV (Domain Control Validation)._ |
| `AutoSSL/CertificateInstalled.*.tmpl` | AutoSSL installs an SSL certificate. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL has installed a certificate successfully_ |
| `AutoSSL/CertificateInstalledReducedCoverage.*.tmpl` | AutoSSL renews a certificate, but the new certificate lacks at least one domain that the previous certificate secured. This notification template uses the `autossl_problems_table.tmpl` sub-template from the `AutoSSL/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL has renewed a certificate, but the new certificate lacks at least one domain that the previous certificate secured._ |
| `AutoSSL/CertificateInstalledUncoveredDomains.*.tmpl` | AutoSSL renewed a certificate, but the new certificate lacks one or more of the website’s domains. This notification template uses the ‘autossl\_problems\_table.tmpl’ sub-template from the AutoSSL/includes directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL has renewed a certificate, but the new certificate lacks one or more of the website’s domains._ |
| `AutoSSL/CertificateRenewalCoverage.*.tmpl` | AutoSSL will not secure new domains because a domain on the current certificate failed DCV (Domain Control Validation) and the certificate has not entered the renewal period. This notification template uses the `autossl_problems_table.tmpl` and `autossl_queue_table.tmpl` sub-templates from the `AutoSSL/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL will not secure new domains because a domain on the current certificate has failed DCV (Domain Control Validation), and the certificate is not yet in the renewal period._ |
| `AutoSSL/DynamicDNSNewCertificate.*.tmpl` | AutoSSL provisioned a new certificate for a specific dynamic DNS domain. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_AutoSSL has provisioned a new certificate for a dynamic DNS domain._ |
| `Backup/Delayed.*.tmpl` | The system delays a backup. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Delayed_ |
| `Backup/Disabled.*.tmpl` | The system disables a backup destination for an account. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPanel Backup Destination Disabled_ |
| `Backup/Failure.*.tmpl` | The system fails to finish a backup. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Failed To Finish_ |
| `Backup/PartialFailure.*.tmpl` | The system finishes a backup, but it encounters errors. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Successful_ |
| `Backup/PreBackupNotice.*.tmpl` | The system will begin a backup soon. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Scheduled Backup Will Start Soon_ |
| `Backup/Success.*.tmpl` | The system finishes a backup. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Successful_ |
| `Backup/Transport.*.tmpl` | A backup encounters transport errors. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Backup Transport Error_ |
| `BandwidthUsageExceeded/Owner.*.tmpl` | Bandwidth overage notifications for resellers of accounts. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Bandwidth Limits_ |
| `BandwidthUsageExceeded/User.*.tmpl` | Bandwidth overage notifications for accounts. | [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings)<br>_Notifications_ section. |
| `ChangePassword/NewUser.*.tmpl` | A password setup notification for new Subaccounts. | [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings)<br>_Account Invites for Subaccounts_ |
| `ChangePassword/ResetRequest.*.tmpl` | A user clicks the _Forgot Password_ link. | [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings)<br>- _Reset Password for Subaccounts_<br>- _Reset Password for cPanel accounts_ |
| `ChangePassword/User.*.tmpl` | A user changes their password. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPanel Account Password_ |
| `Check/Biglog.*.tmpl` | A log file uses almost 2 GB of disk space. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Log Approaches 2GB_ |
| `Check/CpanelPackages.*.tmpl` | The system finds altered packages that pose a security risk. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Altered Cpanel Packages Check_ |
| `Check/EximConfig.*.tmpl` | The system cannot automatically update Exim. This notification template uses the following sub-templates from the `Check/includes` directory: <br>- `EximConfig.ConfigAttached.html.tmpl`<br>- `EximConfig.PreserveCustomizationsHeading.html.tmpl`<br>- `EximConfig.ResetACLBlock.html.tmpl`<br>- `EximConfig.ResetAll.html.tmpl`<br>- `EximConfig.ResetCFReplaceInserts.html.tmpl`<br>- `EximConfig.ResetCustomACLS.html.tmpl`<br>- `EximConfig.ResetHeader.html.tmpl`<br>- `EximConfig.ResetInserts.html.tmpl`<br>- `EximConfig.UnableToInstallCritical.html.tmpl`<br>- `EximConfig.UnableToInstallNotCritical.html.tmpl`<br>- `EximConfig.UpdateSteps.html.tmpl`<br>- `EximConfig.WHMLoginSteps.html.tmpl` | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Exim Update Failures_ |
| `Check/Hack.*.tmpl` | The system detects a possible root compromise. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Root Compromise Checks_ |
| `Check/HostnameOwnedByUser.*.tmpl` | A user currently owns the server’s hostname. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Hostname Conflicts with a cPanel User Account_ |
| `Check/ImmutableFiles.*.tmpl` | The system cannot update cPanel & WHM due to immutable files. This notification template uses the `ImmutableFiles.action.message.html.tmpl` sub-template from the `Check/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Update Failure Due to Immutable Files_ |
| `Check/InvalidDomains.*.tmpl` | The system detects invalid domains. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Invalid Domains_ |
| `Check/IP.*.tmpl` | The system cannot resolve the hostname to the correct IP address. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_IP Address DNS Check_ |
| `Check/LocalConfTemplate.*.tmpl` | The system detected a local custom configuration template for a service during an upgrade (for example, [Dovecot](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/#add-dovecot-settings)). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Local configuration template detected upon upgrade_ |
| `Check/MySQL.*.tmpl` | The `check_mysql` script finds corrupted database tables. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Corrupt Database Tables_ |
| `Check/MysqlConnection.*.tmpl` | The system encounters a MySQL® connection issue. This notification template uses the following sub-templates from the `Check/includes` directory: <br>- `MysqlConnection.cannot_reset_remote_pass.html.tmpl`<br>- `MysqlConnection.reset_pass_failed.html.tmpl`<br>- `MysqlConnection.reset_pass_successful.html.tmpl`<br>- `MysqlConnection._unable_to_auth_error.html.tmpl`<br>- `MysqlConnection.unknown_error.html.tmpl` | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Remote MySQL Connection Failure_ |
| `Check/Oops.*.tmpl` | The kernel encounters an Oops error. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Kernel Crash Check_ |
| `Check/PdnsConf.*.tmpl` | The system upgraded PowerDNS, but it may contain configuration settings which require manual migration and adjustment. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Migrate PowerDNS Configuration Upon Upgrade_ |
| `Check/Resolvers.*.tmpl` | The server’s DNS resolvers respond slowly or do not respond at all. This notification template uses the `Resolvers.body.html.tmpl` and `Resolvers.subject.html.tmpl` sub-templates from the `Check/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_DNS Resolver Performance Issues_ |
| `Check/SecurityAdvisorStateChange.*.tmpl` | The Security Advisor feature detects new issues with high importance. This notification template uses the `SecurityAdvisorStateChange.body.html.tmpl` and `SecurityAdvisorStateChange.subject.html.tmpl` sub-templates from the `Check/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Security Advisor State Change_ |
| `Check/Smart.*.tmpl` | Smartcheck detects a possible hard drive failure. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Disk Integrity Check_ |
| `Check/SSLCertExpired.*.tmpl` | A domain’s SSL certificate expires. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Service SSL Certificate Expiration_ |
| `Check/SSLCertExpiresSoon.*.tmpl` | A domain’s SSL certificate will expire soon. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Service SSL Certificate Expires Soon_ |
| `Check/UnmonitoredEnabledServices.*.tmpl` | Every two weeks, the system scans all active services and sends a notification that lists all of the unmonitored services. This notification template uses the `UnmonitoredEnabledServices.body.html.tmpl` and `UnmonitoredEnabledServices.subject.html.tmpl` sub-template from the `Check/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Unmonitored Services_ |
| `Check/ValidServerHostname.*.tmpl` | The system detects an invalid hostname for the server’s main IP address. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Invalid Hostname For Main IP Address_ |
| `chkservd/DiskUsage.*.tmpl` | Disk usage notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Disk Usage Warnings_ |
| `chkservd/Hang.*.tmpl` | The system detects and restarts a hung device. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Hung Service Checks_ |
| `chkservd/Notify.*.tmpl` | Service status notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Service failures (ChkServd)_ |
| `chkservd/OOM.*.tmpl` | The system terminates a process to avoid a crash due to low memory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Out of Memory_ |
| `CloudLinux/Update.*.tmpl` | The system detects a CloudLinux™ license and provides installation instructions. This notification template uses the `Update.body.html.tmpl` sub-templates from the `CloudLinux/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_CloudLinux License Detected_ |
| `Config/CpConfGuard.*.tmpl` | The system restores the `cpanel.config` file from settings in the cache and configuration defaults file. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPanel Configuration Checks_ |
| `ContactInfo/Change.*.tmpl` | Contact information change notifications. | [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) |
| `ConvertAddon/ConversionCompleted.*.tmpl` | Convert addon domain to account notifications. | [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool)<br>_Convert Addon Domain to Account Notifications_ |
| `cPHulk/BruteForce.*.tmpl` | cPHulk brute force notifications.<br>Note:<br>cPHulk uses GeoLite2 data created by [MaxMind](https://www.maxmind.com/). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPHulkd Brute Force_ |
| `cPHulk/Login.*.tmpl` | Login notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPHulkd Notifications and Root login notifications (cpHulkd)_ |
| `dbindex/Warn.*.tmpl` | The `dbindex` cache file is out-of-date by more than four hours. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_dbindex Cache File Out Of Date_ |
| `DemoMode/MailChildNodeExists.*.tmpl` | A demo account is distributing mail to a child node. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Accounts with demo mode restrictions enabled and mail distributed to a child node._ |
| `DigestAuth/Disable.*.tmpl` | An account’s domain name changes and the system notifies the account owner that they must re-enable Digest Authentication. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Digest Authentication Disabled Due to Account Rename_ |
| `DnsAdmin/ClusterError.*.tmpl` | The system encounters an error with the DNS cluster. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_DNS Cluster Error_ |
| `DnsAdmin/DnssecError.*.tmpl` | DNSSEC keys don’t sync properly. This means servers in a DNS cluster don’t currently serve DNSSEC records for a DNS zone. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_DNSSEC key synchronization failure_ |
| `DnsAdmin/UnreachablePeer.*.tmpl` | The system could not contact a server in the DNS cluster. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Lost Contact With DNS Cluster_ |
| `EasyApache/EA4_ConflictRemove.*.tmpl` | EasyApache 4 attempts to resolve a package conflict. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_EasyApache 4 conflict removed_ |
| `EasyApache/EA4_LangHandlerMissing.*.tmpl` | EasyApache 4 encounters a missing handler. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_EasyApache Configuration_ |
| `EasyApache/EA4_TemplateCheckUpdated.*.tmpl` | The system detects an updated EasyApache 4 template. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_EasyApache 4 template updated_ |
| `Greylist/CommonProviderRemoval.*.tmpl` | The system removes a mail provider from the Greylisting Common Mail Providers list. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Greylist System Changes_ |
| `iContact/SendIMFailed.*.tmpl` | The system fails to send a notification via an instant message. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Instant Message Failure_ |
| `InitialWebsite/Creation.*.tmpl` | Website setup notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Initial Website Creation_ |
| `Install/CheckcPHulkDB.*.tmpl` | cPHulk detects database corruption issues. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPHulk Database Integrity Notices_ |
| `Install/CheckRemoteMySQLVersion.*.tmpl` | The system does not support the version of MySQL® on a remote MySQL server. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Remote MySQL Server Notifications_ |
| `Install/ClamavConnector.*.tmpl` | The rpm.versions system upgrades ClamAV. | N/A |
| `Install/DatabaseDeprecations.*.tmpl` | A notification about MySQL databases that cPanel & WHM deprecated. The system administrator can remove these databases when convenient. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Database Deprecation Notifications_ |
| `Install/FixcPHulkConf.*.tmpl` | The system repairs the cPHulk configuration. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPHulk Configuration Issues_ |
| `Install/PackageExtension.*.tmpl` | The system renames a package extension and updates all dependent package extensions to use the new filename due to a name conflict. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Package Extension Name Conflicts_ |
| `killacct/Notify.*.tmpl` | Account termination notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Removal_ |
| `killacct/PostTerminateCleanup.*.tmpl` | The system cleans up file permissions after a user termination. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Removal_ |
| `Logd/Notify.*.tmpl` | The system times out while it processed a domain’s bandwidth data. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Bandwidth Data Processing Timeout_ |
| `Logger/Notify.*.tmpl` | The system performs a deprecated call within a script and terminates the script. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Script Terminated Due to Deprecated Call_ |
| `Mail/ClientConfig.*.tmpl` | Send the mail client configuration file to a new mail user. This notification template uses the `clientconf_manual_settings_include.html.tt` sub-template from the `Mail/includes` directory. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Email Client Configuration_ |
| `Mail/HourlyLimitExceeded.*.tmpl` | A domain exceeds the hourly emails sent threshold in the _Max hourly emails per domain_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Maximum Hourly Emails Exceeded_ |
| `Mail/SendLimitExceeded.*.tmpl` | A domain exceeds the daily emails sent threshold in the Number of emails a domain may send per day before the system sends a notification. option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Outgoing Email Threshold Exceeded_ |
| `Mail/SpammersDetected.*.tmpl` | A mail user exceeds the preconfigured threshold of 500 unique outbound messages (excludes mailing lists). The system either takes no action, holds, or rejects additional messages. You can configure the action that the system performs when a domain exceeds this threshold with the _Select the action for the system to take on an email account when it detects a potential spammer_ setting in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Large Amount of Outbound Email Detected_ |
| `MailServer/OOM.*.tmpl` | The mail server runs out of memory while it processes mail for an account. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Mail Server Out of Memory_ |
| `Market/SSLCertActionNeeded.*.tmpl` | An SSL certificate purchased through the cPanel Market needs validation. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Notices concerning goods and services purchased via the cPanel Market_ |
| `Market/SSLWebInstall.*.tmpl` | The system attempts to download and install an SSL certificate that a cPanel user ordered through cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard) interface ( _cPanel » Home » Security » SSL/TLS Wizard_). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Installation of Purchased SSL Certificates_ |
| `Market/WHMPluginInstall.*.tmpl` | The system fails to install a WHM plugin that a cPanel user ordered through the [cPanel Store](https://store.cpanel.net/). | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Installation of purchased WHM Plugins._ |
| `OutdatedSoftware/Notify.*.tmpl` | The system detects outdated software. <br>Note:<br>Notices for cPanel & WHM updates exist in the `upcp` templates. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Notifications of Outdated Software_ |
| `OverLoad/CpuWatch.html.tmpl` | A user’s process stalls. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Stalled Process Notifications_ |
| `OverLoad/LogRunner.html.tmpl` | A process stalls while it processes a user’s statistics and bandwidth data. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Stalled Statistics and Bandwidth Process Notifications_ |
| `parkadmin/Notify.*.tmpl` | A user parks a domain on top of another domain. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Notification of New Addon Domains_ |
| `PHPFPM/AccountOverquota.*.tmpl` | An over-quota account prevents PHP-FPM from starting on a server that runs in a Virtuozzo environment. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_PHP-FPM Account is over quota._ |
| `queueprocd/Notify.*.tmpl` | The system must shut down the queueprocd daemon due to repeated exceptions. | N/A |
| `Quota/Broken.*.tmpl` | The system cannot enable disk quotas automatically. <br>Note:<br>This notification only affects systems that run Ubuntu®. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Filesystem quotas are currently broken._ |
| `Quota/DiskWarning.*.tmpl` | Disk quota warning notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_User Disk Usage Warning_ |
| `Quota/List.*.tmpl` | Mailbox quota warning notifications for multiple mailboxes. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_User Disk Usage Warning_ |
| `Quota/MailboxWarning.*.tmpl` | Mailbox quota warning notifications for a single mailbox. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Mailbox Usage Warning_ |
| `Quota/RebootRequired.*.tmpl` | The system requires a reboot in order to enable filesystem quotas. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Reboot To Enable Filesystem Quotas Reminder_ |
| `Quota/SetupComplete.*.tmpl` | The system successfully finishes the process to enable filesystem quotas. <br>Note:<br>Because the system automatically enables filesystem quotas for all new installations of cPanel & WHM, you will receive this notification during the installation process. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Filesystem Quotas Ready_ |
| `RPMVersions/Notify.*.tmpl` | The system converts settings in the `cpupdate.conf` file to settings in the `local.versions` file. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Conversion of cpupdate.conf settings to local.versions_ |
| `Security/AuthnMethodLinkedToAccount.*.tmpl` | A user links their cPanel account to an account at an external authentication provider. | [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information)<br>_An external account is linked to my account for authentication_ |
| `Solr/Maintenance.*.tmpl` | The [`/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_maintenance`](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script) script fails. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Dovecot Solr maintenance task errors_ |
| `SSHD/ConfigError.*.tmpl` | The system detects an attempt to change the `sshd_config` file. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_SSHD Configuration Error_ |
| `SSL/CertificateExpiring.*.tmpl` | An account’s SSL certificate expires soon. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_SSL certificates expiring_ |
| `SSL/CheckAllCertsWarnings.*.tmpl` | The `usr/local/cpanel/bin/checkallssl` script detected issues with the cPanel & WHM services’ SSL certificates. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPanel Service SSL certificate warnings_ |
| `SSL/LinkedNodeCertificateExpiring.*.tmpl` | The system will send a notice when a linked node’s hostname SSL certificate will soon expire. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Hostname’s SSL certificate expiring on a linked node_ |
| `Stats/Lagging.*.tmpl` | The system cannot maintain its log processing schedule because of an overload or unusually high levels of traffic. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Stats and Bandwidth Processing Errors_ |
| `StuckScript/Notify.*.tmpl` | The system detects a stuck script. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Stuck Script_ |
| `suspendacct/Notify.*.tmpl` | Account suspension notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Suspensions_ |
| `sysup/Notify.*.tmpl` | The system fails to update. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Update Failures_ |
| `TwoFactorAuth/UserDisable.*.tmpl` | A user disables two-factor authentication. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_User Disabled Two-Factor Authentication_ |
| `TwoFactorAuth/UserEnable.*.tmpl` | A user enables two-factor authentication. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_User Enabled Two-Factor Authentication_ |
| `unsuspendacct/Notify.*.tmpl` | Account unsuspension notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Unsuspensions_ |
| `upacct/Notify.*.tmpl` | Account modification notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Upgrades/Downgrades_ |
| `upcp/Killed.*.tmpl` | The system aborts or terminates an update of WHM. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Update Failures_ |
| `upcp/MaintenanceFailed.*.tmpl` | The `upcp` script fails to update WHM. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Update Failures_ |
| `upcp/PostSyncCleanupFailed.*.tmpl` | The system fails to finish the process after the `upcp` script updates WHM. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Update Failures_ |
| `upcp/UpdateNowFailed.*.tmpl` | The `updatenow` script fails to update the system. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_System Update Failures_ |
| `Update/Blocker.*.tmpl` | The system fails to update because of a version blocker. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Update Version Blocker_ |
| `Update/EndOfLife.*.tmpl` | The cPanel & WHM version that exists on the server will reach the End Of Life (EOL) tier soon. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_cPanel & WHM End of Life Notice_ |
| `Update/Now.*.tmpl` | Update failure notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Update Failures_ |
| `Update/ServiceDeprecated.*.tmpl` | The cPanel & WHM update fails because of a deprecated service. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Update Blocker - Service Deprecation Notice_ |
| `wwwacct/Notify.*.tmpl` | New account creation notifications. | [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager)<br>_Account Creation_ |

### Additional templates and resources

The system includes the following subdirectories:

- `include` — This directory contains several useful template snippets and icons in `.png` file format that you may wish to use in your templates.
- `wrapper` — The main notification template wrapper. This wrapper standardizes the format of each notification and it includes the header, body, and footer in the message. The standard footer contains links that allow the user to disable or change the importance of that type of notification.

If you plan to customize any templates, you **must** copy these two directories to the `/var/cpanel/templates/icontact_templates/` custom templates directory.

### Available variables

Notification templates use two kinds of variables: `CPANEL` and `NOTICE`.

#### CPANEL variables

All of the notification templates can use the following `CPANEL` variables:

- `locale (object)` — If the system directs this notification at a user, this variable returns the user’s locale. Otherwise, the variable returns the server’s locale.
- `split_time_dhms (function)` — This function converts a number of seconds into a four-member array that indicates days, hours, minutes, and seconds. Use this function to transform system times to human-readable times.

#### NOTICE variables

Each template lists its allowed `NOTICE` variables and their descriptions in the header comments.

For example, `[% NOTICE.ip_address %]` displays the IP address of a request.

## Customize a template

To customize a template, copy the desired template from the `/usr/local/cpanel/etc/icontact_templates/` directory to the `/var/cpanel/templates/icontact_templates/` custom templates directory, and make your changes to the copy.

The system uses templates in the custom templates directory before it uses templates from the original directory.

Warning:

You **must** store both of the following files in the `/var/cpanel/templates/icontact_templates/` directory:

- The customized wrapper template.
- The notification template that the wrapper customizes.

### Example

Note:

The following example demonstrates how to add the Example Hosting, Inc. company name to the subject line of account creation notifications.

To customize a template, perform the following steps:

1. Log in to the server via SSH as the `root` user.
2. If this is your first template customization, run the following command to make the custom templates directory and copy the files in the `include` and `wrapper` directories to the custom templates directory:



```bash
mkdir /var/cpanel/templates/icontact_templates && cp -rpl /usr/local/cpanel/etc/icontact_templates/{include,wrapper} /var/cpanel/templates/icontact_templates
```

3. Copy the `/usr/local/cpanel/etc/icontact_templates/wwwacct/Notify.subject.tmpl` file to the `/var/cpanel/templates/icontact_templates/wwwacct/Notify.subject.tmpl` file.
4. Open the `/var/cpanel/templates/icontact_templates/wwwacct/Notify.subject.tmpl` file in a text editor and locate the following entry:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>[%-<br> CPANEL.locale.maketext(‘New account on [_1] ([_2])’, NOTICE.host_server,NOTICE.domain);<br>-%]<br>``` |

5. Edit the entry from step 4 in the `Notify.subject.tmpl` file to appear similar to the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>[%-<br> CPANEL.locale.maketext(‘Example Hosting, Inc.: New account on [_1] ([_2])’, NOTICE.host_server,NOTICE.domain);<br>-%]<br>``` |

6. Run the following command to rebuild the files:



```bash
/usr/local/cpanel/bin/rebuild-templates
```


#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)