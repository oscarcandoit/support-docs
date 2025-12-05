---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/"
title: "How to Use cPanel API Tokens | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#main-content)

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
4. How to Use cPanel API Tokens


[apitoken](https://docs.cpanel.net/tags/apitoken/) [api](https://docs.cpanel.net/tags/api/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#overview)

* * *

[How to use a cPanel API token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#how-to-use-a-cpanel-api-token)

* * *

[Create an API token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#create-an-api-token)

* * *

[Run API functions with the token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#run-api-functions-with-the-token)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#overview)

* * *

[How to use a cPanel API token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#how-to-use-a-cpanel-api-token)

* * *

[Create an API token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#create-an-api-token)

* * *

[Run API functions with the token](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens/#run-api-functions-with-the-token)

* * *

## How to Use cPanel API Tokens

Last modified: _2024 February 21_

* * *

## Overview

cPanel users can issue application programming interface (API) tokens that allow you to view and change account data without the need to log in to the cPanel interface. The server recognizes these API tokens and allows other users to run API functions with the account’s data. For example, you could issue an API token to a third-party developer. That third-party developer could use that token to check disk usage.

Note:

- API tokens run [UAPI](https://api.docs.cpanel.net/cpanel/introduction/) functions and [cPanel API 2](https://documentation.cpanel.net/display/DD/Guide+to+cPanel+API+2) functions, **not** [cPanel API 1](https://documentation.cpanel.net/display/DD/Guide+to+cPanel+API+1) functions.
- To learn more about using API functions, read our [Quickstart Development Guide](https://api.docs.cpanel.net/guides/quickstart-development-guide/) documentation.
- If you do **not** see this feature, your system administrator has disabled it. Contact them and ask them to enable this feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Package » Feature Manager_).

## How to use a cPanel API token

To use a cPanel API token, first create a cPanel API token in cPanel’s [_Manage API Tokens_](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/) interface ( _cPanel_ » _Home_ » _Security_ » _Manage API Tokens_). Then, use the token to run API functions on the server.

### Create an API token

You can use one of the following methods to create an API token:

- Use cPanel’s [_Manage API Tokens_](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/) interface ( _cPanel_ » _Home_ » _Security_ » _Manage API Tokens_).

- Use the UAPI [`Tokens::create_full_access`](https://api.docs.cpanel.net/openapi/cpanel/operation/create_full_access/) function.


Note:

- When an API token expires, the system does **not** remove it. You **must** manually delete an API token.
- You can remove an API token with cPanel’s [_Manage API Tokens_](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel) interface ( _cPanel » Home » Security » Manage API Tokens_) or the UAPI [`Tokens::revoke`](https://api.docs.cpanel.net/openapi/cpanel/operation/revoke/) function.

### Run API functions with the token

Remember:

You **must** use the API token that you created in cPanel.

To call a [`UAPI`](https://api.docs.cpanel.net/cpanel/introduction/) or [`cPanel API 2`](https://documentation.cpanel.net/display/DD/Guide+to+cPanel+API+2) function with an API token, run the following command from the command line:

```go
curl -H'Authorization: cpanel username:APITOKEN' 'https://example.com:2083/execute/Module/function?parameter=value'
```

This example uses the following format:

| Item | Description | Example |
| --- | --- | --- |
| `username` | The cPanel account’s username. | `username` |
| `APITOKEN` | The API token. | `U7HMR63FGY292DQZ4H5BFH16JLYMO01M` |
| `example.com` | Your cPanel server’s domain. | `example.com`<br>Note:<br>Alternatively, you can enter your server’s IP address. |
| `Module` | The API [module](https://api.docs.cpanel.net/cpanel/introduction/) name. | `Email` |
| `function` | The API [function’s](https://api.docs.cpanel.net/cpanel/introduction/) name. | `add_pop` |
| `parameter` | The function’s input parameters. | `email` |
| `value` | The value to assign to the input parameter. | `12345luggage` |

For example, your command may resemble the following example:

```go
curl -H'Authorization: cpanel username:U7HMR63FHY282DQZ4H5BIH16JLYSO01M' 'https://example.com:2083/execute/Email/add_pop?email=newuser&password=12345luggage'
```

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×