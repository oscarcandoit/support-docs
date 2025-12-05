---
url: "https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/"
title: "Statistics Software Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#main-content)

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
4. Statistics Software Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [stats](https://docs.cpanel.net/tags/stats/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#overview)

* * *

[Statistics Status Summary](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#statistics-status-summary)

* * *

[Show which users are behind](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#show-which-users-are-behind)

* * *

[See the Statistics Summary of a Specific User](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#see-the-statistics-summary-of-a-specific-user)

* * *

[Process Statistics for User](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#process-statistics-for-user)

* * *

[Generators Configuration](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#generators-configuration)

* * *

[User Permissions](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#user-permissions)

* * *

[Allow all users to change their web statistics generating software](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#allow-all-users-to-change-their-web-statistics-generating-software)

* * *

[Choose Users](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#choose-users)

* * *

[Choose Specific Stats Programs](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#choose-specific-stats-programs)

* * *

[Schedule Summary](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#schedule-summary)

* * *

[Schedule Configuration](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#schedule-configuration)

* * *

[Configure Statistic Process Time Schedule](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#configure-statistic-process-time-schedule)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#overview)

* * *

[Statistics Status Summary](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#statistics-status-summary)

* * *

[Show which users are behind](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#show-which-users-are-behind)

* * *

[See the Statistics Summary of a Specific User](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#see-the-statistics-summary-of-a-specific-user)

* * *

[Process Statistics for User](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#process-statistics-for-user)

* * *

[Generators Configuration](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#generators-configuration)

* * *

[User Permissions](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#user-permissions)

* * *

[Allow all users to change their web statistics generating software](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#allow-all-users-to-change-their-web-statistics-generating-software)

* * *

[Choose Users](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#choose-users)

* * *

[Choose Specific Stats Programs](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#choose-specific-stats-programs)

* * *

[Schedule Summary](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#schedule-summary)

* * *

[Schedule Configuration](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#schedule-configuration)

* * *

[Configure Statistic Process Time Schedule](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#configure-statistic-process-time-schedule)

* * *

## Statistics Software Configuration

![](https://docs.cpanel.net/img/whm-icons/statistics_software_configuration.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays information about your server’s statistics and statistics software. cPanel & WHM servers include three statistics applications (generators): [Analog](https://docs.cpanel.net/cpanel/metrics/analog-stats), [AWStats](https://docs.cpanel.net/cpanel/metrics/awstats), and [Webalizer](https://docs.cpanel.net/cpanel/metrics/webalizer).

Note:

The `/usr/local/cpanel/logs/stats_log` file contains the statistics logs for your server. If your server experiences problems when it processes statistics, the log file may provide additional information to troubleshoot the issue.

## Statistics Status Summary

This section of the interface allows you to view important information about your server’s statistics software.

### Show which users are behind

Note:

This option **only** appears if cPanel accounts exist that process statistics behind the server’s statistics process schedule. If a cPanel account processes statistics behind the server’s schedule, a message about the problem also appears.

To display a list of these cPanel users, click _Show which users are behind_. A table will appear that displays cPanel users and the number of minutes behind schedule that their accounts process statistics.

### See the Statistics Summary of a Specific User

To view your cPanel accounts’ statistics process summaries, perform the following steps:

1. Select _All_ or a specific cPanel user from the _User to Display_ menu.
2. Click _Go_. A new interface appears that displays the account’s statistics process information, as well as specific information for each of the three statistics generators.
3. Click _Details_ to view a statistics generator’s information. A new interface will appear that displays the following information:

   - Whether the statistics generator is _enabled_ or _disabled_.
   - Whether the statistics generator’s _Global Generator Defaults_ setting is _enabled_ or _disabled_.

     - Click _Change_ to return to the main _Statistics Software Configuration_ interface.
     - Use the [_Generators Configuration_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#generators-configuration) section of the interface to modify that user’s permissions.
   - Whether the `root` user grants the user permission to change the statistics generator configuration.

     - Click _Change_ to return to the main _Statistics Software Configuration_ interface.
     - Use the [_User Permissions_](https://docs.cpanel.net/whm/server-configuration/statistics-software-configuration/#user-permissions) section of the interface to modify that user’s permissions.
   - Whether the `root` user grants the user permission to change any generator’s status from the default.

     - Click _Change_ to log in to cPanel as the user that you selected and navigate to cPanel’s [_Metrics Editor_](https://docs.cpanel.net/cpanel/metrics/metrics-editor) interface _(cPanel » Home » Metrics » Metrics Editor)_.

## Process Statistics for User

This section of the interface allows you to process individual cPanel accounts’ statistics. The process runs in the background and stores the results while you continue to work in WHM. When the process finishes, you can view these statistics from the user’s cPanel interface.

To process a user’s statistics, select the user from the _User to Process_ menu and click _Go_.

## Generators Configuration

This section of the interface allows you to select your cPanel users’ statistical analysis software.

Select the appropriate checkboxes to configure the following statistics: [_Analog_](https://docs.cpanel.net/cpanel/metrics/analog-stats), [_AWStats_](https://docs.cpanel.net/cpanel/metrics/awstats), and [_Webalizer_](https://docs.cpanel.net/cpanel/metrics/webalizer).

- Select the appropriate _Available to Users_ checkbox to make the software available to all of your cPanel users who have the ability to change their web statistics software.






Note:





cPanel users **must** also enable the program in cPanel’s [_Metrics Editor_](https://docs.cpanel.net/cpanel/metrics/metrics-editor) interface ( _cPanel » Home » Metrics » Metrics Editor_) to view their website’s statistics.

- Select the appropriate _Active by Default_ checkbox to make the software the default software for all of your cPanel users.
- Select the _Allow Awstats configuration Include file_ checkbox to customize users’ [AWStats](https://docs.cpanel.net/cpanel/metrics/awstats) configurations. Then, add the configuration file to the user’s `~/tmp/awstats/awstats.conf.include/` directory. For more information, read the [ASWstats SourceForge page](http://awstats.sourceforge.net/).

## User Permissions

This section of the interface allows you to specify which cPanel users can modify their statistics software.

### Allow all users to change their web statistics generating software

To allow all of your cPanel users to modify their statistics software, select the _Allow all users to change their web statistics generating software_ checkbox and click _Save_.

### Choose Users

To select specific cPanel users who can modify their statistics software, perform the following steps:

1. Click _Choose Users_. A new interface will appear.
2. Configure the _Allowed Users_ menu.

   - To allow a user to select which software to use, select the account name from the _Available Users_ menu and click _Add_, or click _Add All_ to add all users to the _Allowed Users_ menu.
   - To remove an account holder, select the user in the _Allowed Users_ menu and click _Remove_, or click _Remove All_ to remove all users from the _Allowed Users_ menu.
3. WHM automatically saves each change that you make to the _Allowed Users_ menu. After you make your changes, click _Go Back_.

### Choose Specific Stats Programs

To choose a cPanel user’s specific statistics generators, perform the following steps:

1. Click _Choose Users_. A new interface will appear.
2. Enter the user’s name in the _Choose Speficic Stats Programs for_ text box and click _Configure_.
3. Select the checkbox next to each generator that you wish to make available to the user.
4. Click _Save_.

## Schedule Summary

This section of the interface displays the estimated update schedule for each statistics software.

## Schedule Configuration

This section of the interface allows you to use the following settings to determine how often WHM processes the statistics on your server:

- _Log Processing Frequency_ — Enter the number of hours after which WHM processes log files for your server.
- _Bandwidth Processing Frequency_ — Enter the number of hours after which WHM processes bandwidth statistics for your server.

Notes:

- Set these intervals in increments of `0.25` (which represents 15 minutes). For example, `4.25` specifies an interval of four hours and fifteen minutes.
- We recommend that you do **not** set the _Log Processing Frequency_ setting to a number below `24`. Lower numbers may prevent the successful completion of the log process schedule.

### Configure Statistic Process Time Schedule

To define a more precise schedule, perform the following steps:

1. Click _Configure Statistic Process Time Schedule_.
2. In the new interface that appears, select the hours in which your server will **not** perform log analysis.






Important:





**Only** process statistics at off-peak hours, when your server processes fewer requests.

3. To ensure that backups and log analysis do **not** occur simultaneously, select the _Prevent cpanellogd (Log Processing) and cpbackup (Backups) from running at the same time_ checkbox.
4. Click _Save_.

Notes:

- If your server is very busy, your system may require more than one hour to fully analyze log files. Make certain that you leave an adequate number of hours unselected to allow sufficient time for log analysis.
- The times that you select only affect the [Analog](https://docs.cpanel.net/cpanel/metrics/analog-stats), [AWStats](https://docs.cpanel.net/cpanel/metrics/awstats), and [Webalizer](https://docs.cpanel.net/cpanel/metrics/webalizer) statistics programs. This schedule does **not** control how the `cpanellogd` daemon processes bandwidth statistics internally, which is necessary for bandwidth reports in cPanel & WHM. The `cpanellogd` daemon may still process statistics in blackout hours, and uses minimal resources. The _Bandwidth Processing Frequency_ setting still controls the frequency with which the `cpanellogd` daemon processes data.
- The _Extra CPUs for server load_ setting in the _Stats and Logs_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) also affects how to server processes statistics. If the system does not process statistics in the allotted time, we recommend that you increase this value.

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [CloudLinux Manager](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/)
- [Configure Application Locales](https://docs.cpanel.net/whm/locales/configure-application-locales/)
- [Configure cPanel Analytics](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×