---
url: "https://docs.digitalocean.com/release-notes/droplets/"
title: "Droplets | DigitalOcean Documentation"
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

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplets Release Notes

Validated on 20 Nov 2025

## Upcoming Changes

- Starting 1 January 2026, [Droplets](https://docs.digitalocean.com/products/droplets/) are billed per-second, with a minimum charge of 60 seconds or $0.01, whichever is higher.


## November 2025

### 20 November

- AMD [Instinct MI325X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) are now available in NYC2 by contract only in 1- and 8-GPU configurations for single- and multi-node GPU Droplets. To create GPU Droplets with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 19 November

- Fedora 41 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 3 November

- An [Ubuntu 25.10](https://canonical.com/blog/canonical-releases-ubuntu-25-10-questing-quokka) (`ubuntu-25-10-x64`) base image is now available in the control panel and via the API.


## October 2025

### 17 October

- GPU Droplets with NVIDIA H200 GPUs are now available in ATL1. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 1 October

- Now in public preview, you can [customize a usage-based backup plan](https://docs.digitalocean.com/products/backups/how-to/enable/) for regular and GPU Droplets. This plan’s cost is based on the amount of storage your backups use, instead of a flat percentage of the Droplet’s cost. Additionally, you can configure how often backups happen and for how long you retain them.


## September 2025

### 30 September

- We have released 25 additional CPU Optimized and General Purpose [Droplet plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/). These are new storage variants of existing plans with enough disk to let you resize a Shared CPU Droplet into a Dedicated CPU Droplet:


  - Dedicated CPU Optimized Regular: 5x SSD variant
  - Dedicated CPU Optimized Premium: 5x SSD variant
  - Dedicated General Purpose Regular: 6.5x SSD variant
  - Dedicated General Purpose Premium: 5.5x SSD variant

The new plans are available in all datacenters. However, Regular CPU versions are not available in ATL1.

You can choose the new plans using the control panel and the API.

### 26 September

- GPU Droplets with NVIDIA H100 GPUs are now available in AMS3. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 13 September

- A [Debian 13](https://www.debian.org/releases/trixie/release-notes/) (`debian-13-x64`) base image is now available in the control panel and via the API.


### 11 September

- A [CentOS Stream 10](https://www.centos.org/centos10/) (`centos-stream-10-x64`) base image is now available in the control panel and via the API.


### 10 September

- [Basic Droplets](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/) with 512MB/1CPU are now available in `BLR1`, `LON1`, `NYC3`, and `TOR1` datacenters.


## August 2025

### 19 August

- [Rocky 10](https://rockylinux.org/download/) (`rockylinux-10-x64`) base image is now available in the control panel and via the API.


### 18 August

- The [AlmaLinux 10](https://almalinux.org/get-almalinux/) (`almalinux-10-x64`) base image is now available in the control panel and via the API.


### 8 August

- NVIDIA [H200 GPUs](https://www.nvidia.com/en-us/data-center/h200/) are now available in 1- and 8-GPU configurations for GPU Droplets via the control panel and via the API using slugs `gpu-h200x1-141gb` (1 GPU) and `gpu-h200x8-1128gb` (8 GPUs). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


## July 2025

### 23 July

- [`bullseye-backports`](https://backports.debian.org/Instructions/) for Debian 11 [reached end of life on 10 June 2024](https://lists.debian.org/debian-backports-announce/2024/07/msg00000.html). Because our Debian 11 image depends on this package, we have deprecated this image.

Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

To fix package manager issues on existing Debian 11 Droplets, [edit the APT sources list](https://wiki.debian.org/SourcesList#Editing_software_sources) to change the repository URL for `bullseye-backports` from `deb.debian.org` to [the distribution archive, `archive.debian.org`](https://www.debian.org/distrib/archive). For example, you can run `sudo sed -i '/bullseye-backports/s/deb.debian.org/archive.debian.org/' /etc/apt/sources.list`
.


### 22 July

- An inference-optimized image for GPU Droplets is now availalbe in the control panel. This image includes Docker, vLLM, built-in support for Hugging Face model downloads, and more features for LLM setup and deployment.


### 21 July

- An [Ubuntu 25.04](https://canonical.com/blog/canonical-releases-ubuntu-25-04-plucky-puffin) (`ubuntu-25-04-x64`) base image is now available in the control panel and via the API.


### 17 July

- A [Fedora 42](https://fedoraproject.org//en/workstation/download/) (`fedora-42-x64`) base image is now available in the control panel and via the API.


### 15 July

- AMD [Instinct MI325X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) are now available by contract only in 1- and 8-GPU configurations for GPU Droplets. To create GPU Droplets with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


## June 2025

### 30 June

- Ubuntu 20.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- We have updated the versions of some drivers and software in the [AI/ML-ready images for NVIDIA GPU Droplets](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/):


  - `nvidia-container-toolkit=1.17.0` to `nvidia-container-toolkit=1.17.8-1`
  - `cuda-drivers-535` to `cuda-drivers-575`
  - `cuda-toolkit-12-1` to `cuda-toolkit-12-9`
  - `bzip2` (8 GPU Droplets only)
  - `MLNX_OFED_LINUX-23.10-1.1.9.0-ubuntu22.04-x86_64` to `MLNX_OFED_LINUX-23.10-4.0.9.1-ubuntu22.04-x86_64`
  - `nvidia-fabricmanager-535` to `nvidia-fabricmanager-575`

### 12 June

- AMD [Instinct MI300X GPUs](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html) are now available in 1- and 8-GPU configurations for GPU Droplets via the control panel and via the API using slugs `gpu-mi300x1-192gb` (1 GPU) and `gpu-mi300x8-1536gb` (8 GPUs). [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


## May 2025

### 13 May

- Fedora 40 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 7 May

- NVIDIA [RTX 4000 Ada](https://www.nvidia.com/en-us/products/workstations/rtx-4000/) and [RTX 6000 Ada](https://www.nvidia.com/en-us/products/workstations/rtx-6000/) GPUs are now available for GPU Droplets via the control panel and via the API using slugs `gpu-4000adax1-20gb` and `gpu-6000adax1-48gb` respectively. [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


## March 2025

### 27 March

- [NVIDIA L40S GPUs](https://www.nvidia.com/en-us/data-center/l40s/) are now available for GPU Droplets via the control panel and via the API using the slug `gpu-l40sx1-48gb`. [Learn more about GPU Droplet plans](https://docs.digitalocean.com/products/droplets/details/features/#gpu-droplets).


### 6 March

- SMTP ports 465 and 587 are now blocked on Droplets.


## February 2025

### 20 February

- Droplet [autoscale pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/) now support shared CPU Basic Droplets. Previously, they only supported dedicated CPU Droplet plans.


## January 2025

### 16 January

- When autoscale pools scale down, they now issue a shutdown event and wait 60 seconds before issuing a destroy event. You can use this time to perform cleanup operations, gracefully close connections, or other actions. [Learn more about autoscale pool scaling](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/).


## December 2024

### 18 December

- Droplet [autoscale pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/) are now available. Autoscale pools enable automatic horizontal autoscaling based on resource utilization.


### 16 December

- Fedora 39 reached end of life on 26 November 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 13 December

- Premium Intel CPUs for Basic Droplets are now available in SFO2.


## October 2024

### 18 October

- [Basic Droplet plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/) with a 1:4 vCPU:RAM ratio are now available in NYC1, SGP1, and LON1. [Learn more about Droplet availability](https://docs.digitalocean.com/products/droplets/details/availability/).


### 10 October

- A [Ubuntu 24.10](https://discourse.ubuntu.com/t/oracular-oriole-release-notes/44878) (`ubuntu-24-10-x64`) base image is now available in the control panel and via the API.


### 6 October

- A [Fedora 41](https://docs.fedoraproject.org/en-US/releases/f41/) (`fedora-41-x64`) base image is now available in the control panel and via the API.


### 1 October

- [GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). GPU Droplets have NVIDIA H100 GPUs, and we provide an AI/ML-ready base image with NVIDIA drivers and software preinstalled to help you get started.


## September 2024

### 18 September

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

## August 2024

### 30 August

- GPU worker nodes are now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for select DOKS customers. For more information, see [GPU Worker Nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/).


### 12 August

- We have increased the volume attach limit for Droplets from 7 to 15. The limit for DOKS nodes is still 7, but we’re working to increase this as well.


### 1 August

- Premium CPUs for CPU-Optimized Droplets are now available in LON1 and SGP1.

- Premium CPUs for General Purpose Droplets are now available in LON1 and SGP1.

- Premium CPUs for Memory-Optimized Droplets are now available in AMS3, LON1, SFO3, and SGP1.

- Premium CPUs for Storage-Optimized Droplets are now available in AMS3, LON1, SFO3, and SGP1.


## July 2024

### 11 July

- Ubuntu 23.10 reached end of life on 11 July 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 8 July

- Debian 10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 4 July

- Centos 7 reached end of life on 4 July 2024. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## June 2024

### 27 June

- [Fedora 40](https://docs.fedoraproject.org/en-US/releases/f40/) (`fedora-40-x64`) base image is now available in the control panel and via the API.


### 6 June

- Centos Stream 8 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## May 2024

### 30 May

- We have released an updated Ubuntu 24.04 image that fixes a problem with `journald`. If you created a Ubuntu 24.04 Droplets on or before 30 May 2024, you can run `sudo systemctl restart systemd-journald` once as a workaround for the patch.


### 14 May

- Fedora 38 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## April 2024

### 30 April

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


### 25 April

- The [Ubuntu 24.04 LTS](https://discourse.ubuntu.com/t/noble-numbat-release-notes/39890) (`ubuntu-24-04-x64`) base image is now available in the control panel and via the API.


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


## January 2024

### 20 January

- Ubuntu 23.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## December 2023

### 5 December

- Fedora 37 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## November 2023

### 27 November

- The [Fedora 39](https://docs.fedoraproject.org/en-US/fedora/f39/release-notes/) (`fedora-39-x64`) base image is now available in the control panel and via the API.


## October 2023

### 25 October

- We have disabled password-based authentication for newly created Alma 9 Droplets due to an incompatibility between Alma 9’s password authentication mechanism and DigitalOcean’s provisioning system.

SSH-based login remains available. Previously created Alma 9 Droplets are not affected.

- We have disabled password-based authentication for newly created Rocky 8 Droplets due to an incompatibility between Rocky 8’s password authentication mechanism and DigitalOcean’s provisioning system.

SSH-based login remains available. Previously created Rocky 8 Droplets are not be affected.

- The [Ubuntu 23.10](https://discourse.ubuntu.com/t/mantic-minotaur-release-notes/35534) (`ubuntu-23-10-x64`) base image is now available in the control panel and via the API.


### 17 October

- Backups now remain available for four weeks even if the associated Droplet is deleted. Previously, deleting a Droplet would also delete its backups.

You can view your backups and their expiration dates in the [control panel](https://cloud.digitalocean.com/images/backups) and [convert them to snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/).


### 11 October

- Premium CPUs for General Purpose Droplets are now available in AMS3 and SFO3.


## September 2023

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


### 25 September

- The [Ubuntu 23.04](https://discourse.ubuntu.com/t/lunar-lobster-release-notes/31910) (`ubuntu-23-04-x64`) base image is now available in the control panel and via the API.


## August 2023

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

### 20 July

- The Ubuntu 22.10 distribution has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 17 July

- Ubuntu 18.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 6 July

- Fedora 36 reached end of life on 18 May 2023. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 July

- We no longer bill for outbound data transfer that we determine is dropped by a DigitalOcean firewall rule. Learn more about [bandwidth billing](https://docs.digitalocean.com/platform/billing/bandwidth/).


## June 2023

### 27 June

- The [Debian 12](https://www.debian.org/News/2023/20230610) (`debian-12-x64`) base image is now available in the control panel and via the API.

- Rocky 8.4 and 8.5 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


## May 2023

### 16 May

- Premium Intel CPUs are now available for CPU-Optimized Droplets in TOR1.


### 4 May

- The [Fedora 38](https://getfedora.org/en/workstation/download/) (`fedora-38-x64`) base image is now available in the control panel and via the API.


## April 2023

### 18 April

- Premium Intel CPUs are now available for CPU-Optimized Droplets in BLR1.


## March 2023

### 27 March

- The largest CPU-Optimized Droplet plan is now available in BLR1.


### 24 March

- We have extended the promotional period for CPU-Optimized Droplets with Premium Intel CPUs (no billing for outbound data transfer at speeds faster than 2 Gbps) from 30 April 2023 to 30 June 2023. [Learn more about bandwidth billing.](https://docs.digitalocean.com/platform/billing/bandwidth/)


### 23 March

- Premium Intel CPUs are now available for CPU-Optimized Droplets in SFO2.


## February 2023

### 22 February

- Premium Intel CPUs are now available for CPU-Optimized Droplets. You can create CPU-Optimized Droplets with Premium Intel CPUs in NYC1, NYC3, FRA1, AMS3, SFO3, and SYD1.

Compared to CPU-Optimized Droplets with Regular Intel CPUs, CPU-Optimized Droplets with Premium Intel CPUs have the latest hardware and five times more network throughput.

Additionally, for a promotional period from 1 February through 30 April 2023, we will not bill for outbound data transfer at speeds faster than 2 Gbps for CPU-Optimized Droplets with Premium Intel CPUs. [Learn more about bandwidth billing.](https://docs.digitalocean.com/platform/billing/bandwidth/)

You can use this plan for both standalone Droplets and Kubernetes nodes. You can also resize your existing Droplets to this node plan.


## January 2023

### 5 January

- Fedora 35 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## December 2022

### 15 December

- RancherOS is now [fully deprecated](https://docs.digitalocean.com/products/droplets/details/image-deprecation/) on our platform and is no longer available in the control panel or API.


## November 2022

### 16 November

- The [Fedora 37](https://getfedora.org/en/workstation/download/) (`fedora-37-x64`) base image is now available in the control panel and via the API.


## October 2022

### 27 October

- [AlmaLinux OS](https://almalinux.org/) versions 8.6 and 9 base images are now available in the control panel and via the API.


### 24 October

- The [Ubuntu 22.10](https://discourse.ubuntu.com/t/kinetic-kudu-release-notes/27976) (`ubuntu-22-10-x64`) base image is now available in the control panel and via the API.


### 17 October

- Premium AMD Droplets now also include servers powered by third generation AMD EPYC processors.


## September 2022

### 20 September

- When you create a Droplet using the API (`POST /v2/droplets`), you can now specify a region (like NYC) instead of a specific datacenter (like NYC3). The API then creates your Droplet in any available datacenter within your specified region. For example, if you want to create a Droplet in San Francisco, you can use the region `sfo` to guarantee that the Droplet will be in SFO1, SFO2, or SFO3. Additionally, you can omit the region entirely (or set it to an empty string) to create a Droplet in any available region.


### 9 September

- The [Rocky 9](https://rockylinux.org/download/) (`rockylinux-9-x64`) base image is now available in the control panel and via the API.


## August 2022

### 18 August

- A new CPU-Optimized Droplet plan with more computing power is now available. This plan features 48 vCPUs (up from the previous maximum of 32) and 96 GB of memory (up from the previous maximum of 64).

This large CPU-Optimized Droplet plan is available [where CPU-Optimized Droplets are already available](https://docs.digitalocean.com/platform/regional-availability/), except for BLR1 and SFO2.

You can use this plan for both standalone Droplets and Kubernetes nodes. You can also [resize your existing Droplets to this node plan](https://docs.digitalocean.com/products/droplets/how-to/resize/).


### 10 August

- Debian 9 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is now only available via the API. We will remove the Debian 9 image from our platform in 30 days.

- Ubuntu 21.10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 8 August

- The [Rocky 8.6](https://rockylinux.org/download/) (`rockylinux-8-x64`) base image is now available in the control panel and via the API.


## July 2022

### 12 July

- The DigitalOcean API now supports listing Droplets by name by using the `name` query parameter, as in `GET /v2/droplets?name="your_droplet_name"`. Learn more in the [API documentation](https://docs.digitalocean.com/reference/api/digitalocean/).


### 7 July

- Fedora 34 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 July

- The following pricing changes are now in effect:


  - A new $4 Droplet with 512MB of memory, 10GB of storage, 1 vCPU, and 500GB of outbound data transfer is now available in NYC1, FRA1, SFO3, SGP1, and AMS3. The slug is `s-1vcpu-512mb-10gb`.

  - We have simplified pricing for DigitalOcean Kubernetes and some managed databases for better accuracy and predictibility.

  - The prices of Droplets, Snapshots, Load Balancers, Reserved IPs, and Custom Images have increased.


There is no change to pricing for Spaces, backups, volumes, DigitalOcean Container Registry, or App Platform. There are also no changes to inbound data transfer or bandwidth pricing.

This is our first major price change in 10 years, and we believe the new model better fits our understanding of our customers and the expanded breadth of our offerings. For a more detailed breakdown of the changes, see [our blog post on our new pricing](https://www.digitalocean.com/blog/new-4-dollar-droplet-updated-pricing).

## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 22 June

- SMTP (port 25) is now blocked for all new accounts. [Learn more about SMTP blocking](https://docs.digitalocean.com/support/why-is-smtp-blocked/).


### 6 June

- When creating a Droplet via the API, we now release the Droplet’s IP address when it is in the `active` state, instead of the `new` state.


### 1 June

- We have deprecated the FreeBSD image on our platform. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is now only available via the API. We will remove the Fedora 34 image from our platform in 30 days.


## April 2022

### 25 April

- The [Ubuntu 22.04 LTS](https://discourse.ubuntu.com/t/jammy-jellyfish-release-notes/24668) (`ubuntu-22-04-x64`) base image is now available in the control panel and via the API.


## March 2022

### 29 March

- Basic Droplets can now have Regular AMD CPUs. Additionally, you can now change between Premium AMD and Premium Intel CPUs when resizing Droplets. Learn more about [resizing Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/) and [how to choose a Droplet plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).


### 22 March

- The [Centos Stream 9](https://centos.org/stream9) (`centos-stream-9-x64`) base image is now available in the control panel and via the API.


## January 2022

### 18 January

- FreeBSD 11.4 (zfs and ufs), Fedora 33, CentOS 8, and Ubuntu 21.04 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


## December 2021

### 8 December

- The [Rocky Linux 8.5 x64](https://docs.rockylinux.org/release_notes/8.5/) (`rockylinux-8-x64`) base image is now available in the control panel and via the API.


## November 2021

### 15 November

- The [Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) now supports running the SSH daemon, `sshd`, on a custom port. Previously, it required `sshd` to listen on port 22.


### 9 November

- The [Fedora 35](https://docs.fedoraproject.org/en-US/fedora/f35/release-notes/) base image is now available in the control panel and via the API.

- General Purpose Droplets are now [available in BLR1](https://docs.digitalocean.com/platform/regional-availability/).


## October 2021

### 25 October

- Ubuntu 20.10 has reached its end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- The [Ubuntu 21.10](https://discourse.ubuntu.com/t/impish-indri-release-notes/21951) base image is now available in the control panel and via the API.


## September 2021

### 27 September

- The [Debian 11.0](https://www.debian.org/News/2021/20210814) base image is now available in the control panel and via the API.


## August 2021

### 9 August

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

- The [Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) is now in General Availability.


### 2 August

- [CentOS Linux is reaching end of life](https://blog.centos.org/2020/12/future-is-centos-stream/); CentOS Linux 8 reaches EOL at the end of 2021 and there will be no CentOS Linux 9. As potential replacements, we have released two new Linux distributions for Droplets: [CentOS Stream 8](https://www.centos.org/centos-stream/) (`centos-stream-8-x64`) and [Rocky Linux 8.4 x64](https://rockylinux.org/) (`rockylinux-8-x64`).


## June 2021

### 10 June

- The new Droplet Console is now in private beta. The Droplet Console gives you one-click SSH access to your Droplet from within a web browser, so you don’t need a password or SSH keys to connect.


## May 2021

### 26 May

- Fedora 32 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.

- Ubuntu 16.04 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 17 May

- Storage-Optimized Droplets are now available in SGP1.


## April 2021

### 27 April

- Premium AMD Droplets are now available in NYC1, SGP1, AMS3, BLR1, LON1, and TOR1. You can view the availability of all of our products by datacenter on the [regional availability page](https://docs.digitalocean.com/platform/regional-availability/).

- The [Fedora 34](https://docs.fedoraproject.org/en-US/fedora/f34/release-notes/) base image is now available in the control panel and via the API.


### 26 April

- The [Ubuntu 21.04](https://discourse.ubuntu.com/t/hirsute-hippo-release-notes/19221) base image is now available in the control panel and via the API.


### 9 April

- With the completion of datacenter work, we have re-enabled resizing between regular and premium Intel Droplets in NYC3 and SGP1.


## March 2021

### 9 March

- Storage Optimized Droplets are now available in TOR1 and BLR1.


## February 2021

### 22 February

- Our [Basic Droplet plans](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) now include Premium Intel and AMD Droplets, which have faster Intel and AMD CPUs and NVMe SSDs. Premium Intel plans are available in all regions, and Premium AMD plans are available in NYC3, SFO3, and FRA1.

All users can create Premium Droplets, resize from Regular Intel Droplets to Premium Intel Droplets, and create Premium Droplets as worker nodes in Kubernetes clusters. Resizing between Regular Intel Droplets to Premium Intel Droplets is disabled in NYC3 and SGP1 until the end of March 2021.


### 11 February

- FreeBSD 12.1 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## December 2020

### 7 December

- CentOS 6 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 1 December

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


### 18 November

- Droplet-related error messages now display on the Droplet’s **History** page in the control panel.


### 10 November

- We have reduced the prices of Memory-Optimized Droplets by about 11%. Existing Memory-Optimized Droplets will be charged at the lowered price from the month of November on, reflected in the December invoice.

- We have released Storage-Optimized Droplet plans. Storage-Optimized Droplets have NVMe SSD storage and are best for extra-large databases, caches, and analytics workloads.

All users can now create Storage-Optimized Droplets in AMS3, FRA1, LON1, NYC1, and SFO3 using the control panel, API, or CLI. The slugs for the new plans are `so-2vcpu-16gb`, `so-4vcpu-32gb`, `so-16vcpu-64gb`, `so-24vcpu-128gb`, and `so-32vcpu-256gb`.


### 4 November

- [FreeBSD 12.2](https://www.freebsd.org/releases/12.2R/announce.html) UFS and ZFS base images are now available in the control panel and via the API. We have replaced the image slug for the UFS FreeBSD image, `freebsd-12-x64`, with `freebsd-12-x64-ufs`. Our support for 12.1 continues for three months after the release date of 12.2, which is currently scheduled for 31 January 2021.


## October 2020

### 27 October

- The [Fedora 33](https://fedoramagazine.org/announcing-fedora-33/) base image is now available in the control panel and via the API.


### 26 October

- You can now [change the default VPC network for a region](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/). When you change the default VPC network for a region, the new default network will be automatically selected during applicable resource set ups unless otherwise specified.


### 22 October

- The [Ubuntu 20.10](https://discourse.ubuntu.com/t/groovy-gorilla-release-notes/15533) base image is now available in the control panel and via the API.


### 1 October

- All Droplets created after 1 October 2020 are [placed into a VPC network by default](https://docs.digitalocean.com/products/networking/vpc/). You can no longer manually enable VPC networking on existing Droplets. You can [migrate existing Droplets into VPC networks using Snapshots](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/).


## September 2020

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

### 4 August

- We have released a Droplet [metadata endpoint](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/) which returns whether or not a Droplet is scheduled for a [live migration](https://docs.digitalocean.com/products/droplets/details/live-migration/#how-to-check-for-scheduled-live-migrations). The impact of live migrations on Droplets is minimal, so users now only receive direct notifications for migrations that require us to power down a Droplet, which (except in emergencies) we send 7 days in advance.


### 1 August

- Ubuntu 19.10 has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


## July 2020

### 31 July

- Memory-Optimized Droplets are [now available for the BLR1 datacenter region](https://docs.digitalocean.com/platform/regional-availability/#droplet-plan-availability).


### 23 July

- The [FreeBSD 11.4](https://www.freebsd.org/releases/11.4R/announce.html) UFS and ZFS base images are now available in the control panel and via the API.


### 22 July

- Memory-Optimized Droplets are now in [general availability](https://docs.digitalocean.com/platform/regional-availability/) and are available in the SFO3 and TOR1 datacenter regions.


## May 2020

### 26 May

- CoreOS Container Linux has reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), this image is available exclusively via the API for the next 30 days before we remove it from our platform.


### 15 May

- Users can now search for Marketplace apps directly from the Droplet Create page.


### 12 May

- The ability to choose a [root password during Droplet creation](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication) has been reinstated.


## April 2020

### 29 April

- Users can now [use the API to destroy select resources associated with a Droplet](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_destroy_withAssociatedResourcesSelective) when destroying a Droplet. You can destroy snapshots, volumes, or volume snapshots associated with a Droplet.


### 28 April

- The [Fedora 32](https://fedoramagazine.org/announcing-fedora-32/) base image is now available in the control panel and via the API.

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 23 April

- The [Ubuntu 20.04 LTS](https://wiki.ubuntu.com/FocalFossa/ReleaseNotes) base image is now available in the control panel and via the API.


### 22 April

- The option to set your own root password during Droplet creation has been temporarily removed. You can still choose to connect to your Droplet using an [SSH key or an automatically-generated password via email](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication).


### 21 April

- You can now [choose a root password](https://docs.digitalocean.com/products/droplets/how-to/create/#authentication) during Droplet creation rather than receiving an automatically-generated password via email.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## March 2020

### 16 March

- Updated the Droplet-based [Marketplace WordPress 1-Click App](https://marketplace.digitalocean.com/apps/wordpress) to now use PHP 7.4 and MySQL server 8.0.19.


### 13 March

- Users who create a 1-Click App can now access the instructions for their app by clicking the **Get Started** link next to their Droplet on the project homepage.


### 12 March

- You can now only [rebuild Droplets from images](https://docs.digitalocean.com/products/droplets/how-to/rebuild/) that use an OS that resides in the same OS family as the Droplet being rebuilt. For example, a Droplet running Ubuntu 16 can be rebuilt from an image running Ubuntu 18, but it cannot be built from an image running Debian.


### 11 March

- The Debian [10.3](https://www.debian.org/News/2020/20200208) and [9.12](https://www.debian.org/News/2020/2020020802) base images are now available in the control panel and via the API.


### 9 March

- Users can now [destroy select resources associated with a Droplet](https://docs.digitalocean.com/products/droplets/how-to/destroy/#destroy-droplet-and-its-associated-resources) when destroying a Droplet.


## February 2020

### 24 February

- We began the incremental release of a feature that allows users to destroy select resources associated with a Droplet when they destroy the Droplet.


## January 2020

### 30 January

- Ubuntu 19.04, FreeBSD 12.0, Fedora 28, Fedora 28 Atomic, and Fedora 29 have reached end of life. Per our [image deprecation policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/), these images are available exclusively via the API for the next 30 days before we remove them from our platform.


### 24 January

- The [RancherOS 1.5.5](https://github.com/rancher/os/releases/tag/v1.5.5) base image is now available in the control panel and via the API.


### 22 January

- The [CentOS 8.1](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS8.1911) base image is now available in the control panel and via the API.


## December 2019

### 18 December

- The [Fedora 31](https://fedoramagazine.org/announcing-fedora-31/) base image is now available in the control panel and via the API.


### 17 December

- The [Debian 10.2](https://www.debian.org/News/2019/20191116) base image is now available in the control panel and via the API.


### 12 December

- The [FreeBSD 12.1 (ufs & zfs)](https://www.freebsd.org/releases/12.1R/relnotes.html) base image is now available in the control panel and via the API.


## November 2019

### 8 November

- Memory-Optimized Droplets are now available in the SGP1 datacenter region. See [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet) for more information.


### 4 November

- General Purpose Droplets are now available in the LON1 datacenter region. See [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-general-purpose-droplet) for more information.


## October 2019

### 31 October

- Memory-Optimized Droplets are now in [general availability](https://docs.digitalocean.com/platform/regional-availability/) and are available in the NYC1 and SFO2 datacenter regions.


### 21 October

- The [Ubuntu 19.10](https://wiki.ubuntu.com/EoanErmine/ReleaseNotes) base image is now available in the control panel and via the API.


## September 2019

### 10 September

- [Memory-Optimized Droplets](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet) are now in Limited Availability in the NYC3 and AMS3 regions. See [Introducing Memory-Optimized Droplets with 8 GB RAM for Each Dedicated vCPU](https://blog.digitalocean.com/introducing-memory-optimized-droplets/) to learn more.


## August 2019

### 14 August

- We have updated the default Ubuntu x64 base image from 18.04.1 to 18.04.3. For details about 18.04.3, see the [Ubuntu release notes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes).


## July 2019

### 12 July

- We have updated the [FreeBSD 12 (ufs & zfs)](https://www.digitalocean.com/products/linux-distribution/freebsd/) images to fix a bug related to private networking and SSH keys.

- The [FreeBSD 11.3](https://www.freebsd.org/releases/11.3R/relnotes.html) base image is now available in the control panel and via the API.


### 8 July

- The [Debian 10 (buster)](https://www.debian.org/releases/buster/amd64/release-notes/index.en.html) base image is now available in the control panel and via the API.


## June 2019

### 17 June

- 6-hour and 1-day [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/) for Droplets and Kubernetes worker nodes have been deprecated. No new alert policies with these intervals can be created. Existing alert policies using these intervals will remain in place until 1 August 2019, at which point they will be modified to reflect a 1-hour interval.


### 3 June

- We have updated the RancherOS base image from v1.5.1 to [v1.5.2](https://github.com/rancher/os/releases) in the control panel and API.


## May 2019

### 22 May

- [FreeBSD 12.0](https://www.freebsd.org/releases/) (ufs & zfs) base images are now available in the control panel and via the API.

- [FreeBSD 10.4](https://www.freebsd.org/releases/) (ufs & zfs) has reached end of life and is no longer available from the control panel.

- [Fedora 27](https://fedoraproject.org/wiki/Releases) reached end of life and is no longer available from the control panel.


### 1 May

- [Fedora 30](https://docs.fedoraproject.org/en-US/fedora/rawhide/release-notes/) base images are now available in the control panel and via the API using the slug `fedora-30-x64`.


## April 2019

### 30 April

- [Ubuntu 14.04](https://wiki.ubuntu.com/Releases) reached end of life and is no longer available from the control panel.


### 18 April

- [Ubuntu 19.04](https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes) base images are now available in the [control panel](https://cloud.digitalocean.com/droplets/new) and via [the API](https://docs.digitalocean.com/reference/) using the slug `ubuntu-19-04-x64`.


### 2 April

- General Purpose Performance Droplet plans are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) with the addition of [SFO2, AMS3, and SGP1](https://docs.digitalocean.com/platform/regional-availability/).


## March 2019

### 30 March

- [Debian 8 has reached end of life](https://lists.debian.org/debian-cloud/2018/10/msg00045.html). We have removed the Debian 8 base image from the control panel and API.


## February 2019

### 26 February

- [General Purpose Performance Droplet plans](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) were released.


## October 2018

### 18 October

- [Ubuntu 18.10](https://wiki.ubuntu.com/CosmicCuttlefish/ReleaseNotes) base images are now available in the [control panel](https://cloud.digitalocean.com/) and via the API using the slug `ubuntu-18-10-x64`.


## September 2018

### 10 September

- [Ubuntu 18.04](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes/ChangeSummary/18.04.1) is now the default image when [creating new Droplets](https://cloud.digitalocean.com/droplets/new) from the control panel.


## August 2018

### 14 August

- Discontinued the [CPU-optimized Droplet 2 GB/1vCPU plan](https://docs.digitalocean.com/products/droplets/).

- The [Recovery Console](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-console/) now supports pasting information into the console.


### 1 August

- We have enabled the [192 GB Standard Droplet plan](https://docs.digitalocean.com/products/droplets/#plans-and-pricing) in AMS3, BLR1, FRA1, LON1, NYC3, NYC1, SGP1, SFO2, and TOR1.


## July 2018

### 27 July

- We have updated the default Ubuntu x64 base image from 16.04.4 to 18.04.1. For details about 18.04.1, see the [Ubuntu release notes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes).


### 19 July

- [Ubuntu 17.10](https://wiki.ubuntu.com/Releases) reached end of life today and is no longer available from the control panel or API.


### 16 July

- We updated the [Debian 9](https://www.debian.org/News/2018/20180714) base image from 9.4 to 9.5. The image is available in the [control panel](https://cloud.digitalocean.com/droplets/new?4&distro=debian&distroImage=debian-9-x64&size=s-2vcpu-4gb&region=sfo2) and via the API using the slug `debian-9-x64`.


### 11 July

- Local disk size for the [1vCPU-Optimized Droplet plan (c-1vcpu-2gb)](https://docs.digitalocean.com/products/droplets/) increased from 20 GB to 25 GB.


### 3 July

- The [FreeBSD 11.2](https://www.freebsd.org/releases/11.2R/relnotes.html) is now available through the [control panel](https://cloud.digitalocean.com/droplets/new?size=s-2vcpu-4gb&region=sfo2&distro=freebsd&distroImage=freebsd-11-2-x64-zfs) and through the API using the slug `freebsd-11-2-x64-zfs`.


### 1 July

- The [changes to Droplet bandwidth billing](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/) announced on April 24 were put into effect.


## June 2018

### 19 June

- [Debian 7 reached end of life](https://wiki.debian.org/LTS) and is no longer available from the control panel.


### 13 June

- We updated the RancherOS container image from 12.0 to 14.0. Learn more about the new version on [Rancher’s release page](https://github.com/rancher/os/releases/tag/v1.4.0).


### 11 June

- Expanded Droplet View allows customers using the Dashboard to click a Droplet and quickly view additional information about the Droplet without having to go to the Droplet Page. It also updates the list of Droplets to display at a glance whether Backups are on/off and if a Floating IP is attached.


### 5 June

- Released new Droplet feature to allow customers to boot Droplets from a Recovery ISO. Learn more in [How To Recover from File System Corruption Using Fsck and a Recovery ISO](https://docs.digitalocean.com/products/droplets/how-to/recovery/recovery-iso/).


## May 2018

### 17 May

- Turned on Droplet Search in the top menu for all users. Allows users to quickly search for Droplets by name or IP address and go directly to the Droplet Page.


### 1 May

- [Fedora 28](https://docs.fedoraproject.org/en-US/fedora/f28/release-notes/) is now available using the slugs `fedora-28-x64` and `fedora-28-x64-atomic`. The images are [now public](https://cloud.digitalocean.com/droplets/new?distro=fedora&distroImage=fedora-28-x64&size=s-2vcpu-4gb&region=nyc3) to all users.


## April 2018

### 27 April

- [Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/what-s-new-in-ubuntu-18-04) is now available through the [control panel](https://cloud.digitalocean.com/droplets/new?distro=ubuntu&distroImage=ubuntu-18-04-x64&size=s-2vcpu-4gb&region=nyc3) and via our API using the slug `ubuntu-18-04-x64`


### 24 April

- Changes to [Droplet Bandwidth Billing announced](https://www.digitalocean.com/community/tutorials/digitalocean-bandwidth-billing-faq). The new billing plan goes into effect June 1. Charges for June, if any, will appear on the July 1 bill. Customers can view usage and billing information on [their billing page](https://cloud.digitalocean.com/settings/billing).


### 17 April

- [1vCPU-Optimized Droplet](https://docs.digitalocean.com/products/droplets/#cpu-optimized-droplets) launched.


## January 2018

### 16 January

- DigitalOcean [upgrades Memory, SSD and vCPU](https://blog.digitalocean.com/new-droplet-plans/) across all Standard, Flexible and Optimized Droplet plans.


In this article...

[Droplets](https://docs.digitalocean.com/release-notes/droplets/)

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