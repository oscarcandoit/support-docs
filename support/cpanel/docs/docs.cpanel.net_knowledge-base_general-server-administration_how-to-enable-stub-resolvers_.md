---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/"
title: "How to Enable Stub Resolvers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#main-content)

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
4. How to Enable Stub Resolvers


#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#overview)

* * *

[Enable stub resolvers](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#enable-stub-resolvers)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#overview)

* * *

[Enable stub resolvers](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-enable-stub-resolvers/#enable-stub-resolvers)

* * *

## How to Enable Stub Resolvers

Last modified: _2025 February 13_

* * *

## Overview

This document describes how to enable [stub resolvers](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions#Stub_resolvers) for your server.

Warning:

- We **strongly** recommend that you do **not** enable this method. We do **not** support this behavior.
- This method can cause problems with your server configuration.
- This procedure will make AutoSSL error messages significantly less useful.

## Enable stub resolvers

This feature uses your system’s resolvers instead of relying on external DNS. If you or your system administrator blocks port `53` outside of your network, stub resolvers can perform DNS for your servers.

Warning:

This method **only** resolves issues related to intentionally blocking port `53`. Do **not** use this method, for example, as a workaround for issues with your [NAT configuration](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/). Instead, properly set up your NAT configuration.

To enable stub resolvers, perform the following steps:

1. Run the following to confirm that the `dig` command work:



```bash
/scripts/cpdig google.com mx
```

2. Run the following to set up a [dangling symlink](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dangling-symlink):



```bash
ln -s stub /var/cpanel/dns_unbound_resolve_mode
```

3. Run the following to confirm that the `dig` command works with the `strace` option added:



```bash
strace -o cpdig.strace /scripts/cpdig google.com mx
```

4. Verify that the `strace` option is showing the stub that the resolver is using:



```bash
grep -A2 stub cpdig.strace
```



Your output should resemble the following:



```bash
readlink("/var/cpanel/dns_unbound_resolve_mode", "stub", 4095) = 4
open("/etc/resolv.conf", O_RDONLY) = 8
```


#### Additional Documentation

* * *

- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×