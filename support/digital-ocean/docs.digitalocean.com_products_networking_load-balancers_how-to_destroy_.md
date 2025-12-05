---
url: "https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/"
title: "How to Destroy Load Balancers | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/load-balancers.1b5f8a9d40bf92d2798a187032a28a29572afdd5e74855e5b1c1d30dfffc07ed.svg)Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/)
- [Getting Started](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/quickstart/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
  - [Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/)
  - [Create Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/)
  - [Manage Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/)
  - [Manage Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage-global-load-balancers/)
  - [Scale Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/)
  - [Configure SSL Passthrough](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-passthrough/)
  - [Balance TCP Traffic](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/)
  - [Configure Backend Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/configure-droplets-for-nlb/)
  - [Destroy Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/)
  - [Configure SSL Termination](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/)
- [Reference](https://docs.digitalocean.com/products/networking/load-balancers/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Load-Balancers)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/)
- [Concepts](https://docs.digitalocean.com/products/networking/load-balancers/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/)
  - [Load Balancer Status](https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/)
- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
  - [Features](https://docs.digitalocean.com/products/networking/load-balancers/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/load-balancers/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/load-balancers/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/load-balancers/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
- Destroy Load Balancers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Destroy Load Balancers

Validated on 28 Oct 2019 • Last edited on 17 Apr 2025

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

You can destroy a load balancer if you no longer need it. This is a permanent, irreversible action.

Note
Destroying a load balancer does not destroy the Droplets that were associated with it. You can [destroy these Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/) separately.

## Delete a Load Balancer Using Automation

How to Delete a Load Balancer Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute load-balancer delete`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/delete/) for more details:




```shell
doctl compute load-balancer delete <load-balancer-id> [flags]
```


How to Delete a Load Balancer Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/load_balancers/{lb_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/loadBalancers_delete).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/load_balancers/4de7ac8b-495b-4884-9a69-1050c6793cd6"
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

    _, err := client.LoadBalancers.Delete(ctx, "4de7ac8b-495b-4884-9a69-1050c6793cd6")
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.load_balancers.delete(id: '4de7ac8b-495b-4884-9a69-1050c6793cd6')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

resp = client.load_balancers.delete(lb_id="afda3ad")
```

## Destroy a Load Balancer Using the Control Panel

From the [control panel](https://cloud.digitalocean.com/), click **Networking**, then click **Load Balancers** to go to the load balancer overview page. Click the name of the load balancer you want to destroy to go to its index page, then click **Settings**.

![Load Balancers settings page](https://docs.digitalocean.com/screenshots/load-balancers/settings.fddc0d8f993d1996c627c8af847a85c91ef7fb5a58d4704a234b5b2068641ecd.png)

In the **Destroy** section, click the **Destroy** button. In the **Destroy Load Balancer** window that opens, click **Confirm** to permanently destroy the load balancer.

In this article...

- [Delete a Load Balancer Using Automation](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/#delete-a-load-balancer-using-automation)
- [Destroy a Load Balancer Using the Control Panel](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/#destroy-a-load-balancer-using-the-control-panel)

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