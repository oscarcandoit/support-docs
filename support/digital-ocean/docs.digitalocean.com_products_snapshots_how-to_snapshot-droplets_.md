---
url: "https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/"
title: "How to Create Snapshots of Droplets | DigitalOcean Documentation"
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
- Snapshot Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Snapshots of Droplets

Validated on 30 Oct 2019 • Last edited on 18 Dec 2024

Snapshots are on-demand disk images of DigitalOcean Droplets and volumes saved to your account. Use them to create new Droplets and volumes with the same contents.

You can create snapshots from an existing Droplet to save all of the current contents from the Droplet’s disk.

Depending on the services running on the Droplet, you may want to power off the Droplet before taking a snapshot to ensure all applications have written out their data to disk. For example, many databases don’t guarantee data consistency on disk unless the database service is stopped or the entire Droplet is powered off first.

Snapshots of GPU Droplets include the boot disk but not the scratch disk. If the boot disk has a large quantity of data, the size of the resulting backup or snapshot images are larger, and the creation time is proportionally longer.

Creating a snapshot while a Droplet is on may result in performance degradation and compromise data consistency.

## Power Off Droplet and Take a Snapshot (Recommended)

You can power off a Droplet through the control panel or with the command line using `poweroff` or `shutdown`. We recommend using the command line because it makes sure all services are stopped before the Droplet is powered off:

```shell
sudo shutdown -h now
```

However, if you want to power off a Droplet through the control panel, click the Droplet’s name to go to its detail page. Click the **ON** switch in the upper-right corner, then click **Turn off** from the pop-up warning window.

Once the Droplet is powered off, you can take a snapshot from the Droplet’s **Snapshots** menu, in the **Take snapshot** section.

![Take snapshot button](https://docs.digitalocean.com/screenshots/snapshots/take-snapshot.e5a1614921a1748b3ff166993c9330496964438059589f4160060a3c4342e0b5.png)

## Take a Live Snapshot

You can take a live snapshot without powering off your Droplet from the Droplet’s **Snapshots** menu, in the **Take snapshot** section.

![Take live snapshot button](https://docs.digitalocean.com/screenshots/snapshots/take-live-snapshot.7e96f7c86e852eb8192d0c63f5fafc946c3b35b8fadcd1a9ec4d5cb96c5888a2.png)

The **Enter snapshot name** field prefills the Droplet’s name followed by the current [Unix timestamp](https://www.unixtimestamp.com/index.php) to help you identify the snapshot later, but you can customize the name now or after you take it. Click the **Take Snapshot** or **Take Live Snapshot** button to create a snapshot.

A progress bar shows the progress of snapshot creation. Once complete, the snapshot is listed along with any other previous snapshots. To power the Droplet back on, click the **OFF** switch.

## Snapshot a Droplet using Automation

Once the Droplet is powered off, you can snapshot a Droplet using the following `doctl` command, or by sending a request to the Droplet actions endpoint and setting the `type` field to `snapshot`.

How to Snapshot a Droplet Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute droplet-action snapshot`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/snapshot/) for more details:




```shell
doctl compute droplet-action snapshot <droplet-id> [flags]
```


How to Snapshot a Droplet Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/droplets/{droplet_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/dropletActions_post).

### cURL

Using cURL:

```shell
# Enable Backups
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Disable Backups
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"disable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Reboot a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"reboot"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Power cycle a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_cycle"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Shutdown and Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"shutdown"}' \
  "https://api.digitalocean.com/v2/droplets/3067649/actions"

# Power off a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_off"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Power on a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"power_on"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Restore a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"restore", "image": 12389723 }' \
  "https://api.digitalocean.com/v2/droplets/3067649/actions"

# Password Reset a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"password_reset"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Resize a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"resize","size":"1gb"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Rebuild a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"rebuild","image":"ubuntu-16-04-x64"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Rename a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"rename","name":"nifty-new-name"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Change the Kernel
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"change_kernel","kernel":991}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Enable IPv6
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_ipv6"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Enable Private Networking
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_private_networking"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Snapshot a Droplet
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"snapshot","name":"Nifty New Snapshot"}' \
  "https://api.digitalocean.com/v2/droplets/3164450/actions"

# Acting on Tagged Droplets
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"enable_backups"}' \
  "https://api.digitalocean.com/v2/droplets/actions?tag_name=awesome"

