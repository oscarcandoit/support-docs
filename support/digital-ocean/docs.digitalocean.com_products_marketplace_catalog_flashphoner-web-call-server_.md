---
url: "https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/"
title: "Flashphoner Web Call Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/)
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

- Flashphoner Web Call Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Flashphoner Web Call Server

Generated on 6 Dec 2022
from [the Flashphoner Web Call Server catalog page](https://marketplace.digitalocean.com/apps/flashphoner-web-call-server)

Web Call Server is a platform for real-time audio and video applications. It is designed primarily for developers who spin up streaming projects such as video chat, webinar, mass broadcasting, web calls, low-latency web and mobile apps. The platform supports all popular today streaming video web-technologies such as WebRTC, Flash, RTMP, RTMFP, RTSP, HLS, MSE, SIP, and Websocket streaming, which allows delivering a video stream to a wide range of browsers and mobile devices. Development tools and APIs: Web SDK, iOS SDK, Android SDK, REST API. General features: low-latency streaming, low-latency CDN, VR streaming, recording, video mixing, screen-sharing, stream snapshots, real-time video transcoding, VOD, SIP calls, etc.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| WebCallServer | [5.2.1484](https://docs.flashphoner.com/display/WCS52EN/Release+notes) | [Custom](https://flashphoner.com/wcs5/web-call-server-5-7-eula.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=flashphoner-7-6)

## Creating an App using the API

In addition to creating a Droplet from the Flashphoner Web Call Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Flashphoner Web Call Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"flashphoner-7-6"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Flashphoner Web Call Server

- **Get a license** – This instance includes a free 30-days trial license for you to test WebCallServer functions. You can purchase a commercial license online [here](http://flashphoner.com/prices).

- **Test the instance** – Login to the WCS web interface by address


```
https://your_server_ip:8444/admin/
```


with demo account (user _demo_, password _demo_). Feel free to explore our web application examples.

- **Set up SSL certificates** – Login to the WCS web interface with admin account (user _admin_, password _admin_). Obtain an SSL certificate from your SSL provider and follow [these instructions](https://docs.flashphoner.com/display/WCS52EN/Websocket+SSL#WebsocketSSL-ImportSSLcertificatesusingwebinterface).

- **Next steps** – For more information on Flashphoner Web Call Server, please read [the official documentation](https://docs.flashphoner.com/display/WCS52EN/Server+functions).


In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Flashphoner Web Call Server](https://docs.digitalocean.com/products/marketplace/catalog/flashphoner-web-call-server/#getting-started-after-deploying-flashphoner-web-call-server)

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