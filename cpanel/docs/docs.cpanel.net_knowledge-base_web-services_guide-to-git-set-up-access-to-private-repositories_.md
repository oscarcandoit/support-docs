---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/"
title: "Guide to Git™ — Set Up Access to Private Repositories | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#main-content)

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
4. Guide to Git™ — Set Up Access to Private Repositories


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#overview) [Set up SSH access to private repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#set-up-ssh-access-to-private-repositories) [Connect to your server via SSH or the cPanel Terminal](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#connect-to-your-server-via-ssh-or-the-cpanel-terminal) [Generate an SSH key](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#generate-an-ssh-key) [Create the SSH configuration file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#create-the-ssh-configuration-file) [Register your SSH key with the private repository host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#register-your-ssh-key-with-the-private-repository-host) [Test the SSH key](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#test-the-ssh-key) [Set up access to multiple repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#set-up-access-to-multiple-repositories) [Clone a repository: single repository on the remote host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#clone-a-repository-single-repository-on-the-remote-host) [Clone a repository: multiple repositories on the remote host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#clone-a-repository-multiple-repositories-on-the-remote-host) - [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
- [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#overview) [Set up SSH access to private repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#set-up-ssh-access-to-private-repositories) [Connect to your server via SSH or the cPanel Terminal](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#connect-to-your-server-via-ssh-or-the-cpanel-terminal) [Generate an SSH key](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#generate-an-ssh-key) [Create the SSH configuration file](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#create-the-ssh-configuration-file) [Register your SSH key with the private repository host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#register-your-ssh-key-with-the-private-repository-host) [Test the SSH key](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#test-the-ssh-key) [Set up access to multiple repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#set-up-access-to-multiple-repositories) [Clone a repository: single repository on the remote host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#clone-a-repository-single-repository-on-the-remote-host) [Clone a repository: multiple repositories on the remote host](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/#clone-a-repository-multiple-repositories-on-the-remote-host) - [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Set Up Access to Private Repositories

Last modified: _2024 November 13_

* * *

## Overview

This document describes how to set up SSH access so you can clone a local cPanel repository to a remote private repository. You **must** generate and copy SSH keys to the remote repository server before you can clone a local repository to the remote server.

Important:

- This tutorial uses GitHub as an example host for a private repository. However, most of the steps in this tutorial are similar to the steps for any other private repository host.
- The steps in this tutorial require the _SSH Access & Terminal_ feature.

## Set up SSH access to private repositories

To set up access to private repositories, perform the following steps.

### Connect to your server via SSH or the cPanel Terminal

For information on how to connect via SSH, review our [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) documentation. For information on how to connect to the cPanel Terminal, review our [_Terminal for cPanel_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) documentation. Once you’ve successfully connected, continue following this guide, running the commands either in your SSH-connected command line interface or the cPanel Terminal.

### Generate an SSH key

Run the following command to generate an SSH key file:

```perl
ssh-keygen -t rsa -f ~/.ssh/repo -b 4096 -C "username@example.com"
```

Note:

Replace `repo` with the name of the remote repository, `username` with your cPanel username, and `example.com` with your cPanel domain name.

For example, if your repository name is `testing`, your cPanel username is `cptest`, and your cPanel domain name is `cptest.tld`, run this command:

```perl
ssh-keygen -t rsa -f ~/.ssh/testing -b 4096 -C "cptest@cptest.tld"
```

Warning:

This command contains several parts. If you alter any part of the command, you may affect the performance of your SSH key.

- The `-t` flag specifies the type of algorithm for your SSH key.
- The `-f` flag determines the name for your public and private keys. With the `-f` flag, there is no need to specify the public key name as it will always be the same name as the private key, but with `.pub` as the suffix.
- The `-b` flag specifies the size of the SSH key in bits.
- The `-C` flag specifies a comment to add to your public key. This is helpful when identifying which public keys you have authorized in a remote system, so it is common practice to add your email address as the comment.

After you run this command, the system will prompt you to enter a passphrase. Do **not** enter a passphrase, and press _Enter_ to continue.

### Create the SSH configuration file

To create the SSH configuration file, perform the following steps:

1. Run the following command to create the SSH configuration file:



```perl
touch ~/.ssh/config
```

2. Update the permissions of the `~/.ssh/config` file to `0600`:



```perl
chmod 0600 ~/.ssh/config
```

3. Run the following command to verify the cPanel user account:



```perl
chown cpanelusername:cpanelusername ~/.ssh/config
```

4. Open `~/.ssh/config` with the text editor of your choice, and add the following lines where `testing` is the name of your repository:



```perl
Host remote-git-repo-domain.tld
       IdentityFile ~/.ssh/testing
```





Note:





- If you want to use this private key when connecting to any remote host via SSH, you may use an asterisk character (`*`) as the host instead of a specific domain name. Otherwise, use the domain name of your remote Git repository provider. You can find this domain name within the SSH repository URL.
- You **must** use the path to the private key generated above for the `IdentityFile`.

5. Save the file.

### Register your SSH key with the private repository host

Note:

- For information about how to register your SSH key with another private repository host, consult that host’s website or documentation.
- Some repository hosts, such as Bitbucket, do **not** allow you to configure write access for your access keys.

To register an SSH key with GitHub, perform the following steps:

1. Log in to your GitHub account.
2. Navigate to your private repository.
3. In the top right corner of the page, click _Settings_. A new page will appear.
4. In the left side menu, click _Deploy keys_. A new page will appear.
5. In the top right corner of the page, click _Add deploy key_. A new page will appear.
6. In the _Title_ text box, enter a display name for the key.
7. In the _Key_ text box, paste the entire **public** SSH key from the `~/.ssh/repo.pub` file you created in the previous step. For example, if you created a key with `~/.ssh/testing` as the key file name, the public key would be in `~/.ssh/testing.pub`.
8. If you want to push code from your cPanel account to your GitHub account, select the _Allow write access_ checkbox.






Note:





If you do **not** select this checkbox, you can only deploy changes from your GitHub repository to the cPanel-hosted repository.

9. Click _Add key_.

### Test the SSH key

To test your SSH key, run the following command:

```perl
ssh -i ~/.ssh/repo -T git@example.com
```

Note:

Replace `repo` with the name of the repository and `example.com` with the private repository’s domain name you input when you created the SSH key.

For example, if you input `testing` as the repo and `github.com` as the repository host’s domain name in the previous step, run this command:

```perl
ssh -i ~/.ssh/testing -T git@github.com
```

### Set up access to multiple repositories

To create an SSH key for each of your repositories, follow the steps outlined above. After you have added the keys to the remote repositories, create a local `~/.ssh/config` file to alias each of the keys to their corresponding repository names.

For example, if you have two repos configured on GitHub, `testing` and `testing2`, and both your cPanel and GitHub usernames are `cptest`, create or modify the `~/.ssh/config` file with these contents:

```perl
Host github.com-testing
        Hostname github.com
        IdentityFile=/home/cptest/.ssh/testing

Host github.com-testing2
        Hostname github.com
        IdentityFile=/home/cptest/.ssh/testing2
```

### Clone a repository: single repository on the remote host

To clone a repository when you have a single repository configured on the remote repository host, run this command:

```perl
git clone git@example.com:username/repo.git
```

Note:

Replace `example.com` with the domain name of the remote private repository, `username` with your username on the remote repository host, and `repo` with the name of the repository.

For example, if your GitHub username is `cptest`, and the repository name is `testing`, run this command:

```perl
git clone git@github.com:cptest/testing.git
```

### Clone a repository: multiple repositories on the remote host

To clone a repository when you have multiple repositories configured on the remote repository host and have created separate SSH keys and the `~/.ssh/config` file as referenced above, run this command:

```perl
git clone git@Host:username/repo.git
```

For example, if your GitHub username is `cptest`, and the repository name is `testing2`, run this command:

```perl
git clone git@github.com-testing2:cptest/testing2.git
```

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×