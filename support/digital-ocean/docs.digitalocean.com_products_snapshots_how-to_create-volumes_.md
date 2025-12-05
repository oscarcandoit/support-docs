---
url: "https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/"
title: "How to Create Volumes from Snapshots | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/snapshots.257b4659783b27a6528d9939dcfcb23d26d0ecb4f674e8b728d4bbee764fc3c9.svg)Snapshots](https://docs.digitalocean.com/products/snapshots/)
- [Getting Started](https://docs.digitalocean.com/products/snapshots/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/snapshots/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/snapshots/how-to/)
  - [Snapshot Droplets](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/)
  - [Create or Restore Droplets](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/)
  - [Migrate Droplets](https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/)
  - [Snapshot Volumes](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/)
  - [Create Volumes](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/)
  - [Add Snapshots to Regions](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/)
  - [Transfer Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/transfer/)
  - [Delete Snapshots](https://docs.digitalocean.com/products/snapshots/how-to/delete/)
- [Reference](https://docs.digitalocean.com/products/snapshots/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Snapshots)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/snapshots/)
- [Details](https://docs.digitalocean.com/products/snapshots/details/)
  - [Features](https://docs.digitalocean.com/products/snapshots/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/snapshots/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/snapshots/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/snapshots/details/limits/)
- [Support](https://docs.digitalocean.com/products/snapshots/support/)

- [How-Tos](https://docs.digitalocean.com/products/snapshots/how-to/)
- Create Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Volumes from Snapshots

Validated on 31 Oct 2019 • Last edited on 18 Dec 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

You can use any volume snapshot to create new volumes in the same region.

## Create a Volume from a Snapshot using the Control Panel

In the control panel’s left menu, click **Backups & Snapshots**, then click the **Snapshots** tab. In the **Snapshots** section, click the **Volumes** tab to view [all volume snapshots in your account](https://cloud.digitalocean.com/images/snapshots/volumes).

From there, open the **More** menu of the snapshot you want to use and click **Create Volume** to create a new volume based on it. In the window that opens, you can choose options for the new volume.

![Create volume window](https://docs.digitalocean.com/screenshots/snapshots/create-volume.10afd29c426f43fd6b74d200c3a13c87338ae24e124190edb7b2aba69a9813fa.png)

Choose a preset volume size or enter a custom volume size, either of which must be at least as big as the original volume used to create the snapshot. Next, select a Droplet to attach the volume to. The Droplet must be in a region which supports block storage. Finally, enter a name for the volume, and click **Create Volume** to create a new volume from the snapshot.

## Create a Volume from a Snapshot using Automation

To create a new volume from a snapshot, use the following volume creation `doctl` command or API endpoint, and set the `snapshot` field the snapshot’s image ID.

How to Create a Block Storage Volume Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute volume create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/create/) for more details:




```shell
doctl compute volume create <volume-name> [flags]
```



The following example creates a 4TiB volume named `example-volume` in the `nyc1` region. The command also applies two tags to the volume:




```shell
doctl compute volume create example-volume --region nyc1 --size 4TiB --tag frontend,backend
```


How to Create a New Block Storage Volume Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/volumes`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/volumes_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"size_gigabytes":10, "name": "example", "description": "Block store for examples", "region": "nyc1", "filesystem_type": "ext4", "filesystem_label": "example"}' \
  "https://api.digitalocean.com/v2/volumes"
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

    createRequest := &VolumeCreateRequest{
        Region:        "nyc1",
        Name:          "example",
        Description:   "Block store for examples",
        SizeGigaBytes: 10,
    }

    volume, _, err := client.Storage.CreateVolume(ctx, createRequest)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

volume = DropletKit::Volume.new(
  size_gigabytes: 10,
  name: 'Example',
  description: 'Block store for examples',
  region: 'nyc1'
)
client.volumes.create(volume)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "size_gigabytes": 10,
  "name": "ext4-example",
  "description": "Block store for examples",
  "region": "nyc1",
  "filesystem_type": "ext4",
  "filesystem_label": "ext4_volume_01"
}

resp = client.volumes.create(body=req)
```

In this article...

- [Create a Volume from a Snapshot using the Control Panel](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/#create-a-volume-from-a-snapshot-using-the-control-panel)
- [Create a Volume from a Snapshot using Automation](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/#create-a-volume-from-a-snapshot-using-automation)

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