---
url: "https://docs.cpanel.net/cpanel/files/git-version-control/"
title: "Git™ Version Control | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/git-version-control/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Git™ Version Control


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [versioncontrol](https://docs.cpanel.net/tags/versioncontrol/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/git-version-control/#overview)

* * *

[Git on the command line](https://docs.cpanel.net/cpanel/files/git-version-control/#git-on-the-command-line)

* * *

[Repositories](https://docs.cpanel.net/cpanel/files/git-version-control/#repositories)

* * *

[Create a repository](https://docs.cpanel.net/cpanel/files/git-version-control/#create-a-repository)

* * *

[SSH host key verification](https://docs.cpanel.net/cpanel/files/git-version-control/#ssh-host-key-verification)

* * *

[Repository path restrictions](https://docs.cpanel.net/cpanel/files/git-version-control/#repository-path-restrictions)

* * *

[Manage repositories](https://docs.cpanel.net/cpanel/files/git-version-control/#manage-repositories)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/git-version-control/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/git-version-control/#overview)

* * *

[Git on the command line](https://docs.cpanel.net/cpanel/files/git-version-control/#git-on-the-command-line)

* * *

[Repositories](https://docs.cpanel.net/cpanel/files/git-version-control/#repositories)

* * *

[Create a repository](https://docs.cpanel.net/cpanel/files/git-version-control/#create-a-repository)

* * *

[SSH host key verification](https://docs.cpanel.net/cpanel/files/git-version-control/#ssh-host-key-verification)

* * *

[Repository path restrictions](https://docs.cpanel.net/cpanel/files/git-version-control/#repository-path-restrictions)

* * *

[Manage repositories](https://docs.cpanel.net/cpanel/files/git-version-control/#manage-repositories)

* * *

## Git™ Version Control

![](https://docs.cpanel.net/img/cpanel-icons/version_control.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/files/git-version-control/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The Git™ Version Control feature allows you to easily host Git repositories on your cPanel account. You can use Git to maintain any set of files (for example, a website’s files and assets, a software development project, or simple text files). For more information, read our [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment) documentation and [Git’s Documentation](https://git-scm.com/).

Note:

The system adds a post-receive hook to all cPanel-managed repositories. For more information, read Git’s [githooks](https://git-scm.com/docs/githooks) documentation.

### Git on the command line

Important:

Without shell access, you can **only** create, clone, delete, and view repositories.

If your cPanel account includes shell access, you can also use Git from the command line. You must use the command line to perform the following tasks:

- SSH configuration in order to clone private repositories. For more information, read our [Guide to Git - Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.
- The use of multiple remote repositories. We recommend this use for advanced Git users only.

You can use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_) to access the command line from within the cPanel interface.

## Repositories

Note:

- When you clone a repository, the system may require a large amount of time to complete. The list of repositories will disable the options for the repository and will only display the repository name, repository path, and a progress message.
- If you add or remove Git repositories via the command line, you may see an incorrect list of repositories in this interface. Currently, **only** repositories that you created in this interface will appear in the list.

The Repositories table lists the following information for all of your account’s cPanel-managed Git repositories:

- _Repository_ — The repository’s display name.
- _Repository Path_ — The repository’s directory.

You can also perform the following actions:

- _Manage_ — Click to update the repository’s cPanel-managed settings or pull or deploy changes.
- _History_ — Click to open the [_Gitweb_](https://docs.cpanel.net/cpanel/files/gitweb) interface in a new browser tab. Gitweb allows you to browse the repository and view its history and contents.
- _Remove_ — Click to remove cPanel’s management of the repository. A confirmation message will appear. Click _Remove_ again to delete the repository.






Warning:





When you remove cPanel’s management of a repository, the repository will no longer appear in the interface, and you cannot use cPanel to deploy it. However, the system will not delete the repository directory or its data. To fully delete repository data, use cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) or your preferred method to manually delete the files.







Remember:





When you clone a repository, the system may require a large amount of time to complete. The list of repositories will disable the options for the repository and will only display the repository name, repository path, and a message about the clone’s progress.


## Create a repository

To create a new repository, perform the following steps:

1. Click _Create_ in the top-right corner of the interface. A new interface will appear.

2. Select whether to clone an existing repository, create a new one, or add an existing one to the list of cPanel-managed repositories:
   - To clone an existing repository, ensure that the _Clone a Repository_ toggle is enabled. Then, enter the clone URL for the repository that you wish to clone in the _Clone URL_ text box.







     Important:





     To clone private repositories, you must perform additional steps. For more information, read our [Guide to Git - Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

   - To create a new repository or add an existing repository to the list of cPanel-managed repositories, set the _Clone a Repository_ toggle to disabled.







     Important:





- This URL cannot contain a username-and-password pair.
- This URL must include the `http://`, `https://`, `ssh://`, or `git://` protocols or use the `user@example.com/path` format, where `user` represents the username, `example.com` represents the domain, and `path` represents the repository path.
- You cannot enter a local repository path.
- The system performs additional checks for clone URLs that use the `ssh://` protocol. For more information, read the [SSH host key verification](https://docs.cpanel.net/cpanel/files/git-version-control/#ssh-host-key-verification) section below.
3. In the _Repository Path_ text box, enter the path to the directory that will contain the repository.





Note:





- If the specified directory does not currently exist, the system will create it.
- If the specified directory already contains a repository, the system will automatically add it to the list of cPanel-managed repositories.
- This feature enforces several restrictions on repository paths. For more information, read the [Repository path restrictions](https://docs.cpanel.net/cpanel/files/git-version-control/#repository-path-restrictions) section below.
- Unless you’re adding an existing repository to the list, the directory must be empty. Subdomain directories contain a cgi-bin directory and may also contain a `.well-known` directory. You must move these before you can create a repository.

4. In the _Repository Name_ text box, enter the desired display name for the repository.

5. To immediately create another repository, select the _Create Another_ checkbox.

6. Click _Create_, or click _Return to Repository List_ to return to the list of repositories.


### SSH host key verification

If you entered an SSH clone URL, when you click _Create_, the system will automatically check for the remote server’s public SSH host key. The system stores this key in the `/home/user/.ssh/known_hosts` file, where `user` represents your username.

- If the remote host is not registered with the system, click _Save and Continue_ to add it to the file (register it). You can click _Show Host Identification Information_ to view the host’s algorithm and SHA-256 and MD5 fingerprints.
- If the remote host is already registered, the system will create the repository.
- If the remote host’s public key has changed, the system will display a warning.
  - For third-party remote hosts, check for announcements about public key updates. Most companies that host repositories make announcements about these changes.
  - For remote hosts that you control, consider whether recent events on your system have caused changes to the public key, or contact your system administrator.

The system also performs this check and will request verification of altered host keys when you change repository information or update the repository.

Warning:

If you cannot verify the validity of a change, exercise caution, especially if your repository includes sensitive content. An altered SSH key may indicate a [Man-in-the-Middle attack.](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks)

### Repository path restrictions

This feature enforces several restrictions for repository paths.

#### The .git directory

Warning:

Do not modify or delete a repository’s `.git` directory or its contents. Modifications to this data can irreparably break the repository.

The system globally denies public access to repositories’ .`git` directories.

#### Character restrictions

You cannot create, delete, or view repositories with paths that include whitespace or any of the following characters

```bash
\ * | " ' < > & @ ` $ { } [ ] ( ) ; ? : = % #`
```

#### cPanel-controlled directories

You cannot create, delete, or view repositories in the following directories:

[Click to view...](https://docs.cpanel.net/cpanel/files/git-version-control/#click-to-view---1764175695625892147)

- `.cpanel`
- `.trash`
- `etc`
- `mail`
- `ssl`
- `tmp`
- `logs`
- `.cphorde`
- `spamassassin`
- `.htpasswds`
- `var`
- `cgi-bin`
- `.ssh`
- `perl5`
- `access-logs`

## Manage repositories

Click _Manage_ to modify or deploy repositories. Click _Basic Information_ to view repository information, or click _Pull or Deploy_ to pull or deploy changes.

- [Basic Information](https://docs.cpanel.net/cpanel/files/git-version-control/#BasicInfo)
- [Pull or Deploy](https://docs.cpanel.net/cpanel/files/git-version-control/#PullDeploy)

- _Repository Path_ — The repository’s directory. Click to open the directory for the repository in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) in a new browser tab.

- _Repository Name_ — The repository’s display name. To modify this name, enter the new name and click _Update_.

- _Checked-Out Branch_ — The currently checked-out local branch. To check out a different branch, select the desired branch and click _Update_.
  - If you select a different branch, the system will automatically pull changes from the remote repository when it checks out that branch.
  - If the repository is a bare repository, the system will not display this information.
- _Currently Checked-Out Branch_ — The currently checked-out local branch. Click to open the Gitweb interface in a new browser tab.

- _HEAD Commit_ — This section of the interface displays information about the active branch’s HEAD commit (the most recent commit to the branch). If the repository does not include any commits for the current branch or is a bare repository, the system will not display any _HEAD Commit_ information. Click _History_ to open the [_Gitweb_](https://docs.cpanel.net/cpanel/files/gitweb) interface in a new browser tab.
  - _Commit_ — The SHA-1 value for the HEAD commit.
  - _Author_ — The HEAD commit’s author.
  - _Date_ — The date of the HEAD commit.
  - The commit message for the HEAD commit.
  - _Remote URL_ — The URL of the repository’s remote repository.
  - _Clone URL_ — The URL to use to clone the repository to another location (for example, your local computer, another cPanel account, or a GitHub account). Click _Copy_ to copy this URL to your clipboard.

- _Repository Path_ — The repository’s directory. Click to open the directory for the repository in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) in a new browser tab.

Important:

You cannot modify the repository path for existing repositories.

```
</div>
```

- _Repository Name_ — The repository’s display name. To modify this name, enter the new name and click _Update_.

- _Currently Checked-Out Branch_ — The currently checked-out local branch. Click to open the [_Gitweb_](https://docs.cpanel.net/cpanel/files/gitweb) interface in a new browser tab.


Note:

If the repository is a bare repository, the system will not display this information.

```
</div>
```

- _HEAD Commit_ — This section of the interface displays the following information about the active branch’s HEAD commit (the most recent commit to the branch):
  - _Commit_ — The SHA-1 value for the HEAD commit.
  - _Author_ — The HEAD commit’s author.
  - _Date_ — The date of the HEAD commit.
  - The commit message for the HEAD commit.

Note:

If the repository does not include any commits for the current branch or is a bare repository, the system will not display this information.

```
</div>
```

- _Last Deployment Information_ — This section of the interface displays the following information about the most recent deployment of the repository:
  - _Last Deployed on_ — The date of the deployment.
  - _Last Deployed SHA_ — The SHA-1 value for the deployed commit.
  - _Author_ — The deployed commit’s author.
  - _Date_ — The date of the deployed commit.
  - The commit message for the deployed commit.
- _Update from Remote_ — Click to pull changes from the remote repository and apply them to the cPanel-managed copy of the repository. The system pulls changes with [the `--ff-only` option](https://git-scm.com/docs/git-pull) and will only succeed if the branch’s HEAD commit is up-to-date or Git can fast forward it.

- _Remote URL_ — The URL of the repository’s remote repository.

- _Deploy HEAD Commit_ — Click to deploy changes from the cPanel-managed repository. Deployment requires a `.cpanel.yml` file and at least one local or remote branch.
  - The system runs the tasks that you configure in the `.cpanel.yml` file in order to deploy the repository.
  - We strongly recommend that you check the `.cpanel.yml` file in to your remote repository and not the cPanel-managed repository.
  - The system cannot deploy changes for repositories with dirty working trees.

For more information about deployment, read our [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment) and [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment) documentation.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [Gitweb](https://docs.cpanel.net/cpanel/files/gitweb/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×