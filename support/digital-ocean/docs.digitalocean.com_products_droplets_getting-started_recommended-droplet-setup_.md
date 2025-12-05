---
url: "https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/"
title: "Set up a Production-Ready Droplet | DigitalOcean Documentation"
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
- Recommended Droplet Setup

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Set up a Production-Ready Droplet

Validated on 2 Jun 2020 • Last edited on 1 Oct 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

When you first create a Droplet, we recommend configuring it for security and usability in a way that makes scaling and integration with other products simpler in the future. Our recommended setup for a Ubuntu 18.04 Droplet has the following:

- **Improved security**: SSH key authentication for a sudo non-`root` user, no password-based access to `root`, and a cloud firewall to restrict access to SSH only.

- **Reliability and usability**: Automatic backups to prevent data loss in emergencies, and networking features like VPC and IPv6 support with no manual configuration.

- **Capacity and scaling information**: The DigitalOcean metrics agent to understand your resource usage and make more informed decisions on when and how to scale.


After you set up one Droplet with our recommended setup, configuring subsequent Droplets with the same setup only requires selecting options on the [Droplet creation page](https://cloud.digitalocean.com/droplets/new).

You can use Droplets with this setup to host a website, scale out from a single Droplet to multiple Droplets with a [load balancer](https://docs.digitalocean.com/products/networking/load-balancers/), or add [object storage](https://docs.digitalocean.com/products/spaces/) to serve assets.

## Before You Start

Choose whether you want to use [the DigitalOcean Control Panel](https://cloud.digitalocean.com/) in a browser or [`doctl`](https://docs.digitalocean.com/reference/doctl/), the DigitalOcean command-line interface, from a terminal.

The control panel visually guides you through creation and configuration and lets you get started without setting up additional tools. `doctl` lets you work from the command line.

Using the browser-based control panel

If you don’t already have a DigitalOcean account, sign up now and log in to the [control panel](https://cloud.digitalocean.com/).

## Step 1: Create and Upload SSH Keys

Our recommended setup uses SSH keys for authentication when logging into Droplets because password-based authentication is less secure. After you upload your SSH public key to your DigitalOcean account, you can add it automatically to any new Droplets you create, which avoids manually adding or configuring them.

### How do I do this?

If you don’t have an SSH key pair, create one using OpenSSH, which is included on Linux, macOS, and Windows Subsystem for Linux:

```bash
ssh-keygen
```

Your key pair is saved in the location prompted, which by default is `~/.ssh/` on Linux and `/Users/your_username/.ssh` on Windows and macOS. Copy the contents of your public key, which is named `id_ed25519.pub` by default. On macOS, you can copy the key directly to your clipboard by running the following command:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

The Windows and Linux versions of the command depend on your specific distribution, subsystem, or command-line shell.

In the left menu of the control panel, click **Settings**, then click the **Security** tab at the top of the page to go to the [team security settings page](https://cloud.digitalocean.com/account/security). The **SSH keys** section lists any keys already added to the team.

![The SSH Key section of the team security page with one key listed](https://docs.digitalocean.com/screenshots/teams/ssh-keys.903f80218faa4686b6bf6565b1d8ad2d67f89b22834d8577c66b2ecb1f52b9b8.png)

Click **Add SSH Key** to open the **New SSH key** window.

Copy your public key into the **Public Key** field. Enter a name in the **Key Name** field, which you use identify this key in the DigitalOcean Control Panel. We recommend using the name of the machine you copied the public key from.

Get more detail on creating and uploading SSH keys.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with OpenSSH on MacOS or Linux

Use OpenSSH to create new SSH keys on MacOS, Linux, or Windows Subsystem for Linux.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with PuTTY on Windows

Use PuTTY to create SSH keys on Windows systems without Bash.

![](https://docs.digitalocean.com/images/icons/teams.svg)

How to Manage SSH Public Keys on DigitalOcean Teams

Add public SSH keys to a DigitalOcean team to be able to automatically configure SSH key authentication during Droplets creation.

## Step 2: Create and Configure the Droplet

Our recommended setup for Droplets includes enabling several features: VPC (private networking), IPv6, monitoring, and backups.

- [VPC](https://docs.digitalocean.com/products/networking/vpc/) creates a private network interface accessible only by resources within the same account or team. It’s free and increases security and decreases bandwidth costs for resources that communicate using it. Enabling it later requires manual network configuration and rebooting the Droplet.

- [IPv6](https://docs.digitalocean.com/products/networking/ipv6/) enables an additional 16 IP addresses for the Droplet. It’s free and enabling it later requires manual network configuration and rebooting the Droplet.

- [Monitoring](https://docs.digitalocean.com/products/monitoring/) is a metrics visualization service that adds [additional graphs](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) to the control panel (like CPU load, RAM usage, and disk usage) and the ability to set up [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/#create-control). It’s free and enabling it from the start avoids manual setup and lets you understand your resource usage to make more informed decisions on when and how to scale.

- [Backups](https://docs.digitalocean.com/products/backups/) are automatic, system-level disk images of Droplets taken weekly, daily, or multiple times a day. Backups give you a way to revert a Droplet to an older state or recreate Droplets, protecting you against data loss.


Our setup also uses [user data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/), which is data that cloud-init consumes during the Droplet’s first boot to perform tasks or run scripts. The user data script in this tutorial implements two security measures:

- Disables password-based login to the Droplet, making it accessible with SSH keys only.

- Creates a sudo non-root user for day-to-day use. The root user has broad privileges that you don’t need for many tasks. Using a sudo non-root user decreases the risk of making destructive changes by accident and still lets you escalate privileges when necessary.


### How do I do this?

From the control panel, click **Create** in the top right to open the create menu, then click **Droplets** to open [the Droplet create page](https://cloud.digitalocean.com/droplets/new). Configure the new Droplet with the following options:

1. In **Choose an image**, under the **OS** tab, choose the latest version of Ubuntu 18.04.

2. In **VPC Network**, choose the default VPC.

3. In the recommended and advanced options sections, check the boxes for IPv6 and monitoring.

4. In the **Advanced Options** section, additionally check the box for user data. In the text box that opens, copy and paste the following `cloud-config` script. Customize the emphasized line to set the username.


User data `cloud-config` script

```bash
#!/bin/bash
set -euo pipefail

USERNAME=sammy # TODO: Customize the sudo non-root username here

# Create user and immediately expire password to force a change on login
useradd --create-home --shell &#34;/bin/bash&#34; --groups sudo &#34;${USERNAME}&#34;
passwd --delete &#34;${USERNAME}&#34;
chage --lastday 0 &#34;${USERNAME}&#34;

# Create SSH directory for sudo user and move keys over
home_directory=&#34;$(eval echo ~${USERNAME})&#34;
mkdir --parents &#34;${home_directory}/.ssh&#34;
cp /root/.ssh/authorized_keys &#34;${home_directory}/.ssh&#34;
chmod 0700 &#34;${home_directory}/.ssh&#34;
chmod 0600 &#34;${home_directory}/.ssh/authorized_keys&#34;
chown --recursive &#34;${USERNAME}&#34;:&#34;${USERNAME}&#34; &#34;${home_directory}/.ssh&#34;

# Disable root SSH login with password
sed --in-place &#39;s/^PermitRootLogin.*/PermitRootLogin prohibit-password/g&#39; /etc/ssh/sshd_config
if sshd -t -q; then systemctl restart sshd fi
```

4. In **Authentication**, select **SSH keys**, and choose one or more keys. These keys give you access to the root user, and the user data script adds these keys to the sudo non-root user and disable password authentication.

5. In **Tags**, create a tag that matches what you’re using the Droplet for, like `webserver`. You need to use this tag to apply cloud firewalls in the next step.

6. In the recommended options section, check the box for **Enable backups**.


Once you’ve selected all of the options, click **Create Droplet**.

Get more detail on creating Droplets.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create a Droplet

Create Droplets and customize the image, plan, authentication method, and quantity of Droplets you want.

## Step 3: Create a Cloud Firewall

Firewalls place a barrier between your servers and other machines on the network to protect them from external attacks. [DigitalOcean Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/) are a free, stateful firewall service for Droplets. They block all traffic that isn’t expressly permitted by a rule.

You can apply cloud firewalls to individual Droplets by name or to one or more Droplets by [tag](https://docs.digitalocean.com/products/droplets/how-to/tag/). Our setup uses tags. When you add a tag to a cloud firewall, any Droplets with that tag are automatically included in the firewall configuration, including new Droplets that you tag during creation.

To start, we recommend the following default firewall rules:

- Restrict all inbound traffic except for SSH connections to the Droplet on port 22.

- Allow all outbound traffic to any destination on any port. Many fundamental services rely on outbound communication, and these defaults make it easier to set up a new Droplet without introducing restrictions that could cause expected problems.


In the long term, we recommend [organizing firewalls by role](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/), so you can create custom firewalls for your specific use case.

### How do I do this?

From the control panel, click **Create Droplet** in the top right to open the create menu, then click **Cloud Firewalls** to open [the firewall create page](https://cloud.digitalocean.com/networking/firewalls/new). Configure the cloud firewall with the following options:

1. In **Name**, enter `inbound-ssh-only`.

2. In **Inbound Rules**, leave the single default rule for **SSH**.


![The inbound rules section of the cloud firewall create page](https://docs.digitalocean.com/screenshots/firewalls/create/inbound-rules.9fecadc141f7ce8315d597ea2bd66488fb21cb3ef7ea16085ffde5da6e0f53cb.png)

3. In **Outbound Rules**, keep the default rules, which permit all traffic to any destination on any port.

![The outbound rules section of the cloud firewall create page](https://docs.digitalocean.com/screenshots/firewalls/create/outbound-rules.7e40056b0274d5df297fe2a6a9a5505d5735b0c7b61963dccdc7ee0c2f0b5d45.png)

4. In **Apply to Droplets**, add the tag you created with the new Droplet. When you create additional Droplets, adding the same tag to them automatically adds them to this cloud firewall as well, simplifying scaling in the future.

Once you’ve selected all of the options, click **Create Firewall**.

Get more detail on firewall creation and rules.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/firewalls.svg)

How to Create Firewalls

Create a cloud firewall to restrict network traffic to and from specified Droplets.

![](https://docs.digitalocean.com/images/icons/firewalls.svg)

How to Configure Firewall Rules

Create, modify, or delete firewall rules to restrict Droplets’ inbound and outbound traffic based on ports, sources, and destinations.

![](https://docs.digitalocean.com/images/icons/firewalls.svg)

How to Add and Remove Droplets from Firewalls

Add Droplets to a firewall by name or by tag to apply the firewall’s rules.

## Summary

After you set up one Droplet with our recommended setup, setting up future ones is simpler because you don’t need to repeat most of the steps. You only need to complete these steps once:

- Creating an SSH key pair.
- Uploading your public key to your DigitalOcean account.
- Creating the cloud firewall.

To create additional Droplets with the same setup, the only step is choosing its configuration options on the [Droplet creation page](https://cloud.digitalocean.com/droplets/new):

1. Enable the same features (VPC, IPv6, monitoring, and backups).

2. Choose your SSH key.

3. Paste [the `cloud-config` script](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/recommended-droplet-setup.sh) in user data.

4. Add the tag for the cloud firewall.


If you use `doctl`, the DigitalOcean command line interface, you can [create a Droplet with all of these options](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/#doctl) in a single command:

```shell
doctl compute droplet create TODO-NAME --tag-names TODO-TAG-NAME \
    --image ubuntu-18-04-x64 --region nyc3 --size s-2vcpu-2gb \
    --ssh-keys TODO-KEY-FINGERPRINT --user-data-file TODO-PATH-TO-FILE \
    --enable-ipv6 --enable-monitoring --enable-private-networking --enable-backups
```

Using the doctl CLI

If you don’t already have a DigitalOcean account, sign up now.

[Install `doctl` using the GitHub repository’s instructions](https://github.com/digitalocean/doctl), which recommends native package managers:

```shell
# On macOS:
brew install doctl
```

```shell
# On Snap-supported systems, like Ubuntu:
sudo snap install doctl
sudo snap connect doctl:ssh-keys :ssh-keys # Enable support for doctl compute ssh
sudo snap connect doctl:kube-config # Enable support for kubectl
```

Then, on the [**Applications & API** page of the control panel](https://cloud.digitalocean.com/account/api/tokens), create a **Personal access token** for the DigitalOcean API with read and write access.

Give `doctl` access to your DigitalOcean account:

```shell
doctl auth init --context examplename
```

Enter the API token when prompted. Using `--context` identifies your account by naming the authentication context. You can list and switch between multiple authenticated accounts with `doctl auth list` and `doctl auth switch`, respectively.

Get more detail on `doctl` setup, personal access tokens, and `doctl auth` commands.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/doctl.svg)

doctl Command Line Interface (CLI)

Manage your DigitalOcean resources from the command line with doctl, our open-source command line interface (CLI).

![](https://docs.digitalocean.com/images/icons/api.svg)

How to Create a Personal Access Token

Create a personal access token for use with the DigitalOcean API.

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl auth init

This command allows you to initialize doctl with a token that allows it to query and manage your account details and resources.

The command requires and API token to authenticate, which you can generate in the control panel at [https://cloud.digitalocean.com/account/api/tokens](https://cloud.digitalocean.com/account/api/tokens).

The `--context` flag allows you to add authentication for multiple accounts and then switch between them as needed. Provide a case-sensitive name for the context and then enter the API token you want use for that context when prompted. You can switch authentication contexts using `doctl auth switch`, which re-initializes doctl. You can also provide the `--context` flag when using any doctl command to specify the auth context for that command. This enables you to use multiple DigitalOcean accounts with doctl, or tokens that have different authentication scopes.

If the `--context` flag is not specified, doctl creates a default authentication context named `default`.

You can use doctl without initializing it by adding the `--access-token` flag to each command and providing an API token as the argument.

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl auth list

List named authentication contexts that you created with `doctl auth init`.

To switch between the contexts use `doctl auth switch --context <name>`, where `<name>` is one of the contexts listed.

To create new contexts, see the help for `doctl auth init`.

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl auth switch

This command allows you to switch between authentication contexts you’ve already created.

To see a list of available authentication contexts, call `doctl auth list`.

For details on creating an authentication context, see the help for `doctl auth init`.

## Step 1: Create and Upload SSH Keys

Our recommended setup uses SSH keys for authentication when logging into Droplets because password-based authentication is less secure. After you upload your SSH public key to your DigitalOcean account, you can add it automatically to any new Droplets you create, which avoids manually adding or configuring them.

### How do I do this?

If you don’t have an SSH key pair, create one using OpenSSH, which is included on Linux, macOS, and Windows Subsystem for Linux:

```shell
ssh-keygen
```

Your key pair is saved in the location prompted, which by default is `~/.ssh/` on Linux and `/Users/your_username/.ssh` on Windows and macOS. Copy the contents of your public key, which is named `id_ed25519.pub` by default.

Use `doctl compute ssh-key import` to upload the key to your account. Specify the public key file and a name for the key.

```shell
doctl compute ssh-key import TODO-KEY-NAME --public-key-file ~/.ssh/id_ed25519.pub
```

If you saved your SSH key to a location other than the default, use that path for `--public-key-file`.

Get more detail on creating SSH keys and `doctl ssh-key` commands.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl compute ssh-key import

Use this command to add a new SSH key to your account, using a local public key file.

Note that importing a key to your account will not add it to any Droplets

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl compute ssh-key create

Use this command to add a new SSH key to your account.

Specify a `<key-name>` for the key, and set the `--public-key` flag to a string with the contents of the key.

Note that creating a key will not add it to any Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with OpenSSH on MacOS or Linux

Use OpenSSH to create new SSH keys on MacOS, Linux, or Windows Subsystem for Linux.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with PuTTY on Windows

Use PuTTY to create SSH keys on Windows systems without Bash.

## Step 2: Create and Configure the Droplet

Our recommended setup for Droplets includes enabling several features: VPC (private networking), IPv6, monitoring, and backups.

- [VPC](https://docs.digitalocean.com/products/networking/vpc/) creates a private network interface accessible only by resources within the same account or team. It’s free and increases security and decreases bandwidth costs for resources that communicate using it. Enabling it later requires manual network configuration and rebooting the Droplet.

- [IPv6](https://docs.digitalocean.com/products/networking/ipv6/) enables an additional 16 IP addresses for the Droplet. It’s free and enabling it later requires manual network configuration and rebooting the Droplet.

- [Monitoring](https://docs.digitalocean.com/products/monitoring/) is a metrics visualization service that adds [additional graphs](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) to the control panel (like CPU load, RAM usage, and disk usage) and the ability to set up [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/). It’s free and enabling it from the start avoids manual setup and lets you understand your resource usage to make more informed decisions on when and how to scale.

- [Backups](https://docs.digitalocean.com/products/backups/) are automatic, system-level disk images of Droplets taken weekly, daily, or multiple times a day. Backups give you a way to revert a Droplet to an older state or recreate Droplets, protecting you against data loss.


Our setup also uses [user data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/), which is data that cloud-init consumes during the Droplet’s first boot to perform tasks or run scripts. The user data script in this tutorial implements two security measures:

- Disables password-based login to the Droplet, making it accessible with SSH keys only.

- Creates a sudo non-root user for day-to-day use. The root user has broad privileges that you don’t need for many tasks. Using a sudo non-root user decreases the risk of making destructive changes by accident and still lets you escalate privileges when necessary.


### How do I do this?

First, save [the `cloud-config` script](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/recommended-droplet-setup.sh) locally:

User data `cloud-config` script

```bash
#!/bin/bash
set -euo pipefail

USERNAME=sammy # TODO: Customize the sudo non-root username here

# Create user and immediately expire password to force a change on login
useradd --create-home --shell &#34;/bin/bash&#34; --groups sudo &#34;${USERNAME}&#34;
passwd --delete &#34;${USERNAME}&#34;
chage --lastday 0 &#34;${USERNAME}&#34;

# Create SSH directory for sudo user and move keys over
home_directory=&#34;$(eval echo ~${USERNAME})&#34;
mkdir --parents &#34;${home_directory}/.ssh&#34;
cp /root/.ssh/authorized_keys &#34;${home_directory}/.ssh&#34;
chmod 0700 &#34;${home_directory}/.ssh&#34;
chmod 0600 &#34;${home_directory}/.ssh/authorized_keys&#34;
chown --recursive &#34;${USERNAME}&#34;:&#34;${USERNAME}&#34; &#34;${home_directory}/.ssh&#34;

# Disable root SSH login with password
sed --in-place &#39;s/^PermitRootLogin.*/PermitRootLogin prohibit-password/g&#39; /etc/ssh/sshd_config
if sshd -t -q; then systemctl restart sshd fi
```

You can customize the username of the sudo non-root user on the emphasized line.

Next, use `doctl compute droplet create` to create the Droplet.

```shell
doctl compute droplet create TODO-NAME --tag-names TODO-TAG-NAME \
    --image ubuntu-18-04-x64 --region nyc3 --size s-2vcpu-2gb \
    --ssh-keys TODO-KEY-FINGERPRINT --user-data-file TODO-PATH-TO-FILE \
    --enable-ipv6 --enable-monitoring --enable-private-networking --enable-backups
```

Replace the `TODO-` values with your values. Choose a name for the Droplet and create a tag that matches what you’re using the Droplet for, like `webserver`. You need to use this tag to apply cloud firewalls in the next step. Specify the fingerprint of the SSH key you want to use and the relative path to the saved user data file. You can customize the given [datacenter region](https://docs.digitalocean.com/platform/regional-availability/#available-datacenters) and [Droplet size](https://docs.digitalocean.com/products/droplets/details/pricing/#droplet-sizes).

Get more detail on Droplet metadata and the `doctl` create command.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Access Information about a Droplet using the Metadata API

Use the Droplet metadata service to programmatically query a Droplet for information about itself.

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl compute droplet create

Creates a new Droplet on your account. The command requires values for the `--size`, and `--image` flags.

To retrieve a list of size slugs, use the `doctl compute size list` command. To retrieve a list of image slugs, use the `doctl compute image list` command.

If you do not specify a region, the Droplet is created in the default region for your account. If you do not specify any SSH keys, we email a temporary password to your account’s email address.

## Step 3: Create a Cloud Firewall

Firewalls place a barrier between your servers and other machines on the network to protect them from external attacks. [DigitalOcean Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/) are a free, stateful firewall service for Droplets. They block all traffic that isn’t expressly permitted by a rule.

You can apply cloud firewalls to individual Droplets by name or to one or more Droplets by [tag](https://docs.digitalocean.com/products/droplets/how-to/tag/). Our setup uses tags. When you add a tag to a cloud firewall, any Droplets with that tag are automatically included in the firewall configuration, including new Droplets that you tag during creation.

To start, we recommend the following default firewall rules:

- Restrict all inbound traffic except for SSH connections to the Droplet on port 22.

- Allow all outbound traffic to any destination on any port. Many fundamental services rely on outbound communication, and these defaults make it easier to set up a new Droplet without introducing restrictions that could cause expected problems.


In the long term, we recommend [organizing firewalls by role](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/), so you can create custom firewalls for your specific use case.

### How do I do this?

Create a firewall named `inbound-ssh-only`, specifying the tag you used for the new Droplet:

```shell
doctl compute firewall create --name "inbound-ssh-only" \
    --tag-names TODO-TAG-NAME \
    --inbound-rules "protocol:tcp,ports:22,address:0.0.0.0/0" \
    --outbound-rules "protocol:icmp,address:0.0.0.0/0,address:::/0 protocol:tcp,ports:all,address:0.0.0.0/0,address:::/0 protocol:udp,ports:all,address:0.0.0.0/0,address:::/0"
```

Get more detail on `doctl compute firewall create`.

The following articles have more detailed explanations of this step:

![](https://docs.digitalocean.com/images/icons/default.svg)

doctl compute firewall create

Creates a cloud firewall. This command must contain at least one inbound or outbound access rule.

## Summary

After you set up one Droplet with our recommended setup, setting up future ones is simpler because you don’t need to repeat most of the steps.

You only need to complete these steps once:

- Creating an SSH key pair
- Uploading your public key to your DigitalOcean account
- Creating the cloud firewall

To create additional Droplets with the same setup, the only step is choosing its configuration options:

1. Enable the same features (private networking, IPv6, monitoring, and backups).

2. Choose your SSH key.

3. Paste [the `cloud-config` script](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/recommended-droplet-setup.sh) in user data.

4. Add the tag for the cloud firewall.


```shell
doctl compute droplet create TODO-NAME --tag-names TODO-TAG-NAME \
    --image ubuntu-18-04-x64 --region nyc3 --size s-2vcpu-2gb \
    --ssh-keys TODO-KEY-FINGERPRINT --user-data-file TODO-PATH-TO-FILE \
    --enable-ipv6 --enable-monitoring --enable-private-networking --enable-backups
```

## What’s Next?

After this initial setup, you can use your Droplet to host a website, scale out from a single Droplet to multiple Droplets with a [load balancer](https://docs.digitalocean.com/products/networking/load-balancers/), or add [object storage](https://docs.digitalocean.com/products/spaces/) to serve assets.

In this article...

- [Before You Start](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/#before-you-start)
- [What’s Next?](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/#whats-next)

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