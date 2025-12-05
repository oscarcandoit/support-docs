---
url: "https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/"
title: "How to Connect to your Droplet with OpenSSH | DigitalOcean Documentation"
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
    - [Connect with OpenSSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/)
    - [Connect with PuTTY](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/putty/)
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
- [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
- Connect with OpenSSH

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect to your Droplet with OpenSSH

Validated on 16 Apr 2020 • Last edited on 17 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Note
If you’re struggling with SSH and server management, try our managed products: [Cloudways](https://docs.digitalocean.com/products/cloudways/) deploys pre-installed software stacks onto Droplets, and [App Platform](https://docs.digitalocean.com/products/app-platform/) deploys and scales apps directly from your code repository, along with databases and serverless functions.

To connect to your Droplet, you need to open a terminal. How you do this varies between operating systems and window managers, but generally:

- **Linux**: Search Terminal or press `CTRL+ALT+T`.
- **macOS**: Search Terminal.
- **Windows**: Search PowerShell. If OpenSSH is not installed on your machine by default, see [Microsoft’s documentation](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui) on how to do this, or [use PuTTY instead](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/putty/).

Once the terminal is open, enter the following SSH command. Replace `use_your_username` with the username on the server and replace the IP address (after the `@`) with your Droplet’s IP address.

```shell
ssh use_your_username@203.0.113.0
```

If you have multiple SSH keys, you may need to specify the path of your private key using the `-i` flag, as in `ssh -i /path/to/private/key username@203.0.113.0`.

The very first time you log in, the server isn’t identified on your local machine, so it prompts you to confirm that you want to continue connecting. You can type `yes` and then press `ENTER`.

```text
The authenticity of host '203.0.113.0 (203.0.113.0)' can't be established.
ECDSA key fingerprint is SHA256:IcLk6dLi+0yTOB6d7x1GMgExamplewZ2BuMn5/I5Jvo.
Are you sure you want to continue connecting (yes/no)? yes
```

Next, a host key fingerprint is saved to your local machine and you receive this confirmation:

```
Warning: Permanently added '203.0.113.0' (ECDSA) to the list of known hosts.
```

Note

You may receive an intimidating-looking remote host identification warning:

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
```

This happens most often when you’ve destroyed a Droplet immediately before creating and trying to connect to a new one. If the new Droplet gets assigned the same IP address as the Droplet that was destroyed, the host key of the old server is stored and conflicts with the new host key.

If this happens, you can delete the old Droplet’s host key from your local system with the command `ssh-keygen -R 203.0.113.0` and then reconnect.

The next part of the connection process is authentication. If you’ve [added SSH keys](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/), you connect to the Droplet immediately (or after entering the passphrase for your key pair).

If you haven’t added SSH keys, the Droplet prompts you for your password:

```
username@203.0.113.0's password:
```

When you enter your password, nothing is displayed in the terminal, so it can be easier to paste in the initial password. Pasting into text-based terminals is different from other desktop applications and is also different from one window manager to another:

- For Linux Gnome Terminal, use `CTRL+SHIFT+V`.
- For macOS, use `SHIFT-CMD-V` or the middle mouse button.
- For Bash on Windows, right-click the window bar, choose **Edit**, then **Paste**. You can also right-click to paste if you [enable QuickEdit mode](https://www.digitalocean.com/community/questions/how-can-i-paste-commands-into-bash-on-windows).

Once you’ve entered the password, press `ENTER`.

E-mailed passwords aren’t secure, so the first time you log in with the default password, you are immediately prompted to change it.

```
. . .
Changing password for username.
```

To do that, first re-enter the current password, then press `ENTER`. Nothing displays on the screen when you type.

```
(current) UNIX password:
```

After that, enter your new password and press `ENTER`. Again, nothing displays on the screen as you type. Then, enter the new password a second time to confirm that you’ve typed it accurately.

```
Enter new UNIX password:
Retype new UNIX password:
```

When you’ve successfully logged in, you receive an operating system-specific welcome screen. Your command prompt changes to display the username you’ve logged in as, separated by the `@` symbol from the hostname of the Droplet, like `username@ubuntu-512mb-sfo2-01:~#`.

If you’re having trouble connecting to your Droplet with SSH, you can [troubleshoot the SSH errors](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-connectivity-issues/) or try [connecting with the Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) to recover normal SSH access.

In this article...

[How to Connect to your Droplet with OpenSSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/)

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