---
url: "https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/"
title: "Legacy Security Levels | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#main-content)

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
4. Legacy Security Levels


[security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#overview)

* * *

[CVSSv2](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#cvssv2)

* * *

[Base Score and Base Metrics](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#base-score-and-base-metrics)

* * *

[Base Vector](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#base-vector)

* * *

[Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#legacy-security-levels)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#overview)

* * *

[CVSSv2](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#cvssv2)

* * *

[Base Score and Base Metrics](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#base-score-and-base-metrics)

* * *

[Base Vector](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#base-vector)

* * *

[Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#legacy-security-levels)

* * *

## Legacy Security Levels

Last modified: _2022 July 19_

* * *

## Overview

This document explains the previous security levels of advisories that posted on our [Security page](http://www.cpanel.net/security). These security levels apply to Targeted Security Releases before [TSR-2017-0002](https://news.cpanel.com/cpanel-tsr-2017-0002-announcement/).

## CVSSv2

For Targeted Security Releases from [TSR-2015-0001](http://news.cpanel.com/cpanel-tsr-2015-0001-announcement/) to [TSR-2017-0001](https://news.cpanel.com/cpanel-tsr-2017-0001-announcement/), we used the Common Vulnerability Scoring System version 2 (CVSSv2) to score vulnerabilities. When we disclosed a vulnerability, we provided the vulnerability’s CVSSv2 Base Score and its Base Vector. You can use the CVSSv2 Base Vector to determine the complete CVSSv2 score.

## Base Score and Base Metrics

The Base Score is a numeric value that ranges from `1` to `10`, and increases as vulnerability levels increase. A value of `10` indicates the most severe vulnerabilities. The Base Metrics are vulnerability characteristics that remain constant regardless of changes in time or user environments.

To calculate the Base Score, assign values to the Base Metrics. For information about how to calculate base scores, visit first.org’s [A Complete Guide to the CVSSv2](https://www.first.org/cvss/user-guide) documentation.

## Base Vector

The Base Vector describes the components from which the Base Score is calculated. Base Vectors display in the following structure:

```go
(AV:[L,A,N]/AC:[H,M,L]/Au:[N,S,M]/C:[N,P,C]/I:[N,P,C]/A:[N,P,C])
```

Note:

You **must** choose one option for each set of brackets.

- Metrics that the brackets do not contain are **mandatory**, and you **must** include them to create a valid CVSS vector.
- Each letter or pair of letters represents a metric or metric value within CVSS.

The table below defines each Base Vector metric and their possible values:

| Metric | Description | Possible values |
| --- | --- | --- |
| `AV` | A vulnerability’s network exploit level. | - `L` — Local access<br>- `A` — Adjacent network<br>- `N` — Network |
| `AC` | A vulnerability’s required attack complexity. | - `H` — High<br>- `M` — Medium<br>- `L` — Low |
| `Au` | A vulnerability’s required account authentication level. | - `N` — None required<br>- `S` — Requires single instance<br>- `M` — Requires multiple instances |
| `C` | A vulnerability’s information confidentiality impact. | - `N` — None<br>- `P` — Partial<br>- `C` — Complete |
| `I` | A vulnerability’s account integrity impact. | - `N` — None<br>- `P` — Partial<br>- `C` — Complete |
| `A` | A vulnerability’s account availability impact. | - `N` — None<br>- `P` — Partial<br>- `C` — Complete |

For information about security levels prior to TSR-2015-0001, read the [Legacy Security Levels](https://docs.cpanel.net/knowledge-base/security/legacy-security-levels/#levels) section below.

## Legacy Security Levels

The following lists the security levels in order of severity:

- **Critical** — A **critical** rating applies to vulnerabilities that allow remote, unauthenticated access and code execution, with no user interaction required. These vulnerabilities allow automated scripts such as worms to completely compromise the system.
- **Important** — This rating applies to vulnerabilities that allow third parties to compromise system authentication levels. These vulnerabilities occur when you allow the following:

  - Local users to elevate their privilege levels.
  - Unauthenticated remote users to access resources that should require authentication to view.
  - Remote users to execute arbitrary code, which includes any local or remote attack that could result in an denial of service.
- **Moderate** — This rating applies to vulnerabilities that rely on unlikely scenarios in order to compromise the system. These scenarios usually consist of a flawed or unlikely system configuration, and only occur in rare situations.
- **Minor** — This rating applies to vulnerabilities that do not fit into the higher categories. These vulnerabilities occur in very unlikely situations and configurations, and they require extremely close timing of execution and events to occur that are out of the attacker’s control. This rating also applies to vulnerabilities that, even if successful, result in few or no consequences on the system.

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