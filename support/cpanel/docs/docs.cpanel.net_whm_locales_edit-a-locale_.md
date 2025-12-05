---
url: "https://docs.cpanel.net/whm/locales/edit-a-locale/"
title: "Edit a Locale | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/locales/edit-a-locale/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Locales](https://docs.cpanel.net/whm/locales/)
4. Edit a Locale


[locales](https://docs.cpanel.net/tags/locales/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/locales/edit-a-locale/#overview)

* * *

[Locale Editor - Bulk Mode](https://docs.cpanel.net/whm/locales/edit-a-locale/#locale-editor-bulk-mode)

* * *

[Non-Standard Locale Configuration](https://docs.cpanel.net/whm/locales/edit-a-locale/#non-standard-locale-configuration)

* * *

[The Snowman locale](https://docs.cpanel.net/whm/locales/edit-a-locale/#the-snowman-locale)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/locales/edit-a-locale/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/locales/edit-a-locale/#overview)

* * *

[Locale Editor - Bulk Mode](https://docs.cpanel.net/whm/locales/edit-a-locale/#locale-editor-bulk-mode)

* * *

[Non-Standard Locale Configuration](https://docs.cpanel.net/whm/locales/edit-a-locale/#non-standard-locale-configuration)

* * *

[The Snowman locale](https://docs.cpanel.net/whm/locales/edit-a-locale/#the-snowman-locale)

* * *

## Edit a Locale

![](https://docs.cpanel.net/img/whm-icons/edit_a_locale.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/locales/edit-a-locale/)

Last modified: _2024 November 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to edit the locales on your server.

Important:

After you use this interface, you **must** run the `/usr/local/cpanel/bin/build_locale_databases` script from the command line. If you do not run this script, your changes will **not** appear in the cPanel interface until the next time that the `upcp` script runs.


Note:

To edit a locale offline, download the locale file from WHM’s [_Locale XML Download_](https://docs.cpanel.net/whm/locales/locale-xml-download) interface ( _WHM » Home » Locales » Local XML Download_). After you make the desired changes, upload the file in WHM’s [_Locale XML Upload_](https://docs.cpanel.net/whm/locales/locale-xml-upload) interface ( _WHM » Home » Locales » Locale XML Upload_).

## Locale Editor - Bulk Mode

The _Bulk Mode_ editor allows you to edit any of a locale’s phrases.

To edit a locale’s phrases, perform the following steps:

1. Select the desired locale from the _Locale_ menu.
2. Select a theme from the _Theme_ menu.
3. Click _Go_. A new interface will display.
4. Click _Edit_ under the phrase that you wish to edit.
5. Edit the phrase in the _Value_ text box.
6. Click _Save Changes_ to save your changes, or click _cancel_ to cancel changes.





Note:




Click _Revert to Default Value_ to undo changes or edits to a specific phrase.



## Non-Standard Locale Configuration

This tool allows you to configure data for a non-standard locale. A non-standard locale is a language with no data in the [CLDR](http://cldr.unicode.org/). The system adds the prefix `i_` to the names of these locales. These tags are standard ways to create, identify, and work with non-standard locales.

To configure a non-standard locale, perform the following steps:

1. Select a locale from the _Locale_ menu and click _Go_.
2. Enter a display name in the _Display Name_ text box.
3. Select the fallback locale, number formatting, and character orientation from the appropriate menus.





Note:




When a non-standard locale’s lexicon does not have a phrase, the system displays the fallback locale’s phrase.


4. Click _Save_.

## The Snowman locale

The _☃ cPanel Snowmen ☃ — i\_cpanel\_snowmen_ locale is **not** for general use. Theme customizers and third-party developers can use this locale to test cPanel & WHM’s localization system against their customizations.

We hide the `i_cpanel_snowmen` locale by default. To make the `i_cpanel_snowmen` locale visible, create the following touch file:

```bash
/var/cpanel/enable_snowmen
```

To hide the `i_cpanel_snowmen` locale, remove the touch file.

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Copy a Locale](https://docs.cpanel.net/whm/locales/copy-a-locale/)
- [Delete a Locale](https://docs.cpanel.net/whm/locales/delete-a-locale/)
- [Locale XML Download](https://docs.cpanel.net/whm/locales/locale-xml-download/)
- [View Available Locales](https://docs.cpanel.net/whm/locales/view-available-locales/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×