---
url: "https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/"
title: "Dynamic DNS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Domains](https://docs.cpanel.net/cpanel/domains/)
4. Dynamic DNS


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [domains](https://docs.cpanel.net/tags/domains/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#overview)

* * *

[The Dynamic DNS Domains table](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#the-dynamic-dns-domains-table)

* * *

[Create a new DDNS domain](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#create-a-new-ddns-domain)

* * *

[Manage a DDNS domain](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#manage-a-ddns-domain)

* * *

[View SSL Certificate](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#view-ssl-certificate)

* * *

[Manage a DDNS domain’s SSL certificate](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#manage-a-ddns-domains-ssl-certificate)

* * *

[Configure your router for DDNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#configure-your-router-for-ddns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#overview)

* * *

[The Dynamic DNS Domains table](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#the-dynamic-dns-domains-table)

* * *

[Create a new DDNS domain](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#create-a-new-ddns-domain)

* * *

[Manage a DDNS domain](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#manage-a-ddns-domain)

* * *

[View SSL Certificate](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#view-ssl-certificate)

* * *

[Manage a DDNS domain’s SSL certificate](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#manage-a-ddns-domains-ssl-certificate)

* * *

[Configure your router for DDNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/#configure-your-router-for-ddns)

* * *

## Dynamic DNS

![](https://docs.cpanel.net/img/cpanel-icons/dynamic_dns.svg)

_Valid for versions 92 through 128_

#### Version:

#### [92](https://docs.cpanel.net/cpanel/domains/dynamic-dns/92/)

#### [130](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to utilize a Domain Name System (DNS) hosted on the cPanel server to resolve a hostname that exists on an external network with a dynamic IP address. A dynamic IP address changes, while a static IP address stays the same. This feature lets you manage your network devices without the need to manually update their settings any time the IP address changes.

Important:

To use this feature, your hosting provider must perform the following actions:

- Configure [nameservers](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver) for the active domains on your cPanel account in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
- [Register nameservers](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/) for the active domains on your cPanel account.

  - You **must** configure your cPanel account’s active domains to use the nameservers that your hosting provider registers in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_).

## The Dynamic DNS Domains table

The _Dynamic DNS_ interface displays a table that contains your DDNS domains and their information. You can also perform actions for the domains that you select. The table contains the following information:

| Item | Description |
| --- | --- |
| _Domain_ | The DDNS domain that you can navigate to in your browser. This will also display the DDNS domain’s description, if one exists. You can also click a domain in this column to view the following options: <br>- _Description_ — Use this text box to add or update a DDNS domain’s description. Click _Save_ to apply your changes or _Cancel_ to discard your changes.<br>- _Last Update Time_ — The most recent time when the IP address changed for the DDNS domain.<br>- _Last Run Time_ — The most recent time when a request to update the IP address happened. If the IP address stays the same between requests, the server keeps the domain’s IP address the same. |
| _IP Address_ | The IPv4 or IPv6 address or addresses that the DDNS domain resolves to. This IP address synchronizes with the dynamic IP address of the network’s router. |
| _URL_ | The [webcall](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#webcall) URL. The device on your dynamic IP address network calls this URL to update the IP address for the DDNS domain. |
| _SSL Certificate_ | The SSL certificate for the DDNS domain, if available. To view or copy the certificate, click _View SSL Certificate_. |

### Create a new DDNS domain

To create a new DDNS domain, click _Create_. The _Create Dynamic DNS Domain_ interface will appear. Then, perform the following steps:

1. Enter a unique subdomain in the _Dynamic DNS Domain_ text box. Then, select a domain from the menu.
2. To add an IP address, click _Manually Enter an IP Address_. Then, enter a valid IPv4 or IPv6 address.






Note:





This IP address will update when you configure your router or device.

3. Enter an optional description to help you identify the new DDNS domain.
4. If you want to create another domain, select the _Stay on this page after I click “Create”_ checkbox. Otherwise, click _Create_ to save your changes.
5. After creating the new DDNS domain, add the new webcall URL to your router or device’s configuration.

#### Example

Note:

In this example, “files” is the subdomain and “Office File Server” is the description name.

The following example shows how to setup a DDNS domain for a business or home network:

1. Log in to your cPanel account and click _Dynamic DNS_.
2. Click _Create_.
3. Enter a new subdomain for a domain managed by your cPanel account.
4. Enter a description name to help you identify the DDNS domain.
5. Click _Create_. The interface will make the subdomain and generate the unique [webcall](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#webcall) URL.
6. You can use the `curl` command or a web browser on your DDNS device to access the [webcall](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#webcall).

Your `curl` command should resemble the following example:

```bash
curl -s https://example.com/cpanelwebcall/mxuocxrwqhhoobgzaomlpznagidlwnbr
```

### Manage a DDNS domain

To update a webcall URL or delete a DDNS domain, perform the following steps:

1. Select the checkbox of each domain you want to modify.
2. Click _Action_.
3. Select one of the following options:
   - _Recreate URL_ — This option generates a new webcall URL for the DDNS domain.
   - _Delete_ — This option will remove the DDNS domain. Click _Delete_ to confirm.






     Important:





- You **cannot** undo this action.
- Deleting a DDNS domain does **not** delete its SSL certificate.

### View SSL Certificate

Important:

We **strongly** recommend that you use a secure connection to your router or device.

To view the contents of a DDNS domain’s SSL certificate, click _View SSL Certificate_. A new interface will appear. You can then copy the SSL certificate’s contents to your DDNS-enabled device.

Note:

Each device’s interface is unique. Consult your device’s documentation for specific installation instructions.

On the device that you are configuring for DDNS, search for a tab called _HTTPS_, _DDNS_, or _SSL/TLS Certificate_, or something similar. This tab could be in an _Advanced_ or _WAN_ menu. You can copy the contents of the text boxes from this interface into your device’s text boxes.

### Manage a DDNS domain’s SSL certificate

Use cPanel’s [_SSL/TLS Status_](https://docs.cpanel.net/cpanel/security/ssl-tls-status/) interface ( _cPanel » Home » Security » SSL/TLS_) to:

- Check the status of your DDNS domain’s certificate.
- Request a new SSL certificate for a DDNS domain.

You can also use the _SSL/TLS Status_ interface if your DDNS domain displays the _No certificate available for this domain_ message.

## Configure your router for DDNS

We recommend that you consult your device’s documentation for the proper configuration steps. The following lists contains links to the more popular open-source router and firewall configurations:

- [DD-WRT](https://wiki.dd-wrt.com/wiki/index.php/Dynamic_DNS#Custom_.28URL_Updat)
- [pfSense](https://docs.netgate.com/pfsense/en/latest/services/dyndns/client.html#custom)
- [OpnSense](https://docs.opnsense.org/manual/dynamic_dns.html)

You may need to provide an SSL certificate so the device can connect over an encrypted connection. To view and copy the domain’s SSL certificate, click [_View SSL Certificate_](https://docs.cpanel.net/cpanel/domains/dynamic-dns/#view-ssl-certificate).

Important:

We **strongly** recommend using SSL to prevent your login information from being sent unencrypted.

Once you complete the router configuration, your router will use the [webcall](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#webcall) URL to update cPanel’s DDNS feature when its dynamic IP address updates.

#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [Redirects](https://docs.cpanel.net/cpanel/domains/redirects/)
- [Site Publisher](https://docs.cpanel.net/cpanel/domains/site-publisher/)
- [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)