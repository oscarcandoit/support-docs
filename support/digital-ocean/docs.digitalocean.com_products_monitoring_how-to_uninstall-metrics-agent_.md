---
url: "https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/"
title: "How to Uninstall the DigitalOcean Metrics Agent | DigitalOcean Documentation"
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
- Uninstall the Metrics Agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Uninstall the DigitalOcean Metrics Agent

Validated on 4 Nov 2025 • Last edited on 4 Nov 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

If you no longer need to monitor your Droplet’s metrics, you can uninstall the metrics agent using your system’s package manager and remove its repository configuration.

Note **Data Retention Disclosure:** After uninstalling the DigitalOcean metrics agent, system telemetry data already processed by the agent remains in our database for 90 days, after which it is automatically deleted.

## Check Which Operating System Your Droplet Uses

Uninstalling the metrics agent from your Droplet depends on your operating system and what package manager it uses. For example, Ubuntu and Debian use `apt`, while CentOS and Fedora use `yum`. To check which operating system your Droplet is running, use the following command:

```shell
cat /etc/os-release
```

For example, if your Droplet uses Ubuntu, you see output similar to this:

```text
NAME="Ubuntu"
VERSION="22.04.4 LTS (Jammy Jellyfish)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 22.04.4 LTS"
VERSION_ID="22.04"
```

## Uninstall Metrics Agent

Uninstalling the DigitalOcean metrics agent depends on your operating system. After you [check which operating system your Droplet uses](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/#check-which-operating-system-your-droplet-uses), follow the steps for your system to remove the `do-agent` package and delete the repository configuration file.

Ubuntu and Debian

To remove the metrics agent, remove the `do-agent` package and all associated configuration files:

```shell
sudo apt-get purge do-agent
```

You should see output showing that `apt` has found the `do-agent` package and is ready to remove it along with its configuration files. When prompted, type `Y`, and then press `ENTER` to confirm the uninstallation.

```text
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  do-agent*
0 upgraded, 0 newly installed, 1 to remove and 168 not upgraded.
After this operation, 13.1 MB disk space will be freed.
Do you want to continue? [Y/n]
```

After confirming, you should see output confirming the agent was removed, its configuration purged, and any system services cleaned up. The warnings about stopping or disabling the service simply mean the service was not actively running at the time of removal.

```text
(Reading database ... 76054 files and directories currently installed.)
Removing do-agent (3.17.1) ...
Cleaning up systemd scripts
Removed '/etc/systemd/system/multi-user.target.wants/do-agent.service'.
removed '/etc/cron.daily/do-agent'
(Reading database ... 76047 files and directories currently installed.)
Purging configuration files for do-agent (3.17.1) ...
Cleaning up systemd scripts
Failed to stop do-agent.service: Unit do-agent.service not loaded.
Failed to disable unit: Unit do-agent.service does not exist
```

If you installed the agent [using the repository method](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/), also remove the repository configuration:

```shell
sudo rm /etc/apt/sources.list.d/digitalocean-agent.list
```

This command produces no output if successful. To verify that the file was removed, run the following command that checks if the repository file still exists:

```shell
test -f /etc/apt/sources.list.d/digitalocean-agent.list && echo "Repo still exists" || echo "Repo successfully removed"
```

If the removal was successful, then you should see the `echo` message confirming it:

```text
...
Repo successfully removed
```

CentOS and Fedora

To remove the metrics agent, remove the `do-agent` package from your system:

```shell
sudo yum remove do-agent
```

The command returns output confirming that `yum` found the `do-agent` package and is ready to remove it. When prompted, type `Y`, and then press `ENTER` to proceeed with the uninstallation.

```text
Package                           Arch      Version                           Repository             Size
Removing:
 do-agent                         x86_64    3.17.1-1                          sonar              12.5 MiB

Transaction Summary:
 Removing:           1 package

Is this ok [y/N]:
```

After confirming, the installation returns output confirming the agent was successfully removed from your Droplet.

```text
Running transaction
[1/2] Prepare transaction                                        100% |  47.0   B/s |   1.0   B |  00m00s
[2/2] Erasing do-agent-0:3.17.1-1.x86_64                         100% |   3.0   B/s |   5.0   B |  00m01s
Complete!
```

Then, if you installed via [downloading the metrics agent repository](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/), remove the repository configuration by deleting the YUM repository file:

```shell
sudo rm /etc/yum.repos.d/digitalocean-agent.repo
```

This command doesn’t produce any output if successful. To verify that the file was removed, run this command, which checks if the repository file still exists:

```shell
test -f /etc/yum.repos.d/digitalocean-agent.repo && echo "Repo still exists" || echo "Repo successfully removed"
```

The command returns an `echo` message confirming that the removal was successful:

```text
...
Repo successfully removed
```

## Verify Uninstallation is Successful

To confirm that the metrics agent is fully removed from your Droplet, check the service status:

```shell
systemctl status do-agent
```

If the uninstallation was successful, the output should state that the `do-agent` service no longer exists and the agent is fully uninstalled:

```text
Unit do-agent.service could not be found.
```

If the `do-agent` service still appears or is listed as active, [repeat the uninstallation steps](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/#uninstall) or [contact DigitalOcean support](https://cloudsupport.digitalocean.com/) for assistance.

In this article...

- [Check Which Operating System Your Droplet Uses](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/#check-which-operating-system-your-droplet-uses)
- [Uninstall Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/#uninstall-metrics-agent)
- [Verify Uninstallation is Successful](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/#verify-uninstall)

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