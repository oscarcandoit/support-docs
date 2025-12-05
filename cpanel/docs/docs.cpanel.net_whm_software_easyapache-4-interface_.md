---
url: "https://docs.cpanel.net/whm/software/easyapache-4-interface/"
title: "EasyApache 4 Interface | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/easyapache-4-interface/#main-content)

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
3. [Software](https://docs.cpanel.net/whm/software/)
4. EasyApache 4 Interface


[whmui](https://docs.cpanel.net/tags/whmui/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/easyapache-4-interface/#overview)

* * *

[EasyApache 4 Home interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/#easyapache-4-home-interface)

* * *

[Convert to profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#convert-to-profile)

* * *

[Save as profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#save-as-profile)

* * *

[Upload a profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#upload-a-profile)

* * *

[From a local file](https://docs.cpanel.net/whm/software/easyapache-4-interface/#from-a-local-file)

* * *

[From a URL](https://docs.cpanel.net/whm/software/easyapache-4-interface/#from-a-url)

* * *

[Install a preconfigured profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#install-a-preconfigured-profile)

* * *

[Customize a preconfigured profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#customize-a-preconfigured-profile)

* * *

[Create a custom profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#create-a-custom-profile)

* * *

[Command line changes](https://docs.cpanel.net/whm/software/easyapache-4-interface/#command-line-changes)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/easyapache-4-interface/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/easyapache-4-interface/#overview)

* * *

[EasyApache 4 Home interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/#easyapache-4-home-interface)

* * *

[Convert to profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#convert-to-profile)

* * *

[Save as profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#save-as-profile)

* * *

[Upload a profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#upload-a-profile)

* * *

[From a local file](https://docs.cpanel.net/whm/software/easyapache-4-interface/#from-a-local-file)

* * *

[From a URL](https://docs.cpanel.net/whm/software/easyapache-4-interface/#from-a-url)

* * *

[Install a preconfigured profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#install-a-preconfigured-profile)

* * *

[Customize a preconfigured profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#customize-a-preconfigured-profile)

* * *

[Create a custom profile](https://docs.cpanel.net/whm/software/easyapache-4-interface/#create-a-custom-profile)

* * *

[Command line changes](https://docs.cpanel.net/whm/software/easyapache-4-interface/#command-line-changes)

* * *

## EasyApache 4 Interface

![](https://docs.cpanel.net/img/whm-icons/easyapache_4.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/software/easyapache-4-interface/)

Last modified: _2024 June 20_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to update and install Apache, PHP, and other components of your web server.

Note:

- This interface does **not** display the exact package names. The actual package names on the system start with the `ea-` prefix.
- On systems that run Ubuntu®, the package names use a hyphen (`-`) rather than an underscore (`_`).
- Only `root` or resellers with `root`-level privileges can access the EasyApache 4 interface.
- An [EasyApache 4 profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#easyapache-4-profile) acts as a template. You may **only** provision one profile at a time. When you provision a profile, the system will install that profile’s packages, and uninstall other packages. You can see which packages your currently-provisioned profile contains in the _Currently Installed Packages_ section. For more information about profiles, read our [EasyApache 4 — Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/) documentation.
- The EasyApache 4 interface provides a variety of recommendations about the packages that you can select to create or customize a profile. For more information, read our [EasyApache 4 Recommendations](https://docs.cpanel.net/ea4/basics/easyapache-4-recommendations) documentation.

## EasyApache 4 Home interface

When you open the _EasyApache 4_ interface, the system displays the EasyApache 4 _Home_ interface. The _Home_ interface contains the following sections:

- _Run system update_ — This link redirects you to the _System Update_ interface ( _WHM » Home » Software » System Update_) and allows you to update the RPMs on your system.
- _Currently Installed Packages_ — This section displays your system’s current configuration. Click _View all packages_ to see the currently installed packages, _Customize_ to make changes, or _Convert to profile_ to save the currently-installed packages as a profile.
- _Available Profiles_ — This section displays all of the currently available profiles on your system.
- _Upload a profile_ — Click _Upload a profile_ to upload a custom profile. For more information, read our [EasyApache 4 - Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile) documentation.

## Convert to profile

To convert your configuration into a custom profile, perform the following steps:

1. Click _Convert to profile_ in the _Currently Installed Packages_ section.
2. Enter the name of your profile. The EasyApache 4 interface displays this name.






Note:





To overwrite an existing profile of the same name, select the _Overwrite an existing profile_ checkbox.

3. Enter the file name of your profile. Do **not** include the `.json` extension.
4. Optionally, enter a description for your profile. The interface will display this description.
5. Optionally, enter a comma-separated list of tags.
6. Click _Convert_.
The system saves the new profile to the `/etc/cpanel/ea4/profiles/custom` directory.

## Save as profile

You can save a new profile at any point during the EasyApache 4 configuration process. To save you configuration as a profile, perform the following steps:

1. Click _Save as profile_ during the EasyApache 4 configuration process.
2. Enter the name of your profile. The EasyApache 4 interface displays this name.






Note:





To overwrite an existing profile of the same name, select the _Overwrite an existing profile_ checkbox.

3. Enter the file name of your profile. Do **not** include a `.json` extension.






Note:





You **cannot** enter a file name of `.` or `..`, or a file name that contains the `/` or `NULL` character.

4. Enter a description for your profile, if desired.
5. Click _Save_.

The system saves the new profile to the `/etc/cpanel/ea4/profiles/custom` directory.

## Upload a profile

Note:

Profile files **must** use a JSON format. The system will **not** display files in any other format. For more information, read our [EasyApache 4 - Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile) documentation.

### From a local file

To upload a custom profile from a local file, perform the following steps:

1. Click _Upload a profile_.
2. Click _Browse_ and select the profile that you wish to upload.






Note:





To overwrite an existing profile of the same name, select the _Overwrite an existing profile_ checkbox.

3. Click _Upload_.
The system will upload your file and refresh the EasyApache 4 interface.

### From a URL

To upload a file from a URL, perform the following steps:

1. Click _Retrieve from URL_.
2. Enter the URL that you wish to upload in the text box.
3. Select the checkbox to fetch the URL’s contents.
4. Click _Upload_.

The system will upload your file and refresh the EasyApache 4 interface.

## Install a preconfigured profile

To install a preconfigured profile **without** any changes, perform the following steps:

1. Select the profile that you wish to use and click _Provision_.
2. The interface displays the _Review_ section. The system compares your current profile to the selected profile and lists the following information:

   - The packages that the system will install.
   - The packages that the system will upgrade.
   - The packages that the system will uninstall.
   - Unaffected packages.
3. To accept the changes, click _Provision_.
4. When the provision process completes, click _Done_.

## Customize a preconfigured profile

To install a preconfigured profile with your own customizations, perform the following steps:

01. Select the profile that you wish to use and click _Customize_.
02. Select the MPM module that you wish to install. The interface displays any existing conflicts. Click _Yes_ to resolve any conflicts or _No_ if you do not wish to make the changes.






    Notes:





- You can **only** use one Apache MPM module at a time.
- To navigate between customization options, click that option’s link in the left side of the interface.

03. Click _Next_. The available Apache modules will appear.
04. Select the Apache modules that you wish to install. You can also search for your desired packages.
05. Click _Next_. The available PHP versions will appear.
06. Select the PHP versions that you wish to install. You can also search for your desired packages.






    Note:





    This interface **only** installs cPanel & WHM-provided PHP packages. If you wish to install an alternate, vendor-provided version of PHP, you **must** use a package manager. For more information, read our [How to Locate and Install a PHP Version or Extension](https://docs.cpanel.net/ea4/php/how-to-locate-and-install-a-php-version-or-extension) and [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.

07. If you select a new version of PHP, the system will detect the PHP extensions that already exist for other installed versions of PHP. You can select the following options:






    Notes:





- In the following examples, `php ##` represents the PHP version that you selected.
- If you do **not** select one of the following options, the system **only** installs the selected PHP version and its required extensions.

    - _PHP ## and Extensions_ — This option installs the selected PHP version and all detected extensions.
    - _PHP ## only_ — This option **only** installs the PHP version and its required extensions.
    - _Edit_ — This option displays the proposed PHP extensions. You can deselect any extensions that you do not wish to install.
08. Click _Next_. The available PHP extensions will appear.
09. Select the PHP extensions that you wish to install. Select the checkbox for a version of PHP if you wish to filter your results. You can also search for an extension by name.
10. Click _Next_. The available Ruby packages will appear.
11. Select the Ruby packages that you wish to install.






    Note:





- This section **only** displays Ruby packages if any exist. This section does **not** exist on Ubuntu systems. You must use Passenger instead. To install Passenger on a system that runs Ubuntu, install the `mod-passenger` package in the _Apache Modules_ section. For more information about Passenger for Ubuntu, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications) documentation.
- If you enable Passenger, the system will disable [Apache’s UserDir module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak).

12. Click _Next_. The available additional packages will appear.
13. Select the additional packages that you wish to install.






    Note:





    This section **only** displays additional packages if any exist.

14. Click _Next_. The _Review_ section will appear.
15. Review your selections to confirm the changes. The _Review_ section displays the following information:

    - The packages that the system will install.
    - The packages that the system will upgrade.
    - The packages that the system will uninstall.
    - Unaffected packages.
16. To accept the changes, click _Provision_ to start the build process.
17. When the provision process completes, click _Done_.

## Create a custom profile

To create a custom profile, either click _Upload a profile_ and select the profile that you wish to upload or click _Save as profile_ during the customization process. For more information about custom profiles, read our [EasyApache 4 - Create a Profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile) documentation.

## Command line changes

You can perform some changes on the command line with EasyApache 4. To install or uninstall packages manually, you can use a package manager. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.

We also provide some tools to provision profiles in our `ea-cpanel-tools` package manager.

#### Additional Documentation

* * *

- [Install a Perl Module](https://docs.cpanel.net/whm/software/install-a-perl-module/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×