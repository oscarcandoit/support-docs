---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/"
title: "Best Practices for Script and Code Permissions | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Best Practices for Script and Code Permissions


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#overview)

* * *

[What errors could I see?](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#what-errors-could-i-see)

* * *

[Why shouldn’t I run code as other users?](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#why-shouldnt-i-run-code-as-other-users)

* * *

[What you should do instead](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#what-you-should-do-instead)

* * *

[EasyApache best practices](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#easyapache-best-practices)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#overview)

* * *

[What errors could I see?](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#what-errors-could-i-see)

* * *

[Why shouldn’t I run code as other users?](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#why-shouldnt-i-run-code-as-other-users)

* * *

[What you should do instead](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#what-you-should-do-instead)

* * *

[EasyApache best practices](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-code-and-script-permissions/#easyapache-best-practices)

* * *

## Best Practices for Script and Code Permissions

Last modified: _2025 September 23_

* * *

## Overview

Running code as a user other than the code or script’s owner can create serious security vulnerabilities.

In cPanel & WHM version 132, we updated the permissions on the `/etc/trueuserowners` file to prevent it from being world-readable. This change prevents code that runs as other users from reading this file, which may also cause error messages when some cPanel-provided CGI scripts try to access it. Modern web applications should always run as the user who owns the file.

## What errors could I see?

With the `/etc/trueuserowners` file permissions locked down, you may see some errors.

Some CGI scripts may run as the `nobody` user. This will cause incorrect contact information to display on the default CGI pages configured in WHM’s [_Web Template Editor_](https://docs.cpanel.net/whm/account-functions/web-template-editor/) interface ( _WHM » Home » Account Functions » Web Template Editor_).

You might also see the following error message in your Apache `error_log` file:

```text
[SCRIPT-NAME] /etc/trueuserowners is not readable as nobody
```

## Why shouldn’t I run code as other users?

When you run code as other users, the following can happen:

- You can accidentally escalate privileges. If the `root` user runs a script that the `example` user owns, then the `example` user will gain access to `root` privileges.
- Files that the script accesses must be world-readable because the `example` user can’t read user-owned files unless you grant it explicit permission.

While this practice used to be common, it is no longer recommended.

## What you should do instead

We strongly recommend that you **only** run code as the user that owns the code. We recommend that you set any files that you do **not** want to be world-readable to use either `640` or `750` (or even more restrictive) permissions. This will prevent privilege escalation and lock permissions to the proper user.

For more information about file permissions, read Wikipedia’s [file-system permissions](https://en.wikipedia.org/wiki/File-system_permissions) article.

If you receive error messages about this issue or your CGI scripts return the wrong information, change the permissions on the files with the [`chmod` command](http://en.wikipedia.org/wiki/Chmod).

You can also read our [Troubleshooting Guide for Perl and CGI Scripts](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#check-the-script-permissions) documentation.

### EasyApache best practices

EasyApache 4 runs Podman services and Passenger applications as the user that owns the file.

In EasyApache 4, some handlers will **not** run scripts as the user or will depend on which handler you use with them.

CGI scripts will run as the user if you use the following handlers: `suexec`, `ruid2`, or `ITK`.

PHP scripts all run as the user, but have the following limitations:

- `suexec` requires your PHP version to use either the `cgi` or `lsapi` PHP handler. If you do **not** have one of these handlers installed, it runs as the `nobody` user.
- `suphp` requires that your PHP versions uses `suphp` and requires that you also install`suexec`. If you do not have one of these handlers installed, it runs as the `nobody` user.
- ITK requires that your PHP version uses the PHP-FPM handler. If you do **not** have this handler installed, it runs as the `nobody` user.
- PHP-FPM and Ruid2 always run PHP scripts as the user.

For more information about handlers, read our [PHP Handlers](https://docs.cpanel.net/ea4/php/php-handlers/) documentation.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×