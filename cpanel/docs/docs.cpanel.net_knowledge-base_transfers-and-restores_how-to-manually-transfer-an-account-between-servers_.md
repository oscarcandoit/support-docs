---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/"
title: "How to Manually Transfer an Account Between Servers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Manually Transfer an Account Between Servers


[transfers](https://docs.cpanel.net/tags/transfers/) [backups](https://docs.cpanel.net/tags/backups/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#overview)

* * *

[Create a temporary directory with the mkdir command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-a-temporary-directory-with-the-mkdir-command)

* * *

[Create a compressed backup of the public\_html directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-a-compressed-backup-of-the-publichtml-directory)

* * *

[Move public\_html with the mv command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#move-publichtml-with-the-mv-command)

* * *

[Create compressed backups of logs](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-compressed-backups-of-logs)

* * *

[Manually transfer the compressed backups with the scp command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#manually-transfer-the-compressed-backups-with-the-scp-command)

* * *

[Extract the compressed backups](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#extract-the-compressed-backups)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#overview)

* * *

[Create a temporary directory with the mkdir command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-a-temporary-directory-with-the-mkdir-command)

* * *

[Create a compressed backup of the public\_html directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-a-compressed-backup-of-the-publichtml-directory)

* * *

[Move public\_html with the mv command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#move-publichtml-with-the-mv-command)

* * *

[Create compressed backups of logs](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#create-compressed-backups-of-logs)

* * *

[Manually transfer the compressed backups with the scp command](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#manually-transfer-the-compressed-backups-with-the-scp-command)

* * *

[Extract the compressed backups](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-transfer-an-account-between-servers/#extract-the-compressed-backups)

* * *

## How to Manually Transfer an Account Between Servers

Last modified: _2025 July 14_

* * *

## Overview

When accounts are too large to move with the WHM [_Transfers_](https://docs.cpanel.net/whm/transfers) features, you can move the accounts manually. To do this, you **must** log in as the `root` user.

Note:

This tutorial substitutes the following information:
\\* The cPanel username — `user`
\\* The domain to transfer — `example.com`

## Create a temporary directory with the mkdir command

To create a temporary directory, run the `mkdir` command:

```perl
mkdir /home/user-temp
```

Note:

This command does **not** produce output, but creates the `user-temp` directory inside of the `/home` directory.


## Create a compressed backup of the public\_html directory

Important:

Certain settings change how cPanel & WHM creates subdomain and addon domain directories. On some servers, these directories may not exist in the cPanel account’s `public_html` directory. For more information, read the _Domains_ section of our [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) documentation.


Typically, most of an account’s disk space usage occurs in its `public_html` directory. If you create a compressed backup of the `public_html` directory and omit it from the transfer process, you can reduce the size of the transfer.

To create a compressed backup, run the `tar` command:

```perl
tar cvzf /home/user-temp/user-backup.tar.gz /home/user/public_html
```

Note:

- This command is an archive utility that compresses the archive when you give it the appropriate arguments.

- This results in a compressed archive of the `public_html` directory that the system creates in the `/home/user-temp/user-backup.tar.gz` directory.


In the above command, the `tar` utility receives four arguments (`cvzf`) and two input variables (`/home/user-temp/user-backup.tar.gz` and `/home/user/public_html`).

- `c` — This argument creates a new archive. You **must** pass the `-c` argument to the `tar` utility. This allows the `tar` utility to create a new archive rather than extract an existing one.

- `v` — This argument prints verbose information about the `tar` utility’s actions to the command line.






Note:




This command does **not** require this argument, but it allows you to debug any errors.


- `z` — This argument uses the `gzip` compression utility to compress the new archive and save disk space. For more information about the `gzip` utility, read the [die.net’s gzip man page](http://linux.die.net/man/1/gzip) documentation.

- `f` — This argument causes the `tar` utility to read from and write to the specified file.


Note:

In this example, the `tar` utility writes to the `user-backup.tar.gz` file.


### Move public\_html with the mv command

To move the `public_html` directory to the temporary folder that you create, run the following `mv` command:

```perl
mv /home/user/public_html /home/user-temp/
```

Warning:

**Never** remove the `public_html` directory before the transfer finishes. Maintain a copy of the `public_html` directory throughout the transfer process to ensure that you can restore the site if you encounter failures.


## Create compressed backups of logs

Large websites usually generate large logs. To save transfer time and disk space, create a compressed backup of these logs. The `/usr/local/apache/domlogs` directory stores the domain’s Apache weblogs.

To create a compressed backup of the domain’s weblogs and move the weblogs from the `/usr/local/apache/domlogs` directory to the temporary directory, run the following two commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>tar -cvzf /home/user-temp/user-logs.tar.gz /usr/local/apache/domlogs/example.com<br>mv /usr/local/apache/domlogs/example.com /home/user-temp/<br>``` |

Note:

- The first command creates the compressed backup of the domain’s weblogs in the `/home/user-temp/user-logs.tar.gz` directory.
- The second command moves the existing weblog files to the temporary directory.

## Manually transfer the compressed backups with the scp command

Several methods exist to transfer compressed backups after you create them. The secure copy (`scp`) protocol transfers files between servers quickly and securely without the use of arguments.

To manually transfer compressed backups, run the `scp` command:

```perl
scp $local file to move $remote host:/path/to/new/file
```

Important:

You **must** possess the username and password for the remote server, and specify a path for the files that you wish to copy on the remote server.


For example, to transfer compressed backups to the `/home/temp/` directory, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>scp /home/user-temp/user-logs.tar.gz root@domain.com:/home/temp/<br>scp /home/user-temp/user-backup.tar.gz root@domain.com:/home/temp/ <br>``` |

These two commands transfer the compressed backups that you create of the user’s `public_html` directory and Apache weblogs to the `/home/temp/` directory of the new server. The system will prompt you for the password when you connect to the new server. You can now use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_) to move the rest of the account information.

Some remote server configurations may require you to specify arguments to the `scp` protocol. The following table lists these arguments:

| Argument | Description | Example |
| --- | --- | --- |
| `-P` | This argument allows you to specify a port number. Specify the remote server if the remote server does not use the default SSH port (`22`). | `scp -P 372 /home/user-temp/user-logs.tar.gz root@domain.com:/home/temp/` |
| `-i` | This argument allows you to specify a key file if the remote server requires key-based authentication. | `scp -i key-name /home/user-temp/user-logs.tar.gz root@domain.com:/home/temp/` |
| `-v` | This argument causes the `scp` utility to produce verbose output. Use this argument if you experience problems with the `scp` utility. | `scp -v /home/user-temp/user-logs.tar.gz root@domain.com:/home/temp/` |

## Extract the compressed backups

After you transfer the two compressed backups and finish the transfer of the account, extract the compressed backups to their appropriate locations. To extract the compressed backups to their appropriate locations, run the following command:

```perl
tar -xvzf $file-to-extract.tar.gz $/path/to/place/contents/
```

This command uses the `-x` argument instead of the `-c` argument. The `-x` argument tells the `tar` utility to extract information from the specified files.

To restore the user’s `public_html` directory to the `/home/user` directory and extract the Apache logs to the `/usr/local/apache/domlogs` directory, run the following two `tar` commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>tar -xvzf /home/temp/user-backup.tar.gz /home/user/<br>tar -xvzf /home/temp/user-logs.tar.gz /usr/local/apache/domlogs/ <br>``` |

Note:

When you run these two commands, you transfer and restore the backups that you created, and successfully move the account.


#### Additional Documentation

* * *

- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [The transfer\_account\_as\_user Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×