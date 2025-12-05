---
url: "https://docs.digitalocean.com/products/networking/vpc/how-to/create/"
title: "How to Create a VPC | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/vpc.8e35a29c5ce11122208ae3824979d1635c2e67bfb31236328f0665502135db7e.svg)VPC](https://docs.digitalocean.com/products/networking/vpc/)
- [Getting Started](https://docs.digitalocean.com/products/networking/vpc/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/vpc/how-to/)
  - [Create VPCs](https://docs.digitalocean.com/products/networking/vpc/how-to/create/)
  - [Destroy VPCs](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy/)
  - [Add Resources](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/)
  - [Migrate Resources](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/)
  - [Enable on Existing Droplets](https://docs.digitalocean.com/products/networking/vpc/how-to/enable/)
  - [Set Default VPC](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/)
  - [Use VPC-local DNS](https://docs.digitalocean.com/products/networking/vpc/how-to/use-local-dns-resolver/)
  - [Create Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/)
  - [Destroy Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-peering/)
  - [Update Peering Routes](https://docs.digitalocean.com/products/networking/vpc/how-to/update-peering-routes/)
  - [Create NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/)
  - [Destroy NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-nat-gateway/)
  - [Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/)
  - [Configure DOKS for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-doks-nat-gateway/)
  - [Create Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/)
  - [Destroy Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-partner-attachment/)
  - [Edit Partner Attachment VPC](https://docs.digitalocean.com/products/networking/vpc/how-to/edit-partner-attachment-vpc/)
  - [Add High Availability to Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/add-ha-to-partner-attachment/)
  - [Troubleshoot Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/)
- [Reference](https://docs.digitalocean.com/products/networking/vpc/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/VPCs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/vpcs/)
- [Concepts](https://docs.digitalocean.com/products/networking/vpc/concepts/)
  - [Plan Custom VPC Network](https://docs.digitalocean.com/products/networking/vpc/concepts/plan-your-network/)
  - [VPC Best Practices](https://docs.digitalocean.com/products/networking/vpc/concepts/best-practices/)
- [Details](https://docs.digitalocean.com/products/networking/vpc/details/)
  - [Features](https://docs.digitalocean.com/products/networking/vpc/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/vpc/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/vpc/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/vpc/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/vpc/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/vpc/how-to/)
- Create VPCs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a VPC

Validated on 28 Apr 2020 • Last edited on 17 Apr 2025

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

## Create a VPC Network Using the CLI

The VPC creation command requires you to provide a datacenter region for the `--region` flag. Use [`doctl compute region list`](https://docs.digitalocean.com/reference/doctl/reference/compute/region/list/) command to retrieve a list of available datacenter regions.

How to Create a VPC Network Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl vpcs create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/vpcs/create/) for more details:




```shell
doctl vpcs create [flags]
```



The following example creates a VPC network named `example-vpc` in the `nyc1` region:




```shell
doctl vpcs create --name example-vpc --region nyc1
```


## Create a VPC Network Using the API

The VPC creation call requires you to provide a datacenter region for the `region` field. Use the [`/v2/regions`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/regions_list) endpoint to retrieve a list of available datacenter regions.

How to Create a VPC Network Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/vpcs`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/vpcs_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"my-new-vpc", "region":"nyc1", "ip_range": "10.10.10.0/24"}' \
  "https://api.digitalocean.com/v2/vpcs"
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

    createRequest := &godo.VPCCreateRequest{
     Name:       "my-new-vpc",
     RegionSlug: "nyc1",
     IPRange:    "10.10.10.0/24",
    }

    vpc, _, err := client.VPCs.Create(ctx, createRequest)
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "env.prod-vpc",
  "description": "VPC for production environment",
  "region": "nyc1",
  "ip_range": "10.10.10.0/24"
}

resp = client.vpcs.create(body=req)
```

## Create a VPC Network Using the Control Panel

To create a VPC network, click **Networking** in the main menu, then click the **VPC** tab. In the **VPC** tab, click **Create VPC Network**.

On the **Create VPC Network** page, select the datacenter region for the VPC. Any resources you intend to add to the VPC need to reside in the same datacenter region as the VPC. DigitalOcean does not currently support adding resources to VPCs that reside in different datacenter regions.

![VPC tab. Create VPC Network](https://docs.digitalocean.com/screenshots/vpc/vpc-tab.69056a8522251a5d03c57a21545c544a303f8d7c78d94b34dfc7601e8d939d18.png)

On the **Create VPC Network** page, select a datacenter region for the VPC network. Any resources you add to the VPC network need to be in the network’s datacenter region.

![Choose datacenter region](https://docs.digitalocean.com/screenshots/vpc/vpc-datacenter.4b1520f2142964f0141a4613ddf25690619048102c62886a52370fb102ed7958.png)

Under **Configure Private IP Range**, choose how you want your IP range to be generated. We strongly recommended **Generate an IP range for me** to save time calculating IP ranges and prevent your network ranges from overlapping.

![Generate IP range](https://docs.digitalocean.com/screenshots/vpc/vpc-ip-range.a78847ee1fc5f922b6cbc869fd5d1f1b9766a8aafa46ef96df3b4133357bae35.png)

If you select **Configure my own IP range**, see [Planning Your Network Size](https://docs.digitalocean.com/products/networking/vpc/concepts/plan-your-network/) for more information about how to plan the size and range of your VPC network. The IP range of your VPC network can’t overlap with the ranges other networks in your account. The control panel prevents you from creating networks with overlapping ranges.

In the **Choose a name and description** section, name the VPC network and optionally add a description of it, then click **Create VPC network**.

![Create VPC Network](https://docs.digitalocean.com/screenshots/vpc/vpc-name-description.b3722a4d40694e80325cddd5aae16bcf8ee435edfb00b153b408368436986bb7.png)

Once the VPC network is created, you can create new resources in the network. VPC networks currently support Droplets, managed databases, load balancers, and Kubernetes clusters.

You can also [migrate existing managed databases and Droplets to a VPC network](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/), but currently cannot migrate Kubernetes clusters and load balancers.

In this article...

- [Create a VPC Network Using the CLI](https://docs.digitalocean.com/products/networking/vpc/how-to/create/#create-a-vpc-network-using-the-cli)
- [Create a VPC Network Using the API](https://docs.digitalocean.com/products/networking/vpc/how-to/create/#create-a-vpc-network-using-the-api)
- [Create a VPC Network Using the Control Panel](https://docs.digitalocean.com/products/networking/vpc/how-to/create/#create-a-vpc-network-using-the-control-panel)

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