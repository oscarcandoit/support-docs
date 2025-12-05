---
url: "https://docs.cpanel.net/cpanel/software/application-manager/"
title: "Application Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/application-manager/#main-content)

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
4. Application Manager


[ruby](https://docs.cpanel.net/tags/ruby/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [nginx](https://docs.cpanel.net/tags/nginx/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/application-manager/#overview)

* * *

[Requirements](https://docs.cpanel.net/cpanel/software/application-manager/#requirements)

* * *

[Applications](https://docs.cpanel.net/cpanel/software/application-manager/#applications)

* * *

[Create an application](https://docs.cpanel.net/cpanel/software/application-manager/#create-an-application)

* * *

[Register an application](https://docs.cpanel.net/cpanel/software/application-manager/#register-an-application)

* * *

[Environment Variables](https://docs.cpanel.net/cpanel/software/application-manager/#environment-variables)

* * *

[Add environment variables](https://docs.cpanel.net/cpanel/software/application-manager/#add-environment-variables)

* * *

[Edit an application](https://docs.cpanel.net/cpanel/software/application-manager/#edit-an-application)

* * *

[Unregister an application](https://docs.cpanel.net/cpanel/software/application-manager/#unregister-an-application)

* * *

[Log files](https://docs.cpanel.net/cpanel/software/application-manager/#log-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/application-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/application-manager/#overview)

* * *

[Requirements](https://docs.cpanel.net/cpanel/software/application-manager/#requirements)

* * *

[Applications](https://docs.cpanel.net/cpanel/software/application-manager/#applications)

* * *

[Create an application](https://docs.cpanel.net/cpanel/software/application-manager/#create-an-application)

* * *

[Register an application](https://docs.cpanel.net/cpanel/software/application-manager/#register-an-application)

* * *

[Environment Variables](https://docs.cpanel.net/cpanel/software/application-manager/#environment-variables)

* * *

[Add environment variables](https://docs.cpanel.net/cpanel/software/application-manager/#add-environment-variables)

* * *

[Edit an application](https://docs.cpanel.net/cpanel/software/application-manager/#edit-an-application)

* * *

[Unregister an application](https://docs.cpanel.net/cpanel/software/application-manager/#unregister-an-application)

* * *

[Log files](https://docs.cpanel.net/cpanel/software/application-manager/#log-files)

* * *

## Application Manager

![](https://docs.cpanel.net/img/cpanel-icons/application_manager.svg)

_Valid for versions 132 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/cpanel/software/application-manager/102/)

#### [112](https://docs.cpanel.net/cpanel/software/application-manager/112/)

#### [132](https://docs.cpanel.net/cpanel/software/application-manager/)

Last modified: _2025 August 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to deploy applications with the [Phusion Passenger®](https://www.phusionpassenger.com/) application server. A Phusion Passenger server functions as a process manager, reverse proxy, and provides operations tools to its users.

This interface works on servers that run Apache and NGINX®.

### Requirements

Your hosting provider **must** select the _Application Manager_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface and install **one** of the following [Apache modules](https://docs.cpanel.net/ea4/apache/about-apache/#apache-modules), depending on your operating system:

| Package | Description |
| --- | --- |
| `ea-apache24-mod-passenger` | This [package](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications) works on systems that run [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/), [AlmaLinux OS 9 or later](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), or [Rocky Linux™ 9](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/). |
| `ea-ruby27-mod_passenger` | This package **only** works on systems that run [AlmaLinux 8](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) or [Rocky Linux 8](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/). |

If needed, your provider should also install the following packages:

| Package | Description |
| --- | --- |
| `ea-apache24-mod_env` | This module allows your application configuration to set [environment variables](https://docs.cpanel.net/cpanel/software/application-manager/#environment-variables) for your application. |
| `ea-nodejs16`<br>`ea-nodejs18`<br>`ea-nodejs20`<br>`ea-nodejs22` | These packages provide Node.js™ application support. <br> When you install a Node.js package, it will **uninstall** any other Node.js packages. You **must** update any existing applications to use the new version of Node.js. Any new applications will use the newest installed version of Node.js. |
| Python™ | Install the appropriate version of python for your applications. <br> The Application Manager uses `/usr/bin/python3` by default if it exists. If it does **not** exist, the Application Manager uses `/usr/bin/python` by default. If you want to use another version by default, add the path to your preferred version with the following command:<br>```bash<br>echo -n /path/to/python > /etc/cpanel/ea4/passenger.python<br>``` |

Note:

For additional setup and troubleshooting information, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation.

If you need this feature, contact your hosting provider.

## Applications

This table contains the following information:

| Item | Description |
| --- | --- |
| _Name_ | The application’s name. |
| _Domain_ | The application’s domain. |
| _Path_ | The file where the application’s source code resides, relative to the home directory. |
| _Status_ | Whether the application is enabled or disabled. |
| _Actions_ | Use these [actions](https://docs.cpanel.net/cpanel/software/application-manager#actions) to make application changes. |

##### Actions

| Action | Description |
| --- | --- |
| _Edit_ | Edit the application. |
| _Unregister_ | Unregister the application. |
| _Enable Dependencies_ | Confirm and, if necessary, install an application’s [Node.js package manager (npm)](https://wikipedia.org/wiki/Npm) dependencies. |

## Create an application

You **must** create an application **before** you register it in the _Application Manager_ interface. For example, you could perform one of the following actions:

- Clone an existing application from GitHub with our [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git™ Version Control_).
- Create a new application on your server. For an examples of how to do this, read the following documentation:
  - [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/)
  - [How to Install a Python WSGI Application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/)
  - [How to install a Node.js Application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/)

Warning:

Anything you create in these interfaces won’t work with the _Application Manager_ feature:

- cPanel’s [_Ruby on Rails_](https://docs.cpanel.net/cpanel/software/ruby-on-rails) interface ( _cPanel » Home » Software » Ruby on Rails_).
- cPanel’s [_RubyGems_](https://docs.cpanel.net/cpanel/software/rubygems) interface ( _cPanel » Home » Software » RubyGems_).
- The _Ruby Gem installer_ section of WHM’s [_Module Installers_](https://docs.cpanel.net/whm/software/module-installers) interface ( _WHM » Home » Software » Module Installers_).

We plan to remove these interfaces in a future cPanel & WHM version.

## Register an application

This feature configures new applications with the **most recent** version of Ruby on your system. The installed version of Passenger determines which version of Ruby the system uses. You can’t have more than one version of Passenger installed.

Existing applications will **not** change their Ruby version. If you uninstall an application’s version of Ruby, your applications will no longer function.

To register an application, perform the following steps:

1. Click _Register Application_. A new interface will appear.
2. Enter the application’s name in the _Application Name_ text box.
3. From the _Deployment Domain_ menu, select the main domain, addon domain, or subdomain to which to deploy the application.
4. Enter the application’s base URL in the _Base Application URL_ text box. After you register the application, enter this URL in a web browser to access the application.
5. Enter the path to your source code directory, relative to the home directory, in the _Application Path_ text box.
6. Select a deployment environment. This sets the server environment that the application runs in.
   - Click _Development_ if you’re still developing your application.
   - Click _Production_ if you’re ready to deploy and use your application.
7. If you want to add environment variables, click _Add Variable_ in the _Environment Variables_ section.
8. Click _Deploy_.

## Environment Variables

Warning:

To add environment variables, your hosting provider **must** install the `ea-apache24-mod_env` Apache module.

Environment variables allow you to configure the processes that the application runs on multiple systems. The _Environment Variables_ table contains the following information:

| Item | Description |
| --- | --- |
| _Variable Name_ | The environment variable’s name. <br> An environment variable name must meet the following criteria: <br>- The name can **only** contain letters, numbers, underscores, and dashes.<br>- The name **must** contain 256 characters or fewer.<br>- The name **cannot** begin with a number. |
| _Value_ | The environment variable’s value. <br> An environment variable value **must** contain 1024 or fewer ASCII-printable characters. |
| _Actions_ | Use the items in this column to perform the following actions: <br>- _Edit_ — Edit the environment variable.<br>- _Unregister_ — Delete the environment variable. |

For more information about environment variables, read Phusion Passenger’s [Environment Variables](https://www.phusionpassenger.com/library/indepth/environment_variables.html) documentation.

### Add environment variables

To add an environment variable to the application’s configuration file, perform the following steps:

1. In the _Environmental Variables_ section, click _Add Variable_.
2. Enter the variable’s name in the _Environment Variable Name_ text box in the _Variable Name_ column.
3. Enter a value for the variable in the _Environment Variable Value_ text box in the _Value_ column.
4. Click _Save_ in the _Actions_ column.

### Edit an application

To edit an application’s configuration file, perform the following steps:

1. In the table of applications, find the application that you want to edit.
2. In the _Actions_ column, click _Edit_. A new interface will appear.
3. Make the desired changes.
4. Click _Deploy_.

### Unregister an application

Important:

Unregistering an application removes it from the list and deletes its configuration file. It does **not** delete the application.

To unregister an application, perform the following steps:

1. In the table of applications, locate the application that you wish to unregister.
2. Click _Unregister_. A confirmation message will appear.
3. Click _Unregister_ to completely unregister the application. A success message will appear.

## Log files

You can find your application’s log files in the following locations. In these paths, replace the `example` directory with the name of the directory where your application is located. You can view these files in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _Home » Files » File Manager_):

| Application | Log location |
| --- | --- |
| Node.js | `example/logs/` |
| Python | `example/stderr.log` |

#### Additional Documentation

* * *

- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [Ruby on Rails](https://docs.cpanel.net/cpanel/software/ruby-on-rails/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×