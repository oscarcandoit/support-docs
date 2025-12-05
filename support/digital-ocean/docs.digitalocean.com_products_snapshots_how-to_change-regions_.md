---
url: "https://docs.digitalocean.com/products/snapshots/how-to/change-regions/"
title: "How to Add Droplet Snapshots to Other Regions | DigitalOcean Documentation"
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
- Add Snapshots to Regions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add Droplet Snapshots to Other Regions

Validated on 31 Oct 2019 • Last edited on 18 Dec 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

By default, a Droplet snapshot is only available in the region where it was created. If you want to use a snapshot to create Droplets in other regions, you need to add the snapshot to those regions first. It doesn’t cost more to add a snapshot to more regions.

You cannot transfer volume snapshots to other regions. As an alternative, you can use you can use tools like [SnapShooter](https://docs.digitalocean.com/products/snapshooter/), [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps) or [SFTP](https://www.digitalocean.com/community/tutorials/how-to-use-filezilla-to-transfer-and-manage-files-securely-on-your-vps) to transfer the data to a new volume created in the target region.

## Add a Droplet Snapshot to Other Regions using Automation

How to Add an Image to a Region Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute image-action transfer`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/image-action/transfer/) for more details:




```shell
doctl compute image-action transfer <image-id> [flags]
```



The following example transfers an image with the ID 386734086 to the region with the slug nyc3:




```shell
doctl compute image-action transfer 386734086 --region nyc3
```


How to Add an Image to a Region Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/images/{image_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/imageActions_post).

### cURL

Using cURL:

```shell
# Transfer an Existing Image
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"transfer","region":"nyc2"}' \
  "https://api.digitalocean.com/v2/images/7938269/actions"

# Convert an Image into a Snapshot
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"convert"}' \
  "https://api.digitalocean.com/v2/images/7938291/actions"
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

    // Transfer an existing image
    transferRequest := &godo.ActionRequest{
        "type":   "transfer",
        "region": "nyc2",
    }
  # Transfer an Image
    transfer, _, err := client.ImageActions.Transfer(ctx, 7938269, transferRequest)

  # Convert an Image to a Snapshot
  # client.image_actions.convert(image_id: 7938269)

}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Transfer an Image
client.image_actions.transfer(image_id: 7938269, region: 'nyc2')

# Convert an Image to a Snapshot
# client.image_actions.convert(image_id: 7938269)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "type": "convert"
}
resp = client.image_actions.post(image_id=342341, body=req)
```

## Add a Droplet Snapshot to Other Regions using the Control Panel

To add a Droplet snapshot to another region, click the source Droplet’s name. On the Droplet’s detail page, click **Snapshots** in the left menu. Open the snapshot’s **More** menu and click **Add to region** to open the **Snapshot availability** window.

![Changing snapshot regions](https://docs.digitalocean.com/screenshots/snapshots/change-regions.797dc08f5905170ae31f05b74b894d234482bb54a47979cfc2a801fc767a5525.png)

Click each region you want to make the snapshot available in. A spinner displays as the snapshot image is added, which may take several minutes. When the snapshot becomes available in a region, the spinner stops and the region is no longer selectable.

Once the snapshot is added to the new region, you can [use it to create new Droplets](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/).

In this article...

- [Add a Droplet Snapshot to Other Regions using Automation](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/#add-a-droplet-snapshot-to-other-regions-using-automation)
- [Add a Droplet Snapshot to Other Regions using the Control Panel](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/#add-a-droplet-snapshot-to-other-regions-using-the-control-panel)

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