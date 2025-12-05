---
url: "https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/"
title: "How to Enable GPU Metrics on DigitalOcean Gradient™ AI GPU Droplets with DCGM | DigitalOcean Documentation"
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
    - [Create GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/)
    - [Use the Scratch Disk](https://docs.digitalocean.com/products/droplets/how-to/gpu/use-scratch-disk/)
    - [Enable GPU Metrics](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/)
    - [Enable Jumbo Frames](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-jumbo-frames/)
    - [Use Container Tools](https://www.digitalocean.com/community/tutorials/how-to-use-nvidia-container-tools-with-gpu-droplets)
    - [Configure Multi-Node Setups](https://docs.digitalocean.com/products/droplets/how-to/gpu/configure-multi-node/)
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

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
- Enable GPU Metrics

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Enable GPU Metrics on DigitalOcean Gradient™ AI GPU Droplets with DCGM

Validated on 26 Sep 2024 • Last edited on 10 Nov 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

To access and monitor process statistics, health, and diagnostics data for the NVIDIA GPUs in GPU Droplets, we recommend using the [NVIDIA Data Center GPU Manager (DCGM)](https://developer.nvidia.com/dcgm) and [DCGM Exporter](https://docs.nvidia.com/datacenter/cloud-native/gpu-telemetry/latest/dcgm-exporter.html).

If you only need GPU metrics in DigitalOcean Insights, enable [GPU Observability](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) during Droplet creation by selecting **Improved Metrics and Monitoring** on an AI/ML-Ready Image. `do-agent` detects the GPU, scrapes the local exporter securely (bound to `127.0.0.1`), and forwards metrics to Insights. For metric definitions, see [Monitoring Metrics](https://docs.digitalocean.com/products/monitoring/concepts/metrics/).

To integrate with external systems or customize dashboards beyond **Insights** tab, install a standalone exporter on the Droplet by either [using DCGM exporter for NVIDIA GPUs or `device-metrics-exporter` for AMD GPUs](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/).

## Install DCGM

Create a single or 8 GPU Droplet using our provided AI/ML-ready image, which has NVIDIA drivers and software preinstalled and configured.

Alternatively, if you need to use a different base image, you can [manually install drivers and software](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/). See [NVIDIA’s official installation instructions](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/getting-started.html#id1) for more detail on the prerequisite configuration.

Then, on your GPU Droplet, install DCGM version 3.3.8 or later:

```bash
sudo apt-get install -y datacenter-gpu-manager
```

Next, restart `systemd-journal` to make sure DCGM logs are available:

```bash
sudo systemctl restart systemd-journald
```

### 8 GPU Droplets Only: Install NSCQ

On 8 GPU Droplets only, you additionally need to install the [NVIDIA Switch Configuration and Query (NSCQ) library](https://docs.nvidia.com/datacenter/tesla/hgx-software-guide/index.html#nscq).

First, get the driver version branch of the NVIDIA drivers installed on the Droplet:

```bash
dpkg-query -W -f='${Version}\n' 'nvidia-driver-*' | grep -v '^nvidia-driver-common' | head -n1
```

The output shows the version number (for example, `535.183.01-0ubuntu1`). Use the version number to install the matching NSCQ library packages. Substitute your Droplet’s driver version branch in the package name (for example, `libnvidia-nscq-535=535.183.01-1`).

```bash
sudo apt-get install -y libnvidia-nscq-DRIVER_VERSION_BRANCH
```

8 GPU Droplets also require [NVIDIA Fabric Manager](https://docs.nvidia.com/datacenter/tesla/fabric-manager-user-guide/index.html). Fabric Manager is already configured in the AI/ML-Ready image, but if you’re using a different base image, you need to [install Fabric Manager manually](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/).

## Enable and Verify DCGM

As explained in [NVIDIA’s documentation](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/getting-started.html#modes-of-operation), you can run the core DCGM library in embedded mode (where the agent is loaded as a shared library) or in standalone mode (where the agent is embedded in a daemon). We recommend running in standalone mode because of its flexibility and reduced maintenance.

To run DCGM in standalone mode, you need to configure it to execute on startup. Enable the DCGM system service with `sudo` privileges and start it immediately:

```bash
sudo systemctl --now enable nvidia-dcgm
```

Elevated privileges are necessary because features like configuration settings and diagnostics do not work without privileged access to the GPU.

To verify that DCGM is running correctly, check the status of the DCGM service:

```bash
sudo service nvidia-dcgm status
```

If the service is installed and running, the `nvidia-dcgm` service is listed as `active (running)` in the output:

```text
● nvidia-dcgm.service - NVIDIA DCGM service
     Loaded: loaded (/lib/systemd/system/nvidia-dcgm.service; enabled; vendor p>
     Active: active (running) since Mon 2024-09-23 23:48:27 UTC; 17s ago
   Main PID: 1793 (nv-hostengine)
      Tasks: 8 (limit: 289792)
     Memory: 20.8M
        CPU: 85ms
     CGroup: /system.slice/nvidia-dcgm.service
             └─1793 /usr/bin/nv-hostengine -n --service-account nvidia-dcgm

Sep 23 23:48:27 ml-ai-ubuntu-gpu-h100x1-80gb-tor1 systemd[1]: Started NVIDIA DCGM service.
Sep 23 23:48:27 ml-ai-ubuntu-gpu-h100x1-80gb-tor1 nv-hostengine[1793]: DCGM initialized
Sep 23 23:48:27 ml-ai-ubuntu-gpu-h100x1-80gb-tor1 nv-hostengine[1793]: Started host engine version 3.3.8 using port number: 5555
```

On 8 GPU systems, you can similarly verify that Fabric Manager is running with `sudo service nvidia-fabricmanager status`.

Finally, verify that DCGM can find the GPU devices:

```bash
dcgmi discovery --list
```

The output for single GPU Droplets shows 1 GPU and no NvSwitches:

```
1 GPU found.
+--------+----------------------------------------------------------------------+
| GPU ID | Device Information                                                   |
+--------+----------------------------------------------------------------------+
| 0      | Name: NVIDIA H100 80GB HBM3                                          |
|        | PCI Bus ID: 00000000:00:09.0                                         |
|        | Device UUID: GPU-927d7444-b45a-7c49-8402-5e686e46a026                |
+--------+----------------------------------------------------------------------+
0 NvSwitches found.
+-----------+
| Switch ID |
+-----------+
```

The output for 8 GPU Droplets shows 8 GPUs and 4 NvSwitches.

## Run DCGM Exporter

With DCGM installed and configured, you can now run DCGM Exporter to expose metrics data.

For simplicity, we recommend running it in a Docker container, but you can also deploy it as a [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) on GPU nodes in a Kubernetes cluster using [the NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html).

First, install Docker:

```bash
sudo apt-get install -y docker.io
```

Next, enable the NVIDIA container runtime to use Docker:

```bash
nvidia-ctk runtime configure --runtime=docker
```

Restart Docker to apply the changes:

```bash
systemctl restart docker
```

By default, DCGM Exporter starts `nv-hostengine` as an embedded process, but our recommended setup runs `nv-hostengine` as a standalone process. The following command runs DCGM Exporter in a Docker container and uses the `-r` (`--remote-hostengine-info`) to connect to the existing process:

```shell
DCGM_EXPORTER_VERSION=3.3.8-3.6.0 &&
docker run -d --rm \
   --gpus all \
   --net host \
   --cap-add SYS_ADMIN \
   nvcr.io/nvidia/k8s/dcgm-exporter:${DCGM_EXPORTER_VERSION}-ubuntu22.04 \
   -r localhost:5555 -f /etc/dcgm-exporter/dcp-metrics-included.csv
```

Make sure the DCGM version matches the version of `datacenter-gpu-manager`. You can check the version in the output of `sudo service nvidia-dcgm status`.

You can validate that DCGM Exporter is working by querying the exposed metrics endpoint:

```bash
curl localhost:9400/metrics
```

The default output resembles the following:

```
# HELP DCGM_FI_DEV_SM_CLOCK SM clock frequency (in MHz).
# TYPE DCGM_FI_DEV_SM_CLOCK gauge
DCGM_FI_DEV_SM_CLOCK{gpu="0",UUID="GPU-927d7444-b45a-7c49-8402-5e686e46a026",pci_bus_id="00000000:00:09.0",device="nvidia0",modelName="NVIDIA H100 80GB HBM3",Hostname="6d6d7dc3ce21",DCGM_FI_DRIVER_VERSION="535.183.01"} 345
# HELP DCGM_FI_DEV_MEM_CLOCK Memory clock frequency (in MHz).
# TYPE DCGM_FI_DEV_MEM_CLOCK gauge
DCGM_FI_DEV_MEM_CLOCK{gpu="0",UUID="GPU-927d7444-b45a-7c49-8402-5e686e46a026",pci_bus_id="00000000:00:09.0",device="nvidia0",modelName="NVIDIA H100 80GB HBM3",Hostname="6d6d7dc3ce21",DCGM_FI_DRIVER_VERSION="535.183.01"} 2619
# HELP DCGM_FI_DEV_MEMORY_TEMP Memory temperature (in C).
[...]
```

You can modify the config file, `/etc/default-counters.csv`, to define which GPU metrics you would like to export. See [NVIDIA’s documentation on changing metrics](https://github.com/NVIDIA/dcgm-exporter?tab=readme-ov-file#changing-metrics) for more information.

## Additional Resources

![](https://docs.digitalocean.com/images/icons/default.svg)

Getting Started — NVIDIA DCGM Documentation

Official instructions from NVIDIA for installing and configuring DCGM.

docs.nvidia.com![](https://docs.digitalocean.com/images/icons/default.svg)

DCGM Exporter — NVIDIA Docs Hub

NVIDIA’s detailed instructions on running and customizing DCGM Exporter, integrating GPU telemetry into Kubernetes, and setting up Prometheus.

docs.nvidia.com![](https://docs.digitalocean.com/images/icons/default.svg)

DCGM-Exporter GitHub Repository

The DCGM-Exporter repository README has quickstart information for standalone and Kubernetes configurations, building from source, customizing output, and more.

github.com

In this article...

- [Install DCGM](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/#install-dcgm)
  - [8 GPU Droplets Only: Install NSCQ](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/#8-gpu-droplets-only-install-nscq)
- [Enable and Verify DCGM](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/#enable-and-verify-dcgm)
- [Run DCGM Exporter](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/#run-dcgm-exporter)
- [Additional Resources](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/#additional-resources)

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