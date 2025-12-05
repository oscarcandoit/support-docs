---
url: "https://docs.cpanel.net/whm/support/create-support-ticket/"
title: "Create Support Ticket | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/support/create-support-ticket/#main-content)

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
3. [Support](https://docs.cpanel.net/whm/support/)
4. Create Support Ticket


[support](https://docs.cpanel.net/tags/support/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/support/create-support-ticket/#overview)

* * *

[How to create a support ticket](https://docs.cpanel.net/whm/support/create-support-ticket/#how-to-create-a-support-ticket)

* * *

[Open a technical support ticket](https://docs.cpanel.net/whm/support/create-support-ticket/#open-a-technical-support-ticket)

* * *

[Open a Feature Request](https://docs.cpanel.net/whm/support/create-support-ticket/#open-a-feature-request)

* * *

[Whitelisting cPanel Technical Support services](https://docs.cpanel.net/whm/support/create-support-ticket/#whitelisting-cpanel-technical-support-services)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/support/create-support-ticket/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/support/create-support-ticket/#overview)

* * *

[How to create a support ticket](https://docs.cpanel.net/whm/support/create-support-ticket/#how-to-create-a-support-ticket)

* * *

[Open a technical support ticket](https://docs.cpanel.net/whm/support/create-support-ticket/#open-a-technical-support-ticket)

* * *

[Open a Feature Request](https://docs.cpanel.net/whm/support/create-support-ticket/#open-a-feature-request)

* * *

[Whitelisting cPanel Technical Support services](https://docs.cpanel.net/whm/support/create-support-ticket/#whitelisting-cpanel-technical-support-services)

* * *

## Create Support Ticket

![](https://docs.cpanel.net/img/whm-icons/create_support_ticket.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/support/create-support-ticket/)

Last modified: _2025 September 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Create Support Ticket_ interface streamlines the ticket creation process for you and cPanel Technical Support, decreasing the time necessary to open and address a support ticket. This feature also automates SSH authorization and redirects you to the [cPanel Customer Portal](https://tickets.cpanel.net/) as necessary.

Note:

- WHM will send your support request directly to WebPros International, LLC.
- If you obtained your cPanel & WHM license from one of our Partners or another hosting provider, contact them directly for support. For more information about how to find out if you receive cPanel & WHM through a third party, read our [How to Identify Your Hosting Provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) documentation.

## How to create a support ticket

To access the _Create Support Ticket_ interface, perform the following steps:

1. Log in to WHM as the `root` user.
2. Navigate to the _Create Support Ticket_ interface ( _WHM » Home » Support » Create Support Ticket_).
3. The menu will present two choices to solve your technical issue:

- _I need help with an existing feature or technical issue_. — If you need technical help with WHM & cPanel software or extensions, click _Get Started_.
- _Is there a feature you need that cPanel & WHM does not provide or that we could improve upon?_ — If you would like to create a request for a new WHM & cPanel software feature, or to vote on existing requests, click _Visit our feature site_ to open the [cPanel Feature Request](https://features.cpanel.net/) website.

## Open a technical support ticket

Important:

To log in to the [cPanel Customer Portal](https://tickets.cpanel.net/), enter your cPanelID. If you are unsure what your cPanelID is or whether you have one, visit the [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/) documentation.

After clicking _Get Started_ in the _Create Support Ticket_ interface, your browser will open a new _Submit a request_ interface in the [cPanel Customer Portal](https://tickets.cpanel.net/). To submit a request, you will enter:

- A request type: Select either technical or customer service support from the menu.
- A subject: A short description of your issue.
  - For example, if you want to submit a ticket about API parameters returning an empty JSON object, the subject would be “API returns null object after parameters given”.
- A description: A longer description of your issue.
  - For example, if you want to submit a ticket about API parameters returning an empty JSON object, you would copy the API fetch command and output here.
  - If you are unsure of how to describe your technical issue, log in with your [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/), then visit cPanel Technical Support’s [_How to provide detailed reproduction steps for faster ticket resolutions_](https://support.cpanel.net/hc/articles/360053092693-How-to-provide-detailed-reproduction-steps-for-faster-ticket-resolutions) article.
- _Your Licensed IP Address_: If you are unsure how to find your Licensed IP Address, log in with your [cPanelID](https://docs.cpanel.net/knowledge-base/accounts/cpanelid/), then visit cPanel Technical Support’s [_How do I find my Licensed IP Address?_](https://support.cpanel.net/hc/articles/360051035614) article.
- _Deny Server Access_: Select this option if you do **not** want to provide cPanel Technical Support with access to your server.






Important:





Denying cPanel Technical Support access to your server **will** limit our available support options.

- Attachments: Use the _Add File_ button or drag-and-drop interface to attach any records of the technical issue.
- _I Agree to the Terms of Service_: You **must** agree to the [Technical Support Agreements](https://cpanel.net/technical-support-agreements/) to submit a ticket.
- Click _Submit_.

The _Update Server_ page will appear. Perform the following steps to prepare your server:

- Enter a server name in the _Server Name_ section.
- Enter your login IP address and your port for SSH access in the _Login IP_ and _Port for SSH Access_ section.
- Select `root` or enter a username in the text box in the _Username for SSH Access_.
- Choose whether to _Install cPanel SSH Key_ or provide your password.
- If needed, you can also leave additional notes under _Additional Information_.
- Click _Save & Close_.

You have now opened your support ticket. To view your open support ticket in the [cPanel Customer Portal](https://tickets.cpanel.net/), click _Show Open / Closed Requests_ in the _Tasks_ menu.

## Open a Feature Request

To create a new ticket in the [cPanel Feature Request](https://features.cpanel.net/#) Portal, you **must** either log in with your secure cPanelID or register a new email user. After that, to submit a new Feature Request, click the _New Topic_ button in the navigation bar and enter the following information:

- _Title_: Less than 100 characters: a brief description of your requested feature.
- _Body_: A longer description of your requested feature and its uses.

  - To include any additional materials with the Feature Request, click _Attach a File_ and select the file from your local computer.
- _Category_: Select the category that best describes your requested feature from the menu.
- _Tags_: Select tags that reflect your Feature Request.
- Click _Submit_.

Note:

To maximize your Feature Request’s chances of success, follow the _Feature Request Submission Guidelines_ in the [_Feature Request_](https://features.cpanel.net/topic/add) interface.

You have now opened your Feature Request. To view your open Feature Requests in the [cPanel Feature Request](https://features.cpanel.net/#) Portal, click your username in the navigation bar and click _My Tickets_ in the menu.

## Whitelisting cPanel Technical Support services

The server will automatically whitelist cPanel Technical Support’s IP addresses for the following services:

- `iptables` or `firewalld` — The default firewall on your server.
- cPHulk — The [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) feature ( _WHM » Home » Security Center » cPHulk Brute Force Protection_).
- The `/etc/hosts.allow` file — The [_Host Access Control_](https://docs.cpanel.net/whm/security-center/host-access-control) feature ( _WHM » Home » Security Center » Host Access Control_).
- ConfigServer Security & Firewall — Any installed [_ConfigServer Security & Firewall_](https://github.com/waytotheweb/scripts/tree/main/csf) software.

For more information about firewall configuration, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.

You can view cPanel Technical Support’s IP addresses below:

`208.74.123.98
35.161.131.175
184.94.197.2
184.94.197.3
184.94.197.4
184.94.197.5
184.94.197.6
23.111.175.214
157.90.174.91
`

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Grant cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/)
- [Support Center](https://docs.cpanel.net/whm/support/support-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×