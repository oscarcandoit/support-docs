---
url: "https://docs.cpanel.net/cpanel/advanced/indexes/"
title: "Indexes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/advanced/indexes/#main-content)

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
3. [Advanced](https://docs.cpanel.net/cpanel/advanced/)
4. Indexes


[files](https://docs.cpanel.net/tags/files/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/advanced/indexes/#overview)

* * *

[Configure directory settings](https://docs.cpanel.net/cpanel/advanced/indexes/#configure-directory-settings)

* * *

[Manage index settings](https://docs.cpanel.net/cpanel/advanced/indexes/#manage-index-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/advanced/indexes/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/advanced/indexes/#overview)

* * *

[Configure directory settings](https://docs.cpanel.net/cpanel/advanced/indexes/#configure-directory-settings)

* * *

[Manage index settings](https://docs.cpanel.net/cpanel/advanced/indexes/#manage-index-settings)

* * *

## Indexes

![](https://docs.cpanel.net/img/cpanel-icons/indexes.svg)

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/cpanel/advanced/indexes/)

Last modified: _2025 June 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

When a visitor accesses a directory rather than a page on your website, the browser typically displays the directory’s index page. If no index page exists, the browser displays a list of the files in that directory. Use the _Indexes_ interface to define how the server displays a specific directory’s index to a visitor, or to disable the index display for a directory.

## Configure directory settings

To configure your directory settings, perform the following steps:

1. Click _Settings_ and then select one of the following locations in which to begin navigation:

   - _Home_ — Begin navigation in the home directory for the domain.
   - _Web Root_ — Begin navigation in the document root for the account’s primary domain.
   - _Document Root for_ — Select the domain that corresponds to the document root in which you wish to begin navigation.
2. To configure the interface to always open your selection from Step 1, select the _Always open this directory in the future_ checkbox.
3. Click _Save Changes_.

## Manage index settings

To manage a directory’s index settings, perform the following steps:

1. Navigate to the desired folder with the following:
   - To navigate a directory, click the folder icon (![folder icon](https://docs.cpanel.net/img/indexesfolder.png)) or the directory’s name.
   - To navigate up one level of the directory tree, click _Up One Level_ at the top of the list of directory contents.
   - To to navigate the home directory, click _Home_ above the list of directories.
   - To view and select subdirectories, click the parent directory’s name. Then, click the desired subdirectory name.
2. To configure the security settings for a directory or subdirectory, click _Edit_ under the _Actions_ column. A new interface will appear.
3. Select one of the following options:
   - _Inherit_ — The directory inherits the parent directory’s index setting. If the parent directory does not possess index settings, the directory uses the system default settings.
   - _No Indexing_ — The server does not list the contents of the directory. Browsers display a message that states that the contents are forbidden.
   - _Show Filename Only_ — The server lists the directory’s contents as filenames only.
   - _Show Filename and Description_ — The server lists file names and additional information, such as file size and file type.
4. Click _Save_. The new index setting will appear in the _Indexes_ interface under the _Index Type_ column.

#### Additional Documentation

* * *

- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [API Shell for cPanel](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/)
- [Cron Jobs](https://docs.cpanel.net/cpanel/advanced/cron-jobs/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [MIME Types](https://docs.cpanel.net/cpanel/advanced/mime-types/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×