---
url: "https://docs.cpanel.net/knowledge-base/security/security-levels/"
title: "Security Levels | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/security-levels/#main-content)

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
4. Security Levels


[security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/security-levels/#overview)

* * *

[Base Score and Base Metrics](https://docs.cpanel.net/knowledge-base/security/security-levels/#base-score-and-base-metrics)

* * *

[Base Vector](https://docs.cpanel.net/knowledge-base/security/security-levels/#base-vector)

* * *

[Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/security-levels/#legacy-security-levels)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/security-levels/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/security-levels/#overview)

* * *

[Base Score and Base Metrics](https://docs.cpanel.net/knowledge-base/security/security-levels/#base-score-and-base-metrics)

* * *

[Base Vector](https://docs.cpanel.net/knowledge-base/security/security-levels/#base-vector)

* * *

[Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/security-levels/#legacy-security-levels)

* * *

## Security Levels

Last modified: _2022 July 19_

* * *

## Overview

This document explains the security levels for advisories that we post on our [Security page](https://news.cpanel.com/category/security/).

As of [TSR-2017-0002](http://news.cpanel.com/cpanel-tsr-2017-0002-announcement/), we use the Common Vulnerability Scoring System version 3 (CVSSv3) to score vulnerabilities. When we disclose a vulnerability, we provide the vulnerability’s CVSSv3 Base Score and its Base Vector. You can use the CVSSv3 Base Vector to determine the complete CVSSv3 score.

## Base Score and Base Metrics

The Base Score is a numeric value that ranges from `1` to `10`, and increases as vulnerability levels increase. A value of `10` indicates the most severe vulnerabilities. The Base Metrics are vulnerability characteristics that remain constant regardless of changes in time or user environments.

To calculate the Base Score, assign values to the Base Metrics. For information about how to calculate base scores, visit first.org’s [A Complete Guide to the CVSSv3](https://www.first.org/cvss/user-guide) documentation.

## Base Vector

The Base Vector describes the components from which the Base Score is calculated. Base Vectors display in the following structure:

```go
(CVSS:3.0/AV:[L,A,N,P]/AC:[L,H]/PR:[N,L,H]/UI:[N,R]/S:[U,C]/C:[N,L,H]/I:[N,L,H]/A:[N,L,H])
```

Note:

You **must** choose one option for each set of brackets.

- Metrics that the brackets do not contain are **mandatory**, and you **must** include them to create a valid CVSS vector.
- Each letter or pair of letters represents a metric or metric value within CVSS.

The table below defines each Base Vector metric and their possible values:

| Metric | Description | Possible values |
| --- | --- | --- |
| `AV` | A vulnerability’s network exploit level. | - `L` — Local access<br>- `A` — Adjacent network<br>- `N` — Network<br>- `P` — Physical |
| `AC` | A vulnerability’s required attack complexity. | - `L` — Low<br>- `H` — High |
| `PR` | A vulnerability’s required account authentication level. | - `N` — None required<br>- `L` — Requires low privileges<br>- `H` — Requires high privileges |
| `UI` | A vulnerability’s requirement that another user performs an action. | - `N` — None required<br>- `R` — Successful attack requires user interaction |
| `S` | A vulnerability’s impact to systems beyond the vulnerable component. | - `U` — Impact is localized to the exploitable component<br>- `C` — Impacts cause to systems beyond the vulnerable component |
| `C` | A vulnerability’s information confidentiality impact. | - `N` — None<br>- `L` — Low<br>- `H` — High |
| `I` | A vulnerability’s account integrity impact. | - `N` — None<br>- `L` — Low<br>- `H` — High |
| `A` | A vulnerability’s account availability impact. | - `N` — None<br>- `L` — Low<br>- `H` — High |

## Legacy Security Levels

For information about security levels prior to TSR-2017-0002, read our [Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels) documentation.

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×