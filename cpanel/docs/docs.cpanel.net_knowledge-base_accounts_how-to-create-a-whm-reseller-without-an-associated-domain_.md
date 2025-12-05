---
url: "https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/"
title: "How to Create a WHM Reseller Without an Associated Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. How to Create a WHM Reseller Without an Associated Domain


[resellers](https://docs.cpanel.net/tags/resellers/) [accounts](https://docs.cpanel.net/tags/accounts/) [accountcreation](https://docs.cpanel.net/tags/accountcreation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#overview)

* * *

[Use the WHM API 1 createacct function to create a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#use-the-whm-api-1-createacct-function-to-create-a-whm-reseller-account-without-an-associated-domain)

* * *

[Manually create a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#manually-create-a-whm-reseller-account-without-an-associated-domain)

* * *

[Change the password for a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#change-the-password-for-a-whm-reseller-account-without-an-associated-domain)

* * *

[Use the WHM API 1 removeacct function to remove a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#use-the-whm-api-1-removeacct-function-to-remove-a-whm-reseller-account-without-an-associated-domain)

* * *

[Manually remove a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#manually-remove-a-whm-reseller-account-without-an-associated-domain)

* * *

[Known limitations for a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#known-limitations-for-a-whm-reseller-account-without-an-associated-domain)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#overview)

* * *

[Use the WHM API 1 createacct function to create a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#use-the-whm-api-1-createacct-function-to-create-a-whm-reseller-account-without-an-associated-domain)

* * *

[Manually create a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#manually-create-a-whm-reseller-account-without-an-associated-domain)

* * *

[Change the password for a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#change-the-password-for-a-whm-reseller-account-without-an-associated-domain)

* * *

[Use the WHM API 1 removeacct function to remove a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#use-the-whm-api-1-removeacct-function-to-remove-a-whm-reseller-account-without-an-associated-domain)

* * *

[Manually remove a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#manually-remove-a-whm-reseller-account-without-an-associated-domain)

* * *

[Known limitations for a WHM reseller account without an associated domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#known-limitations-for-a-whm-reseller-account-without-an-associated-domain)

* * *

## How to Create a WHM Reseller Without an Associated Domain

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)

Last modified: _2024 January 26_

* * *

## Overview

You can create administrative user accounts in WHM that do not correspond to a cPanel account. These accounts allow a user, such as an employee, to access WHM without root access and perform similar tasks to a `root` user.

Warning:

If you create a reseller without a domain, [certain parts of WHM will not function](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#known-limitations-for-a-whm-reseller-account-without-an-associated-domain) either when logged in as that user or when you attempt to perform actions that affect that user.

## Use the WHM API 1 `createacct` function to create a WHM reseller account without an associated domain

To quickly and easily create a WHM reseller account without an associated domain, you can use the WHM API 1 [`createacct`](https://api.docs.cpanel.net/openapi/whm/operation/createacct/) function.

1. Connect to the server via SSH as the `root` user.

2. Call the WHM API 1 `createacct` function. For example:



```bash
whmapi1 createacct username=user password=password reseller_without_domain=1
```





Note:





- In the example above, `user` represents the desired account username.
- Make sure you include the `reseller_without_domain` parameter.

3. Follow the URL in the output to edit the new account’s privileges. Alternatively, you can edit an account’s privileges using the WHM API 1 [`setacls`](https://api.docs.cpanel.net/openapi/whm/operation/setacls/) function.







Warning:





After creating the account using the API, it will not have **any** privileges added to it. You **must** add the privileges you want the account to have.


## Manually create a WHM reseller account without an associated domain

To manually create a WHM reseller account without an associated domain, perform the following steps:

Note:

- In the steps below, `username` represents the desired account username.
- You **must** select the desired permissions for your new reseller account.

1. Connect to the server via SSH as the `root` user.
2. Create a new user with the following command:


```bash
useradd -Um username
```

3. Set the new user’s password with the following command:


```bash
passwd username
```

4. Set the permissions for the new user’s home directory with the following command:


```bash
chmod -v 711 /home/username
```

5. Create an entry in the `/var/cpanel/resellers` file for `username` with the following command:


```bash
echo "username:" >> /var/cpanel/resellers
```

6. Check whether the `/var/cpanel/users/username` file exists.

   - If the file exists, open it in your preferred text editor. Remove the following line:


     ```bash
     DNS=
     ```

   - If the file does **not** exist, create it with the following commands:




     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>``` | ```bash<br>echo USER=username > /var/cpanel/users/username<br>chmod 0640 /var/cpanel/users/username<br>chgrp username /var/cpanel/users/username <br>``` |
7. Log in to WHM as the `root` user and navigate to WHM’s [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface ( _WHM_ » _Home_ » _Resellers_ » _Edit Reseller Nameservers and Privileges_).
8. Select _username_ from the menu and click _Submit_.
9. Select the checkboxes that correspond to the desired user permissions. Click _Save_ to save these changes.

## Change the password for a WHM reseller account without an associated domain

You **cannot** change the password for this account type using WHM’s [_Password Modification_](https://docs.cpanel.net/whm/account-functions/password-modification/) interface ( _WHM » Home » Account Functions » Password Modification_) or [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts) interface ( _WHM » Home » Account Information » List Accounts_). The only way to change the password of this account type is using the following command:

```bash
passwd username
```

## Use the WHM API 1 `removeacct` function to remove a WHM reseller account without an associated domain

To quickly and easily remove a WHM reseller account without an associated domain, you can use the WHM API 1 [`removeacct`](https://api.docs.cpanel.net/openapi/whm/operation/removeacct/) function.

1. Connect to the server via SSH as the `root` user.
2. Call the WHM API 1 `removeacct` function. For example:


```bash
whmapi1 removeacct username=user
```





Note:





In the example above, `user` represents the account username for the reseller account without an associated domain.


## Manually remove a WHM reseller account without an associated domain

To manually remove a WHM reseller account without an associated domain, perform the following steps:

Note:

In the steps below, `username` represents the account’s username.


1. Connect to the server via SSH as the `root` user.
2. Remove the `/var/cpanel/users/username` file.
3. Remove the user file `username` in the `/var/cpanel/users/` directory. To do this, run the following command:


```bash
rm /var/cpanel/users/username
```

4. Open the `/var/cpanel/resellers` file and remove the `username` user entry from the file.
5. Remove the user from the system with the following command:


```bash
userdel username
```


## Known limitations for a WHM reseller account without an associated domain

Known limitations for this type of account include, but are not limited to:

- When logged in to WHM as a reseller account without an associated domain, the following interfaces will fail to load correctly:
  - [_File and Directory Restoration_](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
  - [_Generate an SSL Certificate and Signing Request_](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- You **cannot** change the password for this account type using WHM’s [_Password Modification_](https://docs.cpanel.net/whm/account-functions/password-modification/) interface or [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts) interface. The only way to change the password of this account type is by using the [command line](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/#change-the-password-for-a-whm-reseller-account-without-an-associated-domain).
- This account type has no contact email account.
- Email notifications will **not** function on this account type.
- You **cannot** back up this account type with the `pkgacct` script. For more information about the `pkgacct` script, read our [The pkgacct Script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/) documentation.

Important:

We recommend running `/usr/local/cpanel/scripts/updateuserdomains` after creating a WHM reseller without an associated domain before using any WHM API calls.

#### Additional Documentation

* * *

- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [Reseller Center](https://docs.cpanel.net/whm/resellers/reseller-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×