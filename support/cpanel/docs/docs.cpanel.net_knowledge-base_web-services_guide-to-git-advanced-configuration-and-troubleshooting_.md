---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/"
title: "Guide to Git™ — Advanced Configuration and Troubleshooting | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#main-content)

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
4. Guide to Git™ — Advanced Configuration and Troubleshooting


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#overview) [Restrictions](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#restrictions) [Configuration changes](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#configuration-changes) [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#deployment) [SSH host key verification](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#ssh-host-key-verification) [Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#troubleshooting) [Missing repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#missing-repositories) [Missing branches](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#missing-branches) [Cloned repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#cloned-repositories) [SSH access](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#ssh-access)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#overview) [Restrictions](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#restrictions) [Configuration changes](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#configuration-changes) [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#deployment) [SSH host key verification](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#ssh-host-key-verification) [Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#troubleshooting) [Missing repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#missing-repositories) [Missing branches](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#missing-branches) [Cloned repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#cloned-repositories) [SSH access](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#ssh-access)

## Guide to Git™ — Advanced Configuration and Troubleshooting

Last modified: _2025 February 13_

* * *

## Overview

The _Git Version Control_ feature includes several changes from the Git™ default configuration. Additionally, we impose certain restrictions on cPanel-hosted repositories. This document is targeted at system administrators, and includes details of these configurations as well as information that may assist you in troubleshooting cPanel users’ issues.

## Restrictions

This feature imposes the following restrictions on cPanel-hosted repositories:

- Currently, we only support a single remote repository for each local repository. To use multiple remote repositories, users must **only** use the command line.

- Users **cannot** include whitespace or the following characters in repository paths: ``\ * | " ' < > & @ ` $ { } [ ] ( ) ; ? : = % #``

- Users cannot use this feature to create, delete, or view repositories in the following cPanel-controlled directories:
  - `.cpanel`
  - `.cphorde`
  - `.htpasswds`
  - `.ssh`
  - `.trash`
  - `access-logs`
  - `cgi-bin`
  - `etc`
  - `logs`
  - `perl5`
  - `mail`
  - `spamassassin`
  - `ssl`
  - `tmp`
  - `var`

Note:

cPanel users **cannot** use the `.` or `..` directory references when they enter the repository path in the interface.

## Configuration changes

This feature alters the following configuration settings:

