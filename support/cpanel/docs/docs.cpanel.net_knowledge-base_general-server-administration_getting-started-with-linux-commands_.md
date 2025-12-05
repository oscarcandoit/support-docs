---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/"
title: "Getting Started with Linux Commands | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. Getting Started with Linux Commands


[ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#overview)

* * *

[Common Linux commands](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#common-linux-commands)

* * *

[Run multiple commands on the same line](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#run-multiple-commands-on-the-same-line)

* * *

[Common configuration files and directories](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#common-configuration-files-and-directories)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#overview)

* * *

[Common Linux commands](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#common-linux-commands)

* * *

[Run multiple commands on the same line](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#run-multiple-commands-on-the-same-line)

* * *

[Common configuration files and directories](https://docs.cpanel.net/knowledge-base/general-server-administration/getting-started-with-linux-commands/#common-configuration-files-and-directories)

* * *

## Getting Started with Linux Commands

Last modified: _2025 February 13_

* * *

## Overview

While cPanel & WHM automates many server administration tasks, familiarity with the Linux® command line interface (CLI) can prove useful for both WHM and cPanel users. This documentation gives a brief overview of some basic Linux commands that you may wish to use as you manage your website or server.

Note:

For steps to access the command line, read our [How to Access the Command Line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line) documentation.

## Common Linux commands

Note:

- To execute a command, enter the command with any required options and press `Enter`.
- In the following examples, replace `FILENAME` with the relative path to the file.

The following lists some basic Linux commands and their functions:

| Command | Description | Example |
| --- | --- | --- |
| `cat FILENAME` | Print the contents of the specified file to the CLI. | ```bash<br>cat filename.txt<br>``` |
| `cat /dev/vcs1` | View the data that currently displays on your server’s console screen. | ```bash<br>cat /dev/vcs1<br>``` |
| `cd LOCATION` | Navigate between directories. Replace `LOCATION` with the path to the directory that you wish to navigate to. | ```bash<br>cd /usr/local/apache/<br>``` |
| `chmod permissions FILENAME` | Change a [file’s octal permissions](https://en.wikipedia.org/wiki/File-system_permissions). For more information, read Wikipedia’s [`chmod` command article](http://en.wikipedia.org/wiki/Chmod). | ```bash<br>chmod 755 myfile.txt<br>``` |
| `chown USER:GROUP FILENAME` | Change a file’s user and group ownership. Replace `USER` with the user to whom you wish to grant ownership of the file, `GROUP` with the group name, and `FILENAME` with the relative path to the file. | ```bash<br>chown user:usersgroup usersfile.txt<br>``` |
| `cp FILE1 FILE2` | Copy a file (`FILE1`) into a new file (`FILE2`). | ```bash<br>cp original.txt /copies/duplicate.txt<br>``` |
| `du` | Show the system’s current disk usage for each directory and subdirectory. | ```bash<br>du<br>``` |
| `file FILENAME` | Guess a file’s type, based on the file’s contents. | ```bash<br>file filename<br>``` |
| `grep string FILENAME` | Search for a string in a specified file and print each line that contains a match to the CLI. Replace `string` with a single word, or multiple words within single quotes (`''`). | ```bash<br>grep 'thisis anexample' filename.txt<br>``` |
| `last` | List which users recently logged in and the timestamp for each login. | ```bash<br>last<br>``` |
| `ln -s file1 file2` | Create a symbolic link between the two specified files. Replace `file1` with the relative path to the existing file, and `file2` with the relative path to the new symbolic link file. | ```bash<br>ln -s /pointtome/file1.txt symlink-file2.txt<br>``` |
| `ls` | List files and directories that exist within your current directory. This command resembles the `dir` command in Windows®. | ```bash<br>ls<br>``` |
| `ls -al` | View [dotfiles](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory) (filenames that begin with a period) and additional file and directory details. | ```bash<br>ls -al<br>``` |
| `more FILENAME` | Print the contents of a file to the CLI, one screen at a time. | ```bash<br>more filename.txt<br>``` |
| `netstat` | List all of the server’s current network connections. | ```bash<br>netstat<br>``` |
| `pico FILENAME` | Open the specified file in the [pico text editor](https://en.wikipedia.org/wiki/Pico_(text_editor)). | ```bash<br>pico filename.txt<br>``` |
| `ps` | Return information about the server’s current processes. <br>Note:<br>To view all of the running processes add the `-auxww` or `-cef` option to this command. | ```bash<br>ps<br>``` |
| `rm FILENAME` | Delete the specified file. After you run this command, the system prompts you to confirm the file’s deletion. | ```bash<br>rm trash.txt<br>``` |
| `tail -## FILENAME` | Print the last lines of a file to the CLI, where `##` represents the number of lines to print. | ```bash<br>tail -20 filename.txt<br>``` |
| `touch FILENAME` | Create an empty file in the specified location. | ```bash<br>touch example.txt<br>``` |
| `vi FILENAME` | Open the specified file in the [vi text editor](https://en.wikipedia.org/wiki/Vi). | ```bash<br>vi filename.txt<br>``` |
| `w` | List currently logged-in users and the location from which they logged in. | ```bash<br>w<br>``` |
| `wc FILENAME` | Display the word count for a specific file. | ```bash<br>wc example.txt<br>``` |
| `whereis NAME` | Query applications that match the `NAME` value. You can find the most common applications in the following locations: <br>- `/usr/sbin/sendmail`<br>- `/usr/bin/perl`<br>- `/bin/mail`<br>- `/usr/bin/php` | ```bash<br>whereis perl<br>``` |

### Run multiple commands on the same line

Various command-line tasks may require that you use different commands on the same line. Linux includes easy methods to perform these tasks:

- Use the pipe character (`|`) to retrieve data from one program and “pipe” it to another program.
- Use a single greater-than bracket (`>`) to create a new file if the file does not already exist, or to overwrite any existing content if the file does exist.
- Use a double greater-than bracket (`>>`) to create a new file if the file does not already exist, or to append the new data to the file if the file does exist.
- Use a single less-than bracket (`<`) to send input from a file to a command.

The following are examples of how to combine tasks into a single command:

| Command | Description |
| --- | --- |
| ```bash<br>grep User /usr/local/apache/conf/httpd.conf | more<br>``` | This command searches for all of the lines in the `httpd.conf` file that match the `User` search term, and then prints the results to your terminal one screen at a time. |
| ```bash<br>last -a > /root/lastlogins.tmp<br>``` | This command prints all of the current login history to the `/root/lastlogins.tmp` file. |
| ```bash<br>mysql --skip-column-names --batch -e 'show processlist' | wc -l<br>``` | This command lists the number of MySQL® threads. If subselect expressions start new threads, the output of the show `processlist` command includes them. |
| ```bash<br>netstat -an | grep :80 | wc -l<br>``` | This command shows the number of active connections to Apache®. Apache’s `httpd` daemon runs on port `80`. |
| ```bash<br>tail -10000 /var/log/exim_mainlog | grep 'example\.com' | more<br>``` | This command finds the last 10,000 lines from the `/var/log/exim_mainlog` file, searches those lines for all occurrences of the string `example.com`, and then prints the search results to your terminal one screen at a time. <br>Note:<br>The system treats periods (`.`) in a command as wildcard characters. Precede each period with a backslash (`\`) to instruct grep to interpret the period literally. |

## Common configuration files and directories

You can find common configuration files and directories in the following locations on your server:

| Service | Locations |
| --- | --- |
| Exim | - `/etc/exim.conf`<br>- `/var/log/exim_mainlog`<br>- `/var/log/exim_rejectlog`<br>- `/etc/valiases/`<br>- `/etc/vfilters/`<br>- `/home/username/.forward` |
| MySQL | - `/root/.my.cnf`<br>- `/etc/my.cnf`<br>- `/var/lib/mysql/` |
| ProFTPD | - `/etc/proftpd.conf`<br>- `/var/log/xferlog`<br>- `/etc/proftpd/` |
| SSH | `/etc/ssh/sshd_config` |
| System | - `/var/log/messages`<br>- `/var/log/dmesg` |

#### Additional Documentation

* * *

- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [Manage Shell Access](https://docs.cpanel.net/whm/account-functions/manage-shell-access/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×