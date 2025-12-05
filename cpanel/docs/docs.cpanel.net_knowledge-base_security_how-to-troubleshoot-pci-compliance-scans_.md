---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/"
title: "How to Troubleshoot PCI Compliance Scans | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#main-content)

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
4. How to Troubleshoot PCI Compliance Scans


[ports](https://docs.cpanel.net/tags/ports/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#overview)

* * *

[Troubleshoot scans of port 443](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#troubleshoot-scans-of-port-443)

* * *

[Remove the SSLCipherSuite entries.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#remove-the-sslciphersuite-entries)

* * *

[Rebuild the httpd.conf file.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#rebuild-the-httpdconf-file)

* * *

[Restart Apache and retry the scan.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#restart-apache-and-retry-the-scan)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#overview)

* * *

[Troubleshoot scans of port 443](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#troubleshoot-scans-of-port-443)

* * *

[Remove the SSLCipherSuite entries.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#remove-the-sslciphersuite-entries)

* * *

[Rebuild the httpd.conf file.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#rebuild-the-httpdconf-file)

* * *

[Restart Apache and retry the scan.](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-pci-compliance-scans/#restart-apache-and-retry-the-scan)

* * *

## How to Troubleshoot PCI Compliance Scans

Last modified: _2022 July 19_

* * *

## Overview

Important:

- To fully address this issue, you **must** understand SSLCipherSuite entries and their values. For more information, read Apache’s [mod\_ssl](http://httpd.apache.org/docs/2.0/mod/mod_ssl.html#sslciphersuite) documentation.

- The system transmits insecure cookies when a previous set of cookies expire. Insecure cookies replace any invalid cookies and help ensure that a cPanel & WHM login does not result in a redirect loop. For PCI compliance, the system reports this as a false positive because the system requires a secure SSL connection.


PCI compliance scans of port `443` may fail after you have configured the [SSLCipherSuite](http://httpd.apache.org/docs/2.0/mod/mod_ssl.html#sslciphersuite) directive in the Global Configuration section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration_). To troubleshoot this issue, check for other SSLCipherSuite entries in your `httpd.conf` file.

Note:

- For more information, read our [PCI Compliance and Software Versions](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/) documentation.

- If these steps fail to resolve the issue, open a ticket with our support team.


## Troubleshoot scans of port 443

### Remove the SSLCipherSuite entries.

Remove the existing SSLCipherSuite entries from the `httpd.conf` file and users’ SSL data files. You can do this in the _Global Configuration_ section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_).

### Rebuild the `httpd.conf` file.

After you edit the `httpd.conf` file, you **must** rebuild it. To do this, run the `/usr/local/cpanel/scripts/rebuildhttpconf` script.

### Restart Apache and retry the scan.

To restart Apache, run the `/usr/local/cpanel/scripts/restartsrv_httpd` script. Then, retry the port `443` scan.

#### Additional Documentation

* * *

- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×