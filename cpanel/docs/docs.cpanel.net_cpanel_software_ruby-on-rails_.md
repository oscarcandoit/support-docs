---
url: "https://docs.cpanel.net/cpanel/software/ruby-on-rails/"
title: "Ruby on Rails | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#main-content)

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
3. [Software](https://docs.cpanel.net/cpanel/software/)
4. Ruby on Rails


[ruby](https://docs.cpanel.net/tags/ruby/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#overview)

* * *

[Create a Ruby on Rails application](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#create-a-ruby-on-rails-application)

* * *

[Create a Rewrite](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#create-a-rewrite)

* * *

[Additional applications and rewrites](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#additional-applications-and-rewrites)

* * *

[Note for resellers and web hosts](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#note-for-resellers-and-web-hosts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#overview)

* * *

[Create a Ruby on Rails application](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#create-a-ruby-on-rails-application)

* * *

[Create a Rewrite](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#create-a-rewrite)

* * *

[Additional applications and rewrites](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#additional-applications-and-rewrites)

* * *

[Note for resellers and web hosts](https://docs.cpanel.net/cpanel/software/ruby-on-rails/#note-for-resellers-and-web-hosts)

* * *

## Ruby on Rails

![](https://docs.cpanel.net/img/cpanel-icons/ruby_on_rails.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/software/ruby-on-rails/)

Last modified: _2024 May 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to create and deploy a Ruby on Rails® application.

Warning:

We **deprecated** this interface in cPanel & WHM version 66.

Note:

- To use this feature, your system administrators **must** enable it for you.
- Before you deploy a Ruby on Rails application, read the [Ruby on Rails](https://guides.rubyonrails.org/) documentation.

## Create a Ruby on Rails application

To create a Ruby application, perform the following steps:

1. Ask your hosting provider to install Ruby on your system via the following [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) packages:

   - The `ea-apache24-mod_env` module.
   - The `ea-ruby24-ruby-devel` module.
2. Create a Ruby application on your server. For an example of how to do this, read our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation.
3. Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) to register the application.

## Create a Rewrite

Because Ruby on Rails uses its own server and does not respond on the standard HTTP port number `80`, you **must** specify the port where site visitors can access your Ruby on Rails application (for example, `example.com:12001`).

Warning:

- Ruby application port numbers increment automatically with every new application. If you are on a shared server, the system assigns the next available port number to your application.
- Your first application will not necessarily run on port `12001`.

To configure Ruby to respond without the need for visitors to specify a port number, create a rewrite.

To configure a rewrite, perform the following steps:

1. In the _Create A Rewrite_ table, click _Create Rewrite_ for the appropriate application
2. From the menu, select the domain, subdomain, or addon domain on which you wish to run your Ruby application.
   - To run the application from a new page within your domain, enter the page name that you wish to use in the available text box.
3. Click _Save_.

You can perform the following actions in the _Current Rewrites_ table:

- To change an application path name, enter the path name in the text box.
- To save an application rewrite, click _Save_.
- To delete an application rewrite, click _Delete_.

### Additional applications and rewrites

To run multiple Ruby applications, you **must** configure additional ports to respond with Ruby on Rails and, if necessary, additional rewrites to disguise the port change.

- To add additional Rails applications, follow the steps in the Create a Ruby on Rails application section.
- The new application will respond on the next available port number (for example, if your first application runs on port `12001`, the second may run on port `12002` or higher).





Warning:




Ruby application port numbers increment automatically with every new application. If you are on a shared server, the system assigns the next available port number to your application. Also, your applications’ port numbers may **not** be consecutive.


- To configure an additional rewrite, follow the steps in the Create a Rewrite section.
- You will need to use a new domain, addon domain, subdomain, or page (for example, `example.com/RubyApplication`) for the rewrite.





Note:




You **cannot** configure two Ruby applications to respond on the same domain, subdomain, addon domain, or page.



## Note for resellers and web hosts

You can limit the number of Rails applications that your customers can install in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM » Home » Account Functions » Modify An Account_). Perform the following steps to set the maximum number of Rails applications:

1. Click the domain name that you wish to limit.
2. In the _Max Mongrel instances (Ruby on Rails)_ text box, enter the maximum number of Rails applications that you wish to allow your customers to install.
3. Click _Save_.

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [Optimize Website](https://docs.cpanel.net/cpanel/software/optimize-website/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×