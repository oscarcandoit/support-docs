---
url: "https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/"
title: "How to Create Droplets from Custom Images | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/custom-images.18f81d068bba467745996fcd3b0f4b004a425f0203fdc37728497614b9531dbf.svg)Custom Images](https://docs.digitalocean.com/products/custom-images/)
- [Getting Started](https://docs.digitalocean.com/products/custom-images/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/custom-images/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
  - [Upload Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/upload/)
  - [Add Additional Regions](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/)
  - [Delete Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/delete/)
  - [Create Droplets](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/)
- [Reference](https://docs.digitalocean.com/products/custom-images/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/image/)
- [Details](https://docs.digitalocean.com/products/custom-images/details/)
  - [Features](https://docs.digitalocean.com/products/custom-images/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/custom-images/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/custom-images/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/custom-images/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
- Create Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Droplets from Custom Images

Validated on 5 Jun 2019 • Last edited on 18 Dec 2024

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

## Create Droplets from Custom Images using Automation

After you [upload a custom image](https://docs.digitalocean.com/products/custom-images/how-to/upload/) to your account, you can create new Droplets from custom images using the Droplet creation `doctl` command or API endpoint and setting the `image` field to the image’s ID.

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

## Create Droplets from Custom Images using the Control Panel

After you [upload a custom image](https://docs.digitalocean.com/products/custom-images/how-to/upload/) to your account, you can create Droplets from that image in two ways:

- During [Droplet creation](https://docs.digitalocean.com/products/droplets/how-to/create/), on the [Droplet create screen](https://cloud.digitalocean.com/droplets/new), in the **Choose an image** section, select the **Custom images** tab and choose the custom image you want to use.

![Droplet create screen with the Custom Images tab open](https://docs.digitalocean.com/screenshots/custom-images/create-choose-custom-image.2f53781b9a6d4eac595683bd5fecd39cdd76e3306c9d7ce0cd97775697163830.png)

- From the **Backups & Snapshots** page, on the **Custom Images** tab, open the **More** menu of the custom image you want to create a Droplet from. Then, click **Start a Droplet**. This takes you to the Droplet create screen with your custom image pre-selected.

![Custom image more menu](https://docs.digitalocean.com/screenshots/custom-images/more-menu.c7f454638be3817115f1c638d877b59ed3cd004f20fa6401d8193ad4a0b3ffa6.png)

Regardless of which method you choose, finish selecting your options on the Droplet create page, and then click **Create Droplet**. You can only create Droplets in the same region as your custom image, but you can [add custom images to other regions](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/).

After your Droplet is created, you can connect to it with SSH.

Note
If you get a prompt to enter a root password and you don’t have one, verify that the version of cloud-init on your image and is at least 0.7.7. You can also try adding your SSH key to the image before you upload it.

In this article...

- [Create Droplets from Custom Images using Automation](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/#create-droplets-from-custom-images-using-automation)
- [Create Droplets from Custom Images using the Control Panel](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/#create-droplets-from-custom-images-using-the-control-panel)

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