---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/"
title: "How to Copy an Account with SSH Keys | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Copy an Account with SSH Keys


[transfers](https://docs.cpanel.net/tags/transfers/) [accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#overview)

* * *

[Securely copy an account with SSH keys](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#securely-copy-an-account-with-ssh-keys)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#overview)

* * *

[Securely copy an account with SSH keys](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/#securely-copy-an-account-with-ssh-keys)

* * *

## How to Copy an Account with SSH Keys

Last modified: _2025 July 14_

* * *

## Overview

This document describes how to use SSH keys to securely copy an account from one server ( **source** server) to another server ( **destination** server).

Note:

This document uses the following definitions:

- The **destination** server is the server to which you wish to copy the account.
- The **source** server is the server from which you wish to copy the account, and on which the account already existed.

Important:

- Use the public key on the **source** server **only**. **Do not import the private key into the SSH keys of the source server**.
- If you experience problems with session timeouts, increase the number of seconds in the _Number of second an SSH connection related to an account transfer may be inactive before timing out setting in the System_ section of the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

## Securely copy an account with SSH keys

Important:

You **must** perform all of the actions below as the `root` user.

To use SSH keys to securely move an account from the **source** server to the **destination** server, perform the following steps:

1. Log in to the **destination** server.
2. Use WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface _(WHM » Home » Security Center » Manage root’s SSH Keys)_ to generate, authorize, and download a new SSH key pair.
3. Log in to the **source** server.
4. Use WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface _(WHM » Home » Security Center » Manage root’s SSH Keys)_ to import the public key that you generated.

   - Use a unique key name for this key.
   - Include the password, if necessary.
   - Paste the public key in the _Paste the Public Key_ text box.






     Warning:





     Do **not** paste in the private key. The private key **must** remain on the **destination** server.
5. Click _Import_, and then click _Return to SSH Manager_.
6. Locate the key in the _Public Keys_ table and click _Manage Authorization_.
7. Click _Authorize_.
8. Log in to the **destination** server.
9. Use WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface _(WHM » Home » Transfers » Transfer Tool)_ to perform the account transfer with the following settings:

   - Enter the appropriate information for the **source** server.
   - Under _Login_, select _Root_.
   - Under _Authentication Method_, select _SSH Public Key_.
   - Select the key that you generated in Step 2 from the _SSH Key_ menu.
   - If necessary, enter the SSH key’s passphrase in the _SSH Key Passphrase_ text box.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Change Multiple Sites' IP Addresses](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/)
- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×