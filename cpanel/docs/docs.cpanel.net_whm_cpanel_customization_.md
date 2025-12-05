---
url: "https://docs.cpanel.net/whm/cpanel/customization/"
title: "Customization | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/cpanel/customization/#main-content)

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
3. [cPanel](https://docs.cpanel.net/whm/cpanel/)
4. Customization


[branding](https://docs.cpanel.net/tags/branding/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/cpanel/customization/#overview)

* * *

[Customization options](https://docs.cpanel.net/whm/cpanel/customization/#customization-options)

* * *

[Logos](https://docs.cpanel.net/whm/cpanel/customization/#logos)

* * *

[Colors](https://docs.cpanel.net/whm/cpanel/customization/#colors)

* * *

[Favicon](https://docs.cpanel.net/whm/cpanel/customization/#favicon)

* * *

[Links](https://docs.cpanel.net/whm/cpanel/customization/#links)

* * *

[Public Contact](https://docs.cpanel.net/whm/cpanel/customization/#public-contact)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/cpanel/customization/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/cpanel/customization/#overview)

* * *

[Customization options](https://docs.cpanel.net/whm/cpanel/customization/#customization-options)

* * *

[Logos](https://docs.cpanel.net/whm/cpanel/customization/#logos)

* * *

[Colors](https://docs.cpanel.net/whm/cpanel/customization/#colors)

* * *

[Favicon](https://docs.cpanel.net/whm/cpanel/customization/#favicon)

* * *

[Links](https://docs.cpanel.net/whm/cpanel/customization/#links)

* * *

[Public Contact](https://docs.cpanel.net/whm/cpanel/customization/#public-contact)

* * *

## Customization

![](https://docs.cpanel.net/img/whm-icons/customization.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/cpanel/customization/)

Last modified: _2025 April 24_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to customize parts of the [cPanel interface](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface). You can modify the following items:

- Upload [custom logos](https://docs.cpanel.net/whm/cpanel/customization/#logos).
- Update [colors](https://docs.cpanel.net/whm/cpanel/customization/#colors) in the cPanel interface to match your company’s branding.
- Upload a [favicon](https://docs.cpanel.net/whm/cpanel/customization/#favicon).
- Update the _Documentation_ and _Help_ [links](https://docs.cpanel.net/whm/cpanel/customization/#links) in the cPanel interface footer.
- Update the [contact information](https://docs.cpanel.net/whm/cpanel/customization/#public-contact) on publicly-visible placeholder pages.

Note:

This interface **only** updates the cPanel interface. It does **not** update the WHM interface.

For the purposes of WebPros International, LLC’s products and documentation, we use the following terms:

| Term | Description |
| --- | --- |
| **Branding** | Branding modifies the cPanel interface in order to match your company’s logo and brand. <br>- Branding changes include updates to image assets or text labels.<br>- For more information, read our [Branding](https://api.docs.cpanel.net/guides/guide-to-cpanel-interface-customization-and-branding/branding-customization/) documentation. |
| **Includes** | Content includes add custom content to the header or footer of the cPanel interface (but not the WHM interface). <br>- You can create content includes for specific cPanel interfaces, or global content includes that display on all of cPanel’s interfaces.<br>- For more information, read our [Content Includes](https://api.docs.cpanel.net/guides/guide-to-cpanel-interface-customization-and-branding/guide-to-cpanel-interface-customization-content-includes/) documentation. |
| **Plugin** | A plugin modifies an interface’s features or functionality, and it may also include changes to the interface’s appearance. <br>- You can write plugins for the cPanel or WHM interfaces.<br>- You can use the [cPanel Style Guide](http://styleguide.cpanel.net/#/home) to ensure that your interfaces match the appearance of standard cPanel interfaces.<br>- For more information, read our [Guide to cPanel Plugins](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/) documentation. |
| **Theme** | A theme applies an overlay on the skeletal framework for all of the interfaces. <br>- cPanel & WHM currently ships with the [Jupiter](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface) theme for cPanel and for WHM.<br>- The [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface/) and [_Login_](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) interfaces also use themes. |

## Customization options

### Logos

The _Logos_ tab allows you to update the following items:

- A logo for light backgrounds.
- A logo for dark backgrounds.
- A logo description.

To update the logos and description, perform the following steps:

Note:

You can **only** use the [`.svg`](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) file format.

1. Under _Company Logo - used with dark background colors_, click _Browse_.
2. Select logo that you wish to use, and click _Open_. A preview of the logo will appear.
3. Under _Company Logo - used with light background colors_, click _Browse_.
4. Select logo that you wish to use, and click _Open_. A preview of the logo will appear.
5. In the _Description_ text box, enter a description for the image tag.





Note:




The information you enter updates the [alt text](https://en.wikipedia.org/wiki/Alt_attribute) for the logo. Screen readers use this text to describe the page content.


6. Click _Update Logos_.

### Colors

The _Colors_ tab allows you to update the color of cPanel’s [Main Menu](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/#the-main-menu).

To update the [Main Menu](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) color for your cPanel accounts, perform the following steps:

1. Click the _Main Menu Background Color_ text box, then click the color wheel to select the color you prefer. Or, enter the [hexadecimal color code](https://en.wikipedia.org/wiki/Web_colors) that you prefer.
2. Click _Update Colors_.

To restore the Main Menu’s default colors, click _Restore Defaults_.

### Favicon

The _Favicon_ tab allows you to update the cPanel interface’s [favicon](https://wikipedia.org/wiki/Favicon), the small icon that appears in a web browser’s tab.

Note:

You can **only** use the [`.ico`](https://en.wikipedia.org/wiki/ICO_(file_format)) file format.

To update the favicon, perform the following steps:

1. Click _Browse_.
2. Select favicon that you wish to use, and click _Open_. A preview of the favicon will appear.
3. Click _Update Favicon_.

### Links

The _Links_ tab allows you to update the _Documentation_ and _Help_ links in the cPanel interface footer.

To update the links, perform the following steps:

1. Enter your preferred link in the _Help Link_ text box.
2. Enter your preferred link in the _Documentation Link_ text box.
3. Click _Update Links_.

The text will not update, but the links will now direct users to your chosen URL.

### Public Contact

The _Public Contact_ tab allows you to customize the contact information that cPanel & WHM provides for a cPanel account’s [default website page](https://docs.cpanel.net/whm/account-functions/web-template-editor/#default-website-page) and [suspended website page](https://docs.cpanel.net/whm/account-functions/web-template-editor/#account-suspended).

To update your contact information, perform the following steps:

1. Enter your company’s name in the _Public Company Name_ text box.
2. Enter your company’s contact URL in the _Public Contact URL_ text box.
3. Click _Save_.

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Copy a Locale](https://docs.cpanel.net/whm/locales/copy-a-locale/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Edit a Locale](https://docs.cpanel.net/whm/locales/edit-a-locale/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×