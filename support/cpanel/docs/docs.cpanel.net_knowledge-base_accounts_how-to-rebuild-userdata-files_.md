---
url: "https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/"
title: "How to Rebuild userdata Files | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. How to Rebuild userdata Files


[backups](https://docs.cpanel.net/tags/backups/) [accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#overview)

* * *

[Rebuild userdata files](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-userdata-files)

* * *

[Rebuild from a valid file](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-valid-file)

* * *

[Rebuild from a recent backup](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-recent-backup)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#overview)

* * *

[Rebuild userdata files](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-userdata-files)

* * *

[Rebuild from a valid file](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-valid-file)

* * *

[Rebuild from a recent backup](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-recent-backup)

* * *

## How to Rebuild userdata Files

Last modified: _2022 December 6_

* * *

## Overview

Warning:

Do **not** perform the steps in this document unless you are **certain** that your server’s `userdata` files are corrupt or do not exist. You should **only** perform these steps when no other method will resolve the issue.

In certain circumstances, your server’s `userdata` files (the files that the `/var/cpanel/userdata/` directory contains for each account) may become corrupt, or may not exist. If this occurs, use the methods in this document to attempt to rebuild these files.

The method that you use depends on whether a valid `httpd.conf` file exists on your server:

- If a valid `httpd.conf` file exists, follow the [Rebuild userdata files with a valid httpd.conf file](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#validfile) steps below.
- If a valid `httpd.conf` file **does not** exist, follow the [Rebuild userdata files from a recent backup](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-recent-backup) steps below.

Note:

The steps below assume that you have already logged in to your server via SSH as the `root` user.

## Rebuild userdata files

### Rebuild from a valid file

Warning:

These steps **require** that a valid `httpd.conf` file exists on your server. If one does not exist, rebuild userdata files [from a recent backup](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-from-a-recent-backup) instead.

[Move the corrupt userdata directory to a new location.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#move-the-corrupt-userdata-directory-to-a-new-location-1764175696465324713)

If a `userdata` directory currently exists on your server, use the `mv` command to move it and its contents to a new location.

To do this, run the following command:

```perl
mv /var/cpanel/userdata /var/cpanel/userdata.orig
```

[Create a new userdata directory.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#create-a-new-userdata-directory-1764175696465701705)

Use the `mkdir` command to create a new `userdata` directory.

To do this, run the following command:

```perl
mkdir /var/cpanel/userdata
```

[Run the userdata\_update script to rebuild userdata files for all of your accounts.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#run-the-userdata_update-script-to-rebuild-userdata-files-for-all-of-your-accounts-1764175696466338238)

The `/usr/local/cpanel/bin/userdata_update` script rebuilds `userdata` files for all of the accounts that exist on your server.

Warning:

The `--reset` flag regenerates files and directories within the `userdata` directory. To do this, it uses data from the current Apache configuration file.

- It does **not** conserve existing `userdata` files. **Only** use it as a last resort.
- If you run the `userdata_update` script with the `--reset` flag, and you have not already copied any existing data, the system **will** overwrite the existing `userdata` files and directories.
- This flag **requires** that a valid `httpd.conf` file exists on your server. If one does not exist, you **must** restore your userdata files from your most recent backup.

To do this, run the following command:

```perl
/usr/local/cpanel/bin/userdata_update --reset
```

Note:

Run the `/usr/local/cpanel/bin/userdata_update` script with the `--unpark-addons` flag to fix problems in which the system lists an addon domain as a parked domain (alias). This flag resets all of your server’s userdata files.


[Run the fix\_userdata\_perms script to validate the userdata permissions settings.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#run-the-fix_userdata_perms-script-to-validate-the-userdata-permissions-settings-1764175696466696614)

The `/usr/local/cpanel/bin/fix_userdata_perms` script ensures that all of your server’s `userdata` files and directories use the correct permissions settings.

To do this, run the following command:

```perl
/usr/local/cpanel/bin/fix_userdata_perms
```

[Run the updateuserdatacache script to update the system's cache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#run-the-updateuserdatacache-script-to-update-the-systems-cache-1764175696466965284)

The `/scripts/updateuserdatacache` script ensures that the system properly caches all `userdata` files.

To do this, run the following command:

```perl
/scripts/updateuserdatacache
```

[Rebuild Apache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-apache-1764175696467228544)

You **must** rebuild Apache to use the rebuilt userdata files.

To do this, run the following command:

```perl
/scripts/rebuildhttpdconf
```

[Restart Apache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#restart-apache-1764175696467517473)

After you rebuild Apache, you **must** restart it on your server.

To do this, run the following command:

```perl
/scripts/restartsrv_httpd
```

### Rebuild from a recent backup

Warning:

These steps rebuild userdata files from a recent backup. If a valid `httpd.conf` file exists on your server, we **strongly** recommend that you rebuild from this file instead.

[Copy the corrupt userdata directory to a new location.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#copy-the-corrupt-userdata-directory-to-a-new-location-1764175696468039782)

If a `userdata` directory currently exists on your server, copy it and its contents to the `cpanel` directory.

To do this, run the following command:

```perl
cp -rfp /var/cpanel/userdata /var/cpanel
```

[Create and navigate to a new directory in the root directory.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#create-and-navigate-to-a-new-directory-in-the-root-directory-1764175696468462394)

Create a new directory within the `root` directory and navigate to it.

To do this, run the following command, where `example` represents the name of the new directory:

```perl
mkdir /root/example && cd /root/example
```

[Extract the contents of your backup file to the new directory.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#extract-the-contents-of-your-backup-file-to-the-new-directory-1764175696468887445)

The method that you use to extract the backup depends on the type of backup file.

For example, if your backup file is a `.tar.gz` file, run the following command, where `backup.tar.gz` represents the absolute path to the backup file:

```perl
tar -zxvf backup.tar.gz
```

[Run the updateuserdatacache script to update the system's cache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#run-the-updateuserdatacache-script-to-update-the-systems-cache-1764175696469143544)

The `/scripts/updateuserdatacache` script ensures that the system properly caches all userdata files.

To do this, run the following command:

```perl
/scripts/updateuserdatacache
```

[Rebuild Apache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#rebuild-apache-1764175696469433962)

You **must** rebuild Apache to use the rebuilt `userdata` files.

To do this, run the following command:

```perl
/scripts/rebuildhttpdconf
```

[Restart Apache.](https://docs.cpanel.net/knowledge-base/accounts/how-to-rebuild-userdata-files/#restart-apache-1764175696469677718)

After you rebuild Apache, you **must** restart it on your server.

To do this, run the following command:

```perl
/scripts/restartsrv_httpd
```

#### Additional Documentation

* * *

- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×