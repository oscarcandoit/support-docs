---
url: "https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/"
title: "NGINX Ingress Controller | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/)
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

- NGINX Ingress Controller

[Give Feedback](https://ideas.digitalocean.com/documentation)

# NGINX Ingress Controller

Generated on 25 Mar 2024
from [the NGINX Ingress Controller catalog page](https://marketplace.digitalocean.com/apps/nginx-ingress-controller)

[NGINX](https://github.com/kubernetes/ingress-nginx/) is an Ingress Controller, and sits at the edge of your VPC acting as an entry point for your network. It operates at layer 7 of the OSI model and handles and routes HTTP requests to your web applications.

When NGINX is deployed to your DigitalOcean Kubernetes (DOKS) cluster, a Load Balancer is created as well, through which it receives the outside traffic. Then, you will have a domain set up with `A` type records (hosts), which in turn point to your load balancer’s external IP. So, data flow goes like this: `User Request -&amp;amp;amp;gt; Host.DOMAIN -&amp;amp;amp;gt; Load Balancer -&amp;amp;amp;gt; Ingress Controller (NGINX) -&amp;amp;amp;gt; Backend Applications (Services)`.

In a real world scenario, you do not want to use one Load Balancer per service, so you need a proxy inside the cluster, which is provided by the Ingress Controller. As with every Ingress Controller, NGINX allows you to define ingress objects. Each ingress object contains a set of rules that define how to route external traffic (HTTP requests) to your backend services. For example, you can have multiple hosts defined under a single domain, and then let NGINX take care of routing traffic to the correct host.

The NGINX Ingress Controller is deployed via [Helm](https://helm.sh/) and can be managed the usual way.

To know more about the community maintained version of the NGINX Ingress Controller, check the [official Kubernetes documentation](https://kubernetes.github.io/ingress-nginx/).

**Notes:**

- DigitalOcean uses Helm v3 to deploy the NGINX Ingress Controller to your DOKS cluster.
- The NGINX Ingress Controller 1-Click App also includes a $12/month DigitalOcean Load Balancer to ensure that ingress traffic is distributed across all of the nodes in your Kubernetes cluster.

## NGINX Example Setup Diagram

Below is a diagram depicting a more complete example for an NGINX based setup:

![NGINX Example Setup](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/ingress-nginx/assets/images/arch_nginx.png)

For setting up production-ready TLS certificates via Cert-Manager, see the `Additional Resources` section at the end of this quick start guide.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ingress-nginx | [v1.9.5](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.9.5) | [Apache 2.0](https://github.com/kubernetes/ingress-nginx/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=ingress-nginx&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating NGINX Ingress Controller using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks ingress-nginx
```

## Getting Started After Deploying NGINX Ingress Controller

### Connecting to Your Cluster

Follow these [instructions](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`.

### Confirming that NGINX Ingress Controller is Running

First, check if the Helm installation was successful by running command below:

```
helm ls -n ingress-nginx
```

The output looks similar to the following:

```
NAME             NAMESPACE       REVISION    UPDATED                                 STATUS      CHART                       APP VERSION
ingress-nginx    ingress-nginx   1           2022-04-18 18:12:41.623665 -0400 EDT    deployed    ingress-nginx-4.9.0         1.9.5
```

The `STATUS` column value should be `deployed`.

Next, verify if the NGINX Ingress Pods are up and running:

```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx
```

The output looks similar to the following:

```
NAMESPACE       NAME                                        READY   STATUS    RESTARTS   AGE
ingress-nginx   ingress-nginx-controller-664d8d6d67-6x4dd   1/1     Running   0          3m
ingress-nginx   ingress-nginx-controller-664d8d6d67-khm5x   1/1     Running   0          3m
```

All pods should be in a `READY` state, and `STATUS` should be `Running`.

Finally, inspect the external IP address of your NGINX Ingress Controller Load Balancer by running below command:

```
kubectl get svc -n ingress-nginx
```

The output looks similar to the following:

```
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.245.156.128   67.207.70.117   80:31477/TCP,443:31171/TCP   3m
ingress-nginx-controller-admission   ClusterIP      10.245.18.58     <none>          443/TCP                      3m
ingress-nginx-controller-metrics     ClusterIP      10.245.193.76    <none>          10254/TCP                    3m
```

Check that the `EXTERNAL-IP` column has a valid IP address.

### Tweaking Helm Values

The NGINX Ingress stack provides some custom values to start with. See the [values](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/values.yml) file from the main GitHub repository for more information.

You can inspect all the available options, as well as the default values for the NGINX Ingress Helm chart by running the following command:

```
helm show values ingress-nginx/ingress-nginx --version 4.9.0
```

After customizing the Helm values file (`values.yml`), you can apply the changes via `helm upgrade` command, as shown below:

```
helm upgrade ingress-nginx ingress-nginx/ingress-nginx --version 4.9.0 \
  --namespace ingress-nginx \
  --values values.yml
```

### Configuring NGINX Ingress Rules for Backend Services

To expose backend applications (services) to the outside world, you specify the mapping between the hosts and services in your Ingress Controller. NGINX follows a simple pattern in which you define a set of rules. Each rule associates a host to a backend service via a corresponding path `prefix`.

Typical ingress resource for NGINX looks like below:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-echo
  namespace: backend
spec:
  ingressClassName: nginx
  rules:
    - host: echo.starter-kit.online
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: echo
                port:
                  number: 8080
```

Explanations for the above configuration:

- `spec.rules`: A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
- `spec.rules.host`: Host is the fully qualified domain name of a network host (e.g.: `echo.starter-kit.online`).
- `spec.rules.http`: List of http selectors pointing to backends.
- `spec.rules.http.paths`: A collection of paths that map requests to backends. In the above example the `/` path prefix is matched with the `echo` backend `service`, running on port `8080`.

The above ingress resource tells NGINX to route each HTTP request that is using the `/` prefix for the `echo.starter-kit.online` host, to the `echo` backend service running on port `8080`. In other words, every time you make a call to `http://echo.starter-kit.online/` the request and reply will be served by the `echo` backend service running on port `8080`.

## Upgrading the NGINX Ingress Chart

You can check what versions are available to upgrade, by navigating to the [ingress-nginx](https://github.com/kubernetes/ingress-nginx/releases) official releases page on GitHub. Alternatively, you can also use [ArtifactHUB](https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx).

Then, to upgrade the stack to a newer version, run the following command, replacing the `&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;` placeholders:

```
helm upgrade ingress-nginx ingress-nginx/ingress-nginx \
  --version <INGRESS_NGINX_STACK_NEW_VERSION> \
  --namespace ingress-nginx \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for more information about the command.

## Upgrading With Zero Downtime in Production

By default, the ingress-nginx controller has service interruptions whenever it’s pods are restarted or redeployed. In order to fix that, see [this blog post](https://medium.com/codecademy-engineering/kubernetes-nginx-and-zero-downtime-in-production-2c910c6a5ed8) by Lindsay Landry from Codecademy.

## Migrating from stable/nginx-ingress

There are two main ways to migrate a release from `stable/nginx-ingress` to `ingress-nginx/ingress-nginx` chart:

1. For NGINX Ingress controllers used for non-critical services, the easiest method is to uninstall the old release and install the new one.
2. For critical services in production that require zero-downtime, you will want to:

- Install a second Ingress controller.
- Redirect your DNS traffic from the old controller to the new controller.
- Log traffic from both controllers during this changeover.
- Uninstall the old controller once traffic has fully drained from it.

For details, see [Upgrading With Zero Downtime in Production](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#upgrading-with-zero-downtime-in-production).

## Uninstalling the NGINX Ingress Controller

To delete your installation of NGINX Ingress Controller, run the following command:

```
helm uninstall ingress-nginx -n ingress-nginx
```

**Note:**

The command will delete all the associated Kubernetes resources installed by the `ingress-nginx` Helm chart, except the namespace itself. To delete the `ingress-nginx namespace` as well, please run below command:

```
kubectl delete ns ingress-nginx
```

### Additional Resources

For further study, see the [Starter Kit](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/) provided by DigitalOcean. Specifically, for more information on [NGINX](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md), see the following:

- [Configuring DNS for the NGINX Ingress Controller](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-2---configuring-dns-for-nginx-ingress-controller).
- [Creating some sample backend services to start with](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-3---creating-the-nginx-backend-services).
- [Configuring Ingress Rules for the sample backend services](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-4---configuring-nginx-ingress-rules-for-backend-services).
- [Configuring production ready TLS certificates for your NGINX Ingress Controller](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-5---configuring-production-ready-tls-certificates-for-nginx).
- [Enabling Proxy Protocol for your NGINX Ingress setup](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-6---enabling-proxy-protocol).

To further enrich your experience, we also provide the following extra guides:

- [Setting up wildcard certificates for NGINX Ingress](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/guides/wildcard_certificates.md).
- [Ingress Controller Load Balancer migration](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/guides/ingress_loadbalancer_migration.md).
- [Performance considerations for NGINX](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/guides/nginx_performance_considerations.md).

In this article...

- [NGINX Example Setup Diagram](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#nginx-example-setup-diagram)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#creating-an-app-using-the-api)
- [Getting Started After Deploying NGINX Ingress Controller](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#getting-started-after-deploying-nginx-ingress-controller)
  - [Connecting to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#connecting-to-your-cluster)
  - [Confirming that NGINX Ingress Controller is Running](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#confirming-that-nginx-ingress-controller-is-running)
  - [Tweaking Helm Values](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#tweaking-helm-values)
  - [Configuring NGINX Ingress Rules for Backend Services](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#configuring-nginx-ingress-rules-for-backend-services)
- [Upgrading the NGINX Ingress Chart](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#upgrading-the-nginx-ingress-chart)
- [Upgrading With Zero Downtime in Production](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#upgrading-with-zero-downtime-in-production)
- [Migrating from stable/nginx-ingress](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#migrating-from-stablenginx-ingress)
- [Uninstalling the NGINX Ingress Controller](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#uninstalling-the-nginx-ingress-controller)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/nginx-ingress-controller/#additional-resources)

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