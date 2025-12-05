---
url: "https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/"
title: "doctl kubernetes cluster create | DigitalOcean Documentation"
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
    - [doctl 1-click](https://docs.digitalocean.com/reference/doctl/reference/1-click/)
    - [doctl account](https://docs.digitalocean.com/reference/doctl/reference/account/)
    - [doctl apps](https://docs.digitalocean.com/reference/doctl/reference/apps/)
    - [doctl auth](https://docs.digitalocean.com/reference/doctl/reference/auth/)
    - [doctl balance](https://docs.digitalocean.com/reference/doctl/reference/balance/)
    - [doctl billing-history](https://docs.digitalocean.com/reference/doctl/reference/billing-history/)
    - [doctl compute](https://docs.digitalocean.com/reference/doctl/reference/compute/)
    - [doctl databases](https://docs.digitalocean.com/reference/doctl/reference/databases/)
    - [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/genai/)
    - [doctl invoice](https://docs.digitalocean.com/reference/doctl/reference/invoice/)
    - [doctl kubernetes](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/)
      - [1-click](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/1-click/)
      - [cluster](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/)
        - [create](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/)
        - [delete](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete/)
        - [delete-selective](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete-selective/)
        - [get](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/get/)
        - [get-upgrades](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/get-upgrades/)
        - [kubeconfig](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/kubeconfig/)
        - [list](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/list/)
        - [list-associated-resources](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/list-associated-resources/)
        - [node-pool](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/)
        - [registry](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/registry/)
        - [update](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/update/)
        - [upgrade](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/upgrade/)
      - [options](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/options/)
    - [doctl monitoring](https://docs.digitalocean.com/reference/doctl/reference/monitoring/)
    - [doctl network](https://docs.digitalocean.com/reference/doctl/reference/network/)
    - [doctl nfs](https://docs.digitalocean.com/reference/doctl/reference/nfs/)
    - [doctl projects](https://docs.digitalocean.com/reference/doctl/reference/projects/)
    - [doctl registries](https://docs.digitalocean.com/reference/doctl/reference/registries/)
    - [doctl registry](https://docs.digitalocean.com/reference/doctl/reference/registry/)
    - [doctl serverless](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
    - [doctl spaces](https://docs.digitalocean.com/reference/doctl/reference/spaces/)
    - [doctl version](https://docs.digitalocean.com/reference/doctl/reference/version/)
    - [doctl vpcs](https://docs.digitalocean.com/reference/doctl/reference/vpcs/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [doctl kubernetes](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/)
- [cluster](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/)
- create

[Give Feedback](https://ideas.digitalocean.com/documentation)

# doctl kubernetes cluster create

Generated on 20 Oct 2025
from `doctl` version
[`v1.146.0`](https://github.com/digitalocean/doctl/releases/tag/v1.146.0)

## Usage

```shell
doctl kubernetes cluster create <name> [flags]
```

## Aliases

```shell
c
```

## Description

Creates a Kubernetes cluster given the specified options and using the specified name. Before creating the cluster, you can use `doctl kubernetes options` to see possible values for the various configuration flags.

If no configuration flags are used, a three-node cluster with a single node pool is created in the `nyc1` region, using the latest Kubernetes version.

After creating a cluster, a configuration context is added to kubectl and made active so that you can begin managing your new cluster immediately.

## Example

The following example creates a cluster named `example-cluster` in the `nyc1` region with a node pool, using Kubernetes version `1.28.2-do.0`:

```shell
doctl kubernetes cluster create example-cluster --region nyc1 --version 1.28.2-do.0 --maintenance-window saturday=02:00 --node-pool "name=example-pool;size=s-2vcpu-2gb;count=5;tag=web;tag=frontend;label=key1=value1;label=key2=label2;taint=key1=value1:NoSchedule;taint=key2:NoExecute"
```

## Flags

| Option | Description |
| --- | --- |
| `--1-clicks` | A comma-separated list of 1-click `applications` to install on the Kubernetes cluster. Use the `doctl kubernetes 1-click list` command for a list of available 1-click applications. |
| `--auto-upgrade` | Enables automatic upgrades to new patch releases during the cluster’s maintenance window. Defaults to `false`. To enable automatic upgrade, supply `--auto-upgrade=true`.<br>Default: `false` |
| `--cluster-subnet` | The CIDR block to use for the pod network. Must be a valid CIDR block. Defaults to `10.244.0.0/16`. If left empty/default the cluster will be created with a virtual network. If a custom one is provided, the cluster will be created as vpc-native cluster. VPC-native CIDR blocks cannot overlap within an account. |
| `--control-plane-firewall-allowed-addresses` | A comma-separated list of allowed addresses that can access the control plane. |
| `--count` | The number of nodes in the default node pool (incompatible with –node-pool)<br>Default: `3` |
| `--enable-amd-gpu-device-metrics-exporter-plugin` | Creates the cluster with amd gpu device metrics exporter plugin installed. Defaults to false. To enable it, supply –enable-amd-gpu-device-metrics-exporter-plugin=true.<br>Default: `false` |
| `--enable-amd-gpu-device-plugin` | Creates the cluster with amd gpu device plugin installed. Defaults to true for clusters with AMD GPUs and otherwise false. To always enable it, supply –enable-amd-gpu-device-plugin=true.<br>Default: `false` |
| `--enable-control-plane-firewall` | Creates the cluster with control plane firewall enabled. Defaults to false. To enable the control plane firewall, supply –enable-control-plane-firewall=true.<br>Default: `false` |
| `--enable-routing-agent` | Creates the cluster with routing-agent enabled. Defaults to false. To enable routing-agent, supply –enable-routing-agent=true.<br>Default: `false` |
| `--expanders` | Customizes expanders used by cluster-autoscaler. The autoscaler will apply each expander from the provided comma-separated list to narrow down the selection of node types created to scale up, until either a single node type is left, or the list of expanders is exhausted. Available expanders: random, least-waste, priority. If this flag is empty, autoscaler will use its default expanders. |
| `--ha` | Creates the cluster with a highly-available control plane. Defaults to false. To enable the HA control plane, supply –ha=true.<br>Default: `false` |
| `--help`, `-h` | Help for this command |
| `--maintenance-window` | Sets the beginning of the `schedule` for the four hour maintenance window for the cluster. The syntax format is: `day=HH:MM`, where time is in UTC. Day can be: `any`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.<br>Default: `any=00:00` |
| `--node-pool` | A comma-separated list of `node-pools`, defined using semicolon-separated configuration values and surrounded by quotes (incompatible with –size and –count).<br>Format: `"name=your-name;size=size_slug;count=5;tag=tag1;tag=tag2;label=key1=value1;label=key2=label2;taint=key1=value1:NoSchedule;taint=key2:NoExecute"` where:<br>- `name`: The name of the node pool, which must be unique in the cluster<br>- `size`: The machine size of the nodes to use. Use the `doctl kubernetes options sizes` command for a list of available options.<br>- `count`: The number of nodes to create<br>- `tag`: A comma-separated list of tags to apply to nodes in the pool<br>- `label`: A label in `key=value` notation. Repeat to add multiple labels at once.<br>- `taint`: Taint in `key=value:effect` notation. Repeat to add multiple taints at once.<br>- `auto-scale`: Enables cluster auto-scaling on the node pool (boolean).<br>- `min-nodes`: The minimum number of nodes that the cluster can be auto-scaled to. The value will be 0 if auto\_scale is set to false. Scale-to-zero is not supported.<br>- `max-nodes`: The maximum number of nodes that can be auto-scaled to. |
| `--region` | A `slug` indicating which region to create the cluster in. Use the `doctl kubernetes options regions` command for a list of options (required)<br>Default: `nyc1` |
| `--scale-down-unneeded-time` | The unneed time for the cluster autoscaler’s scale-down-unneeded-time. It defines how long a node should be unneeded before it is eligible for scale down. To set the scale-down-unneeded-time to a minute and 30 seconds for example, pass the string ‘1m30s’. |
| `--scale-down-utilization-threshold` | The threshold value for the cluster autoscaler’s scale-down-utilization-threshold. It is the maximum value between the sum of CPU requests and sum of memory requests of all pods running on the node divided by node’s corresponding allocatable resource, below which a node can be considered for scale down. To set the scale-down-utilization-threshold to 50%, pass the floating point value 0.5. |
| `--service-subnet` | The CIDR block to use for the service network. Must be a valid CIDR block. Defaults to `10.245.0.0/16`. If left empty/default the cluster will be created with a virtual network. If a custom one is provided, the cluster will be created as vpc-native cluster. VPC-native CIDR blocks cannot overlap within an account. |
| `--set-current-context` | Sets the current kubectl context to that of the new cluster<br>Default: `true` |
| `--size` | The machine `size` to use when creating nodes in the default node pool (incompatible with –node-pool). Use the `doctl kubernetes options sizes` command for a list of possible values.<br>Default: `s-1vcpu-2gb-intel` |
| `--surge-upgrade` | Enables surge-upgrade for the cluster<br>Default: `true` |
| `--tag` | A comma-separated list of `tags` to apply to the cluster, in addition to the default tags of `k8s` and `k8s:$K8S_CLUSTER_ID`. |
| `--update-kubeconfig` | Adds a configuration context for the new cluster to your kubectl<br>Default: `true` |
| `--version` | A `slug` indicating which Kubernetes version to use when creating the cluster. Use the `doctl kubernetes options versions` command for a list of options<br>Default: `latest` |
| `--vpc-uuid` | The UUID of a VPC network to create the cluster in. Must be the UUID of a valid VPC in the same region specified for the cluster. If a VPC is not specified, the cluster is placed in the default VPC network for the region. |
| `--wait` | Instructs the terminal to wait for the action to complete before returning control to the user<br>Default: `true` |

## Related Commands

| Command | Description |
| --- | --- |
| [doctl kubernetes cluster](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster) | Display commands for managing Kubernetes clusters |

## Global Flags

| Option | Description |
| --- | --- |
| `--access-token`, `-t` | API V2 access token |
| `--api-url`, `-u` | Override default API endpoint |
| `--config`, `-c` | Specify a custom config file<br>Default: |
| `--context` | Specify a custom authentication context name |
| `--http-retry-max` | Set maximum number of retries for requests that fail with a 429 or 500-level error<br>Default: `5` |
| `--http-retry-wait-max` | Set the minimum number of seconds to wait before retrying a failed request<br>Default: `30` |
| `--http-retry-wait-min` | Set the maximum number of seconds to wait before retrying a failed request<br>Default: `1` |
| `--interactive` | Enable interactive behavior. Defaults to true if the terminal supports it (default false)<br>Default: `false` |
| `--output`, `-o` | Desired output format \[text\|json\]<br>Default: `text` |
| `--trace` | Show a log of network activity while performing a command<br>Default: `false` |
| `--verbose`, `-v` | Enable verbose output<br>Default: `false` |

In this article...

- [Usage](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#usage)
- [Aliases](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#aliases)
- [Description](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#description)
- [Example](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#example)
- [Flags](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#flags)
- [Related Commands](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#related-commands)
- [Global Flags](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/#global-flags)

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