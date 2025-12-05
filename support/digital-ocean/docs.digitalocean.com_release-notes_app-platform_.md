---
url: "https://docs.digitalocean.com/release-notes/app-platform/"
title: " | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- App Platform

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Release Notes

Validated on 30 Sep 2025 • Last edited on 28 Mar 2024

## September 2025

### 30 September

- [Scheduled jobs](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/#schedule-jobs) are now in general availability.


### 9 September

- [VPC support](https://docs.digitalocean.com/products/app-platform/how-to/enable-vpc/) for App Platform apps is now in general availability for all regions.


### 2 September

- In public preview, you can [schedule jobs](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/#schedule-jobs) to automatically run periodic tasks within your App Platform apps.


## August 2025

### 7 August

- App Platform edge controls are now in general availability, introducing three key features for enhanced control over your app’s CDN behavior and security posture: email obfuscation, enhanced threat control to mitigate layer 7 DDoS attacks from sophisticated threat actors, and CDN cache controls.

For complete configuration details, see [How to Configure Edge Settings in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/configure-edge-settings/).


## July 2025

### 22 July

- We have updated the following buildpacks for App Platform:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.144.2 to v0.147.8. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added the following Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - go1.24.2 - go1.24.3
    - go1.23.8 - go1.23.9
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added the following PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP/8.3.20 - PHP/8.3.22
    - PHP/8.4.6 - PHP/8.4.8
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added support for the `uv` package manager updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added the following Nodejs versions. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

    - Node.js 24.0.0 - 24.2.0
    - Node.js 23.11.0 - 23.11.1
    - Node.js 22.16.0
    - Node.js 22.15.0 - 22.15.1
    - Node.js 20.19.0 - 20.19.1
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have updated the default Ruby version to 3.3.8 and have added the following Ruby versions. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Ruby 3.4.4
    - Ruby 3.3.8
    - Ruby 3.4.3

### 16 July

- App Platform’s XL build is now in private preview. You can now [update the app spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/) with the `xl-build` feature to double the CPUs (from 4 to 8) and memory (from 10 GiB to 20 GiB) of your app, retaining the same disk space. To gain access to this feature, [contact support](https://cloudsupport.digitalocean.com/). For detailed steps, see [How to Enable XL Build](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#enable-xl-build).


### 8 July

- VPC support for App Platform apps in FRA, NYC, and TOR is now in public preview. This allows you to connect apps to other VPC-enabled resources (such as DBaaS, Droplets, and Kubernetes) over a VPC network. To gain access to this feature, [contact support](https://cloudsupport.digitalocean.com/). For detailed steps on how to connect your app to a VPC network, see [How to Enable VPC](https://docs.digitalocean.com/products/app-platform/how-to/enable-vpc/).


## June 2025

### 30 June

- App Platform [liveness probes](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/) are now in general availability.


### 27 June

- [Archiving and restoring App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/archive-restore/) is now in general availability.

- App Platform [subdomain routing](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/) is now in general availability.


### 4 June

- To help debug app component instances on App Platform, you can now access [specific compute component instances](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-specific-instance) using the CLI or API.


### 2 June

- We have updated App Platform’s [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/) to add support for additional Ruby versions. These updates include:
\\* Ruby 3.4.2 is now available
\\* Default Ruby version is now 3.3.7
\\* Ruby 3.2.7 and 3.2.8 is now available
\\* Ruby 3.1.7 is now available
\\* Bundler 1.x no longer works with the Ruby buildpack


## May 2025

### 19 May

- You can [disable an app’s CDN cache](https://docs.digitalocean.com/products/app-platform/how-to/configure-edge-settings/), allowing you to use your own CDN instead.

Additionally, you can now enable enhanced threat control for Layer 7 DDoS protection and disable email obfuscation by updating the [app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).


### 12 May

- Now in public preview, if your app’s health check fails on App Platform, a liveness probe automatically restarts the app. Additionally, worker services now support health checks. To set up health checks for your app, see [How to Set Up and Manage Health Checks](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/).


## April 2025

### 28 April

- You can now add [Managed Valkey](https://docs.digitalocean.com/products/databases/valkey/) databases to your App Platform apps. To manage your app’s databases, see [How to Manage Databases in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/).


### 21 April

- App Platform now supports subdomain routing, which also allows you to disable an app’s starter domain. For setup instructions, see [How to Manage Domains in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/).


### 16 April

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.24.1 - go1.24.0
    - Adds go1.23.7 - go1.23.6
    - Adds go1.22.12
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.4.5 - PHP/8.4.4
    - Adds PHP/8.3.19 - PHP/8.3.17
    - Adds PHP/8.2.28
    - Adds PHP/8.1.32
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Deprecated support for the runtime.txt file
    - Removed support for Python 3.8
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

    - Adds Node.js version 23.10.0 and 23.9.0
    - Adds Node.js version 20.19.0
    - Adds Node.js version 18.20.8 and 18.20.7

## March 2025

### 17 March

- You can now [archive and restore App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/archive-restore/). This allows you to store an app’s data and configuration, and to stop incurring charges for the app’s components. You can restore an archived app to resume using it. This feature is in [Public Preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview).


## February 2025

### 24 February

- We have updated the following buildpacks for App Platform:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.121.2 to v0.144.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions.

    - Adds Node.js version 23.8.0
    - Adds Node.js version 22.14.0
    - Adds Node.js version 20.18.3

App Platform has updated the Node.js default version from v20 to v22. This is because v22 is the current stable LTS version and v20 is now in maintenance phase. Best practices for pinning the Node.js version in the package.json for apps should be followed in order to avoid build failures. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

### 19 February

- You can [specify a custom maintenance page](https://docs.digitalocean.com/products/app-platform/how-to/maintenance-mode/#configure-using-the-app-spec) to display to users on App Platform.


### 17 February

- We have updated App Platform’s [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/) to support the latest PHP release, version 8.4.4.


### 13 February

- We have updated the following buildpacks for App Platform:


  - [Node.JS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have added additional Nodejs versions.

    - Adds Node.js version 23.7.0 - 23.0.0
    - Adds Node.js version 22.13.1 - 22.6.0
    - Adds Node.js version 20.18.2 - 20.16.0
    - Adds Node.js version 18.20.6 - 18.20.5

App Platform has updated the Node.js default version from v20 to v22. This is because v22 is the current stable LTS version and v20 is now in maintenance phase. Best practices for pinning the Node.js version in the package.json for apps should be followed in order to avoid build failures. Visit [the Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/#specify-a-nodejs-engine) to learn more about specifying a Node.js Engine version.

## January 2025

### 30 January

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Add go1.23.5 - go1.23.0
    - Add go1.22.11 - go1.22.5
    - Add go1.21.13, go1.21.12
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.3.16 - PHP/8.3.10
    - Adds PHP/8.2.27 - PHP/8.2.22
    - Adds PHP/8.1.30
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Adds support for Python 3.13
      - Adds support for Python 3.12.7, 3.12.6, 3.12.5
      - Adds support for Python 3.8.20, 3.9.20, 3.10.15, 3.11.10
      - Default Python version for new apps is now 3.13
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have added additional Ruby versions. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds Ruby versions 3.3.7, 3.3.6, 3.3.5
    - Adds Ruby versions 3.4.1, 3.4.0, 3.2.5
    - Add detection support for Rails 8

### 21 January

- Deploying apps from Bitbucket to App Platform is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/).


## December 2024

### 18 December

- Deploying apps from Bitbucket to App Platform is now in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/).


## November 2024

### 27 November

- You can now use `doctl`, the DigitalOcean CLI, to [access the console for App Platform components](https://docs.digitalocean.com/products/app-platform/how-to/console/#access-a-components-console-using-the-cli) to run commands in the component’s container.


### 20 November

- You can now [restart App Platform apps](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/) without fetching the latest changes from your app’s repository. This feature is useful for restarting apps stuck in a connection loop or deadlock.


### 14 November

- We have released a [new Heroku-based Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/) for App Platform. It includes new features and security updates. All new Node.js apps now use this buildpack upon creation by default.

To migrate existing apps to use the new buildpack, see [our guide](https://docs.digitalocean.com/products/app-platform/how-to/migrate-nodejs-buildpack/).


### 1 November

- App Platform’s new [sample app deployment feature](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/) is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/). This allows you to quickly copy a sample app into a new repo on your GitHub account and then deploy it to App Platform.


## October 2024

### 29 October

- You can now [configure maintenance mode for apps](https://docs.digitalocean.com/products/app-platform/how-to/maintenance-mode/) on App Platform. This allows you to take your app offline for maintenance and serve a maintenance page to your users.

- [Forwarding logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform app to your [DigitalOcean Managed OpenSearch cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability).


### 23 October

- App Platform now [supports the HTTP/2 protocol](https://docs.digitalocean.com/products/app-platform/how-to/configure-http2/). This allows you to use [gRPC](https://grpc.io/about), multiplexing, and other HTTP/2 features.

- App Platform now supports HTTP/3 at edge servers, allowing faster and more secure connections between your application and your users. You do not need to make any changes to your application to use HTTP/3.


## September 2024

### 6 September

- App Platform now supports PostgreSQL 13 and 15 for [dev databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/).

We have also deprecated PostgreSQL 12 support for dev databases. We recommend [upgrading your database](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#upgrade-dev-database-version) to a newer version of PostgreSQL.


## August 2024

### 28 August

- You can now [deploy apps to App Platform using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/).

We offer three different example workflows, but you can customize them to meet your needs:


  - Deploy an app from a GitHub repository to App Platform.
  - Build an image of your app using Docker and GitHub Container Registry, and then deploy the image to App Platform.
  - Deploy a unique app for each pull request in your repository so that you can test your changes before merging them into your `main` branch.

### 9 August

- [App Platform autoscaling](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#auto-scale) is now available for all customers.


### 8 August

- You can now add and manage internal ports for App Platform service components from the DigitalOcean Control Panel. You can [add internal ports after](https://docs.digitalocean.com/products/app-platform/how-to/manage-internal-routing/#configure-additional-internal-ports) app creation.

- We have updated the following buildpacks for App Platform:


  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): We have added additional Go versions and the default version of Go has been updated for Go v1. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.22.2, go1.22.3, go1.22.4
    - Adds go1.21.9, go1.21.10, go1.21.11
    - Defaults to go1.20.14 when Go version is not specified
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): We have added additional PHP versions. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.3.6 - PHP/8.3.9
    - Adds PHP/8.2.19 - PHP/8.2.21
    - Adds PHP/8.1.28 - PHP/8.1.29
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have added additional Python versions and updated the default version for new apps. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Adds support for Python 3.12.4
      - Default Python version for new apps is now 3.12.4
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): We have added additional Ruby versions and updated the default version for new apps. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Default Ruby version is now 3.1.6
    - Adds Ruby versions 3.3.2, 3.3.3, 3.3.4
    - Adds Ruby versions 3.1.5, 3.1.6
  - [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): We have updated the NodeJS v1 buildpack version to install `devDependencies` by default if `NODE_ENV` is not set. If you don’t want `devDependencies` installed, we recommend setting `NODE_ENV` to `production`.

### 1 August

- We have deprecated the App Platform [List Tiers](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_list_tiers) and [Retrieve App Tiers](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_get_tier) endpoints. We will remove them from the API on 1 September 2024.

- App Platform apps now support [Git Large File Storage (LFS)](https://git-lfs.com/), a Git extension that lets you store large files in Git repositories, even if they are too large to store in a single Git commit.

You can add Git LFS to your app by adding the installation commands to your app’s [run and build commands](https://docs.digitalocean.com/products/app-platform/how-to/build-run-commands/).


## July 2024

### 24 July

- You can now [use DigitalOcean Managed OpenSearch Databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/) with App Platform apps. [OpenSearch databases](https://docs.digitalocean.com/products/databases/opensearch/) provide a centralized location to manage and analyze logs forwarded from other resources.


### 11 July

- We have deprecated the following buildpack versions for App Platform:


  - [Python v1 buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/). If your app uses this buildpack, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
  - JVM v0 buildpack. If your app uses this buildpack, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

## June 2024

### 26 June

- We have updated the default [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) from v0.118.2 to v0.125.2. You can override the default version by setting a `HUGO_VERSION` environment variable.


### 20 June

- You can now [forward logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform app to your [DigitalOcean Managed OpenSearch Cluster](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/). This feature is in beta.


### 18 June

- We have updated the following buildpacks:


  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): Updates to the Ruby v2 buildpack are listed below. If you have an existing Ruby app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Default Ruby version is now 3.1.4
    - Adds Ruby versions 3.2.4, 3.2.3, 3.1.5
    - Adds Ruby versions 3.0.7, 3.3.0, 3.3.1
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated for Go v1. If you have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds go1.21.8, go1.22.0, go1.22.1
    - Adds go1.20.14, go1.21.7
    - Defaults to go1.20.14 when Go version is not specified
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v2 buildpack are listed below. If you have an existing PHP app that uses v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Adds PHP/8.2.18 - PHP/8.2.15
    - Adds PHP/8.3.5 - PHP/8.3.2
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): Updates to the Python v4 buildpack are listed below. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Default Python version for new apps is now 3.12.3
      - Adds support for Python 3.11.9 and 3.12.3
      - Adds support for Python 3.12 and 3.11.6
      - Adds support for Python 3.8.19, 3.9.19 and 3.10.14

### 14 June

- App Platform now offers [static ingress IP addresses for apps](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/#use-public-static-ingress-ip-addresses). You can create DNS records to using these addresses to route traffic directly to your app.


### 5 June

- [You can now add existing Kafka databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/#integrate-an-existing-kafka-database-beta) to App Platform apps. This feature is in beta.


## May 2024

### 23 May

- [OpenSearch](https://opensearch.org/docs/latest/getting-started) log forwarding is now in public beta. This lets you [forward runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) from your App Platform apps to an OpenSearch cluster, where you can analyze and query your app’s logs using OpenSearch’s APIs and dashboards.


### 14 May

- We have deprecated the `prefix` field used for defining allowed origins for CORS in the [App Platform app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/#yaml-file-structure). You can still use the `exact` or `regex` fields to define allowed origins.


### 7 May

- We have released a new catalog of [pricing plans for App Platform](https://docs.digitalocean.com/products/app-platform/details/pricing/#container-pricing). The new plans offer lower pricing on instances with dedicated CPUs and better egress bandwidth allowance. All previous plans will eventually be deprecated. We strongly recommend you use the new plans when creating or upgrading apps.


### 1 May

- We have added minimum and maximum values for the [health check configuration parameters](https://docs.digitalocean.com/products/app-platform/how-to/manage-health-checks/) in App Platform. The new limits are:


  - `initial_delay_seconds`: Minimum 0 seconds, maximum 3600 seconds
  - `period_seconds`: Minimum 1 second, maximum 300 seconds
  - `timeout_seconds`: Minimum 1 second, maximum 120 seconds
  - `success_threshold`: Minimum 1 successful check, maximum 50 successful check
  - `failure_threshold`: Minimum 1 failed check, maximum 50 failed checks

- App Platform [developer databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/) now default to use PostgreSQL 14 upon creation instead of PostgreSQL 12. You can create a database that uses PostgreSQL 16 by specifying the engine version in [your app’s spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/).


## April 2024

### 25 April

- We have updated the [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/). This adds a new version of Ruby, V2, and updates the default version for the buildpack. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/).
\\* Default Ruby version is now 3.1.4
\\* Add Ruby versions 3.2.2, 3.2.1, 3.2.0
\\* Add Ruby versions 2.7.8, 3.0.6, 3.1.4


### 22 April

- You can now add [dedicated egress IP addresses](https://docs.digitalocean.com/products/app-platform/how-to/add-ip-address/) to your apps on App Platform. Dedicated egress IP addresses allow your app to connect to resources outside of DigitalOcean using a publicly available static IP address.


### 12 April

- We have updated the [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/) for App Platform. The buildpack now supports the [PNPM package manager](https://pnpm.io/). For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/).


## March 2024

### 19 March

- [Autoscaling for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/#configure-auto-scaling-for-an-app-using-the-control-panel) is now in [Early Availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary). Autoscaling allows your app to automatically add or remove containers based on the workload across its containers.


## February 2024

### 20 February

- You can now [retrieve crash logs](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/#runtime-logs) for apps in App Platform.


### 7 February

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.118.2 to v0.121.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v4 buildpack version has been released that removes support for Python 3.7. If you are on Ubuntu-22 and have an existing Python app that is on v3, v2, v1 or v0, we recommend [upgrading to v4](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v4:
      - Default Python version is now 3.12.
      - Added support for Python 3.11.7 and 3.12.1.
      - Added support for Python 3.12 and 3.11.6.
      - Dropped support for Python 3.7.
    - Python buildpack v3:
      - Added support for Python 3.12 and 3.11.6.
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.21.1, go1.21.2, go1.21.3, go1.21.4, go1.21.5 and go1.21.6
    - Add go1.20.8, go1.20.9, go1.20.10, go1.20.11, go1.20.12 and go1.20.13
    - Add go1.19.13
    - go1.20 defaults to go1.20.13
    - go1.21 defaults to go1.21.5
    - go1.19 defaults to go1.19.13
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are listed below. If you have an existing PHP app that uses v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.1.26 - PHP/8.1.27
      - Add PHP/8.2.13 - PHP/8.2.14
      - Add PHP/8.3.0 - PHP/8.3.1
      - Add composer/2.6.6

## January 2024

### 17 January

- You can now [deploy apps to App Platform using public and private repositories](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/) on GitHub Container Registry. You can also now deploy images using private Docker Hub repositories.


## December 2023

### 19 December

- Ubuntu-18 will be deprecated for App Platform apps in 2024. We recommended that all apps [upgrade to Ubuntu-22](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) as soon as possible.

We have updated the following buildpacks:


  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to PHP v2 buildpack are listed below. If you are on Ubuntu-22 and have an existing PHP app that is on v0 or v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.2.11 - PHP/8.2.12
      - Add PHP/8.1.24 - PHP/8.1.25
      - Upgrade ext-Redis to 6.0.2
  - [NodeJS buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/): A new NodeJS v1 buildpack version has been released that has an updated default version of NodeJS v20 for Ubuntu-22. If you are on Ubuntu-22 and have an existing NodeJS app that is on v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - NodeJS buildpack v1:
      - Default NodeJS version is now 20.x for Ubuntu-22 apps.

## November 2023

### 16 November

- Ubuntu-18 has been deprecated for App Platform apps. We recommended that all apps [upgrade to Ubuntu-22](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) as soon as possible.

We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.111.3 to v0.118.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): A new Golang v1 buildpack version has been released that removes support for Heroku-18. If you are on Ubuntu-22 and have an existing Go app that uses v0, we recommend [upgrading to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/). For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Golang buildpack v1:
      - Add go1.21.0
      - Add go1.20.3 - go1.20.7
      - Add go1.19.8 - go1.19.12
      - go1.20 defaults to go1.20.7
      - go1.19 defaults to go1.19.12
      - Drop support for heroku-18 stack
    - Golang buildpack v0:
      - Add go1.20.3 and go1.20.4
      - Add go1.19.8 and go1.19.9
      - go1.20 defaults to go1.20.4
      - go1.19 defaults to go1.19.9
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): A new PHP v2 buildpack has been released and updates are listed below. If you are on Ubuntu-22 and have an existing PHP app that is on v0 or v1, we recommend [upgrading to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v2:
      - Add PHP/8.2.5 - PHP/8.2.10
      - Add PHP/8.1.18 - PHP/8.1.10
      - Add PHP/8.0.29 - PHP/8.0.30
      - Drop support for heroku-18 stack
      - Drop support for PHP 7.1 and 7.2
    - PHP buildpack v1:
      - Add PHP/8.2.5
      - Add PHP/8.1.18
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v3 buildpack version has been released that removes support for Heroku-18. If you are on Ubuntu-22 and have an existing Python app that is on v2, v1 or v0, we recommend [upgrading to v3](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v3:
      - Add Python 3.9.17, and 3.9.18
      - Add Python 3.10.12, 3.10.13, 3.11.4, and 3.11.5
      - Default Python version is now 3.11.5.
      - Removed support for Heroku-18.

### 14 November

- The `cors` and `routes` fields under the `services` array in the [App Platform app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) have been deprecated. The `cors` field now resides in the `rules` array of the `ingress` section of the spec. The `routes` field has been replaced by the `match` field in the `rules` array of the `ingress` section of the spec.

- You can now [deploy container images to App Platform using digests](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-container-using-an-image-digest). Digests are immutable references to container images. Unlike tags, digests permanently refer to a specific iteration of an image.

You can only deploy an image using a digest by updating your app’s spec at this time.


## October 2023

### 11 October

- App Platform now supports the [Aptfile buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/aptfile/). The Aptfile buildpack lets you install system-level Ubuntu packages during your app’s build process.


### 3 October

- Ubuntu 22 is now the default stack for all App Platform apps. This upgrade provides security updates, newer versions of buildpacks, and new features, such as upgrading to newer Node.js versions.

You can [downgrade your app’s stack](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) back to Ubuntu 18 if your app experiences compatibility issues.


## September 2023

### 21 September

- App Platform now supports Google Trust as a Certificate Authority.

When [configuring a domain in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/#add-a-domain-that-uses-caa-records), if the domain has a CAA record, you must specify both Google Trust and Let’s Encrypt in the CAA record for App Platform to issue certificates.


## August 2023

### 17 August

- You can now [upgrade your app stacks](https://docs.digitalocean.com/products/app-platform/how-to/change-stack/) to Ubuntu 22 on App Platform. This upgrade provides security updates, newer versions of buildpacks, and new features, such as upgrading to newer Node.js versions.


## April 2023

### 20 April

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.109.0 to v0.111.3. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.20, go1.20.1, and go1.20.2
    - Add go1.19.4, go1.19.5, go1.19.6, and go1.19.7
    - Add go1.18.9, go1.18.10
    - go1.20 defaults to 1.20.2
    - go1.19 defaults to 1.19.7
    - go1.18 defaults to go1.18.10
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are listed below. If you have an existing PHP app that is on v0, please [upgrade to v1](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v1:
      - Add PHP/8.1.17
      - Add PHP/8.0.28
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v2 buildpack version has been released that removes support for Python 3.6. Updates to the Python v1 buildpack are listed below. If you have an existing Python app that is on v1 or v0, please [upgrade to v2](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v2:
      - Drop support for Python 3.6
      - Add Python 3.10.11, 3.10.10, 3.11.3, and 3.11.2
      - Default Python version is now 3.11.3
    - Python buildpack v1:
      - Add Python 3.10.10 and 3.11.2
      - Default Python version is now 3.11.2

## March 2023

### 30 March

- You can now [remap and redirect URL paths](https://docs.digitalocean.com/products/app-platform/how-to/url-rewrites/) in your apps on App Platform. For example, if you have the existing path `/your-app/api/functions/js/post` in your app, you can create a rewrite that masks that path with the simpler path, `/your-app/api/post`. Or you can redirect traffic from a specified path to a different URL on the internet.

Additionally, app routing information is now specified under the `ingress` stanza of [app specs](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).


## November 2022

### 17 November

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.101.0 to v0.104.3. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).

  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).
    - Add go1.19
    - Add go1.19.1
    - Add go1.18.6
    - go1.18 defaults to 1.18.6
    - go1.19 defaults to 1.19.1
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): A new Python v1 buildpack has been released alongside the current v0 buildpack. Existing Python apps will remain on v0, while new apps will start using v1. If you have an existing Python app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - Python buildpack v1:
      - Python 3.7.15, 3.8.15, 3.9.15 and 3.10.8 are now available
      - The default Python version for new apps is now 3.10.8 (previously 3.10.7)
      - Drop support for Python 2.7, 3.4 and 3.5
      - Drop support for PyPy
      - Python 3.7.14, 3.8.14 and 3.9.14 are now available
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): A new PHP v1 buildpack has been released alongside the current v0 buildpack. Existing PHP apps will remain on v0, while new apps will start using v1. If you have an existing PHP app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - PHP buildpack v1:
      - Add PHP/7.4.32
      - Add PHP/8.0.24
      - Add PHP/8.1.11
      - Add Composer/2.4.2
      - Drop support for Composer/1.x.x
  - [Ruby buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/ruby/): A new Ruby v1 buildpack has been released alongside the current v0 buildpack. Existing Ruby apps will remain on v0, while new apps will start using v1. If you have an existing Ruby app, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).
    - Ruby buildpack v1:
      - Default Ruby version is now 3.1.2

### 9 November

- The [DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/) now accepts the YAML `content-type` when [submitting app specs for App Platform](https://docs.digitalocean.com/reference/api/digitalocean/#operation/apps_create).


## September 2022

### 22 September

- App Platform now supports automatically re-deploying apps when updated container images are pushed to DigitalOcean Container Registry. See [How to Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/) for more information.


## August 2022

### 26 August

- In App Platform, you can now create [bindable environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) for your [PostgreSQL database connection pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/). For detailed instructions, see our [reference page](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#databases).


### 4 August

- You can now upgrade your App Platform app’s and its components’ buildpacks to their latest version. For detailed steps, see our guide, [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).


## July 2022

### 18 July

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from 0.99.1 to 0.101.0. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).

  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).
    - Add go1.17.9
    - Add go1.17.10
    - Add go1.18.1
    - Add go1.18.2
    - Add go1.18.3
    - go1.18 defaults to 1.18.3
    - go1.17 defaults to 1.17.10

## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 2 June

- When creating an app, you can add the app to a [project](https://docs.digitalocean.com/products/projects/). If you do not specify a project, it gets assigned to the default project. You can also move an app between projects.

- Starter tier apps now support [rolling back to a previous deployment](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/#roll-back-to-a-previous-deployment).


### 1 June

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from 0.94.2 to 0.99.1. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/#usage).

  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): We have updated the default versions of the following platform tooling:


    - Updated `pip` from 21.3.1 to 22.0.4 for Python 3.7+
    - Updated `setuptools` from 57.5.0 to 59.6.0 for Python 3.6 and 60.10.0 for Python 3.7+
    - Updated `wheel` from 0.37.0 to 0.37.1 for Python 2.7 and Python 3.5+

Python 3.9.13 is now available. The default version remains set to 3.10.4. You can configure the Python version used at runtime by specifying a `runtime.txt` file at the root of your source code. For more information and configuration options, see [the Python Dev Guide](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/).

## May 2022

### 23 May

- A beta of build performance improvements has been added. This functionality leverages [kata-containers technology](https://katacontainers.io/) for improved speed, efficiency, and compatibility.

- [DigitalOcean Functions](https://docs.digitalocean.com/products/functions/) and [functions components in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-functions/) are now in general availability.

Functions are blocks of code that run on demand in response to requests. DigitalOcean Functions let developers execute their code on DigitalOcean without managing compute resources like Droplets or Kubernetes clusters.


## April 2022

### 13 April

- We have updated the default version of Python in the [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/) has been updated from 3.9.9 to 3.10.4. You can configure the Python version used at runtime by specifying a `runtime.txt` file at the root of your source code. For more information and configuration options, see [the Python Dev Guide](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/).


### 7 April

- You can now add new resources and databases when you [create a new App Platform app](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/), instead of adding only to existing apps. The new app creation workflow can now detect multiple app resources.


### 1 April

- We have updated the default version of Hugo in the [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) has been updated from 0.82.0 to 0.94.2. You can override the default version by setting a `HUGO_VERSION` environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/#usage).


## January 2022

### 27 January

- We have updated the following buildpacks:


  - [Hugo buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/): The default version of Hugo has been updated from v0.104.3 to v0.109.0. You can override the default version by setting a HUGO\_VERSION environment variable. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/).
  - [Go buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/): Additional Go versions have been added and default versions of Go have been updated. For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/).

    - Add go1.19.2, and go1.19.3
    - Add go1.18.4, go1.18.5, go1.18.7, and go1.18.8
    - Add go1.17.11, go1.17.12, and go1.17.13
    - go1.19 defaults to go1.19.3
    - go1.18 defaults to go1.18.8
    - go1.17 defaults to go1.17.13
  - [Python buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/): Updates to the Python v1 buildpack are below. If you have an existing Python app that is on v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - Python buildpack v1:
      - Python 3.7.16, 3.8.16, 3.9.16, 3.10.9, and 3.11.1 are now available
      - The default Python version for new apps is now 3.10.9 (previously 3.10.8)
      - Add support for Python 3.11
  - [PHP buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/): Updates to the PHP v1 buildpack are below. If you have an existing PHP app that is on v0, please upgrade to v1, see: [How to Upgrade Buildpacks in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/upgrade-buildpacks/).

    - PHP buildpack v1:
      - Add PHP/7.4.33
      - Add PHP/8.0.25
      - Add PHP/8.1.12

### 6 January

- All DigitalOcean databases now support [App Platform apps as trusted sources](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/), including [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/).


## December 2021

### 3 December

- App Platform now supports [rolling back an app to a previous deployment](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/#roll-back-to-a-previous-deployment) for Basic and Professional tier apps.


## October 2021

### 28 October

- App Platform now supports [forwarding application runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) to [Logtail](https://logtail.com/).


## September 2021

### 30 September

- [App Platform](https://docs.digitalocean.com/products/app-platform/) now supports [forwarding application runtime logs](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/) to external log management providers. Currently, we only support [Papertrail](https://www.papertrail.com/) and [Datadog](https://www.datadoghq.com/).


### 22 September

- App Platform is now available in TOR1 and LON1.


### 20 September

- The [Go](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/) buildpack for App Platform received some updates:

We added support for GO v1.17.1 and v1.16.8

See our [sample Go app](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/go/#usage) for more information on how to implement Go applications on App Platform.


## August 2021

### 20 August

- Released [v1.64.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.64.0), the official DigitalOcean CLI. This release includes support for managing App Platform alerts.


### 18 August

- You can [monitor and set up alerts](https://docs.digitalocean.com/products/app-platform/how-to/create-alerts/) for events for your app and its components using [App Platform](https://docs.digitalocean.com/products/app-platform/).


### 5 August

- [App Platform](https://docs.digitalocean.com/products/app-platform/) now supports [apps as trusted sources for databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/). We support [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/), [MySQL](https://docs.digitalocean.com/products/databases/mysql/), and [Redis](https://docs.digitalocean.com/products/databases/redis/) clusters.


## July 2021

### 9 July

- Released [v1.62.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.62.0), the official DigitalOcean CLI. This release fixes a handful of bugs and introduces new flags on existing commands:


  - The `apps logs` command now supports tailing live logs with the `--tail` flag. This lets application owners select the most recent logs from their applications
  - The `--wait` flag was added to `apps create` and `apps update` to block these commands until an application is fully created or updated

## June 2021

### 25 June

- [App Platform](https://docs.digitalocean.com/products/app-platform/) can now [deploy apps from a monorepo](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/).


### 2 June

- A new [Python + NodeJS](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/python/) group buildpack was added. Python apps can now use NodeJS to render assets during build or as a dependency at runtime.


## February 2021

### 25 February

- The [PHP](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/) buildpack received some updates:


  - Support for PHP 8.x was added in addition to PHP 7.x. By default, App Platform will use PHP 7.x unless the app specifies a version requirement via Composer.
  - Support for Composer 2.x was added in addition to Composer 1.x. App Platform will use the same version of Composer that generated the app’s `composer.lock` file.

For more information and configuration options, see [the buildpack’s documentation page](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/php/#usage).

### 11 February

- App Platform is now available in SGP1 and BLR1.


## January 2021

### 21 January

- App Platform now supports launching components from public DockerHub image sources.


### 5 January

- You can now do the following on [App Platform](https://docs.digitalocean.com/products/app-platform/):


  - [Deploy apps from a registry that has been uploaded to a DigitalOcean Container Registry](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/).

  - Deploy apps from source code contained in a GitLab repository.

  - [Edit CORS policies](https://docs.digitalocean.com/products/app-platform/how-to/configure-cors-policies/) for your app.


## November 2020

### 10 November

- Improved build caching for all App Platform build environments. Dependencies and other data are now cached and reused between builds to improve performance. Dockerfile builds continue to make use of Docker layer caching.

The [Hugo](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/hugo/) buildpack received some updates:


  - The default version has been upgraded to `0.78.0`.
  - Added support for running Hugo as a Service component. The default and recommended behavior is to deploy it as a Static Site.
  - Removed the implicit build command—a build command is now required. Existing apps have had their specs automatically updated.

### 6 November

- We have released a [“Deploy to DigitalOcean” button for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/). You can now embed a button into your GitHub repo or website that allows users to deploy your app directly to DigitalOcean.

We have also released a [jobs feature for App Platform](https://docs.digitalocean.com/products/app-platform/how-to/manage-jobs/). The job feature allows you to run application code at a scheduled time.


## October 2020

### 26 October

- Added support to App Platform for configuring internal [service](https://www.digitalocean.com/products/app-platform/concepts/glossary/service/) ports, as well as internal-only services that are not internet-accessible.

- Added support to App Platform for configuring a catch-all document that can be used by static sites to rewrite all requests to pages that are not found, to the configured document. The `catchall_document` field is similar to `error_document` in that they both rewrite all requests to the specified document, and so they are mutually exclusive, only 1 can be set. Using `catchall_document` will result in 200 HTTP response codes for the rewritten requests, while `error_document` will result in 404 HTTP response codes.


### 15 October

- Added support to App Platform services and static sites for configuring an ingress CORS policy.

- Added support to App Platform for configuring custom wildcard domains.


### 14 October

- Added an App Platform [environment variable binding](https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) with the CA certificate for managed databases in the users account.


### 12 October

- Added an App Platform the [environment variable binding](https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) prefix `_self` that can be used to reference the current component without directly referencing it by component name.


### 9 October

- Launched the App Platform [jobs](https://www.digitalocean.com/products/app-platform/concepts/glossary/job/) component type, with support for running containerized operations before, after, and on failure of deploys.


### 6 October

- [App Platform](https://docs.digitalocean.com/products/app-platform/), our new platform as a service (PaaS) offering, is now in General Availability. Hook a GitHub repo to DigitalOcean and let App Platform automatically build and deploy your commits live to the cloud. [Read the quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/) or [try it now](https://cloud.digitalocean.com/apps/new).

- Released [v1.48.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.48.0), the official DigitalOcean CLI. This release promotes `doctl apps` commands with support for DigitalOcean [App Platform](https://www.digitalocean.com/products/app-platform/) to General Availability.


## July 2020

### 28 July

- [App Platform](https://docs.digitalocean.com/products/app-platform/) is now in beta.


In this article...

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