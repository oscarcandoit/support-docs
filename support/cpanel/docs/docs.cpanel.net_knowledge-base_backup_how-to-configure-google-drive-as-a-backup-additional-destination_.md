---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/"
title: "How to Configure Google Drive as a Backup Additional Destination | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#main-content)

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
3. [Backup](https://docs.cpanel.net/knowledge-base/backup/)
4. How to Configure Google Drive as a Backup Additional Destination


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#overview)

* * *

[Prerequisites](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#prerequisites)

* * *

[Create your account credentials](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#create-your-account-credentials)

* * *

[Set up your OAuth consent screen](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#set-up-your-oauth-consent-screen)

* * *

[Publish the Google application](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#publish-the-google-application)

* * *

[Create a Google Drive transport](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#create-a-google-drive-transport)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#overview)

* * *

[Prerequisites](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#prerequisites)

* * *

[Create your account credentials](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#create-your-account-credentials)

* * *

[Set up your OAuth consent screen](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#set-up-your-oauth-consent-screen)

* * *

[Publish the Google application](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#publish-the-google-application)

* * *

[Create a Google Drive transport](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#create-a-google-drive-transport)

* * *

## How to Configure Google Drive as a Backup Additional Destination

Last modified: _2025 July 9_

* * *

## Overview

This document explains how to set up your Google Drive™ account as an _Additional Destination_ in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).

## Prerequisites

Before you can use Google Drive as a backup destination, you **must** perform the following steps:

1. Create a [Google account](https://myaccount.google.com/).
2. Create a [Google Console project](https://support.google.com/googleapi/answer/6251787?hl=en#zippy=%2Ccreate-a-project).
3. Enable the [Google Drive API](https://developers.google.com/drive/api/v3/enable-drive-api) from the [Google Console](https://console.developers.google.com/).

## Create your account credentials

To set up Google Drive account credentials for backups, perform the following steps:

1. Navigate to the [Google API Manager](https://console.developers.google.com/) website.
2. In the left side navigation bar, click _Credentials_.
3. Click _Create credentials_.
4. Click _Help me choose_.

#### Credential Type

In the _Credential Type_ section, perform the following steps:

1. In the _Which API are you using?_ menu, select _Google Drive API_.
2. In the _What data will you be accessing?_ menu, select _User Data_.
3. Click _NEXT_.

#### OAuth Consent Screen

If this is the first time you have authorized this API, the _OAuth Consent Screen_ section will appear. Perform the following steps:

1. In the _App Information_ section, enter the information for _App Name_ and select the _User Support Email_.
2. In the _Developer contact information_ section, enter your email address.
3. Click _SAVE AND CONTINUE_.

#### Scopes

In the _Scopes_ section, perform the following steps:

1. Click _ADD OR REMOVE SCOPES_.
2. In the list, select the `Google Drive API` _API_ with the `.../auth/drive.file` _Scope_ and click _Update_.
3. Click _SAVE AND CONTINUE_.

#### OAuth Client ID

In the _OAuth Client ID_ section, perform the following steps:

1. In the _OAuth Client ID_ menu, select _Web application_ as the _Application type_ you plan to use.
2. Enter a name for the application in the _Name_ field.
3. In the _Authorized redirect URIs_ field, add an entry for each server performing backups to this location, where `HOSTNAME` represents the hostname of a server:


```bash
https://HOSTNAME:2087/googledriveauth/callback
```

4. Click _CREATE_. The _Your Credentials_ section will appear.
5. Click _DOWNLOAD_ to download the newly-created credentials.






Note:





You can also access the credentials in the _Credentials_ interface.

6. Click _DONE_.

Copy the client ID and client secret and save them to a secure location. Step 7 of the [Create a Google Drive transport](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#create-a-google-drive-transport) procedure requires these credentials.

## Set up your OAuth consent screen

To set up an OAuth consent screen, perform the following steps:

1. In the lefthand menu, click _OAuth consent screen_. A configuration interface will appear.
2. Under _Test Users_, click _ADD USERS_. A sidebar will appear.
3. Enter the email address(es) you added in the initial [OAuth Consent Screen](https://docs.cpanel.net/knowledge-base/backup/how-to-configure-google-drive-as-a-backup-additional-destination/#oauth-consent-screen) section.
4. Click _SAVE_.

## Publish the Google application

If you do not publish your application, the Google API Manager will disable your application after seven days. To learn how to publish an application, read Google’s [Publish apps to the Google Workspace Marketplace](https://developers.google.com/workspace/marketplace/how-to-publish) documentation.

## Create a Google Drive transport

Warning:

While you perform these steps, disable any popup blockers in your browser to prevent errors.

To create a Google Drive transport, perform the following steps:

01. Log in to WHM as a user with `root`-level privileges.
02. Navigate to WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface _(WHM » Home » Backup » Backup Configuration)_ and select the _Additional Destinations_ tab.
03. In the _Destination Type_ menu, select _Google Drive™_.
04. Click _Create New Destination_.
05. In the _Destination Name_ text box, enter a display name for this backup destination.
06. In the _Folder_ text box, enter the desired folder in which to store backups.





    Note:




    If you do **not** specify a folder, the system will store backups in the top-level folder.


07. Enter your _Client ID_ and _Client secret_.
08. Click _Generate Credentials_ to create the credentials file. A new tab will appear that allows you to authorize access to your Google Drive data.
09. Follow Google’s directions to authorize access to your Google Drive.
10. When the message _Credentials successfully generated_ appears, close that browser tab to return to the tab with the WHM interface.
11. In the _Timeout_ text box, enter the desired timeout duration. This value defaults to `30` seconds.
12. Click _Save Destination_.





    Note:





- To validate your remote destination, click _Save and Validate Destination_.
- If you do **not** authorize access to your Google Drive data, this action will fail.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [How to Create a Custom Transport Script for Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)
- [How to Exclude Files from Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)
- [How to Resolve CIFS-mounted Backup Drive Permissions Errors](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)
- [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×