---
url: "https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/"
title: "OpenFaaS Kubernetes | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/)
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

- OpenFaaS Kubernetes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenFaaS Kubernetes

Generated on 9 Nov 2023
from [the OpenFaaS Kubernetes catalog page](https://marketplace.digitalocean.com/apps/openfaas-kubernetes)

OpenFaaS ® is an award-winning open source project that makes it easy for developers to deploy applications to Kubernetes in a Serverless-style. Any microservice, API, binary, or function can be packaged and deployed in a very short period of time. Once [a workload](https://docs.openfaas.com/reference/workloads/) is deployed via the OpenFaaS [CLI](https://docs.openfaas.com/cli/install/), API or UI metrics will be tracked and used to auto-scale your code in response to demand.

OpenFaaS comes with built-in auto-scaling, [detailed metrics](https://docs.openfaas.com/architecture/metrics/) and [queue-processing](https://docs.openfaas.com/reference/async/). You can take advantage of pre-made functions from the Function, or a series of templates for Functions or Microservices covering a wide range of languages such as C#, Java, Go, Ruby, PHP, and more.

Your workloads can be accessed through the OpenFaaS gateway or triggered by a number of [event sources](https://docs.openfaas.com/reference/triggers/) such as Kafka, RabbitMQ, Redis and Cron.

The project is built around open interfaces that can be extended easily. Tutorials and guides can [help you enable TLS](https://docs.openfaas.com/reference/ssl/kubernetes-with-cert-manager/), [setup custom domains](https://docs.openfaas.com/reference/ssl/kubernetes-with-cert-manager/#20-ssl-and-custom-domains-for-functions), CI/CD, OAuth2, multi-user support, and many other features.

You can find out more about OpenFaaS at [https://www.openfaas.com/](https://www.openfaas.com/) or take the [free workshop online](https://github.com/openfaas/workshop/).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Prometheus](https://github.com/prometheus/prometheus) | [v2.47.2](https://github.com/prometheus/prometheus/releases/tag/v2.7.1) | [Apache 2.0](https://github.com/prometheus/prometheus/blob/master/LICENSE) |
| [Alertmanager](https://prometheus.io/docs/alerting/alertmanager/) | [v0.26.0](https://github.com/prometheus/alertmanager/releases/tag/v0.16.1) | [Apache 2.0](https://github.com/prometheus/prometheus/blob/master/LICENSE) |
| [NATS Streaming](https://github.com/nats-io/nats-streaming-server) | [0.25.5](https://github.com/nats-io/nats-streaming-server/releases/tag/v0.11.2) | [Apache 2.0](https://github.com/nats-io/nats-streaming-server/blob/master/LICENSE) |
| [faas-netes CE](https://github.com/openfaas/faas-netes/) | [0.17.2](https://github.com/openfaas/faas-netes/releases/tag/0.8.4) | [MIT](https://github.com/openfaas/faas-netes/blob/master/LICENSE) |
| [faas CE](https://github.com/openfaas/faas/) | [0.27.3](https://github.com/openfaas/faas/releases/tag/0.16.0) | [MIT](https://github.com/openfaas/faas/blob/master/LICENSE) |
| [nats-queue-worker CE](https://github.com/openfaas/nats-queue-worker/) | [0.14.1](https://github.com/openfaas/nats-queue-worker/releases/tag/0.7.2) | [MIT](https://github.com/openfaas/nats-queue-worker/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=openfaas&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating OpenFaaS Kubernetes using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks openfaas
```

## Getting Started After Deploying OpenFaaS Kubernetes

OpenFaaS has been deployed and is now fully-functioning. During the installation a password was created for your OpenFaaS Gateway along with a LoadBalancer to provide access to your gateway.

OpenFaas does not require `doctl`, however the below instructions make use of `doctl`. If you haven’t setup `doctl` get the `doctl` binary and run `doctl auth`.

[https://github.com/digitalocean/doctl](https://github.com/digitalocean/doctl)

### Configure `kubectl` locally

- Point `kubectl` to your cluster

In order to start using OpenFaaS, you will need to find your password and LoadBalancer IP. To do this, you will need to use `kubectl` and point it at your new cluster.

```
doctl k8s cluster list

f8d01a21-ef2a-4b93-b05f-6774e77a86e5    openfaas-cluster          lon1      1.14.5-do.0    running    openfaas-cluster-default-pool

doctl k8s cluster kubeconfig save openfaas-cluster
```

Now switch into the context of the cluster:

```
kubectl config get-contexts
*         do-lon1-openfaas-cluster         do-lon1-openfaas-cluster         do-lon1-openfaas-cluster-admin

kubectl config set-context do-lon1-openfaas-cluster
```

### Log into OpenFaaS

- Install the OpenFaaS CLI:

```
curl -sLSf https://cli.openfaas.com | sudo sh
```

> Note: the CLI is also available via `brew install faas-cli`

- Find your LoadBalancer IP:

You can use the LoadBalancer’s IP to log into OpenFaaS, operate the CLI, and to view the UI.

```
export OPENFAAS_URL=$(kubectl get svc -n openfaas gateway-external -o jsonpath='{.status.loadBalancer.ingress[*].ip}'):8080
echo Your gateway URL is: $OPENFAAS_URL
```

> Note: your DigitalOcean LoadBalancer may take a few minutes to come up, so if you’re not seeing an IP, try again.

- Get your password

```
echo $(kubectl get secret -n openfaas basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode) > password.txt

echo Your admin password is: $(cat password.txt)
```

- Now use the password to authenticate the CLI:

```
cat password.txt | faas-cli login --username admin --password-stdin
```

> Note: you can use this command at any time to retrieve your password

### Check that everything worked

- Deploy a function

```
faas-cli store list

# Find one you like

faas-cli store deploy nodeinfo

# List your functions

faas-cli list --verbose

# Check when the function is ready

faas-cli describe nodeinfo

Name:                nodeinfo
Status:              Ready

# Invoke the function using the URL given above, or via `faas-cli invoke`

echo | faas-cli invoke nodeinfo
echo -n "verbose" | faas-cli invoke nodeinfo
```

- Try the UI

You can access the UI at the same URL of the gateway, so try this URL:

```
echo http://$OPENFAAS_URL
```

![](https://github.com/openfaas/faas/raw/master/docs/inception.png)

_Demo of the inception function_

### Take the wheel

- Learn OpenFaaS

Now it’s over to you to start learning about Serverless with OpenFaaS and Kubernetes using the hands-on workshop.

[https://github.com/openfaas/workshop](https://github.com/openfaas/workshop)

- Add TLS for your OpenFaaS Gateway

You can add TLS to your OpenFaaS Gateway URL with the following documentation: [1.0 SSL for the Gateway](https://docs.openfaas.com/reference/ssl/kubernetes-with-cert-manager/)

- Join OpenFaaS Insiders

OpenFaaS Insiders get regular email updates on project news and developments including videos, blogs, and early-access to the latest features. Join by becoming a sponsor on GitHub at any tier.

[GitHub Sponsors](https://github.com/users/alexellis/sponsorship)

- Need help?

Visit [OpenFaaS Slack](https://slack.openfaas.io/)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#creating-an-app-using-the-api)
- [Getting Started After Deploying OpenFaaS Kubernetes](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#getting-started-after-deploying-openfaas-kubernetes)
  - [Configure `kubectl` locally](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#configure-kubectl-locally)
  - [Log into OpenFaaS](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#log-into-openfaas)
  - [Check that everything worked](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#check-that-everything-worked)
  - [Take the wheel](https://docs.digitalocean.com/products/marketplace/catalog/openfaas-kubernetes/#take-the-wheel)

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