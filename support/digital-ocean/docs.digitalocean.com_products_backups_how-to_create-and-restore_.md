---
url: "https://docs.digitalocean.com/products/backups/how-to/create-and-restore/"
title: "How to Create or Restore Droplets from Backups | DigitalOcean Documentation"
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
- Create or Restore Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create or Restore Droplets from Backups

Validated on 1 Aug 2024 • Last edited on 18 Dec 2024

Backups are automatically-created disk images of Droplets. Enabling backups for Droplets enables system-level backups at weekly or daily intervals, which provides a way to revert to an older state or create new Droplets.

You can use backups as the base image for new Droplets. This is useful to create additional Droplets with the same data and configuration as the original, or to view or restore a small number of files to the original Droplet.

You can also restore an existing Droplet to one of its backups, replacing the original Droplet with one based on the backup image. This is useful if you want to completely revert a Droplet to an older point in time, but you lose any changes on the Droplet from after the backup was taken.

## Create New Droplets from Backups

### Using the Control Panel

To use a backup as the base image for a new Droplet, from the [control panel](https://cloud.digitalocean.com/), click the name of the Droplet with the backup you want to use, then click **Backups**.

In the **Droplet backups** section, open the **More** menu of the backup you want to use and choose **Create Droplet**.

![Droplet backups with the More menu open](https://docs.digitalocean.com/screenshots/backups/backup-page.93a989cc3efb842fd6d7abf9857a48a25cad1ddfc76f34d80ff7e24c368ad73d.png)

This brings you to the Droplet create screen with the image for that backup selected. Choose the rest of the Droplet options.

Note
To preserve data integrity, you must select a disk size equal to or larger than the Droplet used to create the backup.

Finally, click **Create** to create a Droplet based on the selected backup.

Once the new Droplet is created, you can copy files between the original and new Droplet using file transfer tools like `scp` or [`rsync`](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Using the API or CLI

You can create new Droplets from backups using the Droplet creation `doctl` command or API endpoint, and setting the `image` field to the backup image’s ID.

How to Create a New Droplet From a Backup Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute droplet create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/create/) for more details:




```shell
doctl compute droplet create <droplet-name>... [flags]
```



The following example creates a Droplet named `example-droplet` with a two vCPUs, two GiB of RAM, and 20 GBs of disk space. The Droplet is created in the `nyc1` region and is based on the `ubuntu-20-04-x64` image. Additionally, the command uses the `--user-data` flag to run a Bash script the first time the Droplet boots up:

doctl compute droplet create example-droplet –size s-2vcpu-2gb –image ubuntu-20-04-x64 –region nyc1 –user-data $’#!/bin/bash\\n touch /root/example.txt; sudo apt update;sudo snap install doctl'

Please note: In Windows Powershell, the example command would be the following instead:

````
```shell
doctl compute droplet create example-droplet --size s-2vcpu-2gb --image ubuntu-20-04-x64 --region nyc1  --user-data "#!/bin/bash`n touch /root/example.txt; sudo apt update;sudo snap install doctl"
```
````

How to Create a New Droplet From a Backup Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/droplets`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/droplets_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"example.com","region":"nyc3","size":"s-1vcpu-1gb","image":"ubuntu-20-04-x64","ssh_keys":[289794,"3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45"],"backups":true,"ipv6":true,"monitoring":true,"tags":["env:prod","web"],"user_data":"#cloud-config\nruncmd:\n  - touch /test.txt\n","vpc_uuid":"760e09ef-dc84-11e8-981e-3cfdfeaae000"}' \
  "https://api.digitalocean.com/v2/droplets"
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

    createRequest := &godo.DropletCreateRequest{
        Name:   "example.com",
        Region: "nyc3",
        Size:   "s-1vcpu-1gb",
        Image: godo.DropletCreateImage{
            Slug: "ubuntu-20-04-x64",
        },
        SSHKeys: []godo.DropletCreateSSHKey{
            godo.DropletCreateSSHKey{ID: 289794},
            godo.DropletCreateSSHKey{Fingerprint: "3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45"}
        },
        Backups: true,
        IPv6: true,
        Monitoring: true,
        Tags: []string{"env:prod","web"},
        UserData: "#cloud-config\nruncmd:\n  - touch /test.txt\n",
        VPCUUID: "760e09ef-dc84-11e8-981e-3cfdfeaae000",
    }
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

droplet = DropletKit::Droplet.new(
  name: 'example.com',
  region: 'nyc3',
  size: 's-1vcpu-1gb',
  image: 'ubuntu-20-04-x64',
  ssh_keys: [289794,"3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45"],
  backups: true,
  ipv6: true,
  monitoring: true,
  tags: ["env:prod","web"],
  user_data: "#cloud-config\nruncmd:\n  - touch /test.txt\n",
  vpc_uuid: "760e09ef-dc84-11e8-981e-3cfdfeaae000",
)
client.droplets.create(droplet)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "example.com",
  "region": "nyc3",
  "size": "s-1vcpu-1gb",
  "image": "ubuntu-20-04-x64",
  "ssh_keys": [\
    289794,\
    "3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45"\
  ],
  "backups": True,
  "ipv6": True,
  "monitoring": True,
  "tags": [\
    "env:prod",\
    "web"\
  ],
  "user_data": "#cloud-config\nruncmd:\n  - touch /test.txt\n",
  "vpc_uuid": "760e09ef-dc84-11e8-981e-3cfdfeaae000"
}

resp = client.droplets.create(body=req)
```

## Restore Droplets from Backups

### Using the Control Panel

To restore a Droplet to one of its backups, from the [control panel](https://cloud.digitalocean.com/), click the name of the Droplet, then click **Backups**. In the **Droplet backups** section, open the **More** menu of the backup you want restore to and choose **Restore Droplet**.

Because restoring a backup to your Droplet erases existing data on that Droplet, confirmation is required to complete the operation:

![Restore Droplet window](https://docs.digitalocean.com/screenshots/backups/restore-droplet.59e17ea0e5e2943d7128812223c681a6a5d3f0f900919f1c1ec8fb16a1278417.png)

In the **Restore Droplet** window, confirm the restoration by clicking **Restore Droplet**.

Restoring from a backup turns your Droplet off during the restoration process and turn it back on automatically once the restoration is complete.

### Using the API or CLI

You can restore a Droplet from a backup using the following command, or by sending a request to the Droplet action endpoint and setting the `restore` field to a backup image’s ID.

How to Restore a Droplet From a Backup Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute droplet-action restore`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/restore/) for more details:




```shell
doctl compute droplet-action restore <droplet-id> [flags]
```



The following example restores a Droplet with the ID `386734086` from a backup image with the ID `146288445`:




```shell
doctl compute droplet-action restore 386734086 --image-id 146288445
```


How to Restore a Droplet From a Backup Using the DigitalOcean API

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

- [Create New Droplets from Backups](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#create-new-droplets-from-backups)
  - [Using the Control Panel](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#using-the-control-panel)
  - [Using the API or CLI](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#using-the-api-or-cli)
- [Restore Droplets from Backups](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#restore-droplets-from-backups)
  - [Using the Control Panel](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#using-the-control-panel-1)
  - [Using the API or CLI](https://docs.digitalocean.com/products/backups/how-to/create-and-restore/#using-the-api-or-cli-1)

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