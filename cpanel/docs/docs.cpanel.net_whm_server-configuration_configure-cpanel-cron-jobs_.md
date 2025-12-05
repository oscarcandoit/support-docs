---
url: "https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/"
title: "Configure cPanel Cron Jobs | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Configure cPanel Cron Jobs


[cron](https://docs.cpanel.net/tags/cron/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#overview)

* * *

[Configure a cron job](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#configure-a-cron-job)

* * *

[Cron job intervals](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#cron-job-intervals)

* * *

[The upcp command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-upcp-command)

* * *

[The backup command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-backup-command)

* * *

[The cpbackup command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-cpbackup-command)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#overview)

* * *

[Configure a cron job](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#configure-a-cron-job)

* * *

[Cron job intervals](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#cron-job-intervals)

* * *

[The upcp command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-upcp-command)

* * *

[The backup command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-backup-command)

* * *

[The cpbackup command](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-cpbackup-command)

* * *

## Configure cPanel Cron Jobs

![](https://docs.cpanel.net/img/whm-icons/configure_cpanel_cron_jobs.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Cron jobs schedule scripts to run at predefined times or intervals on the server. This interface allows you to configure the `upcp`, `backup`, and `cpbackup` scripts’ cron jobs on your server.

Warning:

Cron jobs that run too frequently can reduce your server’s performance. We recommend that you run cron jobs once per day.

## Configure a cron job

To configure a cron job, perform the following steps:

1. Enter the desired intervals for the cron job that you wish to configure. For more information, read the [Cron job intervals](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#cron-job-intervals) section below.
2. Click _Save_.

### Cron job intervals

Set the following variables to configure each cron job:

- _Minute_ — Enter the minute of each hour at which to run the cron job. For example, enter `15` to run the cron job at 15 minutes past the hour.
- _Hour_ — Enter the hour of each day (in [24-hour format](https://en.wikipedia.org/wiki/Military_time#Military_time)) at which to run the cron job. For example, enter `2100` to run the cron job at 9:00 PM local time.
- _Day_ — Enter the day of the month on which to run the cron job. For example, enter `15` to run the cron job on the 15th of the month.
- _Month_ — Enter the month of the year in which to run the cron job. For example, enter `7` to run the cron job in July.
- _Weekday_ — Enter the day(s) of the week on which to run the cron job. For example, a value of `0` indicates Sunday, or a value of `6` indicates Saturday.

Note:

For any of these settings, enter `*` to run the cron job at all intervals.

For example, to schedule a process to run every day at 9:15 PM (or 21:15 in 24-hour format), use the following settings:

| Setting | Value |
| --- | --- |
| _Minute_ | `15` |
| _Hour_ | `21` |
| _Day_ | `*` |
| _Month_ | `*` |
| _Weekday_ | `*` |

## The upcp command

The `upcp` script updates cPanel & WHM. By default, the `upcp` script runs at a random time between 9:00 PM and 6:00 AM local time.

Important:

We recommend that you schedule the `upcp` script to run once per day during off-peak hours.

## The backup command

The `backup` script runs the backups that you configure in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_). By default, this script runs at 2:00 AM local time, because this is an off-peak time for most servers. If you have disabled backups in the _Backup Configuration_ interface, the script immediately exits after it runs.

Important:

We recommend that you schedule this cron job to run during off-peak hours. Make **certain** that the cron job runs early enough to allow your server to finish backups before peak traffic resumes.

## The cpbackup command

The `cpbackup` script runs legacy backups on your server. By default, this script runs at 1:00 AM local time, because this is an off-peak time for most servers. If you have disabled legacy backups, the script immediately exits after it runs.

Important:

We recommend that you schedule this cron job to run during off-peak hours. Make **certain** that the cron job runs early enough to allow your server to finish backups before peak traffic resumes.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×