---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/"
title: "How to Create Custom Jailed Shell Mounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Create Custom Jailed Shell Mounts


[jailedshell](https://docs.cpanel.net/tags/jailedshell/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#overview)

* * *

[Create custom mounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#create-custom-mounts)

* * *

[Add directories to a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#add-directories-to-a-custom-mount)

* * *

[Add files to a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#add-files-to-a-custom-mount)

* * *

[Specifying paths](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#specifying-paths)

* * *

[Unmount a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#unmount-a-custom-mount)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#overview)

* * *

[Create custom mounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#create-custom-mounts)

* * *

[Add directories to a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#add-directories-to-a-custom-mount)

* * *

[Add files to a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#add-files-to-a-custom-mount)

* * *

[Specifying paths](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#specifying-paths)

* * *

[Unmount a custom mount](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#unmount-a-custom-mount)

* * *

## How to Create Custom Jailed Shell Mounts

Last modified: _2024 February 19_

* * *

## Overview

You can create custom jailed shell mounts to let users access additional directories on the server. You can also allow custom access to files.

## Create custom mounts

You can create custom mounts for files and directories.

Important:

Custom mounts are **read-only** for jailshell users.

### Add directories to a custom mount

To add directories to a custom mount, perform the following steps:

1. Create the `/var/cpanel/jailshell-additional-mounts` file with your preferred editor.

2. In this new file, add each directory as an absolute directory path on a separate line. For example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/usr/local/test1<br>/usr/local/test2<br>/usr/local/test3<br>``` |







Warning:





Do **not** use relative paths **or** append trailing slashes to the directory names. For more information, read the [Specifying paths](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#specifying-paths) section below.

3. Save the file.


### Add files to a custom mount

To add files to a custom mount, perform the following steps:

1. Create the `/var/cpanel/jailshell-additional-files` file with your preferred editor.

2. In this new file, add each file as an absolute directory path on a separate line. For example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/usr/local/test1.txt<br>/usr/local/test2.txt<br>/usr/local/test3.txt<br>``` |







Warning:





Do **not** use relative paths. For more information, read the [Specifying paths](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-create-custom-jailed-shell-mounts/#specifying-paths) section below.

3. Save the file.


### Specifying paths

You **cannot** use relative paths, and you can’t append a trailing slash to the directory names. For example, if you wish to add the `/usr/local/test1` directory, add it in the following format:

```bash
/usr/local/test1
```

Do **not** enter the path in these formats:

- `test1` — This is a relative path.
- `test1/` — This is a relative path and contains a trailing slash.
- `/usr/local/test1/` — This contains a trailing slash.
- `/usr/localtest1``/usr/local/test2``/usr/local/test3` — These are not on separate lines.

Warning:

If you do **not** format the file and directory paths correctly, your server may fail.

## Unmount a custom mount

Important:

You **cannot** remove an entry in the `/var/cpanel/jailshell-additional-mounts` file to unmount a custom mount. To unmount the custom mount, use the `umount` command.

To unmount the `/usr/local/example` directory, run the following command, where `username` represents the cPanel user:

```perl
umount /home/virtfs/username/usr/local/example
```

The system does **not** unmount custom mounts when the user logs out of the jailed shell account.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×