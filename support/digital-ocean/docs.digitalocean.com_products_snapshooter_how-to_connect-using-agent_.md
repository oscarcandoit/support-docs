---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/"
title: "How to Connect Servers Using the SnapShooter Agent | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/snapshooter.13e207b5891670f2b29dbf31513a019ebef8731d27c25446bbf7557251aca915.svg)SnapShooter](https://docs.digitalocean.com/products/snapshooter/)
- [Getting Started](https://docs.digitalocean.com/products/snapshooter/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
  - [Connect DigitalOcean Teams](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/)
  - [Connect Other Accounts](https://docs.digitalocean.com/products/snapshooter/how-to/connect-other-accounts/)
  - [Connect Server Using SSH](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/)
  - [Connect Server Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/)
  - [Connect Containers Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/)
  - [Add an Encryption Key](https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/)
  - [Use Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/)
  - [Use Other Storage Providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/)
  - [Back Up Droplets](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-droplets/)
  - [Back Up Volumes](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/)
  - [Back Up Managed Databases](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/)
  - [Back Up Managed Kubernetes Resources](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/)
  - [Back Up Other Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/)
  - [Back Up Files](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-files/)
  - [Back Up PostgreSQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-postgresql-servers/)
  - [Back Up MySQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mysql-servers/)
  - [Back Up MongoDB Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mongodb-servers/)
  - [Back Up WordPress Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-wordpress-servers/)
  - [Back Up Laravel Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-laravel-servers/)
  - [Add Pre/Post-Backup Scripts](https://docs.digitalocean.com/products/snapshooter/how-to/add-pre-and-post-backup-scripts/)
  - [Restore Backups](https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/)
- [Reference](https://docs.digitalocean.com/products/snapshooter/reference/)
- [Details](https://docs.digitalocean.com/products/snapshooter/details/)
  - [Features](https://docs.digitalocean.com/products/snapshooter/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/snapshooter/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/snapshooter/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/snapshooter/details/limits/)
  - [IP Address Allowlist](https://docs.digitalocean.com/products/snapshooter/details/ip-address-allowlist/)
  - [SnapShooter Alpha and Beta Tests for Backup Jobs](https://docs.digitalocean.com/products/snapshooter/details/alpha-beta-tests/)
- [Support](https://docs.digitalocean.com/products/snapshooter/support/)

- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
- Connect Server Using Agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect Servers Using the SnapShooter Agent

Validated on 16 Oct 2023 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

The SnapShooter Agent allows SnapShooter to communicate with private resources that are behind a NAT gateway or firewall. Using the agent also eliminates the need to configure firewalls, incoming connection rules, or IP allowlists.

The agent works by opening a persistent communication channel from the target resource back to the SnapShooter network. The resulting backups are identical to backups taken with an SSH-based connection.

## Supported Environments

The SnapShooter Agent supports the following architectures:

- x86 (`386`)
- x86 64-bit (`amd64`)
- ARM (`arm`)
- ARM 64-bit (`arm64`)

The agent runs on the following operating systems:

- Linux (`linux`)
- OpenBSD (`openbsd`)
- FreeBSD (`freebsd`)
- NetBSD (`netbsd`)
- macOS (`darwin`)


## Software Prerequisites

The following tools are required to install the SnapShooter Agent:

- `bash`
- `curl`
- `gzip`
- `tar`

These are available for every supported operating system, but may not be installed by default. Verify that they are installed or install them via your operating system’s package manager:

```shell
# Using APT
apt-get install curl gzip tar

# Using YUM
yum install curl gzip tar

# Using DNF
dnf install curl gzip tar

# Using Pacman
pacman -Syu curl gzip tar

# Using APK
apk add curl gzip tar
```

## Install the Agent

There are two ways to install the SnapShooter Agent: by using our automatic installation script, or by manually downloading and installing the agent.

Automatic installation script

To use the automatic installation script, first open the [Create an Agent Setup Token page](https://app.snapshooter.com/agents/setup-tokens/create). Name your token and click the **Create Setup Token** button.

Find your token in the [**Active Setup Tokens** list](https://app.snapshooter.com/agents/setup-tokens) and click its **Show Setup Script** button. Copy the displayed script, which is similar to the following:

```shell
bash <(curl -sSL https://agents.snapshooter.com/install.sh) '274|yHrIPApr2rb5fcweECX72tG186SPVNPeAxCv5vjl'
```

Log in to your server’s command line as the `root` user and paste the script, then press `Enter` to run the script.

When the script exits, verify the service has been installed, enabled, and activated using `systemctl`:

```shell
systemctl status snapshooter
```

```
● snapshooter.service - SnapShooter agent
     Loaded: loaded (/etc/systemd/system/snapshooter.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2023-10-16 16:45:15 UTC; 8s ago
   Main PID: 216026 (agent)
      Tasks: 7 (limit: 9478)
     Memory: 5.8M
        CPU: 20ms
     CGroup: /system.slice/snapshooter.service
             └─216026 /opt/snapshooter/agent

Oct 16 16:45:15 builder systemd[1]: Started SnapShooter agent.
```

The output indicates that the service is active and running. Go to the [Agent Servers page](https://app.snapshooter.com/agents) to verify the new server is listed and online:

![screenshot of the Agent Servers dashboard page, showing a list of 1 server, with columns of name, registered date, and action buttons to view, edit, and delete](https://docs.digitalocean.com/screenshots/snapshooter/agent-server-list.bd5a4350ab47a7118a20de5e9134fd775ee0212a1c4e1a6bad1e2e9e21375667.png)

Manual installation

If you prefer not to run the automated installation script, you can manually download and install the agent.

First, go to the [Manually Add an Agent Server](https://app.snapshooter.com/agents/add/manual) page.

Name your server and click **Generate Agent Server Token**.

Select the target [operating system and architecture](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/#supported-environments) of your resource. This generates the correct download URL. Copy the URL to your clipboard.

Log in to your server’s command line as the `root` user and use `curl` to download the agent:

```shell
curl -sSL <generated download url> -o agent.gz
```

Substitute `<generated download url>` with the URL you copied from the dashboard. `curl` downloads the file to `agent.gz` in your current directory. Decompress the downloaded file:

```shell
gzip -d agent.gz
```

You can store the agent binary in any directory. We recommend keeping all SnapShooter-related installations under `/opt/snapshooter`:

```shell
mkdir -p /opt/snapshooter
mv ./agent /opt/snapshooter/
chmod +x /opt/snapshooter/agent
```

This creates the target directory, moves the binary file into it, and sets the file as executable.

The SnapShooter Agent needs a token to authenticate and identify itself. The token is shown as the `SNAPSHOOTER_AGENT_TOKEN` environment variable in the command at the bottom of the page.

You can pass this token to the SnapShooter Agent in two ways:

1. From a file named `agent.conf`, which must be available in the same directory as the agent binary file:

```shell
echo '<your-token>' > /opt/snapshooter/agent.conf
```

2. As the `SNAPSHOOTER_AGENT_TOKEN` environment variable. One method for passing this variable to the agent is shown in the generated dashboard script:

```shell
SNAPSHOOTER_AGENT_TOKEN='314|evmyXom7OZtC6yhw7tAsWfFf9cQnpYASyjFSHsaE' ./agent-linux-amd64
```

SnapShooter services only allow up to 1 connection per token, so you can only run one instance of a SnapShooter Agent with a given token. All other connections are dropped immediately.

You can manage the execution of the SnapShooter Agent like any other process. For example, you can run it as an always-on systemd service, use a tool like [Supervisor](http://supervisord.org/) to keep your service running in the background, or run it in a detached terminal using [tmux](https://github.com/tmux/tmux/wiki).

By default, if the SnapShooter Agent disconnects from SnapShooter’s network, it tries to reconnect automatically. However, using a process manager ensures that the process is always running, even after software updates and server reboots.

## Uninstall the Agent

To uninstall the agent, deactivate its service and delete the relevant files.

First verify that you no longer have any backup jobs configured using your SnapShooter Agent. You can check this by going to your [SnapShooter Agent Servers Dashboard](https://app.snapshooter.com/agents). Locate and open your SnapShooter Agent and ensure that no backup jobs are listed for this server.

You can either remove the backup jobs entirely, or assign them to another resource.

Next, check if the SnapShooter Agent is running as a service using systemd or another tool like [Supervisor](http://supervisord.org/), then disable and stop its execution. For the systemd service installed by the automatic installation script, use `systemctl`:

```shell
systemctl stop snapshooter
systemctl disable snapshooter
rm /etc/systemd/system/snapshooter.service
```

This stops and disables the service, then removes its systemd configuration file.

Now remove the contents of the installation directory. If you used the automatic installation script, the SnapShooter Agent configuration files and binaries are located in `/opt/snapshooter`:

```shell
rm -rf /opt/snapshooter
```

Remove the SnapShooter Agent from the [SnapShooter Agent Servers Dashboard](https://app.snapshooter.com/agents). This can be done by opening your SnapShooter Agent and then pressing **Delete**.

In this article...

- [Supported Environments](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/#supported-environments)
- [Software Prerequisites](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/#software-prerequisites)
- [Install the Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/#install-the-agent)
- [Uninstall the Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/#uninstall-the-agent)

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