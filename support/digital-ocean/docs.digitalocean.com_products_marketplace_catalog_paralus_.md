---
url: "https://docs.digitalocean.com/products/marketplace/catalog/paralus/"
title: "Paralus | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/paralus/)
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

- Paralus

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Paralus

Generated on 18 May 2023
from [the Paralus catalog page](https://marketplace.digitalocean.com/apps/paralus)

Paralus is a free, open source project that enables **controlled, audited access to Kubernetes infrastructure** for your users, user groups, and services that ships as a GUI, API, and CLI.

It offers access management for developers, architects, and CI/CD tools to remote K8s clusters by consolidating zero-trust access principles such as transaction-level authentication and authorization into a single open-source tool. It helps engineering and architecture teams streamline access control for their fleet of Kubernetes clusters spanning different operating environments, different public clouds and Kubernetes distributions, and on-premises data centers operating behind firewalls.

Paralus can be easily integrated with your pre-existing **SSO providers**, or **Identity Providers (IdP)** that support **OIDC (OpenID Connect)**.

![Paralus](https://www.paralus.io/img/paralus_hld.png)

## Features

- Creation of custom roles, users, and groups.
- Custom user role creation and revoking of permissions.
- Ability to control access via pre-configured roles across clusters, namespaces, projects, and more.
- Seamless integration with Identity Providers (IdPs) allowing the use of external authentication engines for users and group definitions, such as GitHub, Google, Azure AD, Okta, and others.
- Automatic logging of all user actions performed for audit and compliance purposes.
- Interact with Paralus either with a modern web GUI (default), a CLI tool called pctl, or Paralus API.

Read more about the components and how it works in the [Paralus documentation](https://www.paralus.io/docs/architecture/).

You can contribute to Paralus too. Check out our [Contribution guidelines](https://www.paralus.io/docs/references/contribution).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Paralus](https://github.com/paralus/paralus/) | [0.2.3](https://github.com/paralus/paralus/releases/tag/v0.1.3) | [Apache License 2.0](https://github.com/paralus/paralus/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=paralus&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Paralus using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks paralus
```

## Getting Started After Deploying Paralus

Getting Started:

Configure access to the Kubernetes cluster using `doctl` as mentioned in the [doctl documentation](https://docs.digitalocean.com/reference/doctl/how-to/install/).

Connect to your Kubernetes cluster and validate that Paralus is installed correctly by ensuring that all the pods are running

`kubectl get pods -n paralus`

Before you are able to use Paralus, there are a few things that you need to do.

You will not be able to access the Paralus dashboard if you skip any of the following steps.

1. Updating The Domain Name

* * *

Paralus makes use of domain based routing and hence you need to have a domain name with you to be able to access the Paralus dashboard.

Once the installation is complete, run the following command to update the domain name with your domain name.

```
$ helm upgrade paralus paralus/ztka -n paralus --values https://raw.githubusercontent.com/paralus/helm-charts/main/examples/values.dev-generic.yaml --set fqdn.domain="yourdomain.com"
```

> Replace `yourdomain.com` with your actual domain name.

2. Configuring DNS settings

* * *

To be able to access the Paralus dashboard, you also need to update the DNS settings of your domain to point to the IP address of the installation. Run the following command to fetch the IP address of the load balancer.

```
kubectl get svc paralus-contour-envoy -n paralus

NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
paralus-contour-envoy   LoadBalancer   10.245.58.69   138.68.122.180   80:32722/TCP,443:32656/TCP   2m32s
```

Navigate to your domain name’s DNS configuration page and create three CNAME records with the IP address of the load balancer you get in the above step.

| Type | Address | Resolves To | TTL |
| --- | --- | --- | --- |
| A | console.yourdomain.com | 138.68.122.180 | 1 Hour |
| A | \*.core-connector.yourdomain.com | 138.68.122.180 | 1 Hour |
| A | \*.user.yourdomain.com | 138.68.122.180 | 1 Hour |

3. Reset Default Password

* * *

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user.

To do so, execute the following command

```
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.yourdomain.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j
```

> The password reset URL is valid only for 10 minutes. In case you are unable to get the link, refer to our [troubleshooting guide](https://www.paralus.io/docs/references/troubleshooting#password-reset-link-expired) to regenerate the password reset URL.

Access the URL in a browser, and provide a new password.

4. Access Paralus Dashboard

* * *

In a new browser window/tab navigate to [http://console.yourdomain.com](http://console.yourdomain.com/) and log in with the following credentials:

username: [admin@paralus.local](mailto:admin@paralus.local) \- or the one you specified in values.yml

password: _the password you provided in the earlier step._

You’ll be taken to the default project page.

![Paralus Dashboard](https://www.paralus.io/img/docs/paralus-dashboard.png)

You’ve successfully deployed Paralus.

Refer to [Paralus documentation](https://www.paralus.io/docs/) and [blog](https://www.paralus.io/blog) to know more about what you can do with Paralus.

In this article...

- [Features](https://docs.digitalocean.com/products/marketplace/catalog/paralus/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/paralus/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/paralus/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/paralus/#creating-an-app-using-the-api)
- [Getting Started After Deploying Paralus](https://docs.digitalocean.com/products/marketplace/catalog/paralus/#getting-started-after-deploying-paralus)

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