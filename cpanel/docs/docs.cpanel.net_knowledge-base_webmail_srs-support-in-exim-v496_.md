---
url: "https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/"
title: "Sender Rewriting Scheme (SRS) in Exim version 4.96 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. Sender Rewriting Scheme (SRS) in Exim version 4.96


[exim](https://docs.cpanel.net/tags/exim/) [webmail](https://docs.cpanel.net/tags/webmail/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#overview)

* * *

[What changed in the cPanel & WHM server](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#what-changed-in-the-cpanel--whm-server)

* * *

[Possible configuration changes](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#possible-configuration-changes)

* * *

[Support for SMTP authentication in the Exim Configuration Manager’s Basic Editor](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#support-for-smtp-authentication-in-the-exim-configuration-managers-basic-editor)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#overview)

* * *

[What changed in the cPanel & WHM server](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#what-changed-in-the-cpanel--whm-server)

* * *

[Possible configuration changes](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#possible-configuration-changes)

* * *

[Support for SMTP authentication in the Exim Configuration Manager’s Basic Editor](https://docs.cpanel.net/knowledge-base/webmail/srs-support-in-exim-v496/#support-for-smtp-authentication-in-the-exim-configuration-managers-basic-editor)

* * *

## Sender Rewriting Scheme (SRS) in Exim version 4.96

Last modified: _2023 February 17_

* * *

## Overview

In cPanel & WHM version 108, we upgraded Exim to version 4.96. This new implementation requires explicit Exim configuration directives to know whether a [Sender Rewriting Scheme (SRS)](https://www.exim.org/exim-html-current/doc/html/spec_html/ch-dkim_spf_srs_and_dmarc.html#SECTSRS) applies when your server forwards an email, and to perform the return address rewrite if needed. This includes both cPanel-provided routers and transports as well as those created using the _Advanced Editor_ tab on the [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) mail interface ( _WHM » Service Configuration » Exim Configuration Manager_).

Note:

Your Exim customizations may not require changes. However, if you do **not** make required changes, the server at the ultimate destination may not accept mail that your server forwards if the source domain requests strict SPF enforcement.

## What changed in the cPanel & WHM server

Custom routers and transports responsible for sending mail must be able to tell whether or not a local forwarder processed a message, and to transform the return address if required. The cPanel & WHM server now handles this by creating a second copy of the transport.

- We duplicate the relevant transport and add the `return_path` and `max_rcpt` directives to the copy.


```bash
    max_rcpt    = 1
    return_path = ${srs_encode {SRS_SECRET} {$return_path} {$original_domain}}
```

- We change the relevant routers to select which copy of the target transport to use (original or modified). This depends on whether the nominal recipient is or is not the original recipient.


```bash
    transport = ${if eq {$local_part@$domain}
                  {$original_local_part@$original_domain}
                  {custom_transport} {custom_transport_srs}}
```


For more information on how to modify routers and transports to support SRS, read our [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) documentation. For more information on Sender Rewriting Schemes, read the [Exim SRS](https://www.exim.org/exim-html-current/doc/html/spec_html/ch-dkim_spf_srs_and_dmarc.html#SECTSRS) documentation. For examples of how WHM uses SRS in your server, refer to the `lookuphost` router, and the `remote_smtp` and `remote_forwarded_smtp` transports in the _Advanced Editor_ tab on the _Exim Configuration Manager_ mail interface ( _WHM » Service Configuration » Exim Configuration Manager_). For another example of how to implement SRS in custom configurations, read our [_How to use SendGrid as a Smarthost_](https://support.cpanel.net/hc/en-us/articles/360036537354-How-to-use-SendGrid-as-a-Smarthost) support article.

### Possible configuration changes

You may need to make configuration changes to ensure that your messages reach the proper destination.

An example of a configuration that you **will** need to change is custom support for one or more smarthosts. The target server will eventually see the forwarded message, so your Exim server must apply SRS changes to assure that [Sender Policy Framework (SPF)](https://www.plesk.com/kb/docs/dkim-spf-and-dmarc-protection-spf-and-srs/) checks will pass.

An example of a configuration that you **will not** need to change is custom support for sending a duplicate copy of an outgoing message to an external archival server. The target of the forwarder will not see that copy of the message, so the forwarder does not need to apply any SRS changes. However, you may choose to apply SRS anyway to reduce the number of custom configurations.

### Support for SMTP authentication in the Exim Configuration Manager’s Basic Editor

In cPanel & WHM version 108, we added the _Smarthost requires SMTP authentication_ setting to the _Basic Editor_ tab in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#mail) interface. If you have used the _Advanced Editor_ of the _Exim Configuration Manager_ to modify the default configuration of Exim for smarthosts, you may be able to simplify your configuration by using this new _Basic Editor_ function.

To use this function, you must enter a `route_list` in the _Smarthost support_ text box and set the _Smarthost requires SMTP authentication_ setting to `On`. Then you can provide a `Username` and `Password` for Exim to submit when it connects to the designated smarthosts.

Note:

All smarthosts configured through the _Basic Editor_ tab in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#mail) interface use the same credentials. You must use the _Advanced Editor_ tab in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/#advanced-editor) interface to configure multiple smarthost servers that require unique credentials.

#### Additional Documentation

* * *

- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Exim Configuration Manager Basic Editor](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×