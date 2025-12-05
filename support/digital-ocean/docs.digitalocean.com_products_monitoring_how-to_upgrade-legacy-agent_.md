---
url: "https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/"
title: "How to Upgrade Your Legacy Metrics Agent | DigitalOcean Documentation"
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
- Upgrade Your Legacy Agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upgrade Your Legacy Metrics Agent

Validated on 3 Jul 2025 • Last edited on 14 Jul 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

As of 8 April 2019, all new metrics agent installations use our [Prometheus-based metrics agent](https://github.com/digitalocean/do-agent). This new agent is a lightweight, Prometheus-compatible monitoring agent that collects Droplet-level system metrics and reports them under the **DigitalOcean Monitoring** section.

As of 8 July 2019, we deprecated the legacy metrics agent. It was the monitoring agent used before we adopted the Prometheus-based agent. The legacy agent doesn’t support our newer metrics and also uses more system resources. Droplets still using this agent no longer show extended metrics in the DigitalOcean Control Panel or API.

Upgrading to the Prometheus-based agent ensures that you continue to receive extended metrics such as disk I/O, bandwidth, and CPU utilization. The newer agent also offers improved stability, lower resource usage, and compatibility with current monitoring features.

If you do not upgrade your metrics agent, your Droplet stops receiving extended metrics. This reduces visibility into resource usage and may interfere with your alerting and monitoring setup.

## Check If Your Using the Legacy Agent

Before upgrading your metrics agent, check if your Droplet is still using the legacy agent by running the following command:

```shell
ps aux | grep do-agent
```

If the output includes `/opt/digitalocean/bin/do-agent`, you’re using the Prometheus-based agent. If it shows `/usr/bin/droplet-agent`, another path without Prometheus references, or returns no output, you’re likely using the legacy agent and need to [upgrade your agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/#upgrade), or the agent is not running.

Alternatively, you can run the following command to check the installed agent version:

```shell
/opt/digitalocean/bin/do-agent --version
```

If this command fails or returns a version number below 3.x, you’re likely using the legacy agent and should [upgrade your agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/#upgrade).

## Upgrade Your Legacy Metrics Agent to the New Agent

To upgrade your legacy metrics agent to our [Prometheus-based metrics agent](https://github.com/digitalocean/do-agent), [uninstall the legacy metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/). After removing the legacy metrics agent, install the Prometheus-based metrics agent by [downloading the installation script, inspecting it, and running it manually](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#download-inspect-run).

If you want to upgrade multiple Droplets at once, use the [`upgrade-droplets.sh` script provided in the `do-agent` GitHub repository](https://github.com/digitalocean/do-agent/blob/master/scripts/upgrade-droplets.sh). You need an [SSH key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) and a [DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/). Alternatively, an [Ansible-based batch upgrade](https://galaxy.ansible.com/andrewsomething/do-agent) is available on Ansible Galaxy.

After upgrading the legacy agent, [verify if the installation was successful](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install-verify). If upgrading your metrics agent fails these checks, see the [do-agent GitHub issues page](https://github.com/digitalocean/do-agent/issues) for community-reported solutions or [open a support ticket](https://cloudsupport.digitalocean.com/).

In this article...

- [Check If Your Using the Legacy Agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/#check-if-your-using-the-legacy-agent)
- [Upgrade Your Legacy Metrics Agent to the New Agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/#upgrade)

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