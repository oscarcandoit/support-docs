---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/"
title: "The cpanel.config File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. The cpanel.config File


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#overview)

* * *

[Cached values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#cached-values)

* * *

[Configuration setting validation](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#configuration-setting-validation)

* * *

[Absent cpanel.config file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#absent-cpanelconfig-file)

* * *

[Absent values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#absent-values)

* * *

[Invalid values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#invalid-values)

* * *

[Keys and default settings](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#keys-and-default-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#overview)

* * *

[Cached values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#cached-values)

* * *

[Configuration setting validation](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#configuration-setting-validation)

* * *

[Absent cpanel.config file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#absent-cpanelconfig-file)

* * *

[Absent values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#absent-values)

* * *

[Invalid values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#invalid-values)

* * *

[Keys and default settings](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/#keys-and-default-settings)

* * *

## The cpanel.config File

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/110/)

#### [112](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/112/)

#### [116](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/116/)

#### [118](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/118/)

#### [120](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/120/)

#### [124](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/124/)

#### [128](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/128/)

#### [130](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)

Last modified: _2025 February 4_

* * *

## Overview

The `/var/cpanel/cpanel.config` file stores settings for WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

Note:

You can preconfigure settings before you install cPanel & WHM. For more information, read our [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation) documentation.

## Cached values

To improve performance, the system caches the `/var/cpanel/cpanel.config` file’s settings in the `/var/cpanel/cpanel.config.cache` file. This file updates each time that the `/var/cpanel/cpanel.config` file updates, to keep the cached settings up-to-date.

## Configuration setting validation

The settings in the `/var/cpanel/cpanel.config` file use the `key=value` format. The system validates each `key=value` pair whenever you edit these settings. If the system encounters problems during validation, it takes other actions.

### Absent cpanel.config file

If the entire `/var/cpanel/cpanel.config` file does not exist:

1. The server copies the default `/usr/local/cpanel/etc/cpanel.config` file and saves it as the `/var/cpanel/cpanel.config` file.
2. The server copies the `/var/cpanel/cpanel.config.cache` file. If the system cannot find the `/var/cpanel/cpanel.config.cache` file, it will regenerate both the `/var/cpanel/cpanel.config.cache` and `/var/cpanel/cpanel.config` files.
3. For any unset dynamic values, the server attempts to guess the correct value. For example, to set the `mailserver` value, the server checks whether your system uses the `dovecot` package.
4. The server logs the changes to the `/usr/local/cpanel/logs/error_log` file.

### Absent values

If a key doesn’t exist in the `/var/cpanel/cpanel.config` file, the server attempts to generate a value from the following sources in the following order:

1. The server copies the `key=value` pair from the `/var/cpanel/cpanel.config.cache` file, if it exists.
2. If the key’s value is static and it doesn’t exist in the `/var/cpanel/cpanel.config.cache` file, the system copies the `key=value` pair from the `/usr/local/cpanel/etc/cpanel.config` file.
3. If the key’s value is dynamic and it doesn’t exist in the `/var/cpanel/cpanel.config.cache` file, the server calculates a value.
4. The server logs the changes to the `/usr/local/cpanel/logs/error_log` file.

### Invalid values

If one or more of the following values are invalid, the server tries to replace them with valid values:

- `local_nameserver_type`
- `mailserver`
- `ftpserver`

## Keys and default settings

Note:

You can find the default values for these keys in the `/usr/local/cpanel/etc/cpanel.config` file.

| Key | Tweak Settings section | Setting or description | Default and validation requirements |
| --- | --- | --- | --- |
| `access_log` | No _Tweak Settings_ equivalent. | This sets the location of cPanel’s [_Raw Access_](https://docs.cpanel.net/cpanel/metrics/raw-access) logs. These logs store general information about cPanel access requests. | `/usr/local/cpanel/logs/access_log` |
| `account_login_access` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Accounts that can access a cPanel user account:_ | `owner_root`<br>Warning:<br>**Only** set this value to `owner`, `owner_root`, or `user`. |
| `allow_deprecated_accesshash` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Allow deprecated WHM accesshash authentication_ | `0`<br>Warning:<br>We deprecated WHM’s _Remote Access Key_ feature in cPanel & WHM version 64. We **strongly** recommend that you use API tokens instead. |
| `allow_login_autocomplete` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Allow autocomplete for login screens._ | `1` |
| `allow_server_info_status_from` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Allow server-info and server-status_ | _(an empty string)_ |
| `allowcpsslinstall` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Allow cPanel users to install SSL Hosts._ | `1`<br>Warning:<br>If you set this value to `0`, cPanel users can’t enable the _Force HTTPS Redirects_ option for any domain in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains) interface ( _cPanel » Home » Domains » Domains_). |
| `allowparkhostnamedomainsubdomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow users to park subdomains of the server’s hostname._ | `0` |
| `allowparkonothers` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow cPanel users to create subdomains across accounts_ | `0` |
| `allowremotedomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow Remote Domains_ | `0` |
| `allowresellershostnamedomainsubdomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow resellers to create accounts with subdomains of the server’s hostname._ | `0` |
| `allowunregistereddomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow unregistered domains_ | `0` |
| `allowwhmparkonothers` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Allow WHM users to create subdomains across accounts_ | `0` |
| `alwaysredirecttossl` | [_Redirection_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#redirection) | _Choose the closest matched domain for which that the system has a valid certificate when redirecting from non-SSL to SSL URLs. Formerly known as “Always redirect to SSL/TLS”_ | `1` |
| `apache_port` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Apache non-SSL IP/port_ | `0.0.0.0:80` |
| `apache_ssl_port` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Apache SSL port_ | `0.0.0.0:443` |
| `api_shell` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _cPanel & WHM API shell (for developers)_ | `0` |
| `autocreateaentries` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Automatically add A entries for registered nameservers when creating a new zone_ | `1` |
| `autodiscover_host` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Host to publish in the SRV records for Outlook autodiscover support._ | `cpanelemaildiscovery.cpanel.net` |
| `autodiscover_mail_service` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Preferred mail service to configure to use for Thunderbird and Outlook autodiscover and autoconfig support_ | `imap` |
| `autodiscover_proxy_subdomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ | `0`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `autoupdate_certificate_on_hostname_mismatch` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Replace service SSL certificates that do not match the local hostname_ | `1` |
| `awstatsbrowserupdate` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Allow users to update Awstats from cPanel_ | `0` |
| `awstatsreversedns` | [_Stats Programs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-programs) | _Awstats reverse DNS resolution_ | `0` |
| `bind_deferred_restart_time` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _DNS server reload deferral time_ | `2` |
| `blockcommondomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Prevent cPanel users from creating specific domains_ | `1` |
| `bwcycle` | No _Tweak Settings_ equivalent. | This configures the bandwidth cycle for statistics. You can change this value in WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_). | `2`<br>Note:<br>When your server validates the `cpanel.config` file, it rounds this value to the nearest quarter hour. |
| `cgihidepass` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Hide login password from cgi scripts_ | `0` |
| `check_zone_owner` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Check zone owner_ | `1` |
| `check_zone_syntax` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Check zone syntax_ | `1` |
| `chkservd_check_interval` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _The number of seconds between ChkServd service checks._ | `300` |
| `chkservd_hang_allowed_intervals` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _The number of times ChkServd allows a previous check to complete before termination._ | `2` |
| `chkservd_plaintext_notify` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _The option to enable or disable ChkServd HTML notifications._ | `0` |
| `cluster_autodisable_threshold` | No _Tweak Settings_ equivalent. | This sets a number of failed `dnsadmin` commands. After reaching this number, the system disables that DNS cluster member. You can change this value via the _Failure threshold for cluster members_ setting in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_). | `10` |
| `cluster_failure_notifications` | No _Tweak Settings_ equivalent. | This sets whether to send an email if the system disables a DNS cluster member. You can change this value via the _Receive a notification when WHM disables an unresponsive cluster member_ setting in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_). | `1` |
| `conserve_memory` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Conserve memory_ | `0`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `cookieipvalidation` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Cookie IP validation_ | `strict` |
| `copy_default_error_documents` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Copy default error documents to docroot for new accounts, addon domains, and subdomains_ | `0` |
| `coredump` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Generate core dumps_ | `0` |
| `cpaddons_adminemail` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _cPAddons Site Software admin email_ | _(an empty string)_ |
| `cpaddons_autoupdate` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _cPAddons Site Software source automatic updates_ | `1` |
| `cpaddons_max_moderation_req_all_mod` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Max cPAddons Site Software installation requests_ | `99` |
| `cpaddons_max_moderation_req_per_mod` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Max cPAddons Site Software installation requests per addon_ | `99` |
| `cpaddons_moderation_request` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _cPAddons Site Software moderation notification_ | `0` |
| `cpaddons_no_3rd_party` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Allow cPAddons Site Software installations from non-cPanel sources_ | `0` |
| `cpaddons_no_modified_cpanel` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Allow cPAddons Site Software installations from modified sources_ | `1` |
| `cpaddons_notify_owner` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Notify reseller of cPAddons Site Software installations_ | `1` |
| `cpaddons_notify_root` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Notify root of cPAddons Site Software installations_ | `1` |
| `cpaddons_notify_users` | [_cPAddons Site Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#cpaddons-site-software) | _Notify cPanel users when they need to update their cPAddons Site Software installations_ | `Allow users to choose` |
| `cpanel_locale` | No _Tweak Settings_ equivalent. | The `cpanel` user’s locale. | _(an empty string)_ |
| `cpredirect` | [_Redirection_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#redirection) | _Non-SSL redirect destination_ | `Origin Domain Name` |
| `cpredirectssl` | [_Redirection_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#redirection) | _SSL redirect destination_ | `SSL Certificate Name` |
| `cpsrvd-domainlookup` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _cpsrvd username domain lookup_ | `0` |
| `create_account_dkim` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Enable DKIM on domains for newly created accounts_ | `1` |
| `create_account_spf` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Enable SPF on domains for newly created accounts_<br>Note:<br>The `/scripts/enable_spf_dkim_globally` script allows you to enable SPF and DKIM for accounts that exist on the server, and to create the appropriate DNS records for their domains. For more information, read our [The `enable_spf_dkim_globally` Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script) documentation. | `1`<br>Note:<br>A `named` warning about the absence of SPF resource records on DNS may appear on servers that run CentOS 7 and Red Hat Enterprise Linux 7 operating systems.<br>For CentOS 7 and Red Hat Enterprise Linux 7 servers: <br>- This warning is **not** relevant.<br>- These servers use TXT records instead of SPF records.<br>  <br>For Red Hat Enterprise Linux 7.1 and CentOS 7.1 servers: <br>- This warning is relevant.<br>- Both contain `bind-9.9.4-23.el7`, an updated version of BIND, that complies with [RFC 7208](https://tools.ietf.org/html/rfc7208).<br>- To resolve this issue, you **must** update your operating system to a version that contains the updated version of BIND. For more information, read the [Red Hat Bugzilla case](https://bugzilla.redhat.com/show_bug.cgi?id=1215164) about SPF record errors. |
| `csp` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Enable Content-Security-Policy on some interfaces_ | `0` |
| `cycle_hours` | No _Tweak Settings_ equivalent. | This setting adjusts log processing frequency. You can change this value in WHM’s [_Statistics Software Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration) interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_). | `24`<br>Note:<br>When your server validates the `cpanel.config` file, the system rounds this value to the nearest quarter hour. |
| `database_prefix` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Require a username prefix on names of new databases and database users_ | `1` |
| `debughooks` | No _Tweak Settings_ equivalent. | This setting acts as a fallback setting for the values in the `/var/cpanel/debughooks` file. <br>- The _Standardized Hooks - Debug Mode_ setting in the _Development_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) controls this file.<br>- For more information, read our [Guide to Standardized Hooks - Debug Mode](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-debug-mode/) documentation. | `0` |
| `debugui` | [_Development_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#development) | _User Interface - Debug Mode_ | `0` |
| `default_archive-logs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Archive logs in the user’s home directory at the end of each stats run unless configured by the user._ | `1` |
| `default_login_theme` | [_Display_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#display) | _Default login theme_ | `cpanel` |
| `default_pkg_bwlimit` | [_Packages_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#packages) | _Default bandwidth limit for new packages_ | `1048576` |
| `default_pkg_max_emailacct_quota` | [_Packages_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#packages) | _Default maximum email quota for new packages_<br>Important:<br>This setting applies to each email account and **not** each cPanel account. | `1024` |
| `default_pkg_quota` | [_Packages_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#packages) | _Default disk usage quota for new packages_ | `10240` |
| `default_remove-old-archived-logs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Remove the previous month’s archived logs from the user’s home directory at the end of each month unless configured by the user._ | `1` |
| `defaultmailaction` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Initial default/catch-all forwarder destination_ | `localuser` |
| `disable_cphttpd` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Prevent cpsrvd from serving standard HTTP ports_ | `0` |
| `disable-php-as-reseller-security` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Allow PHP to be run when logged in as a reseller to WHM_ | `0` |
| `disablequotacache` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Cache disk quota information_ | `0` |
| `disk_usage_include_mailman` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Include mailman in disk usage calculations_ | `1` |
| `disk_usage_include_sqldbs` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Include databases in disk usage calculations_ | `1` |
| `display_cpanel_doclinks` | [_Support_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#support) | _Display documentation links in cPanel interface_ | `0` |
| `display_upgrade_opportunities` | [_Display_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#display) | _Display the Upgrade Opportunities column in WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts) interface (WHM » Home » Account Information » List Accounts)._ | `0` |
| `dns_recursive_query_pool_size` | [_Display_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#display) | _This setting restricts the maximum number of currently-active recursive DNS queries. Use this setting if your firewall imposes rate limits on DNS queries. These rate limits can degrade recursive DNS queries in applications such as AutoSSL._ | `10` |
| `dnsadmin_log` | [_Logging_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#logging) | _dnsadmin logging level_ | `0` |
| `dnsadmin_verbose_sync` | [_Logging_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#logging) | _Enable verbose logging of DNS zone syncing_ | `0` |
| `dnsadminapp` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _DNS request management application_ | `undef`<br>Note:<br>If this value is an empty string when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `dnslookuponconnect` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Reverse DNS lookup upon connect_ | `0` |
| `docroot` | No _Tweak Settings_ equivalent. | This setting specifies the document root for WHM. | `/usr/local/cpanel/base` |
| `domainowner_mail_pass` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Mail authentication via domain owner password_ | `0`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value through the interface. |
| `dormant_services` | [_Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#software) | _Dormant services_ | `cpdavd,cphulkd,cpsrvd,dnsadmin,spamd`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value through the interface. |
| `dumplogs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Delete each domain’s access logs after statistics are gathered_ | `1` |
| `email_account_quota_default_selected` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Default quota option for new email accounts_ | `userdefined` |
| `email_account_quota_userdefined_default_value` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Default user-defined quota value for new email accounts_ | `1024` |
| `email_outbound_spam_detect_action` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Select the action for the system to take on an email account when it detects a potential spammer._ | `noaction` |
| `email_outbound_spam_detect_enable` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Monitor the number of unique recipients per hour to detect potential spammers._ | `1` |
| `email_outbound_spam_detect_threshold` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Number of unique recipients per hour to trigger potential spammer notification._ | `500` |
| `email_send_limits_count_mailman` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Count mailman deliveries towards a domain’s Max hourly emails._ | `0` |
| `email_send_limits_defer_cutoff` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery._ | `125` |
| `email_send_limits_max_defer_fail_percentage` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Maximum percentage of failed or deferred messages a domain may send per hour_ | `undef` |
| `email_send_limits_min_defer_fail_to_trigger_protection` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Number of failed or deferred messages a domain may send before protections can be triggered_ | `5` |
| `emailarchive` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable Email Archiving support_ | `0` |
| `emailpasswords` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Send passwords when creating a new account_ | `0` |
| `emailsperdaynotify` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Number of emails a domain may send per day before the system sends a notification_ | No default value. |
| `emailusers_diskusage_critical_contact_admin` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Notify admin or reseller when disk quota reaches “critical” state_ | `1` |
| `emailusers_diskusage_critical_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Account disk quota “critical” percentage_ | `90`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusers_diskusage_full_contact_admin` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Notify admin or reseller when disk quota reaches “full” state_ | `1` |
| `emailusers_diskusage_full_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Account disk quota “full” percentage_ | `98`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusers_diskusage_warn_contact_admin` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Notify admin or reseller when disk quota reaches “warn” state_ | `0` |
| `emailusers_diskusage_warn_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Account disk quota “warn” percentage_ | `80`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusers_mailbox_critical_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Mailbox disk quota “critical” percentage_ | `90`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusers_mailbox_full_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Mailbox disk quota “full” percentage_ | `98`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusers_mailbox_warn_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Mailbox disk quota “warn” percentage_ | `80`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `emailusersbandwidthexceed` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Send bandwidth limit notification emails_ | `1` |
| `emailusersbandwidthexceed70` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 70%_ | `0` |
| `emailusersbandwidthexceed75` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 75%_ | `0` |
| `emailusersbandwidthexceed80` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 80%_ | `1` |
| `emailusersbandwidthexceed85` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 85%_ | `0` |
| `emailusersbandwidthexceed90` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 90%_ | `0` |
| `emailusersbandwidthexceed95` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 95%_ | `0` |
| `emailusersbandwidthexceed97` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 97%_ | `0` |
| `emailusersbandwidthexceed98` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 98%_ | `0` |
| `emailusersbandwidthexceed99` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth usage warning: 99%_ | `0` |
| `empty_trash_days` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Age, in days, of content to purge from users’ File Manager Trash_ | `disabled` |
| `enable_api_log` | [_Logging_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#logging) | _This setting allows you to log successful or failed cPanel API 1, successful cPanel API 2, and successful UAPI function calls. We store this log in the `/usr/local/cpanel/logs/api_log` file._ | `0` |
| `enablecompileroptimizations` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Enable optimizations for the C compiler_ | `0` |
| `enable_piped_logs` | No _Tweak Settings_ equivalent. | This sets whether to use piped logging with Apache. You can change this value in WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_). | `1` |
| `enablefileprotect` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Enable File Protect_ | `1` |
| `enforce_user_account_limits` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Enforce user account limits for resellers with the “Account Modification” ACL._ | `0` |
| `engine` | No _Tweak Settings_ equivalent. | This sets the name of the cPanel binary. | `cpanel`<br>Warning:<br>Do **not** modify this value. |
| `enginepl` | No _Tweak Settings_ equivalent. | This sets the name of the `cpanel.pl` file. | `cpanel.pl`<br>Warning:<br>Do **not** modify this value. |
| `engineroot` | No _Tweak Settings_ equivalent. | This sets the location of the cPanel binary. | `/usr/local/cpanel`<br>Warning:<br>Do **not** modify this value. |
| `exim_retention_days` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _The interval, in days, to retain Exim stats in the database_ | `10` |
| `exim-retrytime` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Email delivery retry time_ | `15` |
| `eximmailtrap` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Track email origin via X-Source email headers_ | `1`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `extracpus` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Extra CPUs for server load_ | `0` |
| `file_upload_max_bytes` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Max HTTP submission size_ | `undef`<br>Note:<br>If this value is `unlimited` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `file_upload_must_leave_bytes` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _File upload required free space_ | `5` |
| `file_usage` | [_Display_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#display) | _Display File Usage information in the cPanel stats bar (inode count)_ | `0` |
| `force_short_prefix` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Force short prefix for MySQL and MariaDB databases_ | `0` |
| `ftpquotacheck_expire_time` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Interval, in days, between rebuilds of the FTP quota and disk usage data (applies to Pure-FTPd only)_ | `30` |
| `ftpserver` | No _Tweak Settings_ equivalent. | This sets the FTP server. You can select an FTP server in WHM’s [_FTP Server Selection_](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection) interface ( _WHM » Home » Service Configuration » FTP Server Selection_). | `disabled`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `gzip_compression_level` | [_Compression_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#compression) | _gzip compression level_<br>Note:<br>This setting does **not** affect the [NGINX gzip package’s](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#gzip-compression) settings. | `6` |
| `gzip_pigz_block_size` | [_Compression_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#compression) | _Number of kilobyte chunks per compression work unit_<br>Note:<br>This setting does **not** affect the [NGINX gzip package’s](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#gzip-compression) settings. | `4096` |
| `gzip_pigz_processes` | [_Compression_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#compression) | _Number of pigz processes_<br>Note:<br>This setting does **not** affect the [NGINX gzip package’s](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#gzip-compression) settings. | `1`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `horde_cache_empty_days` | No _Tweak Settings_ equivalent. |  | `disabled` |
| `htaccess_check_recurse` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Depth to recurse for .htaccess checks_ | `2` |
| `httpd_deferred_restart_time` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _HTTPD deferred reload time_ | `0` |
| `invite_sub` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Account Invites for Subaccounts_ | `1` |
| `ionice_bandwidth_processing` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which bandwidth usage is processed_ | `6` |
| `ionice_cpbackup` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which nightly backups are run_ | `6` |
| `ionice_dovecot_maintenance` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which dovecot\_maintenance is run_ | `7` |
| `ionice_email_archive_maintenance` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which email\_archive\_maintenance is run_ | `7` |
| `ionice_ftpquotacheck` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which FTP quota checks are run (when Pure-FTPd is enabled)_ | `6` |
| `ionice_log_processing` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which stats logs are processed_ | `7` |
| `ionice_quotacheck` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which quota checks are run_ | `6` |
| `ionice_userbackup` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level at which cPanel-generated backups are run_ | `7` |
| `ionice_userproc` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _I/O priority level for user-initiated processes_ | `6` |
| `ipv6_control` | No _Tweak Settings_ equivalent. | _Control IPv6 Addresses_ | `0` |
| `ipv6_listen` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Listen on IPv6 Addresses_ | `0` |
| `jailapache` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell._ | `0` |
| `jaildefaultshell` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Use cPanel® jailshell by default_ | `0` |
| `jailmountbinsuid` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Jailed /bin mounted suid_<br>Note:<br>This setting has no effect on servers that run the CentOS 7, CloudLinux™ 7 or 8, AlmaLinux OS 8, Rocky Linux 8, Red Hat® Enterprise Linux® 7, or Ubuntu operating systems. | `0` |
| `jailmountusrbinsuid` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Jailed /usr/bin mounted suid_ | `0` |
| `jailprocmode` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Jailed /proc mount method_ | `mount_proc_jailed_fallback_full` |
| `keepftplogs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Keep master FTP log file_ | `0` |
| `keeplogs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Keep log files at the end of the month_ | `0` |
| `keepstatslog` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Keep stats logs_ | `0` |
| `loadthreshold` | [_Status_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#status) | _Critical load threshold_ | `undef`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `local_nameserver_type` | No _Tweak Settings_ equivalent. | This sets your nameserver’s type. You can select a nameserver type in WHM’s _[Nameserver Selection](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/)_ interface ( _WHM » Home » Service Configuration » Nameserver Selection_). | `powerdns`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `logchmod` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Apache log file chmod value_ | `0640` |
| `log_successful_logins` | [_Logging_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#logging) | _Log successful logins_ | `0` |
| `logout_redirect_url` | [_Redirection_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#redirection) | _Logout redirection URL_ | _(an empty string)_ |
| `mailbox_storage_format` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _The mailbox storage format for new accounts_ | `maildir` |
| `mailserver` | No _Tweak Settings_ equivalent. | This sets the mailserver type. | `dovecot`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `maintenance_rpm_version_check` | [_Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#software) | _Maintenance cPanel RPM Check_ | `1` |
| `maintenance_rpm_version_digest_check` | [_Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#software) | _Maintenance cPanel RPM Digest Check_ | `1` |
| `maxcpsrvdconnections` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Max cPanel/WHM/Webmail service handlers_ | `200`<br>Note:<br>If this value is less than `200` when your server validates the `cpanel.config` file, it will convert it to the default value. |
| `maxemailsperhour` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Max hourly emails per domain_ | `undef`<br>Note:<br>If this value evaluates to zero when your server validates the `cpanel.config` file, it will convert it to `undef`. |
| `maxmem` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Max cPanel process memory_ | `4096`<br>Note:<br>This value is dynamic. |
| `min_time_between_apache_graceful_restarts` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Minimum time between Apache graceful restarts._ | `10` |
| `minpwstrength` | No _Tweak Settings_ equivalent. | This sets the minimum strength for cPanel account passwords. You can set the minimum strength for cPanel users’ passwords in WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration) interface ( _WHM » Home » Security Center » Password Strength Configuration_). | `65`<br>Note:<br>When your server validates the `cpanel.config` file, it rounds this value to the nearest multiple of five. |
| `modsec_keep_hits` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _The number of days to keep records of ModSecurity® rule hits. (Use zero to keep forever)._ | `7` |
| `mycnf_auto_adjust_maxallowedpacket` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Allow cPanel & WHM to determine the best value for your MySQL max\_allowed\_packet configuration?_ | `1` |
| `mycnf_auto_adjust_openfiles_limit` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Allow cPanel & WHM to determine the best value for your MySQL open\_files\_limit configuration?_ | `1` |
| `mycnf_auto_adjust_innodb_buffer_pool_size` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Allow cPanel & WHM to determine the best value for your MySQL innodb\_buffer\_pool\_size configuration?_ | `0` |
| `mysql-version` | No _Tweak Settings_ equivalent. | This sets the MySQL® version. You can upgrade to a new MySQL version in WHM’s [_MariaDB/MySQL Upgrade_](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade) interface ( _WHM » Home » SQL Services » MariaDB/MySQL Upgrade_). | `undef`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `mysql-host` | No _Tweak Settings_ equivalent. | This sets the MySQL host. You can specify a remote MySQL host in cPanel’s [_Remote MySQL®_](https://docs.cpanel.net/cpanel/databases/remote-mysql) interface ( _cPanel » Home » Databases » Remote MySQL®_). | `localhost`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `nobodyspam` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Prevent “nobody” from sending mail_ | `1` |
| `nocpbackuplogs` | No _Tweak Settings_ equivalent. | This sets whether backups and log analysis run at the same time. You can modify this setting in WHM’s _[Statistics Software Configuration](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration)_ interface ( _WHM » Home » Server Configuration » Statistics Software Configuration_). | `0` |
| `nosendlangupdates` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Send language file changes to cPanel_ | `0` |
| `notify_expiring_certificates` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Send notifications when certificates approach expiry._ | `1` |
| `numacctlist` | [_Display_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#display) | _Number of accounts per page to display in “List Accounts”._ | `30`<br>Note:<br>If this value contains `all` (case-insensitive) when your server validates the `cpanel.config` file, it will convert it to `undef`. |
| `overwritecustomproxysubdomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Overwrite custom A records used for service subdomains_ | `0` |
| `overwritecustomsrvrecords` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Overwrite custom SRV records used by Outlook AutoDiscover support_ | `0` |
| `permit_appconfig_entries_without_acls` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _This setting allows WHM applications and addons to execute even if an ACL list has not been defined._ | `0` |
| `permit_appconfig_entries_without_features` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _This setting allows cPanel and Webmail applications and addons to execute even if a feature list has not been defined._ | `0` |
| `permit_unregistered_apps_as_reseller` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Allow apps that have not registered with AppConfig to be run when logged in as a reseller to WHM._ | `0` |
| `permit_unregistered_apps_as_root` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Allow apps that have not registered with AppConfig to be run when logged in as root or a reseller with the “all” ACL in WHM._ | `0` |
| `php_max_execution_time` | [_PHP_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#php) | _cPanel PHP max execution time_ | `90`<br>Note:<br>This key updates cPanel & WHM’s internal `php.ini` files. If you edit these files directly, the system will overwrite your changes. Use the PHP section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface to edit cPanel & WHM’s internal `php.ini` files. |
| `php_memory_limit` | [_PHP_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#php) | _cPanel PHP memory limit_ | `128`<br>Note:<br>This key updates cPanel & WHM’s internal `php.ini` files. If you edit these files directly, the system will overwrite your changes. Use the PHP section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface to edit cPanel & WHM’s internal `php.ini` files. |
| `php_post_max_size` | [_PHP_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#php) | _cPanel PHP max POST size_ | `55`<br>Note:<br>This key updates cPanel & WHM’s internal `php.ini` files. If you edit these files directly, the system will overwrite your changes. Use the PHP section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface to edit cPanel & WHM’s internal `php.ini` files. |
| `php_system_default_version` | No _Tweak Settings_ equivalent. | This sets the system’s default version of PHP. You can change this value in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_).<br>Note:<br>This setting does not exist in the `/usr/local/cpanel/etc/cpanel.config` file. | `ea-php81` |
| `php_upload_max_filesize` | [_PHP_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#php) | _cPanel PHP max upload size_ | `50`<br>Note:<br>This key updates cPanel & WHM’s internal `php.ini` files. If you edit these files directly, the system will overwrite your changes. Use the PHP section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface to edit cPanel & WHM’s internal `php.ini` files. |
| `phploader` | [_PHP_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#php) | _cPanel PHP loader_ | _(an empty string)_<br>Note:<br>This key updates cPanel & WHM’s internal `php.ini` files. If you edit these files directly, the system will overwrite your changes. Use the PHP section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#php) interface to edit cPanel & WHM’s internal `php.ini` files. |
| `phpopenbasedirhome` | No _Tweak Settings_ equivalent. | This setting enables or disables the `open_basedir` tweak. You can change this value in WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_). | `0` |
| `pma_disableis` | [_Software_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#software) | _Enable phpMyAdmin information schema searches_ | `0` |
| `popbeforesmtp` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Allow users to relay mail if they use an IP address through which someone has validated an IMAP or POP3 login within the last hour (Pop-before-SMTP)_ | `0` |
| `popbeforesmtpsenders` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Add X-PopBeforeSMTP header for mail sent via POP-before-SMTP_ | `0` |
| `product` | No _Tweak Settings_ equivalent. | This setting is unused. | `cPanel` |
| `proxysubdomains` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Service subdomains_ | `1`<br>Warning:<br>This value is dynamic. You must perform additional steps to update it manually. We recommend only modifying this value in the interface. |
| `proxysubdomainsoverride` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Service subdomain override_ | `1` |
| `publichtmlsubsonly` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Restrict document roots to public\_html_ | `1` |
| `query_apache_for_nobody_senders` | No _Tweak Settings_ equivalent. | This sets whether the system will try to find the real sender of messages that the nobody user sent. You can change this value via the _Query Apache server status to determine the sender of email sent from processes running as nobody_ setting in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_). | `1` |
| `referrerblanksafety` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Blank referrer safety check_ | `0` |
| `referrersafety` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Referrer safety check_ | `0` |
| `remotewhmtimeout` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Remote WHM timeout_ | `35` |
| `repquota_timeout` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Disk usage/quota bailout time_ | `60` |
| `requiressl` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Require SSL for cPanel Services_ | `1` |
| `resetpass` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Reset Password for cPanel accounts_ | `1` |
| `resetpass_sub` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Reset Password for Subaccounts_ | `1` |
| `root` | No _Tweak Settings_ equivalent. | This sets the location of the cPanel & WHM `root` installation. | `/usr/local/cpanel` |
| `rotatelogs_size_threshhold_in_megabytes` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Log rotation size threshold_ | `300` |
| `roundcube_db` | No _Tweak Settings_ equivalent. | This sets the type of database that Roundcube uses. | `sqlite` |
| `rpmup_allow_kernel` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Enable Linux kernel update during nightly maintenance._ | `0` |
| `RS` | No _Tweak Settings_ equivalent. | This sets the cPanel interface theme. | `jupiter` |
| `SecurityPolicy::PasswordAge` | No _Tweak Settings_ equivalent. | This enables password aging on the server. You can change this value via the _Password Age_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `SecurityPolicy::PasswordAge::maxage` | No _Tweak Settings_ equivalent. | This sets the maximum age, in days, of passwords on the server. You can change this value via the _Password Age_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `90` |
| `SecurityPolicy::PasswordStrength` | No _Tweak Settings_ equivalent. | This sets the required password strength for passwords on the server. You can change this value via the _Password Strength_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `SecurityPolicy::SourceIPCheck` | No _Tweak Settings_ equivalent. | This sets whether to allow unverified IP addresses to log in. You can change this value via the _Limit logins to verified IP addresses._ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `SecurityPolicy::TwoFactorAuth` | No _Tweak Settings_ equivalent. | This sets whether the system requires Two-Factor Authentication. You can change this value via the _Two-Factor Authentication_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `SecurityPolicy::dnsclustering` | No _Tweak Settings_ equivalent. | This sets whether to use your security settings for DNS clusters. You can change this value via the _DNS Cluster Requests_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `SecurityPolicy::xml-api` | No _Tweak Settings_ equivalent. | This sets whether to use your security settings for API requests. You can change this value via the _API requests_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_). <br>Note:<br>This setting may not appear in the `/var/cpanel/cpanel.config` file until you enable it in the interface. This setting also does not appear in the `/usr/local/cpanel/etc/cpanel.config` file. | `1` |
| `selfsigned_generation_for_bestavailable_ssl_install` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Generate a self signed SSL certificate if a CA signed certificate is not available when setting up new domains._ | `1` |
| `send_error_reports` | [_Support_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#support) | _Send error reports to cPanel for analysis_ | `0` |
| `server_locale` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Server Locale_ | `en` |
| `show_reboot_banner` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Display a message to reboot the server after essential software updates._ | `1` |
| `showwhmbwusageinmegs` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Show bandwidth usage in megabytes by default in WHM_ | `0` |
| `signature_validation` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Signature validation on assets downloaded from cPanel & WHM mirrors._ | `Release Keyring Only` |
| `skip_chkservd_recovery_notify` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _The option to enable or disable ChkServd recovery notifications._ | `0` |
| `skipanalog` | [_Stats Programs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-programs) | _Enable Analog stats_ | `0` |
| `skipapacheclientsoptimizer` | No _Tweak Settings_ equivalent. | This setting is unused. | `0` |
| `skipawstats` | [_Stats Programs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-programs) | _Enable Awstats stats_ | `0` |
| `skipboxcheck` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Enable mailbox usage warnings_ | `1` |
| `skipboxtrapper` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable BoxTrapper spam trap_ | `0` |
| `skipbwlimitcheck` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Bandwidth limit check_ | `0` |
| `skipchkservd` | No _Tweak Settings_ equivalent. | This sets whether to monitor the `chkservd` service. You can change this value via the _ChkServd_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipcpbandwd` | No _Tweak Settings_ equivalent. | This sets whether to monitor bandwidth. You can change this value via the _cPBandwd_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipdiskcheck` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Disk quota usage warnings_ | `0` |
| `skipdiskusage` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _System disk space usage warnings_ | `0` |
| `skipeximstats` | No _Tweak Settings_ equivalent. | This sets whether to monitor mail services. You can change this value via the _Eximstats_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipfirewall` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Do not make changes to the firewall during account modification._ | `0` |
| `skiphorde` | No _Tweak Settings_ equivalent. | Disable Horde when restoring a configuration file from backup. | `1` |
| `skiphttpauth` | No _Tweak Settings_ equivalent. | This setting skips HTTP authorization. | `1` |
| `skipjailmanager` | No _Tweak Settings_ equivalent. | This sets whether to monitor jailed shells. You can change this value via the _JailManager_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipmailauthoptimizer` | No _Tweak Settings_ equivalent. | You can change this value via the _MailAuthOptimizer_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipmailman` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable Mailman mailing lists_ | `0` |
| `skipmodseclog` | No _Tweak Settings_ equivalent. | This sets whether to monitor IP addresses for IMAP and POP3 sessions. You can change this value via the _RecentAuthedMailIp_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipoomcheck` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Out of memory warnings_ | `0` |
| `skipnotifyacctbackupfailure` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Send a notification when a user’s backup has errors_ | `0` |
| `skipparentcheck` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Allow other applications to run the cPanel and admin binaries_ | `0` |
| `skiprecentauthedmailiptracker` | No _Tweak Settings_ equivalent. | This sets whether to monitor ModSecurity logs. You can change this value via the _ModSecLog_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skiproundcube` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable Roundcube webmail_ | `0` |
| `skip_rules_added_by_configure_firewall_for_cpanel` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#system) | _Do not make changes to the firewall via scripts/configure\_firewall\_for\_cpanel._ | `0` |
| `skipspamassassin` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable Apache SpamAssassin™ spam filter_ | `0` |
| `skipspambox` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Enable Apache SpamAssassin™ Spam Box delivery for messages marked as spam (user configurable)_ | `0` |
| `skiptailwatchd` | No _Tweak Settings_ equivalent. | This sets whether to monitor the tailwatchd service. You can change this value via the _tailwatchd_ setting in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | `0` |
| `skipwebalizer` | [_Stats Programs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-programs) | _Enable Webalizer stats_ | `0` |
| `smtpmailgidonly` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Restrict outgoing SMTP to root, exim, and mailman (FKA SMTP Tweak)_ | `1` |
| `ssh_host_key_checking` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Enable strict SSH host key checking_ | `0` |
| `ssl_default_key_type` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | The type of key that the system will create by default for SSL/TLS certificates and signing requests.<br>- `rsa-2048`<br>- `rsa-4096`<br>- `ecdsa-prime256v1`<br>- `ecdsa-secp384r1` | `rsa-2048` |
| `statsloglevel` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Stats log level_ | `1` |
| `stats_log` | No _Tweak Settings_ equivalent. | This setting specifies the location of the `stats_log` file. | `/usr/local/cpanel/logs/stats_log` |
| `statthreshhold` | No _Tweak Settings_ equivalent. | This sets the minimum amount of disk space to process statistics. <br>Note:<br>If an account doesn’t meet this minimum, the system doesn’t process statistics for it. | `256` |
| `system_diskusage_critical_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Account system disk usage “critical” percentage_ | `92.55` |
| `system_diskusage_warn_percent` | [_Notifications_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#notifications) | _Account system disk usage “warn” percentage_ | `82.55` |
| `tcp_check_failure_threshold` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _ChkServd TCP check failure threshold_ | `3`<br>Note:<br>If this value is `0` when your server validates the `cpanel.config` file, the system converts it to `undef`. |
| `transfers_timeout` | [_System_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#system) | _Number of seconds an SSH connection related to an account transfer may be inactive before timing out_ | `1800` |
| `tweak_unset_vars` | No _Tweak Settings_ equivalent. | This sets which items display warning icons in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). | No default value. <br>Note:<br>The system **only** uses this value internally. |
| `upcp_log_retention_days` | [_Stats and Logs_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#stats-and-logs) | _Number of days to retain upcp logs before purging them_ | `45` |
| `update_log_analysis_retention_length` | [_Support_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#support) | _Update analysis retention interval_ | `90` |
| `use_apache_md5_for_htaccess` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Use MD5 passwords with Apache_ | `1` |
| `use_information_schema` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Use INFORMATION\_SCHEMA to acquire MySQL disk usage_ | `1` |
| `useauthnameservers` | [_Domains_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) | _Always use authoritative (registered) nameservers when creating a new DNS zone._ | `0` |
| `usemailformailmanurl` | [_Mail_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) | _Prefix “mail.” onto Mailman URLs_ | `0` |
| `usemysqloldpass` | [_SQL_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#sql) | _Use pre-4.1-style MySQL® passwords_ | `0` |
| `userdirprotect` | No _Tweak Settings_ equivalent. | This setting enables or disables the `mod_userdir` tweak. You can change this setting in WHM’s [_Apache mod\_userdir Tweak_](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak) interface ( _WHM » Home » Security Center » Apache mod\_userdir Tweak_). | `1` |
| `verify_3rdparty_cpaddons` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Verify signatures of 3rdparty cPaddons._ | `0` |
| `version` | No _Tweak Settings_ equivalent. | This setting is unused. | `3.4` |
| `VFILTERDIR` | No _Tweak Settings_ equivalent. | This sets the location of the Exim email filter storage directory. | `/etc/vfilters` |
| `xframecpsrvd` | [_Security_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#security) | _Use X-Frame-Options and X-Content-Type-Options headers with cpsrvd_ | `1` |

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×