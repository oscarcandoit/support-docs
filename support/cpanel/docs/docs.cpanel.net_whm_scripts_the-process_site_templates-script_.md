---
url: "https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/"
title: "The process_site_templates Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The process\_site\_templates Script


[sitepublisher](https://docs.cpanel.net/tags/sitepublisher/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#overview)

* * *

[Run the /scripts/process\_site\_templates script](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#run-the-scriptsprocesssitetemplates-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#overview)

* * *

[Run the /scripts/process\_site\_templates script](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#run-the-scriptsprocesssitetemplates-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/#example)

* * *

## The process\_site\_templates Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script/)

Last modified: _2024 February 22_

* * *

## Overview

Important:

You **cannot** run this script as the `root` user.


The `/scripts/process_site_templates` script processes template files and user-provided data to create a Site Publisher website.

When users publish a Site Publisher website, the script performs the following actions:

1. The script logs template information and the target directory to the `/usr/local/cpanel/logs/error_log` file.
2. The script saves a copy of the target directory’s current contents as a tarball in the `/home/user/site_publisher/backups/` directory, where `user` represents the account’s username.






Note:




If the system encounters a file system or file quota error during this step, it will **not** save the tarball and will **not** publish the new Site Publisher website.


3. The script deletes any Site Publisher backup tarballs that are more than 30 days old.
4. The script generates and saves the new Site Publisher website’s files.






Notes:





- If one of the new website’s files conflicts with an existing file, the system overwrites the existing file with the new file.
- If the system encounters an error during this step, it restores the target directory’s original contents from the backup tarball and does **not** publish the new Site Publisher website.
- The system saves configuration information for the new website in the `/home/user/site_publisher/configurations` directory, where `user` represents the account’s username. It saves this files as the `home-user-public_html-example.com.json` file, where `home-user-public_html-example.com` represents the Site Publisher website’s target directory, with hyphens ( - ) instead of slashes ( / ).

## Run the `/scripts/process_site_templates` script

To run the `/scripts/process_site_templates` script on the command line, use the following format:

```
/scripts/process_site_templates [options]
```

### Options

You can use the following options with the `/scripts/process_site_templates` script:

- `--define` — Define a template variable and its desired value. Each template variable requires a separate `--define` flag.



Important:





The template that you specify determines the values to define.



- If you use a cPanel-provided template, read our [Guide to Site Publisher Templates](https://api.docs.cpanel.net/guides/guide-to-site-publisher-templates/) documentation for a list of template variables.
- If you use a third-party template, consult that template’s documentation or its `meta.json` file.

- `--help` — Display a help message.

- `--source` — Define the absolute path to the template’s source location.
  - `/var/cpanel/customizations/site_templates/` — The `root` user’s templates.
  - `/home/username/var/cpanel/reseller/site_templates/` — A reseller’s templates, where `username` represents the reseller’s username.
  - `/usr/local/cpanel/3rdparty/share/site_templates/` — cPanel-provided templates.
- `--target` — Define the absolute path to the directory to which you wish to publish the Site Publisher website. Generally, you should specify the target domain’s home directory path.


### Example

For example, to use the `/scripts/process_site_templates` script, you could run the following command:

```
/scripts/process_site_templates --source=/var/cpanel/customizations/site_templates/my_template --target=/home/username/public_html/example.com --define business_name="National Emotion, Inc." --define phone="867-5309" --define contact="jenny@example.com"
```

This example uses the `root` user’s `my_template` template to publish a website for the `username` cPanel user’s `example.com` domain, and defines values for three parameters that the `my_template` template uses.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×