---
url: "https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/"
title: "Blacklisting & IP Address Reputation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#main-content)

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
4. Blacklisting & IP Address Reputation


[email](https://docs.cpanel.net/tags/email/) [spam](https://docs.cpanel.net/tags/spam/) [dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#overview)

* * *

[IP address reputation](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#ip-address-reputation)

* * *

[Blacklisting](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#blacklisting)

* * *

[Why does my email go to spam or junk mail on large providers?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#why-does-my-email-go-to-spam-or-junk-mail-on-large-providers)

* * *

[How do I know if mail from my server is blocked?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-know-if-mail-from-my-server-is-blocked)

* * *

[How do I check my IP address reputation?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-check-my-ip-address-reputation)

* * *

[How do I fix my IP address reputation with an email or hosting provider?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-fix-my-ip-address-reputation-with-an-email-or-hosting-provider)

* * *

[Gmail](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#gmail)

* * *

[Microsoft® (Outlook®, Hotmail, Yahoo)](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#microsoft-outlook-hotmail-yahoo)

* * *

[Office365®](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#office365)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#overview)

* * *

[IP address reputation](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#ip-address-reputation)

* * *

[Blacklisting](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#blacklisting)

* * *

[Why does my email go to spam or junk mail on large providers?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#why-does-my-email-go-to-spam-or-junk-mail-on-large-providers)

* * *

[How do I know if mail from my server is blocked?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-know-if-mail-from-my-server-is-blocked)

* * *

[How do I check my IP address reputation?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-check-my-ip-address-reputation)

* * *

[How do I fix my IP address reputation with an email or hosting provider?](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#how-do-i-fix-my-ip-address-reputation-with-an-email-or-hosting-provider)

* * *

[Gmail](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#gmail)

* * *

[Microsoft® (Outlook®, Hotmail, Yahoo)](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#microsoft-outlook-hotmail-yahoo)

* * *

[Office365®](https://docs.cpanel.net/knowledge-base/email/blacklisting-ip-address-reputation/#office365)

* * *

## Blacklisting & IP Address Reputation

Last modified: _2022 July 13_

* * *

## Overview

This document contains information about IP address reputation and blacklisting. These can impact the emails you send.

Note:

For more information, read our [How to Keep Your Email Out of the Spam folder](https://docs.cpanel.net/knowledge-base/email/how-to-keep-your-email-out-of-the-spam-folder/) documentation.

### IP address reputation

IP address reputation determines whether the emails sent by a domain are valid, spam, or junk mail. IP address reputation can rise or lower for many reasons. Some of the most common reasons are:

- The number of emails sent
- The number of sent emails recipients delete unread
- The number of sent emails flagged as spam
- The number of emails sent to incorrect addresses

### Blacklisting

Blacklisting is a method used to flag suspicious activity. Cybersecurity companies keep databases of IP addresses that send spam emails. These blacklists help hosting providers identify and block mail from suspicious senders.

## Why does my email go to spam or junk mail on large providers?

Every large email and hosting provider filters out unsolicited and unwanted email, automatically delivering it to recipients’ junk or spam mail folders. Sometimes providers can mark emails as junk or spam, even though the subscriber wanted to receive them.

Large providers don’t share the exact rules for determining junk or spam mail. Some of the most common reasons are:

- **Reputation/Age** — An email or hosting provider may flag a new account or an account that has sent hundreds of emails. For example, Gmail™ sends all new messages to the spam folder until its reputation has improved.

- **Blacklist** – A blacklist may have your IP address, hostname, or sending domain on it.

- **Content** — An email or hosting provider may filter an email for the use of certain words or phrases.

- **Links** — An email or hosting provider may filter an email for the use of links to blacklisted websites.

- **Source** — An email or hosting provider may mark your email as spam if other email messages sent from the same IP address appear to be spam. This can become a problem for small email senders who are on shared servers.

- **Headers** — An email or hosting provider may mark your email as spam if there are inconsistencies in the _From_ and _Reply to_ addresses and domains.

- **Engagement** — Recipients can mark certain messages as spam, but engagement metrics can affect the email-filtering process. An increasing number of Internet service providers (ISPs), like Yahoo! and Gmail, are using such engagement metrics to determine whether to block or filter an email. Google® uses engagement metrics as an guide of whether the user wants emails from a sender. Engagement metrics track how the users interact with email. For example, an email or hosting provider might track:
  - opened emails
  - deleted unread emails
  - emails containing links you opened

## How do I know if mail from my server is blocked?

Use the following resources to check whether your IP address, hostname, or sending domain are on any existing blacklists:

- [MultiRBL.valli.org](http://multirbl.valli.org/)
- [MxToolbox](https://mxtoolbox.com/blacklists.aspx)
- [rbls.org](http://multirbl.valli.org/)

Use the following resources to check IP addresses:

- [Abuseat CBL](https://www.abuseat.org/lookup.cgi)
- [WhatIsMyIPAddress.com - IP Address Blacklist Check](https://whatismyipaddress.com/blacklist-check)

Note:

Some existing real-time blackhole lists (RBLs) may block your server’s IP address without reason. For example:

- A country may block the country associated with your server’s IP address.
- The country blocks IP addresses from all countries except for a single country.
- The blacklist may block your server’s IP addresses per a provider-specific metric.

## How do I check my IP address reputation?

Here are a few resources that provide current data for checking an IP address reputation:

- [Sender Score (Return Path)](https://www.senderscore.org/)
- [Cisco Talos - IP and Domain Reputation Center](https://talosintelligence.com/reputation_center)
- [BarracudaCentral](http://www.barracudacentral.org/lookups/lookup-reputation)

Email providers can use IP addresses and domain reputations to identify the history of suspicious email activity. This information helps users find unwanted or unsolicited sources of email.

## How do I fix my IP address reputation with an email or hosting provider?

### Gmail

Review Gmail’s [documentation](https://support.google.com/mail/?p=UnsolicitedMessageError) first to determine why Gmail blocked your email attempt. If Gmail continues to mark your messages as spam, you will need to contact the Gmail Team directly by filling out the [Bulk Sender Contact Form](https://support.google.com/mail/contact/bulk_send_new).

### Microsoft® (Outlook®, Hotmail, Yahoo)

The error response from Microsoft suggests to contact your hosting provider, as this error may indicate a network-wide block. Refer your provider to their [Microsoft’s Troubleshooting](https://sendersupport.olc.protection.outlook.com/pm/troubleshooting.aspx#errors) page. You can report delivery issues to their [Microsoft’s mail services](http://go.microsoft.com/fwlink/?linkid=614866).

### Office365®

For more information, read Microsoft’s [non-delivery report error](http://go.microsoft.com/fwlink/?LinkId=526653) documentation. Microsoft provides instructions on how to be delisted from their ‘blocked senders’ list through the [Office 365 Anti-Spam IP Delist Portal](https://sender.office.com/).

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