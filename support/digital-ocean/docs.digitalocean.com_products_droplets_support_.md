---
url: "https://docs.digitalocean.com/products/droplets/support/"
title: "Droplets Support | DigitalOcean Documentation"
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

- Support

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplets Support

Generated on 25 Nov 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix a "system not initialized" error on multi-GPU Droplets?

Make sure NVIDIA Fabric Manager is running and has the same version number as the GPU drivers.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I getting a Droplet autoscale pool error?

There may be an issue with the autoscale pool or Droplet configuration, the VPC network’s size, or resource limits on the team or datacenter.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot Load Balancer Health Check Issues

Health checks often fail due to firewalls or misconfigured backend server software.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I recover access to a Droplet that is at 100% disk usage?

Boot the Droplet from the recovery ISO, then connect using the Recovery Console and delete files to free some disk space.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I create a Droplet without a private IP?

You can disable the address on your Droplet from the command line or through updating your Droplet’s `eth1` interface configuration.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I access my Droplet's file manager?

You can access your Droplet’s file manager by connecting to the Droplet using SSH or the Droplet Console.

![](https://docs.digitalocean.com/images/icons/support.svg)

My Ubuntu Droplet lost all network connectivity after a software update.

Ensure your Droplet’s public and private network interfaces are correctly named `eth0` and `eth1`.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I use my Droplet's IP as a Reserved IP?

You cannot convert a Droplet IP address into a Reserved IP.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I undo restoring a Droplet from a backup?

You cannot undo restoring a Droplet from a backup, but you can use an existing snapshot to restore a Droplet to a previous point in time.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my Droplet have a US-based IP address when I created it in a different region?

All Droplets are assigned IPs that are owned by DigitalOcean, which is headquartered in the US.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my Droplet show almost 100% disk usage even after attaching a new volume?

Adding a volume to your Droplet doesn’t increase its main disk size. You need to resize the Droplet to increase its main disk size.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I add an old Droplet to a VPC without changing its IP address?

Older Droplets that did not have VPC enabled prior to October 2020 cannot be added to a VPC network without changing its IP address.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I change my Droplet's SSH port?

Edit your Droplet’s sshd\_config file to change its SSH port.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I preserve my Droplet's IPv4 address when I transfer the Droplet?

You cannot retain a Droplet’s IPv4 when you transfer the Droplet to a new region. Use a reserved IP address to maintain a static IP address.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I migrate my Droplet to another datacenter region?

Take a snapshot of your Droplet and then create new Droplet from the snapshot in the new datacenter.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I create a Droplet from a snapshot?

You cannot create Droplets in certain datacenters due to limited capacity. If you have snapshots in a limited capacity datacenter, transfer them to another datacenter to create Droplets from them.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I downsize a Droplet using a snapshot?

You cannot downsize a Droplet from a snapshot. Data is not always stored sequentially in memory, so reducing the size of a disk can result in data loss or corruption.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I choose my Droplet's IP address?

You cannot create Droplets with a specific IP address, but you can use reserved IPs for a static address that you can migrate between Droplets.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I clone or make a copy of a Droplet?

Create a snapshot of the Droplet, then create a new Droplet from that snapshot.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I rename a Droplet or change its hostname?

To rename your Droplet, change the Droplet’s name in the control panel, then change its hostname from the command line using `hostnamectl` or by editing `/etc/hostname` and `/etc/hosts`.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I get a Droplet's dedicated IP address?

Droplets do not have a dedicated IP address, but you can create a Reserved IP, which is a reassignable static IP address.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I get my Droplet's FTP credentials?

Transfer files over SSH with SFTP.

![](https://docs.digitalocean.com/images/icons/support.svg)

I did not get an email of my Droplet's root password

We do not email a Droplet’s root password. You can reset your root password if you don’t remember it.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I debug a firewall causing connection problems with my Droplet?

Diagnose and troubleshoot firewall issues that could be causing network connectivity issues.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I debug my Droplet's network configuration?

To debug your network configuration, verify the Droplet’s network interfaces and check its network configuration file.

![](https://docs.digitalocean.com/images/icons/support.svg)

I lost the SSH key for my Droplet

If you lose the private SSH key you use to log in to a Droplet, you need to re-enable password authentication to recover access.

![](https://docs.digitalocean.com/images/icons/support.svg)

When I try to log in to SSH I get a Permission Denied error

You may be receiving this error for various reasons, including a missing SSH key or incorrect password.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I use older versions of Linux on a Droplet?

Older operating systems can pose large security risks.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I recover a deleted Droplet?

You can recover your Droplet if you took a snapshot of the Droplet, enabled automated backups, or used SnapShooter for Droplet backups.

![](https://docs.digitalocean.com/images/icons/support.svg)

Do snapshots retain the IP address of the Droplet they were created from?

No, but you can use reserved IPs to assign the same address to new or redeployed Droplets.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix disk space issues on my Droplet?

You can review disk usage on your Droplet and then remove unnecessary files.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I make my Droplet smaller?

You cannot resize Droplets to smaller plans, but you can migrate your data to a smaller Droplet.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I use Windows on a Droplet?

No, we do not provide Windows images for Droplets or support Windows custom images.

![](https://docs.digitalocean.com/images/icons/support.svg)

How can I destroy my Droplets while maintaining my backups?

Convert your backups to snapshots to save them indefinitely.

![](https://docs.digitalocean.com/images/icons/support.svg)

How can I migrate my data from my previous provider?

We have guides to help you migrate your data from your previous provider.

![](https://docs.digitalocean.com/images/icons/support.svg)

How can I regain access to my Droplet when it won't boot?

Use the recovery ISO to access Droplets that fail to boot up or have system problems.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I install an SSL Certificate on a Droplet?

You can typically install an SSL certificate by adding a few lines of configuration to the Droplet’s web server, or by using tools that automatically add the configuration for you.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my Droplet booting in Read Only mode?

File system corruption can cause a Droplet to boot into read only mode.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I reset my Droplet's root password?

You can reset your Droplet’s password using the control panel or the recovery ISO.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my Droplet have high CPU or RAM usage?

High RAM or CPU usage is normally the result of applications or kernel processes on the Droplet. You can monitor high CPU usage processes on the Droplet and stop them if necessary.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I have more than one domain on the same Droplet?

Yes, you can point an unlimited number of domains to a single Droplet, and you can serve multiple websites from a single Droplet.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is SMTP blocked?

SMTP is blocked on Droplets to prevent spam and abuse. Use a third-party email as a service provider instead.

![](https://docs.digitalocean.com/images/icons/support.svg)

Has my Droplet migration completed?

You can check to see if a Droplet’s migration has completed by checking its history.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I manually back up my Droplet?

There are three ways to manually back up a Droplet. You can create a DigitalOcean snapshot for an on-demand full disk image, convert an automatic DigitalOcean backup into a snapshot, or use a third-party tool for a partial backup.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I transfer a Droplet to someone else?

You can transfer snapshots of Droplets to others by email address or by team.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot SSH Authentication Issues

Problems with SSH authentication includes permission denied with SSH keys and passwords.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot SSH Connectivity Issues

Problems with SSH connectivity include hostname resolution errors and connections being refused or timing out.

![](https://docs.digitalocean.com/images/icons/support.svg)

My Droplet is sending an outgoing flood or DDoS

Next steps to take if you receive a message from DigitalOcean support because your Droplet is sending an outgoing flood or DDoS.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot SSH Protocol Issues

Problems during SSH protocol initiation include the client suddenly getting dropped or closed, the client returning errors about cipher negotiation, or issues with an unknown or changed remote host.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot SSH Shell Environment Issues

Problems with SSH shell environments include being unable to fork a process, the system reporting it’s not a valid shell, or issues reaching the home directory.

In this article...

[Droplets Support](https://docs.digitalocean.com/products/droplets/support/)

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