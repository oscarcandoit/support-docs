---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/"
title: "ngrok Ingress Controller | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/)
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

- ngrok Ingress Controller

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ngrok Ingress Controller

Generated on 7 Dec 2023
from [the ngrok Ingress Controller catalog page](https://marketplace.digitalocean.com/apps/ngrok-ingress-controller)

The ngrok Ingress Controller for Kubernetes provides ingress-as-a-service to your Kubernetes applications by offloading traffic management, performance, and security to ngrok’s global network.

Because it leverages native Kubernetes tooling, you can configure the route, host, and downstream service via the standard Kubernetes Ingress object, and you can deploy it to your DigitalOcean Kubernetes (DOKS) cluster with a Helm chart.

Once deployed to your cluster, the Ingress Controller connects to ngrok’s cloud service, which provisions the resources necessary to provide the ingress—such as Web Application Firewalls, Global Server Load Balancers, local load balancers, and reverse proxies—in ngrok’s global network.

The ngrok Ingress Controller for Kubernetes equips you to serve apps and APIs without needing to configure networking details such as ELBs, IPs, network interfaces, or VPC routing, radically simplifying ingress into Kubernetes.

![](https://info.ngrok.com/hubfs/marketplace-listing/ngrok_kic_diagram.png)

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=ngrok-ingress-controller&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating ngrok Ingress Controller using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks ngrok-ingress-controller
```

## Getting Started After Deploying ngrok Ingress Controller

## Connect to your cluster

Follow [these instructions](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`.

## Confirm that the ngrok Ingress Controller is running

Run the steps below to confirm the Ingress Controller is running in your cluster.

### Verify the Helm installation was successful

Run the following command:

`helm ls -n ngrok-ingress-controller`

The output looks similar to the following:

```
NAME                        NAMESPACE                   REVISION    UPDATED                                 STATUS      CHART                                   APP VERSION
ngrok-ingress-controller    ngrok-ingress-controller    1           2023-12-05 16:16:32.756868 -0600 CST    deployed    kubernetes-ingress-controller-0.12.1    0.10.1
```

The `STATUS` column value should be `deployed`.

### Verify the ngrok Ingress Controller pods are up and running

Run the following command:

`kubectl get pods -n ngrok-ingress-controller`

The output looks similar to the following:

```
NAME                                                              READY   STATUS    RESTARTS   AGE
ngrok-ingress-controller-kubernetes-ingress-controller-manwpd5d   1/1     Running   0          33s
```

All pods should be in a `READY` state, and `STATUS` should be `Running`.

## Add ngrok credentials

By default, the ngrok Ingress Controller looks for your authtoken and API key in the named secret: `ngrok-ingress-controller-credentials`

Please ensure that the secret exists in your cluster. To apply the secret to your cluster, create a file called `creds.yaml` with the contents below, entering your own `API_KEY` and `AUTHTOKEN` values.

```
apiVersion: v1
kind: Secret
metadata:
  name: ngrok-ingress-controller-credentials
  namespace: ngrok-ingress-controller
data:
  API_KEY: "YOUR-API-KEY"
  AUTHTOKEN: "YOUR-AUTHTOKEN"
```

Apply the manifest to your DOKS cluster by running the following:

`kubectl apply -f creds.yaml`

## Deploy a sample application

You can now deploy an application to your DOKS cluster and configure ingress using the standard Ingress object.

Create a `manifest.yml` file with the following contents, replacing `NGROK_DOMAIN` with your ngrok domain name:

```
apiVersion: v1
kind: Service
metadata:
 name: game-2048
 namespace: ngrok-ingress-controller
spec:
 ports:
   - name: http
     port: 80
     targetPort: 80
 selector:
   app: game-2048
---
apiVersion: apps/v1
kind: Deployment
metadata:
 name: game-2048
 namespace: ngrok-ingress-controller
spec:
 replicas: 1
 selector:
   matchLabels:
     app: game-2048
 template:
   metadata:
     labels:
       app: game-2048
   spec:
     containers:
       - name: backend
         image: alexwhen/docker-2048
         ports:
           - name: http
             containerPort: 80
---
# ngrok Ingress Controller Configuration
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
 name: game-2048-ingress
 namespace: ngrok-ingress-controller
spec:
 ingressClassName: ngrok
 rules:
   - host: NGROK_DOMAIN
     http:
       paths:
         - path: /
           pathType: Prefix
           backend:
             service:
               name: game-2048
               port:
                 number: 80
```

Apply the manifest to your DOKS cluster by running the following:

`kubectl apply -f ngrok-manifest.yaml`

## Verify deployment

To confirm the manifest was successfully applied, go to the [ngrok Dashboard](https://dashboard.ngrok.com/) and click [Edge Configurations](https://dashboard.ngrok.com/edge-configurations). You should see a new Edge Configuration for your cluster with the name matching your URL. For example, `my-awesome-k8s-cluster.ngrok.app` (1). Also note that some of your cluster configurations are presented in the dashboard as annotations (2).

![](https://info.ngrok.com/hubfs/marketplace-listing/ngrok-edges.png)

Go to your ngrok domain in a web browser to test the deployment. You should see the 2048 game application running.

![](https://info.ngrok.com/hubfs/marketplace-listing/game-scoreboard.png)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#creating-an-app-using-the-api)
- [Getting Started After Deploying ngrok Ingress Controller](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#getting-started-after-deploying-ngrok-ingress-controller)
- [Connect to your cluster](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#connect-to-your-cluster)
- [Confirm that the ngrok Ingress Controller is running](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#confirm-that-the-ngrok-ingress-controller-is-running)
  - [Verify the Helm installation was successful](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#verify-the-helm-installation-was-successful)
  - [Verify the ngrok Ingress Controller pods are up and running](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#verify-the-ngrok-ingress-controller-pods-are-up-and-running)
- [Add ngrok credentials](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#add-ngrok-credentials)
- [Deploy a sample application](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#deploy-a-sample-application)
- [Verify deployment](https://docs.digitalocean.com/products/marketplace/catalog/ngrok-ingress-controller/#verify-deployment)

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