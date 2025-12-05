---
url: "https://docs.digitalocean.com/products/app-platform/details/limits/"
title: "App Platform Limits | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/app-platform.965eeb0520b4c178cc9bf64423065e5aa5c2f47ad6102384e37beca3c079f287.svg)App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/)
  - [Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Deploy Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/)
  - [Deploy an RSS Reader](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-rss-reader/)
  - [Deploy Etherpad](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-etherpad/)
- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
  - [Create Apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
  - [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
  - [Deploy From Monorepos](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/)
  - [Deploy Using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/)
  - [Scale Apps](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/)
  - [Manage Components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/)
  - [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
  - [Manage App Settings](https://docs.digitalocean.com/products/app-platform/how-to/manage-settings/)
  - [Manage Networking](https://docs.digitalocean.com/products/app-platform/how-to/manage-networking/)
  - [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
  - [Manage Deployments](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/)
  - [Access Console](https://docs.digitalocean.com/products/app-platform/how-to/console/)
  - [Restart or Rebuild App](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/)
  - [Update App Spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/)
  - [Manage Source Repository](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/)
  - [Add "Deploy to DigitalOcean" Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/)
  - [Build Locally](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/)
  - [Use MCP Server](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/)
  - [Destroy Apps](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/)
- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/apps/)
  - [Builds with Buildpacks](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/)
  - [Builds with Dockerfiles](https://docs.digitalocean.com/products/app-platform/reference/dockerfile/)
  - [App Spec Reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
  - [Dev Config Reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/)
  - [Error Code Reference](https://docs.digitalocean.com/products/app-platform/reference/error-codes/)
- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/)
  - [Platform Upgrade Policy](https://docs.digitalocean.com/products/app-platform/concepts/platform-upgrade-policy/)
  - [Glossary](https://docs.digitalocean.com/glossary/app-platform/)
- [Details](https://docs.digitalocean.com/products/app-platform/details/)
  - [Introduction FAQ](https://docs.digitalocean.com/products/app-platform/details/intro-faq/)
  - [Features](https://docs.digitalocean.com/products/app-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/app-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/app-platform/details/limits/)
  - [Maintenance](https://docs.digitalocean.com/products/app-platform/details/maintenance/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/app-platform)
- [Support](https://docs.digitalocean.com/products/app-platform/support/)

- [Details](https://docs.digitalocean.com/products/app-platform/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Limits

Validated on 16 Jun 2022 • Last edited on 19 Nov 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

## Storage Limits

- The host instances running App Platform containers do not provide persistent data storage. Data in the host instance’s local filesystem is permanently lost after deployments and other container replacements. The local filesystem is additionally limited to 4 GiB, and if it is filled to capacity, the container is detected as unhealthy and replaced.

Apps should only use the host instance’s local filesystem for small amounts of temporary storage. For persistent storage, you can use [Spaces Object Storage](https://docs.digitalocean.com/products/spaces/) or [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/).

- File uploads to apps timeout after 100 seconds.

- App Platform does not support volumes.


## Build and Deployment Limits

- App Platform allocates 4 CPU cores, 10 GiB of memory, and 24 GiB of disk space to each build. Processes related to managing the build and its export consume a small portion of these resources, so the build itself may have access to a slightly smaller amount of resources than listed here. If you require more resources for builds, you can use [GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/) or other CI/CD tools to externally [build containers and push them to App Platform](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/).

- Builds time out after 1 hour.

- Job deployments time out after 30 minutes.


## Image Limits

- We do not limit the size of images deployed to App Platform, but we recommend using images less than 1 GiB in size. Images larger than 2 GiB are likely to experience build and deployment issues.

- App Platform only supports Linux-based container images built for the AMD64 architecture. If you push an image with a different OS or architecture, the build fails.


## Scaling Limits

- Autoscaling is only available for app components using [dedicated CPUs](https://docs.digitalocean.com/products/app-platform/details/pricing/#container-pricing).

- Each app supports a maximum of 250 containers (`instance_count` in app spec), whether scaled manually or using autoscaling. To scale beyond this limit, use larger container sizes or [contact support](https://cloudsupport.digitalocean.com/).


## Repository Service Limits

- App Platform can only integrate with GitHub repositories, GitLab repositories, or public Git repositories over HTTPS. Support for other source providers is planned. When the source is a GitLab respository, to prevent a cloning error, you must first [enable HTTPS and SSH protocols](https://docs.gitlab.com/administration/settings/visibility_and_access_controls/#configure-enabled-git-access-protocols) on it.

- Currently, [Git LFS support](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#git-lfs) is available only for GitHub repositories.

- App Platform does not support auto-deployment of images from Docker Hub repositories or from GitHub Registry. If you need to auto deploy for your images, consider using [DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/).

- Git submodules that reference SSH path style repos fail to build. Replace SSH submodule links with HTTPS to avoid this limitation.

- You must store private git submodules in the GitHub account you have authorized App Platform to use. Referencing private git submodules that the authorized GitHub account cannot access causes the build to fail.

- You must have an [**Owner** or **Maintainer** permissions-role](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) in any GitHub repository that you want to access from App Platform.

- App Platform does not support SHA-256 repositories.


## Database Limits

- Dev database cluster permissions do not allow you to create additional databases. You can only use the cluster’s default database. If you need additional databases in your cluster, consider using a [DigitalOcean Managed Database](https://docs.digitalocean.com/products/databases/), instead.

- App Platform’s engine support for dev databases is currently limited to PostgreSQL, but you can create a [PostgreSQL, MySQL, MongoDB, Kafka, OpenSearch, or Valkey managed database](https://docs.digitalocean.com/products/databases/) with DigitalOcean for use in your app.

- Dev databases are located in the same region as your app and cannot be migrated to another region. If you migrate your app to a different region, the app won’t be able to access the associated dev database anymore. If you need to migrate your app and dev database, we recommend either backing up the contents of the database and restoring it after the app’s migration, or using a [DigitalOcean Managed Database](https://docs.digitalocean.com/products/databases/) instead. You can migrate managed databases independently of apps to different regions as needed.

- App Platform does not support connecting to DigitalOcean Managed Databases during the build process if the database has trusted sources enabled. This is because the app’s network configuration information can only be provided to the database’s trusted sources list after the app has been built.

- App Platform does not currently support connections to Kafka databases that have trusted sources enabled. You must [disable trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#disable-trusted-sources) on the Kafka database before it can be integrated with an App Platform app.

- App Platform does not currently support logging to OpenSearch databases that have trusted sources enabled. OpenSearch clusters with trusted sources enabled are supported as a regular database connection.

- MongoDB database names cannot contain capital letters when adding them [using an app spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/).


## Networking Limits

- You cannot attach the same [dedicated egress IP addresses](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/#add-dedicated-egress-ips) to multiple apps. App Platform assigns dedicated IPs to each app individually. Apps may run in different clusters or regions, so they cannot share IPs. To use the same egress IP, deploy your apps in a single [Kubernetes cluster](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/).

- App Platform does not directly support adding `301` and `302` redirects. However, you can work around this by [creating a free app that redirects traffic to another domain](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/).

- We do not offer [dedicated egress IPv6 addresses](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/#add-dedicated-egress-ips).

- App Platform apps do not support connecting to IPv6 services or hosts. If you have explicitly configured your app’s code to use IPv6, you may experience `ETIMEDOUT` timeout errors when using IPv6 connections. To solve this issue, enable IPv4 connections in your app’s code. For example, in a `server.js` file, bind your host to `0.0.0.0` to enable all interfaces, including IPv4. Alternatively, for apps built with Dockerfiles, you can [enable IPv6 on custom Docker images](https://docs.docker.com/engine/daemon/ipv6).

- App Platform does not support adding DNSSEC enabled domains to apps.

- Dedicated egress IPs are an app-level feature. When you assign them to an app, all egress (outgoing) traffic from the app’s components use the addresses assigned to the app, except for [functions](https://docs.digitalocean.com/products/app-platform/how-to/manage-functions/). Egress traffic from functions cannot use dedicated egress IPs and their own addresses can change at any time.

- You cannot [forward logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from [dedicated egress IPs](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/). Log forwarding uses its own routing to send logs.

- Individual log messages forwarded from apps have a maximum size limit of 2048 bytes.

- Browsers aggressively cache redirects, and as such you may need to clear your cache and hard refresh to see changes in your redirect configuration.

- App Platform only supports high availability (HA) for apps running two or more containers so that there is a failover for App Platform’s load balancer to use.

- You cannot open SSH or SFTP ports on App Platform containers. You must deploy code changes through your code repository or container image.

- You cannot open SMTP ports on App Platform containers.

- App Platform supports HTTP/2, however you need to [configure your app to use the protocol](https://docs.digitalocean.com/products/app-platform/how-to/configure-http2/). App Platform’s edge servers negotiate HTTP/2 connections from supported clients, but if your app is not configured to receive these requests, App Platform downgrades these requests to HTTP/1.1 when relayed to the app’s container. Apps support [gRPC](https://grpc.io/about) once you have enabled HTTP/2.

- App Platform’s edge servers negotiate HTTP/2 and HTTP/3 connections from supported clients. However, App Platform downgrades these requests to HTTP/1.1 when relayed to an app’s container. We do not support [gRPC](https://grpc.io/about/) over HTTP/2.

- While App Platform automatically upgrades all HTTP requests to HTTPS requests, it does not set HTTP Strict-Transport-Security (HSTS) headers for apps. If you want to set HSTS headers for your app, you need to set the headers in your app’s code. All apps hosted on the `.ondigitalocean.app` domain automatically behave as if HSTS has been set as the `.app` TLD is on the [HSTS preload](https://hstspreload.org/) list.

- We do not limit the number of concurrent connections to your app, but each connection consumes system resources and may affect your app’s performance when it is under heavy load. If you are experiencing performance issues related to large numbers of concurrent connections, we recommend [scaling your app](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/) to better handle the work load.

- Apps are hosted in the region you select during the initial deployment but the app’s IP address may appear to be in a US region. This is expected behavior as App Platform routes traffic to apps through Cloudflare’s global CDN, a US-based company. Learn more about [why apps have US-based IP addresses](https://docs.digitalocean.com/support/why-does-my-app-have-a-us-based-ip-address-when-i-created-it-in-a-different-region/).

- App Platform does not officially support node clustering, such as [Erlang clustering](https://www.erlang.org/doc/reference_manual/distributed.html). This is because we currently don’t expose a way to discover the cluster nodes.

- You cannot disable the CDN cache for apps with static sites. As a workaround, you can either create a new app for that static component or serve the static site from a \[compute component\]({{ relref “ [https://docs.digitalocean.com/products/app-platform/reference/app-spec/"](https://docs.digitalocean.com/products/app-platform/reference/app-spec/%22) }}).

- Disabling the CDN cache requires a [custom domain](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/) and does not work with the starter domain.

- VPC is not currently supported for Function components.


## Other Limits

- Each App Platform application can have up to 500 domains.

- You cannot move apps between teams. You can only move them between projects within the same team. To transfer an app to a different team, [recreate it in the new team](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/), then [delete it from the original team](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/).

- App Platform does not currently support injecting values on disk at build time. However, you can use environment variables to inject values at runtime using runtime commands.

- App Platform is not [PCI DSS compliant](https://www.pcisecuritystandards.org/standards/) and may not be suitable for fintech applications. You can use a [Droplet](https://docs.digitalocean.com/products/droplets/) as an alternative to App Platform to give you more control over your infrastructure.

- You cannot increase or decrease resources for static sites. App Platform deploys and serves static sites using [DigitalOcean’s Spaces CDN](https://docs.digitalocean.com/products/spaces/), as they do not require a container or runtime. You can only increase or decrease resources for [service, worker, and job components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/).

- Configuration changes that redeploy your app also trigger a pull of the latest source code from your repo. This is by design.

- App Platform only supports binaries built for the [AMD64](https://en.wikipedia.org/wiki/X86-64) CPU architecture.

- App Platform uses the [gVisor](https://gvisor.dev/) container runtime sandbox and some [system calls are not supported](https://gvisor.dev/docs/user_guide/compatibility/linux/amd64/).

- App Platform does not support resource usage reporting with [PM2](https://pm2.keymetrics.io/) in Node.js apps. Instead, use the **Insights** tab [to see insights](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/) such as memory and CPU usage.

- You must explicitly start system-level cron jobs using your app’s run commands. cron jobs do not start automatically like on standard Linux systems.

- You cannot view accrued transfer allowance or cumulative usage for App Platform. You can [view ingress bandwidth](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/) for individual apps.

- App Platform does not currently support changing time zones for build and runtime logs, which are displayed in UTC.

- The “Deploy to DO” button only supports public repositories and Dev Databases.


## Known Issues

- Next.js apps deployed to App Platform can be vulnerable to [Cache Poisoning Denial of Service (CPDoS) attacks](https://cpdos.org/). To avoid this, we recommend [omitting the `cache-control` header](https://nextjs.org/docs/app/building-your-application/caching#opting-out-2) from your app’s responses or setting them to `private` if the response is not cacheable.

In this article...

- [Storage Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#storage-limits)
- [Build and Deployment Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#build-and-deployment-limits)
- [Image Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#image-limits)
- [Scaling Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#scaling-limits)
- [Repository Service Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#repository-service-limits)
- [Database Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#database-limits)
- [Networking Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#networking-limits)
- [Other Limits](https://docs.digitalocean.com/products/app-platform/details/limits/#other-limits)
- [Known Issues](https://docs.digitalocean.com/products/app-platform/details/limits/#known-issues)

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