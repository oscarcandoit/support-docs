---
url: "https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/"
title: "Recommended Security Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#main-content)

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
4. Recommended Security Settings


[security](https://docs.cpanel.net/tags/security/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#overview)

* * *

[Security and Virus Scans in WHM](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#security-and-virus-scans-in-whm)

* * *

[Recommended Security Settings Checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#recommended-security-settings-checklist)

* * *

[Tweak Settings checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#tweak-settings-checklist)

* * *

[Security Center checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#security-center-checklist)

* * *

[Service Configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#service-configuration-checklist)

* * *

[Account Functions checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#account-functions-checklist)

* * *

[EasyApache configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#easyapache-configuration-checklist)

* * *

[Global Configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#global-configuration-checklist)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#overview)

* * *

[Security and Virus Scans in WHM](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#security-and-virus-scans-in-whm)

* * *

[Recommended Security Settings Checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#recommended-security-settings-checklist)

* * *

[Tweak Settings checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#tweak-settings-checklist)

* * *

[Security Center checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#security-center-checklist)

* * *

[Service Configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#service-configuration-checklist)

* * *

[Account Functions checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#account-functions-checklist)

* * *

[EasyApache configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#easyapache-configuration-checklist)

* * *

[Global Configuration checklist](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/#global-configuration-checklist)

* * *

## Recommended Security Settings

Last modified: _2024 September 6_

* * *

## Overview

Use our recommended security settings to ensure the security of your server.

More:

- For more information about scripts and server modification software that can help secure your server, read our [Additional Security Software](https://docs.cpanel.net/knowledge-base/security/additional-security-software) documentation.

- For more information about basic server security, read our [Basic Security Concepts](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts) documentation.

- For more information about configuring SSH access, read our [How to Secure SSH](https://docs.cpanel.net/knowledge-base/security/how-to-secure-ssh) documentation.


## Security and Virus Scans in WHM

The following features scan your server for viruses and security weaknesses. After you identify a potential security threat, these features prompt you with how to resolve each issue.

- _Security Advisor_ — WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_) runs a security scan on your server, and it advises you about how to resolve any security issues that it finds.

- _Background Process Killer_ — WHM’s [_Background Process Killer_](https://docs.cpanel.net/whm/system-health/background-process-killer) interface ( _WHM » Home » System Health » Background Process Killer_) allows you to select processes that the system will terminate when the `upcp` script calls the system maintenance script (`/scripts/maintenance`) every night. After the system terminates a process, it will send you a notification via email.

- _Configure ClamAV Scanner_ — WHM’s [_Configure ClamAV Scanner_](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner) interface ( _WHM » Home » Plugins » Configure ClamAV Scanner_) is an antivirus software toolkit. It searches your server for malicious programs and flags any files that contain security threats.


## Recommended Security Settings Checklist

Use the following checklists as quick references for the security settings that we recommend.

### Tweak Settings checklist

We recommend the following settings for WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_):

- _Hide login password from cgi scripts_ — Enable this setting to allow you to hide the `REMOTE_PASSWORD` environment variable from scripts that the `cpsrvd` daemon’s CGI handler executes.

- _Referrer safety check_ — Enable this setting to only permit cPanel, Webmail, and WHM to execute functions when the browser-provided referrer (port and domain or IP address) **exactly** matches the destination URL.
  - This helps prevent XSRF attacks but may break integration with other systems, login applications, and billing software.
  - You **must** use cookies if you enable this setting.
- _Initial default/catch-all forwarder destination_ — Select the _Fail_ setting to automatically discard un-routable email that your server’s new accounts receive. This setting helps to protect your server from mail attacks.

- _Verify signatures of 3rdparty cPaddons_ — Enable this setting to verify GPG signatures of all third-party cPAddons. To use this setting, you **must** enable the _Signature validation on assets downloaded from cPanel & WHM mirrors_ setting.

- _Prevent “nobody” from sending mail_ — Enable this setting to block email that the `nobody` user sent to the remote address.

- _Add X-POPBeforeSMTP header for mail sent via POP-before-SMTP_ — Enable this setting to include a list of POP-before-SMTP senders in the X-POPBeforeSMTP header for outgoing email.

- _Enable SPF on domains for newly created accounts_ — Enable this setting to deny spammers the ability to send email when they forge your domain’s name as the sender (spoofing).

- _Service subdomain override_ — Disable this setting to prevent automatically-generated service domains when a user creates a cPanel, Webmail, Web Disk, or WHM subdomain.

- _Cookie IP validation_ — Select _strict_ for full IP address validation of cookies.


### Security Center checklist

We recommend the following settings for WHM’s _Security Center_ section ( _WHM » Home » Security Center_):

- _Password Strength Configuration_ — This interface allows you to specify a minimum password strength for accounts that your server hosts. Set this to a value of `50` or greater.

- _Apache mod\_userdir Tweak_ — Enable this setting so users **cannot** bypass bandwidth limits when they use the Apache `mod_userdir` redirection to access their site (for example, `http://example.com/~username`).







Note:





We recommend that you exclude the Default Virtual Host from `mod_userdir` protection. This allows all users to access their sites on your server without affecting other users’ bandwidth.

- _Compiler Access_ — Disable this setting to disable compiler access for unspecified users. This will help prevent attacks on your server.

- _Manage Wheel Group Users_ — Remove all users except for `root` and your main account. This interface allows you to set a list of users who can use the `su` command in order to become the `root` user. This interface **only** exists on servers that run the CentOS, AlmaLinux OS or RockyLinux™ operating systems.

- _Manage Sudo Group Users_ — Remove all users except for `root` and your main account. This interface allows you to set a list of users who can use the `su` command in order to become the `root` user. This interface **only** exists on servers that run the Ubuntu® operating system.

- _Shell Fork Bomb Protection_ — Enable this setting to limit the amount of server resources that users with command line access may use.







Note:





If you enable this setting, it may cause resource shortage problems because this setting heavily limits various resources.

- _cPHulk Brute Force Protection_ — Set this value to _On_. This interface allows you to configure Brute Force Protection on your server.







Note:





If you enable this setting, we **strongly** recommend that you add trusted IP addresses to the _White/Black List Management_ tab so that you do not lock yourself out of your server.


### Service Configuration checklist

We recommend the following setting for WHM’s _Service Configuration_ section ( _WHM » Home » Service Configuration_):

- _FTP Server Configuration_ — Disable Anonymous FTP. This interface allows you to configure your FTP server.

### Account Functions checklist

We recommend the following setting for WHM’s _Account Functions_ section ( _WHM » Home » Account Functions_):

- _Manage Shell Access_ — Disable shell access for all other users. This interface allows you to select which users will have shell access on your server and whether that shell access is set to _Normal_ or _Jailed_.

### EasyApache configuration checklist

We recommend the following setting:

- `open_basedir` — A setting that uses PHP to deny users the ability to open files that are outside of their home directories. You can modify this setting in the _Editor Mode_ section of WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor) interface ( _WHM » Home » Software » MultiPHP INI Editor_).

When you configure EasyApache, we strongly recommend that you include the following modules:

- `suphp` — This module causes PHP scripts to run as the owner of the script instead of as the `nobody` user.

- `mod_security` — This module is an open-source web application firewall. For more information, read our [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity) documentation.


Important:

- We **strongly** recommend that you avoid any modules that we mark as _End-Of-Life_ or _Deprecated_.

- We **strongly** recommend that you ensure that your software is up-to-date with its most recent stable versions.


For more information, read our [PCI Compliance and Software Versions](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions) documentation.

### Global Configuration checklist

This checklist is for the _Global Configuration_ section of WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration » Global Configuration_).

- _Server tokens_ — Set this setting to _Product Only_ to receive a more concise output than the other settings.

- _File ETag_ — Set this setting to _None_ to receive a more concise output than the other settings.


#### Additional Documentation

* * *

- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×