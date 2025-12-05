---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/"
title: "Guide to Git™ — Set Up Deployment Cron Jobs | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. Guide to Git™ — Set Up Deployment Cron Jobs


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#overview) [Find the repository path](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#find-the-repository-path) [Configure your cron job](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#configure-your-cron-job) - [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#overview) [Find the repository path](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#find-the-repository-path) [Configure your cron job](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/#configure-your-cron-job) - [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Set Up Deployment Cron Jobs

Last modified: _2024 November 13_

* * *

## Overview

If you wish to deploy the contents of a cPanel-managed repository on a schedule, you can set up deployment cron jobs. Cron jobs allow you to configure the system to run a specified command automatically at a specified interval.

For more information about deployment, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/) documentation.

## Find the repository path

In order to configure your deployment cron job, you **must** use the correct repository path.

To locate the desired repository’s directory, navigate to cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_). Then, in the list of repositories, locate the _Repository Path_ value for the desired repository.

## Configure your cron job

The [_Cron Jobs_](https://docs.cpanel.net/cpanel/advanced/cron-jobs/) interface ( _cPanel » Home » Advanced » Cron Jobs_) allows you to configure cron jobs.

To configure your deployment cron job, perform the following steps:

1. Select the interval at which you wish to run the cron job. You can select a commonly-used interval from the _Common Settings_ menu, or select or enter a specific interval for the following values:
   - _Minute_ — The number of minutes between each time that the cron job runs or the minute of each hour on which you wish to run the cron job.
   - _Hour_ — The number of hours between each time that the cron job runs or the hour of each day on which you wish to run the cron job.
   - _Day_ — The number of days between each time that the cron job runs or the day of the month on which you wish to run the cron job.
   - _Month_ — The number of months between each time that the cron job runs or the month in which you wish to run the cron job.
   - _Weekday_ — The days of the week on which you wish to run the cron job.
2. In the _Command_ text box, enter the commands that you wish the system to run. For example, where `/home/user/example` represents the repository’s _Repository Path_ value:



```perl
/usr/bin/uapi VersionControlDeployment create repository_root=/home/user/example
```



If your server runs CloudLinux™, begin these commands with the `/usr/local/cpanel/bin/` file path. For example:



```perl
/usr/local/cpanel/bin/uapi VersionControlDeployment create repository_root=/home/user/example
```



This command calls UAPI’s [`VersionControlDeployment::create`](https://api.docs.cpanel.net/openapi/cpanel/operation/VersionControlDeployment::create/) function, which creates a new deployment task. This task will run the deployment commands that you specified in your [`.cpanel.yml`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#the-deployment-yaml-file) file once.

3. Click _Add New Cron Job_.


[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×