---
url: "https://docs.digitalocean.com/products/marketplace/catalog/epinio/"
title: "Epinio | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/epinio/)
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

- Epinio

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Epinio

Generated on 16 Aug 2022
from [the Epinio catalog page](https://marketplace.digitalocean.com/apps/epinio)

## Epinio

The Epinio Application Development Engine for Kubernetes. Epinio installs into any Kubernetes cluster to bring your application from source code to deployment and allow for Developers and Operators to work better together.

## Why use Epinio?

### Developer Happiness

Reduce the stress and focus on your application logic instead of Container or Kubernetes details.

### Fast & Lightweight

Epinio runs well on any Kubernetes Cluster including your local development machine with Rancher Desktop

### Flexible with Sane Defaults

Epinio uses Kubernetes generics and open-source components to give a fantastic developer experience without locking you into our idea of what an application looks like.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Epinio](https://epinio.io/) | [v1.0.0](https://github.com/epinio/helm-charts/releases/tag/epinio-0.5.0) | [Apache License](https://github.com/epinio/epinio/blob/main/LICENSE) |
| [CertManager](https://cert-manager.io/) | [1.7.2](https://github.com/cert-manager/cert-manager/releases/tag/v1.7.1) | [Apache](https://github.com/cert-manager/cert-manager/blob/master/LICENSE) |
| [Traefik](https://traefik.io/) | [10.20.1](https://artifacthub.io/packages/helm/traefik/traefik/10.14.2) | [MIT](https://github.com/traefik/traefik/blob/master/LICENSE.md) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=epinio&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Epinio using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks epinio
```

## Getting Started After Deploying Epinio

To keep the installation easy, Epinio used a “magic” domain as the system domain (read more about it here: [https://docs.epinio.io/installation/magicDNS\_setup)](https://docs.epinio.io/installation/magicDNS_setup)).

You now need to connect to the Kubernetes cluster in order to:

- Find the automatically assigned system domain
- Change the Epinio system domain to your desired domain

You first need to get a kubeconfig file that points to your DigitalOcean Kubernetes cluster. You can download that file from the DigitalOcean dashboard. As soon as you have `kubectl` talking to your new Kubernetes cluster, find URL or Epinio with:

```
$ kubectl get ing -n epinio epinio
```

(look at the “HOSTS” column)

If you want to change the system domain to a domain you own, you first need to point that desired domain to the LoadBalancer IP address of Traefik. You can find it with a command like this:

```
$ kubectl get svc -n traefik traefik --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}"
```

After you configured your DNS server, you now configure Epinio to use that domain as the “system domain”:

```
$ helm upgrade -n epinio epinio --reuse-values --set global.domain=yourwildcarddomainhere.org
```

The domain should be a wildcard domain. Read more here: [https://docs.epinio.io/installation/dns\_setup](https://docs.epinio.io/installation/dns_setup)

Now that you’ve set up Epinio system domain, it’s time to login to Epinio.

You can visit the Web UI (open the ingress url you discovered with `kubectl get ing -n epinio epinio`) or login using the CLI:

```
$ epinio login https://the_ingress_url_here
```

The default credentials are `admin/password` and _it’s important that you change those_ because your Epinio instance is now _publicly accessible_.

Do so by changing the User secrets on the cluster. Read more here:

[https://docs.epinio.io/references/authorization#list-the-epinio-users](https://docs.epinio.io/references/authorization#list-the-epinio-users)

Now `epinio` cli is pointed to this Epinio cluster and you can start working with it.

Read the Epinio documentation on how to get started:

[https://docs.epinio.io/tutorials/quickstart](https://docs.epinio.io/tutorials/quickstart)

In this article...

- [Epinio](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#epinio)
- [Why use Epinio?](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#why-use-epinio)
  - [Developer Happiness](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#developer-happiness)
  - [Fast & Lightweight](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#fast--lightweight)
  - [Flexible with Sane Defaults](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#flexible-with-sane-defaults)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#creating-an-app-using-the-api)
- [Getting Started After Deploying Epinio](https://docs.digitalocean.com/products/marketplace/catalog/epinio/#getting-started-after-deploying-epinio)

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