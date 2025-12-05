---
url: "https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/"
title: "How to Install the DigitalOcean Metrics Agent | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/monitoring.76945ea4a7d45a01469c36e1133e112e8cf2b800c56b8106f31d27b146221b0f.svg)Monitoring](https://docs.digitalocean.com/products/monitoring/)
- [Getting Started](https://docs.digitalocean.com/products/monitoring/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/monitoring/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/monitoring/how-to/)
  - [Install the Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/)
  - [Install the Metrics Agent via Metrics Agent Repository](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/)
  - [Uninstall the Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/)
  - [Manage Resource Alerts](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/)
  - [Upgrade Your Legacy Agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/)
- [Reference](https://docs.digitalocean.com/products/monitoring/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/monitoring)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/monitoring/)
- [Concepts](https://docs.digitalocean.com/products/monitoring/concepts/)
  - [Metrics](https://docs.digitalocean.com/products/monitoring/concepts/metrics/)
- [Details](https://docs.digitalocean.com/products/monitoring/details/)
  - [Features](https://docs.digitalocean.com/products/monitoring/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/monitoring/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/monitoring/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/monitoring/details/limits/)
- [Support](https://docs.digitalocean.com/products/monitoring/support/)

- [How-Tos](https://docs.digitalocean.com/products/monitoring/how-to/)
- Install the Metrics Agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Install the DigitalOcean Metrics Agent

Validated on 4 Nov 2025 • Last edited on 4 Nov 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

The DigitalOcean metrics agent is an open-source Go utility that collects system-level metrics and forwards them to DigitalOcean. It enables extended Droplet monitoring features, including usage graphs, alerting, and custom metrics.

Note

**Data Collection Disclosure:** The DigitalOcean metrics agent collects and sends system telemetry data for the purpose of performance monitoring and alerting. No Customer Content is collected or transmitted. Historical data remains in our database for 90 days after uninstalling the agent, after which it is automatically deleted.

For GPU Droplets created via the control panel using our **AI/ML Ready** image, the metrics agent option is selected by default. To uninstall the metrics agent, read [How to Uninstall the DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/).

The metrics agent is supported on Ubuntu 14.04 or later, CentOS 6 or later, Debian 8 or later, and Fedora 27 or later. You can install it during [Droplet creation](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install-during-creation), [manually afterward using a script](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install), [by configuring repositories directly](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/), or [run it as a Docker container](https://github.com/digitalocean/do-agent#run-as-a-docker-container). To stop using the agent, you can [uninstall it at any time](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/).

The metrics agent runs as an unprivileged user and only has access to the following directories:

- **`/proc`**: collects system state data
- **`/var/opt`**: stores authentication information
- **`/opt/digitalocean`**: stores the agent binary

The agent reports process names to help guide product development but does not report environment variables or process arguments. You can [opt out of process name collection](https://docs.digitalocean.com/support/how-do-i-disable-process-name-collection-in-my-metrics-agent/), if needed.

The agent uses only outbound network connections on ports:

- **80**, which contacts the DigitalOcean metadata service to obtain an authentication token.
- **443**, which sends encrypted metrics data to the backend.

The agent uses only outbound connections and does not open any ports, so it does not interfere with existing services or workloads.

## Enable the Metrics Agent During Droplet Creation

You can enable monitoring when you [create a Droplet](https://docs.digitalocean.com/products/droplets/how-to/create/#recommended-and-advanced-options) under the **We recommend these options** section, by clicking **Enable Monitoring**.

Alternatively, you can enable monitoring via the DigitalOcean API or CLI by:

- Setting the `monitoring` parameter to `true` when [creating a Droplet via API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api), or
- Adding the `--enable-monitoring` flag when [creating a Droplet using the CLI](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-cli).

## Install the Metrics Agent Manually Using the Script

The installation script detects your operating system, configures the correct DigitalOcean package repository, installs the `do-agent` package using your system’s package manager, and enables the service.

To begin installing the metrics agent, go to the [**DigitalOcean Control Panel Droplet** page](https://cloud.digitalocean.com/droplets) and find the Droplet where you want to install the metrics agent for.

Afterwards, beside the Droplet, click its **More** menu, and then click **Access Console** to open the Droplet’s **Access** page. On the **Access** page, under the **Droplet Console** section, log in as `root`, and then click **Launch Droplet Console** to open the Droplet’s **DigitalOcean Droplet Web Console**.

You can [run the script directly](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#download-run) or [review it before executing](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#download-inspect-run).

### Download and Run Script

To install the agent in a single step, download the metrics agent installation script and run it immediately:

```shell
curl -sSL https://repos.insights.digitalocean.com/install.sh | sudo bash
```

After you run the command, the script verifies compatibility, installs system dependencies, adds the appropriate package repositories, and installs the metrics agent. The script returns output similar to the following:

```text
Cleaning up old sources...OK
Verifying machine compatibility...OK
Verifying compatibility with script...OK
Installing apt repository...
...
Installing gpg key...Selecting previously unselected package do-agent.
...
Preparing to unpack .../do-agent_3.17.1_amd64.deb ...
Unpacking do-agent (3.17.1) ...
Setting up do-agent (3.17.1) ...
Detecting SELinux
SELinux not enforced
enable systemd service
Created symlink '/etc/systemd/system/multi-user.target.wants/do-agent.service' → '/etc/systemd/system/do-agent.service'.
...
```

After you run the script, [verify the agent is running](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#verify-install).

### Download, Inspect, and Run Script

Alternatively, you can review the script before running it to audit the changes it makes to your system. This helps maintain transparency, especially in production environments or when internal security policies require script review.

To review the script before running it, save the script to `/tmp/install.sh`:

```shell
curl -sSL https://repos.insights.digitalocean.com/install.sh -o /tmp/install.sh
```

This command produces no output. To confirm the file was downloaded successfully, check that it exists and has content using the following command:

```shell
ls -lh /tmp/install.sh
```

If the download was successful, the command returns output similar to this, confirming that the file exists at `/tmp/install.sh`:

```text
-rw-r--r-- 1 root root 7.2K ... /tmp/install.sh
```

Then, run a `less` command to view the script contents:

```shell
less /tmp/install.sh
```

After reviewing the script, type `q` to exit the viewer.

If you prefer not to use the installation script, you can [install the agent manually using the repository](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/).

After reviewing the script, run the script manually with administrative privileges, completing the installation:

```shell
sudo bash /tmp/install.sh
```

The output confirms that the script verified compatibility, installed the `do-agent` package, and enabled the agent service to start on boot, like this:

```text
Cleaning up old sources...OK
Verifying machine compatibility...OK
Verifying compatibility with script...OK
Installing apt repository...
Installing gpg key...Selecting previously unselected package do-agent.
(Reading database ... 76045 files and directories currently installed.)
Preparing to unpack .../do-agent_3.17.1_amd64.deb ...
Unpacking do-agent (3.17.1) ...
Setting up do-agent (3.17.1) ...
Detecting SELinux
SELinux not enforced
useradd: user 'do-agent' already exists
enable systemd service
Created symlink '/etc/systemd/system/multi-user.target.wants/do-agent.service' → '/etc/systemd/system/do-agent.service'.
...
```

After installation, [verify that the agent is running](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install-verify).

In the control panel, go to your Droplet’s **Graphs** tab to view metrics. The metrics data appears a few minutes after the agent starts and begins reporting data.

## Verify the Metrics Agent is Running

To check if the status of the `do-agent` systemd service is active, run:

```shell
systemctl status do-agent
```

If your metrics agent is active, you see output confirming that the agent is installed, actively running, and set to start automatically on boot:

```text
● do-agent.service - The DigitalOcean Monitoring Agent
     Loaded: loaded (/etc/systemd/system/do-agent.service; enabled; preset: enabl>
     Active: active (running) since Wed 2025-06-18 19:14:50 UTC; 35s ago
 Invocation: da1c6db71e3b46f7919b61a295db71c1
   Main PID: 4675 (do-agent)
      Tasks: 4 (limit: 4655)
     Memory: 3.7M (peak: 4.1M)
        CPU: 51ms
     CGroup: /system.slice/do-agent.service
             └─4675 /opt/digitalocean/bin/do-agent --syslog
```

Next, check if the agent process is running directly by searching for any running processes with the name `do-agent`:

```shell
ps aux | grep do-agent
```

If your metrics agent is running, you should see output that includes a line confirming the agent is running as a background process, like this:

```text
do-agent    4675  0.0  0.3 1237180 14712 ?       Ssl  19:14   0:00 /opt/digitalocean/bin/do-agent --syslog
root        4733  0.0  0.0   7156  2144 pts/0    S+   19:15   0:00 grep --color=auto do-agent
```

If the service is not running or these commands return no output, [contact DigitalOcean support](https://cloudsupport.digitalocean.com/) for help troubleshooting the installation.

In this article...

- [Enable the Metrics Agent During Droplet Creation](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install-during-creation)
- [Install the Metrics Agent Manually Using the Script](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install)
  - [Download and Run Script](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#download-run)
  - [Download, Inspect, and Run Script](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#download-inspect-run)
- [Verify the Metrics Agent is Running](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install-verify)

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