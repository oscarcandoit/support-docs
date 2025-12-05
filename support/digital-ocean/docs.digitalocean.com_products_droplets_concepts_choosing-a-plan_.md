---
url: "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
title: "Choosing the Right CPU Droplet Plan | DigitalOcean Documentation"
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

- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
- Choosing a Plan

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Choosing the Right CPU Droplet Plan

Validated on 18 Apr 2024 • Last edited on 14 Jul 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Choosing the right Droplet plan depends on your workload. An oversized Droplet would underuse its resources and cost more, but an undersized Droplet running at full CPU or memory would suffer from degraded performance or errors.

To help you pick the best Droplet plan for your use case, this article explains [the differences between shared and dedicated CPUs](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated), goes into [detail on each Droplet plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#droplet-plans), and concludes with [how to make a data-driven decision](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#data-driven-decision).

You can also resize a Droplet to a larger plan after creation, including resizing to a larger Droplet plan of a different kind. For example, you can resize from a Basic Droplet plan to a larger CPU-Optimized Droplet plan. See [the Droplet pricing page](https://www.digitalocean.com/pricing/droplets) for a full list of plans and prices.

## Shared CPU vs. Dedicated CPU

- A **Droplet** is a virtual machine (VM) that is allocated resources, like CPU, RAM, and disk storage, from a physical host.

- A **hypervisor**, also known as a virtual machine monitor, makes sure that the multiple Droplets running on a physical host each receive their virtual resources, like vCPU.

- A **vCPU** is a unit of processing power corresponding to a single hyper-thread on a processor core. A modern, multi-core processor has several vCPUs.


The Droplet plan you choose determines the amount of resources allocated to the Droplet. Resources like RAM, disk storage, and network bandwidth are always dedicated, but you can choose between shared CPU and dedicated CPU plans for dedicated vCPU.

Dedicated CPU Droplets have guaranteed access to the full hyper-thread at all times. With shared CPU Droplets, the hyper-thread allocated to the Droplet may be shared between multiple other Droplets. When a shared CPU Droplet experiences heavier load, the hypervisor dynamically allocates more hyper-thread(s) to it.

However, the amount of CPU cycles available for the hypervisor to allocate depends on the workload of the other Droplets sharing that host. If these neighboring Droplets have high load, a Droplet could receive fractions of hyper-threads instead of dedicated access to the underlying physical processors. In practice, this means that shared CPU Droplets _can_ have access to full hyper-threads, but it’s not guaranteed.

## Droplet Plans

There are five Droplet plans: one shared CPU plan and four dedicated CPU plans.

| Droplet Plan | CPU | vCPUs | Memory |
| --- | --- | --- | --- |
| _Basic_ | Shared | 1 - 8 | 1 - 32 GB RAM |
| _General Purpose_ | Dedicated | 2 - 48 | 8 - 240 GB RAM<br>4 GB RAM / vCPU |
| _CPU-Optimized_ | Dedicated | 2 - 48 | 4 - 120 GB<br>2 GB RAM / vCPU |
| _Memory-Optimized_ | Dedicated | 2 - 32 | 16 - 384 GB RAM<br>8 GB RAM / vCPU |
| _Storage-Optimized_ | Dedicated | 2 - 32 | 16 - 384 GB RAM<br>8 GB RAM / vCPU<br>146 - 225 GB SSD / vCPU |
|  |  |  |  |

Basic

### Shared CPU: Basic Droplet

Basic Droplets have the most efficient CPU usage at a lower cost for workloads that would underuse dedicated threads. They’re ideal for bursty applications that can handle variable levels of CPU, such as:

- Low traffic web servers
- Blogs
- Discussion forums
- Content Management Systems (CMS)
- Small databases
- Dev/test servers
- Microservices
- Repository hosting

Basic Droplets come in a wide variety of configurations, from 1 vCPU / 1 GB memory to 8 vCPUs / 32 GB of memory. They also give you the flexibility to choose the memory to vCPU ratio most appropriate for your application.

Basic Droplets are [shared CPU](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated), which are ideal for apps that mostly run at low to medium load, and occasionally burst for brief periods of time. For production workloads where time is of the essence or variable performance is intolerable, you should choose dedicated CPU Droplets.

Basic Droplets can have Regular CPUs or Premium CPUs. You can choose between Intel and AMD for Premium CPUs.

Basic Droplets with Premium CPUs are guaranteed to use one of the latest two generations of CPUs we have and NVMe SSDs. NVMe SSDs use parallelism to deliver faster disk performance than with regular SSDs. Workloads that require a large number of transactions have much lower latency with NVMe SSDs.

Premium CPU Droplets also have enhanced memory performance, which can play a significant factor in workloads like in-memory databases and server-side caches for web apps. Premium AMD Droplets feature a memory frequency of 3200 MHz, and Premium Intel 2933 MHz.

Premium CPU Droplets have either second or third generation Intel Xeon Scalable processors or second or third generation AMD EPYC processors. Regular CPU Droplets have a mix of first generation or older Xeon Scalable processors and AMD EPYC processors.

General Purpose

### Dedicated CPU: General Purpose Droplet

General Purpose Droplets have a balanced ratio of memory to dedicated CPU, suitable for a wide variety of production workloads. General Purpose Droplets are available in six configurations ranging from 2 vCPUs up to 60 vCPUs, with 8 GB up to 240 GB of RAM. This approximately 4:1 memory to CPU ratio is optimal for standard workloads like:

- Medium-to-high-traffic web servers
- E-commerce sites
- Medium-sized databases
- Software as a Service (SaaS)

They are also a good default choice if you’re not sure which Droplet type is best for your application. They’re best for general purpose production workloads that require dedicated compute power.

General Purpose Droplets can have Regular CPUs or Premium CPUs.

General Purpose Droplets with Premium CPUs have higher network throughput capabilities of up to 10 Gbps of traffic from your Droplets. This improved throughput speed lets you export your data five times faster than General Purpose Droplets with Regular CPUs, which is beneficial for use cases like SaaS applications and e-commerce stores with heavy traffic.

General Purpose Droplets with Premium CPUs are also guaranteed to use NVMe SSDs and one of the latest two generations of CPUs we have. NVMe SSDs use parallelism to deliver faster disk performance than regular SSDs. Workloads that require a large number of transactions have much lower latency with NVMe SSDs.

General Purpose Droplets with Premium CPUs currently have third generation Intel Xeon Scalable processors. General Purpose Droplets with Regular CPUs have a mix of second generation or older Intel Xeon Scalable processors.

CPU-Optimized

### Dedicated CPU: CPU-Optimized Droplet

If your workloads require guaranteed and sustained CPU performance but are not as memory-intensive, CPU-Optimized Droplets let you to minimize cost per dedicated vCPU. Backed by Intel’s Ice Lake and older processors with base clock speeds in excess of 2.6 GHz, CPU-Optimized Droplets are built for CPU-bound workloads like:

- Video and live streaming
- Gaming
- AI and machine learning
- Heavily loaded front-end web servers
- CI/CD

CPU-Optimized Droplets provide a roughly 2:1 ratio of memory to CPU, ranging from 2 vCPUs with 4 GB of RAM up to 60 vCPUs and 120 GB of RAM. This configuration is optimal for applications that demand fast, consistent performance from dedicated vCPUs, but are not so memory-intensive that they require the additional RAM provided by General Purpose Droplets.

CPU-Optimized Droplets can have Regular CPUs or [Premium CPUs](https://www.digitalocean.com/products/droplets/cpu-optimized).

CPU-Optimized Droplets with Premium CPUs have higher network throughput capabilities of up to 10 Gbps of traffic from your Droplets. This improved throughput speed lets you export your data five times faster than CPU-Optimized Droplets with Regular CPUs, which is beneficial for use cases like live streaming and analytics workloads.

CPU-Optimized Droplets with Premium CPUs are also guaranteed to use NVMe SSDs and one of the latest two generations of CPUs we have. NVMe SSDs use parallelism to deliver faster disk performance than regular SSDs. Workloads that require a large number of transactions have much lower latency with NVMe SSDs.

CPU-Optimized Droplets with Premium CPUs currently have third generation Intel Xeon Scalable processors. CPU-Optimized Droplets with Regular CPUs have a mix of second generation or older Intel Xeon Scalable processors.

Memory-Optimized

### Dedicated CPU: Memory-Optimized Droplet

Some workloads, like large production databases or in-memory caches, require larger amounts of memory to store working sets of data. Without sufficient RAM, such applications typically run slowly, or can occasionally become unstable and crash. With 8 GB of RAM for each vCPU, Memory-Optimized Droplets are ideal for these applications:

- High-performance SQL or NoSQL databases
- Web scale in-memory caches and indexes
- Real-time big data processing
- Resource-intensive or mission-critical business apps, especially those with large JVM requirements

Memory-Optimized Droplets use NVMe SSDs and range from 2 vCPUs and 8 GB of RAM up to 48 vCPUs and 384 GB of memory. The additional memory can help you avoid excessively swapping to disk or getting out-of-memory errors, both of which significantly impact your application’s performance and stability. They allow you to minimize cost per GB of memory, while still providing dedicated vCPUs.

Memory-Optimized Droplets can have Regular CPUs or Premium CPUs.

Memory-Optimized Droplets with Premium CPUs are guaranteed to use one of the latest two generations of CPUs we have. They have higher network throughput capabilities of up to 10 Gbps of traffic from your Droplets. This improved throughput speed lets you export your data five times faster than Memory-Optimized Droplets with Regular CPUs, which is beneficial for use cases like live streaming and analytics workloads.

Storage-Optimized

### Dedicated CPU: Storage-Optimized Droplet

Fast storage is necessary for workloads capturing large amounts of data. Storage-Optimized Droplets use NVMe (non-volatile memory express), which is an interface protocol explicitly built for modern SSDs. It takes advantage of parallelism to deliver disk performance that can be an order of magnitude faster than our regular SSDs. Because storage is directly attached to the hypervisor (instead of being connected via network), these Droplets are ideal for workloads that require a high number of transactions with low latency, like:

- Large, high-performance NoSQL databases, like MongoDB, Elasticsearch, and TimeScaleDB
- Monitoring and analytics software, like Prometheus and Grafana
- Other kinds of data warehouses

The 1X SSD configuration of Storage-Optimized Droplets features 150GB storage for each dedicated vCPU. The 1.5X SSD option gives you 225 GB per vCPU. Our largest Storage-Optimized Droplet has 7 terabytes of storage capacity.

Storage-Optimized Droplets can have Regular CPUs or Premium CPUs.

Storage-Optimized Droplets with Premium CPUs are guaranteed to use one of the latest two generations of CPUs we have. They have higher network throughput capabilities of up to 10 Gbps of traffic from your Droplets. This improved throughput speed lets you export your data five times faster than Storage-Optimized Droplets with Regular CPUs, which is beneficial for use cases like live streaming and analytics workloads.

## Making a Data-Driven Decision

Before settling on a particular Droplet type, we recommend benchmarking and load testing your workload to see how it performs under simulated load. For bursty apps or batch jobs, look at resource usage when load is at its expected peak, especially when using shared CPU Basic Droplets. If you notice that your app’s performance is too variable for your production needs, consider a Droplet type with dedicated vCPUs.

### CPU and RAM

Using [Droplet graphs](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) provides details on CPU load and memory usage:

- If your Droplet has high CPU usage most of the time and also significant memory usage, consider scaling both vCPUs and memory and using a balanced General Purpose Droplet.

- If your Droplet has high CPU usage most of the time but very low memory usage, you might be able to save money with a CPU-Optimized Droplet.

- If your Droplet has high memory usage most of the time (potentially maxing out and swapping to disk) but low or moderate CPU usage, consider scaling memory and using a Memory-Optimized Droplet.

- If your Droplet has low to moderate CPU or memory usage most of the time but sometimes bursts up and hits resource limits, consider shared CPU Basic Droplets and scale the limiting resource accordingly.


Using [DigitalOcean Monitoring](https://docs.digitalocean.com/products/monitoring/), you can [create alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/#create-control) to notify you via email or Slack if your Droplets hit their resource limits. For example, you can set an alert policy to notify you via Slack should one of your Droplets exceed 90% memory usage for more than 30 minutes, an indication that your workload may be close to maxing out available memory and may throw an out-of-memory error.

### Disk

All DigitalOcean Droplets include variable amounts of local solid state disk (SSD) storage. If you need additional storage, you can use network-attached [block storage](https://docs.digitalocean.com/products/volumes/) to attach additional volumes to a Droplet, or use [Spaces object storage](https://docs.digitalocean.com/products/spaces/) to offload files and accompanying metadata.

There is some performance penalty when using network-attached storage. If you need the additional input/output operations per second (IOPS), consider scaling your Droplet to a larger size for additional local SSD storage.

### Network

Droplets include unlimited free inbound data transfer and some amount of free outbound data transfer, depending on the Droplet instance type and size. Depending on your workload type and bandwidth usage, you could scale your Droplet to take advantage of additional free outbound data transfer.

[Monitoring](https://docs.digitalocean.com/products/monitoring/) provides graphs and alert policies to monitor both disk and bandwidth, much in the same way you’d monitor CPU and memory usage.

## Droplet Plans for DigitalOcean Kubernetes

If you use Droplets to run a container cluster with DigitalOcean Kubernetes, there are different considerations to choosing the best Droplet plan. You can combine several different Droplet instance types to create a set of resources sized optimally for your running containers.

Many container clusters, like Kubernetes, have advanced scheduling features that let you specify the Droplets your containers run on. For example, if you are running a memory-bound data processing app, you can schedule that workload to a group of Memory-Optimized Droplets to avoid hitting memory limits and swapping to disk.

Learn more in [Advanced Scheduling in Kubernetes](https://kubernetes.io/blog/2017/03/advanced-scheduling-in-kubernetes/).

In this article...

- [Shared CPU vs. Dedicated CPU](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated)
- [Droplet Plans](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#droplet-plans)
- [Making a Data-Driven Decision](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#data-driven-decision)
  - [CPU and RAM](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#cpu-and-ram)
  - [Disk](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#disk)
  - [Network](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#network)
- [Droplet Plans for DigitalOcean Kubernetes](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#droplet-plans-for-digitalocean-kubernetes)

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