---
url: "https://docs.cpanel.net/cpanel/email/encryption/"
title: "Encryption | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/encryption/#main-content)

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
3. [Email](https://docs.cpanel.net/cpanel/email/)
4. Encryption


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [gnupg](https://docs.cpanel.net/tags/gnupg/) [encryption](https://docs.cpanel.net/tags/encryption/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/encryption/#overview)

* * *

[Create a New Key](https://docs.cpanel.net/cpanel/email/encryption/#create-a-new-key)

* * *

[Import a key](https://docs.cpanel.net/cpanel/email/encryption/#import-a-key)

* * *

[Delete or view keys](https://docs.cpanel.net/cpanel/email/encryption/#delete-or-view-keys)

* * *

[Delete a key](https://docs.cpanel.net/cpanel/email/encryption/#delete-a-key)

* * *

[View a key](https://docs.cpanel.net/cpanel/email/encryption/#view-a-key)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/encryption/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/encryption/#overview)

* * *

[Create a New Key](https://docs.cpanel.net/cpanel/email/encryption/#create-a-new-key)

* * *

[Import a key](https://docs.cpanel.net/cpanel/email/encryption/#import-a-key)

* * *

[Delete or view keys](https://docs.cpanel.net/cpanel/email/encryption/#delete-or-view-keys)

* * *

[Delete a key](https://docs.cpanel.net/cpanel/email/encryption/#delete-a-key)

* * *

[View a key](https://docs.cpanel.net/cpanel/email/encryption/#view-a-key)

* * *

## Encryption

![](https://docs.cpanel.net/img/cpanel-icons/encryption.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/encryption/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you create, store, and manage GnuPG keys. GnuPG
keys use the public key approach for encryption.

Programs that use GnuPG keys encrypt outbound messages with a public
key. Only the intended recipient, who possesses the private key, can
decrypt the message.

## Create a New Key

To add a GnuPG key, perform the following steps:

1. Enter your information in the _Create a New Key_ text boxes.






Important:





Use a secure password. A secure password is **not** a dictionary
word, and it contains uppercase and lowercase letters, numbers, and
symbols.







Note:





Use an appropriate expiration date for your key. The system defaults
to one year (`1y`).

2. Select the key size, in bits, from the _Key Size_ menu. The key size defaults to _2048_.
3. Click _Generate Key_.

After you create a new GnuPG key, you can add the key to other programs
or interfaces that require GnuPG keys, for example, a mail client.

## Import a key

To import an existing GnuPG key, perform the following steps:

1. Copy and paste the GnuPGkey into the available text box.
2. Click _Import_.

The system will add the key to your server.

## Delete or view keys

After you add a GnuPG key set to the server, you can delete it or view
it in the _Public Keys_ or _Private Keys_ tables.

### Delete a key

To delete a GnuPGkey, perform the following steps:

1. Locate the key that you wish to delete in the _Public_
_Keys_ or _Private Keys_ tables.
2. Click _Delete GnuPG Key_ for that key. A new interface will appear.
3. Click _Yes_. A success or error message will appear.






Important:





You must delete a private key before you delete the corresponding
public key.


### View a key

To view a GnuPG key, perform the following steps:

1. Locate the certificate that you wish to edit in the _Certificates on_
_Server_ table.
2. Click _View_. A new interface will appear that displays the GnuPG
key block.
3. Click _Go Back_ to return to the _Encryption_ interface.

More:

For more information on how to install encryption keys for your specific mail client, refer to their documentation:

- [Apple® Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac)
- [Thunderbird®](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages)
- [eM Client](https://www.emclient.com/blog/pgp--encrypt---sign-emails-in-a-few-clicks-302)
- [Gmail™](https://support.google.com/mail/answer/6330403?hl=en)

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×