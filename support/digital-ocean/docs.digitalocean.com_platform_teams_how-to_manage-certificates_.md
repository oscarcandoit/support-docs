---
url: "https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/"
title: "How to Manage SSL Certificates on DigitalOcean Teams | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
  - [Roles](https://docs.digitalocean.com/platform/teams/roles/)
  - [Settings](https://docs.digitalocean.com/platform/teams/settings/)
  - [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
    - [Create New Teams](https://docs.digitalocean.com/platform/teams/how-to/create/)
    - [Manage Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/)
    - [Use Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/)
    - [Require Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/)
    - [Manage SSH Keys on Teams](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/)
    - [Manage SSL Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/)
    - [View Security History](https://docs.digitalocean.com/platform/teams/how-to/view-security-history/)
    - [Refer Others to DigitalOcean](https://docs.digitalocean.com/platform/teams/how-to/refer-others/)
    - [Delete Teams](https://docs.digitalocean.com/platform/teams/how-to/delete/)
    - [Configure SSO](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/)
  - [Limits](https://docs.digitalocean.com/platform/teams/limits/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Teams](https://docs.digitalocean.com/platform/teams/)
- [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
- Manage SSL Certificates

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage SSL Certificates on DigitalOcean Teams

Validated on 14 May 2024 • Last edited on 17 Jun 2025

Some product features, like [load balancer SSL termination](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/) and [custom Spaces CDN endpoints](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/), require SSL certificates. You can view and manage your team’s SSL certificates from the [control panel](https://cloud.digitalocean.com/).

In the left menu, click **Settings**, then click the **Security** tab to go to the [team security page](https://cloud.digitalocean.com/account/security). The **Certificates for Load Balancers and Spaces** section lists information about any existing certificates, like their names, SHA1 fingerprints, and expiry dates.

![The Certificates section of the team security page](https://docs.digitalocean.com/screenshots/teams/certificates.c0fd4303c1401b1de9f401546f13ec92c8ba9eaf1d3496cc653912832f73b0b8.png)

## Add Certificates

To add a new certificate to your team, click **Add Certificate** to open the **New Certificate** window.

![The New Certificate window](https://docs.digitalocean.com/screenshots/teams/new-certificate-window.d9ff269ac804d723d6c0e1b1adc835192e719f1bc9129cea611aa5d543319ef2.png)

There are two options for how to add a new certificate:

- **Let’s Encrypt** lets you create a fully-managed SSL certificate. Choose this option if you want us to create a new certificate that we automatically renew on your behalf.

- **Bring your own certificate** lets you upload an existing certificate. Choose this option if you want to upload a custom certificate or certificate from a [commercial certificate authority](https://www.digitalocean.com/community/tutorials/how-to-install-an-ssl-certificate-from-a-commercial-certificate-authority). You are responsible for manually updating this certificate when it expires.


Let's Encrypt

If you [manage your domain with DigitalOcean DNS](https://docs.digitalocean.com/products/networking/dns/), you can choose the **Let’s Encrypt** option to create a new, fully-managed SSL certificate. We create and automatically renew this certificate for you.

Select the domain you want to use, then select a subdomain option:

- **All subdomains (wildcard)**: Create a wildcard certificate that secures the domain’s apex and any subdomains that do not have an existing DNS records defined.

- **Select an existing subdomain**: Create a certificate that secures the domain’s apex and only selected subdomains.


We do not create or change DNS records for subdomains. If your subdomains do not already point at the load balancer, you need to [add DNS records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records) for that.

Finally, enter a name for the certificate, then click **Generate Certificate**.

Bring your own certificate

If you want to upload an existing certificate, or if you prefer to manage your DNS with another provider and want to generate your own, choose **Bring your own certificate**.

You need to fill in four fields:

- **Certificate name**. This is a name you choose to identify the certificate in the DigitalOcean interface. It can only contain letters, numbers, periods, and dashes.

- **Certificate**. This is the actual SSL public key or certificate file.

- **Private key**. This is the secret key associated with the certificate.

- **Certificate chain**. This is the full trust chain between the trusted certificate authority’s certificate and your domain’s certificate.


After you fill out these fields, click **Save SSL Certificate**.

## Delete Certificates

To delete a certificate from your account, first remove it from any Spaces buckets or DigitalOcean Load Balancers it is attached to. Then, click the **…** to the right of the certificate, then click **Delete**.

In the window that opens, enter the name of the certificate and click **Delete Certificate**.

In this article...

- [Add Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/#add-certificates)
- [Delete Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/#delete-certificates)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices