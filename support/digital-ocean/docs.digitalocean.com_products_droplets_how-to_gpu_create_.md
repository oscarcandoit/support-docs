---
url: "https://docs.digitalocean.com/products/droplets/how-to/gpu/create/"
title: "How to Create DigitalOcean Gradient™ AI GPU Droplets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
    - [Create GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/)
    - [Use the Scratch Disk](https://docs.digitalocean.com/products/droplets/how-to/gpu/use-scratch-disk/)
    - [Enable GPU Metrics](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/)
    - [Enable Jumbo Frames](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-jumbo-frames/)
    - [Use Container Tools](https://www.digitalocean.com/community/tutorials/how-to-use-nvidia-container-tools-with-gpu-droplets)
    - [Configure Multi-Node Setups](https://docs.digitalocean.com/products/droplets/how-to/gpu/configure-multi-node/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
- Create GPU Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create DigitalOcean Gradient™ AI GPU Droplets

Validated on 3 Nov 2025 • Last edited on 10 Nov 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

GPU Droplets have GPUs in a single or 8 GPU configuration. They also come with two different kinds of storage: a boot disk for persistent data and a scratch disk for non-persistent data. [Learn more about GPU Droplet plans and features](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).

We provide AI/ML-ready images for GPU Droplets that have drivers and software from AMD and NVIDIA preinstalled, as well as preconfigured [1-Click Models powered by Hugging Face](https://docs.digitalocean.com/products/marketplace/1-click-models/). You can also create GPU Droplets with existing Droplet images, but you need to manually install drivers and other software to use the GPUs.

Note
If you are a newer DigitalOcean customer, we may charge your team’s primary payment method partway through the monthly billing cycle when you create GPU Droplets, but your total cost is not increased. This is a precautionary measure to prevent abuse of our platform.

## Create a GPU Droplet in the Control Panel

After you [log in to the control panel](https://cloud.digitalocean.com/login), click the green **Create** button in the top right to open the **Create** menu, then click **GPU Droplets** to go to the GPU Droplet creation page.

![](https://docs.digitalocean.com/images/icons/digitalocean.svg)

GPU Droplet Creation Page — DigitalOcean Control Panel

Create a GPU Droplet with the resources you choose.

digitalocean.com

This page has similar sections as the [regular Droplet creation page](https://docs.digitalocean.com/products/droplets/how-to/create/), like choosing a datacenter region and SSH keys, and some different options:

- **Choose an image**. We provide [AI/ML-ready images for AMD and NVIDIA GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/#aiml-ready-image) which have drivers and software pre-installed. You can also use [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/) which let you deploy popular third-party models directly to GPU Droplets.

GPU Droplets also work with existing Droplet images, but you need to [manually install GPU drivers](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/).

- **Choose a GPU plan**. We offer a single GPU plan and an 8 GPU plan. GPU Droplets also come with a [scratch disk](https://docs.digitalocean.com/products/droplets/how-to/gpu/use-scratch-disk/), which is a non-persistent disk to store data for staging purposes.

- **Enable Metrics.** Select **Improved Metrics and Monitoring** to enable [**GPU Observability** in **Insights**](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) automatically, allowing `do-agent` to detect the GPU type and integrate with the appropriate exporter (DGCM for NVIDIA or ROCm for AMD) to collect and send GPU metrics securely. For details about available GPU metrics, see the [Monitoring Metrics page](https://docs.digitalocean.com/products/monitoring/concepts/metrics/).

For **Basic Images**, you can enable GPU metrics by [manually installing the exporter](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/), binding it to `127.0.0.1`, reconfiguring `do-agent` to scrape it, and restarting `do-agent`.

- If you want to [enable jumbo frames](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-jumbo-frames/), you can do so with user data during creation.


Once you finish selecting your options, click **Create GPU Droplet**. GPU Droplets generally take longer than non-GPU Droplets to initialize, particularly for 8 GPU Droplets, so allow some time for this process to finish.

## Create a GPU Droplet Using the DigitalOcean API or CLI

When creating a GPU Droplet using the DigitalOcean API or CLI, you need to provide values for:

- The `region`, the string for the desired datacenter.
- The `size`, the slug that specifies the Droplet plan.
- The `image`, the slug that specifies the base image.

You can view [slugs for all GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets) and [more information on AI/ML-ready and inference-optimized images](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/).

How to Create a New Droplet Using the DigitalOcean CLI

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

How to Create a New Droplet Using the DigitalOcean API

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

In this article...

- [Create a GPU Droplet in the Control Panel](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/#create-a-gpu-droplet-in-the-control-panel)
- [Create a GPU Droplet Using the DigitalOcean API or CLI](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/#create-a-gpu-droplet-using-the-digitalocean-api-or-cli)

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