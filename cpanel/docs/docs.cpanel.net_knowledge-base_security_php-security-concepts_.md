---
url: "https://docs.cpanel.net/knowledge-base/security/php-security-concepts/"
title: "PHP Security Concepts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. PHP Security Concepts


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#overview)

* * *

[Restrict file inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#restrict-file-inclusion-attacks)

* * *

[Local File Inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#local-file-inclusion-attacks)

* * *

[Remote File Inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#remote-file-inclusion-attacks)

* * *

[Disabling functions](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#disabling-functions)

* * *

[Prevent information disclosure](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#prevent-information-disclosure)

* * *

[Restrict file uploads](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#restrict-file-uploads)

* * *

[Protect sessions](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#protect-sessions)

* * *

[Disable register globals](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#disable-register-globals)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#overview)

* * *

[Restrict file inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#restrict-file-inclusion-attacks)

* * *

[Local File Inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#local-file-inclusion-attacks)

* * *

[Remote File Inclusion attacks](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#remote-file-inclusion-attacks)

* * *

[Disabling functions](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#disabling-functions)

* * *

[Prevent information disclosure](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#prevent-information-disclosure)

* * *

[Restrict file uploads](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#restrict-file-uploads)

* * *

[Protect sessions](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#protect-sessions)

* * *

[Disable register globals](https://docs.cpanel.net/knowledge-base/security/php-security-concepts/#disable-register-globals)

* * *

## PHP Security Concepts

Last modified: _2024 February 21_

* * *

## Overview

Web applications written in PHP may contain security vulnerabilities that malicious users can exploit to gain sensitive information about your system or your users. These vulnerabilities can include:

- Unverified executable files.
- Development server environment functions that run in a production server environment.
- Error messages that include sensitive system information.

This document lists several methods that you can use to harden your system’s PHP configuration.

## Restrict file inclusion attacks

File inclusion attacks often occur when an attacker exploits a file-inclusion vulnerability in a web application that dynamically includes files and scripts. A user may create applications that do not properly validate `include` and `require` statements, or use filenames as parameters. An attacker may pass a malicious file to the application that contains the same name as a file that already exists on the server. The attacker can use this file to pull sensitive information about your system.

- File inclusion attacks include Local File Inclusion (LFI) attacks and Remote File Inclusion (RFI) attacks.

- For more information about file inclusion attacks, read [Wikipedia’s File inclusion vulnerability article](https://wikipedia.org/wiki/File_inclusion_vulnerability).


### Local File Inclusion attacks

LFI attacks occur when an attacker pulls local files into PHP scripts in order to view sensitive information on or about your system. For example, an attacker may use a local file inclusion vulnerability in a PHP script to view the `/etc/passwd` file. This would allow an attacker to discover basic information about your web server’s accounts.

To limit the impact of local file inclusion vulnerabilities in PHP scripts, change this directive in the _Editor Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Security Center » MultiPHP INI Editor_). This directive limits an attacker’s access to a single directory via local includes and makes local file inclusion attacks more difficult.

### Remote File Inclusion attacks

RFI attacks occur when an attacker pulls files from a remote location on your server. For example, an attacker can write a PHP script and host it on a server, and then use a remote inclusion method to take advantage of inclusion vulnerabilities on your server. An insecure PHP configuration allows attackers to execute the malicious data from their servers, even without read or write permissions on your server.

To prevent remote file inclusion attacks, set the _allow\_url\_fopen_ and _allow\_url\_include_ directives in the _Basic Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

## Disabling functions

Some PHP functions are **not** safe for a production environment. If your PHP developers do not require these functions, we **strongly** recommend that you disable them so that an attacker cannot use them. Generally, when you disable these functions, you can stop an attacker who manages to load a malicious PHP script on to your system.

To disable a list of functions, enter these functions in the _Editor Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

Important:

- Many functions in PHP perform the same tasks. Ask your developers to standardize on one or two of these functions for a task so that you can disable the rest.

- You can **only** disable internal PHP functions.

- For an example of functions to disable, read [nixCraft’s post on disable\_functions](http://www.cyberciti.biz/faq/linux-unix-apache-lighttpd-phpini-disable-functions/).


## Prevent information disclosure

Error messages that disclose important system information can help attackers plan an attack strategy. This information includes your directory structure, database names, and usernames. If PHP does not print errors to the web application’s user interface, you can inhibit attackers’ ability to gain information that they could use to compromise your system.

To limit the display of error messages, set the _display\_errors_ directive to _Off_ in the _Basic Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_). When you disable the _display\_errors_ directive, your developers can still retrieve helpful information from debug codes in the appropriate PHP logs.

## Restrict file uploads

Attackers often upload malicious programs to vulnerable systems in order to compromise them. If you restrict all file uploads, this can ensure that attackers **cannot** exploit your PHP configuration to inject their own PHP scripts.

To restrict file uploads, set the _file\_uploads_ directive in the _Basic Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

- Some developers prefer to include the ability to upload files to your server via PHP. If you **must** allow file uploads, set the _upload\_tmp\_dir_ directive to _On_ in order to change the default temporary directory for file uploads.

- Many administrators also set the _upload\_max\_filesize_ directive to limit the maximum file size that users can upload. This parameter does not improve the security of your PHP configuration. Administrators set this parameter in order to help manage the server’s load from PHP scripts.


## Protect sessions

Some attackers attempt to hijack sessions. This occurs when an attacker steals a user’s web application session and performs actions as that user. PHP uses long, randomly-generated session identifiers for its URLs. While this makes session URLs exceedingly difficult to guess, the filesystem stores this value. Attackers can inject JavaScript into pages to steal cookies that contain these session IDs, which would allow them to hijack sessions.

To protect these session IDs from session hijackers, you can set the _session.cookie\_httponly_ directive in the _Editor Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

- This directive makes certain that JavaScript **cannot** access a PHP application’s session cookies. If your developers require that JavaScript possesses access to session cookies, do **not** enable this option.
- You may also wish to allow PHP to check HTTP referrer values. This ensures that sensitive session information passes internally during a user’s session, so that users cannot accidentally publish sensitive session information when they share URLs.

## Disable register globals

Important:

This option no longer exists for PHP version 5.4 and above.

Global variables allow a PHP script to receive and process variables without a specified source. This allows attackers to overwrite configuration variables in order to gain access to areas of your system that the system ordinarily restricts.

To remove this vulnerability, set the _register\_globals_ directive to _Off_ in the _Basic Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×