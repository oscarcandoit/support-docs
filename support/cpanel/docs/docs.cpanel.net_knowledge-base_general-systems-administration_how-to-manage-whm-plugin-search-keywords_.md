---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/"
title: "How to Manage WHM Plugin Search Keywords | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#main-content)

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
4. How to Manage WHM Plugin Search Keywords


[whmplugins](https://docs.cpanel.net/tags/whmplugins/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#overview)

* * *

[Find the plugins that support custom WHM search keywords](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#find-the-plugins-that-support-custom-whm-search-keywords)

* * *

[Add a custom WHM search keyword](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#add-a-custom-whm-search-keyword)

* * *

[Remove a custom WHM search keyword](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#remove-a-custom-whm-search-keyword)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#overview)

* * *

[Find the plugins that support custom WHM search keywords](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#find-the-plugins-that-support-custom-whm-search-keywords)

* * *

[Add a custom WHM search keyword](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#add-a-custom-whm-search-keyword)

* * *

[Remove a custom WHM search keyword](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#remove-a-custom-whm-search-keyword)

* * *

## How to Manage WHM Plugin Search Keywords

Last modified: _2025 July 25_

* * *

## Overview

This document describes how to add custom search keywords to WHM plugins so users can find them with WHM’s [search feature](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/#top-navigation-bar).

## Find the plugins that support custom WHM search keywords

To find the plugins that support custom WHM search keywords, perform the following steps:

1. Connect to the server with SSH as the `root` user.
2. Run the following command: `ls /var/cpanel/apps`. The server will return a list of your server’s plugins. The list will resemble the following example:



```bash
cpanel-wp-toolkit.conf  imunify-antivirus.conf  whm-360-monitoring.conf  whm-wp-toolkit-api.conf  whm-wp-toolkit.conf
```


You can add custom WHM search keywords to any plugin that does **not** start with `cpanel`. For example, you can add custom WHM search keywords to the `imunify-antivirus.conf` file, but **not** the `cpanel-wp-toolkit.conf` file.

## Add a custom WHM search keyword

To add a custom search keyword to a WHM plugin, first [ensure the plugin supports keywords](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-manage-whm-plugin-search-keywords/#find-the-plugins-that-support-custom-whm-search-keywords). Then, perform the following steps:

1. Connect to the server with SSH as the `root` user.
2. Open the plugin’s `.conf` file with your preferred text editor.
3. Add a new section to the bottom of the file with the `searchtext` option. This option lets you add custom search keywords as follows, where `example` is the custom search keyword:



```bash
# Search text

searchtext=example
```

4. Save your changes and exit the text editor.
5. Use the command line interface to run the following command:


```bash
       rm -f /var/cpanel/pluginscache.yaml; /usr/local/cpanel/3rdparty/perl/536/bin/perl -MWhostmgr::Plugins -E 'Whostmgr::Plugins->plugins_data'

```



This removes the plugins cache so that the system will reload it with your new search keywords.
6. Refresh your WHM browser window.

You will now be able to search for the WHM plugin with your custom keyword.

## Remove a custom WHM search keyword

To remove a custom search keyword, perform the following steps:

1. Connect to the server with SSH as the `root` user.
2. Open the plugin’s `.conf` file with your preferred text editor.
3. Delete the custom keyword you no longer want to use from the `.conf` file. If the custom keyword you want to remove is the **only** keyword in the `.conf` file, you **must** remove the `searchtext` option as well.
4. Save your changes and exit the text editor.
5. Use the command line interface to run the following command:


```bash
       rm -f /var/cpanel/pluginscache.yaml; /usr/local/cpanel/3rdparty/perl/536/bin/perl -MWhostmgr::Plugins -E 'Whostmgr::Plugins->plugins_data'

```



This removes the plugins cache so that the system will reload it **without** the keyword you removed.
6. Refresh your WHM browser window.

You will no longer be able to use the removed custom keyword to search for the plugin in WHM.

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