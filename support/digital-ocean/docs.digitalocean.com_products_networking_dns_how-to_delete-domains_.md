---
url: "https://docs.digitalocean.com/products/networking/dns/how-to/delete-domains/"
title: "How to Delete Domains | DigitalOcean Documentation"
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
- Delete Domains

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Delete Domains

Validated on 12 Aug 2025 • Last edited on 2 Sep 2025

Adding a domain you own to your DigitalOcean account lets you manage the domain’s DNS records with the control panel and API. Domains you manage on DigitalOcean integrate with DigitalOcean Load Balancers and Spaces to streamline automatic SSL certificate management.

If you no longer want to use DigitalOcean to manage your domain’s DNS records, you can delete the domain. This removes the domain and its DNS records from your [current team](https://docs.digitalocean.com/platform/teams/). It does not cancel the domain registration because your domain is managed by the registrar you purchased it from.

To delete a domain that is associated with a Let’s Encrypt certificate, you must first [delete the certificate](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/#delete-certificates) and reconfigure anything that used the certificate, like [load balancer SSL termination](https://docs.digitalocean.com/products/networking/load-balancers/) or [custom Spaces CDN endpoints](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/).

## Delete a Domain Using Automation

How to Delete a Domain Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute domain delete`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/delete/) for more details:




```shell
doctl compute domain delete <domain> [flags]
```



The following command deletes the domain example.com:




```shell
doctl compute domain delete example.com
```


How to Delete a Domain Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/domains/{domain_name}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/domains_delete).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/domains/example.com"
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

    _, err := client.Domains.Delete(ctx, "example.com")
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.domains.delete(name: 'example.com')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

delete_resp = client.domains.delete(domain_name="example.com")
```

## Delete a Domain Using the Control Panel

To delete a domain, log in to the [control panel](https://cloud.digitalocean.com/) and click **Networking** in the main menu to go to the **Domains** tab.

![A single domain listed](https://docs.digitalocean.com/screenshots/dns/domain-added.05d1664bbd03e9a3cdc7b7088baf8c5d22ce25063015dd6e8ed1dc7e708d17ce.png)

Open the **More** menu of the domain you want to delete, then click **Delete domain**. In the confirmation window type in the name of the domain, then click **Delete** to permanently delete the domain and its records from the account.

In this article...

- [Delete a Domain Using Automation](https://docs.digitalocean.com/products/networking/dns/how-to/delete-domains/#delete-a-domain-using-automation)
- [Delete a Domain Using the Control Panel](https://docs.digitalocean.com/products/networking/dns/how-to/delete-domains/#delete-a-domain-using-the-control-panel)

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