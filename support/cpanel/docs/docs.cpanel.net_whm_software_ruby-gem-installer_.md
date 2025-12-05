---
url: "https://docs.cpanel.net/whm/software/ruby-gem-installer/"
title: "Ruby Gem Installer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/ruby-gem-installer/#main-content)

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
4. Ruby Gem Installer


[whmui](https://docs.cpanel.net/tags/whmui/) [ruby](https://docs.cpanel.net/tags/ruby/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/ruby-gem-installer/#overview)

* * *

[Ruby Gems Magic User Loader](https://docs.cpanel.net/whm/software/ruby-gem-installer/#ruby-gems-magic-user-loader)

* * *

[Ruby Gem Installer](https://docs.cpanel.net/whm/software/ruby-gem-installer/#ruby-gem-installer)

* * *

[Installed Ruby Gem(s)](https://docs.cpanel.net/whm/software/ruby-gem-installer/#installed-ruby-gems)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/ruby-gem-installer/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/ruby-gem-installer/#overview)

* * *

[Ruby Gems Magic User Loader](https://docs.cpanel.net/whm/software/ruby-gem-installer/#ruby-gems-magic-user-loader)

* * *

[Ruby Gem Installer](https://docs.cpanel.net/whm/software/ruby-gem-installer/#ruby-gem-installer)

* * *

[Installed Ruby Gem(s)](https://docs.cpanel.net/whm/software/ruby-gem-installer/#installed-ruby-gems)

* * *

## Ruby Gem Installer

![](https://docs.cpanel.net/img/whm-icons/module_installers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/software/ruby-gem-installer/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

We deprecated this interface in cPanel & WHM version 66. To create a Ruby application in cPanel & WHM version 66 and later, perform the following steps:

1. Install Ruby via the following [EasyApache 4](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/) RPMs:

   - The `ea-apache24-mod_env` module.
   - The `ea-ruby27-ruby-devel` module.
2. Create a Ruby application on your server. For an example of how to do this, read our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation.
3. Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) to register the application.

Gems are Ruby programs and libraries that Ruby developers distribute in easy-to-install packages.

This section of the _Module Installers_ interface allows you to manage Ruby gems from the [RubyGems.org](https://rubygems.org/) repository. To manage installed and available Ruby gems, click _Manage_ next to _Ruby Gem_.

## Ruby Gems Magic User Loader

This feature allows users to install Ruby gems to your server in order to integrate them into scripts.

To enable this option, click _Enable_. To disable this option, click _Disable_.

Note:

Users do **not** need to specify a separate path to the gems that they install through the _Ruby Gems Magic User Loader_ interface.

## Ruby Gem Installer

This WHM feature allows you to download and install Ruby gems. The interface allows you to search the [RubyGems.org](https://rubygems.org/) central repository. The interface will list Ruby gems that match your search criteria, which allows you to click any of the relevant search results to download and install the gem.

To search for and install a Ruby gem, perform the following steps:

1. Enter your search criteria into the _Search_ text box.

   - To view a list of Ruby gems that are available from [RubyGems.org](https://rubygems.org/), click _Show Available Ruby Gem(s)_.
   - If you know the exact name of the gem that you wish to install, enter its name in the _Install a Ruby Gem_ text box and click _Install Now_.
2. Click _Go_.

   - The interface will display the _Name_, _Version_, _Description_, and any _Actions_ you may perform.
3. To download and automatically install a gem, click the _Install_ link next to the gem.

   - To view a gem’s documentation, click the _Show Docs_ link next to the gem.
   - If you did not find the desired gem, refine your search in the _Search_ text box and click _Go_.

## Installed Ruby Gem(s)

The _Installed Ruby Gem(s)_ table lists all gems that exist on your server.

The Table displays the _Name_ and _Version_ of each gem, as well as the following _Actions_:

- Click _Update_ to update the gem.
- Click _Reinstall_ to reinstall the gem from [RubyGems.org](https://rubygems.org/).
- Click _Uninstall_ to delete the gem from your server.
- Click _Show Docs_ to review the gem’s documentation.

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [Install a Perl Module](https://docs.cpanel.net/whm/software/install-a-perl-module/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×