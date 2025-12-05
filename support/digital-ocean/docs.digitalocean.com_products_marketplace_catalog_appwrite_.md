---
url: "https://docs.digitalocean.com/products/marketplace/catalog/appwrite/"
title: "Appwrite | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/)
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

- Appwrite

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Appwrite

Generated on 18 Sep 2025
from [the Appwrite catalog page](https://marketplace.digitalocean.com/apps/appwrite)

[Appwrite](https://appwrite.io/) is a secure, open-source backend that abstracts the complexity of common, complex, and repetitive tasks required for building a modern app.

Appwrite provides you with a set of secure APIs, tools, and a management console UI to help you build your apps quickly without compromising security. Use Appwrite to add user authentication and management, data and file storage, run server-side code, image manipulation, localization, and more into your apps.

Appwrite adapts to your unique habits and needs. You can integrate Appwrite directly with your client app or use it alongside your existing backend server, using the language and technologies you’re most comfortable with.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Appwrite | [1.7](https://github.com/appwrite/appwrite/releases) | [BSD 3-Clause](https://github.com/appwrite/appwrite/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=appwrite-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Appwrite 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Appwrite Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"appwrite-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Appwrite

Once the deployment is complete, you can access Appwrite in your browser using the IP address of the droplet. However, below are some recommended setups before accessing appwrite.

### **Get a domain name (Recommended)**

Use this [DNS quickstart](https://docs.digitalocean.com/products/networking/dns/quickstart/) guide to get your DNS setup on DigitalOcean. You’ll first need to purchase and register your domain through a third party, such as Name.com, GoDaddy, etc.

- **Why do you need a domain name?**

You can access your Appwrite server using a secured SSL connection with the domain correctly set up. You can, however, still access your server using the IP address. We still recommend having a valid domain.


### **Set up SMTP (Recommended)**

If you want to use the emailing service of Appwrite, you’ll need to get SMTP credentials for sending emails. This can be from an email delivery service like SparkPost, [Sendgrid](https://marketplace.digitalocean.com/apps/sendgrid), Mailgun, etc. Using this [email delivery guide](https://appwrite.io/docs/email-delivery); you can easily set up your email provider to work with Appwrite.

- **Why do you need SMTP?**

Appwrite uses SMTP to send verification emails to users signing up for your project, send emails for URL-based login, and use email to reset passwords for console admin and project users. Without enabling an SMTP provider, you won’t be able to use email verification or magic URL login in your applications.


### **Connect to Object Storage (DigitalOcean Spaces, Wasabi, Linode, Backblaze, or AWS S3) (Optional)**

You’ll need access credentials for your preferred storage system. Look at the [storage environment variables](https://appwrite.io/docs/environment-variables#storage) to set up one of the supported object storage.

- **Why do I need object storage?**

These buckets are used to store files by Appwrite’s storage service. Without Object storage, you can use your local file system, which can be slow and overloaded quickly.


## Creating your first project

In your browser, type in the domain name you have set up or the IP address of your droplet, and you should be presented with a login or signup page. You can get to the signup page by clicking on the Sign Up button.

![Sign In](https://cloud.appwrite.io/v1/storage/buckets/images/files/646ec110cfe6d3fd104d/view?width=950&project=do-marketplace-content)

Provide your details and signup. The account you create will be the root account for managing your Appwrite server. Once you signup, you will be redirected and presented with a dialog to create your first Project. Enter the name and optional custom ID and click Create project button.

![Create project](https://cloud.appwrite.io/v1/storage/buckets/images/files/646ec169bcfb775de211/view?width=950&project=do-marketplace-content)

You will then be redirected to the project overview page, where you can set up your project further to connect with your applications, set up databases, storage and more:

![Project dashboard](https://cloud.appwrite.io/v1/storage/buckets/images/files/646ec1352f507f4e7e34/view?width=950&project=do-marketplace-content)

Now that you have created your project, you can follow one of the getting started guides below to build your Application with Appwrite.

- [Getting started for web](https://appwrite.io/docs/getting-started-for-web)
- [Getting started for Flutter](https://appwrite.io/docs/getting-started-for-flutter)
- [Getting started for Android](https://appwrite.io/docs/getting-started-for-android)
- [Getting started for Apple](https://appwrite.io/docs/getting-started-for-apple)
- [Getting started for server](https://appwrite.io/docs/getting-started-for-server)

## Optional: Configure environment variables

Optionally you can configure the environment variables manually. To do that, you must [SSH login](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) into the droplet you created. You will find your environment file in `/root/appwrite/.env`. You can open it in a text editor and update any available environment variables of your choice. You can learn about all the available variables in the [environment variables guide](https://appwrite.io/docs/environment-variables).

## Debugging

If you run into issues in your server, you can follow this [debugging](https://appwrite.io/docs/debugging) guide to troubleshoot.

## Getting help

- [Official documentation](https://appwrite.io/docs)
- [Discord server](https://appwrite.io/discord)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#creating-an-app-using-the-api)
- [Getting Started After Deploying Appwrite](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#getting-started-after-deploying-appwrite)
  - [**Get a domain name (Recommended)**](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#get-a-domain-name-recommended)
  - [**Set up SMTP (Recommended)**](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#set-up-smtp-recommended)
  - [**Connect to Object Storage (DigitalOcean Spaces, Wasabi, Linode, Backblaze, or AWS S3) (Optional)**](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#connect-to-object-storage-digitalocean-spaces-wasabi-linode-backblaze-or-aws-s3-optional)
- [Creating your first project](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#creating-your-first-project)
- [Optional: Configure environment variables](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#optional-configure-environment-variables)
- [Debugging](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#debugging)
- [Getting help](https://docs.digitalocean.com/products/marketplace/catalog/appwrite/#getting-help)

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