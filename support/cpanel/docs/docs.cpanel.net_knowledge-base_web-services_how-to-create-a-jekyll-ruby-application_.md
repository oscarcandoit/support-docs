---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/"
title: "How to Create a Jekyll® Ruby Application | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#main-content)

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
4. How to Create a Jekyll® Ruby Application


[ruby](https://docs.cpanel.net/tags/ruby/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#overview)

* * *

[Install Jekyll](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#install-jekyll)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#pre-installation-settings)

* * *

[Install the bundler and jekyll gems](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#install-the-bundler-and-jekyll-gems)

* * *

[Create your jekyll website](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#create-your-jekyll-website)

* * *

[Build and deploy the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#build-and-deploy-the-application)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#overview)

* * *

[Install Jekyll](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#install-jekyll)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#pre-installation-settings)

* * *

[Install the bundler and jekyll gems](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#install-the-bundler-and-jekyll-gems)

* * *

[Create your jekyll website](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#create-your-jekyll-website)

* * *

[Build and deploy the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-jekyll-ruby-application/#build-and-deploy-the-application)

* * *

## How to Create a Jekyll® Ruby Application

Last modified: _2024 February 22_

* * *

## Overview

This document describes how to install the Jekyll web application. The Jekyll® application is a static website generator that functions on the Ruby platform.

Warning:

- Because WebPros International, LLC doesn’t develop or ship Jekyll, cPanel Technical Support can’t help you with this process.
- We recommend that **only** experienced system administrators perform these steps.
- We are **not** responsible for any data loss.

Note:

- We recommend that you perform the steps in this document via the command line as a cPanel user unless otherwise specified.

- You can also perform these steps in cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_).

- You do **not** need to register the Jekyll application’s configurations in cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).

- To use this feature, the cPanel account **must** possess compiler access in WHM’s [_Compiler Access_](https://docs.cpanel.net/whm/security-center/compiler-access/) interface ( _WHM » Home » Security Center » Compiler Access_). If the account does **not** possess compiler access, the system will return an error similar to the following message:


```perl
make: execvp: gcc: Permission denied
```

- In this document, `hyde` represents the application’s name.

For more information, read Jekyll’s documentation.

## Install Jekyll

### Pre-installation settings

Before you begin, make certain that your system has the most recent version of `rubygems`. To update `rubygems` to the latest version, run the following command as the `root` user:

```perl
source /opt/cpanel/ea-ruby27/enable && gem update --system
```

Additionally, make **certain** that the following EasyApache 4 RPMs exist on your server:

- `ea-ruby27-mod_passenger`



Note:




If you enable this module, the system will disable [Apache’s `mod_userdir` module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/).


- `ea-ruby27-ruby-devel`


If you need to install these RPMs, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) or run the following command as the `root` user:

```perl
yum install ea-ruby27-mod_passenger ea-ruby27-ruby-devel
```

### Install the bundler and jekyll gems

Note:

Installing the bundler as a non-`root` user will cause the application to fail. If the `/bin/bundler` directory exists in a user’s home directory, it was **not** installed by the `root` user.

To install the `bundler` and `jekyll` Ruby gems, run the following command as the `root` user:

```perl
scl enable ea-ruby27 'gem install bundler jekyll'
```

If you do **not** wish to use the `scl` utility, perform the following steps to install the `bundler` Ruby gem:

1. Log in to the server as a cPanel user.

2. Add the following line to your shell’s `rc` file (for example, `/home/user/.bashrc` file):


```perl
source /opt/cpanel/ea-ruby27/enable
```

3. Log out of your terminal session, and log back in again.







Note:




You can also create an additional terminal session.


4. Run the `gem install bundler jekyll` command.


### Create your jekyll website

After you install the `bundler` and `jekyll` Ruby gems, create your application. To do this, run the following command in your current directory:

```perl
scl enable ea-ruby27 'jekyll new hyde'
```

### Build and deploy the application

After you create the application, build the application and deploy it. To do this, change to the `/hyde` directory and run the following command:

```perl
scl enable ea-ruby27 'jekyll build --baseurl '/hyde' --destination ~/public_html/hyde'
```

After you run this command, navigate to the new site in a web browser with the following url:

```perl
http://example.com/hyde
```

Note:

In this example, `example.com` represents your website.

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [Ruby Gem Installer](https://docs.cpanel.net/whm/software/ruby-gem-installer/)
- [Ruby on Rails](https://docs.cpanel.net/cpanel/software/ruby-on-rails/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×