---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/"
title: "cPanel Analytics - The Data We Use | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#main-content)

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
4. cPanel Analytics - The Data We Use


[whmui](https://docs.cpanel.net/tags/whmui/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [analytics](https://docs.cpanel.net/tags/analytics/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#overview)

* * *

[Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics)

* * *

[cPanel & WHM version 110 and versions 126 and later](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#cpanel--whm-version-110-and-versions-126-and-later)

* * *

[cPanel & WHM version 118 and earlier](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#cpanel--whm-version-118-and-earlier)

* * *

[Interface Analytics collection](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics-collection)

* * *

[Configuration Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#configuration-analytics)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#overview)

* * *

[Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics)

* * *

[cPanel & WHM version 110 and versions 126 and later](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#cpanel--whm-version-110-and-versions-126-and-later)

* * *

[cPanel & WHM version 118 and earlier](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#cpanel--whm-version-118-and-earlier)

* * *

[Interface Analytics collection](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics-collection)

* * *

[Configuration Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#configuration-analytics)

* * *

## cPanel Analytics - The Data We Use

Last modified: _2025 September 8_

* * *

## Overview

The cPanel Analytics services collect data about interface use and server configuration. The data that we gather may change in the future.

Important:

- WebPros International, LLC **always** collects Configuration Analytics for the server. Configuration Analytics data is operational data that WebPros International, LLC requires in order to make vital business decisions.
- At WebPros, we take your privacy **seriously**. We have taken precautions to ensure that the data we collect is secure and does not contain private, personal, or security information. We retain cPanel Analytics data for 26 months and then destroy it.
- For more information, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) documentation.

## Interface Analytics

Interface Analytics allows us to collect data about how users navigate cPanel, WHM, and Webmail from within the interface.

### cPanel & WHM version 110 and versions 126 and later

In cPanel & WHM version 110 and versions 126 and later, we have removed personal, private, and security information from every step of analytics collection. Unless we cannot retrieve a user’s analytics configuration, we automatically install and enable the Interface Analytics plugin and disable the Interface Analytics interface options.

To learn how to disable the Interface Analytics plugin and reenable Interface Analytics interface options, read our [How to Allow Users to Manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/) documentation.

### cPanel & WHM version 118 and earlier

Note:

This information applies to all versions of cPanel & WHM version 118 and earlier, except cPanel & WHM version 110.

Interface Analytics for individual users, besides the `root` user on trial licenses, is **optional**.

We collect behavioral data only with the consent of individual users.

We automatically install the Interface Analytics plugin by default but do **not** enable it. The server owner **and** individual users **must** enable the Interface Analytics plugin before it begins to collect data.
Data collection depends on the selections made at the server and account levels as follows:

| Server level | Account level | Interface Analytics |
| --- | --- | --- |
| Yes | Yes | Enabled |
| Yes | No | Disabled |
| No | Yes | Disabled |
| No | No | Disabled |

If the server owner **and** individual users do **not** enable it, then we **only** track whether the server owner enables the plugin at the server level.

### Interface Analytics collection

The plugin gathers the following data:

- The server’s [cPanel & WHM product version](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/).
- The operating system (OS) and OS version.
- The user account’s [Universally Unique Identifier (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier).
- Whether an account is a cPanel, WHM, or Webmail account.
- The company ID as it exists in Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Company » Update Company Information_) or in the `/var/cpanel/companyid` file.
- The cPanel License ID as it exists in Manage2’s [_List Licenses_](https://docs.cpanel.net/manage2/licenses/list-licenses) interface ( _Manage2 » Licenses » List Licenses_) or in the `/var/cpanel/licenseid_credentials.json` file.






Note:





Interface Analytics gathers the company ID as part of our partnership with individual customers. Our Account Management, Customer Service, and Marketing teams may analyze this data. For more information, contact our [Account Management team](mailto:accts@cpanel.net).

- cPanel or Webmail accounts’ interface style and theme.
- Whether each Webmail login came from the [Webmail login page](https://docs.cpanel.net/webmail/the-webmail-interface/#access-webmail) or from a redirect in the [cPanel interface](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/).






Note:





We collect this data in cPanel & WHM version 126 and later.

- The frequency with which cPanel, WHM, and Webmail users access their accounts.
- The frequency with which `root` users or resellers use their escalation privileges to access cPanel user accounts.
- The type of devices that they use.
- The use of specific features.
- The use of specific cPanel-provided national and regional languages (locales).
- The frequency with which mailing-list users and administrators access the [mailman](https://www.list.org/docs.html) configuration.






Note:





We collect this data in cPanel & WHM version 126 and later.

- The number of users that access [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube), the paths they take in and out of Roundcube, and the types of tasks they perform in Roundcube.

## Configuration Analytics

Warning:

We **always** collect Configuration Analytics for the server. We have classed this data as operational data that WebPros International, LLC requires in order to make vital business decisions.
This does **not** enable Interface Analytics or alter your participation (or choice not to participate) in that program.

Configuration Analytics allows the system to gather data about your server’s configuration, updates, and use. Some of these values come from [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/) or WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). Other data comes from feature-specific sources or internal system values.

#### 360 Monitoring

Configuration Analytics gathers the following information from the [360 Monitoring](https://docs.cpanel.net/whm/plugins/server-monitoring/) plugin:

- `addressable-cpanel-users` — The number of cPanel users on the server that can use the 360 Monitoring plugin.
- `addressable-webmail-users` — The number of Webmail users on the server that can use the 360 Monitoring plugin.
- `addressable-whm-users` — The number of WHM users on the server that can use the 360 Monitoring plugin.
- `commerce-available`— Whether the `commerce` integration feature is available for the 360 Monitoring plugin.
- `commerce-enabled` — Whether the server administrator enabled the `commerce` integration feature for the 360 Monitoring plugin.
- `custom : agent-running` — The status of the 360 Monitoring agent.
- `custom : agents-expected` — Whether the 360 Monitoring agent is available.
- `custom : server-id` — The server ID of the 360 Monitoring agent.
- `is-plugin-available` — Whether the 360 Monitoring plugin is available on the server.
- `is-plugin-usable` — Whether the 360 Monitoring plugin is usable on the server.
- `local-disabled` — Whether the server administrator disabled the 360 Monitoring plugin.
- `local-enabled` — Whether the server administrator enabled the 360 Monitoring plugin.

#### Accounts

Configuration Analytics gathers the following information on your cPanel & WHM accounts:

- `accounts_with_0_domains` — Whether your cPanel account is **not** managing any domains.
- `accounts_with_1_domains` — Whether your cPanel account is managing **only one** domain.
- `accounts_with_2_domains` — Whether your cPanel account is managing **only two** domains.
- `accounts_with_3_to_5_domains` — Whether your cPanel account is managing between three and five domains.
- `accounts_with_6_to_10_domains` — Whether your cPanel account is managing between six and ten domains.
- `accounts_with_11_to_50_domains` — Whether your cPanel account is managing between 11 and 50 domains.
- `accounts_with_51_to_100_domains` — Whether your cPanel account is managing between 51 and 100 domains.
- `accounts_with_101_to_1000_domains` — Whether your cPanel account is managing between 101 and 1000 domains.
- `accounts_with_1001_to_10000_domains` — Whether your cPanel account is managing between 1001 and 10000 domains.
- `accounts_with_greater_than_100000_domains` — Whether your cPanel account is managing more than 10000 domains.
- `cpanel` — The number of cPanel accounts on the server.
- `webdisk` — The number of Web Disk accounts on the server.
- `user_manager` — The number of users created through the [_User Manager_](https://docs.cpanel.net/cpanel/preferences/user-manager/) interface ( _cPanel » Home » Preferences » User Manager_) on the server.
- `email` — The number of email accounts on the server.
- `ftp` — The number of user-created FTP accounts on the server.
- `accounts_in_demo_mode` — The number of demo mode accounts on the server.
- `team_owner` — The number of team owners created through the [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team/) interface ( _cPanel » Home » Preferences » Manage Team_) on the server.
- `team_user` — The number of team users on the server.
- `team_roles` — The number of each type of role assigned to team users on the server.

Note:

In previous versions of cPanel & WHM, we gathered `cpanel` data under [_IPv6_](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#ipv6) and `all_accounts` and `email` data under [_Email, Calendars, and Contacts_](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#email-calendars-and-contacts) as `emailaccounts`.

#### ACLs

Configuration Analytics gathers use information for all of cPanel & WHM’s default Access Control Lists (ACLs).

For more information, read our [Guide to WHM Plugins - ACL Reference Chart](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart/) documentation.

#### APIs

Configuration Analytics gathers the following data about cPanel API 1 use:

- `api1_calls` — The number of cPanel API 1 function calls.
- `api1_pages` — The number of interfaces on the server that include cPanel API 1 functions.

Configuration Analytics gathers the following API Tokens data:

- `number_of_users_with_tokens` — The number of accounts that currently use the API Tokens feature.

Configuration Analytics gathers the following data about reseller accounts without an associated domain created on your server using the WHM API 1 `createacct` function:

- `total_created` — The total number of reseller accounts without an associated domain created using this function.
- _Field(s) named after zero or more years_ — The number of reseller accounts without an associated domain created using this function during a specific year. Each year displays separately. For example, if you created 2 accounts in the year 2021 you will see `"2021" : 2`.

#### Configuration

Configuration Analytics gathers the **entire** contents of the `cpanel.config` file.

Note:

For a full list of settings and the interfaces to set them, read our [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/) documentation.

Configuration Analytics gathers the following data from the `cpsources.conf` file:

- `MYIP` — The URL that determines this server’s public-facing IP address.
- `NEWS` — The archaic address that the system uses to retrieve news to display in WHM.

Configuration Analytics gathers the following data from the `sysinfo.config` file:

- `rpm_dist` — The name of the server’s Linux distribution.
- `ises` — Whether the server uses Red Hat® Enterprise Linux®.
- `lock` — The `sysinfo_config` values that cPanel & WHM doesn’t change.
- `rpm_dist_ver` — The Linux distribution’s version.
- `rpm_arch` — The machine architecture.
- `release` — The Linux distribution’s release number.

Configuration Analytics gathers the following data from the `allowstupidstuff` file:

- `enabled` — Whether the `/etc/allowstupidstuff` file exists on the server.
- `users_with_leading_digit` — The number of usernames on the system that start with a digit.
- `total_users` — The total number of users on the system.

#### cPAddons

Configuration Analytics gathers the following data about each cPAddon on your server:

- The cPAddon’s name. The system retrieves this from the `description` return in UAPI’s [`cPAddons::get_available_addons`](https://api.docs.cpanel.net/openapi/cpanel/operation/get_available_addons/) function.
- The number of installations on the server.
- The number of up-to-date installations on the server.
- Whether customers on the server can currently install the cPAddon.

#### cPHulk

Configuration Analytics gathers each system’s cPHulk configuration. Specifically, it collects the output of WHM’s [`load_cphulk_config`](https://api.docs.cpanel.net/openapi/whm/operation/load_cphulk_config/) function.

#### Databases

Configuration Analytics gathers the following data about MySQL® on your server:

- `userstat` — Whether MySQL collects user statistics.
- `users_with_old_passwords` — The number of users with old-style passwords.
- `mysql_db_version` — The full MySQL version in use.

Configuration Analytics gathers the following data about remote MySQL and MariaDB® databases:

- `is_local` — Whether the MySQL server is on the local server.
- `address` — The address and port for the MySQL server.
- `setup_with_ssh` — Whether the MySQL server setup process used SSH.

Configuration Analytics gathers the following data about PostgreSQL® on your server:

- `installed` — Whether PostgreSQL exists on the server.
- `postgres_db_version` — The full PostgreSQL version in use.

#### Database Statistics

Configuration Analytics gathers the following statistics about MySQL and MariaDB databases on your server:

- `count` — The number of databases on the server.
- `max` — The largest database size on the server, measured in bytes.
- `mean` — The [statistical mean](https://en.wikipedia.org/wiki/Mean) of the sizes of databases on the server, measured in bytes.
- `median` — The [statistical median](https://en.wikipedia.org/wiki/Median) of the sizes of databases on the server, measured in bytes.
- `mode` — The [statistical mode](https://en.wikipedia.org/wiki/Mode_(statistics)) of the sizes of databases on the server, measured in bytes.
- `std` — The [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of database size on the server, measured in bytes.

#### DNS

Configuration Analytics gathers the following data about your server’s use of [DNS Clustering](https://docs.cpanel.net/whm/clusters/dns-cluster):

- `members` — The number of servers in a DNS cluster.
- `standalone` — The number of DNS servers that exist in the _Standalone_ role.
- `write_only` — The number of DNS servers that exist in the _Write-only_ role.
- `sync` — The number of DNS servers that exist in the _Synchronize_ role.
- `reseller_clusters` — The number of reseller users with DNS clustering enabled.

#### Domains

Configuration Analytics gathers the following data about your server’s domains:

- `domain` — The name of the domain.
- `web_locallyhosted` — Whether or not an account for the domain exists on the server.

#### EasyApache

Configuration Analytics gathers the following data about [EasyApache 4](https://docs.cpanel.net/ea4/basics/about-easyapache-4/):

- `easyapache_version` — The version of EasyApache (EA) that your customers use.
- `easyapache4_packages` — The EasyApache 4 packages that exist on the server.

#### Email, Calendars, and Contacts

Configuration Analytics gathers the following data about email accounts on your server:

- `email_users_previous_day` — The number of users that logged in to Dovecot during the previous day (midnight to midnight). This includes both remote IMAP users and local Webmail users.
- `system_user_cnt` — The number of system user email accounts.
- `min_quota` — The lowest quota size of any email account on the server.
- `max_quota` — The largest quota size of any email account on the server that is not unlimited.
- `mean_quota` — The [statistical mean](https://en.wikipedia.org/wiki/Mean) quota size of all email accounts on the server. This does not include email accounts with unlimited quotas.
- `median_quota` — The [statistical median](https://en.wikipedia.org/wiki/Median) quota size of all email accounts on the server. This does not include email accounts with an unlimited quota.
- `unlimited_quota_cnt` — The number of email accounts with an unlimited quota.
- `set_quota_cnt` — The number of email accounts with a quota.
- `total_quota_available_for_mail` — The total amount of space available for email in all email accounts on the server.
- `roundcube_usage` — The number of system email users and Webmail users that have accessed Roundcube in the last day.

Configuration Analytics gathers the following data about email messages on your server:

- `delivered_to_local` — The total daily number of email messages that the server delivered to local email accounts on the server. This includes both messages that the server sent and messages it received from remote servers.
- `sent_to_local` — The total daily number of email messages that the server sent locally to local email accounts on the server.
- `sent_to_remote` — The total daily number of email messages that the server sent to remote servers.
- `rejected` — The total daily number of email messages that the server rejected.
- `total_storage_used_for_mail` — The total amount of space that email messages use for all email accounts on the server.

Configuration Analytics gathers the following data from the [`/var/log/exim_mainlog`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#varlogexim_mainlog) log file:

- `sent_ok_codes` — The SMTP status codes for messages that [Exim](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#exim) successfully sent and the number of times in the past 24 hours that the codes appeared.
- `sent_ok` : `routers` — The Exim routers that sent messages successfully and the number of times in the past 24 hours that the routers sent these messages.
- `sent_ok` : `transports` — The Exim transports that sent messages successfully and the number of times in the past 24 hours that the transports sent these messages.
- `send_failures` — The number of times in the past 24 hours that Exim failed to send messages.
- `failed_send` : `retrytimeout` — The number of times in the past 24 hours that Exim exceeded its retry timeout for messages that it failed to send.
- `failed_send` : `routers` — The Exim routers that failed to send messages and the number of messages in the past 24 hours that the routers failed to send.
- `failed_send` : `transports` — The Exim transports that failed to send messages and the number of messages in the past 24 hours that the routers failed to send.
- `smtp_root_host_connections` — The domain root (top-level domain plus base domain) of SMTP-client connections and the number of times in the past 24 hours that these connections used the domain root.
- `total_email` — The total number of emails in the past 24 hours.

Configuration Analytics gathers the following data about [Apache SpamAssassin™](https://spamassassin.apache.org/):

- `sa_accounts` — The total number of accounts with Apache SpamAssassin enabled.
- `spambox_accounts` — The total number of accounts with [Spam Box](https://docs.cpanel.net/cpanel/email/spam-filters/#move-new-spam-to-a-separate-folder-spam-box) enabled.
- `scanned` — The total number of emails that Apache SpamAssassin scanned in the past 24 hours.
- `not_scanned` — The total number of emails that Apache SpamAssassin did not scan in the past 24 hours.
- `scored_spam` — The total number of emails that Apache SpamAssassin marked as spam in the past 24 hours.
- `scored_not_spam` — The total number of emails that Apache SpamAssassin did not mark as spam in the past 24 hours.
- `scores` — The spam scores and the frequency of their occurrence in the past 24 hours.
- `total_custom_global_rules_files` – The total number of global custom rules files for SpamAssassin.
- `total_custom_user_rules_files` – The total number of user-level custom rules files for SpamAssassin.
- `has_custom_local_cf` – Whether the server uses a custom `/etc/mail/spamassassin/local.cf` file.

Configuration Analytics gathers the following data about [Domain-based Message Authentication, Reporting, and Conformance (DMARC)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dmarc) on your server:

- `number_of_domains_with_dmarc` — The number of domains with a DMARC zone record on the server.

Configuration Analytics gathers the following data about third-party MX records:

- `remote_mx` — The number of domains that use remote mail servers and the names of these remote mail servers.
- `mx_type : number_of_gapps` — The number of domains that use G Suite by Google Cloud for email.
- `mx_type : number_of_o365` — The number of domains that use Microsoft’s Office 365 for email.

Configuration Analytics gathers the following data about your server’s use of [Greylisting](https://docs.cpanel.net/whm/email/greylisting/):

- `is_enabled` — Whether the Greylisting feature is enabled server-wide.
- `trusted_hosts` — The list of trusted domains for the server.
- `total_number_of_domains_on_server` — The number of domains on the server.
- `possible_spam_count` — The number of emails that the Greylisting feature has marked as spam.
- `triplets_deferred_count` — The number of emails that the Greylisting feature has deferred.
- `number_of_domains_opted_out` — The number of domains that have opted out of the Greylisting feature.

Configuration Analytics gathers the following data about the Calendar and Contacts Server (CCS) and Z-push - ActiveSync Support plugins on the server:

- `ccs_present` — Whether the CCS plugin is installed on the server.
- `ccs_users_previous_day` — The number of users that logged in to CCS during the previous day (midnight to midnight).
- `zpush_present` — Whether the Z-push - ActiveSync Support plugin is installed on the server.
- `zpush_users_previous_day` — The number of users that logged in to the Z-push - ActiveSync Support plugin during the previous day (midnight to midnight).

Configuration Analytics gathers the following data from the [`cpdavd`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cpdavd) service:

- `caldavcarddav_users_previous_day` — The number of unique CalDAV/CardDAV users who logged in to the service the previous day. The system tracks this data on a 24-hour cycle.
- `caldavcarddav_user_agents` — A set of key-value pairs that maps the `User-Agent` string to the number of unique users who logged in with that user agent.

#### Hostname

Configuration Analytics gathers the following data about your server’s hostname:

- `hostname` — The current hostname of the server.
- `hostname_resolves_to_server` — Whether the hostname resolves to the server’s main IP address.
- `hostname_is_autoissued` — Whether the server uses an auto-issued hostname.

#### Installation

Configuration Analytics gathers the following data about your installation of cPanel & WHM:

- `cpanel_install_mtime` — The date and time at which you initially installed cPanel & WHM.
- `dnsonly` — Whether you’re using cPanel DNSOnly®.
- `ea_libcurl_version` — The version of libcurl on your server.
- `easyapache_version` — The version of EasyApache (EA) that your customers use.
- `envtype` — Your cPanel & WHM installation’s environment type.
- `cl_edition` — The CloudLinux edition. This will **only** be added if the operating system is CloudLinux.
- `mem_swap` — The amount of memory swap space on the server.
- `mem_total` — The amount of memory on the server.
- `server_mainipv4` — The server’s primary IPv4 address.
- `server_install_uuid` — The installation’s unique identifier.
- `before` — The cPanel & WHM version before the update.
- `after` — The cPanel & WHM version after the update.

#### IPv6

Configuration Analytics gathers the following data about your server’s use of IPv6:

- `bound_address_count` — The number of IPv6 addresses on the server.
- `accounts_with_jailshell` — The number of accounts that use jailshell.
- `num_a6_records` — The number of deprecated A6 records.
- `has_slaac` — Whether the server uses a SLAAC IPv6 address.
- `has_ipv6_address_range` — Whether the server uses an IPv6 range.
- `host_is_slaac` — Whether the host uses a SLAAC IPv6 address.
- `accounts_with_ipv6` — The number of accounts that use IPv6 addresses.
- `network_interfaces` — The network devices that the system uses.

#### Licenses

We use this information to determine whether a customer has allowed a trial license to expire and why they may have not converted their license to a paid license.

Configuration Analytics gathers the following data about your server’s license status:

- `company-id` — The company ID of the license owner.
- `cp-current-license-kind` — The server’s license status. For example, none, active trial, active paid, inactive paid, etc.

#### Locales

Configuration Analytics gathers a list of custom locales on your server via the `number_of_users_with_tokens` value.

Note:

Custom locales are locales that WebPros International, LLC doesn’t distribute.

Configuration Analytics gathers the following data about each account’s locale:

- `custom_locale` — The locales that are available on the server.
- `locale` — The names of accounts that use a specific language.

#### Malware Detection

Configuration Analytics gathers the following data about malware detection from the third-party Imunify software:

- `infected_files` — The number of infected files Imunify detected in the last 24 hours.
- `infected_dbs` — The number of infected databases Imunify detected in the last 24 hours.

#### Nameservers

Configuration Analytics gathers the following data about your nameservers:

- `clustering` — Whether you configured the DNS server for clustering.
- `secure_zone_count` — The number of zones that use DNSSEC records.
- `type` — The type of DNS server configuration.
- `zone_count` — The number of configured zones.

Configuration Analytics gathers the following data about your server’s default nameservers for accounts:

- `NS` — The primary nameserver.
- `NS2` — The secondary nameserver
- `NS3` — The tertiary nameserver.
- `NS4` — The quarternary nameserver.

Configuration Analytics gathers the following data about your domain’s [authoritative nameserver](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#authoritative-nameserver):

- `dns_authhandler` — The authoritative nameserver or DNS provider for the domain if it has nameserver DNS records.
- `authoritative_dns` — Whether or not the server or its DNS cluster hosts the domain’s authoritative nameserver.

#### Packages

Configuration Analytics gathers the following data about the [rpm.versions system’s](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system) packages:

- `rpm_locations` — The location of packages that third parties modify.
- `url_templates` — The URL of the template that the rpm.versions system consumes.
- `srpm_versions` — The version of the source packages that the rpm.versions system consumes.
- `file_format.version` — The file format version for the rpm.versions system.
- `target_settings.software` — Whether the rpm.versions-defined packages installed successfully.
- `install_targets` — The installation target for the packages.

#### Ruby Passenger

Configuration Analytics gathers the following data about Ruby Passenger:

- `number_of_ruby_apps` — The number of installed Ruby applications.
- `has_modpassenger` — Whether [Phusion Passenger](https://www.phusionpassenger.com/) is installed.

#### Search Engine Optimization

Configuration Analytics gathers the following information from the [Search Engine Optimization](https://docs.cpanel.net/cpanel/domains/search-engine-optimization/) plugin:

- `addressable-cpanel-users` — The number of cPanel users on the server that can use the Search Engine Optimization plugin.
- `addressable-webmail-users` — The number of Webmail users on the server that can use the Search Engine Optimization plugin.
- `addressable-whm-users` — The number of WHM users on the server that can use the Search Engine Optimization plugin.
- `commerce-available` — Whether the `commerce` integration feature is available for the Search Engine Optimization plugin.
- `commerce-enabled` — Whether the server administrator enabled the `commerce` integration feature for the Search Engine Optimization plugin.
- `is-plugin-available` — Whether the Search Engine Optimization plugin is available on the server.
- `is-plugin-usable` — Whether the Search Engine Optimization plugin is usable on the server.
- `local-disabled` — Whether the server administrator disabled the Search Engine Optimization plugin.
- `local-enabled` — Whether the server administrator enabled the Search Engine Optimization plugin.

#### Service SSL Info

Configuration Analytics gathers the following data for the certificate that secures the `cpsrvd` service:

- `not_before` — The certificate’s validation date.
- `is_self_signed` — Whether the certificate is self-signed.
- `not_after` — When the certificate expires.

#### Site Publisher

Configuration Analytics gathers the following data about use rates for the [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) feature:

- `total` — The total number of Site Publisher websites on the server.
- `system` — The number of domains that are using root-provided templates.
- `cpanel` — The number of domains that are using cPanel-provided templates.
- `reseller` — The number of domains that are using reseller-provided templates.
- `domains` — The number of domains that host a Site Publisher website.

#### Site Quality Monitoring

Configuration Analytics gathers the following data about the [_Site Quality Monitoring_](https://docs.cpanel.net/cpanel/metrics/site-quality-monitoring/) feature:

- `activated_users` — The number of cPanel users who have successfully completed the Site Quality Monitoring sign-up process.
- `active_users` — The number of cPanel users who began the Site Quality Monitoring sign-up process by providing an email address.
- `available_users` — The number of cPanel users who could sign up for Site Quality Monitoring, whether they have done so or not.
- `disabled_globally` — Whether **all** of the cPanel server’s feature lists automatically **disable** Site Quality Monitoring.
- `disabled_in_default_featurelist` — Whether the cPanel server’s default feature list automatically **disables** Site Quality Monitoring.
- `featurelists_disabled` — The number of feature lists on the cPanel server that automatically **disable** Site Quality Monitoring.
- `featurelists_enabled` — The number of feature lists on the cPanel server that automatically **enable** Site Quality Monitoring.
- `rpm_installed` — Whether the cPanel server has installed the Site Quality Monitoring feature.
- `unactivated_users` — The number of cPanel users who began the Site Quality Monitoring sign-up process, but have not completed it. This metric reflects the difference between the `active_users` value and the `activated_users` value.
- `users_with_invalid_config` — The number of cPanel users with malformed Site Quality Monitoring configurations.

#### Sitejet Builder

Configuration Analytics gathers the following data about use rates for the [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/) feature:

- `available-sitejet_users-count` — The number of users who have the _Sitejet Builder_ feature available in their feature list.
- `sites-published` — The number of Sitejet websites published on the server.
- `sites-published-l30d` — The number of Sitejet websites published in the last thirty days.
- `domains-published-by-customer` — The number of domains published by a cPanel user.
- `cpanel-customer-id` — The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) for the cPanel user.
- `domains` — The name of the domains and `websiteID`s published by a cPanel user.
- `sites-total` — The total number of websites created using _Sitejet Builder_.

#### Social Media Management

Configuration Analytics gathers the following information from the [Social Media Management](https://docs.cpanel.net/cpanel/domains/social-media-management/) plugin:

- `addressable-cpanel-users` — The number of cPanel users on the server that can use the Social Media Management plugin.
- `addressable-webmail-users` — The number of Webmail users on the server that can use the Social Media Management plugin.
- `addressable-whm-users` — The number of WHM users on the server that can use the Social Media Management plugin.
- `commerce-available` — Whether the `commerce` integration feature is available for the Social Media Management plugin.
- `commerce-enabled` — Whether the server administrator enabled the `commerce` integration feature for the Social Media Management plugin.
- `is-plugin-available` — Whether the Social Media Management plugin is available on the server.
- `is-plugin-usable` — Whether the Social Media Management plugin is usable on the server.
- `local-disabled` — Whether the server administrator disabled the Social Media Management plugin.
- `local-enabled` — Whether the server administrator enabled the Social Media Management plugin.

#### System Configuration at Install

Configuration Analytics gathers the following data about the system configuration at first installation:

- `hostname` — The hostname of the server at first installation.

#### Theme

Configuration Analytics gathers the following data about the cPanel interface’s theme:

- `system_branding` — The number of accounts that use branded themes.
- `jupiter` — The number of accounts that use cPanel’s Jupiter theme.
- `paper_lantern` — The number of accounts that use cPanel’s Paper Lantern theme.
- `default_theme` — The default theme for new accounts.
- `reseller_branding` — The number of reseller-owned accounts that use branded themes.
- `X3` — The number of accounts that use the legacy x3 theme.
- `X3mail` — The number of accounts that use the legacy x3mail theme.
- `retro_users` — The number of accounts that use the Retro style.

#### Third-Party Software

Configuration Analytics gathers the following data about each third-party software installation (product extension) on your server:

- The software’s key value.
- The software’s name.

For more information about third-party software, read our [Third Party Software](https://docs.cpanel.net/knowledge-base/third-party/third-party-software/) documentation.

#### Transfer or Restore Tracking

Configuration Analytics gathers the following current server environment data when transferring or restoring accounts:

- `env_type` — The type of server.
- `license_type` — The user limit of the server’s license.

Configuration Analytics gathers the following data about transferred or restored accounts your server receives:

- `initial_server_env_type` — The type of server the account came from.
- `initial_server_license_type` — The type of license for the account’s originating server.
- `transferred_or_restored` — The number of transfers or restores for an account.
- `uuid` — A randomly generated unique identifier.
- `uuid_added_at_account_creation` — Whether the UUID for this account was present at account creation or added later.

#### Two-Factor Authentication

Configuration Analytics gathers the following data about Two-Factor Authentication (2FA):

- `is_root_configured` — Whether the `root` user uses 2FA.
- `is_enabled_on_server` — Whether 2FA is enabled.
- `total_accounts_with_tfa_configured` — The number of accounts that use 2FA.

#### Updates

Configuration Analytics gathers the following data about cPanel & WHM updates:

- `duration` — The duration of your most-recent cPanel & WHM update.
- `result` — Whether the most-recent cPanel & WHM update was successful.
- `update_blockers` — Any blockers that prevented cPanel & WHM from updating.
- `used_ea_tarball` — Whether the update used the EA tarball.
- `used_fast_install` — Whether the server used the fast installation method.

Configuration Analytics gathers the following data from the `cpsources.conf` file:

- `LAYER` and `RSYNC` — The archaic mirrors that the system uses to install and update software.
- `HTTPUPDATE` — The mirror that the system uses to install and update software.

Configuration Analytics gathers the following data from the `cpupdate.conf` file:

- `RPMUP` — The frequency of automatic package updates.
- `CPANEL` — The server’s configured cPanel & WHM release tier.
- `UPDATES` — The frequency of cPanel & WHM updates.
- `SARULESUP` — The frequency of Apache SpamAssassin™ updates.
- `STAGING_DIR` — The directory that the system uses to stage updates.

#### WordPress®

Configuration Analytics gathers the following data about WordPress installations on cPanel & WHM servers:

- `wp_toolkit_assigned` — The number of accounts on the server with [_WP Toolkit_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/) enabled, but without _WP Toolkit Deluxe_ enabled.
- `wp_toolkit_and_deluxe_assigned` — The number of accounts on the server with _WP Toolkit_ and _WP Toolkit Deluxe_ enabled.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure cPanel Analytics](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/)
- [Contact Information](https://docs.cpanel.net/cpanel/preferences/contact-information/)
- [cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×