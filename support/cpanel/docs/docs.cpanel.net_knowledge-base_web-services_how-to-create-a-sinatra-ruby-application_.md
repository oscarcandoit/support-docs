---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/"
title: "How to Create a Sinatra Ruby Application | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#main-content)

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
4. How to Create a Sinatra Ruby Application


[ruby](https://docs.cpanel.net/tags/ruby/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#overview)

* * *

[Install Sinatra](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#install-sinatra)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#pre-installation-settings)

* * *

[Install the sinatra gem](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#install-the-sinatra-gem)

* * *

[Create the application directory path](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#create-the-application-directory-path)

* * *

[Create the application’s Ruby files](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#create-the-applications-ruby-files)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#register-the-application)

* * *

[Restart apache](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#restart-apache)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#overview)

* * *

[Install Sinatra](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#install-sinatra)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#pre-installation-settings)

* * *

[Install the sinatra gem](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#install-the-sinatra-gem)

* * *

[Create the application directory path](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#create-the-application-directory-path)

* * *

[Create the application’s Ruby files](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#create-the-applications-ruby-files)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#register-the-application)

* * *

[Restart apache](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-a-sinatra-ruby-application/#restart-apache)

* * *

## How to Create a Sinatra Ruby Application

Last modified: _2024 February 22_

* * *

## Overview

Warning:

- Because WebPros International, LLC doesn’t develop or ship Sinatra Ruby applications, cPanel Technical Support can’t help you install them. We aren’t responsible for any data loss.
- We recommend that **only** experienced system administrators perform these steps.
- Before you begin, your hosting provider **must** [enable the feature](https://docs.cpanel.net/whm/packages/feature-manager) and [install EasyApache 4 RPMs](https://docs.cpanel.net/whm/packages/feature-manager).

This document describes how to install a Sinatra web application. You can use Sinatra to quickly create web applications on the Ruby platform. Then, you can register them in cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).

Note:

- We recommend that you perform the steps in this document via the command line as a cPanel user unless the step specifies otherwise.

- You can also use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_).

- To use this feature, the cPanel account **must** possess compiler access in WHM’s [_Compiler Access_](https://docs.cpanel.net/whm/security-center/compiler-access) interface ( _WHM » Home » Security Center » Compiler Access_). If the account does **not** possess compiler access, the system will return an error similar to the following message:


```perl
make: execvp: gcc: Permission denied
```

For more information, read [Sinatra’s](http://sinatrarb.com/documentation.html) documentation.

## Install Sinatra

### Pre-installation settings

Before you begin, make certain that the following [EasyApache 4](https://docs.cpanel.net/whm/software/easyapache-4-interface) RPMs exist on your server:

- `ea-ruby27-mod_passenger`



Note:





If you enable this module, the system will disable [Apache’s `mod_userdir` module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak).

- `ea-ruby27-ruby-devel`

- `ea-apache24-mod_env`



Note:





The `ea-apache24-mod_env` module allows you to add environment variables when you register your application. For more information about environment variables, read our [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager) documentation.


If you need to install these RPMs, use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) or run the following command as the `root` user:

```perl
yum install ea-ruby27-mod_passenger ea-ruby27-ruby-devel ea-apache24-mod_env
```

### Install the sinatra gem

To install the `sinatra` Ruby gem, run the following command:

```perl
scl enable ea-ruby27 'gem install sinatra'
```

If you do not wish to use the `scl` utility, perform the following steps to install the `sinatra` Ruby gem:

1. Log in to the server as a cPanel user.

2. Add the following line to the `rc` file (for example, the `/home/user/.bashrc` file):


```perl
source /opt/cpanel/ea-ruby27/enable
```

3. Log out and then log back in.

4. Run the `gem install sinatra` command.


### Create the application directory path

After you install the `sinatra` Ruby gem, create the application’s directory path, relative to your home directory.
For example:

```perl
/home/username/application
```

### Create the application’s Ruby files

After you create the application’s directory path, add the Ruby application file. To do this, perform the following steps:

1. Navigate to the application’s directory

2. Create the `app.rb` file and add the code for the application to execute. For example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>require 'sinatra/base'<br>class Fools < Sinatra::Base<br>  get '/' do<br>    'Fools Rush In'<br>  end<br>end<br>``` |





For more information about how to add processes to the `app.rb` file, read [Sinatra’s](http://sinatrarb.com/documentation.html) documentation.

3. Create the `config.ru` file with the following content:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>require File.absolute_path("app.rb")<br>run Fools<br>``` |


### Register the application

After you set the file permissions, register the application. To do this, use either of the following methods:

- Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).
- Call UAPI’s [`PassengerApps::register_application`](https://api.docs.cpanel.net/openapi/cpanel/operation/register_application/) function.

### Restart apache

Important:

- This step is **optional**. UAPI’s [`register_application`](https://api.docs.cpanel.net/openapi/cpanel/operation/register_application/) function performs an Apache restart, but may not execute immediately.
- For more information, read our [Modify Apache Virtual Hosts with Include Files](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files) documentation.

After you create the application’s Apache configuration, restart Apache. To do this, run the following command as the `root` user:

```perl
/usr/local/cpanel/scripts/restartsrv_httpd
```

After Apache restarts, you can access the application in cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).

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