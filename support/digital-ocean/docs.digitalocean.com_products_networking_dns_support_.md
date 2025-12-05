---
url: "https://docs.digitalocean.com/products/networking/dns/support/"
title: "DNS Support | DigitalOcean Documentation"
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

- Support

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DNS Support

Generated on 25 Nov 2025

Adding a domain you own to your DigitalOcean account lets you manage the domain’s DNS records with the control panel and API. Domains you manage on DigitalOcean integrate with DigitalOcean Load Balancers and Spaces to streamline automatic SSL certificate management.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why aren't my vanity DNS name servers resolving?

If you use vanity or branded DNS nameservers that delegate to DigitalOcean’s nameservers, you must update to new IP addresses.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix the DNS error "Primary Name Server Not Listed at Parent"?

Update your registrar to use DigitalOcean’s name servers.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I add an A record to my app on App Platform?

Apps do not have static IP addresses so you cannot point an A record at an app.

![](https://docs.digitalocean.com/images/icons/support.svg)

Does DigitalOcean support DNSSEC?

No, we do not support DNSSEC.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I import a DNS zone?

You cannot import a DNS zone, but you can add the domain and manually create the DNS records.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my domain fail to resolve?

A domain could fail to resolve because the name server changes did not completely propagate, `DNSSEC` or the domain registrar needs verification, the DigitalOcean name servers are not configured at your registrar, or there are different name server providers active.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I add a domain that contains special characters?

Use Punycode to add a non-ASCII domain name to DigitalOcean.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I transfer a domain between teams?

We do not support directly transferring domain ownership from one team to another. Instead, you can download a zone file with all of the domain’s DNS information.

![](https://docs.digitalocean.com/images/icons/support.svg)

I can't delete my domain because of an associated Let's Encrypt certificate

Delete the Let’s Encrypt certificate associated with the domain in your account’s Settings section.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I debug my Droplet's network configuration?

To debug your network configuration, verify the Droplet’s network interfaces and check its network configuration file.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my Droplet receiving Authoritative Answer flag errors?

Our DNS recursive servers now require Authoritative Answer flags when resolving host names.

In this article...

[DNS Support](https://docs.digitalocean.com/products/networking/dns/support/)

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