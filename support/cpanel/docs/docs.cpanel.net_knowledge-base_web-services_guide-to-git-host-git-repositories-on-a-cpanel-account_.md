---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/"
title: "Guide to Git™ — Host Git Repositories on a cPanel Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#main-content)

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
4. Guide to Git™ — Host Git Repositories on a cPanel Account


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#overview) [Requirements](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#requirements) [Host a Git repository on your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#host-a-git-repository-on-your-cpanel-account) [Create or clone a repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#create-or-clone-a-repository) [Update the Git configuration](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#update-the-git-configuration) [Clone the repository locally](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#clone-the-repository-locally) [Push local changes to the hosted repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#push-local-changes-to-the-hosted-repository) - [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#overview) [Requirements](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#requirements) [Host a Git repository on your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#host-a-git-repository-on-your-cpanel-account) [Create or clone a repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#create-or-clone-a-repository) [Update the Git configuration](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#update-the-git-configuration) [Clone the repository locally](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#clone-the-repository-locally) [Push local changes to the hosted repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/#push-local-changes-to-the-hosted-repository) - [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Host Git Repositories on a cPanel Account

Last modified: _2024 November 13_

* * *

## Overview

Note:

We recommend that you use cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) to perform Git tasks. While many of these tasks require command-line access, this interface automates some parts of the process and allows you to view historical information for your repositories in [Gitweb](https://docs.cpanel.net/cpanel/files/gitweb).

With the appropriate permissions, cPanel accounts can host Git repositories. Git’s version control software tracks changes in a system of files that multiple users can manage simultaneously. This tutorial uses the command line to create or clone a new Git repository, update the repository’s configuration, and clone the repository locally for updates.

- For a list of common Git commands and their options, read our [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands) documentation.

- For information about how to deploy code from your hosted Git repositories, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment) and [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs) documentation.

- For more information about Git, read [Git’s](https://git-scm.com/) documentation.


### Requirements

To perform the steps in this tutorial, you **must** meet the following requirements:

- You **must** possess an active cPanel account with available disk space.
- Your system administrator **must** enable the _Shell Access_ setting for your cPanel account.
- You **must** register your public key in cPanel’s [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access) interface ( _cPanel » Home » Security » SSH Access_) and authorize it for SSH access.

Important:

To clone private repositories, you must perform the additional steps in our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

## Host a Git repository on your cPanel account

### Create or clone a repository

You can create a Git repository in any existing directory, or you can create a new, empty directory for your repository. If your project already has a Git repository, you can [clone](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/#git-clone) the repository to your cPanel account instead.

To use cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) to manage your repository, you **must** ensure the repository and directory you place it into meet the following requirements:

- You **cannot** include whitespace or the following characters in the repository name or directory path:




```bash
\\ \* | " ' < > & @ \` $ { } [ ] ( ) ; ? : = % #
```

- The repository **cannot** be in the following cPanel-controlled directories:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```go<br>.cpanel<br>.trash<br>etc<br>mail<br>ssl<br>tmp<br>logs<br>.cphorde<br>spamassassin<br>.htpasswds<br>var<br>cgi-bin<br>.ssh<br>perl5<br>access-logs<br>``` |


If you use the command line to create a repository in a restricted path, the [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) will **not** display the repository.

#### Create a new repository

To create a new repository, perform the following steps:

1. Use SSH to log in to your cPanel account on the command line.

2. To navigate to the directory that will contain your repository, run the following command, where :




```bash
cd ~/Project/example
```





Note:





To create a new directory to store your repository, run the following command and then navigate to that directory:





```bash
mkdir -p ~/Project/example
```

3. To initialize the directory as a Git repository, run the following command:




```bash
git init
```


#### Clone an existing repository

Important:

To clone private repositories, you must perform additional steps. For more information, read our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

To clone an existing repository, perform the following steps:

1. Use SSH to log in to your cPanel account on the command line.

2. To navigate to the directory that will contain your repository, run the following command:




```bash
cd ~/Project
```





Note:





To create a new directory to store your repository, run the following command and then navigate to that directory:





```bash
mkdir -p ~/Project
```

3. To clone the repository, run the following command :




```bash
git clone https://domain.com/Account/example.git example.git
```



In this example, `https://domain.com/Account/example.git` represents the repository’s clone URL.


Note:

- Many developers host their code repositories on GitHub. GitHub repository URLs generally resemble the following example, where `Account` represents the GitHub account name and `example` represents the repository name:

```bash
https://github.com/Account/example.git
```

- The system may require a large amount of time to clone larger repositories. Until this process finishes, HEAD information will be unavailable in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_).

- cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) does **not** allow username-and-password pairs in remote repository URLs.


### Update the Git configuration

This optional step configures the Git repository to remain up to date as you push changes from the local branch.

More:

For more information about Git’s configuration file and its options, read Git’s [git-config](https://git-scm.com/docs/git-config/2.13.0) documentation.

To update the configuration, run the following command from within the repository directory:

```bash
git config receive.denyCurrentBranch updateInstead
```

### Clone the repository locally

Important:

- This feature enforces several restrictions on clone URLs. For more information, read our [Git Version Control](https://docs.cpanel.net/cpanel/files/git-version-control) documentation.
- You can use cPanel’s [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access) interface ( _cPanel » Home » Security » SSH Access_) to add and manage SSH keys, which you can use to access the cPanel-hosted repository. Because SSH keys allow access to the entire cPanel account, and not just a single repository, exercise caution when you perform this action.

To clone the cPanel-account-hosted repository, access your local computer via the command line and run the following command:

```bash
git clone ssh://username@hostname/home/username/Project/example.git
```

- `username` represents the cPanel account username.

- `hostname` represents the hostname for the server that hosts your cPanel account.


### Push local changes to the hosted repository

After you finish this tutorial, you can make changes to the repository’s files on your local computer. You **must** run the following command in order to push changes that you make on your local computer to the hosted repository:

```bash
git push origin master -u
```

This command pushes your revisions to the copy of the repository that exists on your cPanel account.

Note:

cPanel & WHM’s Git installation will automatically configure some settings.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×