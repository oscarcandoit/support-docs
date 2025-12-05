---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/"
title: "How to Keep Your Email Out of the Spam Folder | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Keep Your Email Out of the Spam Folder


[email](https://docs.cpanel.net/tags/email/) [spam](https://docs.cpanel.net/tags/spam/) [dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#overview)

* * *

[Use email authentication](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#use-email-authentication)

* * *

[DKIM and SPF](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#dkim-and-spf)

* * *

[DMARC](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#dmarc)

* * *

[Configure the server PTR record](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#configure-the-server-ptr-record)

* * *

[Spam and other networks](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#spam-and-other-networks)

* * *

[Bulk email best practices](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#bulk-email-best-practices)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#overview)

* * *

[Use email authentication](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#use-email-authentication)

* * *

[DKIM and SPF](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#dkim-and-spf)

* * *

[DMARC](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#dmarc)

* * *

[Configure the server PTR record](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#configure-the-server-ptr-record)

* * *

[Spam and other networks](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#spam-and-other-networks)

* * *

[Bulk email best practices](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/#bulk-email-best-practices)

* * *

## How to Keep Your Email Out of the Spam Folder

Last modified: _2024 September 6_

* * *

## Overview

This article contains helpful information to make sure that other servers or network do not mark your email as spam. You should **not** send spam from your server. For more information on how to make sure that your server does not send spam, read our [How to Prevent Email Abuse](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/) documentation.

## Use email authentication

### DKIM and SPF

DKIM (DomainKeys Identified Mail) and SPF (Sender Policy Framework) authentication can help verify that email comes from a trusted sender. DKIM is a validation system that detects email spoofing. It allows your mail server to check whether a domain’s administrators authorized email from a domain. The email includes a digital signature that your mail server uses to verify the sender’s public key in their DNS record.

SPF uses DNS records to prevent email spoofing. If an email message uses falsified sender addresses, SPF uses the DNS record for the sender’s domain to detect the modification in the email’s header.

Note:

On servers that run the CentOS 7 or RHEL 7 operating systems, you may see a `named` warning about the absence of SPF resource records on DNS.

- This warning is not relevant because [RFC 7208](https://tools.ietf.org/html/rfc7208) deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
- Red Hat 7.1 and CentOS 7.1 both contain `bind-9.9.4-23.el7`, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the [Red Hat Bugzilla case about SPF record errors](https://bugzilla.redhat.com/show_bug.cgi?id=1215164).

For more information, read our [Email Deliverability](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/) documentation.

### DMARC

DMARC (Domain-based Message Authentication, Reporting & Conformance) is a technical specification to help reduce the potential for email-based abuse. A DMARC policy uses DNS to confirm that an email message uses a valid DKIM and SPF record and that the `From:` header matches those records.

Many large email networks require that you use a DMARC policy to help protect their users from spam email. To prevent email rejections or spam flags within these networks, your server **must** use a DMARC policy.

Note:

In cPanel & WHM version 124 and later, you can apply a default DMARC policy to all domains on the server in WHM’s [_Email DNS Record Manager_](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/) interface ( _WHM » Home » DNS Functions » Email DNS Record Manager_).

## Configure the server PTR record

A PTR record resolves an IP address to a domain name. A PTR record resembles a reversed A record. Configure the PTR record of the primary IP address of your server to use the hostname of your server. If you have configured Exim to use a different IP address, ensure that the PTR record of that IP address uses the hostname of your server.

A record resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>server:~ root$ dig mx1.cpanel.net +short<br>208.74.121.68<br>``` |

PTR records resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>server:~ root$ dig -x 208.74.121.68 +short<br>mx1.cpanel.net.<br>``` |

## Spam and other networks

If email networks such as [Gmail™](https://support.google.com/mail/troubleshooter/2696779), [Yahoo](https://postmaster.yahooinc.com/best-practices), or [Outlook](https://sendersupport.olc.protection.outlook.com/pm/troubleshooting.aspx) mark your server’s email as spam, you **must** identify the reason and resolve the problem. If you have recently resolved an issue with spam on your server or you received a new IP address which previously sent spam, you **must** notify the remote network. Make **certain** that you review the bulk sender policy of large email networks.

Note:

- In most cases, Google automates their spam flagging system and requires you to wait for their system to restore your domain’s reputation. For more information, read Google’s [Troubleshooting for bulk email senders](https://support.google.com/mail/troubleshooter/2696779) and [Bulk Senders Guidelines](https://support.google.com/mail/answer/81126) documentation.
- For more information, read our [Blacklisting & IP Address Reputation](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/) documentation.
- Google and other large email providers may require  headers in messages that your server forwards or sends via mailing lists to Gmail addresses. To learn how to enable ARC headers, read our [_Exim Configuration Manager Basic Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#_experimental-enable-arc-signing-for-outgoing-mail_) documentation.

## Bulk email best practices

We recommend that you adhere to the following best practices:

- Use the same IP address to send all bulk email.
- Use the same email address in the From: header of your emails.
- Ensure that your email complies with [RFC 5322](https://tools.ietf.org/html/rfc5322).
- If your email uses HTML, ensure that it complies with [HTML standards](https://html.spec.whatwg.org/multipage/).
- Ensure that the contents of your email relate to the subject of your email.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Deliverability in cPanel](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×