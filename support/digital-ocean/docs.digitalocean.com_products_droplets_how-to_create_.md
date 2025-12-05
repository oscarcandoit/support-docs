---
url: "https://docs.digitalocean.com/products/droplets/how-to/create/"
title: "How to Create a Droplet | DigitalOcean Documentation"
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
- Create Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a Droplet

Validated on 28 Oct 2022 • Last edited on 1 Oct 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## Create a Droplet in the Control Panel

The Droplet create page is where you choose your Droplet’s configuration, like its operating system, how much memory it has, and which features (like backups or monitoring) to enable. The most popular defaults are pre-selected, so you can scroll to the bottom of the page and create a Droplet immediately, or you can customize any of the options in each section.

To access the DigitalOcean Control Panel and create a Droplet, you need a DigitalOcean account. You can create one from [the DigitalOcean new account registration page](https://cloud.digitalocean.com/registrations/new) if you don’t already have one.

After you [log in to the control panel](https://cloud.digitalocean.com/login), click the green **Create** button in the top right to open the create menu.

![Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

In the create menu, click **Droplets** to open the Droplet create page. If you don’t have any Droplets, the **Resources** tab displays a large, blue **Get Started with a Droplet** button, which takes you to the same Droplet create page.

### Choose Region

In the **Choose Region** section, select the region where you want to create your Droplet.

A good default is selected for you, but for the best performance and minimal latency, choose the datacenter nearest to you and your users. You can also make a decision based on [which products and features are available in which regions](https://docs.digitalocean.com/platform/regional-availability/).

![The Choose Region section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/choose-region.d011879df45e3e0181f08f93d19a25e0315f8f16dc777a028424d58f86327995.png)

The create page greys out datacenters that are incompatible with your selected configuration and adds a tooltip with an explanation. For example, if you add a block storage volume to your configuration, you cannot create your Droplet in a datacenter that doesn’t support volumes.

This section also lists the default [VPC network](https://docs.digitalocean.com/products/networking/vpc/) for the Droplet. The VPC network enables an additional networking interface that can only be accessed by other Droplets within the same datacenter. This keeps traffic between Droplets and other applicable resources from being routed outside the datacenter over the public internet.

### Choose an image

In the **Choose an image** section, you choose the image to use for your Droplet:

![The Choose an image section of the Droplet creation page](https://docs.digitalocean.com/screenshots/droplets/create/choose-an-image.c7b5545363f2e949efccfad579cfee9bf493f86328467acc65dbbdaed6a6898f.png)

Initially, you can choose from four categories of images:

- **OS** includes basic Unix-like images with no additional software (like Ubuntu, Fedora, and Debian).

- **[Marketplace](https://docs.digitalocean.com/products/marketplace/)** images include pre-configured applications, like [Docker](https://marketplace.digitalocean.com/apps/docker), [WordPress](https://marketplace.digitalocean.com/apps/wordpress), or [LAMP](https://marketplace.digitalocean.com/apps/lamp), to help simplify getting started.

Some Marketplace images, like WordPress, let you add a [managed database cluster](https://docs.digitalocean.com/products/databases/) during creation. Connection credentials for the database cluster are available [in the control panel](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connection-details), in a file on the Droplet (`/root/.digitalocean_dbaas_credentials`, and MongoDB certificates at `/root/dbaas_ca_cert.crt`), and are exported as environment variables on the Droplet from `/etc/environment`.

- **[Custom images](https://docs.digitalocean.com/products/custom-images/)** are Unix-like images that you create and upload to your DigitalOcean team.


Once you start using Droplets, you can [make backups](https://docs.digitalocean.com/products/backups/) and [take snapshots](https://docs.digitalocean.com/products/snapshots/) of them. On the Droplet creation page, tabs for **Backups** and **Snapshots** list the backups and snapshots you’ve taken, if any. You can choose those images as the foundation to create new Droplets.

- **[Snapshots](https://docs.digitalocean.com/products/snapshots/)** are on-demand Droplet and volume images. They’re useful to manually back up or reproducibly create Droplets.

- **[Backups](https://docs.digitalocean.com/products/backups/)** are automatic system-level backups taken weekly, daily, or multiple times a day. You can use backups to rebuild an existing Droplet. We retain weekly backups for four weeks, and daily backups for seven days. You can customize how long we retain usage-based backups for.


### Choose Size

In the **Choose Size** section, you choose the amount of RAM, storage space, and CPU cores for your Droplet.

![The Choose Size section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/choose-size.1e141505aa37ca99c65e3c4139b8621301f8097de0a6c1afe97a4c55bc7747bd.png)

There are five types of plans:

- **Basic Droplets**, a flexible option best for most use cases, like website hosting, staging environments and low intensity compute needs.

- **General Purpose Performance Droplets**, a robust option suitable for a wide variety of mainstream, production applications that require a higher ratio of memory to CPU.

- **CPU-Optimized Performance Droplets**, best for CPU intensive tasks and projects that require predictable performance or rely on CPU more than RAM or I/O, like batch processing large data sets, large builds, and video encoding. You can also choose between Regular and Premium Intel CPUs. Premium CPU plans come with some of our most modern Intel CPUs, NVMe SSDs, and higher network throughput speeds.

- **Memory-Optimized Performance Droplets**, best for resource-intensive business applications, like high-performance SQL or NoSQL databases, large in-memory caches and indexes, real-time big data processing, and applications with large JVM requirements.

- **Storage-Optimized**, best for large NoSQL databases (like MongoDB and Elasticsearch), time series databases, and other data warehouses.


For each plan, you can choose Regular and Premium CPUs. Premium CPU plans come with some of our most modern Intel or AMD CPUs and NVMe SSDs, as well as higher bandwidth throughput.

See [How To Choose a Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/) for an in-depth guide to choosing a Droplet plan.

Note
For Droplets with less than 3 GB of RAM, we recommend using a 32-bit operating system. Processes require more memory on 64-bit architectures, and on servers with a limited quantity of RAM, any performance benefits from a 64-bit OS are offset by having less memory available for buffers and caching.

### Additional Storage

In the **Additional Storage** section, you can create and attach additional [DigitalOcean Volumes Block Storage](https://docs.digitalocean.com/products/volumes/) volumes to your Droplet. When you click **Add Volume**, you can specify the details of the volume you want to create:

![The Additional Storage section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/additional-storage.c8540bf72f1379aab6d86233a559d5dec8b64d8b19cbca383ce1a9d27c262723.png)

Volumes are independent resources that can be moved from one Droplet to another within the same datacenter. Attached volumes function like locally connected storage drives, meaning you can manage your storage with familiar tools and techniques.

## Enable Backups

You can turn on automatic [backups](https://docs.digitalocean.com/products/backups/) for the Droplet. This adds a cost to the Droplet’s price depending on the frequency of the backups.

In the recommended options section, check **Enable automated backups**.

![](https://docs.digitalocean.com/screenshots/backups/enable-backups.d1a89450425a70ba7511c7529e488867e56aa6b48ef4ccd7ccaa409d5a52a787.png)

Here, you can select between basic plans ( **Plans**) and usage-based plans ( **Usage-Based**):

- Basic plans are divided into **Weekly Backups** and **Daily Backups**, and are billed as a percentage of the Droplet’s monthyl cost.
- In public preview, usage-based plans are customizable, and are billed at a flat rate per GiB of backups stored. You can configure the **Backup Frequency**, which refers to how often backups happen (from weekly to every six hours), and **Backup Retention**, which refers to how long you retain them. To gain access to this feature or provide feedback, [fill in our form](https://docs.google.com/forms/d/e/1FAIpQLSfE6K454v6sDy3Rp7Fo__I4tF7-F3g4DzAZ9SWG7FygxDKd_w/viewform?usp=sharing&ouid=101196022077631217824) or [contact support](https://cloudsupport.digitalocean.com/).

The backup window is a 4-hour window of time during which the Droplet automatically initiates a new backup. In the **Backup Window** section, use the drop-down menus to customize your Droplet’s backup window by choosing a time of day and, for weekly backups, a day of the week.

If you’re [using the API to create a Droplet](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create), you can enable backups by adding `"backups": true` to the request body.

## Choose Authentication Method

In the **Choose Authentication Method** section, you choose the method you want to use to log in to your Droplet.
![The Choose Authentication Method section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/choose-authentication-method.e21888b309094ea51da2471087f9ddc56e1cf76da4f8ca9af31c5e98d0e0bdac.png)
There are two options:

- **SSH key**, which provide more security than a password.

- **Password**, which allows you to create your own password for the new Droplet.
If you choose to use SSH keys, you need to select at least one key to add to the Droplet. Any keys you’ve already uploaded to your DigitalOcean team are listed.


Check the boxes next to the existing keys you want to add to the Droplet, or check **Select all** to add every key on your team. You can also click **New SSH Key** to upload a new key to your team from the create page.

Once you [create and upload an SSH key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) to your DigitalOcean team, it remains available for you to add to any new Droplets you provision in the future.

## Recommended and Advanced Options

In the **We recommend these options** section, you can enable several optional services that add functionality to your Droplet.

![The recommended options section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/we-recommend-these-options.3a82cd8b05ae37bf6cd786a3b6e89192ff3478f352beac9293cdb32aa73739d0.png)

Most features available in this section are free, meaning that enabling them does not increase the Droplet’s monthly cost:

- **[Monitoring](https://docs.digitalocean.com/products/monitoring/)** (free) adds the [DigitalOcean agent](https://docs.digitalocean.com/products/monitoring/#what-is-the-digitalocean-agent) to collect extended metrics and [create alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/#create-control).

There are additional options available by expanding **+Advanced Options**:

![The advanced options section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/advanced-options.cde61ff2a33d464586c34af97c73b53dee91fe27bc2cbd85aa30ce927b9f19c9.png)

- **[IPv6](https://docs.digitalocean.com/products/networking/ipv6/)** (free) enables IPv6 access for your Droplet.

- **[User data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)** (free) is arbitrary data, most often a [cloud-config file](https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-config-scripting) or a Bash script, that you can supply to a Droplet during creation. Droplets running distributions with `cloud-init` can consume and execute user data, which is a common way to initially configure the Droplet on first boot.


### Finalize Details

In the **Finalize Details** section, you specify the quantity, name, tags, and project for the Droplet you’re creating.

![The Finalize Details section of the Droplet creation page.](https://docs.digitalocean.com/screenshots/droplets/create/finalize-details.98562fdb01a6785ed3804ddbf319f2a2c61cce65e7de900d0c269a12320c02f8.png)

There are four subsections for these options:

- **Quantity**, where you choose the quantity of Droplets you’re creating with the specified configuration. Adjust the number by clicking the plus, **+**, or minus, **-**, buttons.

- **Hostname**, where you give each Droplet a name which is used in the control panel and as the server’s hostname. Default names are provided based on the options you selected, but you can modify them to suit your needs.
Note
Using [an FQDN (fully qualified domain name)](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/) (for example, `droplet1.example.com`) as the Droplet’s name automatically generates [PTR records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#ptr-rdns-records) for your Droplet based on that name. This also applies if you rename a Droplet after creation.

- **Tags**, where you can [add tags to organize and relate Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/).

- **Project**, where you can [assign the Droplet to a project](https://docs.digitalocean.com/products/projects/).


Once you have selected your options, click **Create Droplet**. A progress bar displays how close your Droplet is to being ready.

![Screenshot of progress bar](https://docs.digitalocean.com/screenshots/droplets/creation-progress-bar.f0c7354a5755567780ad91ce7f4d2fd1dd73292d3b8875e71cf2451ee3c029cb.png)

You can also click **Create via command line** to get a command that you can copy and paste onto the command line to create Droplets with the configuration you selected. You can choose from two libraries: `cURL` and [`doctl`](https://docs.digitalocean.com/reference/doctl/), the official DigitalOcean command line utility.

Once the Droplet is fully set up, the control panel displays its IP address.

![Screenshot of installed Droplet](https://docs.digitalocean.com/screenshots/droplets/creation-complete.b30b824f2f7a8a077389ed869e8aef51fb70dff8a3e14c87ae981e3e1dc7adb3.png)

Once you see the IP address, you can [log in to your Droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/).

To go to a Droplet’s detail page where you can make changes, click its name or go straight to the task you want using the More menu. You can also get a quick view of the Droplet’s details by clicking the icon by the Droplet’s name.

![Screenshot of Droplet with expanded information](https://docs.digitalocean.com/screenshots/droplets/expanded-info.b416e47862a856606d5747b093dc22bfc1476bf6c16253ae10a88439f3a1bbef.png)

## Create a Droplet Using Automation

You can also create Droplets using the [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/) or the [DigitalOcean’s official CLI](https://docs.digitalocean.com/reference/doctl/), `doctl`.

### Create a Droplet Using the CLI

When creating a Droplet via CLI, you need to provide values for the `--region`, `--size`, and `--image` flags, which specify the desired datacenter, machine size, and operating system for your new Droplet. Use [`doctl compute region list`](https://docs.digitalocean.com/reference/doctl/reference/compute/region/list/), [`doctl compute size list`](https://docs.digitalocean.com/reference/doctl/reference/compute/size/list/), and [`doctl compute image list-distribution`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-distribution/), respectively, to get a list of available values.

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

### Create a Droplet Using the API

When creating a Droplet via API you need to provide values for `region`, `size`, and `image`, which specify the desired datacenter, machine size, and operating system for your new Droplet. Use [`/v2/regions`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/regions_list), [`/v2/sizes`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/sizes_list), and [`/v2/images`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/images_list), respectively, to get a list of available values.

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

- [Create a Droplet in the Control Panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel)
  - [Choose Region](https://docs.digitalocean.com/products/droplets/how-to/create/#choose-region)
  - [Choose an image](https://docs.digitalocean.com/products/droplets/how-to/create/#choose-an-image)
  - [Choose Size](https://docs.digitalocean.com/products/droplets/how-to/create/#choose-size)
  - [Additional Storage](https://docs.digitalocean.com/products/droplets/how-to/create/#additional-storage)
- [Enable Backups](https://docs.digitalocean.com/products/droplets/how-to/create/#enable-backups)
- [Choose Authentication Method](https://docs.digitalocean.com/products/droplets/how-to/create/#choose-authentication-method)
- [Recommended and Advanced Options](https://docs.digitalocean.com/products/droplets/how-to/create/#recommended-and-advanced-options)
  - [Finalize Details](https://docs.digitalocean.com/products/droplets/how-to/create/#finalize-details)
- [Create a Droplet Using Automation](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-automation)
  - [Create a Droplet Using the CLI](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-cli)
  - [Create a Droplet Using the API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api)

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