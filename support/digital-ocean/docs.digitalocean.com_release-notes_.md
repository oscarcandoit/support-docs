---
url: "https://docs.digitalocean.com/release-notes/"
title: "Release Notes | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- Release Notes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Release Notes

Validated on 21 Nov 2025 • Last edited on 17 Apr 2025

Release notes track incremental improvements and major releases for the DigitalOcean cloud platform.

You can subscribe to the [release notes RSS feed](https://docs.digitalocean.com/release-notes/index.xml).

Due to the high frequency of its updates, we keep a separate [changelog for Kubernetes version updates](https://docs.digitalocean.com/products/kubernetes/details/changelog/)

## Upcoming Changes

- Starting 1 January 2026, [Droplets](https://docs.digitalocean.com/products/droplets/) are billed per-second, with a minimum charge of 60 seconds or $0.01, whichever is higher.

- [DigitalOcean Managed Caching](https://docs.digitalocean.com/products/databases/redis/) is being discontinued on 30 June 2025.

To replace Managed Caching, we are offering [Managed Valkey](https://docs.digitalocean.com/products/databases/valkey/), a Redis-compatible alternative with RDMA and higher throughput. All existing Managed Caching clusters automatically convert to Valkey clusters by 30 June 2025 during your [upgrade window](https://docs.digitalocean.com/products/databases/redis/how-to/schedule-updates/), retaining all data.


## November 2025

### 21 November

- We now support Auth0, authentik, JumpCloud, and Keycloak as identity providers for [single sign-on](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/).

- [Network File Storage](https://docs.digitalocean.com/products/nfs/) is now available in the `NYC2` datacenter.


### 20 November

- AMD [Instinct MI325X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) are now available in NYC2 by contract only in 1- and 8-GPU configurations for single- and multi-node GPU Droplets. To create GPU Droplets with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 19 November

- VPC Network Address Translation (NAT) Gateways are now generally available. NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter.

Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) and [How to Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/) to get started.

- Fedora 41 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 17 November

- Support for multiple registries when using the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/). You can create the registries using the [DigitalOcean Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-container-registries-using-the-control-panel), [CLI](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-a-container-registry-using-the-cli), or [API](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-container-registry-using-the-api).


### 5 November

- PostgreSQL 18 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).

- The control panel now logs you out after 12 hours. It notifies you ten minutes and one minute before the timeout so you can log back in. If you have multiple tabs open, logging in again in one tab keeps every tab active.


### 3 November

- DigitalOcean Insights now supports [GPU-level observability for AMD and NVIDIA GPU Droplets](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) and for GPU-enabled [Kubernetes clusters (DOKS)](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) running DOKS 1.33.1-do.5 or higher.

- An [Ubuntu 25.10](https://canonical.com/blog/canonical-releases-ubuntu-25-10-questing-quokka) (`ubuntu-25-10-x64`) base image is now available in the control panel and via the API.


## October 2025

### 31 October

- You can use 8-GPU configuration GPUs in a multi-node set up in DOKS clusters, where the GPUs are connected via a dedicated high speed networking fabric. These GPUs are available [by contract only](https://www.digitalocean.com/company/contact/sales). To learn how to set up multi-node GPUs, see [How to Use Multi-Node GPUs](https://docs.digitalocean.com/products/kubernetes/how-to/configure-multinode-gpus/).


### 29 October

- We support specifying a sitemap URL as a data source for your knowledge base. For more information, see [Select Your Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources).


### 20 October

- [Network File Storage](https://docs.digitalocean.com/products/nfs/) is now in general availability in the `ATL1` datacenter. Network File Storage provides a fully managed, POSIX-compliant file storage solution based on the Network File System protocol.

- Using [DigitalOcean NFS shares](https://docs.digitalocean.com/products/nfs/) as shared storage in DigitalOcean Kubernetes clusters is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). This feature is available on Kubernetes versions 1.31 and higher. You can create and use the shares with DOKS clusters only in the regions where the [DigitalOcean NFS shares are available](https://docs.digitalocean.com/products/nfs/details/availability/). For more information, see [Use NFS Storage](https://docs.digitalocean.com/products/kubernetes/how-to/use-nfs-storage/).

- [New multimodal models for image and audio generation](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#serverless-inference-only), provided by Fal, are now available for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/) only. These models are in [public preview](https://cloud.digitalocean.com/account/feature-preview?feature=fal-models).


### 17 October

- GPU Droplets with NVIDIA H200 GPUs are now available in ATL1. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 1 October

- You can now [use auto-indexing for knowledge bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#auto-index-data-source-control-panel). Auto-indexing keeps your knowledge base up-to-date by automatically re-indexing new and updated files from connected sources.

- The [OpenAI GPT-image-1 model](https://platform.openai.com/docs/models/gpt-image-1) is now available on DigitalOcean Gradient™ AI Platform. See [all available models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- Now in public preview, you can [customize a usage-based backup plan](https://docs.digitalocean.com/products/backups/how-to/enable/) for regular and GPU Droplets. This plan’s cost is based on the amount of storage your backups use, instead of a flat percentage of the Droplet’s cost. Additionally, you can configure how often backups happen and for how long you retain them.


## September 2025

### 30 September

- VPC networks now provide an internal DNS resolver on the second-to-last IP address of the network. Configure your Droplets to use the internal resolver for better DNS performance and reliability. Read [How to Use the VPC-local DNS Resolver](https://docs.digitalocean.com/products/networking/vpc/how-to/use-local-dns-resolver/) for more information.

- You can now create [organizations](https://docs.digitalocean.com/platform/organizations/) to group related [teams](https://docs.digitalocean.com/platform/teams/). Organizations are available at no cost.

- We have released 25 additional CPU Optimized and General Purpose [Droplet plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/). These are new storage variants of existing plans with enough disk to let you resize a Shared CPU Droplet into a Dedicated CPU Droplet:


  - Dedicated CPU Optimized Regular: 5x SSD variant
  - Dedicated CPU Optimized Premium: 5x SSD variant
  - Dedicated General Purpose Regular: 6.5x SSD variant
  - Dedicated General Purpose Premium: 5.5x SSD variant

The new plans are available in all datacenters. However, Regular CPU versions are not available in ATL1.

You can choose the new plans using the control panel and the API.

- [Scheduled jobs](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/#schedule-jobs) are now in general availability.


### 29 September

- We have increased the size limit of images from 5 GB to 20 GB with a maximum size of 5 GB per image layer.


### 26 September

- GPU Droplets with NVIDIA H100 GPUs are now available in AMS3. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 25 September

- You can now [view activity logs for your knowledge bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity) in the DigitalOcean Control Panel. The **Activity** tab shows the 15 most recent indexing jobs, and includes details such as status, number of files or URLs processed, skipped, or failed, token usage, and charges. You can also download CSV files for more detailed debugging.


### 18 September

- Bring Your Own IP (BYOIP) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). BYOIP enables bringing your own block of IPv4 addresses to DigitalOcean. Once provisioned, assign your addresses to Droplets using the same interface and APIs as [Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/).


### 17 September

- Storage autoscaling is now in general availability. Additionally, you can now reduce your cluster’s amount of additional storage, as long as the new storage size is greater than or equal to the latest backup’s size plus any data growth since then and a 25% buffer.

- Now in public preview, you can now enable storage autoscaling on all Managed Database engines. To enable autoscaling, see our resizing guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/).


### 13 September

- A [Debian 13](https://www.debian.org/releases/trixie/release-notes/) (`debian-13-x64`) base image is now available in the control panel and via the API.


### 11 September

- A [CentOS Stream 10](https://www.centos.org/centos10/) (`centos-stream-10-x64`) base image is now available in the control panel and via the API.


### 10 September

- [Basic Droplets](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/) with 512MB/1CPU are now available in `BLR1`, `LON1`, `NYC3`, and `TOR1` datacenters.


### 9 September

- Flexible node pool selection for autoscaling is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). This feature enables the DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) to fallback to compatible node pools if the preferred node pool is at capacity, thus ensuring scaling continues smoothly without disruption. For more information, see [Flexible Node Pool Selection](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#flexible-node-pool-selection).

- The [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/), which is enabled by default on clusters with [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) running on Kubernetes version 1.33 or higher, is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can use this API to manage ingress natively in Kubernetes clusters. There is no additional cost to use this API. For more information on how to use the Gateway API, see the [HTTPS Traffic Routing in Kubernetes using Gateway API and Cilium](https://www.digitalocean.com/community/tutorials/https-traffic-routing-gateway-api-cilium) and [Kubernetes Gateway API Tutorial: Replace Ingress with Cilium Gateway for HTTP Traffic](https://www.digitalocean.com/community/tutorials/kubernetes-gateway-api-tutorial-cilium-ingress-alternative) tutorials on our Community site.

- [GPT-5 mini model](https://platform.openai.com/docs/models/gpt-5) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- [GPT-5 nano model](https://platform.openai.com/docs/models/gpt-5) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- [VPC support](https://docs.digitalocean.com/products/app-platform/how-to/enable-vpc/) for App Platform apps is now in general availability for all regions.


### 2 September

- The Functions Python 3.11 runtime now includes the `daft`, `duckdb`, `polars`, `pyiceberg`, and `pyspark` packages. Visit the [Python 3.11 runtime documentation](https://docs.digitalocean.com/products/functions/reference/runtimes/python/#python-311-runtime) for more information.

- In public preview, you can [schedule jobs](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/#schedule-jobs) to automatically run periodic tasks within your App Platform apps.


## August 2025

### 28 August

- VPC Network Address Translation (NAT) Gateways are now available in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter. Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) to get started.

- [Single sign-on](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/) is now available for teams.


### 27 August

- Now in public preview, you can now enable storage autoscaling on your Managed MongoDB cluster. To enable autoscaling, see [How to Resize MongoDB Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/).


### 26 August

- Link is now available as a [payment method on DigitalOcean](https://docs.digitalocean.com/platform/billing/manage-payment-methods/).


### 20 August

- The DigitalOcean TypeScript client, [dots](https://github.com/digitalocean/dots), is now generally available.


### 19 August

- [Rocky 10](https://rockylinux.org/download/) (`rockylinux-10-x64`) base image is now available in the control panel and via the API.


### 18 August

- The OpenAI [gpt-oss-120b](https://platform.openai.com/docs/models/gpt-oss-120b) and [gpt-oss-20b](https://platform.openai.com/docs/models/gpt-oss-20b) models are available on DigitalOcean Gradient™ AI Platform. See [all available models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- The [AlmaLinux 10](https://almalinux.org/get-almalinux/) (`almalinux-10-x64`) base image is now available in the control panel and via the API.


### 14 August

- Ubuntu 24.10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 12 August

- The [OpenAI o1 model](https://platform.openai.com/docs/models/o1) is now available on DigitalOcean Gradient™ AI Platform. See [all available models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 11 August

- The [OpenAI GPT-5 model](https://platform.openai.com/docs/models/gpt-5) is now available on DigitalOcean Gradient™ AI Platform. See [all available models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 8 August

- NVIDIA [H200 GPUs](https://www.nvidia.com/en-us/data-center/h200/) are now available in 1- and 8-GPU configurations for GPU Droplets via the control panel and via the API using slugs `gpu-h200x1-141gb` (1 GPU) and `gpu-h200x8-1128gb` (8 GPUs). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 7 August

- App Platform edge controls are now in general availability, introducing three key features for enhanced control over your app’s CDN behavior and security posture: email obfuscation, enhanced threat control to mitigate layer 7 DDoS attacks from sophisticated threat actors, and CDN cache controls.

For complete configuration details, see [How to Configure Edge Settings in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/configure-edge-settings/).


### 5 August

- [GPT-4.1 model](https://platform.openai.com/docs/models/gpt-4.1) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 1 August

- To comply with [the Romanian Government’s increase of the VAT rate](https://www.vitallaw.com/news/romania-enacts-law-for-vat-rate-hikes/gdn01170877#.), the VAT rate for customers in Romania has increased from 19% to 21%. [Learn more about taxes in Romania](https://docs.digitalocean.com/platform/billing/taxes/eu/).

- Tax collection for Uganda has begun. [Learn more about taxes in Uganda](https://docs.digitalocean.com/platform/billing/taxes/uga/).


## July 2025

### 28 July

- DOKS node pools with [AMD GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/) now have the following observability features:


  - You can monitor [basic metrics](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/), such as GPU VRAM usage.

  - We automatically deploy the [ROCm Device Plugin for Kubernetes](https://github.com/ROCm/k8s-device-plugin), which enables features such as GPU discovery and health checks.


When [creating](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes/operation/kubernetes_create_cluster) or [updating](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes/operation/kubernetes_update_cluster) a cluster with the API, you can install the [AMD Device Metrics Exporter plugin](https://github.com/ROCm/device-metrics-exporter) with the `amd_gpu_device_metrics_exporter_plugin` request body parameter to ingest GPU metrics into your own monitoring system.

### 27 July

- [Claude Opus 4 model](https://www.anthropic.com/news/claude-4-opus) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- [Claude Sonnet 4 model](https://www.anthropic.com/news/claude-4-sonnet) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 25 July

- You can now [add a Dropbox folder as a data source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources) to your knowledge bases. This allows you to index and use files stored in your Dropbox account within your knowledge base.


### 23 July

- [`bullseye-backports`](https://backports.debian.org/Instructions/) for Debian 11 [reached end of life on 10 June 2024](https://lists.debian.org/debian-backports-announce/2024/07/msg00000.html). Because our Debian 11 image depends on this package, we have deprecated this image.

Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

To fix package manager issues on existing Debian 11 Droplets, [edit the APT sources list](https://wiki.debian.org/SourcesList#Editing_software_sources) to change the repository URL for `bullseye-backports` from `deb.debian.org` to [the distribution archive, `archive.debian.org`](https://www.debian.org/distrib/archive). For example, you can run `sudo sed -i '/bullseye-backports/s/deb.debian.org/archive.debian.org/' /etc/apt/sources.list`
.


### 22 July

- DigitalOcean Gradient™ AI Platform now offers log stream insights, which provide data-driven recommendations to help improve agent efficiency and accuracy by analyzing your agent’s historical trace data. For details, see [View Traces, Conversation Logs, and Insights](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/#conversation).

- The [official DigitalOcean Gradient™ AI Platform SDK](https://gradientai-sdk.digitalocean.com/api/python) is now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). You can use the SDK to manage Gradient AI Platform resources, including knowledge bases and generative AI agents, from Python applications.

- An inference-optimized image for GPU Droplets is now availalbe in the control panel. This image includes Docker, vLLM, built-in support for Hugging Face model downloads, and more features for LLM setup and deployment.

- We have updated the following buildpacks for App Platform:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.144.2 to v0.147.8. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added the following Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - go1.24.2 - go1.24.3
    - go1.23.8 - go1.23.9
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added the following PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP/8.3.20 - PHP/8.3.22
    - PHP/8.4.6 - PHP/8.4.8
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added support for the `uv` package manager updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added the following Nodejs versions. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

    - Node.js 24.0.0 - 24.2.0
    - Node.js 23.11.0 - 23.11.1
    - Node.js 22.16.0
    - Node.js 22.15.0 - 22.15.1
    - Node.js 20.19.0 - 20.19.1
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have updated the default Ruby version to 3.3.8 and have added the following Ruby versions. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Ruby 3.4.4
    - Ruby 3.3.8
    - Ruby 3.4.3

### 21 July

- An [Ubuntu 25.04](https://canonical.com/blog/canonical-releases-ubuntu-25-04-plucky-puffin) (`ubuntu-25-04-x64`) base image is now available in the control panel and via the API.


### 17 July

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) is now available in the LON (London) region.

- A [Fedora 42](https://fedoraproject.org//en/workstation/download/) (`fedora-42-x64`) base image is now available in the control panel and via the API.


### 16 July

- App Platform’s XL build is now in private preview. You can now [update the app spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) with the `xl-build` feature to double the CPUs (from 4 to 8) and memory (from 10 GiB to 20 GiB) of your app, retaining the same disk space. To gain access to this feature, [contact support](https://cloudsupport.digitalocean.com/). For detailed steps, see [How to Enable XL Build](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#enable-xl-build).


### 15 July

- AMD [Instinct MI325X](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) GPUs are now available by contract only for DOKS clusters. These GPUs are available in 1- or 8-GPU configurations when creating new clusters or adding node pools to existing clusters. To create GPU node pools with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/).

- AMD [Instinct MI325X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) are now available by contract only in 1- and 8-GPU configurations for GPU Droplets. To create GPU Droplets with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 11 July

- The [Alibaba Qwen3-32B model](https://huggingface.co/Qwen/Qwen3-32B) is now available for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/) on DigitalOcean Gradient™ AI Platform. See [all available models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 9 July

- As part of the [DigitalOcean Gradient™ AI Agentic Cloud](https://www.digitalocean.com/products/gradient), GenAI Platform is now DigitalOcean Gradient™ AI Platform.

- Support for Amazon S3 buckets as [data sources for DigitalOcean Gradient™ AI Platform knowledge bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources) is now in public preview.

- DigitalOcean Gradient™ AI Platform is now in general availability.


### 8 July

- VPC support for App Platform apps in FRA, NYC, and TOR is now in public preview. This allows you to connect apps to other VPC-enabled resources (such as DBaaS, Droplets, and Kubernetes) over a VPC network. To gain access to this feature, [contact support](https://cloudsupport.digitalocean.com/). For detailed steps on how to connect your app to a VPC network, see [How to Enable VPC](https://docs.digitalocean.com/products/app-platform/how-to/enable-vpc/).


### 7 July

- You can now [enable a Kafka cluster’s schema registry](https://docs.digitalocean.com/products/databases/kafka/how-to/enable-schema-registry/), ensuring compatibility between producers and consumers and preventing schema mismatches.


### 3 July

- [o3 model](https://platform.openai.com/docs/models/o3) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).


### 2 July

- [Agent tracing](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/trace-agents/) and [conversation logs](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/#conversation) are now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview) for DigitalOcean Gradient™ AI Platform. This allows you to review how your agents process prompts, including input and output content, tool calls, knowledge base retrievals, and processing times.


### 1 July

- To comply with [tax changes from Estonia’s Ministry of Finance](https://www.fin.ee/uudised/ettevotted-panustavad-julgeolekusse-kasumimaksuga), the VAT rate for customers in Estonia has increased from 22% to 24%. [Learn more about taxes in Estonia](https://docs.digitalocean.com/platform/billing/taxes/eu/).

- Our digital services (IaaS, PaaS, and SaaS) rendered to customers in the state of Maryland in the United States are now taxed at a rate of 3%.

This is to comply with the Maryland General Assembly’s [House Bill 352](https://mgaleg.maryland.gov/2025RS/bills/hb/hb0352E.pdf), which [expands the definition of services subject to sales and use tax](https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/technical-bulletins/tb-56.pdf).

- To comply with the Philippines Congress’s amendment to the tax code in [Republic Act No. 12023](https://web.senate.gov.ph/republic_acts/ra%2012023.pdf), we now charge a 12% VAT for customers in the Philippines. [Learn more about taxes in the Philippines](https://docs.digitalocean.com/platform/billing/taxes/phl/).

- To comply with the law on [VAT No. 48/2024/QH15](https://thuvienphapluat.vn/van-ban/EN/Thue-Phi-Le-Phi/Law-48-2024-QH15-on-Value-added-Tax/637020/tieng-anh.aspx) from the Vietnam National Assembly, the VAT rate for customers located in Vietnam has increased from 5% to 10%. [Learn more about Vietnam taxes](https://docs.digitalocean.com/platform/billing/taxes/vnm/).

- The DOKS database operator, which facilitated integration of DOKS clusters with managed databases, is deprecated. Your existing databases remain operational and the [operator-related CRDs](https://github.com/digitalocean/do-operator/tree/main/docs/databases) are not removed. You can use the DigitalOcean API, CLI, or control panel to manage the databases created with the operator.


## June 2025

### 30 June

- [Custom roles](https://docs.digitalocean.com/platform/teams/roles/custom/) for teams are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability).

- The routing agent is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can enable or disable the routing agent using the DigitalOcean CLI or API. For more information, see [How to Use the Routing Agent](https://docs.digitalocean.com/products/kubernetes/how-to/use-routing-agent/).

- Ubuntu 20.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- We have updated the versions of some drivers and software in the [AI/ML-ready images for NVIDIA GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/):


  - `nvidia-container-toolkit=1.17.0` to `nvidia-container-toolkit=1.17.8-1`
  - `cuda-drivers-535` to `cuda-drivers-575`
  - `cuda-toolkit-12-1` to `cuda-toolkit-12-9`
  - `bzip2` (8 GPU Droplets only)
  - `MLNX_OFED_LINUX-23.10-1.1.9.0-ubuntu22.04-x86_64` to `MLNX_OFED_LINUX-23.10-4.0.9.1-ubuntu22.04-x86_64`
  - `nvidia-fabricmanager-535` to `nvidia-fabricmanager-575`

- App Platform [liveness probes](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/) are now in general availability.


### 27 June

- [Archiving and restoring App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/archive-restore/) is now in general availability.

- App Platform [subdomain routing](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/) is now in general availability.


### 25 June

- Bring Your Own IP (BYOIP) is now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). BYOIP allows you to bring your own block of IPv4 addresses to DigitalOcean. Once provisioned, assign your addresses to Droplets using the same interface and APIs as [Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/).


### 20 June

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) now supports autoscaling across multiple node pools for a single workload. If the preferred node pool is at capacity, the autoscaler uses the next compatible option in sequence — ensuring scaling continues smoothly without disruption. This feature is in [private preview](https://docs.digitalocean.com/platform/product-lifecycle/#private-preview). For more information, see [Flexible Node Pool Selection](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#flexible-node-pool-selection).


### 19 June

- We have reverted to non- [VPC-native cluster networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) when creating new clusters with Kubernetes version 1.33 and higher using the `doctl` command line interface or API. If your VPC-native cluster provisioned successfully, no action is needed. If the cluster appears to be stuck in the `Provisioning` state, please delete the cluster and create a new one.

You can automatically configure VPC-native networking when using the control panel or manually configure it using`doctl` or the API. For more information, see [Create a Cluster with VPC-native Networking](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#vpc-native-networking).


### 18 June

- You can now set all supported third-party payment methods as your [default payment method](https://docs.digitalocean.com/platform/billing/manage-payment-methods/#default), including AliExpress, Apple Pay, and Google Wallet.


### 17 June

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) now supports [high availability partner attachments](https://docs.digitalocean.com/products/networking/vpc/how-to/add-ha-to-partner-attachment/) which use redundant connections to your network as a service (NaaS) provider to enable automatic traffic failover whenever the primary connection fails.

- Reserved IPv6 addresses are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Reserved IPv6 addresses are publicly-accessible static IPv6 addresses that you can assign to Droplets and instantly remap to other Droplets in the same datacenter. See [How to Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) to get started.


### 16 June

- We have enabled the [Gateway API](https://gateway-api.sigs.k8s.io/) by default on clusters with [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) running on Kubernetes version 1.33 or higher. This feature is in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). You can use the Gateway API to manage ingress natively in a Kubernetes cluster, without the need for third-party ingress controllers.

- Load balancer services now default to network load balancers (NLB) instead of regional load balancers on clusters running on Kubernetes version 1.33 or higher. Use the `service.beta.kubernetes.io/do-loadbalancer-type` annotation with a value of `REGIONAL` or `REGIONAL_NETWORK` to change the load balancer type.

- We have enabled [VPC-native cluster networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) by default when you create new clusters using Kubernetes version 1.33 or higher using the `doctl` command line interface or API. For more information, see [Create a Cluster with VPC-native Networking](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#vpc-native-networking).


### 12 June

- AMD [Instinct MI300X](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html) GPUs are now available for DOKS clusters. These GPUs are available in a single GPU or 8 GPU configuration when creating new clusters or adding node pools to existing clusters. You can use these GPUs in the control panel and the API with the `gpu-mi300x1-192gb` and `gpu-mi300x8-1536gb` slug, respectively.

- AMD [Instinct MI300X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html) are now available in 1- and 8-GPU configurations for GPU Droplets via the control panel and via the API using slugs `gpu-mi300x1-192gb` (1 GPU) and `gpu-mi300x8-1536gb` (8 GPUs). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 11 June

- If your container registry uses the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can now create up to nine additional registries (for a total maximum of 10) per team using the [DigitalOcean Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-container-registries-using-the-control-panel) or [API](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-container-registry-using-the-api). You can create these registries in different regions and the storage is shared among them. This feature is in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/).


### 10 June

- [Spaces access logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/) are now in general availability.


### 5 June

- [Serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/) is now available on DigitalOcean Gradient™ AI Platform. Serverless inference lets you to get direct responses from foundation models using a single API endpoint without creating an agent.


### 4 June

- To help debug app component instances on App Platform, you can now access [specific compute component instances](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-specific-instance) using the CLI or API.


### 2 June

- We have launched the Atlanta, Georgia (`atl1`) datacenter, which supports Droplets, Spaces, and many other products. Learn more in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).

- We have updated App Platform’s [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/) to add support for additional Ruby versions. These updates include:
\\* Ruby 3.4.2 is now available
\\* Default Ruby version is now 3.3.7
\\* Ruby 3.2.7 and 3.2.8 is now available
\\* Ruby 3.1.7 is now available
\\* Bundler 1.x no longer works with the Ruby buildpack


## May 2025

### 30 May

- Now in public preview, Spaces buckets automatically [generate CDN logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/) if you have [enabled the bucket’s CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/).

- You can now configure Spaces access logs using [Terraform](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/spaces_bucket_logging).


### 19 May

- You can [disable an app’s CDN cache](https://docs.digitalocean.com/products/app-platform/how-to/configure-edge-settings/), allowing you to use your own CDN instead.

Additionally, you can now enable enhanced threat control for Layer 7 DDoS protection and disable email obfuscation by updating the [app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).


### 13 May

- When you sign up for DigitalOcean, you no longer need to add a payment method to your default team before accessing the control panel. You do need to add a payment method to create resources, invite team members, and create additional teams.

- Fedora 40 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 12 May

- Now in public preview, if your app’s health check fails on App Platform, a liveness probe automatically restarts the app. Additionally, worker services now support health checks. To set up health checks for your app, see [How to Set Up and Manage Health Checks](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/).


### 7 May

- You can now [manually convert your Caching cluster to a Valkey cluster](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/). All Caching clusters automatically convert to Valkey clusters by the [Managed Caching discontinuation date](https://docs.digitalocean.com/release-notes/caching/).

- You can now set three new, more granular predefined roles (`Admin`, `Read/Write`, and `Read-Only`) to Managed MongoDB users with the DigitalOcean API on create/delete endpoints. The previous user roles (`DOAdmin` and `DOReadOnly`) remain available for backwards compatibility. For more details on the MongoDB-specific permissions for each of the new roles, see [our API reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases/operation/databases_add_user).

- NVIDIA [RTX 4000](https://www.nvidia.com/en-us/design-visualization/rtx-4000/) and [RTX 6000](https://www.nvidia.com/en-us/design-visualization/rtx-6000/) Ada Generation GPUs are now available for DOKS clusters. You can choose these GPUs when creating new clusters or adding node pools to existing clusters using the control panel and the API with the `gpu-4000adax1-20gb` and `gpu-6000adax1-48gb` slug respectively.

- NVIDIA [RTX 4000 Ada](https://www.nvidia.com/en-us/products/workstations/rtx-4000/) and [RTX 6000 Ada](https://www.nvidia.com/en-us/products/workstations/rtx-6000/) GPUs are now available for GPU Droplets via the control panel and via the API using slugs `gpu-4000adax1-20gb` and `gpu-6000adax1-48gb` respectively. [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 1 May

- To comply with [the tax code of Republic of Moldova](https://www.legis.md/cautare/getResults?doc_id=79211&lang=ro#), we now charge a 20% VAT for customers in Moldova. [Learn more about Moldova taxes](https://docs.digitalocean.com/platform/billing/taxes/mda/).

- To comply with [the South African Parliament’s 2025 fiscal policies](https://www.treasury.gov.za/documents/national%20budget/2025/default.aspx), the VAT rate for customers in South Africa has increased from 15% to 15.5%. [Learn more about taxes in South Africa](https://docs.digitalocean.com/platform/billing/taxes/zaf/).


## April 2025

### 30 April

- The creation of new DigitalOcean Managed Caching clusters is disabled for all users except those with an existing Caching cluster.

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). See [Scaling to Zero](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#scaling-to-zero) for recommendations to follow for scaling a node pool down to zero.


### 29 April

- You can now view [token usage and performance metrics](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/) for DigitalOcean Gradient™ AI Platform agents.


### 28 April

- You can now [rollback to a previous version](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-versions/) of DigitalOcean Gradient™ AI Platform agents.

- You can now add [Managed Valkey](https://docs.digitalocean.com/products/databases/valkey/) databases to your App Platform apps. To manage your app’s databases, see [How to Manage Databases in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/).


### 25 April

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) now supports traffic to and from [VPC-native DOKS clusters](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).


### 23 April

- You can now [create DigitalOcean Gradient™ AI Platform agents from templates](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-agents/#choose-a-configuration) which have predefined agent instructions and foundation models.


### 22 April

- You can now view the knowledge bases, functions, and guardrails that DigitalOcean Gradient™ AI Platform agents use to generate a response in the [Agent Playground](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/#view-agent-response-citations) and the [agent API](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-agents/#view-agent-response-citations).

- You can now [view the runtime logs](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/#view-agent-logs) for agents on DigitalOcean Gradient™ AI Platform. The logs display the events that occur during an agent’s execution, such as the knowledge bases and functions accessed to generate a response.


### 21 April

- App Platform now supports subdomain routing, which also allows you to disable an app’s starter domain. For setup instructions, see [How to Manage Domains in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/).


### 17 April

- We’ve made some major visual and technical improvements to the product docs site.


### 16 April

- [Claude Sonnet 3.7 model](https://www.anthropic.com/news/claude-3-7-sonnet) is now available on DigitalOcean Gradient™ AI Platform. For more information, see the [Available Models page](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/).

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.24.1 - go1.24.0
    - Adds go1.23.7 - go1.23.6
    - Adds go1.22.12
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.4.5 - PHP/8.4.4
    - Adds PHP/8.3.19 - PHP/8.3.17
    - Adds PHP/8.2.28
    - Adds PHP/8.1.32
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Deprecated support for the runtime.txt file
    - Removed support for Python 3.8
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

    - Adds Node.js version 23.10.0 and 23.9.0
    - Adds Node.js version 20.19.0
    - Adds Node.js version 18.20.8 and 18.20.7

### 9 April

- You can now use [OpenAI models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#openai-models) and test them in the [Model Playground](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/use-model-playground/) on DigitalOcean Gradient™ AI Platform.


### 3 April

- We previously announced an upcoming breaking change to the DigitalOcean API to fix an incomplete resource authorization issue. We have changed our approach so that this is no longer a breaking change.

Originally, some users would need to recreate API tokens with additional scopes to retain the same functionality. Now, API tokens created before we deploy the fix retain the same functionality and access to the API. No action is required to continue using these tokens as before.



Learn more on [**Breaking Change to Fix DigitalOcean API Incomplete Resource Authorization Issue**](https://docs.digitalocean.com/release-notes/upcoming/breaking-api-changes-resource-authorization/).


### 1 April

- Partner Network Connect is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). [Create a partner attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) to establish high-bandwidth, low-latency network connections directly between DigitalOcean VPC networks and other public cloud providers or on-premises datacenters.

- To comply with [the Government of Nova Scotia’s 2024-25 budget](https://news.novascotia.ca/en/2024/10/23/nova-scotias-hst-drop-2025), the HST rate for customers in Nova Scotia has decreased from 15% to 14% HST. [Learn more about taxes in Canada](https://docs.digitalocean.com/platform/billing/taxes/can/).

- To comply with the [Tax Code of the Republic of Uzbekistan](https://tax.uz/), we now charge a 12% VAT for customers in Uzbekistan. [Learn more about Uzbekistan taxes](https://docs.digitalocean.com/platform/billing/taxes/uzb/).


## March 2025

### 31 March

- DOKS now supports up to 1000 worker nodes per cluster, allowing you to run larger workloads within a single cluster. You can create 1000-node clusters using the DigitalOcean API or CLI. To learn more, see [Scale Up to 1000 Nodes Per Cluster](https://docs.digitalocean.com/products/kubernetes/details/features/#scale-up-to-1000-nodes-per-cluster).

- AMD MI300X GPUs are now available for [DigitalOcean Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/).


### 27 March

- Managed MongoDB now supports up to 2,000 IP addresses as trusted sources. To add trusted sources, see [How to Secure MongoDB Managed Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/).

- Network load balancers are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) to get started.

- [NVIDIA L40S GPUs](https://www.nvidia.com/en-us/data-center/l40s/) are now available for creating new clusters or adding node pools to existing clusters using the control panel and the API with the `gpu-l40sx1-48gb` slug.

- [NVIDIA L40S GPUs](https://www.nvidia.com/en-us/data-center/l40s/) are now available for GPU Droplets via the control panel and via the API using the slug `gpu-l40sx1-48gb`. [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 25 March

- We have raised the number of URLs that [DigitalOcean Gradient™ AI Platform’s web crawler data source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources) can crawl from 1000 to 5500.


### 24 March

- You can now view the most recent reconciler checks in the DigitalOcean Control Panel. For more information, see [Best Practices](https://docs.digitalocean.com/products/kubernetes/concepts/best-practices/#check-reconciler-messages).

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) can now scale nodes in a node pool down to zero. This feature is in [private preview](https://docs.digitalocean.com/platform/product-lifecycle/#private-preview). See [Scaling to Zero](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#scaling-to-zero) for recommendations to follow for scaling down to zero.


### 20 March

- NFS file shares for bare metal GPUs are now in private preview.


### 19 March

- Custom roles for teams are now in [private preview](https://docs.digitalocean.com/platform/product-lifecycle/#private-preview).

- We have released new Storage-Optimized Droplet plans for MySQL and PostgreSQL with 48 CPUs, 384 GiB of RAM, and 20 TB (MySQL)/30 TB (PostgreSQL) of storage in SGP1, SFO2, and FRA1. For more details, see our pricing pages for [MySQL](https://docs.digitalocean.com/products/databases/mysql/details/pricing/) and [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/details/pricing/).


### 18 March

- You can now configure Spacess access keys to provide different levels of permissions to multiple buckets. To create or edit access keys, see [How to Manage Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/).


### 17 March

- You can now [archive and restore App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/archive-restore/). This allows you to store an app’s data and configuration, and to stop incurring charges for the app’s components. You can restore an archived app to resume using it. This feature is in [Public Preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview).


### 10 March

- The routing agent is now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview) for DOKS clusters. The agent lets you create and maintain IP routes on your Kubernetes worker nodes. You can enable or disable the routing agent only using the DigitalOcean CLI or API. For more information, see [How to Use the Routing Agent](https://docs.digitalocean.com/products/kubernetes/how-to/use-routing-agent/).


### 7 March

- The `10.229.0.0/16` VPC IP address range is now reserved in all regions for DigitalOcean internal use. You may not create new VPC networks with subnets that overlap this range.


### 6 March

- SMTP ports 465 and 587 are now blocked on Droplets.


### 3 March

- [MongoDB 8.0](https://www.mongodb.com/docs/manual/release-notes/8.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 8.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/).


## February 2025

### 28 February

- Reserved IPv6 addresses are now available in [public preview](https://cloud.digitalocean.com/account/feature-preview/). Reserved IPv6 addresses are publicly-accessible static IPv6 addresses that you can assign to Droplets and instantly remap to other Droplets in the same datacenter. You must opt-in to the [public preview](https://cloud.digitalocean.com/account/feature-preview/) to create reserved IPv6 addresses.

- All managed databases except MongoDB now support up to 2,000 IP addresses as trusted sources. To add trusted sources, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/), [Caching](https://docs.digitalocean.com/products/databases/redis/how-to/secure/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/secure/).

- IPv6 support for regional external load balancers is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You may now choose between IPv4-only or dual-stack IPv4 and IPv6 networking when you [create standalone load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). All [DOKS regional HTTPS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/) created after 28 February 2025 are dual-stack. Network load balancers on DOKS do not support IPv6.

- Network load balancers are now in [public preview](https://cloud.digitalocean.com/account/feature-preview/). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. You must opt-in to the [public preview](https://cloud.digitalocean.com/account/feature-preview/) to create network load balancers.


### 24 February

- We have updated the following buildpacks for App Platform:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.121.2 to v0.144.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions.

    - Adds Node.js version 23.8.0
    - Adds Node.js version 22.14.0
    - Adds Node.js version 20.18.3

App Platform has updated the Node.js default version from v20 to v22. This is because v22 is the current stable LTS version and v20 is now in maintenance phase. Best practices for pinning the Node.js version in the package.json for apps should be followed in order to avoid build failures. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

### 21 February

- You can now [add a website as a data source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources) for DigitalOcean Gradient™ AI Platform knowledge bases.

- We have restored access to the [Sensitive Data Detection guardrail](https://docs.digitalocean.com/products/gradient-ai-platform/details/features/#guardrails) for DigitalOcean Gradient™ AI Platform.


### 20 February

- Droplet [autoscale pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/) now support shared CPU Basic Droplets. Previously, they only supported dedicated CPU Droplet plans.

- In April 2025, we are implementing a [breaking change to the DigitalOcean API](https://docs.digitalocean.com/notes/2025/breaking-api-changes-resource-authorization/) that fixes an incomplete resource authorization issue. You may need to recreate API tokens with additional scopes to retain the same functionality, depending on your use cases.


### 19 February

- You can [specify a custom maintenance page](https://docs.digitalocean.com/products/app-platform/how-to/maintenance-mode/#configure-using-the-app-spec) to display to users on App Platform.


### 18 February

- NVIDIA H200 GPUs are now available for [DigitalOcean Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/).


### 17 February

- We have updated App Platform’s [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/) to support the latest PHP release, version 8.4.4.


### 13 February

- We have updated the following buildpacks for App Platform:


  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions.

    - Adds Node.js version 23.7.0 - 23.0.0
    - Adds Node.js version 22.13.1 - 22.6.0
    - Adds Node.js version 20.18.2 - 20.16.0
    - Adds Node.js version 18.20.6 - 18.20.5

App Platform has updated the Node.js default version from v20 to v22. This is because v22 is the current stable LTS version and v20 is now in maintenance phase. Best practices for pinning the Node.js version in the package.json for apps should be followed in order to avoid build failures. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

### 7 February

- You can now use the [DeepSeek-R1 model](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#open-source-models) with agents on DigitalOcean Gradient™ AI Platform.


## January 2025

### 31 January

- PostgreSQL 17 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).

- [License Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/) are now [in general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) in the [Marketplace Vendor Portal](https://cloud.digitalocean.com/vendorportal).

- You can now use [Anthropic models](https://www.anthropic.com/claude) with agents on DigitalOcean Gradient™ AI Platform.


### 30 January

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Add go1.23.5 - go1.23.0
    - Add go1.22.11 - go1.22.5
    - Add go1.21.13, go1.21.12
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.3.16 - PHP/8.3.10
    - Adds PHP/8.2.27 - PHP/8.2.22
    - Adds PHP/8.1.30
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Adds support for Python 3.13
      - Adds support for Python 3.12.7, 3.12.6, 3.12.5
      - Adds support for Python 3.8.20, 3.9.20, 3.10.15, 3.11.10
      - Default Python version for new apps is now 3.13
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have added additional Ruby versions. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds Ruby versions 3.3.7, 3.3.6, 3.3.5
    - Adds Ruby versions 3.4.1, 3.4.0, 3.2.5
    - Add detection support for Rails 8

### 29 January

- Spaces now supports streaming uploads that use trailing SigV4 signatures with signed payloads (`STREAMING-AWS4-HMAC-SHA256-PAYLOAD-TRAILER`). This enables S3 compatibility with AWS SDK for .NET versions released on or after 15 January 2025 (and with applications built on those versions).


### 28 January

- You can [add files from your local storage](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources) as data source for your knowledge base.


### 24 January

- The Sensitive Data Detection guardrail and its custom versions have been temporarily removed. To identify and anonymize sensitive data, add the following to your [agent instructions](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/):


```
You must avoid providing responses containing sensitive or private information.

Sensitive information includes but is not limited to:

* Personal data (e.g., names, addresses, emails, phone numbers)
* Financial details (e.g., credit card numbers, bank accounts)
* Medical information
* Private communications
* Confidential business information

If the user's query involves sensitive information, respond with: "I'm sorry, I can't answer that."
```


### 22 January

- DigitalOcean Gradient™ AI Platform is in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview).


### 21 January

- Spaces now supports streaming uploads that use trailing SigV4 signatures with unsigned payloads (`STREAMING-UNSIGNED-PAYLOAD-TRAILER`). This enables S3 compatibility with versions of the AWS CLI and AWS SDKs (other than the AWS SDK for .NET) released on or after 15 January 2025 and with applications built on them.

- Deploying apps from Bitbucket to App Platform is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/).


### 16 January

- When autoscale pools scale down, they now issue a shutdown event and wait 60 seconds before issuing a destroy event. You can use this time to perform cleanup operations, gracefully close connections, or other actions. [Learn more about autoscale pool scaling](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/).


### 14 January

- We’ve updated the driver versions in the software configuration options for [bare metal GPU](https://docs.digitalocean.com/products/bare-metal-gpus/):


  - The NVIDIA Ubuntu 22.04 option has GPU 550.90.07 and CUDA 12.4.
  - The NVIDIA Ubuntu 24.04 option has GPU 565.57.01 and CUDA 12.8.
  - The AMD Ubuntu 22.04 option now has GPU 6.4.6 and ROCm 6.4.1.

### 10 January

- We have updated our [product lifecycle stages](https://docs.digitalocean.com/platform/product-lifecycle/) to private preview, public preview, and general availability. The new stages are consolidated and slightly modified versions of our original stages, which were beta, early access, and general availability.


### 9 January

- The [Personal Property Lease Transaction Tax](https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/tax_list/personal_propertyleasetransactiontax.html) for Chicago, Illinois has increased from 9% to 11%. [Learn more about USA taxes](https://docs.digitalocean.com/platform/billing/taxes/usa/).


### 7 January

- You can scale a fixed node pool down to 0 nodes using the DigitalOcean Control Panel, CLI, and API. Your cluster must have another fixed node pool with at least 1 node or a GPU node pool with 0 node to do so. To learn more, see [Add Node Pools](https://docs.digitalocean.com/products/kubernetes/how-to/add-node-pools/).


### 1 January

- Customers in India are no longer required to withhold tax on DigitalOcean cloud computing services, so TDS is no longer applicable. We no longer accept Form 16A or other documentation to issue TSD credits. [Learn more about taxes in India](https://docs.digitalocean.com/platform/billing/taxes/ind/).

- To comply with the [requirements from the Slovak Republic government](https://www.ey.com/en_gl/technical/tax-alerts/slovakia-increases-vat-rate), the VAT rate for Slovakia has increased from 20% to 23%. [Learn more about EU taxes](https://docs.digitalocean.com/platform/billing/taxes/eu/).

- To comply with [Decision No. 178-N](https://src.am/storage/menu_contents_125/vr_hhk_178.1-N_2022_e-serv-list%20En_643000e30bae0.pdf) released by the Government of the Republic of Armenia, we now charge a 20% VAT for customers in Armenia. [Learn more about Armenia taxes](https://docs.digitalocean.com/platform/billing/taxes/arm/).

- Sales tax in Denver, Colorado has [increased from 4.81% to 5.15%](https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Department-of-Finance/Our-Divisions/Treasury/Business-Tax-Information/Business-Tax-FAQ). [Learn more about USA taxes](https://docs.digitalocean.com/platform/billing/taxes/usa/).

- To comply with [Circular No. 80/2021/TT-BTC](https://lawnet.vn/en/vb/Circular-80-2021-TT-BTC-elaboration-of-some-Articles-of-the-Law-on-Tax-Administration-7AB20.html) issued by Vietnam’s Ministry of Finance, we now charge a 5% VAT for customers in Vietnam. [Learn more about Vietnam taxes](https://docs.digitalocean.com/platform/billing/taxes/vnm/).


## December 2024

### 20 December

- All Managed Databases are [now available in NYC2](https://docs.digitalocean.com/platform/regional-availability/).


### 18 December

- Droplet [autoscale pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/) are now available. Autoscale pools enable automatic horizontal autoscaling based on resource utilization.

- Deploying apps from Bitbucket to App Platform is now in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/).


### 16 December

- Fedora 39 reached end of life on 26 November 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 13 December

- Premium Intel CPUs for Basic Droplets are now available in SFO2.


### 12 December

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) for all DigitalOcean Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, refer to [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) peering is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/##general-availability). VPC peering allows you to join two VPC networks with a secure, private connection. Read [How to Create a VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/) to get started.

- Internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#regional-load-balancers) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Internal load balancers have no public IP address and are only accessible to resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/) network. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) for more details. To learn how to add internal load balancers to DOKS clusters, see [Configure Load Balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#internal-load-balancer) in the DOKS documentation.


### 9 December

- We now support Alipay as a [payment method](https://docs.digitalocean.com/platform/billing/manage-payment-methods/).


### 6 December

- You can now [limit Spaces access keys to specific buckets](https://docs.digitalocean.com/products/spaces/how-to/manage-access/) with your choice of read-only, read-write, or full access permissions, compatible with access control lists (ACLs).


## November 2024

### 27 November

- You can now use `doctl`, the DigitalOcean CLI, to [access the console for App Platform components](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-cli) to run commands in the component’s container.


### 20 November

- [DigitalOcean Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/) are now in general availability.

- You can now [restart App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/) without fetching the latest changes from your app’s repository. This feature is useful for restarting apps stuck in a connection loop or deadlock.


### 14 November

- PostgreSQL 12 is now deprecated. All existing PostgreSQL 12 database clusters are scheduled to automatically upgrade during [the cluster’s upgrade window](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/).

- We have released a [new Heroku-based Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/) for App Platform. It includes new features and security updates. All new Node.js apps now use this buildpack upon creation by default.

To migrate existing apps to use the new buildpack, see [our guide](https://docs.digitalocean.com/products/app-platform/how-to/migrate-nodejs-buildpack/).


### 12 November

- Scalable storage for MongoDB clusters is now in general availability.


### 1 November

- App Platform’s new [sample app deployment feature](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/) is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/). This allows you to quickly copy a sample app into a new repo on your GitHub account and then deploy it to App Platform.


## October 2024

### 29 October

- [Forwarding logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform app to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability).

- Forwarding cluster event logs from your DOKS cluster to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can forward logs using the [control panel](https://docs.digitalocean.com/products/kubernetes/how-to/forward-logs/) or the [API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes).

- You can now [configure maintenance mode for apps](https://docs.digitalocean.com/products/app-platform/how-to/maintenance-mode/) on App Platform. This allows you to take your app offline for maintenance and serve a maintenance page to your users.


### 23 October

- The DigitalOcean Marketplace now offers [1-Click Models powered by Hugging Face](https://docs.digitalocean.com/notes/2024/1-click-models/). 1-Click Models let you deploy third-party AI models directly to GPU Droplets.

- App Platform now [supports the HTTP/2 protocol](https://docs.digitalocean.com/products/app-platform/how-to/configure-http2/). This allows you to use [gRPC](https://grpc.io/about), multiplexing, and other HTTP/2 features.

- App Platform now supports HTTP/3 at edge servers, allowing faster and more secure connections between your application and your users. You do not need to make any changes to your application to use HTTP/3.


### 18 October

- [Basic Droplet plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/) with a 1:4 vCPU:RAM ratio are now available in NYC1, SGP1, and LON1. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 16 October

- Now in beta, when creating or [resizing MongoDB clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/), you can now add additional storage to the cluster independent from the storage already included in the database cluster plan. You can use this option when you need more disk space but don’t need more CPU or RAM.


### 15 October

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for all DigitalOcean Managed Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, see [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) peering is now in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability). VPC peering allows you to join two VPC networks with a secure, private connection. See [How to Create a VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/) to get started.

- You can now create internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). Internal load balancers have no public IP address and are only accessible by resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/). This feature is [currently in early availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability) and only available through the [CLI](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-cli) and [API](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-api).


### 11 October

- Spaces is now available in TOR1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/). See our documentation on [creating a new Spaces bucket](https://docs.digitalocean.com/products/spaces/how-to/create/), [relocating an existing one](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/), or [migrating a bucket from another cloud service provider](https://docs.digitalocean.com/products/spaces/how-to/migrate/).


### 10 October

- A [Ubuntu 24.10](https://discourse.ubuntu.com/t/oracular-oriole-release-notes/44878) (`ubuntu-24-10-x64`) base image is now available in the control panel and via the API.


### 6 October

- A [Fedora 41](https://docs.fedoraproject.org/en-US/releases/f41/) (`fedora-41-x64`) base image is now available in the control panel and via the API.


### 4 October

- Daily backups are now available in BLR1.


### 1 October

- MongoDB version 5.0 is now deprecated.

- [GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/) for DigitalOcean Kubernetes are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary). You can [create a new cluster with GPU nodes](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/) or [add a GPU node pool to an existing cluster](https://docs.digitalocean.com/products/kubernetes/how-to/add-node-pools/) on versions 1.30.4-do.0, 1.29.8-do.0, 1.28.13-do.0, and later.

- [GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). GPU Droplets have NVIDIA H100 GPUs, and we provide an AI/ML-ready base image with NVIDIA drivers and software preinstalled to help you get started.


## September 2024

### 26 September

- We have reenabled the NYC2 datacenter. See the [regional availability page](https://docs.digitalocean.com/platform/regional-availability/) for information on product availability in NYC2.


### 18 September

- The ability to connect DOKS clusters to [global load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) via [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) is now in [beta](https://docs.digitalocean.com/platform/product-lifecycle/#beta).

- [DigitalOcean Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Global load balancers allow you to distribute traffic to backend resources in different regions for high availability and performance.

- We have released seven additional Premium CPU Droplet plans with 48 and 60 vCPUs.
Click here to view the full list of new Droplet plans with Premium CPUs.


| Type | Slug | vCPUs | RAM (GiB) | Disk (GiB) | Price |
| --- | --- | --- | --- | --- | --- |
| General Purpose | `g-60vcpu-240gb-intel` | 60 | 240 | 900 | $2269.00 per month |
| General Purpose | `gd-60vcpu-240gb-intel` | 60 | 240 | 1,800 | $2378.00 per month |
| CPU Optimized | `c-60-intel` | 60 | 120 | 750 | $1639.00 per month |
| CPU Optimized | `c2-60vcpu-120gb-intel` | 60 | 120 | 1,500 | $1834.00 per month |
| Memory Optimized | `m-48vcpu-384gb-intel` | 48 | 384 | 1,200 | $2376.00 per month |
| Memory Optimized | `m3-48vcpu-384gb-intel` | 48 | 384 | 3,600 | $2640.00 per month |
| Storage Optimized | `so-48vcpu-384gb-intel` | 48 | 384 | 7,000 | $3144.00 per month |


The new plans are available through the [control panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel) and the [API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api).


  - All plans are available in SGP1, LON1, NYC3, AMS3, FRA1, TOR1, SFO2, SFO3, and SYD1.
  - `m-48vcpu-384gb-intel`, `m3-48vcpu-384gb-intel`, and `c-60-intel` are additionally available in NYC3.
  - `m-48vcpu-384gb-intel`, `m3-48vcpu-384gb-intel`, `c-60-intel`, and `c2-60vcpu-120gb-intel` are additionally available in BLR1.
  - `c-60-intel` and `c2-60vcpu-120gb-intel` are additionally available in NYC1.

### 17 September

- Daily backups are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/).


### 13 September

- SnapShooter can now back up and restore cluster-internal resources such as databases on DigitalOcean Kubernetes clusters. The new feature automatically installs a backup agent into your cluster, allowing SnapShooter to back up a variety of database types running in DOKS.

See [How to Back Up Resources on DigitalOcean Kubernetes with SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/) for more details.


### 12 September

- You can now [forward cluster event logs](https://docs.digitalocean.com/products/kubernetes/how-to/forward-logs/) from your DOKS cluster to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/). This feature is in beta. You can send us [your feedback](https://digitalocean.getfeedback.com/r/llNCTgXg) about the feature.


### 6 September

- App Platform now supports PostgreSQL 13 and 15 for [dev databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/).

We have also deprecated PostgreSQL 12 support for dev databases. We recommend [upgrading your database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#upgrade-dev-database-version) to a newer version of PostgreSQL.


### 3 September

- Daily backups are now available in LON1.


### 1 September

- Tax collection for Finland has begun. [Learn more about taxes in Finland](https://docs.digitalocean.com/platform/billing/taxes/eu/).

- You can now manage DigitalOcean [OpenSearch](https://opensearch.org/) users by [creating access control lists (ACLs)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_user) with the API.


## August 2024

### 30 August

- GPU worker nodes are now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for select DOKS customers. For more information, see [GPU Worker Nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/).


### 29 August

- We have increased the volume attach limit for DOKS nodes from 7 to 15.


### 28 August

- You can now [deploy apps to App Platform using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/).

We offer three different example workflows, but you can customize them to meet your needs:


  - Deploy an app from a GitHub repository to App Platform.
  - Build an image of your app using Docker and GitHub Container Registry, and then deploy the image to App Platform.
  - Deploy a unique app for each pull request in your repository so that you can test your changes before merging them into your `main` branch.

### 27 August

- Daily backups are now available in FRA1.


### 26 August

- We have added three additional [team roles](https://docs.digitalocean.com/platform/teams/roles/predefined/): billing viewer, resource viewer, and modifier. These new predefined roles have more granular permissions that cover additional use cases. The three existing team roles (owner, biller, and member) are unchanged.

You can now also assign a role to teammates during invitation. Previously, new team members would join with the member role.

- Spaces is now available in LON1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).


### 19 August

- PostgreSQL clusters now support [`pgvector`](https://github.com/pgvector/pgvector) v0.7.2. You can verify your access to this feature by running `\dx` from `psql` or querying `pg_extension` and locating `vector` in the output. If you do not have access to this pgvector version yet, [update your PostgreSQL cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/). For a full list of supported extensions, see our guide [Supported PostgreSQL Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/).


### 15 August

- Managed Redis is now called [Managed Caching](https://docs.digitalocean.com/products/databases/redis/).


### 12 August

- We have increased the volume attach limit for Droplets from 7 to 15. The limit for DOKS nodes is still 7, but we’re working to increase this as well.


### 9 August

- [App Platform autoscaling](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#auto-scale) is now available for all customers.


### 8 August

- You can now add and manage internal ports for App Platform service components from the DigitalOcean Control Panel. You can [add internal ports after](https://docs.digitalocean.com/products/app-platform/how-to/manage-internal-routing/#configure-additional-internal-ports) app creation.

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions and the default version of Go has been updated for Go v1. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.22.2, go1.22.3, go1.22.4
    - Adds go1.21.9, go1.21.10, go1.21.11
    - Defaults to go1.20.14 when Go version is not specified
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.3.6 - PHP/8.3.9
    - Adds PHP/8.2.19 - PHP/8.2.21
    - Adds PHP/8.1.28 - PHP/8.1.29
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Adds support for Python 3.12.4
      - Default Python version for new apps is now 3.12.4
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have added additional Ruby versions and updated the default version for new apps. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Default Ruby version is now 3.1.6
    - Adds Ruby versions 3.3.2, 3.3.3, 3.3.4
    - Adds Ruby versions 3.1.5, 3.1.6
  - [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have updated the NodeJS v1 buildpack version to install `devDependencies` by default if `NODE_ENV` is not set. If you don’t want `devDependencies` installed, we recommend setting `NODE_ENV` to `production`.

### 1 August

- Tax collection for Laos has begun. [Learn more about taxes in Laos](https://docs.digitalocean.com/platform/billing/taxes/lao/).

- Invoices now include a breakdown of bandwidth usage and cost per Spaces bucket. If you have 100 or more Spaces buckets, you can only view this breakdown in the CSV version of the invoice. To view or download invoices, see our [Invoices billing page](https://docs.digitalocean.com/platform/billing/invoices/).

- Premium CPUs for CPU-Optimized Droplets are now available in LON1 and SGP1.

- Premium CPUs for General Purpose Droplets are now available in LON1 and SGP1.

- Premium CPUs for Memory-Optimized Droplets are now available in AMS3, LON1, SFO3, and SGP1.

- Premium CPUs for Storage-Optimized Droplets are now available in AMS3, LON1, SFO3, and SGP1.

- The API call to [get Docker credentials for DOCR](https://docs.digitalocean.com/reference/api/digitalocean/#operation/registry_get_dockerCredentials) now requires the permission `registry:update` instead of `registry:create`.

- We have deprecated the App Platform [List Tiers](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_list_tiers) and [Retrieve App Tiers](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_get_tier) endpoints. We will remove them from the API on 1 September 2024.

- App Platform apps now support [Git Large File Storage (LFS)](https://git-lfs.com/), a Git extension that lets you store large files in Git repositories, even if they are too large to store in a single Git commit.

You can add Git LFS to your app by adding the installation commands to your app’s [run and build commands](https://docs.digitalocean.com/products/app-platform/how-to/build-run-commands/).


## July 2024

### 24 July

- You can now [use DigitalOcean Managed OpenSearch Databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/) with App Platform apps. [OpenSearch databases](https://docs.digitalocean.com/products/databases/opensearch/) provide a centralized location to manage and analyze logs forwarded from other resources.


### 16 July

- DOKS now supports the `LoadBalancerSourceRanges` field in the load balancer service configuration file. This field [specifies a list of IP addresses](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/#create-a-configuration-file) from which traffic can pass to the load balancer.

We have deprecated the `service.beta.kubernetes.io/do-loadbalancer-allow-rules` annotation in favor of the `LoadBalancerSourceRanges` field.


### 11 July

- Ubuntu 23.10 reached end of life on 11 July 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- We have deprecated the following buildpack versions for App Platform:


  - [Python v1 buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/). If your app uses this buildpack, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
  - JVM v0 buildpack. If your app uses this buildpack, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

### 8 July

- [DigitalOcean Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) are now in beta. Global load balancers allow you to distribute traffic to Droplets in different regions for high availability and performance.

- Debian 10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 4 July

- Centos 7 reached end of life on 4 July 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 July

- Paperspace NVIDIA GRID machines are now retired and therefore unavailable for new and existing Paperspace users. NVIDIA GRID machine types are Air, Standard, Advanced, Pro, ProL, and ProXL.

- We have deprecated Windows-based templates, so they are unavailable for new Paperspace users. Users who joined Paperspace prior to 1 July 2024 can still start, create, and manage Windows-based template machines. We continue to support Windows streaming updates for existing users.


## June 2024

### 27 June

- Control plane firewalls are now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for select DOKS customers. For more information, see [How to Add a Control Plane Firewall](https://docs.digitalocean.com/products/kubernetes/how-to/add-control-plane-firewall/).

- [Fedora 40](https://docs.fedoraproject.org/en-US/releases/f40/) (`fedora-40-x64`) base image is now available in the control panel and via the API.


### 26 June

- We have updated the default [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) from v0.118.2 to v0.125.2. You can override the default version by setting a `HUGO_VERSION` environment variable.


### 24 June

- DigitalOcean Load Balancers added to [DOKS clusters](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/) now default to [Kubernetes’ recommended health check configuration](https://kubernetes.io/blog/2022/12/30/advancements-in-kubernetes-traffic-engineering/) which facilitates worker node replacements with minimal request disruption. The new configuration automatically updates for all existing managed load balancers on DOKS 1.26 and later.

We do not recommend configuring health checks manually. You can continue the previous behavior by setting the `service.beta.kubernetes.io/do-loadbalancer-override-health-check` annotation as described [here](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#health-checks).


### 20 June

- You can now [forward logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform app to your [DigitalOcean Managed OpenSearch Cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/). This feature is in beta.


### 18 June

- We have updated the following buildpacks:


  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): Updates to the Ruby v2 buildpack are listed below. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Default Ruby version is now 3.1.4
    - Adds Ruby versions 3.2.4, 3.2.3, 3.1.5
    - Adds Ruby versions 3.0.7, 3.3.0, 3.3.1
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated for Go v1. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.21.8, go1.22.0, go1.22.1
    - Adds go1.20.14, go1.21.7
    - Defaults to go1.20.14 when Go version is not specified
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v2 buildpack are listed below. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.2.18 - PHP/8.2.15
    - Adds PHP/8.3.5 - PHP/8.3.2
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): Updates to the Python v4 buildpack are listed below. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Default Python version for new apps is now 3.12.3
      - Adds support for Python 3.11.9 and 3.12.3
      - Adds support for Python 3.12 and 3.11.6
      - Adds support for Python 3.8.19, 3.9.19 and 3.10.14

### 17 June

- Managed databases now supports log forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can create and manage log sinks using the [control panel](https://cloud.digitalocean.com/databases) and [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/). For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/forward-logs/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/forward-logs/).

- You can now manage OpenSearch users by [creating access control lists (ACLs)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_user) using the API.


### 14 June

- App Platform now offers [static ingress IP addresses for apps](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/#use-public-static-ingress-ip-addresses). You can create DNS records to using these addresses to route traffic directly to your app.


### 13 June

- We are moving the managed Cilium Operator component (`cilium-operator`) from the worker nodes to the control plane of DOKS clusters. This frees up resources on the worker nodes and improves autoscaling of the component.


### 6 June

- Centos Stream 8 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 5 June

- [You can now add existing Kafka databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#integrate-an-existing-kafka-database-beta) to App Platform apps. This feature is in beta.

- Daily backups are now available in SYD1.


## May 2024

### 30 May

- We have released an updated Ubuntu 24.04 image that fixes a problem with `journald`. If you created a Ubuntu 24.04 Droplets on or before 30 May 2024, you can run `sudo systemctl restart systemd-journald` once as a workaround for the patch.

- Daily backups are now available in SFO2 and TOR1.


### 29 May

- You can now add an additional standby node to your managed Redis clusters, for a maximum of two. To add standby nodes, see [How to Add Standby Nodes to Redis Database Clusters](https://docs.digitalocean.com/products/databases/redis/how-to/add-standby-nodes/).


### 23 May

- [OpenSearch](https://opensearch.org/docs/latest/getting-started) log forwarding is now in public beta. This lets you [forward runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform apps to an OpenSearch cluster, where you can analyze and query your app’s logs using OpenSearch’s APIs and dashboards.


### 20 May

- Bandwidth detail CSV files are now in beta. The [bandwidth detail CSV file](https://docs.digitalocean.com/platform/billing/bandwidth/) includes information on bandwidth usage for your team’s Droplets, load balancers, and Kubernetes clusters.

- Project spend CSV files are now in beta. The [project spend CSV file](https://docs.digitalocean.com/platform/billing/invoices/#project-spend-csv-file) contains estimates of your team spend by project. [Share your feedback](https://docs.google.com/forms/d/e/1FAIpQLSc0354pDV1uSwnEwLzNxM5H7Ck8CM0yNyxf9z2RMB5yrXLe8w/viewform) so we can continue to improve this feature.


### 15 May

- A [new API](https://docs.digitalocean.com/reference/paperspace/api-reference/) for managing Paperspace resources is now available. The API provides:


  - A unified and predictable endpoint schema

  - Improved performance and scalability

  - Documented support for API endpoints


We have deprecated the legacy Gradient and Core API endpoints, so they are now unavailable for Paperspace users. Applications must use the new API to retain functionality. You can [submit a support ticket](https://docs.digitalocean.com/support/paperspace/#open-a-ticket) for questions or assistance.

### 14 May

- Fedora 38 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- We have deprecated the `prefix` field used for defining allowed origins for CORS in the [App Platform app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/#yaml-file-structure). You can still use the `exact` or `regex` fields to define allowed origins.


### 13 May

- We have simplified how you [create machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/) and made the following improvements:


  - Operating system (OS) templates are auto-selected for machines. When you select a machine, only the supported templates for that machine type are shown. This pairing of machines and templates ensures that you choose a template that works with your machine.

  - Machine approval and fraud detection processes have been improved. This reduces the number of machine approval requests you make. You can request approval for a machine when selecting a machine in the Paperspace console.


### 8 May

- You can no longer create new PostgreSQL 12 managed databases. However, you can still fork existing PostgreSQL 12 clusters until PostgreSQL 12’s end of life on 14 November 2024.


### 7 May

- We have released a new catalog of [pricing plans for App Platform](https://docs.digitalocean.com/products/app-platform/details/pricing/#container-pricing). The new plans offer lower pricing on instances with dedicated CPUs and better egress bandwidth allowance. All previous plans will eventually be deprecated. We strongly recommend you use the new plans when creating or upgrading apps.


### 6 May

- [MongoDB 7.0](https://www.mongodb.com/docs/manual/release-notes/7.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 7.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/).


### 3 May

- You can now add [purchase orders](https://docs.digitalocean.com/platform/billing/invoices/#purchase-orders) to your team to include purchase order information on your monthly invoices and track usage against your purchase orders.


### 1 May

- SnapShooter has removed support for Exoscale due to [Exoscale API deprecations](https://changelog.exoscale.com/en/deprecation-api-v1-as-of-may-1st-2024-uVYHUVZ3).

Customers who no longer require snapshot services after this change should [contact support](https://cloudsupport.digitalocean.com/) for a prorated refund.

- We have added minimum and maximum values for the [health check configuration parameters](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/) in App Platform. The new limits are:


  - `initial_delay_seconds`: Minimum 0 seconds, maximum 3600 seconds
  - `period_seconds`: Minimum 1 second, maximum 300 seconds
  - `timeout_seconds`: Minimum 1 second, maximum 120 seconds
  - `success_threshold`: Minimum 1 successful check, maximum 50 successful check
  - `failure_threshold`: Minimum 1 failed check, maximum 50 failed checks

- App Platform [developer databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/) now default to use PostgreSQL 14 upon creation instead of PostgreSQL 12. You can create a database that uses PostgreSQL 16 by specifying the engine version in [your app’s spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/).


## April 2024

### 30 April

- Kafka v3.7 is now available is now available for [new](https://docs.digitalocean.com/products/databases/kafka/how-to/create/) and [existing](https://docs.digitalocean.com/products/databases/kafka/how-to/schedule-updates/) clusters.

- Premium CPUs are now available for Storage-Optimized Droplets.
Click here to view the full list of new Storage-Optimized Droplet plans with Premium CPUs.


| Slug | vCPUs | RAM (GB) | Disk (GB) | Transfer (TB) | Price |
| --- | --- | --- | --- | --- | --- |
| `so-2vcpu-16gb-intel` | 2 | 16 | 300 | 4 | $131.00 per month |
| `so1_5-2vcpu-16gb-intel` | 2 | 16 | 450 | 4 | $139.00 per month |
| `so-4vcpu-32gb-intel` | 4 | 32 | 600 | 6 | $262.00 per month |
| `so1_5-4vcpu-32gb-intel` | 4 | 32 | 900 | 6 | $278.00 per month |
| `so-8vcpu-64gb-intel` | 8 | 64 | 1200 | 7 | $524.00 per month |
| `so1_5-8vcpu-64gb-intel` | 8 | 64 | 1800 | 7 | $556.00 per month |
| `so-16vcpu-128gb-intel` | 16 | 128 | 2400 | 8 | $1048.00 per month |
| `so1_5-16vcpu-128gb-intel` | 16 | 128 | 3600 | 8 | $1112.00 per month |
| `so-24vcpu-192gb-intel` | 24 | 192 | 3600 | 9 | $1572.00 per month |
| `so1_5-24vcpu-192gb-intel` | 24 | 192 | 5400 | 9 | $1668.00 per month |
| `so-32vcpu-256gb-intel` | 32 | 256 | 4800 | 10 | $2096.00 per month |
| `so1_5-32vcpu-256gb-intel` | 32 | 256 | 7200 | 10 | $2224.00 per month |


The new plans are available through the [control panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel) and the [API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api) in NYC1, NYC3, SFO2, TOR1, FRA1, BLR1, and SYD1.


### 26 April

- You can now reconfigure MongoDB databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/).


### 25 April

- The [Ubuntu 24.04 LTS](https://discourse.ubuntu.com/t/noble-numbat-release-notes/39890) (`ubuntu-24-04-x64`) base image is now available in the control panel and via the API.

- We have updated the [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/). This adds a new version of Ruby, V2, and updates the default version for the buildpack. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/).
\\* Default Ruby version is now 3.1.4
\\* Add Ruby versions 3.2.2, 3.2.1, 3.2.0
\\* Add Ruby versions 2.7.8, 3.0.6, 3.1.4


### 23 April

- Premium CPUs are now available for Memory-Optimized Droplets.
Click here to view the full list of new Memory-Optimized Droplet plans with Premium CPUs.


| Slug | vCPUs | RAM (GB) | Disk (GB) | Transfer (TB) | Price |
| --- | --- | --- | --- | --- | --- |
| `m-2vcpu-16gb-intel` | 2 | 16 | 50 | 4 | $99.00 per month |
| `m3-2vcpu-16gb-intel` | 2 | 16 | 150 | 4 | $110.00 per month |
| `m-4vcpu-32gb-intel` | 4 | 32 | 100 | 6 | $198.00 per month |
| `m3-4vcpu-32gb-intel` | 4 | 32 | 300 | 6 | $220.00 per month |
| `m-8vcpu-64gb-intel` | 8 | 64 | 200 | 7 | $396.00 per month |
| `m3-8vcpu-64gb-intel` | 8 | 64 | 600 | 7 | $440.00 per month |
| `m-16vcpu-128gb-intel` | 16 | 128 | 400 | 8 | $792.00 per month |
| `m3-16vcpu-128gb-intel` | 16 | 128 | 1200 | 8 | $880.00 per month |
| `m-24vcpu-192gb-intel` | 24 | 192 | 600 | 9 | $1188.00 per month |
| `m3-24vcpu-192gb-intel` | 24 | 192 | 1800 | 9 | $1320.00 per month |
| `m-32vcpu-256gb-intel` | 32 | 256 | 800 | 10 | $1584.00 per month |
| `m3-32vcpu-256gb-intel` | 32 | 256 | 2400 | 10 | $1760.00 per month |


The new plans are available through the [control panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel) and the [API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api) in NYC1, NYC3, SFO2, TOR1, FRA1, BLR1, and SYD1.


### 22 April

- We’ve corrected a bug where image types other than snapshots could be listed using the `GET /v2/snapshots` endpoint. This behavior was strictly limited to image types that the user was properly authorized to access, such as backups and custom images.

- You can now add [dedicated egress IP addresses](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/) to your apps on App Platform. Dedicated egress IP addresses allow your app to connect to resources outside of DigitalOcean using a publicly available static IP address.


### 17 April

- [Custom scopes for personal access tokens (PATs)](https://docs.digitalocean.com/reference/api/create-personal-access-token/) are now [generally available](https://docs.digitalocean.com/platform/product-lifecycle/).

Previously, DigitalOcean PATs had only two scopes: read access to all team resources or full (read and write) access to all team resources. Custom scopes introduce more specific permissions, like creating Droplets or updating cloud firewalls, which lets you secure your workflows by granting only the permissions the token needs and restricting access to other resources and actions.


### 15 April

- Daily backups are now available in SGP1.


### 12 April

- Team members with the biller role can no longer access information about shared resources. Previously, billers could access this information via the API, but not the control panel.

- We have updated the [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/) for App Platform. The buildpack now supports the [PNPM package manager](https://pnpm.io/). For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/).


### 8 April

- You can now view hundreds of new database metrics by accessing the metrics API endpoint. For more detailed steps, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/#access-the-metrics-endpoint), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/#access-the-metrics-endpoint), [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/#access-the-metrics-endpoint), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/monitor-clusters/#access-the-metrics-endpoint).

- Tokens returned by the [`/kubeconfig`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_get_kubeconfig) and [`/credentials`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_get_credentials) endpoints now have [custom scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to provide read-only access to Kubernetes resources. Within DOKS clusters, operations to access Kubernetes objects are still available based on team role (owner, biller, or member) as before.


## March 2024

### 29 March

- You can now reconfigure Kafka databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/reconfigure/).


### 20 March

- A100-80G machines with 2 and 4 GPUs are now discontinued. You can choose the dedicated GPU A100-80G machine or the multi-GPU A100-80G machine with 8 GPUs instead.


### 19 March

- We have added synchronous validation of `LoadBalancer` [service annotations](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/). If you provide invalid values, DOKS returns an error, thus preventing misconfiguration of your load balancer.

- [Autoscaling for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#configure-auto-scaling-for-an-app-using-the-control-panel) is now in [Early Availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary). Autoscaling allows your app to automatically add or remove containers based on the workload across its containers.


### 18 March

- [Marketplace SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/) now include software license subscriptions. [Learn more about Marketplace licenses](https://www.digitalocean.com/blog/introducing-software-license-subscriptions-on-digitalocean-marketplace).


### 15 March

- We’ve released [feature preview](https://docs.digitalocean.com/platform/product-lifecycle/#feature-preview), a way to opt into beta offerings from DigitalOcean.

- The [custom scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/) for personal access tokens beta is now available via [feature preview](https://docs.digitalocean.com/platform/product-lifecycle/#feature-preview).


### 1 March

- The SST rate for Malaysia has increased from 6% to 8%. [Learn more about Malaysia taxes](https://docs.digitalocean.com/platform/billing/taxes/mys/).


## February 2024

### 26 February

- Graphcore IPU machines are now discontinued in Notebooks. When [creating a new notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/), you can choose [an available GPU or CPU](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/) instead.

- You can now customize the amount of nodes in Dedicated CPU Kafka plans to 3, 6, 9, or 15 nodes. For more details, see our guide on how to [resize Kafka clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/).


### 22 February

- Daily backups are now available in NYC1 and AMS3.


### 20 February

- You can now [retrieve crash logs](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/#runtime-logs) for apps in App Platform.


### 13 February

- You can now reconfigure MySQL, PostgreSQL, and Redis databases via the API, which lets you edit many database engine parameters that were previously unavailable for editing. For more detailed steps, see [How to Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/).


### 7 February

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.118.2 to v0.121.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v4 buildpack version has been released that removes support for Python 3.7. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Default Python version is now 3.12.
      - Added support for Python 3.11.7 and 3.12.1.
      - Added support for Python 3.12 and 3.11.6.
      - Dropped support for Python 3.7.
    - Python buildpack v3:
      - Added support for Python 3.12 and 3.11.6.
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.21.1, go1.21.2, go1.21.3, go1.21.4, go1.21.5 and go1.21.6
    - Add go1.20.8, go1.20.9, go1.20.10, go1.20.11, go1.20.12 and go1.20.13
    - Add go1.19.13
    - go1.20 defaults to go1.20.13
    - go1.21 defaults to go1.21.5
    - go1.19 defaults to go1.19.13
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are listed below. If you have an existing PHP app that uses v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.1.26 - PHP/8.1.27
      - Add PHP/8.2.13 - PHP/8.2.14
      - Add PHP/8.3.0 - PHP/8.3.1
      - Add composer/2.6.6

### 6 February

- Daily backups for Droplets are in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/). You can now [enable daily backups](https://docs.digitalocean.com/products/backups/how-to/enable/) on new and existing Droplets in NYC3 and SFO3.


## January 2024

### 31 January

- We have removed the built-in [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) from the control panel.

As an alternative, you can use the [Kubernetes Dashboard 1-Click App](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/#kubernetes-dashboard) from the DigitalOcean Marketplace, [Cilium Hubble](https://docs.digitalocean.com/products/kubernetes/how-to/use-cilium-hubble/), or [other open-source options for monitoring and visualizing Kubernetes workloads](https://www.digitalocean.com/community/conceptual-articles/kubernetes-visualization-tools).


### 20 January

- Ubuntu 23.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 18 January

- All currently supported DigitalOcean Kubernetes versions now have Cilium Hubble, Hubble Relay and Hubble UI enabled. For more information, see [Use Cilium Hubble](https://docs.digitalocean.com/products/kubernetes/how-to/use-cilium-hubble/).


### 17 January

- You can now [deploy apps to App Platform using public and private repositories](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/) on GitHub Container Registry. You can also now deploy images using private Docker Hub repositories.


### 16 January

- We’ve corrected a bug where image types other than snapshots could be retrieved using the `GET /v2/snapshots/$SNAPSHOT_ID` and `DELETE /v2/snapshots/$SNAPSHOT_ID` endpoints. This behavior was strictly limited to image types that the user was properly authorized to access, such as backups and custom images.


### 1 January

- The tax rate for customers in Estonia has increased from 20% to 22%. Learn more about [tax in Estonia](https://docs.digitalocean.com/platform/billing/taxes/eu/).

- The GST rate for Singapore has increased from 8% to 9% in accordance with [Budget 2022](https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-rate-change/gst-rate-change-for-consumers1) from the Inland Revenue Authority of Singapore (IRAS). [Learn more about Singapore taxes](https://docs.digitalocean.com/platform/billing/taxes/sgp/).

- The VAT rate for Switzerland and Liechtenstein has increased from 7.7% to 8.1% in accordance with the Federal Tax Administration of Switzerland (FTA)’s [amendment to the AHV Act](https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-rates-switzerland.html). [Learn more about Switzerland and Liechtenstein taxes](https://docs.digitalocean.com/platform/billing/taxes/che/).


## December 2023

### 21 December

- NVIDIA H100 GPUs are now available both on-demand and for guaranteed capacity reservations in the `NYC2` region via Paperspace’s sales team. For more information, see the [Paperspace NVIDIA H100 reference page](https://docs.digitalocean.com/products/paperspace/machines/details/h100/).

- We have released an updated Container Registry experience to give customers enhanced management of their private registries. This includes additional features to add, validate, and edit containers, as well as changes to ensure Gradient Deployments with containers start successfully. For more information, see [Manage Containers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-containers/).

- Gradient Deployments can now be created with secured endpoints using basic access authentication encoded tokens. For more information, see [Endpoint Security](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/).


### 19 December

- Ubuntu-18 will be deprecated for App Platform apps in 2024. We recommended that all apps [upgrade to Ubuntu-22](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) as soon as possible.

We have updated the following buildpacks:


  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to PHP v2 buildpack are listed below. If you are on Ubuntu-22 and have an existing PHP app that is on v0 or v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.2.11 - PHP/8.2.12
      - Add PHP/8.1.24 - PHP/8.1.25
      - Upgrade ext-Redis to 6.0.2
  - [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): A new NodeJS v1 buildpack version has been released that has an updated default version of NodeJS v20 for Ubuntu-22. If you are on Ubuntu-22 and have an existing NodeJS app that is on v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - NodeJS buildpack v1:
      - Default NodeJS version is now 20.x for Ubuntu-22 apps.

### 14 December

- Paperspace changes are now tracked through DigitalOcean’s release notes. See [Paperspace changelog](https://updates.paperspace.com/) for the new Paperspace products and features released prior to 14 December 2023.


### 8 December

- Released [v1.101.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.101.0), the official DigitalOcean CLI. This release adds support for scalable storage for PostgreSQL and MySQL databases and Kafka topic management.


### 5 December

- Fedora 37 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 4 December

- You can now add additional storage independently from your chosen database configuration plan when creating or resizing Kafka clusters on DigitalOcean. This provides a more economic option for increasing storage, rather than upgrading your cluster’s entire plan.

For more details, see our guides on how to [resize Kafka clusters](https://docs.digitalocean.com/products/databases/kafka/how-to/resize/).


### 1 December

- As part of the [Paperspace acquisition by DigitalOcean](https://www.digitalocean.com/blog/paperspace-joins-digitalocean), there are now several changes to billing for Paperspace users:


  - You now receive invoices from DigitalOcean. Invoice emails are sent from `support@digitalocean.com` with a PDF copy attached.

  - Your account is migrated to the DigitalOcean billing experience on `cloud.digitalocean.com`, where you can view details like team balance, itemized charges, and payment methods. You can no longer filter and review usage by user ID.

  - Your current Paperspace payment method has been migrated and you do not need to take any action.

  - Your team compute alerts have been migrated as [DigitalOcean billing alerts](https://docs.digitalocean.com/platform/billing/billing-alerts/). We do not support billing alerts for specific users. You can no longer create or use compute limits that restrict resource creation or forcefully terminate running workloads.

  - The Paperspace referral system is temporarily discontinued. If you have claimed credits from previous referrals, they are honored for Paperspace services.


If you are having trouble making a payment, please contact the Paperspace support team. Learn more about DigitalOcean’s [monthly billing cycle](https://docs.digitalocean.com/platform/billing/), [payment methods](https://docs.digitalocean.com/platform/billing/manage-payment-methods/), and [late payments](https://docs.digitalocean.com/platform/billing/late-payments/).

## November 2023

### 27 November

- The [Fedora 39](https://docs.fedoraproject.org/en-US/fedora/f39/release-notes/) (`fedora-39-x64`) base image is now available in the control panel and via the API.


### 21 November

- Additional Spaces CDN PoPs are now available. For the full list, see [Spaces availability](https://docs.digitalocean.com/products/spaces/details/availability/).

- SnapShooter _Server File_ backup jobs now have an _Include Git Repos?_ option to fully back up Git repos and their historical metadata. Without this option enabled, the files in a Git repo are backed up but the `.git` metadata directory is ignored.

See [How to Back Up Files with SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-files/) for more information on backing up files with SnapShooter.


### 16 November

- Ubuntu-18 has been deprecated for App Platform apps. We recommended that all apps [upgrade to Ubuntu-22](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) as soon as possible.

We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.111.3 to v0.118.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): A new Golang v1 buildpack version has been released that removes support for Heroku-18. If you are on Ubuntu-22 and have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/). For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Golang buildpack v1:
      - Add go1.21.0
      - Add go1.20.3 - go1.20.7
      - Add go1.19.8 - go1.19.12
      - go1.20 defaults to go1.20.7
      - go1.19 defaults to go1.19.12
      - Drop support for heroku-18 stack
    - Golang buildpack v0:
      - Add go1.20.3 and go1.20.4
      - Add go1.19.8 and go1.19.9
      - go1.20 defaults to go1.20.4
      - go1.19 defaults to go1.19.9
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): A new PHP v2 buildpack has been released and updates are listed below. If you are on Ubuntu-22 and have an existing PHP app that is on v0 or v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.2.5 - PHP/8.2.10
      - Add PHP/8.1.18 - PHP/8.1.10
      - Add PHP/8.0.29 - PHP/8.0.30
      - Drop support for heroku-18 stack
      - Drop support for PHP 7.1 and 7.2
    - PHP buildpack v1:
      - Add PHP/8.2.5
      - Add PHP/8.1.18
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v3 buildpack version has been released that removes support for Heroku-18. If you are on Ubuntu-22 and have an existing Python app that is on v2, v1 or v0, we recommend [upgrading to v3](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v3:
      - Add Python 3.9.17, and 3.9.18
      - Add Python 3.10.12, 3.10.13, 3.11.4, and 3.11.5
      - Default Python version is now 3.11.5.
      - Removed support for Heroku-18.

### 14 November

- You can now [deploy container images to App Platform using digests](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-container-using-an-image-digest). Digests are immutable references to container images. Unlike tags, digests permanently refer to a specific iteration of an image.

You can only deploy an image using a digest by updating your app’s spec at this time.

- The `cors` and `routes` fields under the `services` array in the [App Platform app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) have been deprecated. The `cors` field now resides in the `rules` array of the `ingress` section of the spec. The `routes` field has been replaced by the `match` field in the `rules` array of the `ingress` section of the spec.


### 7 November

- DigitalOcean [Kafka](https://kafka.apache.org/) is now in general availability. For more details, see our [Kafka documentation](https://docs.digitalocean.com/products/databases/kafka/) and [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).


## October 2023

### 30 October

- We are incrementally making additional Spaces CDN PoPs available for existing customers, starting on 6 November 2023 and finishing on 21 November 2023. For the full upcoming list, see [Spaces availability](https://docs.digitalocean.com/products/spaces/details/availability/).


### 25 October

- We have disabled password-based authentication for newly created Alma 9 Droplets due to an incompatibility between Alma 9’s password authentication mechanism and DigitalOcean’s provisioning system.

SSH-based login remains available. Previously created Alma 9 Droplets are not affected.

- We have disabled password-based authentication for newly created Rocky 8 Droplets due to an incompatibility between Rocky 8’s password authentication mechanism and DigitalOcean’s provisioning system.

SSH-based login remains available. Previously created Rocky 8 Droplets are not be affected.

- The [Ubuntu 23.10](https://discourse.ubuntu.com/t/mantic-minotaur-release-notes/35534) (`ubuntu-23-10-x64`) base image is now available in the control panel and via the API.


### 20 October

- DigitalOcean Container Registry (DOCR) is now available in BLR1. You can view the availability of all of our products by datacenter in the [regional availability page](https://docs.digitalocean.com/platform/regional-availability/).


### 19 October

- SnapShooter accounts created after 19 October 2023 cannot use Google Drive or Dropbox as a SnapShooter storage provider. Please use [SnapShooter Simple Storage](https://docs.digitalocean.com/products/snapshooter/details/features/), [Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/), or [other storage providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/) instead.


### 18 October

- The Kafka plan featuring 24 VCPUs, 96 GB RAM, and 600 GB of storage is now deprecated.


### 17 October

- The Kubernetes API endpoints `/v2/kubernetes/clusters/<cluster ID>/kubeconfig` and `/v2/kubernetes/clusters/<cluster ID>/credentials` now require API tokens to have write scope.

- Backups now remain available for four weeks even if the associated Droplet is deleted. Previously, deleting a Droplet would also delete its backups.

You can view your backups and their expiration dates in the [control panel](https://cloud.digitalocean.com/images/backups) and [convert them to snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/).

- Released [v1.100.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.100.0), the official DigitalOcean CLI. This release adds new commands for managing uptime alerts and retrieving advanced database configuration options.


### 11 October

- The following three Kafka plans are now deprecated:


  - 48 VCPUs, 192 GB RAM, 1,200 GB
  - 96 VCPUs, 384 GB RAM, 2,400 GB
  - 120 VCPUs, 480 GB RAM, 3,000 GB

- Premium CPUs for General Purpose Droplets are now available in AMS3 and SFO3.

- App Platform now supports the [Aptfile buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/aptfile/). The Aptfile buildpack lets you install system-level Ubuntu packages during your app’s build process.


### 6 October

- PostgreSQL 11 is now deprecated. All existing PostgreSQL 11 database clusters are scheduled to automatically upgrade to PostgreSQL 15 during [the cluster’s upgrade window](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/) starting on 6 November 2023.


### 3 October

- Our [DDoS Protection service](https://docs.digitalocean.com/platform/ddos-protection/) is now available and active for all DigitalOcean customers at no additional cost.

DDoS Protection covers Droplets, Kubernetes clusters, managed databases, load balancers, and assigned reserved IPs.

- Ubuntu 22 is now the default stack for all App Platform apps. This upgrade provides security updates, newer versions of buildpacks, and new features, such as upgrading to newer Node.js versions.

You can [downgrade your app’s stack](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) back to Ubuntu 18 if your app experiences compatibility issues.


### 1 October

- Tax collection for Egypt has begun. [Learn more about taxes in Egypt.](https://docs.digitalocean.com/platform/billing/taxes/egy/)


## September 2023

### 29 September

- The following MySQL and PostgreSQL plans are now deprecated:


  - MySQL and PostgreSQL plans with 8 vCPUs, 32 GB RAM, and 600 GB SSD ($480 per month)
  - MySQL and PostgreSQL plans with 16 vCPUs, 64 GB RAM, and 1220 GB SSD ($960 per month)

All of your existing database clusters with these plans are still functional and accessible to you. However, you cannot resize them. To regain access to these features, fork your database to a new cluster with a supported plan. For more detailed steps, see our guides on how to [fork MySQL databases](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/) and [fork PostgreSQL databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/).

- When creating or resizing MySQL or PostgreSQL clusters on DigitalOcean, you can now add additional storage independently from your chosen database configuration plan. This provides a more economic option for increasing storage, rather than upgrading your cluster’s entire plan.

For more details, see our guides on how to [resize MySQL clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/) and [resize PostgreSQL clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/).


### 27 September

- Premium CPUs are now available for General Purpose Droplets.
Click here to view the full list of new General Purpose Droplet plans with Premium CPUs.


| Slug | vCPUs | RAM (GB) | Disk (GB) | Transfer (TB) | Price |
| --- | --- | --- | --- | --- | --- |
| `g-2vcpu-8gb-intel` | 2 | 8 | 25 | 4 | $76.00 per month |
| `gd-2vcpu-8gb-intel` | 2 | 8 | 50 | 4 | $79.00 per month |
| `g-4vcpu-16gb-intel` | 4 | 16 | 50 | 5 | $151.00 per month |
| `gd-4vcpu-16gb-intel` | 4 | 16 | 100 | 5 | $158.00 per month |
| `g-8vcpu-32gb-intel` | 8 | 32 | 100 | 6 | $302.00 per month |
| `gd-8vcpu-32gb-intel` | 8 | 32 | 200 | 6 | $317.00 per month |
| `g-16vcpu-64gb-intel` | 16 | 64 | 200 | 7 | $605.00 per month |
| `gd-16vcpu-64gb-intel` | 16 | 64 | 400 | 7 | $634.00 per month |
| `g-32vcpu-128gb-intel` | 32 | 128 | 400 | 8 | $1210.00 per month |
| `gd-32vcpu-128gb-intel` | 32 | 128 | 800 | 8 | $1268.00 per month |
| `g-48vcpu-192gb-intel` | 48 | 192 | 600 | 9 | $1814.00 per month |
| `gd-48vcpu-192gb-intel` | 48 | 192 | 1200 | 9 | $1901.00 per month |


The new plans are available through the [control panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel) and the [API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api) in NYC1, NYC3, SFO2, TOR1, FRA1, BLR1, and SYD1.

- We have added Swagger functionality to the API documentation. Using an [API key](https://docs.digitalocean.com/reference/api/create-personal-access-token/), you can now use the Swagger’s “Try it out” feature to interact with the API from the documentation.


### 25 September

- DigitalOcean Managed Databases now supports [Apache Kafka](https://kafka.apache.org/) in early availability. For more details, see our [Kafka documentation](https://docs.digitalocean.com/products/databases/kafka/) and [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).

- The [Ubuntu 23.04](https://discourse.ubuntu.com/t/lunar-lobster-release-notes/31910) (`ubuntu-23-04-x64`) base image is now available in the control panel and via the API.


### 21 September

- App Platform now supports Google Trust as a Certificate Authority.

When [configuring a domain in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/#add-a-domain-that-uses-caa-records), if the domain has a CAA record, you must specify both Google Trust and Let’s Encrypt in the CAA record for App Platform to issue certificates.


### 8 September

- We have released the Vendor API which allows Marketplace vendors to update existing Droplet 1-Click Apps programmatically. See the [Vendor API documentation](https://github.com/digitalocean/marketplace-partners/blob/master/README.md#update-your-app-image-via-api) for more information.


## August 2023

### 28 August

- All Functions API calls now require read-write tokens, even if they are for read-only actions. See the [Functions section of the DigitalOcean API reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Functions) for more details.


### 24 August

- The 429 error response to reaching our API’s burst rate limit now includes a Retry-After header to indicate how long to wait (in seconds) before retrying a request. This additional header enables the configuration of automatic retries and exponential backoffs in DigitalOcean clients such as doctl, Terraform, and Godo. Learn more about our API burst limit structure in our [API Documentation](https://docs.digitalocean.com/reference/api/digitalocean/#section/Introduction/Rate-Limit).


### 18 August

- Released [v1.98.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.98.0), the official DigitalOcean CLI. This release adds support for automatically retrying API requests that fail with a 429 or 500-level error. The number of attempts can be configured using the `--http-retry-max` flag or `DIGITALOCEAN_HTTP_RETRY_MAX` environment variable. To disable retries altogether, set to `0`.


### 17 August

- You can now [upgrade your app stacks](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) to Ubuntu 22 on App Platform. This upgrade provides security updates, newer versions of buildpacks, and new features, such as upgrading to newer Node.js versions.


### 2 August

- We have released new plans for Basic Droplets with Premium CPUs with different vCPU:RAM ratios.

The new plans are available through the [control panel](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-in-the-control-panel) and the [API](https://docs.digitalocean.com/products/droplets/how-to/create/#create-a-droplet-using-the-api) for all data centers. However, plans with a 1:4 vCPU:RAM ratio (like the 2 vCPU and 8 GB RAM plan) are not yet available in LON1, SGP1, and NYC1.
Click here to view the full list of new plans.


| Slug | vCPUs | RAM (GB) | Disk (GB) | Transfer (TB) | Price |
| --- | --- | --- | --- | --- | --- |
| `s-2vcpu-8gb-amd` | 2 | 8 | 100 | 5 | $42.00 per month |
| `s-4vcpu-16gb-amd` | 4 | 16 | 200 | 8 | $84.00 per month |
| `s-8vcpu-32gb-amd` | 8 | 32 | 400 | 10 | $168.00 per month |
| `s-1vcpu-1gb-35gb-intel` | 1 | 1 | 35 | 1 | $8.00 per month |
| `s-1vcpu-2gb-70gb-intel` | 1 | 2 | 70 | 2 | $16.00 per month |
| `s-2vcpu-2gb-90gb-intel` | 2 | 2 | 90 | 3 | $24.00 per month |
| `s-2vcpu-4gb-120gb-intel` | 2 | 4 | 120 | 4 | $32.00 per month |
| `s-2vcpu-8gb-160gb-intel` | 2 | 8 | 160 | 5 | $48.00 per month |
| `s-4vcpu-8gb-240gb-intel` | 4 | 8 | 240 | 6 | $64.00 per month |
| `s-4vcpu-16gb-320gb-intel` | 4 | 16 | 320 | 8 | $96.00 per month |
| `s-8vcpu-16gb-480gb-intel` | 8 | 16 | 480 | 9 | $128.00 per month |
| `s-8vcpu-32gb-640gb-intel` | 8 | 32 | 640 | 10 | $192.00 per month |


The previous plans for Basic Droplets with Premium CPUs are no longer available in the control panel, but remain available through the API and CLI with the same slugs.
Click here to view the full list of deprecated plans.


| Slug | vCPUs | RAM (GB) | Disk (GB) | Transfer (TB) | Price |
| --- | --- | --- | --- | --- | --- |
| `s-1vcpu-1gb-intel` | 1 | 1 | 25 | 1 | $7.00 per month |
| `s-1vcpu-2gb-intel` | 1 | 2 | 50 | 2 | $14.00 per month |
| `s-2vcpu-2gb-intel` | 1 | 2 | 60 | 3 | $21.00 per month |
| `s-2vcpu-4gb-intel` | 1 | 4 | 80 | 4 | $28.00 per month |
| `s-4vcpu-8gb-intel` | 1 | 8 | 160 | 6 | $56.00 per month |
| `s-8vcpu-16gb-intel` | 1 | 16 | 320 | 9 | $112.00 per month |


## July 2023

### 27 July

- We now support ACH direct debit payments for qualifying customers with U.S. bank accounts. Learn more about [managing payment methods on DigitalOcean](https://docs.digitalocean.com/platform/billing/manage-payment-methods/).


### 26 July

- We have reenabled the creation of new resources in SFO2 for all customers.


### 20 July

- The Ubuntu 22.10 distribution has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 17 July

- PostgreSQL clusters on DigitalOcean now support the [`pgvector`](https://github.com/pgvector/pgvector) extension, for vector similarity search. For a full list of supported extensions, see our guide [Supported PostgreSQL Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/).

- Ubuntu 18.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 10 July

- Released [v1.97.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.97.0), the official DigitalOcean CLI. This release updates the default behavior of the `doctl registry login` command to set a 30-day expiry for the registry API token that is created when logging in. The previous default behavior was to create a registry API token that did not expire.

To create a registry API token that does not expire, you can set the new `--never-expire` flag to `true`. To set a different expiry time than the default 30 days, you can set the `--expiry-seconds` flag to an integer representing the number of seconds until the token should expire.

This also adds support for interacting with [uptime checks](https://docs.digitalocean.com/products/uptime/) via `doctl`. Please see the [`doctl monitoring uptime` command reference](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/) for more information.


### 7 July

- The VAT rate for Turkey has increased from 18% to 20% in accordance with [Presidential Decree No. 7346 published in the Official Gazette on 7 July 2023](https://www.resmigazete.gov.tr/eskiler/2023/07/20230707-11.pdf). Learn more about [tax in Turkey](https://docs.digitalocean.com/platform/billing/taxes/tur/).

- Spaces is now available in BLR1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).


### 6 July

- DigitalOcean has acquired Paperspace. Learn more in the [Paperspace acquisition blog post](https://www.digitalocean.com/blog/paperspace-joins-digitalocean).

- Fedora 36 reached end of life on 18 May 2023. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 July

- New Mexico’s [Gross Receipts Tax has been reduced to 4.875%](https://www.tax.newmexico.gov/wp-content/uploads/2023/06/July-1-tax-changes.pdf) from 5.125%. Learn more about [tax in the United States of America](https://docs.digitalocean.com/platform/billing/taxes/usa/).

- South Dakota’s [Retail Sales and Use Tax has reduced from 4.5% to 4.2%](https://dor.sd.gov/businesses/taxes/sales-use-tax/2023-legislative-updates/). Learn more about [tax in the United States of America](https://docs.digitalocean.com/platform/billing/taxes/usa/).

- Tax collection for Tanzania has begun. Learn more about [Tanzania taxes](https://docs.digitalocean.com/platform/billing/taxes/tza/).

- We no longer bill for outbound data transfer that we determine is dropped by a DigitalOcean firewall rule. Learn more about [bandwidth billing](https://docs.digitalocean.com/platform/billing/bandwidth/).


## June 2023

### 27 June

- The [Debian 12](https://www.debian.org/News/2023/20230610) (`debian-12-x64`) base image is now available in the control panel and via the API.

- Rocky 8.4 and 8.5 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


### 5 June

- The [Domains and DNS management service](https://docs.digitalocean.com/products/networking/dns/) now only allows you to add domains with known top-level domains (TLDs) [publicly recognized by ICANN](https://publicsuffix.org/list/public_suffix_list.dat).


### 1 June

- Tax collection for Indonesia has begun. [Learn more about taxes in Indonesia.](https://docs.digitalocean.com/platform/billing/taxes/idn/)

- Tax collection for IaaS and PaaS services has begun for customers in Rhode Island. [Learn more about United States of America taxes](https://docs.digitalocean.com/platform/billing/taxes/usa/).


## May 2023

### 22 May

- PostgreSQL 15 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 12, 13, 14, and 15.


### 16 May

- Premium Intel CPUs are now available for CPU-Optimized Droplets in TOR1.


### 5 May

- Released [v1.94.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.94.0), the official DigitalOcean CLI. This release updates the `doctl auth init` prompt and deprecates the `--algorithm` flag for load balancer sub-commands.


### 4 May

- The [Fedora 38](https://getfedora.org/en/workstation/download/) (`fedora-38-x64`) base image is now available in the control panel and via the API.


## April 2023

### 26 April

- DigitalOcean Functions now supports functions written in Go 1.20, PHP 8.2, and Python 3.11.

Visit the [Functions documentation](https://docs.digitalocean.com/products/functions/) to learn more about which runtimes are available.


### 20 April

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.109.0 to v0.111.3. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.20, go1.20.1, and go1.20.2
    - Add go1.19.4, go1.19.5, go1.19.6, and go1.19.7
    - Add go1.18.9, go1.18.10
    - go1.20 defaults to 1.20.2
    - go1.19 defaults to 1.19.7
    - go1.18 defaults to go1.18.10
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are listed below. If you have an existing PHP app that is on v0, please [upgrade to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v1:
      - Add PHP/8.1.17
      - Add PHP/8.0.28
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v2 buildpack version has been released that removes support for Python 3.6. Updates to the Python v1 buildpack are listed below. If you have an existing Python app that is on v1 or v0, please [upgrade to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v2:
      - Drop support for Python 3.6
      - Add Python 3.10.11, 3.10.10, 3.11.3, and 3.11.2
      - Default Python version is now 3.11.3
    - Python buildpack v1:
      - Add Python 3.10.10 and 3.11.2
      - Default Python version is now 3.11.2

### 18 April

- Premium Intel CPUs are now available for CPU-Optimized Droplets in BLR1.


## March 2023

### 30 March

- You can now [remap and redirect URL paths](https://docs.digitalocean.com/products/app-platform/how-to/url-rewrites/) in your apps on App Platform. For example, if you have the existing path `/your-app/api/functions/js/post` in your app, you can create a rewrite that masks that path with the simpler path, `/your-app/api/post`. Or you can redirect traffic from a specified path to a different URL on the internet.

Additionally, app routing information is now specified under the `ingress` stanza of [app specs](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).


### 27 March

- The largest CPU-Optimized Droplet plan is now available in BLR1.


### 24 March

- We have extended the promotional period for CPU-Optimized Droplets with Premium Intel CPUs (no billing for outbound data transfer at speeds faster than 2 Gbps) from 30 April 2023 to 30 June 2023. [Learn more about bandwidth billing.](https://docs.digitalocean.com/platform/billing/bandwidth/)


### 23 March

- Premium Intel CPUs are now available for CPU-Optimized Droplets in SFO2.


### 13 March

- [MongoDB 6.0](https://www.mongodb.com/docs/manual/release-notes/6.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 6.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)


### 9 March

- We have finished rolling out NVMe for volumes in all regions. Newly-created volumes in all regions are now on NVMe-based storage.


### 1 March

- Spaces now automatically delete any incomplete [multipart uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html) older than 90 days to prevent billing and to free up storage.


## February 2023

### 22 February

- Premium Intel CPUs are now available for CPU-Optimized Droplets. You can create CPU-Optimized Droplets with Premium Intel CPUs in NYC1, NYC3, FRA1, AMS3, SFO3, and SYD1.

Compared to CPU-Optimized Droplets with Regular Intel CPUs, CPU-Optimized Droplets with Premium Intel CPUs have the latest hardware and five times more network throughput.

Additionally, for a promotional period from 1 February through 30 April 2023, we will not bill for outbound data transfer at speeds faster than 2 Gbps for CPU-Optimized Droplets with Premium Intel CPUs. [Learn more about bandwidth billing.](https://docs.digitalocean.com/platform/billing/bandwidth/)

You can use this plan for both standalone Droplets and Kubernetes nodes. You can also resize your existing Droplets to this node plan.


### 2 February

- Newer Spaces buckets now have an improved limit of 800 total operations per second. To check whether a bucket has this new limit, see our [Spaces rate limits](https://docs.digitalocean.com/products/spaces/details/limits/#rate-limits).


## January 2023

### 24 January

- We have deprecated our legacy load balancer scaling system in all datacenter regions. This includes the deprecation of the `do-loadbalancer-size-slug` annotation for DigitalOcean Kubernetes load balancers.

[Horizontal scaling](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) is now available in all regions.


### 11 January

- DigitalOcean has acquired SnapShooter, a backup and recovery solutions provider. [Learn more in our blog post.](https://www.digitalocean.com/blog/digitalocean-acquires-snapshooter)


### 6 January

- Released [v1.92.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.92.0), the official DigitalOcean CLI. This release updates the `doctl auth init` prompt and deprecates the `--algorithm` flag for load balancer sub-commands.


### 5 January

- Fedora 35 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 January

- The tax rate for Englewood, Colorado in the United States of America has increased from 3.5% to 3.8%. [Learn more about USA taxes.](https://docs.digitalocean.com/platform/billing/taxes/usa/)

- The Luxembourg Tax Authorities (LTA) temporarily decreased the VAT rate from 17% to 16%. We have begun charging the adjusted VAT rate to private individuals (B2C sales) located in Luxembourg, which will be visible on invoices issues on 1 February 2023. [Learn more about EU taxes.](https://docs.digitalocean.com/platform/billing/taxes/eu/)

- The Goods and Services Tax (GST) rate for Singapore has increased from 7% to 8%. [Learn more about Singapore taxes.](https://docs.digitalocean.com/platform/billing/taxes/sgp/)


## December 2022

### 16 December

- Released [v1.91.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.91.0), the official DigitalOcean CLI. This release adds support for creating and updating firewall rules for load balancers.


### 15 December

- RancherOS is now [fully deprecated](https://docs.digitalocean.com/products/droplets/details/image-deprecation/) on our platform and is no longer available in the control panel or API.


### 12 December

- Released [v1.89.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.89.0), the official DigitalOcean CLI. This release adds support for creating serverless namespaces in the `syd1` region and creating monitoring alert policies for load balancer metrics.


### 6 December

- You can now [customize the amount of time](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#http-idle-timeout) a load balancer allows HTTP connections to remain idle before closing it. The maximum amount time you can set is 600 seconds (10 minutes).

Setting a custom time out length has no effect on HTTPS and HTTP/2 forwarding rules using TLS passthrough.


## November 2022

### 30 November

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#http3) and [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#http3-ports) now support the HTTP/3 protocol.


### 22 November

- Released [v1.88.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.88.0), the official DigitalOcean CLI. This release adds a flag to the load balancer create command that allows you to configure its HTTP idle timeout.


### 17 November

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.101.0 to v0.104.3. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).

  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).
    - Add go1.19
    - Add go1.19.1
    - Add go1.18.6
    - go1.18 defaults to 1.18.6
    - go1.19 defaults to 1.19.1
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v1 buildpack has been released alongside the current v0 buildpack. Existing Python apps will remain on v0, while new apps will start using v1. If you have an existing Python app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - Python buildpack v1:
      - Python 3.7.15, 3.8.15, 3.9.15 and 3.10.8 are now available
      - The default Python version for new apps is now 3.10.8 (previously 3.10.7)
      - Drop support for Python 2.7, 3.4 and 3.5
      - Drop support for PyPy
      - Python 3.7.14, 3.8.14 and 3.9.14 are now available
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): A new PHP v1 buildpack has been released alongside the current v0 buildpack. Existing PHP apps will remain on v0, while new apps will start using v1. If you have an existing PHP app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - PHP buildpack v1:
      - Add PHP/7.4.32
      - Add PHP/8.0.24
      - Add PHP/8.1.11
      - Add Composer/2.4.2
      - Drop support for Composer/1.x.x
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): A new Ruby v1 buildpack has been released alongside the current v0 buildpack. Existing Ruby apps will remain on v0, while new apps will start using v1. If you have an existing Ruby app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - Ruby buildpack v1:
      - Default Ruby version is now 3.1.2

### 16 November

- DigitalOcean Kubernetes clusters originally created with version 1.20 or older have an outdated version of our control plane architecture, which does not allow you to enable [high availability](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane). However, you can now upgrade your control plane to our new version. This upgrade option is available for Kubernetes versions currently 1.22 and later.

To check whether you can upgrade your cluster to the new control plane, see [our guide](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#new-control-plane).

- You can now enable [high availability](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane) on existing Kubernetes clusters. For detailed steps, see [our guide](https://docs.digitalocean.com/products/kubernetes/how-to/enable-high-availability/).

- The [Fedora 37](https://getfedora.org/en/workstation/download/) (`fedora-37-x64`) base image is now available in the control panel and via the API.

- Released [v1.87.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.87.0), the official DigitalOcean CLI. This release promotes the option to enable high availability on existing Kubernetes clusters to General Availability. It also adds a flag that allows you to add a load balancer to a specified project upon its creation.


### 15 November

- We have launched the Sydney, Australia (`syd1`) datacenter region, which supports most Droplet types, managed databases, and other products. Learn more in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).

- Released [v1.86.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.86.0), the official DigitalOcean CLI. This release includes new `doctl apps list-buildpacks` and `doctl apps upgrade-buildpack` subcommands allowing you to manually upgrade an app’s buildpacks to their latest major versions.


### 9 November

- The [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/) now accepts the YAML `content-type` when [submitting app specs for App Platform](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_create).


## October 2022

### 28 October

- All Spaces rate limits have increased to double their previous amount. For a list of the current rate limits, see [our Limits page](https://docs.digitalocean.com/products/spaces/details/limits/#rate-limits).


### 27 October

- [AlmaLinux OS](https://almalinux.org/) versions 8.6 and 9 base images are now available in the control panel and via the API.


### 24 October

- The [Ubuntu 22.10](https://discourse.ubuntu.com/t/kinetic-kudu-release-notes/27976) (`ubuntu-22-10-x64`) base image is now available in the control panel and via the API.


### 18 October

- Released [v1.84.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.84.0), the official DigitalOcean CLI. This release adds a `--wait` flag to the `doctl database create` subcommand.


### 17 October

- Premium AMD Droplets now also include servers powered by third generation AMD EPYC processors.


### 13 October

- When creating a new Kubernetes cluster, you can add a free database operator (now in beta), which allows you to automatically link new databases to your cluster. For more details, see [documentation on GitHub](https://github.com/digitalocean/do-operator/tree/main/docs/databases).

- [`do-operator`](https://github.com/digitalocean/do-operator), our operator for managing and consuming DigitalOcean resources from a Kubernetes cluster, is now an open-source beta project.


### 7 October

- The IOPS and throughput limits for volumes are now 50% higher. For a list of the new limits by Droplet type, see our [updated limits page](https://docs.digitalocean.com/products/volumes/details/limits/). To reach the new limits, you must power cycle the Droplet with the attached volume or detach and reattach the volume.

- Released [v1.83.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.83.0), the official DigitalOcean CLI. This release adds updated confirmation dialogs and a `--wait` flag to the `doctl compute load-balancer create` subcommand.


### 1 October

- Tax collection for Kazakhstan has begun. [Learn more about taxes in Kazakhstan.](https://docs.digitalocean.com/platform/billing/taxes/kaz/)


## September 2022

### 29 September

- DigitalOcean Functions now support a maximum timeout of 15 minutes.

Longer timeouts enable functions to handle more complex and compute-intensive tasks such as video and image processing, data transformation, and report generation.

Visit the [Functions documentation](https://docs.digitalocean.com/products/functions/) to learn more about creating and working with long-running functions.

- DigitalOcean Functions now has limited beta access to scheduled triggers.

Scheduled function triggers allow you to set a cron-like schedule for running your function. An optional payload may be included with each invocation. Each function may have multiple triggers with different schedules and payloads.

Visit [How to Schedule Functions](https://docs.digitalocean.com/products/functions/how-to/schedule-functions/) to learn more about creating and working with scheduled triggers from the command line or control panel interface.


### 28 September

- Released [v1.82.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.82.0), the official DigitalOcean CLI. This release upgrades [godo](https://github.com/digitalocean/godo/releases) to v1.86.0 and adds support for building App Platform apps locally.


### 27 September

- Users who sign up for DigitalOcean through the [referral program](https://docs.digitalocean.com/platform/teams/how-to/refer-others/) now receive a $200 account credit, increased from $100.


### 23 September

- We have added the `project_id` field to the [Reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/) service’s API. The `project_id` field allows you to create and associate Reserved IPs with a [DigitalOcean Project](https://docs.digitalocean.com/products/projects/).

Use the `project_id` and `region` fields in a [Create a new Reserved IP request](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_create) to create a Reserved IP within a project. You can assign the IP address to a Droplet later using a [Reserved IP action](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPsActions_post) request.

We have added the `project_id` field to the following Reserved IP API responses:


  - [Create a new Reserved IP (POST)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_create)
  - [List Reserved IPs (GET)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_list)
  - [Retrieve an existing Reserved IP (GET)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_get)
  - [Initiate a Reserved IP action (POST)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPsActions_post)

### 22 September

- App Platform now supports automatically re-deploying apps when updated container images are pushed to DigitalOcean Container Registry. See [How to Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/) for more information.


### 20 September

- DigitalOcean Functions now has support for multiple namespaces.

Namespaces are a level of isolation and organization for functions. They allow you to isolate functions by project, by environment (production versus development, for example), by region, or by any other grouping that facilitates your development workflow.

Visit the [Functions documentation](https://docs.digitalocean.com/products/functions/) to learn more about creating and working with multiple namespaces.

- When you create a Droplet using the API (`POST /v2/droplets`), you can now specify a region (like NYC) instead of a specific datacenter (like NYC3). The API then creates your Droplet in any available datacenter within your specified region. For example, if you want to create a Droplet in San Francisco, you can use the region `sfo` to guarantee that the Droplet will be in SFO1, SFO2, or SFO3. Additionally, you can omit the region entirely (or set it to an empty string) to create a Droplet in any available region.

- Released [v1.80.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.80.0), the official DigitalOcean CLI. This release adds support for creating and managing multiple namespaces for serverless functions.

- Released [v1.81.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.81.0), the official DigitalOcean CLI. This release adds two new pieces of functionality. When creating a reserved IP, you can now specify the project it should be placed in. It also makes the `--region` flag an optional argument for the `compute droplet create` sub-command.


### 9 September

- The [Rocky 9](https://rockylinux.org/download/) (`rockylinux-9-x64`) base image is now available in the control panel and via the API.


### 8 September

- [DigitalOcean Uptime](https://docs.digitalocean.com/products/uptime/) is now in general availability.

Uptime is a monitoring service that checks the health of any URL or IP address. You can use it to monitor the latency, uptime, and SSL certificate of any website or host, and can choose to receive alerts via email or Slack when your site is down, experiencing high latency, or has an SSL certificate that’s about to expire. [Learn more about Uptime.](https://docs.digitalocean.com/products/uptime/details/features/)


### 7 September

- Redis 7.0 is now available when [creating new databases](https://docs.digitalocean.com/products/databases/redis/how-to/create/). You can no longer create Redis 6.0 clusters. On 5 November 2022, we will officially no longer support 6.0 and will automatically upgrade all existing clusters to 7.0, with no expected downtime or interruptions.


### 1 September

- To comply with Kenya’s Revenue Authority amendments in Finance Act 2022, we now charge VAT to B2B and B2C customers in Kenya. [Learn more about Kenya taxes.](https://docs.digitalocean.com/platform/billing/taxes/ken/)

- Tax collection for Liechtenstein has begun. [Learn more about taxes for Switzerland and Liechtenstein](https://docs.digitalocean.com/platform/billing/taxes/che/).


## August 2022

### 26 August

- In App Platform, you can now create [bindable environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) for your [PostgreSQL database connection pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/). For detailed instructions, see our [reference page](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#databases).


### 18 August

- A new CPU-Optimized Droplet plan with more computing power is now available. This plan features 48 vCPUs (up from the previous maximum of 32) and 96 GB of memory (up from the previous maximum of 64).

This large CPU-Optimized Droplet plan is available [where CPU-Optimized Droplets are already available](https://docs.digitalocean.com/platform/regional-availability/), except for BLR1 and SFO2.

You can use this plan for both standalone Droplets and Kubernetes nodes. You can also [resize your existing Droplets to this node plan](https://docs.digitalocean.com/products/droplets/how-to/resize/).


### 15 August

- Released [v1.79.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.79.0), the official DigitalOcean CLI. This release adds several `databases options` sub-commands you can use to look up create-time options for database clusters, such as supported engines and versions.


### 10 August

- Debian 9 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is now only available via the API. We will remove the Debian 9 image from our platform in 30 days.

- Ubuntu 21.10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 8 August

- The [Rocky 8.6](https://rockylinux.org/download/) (`rockylinux-8-x64`) base image is now available in the control panel and via the API.


### 4 August

- You can now upgrade your App Platform app’s and its components’ buildpacks to their latest version. For detailed steps, see our guide, [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).


### 1 August

- Tax collection for Cambodia has begun. [Learn more about Cambodia taxes](https://docs.digitalocean.com/platform/billing/taxes/khm/).


## July 2022

### 26 July

- You can now set up automatic recurring payments with PayPal. You can still log in to make one time payments with PayPal. [Learn more about how to pay your bill](https://docs.digitalocean.com/platform/billing/pay-bills/).


### 18 July

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from 0.99.1 to 0.101.0. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).

  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).
    - Add go1.17.9
    - Add go1.17.10
    - Add go1.18.1
    - Add go1.18.2
    - Add go1.18.3
    - go1.18 defaults to 1.18.3
    - go1.17 defaults to 1.17.10

### 14 July

- Spaces and the Spaces CDN now support HTTP/2 clients. HTTP/2-conformant clients now receive HTTP/2 responses, while others receive HTTP/1.1 responses. In certain cases, such as when an HTTP/2 request has a formatting error, it may downgrade to HTTP/1.1 for operational reasons, as permitted by the HTTP/2 specification.


### 12 July

- Newly-created volumes in NYC1, NYC3, SFO2, SFO3, FRA1, SGP1, LON1, and AMS3 are now on NVMe-based storage. Most existing volumes and volumes in BLR1 and TOR1 remain on SSD-based storage. We’re continuing to roll out NVMe across all volumes in all regions. In the interim, you can migrate volumes using `rsync` or similar tools to copy data.

- The DigitalOcean API now supports listing Droplets by name by using the `name` query parameter, as in `GET /v2/droplets?name="your_droplet_name"`. Learn more in the [API documentation](https://docs.digitalocean.com/reference/api/digitalocean/).


### 7 July

- Fedora 34 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 July

- Taxes for New Mexico in the United States of America have decreased to 5%. [Learn more about taxes in the United States of America](https://docs.digitalocean.com/platform/billing/taxes/usa/).

- Tax collection for Nigeria has begun. [Learn more about Nigeria taxes.](https://docs.digitalocean.com/platform/billing/taxes/nga/).

- The following pricing changes are now in effect:


  - A new $4 Droplet with 512MB of memory, 10GB of storage, 1 vCPU, and 500GB of outbound data transfer is now available in NYC1, FRA1, SFO3, SGP1, and AMS3. The slug is `s-1vcpu-512mb-10gb`.

  - We have simplified pricing for DigitalOcean Kubernetes and some managed databases for better accuracy and predictibility.

  - The prices of Droplets, Snapshots, Load Balancers, Reserved IPs, and Custom Images have increased.


There is no change to pricing for Spaces, backups, volumes, DigitalOcean Container Registry, or App Platform. There are also no changes to inbound data transfer or bandwidth pricing.

This is our first major price change in 10 years, and we believe the new model better fits our understanding of our customers and the expanded breadth of our offerings. For a more detailed breakdown of the changes, see [our blog post on our new pricing](https://www.digitalocean.com/blog/new-4-dollar-droplet-updated-pricing).

- DOKS clusters now accrue free bandwidth based on the worker pool’s largest sizes within 28 days of usage. [Learn more about DOKS billing](https://docs.digitalocean.com/products/kubernetes/details/pricing/).

Previously, you may have received slightly more free bandwidth on 30 and 31-day months. Individual worker nodes were billed per hour, up to a maximum of 744 hours per month (31 days \* 24 hours). As a result, they could accrue extra bandwidth allowance beyond the advertised monthly allowance for the corresponding Droplet plan.


## June 2022

### 30 June

- Released [v1.78.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.78.0), the official DigitalOcean CLI. This release renames the `sandbox` commands to `serverless`. Aliases are provided for backwards compatibility. Additionally, the output of the `account get` command now includes the name of the active team.


### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 23 June

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane) is now [Generally Available](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) in all regions where DigitalOcean Kubernetes is supported.


### 22 June

- SMTP (port 25) is now blocked for all new accounts. [Learn more about SMTP blocking](https://docs.digitalocean.com/support/why-is-smtp-blocked/).


### 16 June

- We have renamed the Floating IP product to _[Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)_. The Reserved IP service retains the same functionality as the prior service.

We have added new [API endpoints](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Reserved-IPs) and fields (`reserved_ips`) to reflect the name change, but the service’s original [Floating IP endpoints](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs) and fields (`floating_ips`) will remain available until the fall of 2023. Please update any automation, scripts, or services that use these endpoints to reflect these changes.

If you are using the Projects API to query Reserved IP resources, the endpoint still returns reserved IP addresses in the `floating_ips` field.

- Released [v1.77.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.77.0), the official DigitalOcean CLI. This release deprecates the `floating-ip` commands in favor of the new `reserved-ip` ones.


### 15 June

- [UDP support](https://docs.digitalocean.com/products/networking/load-balancers/#protocol-support) is now available for all DigitalOcean Load Balancers. This includes UDP support for [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/).

To use UDP for DOKS load balancers, clusters must use Kubernetes version `1.21.11-do.1`, `1.22.8-do.1`, or higher.


### 8 June

- You can now cancel a Space’s scheduled deletion in the [control panel](https://cloud.digitalocean.com/spaces). For more details, see [How to Destroy Spaces](https://docs.digitalocean.com/products/spaces/how-to/destroy/).


### 6 June

- When creating a Droplet via the API, we now release the Droplet’s IP address when it is in the `active` state, instead of the `new` state.


### 2 June

- When creating an app, you can add the app to a [project](https://docs.digitalocean.com/products/projects/). If you do not specify a project, it gets assigned to the default project. You can also move an app between projects.

- [MongoDB 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0/) is now available in the control panel and via the API. To upgrade your MongoDB cluster to version 5.0, see our guide on [upgrading your database cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)

- Starter tier apps now support [rolling back to a previous deployment](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/#roll-back-to-a-previous-deployment).


### 1 June

- We have deprecated the FreeBSD image on our platform. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is now only available via the API. We will remove the Fedora 34 image from our platform in 30 days.

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from 0.94.2 to 0.99.1. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/#usage).

  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have updated the default versions of the following platform tooling:


    - Updated `pip` from 21.3.1 to 22.0.4 for Python 3.7+
    - Updated `setuptools` from 57.5.0 to 59.6.0 for Python 3.6 and 60.10.0 for Python 3.7+
    - Updated `wheel` from 0.37.0 to 0.37.1 for Python 2.7 and Python 3.5+

Python 3.9.13 is now available. The default version remains set to 3.10.4. You can configure the Python version used at runtime by specifying a `runtime.txt` file at the root of your source code. For more information and configuration options, see [the Python Dev Guide](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/).

## May 2022

### 23 May

- [DigitalOcean Functions](https://docs.digitalocean.com/products/functions/) and [functions components in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-functions/) are now in general availability.

Functions are blocks of code that run on demand in response to requests. DigitalOcean Functions let developers execute their code on DigitalOcean without managing compute resources like Droplets or Kubernetes clusters.

- Released [v1.76.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.76.0), the official DigitalOcean CLI. This release adds support for our new serverless Functions product and updates [godo](https://github.com/digitalocean/godo/releases) to support new App Platform features.

- A beta of build performance improvements has been added. This functionality leverages [kata-containers technology](https://katacontainers.io/) for improved speed, efficiency, and compatibility.


### 13 May

- Spaces no longer supports downgrading TLS connections to TLS 1.1 or using cipher suites with SHA1 or DHE. Spaces currently returns soft S3 error messages and will gradually transition to hard TLS errors over a 4-6 week period.


### 10 May

- Released [v1.75.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.75.0), the official DigitalOcean CLI. This release contains fixes and improvements for a beta product. If you are not a member of the beta group, the new features will not be available to you at this time.


### 3 May

- Released [v1.74.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.74.0), the official DigitalOcean CLI. This release introduces new functionality for a beta product. If you are not a member of the beta group, the new features will not be available to you at this time.


## April 2022

### 25 April

- Marketplace Add-Ons are now generally available. Add-Ons are software as a service (SaaS) offerings from third-party vendors. Read more in the [Marketplace Add-Ons blog post](https://www.digitalocean.com/blog/announcing-add-ons), browse the [list of available Add-Ons](https://marketplace.digitalocean.com/category/add-ons), or learn more about [becoming a Marketplace vendor](https://marketplace.digitalocean.com/vendors).

- The [Ubuntu 22.04 LTS](https://discourse.ubuntu.com/t/jammy-jellyfish-release-notes/24668) (`ubuntu-22-04-x64`) base image is now available in the control panel and via the API.


### 15 April

- We have started rolling out [UDP support](https://docs.digitalocean.com/products/networking/load-balancers/#protocol-support) for DigitalOcean Load Balancers. This includes UDP support for [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/).


### 13 April

- [MongoDB clusters](https://docs.digitalocean.com/products/databases/mongodb/) now support two [Dedicated Droplet](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated) types: General Purpose and Memory-Optimized. If these options are [available in your region](https://docs.digitalocean.com/platform/regional-availability/#mongodb-machine-type-availability), you can select them when [creating a new cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/) or [resizing an existing one](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/).

- We have updated the default version of Python in the [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/) has been updated from 3.9.9 to 3.10.4. You can configure the Python version used at runtime by specifying a `runtime.txt` file at the root of your source code. For more information and configuration options, see [the Python Dev Guide](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/).


### 7 April

- You can now add new resources and databases when you [create a new App Platform app](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/), instead of adding only to existing apps. The new app creation workflow can now detect multiple app resources.


### 1 April

- Tax collection has begun for several cities in the United States: Boulder, Colorado Springs, Englewood, and Fort Collins in Colorado, and Chicago in Illinois. [Learn more about United States of America taxes.](https://docs.digitalocean.com/platform/billing/taxes/usa/)

- We have updated the default version of Hugo in the [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) has been updated from 0.82.0 to 0.94.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/#usage).


## March 2022

### 31 March

- Released [v1.73.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.73.0), the official DigitalOcean CLI. This release updates [godo](https://github.com/digitalocean/godo/releases) to support new App Platform features.


### 29 March

- [v2.19.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.19.0) of the DigitalOcean Terraform Provider is now available. This release adds custom region support of the `digitalocean_container_registry` resource.

- Basic Droplets can now have Regular AMD CPUs. Additionally, you can now change between Premium AMD and Premium Intel CPUs when resizing Droplets. Learn more about [resizing Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/) and [how to choose a Droplet plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).

- DigitalOcean API access tokens now begin with an identifiable prefix in order to
distinguish them from other similar tokens. Tokens now use the following prefixes:


  - `dop_v1_` for personal access tokens generated in the control panel
  - `doo_v1_` for tokens generated by application using [the OAuth flow](https://docs.digitalocean.com/reference/api/oauth/)
  - `dor_v1_` for OAuth refresh tokens

### 28 March

- Spaces no longer supports downgrading TLS connections to TLS 1.0, and will transition from returning soft S3 error messages to hard TLS errors over the next month.

- Released [v1.72.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.72.0), the official DigitalOcean CLI. This release introduces new `doctl compute tag apply` and `doctl compute tag remove` commands that support using tags with multiple resources in a single operation.


### 22 March

- The [Centos Stream 9](https://centos.org/stream9) (`centos-stream-9-x64`) base image is now available in the control panel and via the API.


### 17 March

- The [DigitalOcean OAuth API](https://docs.digitalocean.com/reference/api/oauth/) has been updated to include additional information when users authorize an application under a team context. The JSON bodies for both the access grant and refresh grant responses will now include `team_uuid` and `team_name` attributes inside of the `info` object.


### 15 March

- You can now [search for and install Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/kubernetes/how-to/manage-1click-apps/) from the new **Marketplace** tab of DOKS clusters.

- Released [v1.71.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.71.0), the official DigitalOcean CLI. This release adds regions support to Container Registry commands including the introduction of the new `doctl registry options available-regions` command.


### 11 March

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/) (early availability) is now available in all regions where DOKS is supported.


### 9 March

- When [creating a Container Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#create-a-registry), you can now choose one of the following [datacenter regions](https://docs.digitalocean.com/platform/regional-availability/) to host it in: NYC3, SFO3, AMS3, SGP1, and FRA1. However, you cannot change a registry’s datacenter after creation.


### 8 March

- [v2.18.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.18.0) of the DigitalOcean Terraform Provider is now available. This release adds a new `digitalocean_spaces_bucket_policy` resource as well as support for configuring log destinations and alert policies in the `digitalocean_app` resource.


### 4 March

- You can now configure your MySQL, PostgreSQL, and Redis managed databases by making a `PATCH` request to `/v2/databases/{database_cluster_uuid}/config`. For example:



```json
{
    "config": {
      "sql_mode": "ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,STRICT_ALL_TABLES",
      "sql_require_primary_key": true
    }
}
```



For more details, see the [full reference documentation for the managed databases API](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_patch_config).


## February 2022

### 15 February

- [PostgreSQL 14 is now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/). You can [upgrade earlier versions of PostgreSQL clusters to newer versions](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) without any downtime using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/databases).


### 9 February

- You can now create personal access tokens with an expiry interval. After the interval passes, the token can no longer authenticate you to the API and it disappears from your account. To create tokens with expiry intervals, see [How to Create a Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/).


### 1 February

- Tax collection for Ukraine has begun. [Learn more about Ukraine taxes](https://docs.digitalocean.com/platform/billing/taxes/ukr/).

- The database online migration feature for the [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/), and [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) database engines no longer supports migrating databases from clusters inside of DigitalOcean to other clusters inside of DigitalOcean.


## January 2022

### 28 January

- To continue improving collaboration on DigitalOcean, we have begun incrementally converting existing customers’ personal accounts to [team accounts](https://docs.digitalocean.com/platform/teams/).


### 27 January

- Released [v1.70.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.70.0), the official DigitalOcean CLI. This release adds support for App Platform features, such as `AppDomainSpec.Certificate`, `MinimumTLSVersion`, `appServiceSpecHealthCheck.Port` and more.

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.104.3 to v0.109.0. You can override the default version by setting a HUGO\_VERSION environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.19.2, and go1.19.3
    - Add go1.18.4, go1.18.5, go1.18.7, and go1.18.8
    - Add go1.17.11, go1.17.12, and go1.17.13
    - go1.19 defaults to go1.19.3
    - go1.18 defaults to go1.18.8
    - go1.17 defaults to go1.17.13
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): Updates to the Python v1 buildpack are below. If you have an existing Python app that is on v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v1:
      - Python 3.7.16, 3.8.16, 3.9.16, 3.10.9, and 3.11.1 are now available
      - The default Python version for new apps is now 3.10.9 (previously 3.10.8)
      - Add support for Python 3.11
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are below. If you have an existing PHP app that is on v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v1:
      - Add PHP/7.4.33
      - Add PHP/8.0.25
      - Add PHP/8.1.12

### 26 January

- All new signups on DigitalOcean can now [invite teammates](https://docs.digitalocean.com/platform/teams/) immediately upon creating their account.


### 25 January

- Online migration is now available for the [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/), and [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) database engines. Online migration allows you to migrate databases from external servers or cloud providers to databases in your DigitalOcean account.


### 21 January

- Tax collection for Puerto Rico has begun. [Learn more about Puerto Rico taxes](https://docs.digitalocean.com/platform/billing/taxes/usa/).


### 19 January

- Managed Let’s Encrypt certificates will begin using Elliptic Curve Digital Signature Algorithm (ECDSA) instead of RSA. ECDSA is equally secure and more computationally efficient than RSA. ECDSA certificates follow the shorter root chain and aren’t rooted using the [DST Root CA X3 cross-sign which expired on 30 September 2021](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/#:~:text=DST%20Root%20CA%20X3%20will,that%20use%20Let's%20Encrypt%20certificates.).

As we roll out this change, new Let’s Encrypt certificates provisioned for DigitalOcean [Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) will increasingly use ECDSA and existing certificiates secured with RSA will be secured with ECDSA upon auto-renewal. This change doesn’t require any action from DigitalOcean customers.


### 18 January

- FreeBSD 11.4 (zfs and ufs), Fedora 33, CentOS 8, and Ubuntu 21.04 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


### 14 January

- [v2.17.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.17.0) of the DigitalOcean Terraform Provider is now available. This release adds support for:


  - Fetching load balancer resources by ID in a datasource.
  - Updating the name and description for default VPC networks.

It also includes bug fixes.

- Released [v1.69.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.69.0), the official DigitalOcean CLI. This release contains a number of bug fixes and adds support to the `kubernetes cluster kubeconfig save` sub-command for setting an alias for a cluster’s context name.


### 10 January

- You can now [resize load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) once per minute, instead of once per hour. The cost is prorated based on how long the load balancer operates at each size, with a minimum charge of $0.01.


### 6 January

- All DigitalOcean databases now support [App Platform apps as trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/), including [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/).


### 1 January

- Tax collection for several states and cities in the United States of America has begun. Charges will appear on the February invoice. [Learn more about USA taxes.](https://docs.digitalocean.com/platform/billing/taxes/usa/)


## December 2021

### 8 December

- The [Rocky Linux 8.5 x64](https://docs.rockylinux.org/release_notes/8.5/) (`rockylinux-8-x64`) base image is now available in the control panel and via the API.

- We now support adding Google Pay as a stored payment method for Chromium-based browsers (Chrome, Brave, Microsoft Edge).


### 7 December

- Released [v1.68.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.68.0), the official DigitalOcean CLI. This release contains improvements to the `registry` subcommands including: revoking credentials on `logout` and a new `list-manifests` subcommand.


### 3 December

- App Platform now supports [rolling back an app to a previous deployment](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/#roll-back-to-a-previous-deployment) for Basic and Professional tier apps.


## November 2021

### 30 November

- To improve collaboration on our platform, a percentage of new signups on DigitalOcean will begin with a [team account](https://docs.digitalocean.com/platform/teams/).

- You can now optimize your storage space in Container Registry with [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/) and [more management options for images and tags](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#manage-images).


### 15 November

- The [Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) now supports running the SSH daemon, `sshd`, on a custom port. Previously, it required `sshd` to listen on port 22.


### 10 November

- Released [v1.67.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.67.0), the official DigitalOcean CLI. This release updates [godo](https://github.com/digitalocean/godo/releases) to support new App Platform features.


### 9 November

- You can now [scale load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) with more granularity by adding or removing nodes. The number of nodes a load balancer contains determines how many simultaneous connections and requests per second it can manage.

Each additional node increases the load balancer’s maximum:


  - Requests per second, up to 10,000
  - Simultaneous connections, up to 10,000
  - New SSL connections per second by 250 (or 50 for certificates using 4096-bit RSA keys)

You can add up to 200 nodes to a load balancer if your account limits allow it. To request a limit increase, [contact support](https://cloudsupport.digitalocean.com/).

- The [Fedora 35](https://docs.fedoraproject.org/en-US/fedora/f35/release-notes/) base image is now available in the control panel and via the API.

- General Purpose Droplets are now [available in BLR1](https://docs.digitalocean.com/platform/regional-availability/).


### 8 November

- [v2.16.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.16.0) of the DigitalOcean Terraform Provider is now available. This release adds support for:


  - Scaling load balancers using the `size_unit` field.
  - `source_kubernetes_ids` and `destination_kubernetes_ids` attributes for Kubernetes firewall rules.

It also includes bug fixes.

### 1 November

- [v2.15.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.15.0) of the DigitalOcean Terraform Provider is now available. This release adds support for:


  - Disabling automatic DNS record creation when using Let’s Encrypting certificates.
  - Revoking OAuth tokens when credentials are destroyed.

It also includes bug fixes.

- Released [v1.66.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.66.0), the official DigitalOcean CLI. This release includes a number of new features including support for PowerShell completion and a new `--upsert` flag for the `doctl apps create` command that updates the app in the given app spec if it already exists.


## October 2021

### 28 October

- App Platform now supports [forwarding application runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) to [Logtail](https://logtail.com/).


### 27 October

- We have deprecated TLS DHE ciphers for all load balancers.

- We now support Google Pay for [one-time payments](https://cloud.digitalocean.com/pay-now).


### 25 October

- Ubuntu 20.10 has reached its end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- The [Ubuntu 21.10](https://discourse.ubuntu.com/t/impish-indri-release-notes/21951) base image is now available in the control panel and via the API.


### 12 October

- You can now opt out of DigitalOcean automatically creating DNS records for Let’s Encrypt certificates during [SSL certificate creation](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/), [load balancer creation](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/), and [SSL forwarding rule management](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/).

- Released [v1.65.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.65.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `--ha` flag was added to the `kubernetes cluster create` sub-command to optionally create a cluster configured with a highly-available control plane. This feature is in early availability
  - The `kubernetes cluster` sub-commands now include a “Support Features” field when displaying version options
  - The `--disable-lets-encrypt-dns-records` flag was added to the `compute load-balancer create` sub-command to optionally disable automatic DNS record creation for Let’s Encrypt certificates that are added to the load balancer

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/) is now in early availability in the following regions: ams3, nyc1, sfo3, and sgp1.


### 7 October

- [v2.14.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.14.0) of the DigitalOcean Terraform Provider is now available. This release adds support for the high availability (`ha`) attribute when creating Kubernetes clusters.


### 5 October

- [v2.13.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.13.0) of the DigitalOcean Terraform Provider is now available. This release adds support for retrieving the CA certificate for database clusters. It also includes bug fixes.


### 1 October

- Tax collection for Georgia has begun. Charges will appear on the November invoice. [Learn more about tax for Georgia.](https://docs.digitalocean.com/platform/billing/taxes/geo/)

- [Tax collection for Japan has begun](https://docs.digitalocean.com/platform/billing/taxes/jpn/). Charges will appear on the November invoice.


## September 2021

### 30 September

- [App Platform](https://docs.digitalocean.com/products/app-platform/) now supports [forwarding application runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) to external log management providers. Currently, we only support [Papertrail](https://www.papertrail.com/) and [Datadog](https://www.datadoghq.com/).


### 28 September

- Team members with the biller role no longer have view-only access to a team’s shared resources. Billers have full access to billing information only and no access to shared resources or team settings.


### 27 September

- The [Debian 11.0](https://www.debian.org/News/2021/20210814) base image is now available in the control panel and via the API.


### 24 September

- [v2.12.1](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.12.0) of the DigitalOcean Terraform Provider is now available. This release adds CORS support for apps on App Platform and the ability to create monitoring alerts.


### 22 September

- App Platform is now available in TOR1 and LON1.


### 21 September

- The [load balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/#add-an-ssl-certificate) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/#add-a-custom-subdomain) services now support [wildcard Let’s Encrypt certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/).


### 20 September

- The [Go](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/) buildpack for App Platform received some updates:

We added support for GO v1.17.1 and v1.16.8

See our [sample Go app](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/#usage) for more information on how to implement Go applications on App Platform.


### 1 September

- We have begun charging a 7% Value Added Tax (VAT) to customers in Thailand. This VAT rate is temporarily reduced until 30 September 2021. Unless the TRD extends the temporary reduction, the rate will increase back to the standard VAT rate of 10% on 1 October 2021.


## August 2021

### 31 August

- You can now assign [floating IP addresses](https://docs.digitalocean.com/products/networking/reserved-ips/) to Droplets that use [custom images](https://docs.digitalocean.com/products/custom-images/).


### 20 August

- Released [v1.64.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.64.0), the official DigitalOcean CLI. This release includes support for managing App Platform alerts.


### 18 August

- You can [monitor and set up alerts](https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/) for events for your app and its components using [App Platform](https://docs.digitalocean.com/products/app-platform/).


### 9 August

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

- [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/) is now available as a managed database engine in the AMS3, BLR1, FRA1, LON1, NYC1, NYC3, SFO3, SGP1, and TOR1 regions.

- The [Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) is now in General Availability.


### 5 August

- [App Platform](https://docs.digitalocean.com/products/app-platform/) now supports [apps as trusted sources for databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/). We support [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/), [MySQL](https://docs.digitalocean.com/products/databases/mysql/), and [Redis](https://docs.digitalocean.com/products/databases/redis/) clusters.


### 3 August

- You can now add Kubernetes clusters as [sources or destinations in Cloud Firewall rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/#custom-rules).


### 2 August

- [CentOS Linux is reaching end of life](https://blog.centos.org/2020/12/future-is-centos-stream/); CentOS Linux 8 reaches EOL at the end of 2021 and there will be no CentOS Linux 9. As potential replacements, we have released two new Linux distributions for Droplets: [CentOS Stream 8](https://www.centos.org/centos-stream/) (`centos-stream-8-x64`) and [Rocky Linux 8.4 x64](https://rockylinux.org/) (`rockylinux-8-x64`).

- When [updating an SSH key’s name using the API](https://docs.digitalocean.com/reference/api/digitalocean/), if the request body does not contain a new name, the SSH key’s name will now retain its previous value. Previously, if the request body did not contain a new name, the SSH key’s name would update to a default value of either the comment field or the first 23 characters from the public key.


## July 2021

### 9 July

- Released [v1.62.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.62.0), the official DigitalOcean CLI. This release fixes a handful of bugs and introduces new flags on existing commands:


  - The `apps logs` command now supports tailing live logs with the `--tail` flag. This lets application owners select the most recent logs from their applications
  - The `--wait` flag was added to `apps create` and `apps update` to block these commands until an application is fully created or updated

## June 2021

### 29 June

- [v2.10.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.10.0) of the DigitalOcean Terraform Provider is now available. This release adds support for Kubernetes maintenance policies.

- [v2.10.1](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.10.1) of the DigitalOcean Terraform Provider is now available. This release adds bug fixes and other improvements.


### 28 June

- The [MongoDB database engine](https://docs.digitalocean.com/products/databases/mongodb/) is now in general availability.


### 25 June

- [App Platform](https://docs.digitalocean.com/products/app-platform/) can now [deploy apps from a monorepo](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/).


### 10 June

- The new Droplet Console is now in private beta. The Droplet Console gives you one-click SSH access to your Droplet from within a web browser, so you don’t need a password or SSH keys to connect.


### 2 June

- A new [Python + NodeJS](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/) group buildpack was added. Python apps can now use NodeJS to render assets during build or as a dependency at runtime.

- We’ve separated your user information from personal account settings. User information is now accessible from within your personal account or your teams on the [**My Account** page](https://cloud.digitalocean.com/account/profile), which is accessible in the profile icon menu in the top right of the control panel, under **Manage Account**.


## May 2021

### 27 May

- [v2.7.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.8.0) of the DigitalOcean Terraform Provider is now available. This release adds support for distributing images to multiple regions.

- PostgreSQL 13 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, 12, and 13.


### 26 May

- Fedora 32 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- Ubuntu 16.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 17 May

- Storage-Optimized Droplets are now available in SGP1.


### 6 May

- Released [v1.60.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.60.0), the official DigitalOcean CLI. This release introduces an `auth remove` sub-command to simplify removing an auth context when managing multiple accounts. The `databases user reset` sub-command now supports resetting the user password for all database engine types.


### 5 May

- We have updated the [Floating IP API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs) responses to better align with our newer API models. The `droplet` and `region` fields now use the same response models used in the `/v2/droplets` and `/v2/regions` endpoints. Specifically:


  - The `private_networking` feature is now displayed under the `features` field under `droplet` instead of the `features` field under `region`.
  - The `vpc_uuid` field now populates with the correct values.
  - The Droplet’s `type` displays `base` when the Droplet uses a base image (i.e. Ubuntu, CentOS).
  - The Droplet’s `networks` field now includes private and floating IP addresses, if applicable.

## April 2021

### 27 April

- Premium AMD Droplets are now available in NYC1, SGP1, AMS3, BLR1, LON1, and TOR1. You can view the availability of all of our products by datacenter on the [regional availability page](https://docs.digitalocean.com/platform/regional-availability/).

- The [Fedora 34](https://docs.fedoraproject.org/en-US/fedora/f34/release-notes/) base image is now available in the control panel and via the API.


### 26 April

- The [Ubuntu 21.04](https://discourse.ubuntu.com/t/hirsute-hippo-release-notes/19221) base image is now available in the control panel and via the API.


### 13 April

- Released [v1.59.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.59.0), the official DigitalOcean CLI. This release includes a new `apps propose` sub-command and improvements to the `apps spec validate` sub-command.


### 9 April

- With the completion of datacenter work, we have re-enabled resizing between regular and premium Intel Droplets in NYC3 and SGP1.


### 1 April

- To comply with new provincial requirements in Canada, we are now collecting Provincial Sales Tax (PST) at a rate of 7% for customers in British Columbia and 6% in Saskatchewan. For more details, see [Canada tax information](https://docs.digitalocean.com/platform/billing/taxes/can/).

- [Tax collection for Kenya has begun](https://docs.digitalocean.com/platform/billing/taxes/ken/). Charges will appear on the May invoice.


## March 2021

### 30 March

- You can now deploy managed databases on Droplets with dedicated CPUs for the [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/#machine-type), [MySQL](https://docs.digitalocean.com/products/databases/mysql/#machine-type), and [Redis](https://docs.digitalocean.com/products/databases/redis/#machine-type) engines.


### 29 March

- [v2.7.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.7.0) of the DigitalOcean Terraform Provider is now available. This release adds support for Kubernetes node pool taints and resizing load balancers.

- Released [v1.58.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.58.0), the official DigitalOcean CLI. This release adds a `--wait` flag to the `apps create-deployment` command which blocks until the deployment is complete. By default, the `registry kubernetes-manifest` now generates a manifest that applies the secret to all the namespaces in the Kubernetes cluster using the DOSecret operator.


### 18 March

- You can now do the following on Kubernetes clusters:


  - Use [surge upgrade](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#surge-upgrades) when upgrading an existing cluster. Surge upgrade is enabled by default when you create a new cluster.

  - Move a Kubernetes cluster and its associated resources, such as Droplets, load balancers and volumes, to a [project](https://docs.digitalocean.com/products/projects/) using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters) or [`doctl`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/assign/) command-line tool. You can also assign a project when you create a new cluster. If you do not specify a project, it gets assigned to the default project.

  - Delete resources, such as load balancers and volumes, associated with a Kubernetes cluster using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters), [API](https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster) or the [`doctl`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete/) command-line tool.


### 16 March

- You can now [resize load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) to better match their performance to their workload.


### 10 March

- [v2.6.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.6.0) of the DigitalOcean Terraform Provider is now available. This release enables surge upgrades for Kubernetes clusters by default and adds a `digitalocean_firewall` data source.


### 9 March

- Storage Optimized Droplets are now available in TOR1 and BLR1.


### 3 March

- With the completion of the SGP1 capacity augmentation, we have re-enabled the creation of new Spaces in SGP1.

- Online migration for PostgreSQL and Redis databases has been released in Beta. Select users can now migrate [Redis](https://docs.digitalocean.com/products/databases/redis/how-to/migrate/) and [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/) databases that reside inside and outside of DigitalOcean to existing database clusters in their DigitalOcean account. Redis migrations from AWS ElasticCache are not currently supported.


### 1 March

- Fixed a bug with DigitalOcean Load Balancers that prevented outbound data transfer from Droplets from being added to bandwidth usage totals. Any inconsistencies will be updated on the April invoice.


## February 2021

### 25 February

- The [PHP](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/) buildpack received some updates:


  - Support for PHP 8.x was added in addition to PHP 7.x. By default, App Platform will use PHP 7.x unless the app specifies a version requirement via Composer.
  - Support for Composer 2.x was added in addition to Composer 1.x. App Platform will use the same version of Composer that generated the app’s `composer.lock` file.

For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/#usage).

### 22 February

- Our [Basic Droplet plans](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) now include Premium Intel and AMD Droplets, which have faster Intel and AMD CPUs and NVMe SSDs. Premium Intel plans are available in all regions, and Premium AMD plans are available in NYC3, SFO3, and FRA1.

All users can create Premium Droplets, resize from Regular Intel Droplets to Premium Intel Droplets, and create Premium Droplets as worker nodes in Kubernetes clusters. Resizing between Regular Intel Droplets to Premium Intel Droplets is disabled in NYC3 and SGP1 until the end of March 2021.

- Released [v1.57.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.57.0), the official DigitalOcean CLI. This release enables surge upgrades by default for newly created Kubernetes clusters and important bugfixes for App Platform logs and Kubernetes cascading deletes.


### 11 February

- FreeBSD 12.1 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- App Platform is now available in SGP1 and BLR1.


### 10 February

- Released [v1.56.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.56.0), the official DigitalOcean CLI. This release includes support for database firewalls management, Kubernetes cascading deletes, and installing Kubernetes 1-Click Apps to existing clusters.


### 3 February

- [v2.5.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.5.0) of the DigitalOcean Terraform Provider is now available. This release adds a number of improvements to the `digitalocean_app` resource including: support for images as a component source, support for job components, support for `internal_ports` for services, and support for wildcard domains.


### 1 February

- Spaces are now available in SFO3.


## January 2021

### 31 January

- Due to capacity limits in the region, we have disabled the creation of new resources in SFO2 for new customers. Existing customers with resources in SFO2 are unaffected and can still create and destroy resources in SFO2.


### 28 January

- We’ve improved the account deactivation experience to more clearly guide users through the actions necessary to deactivate an account.


### 21 January

- Released [v1.55.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.55.0), the official DigitalOcean CLI. This release adds Docker Hub and GitLab support to App Platform’s create and update commands.

- App Platform now supports launching components from public DockerHub image sources.


### 19 January

- [v2.4.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.4.0) of the DigitalOcean Terraform Provider is now available. This release includes support for deployments from GitLab and app-wide environment variables for the `digitalocean_app` resource, bug fixes, and other improvements.


### 5 January

- You can now do the following on [App Platform](https://docs.digitalocean.com/products/app-platform/):


  - [Deploy apps from a registry that has been uploaded to a DigitalOcean Container Registry](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/).

  - Deploy apps from source code contained in a GitLab repository.

  - [Edit CORS policies](https://docs.digitalocean.com/products/app-platform/how-to/configure-cors-policies/) for your app.


### 1 January

- In response to the United Kingdom departing as a member state of the European Union, DigitalOcean has obtained a standalone UK VAT ID and continued charging and collecting VAT at a rate of 20% on its business-to-consumer sales in the UK. Business customers with a valid UK VAT ID are subject to the reverse charge mechanism.


## December 2020

### 7 December

- Load balancers now come in [small, medium, and large sizes](https://docs.digitalocean.com/products/networking/load-balancers/#plans-and-pricing). The larger the load balancer, the more simultaneous connections and requests per second it can manage. Existing load balancers are now considered “small” load balancers and are unaffected by this change.

- CentOS 6 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- Load balancers now come in [small, medium, and large sizes](https://docs.digitalocean.com/products/networking/load-balancers/#plans-and-pricing). The larger the load balancer, the more simultaneous connections and requests per second it can manage. Existing load balancers are now considered “small” load balancers and are unaffected by this change.

You can specify the size of a load balancer during its creation using the `size` field. The available size values are `lb-small`, `lb-medium`, or `lb-large`.

Example request body:


```
{
    "name": "example-lb-01",
    "region": "nyc3",
    "size": "lb-small",
    "forwarding_rules": [\
      {\
        "entry_protocol": "https",\
        "entry_port": 444,\
        "target_protocol": "https",\
        "target_port": 443,\
        "tls_passthrough": true\
      }\
    ],
    "health_check": {
      "protocol": "http",
      "port": 80,
      "path": "/",
      "check_interval_seconds": 10,
      "response_timeout_seconds": 5,
      "healthy_threshold": 5,
      "unhealthy_threshold": 3
    },
    "sticky_sessions": {
      "type": "none"
    }
    ]
}
```


Once you have created a load balancer, you can’t change its size.


### 4 December

- Released [v1.54.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.54.0), the official DigitalOcean CLI. This release user confirmation before container registry garbage collection is started.


### 3 December

- [v2.3.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.3.0) of the DigitalOcean Terraform Provider is now available. This release includes support for configuring the `size` of a `digitalocean_loadbalancer` resource. OpenBSD binaries are now built and available for download.


### 1 December

- Fixed a bug that intermittently caused blank control panel pages in certain GeoIP regions.

- We recently replaced Standard Droplet plans with Basic Droplet plans. Today, we have deprecated Standard Droplet plans from the API for new users. Existing customers will retain access to these plans.
Click here to view the complete list of deprecated plans.


| Class | Slug | vCPUs | RAM | Disk | Transfer | Monthly Price |
| --- | --- | --- | --- | --- | --- | --- |
| Standard | `512mb` | 1 | 512 MB | 20 GB | 1 TB | $5 |
| Standard | `1gb` | 1 | 1 GB | 30 GB | 2 TB | $10 |
| Standard | `2gb` | 2 | 2 GB | 40 GB | 3 TB | $20 |
| Standard | `4gb` | 2 | 3 GB | 60 GB | 4 TB | $40 |
| Standard | `8gb` | 4 | 4 GB | 80 GB | 5 TB | $80 |
| Standard | `16gb` | 8 | 16 GB | 160 GB | 6 TB | $160 |
| Standard | `32gb` | 12 | 32 GB | 320 GB | 7 TB | $320 |
| Standard | `48gb` | 16 | 48 GB | 480 GB | 8 TB | $480 |
| Standard | `64gb` | 20 | 64 GB | 640 GB | 9 TB | $640 |
| Standard | `96gb` | 24 | 96 GB | 960 GB | 10 TB | $960 |
| Standard | `s-1vcpu-3gb` | 1 | 3 GB | 60 GB | 3 TB | $15 |
| Standard | `s-3vcpu-1gb` | 3 | 1 GB | 60 GB | 3 TB | $15 |
| Standard | `s-6vcpu-16gb` | 6 | 16 GB | 320 GB | 6 TB | $80 |
| Standard | `s-8vcpu-32gb` | 8 | 32 GB | 640 GB | 7 TB | $160 |
| Standard | `s-12vcpu-48gb` | 12 | 48 GB | 960 GB | 8 TB | $240 |
| Standard | `s-16vcpu-64gb` | 16 | 16 GB | 1280 GB | 9 TB | $320 |
| Standard | `s-20vcpu-96gb` | 20 | 20 GB | 1920 GB | 10 TB | $480 |
| Standard | `s-24vcpu-128gb` | 24 | 24 GB | 2560 GB | 11 TB | $640 |
| Standard | `s-32vcpu-192gb` | 32 | 32 GB | 3840 GB | 12 TB | $960 |
| High Memory | `m-16gb` | 2 | 16 GB | 60 GB | 5 TB | $75 |
| High Memory | `m-32gb` | 4 | 32 GB | 90 GB | 5 TB | $150 |
| High Memory | `m-64gb` | 8 | 64 GB | 200 GB | 5 TB | $300 |
| High Memory | `m-128gb` | 16 | 128 GB | 340 GB | 5 TB | $600 |
| High Memory | `m-224gb` | 32 | 224 GB | 500 GB | 5 TB | $1100 |


You can view Droplet plans, the resources they provide, and the size slug used to identify them programmatically by querying the [`/v2/sizes` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/sizes_list).


## November 2020

### 24 November

- Fedora 31 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- Released [v1.53.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.53.0), the official DigitalOcean CLI. This release adds support for container registry garbage collection of untagged manifests.


### 18 November

- [Redis 6](https://redislabs.com/blog/diving-into-redis-6/) managed databases are [now available](https://docs.digitalocean.com/products/databases/redis/how-to/create/). Redis 6 includes enhanced security features and client-side caching. You can no longer create Redis 5 clusters, but Redis 6 clusters are fully backwards compatible.

- Droplet-related error messages now display on the Droplet’s **History** page in the control panel.


### 12 November

- [v2.2.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.2.0) of the DigitalOcean Terraform Provider is now available. This release adds a new `digitalocean_ssh_keys` data source and a `digitalocean_custom_image` resource.


### 10 November

- We have reduced the prices of Memory-Optimized Droplets by about 11%. Existing Memory-Optimized Droplets will be charged at the lowered price from the month of November on, reflected in the December invoice.

- We have released Storage-Optimized Droplet plans. Storage-Optimized Droplets have NVMe SSD storage and are best for extra-large databases, caches, and analytics workloads.

All users can now create Storage-Optimized Droplets in AMS3, FRA1, LON1, NYC1, and SFO3 using the control panel, API, or CLI. The slugs for the new plans are `so-2vcpu-16gb`, `so-4vcpu-32gb`, `so-16vcpu-64gb`, `so-24vcpu-128gb`, and `so-32vcpu-256gb`.

- Released [v1.52.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.52.0), the official DigitalOcean CLI. This release adds a `--force-rebuild` flag to `doctl apps create-deployment`.

- Improved build caching for all App Platform build environments. Dependencies and other data are now cached and reused between builds to improve performance. Dockerfile builds continue to make use of Docker layer caching.

The [Hugo](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) buildpack received some updates:


  - The default version has been upgraded to `0.78.0`.
  - Added support for running Hugo as a Service component. The default and recommended behavior is to deploy it as a Static Site.
  - Removed the implicit build command—a build command is now required. Existing apps have had their specs automatically updated.

### 6 November

- [v2.1.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.1.0) of the DigitalOcean Terraform Provider is now available. DigitalOcean Container Registry is now in general availability and requires a subscription plan. As a result, the `digitalocean_container_registry` resource now requires setting a `subscription_tier_slug` which is supported with this release.

- We have released a [“Deploy to DigitalOcean” button for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/). You can now embed a button into your GitHub repo or website that allows users to deploy your app directly to DigitalOcean.

We have also released a [jobs feature for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/). The job feature allows you to run application code at a scheduled time.


### 4 November

- [FreeBSD 12.2](https://www.freebsd.org/releases/12.2R/announce.html) UFS and ZFS base images are now available in the control panel and via the API. We have replaced the image slug for the UFS FreeBSD image, `freebsd-12-x64`, with `freebsd-12-x64-ufs`. Our support for 12.1 continues for three months after the release date of 12.2, which is currently scheduled for 31 January 2021.


### 3 November

- Released [v1.51.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.51.0), the official DigitalOcean CLI. This release add support for managing DigitalOcean Container Registry subscriptions.


### 2 November

- DigitalOcean Container Registry is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Highlights include:


  - Three [subscription plans](https://docs.digitalocean.com/products/container-registry/#plans-and-pricing) that offer different allowances for repositories, storage, and bandwidth
  - 1-click method to [configure DigitalOcean Kubernetes Cluster to use the registry](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/#add-secret-control-panel)
  - [Garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/) using the command line or the API
  - Ability to see the current storage usage in the control panel

- [You can now integrate your DOCR registry with a Kubernetes cluster](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_add_registry). When a registry is integrated with a Kubernetes cluster, we create docker registry type secrets in all the namespaces in the cluster. These secrets can be used with the workloads or added to the default service account in the namespace.

Additionally, we’ve added DOCR integration support for our official clients, [godo](https://github.com/digitalocean/godo) and [doctl](https://docs.digitalocean.com/reference/doctl/). Only versions of doctl 1.49.0 and godo 1.48.0 and above support docr integration for clusters.


## October 2020

### 30 October

- Released [v1.50.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.50.0), the official DigitalOcean CLI. This release includes a number for new features and improvements. It includes new `doctl apps` sub-commands to retrieve information about App Platform pricing plan tiers, instance sizes, and regions. The `doctl registry` sub-command now supports managing garbage collection for container registries.


### 28 October

- Released [v1.49.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.49.0), the official DigitalOcean CLI. This release includes the ability to update the default VPC for a region, the ability to set an expiration time when downloading kubeconfig files, and more.


### 27 October

- On Kubernetes 1.19 and later we now provision [two fully-managed firewalls for each new Kubernetes cluster](https://docs.digitalocean.com/products/kubernetes/details/managed/#worker-node-firewalls). One firewall manages the connection between worker nodes and control plane, and the other manages connections between worker nodes and the public internet.

- The [Fedora 33](https://fedoramagazine.org/announcing-fedora-33/) base image is now available in the control panel and via the API.


### 26 October

- You can now [change the default VPC network for a region](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/). When you change the default VPC network for a region, the new default network will be automatically selected during applicable resource set ups unless otherwise specified.

- Added support to App Platform for configuring internal [service](https://www.digitalocean.com/products/app-platform/concepts/glossary/service/) ports, as well as internal-only services that are not internet-accessible.

- Added support to App Platform for configuring a catch-all document that can be used by static sites to rewrite all requests to pages that are not found, to the configured document. The `catchall_document` field is similar to `error_document` in that they both rewrite all requests to the specified document, and so they are mutually exclusive, only 1 can be set. Using `catchall_document` will result in 200 HTTP response codes for the rewritten requests, while `error_document` will result in 404 HTTP response codes.


### 22 October

- The [Ubuntu 20.10](https://discourse.ubuntu.com/t/groovy-gorilla-release-notes/15533) base image is now available in the control panel and via the API.


### 20 October

- [v2.0.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.0.0) of the DigitalOcean Terraform Provider is now available. This release uses v2.0.3 of the Terraform Plugin SDK and now only supports Terraform v0.12 and higher. It also includes a new `digitalocean_records` data source.


### 19 October

- You can now [update a VPC network to be the default VPC network](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/) for a region using the `PUT /v2/vpcs/$VPC_ID` and `PATCH /v2/vpcs/$VPC_ID` endpoints.

For example:



```json
{
    "name": "renamed-new-vpc",
    "description": "A new description",
    "default": "true"
}
```



When you change the default VPC network for a region, all applicable resources are placed into the default VPC network unless otherwise specified during their creation.


### 15 October

- Added support to App Platform services and static sites for configuring an ingress CORS policy.

- Added support to App Platform for configuring custom wildcard domains.


### 14 October

- Added an App Platform [environment variable binding](https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) with the CA certificate for managed databases in the users account.


### 13 October

- [v1.23.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v1.23.0) of the DigitalOcean Terraform Provider is now available. This release introduces a new `digitalocean_app` resource with support for DigitalOcean App Platform.


### 12 October

- Added an App Platform the [environment variable binding](https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) prefix `_self` that can be used to reference the current component without directly referencing it by component name.


### 9 October

- Launched the App Platform [jobs](https://www.digitalocean.com/products/app-platform/concepts/glossary/job/) component type, with support for running containerized operations before, after, and on failure of deploys.


### 6 October

- You can now [apply taints to Kubernetes node pools using the DigitalOcean API](https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster). When you configure taints for a node pool, the taint automatically applies to all current nodes and any subsequently created nodes in the pool. For more information, see [Kubernetes’ documentation on taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).

- Released [v1.48.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.48.0), the official DigitalOcean CLI. This release promotes `doctl apps` commands with support for DigitalOcean [App Platform](https://www.digitalocean.com/products/app-platform/) to General Availability.

- [App Platform](https://docs.digitalocean.com/products/app-platform/), our new platform as a service (PaaS) offering, is now in General Availability. Hook a GitHub repo to DigitalOcean and let App Platform automatically build and deploy your commits live to the cloud. [Read the quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/) or [try it now](https://cloud.digitalocean.com/apps/new).

- [You can now apply taints to Kubernetes node pools](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_create_cluster). When you configure taints for a node pool, the taint automatically applies to all current nodes in the pool and any node you add to the pool thereafter. For more information about taints and tolerations, see [Kubernetes’ documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).

Additionally, we’ve added node taint support for our official clients, [godo](https://github.com/digitalocean/godo) and [doctl](https://docs.digitalocean.com/reference/doctl/). Only versions of doctl 1.47.0 and godo 1.45.0 and above support persistent node pool taints.

You can define taints during a pool’s creation by submitting a `POST` request to the `/v2/kubernetes/clusters/<cluster-id>/node_pools` and the `/v2/kubernetes/clusters` endpoints, or you can update existing pools by submitting a `PUT` request to the `/v2/kubernetes/clusters/<cluster-id>/node_pools/<node-pool-id>` endpoint. For example, this request body defines two taints for a node pool.



```json
{
    "name": "frontend",
    "size": 10,
    [...]
    "taints": [\
      {\
        "key": "priority",\
        "value": "high",\
        "effect": "NoSchedule",\
      },\
      {\
        "key": "workloadKind",\
        "value": "database",\
        "effect": "NoExecute",\
      }\
    ]
}
```


### 5 October

- Released [v1.47.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.47.0), the official DigitalOcean CLI. This release adds support for setting Kubernetes node pool taints.


### 1 October

- All Droplets created after 1 October 2020 are [placed into a VPC network by default](https://docs.digitalocean.com/products/networking/vpc/). You can no longer manually enable VPC networking on existing Droplets. You can [migrate existing Droplets into VPC networks using Snapshots](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/).

- All Droplets created after 1 October 2020 are [placed into a VPC network by default](https://docs.digitalocean.com/products/networking/vpc/). The `enable_private_networking` action and `private_network` parameter have been deprecated. Use the `vpc_uuid` parameter to specify the VPC network for your Droplets.

You can [migrate existing Droplets into VPC networks using Snapshots](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/).


## September 2020

### 30 September

- We have updated capacity in FRA1 and have resumed the [creation of Spaces](https://docs.digitalocean.com/products/spaces/how-to/create/) in that region.


### 25 September

- We have temporarily disabled the creation of new Spaces in SGP1 while we update capacity in this region.



Learn more on [**Creation of New Spaces in SGP1 Disabled Until 2021**](https://docs.digitalocean.com/release-notes/upcoming/spaces-sgp1/).


### 16 September

- [Dedicated CPU Droplet plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated) now offer more SSD size options. Each plan contains SSD size variants that you can choose upon [creation](https://docs.digitalocean.com/products/droplets/how-to/create/) or when [resizing a dedicated CPU Droplet](https://docs.digitalocean.com/products/droplets/how-to/resize/).


### 8 September

- Fedora 30 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 2 September

- Standard Droplet plans have been replaced with Basic Droplet plans. We have added one new plan, `s-8vcpu-16gb`, and deprecated the following plans:


  - `s-1vcpu-3gb`
  - `s-3vcpu-1gb`
  - `s-6vcpu-16gb`
  - `s-8vcpu-32gb`
  - `s-12vcpu-48gb`
  - `s-16vcpu-64gb`
  - `s-20vcpu-96gb`
  - `s-24vcpu-128gb`
  - `s-32vcpu-192gb`

These deprecated plans are now unavailable in the control panel, but you can still create Droplets with those plans using the API or `doctl`.

## August 2020

### 20 August

- Account security history now only displays events after 17 August 2019. If you need data from an earlier date, open a support ticket.


### 4 August

- We have released a Droplet [metadata endpoint](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/) which returns whether or not a Droplet is scheduled for a [live migration](https://docs.digitalocean.com/products/droplets/details/live-migration/#how-to-check-for-scheduled-live-migrations). The impact of live migrations on Droplets is minimal, so users now only receive direct notifications for migrations that require us to power down a Droplet, which (except in emergencies) we send 7 days in advance.


### 1 August

- Ubuntu 19.10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## July 2020

### 31 July

- Memory-Optimized Droplets are [now available for the BLR1 datacenter region](https://docs.digitalocean.com/platform/regional-availability/#droplet-plan-availability).


### 28 July

- [App Platform](https://docs.digitalocean.com/products/app-platform/) is now in beta.


### 23 July

- The [FreeBSD 11.4](https://www.freebsd.org/releases/11.4R/announce.html) UFS and ZFS base images are now available in the control panel and via the API.


### 22 July

- [v1.22.0](https://github.com/digitalocean/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1220-july-22-2020) of the DigitalOcean Terraform Provider is now available. This release includes `auto_upgrade` and `surge_upgrade` support for the `digitalocean_kubernetes_cluster` resource.

- We have [reenabled the creation of Spaces in NYC3](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/) now that the datacenter’s capacity upgrade is complete. The ability to create new Spaces in FRA1 remains disabled while we finish that datacenter capacity upgrade.

- Memory-Optimized Droplets are now in [general availability](https://docs.digitalocean.com/platform/regional-availability/) and are available in the SFO3 and TOR1 datacenter regions.

- Released [v1.46.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.46.0), the official DigitalOcean CLI. This release includes support for install Kubernetes 1-Click Apps when creating a cluster, surge upgrade support for Kubernetes clusters, and more.


### 20 July

- [v1.21.0](https://github.com/digitalocean/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1210-july-20-2020) of the DigitalOcean Terraform Provider is now available. This release includes the addition of `https` to the list of acceptable health check protocols for the `digitalocean_loadbalancer` resource.


### 8 July

- Load balancer health checks [now support the HTTPS protocol](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#health-checks). You can now configure load balancers to verify the health of your Droplets’ HTTPS endpoints.


### 7 July

- PostgreSQL 12 is [now available for database clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/#choose-a-database-engine). You can also now [perform in-place upgrades](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/) for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, and 12.


### 6 July

- Load balancer health checks [now support the HTTPS protocol](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#health-checks). You can now configure load balancers to verify the health of your Droplets’ HTTPS endpoints.


### 1 July

- [Tax collection for Saudi Arabia](https://docs.digitalocean.com/platform/billing/taxes/sau/) has begun. Charges will appear on the August invoice.

- State tax collection for Arizona, Hawaii, New York, Pennsylvania, Washington, and West Virginia has begun. Charges will appear on the August invoice. [Learn more about tax for the United States of America](https://docs.digitalocean.com/platform/billing/taxes/usa/).


## June 2020

### 16 June

- You can now [remove all global SQL modes from MySQL database clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/). Global SQL modes affect the SQL syntax MySQL supports and the data validation checks it performs.


### 15 June

- [v1.20.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1200-june-15-2020) of the DigitalOcean Terraform Provider is now available. This release includes the addition of a `digitalocean_tags` data source and improvements to other tag-related resources.


### 10 June

- Released [v1.45.1 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.45.1), the official DigitalOcean CLI. This release updates doctl’s Snap packaging that allow Snap users to log in to DigitalOcean Container Registry using the `doctl registry login` command. To grant access doctl access to your Docker configuration, run `snap connect doctl:dot-docker`.


### 9 June

- We have temporarily disabled the creation of new Spaces in FRA1 and NYC3 while we update capacity in these regions. [Learn more about Spaces in FRA1 and NYC3](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/).



Learn more on [**Creation of New Spaces in FRA1 and NYC3 Disabled Until Late 2020**](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/).

- [Listing records for a domain](https://docs.digitalocean.com/reference/api/digitalocean/#operation/domains_list_records) now supports filtering by both `name` and `type` using query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`To only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. `name` must be a fully qualified record name. Both `name` and `type` may be used together to further filter the records returned.

- The response body to `POST` requests [creating multiple Droplets](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create) has been extended to include an `actions` link for each Droplet created. For example:


```
      "links": {
        "actions": [\
          {\
            "id": 24404896,\
            "rel": "create",\
            "href": "https://api.digitalocean.com/v2/actions/24404896"\
          },\
          {\
            "id": 24404897,\
            "rel": "create",\
            "href": "https://api.digitalocean.com/v2/actions/24404897"\
          }\
        ]
      }
```


These can be used to [check the status](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_get) of each individual Droplet create event rather than polling each Droplet.


### 5 June

- Beginning 4 June 2020, you are [required to create a primary key](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/) for each new table in any DigitalOcean Managed MySQL Database to improve cluster performance.


### 3 June

- [v1.19.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1190-may-05-2020) of the DigitalOcean Terraform Provider is now available. This release includes initial support the DigitalOcean Container Registry.


### 2 June

- Released [v1.44.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.44.0), the official DigitalOcean CLI. This release includes support for specifying a non-default VPC when creating Droplets, load balancers, and Kubernetes clusters. It also adds the ability to set an expiration time for container registry credentials. This can be useful when calling `doctl registry login` as part of a CI/CD process. A new `doctl 1-click list` subcommand is now also available.

- Released [v1.45.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.45.0), the official DigitalOcean CLI. This release includes new `doctl kubernetes 1-click list` and `doctl compute droplet 1-click list` subcommands.


### 1 June

- Tax collection for Chile has begun. Charges will appear on the July invoice. [Learn more about tax for Chile](https://docs.digitalocean.com/platform/billing/taxes/chl/).


## May 2020

### 26 May

- CoreOS Container Linux has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 15 May

- [Unassigned floating IP](https://docs.digitalocean.com/products/networking/reserved-ips/#plans-and-pricing) charges will now appear on invoices. The first charge will appear on July 2020 invoices for all floating IPs that were not assigned to Droplets during the month of June.

- The retention period for [Droplet performance metrics](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) has been decreased from 30 days to 14 days.

- Users can now search for Marketplace apps directly from the Droplet Create page.


### 12 May

- The [SFO3 datacenter region](https://docs.digitalocean.com/platform/regional-availability/) is now available.

- The ability to choose a [root password during Droplet creation](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication) has been reinstated.


### 6 May

- It is now possible to adjust the behavior of the [OAuth authorization flow](https://docs.digitalocean.com/reference/api/oauth/) by specifying a `prompt` and/or `max_auth_age` query parameter:


  - The [`prompt`](https://docs.digitalocean.com/reference/api/oauth/#prompt-parameter) query parameter can be used to specify how the authorizing user should be authenticated.
  - The [`max_auth_age`](https://docs.digitalocean.com/reference/api/oauth/#1-request-user-authorization) query parameter can be used to determine a deadline (in seconds) after which a user must re-authenticate on the control panel.

For more details, consult the [OAuth documentation](https://docs.digitalocean.com/reference/api/oauth/).

### 5 May

- [v1.18.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1180-may-05-2020) of the DigitalOcean Terraform Provider is now available. This release includes support for the backend keepalive option for the load balancer resource and data source.


## April 2020

### 29 April

- Users can now [use the API to destroy select resources associated with a Droplet](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_destroy_withAssociatedResourcesSelective) when destroying a Droplet. You can destroy snapshots, volumes, or volume snapshots associated with a Droplet.

- It is now possible to destroy snapshots, volumes, and volume snapshots associated with a Droplet while destroying the Droplet itself in a single request. A number of new related endpoints are now available:


  - To [list the resources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_list_associatedResources) that can be destroyed along with the Droplet, send a GET request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
  - To [destroy a Droplet along and a sub-set of its associated resources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_destroy_withAssociatedResourcesSelective), send a DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective` endpoint.
  - To [destroy a Droplet along with all of its associated resources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_destroy_withAssociatedResourcesDangerous), send a DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous` endpoint.
  - To [check on the status](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_get_DestroyAssociatedResourcesStatus) of a request to destroy a Droplet with its associated resources, send a GET request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
  - If the status reported any errors, the [destroy request can be retried](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_destroy_retryWithAssociatedResources) by sending a POST request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.

### 28 April

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.

- [v1.17.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1170-april-28-2020) of the DigitalOcean Terraform Provider is now available. This release includes bug fixes and new Spaces data sources.

- Load balancers now allow you to set a [keepalive option](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#backend-keepalive) for target Droplets.

- The [Fedora 32](https://fedoramagazine.org/announcing-fedora-32/) base image is now available in the control panel and via the API.

- Released [v1.43.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.43.0), the official DigitalOcean CLI. This release updates container registry features from beta to early access.

- DigitalOcean Load balancers now allow you to set a [keepalive option](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#backend-keepalive) for forwarding rules. Enabling this option allows the load balancer to use fewer active TCP connections to send and receive HTTP requests between the load balancer and your target Droplets.


### 23 April

- The [Ubuntu 20.04 LTS](https://wiki.ubuntu.com/FocalFossa/ReleaseNotes) base image is now available in the control panel and via the API.

- Released [v1.42.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.42.0), the official DigitalOcean CLI. This release includes a number of small UI improvements and support for additional container registry beta features.


### 22 April

- The option to set your own root password during Droplet creation has been temporarily removed. You can still choose to connect to your Droplet using an [SSH key or an automatically-generated password via email](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication).


### 21 April

- You can now [choose a root password](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication) during Droplet creation rather than receiving an automatically-generated password via email.


### 14 April

- [v1.16.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1160-april-14-2020) of the DigitalOcean Terraform Provider is now available. This release includes VPC support and expanded Spaces support.

- [The login page](https://cloud.digitalocean.com/login) now provides quick access to your last-used login method.


### 10 April

- Released [v1.41.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.41.0), the official DigitalOcean CLI. This release fixes the link to create a new API token when running `doctl auth init`.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.

- Released [v1.40.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.40.0), the official DigitalOcean CLI. This release includes a support for VPCs and viewing billing history for an account.

- Starting today, we have begun the incremental release of [DigitalOcean VPC](https://docs.digitalocean.com/products/networking/vpc/), including its API. VPCs (virtual private clouds) allow you to create virtual networks containing resources that can communicate with each other in full isolation using private IP addresses. The VPC service will be available for all customers soon. It replaces the existing private networking service.

When enabled on your account, you will be able to create, configure, list, and delete custom VPCs as well as retrieve information about the resources assigned to them. For example, to [create a new VPC](https://docs.digitalocean.com/reference/api/digitalocean/#operation/vpcs_create), make a `POST` to the `/v2/vpcs` endpoint with a JSON body like:



```json
{
    "name": "staging-vpc",
    "description": "VPC for the staging environment"
    "region": "nyc1"
}
```



For the more details, see the [full API reference documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/VPCs) for DigitalOcean VPCs.


# Related Changes


This release contains related functionality for a number of other DigitalOcean resources.

When VPC is enabled on your account, the `private_networking` attribute previously used to enable private networking while creating a Droplet will now provision the Droplet inside of your account’s default VPC for the region. Use the new `vpc_uuid` attribute to specify a different VPC.

Kubernetes clusters, load balancers, and database clusters will also be provisioned inside of your account’s default VPC for the region when enabled. To specify a non-default VPC, set the appropriate attribute in the JSON body of the create request:



| Resource | Attribute |
| --- | --- |
| [Droplet](https://docs.digitalocean.com/reference/api/digitalocean/#create-a-new-droplet) | `vpc_uuid` |
| [Kubernetes cluster](https://docs.digitalocean.com/reference/api/digitalocean/#create-a-new-kubernetes-cluster) | `vpc_uuid` |
| [Load balancer](https://docs.digitalocean.com/reference/api/digitalocean/#create-a-new-load-balancer) | `vpc_uuid` |
| [Database cluster](https://docs.digitalocean.com/reference/api/digitalocean/#create-a-new-database-cluster) | `private_networking_uuid` |


## March 2020

### 21 March

- Business customers in Iceland can now enter their VAT IDs on the billing page. This removes tax charges on future invoices. [Learn more about Iceland taxes](https://docs.digitalocean.com/platform/billing/taxes/isl/).


### 19 March

- The Spaces CDN now has [separate caches for unique URLs, including query strings](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/).


### 18 March

- [v1.15.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1150-march-18-2020) of the DigitalOcean Terraform Provider is now available. This release includes new data sources for accessing information about DigitalOcean regions, images, and projects, a new resource for adding resources to projects not created via Terraform, and a number of other improvements.

- Released [v1.39.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.39.0), the official DigitalOcean CLI. This release includes support for listing and retrieving invoices as well as expanded help output for all commands.


### 16 March

- Updated the Droplet-based [Marketplace WordPress 1-Click App](https://marketplace.digitalocean.com/apps/wordpress) to now use PHP 7.4 and MySQL server 8.0.19.


### 13 March

- Users who create a 1-Click App can now access the instructions for their app by clicking the **Get Started** link next to their Droplet on the project homepage.

- The sign-in experience has been redesigned to help streamline two-factor authentication workflows and enable special announcements.


### 12 March

- You can now only [rebuild Droplets from images](https://docs.digitalocean.com/products/droplets/how-to/rebuild/) that use an OS that resides in the same OS family as the Droplet being rebuilt. For example, a Droplet running Ubuntu 16 can be rebuilt from an image running Ubuntu 18, but it cannot be built from an image running Debian.


### 11 March

- We have finished expanding the AMS3 datacenter to address capacity and load issues with Spaces in that region. As a result, we have reenabled the creation of new Spaces in AMS3. The allowance and rate limits on uploads to Spaces in AMS3 will stay in place to ensure high performance.



Learn more on [**Restrictions on Spaces in AMS3 Applied Until Datacenter Expansion Planned for Early 2020**](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/).

- The Debian [10.3](https://www.debian.org/News/2020/20200208) and [9.12](https://www.debian.org/News/2020/2020020802) base images are now available in the control panel and via the API.

- Users can now [upload custom images](https://docs.digitalocean.com/products/custom-images/how-to/upload/) using FTP URLs.


### 9 March

- Users can now [destroy select resources associated with a Droplet](https://docs.digitalocean.com/products/droplets/how-to/destroy/#destroy-droplet-and-its-associated-resources) when destroying a Droplet.


### 4 March

- Users can now [set legacy MySQL 5x password encryption](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#password-encryption) for MySQL 8+ managed databases from the control panel and API.

- The DigitalOcean Managed Databases API now supports configuring the user
authentication plug-in for both new and existing MySQL users. This is useful
when needing to connect to a MySQL 8.0 cluster using an application or older
MySQL client that does not support the default `caching_sha2_password`
authentication plug-in.

For example, to [create a new MySQL user](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_add_user)
using the `mysql_native_password` authentication plug-in, send a POST request
to `/v2/databases/$DATABASE_ID/users` with a JSON body like:



```json
{
    "name": "php-app-01",
    "mysql_settings": {
      "auth_plugin": "mysql_native_password"
    }
}
```



For more details, see the [full reference documentation for the managed databases API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases).


### 1 March

- Tax collection for [Iceland](https://docs.digitalocean.com/platform/billing/taxes/isl/) has begun. Charges will appear on the April invoice.


## February 2020

### 24 February

- We began the incremental release of a feature that allows users to destroy select resources associated with a Droplet when they destroy the Droplet.


### 12 February

- We have renamed the Limited Availability (LA) [product lifecycle stage](https://docs.digitalocean.com/platform/product-lifecycle/) to Early Availability (EA) to better represent the status of products in that stage. Products in [Early Availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability) are fully functional but not yet production-ready, and may be enabled only for specific user groups as part of an incremental roll-out strategy.


### 6 February

- To provide a better service for all customers we are introducing burst request rate limits to our public API. Now clients will be rate limited if they consume more than 5% of their total requests for an hour over a 1 minute period (going over 250 requests in a minute). This only affects clients making their requests in large bursts, clients that spread their requests over time will not be affected.


### 5 February

- [v1.14.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1140-february-05-2020) of the DigitalOcean Terraform Provider is now available. This release includes a bug fix for projects containing many resources and exposes the Droplet IDs for individual nodes in Kubernetes clusters.


### 4 February

- We have made several improvements for seeking support, including a new [support starting page](https://docs.digitalocean.com/support/) that allows you to search DigitalOcean’s product documentation, Marketplace, and community tutorials from a single location.

- Released [v1.38.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.38.0), the official DigitalOcean CLI. This release adds the ability to set Kubernetes node pool labels as well as support for deleting multiple Kubernetes clusters with a single command.

- Our managed DigitalOcean Kubernetes product DOKS now supports setting Kubernetes labels on node pools. Once assigned, they will propagate to the associated pool nodes, both existing and new ones. This way, customers may reliably reference groups of nodes through [label selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) that Kubernetes provides.

Labels can be set on node pool API objects that are accessible on multiple endpoints. For instance, updating an existing node pool by the labels `service=web` and `priority=high` is done by submitting a `PUT` request to the `/v2/kubernetes/clusters/<cluster ID>/node_pools/<node ID>` endpoint with the following JSON body:



```json
{
    "name": "web",
    "count": 10,
    "labels": {
      "service": "web",
      "priority": "high"
    }
}
```



For details, see the [available operations on the Kubernetes API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes).


## January 2020

### 30 January

- Ubuntu 19.04, FreeBSD 12.0, Fedora 28, Fedora 28 Atomic, and Fedora 29 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


### 27 January

- [v1.13.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1130-january-27-2020) of the DigitalOcean Terraform Provider is now available. This release adds support for tagging managed databases clusters.


### 24 January

- The [RancherOS 1.5.5](https://github.com/rancher/os/releases/tag/v1.5.5) base image is now available in the control panel and via the API.


### 22 January

- The [CentOS 8.1](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS8.1911) base image is now available in the control panel and via the API.


### 14 January

- Released [v1.37.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.37.0), the official DigitalOcean CLI. This release adds the ability to retrieve account balances.


### 13 January

- Our API has been extended with [a new endpoint enabling you to retrieve your account balance](https://developers.digitalocean.com/documentation/changelog/api-v2/new-endpoint-for-retrieving-balance-information/). For more information, see the [balance endpoint](https://developers.digitalocean.com/documentation/v2/#balance) in the API reference documentation.

- Our API has been extended with a new endpoint enabling you to retrieve balance
information for an account. To do so, make a `GET` request to `/v2/customers/my/balance`.
The response will be a JSON body including your balance details. For example:



```json
{
    "month_to_date_balance": "23.44",
    "account_balance": "12.23",
    "month_to_date_usage": "11.21",
    "generated_at": "2019-07-09T15:01:12Z"
}
```



For all the details, see the [balance endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Balance)
in the full API reference documentation.


### 1 January

- Tax collection for [Malaysia](https://docs.digitalocean.com/platform/billing/taxes/mys/) has begun.

- Tax collection for [Singapore](https://docs.digitalocean.com/platform/billing/taxes/sgp/) has begun.


## December 2019

### 19 December

- Released v1.12.0 of the DigitalOcean Terraform Provider. This release contains improvements to Managed Database support including a new resource for configuring trusted sources and the ability to set the global SQL mode or Redis eviction policy on a cluster. There is also a new data source for finding supported Kubernetes versions. Learn more on the [Terraform Changelog](https://do.co/terraform-changelog).

- Users can now specify the payment method and amount when making payments [on the billing page](https://cloud.digitalocean.com/account/billing).


### 18 December

- The [Fedora 31](https://fedoramagazine.org/announcing-fedora-31/) base image is now available in the control panel and via the API.


### 17 December

- Bandwidth billing for managed databases, originally slated to begin in January 2020, has been postponed to 2021. Egress bandwidth for managed databases clusters will continue to be waived until then.

- The [Debian 10.2](https://www.debian.org/News/2019/20191116) base image is now available in the control panel and via the API.


### 12 December

- The [FreeBSD 12.1 (ufs & zfs)](https://www.freebsd.org/releases/12.1R/relnotes.html) base image is now available in the control panel and via the API.

- Our [referral program](https://docs.digitalocean.com/platform/teams/how-to/refer-others/) offer has changed from $50 for 30 days to $100 for 60 days. This change applies only to new referrals. Existing users with referral credits will retain their current balance and credit expiration dates.


### 2 December

- The DigitalOcean API currently offers the ability to retrieve a report of all
Droplets co-located on the same physical hardware by sending a GET request to
the `/v2/reports/droplet_neighbors` endpoint. This endpoint has been deprecated
and will begin responding with an HTTP status of 410 (Gone) on December 17th, 2019.

Today, in its place, a new endpoint is now available: `/v2/reports/droplet_neighbors_ids`.
Rather than listing the full Droplet object, responses from this endpoint only
contain sets of Droplet IDs co-located on the same physical hardware. For example:



```json
{
    "neighbor_ids": [\
      [168671828,168663509,168671815],\
      [168671883,168671750]\
    ]
}
```



This implementation is more performant and better able to scale for users with
many Droplets. For all the information, find the [full API reference documentation here](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets).

The API also continues to offer the ability to list “neighbors” for a specific
Droplet by sending a GET request to `/v2/droplets/$DROPLET_ID/neighbors`. This
endpoint will continue to function without change.

We apologize for the inconvenience. If you need guidance on this transition, reach out to the team by [opening a support ticket](https://www.digitalocean.com/company/contact/support).


### 1 December

- Tax collection for [Belarus](https://docs.digitalocean.com/platform/billing/taxes/blr/) has begun. Charges will appear on the January invoice.


## November 2019

### 21 November

- Users can now [use the DigitalOcean API to set and modify trusted sources for managed databases](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_firewall_rules) to restrict incoming connections.

- MySQL managed database clusters now support setting the global SQL mode via the [control panel](https://cloud.digitalocean.com/databases) and the [API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/databases). See [How to Set Global SQL Mode on MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/) for more information.


### 20 November

- DigitalOcean’s API now supports [managing a database cluster’s firewall rules](https://docs.digitalocean.com/reference/api/digitalocean/#operation/firewalls_update) (known as “trusted sources” in the control panel) as well as the ability to [configure the SQL mode used by MySQL clusters](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_get_sql_mode).

Using the `/v2/databases/$DATABASE_ID/firewall` endpoint, you can specify which resources should be able to open connections to your database. You may limit connections to specific Droplets, Kubernetes clusters, or external IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. For example, the body a `PUT` request might look like:



```json
{
    "rules": [\
      {"type": "ip_addr", "value": "192.168.1.1"},\
      {"type": "droplet", "value": "163973392"},\
      {"type": "k8s", "value": "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61"},\
      {"type": "tag", "value": "backend"}\
    ]
}
```



To configure the SQL modes for a MySQL cluster, use the `/v2/databases/$DATABASE_ID/sql_mode` endpoint. For example, the body a `PUT` request might look like:



```json
{
    "sql_mode": "ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE"
}
```



For more information, see the full API reference documentation for [managed databases](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases).


### 19 November

- DigitalOcean Kubernetes users can run [our cluster linter](https://github.com/digitalocean/clusterlint) before [upgrading their cluster to a new minor version](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#new-minor-version). The linter automatically finds issues with your cluster and links to recommended fixes.

- DigitalOcean Container Registry has been released in Beta. To request early access, visit [the homepage for Container Registry](https://www.digitalocean.com/products/container-registry/).

- DigitalOcean Kubernetes has added native [support for the Kubernetes Dashboard for all DOKS clusters](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/#kubernetes-dashboard).


### 14 November

- Team owners can now [require secure sign-in for teams](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/).


### 13 November

- Released v1.11.0 of the DigitalOcean Terraform Provider. Learn more in the [Terraform Changelog](https://do.co/terraform-changelog).


### 8 November

- Memory-Optimized Droplets are now available in the SGP1 datacenter region. See [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet) for more information.


### 4 November

- General Purpose Droplets are now available in the LON1 datacenter region. See [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-general-purpose-droplet) for more information.


### 1 November

- State tax collection for the [United States of America](https://docs.digitalocean.com/platform/billing/taxes/usa/) has begun. Charges will appear on the December invoice.


## October 2019

### 31 October

- Released v1.10.0 of the DigitalOcean Terraform Provider. Learn more in the [Terraform Changelog](https://do.co/terraform-changelog).

- Memory-Optimized Droplets are now in [general availability](https://docs.digitalocean.com/platform/regional-availability/) and are available in the NYC1 and SFO2 datacenter regions.


### 23 October

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) no longer support downgrading TLS connections to TLS 1.1.


### 21 October

- The [Ubuntu 19.10](https://wiki.ubuntu.com/EoanErmine/ReleaseNotes) base image is now available in the control panel and via the API.


### 11 October

- Users can now see the sign-in method (email, email + 2FA, Google, or GitHub) for team members on the [team account page](https://cloud.digitalocean.com/account/team) in the control panel.


### 3 October

- The [DigitalOcean Kubernetes (DOKS) October release is now available](https://blog.digitalocean.com/new-on-digitalocean-kubernetes/), and contains the following new features:


  - [Cluster autoscaling](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/).

  - [Connecting to clusters with OAuth tokens](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/).

  - [Support for minor version upgrades](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/).


## September 2019

### 30 September

- Released v1.8.0 of the DigitalOcean Terraform Provider. Learn more in the [Terraform Changelog](https://do.co/terraform-changelog).


### 24 September

- Redis managed databases are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) with the addition of [monitoring insights](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/).


### 23 September

- DigitalOcean now supports 3-D Secure (3DS) second-factor payment authentication, allowing us to accept payment from banks that require it.


### 20 September

- The [Billing page](https://cloud.digitalocean.com/account/billing) in the control panel now splits the costs displayed between payment due and the amount not yet billed for the active billing cycle.


### 10 September

- [Memory-Optimized Droplets](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet) are now in Limited Availability in the NYC3 and AMS3 regions. See [Introducing Memory-Optimized Droplets with 8 GB RAM for Each Dedicated vCPU](https://blog.digitalocean.com/introducing-memory-optimized-droplets/) to learn more.


### 6 September

- The [OpenEBS](https://marketplace.digitalocean.com/apps/openebs-1) (Kubernetes) [One-Click Application](https://docs.digitalocean.com/products/marketplace/) has been released.


### 4 September

- Managed databases for MySQL and Redis are now available in SGP1, BLR1, and TOR1, and MySQL is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).

- The [Chamilo](https://marketplace.digitalocean.com/apps/chamilo) [One-Click Application](https://docs.digitalocean.com/products/marketplace/) has been released.


### 1 September

- Value Added Tax (VAT) collection for [South Korea](https://docs.digitalocean.com/platform/billing/taxes/kor/) and Quebec Sales Tax (QST) collection for [Quebec, Canada](https://docs.digitalocean.com/platform/billing/taxes/can/) have begun. Charges will appear on the October invoice.


## August 2019

### 27 August

- Released [Version 1.7.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#170-august-27-2019) of the DigitalOcean Terraform provider.

- Managed databases for MySQL and Redis in Limited Availability are now available in the AMS3, LON1, and NYC3 datacenter regions. Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).


### 26 August

- Volume limits for verified accounts have been raised from 10 volumes per account/500 GB of volume data per region to 100 volumes per account/16 TB per region. Unverified accounts are still limited to 10 volumes/500 GB. Learn more about [account verification](https://docs.digitalocean.com/platform/accounts/#verification).


### 23 August

- Users can now specify an account address within their **[Billing Settings](https://cloud.digitalocean.com/account/billing)**. We use this address to determine tax location, and we use this address on invoices. [Learn more about tax locations](https://docs.digitalocean.com/platform/billing/taxes/).


### 22 August

- The `/v2/volumes?name=$VOLUME_NAME` endpoint now lists all volumes that match the specified name as a query parameter. For more information, see the API v2 reference documentation on [list volumes filtered by name](https://docs.digitalocean.com/reference/api/digitalocean/#operation/volumes_list).


### 20 August

- Managed databases for MySQL and Redis have been released in early availability in the NYC1, FRA1, and SFO2 datacenter regions. Learn more in the [MySQL and Redis announcement blog post](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) no longer support downgrading TLS connections to TLS 1.0. We will stop supporting TLS 1.1 later this year.

- Today DigitalOcean’s Managed Database service launched support for two new database engines, MySQL and Redis. Both are currently in [Limited Availability](https://docs.digitalocean.com/platform/product-lifecycle/) and can initially be used in the NYC1, FRA1, and SFO2 regions.

When creating a new database cluster using the API, you must specify the `engine` attribute to select which type of database to use (`mysql` for MySQL or `redis` for Redis). For example, to [create a new Redis cluster](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_create_cluster), make a `POST` to the `/v2/databases` endpoint with a JSON body like:



```json
{
    "name": "cache-01",
    "engine": "redis",
    "version": "5",
    "region": "nyc1",
    "size": "db-s-1vcpu-2gb",
    "num_nodes": 2
}
```



See the [full API reference documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases) for all the details. For more information about DigitalOcean Managed Databases including the roll-out plan for additional regions, check out the [blog post announcing the release](https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases).


### 19 August

- Began the incremental release of new [block storage volume](https://docs.digitalocean.com/products/volumes/) limits. By the end of the release, all verified accounts will be able to create up to 100 volumes or use a total of 16 TB of volume data per region. Unverified accounts will be allowed 10 volumes or to use a total of 500 GB per region.

- You can now create a maximum of one snapshot of a volume every 10 minutes. See [the snapshots overview](https://docs.digitalocean.com/products/snapshots/) for more details.

- Floating IP Address rate limit information was added to the [DigitalOcean API Documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet).


### 14 August

- We have updated the default Ubuntu x64 base image from 18.04.1 to 18.04.3. For details about 18.04.3, see the [Ubuntu release notes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes).


### 13 August

- The credit card input form on the [billing page](https://cloud.digitalocean.com/billing) in the control panel has been modified to simplify billing address entry.


### 5 August

- Released version [1.6.0](https://do.co/terraform-changelog#160-august-05-2019) of the DigitalOcean Terraform provider.


## July 2019

### 29 July

- Released `doctl` [version 1.24.1](https://github.com/digitalocean/doctl/releases/tag/v1.24.1), which is also now available in Docker Hub. You can download it with `docker pull digitalocean/doctl`.


### 19 July

- We’ve disabled creating new Spaces in AMS3 until we complete maintenance on the datacenter as part of addressing Spaces performance concerns. [Learn more about Spaces AMS3 availability](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/).


### 18 July

- [`doctl` version 1.22](https://github.com/digitalocean/doctl/releases/tag/v1.22.0) was released.


### 12 July

- We have updated the [FreeBSD 12 (ufs & zfs)](https://www.digitalocean.com/products/linux-distribution/freebsd/) images to fix a bug related to private networking and SSH keys.

- The [FreeBSD 11.3](https://www.freebsd.org/releases/11.3R/relnotes.html) base image is now available in the control panel and via the API.


### 11 July

- DigitalOcean users can now sign up and sign in to DigitalOcean with [GitHub OAuth](https://cloud.digitalocean.com/account/profile). Users can switch their login type between password-based, Google OAuth, and GitHub OAuth.


### 9 July

- Downloadable CSV invoices available on the control panel [billing page](https://cloud.digitalocean.com/account/billing) have been updated to include project names for each Droplet.


### 8 July

- The [Debian 10 (buster)](https://www.debian.org/releases/buster/amd64/release-notes/index.en.html) base image is now available in the control panel and via the API.


### 3 July

- The installation repo for the [metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install) has been moved to DigitalOcean Spaces.

- Kubernetes Monitoring Stack (Beta), FASTPANEL, SolidInvoice, and OpenCart third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 2 July

- The Prometheus 2.9.2, RethinkDB 2.4.0, Mattermost 5.12.0, and Buddy third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


## June 2019

### 25 June

- The ttl of a domain record now has a minimum value of 30 seconds, and if not set, the default value has changed from 1800 to the ttl of the SOA record.


### 17 June

- 6-hour and 1-day [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/) for Droplets and Kubernetes worker nodes have been deprecated. No new alert policies with these intervals can be created. Existing alert policies using these intervals will remain in place until 1 August 2019, at which point they will be modified to reflect a 1-hour interval.


### 3 June

- We have updated the RancherOS base image from v1.5.1 to [v1.5.2](https://github.com/rancher/os/releases) in the control panel and API.


## May 2019

### 30 May

- DigitalOcean Managed Databases now provide support for private networking. All new database clusters will be provisioned with private networking enabled. Existing clusters will require an update to connect over the private network. This can be triggered in the [control panel](https://cloud.digitalocean.com/databases).

Databases, read-only replicas, and connection pools will now contain a new `private_connection` object holding the information needed to access the resource via the private network. Its attributes are identical to the existing `connection` object, but the values for `private_connection.uri` and `private_connection.host` will contain FQDNs only accessible from resources (e.g. Droplets or Kubernetes clusters) within your account and in the same region.

For more information, see the full [managed databases API documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases).


### 29 May

- [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) now support [private networking](https://docs.digitalocean.com/products/networking/vpc/). New database clusters will provision with private networking enabled. Existing clusters will require an update to connect over the private network.


### 22 May

- [FreeBSD 12.0](https://www.freebsd.org/releases/) (ufs & zfs) base images are now available in the control panel and via the API.

- [FreeBSD 10.4](https://www.freebsd.org/releases/) (ufs & zfs) has reached end of life and is no longer available from the control panel.

- [Fedora 27](https://fedoraproject.org/wiki/Releases) reached end of life and is no longer available from the control panel.


### 21 May

- [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) is now [Generally Available](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Highlights include:


  - [Availability](https://docs.digitalocean.com/platform/regional-availability/) in SGP1 and TOR1.

  - Support for [patch version upgrades](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/).

  - Configurable maintenance window and automatic upgrade options.

  - Delete node feature, which removes a specific node from a worker pool.

  - [Basic](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) and [advanced monitoring](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-advanced/) insights for resource utilization and deployment status metrics.


- SOA records are now returned in record results, and you can update the TTL on a SOA record as you would with other records. This allows you to control the negative caching of your domain. SOA records cannot be manually deleted or created on a domain, they are created when the domain is created, and cleaned up on the domain deletion.

- Today, we are promoting the Kubernetes API to General Availability. As part of this release, we have also extended the API with additional functionality:


  - When creating or updating a cluster, you may now configure a maintenance window policy specifying the day of the week and time of day that updates should take place for the cluster. Additionally, setting a cluster’s `auto_upgrade` attribute to `true` will specify that the cluster can be automatically upgraded to new Kubernetes patch releases (e.g. 1.13.1 to 1.13.2) during its maintenance window.

  - An `upgrade` endpoint is now available to imminently [trigger an upgrade](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_upgrade_cluster) to a newer patch release of Kubernetes at your own convenience. You may list available upgrades for your cluster using [the `upgrades` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_get_availableUpgrades).

  - In order to give users finer control over individual nodes, the `recycle` endpoint has been deprecated. Instead, we now offer the ability to [delete or replace specific nodes](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_delete_node) in a node pool. By default, workloads will be drained from the node before deletion. Appending the `skip_drain=1` query parameter to the request will cause the node to be imminently deleted. Appending the `replace=1` query parameter to the request will cause the node to be replaced by a new one after it has been deleted.


For the full details, see the API reference documentation for [Kubernetes](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes).

Thank you to everyone who took the time to provide us with feedback.

### 16 May

- Our [referral program](https://docs.digitalocean.com/platform/teams/how-to/refer-others/) offer has changed from $100 for 60 days to $50 for 30 days. This change applies only to new referrals. Existing users with referral credits will retain their current balance and credit expiration dates.


### 9 May

- Released v1.3.0 of the DigitalOcean Terraform Provider. Learn more on the Terraform Changelog.

- [Spaces](https://docs.digitalocean.com/products/spaces/) are now available in the Frankfurt (FRA1) region.

- [Managed databases](https://docs.digitalocean.com/products/databases/) are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). New features include enhanced monitoring insights, support for projects and tags, and availability in the Singapore (SGP1) region.


### 7 May

- Creating Spaces in NYC3 is now re-enabled.


### 3 May

- [Kubernetes version 1.14.1](https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/) is now available for cluster creation in [DOKS](https://cloud.digitalocean.com/kubernetes/clusters).


### 1 May

- Value Added Tax (VAT) collection for [Norway](https://docs.digitalocean.com/platform/billing/taxes/nor/), [South Africa](https://docs.digitalocean.com/platform/billing/taxes/zaf/), and [the United Arab Emirates](https://docs.digitalocean.com/platform/billing/taxes/are/) and Good and Services Tax (GST) collection for [New Zealand](https://docs.digitalocean.com/platform/billing/taxes/nzl/) have begun. Charges will appear on the June invoice.

- [Fedora 30](https://docs.fedoraproject.org/en-US/fedora/rawhide/release-notes/) base images are now available in the control panel and via the API using the slug `fedora-30-x64`.


## April 2019

### 30 April

- [Ubuntu 14.04](https://wiki.ubuntu.com/Releases) reached end of life and is no longer available from the control panel.


### 24 April

- [DOKS](https://cloud.digitalocean.com/kubernetes/clusters) node pools can now be named at creation time.

- [DOKS](https://cloud.digitalocean.com/kubernetes/clusters) master nodes now automatically rotate logs to avoid disk space issues.


### 23 April

- Released v1.2.0 of the DigitalOcean Terraform Provider. Learn more: [https://do.co/terraform-changelog](https://do.co/terraform-changelog)

- The control panel [billing page](https://cloud.digitalocean.com/account/billing) now includes a breakdown of your spending and a downloadable PDF of your invoice.


### 18 April

- [Ubuntu 19.04](https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes) base images are now available in the [control panel](https://cloud.digitalocean.com/droplets/new) and via [the API](https://docs.digitalocean.com/reference/) using the slug `ubuntu-19-04-x64`.


### 16 April

- The `/v2/volumes/$volume_id/snapshots` endpoint now accepts tags at creation time, and these are reflected on the `/v2/snapshots` endpoint. Volume snapshot tags may now be managed with the `/v2/tags` endpoint as well. For more information, see the API reference documentation for both [volumes](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage) and [tags](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags).


### 10 April

- The ONLYOFFICE third-party [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 9 April

- The new [metrics agent](https://docs.digitalocean.com/products/monitoring/) is fully released into production. Highlights include:


  - A simpler way to contribute custom metrics

  - A new [load average plot](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)

  - Fedora 27 support

  - [Process name collection opt-out](https://docs.digitalocean.com/support/how-do-i-disable-process-name-collection-in-my-metrics-agent/)


This will be the default agent used by our [managed databases](https://docs.digitalocean.com/products/databases/) and [Kubernetes](https://docs.digitalocean.com/products/kubernetes/) products. All agent installations on or after this date will receive the new agent by default. On 8 July 2019, the legacy metrics agent will be deprecated, meaning users will no longer be able to view metrics from Droplets running the legacy agent. You can [upgrade to the new agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/) at any time.

- Spaces, DigitalOcean’s object storage solution, includes a built-in CDN. [Today we’ve added the ability](https://blog.digitalocean.com/custom-subdomains-for-spaces-cdn-endpoints) to use custom subdomains with your CDN endpoints. When configuring your CDN via the API, you can now set the `custom_domain` attribute to use a subdomain with the endpoint. When a custom subdomain is in use, the `certificate_id` attribute is also required. Its value must be the ID of a [DigitalOcean managed SSL certificate](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Certificates). For example, the body of your request to enable a CDN might look like:



```json
{
    "origin": "static-images.nyc3.digitaloceanspaces.com",
    "certificate_id": "892071a0-bb95-49bc-8021-3afd67a210bf",
    "custom_domain": "static.example.com"
}
```



See [here for more information](https://docs.digitalocean.com/reference/api/digitalocean/#tag/CDN-Endpoints) about using the API to configure Spaces CDN endpoints.


### 5 April

- The OpenVPN and GrandNode third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 2 April

- General Purpose Performance Droplet plans are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) with the addition of [SFO2, AMS3, and SGP1](https://docs.digitalocean.com/platform/regional-availability/).


### 1 April

- The Zabbix and Mastodon third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.

- To help customers track their credits, we now send [invoice emails](https://docs.digitalocean.com/platform/billing/invoices/) when customers use any resources during a billing period, regardless of an account’s outstanding balance. Previously, we only sent invoices when the outstanding balance exceeded the threshold for automatic payments.


## March 2019

### 30 March

- [Debian 8 has reached end of life](https://lists.debian.org/debian-cloud/2018/10/msg00045.html). We have removed the Debian 8 base image from the control panel and API.


### 27 March

- The Acra, Gladius Accelerator, and Selenoid third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 20 March

- DOKS customers can now see the cost of their Kubernetes nodes and load balancers aggregated by cluster name within a Kubernetes clusters group on their [invoice](https://docs.digitalocean.com/platform/billing/invoices/). Volumes and volume snapshots used in a DOKS cluster are not yet included in the cluster aggregation.


### 19 March

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) now support PROXY protocol version 1.

- DigitalOcean Load Balancers [now support](https://blog.digitalocean.com/load-balancers-now-support-proxy-protocol) using PROXY Protocol to pass information like origin IP addresses and port numbers from connecting client requests along to the backend service. This can be configured [using the API](https://docs.digitalocean.com/reference/api/digitalocean/#operation/loadBalancers_create) by setting the new `enable_proxy_protocol` attribute to `true` when creating a new Load Balancer or updating an existing one.

See [here for more information](https://docs.digitalocean.com/products/networking/load-balancers/#proxy-protocol) about using PROXY Protocol with DigitalOcean Load Balancers.


### 14 March

- The Akaunting and Caprover third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 5 March

- The [DigitalOcean Marketplace](https://docs.digitalocean.com/products/marketplace/) is now in General Availability.


### 4 March

- The Microweber third-party [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 1 March

- The following third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released: CloudBees, Jenkins, cPanel, Passbolt, Directus, and Nimbella.


## February 2019

### 28 February

- The Bitwarden and Redash third-party [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 27 February

- Public beta was opened for the new metrics agent. [See how to update your metrics agent here](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/).


### 26 February

- The third-party InfluxDB [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.

- The GitLab [One-Click application](https://docs.digitalocean.com/products/marketplace/) maintained by DigitalOcean was replaced in the control panel by a GitLab Enterprise Edition maintained by GitLab. The corresponding API slug, `gitlab-18-04`, is deprecated and will be removed in 90 days. The new slug, `gitlab-ee-18-04` is available now.

- [General Purpose Performance Droplet plans](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) were released.


### 15 February

- As [announced on 5 September 2018](https://docs.digitalocean.com/release-notes/#September-5), the `last_tagged` attribute returned in response to GET requests to the `/v2/tags` or `/v2/tags/$TAG_NAME` endpoints has been deprecated. Beginning **1 March 2019**, `last_tagged` is no longer populated in favor of the `last_tagged_uri` attribute.

For example, a GET request to `/v2/tags/frontend` currently might return:



```json
{
    "tag": {
      "name": "frontend",
      "resources": {
        "count": 3,
        "last_tagged_uri": "https://api.digitalocean.com/v2/droplets/132000916",
        "droplets": {
          "count": 3,
          "last_tagged": {
            "id": 132000916,
            "name": "suspicious-bhabha-u8zq",
            "memory": 2048,
            "vcpus": 2,
            "disk": 60,
            "locked": false,
            "status": "active",
            "kernel": null,
            "created_at": "2019-02-13T05:29:52Z",
            "features": [\
              "private_networking"\
            ],
            "backup_ids": [],
            "next_backup_window": null,
            "snapshot_ids": [],
            "image": {
              "id": 43509743,
              "name": "do-kube-1.12.3",
              "distribution": "Debian",
              "slug": null,
              "public": false,
              "regions": [\
                "ams2",\
                "ams3",\
                "blr1",\
                "fra1",\
                "lon1",\
                "nyc1",\
                "nyc2",\
                "nyc3",\
                "sfo1",\
                "sfo2",\
                "sgp1",\
                "tor1"\
              ],
              "created_at": "2019-02-11T20:38:04Z",
              "min_disk_size": 20,
              "type": "snapshot",
              "size_gigabytes": 2.99
            },
            "volume_ids": [],
            "size": {
              "slug": "s-2vcpu-2gb",
              "memory": 2048,
              "vcpus": 2,
              "disk": 60,
              "transfer": 3,
              "price_monthly": 15,
              "price_hourly": 0.02232,
              "regions": [\
                "ams2",\
                "ams3",\
                "blr1",\
                "fra1",\
                "lon1",\
                "nyc1",\
                "nyc2",\
                "nyc3",\
                "sfo1",\
                "sfo2",\
                "sgp1",\
                "tor1"\
              ],
              "available": true
            },
            "size_slug": "s-2vcpu-2gb",
            "networks": {
              "v4": [\
                {\
                  "ip_address": "192.0.2.255",\
                  "netmask": "255.255.240.0",\
                  "gateway": "192.0.2.1",\
                  "type": "public"\
                },\
                {\
                  "ip_address": "10.136.121.81",\
                  "netmask": "255.255.0.0",\
                  "gateway": "10.136.0.1",\
                  "type": "private"\
                }\
              ],
              "v6": []
            },
            "region": {
              "name": "New York 1",
              "slug": "nyc1",
              "sizes": [\
                "s-1vcpu-3gb",\
                "s-1vcpu-1gb",\
                "s-3vcpu-1gb",\
                "s-1vcpu-2gb",\
                "s-2vcpu-2gb",\
                "s-2vcpu-4gb",\
                "s-4vcpu-8gb",\
                "s-16vcpu-64gb",\
                "s-6vcpu-16gb",\
                "s-8vcpu-32gb",\
                "s-12vcpu-48gb",\
                "s-20vcpu-96gb",\
                "s-24vcpu-128gb",\
                "s-32vcpu-192gb"\
              ],
              "features": [\
                "private_networking",\
                "backups",\
                "ipv6",\
                "metadata",\
                "install_agent",\
                "server_id",\
                "management_networking"\
              ],
              "available": true
            },
            "tags": [\
              "frontend"\
            ]
          },
          "last_tagged_uri": "https://api.digitalocean.com/v2/droplets/132000916"
        },
        "images": {
          "count": 1,
          "last_tagged_uri": "https://api.digitalocean.com/v2/images/42991114"
        },
        "volumes": {
          "count": 0
        }
      }
    }
}
```



Following this change, the new response would look like:



```json
{
    "tag": {
      "name": "frontend",
      "resources": {
        "count": 3,
        "last_tagged_uri": "https://api.digitalocean.com/v2/droplets/132000916",
        "droplets": {
          "count": 3,
          "last_tagged_uri": "https://api.digitalocean.com/v2/droplets/132000916"
        },
        "images": {
          "count": 1,
          "last_tagged_uri": "https://api.digitalocean.com/v2/images/42991114"
        },
        "volumes": {
          "count": 0
        }
      }
    }
}
```



For additional information, see the full API reference documentation for [tags](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags).


### 14 February

- [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) were released with support for PostgreSQL v10 and v11.

- Today [DigitalOcean’s Managed Database service](https://blog.digitalocean.com/announcing-managed-databases-for-postgresql), including its API, has entered Limited Availability. In order to access these new endpoints, you must first enable managed databases on your account by opting-in via the [cloud control panel](https://cloud.digitalocean.com/databases). Once enabled, you will be able to create, scale, and manage your database clusters via the API. For example, to [create a new database cluster](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_create_cluster), make a `POST` to the `/v2/databases` endpoint with a JSON body like:



```json
{
    "name": "backend",
    "engine": "pg",
    "version": "10",
    "region": "nyc3",
    "size": "db-s-1vcpu-2gb",
    "num_nodes": 2
}
```



The response will include a full JSON representation of the database cluster. The initial value of the cluster’s `status` attribute will be “creating.” When the cluster is ready for use, this will transition to “online.”

For the all the details, see the [full API reference documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases) for DigitalOcean Managed Databases.


### 13 February

- The third-party Helpy [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 6 February

- The third-party Cloudron [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 5 February

- Users with [credits](https://docs.digitalocean.com/platform/billing/promo-codes/) now automatically receive an email notification when account usage exceeds their promo code credit and any prepay balance.

- The `/v2/volumes` endpoint now displays tags and supports adding them to volumes at creation time. Volume tags may now be managed with the `/v2/tags` endpoint as well. For more information, see the API reference documentation for both [volumes](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage) and [tags](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags).


### 4 February

- Added the Droplet name to the subject line in [metrics alert email notifications](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/).


## January 2019

### 31 January

- The third-party Grafana [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.

- The third-party NKN Full Node [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.

- The third-party Fathom Analytics [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 30 January

- The third-party OpenFaaS [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 29 January

- To ensure the accuracy of reported metrics, the top processes graphs were removed from [Monitoring](https://docs.digitalocean.com/products/monitoring/). Instead, you can [monitor resource-consuming processes with tools like `top`](https://www.digitalocean.com/community/tutorials/how-to-use-top-netstat-du-other-tools-to-monitor-server-resources).


### 16 January

- The deprecated 16.04 One-Click LAMP slug, `lamp-16-04`, was removed from the [API](https://docs.digitalocean.com/reference/api/digitalocean/).


### 14 January

- The third-party OpenLiteSpeed Django [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 7 January

- The third-party OpenLiteSpeed NodeJS [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 1 January

- [Value Added Tax (VAT) collection for Russia](https://docs.digitalocean.com/platform/billing/taxes/rus/) has begun. Charges will appear on the February 1 invoice.

- Monthly billing emails now include a PDF invoice attachment.


## December 2018

### 20 December

- The third-party OpenLiteSpeed CyberPanel and Countly Analytics [One-Click applications](https://docs.digitalocean.com/products/marketplace/) were released.


### 12 December

- Released v1.1.0 of the DigitalOcean Terraform Provider. Learn more on the [Terraform Changelog](https://do.co/terraform-changelog).

- The third-party Open Source Social Network [One-Click application](https://docs.digitalocean.com/products/marketplace/) was released.


### 11 December

- The following updates were released for [DigitalOcean Kubernetes](https://do.co/k8s):


  - Any user can opt into Kubernetes during early availability via the [control panel](https://cloud.digitalocean.com/kubernetes/clusters).
  - Users can rename clusters.
  - Users can edit tags associated with clusters and worker pool.
  - A guided walkthrough helps users set up their kubectl and kubeconfig properly and provides example manifests to make it easier to get started.
  - The node pool settings to add, remove, and scale node pools has been moved to the ‘Nodes’ tab for a more streamlined experience.
  - The cluster provisioning status bar more accurately reflects the cluster creation progress.
  - Users can view the estimated monthly cost for their clusters.
  - Users can view a breakdown of total cluster capacity including CPU, Memory, Disk cluster wide.
  - Users can create and manage Kubernetes clusters, worker pools, and configuration using [doctl](https://github.com/digitalocean/doctl#doctl---).

- Today we [opened up access to the DigitalOcean Kubernetes](https://blog.digitalocean.com/digitalocean-releases-k8s-as-a-service) service for all users. As part of this release, the API is now also available to all. While still in [Limited Availability](https://docs.digitalocean.com/platform/product-lifecycle/), you must first enable Kubernetes on your account by opting-in via the [cloud control panel](https://cloud.digitalocean.com/kubernetes/clusters) to access these endpoints.

Once enabled, you can list, create, or delete clusters as well as scale node pools up and down, recycle individual nodes, and retrieve the kubeconfig file for use with a cluster via the API. For example, to [create a new cluster](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_create_cluster) with a node pool using three `s-2vcpu-2gb` Droplets, make a `POST` to the `/v2/kubernetes/clusters` endpoint with a JSON body like:



```json
{
    "name": "prod-cluster-01",
    "region": "nyc1",
    "version": "1.12.1-do.2",
    "tags": ["production"],
    "node_pools": [\
      {\
        "size": "s-2vcpu-2gb",\
        "count": 3,\
        "name": "woker-pool"\
      }\
    ]
}
```



The response includes a full JSON representation of the cluster. The initial value of the cluster’s `status.state` attribute is “provisioning.” When the cluster is ready for use, this transitions to “running.” You can use the [`/v2/kubernetes/options` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_list_options) to find the available versions of Kubernetes as well as the supported regions and Droplet sizes.

Once ready, you can retrieve the credentials for use with the cluster by sending a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`. The response is a kubeconfig file in YAML format. This file can be used to connect to and administer the cluster using the Kubernetes command line tool, kubectl. For more information, see “ [How to Connect to a DigitalOcean Kubernetes Cluster with kubectl](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/#connect-to-the-cluster).”

For the all the details, see the [full API reference documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes) for DigitalOcean Kubernetes.


### 7 December

- The minimum size for a [Kubernetes node](https://www.digitalocean.com/products/kubernetes/) was changed to the 2 GB Memory / 1 vCPU plan.


### 1 December

- The first version of [monthly billing emails with attached PDF invoices](https://ideas.digitalocean.com/ideas/DO-I-2030) was released to a small group of beta customers.


## November 2018

### 26 November

- The [Projects API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Projects) was released to [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability).

- Today, we are promoting the Projects API to General Availability. For the full details, see the API reference documentation for both [Projects](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Projects) and [Project Resources](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Project-Resources).

Thank you to everyone who took the time to provide us with feedback.


### 19 November

- The third-party OpenLiteSpeed WordPress [One-Click application](https://docs.digitalocean.com/products/marketplace/) is now available in the [control panel](https://cloud.digitalocean.com/).


### 13 November

- Ubuntu 16.04 [One-Click application](https://docs.digitalocean.com/products/marketplace/) images were removed from the API.


### 1 November

- Value Added Tax (VAT) collection for [Switzerland](https://docs.digitalocean.com/platform/billing/taxes/che/) and [Turkey](https://docs.digitalocean.com/platform/billing/taxes/tur/) has begun. Charges will appear on the December invoice.


## October 2018

### 26 October

- The third-party Hasura [One-Click application](https://docs.digitalocean.com/products/marketplace/) is now available in the [control panel](https://cloud.digitalocean.com/).


### 24 October

- The third-party Plesk [One-Click application](https://docs.digitalocean.com/products/marketplace/) is now available in the [control panel](https://cloud.digitalocean.com/).


### 23 October

- Droplets created from [custom images](https://docs.digitalocean.com/products/custom-images/) now support snapshots and backups.


### 19 October

- The third-party Sourcegraph [One-Click application](https://docs.digitalocean.com/products/marketplace/) is now available in the [control panel](https://cloud.digitalocean.com/).


### 18 October

- [Ubuntu 18.10](https://wiki.ubuntu.com/CosmicCuttlefish/ReleaseNotes) base images are now available in the [control panel](https://cloud.digitalocean.com/) and via the API using the slug `ubuntu-18-10-x64`.


### 16 October

- Today, we are launching a beta of our new Projects API. Projects enable you to group your resources in ways that align with the applications you host on DigitalOcean, and now you can do so via our API as well. This initial release includes the ability to:


  - Create, list, retrieve, update, and delete Projects
  - Assign existing resources to a Project
  - List resources in a Project

Additionally, we’ve added beta support for Projects to our official clients (Droplet Kit, godo, and doctl).

You can create a new project by sending a POST request to the `/v2/projects` endpoint including a body like:

```
{
  "name": "my-web-api",
  "description": "My website API",
  "purpose": "Service or API",
  "environment": "Production"
}
```

To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources` including a list of those resources in the body:

```
{
  "resources": [\
    "do:droplet:123456",\
    "do:floatingip:192.168.99.100",\
    "do:space:static-assets",\
    "do:volume:0e250b2a-8a01-11e8-96ae-0242ad114410"\
   ]
}
```

Resources are identified by uniform resource names or URNs, a string consisting of the type of resource and its unique identifier. A valid URN has the following format: `do:resource_type:resource_id`. For the full details, see the API reference documentation for both [Projects](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Projects) and [Project Resources](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Project-Resources).

Note that as this is a beta release, we may make additional changes based on your feedback. So [let us know](https://ideas.digitalocean.com/documentation) how you’re using projects, and follow along with the API changelog for updates.

### 5 October

- Released v1.0.2 of the DigitalOcean Terraform Provider. Learn more on the [Terraform Changelog](https://do.co/terraform-changelog).

- The DigitalOcean feature request portal has been migrated to [https://ideas.digitalocean.com](https://ideas.digitalocean.com/).


### 2 October

- Released v1.0.1 of the DigitalOcean Terraform Provider. Learn more on the [Terraform Changelog](https://do.co/terraform-changelog).


### 1 October

- [Pricing for load balancers](https://docs.digitalocean.com/products/networking/load-balancers/#plans-and-pricing) has decreased from $20/month to $10/month.

- [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) is now in early availability. [Learn more](https://www.digitalocean.com/products/kubernetes/).


## September 2018

### 27 September

- Released v1.0.0 of the DigitalOcean Terraform Provider, including new attachment resources for volumes and floating IPs, support for Let’s Encrypt certificates, auto-formatting for volumes, and CAA domain records, and more. Learn more: [https://do.co/terraform-changelog](https://do.co/terraform-changelog)

- Released the [Spaces content delivery network (CDN)](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/).

- Deprecated the Spaces free trial.

- Today’s release brings Content Delivery Network (CDN) support to Spaces, DigitalOcean’s object storage solution. This can be configured and managed using our API. By sending requests to `/v2/cdn/endpoints`, you can list, create, or delete CDN endpoints as well as purge cached content.

To enable the CDN for your Space, send a POST request to `/v2/cdn/endpoints`. In the JSON body of your request, specify the origin of your content and the desired TTL. For example:


```
{
    "origin": "static-images.nyc3.digitaloceanspaces.com",
    "ttl": 3600
}
```


Currently, the origin must be a DigitalOcean Space.

To purge cached content from a CDN endpoint, send a `DELETE` request to `/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include a `files` attribute containing a list of cached file paths to be purged. A path may be for a single file or may contain a wildcard (`*`) to recursively purge all files under a directory. When only a wildcard is provided, all cached files will be purged. For example, the body of your request might look like:


```
{
    "files": [\
      "assets/img/hero.png",\
      "assets/css/*"\
    ]
}
```


For additional details, see the API reference documentation for managing [CDN endpoints](https://docs.digitalocean.com/reference/api/digitalocean/#tag/CDN-Endpoints).


### 25 September

- Released [custom image support](https://docs.digitalocean.com/products/custom-images/) which allows customers to upload their Linux and Unix-like images to their DigitalOcean account and use them to create Droplets.

- Today DigitalOcean released support for uploading custom images, enabling you to create Droplets based on your own Linux virtual machine images. Our [image management API](https://developers.digitalocean.com/documentation/v2/#images) has been extended with support as well. By sending a `POST` to the `/v2/images` endpoint, you can create a new custom image. The request must contain a `url` attribute pointing to where the image can be downloaded. The image itself may be in the raw, qcow2, vhdx, vdi, or vmdk format. It can be compressed using gzip or bzip2 but must be smaller that 100 GB after being decompressed. For example, the body of you request might look like:


```
{
    "name": "ubuntu-18.04-minimal",
    "url": "http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img",
    "distribution": "Ubuntu",
    "region": "nyc3",
    "description": "Cloud-optimized image w/ small footprint",
    "tags": [\
      "base-image",\
      "prod"\
    ]
}
```


To make organizing your images easier, we’ve also extended tagging support to custom images as well as Droplet snapshots. For additional details, see the API reference documentation for [creating custom images](https://docs.digitalocean.com/reference/api/digitalocean/#operation/images_create_custom) and [tagging resources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/tags_assign_resources).


### 13 September

- Removed deprecated Machine Learning/Artificial Intelligence and MEAN One-Clicks from the control panel.

- New [One-Click Application Droplets](https://docs.digitalocean.com/products/marketplace/) that you create with the [control panel](https://cloud.digitalocean.com/droplets/new?appId=38148615&type=applications) will be based on Ubuntu 18.04 LTS. For the next 60 days (through November 12, 2018 11:59pm EST), Ubuntu 16.04 LTS-based One-Clicks will continue to be available alongside the 18.04 version through the API.


### 11 September

- Removed the list of environments (Production, Staging, Development) from the list of project purposes when creating projects. Added them as a separate drop-down on the Project Settings page.

- Fixed a bug where a project containing only domains displayed an empty state that required users to scroll to access their domains.

- Fixed a bug where domains with capital letters were not displaying the project on the Domain page.

- Began incremental release of invoice aggregation for users with more than 3000 invoice line items.


### 10 September

- [Spaces](https://docs.digitalocean.com/products/spaces/#regional-availability) are now available in SFO2.

- [Ubuntu 18.04](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes/ChangeSummary/18.04.1) is now the default image when [creating new Droplets](https://cloud.digitalocean.com/droplets/new) from the control panel.


### 5 September

- When listing or getting [tags](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags) by sending a GET request to `/v2/tags` or `/v2/tags/$TAG_NAME`, the response payload currently includes a `last_tagged` value inside the tag’s `resources.droplets` containing a full representation of the resource. This payload is considerably nested and adds additional overhead to the request. In order to improve performance as well as lay the groundwork for bring tagging support to additional resources, this attribute is being deprecated. Beginning **March 1st, 2019**`last_tagged` will no longer be populated in favor of the new `last_tagged_uri` attribute introduced today.

For all resources (and each resource type supported), the `last_tagged_uri` attribute contains a string indicating the URI which can be used to retrieve details about that specific resource. If you need information about the last tagged resource specifically, issuing another call to that URI will provide you with all the data for that resource.

Additionally, a `count` attribute describing how many resources overall have been tagged with the tag in question has been added. Each individual resource type will continue providing a `count` attribute.

If you need guidance on transitioning from using `last_tagged` to using of the new `last_tagged_uri` attribute, reach out to the team by [opening a support ticket](https://cloud.digitalocean.com/support/tickets/new).


## August 2018

### 14 August

- Discontinued the [CPU-optimized Droplet 2 GB/1vCPU plan](https://docs.digitalocean.com/products/droplets/).

- The [Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) now supports pasting information into the console.

- Customers with multiple credit cards on file can now choose which one is billed by default [on the billing page](https://cloud.digitalocean.com/account/billing).


### 9 August

- The [GitLab One-Click application](https://www.digitalocean.com/community/tutorials/how-to-use-the-gitlab-one-click-install-image-to-manage-git-repositories) has been updated with the following changes:



| Updated | From | To |
| --- | --- | --- |
| GitLab Community Edition | 11.0.0 | [11.1.4](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/CHANGELOG.md#1114-2018-07-30) |


### 1 August

- Updated all product documentation to reflect the [release of DigitalOcean Projects](https://blog.digitalocean.com/organizing-your-infrastructure-with-projects/), control panel main menu, and the restructuring of the Accounts section.

- We have enabled the [192 GB Standard Droplet plan](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) in AMS3, BLR1, FRA1, LON1, NYC3, NYC1, SGP1, SFO2, and TOR1.


## July 2018

### 27 July

- We have updated the default Ubuntu x64 base image from 16.04.4 to 18.04.1. For details about 18.04.1, see the [Ubuntu release notes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes).


### 25 July

- Released the following control panel updates:


  - Users can organize their resources into [projects](https://docs.digitalocean.com/products/projects/) to fit the way they work. Projects allow users to group their Droplets, Spaces, Load Balancers, domains, and Floating IPs to align with the applications, environments, clients, and projects that they host on DigitalOcean
  - The main menu of the control panel moved from the top to the left with updated styles.

The changes are scheduled to reach all users by July 28.

### 24 July

- You can now edit the card holder name, expiration date, CVC code, and billing address for existing credit card on the Account [Billing](https://cloud.digitalocean.com/account/billing) page.


### 19 July

- The [WordPress One-Click application](https://www.digitalocean.com/community/tutorials/how-to-use-the-wordpress-one-click-install-on-digitalocean) has been updated:



| Updated | From | To |
| --- | --- | --- |
| Wordpress | 4.9.1 | 4.9.7 |
| MySQL | 5.7.2 | 5.7.22 |

- The [Ghost One-Click application](https://www.digitalocean.com/community/tutorials/how-to-set-up-the-digitalocean-ghost-one-click-application-for-ubuntu-16-04) has been updated:



| Updated | From | To |
| --- | --- | --- |
| Ghost | 1.21.1 | 1.24.9 |
| Ghost-CLI | 1.5.2 | 1.8.1 |

- [Ubuntu 17.10](https://wiki.ubuntu.com/Releases) reached end of life today and is no longer available from the control panel or API.


### 18 July

- With the release of [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC3, private networks are restricted to each user account in all regions.


### 17 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC2.


### 16 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC1.

- We updated the [Debian 9](https://www.debian.org/News/2018/20180714) base image from 9.4 to 9.5. The image is available in the [control panel](https://cloud.digitalocean.com/droplets/new?4&distro=debian&distroImage=debian-9-x64&size=s-2vcpu-4gb&region=sfo2) and via the API using the slug `debian-9-x64`.


### 12 July

- We released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in SFO1 and SGP1.


### 11 July

- [Private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) continued with releases in LON1, AMS3, FRA1, and SFO2.

- Local disk size for the [1vCPU-Optimized Droplet plan (c-1vcpu-2gb)](https://docs.digitalocean.com/products/droplets/) increased from 20 GB to 25 GB.


### 10 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in AMS2, BLR1, and TOR1. Communication over the private network in those datacenters is now restricted to other resources within an account or team.


### 3 July

- The [FreeBSD 11.2](https://www.freebsd.org/releases/11.2R/relnotes.html) is now available through the [control panel](https://cloud.digitalocean.com/droplets/new?size=s-2vcpu-4gb&region=sfo2&distro=freebsd&distroImage=freebsd-11-2-x64-zfs) and through the API using the slug `freebsd-11-2-x64-zfs`.


### 1 July

- The [changes to Droplet bandwidth billing](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/) announced on April 24 were put into effect.


## June 2018

### 25 June

- Released [new documentation site](https://www.digitalocean.com/docs) for the DigitalOcean Control Panel with updated content and product-specific navigation and search to help readers more readily learn how to use DigitalOcean.


### 22 June

- [Spaces](https://docs.digitalocean.com/products/spaces/) will send billing data for active users within 2 hours of usage, down from a 4-5 day processing time. Previously, some users who were not billed for overages because of the processing delay may see their bill go up based on their actual usage.

- [GitLab One-Click application](https://www.digitalocean.com/community/tutorials/how-to-use-the-gitlab-one-click-install-image-to-manage-git-repositories) has been updated with the following changes:



| Updated | From | To |
| --- | --- | --- |
| Kernel | 4.4.0-119-generic | 4.4.0-128-generic |
| GitLab Community Edition | 10.6.4 dee2c87 | 11.0.0 b84bfb5 |

- New Domain resources can now be created via the DigitalOcean v2 API without providing an IP address. The previous behavior, which would automatically create an A record pointing to the apex domain, will be retained for backwards-compatibility when an IP address is provided.

This example demonstrates how to create a new domain without providing an IP address:


```
curl -X POST -H "Content-Type: application/json" \
      -H "Authorization: Bearer $DIGITALOCEAN_API_TOKEN" \
      -d '{"name":"example.com"}' \
      "https://api.digitalocean.com/v2/domains"
```


For more information, see the full [Domains API documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Domains).


### 19 June

- [Ruby on Rails One-Click application](https://www.digitalocean.com/community/tutorials/how-to-use-the-ruby-on-rails-one-click-application-on-digitalocean) has been updated with the following changes:



| Updated | From | To |
| --- | --- | --- |
| Kernel | 4.4.0-72-generic | 4.4.0-128-generic |
| Ruby | 2.4.0 | 2.4.1 |
| Rails | 5.0.2 | 5.2.0 |
| Nginx | 1.10.0 | 1.10.3 |

- [Debian 7 reached end of life](https://wiki.debian.org/LTS) and is no longer available from the control panel.


### 13 June

- We updated the RancherOS container image from 12.0 to 14.0. Learn more about the new version on [Rancher’s release page](https://github.com/rancher/os/releases/tag/v1.4.0).


### 11 June

- Expanded Droplet View allows customers using the Dashboard to click a Droplet and quickly view additional information about the Droplet without having to go to the Droplet Page. It also updates the list of Droplets to display at a glance whether Backups are on/off and if a Floating IP is attached.


### 5 June

- Released new Droplet feature to allow customers to boot Droplets from a Recovery ISO. Learn more in [How To Recover from File System Corruption Using Fsck and a Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/).


## May 2018

### 22 May

- Volumes for Ubuntu, Fedora, Debian 8+, CentOS, and Fedora Atomic can be [automatically formatted and mounted](https://docs.digitalocean.com/products/volumes/how-to/create/#format-and-mount-volumes) when they are created.

- The `/v2/volumes` endpoint has been updated to support automatically formatting the filesystem of newly created volumes. Volume resources now expose two new attributes: `filesystem_type` and `filesystem_label`. They can be used to specify the filesystem and the label to be applied. Currently, the available filesystem types are `ext4` and `xfs`.

For example, here is a request creating a new volume formatted with an EXT4 filesystem:


```
    curl -X POST \
    -d '{"name":"volume-nyc3-01","region":"nyc3","filesystem_type":"ext4","filesystem_label":"example","size_gigabytes": 100}' \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
    https://api.digitalocean.com/v2/volumes
```


Additionally, Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018 will now automatically mount volumes with pre-formatted filesystems when attached. Attaching pre-formatted volumes to other Droplets is not recommended. When the `filesystem_type` attribute is not provided, volumes will continue to be presented as raw block devices and require [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems).

When retrieving an existing volume, `filesystem_type` and `filesystem_label` will reflect the current filesystem and label used on the volume even if these were applied manually.

For more information, see the full API documentation for [Volumes](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage).


### 17 May

- Turned on Droplet Search in the top menu for all users. Allows users to quickly search for Droplets by name or IP address and go directly to the Droplet Page.


### 16 May

- Enabled users to [sign up and sign in with their Google accounts](https://www.digitalocean.com/community/questions/can-i-use-my-google-account-to-authenticate-to-digitalocean). DigitalOcean users can switch their accounts back and forth between password-based and Google-based authentication.


### 11 May

- Fixed issue with [2FA](https://docs.digitalocean.com/platform/accounts/2fa/) QR code generation for authenticator applications. Users with usernames over 26 characters were unable to generate a QR code. We now render up to 65 characters of a user’s entire email address and truncate if it is longer. This prevents errors for users with long email addresses, and renders more information in authenticator applications to help users with multiple accounts have more context.


### 8 May

- Load Balancers v1.5 is [released to general availability](https://blog.digitalocean.com/introducing-load-balancer-upgrades/) in all regions, including backend upgrades, Let’s Encrypt Integration, and HTTP/2 Support.

- Today, DigitalOcean released a number of [Load Balancer improvements](https://blog.digitalocean.com/introducing-load-balancer-upgrades) including support for using SSL/TLS certificates automatically generated by Let’s Encrypt. Our [Certificate management API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Certificates) has been updated to support automatically generating Let’s Encrypt certificates in addition to uploading custom, user-generated certificates.

A request to generate a new SSL/TLS certificate using Let’s Encrypt would look like:


````
      curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $DO_TOKEN" \
      -d '{"name": "le-cert-01", "type": "lets_encrypt", "dns_names": ["www.example.com","example.com"]}' \
      "https://api.digitalocean.com/v2/certificates"```
````


The new `type` attribute must be set to `lets_encrypt` when using Let’s Encrypt. If omitted, it will default to `custom` in order to maintain backwards compatibility. For additional details, see the Certificate management [API reference documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Certificates).

For more information on how to use Let’s Encrypt with DigitalOcean Load Balancers, see [this tutorial on our community site](https://www.digitalocean.com/community/tutorials/how-to-use-let-s-encrypt-with-digitalocean-load-balancers).


### 1 May

- [Fedora 28](https://docs.fedoraproject.org/en-US/fedora/f28/release-notes/) is now available using the slugs `fedora-28-x64` and `fedora-28-x64-atomic`. The images are [now public](https://cloud.digitalocean.com/droplets/new?distro=fedora&distroImage=fedora-28-x64&size=s-2vcpu-4gb&region=nyc3) to all users.


## April 2018

### 30 April

- Burst support rolled out to all nine [block storage](https://docs.digitalocean.com/products/volumes/) regions.

**Performance Expectations**



| Droplet Type | IOPS | Throughput |
| --- | --- | --- |
| Standard | 5K | 200 MB/s |
| Std (Burst) | 7.5K | 300 MB/s |
| Optimized | 7.5K | 300 MB/s |
| Optimized (Burst) | 10K | 350 MB/s |


### 27 April

- [Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/what-s-new-in-ubuntu-18-04) is now available through the [control panel](https://cloud.digitalocean.com/droplets/new?distro=ubuntu&distroImage=ubuntu-18-04-x64&size=s-2vcpu-4gb&region=nyc3) and via our API using the slug `ubuntu-18-04-x64`


### 24 April

- Changes to [Droplet Bandwidth Billing announced](https://www.digitalocean.com/community/tutorials/digitalocean-bandwidth-billing-faq). The new billing plan goes into effect June 1. Charges for June, if any, will appear on the July 1 bill. Customers can view usage and billing information on [their billing page](https://cloud.digitalocean.com/settings/billing).


### 20 April

- Debit cards from any country can be used for payment once a temporary pre-authorization charge of $1 is successful.


### 17 April

- [Spaces](https://docs.digitalocean.com/products/spaces/) users no longer need to cancel their Spaces subscription via the Spaces UI when they want to stop using Spaces. Now, any time a Spaces user destroys their last Space, their pro-rated $5/month billing (if not in the free trial period) stops. Overage charges still apply if they were incurred before deletion of the last Space.

- [1vCPU-Optimized Droplet](https://docs.digitalocean.com/products/droplets/#cpu-optimized-droplets) launched.


## March 2018

### 30 March

- Released the [MEAN One-Click application](https://www.digitalocean.com/community/tutorials/how-to-use-the-mean-one-click-install-image) on Ubuntu 16.04, configured to install using `docker-compose`.


### 20 March

- Launched the [new Dashboard experience](https://blog.digitalocean.com/introducing-control-panel-dashboard/) to the control panel. The Dashboard replaces the Droplets page as the new default home page of the control panel. It provides at-a-glance visibility into active resources, like Droplets, Spaces, load balancers, floating IPs, and domains, month-to-date current billing usage, shortcuts to team management, and other common tasks without having to navigate to different and often hard-to-find sections of the control panel.


### 14 March

- We improved notifications of when [credits are applied to an account](https://docs.digitalocean.com/platform/billing/promo-codes/).


## February 2018

### 15 February

- Resolved an issue where some Spaces customers were being rate limited even though they were well below the [rate limiting threshold](https://docs.digitalocean.com/products/spaces/).


### 12 February

- Added improvements to reduce timeouts on the Spaces API.

- Number of days left in your [60-day Spaces free trial](https://docs.digitalocean.com/products/spaces/#plans-and-pricing) is now shown on trial opt-in page and on details window.


### 9 February

- [The Ghost one-click](https://www.digitalocean.com/community/tutorials/how-to-set-up-the-digitalocean-ghost-one-click-application-for-ubuntu-16-04) was updated to [Ghost version 1.21.1](https://gist.github.com/kirrg001/2b9dc88cb7df7a0d4487abf45589c489).


### 6 February

- We have upgraded the [block storage](https://docs.digitalocean.com/products/volumes/) clusters in Bangalore and London to Ceph Luminous, reducing median cluster latency by 50%.


### 2 February

- [Deletion of a Space via the control panel is disallowed](https://docs.digitalocean.com/products/spaces/#limits) if there are 100,000 or more objects in the Space. Once the Space has less than 100,000 objects within, it can be deleted by the control panel.


## January 2018

### 29 January

- [Spaces](https://docs.digitalocean.com/products/spaces/) now support:


  - Version 4 of presigned URLs, allowing for easier use of 3rd party S3 compatible libraries.
  - Scheduled deletion of objects via bucket lifecycle methods in the Spaces API.
  - Previews of image, audio, and video files that are moused over in the control panel file browser.

### 25 January

- [Spaces](https://docs.digitalocean.com/products/spaces/) are now available in the Singapore (SGP1) region.


### 17 January

- Static site hosting and custom domains for Spaces have been released in private beta. Email [jgannon+static@do.co](mailto:jgannon+static@do.co) to participate.


### 16 January

- DigitalOcean [upgrades Memory, SSD and vCPU](https://blog.digitalocean.com/new-droplet-plans/) across all Standard, Flexible and Optimized Droplet plans.

- Today, we [announced wide-ranging changes](https://blog.digitalocean.com/new-droplet-plans) to our Droplet plans, bringing improved resources across the board. These new plans are now available via the API and can be referenced using their respective size slugs.

Size slugs are human-readable strings used to specify the type of Droplet in certain API requests. In the past, size slugs were typically based on the amount of RAM provided with the plan (e.g. `1gb`). Moving forward, we are standardizing on a format comprised of the identifier for the Droplet’s class, the vCPU count, and the amount of RAM in order to provide more flexibility in the plans we are able to offer you. For example, our new $5 per month Standard Droplet comes with 1 vCPU and 1 GB of RAM. So its size slug is. `s-1vcpu-1gb`.

Applications and scripts with hard-coded size slugs must be updated to take advantage of these new plans. In order to provide a transition period, 1st Generation Droplet plans will continue to be available via the API using the legacy size slugs. We will provide additional notice before their removal.

The table below shows the new 2nd Generation Standard Droplet plans along with their corresponding size slug. For always up-to-date information on available plans and pricing, see our [pricing page](https://www.digitalocean.com/pricing/).



| Class | Slug | vCPUs | RAM | Disk | Transfer | Monthly Price |
| --- | --- | --- | --- | --- | --- | --- |
| Standard | s-1vcpu-1gb | 1 | 1 GB | 25 GB | 1 TB | $5 |
| Standard | s-1vcpu-2gb | 1 | 2 GB | 50 GB | 2 TB | $10 |
| Standard | s-1vcpu-3gb | 1 | 3 GB | 60 GB | 3 TB | $15 |
| Standard | s-2vcpu-2gb | 2 | 2 GB | 60 GB | 3 TB | $15 |
| Standard | s-3vcpu-1gb | 3 | 1 GB | 60 GB | 3 TB | $15 |
| Standard | s-2vcpu-4gb | 2 | 4 GB | 80 GB | 4 TB | $20 |
| Standard | s-4vcpu-8gb | 4 | 8 GB | 160 GB | 5 TB | $40 |
| Standard | s-6vcpu-16gb | 6 | 16 GB | 320 GB | 6 TB | $80 |
| Standard | s-8vcpu-32gb | 8 | 32 GB | 640 GB | 7 TB | $160 |
| Standard | s-12vcpu-48gb | 12 | 48 GB | 960 GB | 8 TB | $240 |
| Standard | s-16vcpu-64gb | 16 | 64 GB | 1,280 GB | 9 TB | $320 |
| Standard | s-20vcpu-96gb | 20 | 96 GB | 1,920 GB | 10 TB | $480 |
| Standard | s-24vcpu-128gb | 24 | 128 GB | 2,560 GB | 11 TB | $640 |
| Standard | s-32vcpu-192gb | 32 | 192 GB | 3,840 GB | 12 TB | $960 |


Available Droplet plans, the resources they provide, and the size slug used to identify them can be accessed programmatically by querying the [`/v2/sizes` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/sizes_list).


### 9 January

- With the release in AMS3, we now have [volumes](https://docs.digitalocean.com/products/volumes/#regional-availability) in all regions.


## September 2017

### 13 September

- [Domain Record resources](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Domain-Records) have been updated to add support for CAA records. As specified in [RFC-6844](https://tools.ietf.org/html/rfc6844), this record type can be used to specify which certificate authorities (CAs) are permitted to issue certificates for a domain.

For example, in order to restrict TLS/SSL certificate creation for `example.com` to `letsencrypt.org`, you would use a request like:


```
    curl -X POST \
    -d '{"type":"CAA","name":"@","data":"letsencrypt.org.","priority":null,"port":null,"ttl":1800,"flags":0,"tag":"issue"}' \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
    https://api.digitalocean.com/v2/domains/example.com/records
```


For more information on how to use CAA records, see [this tutorial on our community site](https://www.digitalocean.com/community/tutorials/how-to-create-and-manage-caa-records-using-digitalocean-dns).


## April 2017

### 14 April

- Our API has been extended to support configuring the TTL value for individual domain records. This can be done when creating a new record as well as when updating an existing one via a `PUT` request. See the [domain record](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Domain-Records) documentation for further information.


## March 2017

### 28 March

- Our API currently offers the ability to “rename” a [tag](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags) by sending a PUT request to `/v2/tags/$TAG_NAME`. Due to low usage and operational complexities involved with its maintenance, we are deprecating this functionality. Beginning April 26th, 2017 all requests to this endpoint will respond with an HTTP status of 410 (Gone).
A tag’s name also serves as its unique identifier. We’ve found that the ability to change a tag’s name introduces unneeded complexity. If you need guidance on this transition, reach out to the team by [opening a support ticket](https://cloud.digitalocean.com/support/tickets/new).


## November 2016

### 10 November

- You may now pass `tags` as an attribute when creating one or more new Droplets. This optional parameter will create and apply the specified tag(s) to the newly created Droplet(s). For more information see [create Droplet documentation](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create).


## October 2016

### 5 October

- API v2 now supports volume snapshots, and exposes [a unified snapshot endpoint for volume and Droplet snapshots](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Snapshots).


## April 2016

### 13 April

- Size objects now contain a `size\_gigabytes` attribute which represents the physical size of the image in gigabytes. For more information see the [images documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/images).


## March 2016

### 22 March

- API v2 now supports [tagging and managing tagged droplets](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Tags).


## December 2015

### 14 December

- API v2 now supports [creating multiple droplets simultaneously](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create).


## November 2015

### 24 November

- Account objects now contain a `floating\_ip\_limit` attribute which provides the maximum number of floating IPs that may be provisioned by the account. For more information, see the [account documentation](https://docs.digitalocean.com/reference/api/digitalocean/#operation/account_get).


### 5 November

- API V2 now supports [enabling backups](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post) on a Droplet.


## July 2015

### 20 July

- Account objects now contain `status` and `status_message` attributes, describing whether an account is locked, active or has a pending warning. For more information, see the [account documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/account).


### 14 July

- We’ve deprecated final (temporary) snapshots and therefore `temporary` is no longer an acceptable value for `type` for a snapshot.


## May 2015

### 20 May

- The access token response from the OAuth API now returns a [canonical UUID for an account](https://docs.digitalocean.com/reference/api/oauth/#1-request-user-authorization). This should be used to canonically identify a user.


### 1 May

- Since releasing version 2 of our API nearly a year ago and officially bringing it out of beta last month, we’ve seen a tremendous uptake of usage by our community. As the ecosystem of [tools](https://www.digitalocean.com/community/projects) and [libraries](https://docs.digitalocean.com/reference/libraries/) continues to grow, we’ve decided that it is time to sunset version 1 of the API.

Don’t worry! We’re not going to pull the rug out from under you. In order to give everyone time to port their tools, version 1 will not be turned off until **Monday, November 9, 2015**.

With its (more) RESTful interface and features like OAuth support, v2 is both powerful and easy to use. Our [developer documentation](https://docs.digitalocean.com/reference/) should give you all the information you need to begin the transition. If you have questions, you can always ask on our [Community site](https://www.digitalocean.com/community) or on [Twitter](https://twitter.com/digitalocean).


## April 2015

### 2 April

- We are very pleased to announce that API v2 is no longer in beta. Thank you to everyone who helped report bugs and suggest features during the beta period. [Read more about this release on our blog](https://www.digitalocean.com/company/blog/apiv2-officially-leaves-beta/).


## March 2015

### 25 March

- The Image action endpoint now responds to a `convert` attribute, that allows backups and temporary snapshots to be saved permanently as snapshots. For more information, see the [image actions documentation](https://docs.digitalocean.com/reference/api/digitalocean/#operation/imageActions_post).


### 11 March

- Images objects now return a `type` attribute, describing whether they are snapshots, backups or temporary images. For more information, see the [images documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images).


### 4 March

- Size objects now expose an `available` boolean attribute, which represents whether new Droplets can be created with the size.


## February 2015

### 20 February

- All action objects, i.e. those returned by the `/v2/actions`, `/v2/droplets/$ID/actions` and `/v2/images/$ID/actions` endpoint now return a `region_slug` attribute, in addition to a `region` attribute. At **00:01 March 20, 2015 UTC**, API v2 will start returning an embedded region object at the `region` attribute, not a slug.

For example, the API request:


```
curl -X GET -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $DIGITALOCEAN_TOKEN' \
      "https://api.digitalocean.com/v2/actions?page=1&per_page=1"
```


would return:


```
{
    "actions": [\
      {\
        "id": 36804636,\
        "status": "completed",\
        "type": "create",\
        "started_at": "2014-11-14T16:29:21Z",\
        "completed_at": "2014-11-14T16:30:06Z",\
        "resource_id": 3164444,\
        "resource_type": "droplet",\
        "region": {\
          "name": "New York 3",\
          "slug": "nyc3",\
          "sizes": [\
            "32gb",\
            "16gb",\
            "2gb",\
            "1gb",\
            "4gb",\
            "8gb",\
            "512mb",\
            "64gb",\
            "48gb"\
          ],\
          "features": [\
            "virtio",\
            "private_networking",\
            "backups",\
            "ipv6",\
            "metadata"\
          ],\
          "available": true\
        },\
        "region_slug": "nyc3"\
      }\
    ],
    "links": {
      "pages": {
        "last": "https://api.digitalocean.com/v2/actions?page=159&per_page=1",
        "next": "https://api.digitalocean.com/v2/actions?page=2&per_page=1"
      }
    },
    "meta": {
      "total": 159
    }
}
```


### 10 February

- Two new endpoints in API v2 report if droplets are running on the same physical hardware. They exist for an [individual droplet](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_list_neighbors) or for an [entire account](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_list_neighborsIds).


### 8 February

- The maximum allowed rate limit per O-Auth token has been increased to 5,000 requests/hour.


## January 2015

### 22 January

- The [images](https://docs.digitalocean.com/reference/api/digitalocean/#operation/images_list) now supports a `private` filter which will allow you
to retrieve all images that are specific to your account (IE: backups and snapshots).

For more information, you can view the documentation for this endpoint [here](https://docs.digitalocean.com/reference/api/digitalocean/#operation/images_list).


### 20 January

- API V2 now validates SSH key IDs and identifiers passed into [the Droplet create call](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create). In addition, API V2 now validates that requested features are available for a Droplet (backups, private networking, IPv6 and user data).


## November 2014

### 6 November

- The API v2 now supports retrieving images by type, to retrieve an image by type, simply append:


```
GET /v2/images?type={distribution,application}
```


Change type to what you would like to retrieve and voilà!

[DropletKit](http://github.com/digitalocean/droplet_kit) (The Ruby API Client) also supports this functionality as well in Version 1.1.0

You can view the documentation for this feature [here](https://docs.digitalocean.com/reference/api/digitalocean/#operation/images_list).


## October 2014

### 27 October

- The JSON object for a droplet no longer contains a nested Size object, but rather a slug called `size_slug` that references a Size object. See the [droplet docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets) for the updated structure.

The Image JSON object now includes a `min_disk_size` attribute that contains the slug of the minimum size droplet required for that image. For example a snapshot of a 1 Gig droplet will have “1gb” as it’s `min_disk_size`.


## August 2014

### 20 August

- Remove embedded `action_ids` from Droplet and Image.


## July 2014

### 25 July

- Both `price_monthly` and `price_hourly` were previously strings. This made them harder to work with so we have turned them into floats.


### 2 July

- We have tweaked the `per_page` limits to default to 20 and be a maximum of 200. We have found in our testing, so far, for this to be a good balance of requests versus results.


## June 2014

### 25 June

- API V2 now supports [disabling backups](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post) on a Droplet.

- API V2 now supports [expanding a droplet’s](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post) disk size, along with other resources.

- Want to know which regions support IPv6 or Private Networking? It is now possible to check which features are enabled in each [region](https://docs.digitalocean.com/reference/api/digitalocean/#operation/regions_list).


### 24 June

- It seems adding `X-` to custom HTTP headers is going out of [style](https://tools.ietf.org/html/rfc6648), so we have changed our RateLimit headers to no longer include the X.

They now look like this:


```
RateLimit-Limit:
RateLimit-Remaining:
RateLimit-Reset:
```


In this article...

[Release Notes](https://docs.digitalocean.com/release-notes/)

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