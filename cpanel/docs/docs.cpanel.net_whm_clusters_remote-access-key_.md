---
url: "https://docs.cpanel.net/whm/clusters/remote-access-key/"
title: "Remote Access Key | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/clusters/remote-access-key/#main-content)

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
3. [Clusters](https://docs.cpanel.net/whm/clusters/)
4. Remote Access Key


[whmui](https://docs.cpanel.net/tags/whmui/) [configclusters](https://docs.cpanel.net/tags/configclusters/) [apitoken](https://docs.cpanel.net/tags/apitoken/) [dnsclusters](https://docs.cpanel.net/tags/dnsclusters/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/clusters/remote-access-key/#overview)

* * *

[Generate a new access key](https://docs.cpanel.net/whm/clusters/remote-access-key/#generate-a-new-access-key)

* * *

[Access Key Signature](https://docs.cpanel.net/whm/clusters/remote-access-key/#access-key-signature)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/clusters/remote-access-key/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/clusters/remote-access-key/#overview)

* * *

[Generate a new access key](https://docs.cpanel.net/whm/clusters/remote-access-key/#generate-a-new-access-key)

* * *

[Access Key Signature](https://docs.cpanel.net/whm/clusters/remote-access-key/#access-key-signature)

* * *

## Remote Access Key

![](https://docs.cpanel.net/img/whm-icons/remote_access_key.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/clusters/remote-access-key/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Warning:

- We **deprecated** this interface in cPanel & WHM version 64. We **strongly** suggest that you use WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm) interface ( _WHM » Home » Development » Manage API Tokens_).
- This interface **only** appears if you enable the _Allow deprecated WHM accesshash authentication_ setting in the _Security_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- To convert your access hash to an API token, use the [`/usr/local/cpanel/scripts/convert_accesshash_to_token`](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script) script.

You can use this feature to generate an access key, which is also known as an access hash. You can use this access key for automatic account creation scripts, external billing software, and to allow servers in your DNS or configuration clusters to exchange records.

## Generate a new access key

To generate a new access key, perform the following steps:

1. Click _Generate New Key_.
2. Copy and paste the new access key to the appropriate file or location on the remote server(s) that need to communicate with your web server.
   - To configure a DNS server cluster, read our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
   - To configure a configuration cluster, read our [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster) documentation.

Note:

You can view the access hash via the command line in the `/root/.accesshash` file.

## Access Key Signature

The _Access Key Signature_ includes the first 32 characters of the remote access key, separated by colons (`:`).

You can use this signature to quickly check whether you used the correct access key in interfaces that display the key in a shortened format.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×