---
url: "https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/"
title: "How to Recover Data from Droplets with the Recovery ISO | DigitalOcean Documentation"
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
- Boot from Recovery ISO

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Recover Data from Droplets with the Recovery ISO

Validated on 8 Aug 2025 • Last edited on 11 Aug 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

If you need to recover data from your Droplet, you can use DigitalOcean’s recovery ISO with the [Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) to regain access and perform recovery operations, like getting access to an interactive shell, running `fsck`, or using `chroot`.

## When to Use the Recovery ISO

There are several situations in which you may want to use the recovery ISO:

- **Your Droplet was disconnected from the network due to an outgoing flood or DDoS**. Unusually large amounts of traffic generally indicate that your Droplet was compromised and used to send spam email or malicious traffic. If this happens, you receive an email from DigitalOcean support notifying you that your Droplet’s normal internet access was disabled to protect others from being harmed.

- **Your Droplet’s file system is corrupted**. File system corruption can happen when software or hardware malfunctions, or when your Droplet is abruptly powered off.


If your Droplet is disconnected from the network, you can use the recovery ISO to regain access to the Droplet’s filesystem. See [How to Recover from a Compromised Droplet Sending an Outgoing Flood or DDoS](https://docs.digitalocean.com/support/my-droplet-is-sending-an-outgoing-flood-or-ddos/) for additional steps you may need to take to re-enable the Droplet’s network connection, recover any files, and migrate to a new Droplet.

If your Droplet’s file system is corrupted, the best way to prevent data loss in those situations is with good backups, but you can also use the recovery ISO to run `fsck`, mount the disk image, or attempt more advanced recovery procedures.

## Using the Recovery ISO

Using the recovery ISO to recover data involves these steps:

1. **Set the Droplet to boot from the recovery ISO** by powering the Droplet down and changing the recovery settings in the control panel.

2. **Launch the [Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/)** from the control panel to connect to the Droplet.

3. **Prepare the Droplet for recovery.** For example, if the Droplet has been disconnected from the network, contact support to reconnect it. If the Droplet’s filesystem is corrupted, use the recovery ISO to run `fsck`.

4. **Recover data** by migrating files off the Droplet using FileZilla, `scp`/SFTP, or other tools and techniques, depending on your situation.


### 1\. Boot from the Recovery ISO

First, power off the Droplet in the safest way available to you. If you have access to the command line, use the `sudo poweroff` command. If you do not have access to the command line, power off the Droplet using the toggle on the Droplet’s page in the control panel.

Once the Droplet is powered off, set it to boot it from the recovery ISO. In the control panel, click **Recovery** on the left, then click the **Boot from Recovery ISO** box:

![The recovery tab with the Boot from Recovery ISO option selected](https://docs.digitalocean.com/screenshots/droplets/pages/recovery.e9194931c1b88d421c91fe6f762168b066900a73ffa3cd5cabbb2806d561c743.png)

Then toggle the power button to power your Droplet back on.

### 2\. Connect with the Recovery Console

After the Droplet powers back on, use the [Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) to access it. Click the **Access** tab in the left menu and, in the **Recovery Console** section, click **Launch Recovery Console**.

![The Droplet Console and Recovery Console sections of the Access page](https://docs.digitalocean.com/screenshots/droplets/pages/access-consoles-only.de4e5d87beee4a01212407163d1c667a30d5bc7911020a3265230be942347437.png)Note

When recovering network access and using the recovery ISO, make sure to connect with the Recovery Console, not the Droplet Console.

Learn more about the difference between the Droplet Console and the Recovery Console.

[The Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) is meant as a lightweight, browser-based way to manage a Droplet. It connects to Droplets using the network, like other SSH-based clients, and has features similar to local terminals.

[The Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) (previously referred to as the Droplet Console) is an older, browser-based connection option based on [VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing). Using it is like plugging a keyboard and monitor directly into the Droplet.

The Recovery Console is available even if a Droplet has lost network access or the `sshd` process has failed, but its functionality is limited compared to the Droplet Console. For example, it requires password authentication on the Droplet and doesn’t fully support features like copying and pasting.

Use the Recovery Console only to recover from network issues when you can’t connect to your Droplet and to boot into the [recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/). The Droplet Console is otherwise a better option for general command-line management of your Droplets.

The Recovery Console launches in a new window and displays a menu like this:

Recovery Console initial prompt

```
DigitalOcean Recovery Environment

This droplet is booted to the DigitalOcean recovery environment.
When you are finished, you may set your Droplet to boot from
the local disk again via the DigitalOcean control panel.

This rescue environment is based on Ubuntu 24.04

* Network access and SSH have been enabled automatically *
* SSH Host keys do NOT match while using this rescue system *

Root Password has randomly been set to:
  exam-ple0-1234-5678
Your are strongly encouraged to use SSH keys. To import your SSH
public keys:
  From Github:        ssh-import-id gh:<Github user name>
  From Launchpad.net: ssh-import-id lp:<launchpad user name>
--------------------------------------------------------------------
1. Mount your Disk Image [Not Mounted]
2. Check Filesystem
3. Reset Droplet Root Password
4. Configure Keyboard
5. Attempt to 'chroot' into installed system
6. Interactive Shell [/bin/bash]
7. Clear out Cloud-Init cached data (will regenerate host ssh keys)
Choose (1-7) and press Enter to continue.
```

The recovery ISO provides a number of options. Which ones you use to prepare the Droplet for recovery depends on the state of the Droplet.

### 3\. Prepare the Droplet for Recovery

If your Droplet is in a network disconnected state (due to sending an outgoing flood or DDoS, for example), [open a support ticket](https://cloudsupport.digitalocean.com/) to have it reconnected. The restored network connection allows you to transfer files off of the Droplet. From there, you can use option `1` in the recovery ISO to mount your disk image and gain access to your files.

If you’re trying to recover from file system corruption, you can use option `2` in the recovery ISO to run `fsck`, a **f** ile **s** ystem **c** hec **k** program. `fsck` can occasionally cause data corruption on active disks, so only attempt this on an unmounted file system.

Warning
Using `fsck` as a recovery option can be useful, but it comes with risks and isn’t guaranteed to work, so consider it a last resort method of data recovery. We recommend [taking a snapshot of your Droplet](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/) first. If the recovery causes data loss, you can restore from the snapshot and try again or use a different method.

After it completes, mount the filesystem into your environment using option `1` to access your files. You need to access your files this way because the Linux environment is running from the ISO image, not from the Droplet. Your disk image is detected and mounted under `/mnt` in the recovery environment. Then use option `6` to enter the interactive shell and look for recovered files in the `/mnt/lost+found` directory.

### 4\. Recover Data

Once your Droplet is prepared, you can offload your files onto a remote machine (like another Droplet or another physical machine). You can use [SFTP from the command line](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server), an SFTP client like [FileZilla](https://www.digitalocean.com/community/tutorials/how-to-use-filezilla-to-transfer-and-manage-files-securely-on-your-vps), or other file transfer tools like [rsync](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh). Use the temporary password in the recovery menu when you set up the connection.

Any SSH keys added to the Droplet at the time it was created are automatically imported into the recovery ISO. You can SSH into the Droplet while it’s in recovery using either one of those SSH keys or using the temporary password in the recovery menu. You need to use a screen, tmux, or byobu session.

You can also `chroot` into the filesystem to try more advanced recovery steps. For example, this may allow you to start MySQL so you can attempt to export your databases.

If you were recovering from file system corruption or other problems and the recovery went well, meaning the Droplet itself is salvageable, you can set the Droplet to boot normally. To boot normally, power off from the command line again:

```shell
poweroff
```

Then, back in the control panel, click **Recovery** and choose the radio button for **Boot from Hard Drive**. When you power the Droplet back on, it attempts to boot from its own disk.

In this article...

- [When to Use the Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#when-to-use-the-recovery-iso)
- [Using the Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#using-the-recovery-iso)
  - [1\. Boot from the Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#1-boot-from-the-recovery-iso)
  - [2\. Connect with the Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#2-connect-with-the-recovery-console)
  - [3\. Prepare the Droplet for Recovery](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#3-prepare-the-droplet-for-recovery)
  - [4\. Recover Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/#4-recover-data)

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