- `gc.auto` — We have disabled Git’s garbage-collection setting for all cPanel-managed repositories.
- `receive.denyCurrentBranch` — The system automatically sets this setting in each cPanel-managed repository’s configuration file to the `updateInstead` option.

  - The system ensures this configuration each time that you create a new repository via the [`VersionControl::create`](https://api.docs.cpanel.net/openapi/cpanel/operation/VersionControl::create/) function.
  - The `updateInstead` option causes Git to automatically update the working tree whenever you push changes into the current branch.

This feature uses a cPanel-provided Git package. The Git package symlinks Git binaries in the `/usr/local/cpanel/3rdparty/bin/` directory to the `/usr/local/cpanel/3rdparty/lib/path-bin/` directory, which causes them to exist in the user’s default path.

## Deployment

Important:

We **strongly** recommend that you only deploy changes from a remote repository or a clone of it on your local computer. You should **not** directly change the cPanel-managed repository’s contents.
For more information about our suggested deployment configuration and how to set it up, read our [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment) documentation.

Before deployment, repositories **must** meet the following requirements:

- A valid checked-in `.cpanel.yml` file in the top-level directory.
- One or more local or remote branches.
- A clean working tree.

If a repository does **not** meet these requirements, the system will **not** display deployment information. Also, it will disable deployment functionality.

Note:

- The system adds a `post-receive` hook to all cPanel-managed repositories.

  - This hook will automatically run any commands in the .cpanel.yml file whenever changes deploy.
  - For more information, read Git’s [githooks](https://git-scm.com/docs/githooks#post-receive) documentation.
- The system stores deployment process-related historical data in an SQLite database within the `/home/user/.cpanel/datastore/vc_deploy.sqlite` file, where `user` represents the cPanel account name.

For instructions to set up deployment, read our [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment) documentation.

For more information about deployment, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment) documentation.

## SSH host key verification

When users clone a repository via SSH, the system will automatically check for the remote server’s public SSH key in the `/home/user/.ssh/known_hosts` file, where `user` represents the account’s username.

- If the remote host is **not** registered with the system, the system will prompt the user to accept it. Then, it will add it to the `/home/user/.ssh/known_hosts` file, where `user` represents the account’s username.
- If the remote host is already registered, the system will display a confirmation message.
- If the remote host’s public key has changed, the system will display a warning.
  - For third-party remote hosts, check for announcements about public key updates. Most companies that host repositories make announcements about these changes.
  - For remote hosts that you control, consider whether recent events on your system have caused changes to the public key.
  - For any private repositories, make **certain** that you have performed the steps in our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

The system also performs these checks each time that a user updates the repository’s information or attempts to pull changes from the repository via the cPanel interface.

Warning:

If you cannot verify the validity of the change, exercise caution, especially if the repository includes sensitive content. An altered SSH key may indicate a [Man-in-the-Middle attack](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks).

In order for users to see these warnings, you **must** enable the _Enable strict SSH host key checking_ setting in the _Security_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

## Troubleshooting

If cPanel users experience problems with their repositories, use the following steps to troubleshoot them.

Note:

This feature logs messages and errors to the following locations:

- `/usr/local/cpanel/logs/error_log` — Errors and stack traces.
- `/home/username/.cpanel/logs/user_task_runner.log` — Queue-related items.
- `/home/username/.cpanel/logs/vc_TIMESTAMP_git_create.log` — Creation-related issues, where `TIMESTAMP` represents the time of the operation.
- `/home/username/.cpanel/logs/vc_TIMESTAMP_git_deploy.log` — Deployment-related issues, where `TIMESTAMP` represents the time of the operation.

### Missing repositories

If repositories exist on the command line but do not display in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_), the issue may occur because the feature ignores repositories that users created on the command line.

### Missing branches

If the expected list of branches does not display in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_), the issue may be due to the following causes:

- The branches exist in the copies of the repository on your local computer or remote repository host, but do **not** exist within the cPanel-managed repository.
- The repository is a bare repository. Bare repositories do not include branches.

### Cloned repositories

While the system clones the remote repository, cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) will **only** display the repository name and path.

When users clone a repository, the system clones it via a queued process that runs as that cPanel user. Clones can require a large amount of time, which depends on the size of the repository to clone.

- While the clone process runs, cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) will **only** display the repository name, repository path, and a progress indicator. Additionally, the system will temporarily disable most of the management functionality for that repository.

- The `process_user_tasks` binary runs as the cPanel user to process each clone, and the queue for each user exists in their `.cpanel/user_tasks/` directory. To resolve issues with clones, stop the process and delete the directory.


## SSH access

If users experience problems with SSH access, ensure that the server and the users’ accounts include the following settings and configurations:

- Port 22 is publicly accessible. If the server uses a nonstandard Git port, use the `ssh -p port` command, where `port` represents the port number, to SSH in to the account.

- The _Shell Access_ setting is enabled for the account in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_).

- The _SSH Access & Terminal_ feature is enabled for the user’s feature list in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_).


If none of these solutions fix the issue, ensure that the user correctly configured their **public** SSH keys in cPanel’s [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access) interface ( _cPanel » Home » Security » SSH Access_).

Note:

If a user attempts to clone a remote repository via SSH and receives errors about a refused connection, perform one of the following actions:

- Clone the repository via HTTPS in a read-only configuration.
- Register the cPanel account’s SSH key pair with the remote repository’s host as a deployment key.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×