---
url: "https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/"
title: "EasyApache 4 Create a Profile | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#main-content)

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
3. [Basics](https://docs.cpanel.net/ea4/basics/)
4. EasyApache 4 Create a Profile


[ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#overview)

* * *

[About EasyApache 4 profiles](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#about-easyapache-4-profiles)

* * *

[Save a new profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#save-a-new-profile)

* * *

[Upload a file](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#upload-a-file)

* * *

[Example profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile)

* * *

[Create an EA4 profile directly on the server](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#create-an-ea4-profile-directly-on-the-server)

* * *

[Create a default profile for a fresh install](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#create-a-default-profile-for-a-fresh-install)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#overview)

* * *

[About EasyApache 4 profiles](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#about-easyapache-4-profiles)

* * *

[Save a new profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#save-a-new-profile)

* * *

[Upload a file](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#upload-a-file)

* * *

[Example profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile)

* * *

[Create an EA4 profile directly on the server](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#create-an-ea4-profile-directly-on-the-server)

* * *

[Create a default profile for a fresh install](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#create-a-default-profile-for-a-fresh-install)

* * *

## EasyApache 4 Create a Profile

Last modified: _2024 September 11_

* * *

## Overview

This document discusses how to create an [EasyApache 4 profile](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#easyapache-4-profile). An EasyApache 4 profile is a [JavaScript Object Notation (JSON)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#javascript-object-notation-json) file that acts as a template to manage which EasyApache 4 packages the system installs and uninstalls. When you provision a profile, the system will install that profile’s packages and **uninstall** other packages.

You may **only** provision one profile at a time. However, to customize your EasyApache 4 profile’s configuration, you can also install and uninstall packages after provisioning it.

Note:

The system strips the `ea-` prefix from package names when it displays them in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

## About EasyApache 4 profiles

While EasyApache 4 provides a number of profiles that will suit most needs, you can also create one.

To create a profile, use one of the following methods:

- Convert your existing configuration to a [JSON file](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile).
- Click _Save as profile_ during the EasyApache 4 configuration process.
- Download and customize one of the cPanel-provided profiles.
- Create your own [JSON-formatted profile](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile). You may do this directly on the server or upload the file from another location.

## Save a new profile

You can save a new profile at any point during the EasyApache 4 configuration process. You can also convert an existing configuration to a new profile.

To save a new profile, perform the following steps:

1. If you are currently in the configuration process, click _Save as profile_ at any point. After the configuration process, click _Convert to profile_ in the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface’s ( _WHM » Home » Software » EasyApache 4_) _Currently Installed Packages_ section to save your current configuration as a new profile.

2. Enter the name of your profile in the _Name_ text box. The _EasyApache 4_ interface will display this name.

3. Enter a descriptive filename for the profile in the _Filename_ text box. Do **not** include an extension.






Note:




You **cannot** enter a file name of `.` or `..`, or a file name that contains the `/` or `NULL` character. If you have not created a JSON file and do not have a file name, enter a name that describes the profile instead.


4. Optionally, enter a description for your profile in the _Description_ text box. The interface will display this description.

5. Optionally, enter comma-separated tags in the _Tags_ text box.

6. If you want the profile you are converting to overwrite an existing profile of the same name, select the _Overwrite an existing profile_ checkbox.

7. Click _Save_ to save a profile during the configuration process, or _Convert_ to save a profile after the configuration process.


Your new profile will save to the `/etc/cpanel/ea4/profiles/custom` directory.

Note:

You can also use the scripts in the [`ea-cpanel-tools`](https://docs.cpanel.net/ea4/basics/the-ea-cpanel-tools-package-scripts) package, but this does **not** provide as many options.

## Upload a file

Note:

We **strongly** recommend that you download a current EasyApache 4 profile and modify it to meet your needs. You can download an existing profile by clicking on _Download_ next to your desired profile in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). Existing profiles download in JSON format.

To create a profile, add your desired EasyApache 4 configuration in [JSON](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile) format, then upload the file in the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). This ensures that your profile saves to the proper location and that a file does **not** already exist with the profile’s file name.

All custom profiles save to the `/etc/cpanel/ea4/profiles/custom` directory.

### Example profile

Your EasyApache 4 profile file **must** use the JSON file format, and resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>{<br>   "version":"1.2",<br>   "name":"SuperHost Profile",<br>   "tags":[<br>      "Apache 2.4",<br>      "PHP 7.0",<br>      "tomorrow comes knocking",<br>      "..."<br>   ],<br>   "desc":"This profile will allow you to have super high density on your system",<br>   "pkgs":[<br>      "ea-mod_xyz",<br>      "ea-php70",<br>      "ea-php71",<br>      "ea-your_frog",<br>      "..."<br>   ]<br>}<br>``` |

Your profile **must** contain the following keys:

| Key | Type | Description | Example |
| --- | --- | --- | --- |
| `version` | _integer_ | The profile’s version. | `1.2` |
| `name` | _string_ | The profile name that WHM displays. | `SuperHost Profile` |
| `tags` | _array of strings_ | A list of tags that WHM displays. | `Apache 2.4, PHP 7.0` |
| `desc` | _string_ | A description of the profile that WHM displays. | `This profile will allow you to have super high density on your system` |
| `pkgs` | _array of strings_ | The packages in the profile. | `ea-php70,ea-php71` |

## Create an EA4 profile directly on the server

To create an EA4 profile directly on the server, connect via SSH as the `root` user and perform the following steps:

1. Navigate to the `/etc/cpanel/ea4/profiles/custom` directory. You **must** save your custom profiles here.

2. With a text editor, create a [JSON file](https://docs.cpanel.net/ea4/basics/easyapache-4-create-a-profile/#example-profile) with your preferred settings.

3. After you create the JSON file and save your changes, check for proper syntax with the following command, where `custom_profile_name.json` represents your JSON file:




```go
json_pp -t null < custom_profile_name.json
```





Note:





The tool accepts the following options:



- The `-f` flag passes the file’s input format. For example, `json`.
- The `-t` flag passes the file’s output format. For example, `dumper`.
- The `-json_opt` flag passes format options in which to print information to the `JSON:PP` module (for example, use `pretty` to tell the command line to print the JSON file with reader-friendly spacing). For more information, read [cpan.org’s JSON::PP command utility](http://search.cpan.org/~makamaka/JSON-PP-2.27103/bin/json_pp#-json_opt) documentation.

If the command does **not** return output, your JSON file’s syntax is correct.

When you’re done, navigate to WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_) and verify that your profile appears.

## Create a default profile for a fresh install

To preconfigure your EasyApache 4 profile before you install cPanel & WHM, create the `/etc/cpanel_initial_install_ea4_profile.json` file.

The system will install this profile and then copy it to the `/etc/cpanel/ea4/profiles/custom/` directory when the system completes the installation.

Warning:

You **must** create this profile as a valid JSON file **and** a valid EasyApache 4 profile. If your JSON file contains errors, no data, or the installation fails, the system installs the _cPanel Default_ EasyApache 4 profile.

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×