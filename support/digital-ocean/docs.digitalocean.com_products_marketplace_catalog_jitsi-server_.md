---
url: "https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/"
title: "Jitsi Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/)
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

- Jitsi Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Jitsi Server

Generated on 11 Jun 2025
from [the Jitsi Server catalog page](https://marketplace.digitalocean.com/apps/jitsi-server)

Jitsi is an open source app for videoconferencing and chat. Works with Windows, Linux, Mac OS X and Android clients.

Droplets created by using this image allow videoconferencing between Windows, Mac, Linux, Android and iOS users, just requiring to open a new browser tab on laptops/desktops or to install the Jitsi app from the Play Store/App Store on mobile.

This is a pre-configured image with pre-configured dependencies. You’ll only need a domain and we provide the scripts for an effortless setup with HTTPS enabled for secure communication with your team.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Jitsi Server | Latest | [Apache 2.0](https://github.com/jitsi/jitsi/blob/master/LICENSE) |
| NGINX | 1.18.0 | [NGINX License](http://nginx.org/LICENSE) |
| Fail2ban | 0.11.2 | [GPL-2](https://opensource.org/licenses/gpl-2.0.php) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=jitsiserver-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Jitsi Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Jitsi Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"jitsiserver-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Jitsi Server

## Configure Jitsi

## Step 1

Create a droplet from the image available in the Marketplace.

We recommend using [Premium-CPU Optimized Droplets](https://www.digitalocean.com/blog/introducing-premium-cpu-optimized-droplets) for production deployment. Please review [this benchmark analysis and tutorial](https://docs.digitalocean.com/developer-center/video-streaming-on-premium-cpu-optimized-droplets/) for running your own performance test and benchmark comparison data.

## Step 2

Before accessing the fresh droplet, add a domain to your project. This is required because most browsers require HTTPS in order to allow you to use the camera and microphone in a website, and it’s not possible to enable HTTPS just with an IP.

Here’s an excellent guide to do that: [https://www.digitalocean.com/docs/networking/dns/how-to/add-domains/](https://www.digitalocean.com/docs/networking/dns/how-to/add-domains/).

It is mandatory to add an A record (i.e. jitsi-example.digitalocean.com) pointing to the IP associated with your droplet.

## Step 3

Access the console (i.e via ssh by running `ssh root@123.456.789`). We have created a single script to configure Jitsi in a very straightforward way so please follow the instructions displayed in the terminal. During the first boot you’ll be asked to include your domain and your email shall be asked in order to create the HTTPS certificates. You’ll be notified when it’s time to renew the certificates and maintain your website with a secure connection.

Here’s an excellent guide if you have questions with respect to HTTPS and encryption: [https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04)

## Step 4 (Optional)

You can optionally add a password to control who can create a meeting. If you want to restrict that, edit `nano /etc/prosody/conf.avail/jitsi-example.digitalocean.com.cfg.lua`. There, look for the line that starts with `VirtualHost`, below it, there is a line that says `authentication = "anonymous"`, it should be changed to `authentication = "internal_plain"`.

After you saved the authentication changes, you can set one or more Jitsi users that will be able to create a meeting after providing a password. This can be configured with the command:

```
prosodyctl register the-user jitsi-example.digitalocean.com the-password
```

To allow users entering the videoconferences without providing them the user and password just created, go back to edit `/etc/prosody/conf.avail/jitsi-example.digitalocean.com.cfg.lua` and at the end of the file paste these lines:

```
VirtualHost "guest.jitsi-example.digitalocean.com"
    authentication = "anonymous"
    c2s_require_encryption = false
```

Edit `/etc/jitsi/meet/jitsi-example.digitalocean.com-config.js` and uncomment the line that says:

```
// anonymousdomain: 'guest.jitsi-example.digitalocean.com',
```

Edit `/etc/jitsi/jicofo/jicofo.conf` by switching to a configuration like this

```
jicofo {
  xmpp: {
    client: {
      client-proxy: focus.jitsi-example.digitalocean.com
    }
    trusted-domains: [ "recorder.jitsi-example.digitalocean.com" ]
  }
  bridge: {
    brewery-jid: "JvbBrewery@internal.auth.jitsi-example.digitalocean.com"
  }
  authentication: {
    enabled: true
    type: XMPP
    login-url:jitsi-example.digitalocean.com
  }
}
```

This shall enable users to enter the conference with and URL or the URL and a plain password that can be configured in the browser and is the same for all users. See [Jitsi documentation](https://community.jitsi.org/t/enable-password-for-rooms/19881) for the details.

Finally restart the services by typing:

```
systemctl restart {prosody,jicofo,jitsi-videobridge2,nginx}
```

## Use Jitsi

Connect to the host via the hostname you set up in the earlier. Just open a browser tab and visit [jitsi-example.digitalocean.com](https://my.openchannel.io/dashboard/5aea4b79fd67b63c867a949a/apps/5e8d0315207c0a569f482adb/versions/jitsi-example.digitalocean.com) (i.e. the domain that you previously configured).

## Good practices

1. It is highly recommended that you don’t disable the firewall.
2. Keep your server updated with the last security patches and recent software versions.
3. (Optional) Use SSH keys instead of typed passwords to enter your server via SSH. See the details here: [https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/)
4. (Optional) Configure an application such as Google Authenticator to provide a dynamic additional password for SSH access. See the details here: [https://www.digitalocean.com/community/tutorials/how-to-protect-ssh-with-two-factor-authentication](https://www.digitalocean.com/community/tutorials/how-to-protect-ssh-with-two-factor-authentication)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Jitsi Server](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#getting-started-after-deploying-jitsi-server)
- [Configure Jitsi](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#configure-jitsi)
- [Step 1](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#step-1)
- [Step 2](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#step-2)
- [Step 3](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#step-3)
- [Step 4 (Optional)](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#step-4-optional)
- [Use Jitsi](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#use-jitsi)
- [Good practices](https://docs.digitalocean.com/products/marketplace/catalog/jitsi-server/#good-practices)

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