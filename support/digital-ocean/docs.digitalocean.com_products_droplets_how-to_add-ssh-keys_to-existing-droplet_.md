---
url: "https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/"
title: "How to Upload an SSH Public Key to an Existing Droplet | DigitalOcean Documentation"
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
    - [Create Keys with OpenSSH](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-openssh/)
    - [Create Keys with PuTTY](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-putty/)
    - [Manage SSH Keys on Teams](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/)
    - [Add Keys to Existing Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/)
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
- [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
- Add Keys to Existing Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upload an SSH Public Key to an Existing Droplet

Validated on 28 Aug 2023 • Last edited on 19 Jun 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Note
If you’re struggling with SSH and server management, try our managed products: [Cloudways](https://docs.digitalocean.com/products/cloudways/) deploys pre-installed software stacks onto Droplets, and [App Platform](https://docs.digitalocean.com/products/app-platform/) deploys and scales apps directly from your code repository, along with databases and serverless functions.

For security reasons, you can’t add or modify the SSH keys on your Droplet using the control panel after you create it, but you have several options to add and modify them via the command line. If you currently have SSH access to the Droplet, you can upload keys in multiple ways:

- [**From your local computer using `ssh-copy-id`**](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh-copy-id), which is included in many Linux distributions’ OpenSSH packages. We recommend this option if it is available for ease of use.

- [**From your local computer by piping the key**](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh) into the `~/.ssh/authorized_keys` file on the Droplet. This is a good choice if you don’t have `ssh-copy-id`.

- [**By connecting to your Droplet with SSH and manually adding the public key**](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#manually), which is necessary if you do not have password-based SSH access.


If you currently can’t connect to your Droplet at all, [use the Recovery Console to reset the root user password](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/). Once logged in on the console, you can either [add your key manually from the console](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#manually) or [temporarily enable password authentication](https://docs.digitalocean.com/support/i-lost-the-ssh-key-for-my-droplet/#enable-password-authentication) to add the key [via SSH](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh-copy-id).

## Locally Using ssh-copy-id and Password-Based Access

If you have password-based access to your Droplet, you can copy your SSH key from your local computer to your Droplet using `ssh-copy-id`.

On your local computer, run `ssh-copy-id`, substituting your username and your Droplet’s IP address:

```bash
ssh-copy-id use_your_username@203.0.113.0
```

By default, `ssh-copy-id` copies the default key, `~/.ssh/id_ed25519.pub`, to the target server. To specify a different key, use the `-i` flag, as in `ssh-copy-id -i ~/path/to/key.pub use_your_username@203.0.113.0`.

Running `ssh-copy-id` prompts you for the user’s password on the Droplet:

```text
The authenticity of host '203.0.113.0 (203.0.113.0)' can't be established.
ECDSA key fingerprint is fd:fd:d4:f9:EX:AM:PL:E0:e1:55:00:ad:d6:6d:22:fe.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
username@203.0.113.0's password:
```

After you enter the password, it confirms the addition of the key:

```
Number of key(s) added: 1

Now try logging in to the machine, with:   "ssh 'username@203.0.113.0'"
and check to make sure that only the key(s) you wanted were added.
```

You can now log in without a password.

## Locally by Piping into ssh with Password-Based Access

If you do not have `ssh-copy-id` on your local computer but you do have password-based SSH access to your Droplet, you can add an SSH key to your Droplet by [piping](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection#pipes) the contents of the key into the `ssh` command.

The following command makes sure the `~/.ssh` directory exists on your Droplet, then pipes the content of the `~/.ssh/id_ed25519.pub` file on your local computer to the `~/.ssh/authorized_keys` file on your Droplet.

Run this command on your local computer, substituting your username and the Droplet’s IP address:

```bash
cat ~/.ssh/id_ed25519.pub | ssh username@203.0.113.0 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Running this command prompts you for the user’s password on the Droplet:

```text
The authenticity of host '203.0.113.0 (203.0.113.0)' can't be established.
ECDSA key fingerprint is fd:fd:d4:f9:EX:AM:PL:E0:e1:55:00:ad:d6:6d:22:fe.
Are you sure you want to continue connecting (yes/no)? yes
username@203.0.113.0's password:
```

After you enter the password, it copies your key, and you can log in without a password.

## Manually from the Droplet

If you do not have password-based SSH access available, you must add your public key to the remote server manually.

On your local machine, output the contents of your public key.

```shell
cat ~/.ssh/id_ed25519.pub
```

Copy the output, which looks similar to this example:

```
ssh-ed25519 EXAMPLEzaC1lZDI1NTE5AAAAIGKy65/WWrFKeWdpJKJAuLqev9bb9ZNofcMrR/OnC9BM username@203.0.113.0
```

Next, [connect to your Droplet with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/).

Note
If you can’t connect to your Droplet, you can [use the Recovery Console to recover access](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) by resetting your Droplet’s root password, and then [use `ssh` to add your keys](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh).

On your Droplet, create the `~/.ssh` directory if it does not already exist:

```shell
mkdir -p ~/.ssh
```

The public keys listed in `~/.ssh/authorized_keys` are the ones that you can use to log in to the server as this user, so you need to add the public key you copied into this file.

To do so, run the following command on your Droplet, replacing the example key in quotes (`ssh-ed25519 EXAMPLEzaC1yc2E...GvaQ== username@203.0.113.0`) with the key you copied:

```shell
echo "ssh-ed25519 EXAMPLEzaC1yc2E...GvaQ== username@203.0.113.0" >> ~/.ssh/authorized_keys
```

Alternatively, you can open the `~/.ssh/authorized_keys` file with [a terminal-based text editor, like `nano`](https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management#editing-files), and paste the contents of the key into the file that way.

The `~/.ssh` directory and `authorized_keys` file must have specific restricted [permissions](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-permissions) (`700` for `~/.ssh` and `600` for `authorized_keys`). If they don’t, you cannot log in.

Once the `authorized_keys` file contains the public key, set the permissions and ownership of the files:

```shell
chmod -R go= ~/.ssh
chown -R $USER:$USER ~/.ssh
```

You can now log out of your Droplet. The next time you log in, you can do so without a password.

In this article...

- [Locally Using ssh-copy-id and Password-Based Access](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh-copy-id)
- [Locally by Piping into ssh with Password-Based Access](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#with-ssh)
- [Manually from the Droplet](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/#manually)

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

Cookie Preferences

GenAI Agent - DigitalOcean