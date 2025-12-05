---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/"
title: "Man-in-the-Middle Attacks | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. Man-in-the-Middle Attacks


[whmui](https://docs.cpanel.net/tags/whmui/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#overview)

* * *

[A man-in-the-middle attack.](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#a-man-in-the-middle-attack)

* * *

[MITM attack prevention](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#mitm-attack-prevention)

* * *

[Website owners](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#website-owners)

* * *

[Individual users](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#individual-users)

* * *

[In cPanel & WHM](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#in-cpanel--whm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#overview)

* * *

[A man-in-the-middle attack.](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#a-man-in-the-middle-attack)

* * *

[MITM attack prevention](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#mitm-attack-prevention)

* * *

[Website owners](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#website-owners)

* * *

[Individual users](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#individual-users)

* * *

[In cPanel & WHM](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/#in-cpanel--whm)

* * *

## Man-in-the-Middle Attacks

Last modified: _2025 June 9_

* * *

## Overview

During man-in-the-middle (MITM) attacks, the attacker intercepts or alters communication between two parties that should communicate with one another directly. In most cases, the two parties do not know that the attack happened. These attacks may involve physical proximity or they may use malware to intercept communications (a man-in-the-browser attack).

- Typically, these attacks target financial transactions, secured connections, and other interactions that involve a username and password.
- MITM attacks can use many different methods to intercept communications (for example, email, session, or IP hijacking, Wi-Fi® eavesdropping, Trojan attacks, DNS spoofing, or HTTP injections).
What is an MITM attack?

## A man-in-the-middle attack.

![computer in the middle intercepting connection between two other computers](https://docs.cpanel.net/img/mitm.png)

If Elizabeth and David attempt to send each other messages, but Jessica initiates an MITM attack, it could use the following process:

1. Jessica locates a security hole that will allow her to intercept Elizabeth and David’s communications.

- Elizabeth sends a message to David, which Jessica intercepts:
  - _You were right! Stargate is almost as good as Star Trek. Could you please send me your public key?_
- Jessica sends this message to David.
- David responds with his public key, which Jessica receives:
  - _Just wait until you watch Atlantis! Here’s my private key._
- Jessica replaces the public key with her own key, and then she sends the message to Elizabeth.
- Elizabeth encrypts a message with the key that she believes is David’s:
  - _Because I trust you completely, here’s the information for my new bank account. Why don’t you withdraw a few bucks?_
- Jessica intercepts the message and, because she sent Elizabeth her key instead of David’s, is able to decrypt it.
- Jessica saves Elizabeth’s bank information, and then she sends the message to David.
- Jessica goes to the bank and withdraws $20,000 of Elizabeth’s money.
- David arrives at the bank later in the day and finds that the account is overdrawn.
- Elizabeth blames David for taking all of her money, and they never speak again.

## MITM attack prevention

You can take steps to protect yourself against MITM attacks.

### Website owners

As a server or website owner, you can take precautions to prevent MITM attacks for your users:

- Ensure that your websites use secure communication protocols (for example, TLS and HTTPS). These protocols protect against spoofing attacks.
- Ensure that website applications use SSL/TLS to secure every page of your website rather than only the pages that require authentication. This prevents attackers from accessing [session cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies) on unsecured portions of the website.

### Individual users

As a user of the internet, you can take specific precautions to prevent MITM attacks:

- Use up-to-date anti-malware software to protect and maintain the security of your online devices.
- Ensure that your operating system and browser are up to date.
- **Only** use secure, trusted Wi-Fi connections. Attackers often scan available Wi-Fi hotspots to search for insecure or default passwords or exploitable router configurations.

  - Exercise **extreme** caution whenever you connect to publicly-accessible Wi-Fi routers. If you must use public Wi-Fi connections, configure your devices to use a Virtual Private Network (VPN).
  - Ensure that your home and office Wi-Fi routers do **not** use any default or common usernames or passwords and use a secure configuration.
- Use appropriate precautions for your online communications.
  - Ensure that the websites you access include the `https://` protocol in their URLs and have certificate authority-signed SSL certificates.
  - Pay attention to browser notifications about unsecured websites.
  - Immediately log out of secure websites after you use them.

### In cPanel & WHM

Some cPanel & WHM features display warnings about potential MITM attacks. For example, cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) may display warnings if the system cannot validate a remote clone URL’s public fingerprint. For more information and potential steps to resolve this issue, read our [Git Version Control](https://docs.cpanel.net/cpanel/files/git-version-control) documentation.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×