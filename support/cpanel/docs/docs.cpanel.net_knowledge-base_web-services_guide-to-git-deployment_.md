---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/"
title: "Guide to Git™ — Deployment | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#main-content)

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
4. Guide to Git™ — Deployment


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#overview) [Requirements](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#requirements) [The deployment YAML file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#the-deployment-yaml-file) [Deploy individual files](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#deploy-individual-files) [Deploy an entire directory](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#deploy-an-entire-directory) [Automatic or push deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#automatic-or-push-deployment) [Manual or pull deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#manual-or-pull-deployment) - [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#overview) [Requirements](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#requirements) [The deployment YAML file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#the-deployment-yaml-file) [Deploy individual files](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#deploy-individual-files) [Deploy an entire directory](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#deploy-an-entire-directory) [Automatic or push deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#automatic-or-push-deployment) [Manual or pull deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/#manual-or-pull-deployment) - [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Deployment

Last modified: _2025 June 10_

* * *

## Overview

The [_Git™ Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) feature allows you to deploy your cPanel-managed repositories. Generally, deployment sends finished code into production. You can use different configurations to automatically (push deployment) or manually (pull deployment) deploy changes.

- For example, you could use deployment to make changes to your website locally. Then, automatically send them to a directory on your cPanel account.
- For more information about how to deploy changes, read our [_Git™ Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) documentation.
- For more information about how to troubleshoot problems with this feature, read our [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/) documentation.
- For more information about Git commands, such as `git push`, `git pull`, or `git commit`, read our [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands) documentation.

## Requirements

Before deployment, repositories **must** meet the following requirements:

- A valid checked-in `.cpanel.yml` file in the top-level directory.
- One or more local or remote branches.
- A [clean working tree](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#working-tree).

If a repository does **not** meet these requirements, the system will **not** display deployment information. Also, it will disable deployment functionality.

## The deployment YAML file

The `.cpanel.yml` file determines how and where the changed files deploy. You must check a `.cpanel.yml` file in to the top-level directory for each cPanel-managed repository that you deploy. The `.cpanel.yml` files must use the format in the examples below.

Important:

- The files below are only **examples**. You **must** update them to suit your needs. These files will not allow you to deploy a repository successfully.
- **Don’t** use a wildcard character, such as an asterisk, to deploy all files. This could deploy items like the `.git` directory and cause serious problems.
- **Don’t** use characters that are invalid in YAML files. For more information, read the [Escaped Characters section of yaml.org’s YAML Specification](https://yaml.org/spec/1.2/spec.html#id2776092).

### Deploy individual files

The following `.cpanel.yml` file deploys the `index.html` and `style.css` files to the `example` account’s `public_html` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```perl<br>---<br>deployment:<br>  tasks:<br>    - export DEPLOYPATH=/home/example/public_html/<br>    - /bin/cp index.html $DEPLOYPATH<br>    - /bin/cp style.css $DEPLOYPATH<br>``` |

- Line 1 is the beginning of a YAML file.
- Lines 2 and 3 add the `deployment` and `tasks` keys, respectively.
- Lines 4 through 6 specify an array of BASH commands to run during deployment. You can add as many commands to this array as you wish.

Note:

To add comments to this file, add a line that begins with the hash character (`#`).

### Deploy an entire directory

The following `.cpanel.yml` file copies the `images` directory and all of its contents to the `example` account’s `public_html` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```perl<br>---<br>deployment:<br>  tasks:<br>    - export DEPLOYPATH=/home/example/public_html/<br>    - /bin/cp -R images $DEPLOYPATH<br>``` |

- Line 1 is the beginning of a YAML file.
- Lines 2 and 3 add the `deployment` and `tasks` keys, respectively.
- Lines 4 and 5 specify an array of BASH commands to run during deployment. You can add as many commands to this array as you wish.

Note:

To add comments to this file, add a line that begins with the hash character (`#`).

## Automatic or push deployment

Important:

cPanel’s [_Git™ Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) automatically adds a post-receive hook to all cPanel-managed repositories.

- When you push changes directly to a cPanel-managed repository that includes a `.cpanel.yml` file, the hook deploys those changes automatically.
- For more information, read Git’s [githooks](https://git-scm.com/docs/githooks) documentation.

![A diagram of a computer pulling changes from a remote repository, then pushing those changes to a cPanel-managed repository so that they deploy to example.com's production directory.](https://docs.cpanel.net/img/git-push-deployment-workflow.png)

With push deployment, a single `git push` command sends changes from your local computer to your cPanel-managed repository. The system then automatically runs the commands in your `.cpanel.yml` file. This configuration will send changes from the cPanel-managed repository to a production directory. (For example, to the directory that contains your website’s public files.)

Note:

You can use manual deployment to deploy your repository again without new changes.

## Manual or pull deployment

![A diagram of a computer pushing changes to a remote repository, then using the Git Version Control interface's Update from Remote button to push those changes to a cPanel-managed repository. Then, the computer uses the Deploy HEAD Commit button to deploy the changes from the cPanel-managed repository to the production directory of example.com.](https://docs.cpanel.net/img/git-pull-deployment-workflow.png)

With pull deployment, the `git push` command sends changes from your local computer to a remote repository.

- When you click _Update from Remote_ in the _Pull or Deploy_ tab of the _Manage_ section of cPanel’s [_Git™ Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_), the system retrieves changes from the remote repository and applies them to the cPanel-managed repository.

- When you click _Deploy HEAD Commit_, the system runs the commands in your `.cpanel.yml` file to send changes from the cPanel-managed repository to a production directory. (For example, to the directory that contains your website’s public files.)


[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×