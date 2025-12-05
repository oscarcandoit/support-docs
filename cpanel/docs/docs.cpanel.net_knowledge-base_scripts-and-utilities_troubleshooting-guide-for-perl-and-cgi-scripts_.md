---
url: "https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/"
title: "Troubleshooting Guide for Perl and CGI Scripts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#main-content)

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
3. [Scripts and Utilities](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/)
4. Troubleshooting Guide for Perl and CGI Scripts


[perl](https://docs.cpanel.net/tags/perl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#overview)

* * *

[Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#solution)

* * *

[Check the script permissions](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#check-the-script-permissions)

* * *

[Check the script code for issues](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#check-the-script-code-for-issues)

* * *

[Add a content type to the script](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#add-a-content-type-to-the-script)

* * *

[Use the suEXEC module to sanity test permissions](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#use-the-suexec-module-to-sanity-test-permissions)

* * *

[Use the suexec module to check ownership](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#use-the-suexec-module-to-check-ownership)

* * *

[What if all Perl or CGI scripts that do not run as the root user return the getgrgid invalid groupid XXXXX error](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#what-if-all-perl-or-cgi-scripts-that-do-not-run-as-the-root-user-return-the-getgrgid-invalid-groupid-xxxxx-error)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#overview)

* * *

[Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#solution)

* * *

[Check the script permissions](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#check-the-script-permissions)

* * *

[Check the script code for issues](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#check-the-script-code-for-issues)

* * *

[Add a content type to the script](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#add-a-content-type-to-the-script)

* * *

[Use the suEXEC module to sanity test permissions](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#use-the-suexec-module-to-sanity-test-permissions)

* * *

[Use the suexec module to check ownership](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#use-the-suexec-module-to-check-ownership)

* * *

[What if all Perl or CGI scripts that do not run as the root user return the getgrgid invalid groupid XXXXX error](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/troubleshooting-guide-for-perl-and-cgi-scripts/#what-if-all-perl-or-cgi-scripts-that-do-not-run-as-the-root-user-return-the-getgrgid-invalid-groupid-xxxxx-error)

* * *

## Troubleshooting Guide for Perl and CGI Scripts

Last modified: _2025 February 13_

* * *

## Overview

Many users and system administrators encounter problems with CGI and Perl scripts. This troubleshooting guide lists many of the common problems and their solutions.

Important:

Because WebPros International, LLC didn’t develop your custom Perl scripts, cPanel Technical Support can’t help you with them.

Note:

The following examples troubleshoot the `example.cgi` script.

## Solution

Perform the following steps to troubleshoot your CGI and Perl scripts:

### Check the script permissions

Ensure that the appropriate users and groups can execute the script. To display the permissions for a script, run the `ls -la example.cgi` command as the `root` user.

The output will resemble the following example:

```bash
-rw-rr- 1 burst wheel 41 May 29 16:04 example.cgi
```

In this example, the script contains the following permissions:

- **Everyone** can read the script.
- **Only the owner** can write to the script.
- **`Nobody`** can execute the script.

To change the permissions of the script, run the following command:

```bash
chmod 755 example.cgi
```

This command changes the permissions of the script to the following permissions:

- **Everyone** can read and execute the script.
- **Only the owner** can write to the script.

For more information about these file system permissions, read [Wikipedia’s numeric notation article](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation).

### Check the script code for issues

If the server still returns a `500` error, a code error may exist in the script.

Add the following code to the top of your script:

```perl
#!/usr/bin/perl use CGI::Carp qw(fatalsToBrowser);
```

This change redirects errors to the browser and will not display a `500` error.

To check the code for errors, run the `perl -w ./example.cgi` command. This command runs the script with the warnings flag, which displays any errors in the code in a manner similar to the following example:

```bash
Can’t find string terminator ‘"’ anywhere before EOF at ./example.cgi line 3.
```

This message indicates that the Perl script cannot run because it contains fatal errors.

Note:

We **strongly** recommend that you search online for tutorials on Perl and how to troubleshoot specific errors.

### Add a content type to the script

If you found an error within the code, run the script from the command line again with the following command:

```bash
perl -w ./example.cgi Hello World !
```

If the script works at the command line, but it does not work in a browser, the script may not send the correct content type to the browser.

In the above example, assume that the `example.cgi` script works in the shell, but it does not display in the browser. To fix this problem, add the following line near the top of the script:

```perl
print “Content-type: text/html\n\n”;
```

When you run the updated script with the `perl -w ./example.cgi` command, you will see output similar to the following result:

```perl
Content-type: text/html Hello World !
```

### Use the suEXEC module to sanity test permissions

If the script does not work in the browser with the correct content type, the `suexec` module may cause the problem. The Apache web server often includes the `suexec` module as a security measure. It forcibly tests the permissions of CGI scripts before it runs them. The test checks the permissions of scripts and determines whether the appropriate users can access them.

After the `suexec` module completes the test, it forces the scripts to run with the permissions of the account owner.

To check for proper permissions, run the `ls -la` command, which will return output similar to the following result:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>total 6<br>drwxr-xr-x 2 burst wheel 512 May 29 16:04 .<br>drwxr-xr-x 3 burst wheel 512 May 29 16:03 ..<br>-rwxr-xr-x 1 burst wheel 78 May 29 16:24 example.cgi<br>``` |

The “`.`” directory represents the current working directory. Set this directory to the following permissions:

- **Everyone** can read and execute the script.
- **Only** the owner can write to the script.

If the script’s problems persist, examine the `suexec` log file in the `/usr/local/apache/logs/` directory. Use the `tail -f suexec_log` command to watch the log file, and then try to load the script in your browser to see the error that the script caused.

### Use the suexec module to check ownership

Confirm that the account’s user owns the file. Sometimes, when something corrupts the password or group file, you will see a number rather than a username.

When you run the `ls -la` command and a corrupt file exists, the output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>total 6<br>drwxr-xr-x 2 8840 8840 512 May 29 16:04<br>. drwxr-xr-x 3 burst wheel 512 May 29 16:03<br>.. -rwxr-xr-x 1 8840 8840 78 May 29 16:24 example.cgi<br>``` |

To fix this error, run the `chown burst.burst * *` command, where `burst` represents the name of the account’s owner. This will change the owner of the script and the directory back to the correct owner.

Even if the output returns a correct owner, it returns a different user ID. This issue appears in the `suexec_log` file.

If you have performed all of these steps and the script still does not work, submit a support ticket.

### What if all Perl or CGI scripts that do not run as the root user return the getgrgid invalid groupid XXXXX error

The following output demonstrates an example of error output from a Perl script that the Apache’s error log (`/usr/local/apache/logs/error_log`) contains:

```bash
[Tue Mar 26 09:13:16 2002] [error] [client x.x.x.x] (2)No such file or directory: getgrgid: invalid groupid 32015
[Tue Mar 26 09:13:16 2002] [error] (2)No such file or directory: exec of /home/username/public_html/utility.cgi failed
[Tue Mar 26 09:13:16 2002] [error] [client x.x.x.x] Premature end of script headers: /home/username/public_html/script.cgi
```

To fix this error, run the following command:

```bash
chmod 644 /etc/group
```

If you continue to experience an issue, check the permissions on the `passwd` file and `shadow` file.

If that fails to fix the issue, [submit a support request](https://docs.cpanel.net/knowledge-base/technical-support-services/how-to-open-a-technical-support-ticket).

#### Additional Documentation

* * *

- [Install a Perl Module](https://docs.cpanel.net/whm/software/install-a-perl-module/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [Perl Modules](https://docs.cpanel.net/cpanel/software/perl-modules/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×