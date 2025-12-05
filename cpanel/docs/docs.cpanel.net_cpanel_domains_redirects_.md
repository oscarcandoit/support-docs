---
url: "https://docs.cpanel.net/cpanel/domains/redirects/"
title: "Redirects | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/redirects/#main-content)

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
3. [Domains](https://docs.cpanel.net/cpanel/domains/)
4. Redirects


[domains](https://docs.cpanel.net/tags/domains/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/domains/redirects/#overview)

* * *

[Add a redirect](https://docs.cpanel.net/cpanel/domains/redirects/#add-a-redirect)

* * *

[Redirects via third-party applications](https://docs.cpanel.net/cpanel/domains/redirects/#redirects-via-third-party-applications)

* * *

[The Current Redirects table](https://docs.cpanel.net/cpanel/domains/redirects/#the-current-redirects-table)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/redirects/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/domains/redirects/#overview)

* * *

[Add a redirect](https://docs.cpanel.net/cpanel/domains/redirects/#add-a-redirect)

* * *

[Redirects via third-party applications](https://docs.cpanel.net/cpanel/domains/redirects/#redirects-via-third-party-applications)

* * *

[The Current Redirects table](https://docs.cpanel.net/cpanel/domains/redirects/#the-current-redirects-table)

* * *

## Redirects

![](https://docs.cpanel.net/img/cpanel-icons/redirects.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/domains/redirects/)

Last modified: _2025 July 23_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Redirects_ interface allows you to send all of the visitors of a domain or particular page to a different URL. A [redirect](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#redirect) is useful when you want to seamlessly send your website visitors to another web address. For example, you could use a redirect to allow your visitors to enter a short URL to access a page with a longer URL.

You can also use redirects like this to avoid storing sensitive customer information. For example, payment processors like [Stripe](https://docs.stripe.com/payment-links/create) offer links to secure pages where they process payment information so that you don’t have to store any credit card data.

Note:

- You **cannot** change an existing redirect. To modify a redirect, you **must** delete it, and then recreate it.
- If you wish to redirect a domain’s visitors from the insecure version of the website to the secure version, use the _Force HTTPS Redirect_ option in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_).
- If you need to make any manual changes, read our [How to Configure Redirects Manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/) documentation.

## Add a redirect

To add a redirect, perform the following actions:

1. Select a redirect type from the _Type_ menu.

   - _Permanent (301)_ — This setting indicates that a website has moved to a new, permanent location and prompts search engines to update their records.
   - _Temporary (302)_ — This setting indicates that a website has moved temporarily. This may be useful when a site is unavailable for maintenance, for example. This has no effect on search engine records.
2. Select a domain name from the menu, or select _\*\*All Public Domains\*\*_ to redirect all of the domains that your cPanel account controls.
3. In the `/` text box, enter the rest of the URL that you want to redirect users from. For example, if you wish to redirect `http://example.com/directory/file.html` to another URL, enter `directory/file.html` in this text box.
4. In the _Redirects to_ text box, enter the URL that you want to redirect users to.






Important:





You **must** specify a protocol in this text box. For example, `http://`, `https://`, or `ftp://`.

5. Select one of the following options:
   - _Only redirect with www._ — This setting only redirects visitors who enter the _www._ prefix before the domain name part of the URL.
   - _Redirect with or without www._ — This setting redirects all users, regardless of whether the visitor enters the _www._ prefix before the domain name part of the URL.
   - _Do Not Redirect www._ — This setting does **not** redirect users who enter the _www._ prefix before the the domain name part of the URL.






     Note:





     The interface **disables** the _www._ redirection setting if you select _\*\*All Public Domains\*\*_.
6. Select the _Wild Card Redirect_ setting if you wish to redirect **all** files within a directory to the same filename in the new directory. For example, if you enable the _Wild Card Redirect_ setting and `example1.com` redirects to `example.com`, then a visitor who tries to access the `http://example1.com/pic.jpg` URL redirects to the `http://example.com/pic.jpg` URL.
7. Click _Add_.
8. To test the redirect, click the link under _Directory_ in the _Current Redirects_ table. If you properly configured the redirect, the system directs you to the domain.

Note:

To add a redirect where the original domain appears in the browser’s address bar, create a subdomain and redirect it to your chosen domain. You can create a subdomain in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_).

### Redirects via third-party applications

When you add a redirect with the cPanel interface, the system places redirect rules at the **bottom** of the `.htaccess` file. Some third-party applications will ignore your rules because those applications only read rules and configurations that their section of the `.htaccess` file contains.

If you use a third-party application or content management system to add a redirect, such as WordPress®, the redirect may not function properly. To avoid this issue, you can [configure your redirects manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/).

### The Current Redirects table

The _Current Redirects_ table lists the redirections that currently exist on your account. To search for a redirection, enter the search criteria in the _Search_ text box and click _Go_.

The table lists the following information about redirects:

| Label | Description |
| --- | --- |
| _Domain_ | The domain to redirect. _ALL_ represents all of the account’s publicly-available domains. |
| _Directory_ | The directory to redirect. Click the link to test the redirection. |
| _Regular Expression_ | The system will redirect any URL that matches the regular expression in this column. |
| _Redirect URL_ | The URL to which you wish to redirect users. |
| _HTTP Status Code_ | The numerical [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) of the redirect. |
| Type | - _permanent_ — This setting indicates that a website has moved to a new, permanent location and prompts search engines to update their records.<br>- _temporary_ — This setting indicates that a website has moved temporarily. |
| _Match www._ | Only redirect visitors who enter the `www.` prefix before the domain name part of the URL. |
| _Wildcard_ | Redirect all files within a directory to the same filename in the new directory. For example, if you enable the _Wild Card Redirect_ setting and `example1.com` redirects to `example.com`, then a visitor who tries to access the `http://example1.com/pic.jpg` URL redirects to the `http://example.com/pic.jpg` URL. |
| _Actions_ | Available actions for the redirection:<br>- _Delete_ — Delete the redirection. Click _Yes_ to confirm the deletion.<br>Important:<br>Most web browsers add redirections to a cache. Visitors may need to clear their web browser cache to remove the redirection from their web browsers |

#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)
- [Site Publisher](https://docs.cpanel.net/cpanel/domains/site-publisher/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×