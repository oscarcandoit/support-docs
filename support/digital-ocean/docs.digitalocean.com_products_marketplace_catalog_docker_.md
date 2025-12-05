---
url: "https://docs.digitalocean.com/products/marketplace/catalog/docker/"
title: "Docker | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/docker/)
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

- Docker

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Docker

Generated on 5 Sep 2025
from [the Docker catalog page](https://marketplace.digitalocean.com/apps/docker)

Docker containers combine software and related dependencies into a standardized unit for software development that includes everything it needs to run: code, runtime, system tools and libraries. This guarantees that your application will always run the same and makes collaboration as simple as sharing a container image.

This 1-click enables you to create a DigitalOcean droplet pre-installed with recommended Docker tools (docker-engine, docker-compose).

For reference, the [packer file](https://github.com/digitalocean/droplet-1-clicks/tree/master/docker-20-04) used to create the Docker 1-click is here, and the recommended installation steps from Docker are [here](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Docker CE | [28.1.1](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |
| Docker Compose | [2.36.0](https://docs.docker.com/release-notes/docker-compose/) | [Apache 2](https://github.com/docker/compose/blob/master/LICENSE) |
| Docker BuildX | [0.23.0](https://docs.docker.com/build/release-notes/) | [Apache 2](https://github.com/docker/buildx/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=docker-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Docker 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Docker Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"docker-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Docker

Once the Docker One-Click Droplet is created, you can log into it as root. Make sure to substitute the Droplet’s public IPv4 address.

`$ ssh root@your_droplet_public_ipv4`

Docker -d will already be running as a service and the Docker command line tool is included in the PATH, so it’s ready to use. `$ docker version` command shows the version of Docker engine installed.

Note about firewall rules: If you are using the default droplet firewall rules in DigitalOcean cloud, then you just need to follow the same practices. However, if you depend on the Linux firewall (iptables), then you need to be aware of [how Docker works with iptables](https://docs.docker.com/network/iptables/).

## After installing Docker

If you are new to Docker or have not explored all its capabilities, we highly recommend the official getting started tutorial: [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)

### Check versions

Execute in the ssh console:

`docker version`

`docker compose version`

`docker buildx version`

### Language specific tutorials

- [Node JS](https://docs.docker.com/language/nodejs/)
- [Python](https://docs.docker.com/language/python/)
- [Java](https://docs.docker.com/language/java/)
- [Laravel](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04)
- [Wordpress](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-docker-compose)
- [Go](https://docs.docker.com/language/golang/)
- [C#(.NET)](https://docs.docker.com/language/dotnet/)

### Setting up a production system

- [Using NGINX](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-docker/)

[NGINX Plus](https://www.nginx.com/products/nginx/), the high‑performance application delivery platform, load balancer, and web server, is available as the Docker container.

- [DO Storage](https://www.digitalocean.com/community/questions/how-to-attach-digitalocean-block-storage-to-docker-container)

In cloud computing, block storage is a network-based way to store data. Block storage services, like [DigitalOcean Volumes Block Storage](https://docs.digitalocean.com/products/volumes/), provide similar behavior to traditional block storage devices, like hard drives.

- [DO Registry](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/)

The DigitalOcean Container Registry (DOCR) is a private Docker image registry with additional tooling support that enables integration with your Docker environment and DigitalOcean Kubernetes clusters. DOCR registries are private and co-located in the datacenters where DigitalOcean Kubernetes clusters are operated for secure, stable, and performant rollout of images to your clusters.

- [Enable monitoring](https://www.digitalocean.com/community/tutorials/how-to-monitor-docker-using-zabbix-on-ubuntu-20-04)

[Zabbix](https://www.zabbix.com/) is a monitoring system that can monitor the state of almost any element of your IT infrastructure, such as networks, servers, virtual machines, and applications.

- [Using Terraform](https://github.com/syntaqx/terraform-digitalocean-docker)

Terraform is an IAC tool, used primarily by DevOps teams to automate various infrastructure tasks. The provisioning of cloud resources, for instance, is one of the main use cases of Terraform. It’s a cloud-agnostic, open-source provisioning tool written in the Go language and created by HashiCorp


## Update instructions

### Docker

1. Go to [https://download.docker.com/linux/ubuntu/dists/](https://download.docker.com/linux/ubuntu/dists/).
2. Select your Ubuntu version in the list.
3. Go to pool/stable/ and select the applicable architecture (amd64, armhf, arm64, or s390x).
4. Download the following deb files for the Docker Engine, CLI, containerd, and Docker Compose packages:

```
containerd.io_<version>_<arch>.deb
docker-ce_<version>_<arch>.deb
docker-ce-cli_<version>_<arch>.deb
docker-buildx-plugin_<version>_<arch>.deb
docker-compose-plugin_<version>_<arch>.deb
```

5. Install the .deb packages. Update the paths in the following example to where you downloaded the Docker packages.

```
sudo dpkg -i ./containerd.io_<version>_<arch>.deb \
  ./docker-ce_<version>_<arch>.deb \
  ./docker-ce-cli_<version>_<arch>.deb \
  ./docker-buildx-plugin_<version>_<arch>.deb \
  ./docker-compose-plugin_<version>_<arch>.deb
```

The Docker daemon starts automatically.

### Docker Compose

1. Go to [https://docs.docker.com/compose/release-notes/](https://docs.docker.com/compose/release-notes/)
2. Find new version
3. Execute:

```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v<version>/docker-compose-linux-<arch> -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/docker/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/docker/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/docker/#creating-an-app-using-the-api)
- [Getting Started After Deploying Docker](https://docs.digitalocean.com/products/marketplace/catalog/docker/#getting-started-after-deploying-docker)
- [After installing Docker](https://docs.digitalocean.com/products/marketplace/catalog/docker/#after-installing-docker)
  - [Check versions](https://docs.digitalocean.com/products/marketplace/catalog/docker/#check-versions)
  - [Language specific tutorials](https://docs.digitalocean.com/products/marketplace/catalog/docker/#language-specific-tutorials)
  - [Setting up a production system](https://docs.digitalocean.com/products/marketplace/catalog/docker/#setting-up-a-production-system)
- [Update instructions](https://docs.digitalocean.com/products/marketplace/catalog/docker/#update-instructions)
  - [Docker](https://docs.digitalocean.com/products/marketplace/catalog/docker/#docker)
  - [Docker Compose](https://docs.digitalocean.com/products/marketplace/catalog/docker/#docker-compose)

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