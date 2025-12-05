---
url: "https://docs.cpanel.net/ea4/apache/custom-templates/"
title: "Custom Templates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/custom-templates/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. Custom Templates


[apache](https://docs.cpanel.net/tags/apache/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/custom-templates/#overview)

* * *

[Custom templates that apply to all virtual hosts](https://docs.cpanel.net/ea4/apache/custom-templates/#custom-templates-that-apply-to-all-virtual-hosts)

* * *

[Custom templates that apply to an individual virtual host](https://docs.cpanel.net/ea4/apache/custom-templates/#custom-templates-that-apply-to-an-individual-virtual-host)

* * *

[The userdata directory](https://docs.cpanel.net/ea4/apache/custom-templates/#the-userdata-directory)

* * *

[How to create a custom template that will apply to a single virtual host](https://docs.cpanel.net/ea4/apache/custom-templates/#how-to-create-a-custom-template-that-will-apply-to-a-single-virtual-host)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/custom-templates/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/custom-templates/#overview)

* * *

[Custom templates that apply to all virtual hosts](https://docs.cpanel.net/ea4/apache/custom-templates/#custom-templates-that-apply-to-all-virtual-hosts)

* * *

[Custom templates that apply to an individual virtual host](https://docs.cpanel.net/ea4/apache/custom-templates/#custom-templates-that-apply-to-an-individual-virtual-host)

* * *

[The userdata directory](https://docs.cpanel.net/ea4/apache/custom-templates/#the-userdata-directory)

* * *

[How to create a custom template that will apply to a single virtual host](https://docs.cpanel.net/ea4/apache/custom-templates/#how-to-create-a-custom-template-that-will-apply-to-a-single-virtual-host)

* * *

## Custom Templates

Last modified: _2024 September 3_

* * *

## Overview

A custom template file modifies how cPanel & WHM builds the Apache configuration’s virtualhost entries.

Warning:

- If you misconfigure a custom template, Apache may generate an invalid `httpd.conf` file. This will result in a server that does **not** respond to HTTP requests. Be **certain** that you use caution when you create custom templates and create any directives that rely on specific Apache modules in the appropriate `<IfModule>` blocks.
- If you create a custom template, you **must** manually edit it to include any necessary patches or changes after an Apache update. EasyApache will **not** override the server’s `.local` files or make changes to them. We recommend that you create a new custom template with your desired customizations after you perform the Apache update.

## Custom templates that apply to all virtual hosts

Note:

- You **cannot** use custom templates for a parked domain.
- This method affects **all** of your virtual hosts. cPanel & WHM will use the `.local` files instead of the original `.default` files.
- Custom templates with local overrides cause the system to permanently disable the _Force HTTPS Redirects_ option in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_).

To create a custom template file for all virtual hosts, perform the following steps:

1. Copy one or more of the following files:



| Name | Path |
| --- | --- |
| **Apache 2.4 virtual host with SSL** | `/var/cpanel/templates/apache2_4/ssl_vhost.default` |
| **Apache 2.4 virtual host without SSL** | `/var/cpanel/templates/apache2_4/vhost.default` |
| **EasyApache 4 main template** | `/var/cpanel/templates/apache2_4/ea4_main.default` |

2. Rename the copied file to one of the following filenames:



| File name | Description |
| --- | --- |
| `vhost.local` | Use this filename if you copied the `vhost.default` file. |
| `ssl_vhost.local` | Use this filename if you copied the `ssl_vhost.default` file. |
| `ea4_main.local` | Use this filename if you copied the `ea4_main.default` file. |

3. Edit the `*.local` files to make the desired changes to your virtual host configuration.


## Custom templates that apply to an individual virtual host

### The userdata directory

cPanel & WHM uses the data in the subdirectories of the `/var/cpanel/userdata/` directory to build the virtual hosts for your Apache configuration. These files use the YAML format. For more information about the YAML format, read [The Official YAML Website](http://yaml.org/).

EasyApache 4 loads these files into the vhost template variable. For more information about the Template Toolkit, visit the [Template Toolkit website](http://template-toolkit.org/).

Warning:

- Do **not** manually edit these YAML files.
- We **strongly** recommend that you use include files to modify the content of an individual virtual host. For more information about how to use include files, read our [Modify Apache Virtual Hosts with Include Files](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files/) documentation.

### How to create a custom template that will apply to a single virtual host

You can use a custom template to modify the data in the `/var/cpanel/userdata/` directory for an individual domain.

To create a custom template that affects how cPanel & WHM builds entries for a single virtual host, perform the following steps:

1. Copy one or more of the following files:



| Name | Path |
| --- | --- |
| **Apache 2.4 virtual host with SSL** | `/var/cpanel/templates/apache2_4/ssl_vhost.default` |
| **Apache 2.4 virtual host without SSL** | `/var/cpanel/templates/apache2_4/vhost.default` |
| **EasyApache 4 main template** | `/var/cpanel/templates/apache2_4/ea4_main.default` |

2. Rename the copied file to one of the following filenames:



| File name | Description |
| --- | --- |
| `vhost.local` | Use this filename if you copied the `vhost.default` file. |
| `ssl_vhost.local` | Use this filename if you copied the `ssl_vhost.default` file. |
| `ea4_main.local` | Use this filename if you copied the `ea4_main.default` file. |

3. Edit the new file with your changes to your virtual host configuration.

4. Move the new file to any other directory. You will specify the template file’s location when you run the script in step 5.

5. Use the following script to add the information to the data structure, where `username` represents the user name and `domainname` represents the domain’s name:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>perl -MYAML::Syck -e \<br>'my $hr = YAML::Syck::LoadFile($ARGV[0]);$hr->{$ARGV[1]} = $ARGV[2];YAML::Syck::DumpFile($ARGV[0],$hr);' \<br>/var/cpanel/userdata/username/domainname custom_vhost_template_ap2 path/to/template<br>``` |


#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×