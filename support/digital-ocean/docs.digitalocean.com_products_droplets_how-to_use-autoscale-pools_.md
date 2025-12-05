---
url: "https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/"
title: "How to Use Droplet Autoscale Pools for Automatic Horizontal Scaling | DigitalOcean Documentation"
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
- Use Autoscale Pools

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Droplet Autoscale Pools for Automatic Horizontal Scaling

Validated on 17 Dec 2024 • Last edited on 13 Feb 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Droplet autoscale pools enable automatic [horizontal scaling](https://www.digitalocean.com/resources/articles/horizontal-scaling-vs-vertical-scaling#what-is-horizontal-scaling) for a pool of Droplets based on resource utilization or a fixed size.

For more information on how autoscaling works in autoscale pools, see our concepts article:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

Autoscale Pool Concepts

Conceptual and technical details on Droplet autoscale pools, like what happens during scaling events, how the size of the pool is calculated, and when to scale.

## Create an Autoscale Pool using the Control Panel

From the [DigitalOcean Control Panel](https://cloud.digitalocean.com/droplets), in the left menu, click **Droplets**, which has both a **Droplets** tab and an **Autoscale Pools** tab.

![The autoscale pools tab in the control panel with one autoscale pool listed.](https://docs.digitalocean.com/screenshots/droplets/autoscale-pools-tab.1f7a9b7cd3d3adcda9710bfb7561c38d7e6ac8aa9fe18ac0e447db2befb30548.png)

Click the **Create an Autoscale Pool** button to go to the [autoscale pool creation page](https://cloud.digitalocean.com/droplets-autoscale/new).

### Autoscale Pool Configuration

In the **Autoscale Pool Configuration** section, you choose the configuration of the pool, which determines how the pool scales.

- **Autoscale** dynamically manages the number of Droplets in the pool based on their aggregate resource utilization. You choose:
  - **Pool Size**, which controls the minimum and maximum number of Droplets in the pool.

  - **Target Utilization**, which control which metrics (CPU, memory, or both) to monitor and at what thresholds to scale.

  - **Cooldown Duration**, which is the minimum amount of time the autoscale pool waits between making modifications to the Droplets in the pool. Choose a cooldown duration at least as long as it takes your Droplets to boot.
- **Fixed Size** maintains a fixed number of Droplets in the pool. You choose:
  - **Number of Droplets**. The quantity of Droplets you want in the pool.

### Autoscale Pool Droplets Configuration

In the **Autoscale Pool Droplets Configuration** section, choose the configuration for Droplets within the autoscale pool:

- **Datacenter region**

- **VPC network**

- **Image**, which can be a base OS image, a snapshot or backup, or a custom image

- **Droplet plan**

- **SSH keys**, which are mandatory

- **IPv6**

- **Startup scripts**, which is [user data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)


Make sure that Droplets in the pool automatically run your application on boot to make the application available on Droplets that the autoscale pool provisions. For example, you can [configure unit files in a custom image](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files) or [specify user data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/).

### Finalize

In the **Finalize** section, you choose following options:

- A unique autoscale pool name

- A project for the autoscale pool

- Optionally, [tags](https://docs.digitalocean.com/products/droplets/how-to/tag/) for the Droplets in the pool


We strongly recommend tagging the Droplets in your autoscale pool. This lets you [use DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage-global-load-balancers/) to forward traffic to the entire pool and [apply cloud firewall rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/) to the pool automatically.

When you finish selecting your configuration, click **Create Autoscale Pool**.

## Edit or Destroy an Autoscale Pool

To view or edit an autoscale pool from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/droplets), in the left menu, click **Droplets**.

Click the **Autoscale Pools** tab to go to the [autoscale pools page](https://cloud.digitalocean.com/droplets-autoscale) which lists your team’s autoscale pools with an overview of their status. Click an autoscale pool to go to its detail page:

![The resources tab of an autoscale pool.](https://docs.digitalocean.com/screenshots/droplets/autoscale-pool-resources-tab.b17439fd34c547e75e9ed9c0a6c37ef090151cf3b06731ff3cf188ee97721982.png)

The tabs on this page ( **Resources**, **Insights**, **Activity**, and **Settings**) have different information about the pool. Click the **Settings** tab to edit or modify the pool.

![The settings tab of an autoscale pool.](https://docs.digitalocean.com/screenshots/droplets/autoscale-pool-settings-tab.a83be0205aa17b27ac99bc290a606fa0e49bf701f51daadd33ddbada57a9bd51.png)

To edit the pool, click **Edit** next to the setting you want to change. You can change the Droplet configuration for the pool, switch between autoscale and fixed size, and modify the pool configuration.

To permanently destroy the pool and all Droplets in the pool, in the **Destroy Autoscale Pool** section, click **Destroy**. In the window that opens, optionally check **Destroy Droplets in the pool** to destroy the Droplets in the pool, or leave it unchecked to keep the Droplets after the pool is destroyed. Enter the name of the autoscale pool in the confirmation box, then click **Delete**.

## Manage Autoscale Pools with Automation

### Using the API

How to Create a New Autoscale Pool Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/droplets/autoscale`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/autoscalepools_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{
    "name": "test-autoscalergroup",
    "config": {
      "min_instances": 1,
      "max_instances": 5,
      "target_cpu_utilization": 0.5,
      "cooldown_minutes": 5
    },
    "droplet_template": {
      "size": "c-2",
      "region": "tor1",
      "image": "ubuntu-20-04-x64",
      "tags": [\
        "test-ag-01"\
      ],
      "ssh_keys": [\
        "392594",\
        "385255"\
      ],
      "vpc_uuid": "c472520a-831e-4770-8135-542c57a69daa",
      "ipv6": true,
      "user_data": "\n#cloud-config\nruncmd:\n- apt-get update\n"
    }
  }' \
  "https://api.digitalocean.com/v2/droplets/autoscale"
```

How to Update Autoscale Pool Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/droplets/autoscale/{autoscale_pool_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/autoscalepools_update).

### cURL

Using cURL:

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{
    "name": "test-autoscalergroup-01",
    "config": {
      "min_instances": 1,
      "max_instances": 5,
      "target_cpu_utilization": 0.5,
      "cooldown_minutes": 10
    },
    "droplet_template": {
      "size": "c-2",
      "region": "tor1",
      "image": "ubuntu-20-04-x64",
      "tags": [\
        "test-ag-01"\
      ],
      "ssh_keys": [\
        "372862",\
        "367582",\
        "355790"\
      ],
      "vpc_uuid": "4637280e-3842-4661-a628-a6f0392959d3",
      "with_droplet_agent": true,
      "ipv6": true,
      "user_data": "\n#cloud-config\nruncmd:\n- apt-get update\n"
    }
  }' \
  "https://api.digitalocean.com/v2/droplets/autoscale/d0067f19-c9bd-4d8c-b28b-e464fd1fb250"
```

How to Delete Autoscale Pool Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/droplets/autoscale/{autoscale_pool_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/autoscalepools_delete).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/droplets/autoscale/880fee37-d07a-4f94-94a0-f07d9fc7bbb4"
```

### Using Terraform

![](https://docs.digitalocean.com/images/icons/terraform.svg)

digitalocean\_droplet\_autoscale

Provides a DigitalOcean Droplet Autoscale resource. This can be used to create, modify, read and delete Droplet Autoscale pools.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

digitalocean\_droplet\_autoscale

Get information on a Droplet Autoscale pool for use with other managed resources. This datasource provides all the Droplet Autoscale pool properties as configured on the DigitalOcean account. This is useful if the Droplet Autoscale pool in question is not managed by Terraform, or any of the relevant data would need to referenced in other managed resources.

In this article...

- [Create an Autoscale Pool using the Control Panel](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#create-an-autoscale-pool-using-the-control-panel)
  - [Autoscale Pool Configuration](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#autoscale-pool-configuration)
  - [Autoscale Pool Droplets Configuration](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#autoscale-pool-droplets-configuration)
  - [Finalize](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#finalize)
- [Edit or Destroy an Autoscale Pool](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#edit-or-destroy-an-autoscale-pool)
- [Manage Autoscale Pools with Automation](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#manage-autoscale-pools-with-automation)
  - [Using the API](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#using-the-api)
  - [Using Terraform](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/#using-terraform)

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