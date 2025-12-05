---
url: "https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/"
title: "OWASP® ModSecurity CRS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#main-content)

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
4. OWASP® ModSecurity CRS


[modsecurity](https://docs.cpanel.net/tags/modsecurity/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#overview)

* * *

[About OWASP](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#about-owasp)

* * *

[Why should I use the OWASP ModSecurity rule set?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#why-should-i-use-the-owasp-modsecurity-rule-set)

* * *

[What are the risks?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#what-are-the-risks)

* * *

[How do I use the OWASP ModSecurity rule set?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#how-do-i-use-the-owasp-modsecurity-rule-set)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#configuration-files)

* * *

[Rules installed via package](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#rules-installed-via-package)

* * *

[Rules installed via YAML file](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#rules-installed-via-yaml-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#overview)

* * *

[About OWASP](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#about-owasp)

* * *

[Why should I use the OWASP ModSecurity rule set?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#why-should-i-use-the-owasp-modsecurity-rule-set)

* * *

[What are the risks?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#what-are-the-risks)

* * *

[How do I use the OWASP ModSecurity rule set?](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#how-do-i-use-the-owasp-modsecurity-rule-set)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#configuration-files)

* * *

[Rules installed via package](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#rules-installed-via-package)

* * *

[Rules installed via YAML file](https://docs.cpanel.net/knowledge-base/security/owasp-modsecurity-crs/#rules-installed-via-yaml-file)

* * *

## OWASP® ModSecurity CRS

Last modified: _2024 July 3_

* * *

## Overview

The OWASP (Open Web Application Security Project) ModSecurity CRS (Core Rule Set) is a set of rules that Apache®’s ModSecurity® module can use to help protect your server. While these rules do not make your server impervious to attacks, they greatly increase the amount of protection for your web applications.

## About OWASP

### Why should I use the OWASP ModSecurity rule set?

- **Protection from insecure web application design** — ModSecurity rule sets can provide a layer of protection for web applications such as WordPress®, phpBB, or other types of web applications. It can potentially protect against vulnerabilities in out-of-date web applications that protect against vulnerabilities in unpatched, out-of-date applications. If the developer of an application makes a security mistake, ModSecurity may block a security attack before it can access the vulnerable application.
- **Protection against operating system level attack** — ModSecurity rule sets can protect against attacks that exploit the operating system of your server. For example, in 2014, there was a security flaw in the Bash shell program that Linux servers use. Security experts created ModSecurity rules to disallow the use of the exploit thought Apache. Server administrators used these ModSecurity rules and added additional security to their system until the release of a security patch for Bash shell.
- **Protect against generalized malicious traffic** — Some of the security threats that server administrators face may not directly attack a program or application on your server. DoS (Denial of Service) attacks, for example, are common attacks. You can reduce the impact of such malicious traffic through the use of ModSecurity rules.

### What are the risks?

As with any mechanism that blocks web traffic, OWASP rules could block legitimate traffic (false positives). While both OWASP and WebPros International, LLC aim to curate the OWASP rule set to reduce the potential for false positives, the rule set may block legitimate traffic. Review WHM’s [_ModSecurity® Tools_](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) interface ( _WHM » Home » Security Center » ModSecurity® Tools_) routinely to evaluate the traffic that the rule set blocks and whether these blocks affect legitimate users.

### How do I use the OWASP ModSecurity rule set?

Select the ModSecurity (`mod_security2`) Apache module when you use WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). After you install the ModSecurity Apache module, you can install the OWASP rule set.

Install the `ea-modsec2-rules-owasp-crs` package to obtain the most recently updated rules with one of the following methods:

- In the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).
- On the command line with the following command:







| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-modsec2-rules-owasp-crs` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-modsec2-rules-owasp-crs` |
| Ubuntu® | `apt install --purge ea-modsec2-rules-owasp-crs` |


When you enable the configuration files, the rules become active unless you disabled rule processing. To review the logged notifications and blocked traffic from these rules, use the [_ModSecurity® Tools_](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) interface ( _WHM » Home » Security Center » ModSecurity® Tools_).

## Configuration files

The OWASP ModSecurity CRS uses configuration files that contain the rules that help protect your server. These configuration files group similar rules together to make them easier to manage.

### Rules installed via package

We provide the updated [OWASP ModSecurity CRS](https://coreruleset.org/) rules via a package.

The configuration files for the OWASP package ruleset are in the `/etc/apache2/conf.d/modsec_vendor_configs/OWASP3` directory.

When you add these rules, the installation will **enable** any new rules. It will preserve the status of any rule that already exists. When new rules are released, the system will add them. This ensures that your rule set is always up to date.

If you wish to use these updated rules, install the `ea-modsec2-rules-owasp-crs` package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).

You can also install them on the command line with the following command:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-modsec2-rules-owasp-crs` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-modsec2-rules-owasp-crs` |
| Ubuntu® | `apt install --purge ea-modsec2-rules-owasp-crs` |

Important:

You can **only** manage these rules in WHM’s [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface ( _WHM » Home » Security Center » ModSecurity® Vendors_).

### Rules installed via YAML file

#### REQUEST-901-INITIALIZATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-901-INITIALIZATION.conf`

This ruleset contains configuration information for subsequent rules in the ModSecurity CRS ruleset.

Warning:

If you disable this ruleset, other rulesets may **not** perform correctly.


#### REQUEST-905-COMMON-EXCEPTIONS

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-905-COMMON-EXCEPTIONS.conf`

Other rules may incorrectly flag some traffic as bad (false positive). The rules in this configuration file detects those false positives and allows the traffic to pass through.

Warning:

If you disable this configuration file, it could cause excessive false positive rule hits.


#### REQUEST-910-IP-REPUTATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-910-IP-REPUTATION.conf`

The rule in this configuration file denies traffic from IP addresses that are involved in malicious activity or are in a region known for high rates of malicious activity.

Note:

- This type of check is an IP Reputation check.
- These checks are useful for some sites but may deny legitimate traffic from users in the affected regions.

#### REQUEST-912-DOS-PROTECTION

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-912-DOS-PROTECTION.conf`

The rules in this configuration file attempt to reduce the impact of DoS (Denial of Service) attacks on your server.

Note:

A DoS attack can take various forms, but often involves large bursts of traffic that deplete the server resources and cause legitimate requests to fail.


#### REQUEST-913-SCANNER-DETECTION

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-913-SCANNER-DETECTION.conf`

The rules in this configuration file use the request headers to block requests from known security scanner software.

Note:

The value of this protection is limited because these headers are easy to change. However, the rules may reduce wasteful HTTP requests from automated scanners.


#### REQUEST-920-PROTOCOL-ENFORCEMENT

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-920-PROTOCOL-ENFORCEMENT.conf`

The rules in this configuration file enable enforcement of certain HTTP restrictions on invalid or unusable data sent from clients. Block these request to help prevent the exploitation of a web application that did not expect the request.

#### REQUEST-921-PROTOCOL-ATTACK

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-921-PROTOCOL-ATTACK.conf`

The rules in this configuration file enable specific checks for requests to mitigate HTTP Request Smuggling and Response Splitting attacks. These attacks can cause HTTP servers and proxies to mistakenly accept or return data that hide from other checks or rules due to a false Content-Length.

#### REQUEST-930-APPLICATION-ATTACK-LFI

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-930-APPLICATION-ATTACK-LFI.conf`

The rules in this configuration file enable protection against Local File Inclusion (LFI) attacks. During a LFI attack, a malicious client causes an application to serve or otherwise process a file from the local server’s file system. These local server files would not normally be publicly accessible.

#### REQUEST-931-APPLICATION-ATTACK-RFI

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-931-APPLICATION-ATTACK-RFI.conf`

The rules in this configuration file enable protection against RFI (Remote File Inclusion) attacks. During a RFI attack, a malicious client exploits the server’s software to embed a client-specified file into the content of the page.

Note:

This kind of attack executes malicious code either on the server or client side, based on the nature of the vulnerability.


#### REQUEST-933-APPLICATION-ATTACK-PHP

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-933-APPLICATION-ATTACK-PHP.conf`

The rules in this configuration file enable protection against attacks against PHP. These attacks include PHP object injection, variable function calls, PHP I/O streams, PHP script uploads, and others.

#### REQUEST-941-APPLICATION-ATTACK-XSS

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-941-APPLICATION-ATTACK-XSS.conf`

The rules in this configuration file enable protection against XSS (cross-site scripting) attacks. During an XSS attack, the attacker injects scripts into web pages that other users view. These may do damage to either the server or to the viewer of the web page, or they allow a user to acquire and exploit other users’ accounts or web sessions.

#### REQUEST-942-APPLICATION-ATTACK-SQLI

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-942-APPLICATION-ATTACK-SQLI.conf`

The rules in this configuration file enable protection against SQL injection attacks. During a SQL injection attack, a client is able to pass a specially crafted HTTP request to the server. This HTTP request causes the server to mistakenly execute a malicious query.

#### REQUEST-943-APPLICATION-ATTACK-SESSION-FIXATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/RREQUEST-943-APPLICATION-ATTACK-SESSION-FIXATION.conf`

The rules in this configuration file enable protection against Session Fixation attacks. During a Session Fixation attack, attackers to force a user’s session ID to be predictable. With the session ID, the attacker can take over a session that belongs to another user.

#### REQUEST-949-BLOCKING-EVALUATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/REQUEST-949-BLOCKING-EVALUATION.conf`

The rules in this configuration file blocks traffic that various other configuration files request.

Warning:

Other rules in the rule set depend on this configuration file to block incoming attacks. If you disable this configuration file, other rules will detect, but not block, incoming attacks.


#### RESPONSE-950-DATA-LEAKAGES

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-950-DATA-LEAKAGES.conf`

The rules in this configuration file enable protection against certain types of data leakages from the server to the client.

Note:

For example, these rules prevent directory listings.


#### RESPONSE-951-DATA-LEAKAGES-SQL

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-951-DATA-LEAKAGES-SQL.conf`

The rules in this configuration file enable protection against the leakage of inappropriate types of internal database information from the server to clients.

Note:

For example, if a SQL syntax error occurs, these rules will hide it. This protection reduces the chance that users will see the internal SQL errors of the application.


#### RESPONSE-952-DATA-LEAKAGES-JAVA

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-952-DATA-LEAKAGES-JAVA.conf`

The rule in this configuration file attempts to prevent that exposure of details about server-side Java applications to the client.

Note:

For example, if a Java application returns an exception or raw code to a web page, these rules help prevent the display of the errors or raw code.


#### RESPONSE-953-DATA-LEAKAGES-PHP

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-953-DATA-LEAKAGES-PHP.conf`

The rules in this configuration file enable protection against PHP-related data and source code leakage from the server to the client.

Note:

For example, a PHP application could produce an error that reveals internal implementation details about the application. This protection reduces the chance that users will see these details.


#### RESPONSE-954-DATA-LEAKAGES-IIS

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-954-DATA-LEAKAGES-IIS.conf`

The rules in this configuration file enable protection against data leakages that relate to the Microsoft IIS® web server.

Note:

This rule set is only needed if your Apache server processes proxy requests to an IIS server or IIS-hosted application.


#### RESPONSE-959-BLOCKING-EVALUATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-959-BLOCKING-EVALUATION.conf`

The rules in this configuration file enable a rule that blocks flagged anomalous traffic. This classification can occur as a result of hits that other configuration files produce.

Warning:

Other rules in the rule set depend on this configuration file to block incoming attacks. If you disable this configuration file, other rules will detect, but not block, incoming attacks.


#### RESPONSE-980-CORRELATION

Configuration file path: `modsec_vendor_configs/OWASP/rules/RESPONSE-980-CORRELATION.conf`

The rules in this configuration file facilitate the gathering of data about successful and unsuccessful attacks on the server.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×