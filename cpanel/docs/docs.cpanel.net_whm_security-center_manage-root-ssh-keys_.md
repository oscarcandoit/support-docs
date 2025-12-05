---
url: "https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/"
title: "Manage root's SSH Keys | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Manage root's SSH Keys


[security](https://docs.cpanel.net/tags/security/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#overview)

* * *

[Generate a New Key](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#generate-a-new-key)

* * *

[Import Key](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#import-key)

* * *

[Manage your keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#manage-your-keys)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#overview)

* * *

[Generate a New Key](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#generate-a-new-key)

* * *

[Import Key](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#import-key)

* * *

[Manage your keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#manage-your-keys)

* * *

## Manage root's SSH Keys

![](https://docs.cpanel.net/img/whm-icons/manage_roots_ssh_keys.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to add, import, and manage the SSH keys on your server. The system divides SSH keys into public and private key sets in two separate lists.

Note:

You can use SSH keys to securely transfer an account from one server (the remote server) to another server (the local or destination server). For more information, read our [How to Copy an Account with SSH Keys](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-copy-an-account-with-ssh-keys/) documentation.


## Generate a New Key

To generate a new SSH key set, which includes a public key and private key, perform the following steps:

1. Click _Generate a New Key_.
2. To set a custom key name, enter the key name in the _Key Name (defaults to id\_dsa):_ text box.





Note:




If you set a custom key name, you **must** manually specify the SSH key when you log in to the server. To manually set the SSH key, run the following command, where `user` is the username and `example` is the server name or IP address:



```perl
ssh user@example -i /root/.ssh/key_name
```

3. To use a password for the SSH key, perform the following step:
   - Enter and confirm the new password in the appropriate text boxes.






     Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.
4. Select the desired key type.
   - _DSA_ — Provides quicker key generation and signing times.
   - _RSA_ — Provide quicker verification times.
5. Select the desired key size.





Note:




Larger key sizes are more secure, but they result in larger file sizes and slower authentication times.


6. Click _Generate Key_. WHM displays the saved location of the key.





Important:




For the new SSH key to function, you **must** authorize it. For more information, read the [Manage your keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/#manage-your-keys) section below.



## Import Key

To import an existing SSH key, perform the following steps:

1. Click _Import Key_.

2. To use a custom key name, enter the key name in the _Choose a name for this key (defaults to id\_dsa)_ text box.






Important:




If you use a custom key name, you **must** manually specify the SSH key when you log in to the server. To manually specify the SSH key, run the following command, where `user` is the username and `example` is the server name or IP address:



```perl
user@example -i /root/.ssh/key_name
```

3. To import a PPK (PuTTY Key Generator) file, enter the password in the _Private key passphrase (Needed for PPK import only)_ text box.

4. Paste the public and private keys into the appropriate text boxes.






Important:




Private keys should **always** remain on the server that generated them. Do **not** enter the private key when you import another server’s key to allow SSH connections between the two servers, or to use SSH for account transfers.


5. Click _Import_.


## Manage your keys

The _Public Keys_ and _Private Keys_ tables display the following information about your existing keys:

- _Name_ — The key’s name. Public and private keys share the same key name.
- _Authorization Status_ — Whether you have authorized the key.





Important:




You **must** authorize new keys before you attempt to use them.






Note:




This column **only** appears in the _Public Keys_ table.


- _Actions_ — You can perform the following actions:

  - _Delete Key_ — Click to delete the key, and then click _Yes_ to confirm that you wish to delete the key.
  - _View/Download Key_ — Click to view or download the key. To download the key, copy the contents of the text box that appears and save it as a file on your computer.
  - _Manage Authorization_ — Click to manage authorization for the key. A new interface appears. Click _Authorize_ to authorize the key, or _Deauthorize_ to deauthorize the key.





    Note:





- The Manage Authorization action is only available for public keys.
- When you deauthorize a key, that key’s users cannot log in with the associated private key.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [Shell Fork Bomb Protection](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×