---
url: "https://docs.digitalocean.com/reference/doctl/how-to/install/"
title: "How to Install and Configure doctl | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
  - [How to Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)
  - [Command Reference](https://docs.digitalocean.com/reference/doctl/reference/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- How to Install doctl

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Install and Configure doctl

Validated on 15 Apr 2020 • Last edited on 20 Oct 2025

## Step 1: Install doctl

Install `doctl` following the directions for your package manager or operating system:

Homebrew (macOS)

To install the latest version of `doctl` using Homebrew on macOS, run:

```
brew install doctl
```

Snap Package (Ubuntu)

To install the latest version of `doctl` using Snap on Ubuntu or [other supported operating systems](https://snapcraft.io/docs/installing-snapd), run:

```
sudo snap install doctl
```

For security purposes, Snaps run in complete isolation and need to be granted permission to interact with your system’s resources. Some `doctl` commands require additional permissions:

- Using `doctl`’s integration with `kubectl` requires the `kube-config` [personal-files interface](https://snapcraft.io/docs/personal-files-interface). To enable it, run:

```
sudo snap connect doctl:kube-config
```

- Using `doctl compute ssh` requires the core [ssh-keys interface](https://docs.snapcraft.io/ssh-keys-interface). To enable it, run:

```
sudo snap connect doctl:ssh-keys :ssh-keys
```

- Using `doctl registry login` requires the `dot-docker` [personal-files interface](https://snapcraft.io/docs/personal-files-interface). To enable it, run:

```
sudo snap connect doctl:dot-docker
```

GitHub Download (Linux, macOS)

Visit the [Releases page](https://github.com/digitalocean/doctl/releases) for the `doctl` GitHub project and find the appropriate archive for your operating system and architecture. Download the archive from your browser or copy its URL and retrieve it to your home directory with `wget`.

For example, to download the most recent version of `doctl` for Linux with `wget`, run:

```
cd ~
wget https://github.com/digitalocean/doctl/releases/download/v1.146.0/doctl-1.146.0-linux-amd64.tar.gz
```

Next, extract the binary. For example, to do so using `tar`, run:

```
tar xf ~/doctl-1.146.0-linux-amd64.tar.gz
```

Finally, move the `doctl` binary into your path by running:

```
sudo mv ~/doctl /usr/local/bin
```

GitHub Download (Windows)

Visit the [Releases page](https://github.com/digitalocean/doctl/releases) for the `doctl` GitHub project and find the appropriate archive for your operating system and architecture. Download the archive from your browser or copy its URL and retrieve using PowerShell.

For example, to download the most recent version of `doctl`, run:

```
Invoke-WebRequest https://github.com/digitalocean/doctl/releases/download/v1.146.0/doctl-1.146.0-windows-amd64.zip -OutFile ~\doctl-1.146.0-windows-amd64.zip
```

Next, extract the binary by running:

```
Expand-Archive -Path ~\doctl-1.146.0-windows-amd64.zip
```

Finally, in a PowerShell terminal opened with **Run as Administrator**, move the `doctl` binary into a dedicated directory and add it to your system’s path by running:

```
New-Item -ItemType Directory $env:ProgramFiles\doctl\
Move-Item -Path ~\doctl-1.146.0-windows-amd64\doctl.exe -Destination $env:ProgramFiles\doctl\
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path",
    [EnvironmentVariableTarget]::Machine) + ";$env:ProgramFiles\doctl\",
    [EnvironmentVariableTarget]::Machine)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine")
```

## Step 2: Create an API token

[Create a DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) for your account with read and write access from the [Applications & API page](https://cloud.digitalocean.com/account/api/tokens) in the control panel. The token string is only displayed once, so save it in a safe place.

## Step 3: Use the API token to grant account access to doctl

Note
If you installed `doctl` using the Ubuntu Snap package, you may need to first create the user configuration directory if it does not exist yet by running `mkdir ~/.config`.

Use the API token to grant doctl access to your DigitalOcean account. Pass in the token string when prompted by `doctl auth init`, and give this authentication context a name.

```bash
doctl auth init --context <NAME>
```

Authentication contexts let you switch between multiple authenticated accounts. You can repeat steps 2 and 3 to add other DigitalOcean accounts, then list and switch between authentication contexts:

```bash
doctl auth list
doctl auth switch --context <NAME>
```

## Step 4: Validate that doctl is working

Now that `doctl` is authorized to use your account, try some test commands.

To confirm that you have successfully authorized `doctl`, [review your account details](https://docs.digitalocean.com/reference/doctl/reference/account/get/) by running:

```bash
doctl account get
```

If successful, the output looks like:

```
Email                      Droplet Limit    Email Verified    UUID                                        Status
sammy@example.org          10               true              3a56c5e109736b50e823eaebca85708ca0e5087c    active
```

To confirm that you have successfully granted write access to `doctl`,
[create an Ubuntu 24.04 Droplet](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/create/) in [the SFO2 region](https://docs.digitalocean.com/platform/regional-availability/) by running:

```bash
doctl compute droplet create --region sfo2 --image ubuntu-24-04-x64 --size s-1vcpu-1gb <DROPLET-NAME>
```

The output of that command includes an **ID** column with the new Droplet’s ID. For example:

```
ID           Name            Public IPv4    Private IPv4    Public IPv6    Memory    VCPUs    Disk    Region    Image                       Status    Tags    Features    Volumes
187949338    droplet-name                                                  1024      1        25      sfo2      Ubuntu 24.04 (LTS) x64      new
```

Use that value to [delete the Droplet](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/delete/) by running:

```bash
doctl compute droplet delete <DROPLET-ID>
```

When prompted, type `y` to confirm that you would like to delete the Droplet.

## Step 5: Install Serverless Functions support (Optional)

To use `doctl` with [our serverless Functions product](https://docs.digitalocean.com/products/functions/), you must first install a software extension, then use it to connect to the development namespace.

To install the support for serverless Functions, run the `serverless install` subcommand:

```bash
doctl serverless install
```

This downloads and installs the extension, providing status updates along the way:

```
Downloading...Unpacking...Installing...Cleaning up...
Done
```

You are now ready to create a namespace and deploy your functions. See the [Functions Quickstart](https://docs.digitalocean.com/products/functions/getting-started/quickstart/) to get started.

In this article...

- [Step 1: Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-1-install-doctl)
- [Step 2: Create an API token](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-2-create-an-api-token)
- [Step 3: Use the API token to grant account access to doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-3-use-the-api-token-to-grant-account-access-to-doctl)
- [Step 4: Validate that doctl is working](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-4-validate-that-doctl-is-working)
- [Step 5: Install Serverless Functions support (Optional)](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-5-install-serverless-functions-support-optional)

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