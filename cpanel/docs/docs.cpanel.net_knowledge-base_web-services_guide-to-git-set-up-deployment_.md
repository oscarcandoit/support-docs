---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/"
title: "Guide to Git™ — Set Up Deployment | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#main-content)

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
4. Guide to Git™ — Set Up Deployment


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#overview) [Push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push) [Pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#pull) [Set up push deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-push-deployment) [Create an empty repository on your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-an-empty-repository-on-your-cpanel-account) [Clone the remote repository to your local computer](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-local-computer) [Create the .cpanel.yml file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-the--cpanel-yml-file) [Add the cPanel-managed repository as a remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#add-the-cpanel-managed-repository-as-a-remote-repository) [Push changes to the cPanel-managed repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push-changes-to-the-cpanel-managed-repository) [Set up pull deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-pull-deployment) [Clone the remote repository to your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-cpanel-account) [Clone the remote repository to your local computer](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-local-computer) [Create the .cpanel.yml file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-the--cpanel-yml-file) [Push changes to the remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push-changes-to-the-remote-repository) [Pull and deploy changes from the cPanel interface](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#pull-and-deploy-changes-from-the-cpanel-interface) - [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#overview) [Push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push) [Pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#pull) [Set up push deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-push-deployment) [Create an empty repository on your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-an-empty-repository-on-your-cpanel-account) [Clone the remote repository to your local computer](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-local-computer) [Create the .cpanel.yml file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-the--cpanel-yml-file) [Add the cPanel-managed repository as a remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#add-the-cpanel-managed-repository-as-a-remote-repository) [Push changes to the cPanel-managed repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push-changes-to-the-cpanel-managed-repository) [Set up pull deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-pull-deployment) [Clone the remote repository to your cPanel account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-cpanel-account) [Clone the remote repository to your local computer](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#clone-the-remote-repository-to-your-local-computer) [Create the .cpanel.yml file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#create-the--cpanel-yml-file) [Push changes to the remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#push-changes-to-the-remote-repository) [Pull and deploy changes from the cPanel interface](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#pull-and-deploy-changes-from-the-cpanel-interface) - [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Set Up Deployment

Last modified: _2024 November 13_

* * *

## Overview

cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_) allows you to configure deployment for your cPanel-managed repositories. While many deployment configurations are possible, this document only outlines two types of deployment that you can configure.

### Push

**Push** deployment first [pulls](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull) changes from a [remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) to your local computer. Then, you can [push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) them to your cPanel-managed repository. The system will automatically [deploy](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#deployment) changes that you push to the cPanel-managed repository.

![Push deployment diagram](https://docs.cpanel.net/img/git-push-deployment-workflow.png)

### Pull

**Pull** deployment [pulls](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull) changes from a [remote repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) to your local computer and [pushes](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) new changes from your local computer to the remote repository. You can then use the [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_) to manually [deploy](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#deployment) changes that you pull from the remote repository.

![Pull deployment diagram](https://docs.cpanel.net/img/git-pull-deployment-workflow.png)

Note:

If you experience issues when you configure Git deployment, read the following documents:

- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories)

- [Git Version Control Series: Git Problems and How to Fix Them](https://blog.cpanel.com/git-version-control-series-git-problems-and-how-to-fix-them/)


## Set up push deployment

Note:

We recommend that you use this type of deployment.

### Create an empty repository on your cPanel account

If the repository that you wish to deploy does not already exist on your cPanel account, use cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_) to create one.

Note:

For this type of deployment, do **not** clone a remote repository during this step. Instead, create an empty repository.

### Clone the remote repository to your local computer

If you have not already cloned it, clone the remote repository. For example, run the following command to clone a repository, where `URL` represents the remote repository’s clone URL:

```bash
git clone URL
```

Important:

To clone private repositories, you must perform additional steps. If you do not perform these steps, you will experience errors when you attempt to use Git. For more information, read our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

Note:

You can find the repository’s clone URL by performing the following steps:

1. Navigate to cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_)

2. Locate the desired repository in the list of repositories and click _Manage_.

3. The URL appears under the _Clone URL_ heading.


### Create the .cpanel.yml file

In order to deploy changes from a cPanel-managed repository, you **must** check a `.cpanel.yml` file in to the top-level directory of your repository. You can create and commit this file to your local computer’s copy of the repository, or you can create and commit it on the remote repository.

- If you use the remote repository, you will require read-write access or can submit a pull request to the remote repository.

- This tutorial uses changes from the local computer rather than the remote repository.


For example, a `.cpanel.yml` file may resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>---<br>deployment:<br> tasks:<br> - export DEPLOYPATH=/home/user/public_html/<br> - /bin/cp index.html $DEPLOYPATH<br> - /bin/cp style.css $DEPLOYPATH<br>``` |

More:

For more information about the `.cpanel.yml` file, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment) documentation.

### Add the cPanel-managed repository as a remote repository

From your local computer, run the following command to add the cPanel-managed repository as the local computer’s remote repository:

```bash
git remote add origin URL
```

In this command, `URL` represents the cPanel-managed repository’s clone URL.

### Push changes to the cPanel-managed repository

From your local computer, run the following command to push the changes from your local computer to the cPanel-managed repository:

```bash
git push -u origin HEAD
```

After the cPanel-managed repository contains the `.cpanel.yml` file, the system will automatically deploy any changes that you push to it.

Important:

If you experience errors when you attempt to push your changes, the repository may be private and require SSH access. For more information, read our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

## Set up pull deployment

### Clone the remote repository to your cPanel account

If the repository that you wish to deploy does not already exist on your cPanel account, use cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_) to clone the desired remote repository.

Note:

This feature enforces several restrictions on clone URLs, and it verifies the remote host’s public SSH keys for `ssh://` clone URLs.

### Clone the remote repository to your local computer

If you have **not** already cloned the remote repository, use the terminal on your local computer to clone the remote repository.

For example, run the following command to clone a repository, where URL represents the remote repository’s clone URL:

```bash
git clone URL
```

### Create the .cpanel.yml file

In order to deploy changes from a cPanel-managed repository, you **must** check a `.cpanel.yml` file in to the top-level directory of your repository. You can create and commit this file to your local computer’s copy of the repository, or you can create and commit it on the remote repository.

If you use the remote repository, you will **require** read-write access or can submit a pull request to the remote repository.
This tutorial uses changes from the local computer rather than the remote repository.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>---<br>deployment:<br> tasks:<br> - export DEPLOYPATH=/home/user/public_html/<br> - /bin/cp index.html $DEPLOYPATH<br> - /bin/cp style.css $DEPLOYPATH<br>``` |

More:

For more information about the `.cpanel.yml` file, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment) documentation.

### Push changes to the remote repository

From your local computer, run the following command to push the changes from your local computer to the remote repository:

```bash
git push origin HEAD
```

### Pull and deploy changes from the cPanel interface

To pull the changes from the remote repository and then manually deploy them, perform the following steps:

1. Navigate to cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_).

2. Locate the desired repository in the list of repositories and click _Manage_.

3. Click the _Pull or Deploy_ tab.

4. Click _Update from Remote_ to pull changes from the remote repository.

5. Click _Deploy HEAD Commit_ to deploy your changes.


Repeat these steps each time that you wish to pull and deploy changes. The system will **not** deploy changes for this deployment type automatically.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×