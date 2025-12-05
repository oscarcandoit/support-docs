---
url: "https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/"
title: "How to Integrate Sitejet Builder in Your Customer Portal | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#main-content)

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
3. [Sitejet](https://docs.cpanel.net/knowledge-base/sitejet/)
4. How to Integrate Sitejet Builder in Your Customer Portal


[sitejet](https://docs.cpanel.net/tags/sitejet/) [partners](https://docs.cpanel.net/tags/partners/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#overview)

* * *

[Provide a streamlined website builder experience with Sitejet](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#provide-a-streamlined-website-builder-experience-with-sitejet)

* * *

[Implementation examples](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#implementation-examples)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#overview)

* * *

[Provide a streamlined website builder experience with Sitejet](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#provide-a-streamlined-website-builder-experience-with-sitejet)

* * *

[Implementation examples](https://docs.cpanel.net/knowledge-base/sitejet/how-to-integrate-sitejet-builder-in-your-customer-portal/#implementation-examples)

* * *

## How to Integrate Sitejet Builder in Your Customer Portal

Last modified: _2025 August 11_

* * *

## Overview

Many hosting partners find it difficult to compete with other hosting companies that provide cloud-based website builders. Sitejet is our solution to cloud-based website builders. Sitejet will help partners elevate their hosting platform as a customer-friendly website builder and the best part is that it’s already available to use in cPanel & WHM®.

This article explains how to provide access to the Sitejet interface directly from your customer portal. This gives your users easy access to a simple website building process without using multiple interfaces. To do this, you’ll need to use the cPanel & WHM UAPI. Before you begin, we recommend you learn more about using the cPanel & WHM UAPI by reading [the documentation.](https://api.docs.cpanel.net/cpanel/introduction/) You might also find the cPanel & WHM [Guide to Authentication](https://api.docs.cpanel.net/guides/guide-to-api-authentication#guide-to-api-authentication) useful.

## Provide a streamlined website builder experience with Sitejet

The following steps need to be followed exactly when setting up the customer in your customer portal. You will need a cPanel user to run the API calls to create a Sitejet account.

##### Create the Sitejet account with the `create_sitejet_account` API.

This API generates a token that will link the cPanel user and the Sitejet account. This should only be implemented one time for a cPanel account.
To learn more about how to configure this API, read our [Generate a Sitejet API key](https://api.docs.cpanel.net/openapi/cpanel/operation/create_sitejet_account/) documentation.

* * *

##### Create the website ID for the domain with the `create_website` API.

After you create the Sitejet account, use this API to create the website ID for the domain.
To learn more about how to configure this API, read our [Create Sitejet domain ID](https://api.docs.cpanel.net/openapi/cpanel/operation/create_sitejet_website/) documentation.

* * *

##### Create the Single Signon link for Sitejet signon with the `get_sso_link` API.

This API will provide the link you should use to redirect your customer to Sitejet Builder, allowing the customer to create or edit their website within your customer portal. When the user clicks _Publish_, they should be redirected back to your panel and the website publication begins.
To learn more about how to configure this API, read our [Return Sitejet SSO URL](https://api.docs.cpanel.net/openapi/cpanel/operation/get_sitejet_sso_link/) documentation.

* * *

##### Publish the website with the `start_publish_sitejet` API.

Clicking _Publish_ in the Sitejet builder does two things:

1. Sends the user back to the control panel.
2. Generates the HTML that the user designed in Sitejet and sends that content to the control panel.
The control panel accepts the files and unpacks them to a folder. That folder is generally the document root for the web server.
Learn more about how to configure the publication process in the [Publish Sitejet domain](https://api.docs.cpanel.net/openapi/cpanel/operation/start_publish_sitejet/) documentation.

* * *

## Implementation examples

WHMCS has integrated Sitejet in this manner. You can see an example of their customer portal below.

![WHMCS Sitejet integration](https://docs.cpanel.net/img/sitejet-builder-whmcs.png)

#### Additional Documentation

* * *

- [Enable Sitejet Commerce](https://docs.cpanel.net/knowledge-base/sitejet/enable-sitejet-commerce/)
- [How to Add Custom Sitejet Templates](https://docs.cpanel.net/knowledge-base/sitejet/how-to-add-custom-sitejet-templates/)
- [How to Purchase a 360 Monitoring License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-360-monitoring-license/)
- [How to Purchase a Sitejet Commerce License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-sitejet-commerce-license/)
- [How to Purchase a SocialBee License](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×