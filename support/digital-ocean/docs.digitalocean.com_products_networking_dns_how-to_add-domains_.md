---
url: "https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/"
title: "How to Add Domains | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/networking/dns/how-to/)
- Add Domains

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add Domains

Validated on 12 Aug 2024 • Last edited on 2 Sep 2025

Adding a domain you own to your DigitalOcean account lets you manage the domain’s DNS records with the control panel and API. Domains you manage on DigitalOcean integrate with DigitalOcean Load Balancers and Spaces to streamline automatic SSL certificate management.

Adding a domain to your project allows you to assign the domain to Droplets, load balancers, and other resources. You can only add domains with known top-level domains (TLDs) [publicly recognized by ICANN](https://publicsuffix.org/list/public_suffix_list.dat).

Before adding your domain to DigitalOcean, [delegate the domain to DigitalOcean’s name servers](https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/).

## Add a Domain Using Automation

How to Add a Domain Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute domain create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/create/) for more details:




```shell
doctl compute domain create <domain> [flags]
```



The following command creates a domain named example.com and adds an A record to the domain:




```shell
doctl compute domain create example.com --ip-address 198.51.100.215
```


How to Add a Domain Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/domains`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/domains_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"example.com","ip_address":"1.2.3.4"}' \
  "https://api.digitalocean.com/v2/domains"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
  "context"
  "os"

  "github.com/digitalocean/godo"
  )

func main() {
  token := os.Getenv("DIGITALOCEAN_TOKEN")

  client := godo.NewFromToken(token)
  ctx := context.TODO()

  createRequest := &godo.DomainCreateRequest{
    Name:      "example.com",
    IPAddress: "1.2.3.4",
  }

  domain, _, err := client.Domains.Create(ctx, createRequest)

}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

domain = DropletKit::Domain.new(
  name: 'example.com',
  ip_address: '1.2.3.4'
)
client.domains.create(domain)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "example.com"
}

resp = client.domains.create(body=req)
```

## Add a Domain Using the Control Panel

To add a domain from the [control panel](https://cloud.digitalocean.com/), open the **Create** menu and click **Domains/DNS**.

![Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

This brings you to the **Networking** section’s **Domains** tab. Click **Add a domain**, enter your domain into the **Domain** field, then click **Add Domain**. If your domain contains non-ASCII characters (such as accents or other Unicode characters), you must [convert it to Punycode](https://www.punycoder.com/) before adding it.

Note
DigitalOcean's terms of service prohibit adding country code top-level domains (ccTLDs) from OFAC-sanctioned countries. For more information, including a list of countries, see section 5.7 of our **Rules of Conduct** in [our terms of service](https://www.digitalocean.com/legal/terms-of-service-agreement/).

The system performs a DNS lookup to see if the domain has already been added to DigitalOcean. If it has, you receive a message that says **Data domain `example.com`: Name already exists**. If the domain has not been previously added to DigitalOcean’s DNS service, it is added to your team’s domains.

![A single domain listed](https://docs.digitalocean.com/screenshots/dns/domain-added.05d1664bbd03e9a3cdc7b7088baf8c5d22ce25063015dd6e8ed1dc7e708d17ce.png)

Once you’ve added the domain the **Domain records** interface loads. On this page you can see existing records and [Create new records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/). From here, you can add DNS records like A, AAAA, CNAME, MX, NS, SRV, and TXT records. For a complete list of supported records, see [Supported Record Types](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#supported-record-types).

![A screenshot of the DNS Create a new record menu](https://docs.digitalocean.com/screenshots/dns/example-ns-records.48a57555dceb9ecb3859d16104aa41b041926807cefd18d09fbda3b7bdc0dbda.png)

In this article...

- [Add a Domain Using Automation](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/#add-a-domain-using-automation)
- [Add a Domain Using the Control Panel](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/#add-a-domain-using-the-control-panel)

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