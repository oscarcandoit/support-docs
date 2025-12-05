---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/"
title: "Ant Media Server Enterprise Edition | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/)
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

- Ant Media Server Enterprise Edition

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ant Media Server Enterprise Edition

Generated on 9 Aug 2025
from [the Ant Media Server Enterprise Edition catalog page](https://marketplace.digitalocean.com/apps/ant-media-server-enterprise-edition)

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
| AntMedia Server Enterprise Edition | 2.15.0 | Apache 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=antmedia-antmediaserveren-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Ant Media Server Enterprise Edition 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Ant Media Server Enterprise Edition Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"antmedia-antmediaserveren-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Ant Media Server Enterprise Edition

Bring your own license for using Ant Media Server Enterprise Edition

You could obtain a license from [https://antmedia.io](https://antmedia.io/)

To get started with Ant Media Server EE, visit your new Ant Media Server 1-Click App Droplet and follow the prompts on http://your\_server\_ip:5080.

### !!! Important Note:

Please use CPU-Optimized Droplets. Recommended starting droplet size is 4vCPUs, 8 GB Ram. Depending on your system load, you may need a bigger size. Please reach us if you are not sure which droplet size to choose.

Please add STUN server configuration by running the following 3 commands once.

echo ‘settings.webrtc.stunServerURI=stun:stun1.l.google.com:19302’ \| sudo tee -a /usr/local/antmedia/webapps/WebRTCAppEE/WEB-INF/red5-web.properties

echo ‘settings.webrtc.stunServerURI=stun:stun1.l.google.com:19302’ \| sudo tee -a /usr/local/antmedia/webapps/LiveApp/WEB-INF/red5-web.properties

sudo service antmedia restart

### Ultra Low Latency WebRTC Live Streaming

Ant Media Server Enterprise Edition supports adaptive ultra low latency WebRTC streaming.

In addition, Ant Media Server can

- Record WebRTC streams as MP4 and MKV
- Convert WebRTC streams to adaptive live HLS
- Create previews in PNG format from WebRTC streamsClick [here](https://resources.antmedia.io/docs/webrtc-publishing) for how to publish with ultra low latency.### Pull IP Camera StreamsWith this feature, users can pull IP Camera streams easily on management panel. In other words, you don’t need to write any commands or use terminal. Click \[here\](<https://resources.antmedia.io/docs/re-streaming-ip-cameras-external-sources) for how to pull IP Camera Streams.

### Publish Live Stream with RTMP

There are many ways to publish Live Stream with RTMP to Ant Media server. Here are the some of the ways:

- [Publish with a Desktop Software like OBS, XSplit, Wirecast, etc.](https://antmedia.io/docs/category/rtmp/)

- [Publish with a Hardware Encoder (Teradek, Tricaster, Gosolo, etc)](https://antmedia.io/docs/guides/publish-live-stream/rtmp/publish-with-teradek/)

- [Publish with an Android Mobile App](https://antmedia.io/docs/guides/developer-sdk-and-api/sdk-integration/android-sdk/)

- [Publish with an IOS Mobile App](https://antmedia.io/docs/guides/developer-sdk-and-api/sdk-integration/ios-sdk/)

- [Enable SSL](https://antmedia.io/docs/guides/installing-on-linux/setting-up-ssl/)

For each case we give an example on how to publish live stream with RTMP to Ant Media Server. For more please look at [the docs](https://docs.antmedia.io/).


In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ant Media Server Enterprise Edition](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#getting-started-after-deploying-ant-media-server-enterprise-edition)
  - [!!! Important Note:](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#-important-note)
  - [Ultra Low Latency WebRTC Live Streaming](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#ultra-low-latency-webrtc-live-streaming)
  - [Publish Live Stream with RTMP](https://docs.digitalocean.com/products/marketplace/catalog/ant-media-server-enterprise-edition/#publish-live-stream-with-rtmp)

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