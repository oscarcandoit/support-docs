---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/"
title: "How to Create Reserved IPs | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/reserved-ips.c9c9b721d99d9592de022671f4dd4b27147dea7162dbfa52ee239edccf9d612f.svg)Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)
- [Getting Started](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
  - [Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)
  - [Delete Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/delete/)
  - [Reassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/)
  - [Manually Enable Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/)
  - [Find Droplet Anchor IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/)
  - [Send Outbound Traffic](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/outbound-traffic/)
  - [Provision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/)
  - [Deprovision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/)
  - [Manage BYOIP Advertisement](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/)
  - [Assign BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/assign-byoip-ip/)
  - [Modify BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/)
- [Reference](https://docs.digitalocean.com/products/networking/reserved-ips/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/)
- [Concepts](https://docs.digitalocean.com/products/networking/reserved-ips/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/reserved-ips/)
- [Details](https://docs.digitalocean.com/products/networking/reserved-ips/details/)
  - [Features](https://docs.digitalocean.com/products/networking/reserved-ips/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/reserved-ips/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/reserved-ips/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/reserved-ips/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/reserved-ips/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
- Create Reserved IPs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Reserved IPs

Validated on 17 Jun 2025 • Last edited on 17 Jun 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

## Create a Reserved IP Using the CLI

The Reserved IP creation command requires you to assign the IP address to a Droplet upon creation using the Droplet’s ID. You can retrieve a list of Droplets and their IDs using the `doctl compute droplet list` command.

How to Create a Reserved IPv4 Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute reserved-ip create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/create/) for more details:




```shell
doctl compute reserved-ip create [flags]
```



The following example creates a reserved IP address in the `nyc1` region and assigns it to a Droplet with the ID `386734086`:




```shell
doctl compute reserved-ip create --region nyc1 --droplet-id 386734086
```


How to Create a Reserved IPv6 Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute reserved-ipv6 create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/create/) for more details:




```shell
doctl compute reserved-ipv6 create [flags]
```



The following example creates a reserved IPv6 address in the `nyc1` region:




```shell
doctl compute reserved-ipv6 create --region nyc1
```


## Create a Reserved IP Using the API

The Reserved IP creation call requires you to assign the IP address to a Droplet upon creation using the Droplet’s ID. You can retrieve a list of Droplets and their IDs using the [`/v2/droplets` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_list).

How to Create a Reserved IPv4 Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/reserved_ips`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/reservedIPs_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"droplet_id": 123456}' \
  "https://api.digitalocean.com/v2/reserved_ips"
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

  createRequest := &godo.ReservedIPCreateRequest{
      DropletID: 123456,
      Region:    "nyc3",
      ProjectID: "1234a77a-12cd-11ed-909f-43c99lbf6030",
  }

  reservedIP, _, err := client.ReservedIPs.Create(ctx, createRequest)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

reserved_ip = DropletKit::ReservedIp.new(droplet_id: 123456)
client.reserved_ips.create(reserved_ip)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "droplet_id": 2457247
}

resp = client.reserved_ips.create(body=req)
```

How to Create a Reserved IPv6 Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/reserved_ipv6`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/reservedIPv6_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"region_slug": "nyc3"}' \
  "https://api.digitalocean.com/v2/reserved_ipv6"
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

    createRequest := &godo.ReservedIPV6CreateRequest{
        RegionSlug: "nyc3",
    }

    reservedIPV6, _, err := client.ReservedIPV6s.Create(ctx, createRequest)
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "region_slug": nyc3
}

resp = client.reserved_ipv6s.create(body=req)
```

## Create a Reserved IP Using the Control Panel

To create a reserved IP from the [control panel](https://cloud.digitalocean.com/), click **Create** in the top right, then click **Reserved IPs**.

![Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

This takes you to the **Reserved IPs** page. Click **Add a Reserved IP** to create one.

![A screenshot of the 'Add a Reserved IP' control panel interface showing radio options for 'IPv4' or 'IPv6', and 'Assign to Droplet' or 'Reserve in Datacenter Region'. Underneath those is a 'Select a Droplet' search box.](https://docs.digitalocean.com/screenshots/reserved-ips/add-a-reserved-ip.ea6cfd95c1273371443d5c169099c803754d0c313ff4b0f2ccf4cd7af739da9f.png)

Select the IP address version to reserve, either IPv4 or IPv6.

Then, select where you would like to add the reserved IP address. You may either assign it to an existing Droplet, or reserve it for later use within a single datacenter region.

To assign a reserved IP to one of your Droplets, choose **Assign to Droplet**, then select the Droplet using the **Search for a Droplet** search box. Click **Add a Reserved IP to this Droplet** to finish.

To reserve an IP in a datacenter region, choose **Reserve in Datacenter Region**. Select the datacenter and project name, then click **Add an Unassigned Reserved IP**.

Note

When you assign a reserved IPv4 to a Droplet created before 20 October 2015, a window opens with instructions on [how to enable reserved IPs on older Droplets](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/).

For reserved IPv6 addresses, all Droplets require manual configuration after the IPv6 address is assigned. See [Enable Reserved IPv6](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#enable-reserved-ipv6) for instructions.

In this article...

- [Create a Reserved IP Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/#create-a-reserved-ip-using-the-cli)
- [Create a Reserved IP Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/#create-a-reserved-ip-using-the-api)
- [Create a Reserved IP Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/#create-a-reserved-ip-using-the-control-panel)

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