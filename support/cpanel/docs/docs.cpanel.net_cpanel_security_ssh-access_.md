---
url: "https://docs.cpanel.net/cpanel/security/ssh-access/"
title: "SSH Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/ssh-access/#main-content)

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
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. SSH Access


[security](https://docs.cpanel.net/tags/security/) [ssh](https://docs.cpanel.net/tags/ssh/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/ssh-access/#overview)

* * *

[Connect to your server via SSH](https://docs.cpanel.net/cpanel/security/ssh-access/#connect-to-your-server-via-ssh)

* * *

[Manage SSH keys](https://docs.cpanel.net/cpanel/security/ssh-access/#manage-ssh-keys)

* * *

[Generate a New Key](https://docs.cpanel.net/cpanel/security/ssh-access/#generate-a-new-key)

* * *

[Import Key](https://docs.cpanel.net/cpanel/security/ssh-access/#import-key)

* * *

[Manage your keys](https://docs.cpanel.net/cpanel/security/ssh-access/#manage-your-keys)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/ssh-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/ssh-access/#overview)

* * *

[Connect to your server via SSH](https://docs.cpanel.net/cpanel/security/ssh-access/#connect-to-your-server-via-ssh)

* * *

[Manage SSH keys](https://docs.cpanel.net/cpanel/security/ssh-access/#manage-ssh-keys)

* * *

[Generate a New Key](https://docs.cpanel.net/cpanel/security/ssh-access/#generate-a-new-key)

* * *

[Import Key](https://docs.cpanel.net/cpanel/security/ssh-access/#import-key)

* * *

[Manage your keys](https://docs.cpanel.net/cpanel/security/ssh-access/#manage-your-keys)

* * *

## SSH Access

![](https://docs.cpanel.net/img/cpanel-icons/ssh_access.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/ssh-access/)

Last modified: _2024 November 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface provides information about how to connect to another web server via the SSH (secure shell) network protocol.

The SSH network protocol allows you to connect to another web server over the internet via a command line interface (CLI). You can use this network protocol to remotely manage your server, configure CGI scripts, and perform other tasks.

Many modern operating systems, such as macOS® and Linux® distributions, include SSH. If you use Microsoft Windows® to connect to your server, you **must** use an SSH client, such as [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/), to log in to your server.

Many Unix-based operating systems include standardized commands. For a list of standardized Unix-based (POSIX) commands, read the [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/html_node/index.html) documentation.

Note:

Not all hosting providers allow shell access. For more information, contact [your hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/).


## Connect to your server via SSH

- [PuTTY](https://docs.cpanel.net/cpanel/security/ssh-access/#tab-title-1)
- [PuTTY and a private key](https://docs.cpanel.net/cpanel/security/ssh-access/#tab-title-2)
- [macOS or Linux](https://docs.cpanel.net/cpanel/security/ssh-access/#tab-title-3)

To use PuTTY to connect to your server via SSH, perform the following steps:

1. Download and install the [PuTTY](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/) client.
2. From the Windows _Start_ menu, open the client.
3. In the _Session_ interface, enter the hostname or IP address of the server in the _Host Name (or IP address)_ text box (for example, `192.0.2.0`).
4. Enter the port number in the _Port_ text box (for example, `22`).
5. Select the _SSH_ protocol.
6. Click _Open_.
7. Enter your cPanel account’s username.
8. Enter your cPanel account’s password.

To log in to a server via SSH with PuTTY and a public key, perform the following steps:

01. From the Windows _Start_ menu, open the client.
02. Navigate to the _PuTTY Key Generator_ interface.
03. Under the _Actions_ heading, click _Generate_. PuTTY will generate the key and display the result under the Key menu.
04. Copy the public key and paste it in the `.ssh/authorized_keys` file.
05. Enter a passphrase in the _Key passphrase_ and _Confirm passphrase_ text boxes.
06. Click _Save private key_ and save the key as a `.ppk` file.
07. In the _Session_ interface, from the _Saved Sessions_ menu, select your preferred authorization session and click _Load_.
08. Navigate to the _Auth_ interface under the _SSH_ category.
09. Click _Browse_, select the private key file to upload, and click _Open_.
10. Navigate to cPanel’s _Manage SSH Keys_ interface ( _Home » Security » SSH Access » Manage SSH Keys_) and import the server’s keys.

**Log in with a Password**

To log in to your server with a password via SSH using macOS or Linux, perform the following steps:

1. Open a Terminal session.
2. Run the following command: `ssh -p port user@IP` where `port` represents the port number, `user` represents your username, and `IP` represents your IP address. For example:



```bash
user@workstation:~$ ssh -p 22 user@192.0.2.0
```

3. Enter your password.

The password login process is similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>user@workstation:~$ ssh -p 22 user@192.0.2.0<br>user@192.0.2.0's password:<br>Last login: Wed Dec  9 08:31:49 2020 from 192.0.3.33<br>[user@server.example.com ~]#<br>``` |

**Log in with a SSH Key**

To log in to your server with a password via SSH using macOS or Linux, perform the following steps:

1. Open a Terminal session.
2. Run the following command: `ssh -p port -i ssh-key user@IP` where `port` represents the port number, `ssh-key` represents the file path to your SSH key, `user` represents your username, and `IP` represents your IP address. For example:



```bash
user@workstation:~$ ssh -p 22 -i /Users/example/.ssh/mykey user@192.0.2.0
```

3. Enter your SSH key password. If you did not set a password when you created the SSH key, press Enter when the system prompts you for a password.

The SSH Key login process is similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>user@workstation:~$ ssh -p 22 -i /Users/example/.ssh/mykey user@192.0.2.0<br>user@192.0.2.0's password:<br>Last login: Tue Dec  8 13:54:10 2020 from 192.0.3.33<br>[user@server.example.com ~]#<br>``` |

## Manage SSH keys

This section of cPanel’s _SSH Access_ interface allows you to create, import, manage, and remove SSH keys. The system will use these keys when you confirm that a specific computer has the right to access your website’s information with SSH.

### Generate a New Key

Use this section of the interface to create new SSH key pairs, which include a public key and a private key.

To generate a new SSH key pair, perform the following steps:

1. Click _Manage SSH Keys_.
2. Click _Generate a New Key_.
3. To use a custom key name, enter the key name in the _Key Name (This value defaults to id\_rsa):_ text box.





Note:




If you use a custom key name, you **must** manually specify the SSH key when you log in to the server.


4. Enter and confirm the new password in the appropriate text boxes.





Note:





- This step is **optional** if your hosting provider sets the _SSH Keys_ setting to `0` in WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration/) interface ( _WHM » Home » Security Center » Password Strength Configuration_).

  - The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
  - Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
  - Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.

5. Select the desired key type.
   - DSA keys provide quicker key generation and signing times.
   - RSA keys provide quicker verification times.
6. Select the desired key size.





Note:




Greater key sizes provide more security, but they result in larger file sizes and slower authentication times.


7. Click _Generate Key_. The interface will display the saved location of the key.





Important:




For the new SSH key to function, you **must** authorize the SSH key. For more information, read the Manage your keys section.



### Import Key

To import an existing SSH key, perform the following steps:

1. Click _Manage SSH Keys_.
2. Click _Import Key_.
3. To use a custom key name, enter the key name in the _Choose a name for this key (defaults to id\_dsa)_ text box.





Important:




If you use a custom key name, you **must** manually specify the SSH key when you log in to the server.


4. Paste the public and private keys into the appropriate text boxes.
5. Click _Import_.

## Manage your keys

The _Public Keys_ and _Private Keys_ tables display the following information about your existing keys:

- _Name_ — The key’s name. Public and private keys use the same key name.
- _Authorization Status_ — Whether you authorized the key.





Important:




You **must** authorize new keys before you attempt to use them.






Note:




This column **only** displays in the _Public Keys_ table.


- _Actions_ — You can perform the following actions:

  - _Delete Key_ — Click to delete the key, and then click _Yes_ to confirm that you wish to delete the key.
  - _View/Download_ — Click to view or download the key. To download the key, save the contents of the _Public SSH Key_ text box to your computer.
  - _Manage_ — Click to manage authorization for the key. A new interface will appear. Click _Authorize_ to authorize the key, or _Deauthorize_ to revoke authorization for the key.





    Note:





- You can **only** perform this action for public keys.
- After you deauthorize a key, that key’s users **cannot** log in with the associated private key.

#### Additional Documentation

* * *

- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [Security Policy](https://docs.cpanel.net/cpanel/security/security-policy/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×