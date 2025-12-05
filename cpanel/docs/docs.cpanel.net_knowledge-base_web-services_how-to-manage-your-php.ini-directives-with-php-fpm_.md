---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/"
title: "How to Manage Your php.ini Directives with PHP FPM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. How to Manage Your php.ini Directives with PHP FPM


[php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

[Introduction](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#introduction)

* * *

[Manage the php.ini directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#manage-the-phpini-directives)

* * *

[Confirm that PHP-FPM exists on all of your accounts.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#confirm-that-php-fpm-exists-on-all-of-your-accounts)

* * *

[Create a phpinfo file in the domain’s document root.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#create-a-phpinfo-file-in-the-domains-document-root)

* * *

[Review the domain’s php.ini directives.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#review-the-domains-phpini-directives)

* * *

[Modify the php.ini directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#modify-the-phpini-directives)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#table-of-contents-toggle)

[Introduction](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#introduction)

* * *

[Manage the php.ini directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#manage-the-phpini-directives)

* * *

[Confirm that PHP-FPM exists on all of your accounts.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#confirm-that-php-fpm-exists-on-all-of-your-accounts)

* * *

[Create a phpinfo file in the domain’s document root.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#create-a-phpinfo-file-in-the-domains-document-root)

* * *

[Review the domain’s php.ini directives.](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#review-the-domains-phpini-directives)

* * *

[Modify the php.ini directives](https://docs.cpanel.net/knowledge-base/web-services/how-to-manage-your-php.ini-directives-with-php-fpm/#modify-the-phpini-directives)

* * *

## How to Manage Your php.ini Directives with PHP FPM

Last modified: _2024 February 21_

* * *

## Introduction

This tutorial explains how to manage your `php.ini` file directives when you enable PHP-FPM. For more information, read our [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/) documentation.

Note:

- You can edit the `php.ini` directives at the domain and system level in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_).
- cPanel & WHM enables PHP-FPM by default.

## Manage the php.ini directives

### Confirm that PHP-FPM exists on all of your accounts.

To confirm that PHP-FPM exists, perform the following steps:

1. Log in to WHM as the `root` user.
2. Navigate to WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_).
3. In the domains table, locate the domain for which to manage the `php.ini` settings.
4. Under the _PHP-FPM_ heading, confirm that the toggle is set to _On_.

Remember:

cPanel & WHM enables PHP-FPM by default.


### Create a phpinfo file in the domain’s document root.

You can use the `phpinfo` files to view a domain’s current PHP settings.

To create this file for the domain, perform the following steps:

1. SSH in as the `root` user.





Note:




You can also use WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm) interface ( _WHM » Home » Server Configuration » Terminal_).


2. Navigate to the domain’s document root directory.
3. Create a `phpinfo.php` file.
4. With a text editor, add the following information to the file:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```perl<br><?php<br>// Show all information, defaults to INFO_ALL<br>phpinfo();<br>?><br>``` |

5. Make certain that you perform the following actions:
   - Set the file’s user and group ownership to the cPanel account’s username.
   - Set the file’s permissions to `0644` permissions.






     Note:





     To do this, run the following series of commands:











     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>``` | ```perl<br>chmod 0644 /home/username/public_html/phpinfo.php<br>chown username.username /home/username/public_html/phpinfo.php<br>``` |





     Where \`username\` represent's the user's username.
6. To access the file in your web browser, navigate to `https://example.com/phpinfo.php`, where `example.com` is the domain. If PHP-FPM exists on the domain, the browser will display _FPM/FastCGI_ as the _ServerAPI_ key’s value.

### Review the domain’s php.ini directives.

You can review `php.ini` directives in either of the following interfaces:

- Review a domain’s `php.ini` directives in cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_).
- Review the global `php.ini` directives in WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

The system sets the following `php.ini` directives by default:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>php_admin_flag[allow_url_fopen] = on<br>php_admin_flag[log_errors] = on<br>php_admin_value[disable_functions] = exec,passthru,shell_exec,system<br>php_admin_value[doc_root] = "/home/username/public_html"<br>php_admin_value[error_log] = /home/username/logs/domain_com.php.error.log<br>php_admin_value[short_open_tag] = on<br>php_value[error_reporting] = E_ALL & ~E_NOTICE<br>``` |

### Modify the php.ini directives

#### Modify the php.ini directives globally

To globally modify the `php.ini` directives for each PHP version, use WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

To only modify specific `php.ini` directives for domains with PHP-FPM:

1. Connect to the server via SSH.
2. Create the `/var/cpanel/ApachePHPFPM` directory if it does not already exist.
3. Create the `/system_pool_defaults.yaml` file.
4. With a text editor, add your desired PHP-FPM pools. PHP-FPM pools let you configure websites and applications to run under their own users. For example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>---<br>php_admin_value_memory_limit: { name: 'php_admin_value[memory_limit]', value: 120M }<br>``` |







Note:





- This example sets a memory limit of 120 MB.
- For a complete list of PHP-FPM domain pool directives, read our [Configuration Values of PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/) documentation.

5. Regenerate the PHP-FPM configuration files. To do this, run the following command:



```bash
/usr/local/cpanel/scripts/php_fpm_config --rebuild
```

6. Restart Apache and the PHP-FPM services. To do this, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>/usr/local/cpanel/scripts/restartsrv_apache_php_fpm<br>/usr/local/cpanel/scripts/restartsrv_httpd    <br>``` |


#### Modify the php.ini directives for an individual domain

To globally modify a domain’s `php.ini` directives for each PHP version, use cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel) Editor interface ( _cPanel » Home » Software » MultiPHP INI Editor_).

To only modify specific `php.ini` directives for a domain:

1. Connect to the server via SSH.
2. Create the `/var/cpanel/userdata/username/domain.com.php-fpm.yaml` file if it does **not** already exist.






Note:





In this example, the `username` respresents the cPanel user’s username.

3. With a text editor, add the directives that you want to modify to the file. For example, this file would disable the `passthru` and system directives:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>---<br>_is_present: 1<br>php_admin_value_disable_functions: { name: 'php_admin_value[disable_functions]', value: passthru,system }<br>``` |





This file would enable all directives:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>---<br>_is_present: 1<br>php_admin_value_disable_functions: { name: 'php_admin_value[disable_functions]', value: none }<br>``` |







Note:





For a complete list of PHP-FPM domain pool directives, read our [Configuration Values of PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm/) documentation.

4. Regenerate the PHP-FPM configuration files. To do this, run the following command:

```perl
/usr/local/cpanel/scripts/php_fpm_config --rebuild
```

5\. Restart Apache and the PHP-FPM services. To do this, run the following commands:


|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>/usr/local/cpanel/scripts/restartsrv_apache_php_fpm<br>/usr/local/cpanel/scripts/restartsrv_httpd<br>``` |

#### Additional Documentation

* * *

- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [MultiPHP Manager for WHM — User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)
- [The php\_fpm\_config Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×