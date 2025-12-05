---
url: "https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/"
title: "Cert-Manager | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/)
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

- Cert-Manager

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Cert-Manager

Generated on 25 Mar 2024
from [the Cert-Manager catalog page](https://marketplace.digitalocean.com/apps/cert-manager)

[Cert-Manager](https://cert-manager.io/) is a very popular open source `certificate management` tool, specifically designed to work with `Kubernetes`. It can handle all the required operations for obtaining, renewing and using `SSL/TLS` certificates. Cert-Manager is able to talk with various certificate authorities (or CAs), like: [Let’s Encrypt](https://letsencrypt.org/), [HashiCorp Vault](https://www.vaultproject.io/), and [Venafi](https://www.venafi.com/), and issue valid certificates for you automatically. On top of that, it can also take care of automatic certificate renewal before expiration.

Why do you need `SSL/TLS` certificates ?

First, and the most important aspect is verifying the `identity` of a host or site. You need to make sure that the person or company holding a website is to be trusted. This is a very important aspect, because you do not want to give your personal data (or even credit card details) to anyone.

Second important aspect deals with `sensitive data` which must be `encrypted`. The communication channel should never use a simple `HTTP` scheme, which is basically a `plain-text` protocol under the hood. In other words, data must travel encrypted between the two parties (meaning you, and the website).

Where does all this fit?

`Cert-Manager` goes hand in hand with your `Ingress Controller` resource. An `Ingress Controller` is the main entrypoint of your `Kubernetes` cluster, and sits in front of your `backend services`. So, by securing your ingress resources (e.g. `Nginx`), sensitive data never goes in or out un-encrypted. On top of that, you provide identity information to users, by presenting them a valid SSL/TLS certificate whenever they visit your website(s). Self-signed certificates are not to be trusted, and should never be used in production systems.

Please make sure to visit the Cert-Manager [official documentation](https://cert-manager.io/docs/) page to study more.

**Note:**

DigitalOcean is using `Helm v3` to deploy `Cert-Manager` to your `DOKS` cluster.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [cert-manager](https://cert-manager.io/) | [1.13.3](https://github.com/cert-manager/cert-manager/releases/tag/v1.13.3) | [Apache 2.0](https://github.com/cert-manager/cert-manager/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=cert-manager&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Cert-Manager using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks cert-manager
```

## Getting Started After Deploying Cert-Manager

### How to Connect to Your Cluster

Follow these [instructions](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`. Additional instructions for connecting to your cluster are included in the [DigitalOcean Control Panel](https://cloud.digitalocean.com/kubernetes/clusters/).

### How to confirm that Cert-Manager is running

First, check if the Helm installation was successful, by running below command:

```
helm ls -n cert-manager
```

The output looks similar to (the `STATUS` column value should be `deployed`):

```
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION
cert-manager    cert-manager    1               2022-02-21 18:49:08.264191 +0200 EET    deployed        cert-manager-v1.13.3     v1.13.3
```

Next, verify if the Cert-Manager Pods are up and running:

```
kubectl get pods -n cert-manager
```

The output looks similar to (all Pods should be in a `READY` state, and `STATUS` should be `Running`):

```
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-57d89b9548-94r5z              1/1     Running   0          3m24s
cert-manager-cainjector-5bcf77b697-hkv2k   1/1     Running   0          3m24s
cert-manager-webhook-9cb88bd6d-mxhgh       1/1     Running   0          3m24s
```

### Tweaking Helm Chart Values

The `cert-manager` stack provides some custom values to start with. Please have a look at the [values](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/cert-manager/values.yml) file from the main GitHub repository (explanations are provided inside, where necessary).

You can always inspect all the available options, as well as the default values for the `cert-manager` Helm chart by running below command:

```
helm show values jetstack/cert-manager --version 1.13.3
```

After tweaking the Helm values file (`values.yml`) according to your needs, you can always apply the changes via `helm upgrade` command, as shown below:

```
helm upgrade cert-manager jetstack/cert-manager --version 1.13.3 \
  --namespace cert-manager \
  --values values.yml
```

### Configuring TLS Certificates via Cert-Manager

Cert-Manager expects some typical CRDs to be created in order to operate. You start by creating a certificate [Issuer](https://cert-manager.io/docs/concepts/issuer/) CRD. Next, the `Issuer` CRD will try to fetch a valid TLS certificate for your Ingress Controller (e.g. Nginx) from a known authority, such as [Let’s Encrypt](https://letsencrypt.org/). To accomplish this task, the `Issuer` is using the `HTTP-01` challenge (it also knows how to perform `DNS-01` challenges as well, for wildcard certificates).

Next, a [Certificate](https://cert-manager.io/docs/concepts/certificate/) CRD is needed to store the actual certificate. The `Certificate` CRD doesn’t work alone, and needs a reference to an `Issuer` CRD to be able to fetch the real certificate from the `CA` (Certificate Authority).

Typical `Issuer` manifest looks like below (explanations for each relevant field is provided inline):

```
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: letsencrypt-nginx
  namespace: backend
spec:
  # ACME issuer configuration
  # `email` - the email address to be associated with the ACME account (make sure it's a valid one)
  # `server` - the URL used to access the ACME server’s directory endpoint
  # `privateKeySecretRef` - Kubernetes Secret to store the automatically generated ACME account private key
  acme:
    email: <YOUR_VALID_EMAIL_ADDRESS_HERE>
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-nginx-private-key
    solvers:
      # Use the HTTP-01 challenge provider
      - http01:
          ingress:
            class: nginx
```

Next, you need to configure each Nginx ingress resource to use TLS termination. Typical manifest looks like below:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-echo
  namespace: backend
  annotations:
    cert-manager.io/issuer: letsencrypt-nginx
spec:
  tls:
  - hosts:
    - echo.my-domain.org
    secretName: letsencrypt-nginx
  rules:
    - host: echo.my-domain.org
...
```

Explanation for the above configuration:

- `cert-manager.io/issuer`: Annotation that takes advantage of cert-manager ingress-shim to create the certificate resource on your behalf.
- `spec.tls.hosts`: List of hosts included in the TLS certificate.
- `spec.tls.secretName`: Name of the secret used to terminate TLS traffic on port 443.

Notice that the `Nginx Ingress Controller` is able to generate the `Certificate` CRD automatically via a special annotation: `cert-manager.io/issuer`. This saves work and time, because you don’t have to create and maintain a separate manifest for certificates as well (only the `Issuer` manifest is required). For other ingresses you may need to provide the `Certificate` CRD as well.

### Upgrading Cert-Manager Stack

You can check what versions are available to upgrade, by navigating to the [cert-manager](https://github.com/cert-manager/cert-manager/releases) official releases page from GitHub. Alternatively, you can also use [ArtifactHUB](https://artifacthub.io/packages/helm/cert-manager/cert-manager), which provides a more rich and user friendly interface.

Then, to upgrade the stack to a newer version, please run the following command (make sure to replace the `&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;` placeholders first):

```
helm upgrade cert-manager jetstack/cert-manager \
  --version <CERT_MANAGER_NEW_VERSION> \
  --namespace cert-manager \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation.

Also, please make sure to check the official recommendations for various [upgrade paths](https://cert-manager.io/docs/installation/upgrading/), from an existing release to a new major version of cert-manager.

### Uninstalling Cert-Manager Stack

To delete your installation of `cert-manager`, please run the following `Helm` command:

```
helm uninstall cert-manager -n cert-manager
```

**Note:**

Above command will delete all the associated `Kubernetes` resources installed by the `cert-manager` Helm chart, except the namespace itself. To delete the `cert-manager namespace` as well, please run below command:

```
kubectl delete ns cert-manager
```

### Additional Resources

You can visit the [Starter Kit](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/) set of guides provided by DigitalOcean for further study. Specifically for `Cert-Manager`, you can access the following content:

- [Configuring Production Ready TLS Certificates for Nginx](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/nginx.md#step-5---configuring-production-ready-tls-certificates-for-nginx).
- [Configuring Wildcard Certificates via Cert-Manager](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/blob/main/03-setup-ingress-controller/guides/wildcard_certificates.md).

To further enrich your experience, you can also browse the list of available [tutorials](https://cert-manager.io/next-docs/tutorials/) from the official `Cert-Manager` documentation site.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#creating-an-app-using-the-api)
- [Getting Started After Deploying Cert-Manager](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#getting-started-after-deploying-cert-manager)
  - [How to Connect to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#how-to-connect-to-your-cluster)
  - [How to confirm that Cert-Manager is running](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#how-to-confirm-that-cert-manager-is-running)
  - [Tweaking Helm Chart Values](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#tweaking-helm-chart-values)
  - [Configuring TLS Certificates via Cert-Manager](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#configuring-tls-certificates-via-cert-manager)
  - [Upgrading Cert-Manager Stack](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#upgrading-cert-manager-stack)
  - [Uninstalling Cert-Manager Stack](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#uninstalling-cert-manager-stack)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/cert-manager/#additional-resources)

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