---
url: "https://docs.digitalocean.com/products/droplets/getting-started/quickstart/"
title: "Droplet Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet Quickstart

Validated on 16 Apr 2020 • Last edited on 23 Oct 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## Create Droplets

1. From the **Create** menu in the top right of the [control panel](https://cloud.digitalocean.com/), click **Droplets**.

2. Choose an image, which can be a Linux distribution, container distribution, one-click app, [snapshot](https://docs.digitalocean.com/products/snapshots/), or [backup](https://docs.digitalocean.com/products/backups/).

3. Choose a [plan and size](https://docs.digitalocean.com/products/droplets/details/pricing/) for your Droplet, which determines its RAM, disk space, and vCPUs as well as its price. Learn more about [how to choose the right Droplet plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).


The Droplet create screen has a number of options after this, which you can customize now or after creation. To accept the defaults, scroll to the bottom and click **Create**. Otherwise:

4. Optionally, add [block storage](https://docs.digitalocean.com/products/volumes/).

5. Choose a [datacenter region](https://docs.digitalocean.com/platform/regional-availability/).

6. Select a [VPC network](https://docs.digitalocean.com/products/networking/vpc/) for the Droplet.

7. Select additional options, like [IPv6](https://docs.digitalocean.com/products/networking/ipv6/) and [monitoring](https://docs.digitalocean.com/products/monitoring/). These options come at no additional cost, and are easier to enable now than after creation.

8. Choose an [SSH key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/), if you’ve added one, or create a root password for the Droplet.

9. Enter a name and click **Create**.


From here, you can follow our [detailed guide on connecting to Droplets with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/), or follow the instructions below.

## Connect to Droplets

To connect by using a terminal on Linux, macOS, or Windows Subsystem for Linux:

1. Open your terminal, and enter the command `ssh username@203.0.113.0`.

Substitute in your Droplet’s IP address after the `@`. The username is `root` on most distributions.

2. Press `ENTER` and answer `yes` to the prompt that confirms the connection.

3. If you’re not using SSH keys, enter your password when prompted.


Windows users can alternatively [connect with PuTTY](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/putty/).

When you’ve logged in, your command prompt changes and you see a welcome screen.

## Destroy Droplets

Destroying a Droplet permanently and irreversibly destroys the Droplet, its contents, automated backups, and any associated resources that you have selected to destroy along with the Droplet.

1. To save one or more of the Droplet’s backup images, [convert those backups into snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/) before destroying the Droplet.

2. From the [control panel](https://cloud.digitalocean.com/), click the Droplet’s **More** menu and choose **Destroy**.

3. (Optional) On the Droplet’s **Destroy** page, under **Destroy Droplet and backups**, click **Show associated resources** and select any of the Droplet’s connected resources that you would also like to destroy.

4. Click **Destroy this Droplet and backups** (or **Destroy this Droplet and X selected resources** if you are also destroying resources associated with the Droplet).

5. Confirm the destruction in the confirmation window that opens by clicking **Confirm** (or **Destroy** if you are also destroying resources associated with the Droplet). If you are also destroying associated resources, it prompts you to enter the Droplet’s name into the confirmation window before destroying the Droplet.


In this article...

- [Create Droplets](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/#create-droplets)
- [Connect to Droplets](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/#connect-to-droplets)
- [Destroy Droplets](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/#destroy-droplets)

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