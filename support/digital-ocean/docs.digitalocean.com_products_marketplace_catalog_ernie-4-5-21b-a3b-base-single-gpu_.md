---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/"
title: "ERNIE 4.5-21B-A3B-Base - Single GPU | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/)
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

- ERNIE 4.5-21B-A3B-Base - Single GPU

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ERNIE 4.5-21B-A3B-Base - Single GPU

Generated on 15 Jul 2025
from [the ERNIE 4.5-21B-A3B-Base - Single GPU catalog page](https://marketplace.digitalocean.com/apps/ernie-4-5-21b-a3b-base-single-gpu)

Baidu’s recently open-sourced ERNIE 4.5-21B-A3B-Base is a cutting-edge Mixture-of-Experts (MoE) model, engineered to deliver top-tier performance that rivals industry leaders across diverse, multilingual tasks.

With this 1-Click App, you can quickly deploy an immense 21-billion-parameter model, uniquely benefiting from its lean ~3 billion active parameters during inference. This intelligent design ensures an optimal balance of high performance and cost-effective deployment on a single GPU.

Build powerful, intelligent applications with this model, optimized for inference efficiency and seamless integration.

Empower your business with next-gen AI capabilities and free up resources for what matters most.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ERNIE | 4.5-21B-A3 | [Apache License 2.0](https://github.com/PaddlePaddle/ERNIE/blob/develop/LICENSE) |
| Open WebUI | v0.6.16 | [Custom](https://github.com/open-webui/open-webui/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=digitaloceanai-ernie4521ba3bbas)

## Creating an App using the API

In addition to creating a Droplet from the ERNIE 4.5-21B-A3B-Base - Single GPU 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ERNIE 4.5-21B-A3B-Base - Single GPU Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"digitaloceanai-ernie4521ba3bbas"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ERNIE 4.5-21B-A3B-Base - Single GPU

## Quickly Get Started With Your ERNIE 1-Click

1. **Wait for ERNIE 1-Click to finish setup**

- After creating your ERNIE 1-Click, you need to wait 4-7 minutes before ERNIE and Open WebUI finish initialization!
- At this stage, open your droplet IP in the browser to check the status of your 1-Click:- If it displays “ERNIE 1-Click is currently being installed”, please wait few more moments (the page will automatically reload once ERNIE is configured)- Otherwise, if it displays Open WebUI login page, you can go ahead to the next step.

1. **Access the Droplet Console:**

- Navigate to the GPU Droplets page.
- Locate your newly created 1-Click Model Droplet and click on its name.
- At the top of your screen select and launch the Web Console. It will open in a new window.

![Droplet Console](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-07-15%20at%2000.00.08.png)

3. **Locate Open WebUI credentials:**

- Once Web Console opens, you can locate the credentials for your ERNIE WebUI in the welcome message:

![WebUI Creds](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-07-14%20at%2023.55.48.png)

3. **Login to your ERNIE WebUI page**

- Copy the WebUI credentials and use them to login to ERNIE WebUI in your browser:

![WebUI](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202025-07-14%20at%2023.58.05.png)

- After successfully logging in, you can play around with ERNIE in WebUI!

1. **ERNIE API access:**

- ERNIE 1-Click also exposes direct access to ERNIE via vLLM API. You can locate the `Bearer` token in the SSH welcome message right below WebUI credentials and use the bearer token to make a request:

```
curl -X POST "http://<your ERNIE 1-Click IP>:8000/v1/chat/completions" \
    -H "Content-Type: application/json" -H "Authorization: Bearer <your bearer token>" \
    --data '{
      "model": "baidu/ERNIE-4.5-21B-A3B-Base-PT",
      "messages": [\
        {\
          "role": "user",\
          "content": "What is the capital of France?"\
        }\
      ]
    }'
```

## Troubleshooting

1. Please note that the models require a couple of minutes to load, as the docker containers is started for the respective model. During this process any API calls to the model will timeout.
2. To ensure that Caddy is working, run:

```
sudo systemctl status caddy
```

### **Configuring HTTPS with TLS using Certbot and Caddy**

To secure your with HTTPS, you can configure TLS using Certbot and Caddy.

1. **Install Certbot**:

```
sudo apt-get update
   sudo apt-get install certbot
```

2. **Generate SSL Certificates**:

Run the following command to obtain a free SSL certificate from Let’s Encrypt:


```
sudo certbot certonly --standalone -d <your_domain>
```

Replace `your_domain` with your actual domain name.

3. **Configure Caddy to Use HTTPS**:

Edit the Caddy configuration file located at `/etc/caddy/caddyfile`. Update it to include the following settings:


```
:443 {
       tls /etc/letsencrypt/live/<your_domain>/fullchain.pem /etc/letsencrypt/live/<your_domain>/privkey.pem
       reverse_proxy localhost:8080
       log {
           output file /var/log/caddy/access.log
       }
   }
```

Replace `your_domain` with your actual domain name.

4. **Restart Caddy Service**:

After making changes to the Caddyfile, restart the Caddy service to apply the new configuration:


```
sudo systemctl restart caddy
```

### **Security Measures with Fail2Ban**

Fail2Ban is configured to provide additional security by monitoring login attempts and banning IP addresses that show malicious signs. The rules for Open WebUI are defined as follows:

- **Adjusting Fail2Ban Rules**: Users can customize or add additional rules as needed to increase security based on specific requirements.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#creating-an-app-using-the-api)
- [Getting Started After Deploying ERNIE 4.5-21B-A3B-Base - Single GPU](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#getting-started-after-deploying-ernie-45-21b-a3b-base---single-gpu)
- [Quickly Get Started With Your ERNIE 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#quickly-get-started-with-your-ernie-1-click)
- [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#troubleshooting)
  - [**Configuring HTTPS with TLS using Certbot and Caddy**](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#configuring-https-with-tls-using-certbot-and-caddy)
  - [**Security Measures with Fail2Ban**](https://docs.digitalocean.com/products/marketplace/catalog/ernie-4-5-21b-a3b-base-single-gpu/#security-measures-with-fail2ban)

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