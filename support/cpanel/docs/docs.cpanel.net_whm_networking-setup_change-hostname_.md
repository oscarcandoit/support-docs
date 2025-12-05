---
url: "https://docs.cpanel.net/whm/networking-setup/change-hostname/"
title: "Change Hostname | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/networking-setup/change-hostname/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Networking Setup](https://docs.cpanel.net/whm/networking-setup/)
4. Change Hostname


[networking](https://docs.cpanel.net/tags/networking/) [hostname](https://docs.cpanel.net/tags/hostname/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/networking-setup/change-hostname/#overview)

* * *

[How to change your hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/#how-to-change-your-hostname)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/networking-setup/change-hostname/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/networking-setup/change-hostname/#overview)

* * *

[How to change your hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/#how-to-change-your-hostname)

* * *

## Change Hostname

![](https://docs.cpanel.net/img/whm-icons/change_hostname.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/networking-setup/change-hostname/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The internet uses your hostname as a label by which to identify your physical server. This interface allows you to change your server’s hostname.

Important:

- Do **not** select a hostname that begins with `www` or a number, or a hostname that ends with a hyphen (`-`).

- Choose a hostname that is 60 characters or fewer.

- You **must** use a [fully-qualified domain name (FQDN)](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) that uniquely identifies the server (for example, `hostname.example.com` or `hostname.example.co.uk`).

- Do **not** choose a hostname that a cPanel account on your server will use.

- Do **not** choose a potential service subdomain as a hostname (for example, `cpanel.example.com` or `whm.example.com`).

- Do **not** select a socially-unacceptable hostname. The hostname will appear in mail headers.

- Only use lowercase, Latin-script letters in hostnames.


Note:

If your server currently uses a subdomain of `cprapid.com` as a hostname, we encourage you to replace it with an existing domain or purchase a new domain to generate a hostname. Using your own domain name and hostname will help establish your organization’s brand. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


The system displays your current hostname under the _Current Hostname_ heading.

## How to change your hostname

Important:

If you update your hostname, the system temporarily blocks user access to the [_Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) (CalDAV and CardDAV) interface.

The system restores access to this interface after the hostname update finishes. For more information, read our [Interface Lock Scripts](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts) documentation.

Note:

- Whenever you change the server’s hostname, you **must** use one of the following methods to ensure that all of the necessary system and service changes occur:
  - Use WHM’s _Change Hostname_ interface ( _WHM » Home » Networking Setup » Change Hostname_).
  - Call WHM API 1’s `sethostname` function.
  - Run the [`set_hostname`](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/) utility as the `root` user.
- If your cPanel & WHM server uses a cloud-based hosting provider, read our [Cloud-Hosted Hostname Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/) documentation.


To change your hostname, perform the following steps:

1. Enter the new hostname into the _New Hostname_ text box.






Remember:




You **must** use a fully-qualified domain name as your new hostname. Your new hostname should also resolve to the server’s main IP address.


2. Click _Change_. A popup window will appear that confirms the hostname change is in progress.

3. After the system changes your hostname, scroll to the bottom of the interface and click _Add An A Entry_ for your hostname. WHM’s [_Add an A Entry for Your Hostname_](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/) interface ( _WHM » Home » DNS Functions » Add an A Entry for Your Hostname_).

4. Review the information about your server and, if it is correct, click _Add Entry_.


The system will automatically configure the new hostname and add the correct A entry.

Note:

- When you change your hostname, the system changes it **immediately**. The system will also restart any services that require a restart to function (for example, `mysqld` which will change the log file naming format to the new hostname).

- If you **must** change your hostname for non-cPanel configuration files or services, these services continue to function until you manually adjust them.

- If you use External Authentication, you **must** update the Redirection URI settings in the configuration settings at the external authentication provider’s site to reflect the new hostname.


#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Resolver Configuration](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/)
- [The set\_hostname Utility](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/)
- [Traceroute Enable/Disable](https://docs.cpanel.net/whm/security-center/traceroute-enable-disable/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×