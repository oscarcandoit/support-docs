---
url: "https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/"
title: "How to Convert Backups to Snapshots | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/backups.8f2953b640369857d8e09577aab7309b64ba37e4be8cbad0f0514549bf449bd6.svg)Backups](https://docs.digitalocean.com/products/backups/)
- [Getting Started](https://docs.digitalocean.com/products/backups/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/backups/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/backups/how-to/)
  - [Enable Backups](https://docs.digitalocean.com/products/backups/how-to/enable/)
  - [Create or Restore Droplets](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/)
  - [Convert Backups to Snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/)
  - [Disable Backups](https://docs.digitalocean.com/products/backups/how-to/disable/)
- [Reference](https://docs.digitalocean.com/products/backups/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Backups)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backups/)
- [Details](https://docs.digitalocean.com/products/backups/details/)
  - [Features](https://docs.digitalocean.com/products/backups/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/backups/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/backups/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/backups/details/limits/)
- [Support](https://docs.digitalocean.com/products/backups/support/)

- [How-Tos](https://docs.digitalocean.com/products/backups/how-to/)
- Convert Backups to Snapshots

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Convert Backups to Snapshots

Validated on 1 Aug 2024 • Last edited on 23 Jan 2025

Backups are automatically-created disk images of Droplets. Enabling backups for Droplets enables system-level backups at weekly or daily intervals, which provides a way to revert to an older state or create new Droplets.

Backups and [snapshots](https://docs.digitalocean.com/products/snapshots/) are both disk images of Droplets. We retain weekly backups for four weeks and daily backups for seven days, and we retain snapshots until you choose to delete them.

If you want to keep a backup indefinitely, you can convert it to a snapshot. When you convert a backup to a snapshot, [snapshot pricing](https://docs.digitalocean.com/products/snapshots/details/pricing/) applies.

## Convert to a Snapshot

### Using the Control Panel

To convert a backup to a snapshot from the [control panel](https://cloud.digitalocean.com/images/backups), click the Droplet’s name to go to its detail page, then click **Backups** in the left menu.

Find the backup that you want to convert. Click **More** to open the drop-down menu, then click **Convert to snapshot**.

![The backup list for a Droplet with the More menu of a specific backup opened](https://docs.digitalocean.com/screenshots/backups/backup-page.93a989cc3efb842fd6d7abf9857a48a25cad1ddfc76f34d80ff7e24c368ad73d.png)

You can [create Droplets based on snapshots](https://docs.digitalocean.com/products/snapshots/how-to/create-and-restore-droplets/) and [copy snapshots to additional datacenter regions](https://docs.digitalocean.com/products/snapshots/how-to/change-regions/).

### Using the API

To convert a backup to a snapshot using the API, use the image actions endpoint and set the `type` field to `convert`.

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

In this article...

- [Convert to a Snapshot](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/#convert-to-a-snapshot)
  - [Using the Control Panel](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/#using-the-control-panel)
  - [Using the API](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/#using-the-api)

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