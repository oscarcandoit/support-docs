---
url: "https://docs.digitalocean.com/products/networking/dns/getting-started/quickstart/"
title: "DNS Quickstart | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)Domains and DNS](https://docs.digitalocean.com/products/networking/dns/)
- [Getting Started](https://docs.digitalocean.com/products/networking/dns/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/dns/getting-started/quickstart/)
  - [Use DO Name Servers](https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/)
- [How-Tos](https://docs.digitalocean.com/products/networking/dns/how-to/)
  - [Add Domains](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/)
  - [Manage DNS Records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/)
  - [Manage CAA Records](https://docs.digitalocean.com/products/networking/dns/how-to/create-caa-records/)
  - [Delete Domains](https://docs.digitalocean.com/products/networking/dns/how-to/delete-domains/)
  - [Add Subdomains](https://docs.digitalocean.com/products/networking/dns/how-to/add-subdomain/)
  - [Download Zone Files](https://docs.digitalocean.com/products/networking/dns/how-to/download-zone-file/)
- [Reference](https://docs.digitalocean.com/products/networking/dns/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Domains)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/)
- [Concepts](https://docs.digitalocean.com/products/networking/dns/concepts/)
- [Details](https://docs.digitalocean.com/products/networking/dns/details/)
  - [Features](https://docs.digitalocean.com/products/networking/dns/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/dns/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/dns/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/dns/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/dns/support/)

- [Getting Started](https://docs.digitalocean.com/products/networking/dns/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DNS Quickstart

Validated on 12 Aug 2025 • Last edited on 2 Sep 2025

Adding a domain you own to your DigitalOcean account lets you manage the domain’s DNS records with the control panel and API. Domains you manage on DigitalOcean integrate with DigitalOcean Load Balancers and Spaces to streamline automatic SSL certificate management.

## Set Up a Domain

To set up a domain with DigitalOcean, you need to add it and any of its existing DNS records to the control panel, then [delegate the domain by updating your registrar to use DigitalOcean’s name servers](https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/).}).

Note
If the domain is actively in use, recreate the domain’s records on DigitalOcean before delegating the domain to avoid downtime.

1. From the [control panel](https://cloud.digitalocean.com/), click **Create** in the top right, then click **Domains/DNS**.

2. Click **Add a domain**

3. In the **Add a domain** window, enter the domain name.

This is typically the apex domain, such as `example.com`. To [add subdomains](https://docs.digitalocean.com/products/networking/dns/how-to/add-subdomain/), like `www.example.com` or `images.example.com`, create DNS records for them after you add the apex domain.

4. Click **Add Domain**. This takes you to the **Domain records** page and adds NS records for the domain on DigitalOcean’s name servers.

5. On the **Domain records** page, [add any DNS records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/) for the domain. For each record click **Create a record**, select the record type, fill in the necessary data, and click **Create Record**.

6. [Delegate your domain to DigitalOcean’s name servers](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars) through your registrar.


In this article...

- [Set Up a Domain](https://docs.digitalocean.com/products/networking/dns/getting-started/quickstart/#set-up-a-domain)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)