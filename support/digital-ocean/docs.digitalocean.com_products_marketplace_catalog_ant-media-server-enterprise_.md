---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/"
title: "Ant Media Server Enterprise | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/)
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

- Ant Media Server Enterprise

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ant Media Server Enterprise

Generated on 24 May 2025
from [the Ant Media Server Enterprise catalog page](https://marketplace.digitalocean.com/apps/ant-media-server-enterprise)

- **Ultra Low Latency Adaptive WebRTC Live Streaming**

1 to N Low Latency adaptive WebRTC Live Streaming is about 500ms

- **Streams Play Everywhere & Every Internet Speed**

RTMP, MP4, HLS, WebRTC and Adaptive bitrate support.

- **Scaling within the Cluster**

Scale Publishers and Viewers with auto-scaling clusters

- **Simulcast to Social Media**

Simulcast to Facebook , YouTube, Periscope channels or any 3. party Endpoint at the same time

- **SDK for iOS, Android, and JavaScript**

WebRTC and RTMP SDKs support both broadcasting and playing in iOS, Android, and JavaScript

- **IP Camera Streaming**

Compatibility with ONVIF cameras creates an IP camera Solution with PTZ and Auto Discovery Features

- **IPTV Solution**

Remote Stream Fetching and Compatibility with MAG Set-Top-Boxes

- **Open Source**

Community Edition is Open Source on GitHub

- **Other Features**

SFU in One to Many WebRTC Streams,One-Time Token Control,Object Detection,Built-in Amazon S3 Support, H.265,VP8 and CMAF


## Software Included

| Package | Version | License |
| --- | --- | --- |
| AntMedia Server Enterprise Edition | 2.14.0 | Apache 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=ant-media&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Ant Media Server Enterprise using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks ant-media
```

## Getting Started After Deploying Ant Media Server Enterprise

After the installation is complete, don’t forget to change the ingress host addresses for edge and origin. And then update your DNS according to the ingress IP address and hostnames.

```
kubectl edit ingress ant-media-server-origin
kubectl edit ingress ant-media-server-edge
```

## Install SSL

By default, a self-signed certificate comes in the Ant Media Server Kubernetes structure that you install with Helm. If you want, you can replace it with your own certificate as below or follow the steps below for Let’s Encrypt.

```
kubectl create -n antmedia secret tls ${CERT_NAME} --key ${KEY_FILE} --cert ${CERT_FILE}
```

### Use Let’s Encrypt

To install SSL, use the below script.

```
wget https://raw.githubusercontent.com/ant-media/helm/add_helm_repo/ams-k8s-ssl.sh
bash ams-k8s-ssl.sh
```

Then wait for the certificate to be created.

If everything went well, the output of the `kubectl get -n antmedia certificate` command will show the value True.

Then you can reach the Ant Media Edge/Origin instances over HTTPS.

[https://{origin}.{example}.{com}](https://{origin}.{example}.{com}/)

[https://{edge}.{example}.{com}](https://{edge}.{example}.{com}/)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ant Media Server Enterprise](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#getting-started-after-deploying-ant-media-server-enterprise)
- [Install SSL](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#install-ssl)
  - [Use Let’s Encrypt](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise/#use-lets-encrypt)

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