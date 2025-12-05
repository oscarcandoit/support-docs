---
url: "https://docs.cpanel.net/whm/locales/copy-a-locale/"
title: "Copy a Locale | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/locales/copy-a-locale/#main-content)

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
4. Copy a Locale


[locales](https://docs.cpanel.net/tags/locales/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/locales/copy-a-locale/#overview)

* * *

[Copy a locale into a standard locale](https://docs.cpanel.net/whm/locales/copy-a-locale/#copy-a-locale-into-a-standard-locale)

* * *

[Copy a locale into a non-standard locale](https://docs.cpanel.net/whm/locales/copy-a-locale/#copy-a-locale-into-a-non-standard-locale)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/locales/copy-a-locale/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/locales/copy-a-locale/#overview)

* * *

[Copy a locale into a standard locale](https://docs.cpanel.net/whm/locales/copy-a-locale/#copy-a-locale-into-a-standard-locale)

* * *

[Copy a locale into a non-standard locale](https://docs.cpanel.net/whm/locales/copy-a-locale/#copy-a-locale-into-a-non-standard-locale)

* * *

## Copy a Locale

![](https://docs.cpanel.net/img/whm-icons/copy_a_locale.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/locales/copy-a-locale/)

Last modified: _2024 November 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to duplicate a locale in to a standard locale or a non-standard locale.

Note:

- A standard locale is a language with data in the Unicode [Common Locale Data Repository (CLDR)](http://cldr.unicode.org/).
- A non-standard locale is a language with no data in the CLDR.

## Copy a locale into a standard locale

To copy a locale into a standard locale, perform the following steps:

1. Select the original locale from the _Duplicate Locale_ menu.

2. Select _Standard locale_.

3. Select a locale from the _Standard locale_ menu.

4. Click _Duplicate_. The system will redirect you to a new interface.

5. Click _Click here to download_ to download the duplicate in XML format, or click _upload it here_ to edit the copy’s XML.


## Copy a locale into a non-standard locale

To copy a locale into a non-standard locale, perform the following steps:

1. Select an original locale from the _Duplicate Locale_ menu.

2. Select _Non standard locale_.

3. Enter a name for the copy, prefixed with the `i_` tag, in the appropriate boxes.







Note:





An `i_` tag is a standard way to create, identify, and work with a non-standard locale. It consists of a code prefixed with the letter `i`, followed by an underscore ( `_` ).

4. Select the options from the _Fallback Locale_, _Number Formatting_, and _Character Orientation_ menus.







Note:





When an `i_` tag’s lexicon does not have a phrase, the tag will reference the locale that is set to _Fallback_ to find the phrase there.

5. Click _Duplicate_. The system will redirect you to a new interface.

6. Click _Click here to download_ to download the duplicate in XML format, or click _upload it here_ to edit the copy’s XML.


Note:

If a desired locale is not present, click _rebuild the locale databases_ to update the list of locales.

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Delete a Locale](https://docs.cpanel.net/whm/locales/delete-a-locale/)
- [Edit a Locale](https://docs.cpanel.net/whm/locales/edit-a-locale/)
- [Locale XML Download](https://docs.cpanel.net/whm/locales/locale-xml-download/)
- [View Available Locales](https://docs.cpanel.net/whm/locales/view-available-locales/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×