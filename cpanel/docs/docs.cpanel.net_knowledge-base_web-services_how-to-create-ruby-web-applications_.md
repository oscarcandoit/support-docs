---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/"
title: "How to Create Ruby Web Applications | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#main-content)

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
4. How to Create Ruby Web Applications


[ruby](https://docs.cpanel.net/tags/ruby/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#overview)

* * *

[Create a Ruby application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#create-a-ruby-application)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#overview)

* * *

[Create a Ruby application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/#create-a-ruby-application)

* * *

## How to Create Ruby Web Applications

Last modified: _2024 January 26_

* * *

## Overview

Warning:

In cPanel & WHM version 66, we [**deprecated** the legacy Ruby codebase](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) and plan to remove it in a future release. This legacy Ruby codebase includes Ruby on Rails applications. We will **not** support any applications you create with the following interfaces:

- cPanel’s [_Ruby on Rails_](https://docs.cpanel.net/cpanel/software/ruby-on-rails) interface ( _cPanel » Home » Software » Ruby on Rails_).
- cPanel’s [_RubyGems_](https://docs.cpanel.net/cpanel/software/rubygems) interface ( _cPanel » Home » Software » RubyGems_).
- The _Ruby Gem installer_ feature in WHM’s [_Module Installers_](https://docs.cpanel.net/whm/software/module-installers) interface ( _WHM » Home » Software » Module Installers_).

This document describes how to create and install Ruby web applications in cPanel & WHM version 66 and later that function on the [Phusion Passenger®](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) platform.

Note:

To use this feature, the cPanel account **must** possess compiler access in WHM’s [_Compiler Access_](https://docs.cpanel.net/whm/security-center/compiler-access) interface ( _WHM » Home » Security Center » Compiler Access_). If the account does **not** possess compiler access, the system will return an error similar to the following message:

```perl
make: execvp: gcc: Permission denied
```

## Create a Ruby application

To install a Ruby application in cPanel & WHM version 66 and later, perform the following steps:

1. Install Ruby on your system. To do this, install the `ea-ruby27-mod_passenger` module in the _Ruby via Passenger_ section of the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). For more information about the Ruby set up requirements for Ubuntu®, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications) documentation.







Note:





If you wish to add environment variables to your application, install the following additional RPMs:



- The `ea-apache24-mod_env` module.
- The `ea-ruby27-ruby-devel` module.

For more information about environment variables, read cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) documentation.

2. Create a Ruby web application on your server. For examples of web applications that you can create, read the following documentation:
   - [How to create a Sinatra™ Ruby Application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application)
   - [How to create a Jekyll® Ruby Application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application)
3. Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) to register the application.


#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×