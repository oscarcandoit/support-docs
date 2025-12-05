---
url: "https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/"
title: "TrilioVault for Kubernetes | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/)
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

- TrilioVault for Kubernetes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# TrilioVault for Kubernetes

Generated on 1 Apr 2024
from [the TrilioVault for Kubernetes catalog page](https://marketplace.digitalocean.com/apps/triliovault-for-kubernetes)

## **Need Backup and Recovery for Kubernetes?**

Trilio for Kubernetes (T4K) is a cloud-native, application-centric data protection and management platform that was designed from the ground up to support the scale, performance, and mobility requirements of Kubernetes container environments across any public or hybrid cloud environment.

T4K offers backup and recovery of the entire application, including data, metadata, and any other Kubernetes objects associated with the application so it is protected and can be restored at any point in time.

1. Supports applications provisioned via Operators, Helm, or Labels within Upstream Kubernetes.
2. Cloud-agnostic platform offering customers the agility to restore or migrate to any Kubernetes, Digital Ocean Managed Kubernetes Cluster (DOKS), or OpenShift cluster running in a public or hybrid cloud.
3. Cloud-native architecture that is agentless and offers infinite scalability, self-service management, and an open, platform-agnostic backup schema, making it ideal for protecting cloud-native apps.
4. Kubernetes-native. Trilio leverages core Kubernetes APIs and the CSI framework to provide simple snapshot, backup, and restore operations as well as make it seamless to deploy and manage.
5. Extends monitoring and logging core functionality through Prometheus and Grafana.
6. Capability to encrypt the backups enabled at the Backupplan level with different keys used for each backupplan. Encryption keys are stored as Kubernetes secrets.
7. Ability to create immutable T4K backups so users will have the granular capability to specify the application that needs immutability support. Backups cannot be deleted until the user-defined retention period is over since Trilio interfaces with the backup storage target’s locking and versioning feature to provide immutability.

Trilio for Kubernetes is built by [Trilio Data Inc.](https://www.trilio.io/), a leader in Data protection solutions for cloud-native applications.

**Note:**

Digital Ocean uses Helm v3 to deploy Trilio for Kubernetes to your DOKS cluster.

**Trilio for Kubernetes Backup and Restore Workflow Diagram:**

The below diagram shows a high-level overview of how Trilio for Kubernetes performs a backup and restore of the Prometheus application stack to a different DOKS cluster:

![Trilio for Kubernetes Backup and Restore Overview](https://raw.githubusercontent.com/digitalocean/Kubernetes-Starter-Kit-Developers/main/06-setup-backup-restore/assets/images/trilio_bk_res_wf.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Trilio for Kubernetes Operator | 4.0.2 | Preinstalled |
| Trilio for Kubernetes Manager | 4.0.2 | Preinstalled |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=triliovault-operator&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating TrilioVault for Kubernetes using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks triliovault-operator
```

## Getting Started After Deploying TrilioVault for Kubernetes

After performing a 1-Click install of Trilio for Kubernetes, you will see that the Trilio for Kubernetes installation is successful using the below command:

```
helm ls --namespace trilio-system
```

If the installation was successful, the STATUS column value in the output reads deployed:

```
NAME                                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                           APP VERSION
triliovault-manager-trilio-system       trilio-system   1               2024-01-23 10:04:57.445143523 +0000 UTC deployed        k8s-triliovault-4.0.1           4.0.1
triliovault-operator                    trilio-system   1               2024-01-23 10:04:21.595835286 +0000 UTC deployed        k8s-triliovault-operator-4.0.1  4.0.1
```

Next, verify that the Trilio for Kubernetes deployments is in a READY state using the following command:

```
kubectl get deployment --namespace trilio-system
```

All deployments should be in the READY state:

```
NAME                                                       READY   STATUS      RESTARTS   AGE
k8s-triliovault-admission-webhook-764bc47586-s2cm4         1/1     Running     0          34m
k8s-triliovault-control-plane-59d5f6c4b-dbm42              2/2     Running     0          34m
k8s-triliovault-exporter-85dbfd8494-4bp8t                  1/1     Running     0          34m
k8s-triliovault-ingress-nginx-controller-5c5c977c9-jwvll   1/1     Running     0          34m
k8s-triliovault-operator-57c8759d7f-7znp8                  1/1     Running     0          35m
k8s-triliovault-resource-cleaner-28433430-zc252            0/1     Completed   0          9m44s
k8s-triliovault-web-7fd4694d8-rf6tn                        1/1     Running     0          34m
k8s-triliovault-web-backend-548f8c97c8-bpxp5               1/1     Running     0          34m
```

The Trilio license is pre-activated during the installation process, you can check that using the below command:

```
kubectl get license --namespace trilio-system
```

You should see the output below and the license is expected to be in an **Active** state:

```
NAMESPACE       NAME             STATUS   MESSAGE                           EXPIRATION TIME
trilio-system   trilio-license   Active   License Activated successfully.   2024-02-23T00:00:00Z
```

The T4K Management Console is also pre-configured, you can check it using the below command:

```
kubectl get ingress --namespace trilio-system
```

You should see the ingress configured with the hostname `tvk.doks.com`:

```
NAMESPACE     NAME              CLASS                       HOSTS          ADDRESS         PORTS   AGE
trilio-system k8s-triliovault   k8s-triliovault-tvk-nginx   tvk.doks.com   10.245.98.124   80      42m
```

**To launch the console quickly via port-forwarding:**

1. kubectl port-forward –address 0.0.0.0 svc/k8s-triliovault-ingress-nginx-controller –namespace trilio-system 80:80 &
2. Add the following entry to your /etc/host file `127.0.0.1 tvk.doks.com`
3. Launch the UI: [http://tvk.doks.com/](http://tvk.doks.com/) and use the `kubeconfig` file for the cluster (Download it from the Kubernetes cluster page on the Digital Ocean portal)

**Note:** If you are using `doctl` to generate a `kubeconfig` file, the `kubeconfig` contains an `exec` section with custom commands that may not be recognized by the `Trilio Management Console`. Hence, download the `kubeconfig` file directly from the Kubernetes cluster page shown under [“Access Cluster Config File”](https://docs.trilio.io/kubernetes/appendix/fetch-digitalocean-kubernetes-cluster-kubeconfig-for-tvk-ui-authentication) to use a workaround for the `kubeconfig` generated through `doctl`.

To launch the UI via NodePort/LoadBalancer or to change the console hostname visit : [Enable Web UI Access](https://docs.trilio.io/kubernetes/advanced-configuration/management-console/accessing-the-ui)

A video demonstrating the steps above can be found [here](https://youtu.be/VgG5dQRERrE)

Follow [these instructions](https://docs.trilio.io/kubernetes/getting-started-3/using-trilio/getting-started-with-management-console/navigating-intro) to explore different features of the T4K Management Console.

**Creating a Backup Target Repository:**

Before performing a backup operation, the user needs to create a Target (Backup repository) to store the backup files. Please follow [these instructions](https://docs.trilio.io/kubernetes/getting-started-3/using-trilio/getting-started-with-management-console/navigating-intro/backup-and-recovery/targets/create-target) for creating a Trilio Target to Store Backups in Digital Ocean Spaces using CLI.

**Running Backups & Restores:**

1. Visual Users: Please follow [these instructions](https://docs.trilio.io/kubernetes/getting-started-3/using-trilio/getting-started-with-management-console/index/creating-backups) to get started by protecting your applications with Trilio for Kubernetes through the management console. A [video](https://www.youtube.com/watch?v=ThtmUumBohE&t=94s) explaining the workflows in detail is provided under Additional Links.
2. CLI Users: If you want to use CLI to perform backup and restore operations of a namespace, please follow [these instructions](https://docs.trilio.io/kubernetes/getting-started-3/using-trilio/getting-started-1/triliovault-crds#backupplan).

**Need Help?**

Please use the Slack invite link provided under Additional Links to connect with our engineers and get support.

In this article...

- [**Need Backup and Recovery for Kubernetes?**](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/#need-backup-and-recovery-for-kubernetes)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/#creating-an-app-using-the-api)
- [Getting Started After Deploying TrilioVault for Kubernetes](https://docs.digitalocean.com/products/marketplace/catalog/triliovault-for-kubernetes/#getting-started-after-deploying-triliovault-for-kubernetes)

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