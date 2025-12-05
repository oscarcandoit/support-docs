---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/"
title: "How to Manage Webmail Folders | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. How to Manage Webmail Folders


[webmail](https://docs.cpanel.net/tags/webmail/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#overview)

* * *

[Roundcube folders](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-folders)

* * *

[Create a folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#create-a-folder)

* * *

[Roundcube desktop interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-desktop-interface)

* * *

[Roundcube mobile interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-mobile-interface)

* * *

[Delete a folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#delete-a-folder)

* * *

[Roundcube desktop interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-desktop-interface)

* * *

[Roundcube mobile interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-mobile-interface)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#overview)

* * *

[Roundcube folders](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-folders)

* * *

[Create a folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#create-a-folder)

* * *

[Roundcube desktop interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-desktop-interface)

* * *

[Roundcube mobile interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-mobile-interface)

* * *

[Delete a folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#delete-a-folder)

* * *

[Roundcube desktop interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-desktop-interface)

* * *

[Roundcube mobile interface](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/#roundcube-mobile-interface)

* * *

## How to Manage Webmail Folders

Last modified: _2025 June 10_

* * *

## Overview

The Roundcube mail application provided by cPanel & WHM allows you to create, delete, and subscribe to or unsubscribe from folders.

## Roundcube folders

The following folders appear in Roundcube by default:

- _Inbox_
- _Drafts_
- _Sent_
- _Junk_
- _Trash_
- _Archive_

When you create a new email account, the system creates both the _Junk_ and _spam_ directories. Roundcube uses the _spam_ directory for messages that you mark as junk but displays them in the _Junk_ folder with the flame icon (![flame icon](https://docs.cpanel.net/img/roundcube-flame-icon.png) ).

Important:

Do **not** subscribe to the _Junk_ folder that displays the plain folder icon (![folder icon](https://docs.cpanel.net/img/roundcube-junk-folder.png)).

## Create a folder

### Roundcube desktop interface

To create a new folder in the Roundcube desktop interface, perform the following steps:

1. In the left menu bar of the Roundcube interface, click the Settings icon (![Settings icon](https://docs.cpanel.net/img/roundcube-settings.png)).
2. In the list of folders, click _Folders_, then click _Create_.
3. In the _Folder name_ text box, enter a name for the folder.
4. If the new folder should go underneath an existing folder, select the existing folder’s name from the _Parent folder_ menu. If not, select `---` from this menu.
5. In the _List view mode_ menu, select _List_ to view the folder’s messages as a list or _Threads_ to view the folder’s messages as threaded conversations.
6. Click _Save_. A success message appears, and the folder list refreshes. The folder you deleted no longer appears in the folder list.
7. Click the Mail icon (![Mail icon](https://docs.cpanel.net/img/roundcube-mail-icon.png)) in the left menu bar to return to the _Inbox_. The folder you created will appear in the left folder menu.

### Roundcube mobile interface

To create a new folder in the Roundcube mobile interface, perform the following steps:

1. Tap the top left menu icon (![Roundcube mobile menu](https://docs.cpanel.net/img/roundcube-mobile-hamburger-menu.png)) to open the Roundcube menu.
2. Tap _Settings_. A new interface will appear.
3. Tap _Folders_. A list of existing folders will appear.
4. Tap the plus icon (![Roundcube create folder](https://docs.cpanel.net/img/roundcube-mobile-add-folder.png)) in the bottom right-hand corner of the interface, or tap the three-dot icon (![Roundcube folder action](https://docs.cpanel.net/img/roundcube-mobile-right-menu.png)) in the upper right-hand corner of the interface, then tap _Create_.
5. In the _Folder name_ text box, enter a name for the folder.
6. If the new folder should go underneath an existing folder, select the existing folder’s name from the _Parent folder_ menu. If not, select `---` from this menu.
7. In the _List view mode_ menu, select _List_ to view the folder’s messages as a list or _Threads_ to view the folder’s messages as threaded conversations.
8. Tap _Save_. A success message will appear, and the folder list will refresh. The folder you created will appear in the folder list.

## Delete a folder

### Roundcube desktop interface

To delete a folder in the Roundcube desktop interface, perform the following steps:

1. In the left menu bar of the Roundcube interface, click the Settings icon (![Settings icon](https://docs.cpanel.net/img/roundcube-settings.png)).
2. In the _Settings_ menu, click _Folders_.
3. In the list of folders, select the folder you wish to delete, then click _Delete_. A confirmation window will appear.
4. Click _Delete_ to delete the folder. A success message will appear, and the folder list will refresh. The folder you deleted will no longer appear in the folder list.

### Roundcube mobile interface

To delete a folder in the Roundcube mobile interface, perform the following steps:

1. Tap the top left menu icon (![Roundcube mobile menu](https://docs.cpanel.net/img/roundcube-mobile-hamburger-menu.png)) to open the Roundcube menu.
2. Tap _Settings_. The _Settings_ interface will appear.
3. Tap _Folders_. A list of existing folders will appear.
4. In the list of folders, select the folder you wish to delete.
5. Tap the three-dot icon (![Roundcube folder action](https://docs.cpanel.net/img/roundcube-mobile-right-menu.png)) in the upper right-hand corner of the interface, then click _Delete_. A confirmation window will appear.
6. Tap _Delete_ to delete the folder. A success message will appear, and the folder list will refresh. The folder you deleted will no longer appear in the folder list.

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [How to Manually Migrate Horde Data to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The export\_horde\_calendars\_to\_ics Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×