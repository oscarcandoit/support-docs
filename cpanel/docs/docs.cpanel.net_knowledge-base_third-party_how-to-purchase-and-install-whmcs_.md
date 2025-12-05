---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/"
title: "How to Purchase and Install WHMCS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. How to Purchase and Install WHMCS


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#overview)

* * *

[Install WHMCS as Site Software](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-as-site-software)

* * *

[One-click installation](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#one-click-installation)

* * *

[Advanced configuration installations](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#advanced-configuration-installations)

* * *

[Install WHMCS Manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#overview)

* * *

[Install WHMCS as Site Software](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-as-site-software)

* * *

[One-click installation](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#one-click-installation)

* * *

[Advanced configuration installations](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#advanced-configuration-installations)

* * *

[Install WHMCS Manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually)

* * *

## How to Purchase and Install WHMCS

Last modified: _2024 February 8_

* * *

## Overview

WHMCS offers an all-in-one billing and automation platform that automates all aspects of a web hosting business. This document describes how to install WHMCS on your cPanel account. You can purchase a license for WHMCS in the [cPanel Store](https://cpanel.net/extensions/#whmcs). For more about managing WHMCS, read the [WHMCS documentation](https://help.whmcs.com/).

## Install WHMCS as Site Software

Before you install WHMCS as Site Software, your hosting provider **must** enable this cPAddon in WHM’s [_Install cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/) interface ( _WHM » Home » cPanel » Install cPAddons Site Software_).

### One-click installation

For the one-click installations, log in to your cPanel account and perform the following steps:

Note:

The one-click installation requires you to set up a contact email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).

1. Navigate to cPanel’s [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface ( _cPanel » Home » Software » Site Software_).

2. Under _Automation_, click _WHMCS_.

3. Under the _Install_ tab, select a domain from the _Installation Domain_ menu. The system will check whether the domain has a WHMCS license.
   - If the domain owns a license, click _Install_.

   - If you possess a license for the domain, but the system does not detect it, click _Enter a license manually_. Enter your WHMCS license in the _License Key_ text box and click _Install_.

   - If the domain does not possess a license, click _Buy License_. The system will connect to the [cPanel Store](https://cpanel.net/extensions/#whmcs) so you can buy a license. After your purchase, the cPanel Store will return you to the _Site Software_ interface. Then, click _Install_.
4. After the installation completes, the interface will provide a success message, the username, password, and the WHMCS administration URL.


### Advanced configuration installations

For advanced configuration installations, log in to your cPanel account and perform the following steps:

01. Navigate to cPanel’s [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface ( _cPanel » Home » Software » Site Software_).

02. Under _Automation_, click _WHMCS_.

03. Under the _Install_ tab, select a domain from the _Installation Domain_ menu. The system will check whether the domain has a WHMCS license.

04. Click _Show Advanced Configuration_. The interface will display additional configuration options.







    Note:





- If you have not entered an email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel »Home » Preferences » Contact Information_), the interface will automatically display the advanced configuration options.

- If you possess a license for the domain, but the system does not detect it, click _Enter a license manually_. Enter your WHMCS license in the _License Key_ text box.

- The _Advanced Configuration_ feature does not support the _Buy License_ option. You can visit the [cPanel Store](https://cpanel.net/extensions/#whmcs) in a new browser window to purchase a WHMCS license.


05. Under _Installation URL_, enter a directory path. To install directly to the domain’s document root, leave the text box blank.

06. Enter an administrator username in the _Admin User_ text box.

07. Enter and confirm the new password in the appropriate text boxes.







    Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [Password and Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.

08. Enter your email address in the _Email_ text box.

09. Click _Install_.

10. After the installation completes, the interface will provide a success message and the WHMCS administration URL. When you navigate to the URL, log in with the username and password that you provided during the installation process.


## Install WHMCS Manually

Before you install WHMCS, you will need to install ionCube® and set up your database.

- To install ionCube, follow the directions in the WHMCS [IonCube Installation Tutorial](https://docs.whmcs.com/Ioncube_Installation_Tutorial#For_cPanel) documentation.
- After you install ionCube, follow the instructions in our [Database Wizard](https://docs.cpanel.net/cpanel/databases/database-wizard/) documentation to set up your database.

To install WHMCS, perform the following steps:

01. Navigate to the [Download WHMCS](https://www.whmcs.com/download/cpanelstore) website.
02. Enter your license key in the text box and click _Validate and Download_. The system will download a `.zip` file that contains the WHMCS files.
03. Unzip the contents of the `.zip` file to a folder on your computer.
04. In the WHMCS folder, rename the `configuration.php.new` file to `configuration.php`.
05. Upload the WHMCS folder to your website. If the system returns an error, upload the folder in binary mode.






    Note:





- The default WHMCS directory name is `whmcs`.
- You can rename the WHMCS directory or create a subdirectory for the WHMCS files on the server. For example, you can create a `clients` or `billing` subdirectory in the `public_html` directory.
- You **cannot** use the name `admin` for the WHMCS directory. The administration directory uses `admin` as a name.

06. Navigate in your web browser to `example.com/whmcs/install/install.php`, where `example.com` represents your domain.






    Note:





    If you renamed the WHMCS directory or put the WHMCS files in a directory other than `public_html`, replace `whmcs` with the directory’s name in the URL. For example, if your WHMCS directory name is `billing`, navigate to `example.com/billing/install/install.php`.

07. Follow the instructions to complete the installation.
08. On the command line, run this command as the `root` user to enter the WHMCS directory:



    ```go
    cd /home/example/public_html/billing
    ```





    Note:





    Replace this directory path with the path to your WHMCS directory.

09. Change the permissions on the configuration file:



    ```go
    chmod 400 configuration.php
    ```

10. Change the permissions on the directories WHMCS uses to write files:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>3<br>``` | ```go<br>chmod 755 attachments<br>chmod 755 downloads<br>chmod 755 templates_c<br>``` |







    Important:





    Some webserver environments may require that you set permissions of `777` on these directories. Do **not** set `777` permissions unless your account is the **only** one with [shell access](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) on the server.

11. Navigate to the directory where you uploaded WHMCS.
12. Delete the `install` directory.
13. In your web browser, log in to your WHMCS admin area at `example.com/whmcs/admin` with the username and password you created during the installation process in step 7.






    Note:





    If you renamed the WHMCS directory or put the WHMCS files in a directory other than `public_html`, replace `whmcs` with the directory’s name in the URL. For example, if your WHMCS directory name is `billing`, navigate to `example.com/billing/admin`.


#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×