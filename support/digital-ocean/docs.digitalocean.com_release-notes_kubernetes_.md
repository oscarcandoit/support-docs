---
url: "https://docs.digitalocean.com/release-notes/kubernetes/"
title: "Kubernetes | DigitalOcean Documentation"
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
- Kubernetes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Kubernetes Release Notes

Validated on 3 Nov 2025

## November 2025

### 3 November

- DigitalOcean Insights now supports [GPU-level observability for AMD and NVIDIA GPU Droplets](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) and for GPU-enabled [Kubernetes clusters (DOKS)](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) running DOKS 1.33.1-do.5 or higher.


## October 2025

### 31 October

- You can use 8-GPU configuration GPUs in a multi-node set up in DOKS clusters, where the GPUs are connected via a dedicated high speed networking fabric. These GPUs are available [by contract only](https://www.digitalocean.com/company/contact/sales). To learn how to set up multi-node GPUs, see [How to Use Multi-Node GPUs](https://docs.digitalocean.com/products/kubernetes/how-to/configure-multinode-gpus/).


### 20 October

- Using [DigitalOcean NFS shares](https://docs.digitalocean.com/products/nfs/) as shared storage in DigitalOcean Kubernetes clusters is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). This feature is available on Kubernetes versions 1.31 and higher. You can create and use the shares with DOKS clusters only in the regions where the [DigitalOcean NFS shares are available](https://docs.digitalocean.com/products/nfs/details/availability/). For more information, see [Use NFS Storage](https://docs.digitalocean.com/products/kubernetes/how-to/use-nfs-storage/).


## September 2025

### 9 September

- Flexible node pool selection for autoscaling is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). This feature enables the DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) to fallback to compatible node pools if the preferred node pool is at capacity, thus ensuring scaling continues smoothly without disruption. For more information, see [Flexible Node Pool Selection](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#flexible-node-pool-selection).

- The [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/), which is enabled by default on clusters with [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) running on Kubernetes version 1.33 or higher, is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can use this API to manage ingress natively in Kubernetes clusters. There is no additional cost to use this API. For more information on how to use the Gateway API, see the [HTTPS Traffic Routing in Kubernetes using Gateway API and Cilium](https://www.digitalocean.com/community/tutorials/https-traffic-routing-gateway-api-cilium) and [Kubernetes Gateway API Tutorial: Replace Ingress with Cilium Gateway for HTTP Traffic](https://www.digitalocean.com/community/tutorials/kubernetes-gateway-api-tutorial-cilium-ingress-alternative) tutorials on our Community site.


## July 2025

### 28 July

- DOKS node pools with [AMD GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/) now have the following observability features:


  - You can monitor [basic metrics](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/), such as GPU VRAM usage.

  - We automatically deploy the [ROCm Device Plugin for Kubernetes](https://github.com/ROCm/k8s-device-plugin), which enables features such as GPU discovery and health checks.


When [creating](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes/operation/kubernetes_create_cluster) or [updating](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes/operation/kubernetes_update_cluster) a cluster with the API, you can install the [AMD Device Metrics Exporter plugin](https://github.com/ROCm/device-metrics-exporter) with the `amd_gpu_device_metrics_exporter_plugin` request body parameter to ingest GPU metrics into your own monitoring system.

### 15 July

- AMD [Instinct MI325X](https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html) GPUs are now available by contract only for DOKS clusters. These GPUs are available in 1- or 8-GPU configurations when creating new clusters or adding node pools to existing clusters. To create GPU node pools with MI325X GPUs, [contact sales](https://www.digitalocean.com/company/contact/sales). [Learn more about GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/).


### 1 July

- The DOKS database operator, which facilitated integration of DOKS clusters with managed databases, is deprecated. Your existing databases remain operational and the [operator-related CRDs](https://github.com/digitalocean/do-operator/tree/main/docs/databases) are not removed. You can use the DigitalOcean API, CLI, or control panel to manage the databases created with the operator.


## June 2025

### 30 June

- The routing agent is now in [general availablity](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can enable or disable the routing agent using the DigitalOcean CLI or API. For more information, see [How to Use the Routing Agent](https://docs.digitalocean.com/products/kubernetes/how-to/use-routing-agent/).


### 20 June

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) now supports autoscaling across multiple node pools for a single workload. If the preferred node pool is at capacity, the autoscaler uses the next compatible option in sequence — ensuring scaling continues smoothly without disruption. This feature is in [private preview](https://docs.digitalocean.com/platform/product-lifecycle/#private-preview). For more information, see [Flexible Node Pool Selection](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#flexible-node-pool-selection).


### 19 June

- We have reverted to non- [VPC-native cluster networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) when creating new clusters with Kubernetes version 1.33 and higher using the `doctl` command line interface or API. If your VPC-native cluster provisioned successfully, no action is needed. If the cluster appears to be stuck in the `Provisioning` state, please delete the cluster and create a new one.

You can automatically configure VPC-native networking when using the control panel or manually configure it using`doctl` or the API. For more information, see [Create a Cluster with VPC-native Networking](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#vpc-native-networking).


### 16 June

- We have enabled the [Gateway API](https://gateway-api.sigs.k8s.io/) by default on clusters with [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) running on Kubernetes version 1.33 or higher. This feature is in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). You can use the Gateway API to manage ingress natively in a Kubernetes cluster, without the need for third-party ingress controllers.

- Load balancer services now default to network load balancers (NLB) instead of regional load balancers on clusters running on Kubernetes version 1.33 or higher. Use the `service.beta.kubernetes.io/do-loadbalancer-type` annotation with a value of `REGIONAL` or `REGIONAL_NETWORK` to change the load balancer type.

- We have enabled [VPC-native cluster networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) by default when you create new clusters using Kubernetes version 1.33 or higher using the `doctl` command line interface or API. For more information, see [Create a Cluster with VPC-native Networking](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#vpc-native-networking).


### 12 June

- AMD [Instinct MI300X](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html) GPUs are now available for DOKS clusters. These GPUs are available in a single GPU or 8 GPU configuration when creating new clusters or adding node pools to existing clusters. You can use these GPUs in the control panel and the API with the `gpu-mi300x1-192gb` and `gpu-mi300x8-1536gb` slug, respectively.


## May 2025

### 7 May

- NVIDIA [RTX 4000](https://www.nvidia.com/en-us/design-visualization/rtx-4000/) and [RTX 6000](https://www.nvidia.com/en-us/design-visualization/rtx-6000/) Ada Generation GPUs are now available for DOKS clusters. You can choose these GPUs when creating new clusters or adding node pools to existing clusters using the control panel and the API with the `gpu-4000adax1-20gb` and `gpu-6000adax1-48gb` slug respectively.


## April 2025

### 30 April

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). See [Scaling to Zero](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#scaling-to-zero) for recommendations to follow for scaling a node pool down to zero.


## March 2025

### 31 March

- DOKS now supports up to 1000 worker nodes per cluster, allowing you to run larger workloads within a single cluster. You can create 1000-node clusters using the DigitalOcean API or CLI. To learn more, see [Scale Up to 1000 Nodes Per Cluster](https://docs.digitalocean.com/products/kubernetes/details/features/#scale-up-to-1000-nodes-per-cluster).


### 27 March

- [NVIDIA L40S GPUs](https://www.nvidia.com/en-us/data-center/l40s/) are now available for creating new clusters or adding node pools to existing clusters using the control panel and the API with the `gpu-l40sx1-48gb` slug.

- Network load balancers are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) to get started.


### 24 March

- You can now view the most recent reconciler checks in the DigitalOcean Control Panel. For more information, see [Best Practices](https://docs.digitalocean.com/products/kubernetes/concepts/best-practices/#check-reconciler-messages).

- The DOKS [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics) can now scale nodes in a node pool down to zero. This feature is in [private preview](https://docs.digitalocean.com/platform/product-lifecycle/#private-preview). See [Scaling to Zero](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/#scaling-to-zero) for recommendations to follow for scaling down to zero.


### 10 March

- The routing agent is now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview) for DOKS clusters. The agent lets you create and maintain IP routes on your Kubernetes worker nodes. You can enable or disable the routing agent only using the DigitalOcean CLI or API. For more information, see [How to Use the Routing Agent](https://docs.digitalocean.com/products/kubernetes/how-to/use-routing-agent/).


## February 2025

### 28 February

- IPv6 support for regional external load balancers is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You may now choose between IPv4-only or dual-stack IPv4 and IPv6 networking when you [create standalone load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). All [DOKS regional HTTPS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/) created after 28 February 2025 are dual-stack. Network load balancers on DOKS do not support IPv6.

- Network load balancers are now in [public preview](https://cloud.digitalocean.com/account/feature-preview/). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. You must opt-in to the [public preview](https://cloud.digitalocean.com/account/feature-preview/) to create network load balancers.


## January 2025

### 7 January

- You can scale a fixed node pool down to 0 nodes using the DigitalOcean Control Panel, CLI, and API. Your cluster must have another fixed node pool with at least 1 node or a GPU node pool with 0 node to do so. To learn more, see [Add Node Pools](https://docs.digitalocean.com/products/kubernetes/how-to/add-node-pools/).


## December 2024

### 12 December

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) for all DigitalOcean Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, refer to [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- Internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#regional-load-balancers) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Internal load balancers have no public IP address and are only accessible to resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/) network. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) for more details. To learn how to add internal load balancers to DOKS clusters, see [Configure Load Balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#internal-load-balancer) in the DOKS documentation.


## October 2024

### 29 October

- Forwarding cluster event logs from your DOKS cluster to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You can forward logs using the [control panel](https://docs.digitalocean.com/products/kubernetes/how-to/forward-logs/) or the [API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Kubernetes).


### 15 October

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for all DigitalOcean Managed Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, see [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- You can now create internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). Internal load balancers have no public IP address and are only accessible by resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/). This feature is [currently in early availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability) and only available through the [CLI](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-cli) and [API](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-api).


### 1 October

- [GPU worker nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/) for DigitalOcean Kubernetes are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary). You can [create a new cluster with GPU nodes](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/) or [add a GPU node pool to an existing cluster](https://docs.digitalocean.com/products/kubernetes/how-to/add-node-pools/) on versions 1.30.4-do.0, 1.29.8-do.0, 1.28.13-do.0, and later.


## September 2024

### 18 September

- The ability to connect DOKS clusters to [global load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) via [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) is now in [beta](https://docs.digitalocean.com/platform/product-lifecycle/#beta).


### 13 September

- SnapShooter can now back up and restore cluster-internal resources such as databases on DigitalOcean Kubernetes clusters. The new feature automatically installs a backup agent into your cluster, allowing SnapShooter to back up a variety of database types running in DOKS.

See [How to Back Up Resources on DigitalOcean Kubernetes with SnapShooter](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/) for more details.


### 12 September

- You can now [forward cluster event logs](https://docs.digitalocean.com/products/kubernetes/how-to/forward-logs/) from your DOKS cluster to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/). This feature is in beta. You can send us [your feedback](https://digitalocean.getfeedback.com/r/llNCTgXg) about the feature.


## August 2024

### 30 August

- GPU worker nodes are now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for select DOKS customers. For more information, see [GPU Worker Nodes](https://docs.digitalocean.com/products/kubernetes/details/supported-gpus/).


### 29 August

- We have increased the volume attach limit for DOKS nodes from 7 to 15.


## July 2024

### 16 July

- DOKS now supports the `LoadBalancerSourceRanges` field in the load balancer service configuration file. This field [specifies a list of IP addresses](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/#create-a-configuration-file) from which traffic can pass to the load balancer.

We have deprecated the `service.beta.kubernetes.io/do-loadbalancer-allow-rules` annotation in favor of the `LoadBalancerSourceRanges` field.


## June 2024

### 27 June

- Control plane firewalls are now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for select DOKS customers. For more information, see [How to Add a Control Plane Firewall](https://docs.digitalocean.com/products/kubernetes/how-to/add-control-plane-firewall/).


### 24 June

- DigitalOcean Load Balancers added to [DOKS clusters](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/) now default to [Kubernetes’ recommended health check configuration](https://kubernetes.io/blog/2022/12/30/advancements-in-kubernetes-traffic-engineering/) which facilitates worker node replacements with minimal request disruption. The new configuration automatically updates for all existing managed load balancers on DOKS 1.26 and later.

We do not recommend configuring health checks manually. You can continue the previous behavior by setting the `service.beta.kubernetes.io/do-loadbalancer-override-health-check` annotation as described [here](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#health-checks).


### 13 June

- We are moving the managed Cilium Operator component (`cilium-operator`) from the worker nodes to the control plane of DOKS clusters. This frees up resources on the worker nodes and improves autoscaling of the component.


## April 2024

### 8 April

- Tokens returned by the [`/kubeconfig`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_get_kubeconfig) and [`/credentials`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/kubernetes_get_credentials) endpoints now have [custom scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to provide read-only access to Kubernetes resources. Within DOKS clusters, operations to access Kubernetes objects are still available based on team role (owner, biller, or member) as before.


## March 2024

### 19 March

- We have added synchronous validation of `LoadBalancer` [service annotations](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/). If you provide invalid values, DOKS returns an error, thus preventing misconfiguration of your load balancer.


## January 2024

### 31 January

- We have removed the built-in [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) from the control panel.

As an alternative, you can use the [Kubernetes Dashboard 1-Click App](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/#kubernetes-dashboard) from the DigitalOcean Marketplace, [Cilium Hubble](https://docs.digitalocean.com/products/kubernetes/how-to/use-cilium-hubble/), or [other open-source options for monitoring and visualizing Kubernetes workloads](https://www.digitalocean.com/community/conceptual-articles/kubernetes-visualization-tools).


### 18 January

- All currently supported DigitalOcean Kubernetes versions now have Cilium Hubble, Hubble Relay and Hubble UI enabled. For more information, see [Use Cilium Hubble](https://docs.digitalocean.com/products/kubernetes/how-to/use-cilium-hubble/).


## October 2023

### 17 October

- The Kubernetes API endpoints `/v2/kubernetes/clusters/<cluster ID>/kubeconfig` and `/v2/kubernetes/clusters/<cluster ID>/credentials` now require API tokens to have write scope.


## May 2023

### 16 May

- Premium Intel CPUs are now available for CPU-Optimized Droplets in TOR1.


## April 2023

### 18 April

- Premium Intel CPUs are now available for CPU-Optimized Droplets in BLR1.


## March 2023

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

### 24 January

- We have deprecated our legacy load balancer scaling system in all datacenter regions. This includes the deprecation of the `do-loadbalancer-size-slug` annotation for DigitalOcean Kubernetes load balancers.

[Horizontal scaling](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) is now available in all regions.


## November 2022

### 16 November

- DigitalOcean Kubernetes clusters originally created with version 1.20 or older have an outdated version of our control plane architecture, which does not allow you to enable [high availability](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane). However, you can now upgrade your control plane to our new version. This upgrade option is available for Kubernetes versions currently 1.22 and later.

To check whether you can upgrade your cluster to the new control plane, see [our guide](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#new-control-plane).

- You can now enable [high availability](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane) on existing Kubernetes clusters. For detailed steps, see [our guide](https://docs.digitalocean.com/products/kubernetes/how-to/enable-high-availability/).


## October 2022

### 13 October

- When creating a new Kubernetes cluster, you can add a free database operator (now in beta), which allows you to automatically link new databases to your cluster. For more details, see [documentation on GitHub](https://github.com/digitalocean/do-operator/tree/main/docs/databases).

- [`do-operator`](https://github.com/digitalocean/do-operator), our operator for managing and consuming DigitalOcean resources from a Kubernetes cluster, is now an open-source beta project.


## August 2022

### 18 August

- A new CPU-Optimized Droplet plan with more computing power is now available. This plan features 48 vCPUs (up from the previous maximum of 32) and 96 GB of memory (up from the previous maximum of 64).

This large CPU-Optimized Droplet plan is available [where CPU-Optimized Droplets are already available](https://docs.digitalocean.com/platform/regional-availability/), except for BLR1 and SFO2.

You can use this plan for both standalone Droplets and Kubernetes nodes. You can also [resize your existing Droplets to this node plan](https://docs.digitalocean.com/products/droplets/how-to/resize/).


## July 2022

### 1 July

- DOKS clusters now accrue free bandwidth based on the worker pool’s largest sizes within 28 days of usage. [Learn more about DOKS billing](https://docs.digitalocean.com/products/kubernetes/details/pricing/).

Previously, you may have received slightly more free bandwidth on 30 and 31-day months. Individual worker nodes were billed per hour, up to a maximum of 744 hours per month (31 days \* 24 hours). As a result, they could accrue extra bandwidth allowance beyond the advertised monthly allowance for the corresponding Droplet plan.


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 23 June

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/#managed-elements-of-the-control-plane) is now [Generally Available](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) in all regions where DigitalOcean Kubernetes is supported.


## March 2022

### 15 March

- You can now [search for and install Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/kubernetes/how-to/manage-1click-apps/) from the new **Marketplace** tab of DOKS clusters.


### 11 March

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/) (early availability) is now available in all regions where DOKS is supported.


## October 2021

### 12 October

- Released [v1.65.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.65.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `--ha` flag was added to the `kubernetes cluster create` sub-command to optionally create a cluster configured with a highly-available control plane. This feature is in early availability
  - The `kubernetes cluster` sub-commands now include a “Support Features” field when displaying version options
  - The `--disable-lets-encrypt-dns-records` flag was added to the `compute load-balancer create` sub-command to optionally disable automatic DNS record creation for Let’s Encrypt certificates that are added to the load balancer

- [High-availability control plane](https://docs.digitalocean.com/products/kubernetes/details/managed/) is now in early availability in the following regions: ams3, nyc1, sfo3, and sgp1.


## August 2021

### 3 August

- You can now add Kubernetes clusters as [sources or destinations in Cloud Firewall rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/#custom-rules).


## March 2021

### 18 March

- You can now do the following on Kubernetes clusters:


  - Use [surge upgrade](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#surge-upgrades) when upgrading an existing cluster. Surge upgrade is enabled by default when you create a new cluster.

  - Move a Kubernetes cluster and its associated resources, such as Droplets, load balancers and volumes, to a [project](https://docs.digitalocean.com/products/projects/) using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters) or [`doctl`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/assign/) command-line tool. You can also assign a project when you create a new cluster. If you do not specify a project, it gets assigned to the default project.

  - Delete resources, such as load balancers and volumes, associated with a Kubernetes cluster using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters), [API](https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster) or the [`doctl`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete/) command-line tool.


## October 2020

### 27 October

- On Kubernetes 1.19 and later we now provision [two fully-managed firewalls for each new Kubernetes cluster](https://docs.digitalocean.com/products/kubernetes/details/managed/#worker-node-firewalls). One firewall manages the connection between worker nodes and control plane, and the other manages connections between worker nodes and the public internet.


### 6 October

- You can now [apply taints to Kubernetes node pools using the DigitalOcean API](https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster). When you configure taints for a node pool, the taint automatically applies to all current nodes and any subsequently created nodes in the pool. For more information, see [Kubernetes’ documentation on taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).


## April 2020

### 28 April

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## February 2020

### 5 February

- [v1.14.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1140-february-05-2020) of the DigitalOcean Terraform Provider is now available. This release includes a bug fix for projects containing many resources and exposes the Droplet IDs for individual nodes in Kubernetes clusters.


### 4 February

- Released [v1.38.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.38.0), the official DigitalOcean CLI. This release adds the ability to set Kubernetes node pool labels as well as support for deleting multiple Kubernetes clusters with a single command.


## November 2019

### 19 November

- DigitalOcean Kubernetes users can run [our cluster linter](https://github.com/digitalocean/clusterlint) before [upgrading their cluster to a new minor version](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/#new-minor-version). The linter automatically finds issues with your cluster and links to recommended fixes.

- DigitalOcean Container Registry has been released in Beta. To request early access, visit [the homepage for Container Registry](https://www.digitalocean.com/products/container-registry/).

- DigitalOcean Kubernetes has added native [support for the Kubernetes Dashboard for all DOKS clusters](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/#kubernetes-dashboard).


## October 2019

### 3 October

- The [DigitalOcean Kubernetes (DOKS) October release is now available](https://blog.digitalocean.com/new-on-digitalocean-kubernetes/), and contains the following new features:


  - [Cluster autoscaling](https://docs.digitalocean.com/products/kubernetes/how-to/autoscale/).

  - [Connecting to clusters with OAuth tokens](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/).

  - [Support for minor version upgrades](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/).


## June 2019

### 17 June

- 6-hour and 1-day [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/) for Droplets and Kubernetes worker nodes have been deprecated. No new alert policies with these intervals can be created. Existing alert policies using these intervals will remain in place until 1 August 2019, at which point they will be modified to reflect a 1-hour interval.


## May 2019

### 21 May

- [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) is now [Generally Available](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Highlights include:


  - [Availability](https://docs.digitalocean.com/platform/regional-availability/) in SGP1 and TOR1.

  - Support for [patch version upgrades](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/).

  - Configurable maintenance window and automatic upgrade options.

  - Delete node feature, which removes a specific node from a worker pool.

  - [Basic](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) and [advanced monitoring](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-advanced/) insights for resource utilization and deployment status metrics.


### 3 May

- [Kubernetes version 1.14.1](https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/) is now available for cluster creation in [DOKS](https://cloud.digitalocean.com/kubernetes/clusters).


## April 2019

### 24 April

- [DOKS](https://cloud.digitalocean.com/kubernetes/clusters) node pools can now be named at creation time.

- [DOKS](https://cloud.digitalocean.com/kubernetes/clusters) master nodes now automatically rotate logs to avoid disk space issues.


## March 2019

### 20 March

- DOKS customers can now see the cost of their Kubernetes nodes and load balancers aggregated by cluster name within a Kubernetes clusters group on their [invoice](https://docs.digitalocean.com/platform/billing/invoices/). Volumes and volume snapshots used in a DOKS cluster are not yet included in the cluster aggregation.


## December 2018

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

### 7 December

- The minimum size for a [Kubernetes node](https://www.digitalocean.com/products/kubernetes/) was changed to the 2 GB Memory / 1 vCPU plan.


## October 2018

### 1 October

- [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) is now in early availability. [Learn more](https://www.digitalocean.com/products/kubernetes/).


In this article...

[Kubernetes](https://docs.digitalocean.com/release-notes/kubernetes/)

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

Cookie Preferences

GenAI Agent - DigitalOcean