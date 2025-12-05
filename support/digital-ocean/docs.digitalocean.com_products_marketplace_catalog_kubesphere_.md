---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/"
title: "KubeSphere | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- KubeSphere

[Give Feedback](https://ideas.digitalocean.com/documentation)

# KubeSphere

Generated on 16 Mar 2022
from [the KubeSphere catalog page](https://marketplace.digitalocean.com/apps/kubesphere)

[KubeSphere](https://kubesphere.io/) is a distributed operating system for cloud-native application management, using Kubernetes as its kernel. It provides a plug-and-play architecture, allowing third-party applications to be seamlessly integrated into its ecosystem.

It boasts abundant functionalities essential for enterprise Kubernetes strategies, such as **multi-cloud and multi-cluster management, DevOps (CI/CD), application lifecycle management, observability, service mesh, multi-tenancy, storage and networking management.**

KubeSphere has open source in its genes and enjoys great support from the community. Professional technical support is also available now. Subscribe to the [KubeSphere Enterprise Support](https://kubesphere.cloud/en/ticket/) to achieve business targets with help from the KubeSphere Team.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [KubeSphere](https://github.com/kubesphere/kubesphere) | [v3.2.1](https://github.com/kubesphere/kubesphere/releases/tag/v3.2.1) | [Apache 2.0](https://github.com/kubesphere/kubesphere/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=kubesphere&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating KubeSphere using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks kubesphere
```

## Getting Started After Deploying KubeSphere

After you have successfully installed KubeSphere on your DigitalOcean Kubernetes cluster, follow the instructions below to explore KubeSphere.

### Log in to the KubeSphere web console

1. Go to the Kubernetes Dashboard provided by DigitalOcean and select the **kubesphere-system** namespace.
2. In **Services** under **Service**, edit the Service **ks-console**.
3. Change `spec.type` from `NodePort` to `LoadBalancer`. Save the file when you finish.
4. Access the KubeSphere web console with the default account and password (`admin/P@88w0rd`) through the endpoint generated by DigitalOcean.

### Use the multi-tenancy system of KubeSphere

Follow the operations described in [Create Workspaces, Projects, Users and Roles](https://kubesphere.io/docs/quick-start/create-workspace-and-project/) to have a quick look at the multi-tenancy system of KubeSphere.

### Deploy cloud-native applications on KubeSphere

Follow the operations described in [Deploy and Access Bookinfo](https://kubesphere.io/docs/quick-start/deploy-bookinfo-to-k8s/) and [Compose and Deploy WordPress](https://kubesphere.io/docs/quick-start/wordpress-deployment/) to learn how to deploy cloud-native applications on KubeSphere.

### Enable pluggable components on KubeSphere

To drive your business results, find out more of the pluggable components provided by KubeSphere:

- [KubeSphere App Store](https://kubesphere.io/docs/pluggable-components/app-store/)
- [KubeSphere DevOps System](https://kubesphere.io/docs/pluggable-components/devops/)
- [KubeSphere Logging System](https://kubesphere.io/docs/pluggable-components/logging/)
- [KubeSphere Events System](https://kubesphere.io/docs/pluggable-components/events/)
- [KubeSphere Alerting System](https://kubesphere.io/docs/pluggable-components/alerting/)
- [KubeSphere Auditing Log System](https://kubesphere.io/docs/pluggable-components/auditing-logs/)
- [KubeSphere Service Mesh (Istio-based)](https://kubesphere.io/docs/pluggable-components/service-mesh/)
- [KubeEdge](https://kubesphere.io/docs/pluggable-components/kubeedge/)
- [Network Policies](https://kubesphere.io/docs/pluggable-components/network-policy/)
- [Metrics Server](https://kubesphere.io/docs/pluggable-components/metrics-server/)
- [Service Topology](https://kubesphere.io/docs/pluggable-components/service-topology/)
- [Pod IP Pools](https://kubesphere.io/docs/pluggable-components/pod-ip-pools/)

### Manage multiple Kubernetes clusters on KubeSphere

Experience easy-to-use multi-cloud and multi-cluster management with [KubeSphere Federation](https://kubesphere.io/docs/multicluster-management/introduction/kubefed-in-kubesphere/).

### Use a cluster-scope gateway on KubeSphere

Manage network on your Kubernetes cluster through [a cluster gateway](https://kubesphere.io/docs/cluster-administration/cluster-settings/cluster-gateway/).

## See also

- [Cluster Administration](https://kubesphere.io/docs/cluster-administration/)
- [Workspace Administration and User Guide](https://kubesphere.io/docs/workspace-administration/)
- [Project User Guide](https://kubesphere.io/docs/project-user-guide/)
- [FAQ](https://kubesphere.io/docs/faq/)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#creating-an-app-using-the-api)
- [Getting Started After Deploying KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#getting-started-after-deploying-kubesphere)
  - [Log in to the KubeSphere web console](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#log-in-to-the-kubesphere-web-console)
  - [Use the multi-tenancy system of KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#use-the-multi-tenancy-system-of-kubesphere)
  - [Deploy cloud-native applications on KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#deploy-cloud-native-applications-on-kubesphere)
  - [Enable pluggable components on KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#enable-pluggable-components-on-kubesphere)
  - [Manage multiple Kubernetes clusters on KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#manage-multiple-kubernetes-clusters-on-kubesphere)
  - [Use a cluster-scope gateway on KubeSphere](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#use-a-cluster-scope-gateway-on-kubesphere)
- [See also](https://docs.digitalocean.com/products/marketplace/catalog/kubesphere/#see-also)

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