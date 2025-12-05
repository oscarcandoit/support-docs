---
url: "https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/"
title: "How to Add and Remove Droplets from Firewalls | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/firewalls.ae799a907969d743602c769c16fd2ad744471b683543c748c3cfb89494091454.svg)Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/)
- [Getting Started](https://docs.digitalocean.com/products/networking/firewalls/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/firewalls/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/firewalls/how-to/)
  - [Create Firewalls](https://docs.digitalocean.com/products/networking/firewalls/how-to/create/)
  - [Configure Rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/)
  - [Apply Firewalls to Droplets](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/)
  - [View Rules for Droplets](https://docs.digitalocean.com/products/networking/firewalls/how-to/view-rules-for-droplet/)
  - [Destroy Firewalls](https://docs.digitalocean.com/products/networking/firewalls/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/networking/firewalls/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Firewalls)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/)
- [Concepts](https://docs.digitalocean.com/products/networking/firewalls/concepts/)
  - [Organize Firewalls](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/)
- [Details](https://docs.digitalocean.com/products/networking/firewalls/details/)
  - [Features](https://docs.digitalocean.com/products/networking/firewalls/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/firewalls/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/firewalls/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/firewalls/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/firewalls/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/firewalls/how-to/)
- Apply Firewalls to Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add and Remove Droplets from Firewalls

Validated on 27 Mar 2019 • Last edited on 17 Apr 2025

DigitalOcean Cloud Firewalls are a network-based, stateful firewall service for Droplets provided at no additional cost. Cloud firewalls block all traffic that isn’t expressly permitted by a rule.

## Add or Remove Droplets from a Firewall Using the CLI

The commands to add and remove Droplets from a firewall require the Droplet’s ID. To retrieve a list of Droplets and their IDs, use the `doctl compute droplet list` command.

How to Add a Droplet to a Firewall Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute firewall add-droplets`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/add-droplets/) for more details:




```shell
doctl compute firewall add-droplets <firewall-id> [flags]
```



The following example assigns two Droplets to the cloud firewall with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`:




```shell
doctl compute firewall add-droplets f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --droplet-ids "386734086,391669331"
```


How to Remove a Droplet to a Firewall Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute firewall remove-droplets`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/remove-droplets/) for more details:




```shell
doctl compute firewall remove-droplets <firewall-id> [flags]
```



The following example removes two Droplets from a cloud firewall with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`:




```shell
doctl compute firewall remove-droplets f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --droplet-ids "386734086,391669331"
```


## Add or Remove Droplets from a Firewall Using the API

The API calls to add and remove Droplets from a firewall require the Droplet’s ID. To retrieve a list of Droplets and their IDs, use the [`/v2/droplets` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_list).

How to Add Droplets to a Firewall Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/firewalls/{firewall_id}/droplets`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/firewalls_assign_droplets).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"droplet_ids":[49696269]}' \
  "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/droplets"
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

    _, err := client.Firewalls.AddDroplets(ctx, 'bb4b2611-3d72-467b-8602-280330ecd65c', 49696269)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.firewalls.add_droplets([49696269], id: 'bb4b2611-3d72-467b-8602-280330ecd65c')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "droplet_ids": [\
    49696269\
  ]
}

resp = client.firewalls.assign_droplets(firewall_id="39fa4gz", body=req)
```

How to Remove Droplets From a Firewall Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/firewalls/{firewall_id}/droplets`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/firewalls_delete_droplets).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"droplet_ids":[49696269]}' \
  "https://api.digitalocean.com/v2/firewalls/bb4b2611-3d72-467b-8602-280330ecd65c/droplets"
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

    _, err := client.Firewalls.RemoveDroplets(ctx, 'bb4b2611-3d72-467b-8602-280330ecd65c', 49696269)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.firewalls.remove_droplets([49696269], id: 'bb4b2611-3d72-467b-8602-280330ecd65c')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "droplet_ids": [\
    49696269\
  ]
}

resp = client.firewalls.delete_droplets(firewall_id="39fa4gz", body=req)
```

## Add or Remove Droplets from a Firewall Using the Control Panel

You can modify the Droplets protected by a firewall in the [control panel](https://cloud.digitalocean.com/) by choosing **Networking** from the top menu, then **Firewalls**. Select the firewall you want to check or modify, then navigate to its **Droplets** tab.

A firewall’s **Droplets** tab lists all of all the Droplets protected by the firewall. Droplets added individually are shown on their own line, and Droplets added with a tag are shown below the tag.

To add another Droplet or tag to the firewall, use the **Add Droplets** button.

To remove a Droplet or tag from a firewall, use its **More** menu and select **Remove**.

![Firewall more menu open](https://docs.digitalocean.com/screenshots/firewalls/droplet-more-menu.bf2a3eca6475545001312962c78557344ee640396364bc2865c669662647b602.png)

From the firewall’s Droplets panel, you can see which Droplets are affected by that firewall’s rules. To [see all the rules affecting a specific Droplet](https://docs.digitalocean.com/products/networking/firewalls/how-to/view-rules-for-droplet/), you need to view the individual Droplet’s networking page.

In this article...

- [Add or Remove Droplets from a Firewall Using the CLI](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/#add-or-remove-droplets-from-a-firewall-using-the-cli)
- [Add or Remove Droplets from a Firewall Using the API](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/#add-or-remove-droplets-from-a-firewall-using-the-api)
- [Add or Remove Droplets from a Firewall Using the Control Panel](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/#add-or-remove-droplets-from-a-firewall-using-the-control-panel)

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