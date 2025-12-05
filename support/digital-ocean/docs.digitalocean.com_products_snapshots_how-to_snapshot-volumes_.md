---
url: "https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/"
title: "How to Create Snapshots of Volumes | DigitalOcean Documentation"
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
- Snapshot Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Snapshots of Volumes

Validated on 31 Oct 2019 • Last edited on 18 Dec 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

You can take snapshots of [volumes](https://docs.digitalocean.com/products/volumes/). Volume snapshots save all the contents from the volume, and you can use them to create new volumes. By default, the data on volumes and their snapshots is encrypted at rest.

The same general guidelines apply for creating snapshots of volumes as apply with [snapshots of Droplets](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/): if there are applications that are actively writing to the volume, you should power off the Droplet attached to the volume before taking a snapshot to ensure data consistency.

Note

Because snapshots of volumes operate at the block storage level, the snapshot size may not match what the filesystem reports. For example, filesystems may not immediately mark blocks as unused, which makes the block storage system include them in snapshots even though they don’t contain data.

You can trim or discard unused blocks to make your snapshots smaller and therefore less expensive. [Configuring periodic `fstrim`](https://www.digitalocean.com/community/tutorials/how-to-configure-periodic-trim-for-ssd-storage-on-linux-servers) or mounting your volume with the discard option helps ensure that the block storage system knows which blocks are used and which are not.

## Snapshot a Volume using the Control Panel

To create a snapshot of a volume from the control panel, in the left menu, click **Droplets**, then click the **Volumes** tab. Open the **More** menu for the volume you want to snapshot, then click **Take Snapshot**.

![Volumes more menu](https://docs.digitalocean.com/screenshots/volumes/more-menu-attached.7a2fe22a5c7846e6eccf794c1555161f15cac8cf73da48e079705cc908cb8e01.png)

The window that opens lets you customize the name of the snapshot. Enter the name you’d like to use or accept the default, then click **Take Snapshot** to create a new snapshot.

## Snapshot a Volume using Automation

How to Create a Block Storage Volume Snapshot Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute volume snapshot`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/snapshot/) for more details:




```shell
doctl compute volume snapshot <volume-id> [flags]
```



The following example creates a snapshot of a volume with the UUID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`:




```shell
doctl compute volume snapshot f81d4fae-7dec-11d0-a765-00a0c91e6bf6 --snapshot-name example-snapshot --tag frontend,backend
```


How to Create Snapshot From a Volume Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/volumes/{volume_id}/snapshots`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/volumeSnapshots_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"big-data-snapshot1475261774", "tags":["aninterestingtag"]}' \
  "https://api.digitalocean.com/v2/volumes/82a48a18-873f-11e6-96bf-000f53315a41/snapshots"
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

    snapshot, _, err := client.Storage.CreateSnapshot(ctx, &godo.SnapshotCreateRequest{
      VolumeID:    "82a48a18-873f-11e6-96bf-000f53315a41",
      Name:        "my snapshot",
      Description: "my description",
      Tags:        []string{"one", "two"},
    })
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.volumes.create_snapshot(id: "82a48a18-873f-11e6-96bf-000f53315a41", name: "big-data-snapshot1475261774")
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "big-data-snapshot1475261774"
}

resp = client.volume_snapshots.create(volume_id="da3aa3a", body=req)
```

In this article...

- [Snapshot a Volume using the Control Panel](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/#snapshot-a-volume-using-the-control-panel)
- [Snapshot a Volume using Automation](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/#snapshot-a-volume-using-automation)

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