---
url: "https://docs.cpanel.net/knowledge-base/security/security-best-practices/"
title: "Security Best Practices | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#main-content)

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
4. Security Best Practices


[security](https://docs.cpanel.net/tags/security/) [authentication](https://docs.cpanel.net/tags/authentication/) [passwords](https://docs.cpanel.net/tags/passwords/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#overview)

* * *

[Root vs. site compromises](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#root-vs-site-compromises)

* * *

[How does a root compromise differ from a site compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#how-does-a-root-compromise-differ-from-a-site-compromise)

* * *

[Is a symlink hack that hacks multiple websites the same as a root compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#is-a-symlink-hack-that-hacks-multiple-websites-the-same-as-a-root-compromise)

* * *

[I’ve seen symlinks that can grab the /etc/passwd file. Isn’t that a root compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#ive-seen-symlinks-that-can-grab-the-etcpasswd-file-isnt-that-a-root-compromise)

* * *

[Hackers compromised my server. Now what should I do?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-compromised-my-server-now-what-should-i-do)

* * *

[What should I look for if I believe my websites have been hacked?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#what-should-i-look-for-if-i-believe-my-websites-have-been-hacked)

* * *

[Hackers want to use the website to send out spam or phishing emails](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-use-the-website-to-send-out-spam-or-phishing-emails)

* * *

[Hackers want to gain access to your data, mailing lists, credit card information, and other unique information](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-gain-access-to-your-data-mailing-lists-credit-card-information-and-other-unique-information)

* * *

[Hackers want to access your website to make it download malicious software](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-access-your-website-to-make-it-download-malicious-software)

* * *

[I don’t have backups. What should I do?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#i-dont-have-backups-what-should-i-do)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#overview)

* * *

[Root vs. site compromises](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#root-vs-site-compromises)

* * *

[How does a root compromise differ from a site compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#how-does-a-root-compromise-differ-from-a-site-compromise)

* * *

[Is a symlink hack that hacks multiple websites the same as a root compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#is-a-symlink-hack-that-hacks-multiple-websites-the-same-as-a-root-compromise)

* * *

[I’ve seen symlinks that can grab the /etc/passwd file. Isn’t that a root compromise?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#ive-seen-symlinks-that-can-grab-the-etcpasswd-file-isnt-that-a-root-compromise)

* * *

[Hackers compromised my server. Now what should I do?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-compromised-my-server-now-what-should-i-do)

* * *

[What should I look for if I believe my websites have been hacked?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#what-should-i-look-for-if-i-believe-my-websites-have-been-hacked)

* * *

[Hackers want to use the website to send out spam or phishing emails](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-use-the-website-to-send-out-spam-or-phishing-emails)

* * *

[Hackers want to gain access to your data, mailing lists, credit card information, and other unique information](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-gain-access-to-your-data-mailing-lists-credit-card-information-and-other-unique-information)

* * *

[Hackers want to access your website to make it download malicious software](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#hackers-want-to-access-your-website-to-make-it-download-malicious-software)

* * *

[I don’t have backups. What should I do?](https://docs.cpanel.net/knowledge-base/security/security-best-practices/#i-dont-have-backups-what-should-i-do)

* * *

## Security Best Practices

Last modified: _2024 March 27_

* * *

## Overview

This document describes some security best practices you can use to protect your cPanel & WHM users, files, and websites.

Server security is vital to keep your server, websites, and other data secured. Almost every day, entities who want to steal or use your information create new methods of attacks and hacks. For this reason, it is important to secure and update your servers constantly.

The following cPanel documentation includes information on how to secure your server:

- [Tips to Make Your Server More Secure](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/)
- [Recommended Security Settings](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/)
- [Basic Security Concepts](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/)
- [Additional Security Software](https://docs.cpanel.net/knowledge-base/security/additional-security-software/)
- [How to Prevent Email Abuse](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/)

You can’t protect your server from **all** security issues. However, preparing your server for attacks and knowing what to do in case hackers compromise your server is an important prevention measure.

## Root vs. site compromises

### How does a root compromise differ from a site compromise?

A site compromise occurs on a specific website and malicious attackers can only steal information from that website, not from any others. A `root` compromise exposes the entire server to theft, such as SSH keys and passwords. It can also cause enough damage to the server so that it can no longer boot.

### Is a symlink hack that hacks multiple websites the same as a root compromise?

Most experts do not consider symlink hacks themselves to be `root` compromises, even though they look like they have hacked multiple accounts. The server itself is usually not in any danger.

For more information on how to prevent symlink hacks, read our [Symlink Race Condition Protection](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/) documentation.

### I’ve seen symlinks that can grab the /etc/passwd file. Isn’t that a root compromise?

No. The `/etc/passwd` file must be readable, but this does not represent a `root` compromise. The system stores password hashes in the `/etc/shadow` file, which you cannot simply view with a symlink hack. A further definition of a `root`-level compromise is one where an unauthorized user gains access to it. You may not lose much from a particular attack, but any unauthorized access has the potential for further breaches.

A `root`-level compromise exposes the entire server, and you should consider everything a loss. You can no longer trust any data, any configuration information, and probably any connectivity information and passwords. An attacker will likely want to continue to access the server, and they will try to configure the system to perform normally.

## Hackers compromised my server. Now what should I do?

After hackers compromise your website or cPanel account, start the recovery process. Use backups to restore your website or account back to a point before the compromise. This is a fast and easy method to return your properties back to normal.

Next, figure out how the attack or hack happened. Start with the point of entry.

The most common way that hackers attack websites is through insecure plugins, themes, or components that various content management system (CMS) software use. WordPress®, Joomla!®, and Drupal™ are some of the most commonly-used CMS software. CMS software is very secure and these companies issue security patches quickly when they find a compromise. However, the companies that create underlying plugins and themes for a CMS may not check for security implications or update them frequently.

The second most common attack method is via a secretly-installed [trojan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#trojan-horse-trojan) on a user’s main computer. Trojans steal passwords without the user’s knowledge. When that user logs in to their cPanel page or uploads changes via FTP, the trojan sends their password to hackers. Then the hackers use it to gain access to that system.

## What should I look for if I believe my websites have been hacked?

There are three main reasons hackers hack websites:

### Hackers want to use the website to send out spam or phishing emails

Check your email filters and forwarders to see if anything was added that looks suspicious or you did not add yourself. Some hacks remove all email passwords and add a single user for sending out mass email.

### Hackers want to gain access to your data, mailing lists, credit card information, and other unique information

Review the following to see if the hackers added anything malicious:

- Your cron jobs list
- Email users list
- Passwords

### Hackers want to access your website to make it download malicious software

Hackers will download malicious software onto your end users’ machines. Or they will want to install malicious software for use on your website. And hackers can do this without your users knowing that they compromised their systems. The malicious software can include additional backdoors that will allow hackers to regain access to the server. With a backdoor in place, hackers have the ability to run arbitrary code as the website’s user. This means that they can modify or delete any files owned by that user.

## I don’t have backups. What should I do?

If you don’t have backups, you’ll need to manually clean the website. This requires security experience and may be best handled by a security professional who can help you. The following websites provide more information:

- [Website Malware Removal from Sucuri.net](https://sucuri.net/website-malware-removal/)
- [Hackrepair](https://hackrepair.com/)
- [Sitelock Scanner](https://www.sitelock.com/blog/sitelock-reviews-website-malware/)

#### Additional Documentation

* * *

- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×