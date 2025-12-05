---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/"
title: "Perl Module Installation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#main-content)

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
4. Perl Module Installation


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [perl](https://docs.cpanel.net/tags/perl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#overview)

* * *

[Install modules to the system Perl binary](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#install-modules-to-the-system-perl-binary)

* * *

[Install modules to the cPanel & WHM Perl installation](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#install-modules-to-the-cpanel--whm-perl-installation)

* * *

[Confirm that your module installed correctly](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#confirm-that-your-module-installed-correctly)

* * *

[Manage installed modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#manage-installed-modules)

* * *

[Troubleshoot module problems](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#troubleshoot-module-problems)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#overview)

* * *

[Install modules to the system Perl binary](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#install-modules-to-the-system-perl-binary)

* * *

[Install modules to the cPanel & WHM Perl installation](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#install-modules-to-the-cpanel--whm-perl-installation)

* * *

[Confirm that your module installed correctly](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#confirm-that-your-module-installed-correctly)

* * *

[Manage installed modules](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#manage-installed-modules)

* * *

[Troubleshoot module problems](https://docs.cpanel.net/knowledge-base/general-systems-administration/perl-module-installation/#troubleshoot-module-problems)

* * *

## Perl Module Installation

Last modified: _2022 July 13_

* * *

## Overview

Perl modules allow you to extend cPanel & WHM’s functionality. For example, you can use Perl modules to add functions to cPanel & WHM.

Warning:

Before you install a module, make **certain** that it functions in a cPanel-provided Perl environment. For more information, read our [Guide to Perl in cPanel & WHM](https://api.docs.cpanel.net/guides/guide-to-perl/) documentation.

Note:

In the examples throughout this document, `Module::Name` is the name of the custom Perl module that you wish to install.

## Install modules to the system Perl binary

To install a Perl module to the system’s Perl environment (`/usr/bin/perl`), use one of the following methods:

#### Install from the WHM interface

To install a module to the system Perl environment, use WHM’s [_Install a Perl Module_](https://docs.cpanel.net/whm/software/install-a-perl-module) interface ( _WHM » Home » Software » Install a Perl Module_).

Note:

To use this interface, you **must** have compiler access. For more information, read our [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access) documentation.

#### Install from the command line via script

The `/usr/local/cpanel/scripts/perlinstaller` script requires that you include, as an argument, the name of the module that you wish to install. Make **certain** that you use the CPAN convention for the module name.

Note:

- When you run this script without arguments, you will enter an interactive shell that lets you fully manage CPAN module installations.

- When you run this script, you can include the `--force` flag. This flag causes the system to ignore errors and warnings, and can result in the installation of broken modules.

- The CPAN utility on your server is the cPanel & WHM version of the `App::cpanminus` application. For more information, read the [cpanminus](https://metacpan.org/pod/App::cpanminus) documentation.


##### Example

```bash
/usr/local/cpanel/scripts/perlinstaller Module::Name
```

#### Install via the cpan command

The `cpan` command calls the [CPAN utility](https://metacpan.org/pod/CPAN). You **must** include, as an argument, the name of the module that you wish to install. Make **certain** that you use the CPAN convention for the module name.

##### Example

```bash
cpan Module::Name
```

## Install modules to the cPanel & WHM Perl installation

To install a Perl module to the cPanel-included Perl installation (`/usr/local/cpanel/3rdparty/bin/perl`), use the following method:

#### The cpanm script

When you the `/usr/local/cpanel/bin/cpanm` script, you **must** include, as an argument, the name of the module that you wish to install.

- Make **certain** that you use the CPAN convention for the module name.

- Include the `-i` argument to indicate that you wish to install the module.

- You can use this script to install a Perl module with minimal interaction.


##### Example

```bash
/usr/local/cpanel/bin/cpanm -i Module::Name
```

## Confirm that your module installed correctly

#### Perl binary

To confirm that the modules installed to the system’s Perl binary function, run the following command. In this example, `Module::Name` is the name of the module:

```bash
/usr/bin/perl -MModule::Name -e 'print $Module::Name::VERSION . "\n"'
```

The system will return the installed module’s version number.

#### cPanel-included Perl installation

To confirm that the modules installed to the cPanel-included Perl installation function, run the following command. In this example, `Module::Name` is the name of the module:

```bash
/usr/local/cpanel/3rdparty/bin/perl -MModule::Name -e 'print $Module::Name::VERSION . "\n"'
```

The system will return the installed module’s version number.

## Manage installed modules

The `/usr/local/cpanel/scripts/perlmods` script allows you to use the `Perl::Mod` module in order to manage the modules on your system. Use the following flags to troubleshoot module installations:

- `-l` — Use the `Perl::Mod` module to list all of the installed modules for your system.

- `-s` — Use the `Perl::Mod` module to search for an installed module.

- `-u` — Use the `Perl::Mod` module to uninstall modules.


## Troubleshoot module problems

#### Error logs

Error logs provide additional insight into problems on your server. cPanel & WHM writes `STDERR` (standard error) output to the `/usr/local/cpanel/logs/error_log` file whenever it encounters an error.

#### Use the strace command

Some errors require the `strace` (system trace) command to view additional output that does not write to the `/usr/local/cpanel/logs/error_log` file. To view this output, run the following command during the system error:

```bash
strace -s 4096 -fvt -o /root/strace.issue.at.hand -p `cat /var/run/cpsrvd.pid`
```

#### @INC errors

When you encounter `@INC` array errors, you will see a message that resembles the following example in the `/usr/local/cpanel/logs/error_log` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Can't locate DB_File.pm in @INC (@INC contains: /usr/local/cpanel /usr/local/lib/perl5/5.8.8/x86_64-linux /usr/local/lib/perl5/5.8.8 /usr/local/lib/perl5/site_perl/5.8.8/x86_64-linux<br>/usr/local/lib/perl5/site_perl/5.8.8 /usr/local/lib/perl5/site_perl .) at /scripts/spamassassin_dbm_cleaner line 14.<br>``` |

In this example, the system could not locate the Perl module. The error message also lists the locations in which the system searched for the module.

If you encounter this error, perform the following actions to resolve the problem:

- Place a copy of the module in one of the locations that the error message lists.

- Create a symlink from one of the listed locations to the location of the module.

- Resolve an issue in the module itself during build time.


To view the current `@INC` array paths, run the `perl -V` command as the `root` user. The system will return output that resembles the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```bash<br>Built under linux<br>Compiled at Jan 28 2011 08:49:59<br>@INC:<br>  /usr/lib/perl5/site_perl/5.8.8/i386-linux-thread-multi<br>  /usr/lib/perl5/site_perl/5.8.8<br>  /usr/lib/perl5/site_perl<br>  /usr/lib/perl5/vendor_perl/5.8.8/i386-linux-thread-multi<br>  /usr/lib/perl5/vendor_perl/5.8.8<br>  /usr/lib/perl5/vendor_perl<br>  /usr/lib/perl5/5.8.8/i386-linux-thread-multi<br>  /usr/lib/perl5/5.8.8<br>``` |

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