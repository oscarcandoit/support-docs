---
url: "https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/"
title: "How to Connect to Droplets with the Droplet Console | DigitalOcean Documentation"
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
- Connect with the Droplet Console

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect to Droplets with the Droplet Console

Validated on 15 Nov 2021 • Last edited on 17 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

The Droplet Console is a browser-based way to connect to Droplets. Instead of using `ssh` in a local terminal, you can use the Droplet Console in your preferred web browser.

The Droplet Console has a native-like terminal experience, so you can run commands on your Droplet from a familiar command-line interface. It also provides one-click SSH access to your Droplet without the need for a password or manual SSH key configuration.

## Requirements

The Droplet Console is available at no extra cost for Droplets that meet the following requirements:

- **The Droplet must be running a supported operating system.**

The Droplet Console is supported for all DigitalOcean-provided Linux distributions: Ubuntu, Debian, CentOS, and Fedora. This also includes all Marketplace images built on top of these distributions.

- **Your [cloud firewall](https://docs.digitalocean.com/products/networking/firewalls/) and any [host firewalls](https://docs.digitalocean.com/support/my-firewalls-are-not-working-correctly/) must accept SSH traffic on the port that `sshd` uses.**

If you have configured any of your firewalls to block SSH traffic on the port the SSH daemon listens on, you need to reconfigure their rules to accept incoming SSH connections on that port.


Note

If you need to recover network access to your Droplet, [use the Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) instead.

Learn more about the difference between the Droplet Console and the Recovery Console.

[The Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) is meant as a lightweight, browser-based way to manage a Droplet. It connects to Droplets using the network, like other SSH-based clients, and has features similar to local terminals.

[The Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) (previously referred to as the Droplet Console) is an older, browser-based connection option based on [VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing). Using it is like plugging a keyboard and monitor directly into the Droplet.

The Recovery Console is available even if a Droplet has lost network access or the `sshd` process has failed, but its functionality is limited compared to the Droplet Console. For example, it requires password authentication on the Droplet and doesn’t fully support features like copying and pasting.

Use the Recovery Console only to recover from network issues when you can’t connect to your Droplet and to boot into the [recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/). The Droplet Console is otherwise a better option for general command-line management of your Droplets.

## Install and Configure the Droplet Agent

To connect to a Droplet using the Droplet Console, the Droplet must have the Droplet agent installed. The agent is installed by default on all new Droplets created after August 2021, and you can [install the agent manually on older Droplets](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/#install).

By default, the Droplet Console connects on the first port defined in the Droplet’s SSH daemon configuration, `/etc/ssh/sshd_config`. If you launch `sshd` with a different configuration file, or if you define multiple ports in that file and want to use one other than the first, you need to update the service file for the Droplet agent.

The Droplet agent service file is `/etc/systemd/system/droplet-agent.service` on Droplets with systemd and `/etc/init/droplet-agent.conf` on older Droplets with `initctl`.

To define a custom `sshd` configuration file, find the `ExecStart` line in the service file and append the `-sshd_config` flag with the path to your `sshd` configuration file:

```
ExecStart=/opt/digitalocean/bin/droplet-agent -syslog -sshd_config="/path/to/your/custom/sshd_config"
```

To define a specific port, find the `ExecStart` line in the service file and append the `-sshd_port` flag with the port number you want to use.

```
ExecStart=/opt/digitalocean/bin/droplet-agent -syslog -sshd_port=123
```

After making changes to the service file, restart the service. On Droplets with `systemd`:

```shell
systemctl daemon-reload
systemctl restart droplet-agent
```

On Droplets with `initctl`:

```shell
initctl stop droplet-agent
initctl reload-configuration
initctl start droplet-agent
```

Once the agent restarts, you can connect to your Droplet with the Droplet Console.

## Access the Droplet Console

Once the Droplet agent is installed (and configured if necessary), you can access the Droplet Console from the DigitalOcean Control Panel.

First, click the name of the Droplet you want to access to expand its detail window, then click the name again to go to its detail page. From the detail page, click the **Access** tab in the left menu.

![](https://docs.digitalocean.com/screenshots/droplets/pages/access-consoles-only.de4e5d87beee4a01212407163d1c667a30d5bc7911020a3265230be942347437.png)

In the **Droplet Console** section, enter the user you want to log in as in the **Log in as…** field. By default, this is set to `root`. Once you choose a user, click **Launch Droplet Console** to open the Droplet console.

When the console loads, you can use the command line to run commands on your Droplet.

In this article...

- [Requirements](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/#requirements)
- [Install and Configure the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/#install-and-configure-the-droplet-agent)
- [Access the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/#access-the-droplet-console)

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