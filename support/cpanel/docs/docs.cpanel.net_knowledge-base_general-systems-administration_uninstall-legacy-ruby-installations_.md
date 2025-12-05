---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/"
title: "Uninstall Legacy Ruby Installations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Uninstall Legacy Ruby Installations


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ruby](https://docs.cpanel.net/tags/ruby/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#overview)

* * *

[Manual Compilation](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#manual-compilation)

* * *

[The rpm command](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#the-rpm-command)

* * *

[The yum command](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#the-yum-command)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#overview)

* * *

[Manual Compilation](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#manual-compilation)

* * *

[The rpm command](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#the-rpm-command)

* * *

[The yum command](https://docs.cpanel.net/knowledge-base/general-systems-administration/uninstall-legacy-ruby-installations/#the-yum-command)

* * *

## Uninstall Legacy Ruby Installations

Last modified: _2020 November 30_

* * *

## Overview

Warning:

We deprecated the legacy Ruby codebase in cPanel & WHM version 66. We will not support any applications you create with the following interfaces:

- cPanel’s [_Ruby on Rails_](https://docs.cpanel.net/cpanel/software/ruby-on-rails/) interface ( _cPanel » Home » Software » Ruby on Rails_).

- cPanel’s [_RubyGems_](https://docs.cpanel.net/cpanel/software/rubygems/) interface ( _cPanel » Home » Software » RubyGems_).

- The _Ruby Gem installer_ feature in WHM’s [_Module Installers_](https://docs.cpanel.net/whm/software/module-installers/) interface ( _WHM » Home » Software » Module Installers_).


To install Ruby and create Ruby web applications in cPanel & WHM version 66 and later, follow the directions in our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation.

You can use several different methods to uninstall Ruby in cPanel & WHM version 64 and earlier.

## Manual Compilation

If you manually compiled Ruby on your server, run the `make uninstall` command in the package directory.

After you uninstall Ruby from your server, the system may leave several files and folders on your server. We recommend that you run the following commands to archive any Ruby files and folders that the `uninstall` command did not remove. This process prevents conflicts with future installations of Ruby:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>mv /usr/bin/ruby /usr/bin/ruby.bak`date +%F`<br>mv /usr/lib/ruby /usr/lib/ruby.bak`date +%F`<br>mv /usr/bin/gem /usr/bin/gem.bak`date +%F`<br>mv /usr/bin/rails /usr/bin/rails.bak`date +%F`<br>``` |

## The rpm command

To determine whether Ruby exists on your server, run the following command:

```perl
rpm -qa|grep -i ruby
```

The command returns output that resembles the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br># rpm -qa|grep -i ruby<br>rubygems-1.3.7-5.el6.noarch<br>ruby-rdoc-1.8.7.374-4.el6_6.i686<br>ruby-libs-1.8.7.374-4.el6_6.i686<br>ruby-devel-1.8.7.374-4.el6_6.i686<br>ruby-1.8.7.374-4.el6_6.i686<br>ruby-irb-1.8.7.374-4.el6_6.i686<br>``` |

To remove a package, run the `rpm  e --nodeps packagename` command, where `packagename` represents the name of a package.

## The yum command

To determine whether Ruby exists on your server, run the following command:

```perl
yum provides ruby
```

The command returns output that resembles the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```go<br># yum provides ruby<br>Loaded plugins: fastestmirror, presto<br>Loading mirror speeds from cached hostfile<br> * base: repos.dfw.quadranet.com<br> * extras: mirror.oss.ou.edu<br> * updates: centos-distro.cavecreek.net<br>ruby-1.8.7.374-2.el6.i686 : An interpreter of object-oriented scripting language<br>Repo        : base<br>Matched from:<br>ruby-1.8.7.374-3.el6_6.i686 : An interpreter of object-oriented scripting language<br>Repo        : updates<br>Matched from:<br>ruby-1.8.7.374-4.el6_6.i686 : An interpreter of object-oriented scripting language<br>Repo        : updates<br>Matched from:<br>ruby-1.8.7.374-4.el6_6.i686 : An interpreter of object-oriented scripting language<br>Repo        : installed<br>Matched from:<br>Other       : Provides-match: ruby<br>``` |

To remove a package, run the `yum erase packagename` command, where `packagename` represents the name of a package.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×