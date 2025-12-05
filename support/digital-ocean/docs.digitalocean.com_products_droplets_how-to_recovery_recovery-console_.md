---
url: "https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/"
title: "How Recover Access to Droplets using the Recovery Console | DigitalOcean Documentation"
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
    - [Boot from Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/)
    - [Connect with Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/)
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
- [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
- Connect with Recovery Console

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How Recover Access to Droplets using the Recovery Console

Validated on 16 Apr 2020 • Last edited on 17 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Most users manage their DigitalOcean Droplets using [SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/), [PuTTY](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/putty/), or a control panel they’ve installed themselves. However, changes to your network or service configuration files could leave you unable to log in remotely using these methods.

The Recovery Console provides out-of-band access and is available regardless of your network settings. It emulates the access you would have if you were sitting down with a keyboard and monitor attached to the actual server. You can use this feature to log in and revert bad settings to regain normal access.

Note

Use the Recovery Console to recover from network issues or to boot from the recovery ISO. To connect to your Droplet normally, [use the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) or [connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) instead.

Learn more about the difference between the Droplet Console and the Recovery Console.

[The Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) is meant as a lightweight, browser-based way to manage a Droplet. It connects to Droplets using the network, like other SSH-based clients, and has features similar to local terminals.

[The Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) (previously referred to as the Droplet Console) is an older, browser-based connection option based on [VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing). Using it is like plugging a keyboard and monitor directly into the Droplet.

The Recovery Console is available even if a Droplet has lost network access or the `sshd` process has failed, but its functionality is limited compared to the Droplet Console. For example, it requires password authentication on the Droplet and doesn’t fully support features like copying and pasting.

Use the Recovery Console only to recover from network issues when you can’t connect to your Droplet and to boot into the [recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/). The Droplet Console is otherwise a better option for general command-line management of your Droplets.

## Reset the Root Password

If you typically log in to your Droplet using a password, or if you have set a password for the `root` or a `sudo` user on the system, you already have the credentials you need to log in.

If you log in to your server using SSH keys and have not set up a password for the `root` account or a `sudo` user, you need to use the DigitalOcean Control Panel to create a new root password.

Navigate to the [control panel](https://cloud.digitalocean.com/). From the project the Droplet is in, or from the main menu’s **Droplets** page, locate the Droplet. Click the Droplet’s name to open its detail page, then select **Access** in the left menu.

![Screenshot of a Droplet's Access page with the Launch Console button](https://docs.digitalocean.com/screenshots/droplets/pages/access.4146e2dc610bc52ac27191e301d8287775cc82470ed39a52f4b7720678b3ac15.png)

Click **Reset Root Password** to reset the Droplet’s password. You will receive an email containing the Droplet’s temporary password.

## Log In with the Recovery Console

From the DigitalOcean Control Panel, first click the name of the Droplet you want to access, then select **Access** from the left menu. Click the **Launch Recovery Console** button to open the recovery console.

When the console opens, click the console screen and press `ENTER` to ensure that the login prompt has focus. At the login prompt, enter the user you want to log in as. This is typically the `root` user or a user configured with `sudo` privileges.

Note

If you type directly into the console, it may initially read your number keys incorrectly, as if the `SHIFT` key is pressed. For example, pressing the 2 key may enter `@`.

This happens only when typing. You can avoid the problem by copying the text, then pasting it into the console by pressing `CTRL + v`. You can also reset this behavior and ensure that your key strokes are being received correctly by pressing `SHIFT` and `CTRL` a few times, then testing your number keys again.

When prompted, enter the password associated with the account. For security purposes, your password is not be displayed on the screen as you type or paste it into the command line.

Once you’ve entered the password, press `ENTER`. If this is the first time you’ve logged in after resetting the root password through the control panel, you are prompted to enter the password again, then asked to choose a new password.

```
You are required to change your password immediately (root enforced)
Changing password for root.
(current) UNIX password:
Enter new UNIX password:
Retype new UNIX password:
```

Once you’ve successfully entered your credentials you should be logged in to your Droplet. From here, you can repair or reset configuration files or services to restore network access.

In this article...

- [Reset the Root Password](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/#reset-the-root-password)
- [Log In with the Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/#log-in-with-the-recovery-console)

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