# Retrieve a Droplet Action
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/droplets/3164444/actions/36804807"
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
// Enable Backups
    action, _, err := client.DropletActions.EnableBackups(ctx, 3164450)

// Disable Backups
//  action, _, err := client.DropletActions.DisableBackups(ctx, 3164450)

// Reboot a Droplet
//  action, _, err := client.DropletActions.Reboot(ctx, 3164450)

// Power Cycle a Droplet
//  action, _, err := client.DropletActions.PowerCycle(ctx, 3164450)

// Shutdown a Droplet
//  action, _, err := client.DropletActions.Shutdown(ctx, 3067649)

// Power Off a Droplet
//  action, _, err := client.DropletActions.PowerOff(ctx, 3164450)

// Power On a Droplet
//  action, _, err := client.DropletActions.PowerOn(ctx, 3164450)

// Restore a Droplet
//  action, _, err := client.DropletActions.Restore(ctx, 3164449, 12389723)

// Password Reset a Droplet
//  action, _, err := client.DropletActions.PasswordReset(ctx, 3164450)

// Resize a Droplet
//  action, _, err := client.DropletActions.Resize(ctx, 3164450, "1gb", true)

// Rebuild a Droplet
//  action, _, err := client.DropletActions.RebuildByImageSlug(ctx, 3164450, "ubuntu-16-04-x64")

// Rename a Droplet
//  action, _, err := client.DropletActions.Rename(ctx, 3164450, "nifty-new-name")

// Change the Kernel
//  action, _, err := client.DropletActions.ChangeKernel(ctx, 3164450, 991)

// Enable IPv6
//  action, _, err := client.DropletActions.EnableIPv6(ctx, 3164450)

// Enable Private Networking
//  action, _, err := client.DropletActions.EnablePrivateNetworking(ctx, 3164450)

// Snapshot a Droplet
//  action, _, err := client.DropletActions.Snapshot(ctx, 3164450, "Nifty New Snapshot")

// Retrieve a Droplet Action
//  action, _, err := client.DropletActions.Get(ctx, 3164450, 36804807)

}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Enable Backups
client.droplet_actions.enable_backups(droplet_id: 3164450)

# Disable Backups
# client.droplet_actions.disable_backups(droplet_id: 3164450)

# Reboot a Droplet
# client.droplet_actions.reboot(droplet_id: 3164450)

# Power Cycle a Droplet
# client.droplet_actions.power_cycle(droplet_id: 3164450)

# Shutdown a Droplet
# client.droplet_actions.shutdown(droplet_id: 3067649)

# Power Off a Droplet
# client.droplet_actions.power_off(droplet_id: 3164450)

# Power On a Droplet
# client.droplet_actions.power_on(droplet_id: 3164450)

# Restore a Droplet
# client.droplet_actions.restore(droplet_id: 3067649, image: 12389723)

# Password Reset a Droplet
# client.droplet_actions.password_reset(droplet_id: 3164450)

# Resize a Droplet
# client.droplet_actions.resize(droplet_id: 3164450, size: '1gb')

# Rebuild a Droplet
# client.droplet_actions.rebuild(droplet_id: 3164450, image: 'ubuntu-16-04-x64')

# Rename a Droplet
# client.droplet_actions.rename(droplet_id: 3164450, name: 'nifty-new-name')

# Change the Kernel
# client.droplet_actions.change_kernel(droplet_id: 3164450, kernel: 991)

# Enable IPv6
# client.droplet_actions.enable_ipv6(droplet_id: 3164450)

# Enable Private Networking
# client.droplet_actions.enable_private_networking(droplet_id: 3164450)

# Snapshot a Droplet
# client.droplet_actions.snapshot(droplet_id: 3164450, name: 'Nifty New Snapshot')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

# enable back ups example
req = {
  "type": "enable_backups"
}

resp = client.droplet_actions.post(droplet_id=346652, body=req)
```

In this article...

- [Power Off Droplet and Take a Snapshot (Recommended)](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/#power-off-droplet-and-take-a-snapshot-recommended)
- [Take a Live Snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/#take-a-live-snapshot)
- [Snapshot a Droplet using Automation](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/#snapshot-a-droplet-using-automation)

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