---
url: "https://docs.digitalocean.com/products/marketplace/catalog/srs/"
title: "SRS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/srs/)
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

- SRS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SRS

Generated on 13 Mar 2024
from [the SRS catalog page](https://marketplace.digitalocean.com/apps/srs)

SRS Stack is an all-in-one, out-of-the-box, and open-source video solution for creating online video services, including live streaming and WebRTC, on the cloud or through self-hosting.

SRS Stack makes it easy for you to create an online video service. It is made using Go, Reactjs, SRS, FFmpeg, and WebRTC. It supports protocols like RTMP, WebRTC, HLS, HTTP-FLV, and SRT. It offers features like authentication, streaming on multiple platforms, recording, transcoding, virtual live events, automatic HTTPS, and an easy-to-use HTTP Open API.

## Features

- Publish live streams with WebRTC, RTMP or SRT
- Play Live streams with RTMP, SRT, HTTP-FLV, WebRTC and HLS
- WebRTC to RTMP Adapter, vice versa
- Web Management Dashboard
- Stream authentication for publisher
- Open Source [SRS](https://github.com/ossrs/srs) Media Server
- Automatic HTTPS by [letsencrypt](https://letsencrypt.org/)
- Support restreaming to multiple platforms.
- Record live stream to MP4 file.
- Support virtual live streaming, covert file or other resource to live.
- Support live streaming transcoding by FFmpeg.
- Support transcription for converting speech to text.
- Support pull RTSP from IP Camera and stream to YouTube/Twitch/Facebook.
- Support AI assistant for live room.

## Tutorials

- [How to Setup a Video Streaming Service by 1-Click](https://blog.ossrs.io/how-to-setup-a-video-streaming-service-by-1-click-e9fe6f314ac6)
- [How to Setup a Video Streaming Service with aaPanel](https://blog.ossrs.io/how-to-setup-a-video-streaming-service-by-aapanel-9748ae754c8c)
- [How to Publish Your SRS Livestream Through WordPress](https://blog.ossrs.io/publish-your-srs-livestream-through-wordpress-ec18dfae7d6f)
- [How to Secure SRS Stack with Let’s Encrypt by 1-Click](https://blog.ossrs.io/how-to-secure-srs-with-lets-encrypt-by-1-click-cb618777639f)
- [Maximize Your Live Streaming Reach: A Guide to Multi-Platform Streaming](https://blog.ossrs.io/maximize-your-live-streaming-reach-a-guide-to-multi-platform-streaming-38be22beec57)
- [How to Record Live Streaming to MP4 File](https://blog.ossrs.io/how-to-record-live-streaming-to-mp4-file-2aa792c35b25)
- [Virtual Live Events: Revolutionizing the Way We Experience Entertainment](https://blog.ossrs.io/virtual-live-events-revolutionizing-the-way-we-experience-entertainment-ba1895828b4f)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [SRS Stack](https://github.com/ossrs/srs-stack) | 5.13.31 | [AGPL-3.0-or-later](https://github.com/ossrs/srs-stack/blob/main/LICENSE) |
| [SRS](https://github.com/ossrs/srs) | [5.0](https://github.com/ossrs/srs/releases?q=v5.0) | [MIT](https://github.com/ossrs/srs/blob/develop/LICENSE) |
| Docker | 20.10 | [Apache-2.0](https://github.com/docker/docker/blob/master/LICENSE) |
| Nginx | 1.18.0 | [Custom](http://nginx.org/LICENSE) |
| Redis | 5.0 | [BSD-3-Clause](https://redis.io/docs/about/license/) |
| FFmpeg | 4.2 | [GPL-2.0](https://ffmpeg.org/legal.html) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ossrs-srs)

## Creating an App using the API

In addition to creating a Droplet from the SRS 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB SRS Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ossrs-srs"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying SRS

Please follow the steps to configure SRS.

## Step 1

Create a droplet from the image available in the Marketplace.

## Step 2

After you created a Droplet, you can navigate to `http://your_droplet_public_ipv4/mgmt` to initialize it.

> Note: If you forget the password, you can find it at `/data/config/.env` as env `MGMT_PASSWORD`

## Step 3

Follow the guide in SRS, to publish stream and play it.

## Step 4 (Optional)

If wants to publish by WebRTC, you must setup the HTTPS.

Add a domain to your droplet. This is required because most browsers require HTTPS in order to allow you to use the camera and microphone in a website, and it’s not possible to enable HTTPS just with an IP.

Then navigate to `System / HTTPS` and input your domain, click the `Submit` to request a HTTPS cert from [letsencrypt](https://letsencrypt.org/).

In this article...

- [Features](https://docs.digitalocean.com/products/marketplace/catalog/srs/#features)
- [Tutorials](https://docs.digitalocean.com/products/marketplace/catalog/srs/#tutorials)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/srs/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/srs/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/srs/#creating-an-app-using-the-api)
- [Getting Started After Deploying SRS](https://docs.digitalocean.com/products/marketplace/catalog/srs/#getting-started-after-deploying-srs)
- [Step 1](https://docs.digitalocean.com/products/marketplace/catalog/srs/#step-1)
- [Step 2](https://docs.digitalocean.com/products/marketplace/catalog/srs/#step-2)
- [Step 3](https://docs.digitalocean.com/products/marketplace/catalog/srs/#step-3)
- [Step 4 (Optional)](https://docs.digitalocean.com/products/marketplace/catalog/srs/#step-4-optional)

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