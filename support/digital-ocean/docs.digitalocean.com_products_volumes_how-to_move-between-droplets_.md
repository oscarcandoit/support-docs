---
url: "https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/"
title: "How to Move Volumes between Droplets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/volumes.9c13d8bb9aee0348ee1af5d72d4c795b4eea86db85fa161806e73d12c0b756d3.svg)Volumes Block Storage](https://docs.digitalocean.com/products/volumes/)
- [Getting Started](https://docs.digitalocean.com/products/volumes/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
  - [Create and Set Up Volumes](https://docs.digitalocean.com/products/volumes/how-to/create/)
  - [Delete Volumes](https://docs.digitalocean.com/products/volumes/how-to/delete/)
  - [Increase the Size of Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/)
  - [Detach Volumes](https://docs.digitalocean.com/products/volumes/how-to/detach/)
  - [Move Volumes between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/)
  - [Mount Volumes](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  - [Unmount Volumes](https://docs.digitalocean.com/products/volumes/how-to/unmount/)
  - [Partition Volumes](https://docs.digitalocean.com/products/volumes/how-to/partition/)
  - [Expand Partitions](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/)
- [Reference](https://docs.digitalocean.com/products/volumes/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/)
- [Details](https://docs.digitalocean.com/products/volumes/details/)
  - [Features](https://docs.digitalocean.com/products/volumes/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/volumes/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/volumes/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/volumes/details/limits/)
  - [Naming Conventions](https://docs.digitalocean.com/products/volumes/details/naming-conventions/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/volumes)
- [Support](https://docs.digitalocean.com/products/volumes/support/)

- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
- Move Volumes between Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Move Volumes between Droplets

Validated on 16 Dec 2019 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

To move a volume between Droplets in the same region, you need to unmount and detach it from its current Droplet, then attach and mount it to the new Droplet.

## Between Droplets in the Same Region

### Using the Control Panel

1. Unmount the volume from the current Droplet using the command line, or power down the Droplet. This makes sure the Droplet is not writing to the volume when you move it.

2. Detach the volume from the current Droplet using the [control panel](https://cloud.digitalocean.com/volumes). In the volume’s **More** menu, choose **Detach from Droplet**.
![One attached volume on the Volumes page, with the more menu open](https://docs.digitalocean.com/screenshots/volumes/more-menu-attached.7a2fe22a5c7846e6eccf794c1555161f15cac8cf73da48e079705cc908cb8e01.png)
3. Attach the volume to a different Droplet using the control panel. In the volume’s **More** menu, choose **Attach to Droplet**., then select the Droplet you want to use.

You can choose any Droplet in the same region. Droplets in other datacenters are visible but cannot be selected.

4. [Mount the volume](https://docs.digitalocean.com/products/volumes/how-to/mount/) to make it accessible to the new Droplet’s filesystem. The mount directions are also in the volume’s **More** menu, under **Config instructions**.


### Using the API or CLI

First, unmount the volume from the current Droplet using the command line, or power down the Droplet. This makes sure the Droplet is not writing to the volume when you move it. Then, [detach the volume](https://docs.digitalocean.com/products/volumes/how-to/detach/).

How to Attach a Volume to a Droplet Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute volume-action attach`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/attach/) for more details:




```shell
doctl compute volume-action attach <volume-id> <droplet-id> [flags]
```



The following example attaches a volume with the UUID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6` to a Droplet with the ID `386734086`:




```shell
doctl compute volume-action attach f81d4fae-7dec-11d0-a765-00a0c91e6bf6 386734086
```


To detach a volume using the API, use the volume actions endpoints and set the `type` field to `attach`.

How to Attach a Volume to a Droplet Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/volumes/{volume_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/volumeActions_post_byId).

### cURL

Using cURL:

```shell
# Attach a Volume to a Droplet by ID
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type": "attach", "droplet_id": 11612190, "region": "nyc1", "tags":["aninterestingtag"]}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"

# Remove a Volume from a Droplet by ID
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type": "detach", "droplet_id": "11612190", "region": "nyc1"}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"

# Resize a Volume
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"resize","size_gigabytes": 100, "region":"nyc1"}' \
  "https://api.digitalocean.com/v2/volumes/7724db7c-e098-11e5-b522-000f53304e51/actions"
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

  // Attach a Volume to a Droplet by ID
    action, _, err := client.StorageActions.Attach(ctx, "7724db7c-e098-11e5-b522-000f53304e51", 11612190)

  // Remove a Volume from a Droplet by ID
  // action, _, err := client.StorageActions.Detach(ctx, "7724db7c-e098-11e5-b522-000f53304e51")

  // Resize a Volume
  // action, _, err := client.StorageActions.Resize(ctx, "7724db7c-e098-11e5-b522-000f53304e51", 100, "nyc1")
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Attach a Volume to a Droplet by ID
client.volume_actions.attach(volume_id:'7724db7c-e098-11e5-b522-000f53304e51', droplet_id: 11612190, region: 'nyc1'

# Remove a Volume from a Droplet by ID
# client.volume_actions.detach(volume_id:'7724db7c-e098-11e5-b522-000f53304e51', droplet_id: 11612190, region: 'nyc1'
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "type": "attach",
  "droplet_id": 11612190,
  "region": "nyc1",
  "tags": [\
    "aninterestingtag"\
  ]
}

resp = client.volume_actions.post_by_id(volume_id="7724db7c", body=req)
```

## Between Droplets in Different Regions

Volumes are region-specific resources, meaning you can’t use them with Droplets in different regions. You currently can’t transfer volumes or [snapshots of volumes to different regions](https://docs.digitalocean.com/products/snapshots/#limits).

As a workaround, you can [create a new volume](https://docs.digitalocean.com/products/volumes/how-to/create/) in the desired region, attach it to a Droplet, and [use rsync or similar tools to copy the data](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh) from the original volume to the new one. Once you’ve confirmed the data transfer and no longer need the original volume, you can [detach and destroy it](https://docs.digitalocean.com/products/volumes/how-to/delete/).

In this article...

- [Between Droplets in the Same Region](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/#same-region)
  - [Using the Control Panel](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/#using-the-control-panel)
  - [Using the API or CLI](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/#using-the-api-or-cli)
- [Between Droplets in Different Regions](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/#new-region)

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