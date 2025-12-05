---
url: "https://docs.digitalocean.com/products/marketplace/catalog/openebs/"
title: "OpenEBS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/openebs/)
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

- OpenEBS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenEBS

Generated on 30 Sep 2021
from [the OpenEBS catalog page](https://marketplace.digitalocean.com/apps/openebs-1)

Container Attached Storage – OpenEBS is a Kubernetes native, 100% open source and 100% in userspace Cloud Native Storage (CNS) solution for container stateful applications in Kubernetes. OpenEBS is currently a [CNCF Sandbox project](https://www.prnewswire.com/news-releases/openebs-accepted-into-cncf-and-openebs-0-9-released-300853066.html "CNCF Sandbox project") and the most active Container Attached Storage (CAS) solution with the biggest user base and community.

OpenEBS itself is deployed as just another container on your host and enables storage services that can be designated on a per pod, application, cluster or container level, including: Your stateful data can persistence across nodes, dramatically reducing time spent rebuilding failed workloads for example. Synchronization of data across availability zones and cloud providers improving availability and decreasing attach/detach times for example.

OpenEBS vision is simple: let storage and storage services for persistent workloads be fully integrated into the environment so that each team and workload benefits from granularity of control and Kubernetes native behavior. You can find out more about OpenEBS at [openebs.io](https://openebs.io/). Commercial support options for OpenEBS is provided by MayaData, see [mayadata.io](https://mayadata.io/ "https://mayadata.io/") for additional details.

### Minimum and Recommended Configuration

Note:

- This stack requires a minimum configuration of 1 Node at the $10/month plan (2GB memory / 1 vCPU) for LocalPV.
- For Jiva or cStor,the recommended configuration is 3 Nodes at the $20/month plan (4GB memory / 2 vCPUs) or higher and iSCSI should be installed and enabled on all worker nodes. 3 Node cluster is required to provide data high availability in case of node failures.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| OpenEBS | [3.0.0](https://github.com/openebs/openebs/releases) | [Apache 2](https://github.com/openebs/openebs/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=openebs&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating OpenEBS using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks openebs
```

## Getting Started After Deploying OpenEBS

After you have successfully deployed OpenEBS, then downloaded your kube config file, and are able to successfully connect to your DigitalOcean Kubernetes cluster (see [https://cloud.digitalocean.com/kubernetes/clusters/](https://cloud.digitalocean.com/kubernetes/clusters/) if you haven’t connected to your cluster) follow the instructions below to start using OpenEBS to manage your Container Attached Storage.

### Verifying OpenEBS Pods

Verify the cluster is running OpenEBS pods in the `openebs` namespace as expected:

```
kubectl get pod -n openebs -l openebs.io/version=3.0.0
```

You should see a list of pods running in the cluster similar to the following:

```
NAME                                           READY   STATUS    RESTARTS   AGE
openebs-localpv-provisioner-766d5f8b5d-glnd9   1/1     Running   0          4m37s
openebs-ndm-42zcs                              1/1     Running   0          4m37s
openebs-ndm-9fw55                              1/1     Running   0          4m37s
openebs-ndm-flfsg                              1/1     Running   0          4m37s
openebs-ndm-operator-766cb8b878-qcbqg          1/1     Running   0          4m37s
```

### Verifying OpenEBS Storage Classes

After verifying OpenEBS pods are running, you can check the OpenEBS Storage Classes:

```
kubectl get sc
```

You should see a list of default OpenEBS storage classes and DigitalOcean storage classes similar to the following:

```
NAME                         PROVISIONER                 RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
do-block-storage (default)   dobs.csi.digitalocean.com   Delete          Immediate              true                   9m31s
openebs-device               openebs.io/local            Delete          WaitForFirstConsumer   false                  4m52s
openebs-hostpath             openebs.io/local            Delete          WaitForFirstConsumer   false                  4m52s
```

### Configuring Storage Pools

From here you’re ready to start configuring your Storage Pools. Please visit [OpenEBS Getting Started Documentation](https://github.com/openebs/cstor-operators/blob/master/docs/quick.md) for configuring Storage Pools and more.

In case you are using OpenEBS Dynamic LocalPV Provisioner please visit [OpenEBS Local PV concepts](https://docs.openebs.io/docs/next/localpv.html)

## Managing OpenEBS

### Updating

To update your installation of OpenEBS

```
helm repo add openebs https://openebs.github.io/charts
```

```
helm repo update
```

List the details of the currently installed OpenEBS version.

```
helm list --namespace openebs

NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
openebs openebs         1               2021-09-30 03:26:23.783786715 +0000 UTC deployed        openebs-3.0.0   3.0.0
```

If the latest version is available for upgrade, then you can do the OpenEBS upgrade using the following command.

```
helm upgrade $NAME openebs/openebs --namespace openebs
```

**Note:** Replace $NAME with the release name from the above command (In this case `openebs`), then it will upgrade to the latest available version of OpenEBS.

### Deleting

To delete your installation of OpenEBS

First, get the name of the release.

```
helm list --namespace openebs

NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
openebs openebs         1               2021-09-30 03:26:23.783786715 +0000 UTC deployed        openebs-3.0.0   3.0.0
```

To uninstall an OpenEBS version.

```
helm uninstall $NAME --namespace openebs
```

**Note:** Replace $NAME with the release name from the above command (In this case `openebs`)

In this article...

- [Minimum and Recommended Configuration](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#minimum-and-recommended-configuration)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#creating-an-app-using-the-api)
- [Getting Started After Deploying OpenEBS](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#getting-started-after-deploying-openebs)
- [Verifying OpenEBS Pods](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#verifying-openebs-pods)
- [Verifying OpenEBS Storage Classes](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#verifying-openebs-storage-classes)
- [Configuring Storage Pools](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#configuring-storage-pools)
- [Managing OpenEBS](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#managing-openebs)
- [Updating](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#updating)
- [Deleting](https://docs.digitalocean.com/products/marketplace/catalog/openebs/#deleting)

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